import os
import base64

assets_dir = os.path.join(os.path.dirname(__file__), 'src', 'assets')
missing = [
    'about-bg.png', 'about-bg2.png', 'globe.png', 'illustration.png',
    'icon1.png', 'icon2.png', 'icon3.png', 'work1.png', 'work2.png',
    'bg.png', 'ourImpact-bg.png', 'ourImapct.png', 'value1.png',
    'value2.png', 'value3.png', 'value4.png', 'Group 424.png', 'health.png',
    'agri.png', 'climate2.png', 'green-coluan.png', 'founder.png',
    'green-shape.png', 'bulb.png', 'mentor.png', 'semi.png'
]

png = base64.b64decode(
    'iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8Xw8AAn4B9m8b/QAAAABJRU5ErkJggg=='
)

for name in missing:
    path = os.path.join(assets_dir, name)
    if not os.path.exists(path):
        with open(path, 'wb') as f:
            f.write(png)
        print('created', name)
    else:
        print('exists', name)
