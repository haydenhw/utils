const stories = {
  "formatVersion": 3,
  "id": "root",
  "ideas": {
    "1": {
      "title": "LQ Stories",
      "id": 1,
      "attr": {
        "position": [
          185,
          -157,
          1
        ]
      },
      "ideas": {
        "1": {
          "title": "Control Actuators",
          "id": "3.6a3a.0f90d9b6b-8b34.8a13e839e",
          "ideas": {
            "1": {
              "title": "Control Air, Lamp, Heater",
              "id": "4.6a3a.0f90d9b6b-8b34.8a13e839e",
              "ideas": {}
            },
            "2": {
              "title": "Load Water / Extract Broth",
              "id": "5.6a3a.0f90d9b6b-8b34.8a13e839e",
              "ideas": {
                "1": {
                  "title": "Set speed",
                  "id": "6.6a3a.0f90d9b6b-8b34.8a13e839e"
                }
              }
            }
          }
        },
        "2": {
          "title": "Create, Update, Delete Reactions",
          "id": "9.6a3a.0f90d9b6b-8b34.8a13e839e",
          "ideas": {
            "1": {
              "title": "Add / Edit notes",
              "id": "11.6a3a.0f90d9b6b-8b34.8a13e839e"
            },
            "2": {
              "title": "Add / Edit Media Desciption",
              "id": "12.6a3a.0f90d9b6b-8b34.8a13e839e"
            }
          }
        },
        "3": {
          "title": "Graph temp history",
          "id": "15.6a3a.0f90d9b6b-8b34.8a13e839e"
        },
        "13": {
          "title": "Graph OD history",
          "id": "17.6a3a.0f90d9b6b-8b34.8a13e839e"
        },
        "-1": {
          "title": "Style",
          "id": "8.6a3a.0f90d9b6b-8b34.8a13e839e",
          "ideas": {
            "1": {
              "title": "Login Screen",
              "id": "18.6a3a.0f90d9b6b-8b34.8a13e839e"
            },
            "2": {
              "title": "Control Screen",
              "id": "19.6a3a.0f90d9b6b-8b34.8a13e839e"
            },
            "3": {
              "title": "Dashboard Screen",
              "id": "20.6a3a.0f90d9b6b-8b34.8a13e839e"
            }
          }
        },
        "-2": {
          "title": "Display sensor values",
          "id": "13.6a3a.0f90d9b6b-8b34.8a13e839e",
          "ideas": {
            "1": {
              "title": "Adjust read interval",
              "id": "7.6a3a.0f90d9b6b-8b34.8a13e839e",
              "attr": {}
            }
          }
        }
      }
    }
  },
  "title": "LQ Stories",
  "theme": {
    "name": "MindMup Default",
    "node": [
      {
        "name": "default",
        "cornerRadius": 10,
        "backgroundColor": "#E0E0E0",
        "border": {
          "type": "surround",
          "line": {
            "color": "#707070",
            "width": 1,
            "style": "solid"
          }
        },
        "shadow": [
          {
            "color": "#070707",
            "opacity": 0.4,
            "offset": {
              "width": 2,
              "height": 2
            },
            "radius": 2
          }
        ],
        "text": {
          "margin": 5,
          "alignment": "center",
          "maxWidth": 146,
          "color": "#4F4F4F",
          "lightColor": "#EEEEEE",
          "darkColor": "#000000",
          "font": {
            "lineSpacing": 4.5,
            "lineSpacingPx": 6,
            "size": 9,
            "sizePx": 12,
            "weight": "bold"
          }
        },
        "connections": {
          "default": {
            "h": "center",
            "v": "center"
          },
          "from": {
            "horizontal": {
              "h": "nearest-inset",
              "v": "center"
            }
          },
          "to": {
            "h": "nearest",
            "v": "center"
          }
        },
        "decorations": {
          "height": 20,
          "edge": "top",
          "overlap": true,
          "position": "end",
          "margin": 2,
          "label": {
            "border": 1,
            "cornerRadius": 11,
            "margin": 2,
            "font": {
              "lineSpacing": 0,
              "lineSpacingPx": 0,
              "size": 9,
              "sizePx": 12,
              "weight": "bold"
            }
          },
          "cornerRadius": 12,
          "backgroundColor": "#22aae0",
          "opacity": 0.8,
          "color": "#ffffff"
        }
      },
      {
        "name": "level_1",
        "backgroundColor": "#22AAE0"
      },
      {
        "name": "activated",
        "border": {
          "type": "surround",
          "line": {
            "color": "#22AAE0",
            "width": 3,
            "style": "dotted"
          }
        }
      },
      {
        "name": "level_1.activated",
        "border": {
          "type": "surround",
          "line": {
            "color": "#EEEEEE",
            "width": 3,
            "style": "dotted"
          }
        }
      },
      {
        "name": "selected",
        "shadow": [
          {
            "color": "#000000",
            "opacity": 0.9,
            "offset": {
              "width": 2,
              "height": 2
            },
            "radius": 2
          }
        ]
      },
      {
        "name": "collapsed",
        "shadow": [
          {
            "color": "#888888",
            "offset": {
              "width": 0,
              "height": 1
            },
            "radius": 0
          },
          {
            "color": "#FFFFFF",
            "offset": {
              "width": 0,
              "height": 3
            },
            "radius": 0
          },
          {
            "color": "#888888",
            "offset": {
              "width": 0,
              "height": 4
            },
            "radius": 0
          },
          {
            "color": "#FFFFFF",
            "offset": {
              "width": 0,
              "height": 6
            },
            "radius": 0
          },
          {
            "color": "#888888",
            "offset": {
              "width": 0,
              "height": 7
            },
            "radius": 0
          }
        ]
      },
      {
        "name": "collapsed.selected",
        "shadow": [
          {
            "color": "#FFFFFF",
            "offset": {
              "width": 0,
              "height": 1
            },
            "radius": 0
          },
          {
            "color": "#888888",
            "offset": {
              "width": 0,
              "height": 3
            },
            "radius": 0
          },
          {
            "color": "#FFFFFF",
            "offset": {
              "width": 0,
              "height": 6
            },
            "radius": 0
          },
          {
            "color": "#555555",
            "offset": {
              "width": 0,
              "height": 7
            },
            "radius": 0
          },
          {
            "color": "#FFFFFF",
            "offset": {
              "width": 0,
              "height": 10
            },
            "radius": 0
          },
          {
            "color": "#333333",
            "offset": {
              "width": 0,
              "height": 11
            },
            "radius": 0
          }
        ]
      }
    ],
    "connector": {
      "default": {
        "type": "quadratic",
        "controlPoint": {
          "above": {
            "width": 0,
            "height": 0.75
          },
          "below": {
            "width": 0,
            "height": 0.75
          },
          "horizontal": {
            "width": 0,
            "height": 0
          }
        },
        "label": {
          "position": {
            "ratio": 0.5
          },
          "backgroundColor": "transparent",
          "borderColor": "transparent",
          "text": {
            "color": "#4F4F4F",
            "font": {
              "size": 9,
              "sizePx": 12,
              "weight": "normal"
            }
          }
        },
        "line": {
          "color": "#707070",
          "width": 1
        }
      }
    },
    "link": {
      "default": {
        "line": {
          "color": "red",
          "lineStyle": "dashed",
          "width": 1
        },
        "label": {
          "position": {
            "ratio": 0.5
          },
          "backgroundColor": "#FFFFFF",
          "borderColor": "#FFFFFF",
          "text": {
            "color": "#4F4F4F",
            "font": {
              "size": 9,
              "sizePx": 12,
              "weight": "normal"
            }
          }
        }
      }
    }
  }
}

module.exports = stories;