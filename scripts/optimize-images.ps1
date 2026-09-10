# Resize large gallery/hero JPEGs to a web-friendly size (max edge 1600px, quality 82).
# Uses System.Drawing, available on Windows PowerShell without extra dependencies.
Add-Type -AssemblyName System.Drawing

$ErrorActionPreference = 'Stop'
$root = Split-Path -Parent $PSScriptRoot
$imagesDir = Join-Path $root 'public\images'
$maxEdge = 1600
$quality = 82L

$encoder = [System.Drawing.Imaging.ImageCodecInfo]::GetImageEncoders() | Where-Object { $_.MimeType -eq 'image/jpeg' }
$params = New-Object System.Drawing.Imaging.EncoderParameters(1)
$params.Param[0] = New-Object System.Drawing.Imaging.EncoderParameter([System.Drawing.Imaging.Encoder]::Quality, $quality)

Get-ChildItem -Path $imagesDir -Filter *.jpg | ForEach-Object {
    $file = $_.FullName
    $img = [System.Drawing.Image]::FromFile($file)
    $scale = [Math]::Min(1.0, $maxEdge / [Math]::Max($img.Width, $img.Height))
    if ($scale -lt 1.0) {
        $newW = [int][Math]::Round($img.Width * $scale)
        $newH = [int][Math]::Round($img.Height * $scale)
        $bmp = New-Object System.Drawing.Bitmap($newW, $newH)
        $g = [System.Drawing.Graphics]::FromImage($bmp)
        $g.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
        $g.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::HighQuality
        $g.PixelOffsetMode = [System.Drawing.Drawing2D.PixelOffsetMode]::HighQuality
        $g.DrawImage($img, 0, 0, $newW, $newH)
        $g.Dispose()
        $img.Dispose()
        $tmp = "$file.tmp"
        $bmp.Save($tmp, $encoder, $params)
        $bmp.Dispose()
        Move-Item -LiteralPath $tmp -Destination $file -Force
        Write-Host ("Resized {0} -> {1}x{2} ({3:N0} bytes)" -f $_.Name, $newW, $newH, (Get-Item $file).Length)
    }
    else {
        Write-Host ("Skipped {0} ({1}x{2}, already small)" -f $_.Name, $img.Width, $img.Height)
        $img.Dispose()
    }
}
