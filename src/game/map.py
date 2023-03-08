# import json
# from PIL import Image;
#
# img = Image.open('map.png')
# pix = img.load()
#
# WIDTH = 500
# HEIGHT = 500
#
# result = []
#
# for i in range (0, HEIGHT):
#     row = []
#     for j in range (0, WIDTH):
#         row.append(dict(type="", passable=pix[i,j] == 0))
#     result.append(row)
#
# f = open('map.json', 'w')
# f.write(json.dumps(dict(mapSize=dict(width=WIDTH, height=HEIGHT), tiles=result)))