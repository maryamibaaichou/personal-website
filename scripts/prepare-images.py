"""Builds web-ready images from the original portrait (maryam.png).

The portrait is only cropped and resized; pixels are never altered.

Run: python scripts/prepare-images.py   (requires Pillow)
"""

from pathlib import Path

from PIL import Image, ImageDraw, ImageFont

ROOT = Path(__file__).resolve().parent.parent
SOURCE = ROOT / "maryam.png"
OUT = ROOT / "public" / "images"
OUT.mkdir(parents=True, exist_ok=True)

BURGUNDY = (68, 9, 21)
PAPER = (246, 242, 236)


def portrait() -> None:
    im = Image.open(SOURCE).convert("RGB")
    w, h = im.size
    crop_w = round(h * 4 / 5)
    left = round((w - crop_w) / 2) - 20
    im = im.crop((left, 0, left + crop_w, h))
    for width in (640, 960):
        resized = im.resize((width, round(width * 5 / 4)), Image.LANCZOS)
        resized.save(OUT / f"maryam-portrait-{width}.jpg", quality=86, optimize=True, progressive=True)
        resized.save(OUT / f"maryam-portrait-{width}.webp", quality=84, method=6)


def og_image() -> None:
    photo = Image.open(SOURCE).convert("RGB").resize((630, 630), Image.LANCZOS)
    edge = photo.crop((0, 0, 8, 630)).resize((1, 1), Image.LANCZOS).getpixel((0, 0))
    canvas = Image.new("RGB", (1200, 630), edge)
    fade = Image.linear_gradient("L").rotate(90).resize((630, 630))
    # Fade only the outer ~70px of plain background so the subject is never blended.
    fade = fade.point(lambda v: 255 if v < 226 else int((255 - v) * 255 / 29))
    fade = fade.transpose(Image.FLIP_LEFT_RIGHT)
    canvas.paste(photo, (1200 - 630 + 40, 0), fade)

    draw = ImageDraw.Draw(canvas)
    serif = "/System/Library/Fonts/NewYork.ttf"
    sans = "/System/Library/Fonts/HelveticaNeue.ttc"
    name_font = ImageFont.truetype(sans, 26)
    head_font = ImageFont.truetype(serif, 56)
    small_font = ImageFont.truetype(sans, 22)

    draw.text((72, 84), "MARYAM IBAAICHOU", font=name_font, fill=PAPER)
    lines = ["Building AI products", "that solve real", "human problems."]
    y = 190
    for line in lines:
        draw.text((72, y), line, font=head_font, fill=PAPER)
        y += 70
    draw.text((72, 520), "AI  ×  Product  ×  Software  ×  Humans", font=small_font, fill=(220, 196, 200))
    canvas.save(ROOT / "public" / "og.jpg", quality=88, optimize=True)


if __name__ == "__main__":
    portrait()
    og_image()
    print("done")
