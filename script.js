var Painterro;
Painterro = function() {
  var t = {
      794: function(t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
          value: !0
        }), e.HexToRGB = a, e.HexToRGBA = l, e.rgbToHex = s, e.default = void 0;
        var r = n(784),
          o = n(564);

        function i(t, e) {
          for (var n = 0; n < e.length; n++) {
            var r = e[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
          }
        }

        function a(t) {
          var e = /^#?([a-fA-F\d]{2})([a-fA-F\d]{2})([a-fA-F\d]{2})$/i.exec(t);
          return e ? {
            r: parseInt(e[1], 16),
            g: parseInt(e[2], 16),
            b: parseInt(e[3], 16)
          } : (e = /^#?([a-fA-F\d])([a-fA-F\d])([a-fA-F\d])$/i.exec(t)) ? {
            r: parseInt(e[1].repeat(2), 16),
            g: parseInt(e[2].repeat(2), 16),
            b: parseInt(e[3].repeat(2), 16)
          } : void 0
        }

        function l(t, e) {
          var n = a(t);
          return "rgba(".concat(n.r, ",").concat(n.g, ",").concat(n.b, ",").concat(e, ")")
        }

        function A(t) {
          var e = t.toString(16);
          return 1 === e.length && "0".concat(e) || e
        }

        function s(t, e, n) {
          return "#".concat(A(t)).concat(A(e)).concat(A(n))
        }
        var c = function() {
          function t(e, n) {
            var r = this;
            ! function(t, e) {
              if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }(this, t), this.callback = n, this.main = e, this.w = 180, this.h = 150;
            var o = this.w,
              i = this.h;
            this.lightPosition = this.w - 1, this.wrapper = e.wrapper.querySelector(".ptro-color-widget-wrapper"), this.input = e.wrapper.querySelector(".ptro-color-widget-wrapper .ptro-color"), this.pipetteButton = e.wrapper.querySelector(".ptro-color-widget-wrapper button.ptro-pipette"), this.closeButton = e.wrapper.querySelector(".ptro-color-widget-wrapper button.ptro-close-color-picker"), this.canvas = e.wrapper.querySelector(".ptro-color-widget-wrapper canvas"), this.ctx = this.canvas.getContext("2d"), this.canvasLight = e.wrapper.querySelector(".ptro-color-widget-wrapper .ptro-canvas-light"), this.colorRegulator = e.wrapper.querySelector(".ptro-color-widget-wrapper .ptro-color-light-regulator"), this.canvasAlpha = e.wrapper.querySelector(".ptro-color-widget-wrapper .ptro-canvas-alpha"), this.alphaRegulator = e.wrapper.querySelector(".ptro-color-widget-wrapper .ptro-color-alpha-regulator"), this.ctxLight = this.canvasLight.getContext("2d"), this.ctxAlpha = this.canvasAlpha.getContext("2d"), this.canvas.setAttribute("width", "".concat(o)), this.canvas.setAttribute("height", "".concat(i)), this.canvasLight.setAttribute("width", "".concat(o)), this.canvasLight.setAttribute("height", "".concat(20)), this.canvasAlpha.setAttribute("width", "".concat(o)), this.canvasAlpha.setAttribute("height", "".concat(20));
            var a = this.ctx.createLinearGradient(0, 0, o, 0);
            a.addColorStop(1 / 15, "#ff0000"), a.addColorStop(4 / 15, "#ffff00"), a.addColorStop(5 / 15, "#00ff00"), a.addColorStop(.6, "#00ffff"), a.addColorStop(.8, "#0000ff"), a.addColorStop(14 / 15, "#ff00ff"), this.ctx.fillStyle = a, this.ctx.fillRect(0, 0, o, i);
            var l = this.ctx.createLinearGradient(0, 0, 0, i);
            l.addColorStop(0, "rgba(0, 0, 0, 0)"), l.addColorStop(.99, "rgba(0, 0, 0, 1)"), l.addColorStop(1, "rgba(0, 0, 0, 1)"), this.ctx.fillStyle = l, this.ctx.fillRect(0, 0, o, i), this.closeButton.onclick = function() {
              r.close()
            }, this.pipetteButton.onclick = function() {
              r.wrapper.setAttribute("hidden", "true"), r.opened = !1, r.choosing = !0
            }, this.input.onkeyup = function() {
              r.setActiveColor(r.input.value, !0)
            }
          }
          var e, n, A;
          return e = t, A = [{
            key: "html",
            value: function() {
              return '<div class="ptro-color-widget-wrapper ptro-common-widget-wrapper ptro-v-middle" hidden><div class="ptro-pallet ptro-color-main ptro-v-middle-in"><canvas></canvas><canvas class="ptro-canvas-light"></canvas><span class="ptro-color-light-regulator ptro-bordered-control"></span><canvas class="ptro-canvas-alpha"></canvas><span class="alpha-checkers"></span><span class="ptro-color-alpha-regulator ptro-bordered-control"></span><div class="ptro-colors"></div><div class="ptro-color-edit"><button type="button" class="ptro-icon-btn ptro-pipette ptro-color-control" style="float: left; margin-right: 5px"><i class="ptro-icon ptro-icon-pipette"></i></button><input class="ptro-input ptro-color" type="text" size="7"/><button type="button" class="ptro-named-btn ptro-close-color-picker ptro-color-control" >' + "".concat((0, r.tr)("close"), "</button>") + "</div></div></div>"
            }
          }], (n = [{
            key: "open",
            value: function(t, e) {
              this.target = t.target, this.palleteColor = t.palleteColor, this.alpha = t.alpha, this.lightPosition = this.lightPosition || this.w - 1, this.drawLighter(), this.colorRegulator.style.left = "".concat(this.lightPosition, "px"), this.alphaRegulator.style.left = "".concat(Math.round(this.alpha * this.w), "px"), this.regetColor(), this.wrapper.removeAttribute("hidden"), this.opened = !0, this.addCallback = e
            }
          }, {
            key: "close",
            value: function() {
              this.wrapper.setAttribute("hidden", "true"), this.opened = !1
            }
          }, {
            key: "getPaletteColorAtPoint",
            value: function(t) {
              var e = t.clientX - this.canvas.documentOffsetLeft,
                n = t.clientY - this.canvas.documentOffsetTop;
              n = n < 1 ? 1 : n, e = (e = e < 1 ? 1 : e) > this.w && this.w - 1 || e, n = n > this.h && this.h - 1 || n;
              var r = this.ctx.getImageData(e, n, 1, 1).data;
              this.palleteColor = s(r[0], r[1], r[2]), this.drawLighter(), this.regetColor()
            }
          }, {
            key: "regetColor",
            value: function() {
              var t = this.ctxLight.getImageData(this.lightPosition, 5, 1, 1).data;
              this.setActiveColor(s(t[0], t[1], t[2])), this.drawAlpher()
            }
          }, {
            key: "regetAlpha",
            value: function() {
              var t = this.ctxAlpha.getImageData(this.alphaPosition, 5, 1, 1).data;
              this.alpha = t[3] / 255, this.setActiveColor(this.color, !0)
            }
          }, {
            key: "getColorLightAtClick",
            value: function(t) {
              var e = t.clientX - this.canvasLight.documentOffsetLeft;
              e = (e = e < 1 ? 1 : e) > this.w - 1 && this.w - 1 || e, this.lightPosition = e, this.colorRegulator.style.left = "".concat(e, "px"), this.regetColor()
            }
          }, {
            key: "getAlphaAtClick",
            value: function(t) {
              var e = t.clientX - this.canvasAlpha.documentOffsetLeft;
              e = (e = e < 1 ? 1 : e) > this.w - 1 && this.w - 1 || e, this.alphaPosition = e, this.alphaRegulator.style.left = "".concat(e, "px"), this.regetAlpha()
            }
          }, {
            key: "handleKeyDown",
            value: function(t) {
              return !(!this.opened || t.keyCode !== o.KEYS.enter) || !(!this.opened || t.keyCode !== o.KEYS.esc) && (this.close(), !0)
            }
          }, {
            key: "handleMouseDown",
            value: function(t) {
              return this.choosing && 2 !== t.button ? (this.choosingActive = !0, this.handleMouseMove(t), !0) : (this.choosing = !1, t.target === this.canvas && (this.selecting = !0, this.getPaletteColorAtPoint(t)), t.target !== this.canvasLight && t.target !== this.colorRegulator || (this.lightSelecting = !0, this.getColorLightAtClick(t)), t.target !== this.canvasAlpha && t.target !== this.alphaRegulator || (this.alphaSelecting = !0, this.getAlphaAtClick(t)), !1)
            }
          }, {
            key: "handleMouseMove",
            value: function(t) {
              if (this.opened) this.selecting && this.getPaletteColorAtPoint(t), this.lightSelecting && this.getColorLightAtClick(t), this.alphaSelecting && this.getAlphaAtClick(t);
              else if (this.choosingActive) {
                var e = this.main.getScale(),
                  n = (t.clientX - this.main.elLeft() + this.main.scroller.scrollLeft) * e;
                n = (n = n < 1 ? 1 : n) > this.main.size.w - 1 && this.main.size.w - 1 || n;
                var r = (t.clientY - this.main.elTop() + this.main.scroller.scrollTop) * e;
                r = (r = r < 1 ? 1 : r) > this.main.size.h - 1 && this.main.size.h - 1 || r;
                var o = this.main.ctx.getImageData(n, r, 1, 1).data,
                  i = s(o[0], o[1], o[2]);
                this.callback({
                  alphaColor: l(i, 1),
                  lightPosition: this.w - 1,
                  alpha: 1,
                  palleteColor: i,
                  target: this.target
                }), void 0 !== this.addCallback && this.addCallback({
                  alphaColor: l(i, 1),
                  lightPosition: this.w - 1,
                  alpha: 1,
                  palleteColor: i,
                  target: this.target
                })
              }
            }
          }, {
            key: "handleMouseUp",
            value: function() {
              this.selecting = !1, this.lightSelecting = !1, this.choosing = !1, this.choosingActive = !1, this.alphaSelecting = !1, this.main.zoomHelper.hideZoomHelper()
            }
          }, {
            key: "setActiveColor",
            value: function(t, e) {
              try {
                this.input.style.color = function(t) {
                  var e = a(t);
                  return (299 * e.r + 587 * e.g + 114 * e.b) / 1e3 >= 128 ? "black" : "white"
                }(t)
              } catch (t) {
                return
              }
              this.input.style["background-color"] = t, void 0 === e && (this.input.value = t), this.color = t, this.alphaColor = l(t, this.alpha), void 0 !== this.callback && this.opened && this.callback({
                alphaColor: this.alphaColor,
                lightPosition: this.lightPosition,
                alpha: this.alpha,
                palleteColor: this.color,
                target: this.target
              }), void 0 !== this.addCallback && this.opened && this.addCallback({
                alphaColor: this.alphaColor,
                lightPosition: this.lightPosition,
                alpha: this.alpha,
                palleteColor: this.color,
                target: this.target
              })
            }
          }, {
            key: "drawLighter",
            value: function() {
              var t = this.ctxLight.createLinearGradient(0, 0, this.w, 0);
              t.addColorStop(0, "#ffffff"), t.addColorStop(.05, "#ffffff"), t.addColorStop(.95, this.palleteColor), t.addColorStop(1, this.palleteColor), this.ctxLight.fillStyle = t, this.ctxLight.fillRect(0, 0, this.w, 15)
            }
          }, {
            key: "drawAlpher",
            value: function() {
              this.ctxAlpha.clearRect(0, 0, this.w, 15);
              var t = this.ctxAlpha.createLinearGradient(0, 0, this.w, 0);
              t.addColorStop(0, "rgba(255,255,255,0)"), t.addColorStop(.05, "rgba(255,255,255,0)"), t.addColorStop(.95, this.color), t.addColorStop(1, this.color), this.ctxAlpha.fillStyle = t, this.ctxAlpha.fillRect(0, 0, this.w, 15)
            }
          }]) && i(e.prototype, n), A && i(e, A), t
        }();
        e.default = c
      },
      198: function(t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
          value: !0
        }), e.default = void 0;
        var r = n(927);

        function o(t, e) {
          for (var n = 0; n < e.length; n++) {
            var r = e[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
          }
        }
        var i = function() {
          function t(e) {
            ! function(t, e) {
              if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }(this, t), this.main = e
          }
          var e, n, i;
          return e = t, i = [{
            key: "buildInputControl",
            value: function(t, e, n, r, o) {
              return {
                type: "int",
                title: t,
                titleFull: "".concat(t, "Full"),
                target: t,
                min: r,
                max: o,
                action: e,
                getValue: n
              }
            }
          }, {
            key: "buildDropDownControl",
            value: function(t, e, n, r) {
              return {
                type: "dropdown",
                title: t,
                titleFull: "".concat(t, "Full"),
                target: t,
                action: e,
                getValue: n,
                getAvailableValues: function() {
                  return r.map((function(t) {
                    return {
                      value: t,
                      name: t.toString(),
                      title: t.toString()
                    }
                  }))
                }
              }
            }
          }], (n = [{
            key: "buildFontSizeControl",
            value: function(e) {
              var n = this,
                o = function() {
                  var t = n.main.getElemByIdSafe(n.main.activeTool.controls[e].id).value;
                  n.main.textTool.setFontSize(t), (0, r.setParam)("defaultFontSize", t)
                },
                i = function() {
                  return n.main.textTool.fontSize
                };
              return this.main.params.availableFontSizes ? t.buildDropDownControl("fontSize", o, i, this.main.params.availableFontSizes) : t.buildInputControl("fontSize", o, i, 1, 200)
            }
          }, {
            key: "buildEraserWidthControl",
            value: function(e) {
              var n = this,
                o = function() {
                  var t = n.main.getElemByIdSafe(n.main.activeTool.controls[e].id).value;
                  n.main.primitiveTool.setEraserWidth(t), (0, r.setParam)("defaultEraserWidth", t)
                },
                i = function() {
                  return n.main.primitiveTool.eraserWidth
                };
              return this.main.params.availableEraserWidths ? t.buildDropDownControl("eraserWidth", o, i, this.main.params.availableEraserWidths) : t.buildInputControl("eraserWidth", o, i, 1, 99)
            }
          }, {
            key: "buildLineWidthControl",
            value: function(e) {
              var n = this,
                o = function() {
                  var t = n.main.getElemByIdSafe(n.main.activeTool.controls[e].id).value;
                  n.main.primitiveTool.setLineWidth(t), (0, r.setParam)("defaultLineWidth", t)
                },
                i = function() {
                  return n.main.primitiveTool.lineWidth
                };
              return this.main.params.availableLineWidths ? t.buildDropDownControl("lineWidth", o, i, this.main.params.availableLineWidths) : t.buildInputControl("lineWidth", o, i, 0, 99)
            }
          }, {
            key: "buildShadowOnControl",
            value: function(t) {
              var e = this;
              return {
                type: "bool",
                title: "shadowOn",
                titleFull: "shadowOnFull",
                target: "shadowOn",
                action: function() {
                  var n = e.main.getElemByIdSafe(e.main.activeTool.controls[t].id),
                    o = !("true" === n.getAttribute("data-value"));
                  e.main.primitiveTool.setShadowOn(o), n.setAttribute("data-value", o ? "true" : "false"), (0, r.setParam)("defaultPrimitiveShadowOn", o)
                },
                getValue: function() {
                  return e.main.primitiveTool.shadowOn
                }
              }
            }
          }, {
            key: "buildPaintBucketControl",
            value: function(e) {
              var n = this;
              return t.buildInputControl("lineWidth", (function() {
                var t = document.getElementById(n.main.activeTool.controls[e].id).value;
                console.log("buildPaintBucketControl width: " + t), (0, r.setParam)("activeFillColor", t)
              }), (function() {
                return n.main.primitiveTool.lineWidth
              }), 1, 99)
            }
          }, {
            key: "buildArrowLengthControl",
            value: function(e) {
              var n = this,
                o = function() {
                  var t = n.main.getElemByIdSafe(n.main.activeTool.controls[e].id).value;
                  n.main.primitiveTool.setArrowLength(t), (0, r.setParam)("defaultArrowLength", t)
                },
                i = function() {
                  return n.main.primitiveTool.arrowLength
                };
              return this.main.params.availableArrowLengths ? t.buildDropDownControl("arrowLength", o, i, this.main.params.availableArrowLengths) : t.buildInputControl("arrowLength", o, i, 1, 99)
            }
          }]) && o(e.prototype, n), i && o(e, i), t
        }();
        e.default = i
      },
      840: function(t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
          value: !0
        }), e.default = void 0;
        var r = n(784),
          o = n(564);

        function i(t, e) {
          for (var n = 0; n < e.length; n++) {
            var r = e[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
          }
        }
        var a = function() {
          function t(e) {
            var n = this;
            ! function(t, e) {
              if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }(this, t), this.main = e;
            var r = {
                extend_top: {
                  internalName: "extend_top",
                  handle: function(t) {
                    n.tmpImg = t;
                    var e = n.main.size.h,
                      r = n.main.size.w,
                      o = e + t.naturalHeight,
                      i = Math.max(r, t.naturalWidth),
                      a = n.ctx.getImageData(0, 0, n.main.size.w, n.main.size.h);
                    if (n.main.resize(i, o), n.main.clearBackground(), n.ctx.putImageData(a, 0, t.naturalHeight), n.main.adjustSizeFull(), t.naturalWidth < r) {
                      var l = Math.round((r - t.naturalWidth) / 2);
                      n.main.select.placeAt(l, 0, l, e, t)
                    } else n.main.select.placeAt(0, 0, 0, e, t);
                    n.worklog.captureState()
                  }
                },
                extend_left: {
                  internalName: "extend_left",
                  handle: function(t) {
                    n.tmpImg = t;
                    var e = n.main.size.h,
                      r = n.main.size.w,
                      o = r + t.naturalWidth,
                      i = Math.max(e, t.naturalHeight),
                      a = n.ctx.getImageData(0, 0, n.main.size.w, n.main.size.h);
                    if (n.main.resize(o, i), n.main.clearBackground(), n.ctx.putImageData(a, t.naturalWidth, 0), n.main.adjustSizeFull(), t.naturalHeight < e) {
                      var l = Math.round((e - t.naturalHeight) / 2);
                      n.main.select.placeAt(0, l, r, l, t)
                    } else n.main.select.placeAt(0, 0, r, 0, t);
                    n.worklog.captureState()
                  }
                },
                extend_right: {
                  internalName: "extend_right",
                  handle: function(t) {
                    n.tmpImg = t;
                    var e = n.main.size.h,
                      r = n.main.size.w,
                      o = r + t.naturalWidth,
                      i = Math.max(e, t.naturalHeight),
                      a = n.ctx.getImageData(0, 0, n.main.size.w, n.main.size.h);
                    if (n.main.resize(o, i), n.main.clearBackground(), n.ctx.putImageData(a, 0, 0), n.main.adjustSizeFull(), t.naturalHeight < e) {
                      var l = Math.round((e - t.naturalHeight) / 2);
                      n.main.select.placeAt(r, l, 0, l, t)
                    } else n.main.select.placeAt(r, 0, 0, 0, t);
                    n.worklog.captureState()
                  }
                },
                extend_down: {
                  internalName: "extend_down",
                  handle: function(t) {
                    n.tmpImg = t;
                    var e = n.main.size.h,
                      r = n.main.size.w,
                      o = e + t.naturalHeight,
                      i = Math.max(r, t.naturalWidth),
                      a = n.ctx.getImageData(0, 0, n.main.size.w, n.main.size.h);
                    if (n.main.resize(i, o), n.main.clearBackground(), n.ctx.putImageData(a, 0, 0), n.main.adjustSizeFull(), t.naturalWidth < r) {
                      var l = Math.round((r - t.naturalWidth) / 2);
                      n.main.select.placeAt(l, e, l, 0, t)
                    } else n.main.select.placeAt(0, e, 0, 0, t);
                    n.worklog.captureState()
                  }
                }
              },
              o = {
                replace_all: {
                  internalName: "fit",
                  handle: function(t) {
                    n.main.params.backplateImgUrl && (n.main.params.backplateImgUrl = void 0, n.main.tabelCell.style.background = "", n.main.canvas.style.backgroundColor = "".concat(n.main.params.backgroundFillColor, "ff"), n.pasteOptions = Object.assign({}, o, r), n.activeOption = n.pasteOptions, n.main.wrapper.querySelector(".ptro-paster-select-wrapper").remove(), n.main.wrapper.insertAdjacentHTML("beforeend", n.html()), n.init(e)), n.main.fitImage(t, n.mimetype)
                  }
                },
                paste_over: {
                  internalName: "over",
                  handle: function(t) {
                    n.tmpImg = t;
                    var e = n.main.size.h,
                      r = n.main.size.w;
                    if (t.naturalHeight <= e && t.naturalWidth <= r) n.main.select.placeAt(0, 0, r - t.naturalWidth, e - t.naturalHeight, t);
                    else if (t.naturalWidth / t.naturalHeight > r / e) {
                      var o = r * (t.naturalHeight / t.naturalWidth);
                      n.main.select.placeAt(0, 0, 0, e - o, t)
                    } else {
                      var i = e * (t.naturalWidth / t.naturalHeight);
                      n.main.select.placeAt(0, 0, r - i, 0, t)
                    }
                    n.worklog.captureState()
                  }
                }
              };
            if (this.main.params.backplateImgUrl) return this.pasteOptions = Object.assign({}, o), void(this.activeOption = this.pasteOptions);
            this.pasteOptions = Object.assign({}, o, r), this.activeOption = this.pasteOptions
          }
          var e, n, a;
          return e = t, a = [{
            key: "get",
            value: function(e) {
              return e.inserter || (e.inserter = new t(e)), e.inserter
            }
          }, {
            key: "controlObjToString",
            value: function(t) {
              var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "",
                n = t;
              return n.id = (0, o.genId)(), '<button type="button" id="'.concat(t.id, '" class="ptro-selector-btn ptro-color-control ').concat(e, '">') + '<div><i class="ptro-icon ptro-icon-paste_'.concat(t.internalName, '"></i></div>') + "<div>".concat((0, r.tr)("pasteOptions.".concat(t.internalName)), "</div>") + "</button>"
            }
          }], (n = [{
            key: "init",
            value: function(t) {
              var e = this;
              this.CLIP_DATA_MARKER = "painterro-image-data", this.ctx = t.ctx, this.main = t, this.worklog = t.worklog, this.selector = t.wrapper.querySelector(".ptro-paster-select-wrapper"), this.cancelChoosing(), this.img = null, this.mimetype = null, this.getAvailableOptions().forEach((function(t) {
                var n = e.pasteOptions[t];
                e.main.getElemByIdSafe(n.id).onclick = function() {
                  e.loading ? e.doLater = n.handle : n.handle(e.img), e.cancelChoosing()
                }
              })), this.loading = !1, this.doLater = null
            }
          }, {
            key: "insert",
            value: function(t, e, n, r) {
              this.main.ctx.drawImage(this.tmpImg, t, e, n, r), this.main.worklog.reCaptureState()
            }
          }, {
            key: "cancelChoosing",
            value: function() {
              this.selector.setAttribute("hidden", ""), this.waitChoice = !1
            }
          }, {
            key: "loaded",
            value: function(t, e) {
              this.img = t, this.mimetype = e, this.loading = !1, this.doLater && (this.doLater(t), this.doLater = null)
            }
          }, {
            key: "getAvailableOptions",
            value: function() {
              var t = this;
              return this.main.params.how_to_paste_actions ? Object.keys(this.activeOption).filter((function(e) {
                return t.main.params.how_to_paste_actions.includes(e)
              })) : Object.keys(this.activeOption)
            }
          }, {
            key: "handleOpen",
            value: function(t, e) {
              var n = this;
              this.startLoading();
              var r = function(t) {
                var r = new Image,
                  o = n.main.worklog.clean && n.main.params.replaceAllOnEmptyBackground;
                if (r.onload = function() {
                    o ? n.main.fitImage(r, e) : n.loaded(r, e), n.finishLoading()
                  }, r.onerror = function() {
                    "function" == typeof n.main.params.onImageFailedOpen && n.main.params.onImageFailedOpen()
                  }, r.src = t, !o) {
                  var i = n.getAvailableOptions();
                  1 !== i.length ? (n.selector.removeAttribute("hidden"), n.waitChoice = !0) : n.doLater = n.activeOption[i[0]].handle
                }
              };
              0 !== t.indexOf("data") ? (0, o.imgToDataURL)(t, (function(t) {
                r(t)
              }), (function() {
                "function" == typeof n.main.params.onImageFailedOpen && n.main.params.onImageFailedOpen()
              })) : r(t)
            }
          }, {
            key: "handleKeyDown",
            value: function(t) {
              return this.waitChoice && t.keyCode === o.KEYS.esc ? (this.cancelChoosing(), !0) : !(!this.waitChoice || event.keyCode !== o.KEYS.enter)
            }
          }, {
            key: "startLoading",
            value: function() {
              if (this.loading = !0, this.main.toolByName.open.buttonId) {
                var t = this.main.getElemByIdSafe(this.main.toolByName.open.buttonId);
                t && t.setAttribute("disabled", "true");
                var e = this.main.doc.querySelector("#".concat(this.main.toolByName.open.buttonId, " > i"));
                e && (e.className = "ptro-icon ptro-icon-loading ptro-spinning")
              }
            }
          }, {
            key: "finishLoading",
            value: function() {
              if (this.main.toolByName.open.buttonId) {
                var t = this.main.getElemByIdSafe(this.main.toolByName.open.buttonId);
                t && t.removeAttribute("disabled");
                var e = this.main.doc.querySelector("#".concat(this.main.toolByName.open.buttonId, " > i"));
                e && (e.className = "ptro-icon ptro-icon-open")
              }
              this.main.params.onImageLoaded && this.main.params.onImageLoaded()
            }
          }, {
            key: "html",
            value: function() {
              var e = this,
                n = this.main.params.backplateImgUrl,
                o = "",
                i = "";
              return this.getAvailableOptions().forEach((function(n) {
                "replace_all" === n || "paste_over" === n ? o += '<div class="ptro-paster-fit">\n          '.concat(t.controlObjToString(e.pasteOptions[n], "ptro-selector-fit"), '\n        <div class="ptro-paster-wrapper-label">\n          ').concat((0, r.tr)("pasteOptions.".concat(e.pasteOptions[n].internalName)), "\n        </div></div>") : i += t.controlObjToString(e.pasteOptions[n], "ptro-selector-extend")
              })), '<div class="ptro-paster-select-wrapper" hidden><div class="ptro-paster-select ptro-v-middle"><div class="ptro-in ptro-v-middle-in">' + ' <div class="ptro-paster-wrappers-fits">\n        '.concat(o, "\n        ").concat(n || !i ? "" : '\n          <div class="ptro-paster-select-wrapper-extends">\n            <div class="ptro-paster-extends-items">\n              '.concat(i, '\n            </div>\n            <div class="ptro-paster-wrapper-label">').concat((0, r.tr)("pasteOptions.extend"), "</div>\n          </div>"), "\n        </div>\n      </div></div></div>")
            }
          }]) && i(e.prototype, n), a && i(e, a), t
        }();
        e.default = a
      },
      165: function(t, e, n) {
        "use strict";

        function r(t) {
          return (r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
            return typeof t
          } : function(t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
          })(t)
        }
        e.default = void 0;
        var o = v(n(891));
        n(735), n(757), n(996);
        var i = v(n(505)),
          a = v(n(390)),
          l = n(564),
          A = v(n(335)),
          s = function(t) {
            if (t && t.__esModule) return t;
            if (null === t || "object" !== r(t) && "function" != typeof t) return {
              default: t
            };
            var e = B();
            if (e && e.has(t)) return e.get(t);
            var n = {},
              o = Object.defineProperty && Object.getOwnPropertyDescriptor;
            for (var i in t)
              if (Object.prototype.hasOwnProperty.call(t, i)) {
                var a = o ? Object.getOwnPropertyDescriptor(t, i) : null;
                a && (a.get || a.set) ? Object.defineProperty(n, i, a) : n[i] = t[i]
              } n.default = t, e && e.set(t, n);
            return n
          }(n(794)),
          c = n(927),
          p = n(784),
          h = v(n(9)),
          u = v(n(997)),
          d = v(n(724)),
          f = v(n(840)),
          g = v(n(624)),
          m = v(n(198)),
          C = v(n(666));

        function B() {
          if ("function" != typeof WeakMap) return null;
          var t = new WeakMap;
          return B = function() {
            return t
          }, t
        }

        function v(t) {
          return t && t.__esModule ? t : {
            default: t
          }
        }

        function w(t, e, n) {
          return e in t ? Object.defineProperty(t, e, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
          }) : t[e] = n, t
        }

        function b(t, e) {
          for (var n = 0; n < e.length; n++) {
            var r = e[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
          }
        }
        var x = function() {
          function t(e) {
            var n = this;
            ! function(t, e) {
              if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }(this, t), (0, l.addDocumentObjectHelpers)(), this.getElemByIdSafe = function(t) {
              if (!t) throw new Error("Can't get element with id=".concat(t, ", please create an issue here, we will easily fx it: https://github.com/devforth/painterro/issues/"));
              return document.getElementById(t)
            }, this.tools = [{
              name: "select",
              hotkey: "s",
              activate: function() {
                n.initText && n.wrapper.click(), n.toolContainer.style.cursor = "crosshair", n.select.activate(), n.select.draw()
              },
              close: function() {
                n.select.close(), n.toolContainer.style.cursor = "auto"
              },
              eventListner: function() {
                return n.select
              }
            }, {
              name: "crop",
              hotkey: "c",
              activate: function() {
                n.initText && n.wrapper.click(), n.select.doCrop(), n.closeActiveTool()
              }
            }, {
              name: "pixelize",
              hotkey: "p",
              activate: function() {
                n.initText && n.wrapper.click(), n.select.doPixelize(), n.closeActiveTool()
              }
            }, {
              name: "line",
              hotkey: "l",
              controls: [function() {
                return {
                  type: "color",
                  title: "lineColor",
                  target: "line",
                  titleFull: "lineColorFull",
                  action: function() {
                    n.colorPicker.open(n.colorWidgetState.line)
                  }
                }
              }, function() {
                return n.controlBuilder.buildLineWidthControl(1)
              }, function() {
                return n.controlBuilder.buildShadowOnControl(2)
              }],
              activate: function() {
                n.initText && n.wrapper.click(), n.toolContainer.style.cursor = "crosshair", n.primitiveTool.activate("line")
              },
              eventListner: function() {
                return n.primitiveTool
              }
            }, {
              name: "arrow",
              hotkey: "a",
              controls: [function() {
                return {
                  type: "color",
                  title: "lineColor",
                  target: "line",
                  titleFull: "lineColorFull",
                  action: function() {
                    n.colorPicker.open(n.colorWidgetState.line)
                  }
                }
              }, function() {
                return n.controlBuilder.buildArrowLengthControl(1)
              }, function() {
                return n.controlBuilder.buildShadowOnControl(2)
              }],
              activate: function() {
                n.initText && n.wrapper.click(), n.toolContainer.style.cursor = "crosshair", n.primitiveTool.activate("arrow")
              },
              eventListner: function() {
                return n.primitiveTool
              }
            }, {
              name: "rect",
              controls: [function() {
                return {
                  type: "color",
                  title: "lineColor",
                  titleFull: "lineColorFull",
                  target: "line",
                  action: function() {
                    n.colorPicker.open(n.colorWidgetState.line)
                  }
                }
              }, function() {
                return {
                  type: "color",
                  title: "fillColor",
                  titleFull: "fillColorFull",
                  target: "fill",
                  action: function() {
                    n.colorPicker.open(n.colorWidgetState.fill)
                  }
                }
              }, function() {
                return n.controlBuilder.buildLineWidthControl(2)
              }, function() {
                return n.controlBuilder.buildShadowOnControl(3)
              }],
              activate: function() {
                n.initText && n.wrapper.click(), n.toolContainer.style.cursor = "crosshair", n.primitiveTool.activate("rect")
              },
              eventListner: function() {
                return n.primitiveTool
              }
            }, {
              name: "ellipse",
              controls: [function() {
                return {
                  type: "color",
                  title: "lineColor",
                  titleFull: "lineColorFull",
                  target: "line",
                  action: function() {
                    n.colorPicker.open(n.colorWidgetState.line)
                  }
                }
              }, function() {
                return {
                  type: "color",
                  title: "fillColor",
                  titleFull: "fillColorFull",
                  target: "fill",
                  action: function() {
                    n.colorPicker.open(n.colorWidgetState.fill)
                  }
                }
              }, function() {
                return n.controlBuilder.buildLineWidthControl(2)
              }, function() {
                return n.controlBuilder.buildShadowOnControl(3)
              }],
              activate: function() {
                n.initText && n.wrapper.click(), n.toolContainer.style.cursor = "crosshair", n.primitiveTool.activate("ellipse")
              },
              eventListner: function() {
                return n.primitiveTool
              }
            }, {
              name: "brush",
              hotkey: "b",
              controls: [function() {
                return {
                  type: "color",
                  title: "lineColor",
                  target: "line",
                  titleFull: "lineColorFull",
                  action: function() {
                    n.colorPicker.open(n.colorWidgetState.line)
                  }
                }
              }, function() {
                return n.controlBuilder.buildLineWidthControl(1)
              }],
              activate: function() {
                n.initText && n.wrapper.click(), n.toolContainer.style.cursor = "crosshair", n.primitiveTool.activate("brush")
              },
              eventListner: function() {
                return n.primitiveTool
              }
            }, {
              name: "eraser",
              controls: [function() {
                return n.controlBuilder.buildEraserWidthControl(0)
              }],
              activate: function() {
                n.initText && n.wrapper.click(), n.toolContainer.style.cursor = "crosshair", n.primitiveTool.activate("eraser")
              },
              eventListner: function() {
                return n.primitiveTool
              }
            }, {
              name: "text",
              hotkey: "t",
              controls: [function() {
                return {
                  type: "color",
                  title: "textColor",
                  titleFull: "textColorFull",
                  target: "line",
                  action: function() {
                    n.colorPicker.open(n.colorWidgetState.line, (function(t) {
                      n.textTool.setFontColor(t.alphaColor)
                    }))
                  }
                }
              }, function() {
                return n.controlBuilder.buildFontSizeControl(1)
              }, function() {
                return {
                  type: "dropdown",
                  title: "fontName",
                  titleFull: "fontNameFull",
                  target: "fontName",
                  action: function() {
                    var t = n.getElemByIdSafe(n.activeTool.controls[2].id).value;
                    n.textTool.setFont(t)
                  },
                  getValue: function() {
                    return n.textTool.getFont()
                  },
                  getAvailableValues: function() {
                    return n.textTool.getFonts()
                  }
                }
              }, function() {
                return {
                  type: "bool",
                  title: "fontIsBold",
                  titleFull: "fontIsBoldFull",
                  target: "fontIsBold",
                  action: function() {
                    var t = n.getElemByIdSafe(n.activeTool.controls[3].id),
                      e = !("true" === t.getAttribute("data-value"));
                    n.textTool.setFontIsBold(e), (0, c.setParam)("defaultFontBold", e), t.setAttribute("data-value", e ? "true" : "false")
                  },
                  getValue: function() {
                    return n.textTool.isBold
                  }
                }
              }, function() {
                return {
                  type: "bool",
                  title: "fontIsItalic",
                  titleFull: "fontIsItalicFull",
                  target: "fontIsItalic",
                  action: function() {
                    var t = n.getElemByIdSafe(n.activeTool.controls[4].id),
                      e = !("true" === t.getAttribute("data-value"));
                    n.textTool.setFontIsItalic(e), (0, c.setParam)("defaultFontItalic", e), t.setAttribute("data-value", e ? "true" : "false")
                  },
                  getValue: function() {
                    return n.textTool.isItalic
                  }
                }
              }, function() {
                return {
                  type: "bool",
                  title: "fontStrokeAndShadow",
                  titleFull: "fontStrokeAndShadowFull",
                  target: "fontStrokeAndShadow",
                  action: function() {
                    var t = n.getElemByIdSafe(n.activeTool.controls[5].id),
                      e = !("true" === t.getAttribute("data-value"));
                    n.textTool.setStrokeOn(e), (0, c.setParam)("defaultTextStrokeAndShadow", e), t.setAttribute("data-value", e ? "true" : "false")
                  },
                  getValue: function() {
                    return n.textTool.strokeOn
                  }
                }
              }],
              activate: function() {
                n.initText && n.wrapper.click(), n.textTool.setFontColor(n.colorWidgetState.line.alphaColor), n.toolContainer.style.cursor = "crosshair"
              },
              close: function() {
                n.textTool.close()
              },
              eventListner: function() {
                return n.textTool
              }
            }, {
              name: "rotate",
              hotkey: "r",
              activate: function() {
                n.initText && n.wrapper.click();
                var t = n.size.w,
                  e = n.size.h,
                  r = n.ctx.getImageData(0, 0, n.size.w, n.size.h),
                  o = n.doc.createElement("canvas");
                o.width = t, o.height = e, o.getContext("2d").putImageData(r, 0, 0), n.resize(e, t), n.ctx.save(), n.ctx.translate(e / 2, t / 2), n.ctx.rotate(90 * Math.PI / 180), n.ctx.drawImage(o, -t / 2, -e / 2), n.adjustSizeFull(), n.ctx.restore(), n.worklog.captureState(), n.closeActiveTool()
              }
            }, {
              name: "resize",
              activate: function() {
                n.initText && n.wrapper.click(), n.resizer.open()
              },
              close: function() {
                n.resizer.close()
              },
              eventListner: function() {
                return n.resizer
              }
            }, {
              name: "undo",
              activate: function() {
                n.initText && n.wrapper.click(), n.worklog.undoState()
              },
              eventListner: function() {
                return n.resizer
              }
            }, {
              name: "redo",
              activate: function() {
                n.initText && n.wrapper.click(), n.worklog.redoState()
              },
              eventListner: function() {
                return n.resizer
              }
            }, {
              name: "settings",
              activate: function() {
                n.initText && n.wrapper.click(), n.settings.open()
              },
              close: function() {
                n.settings.close()
              },
              eventListner: function() {
                return n.settings
              }
            }, {
              name: "zoomout",
              activate: function() {
                n.initText && n.wrapper.click(), n.zoomButtonActive = !0;
                var t = n.canvas.getBoundingClientRect(),
                  e = {
                    wheelDelta: -120,
                    clientX: t.right / 2,
                    clientY: t.bottom / 2
                  };
                n.curCord = [e.clientX - n.elLeft() + n.scroller.scrollLeft, e.clientY - n.elTop() + n.scroller.scrollTop];
                var r = n.getScale();
                n.curCord = [n.curCord[0] * r, n.curCord[1] * r], n.zoomImage(e)
              }
            }, {
              name: "zoomin",
              activate: function() {
                n.initText && n.wrapper.click(), n.zoomButtonActive = !0;
                var t = n.canvas.getBoundingClientRect(),
                  e = {
                    wheelDelta: 120,
                    clientX: t.right / 2,
                    clientY: t.bottom / 2
                  };
                n.curCord = [e.clientX - n.elLeft() + n.scroller.scrollLeft, e.clientY - n.elTop() + n.scroller.scrollTop];
                var r = n.getScale();
                n.curCord = [n.curCord[0] * r, n.curCord[1] * r], n.zoomImage(e)
              }
            }, {
              name: "bucket",
              hotkey: "f",
              controls: [function() {
                return {
                  type: "color",
                  title: "fillColor",
                  target: "fill",
                  titleFull: "fillColorFull",
                  action: function() {
                    n.colorPicker.open(n.colorWidgetState.fill)
                  }
                }
              }],
              activate: function() {
                n.toolContainer.style.cursor = "crosshair", n.primitiveTool.activate("bucket")
              },
              eventListner: function() {
                return n.paintBucket
              }
            }, {
              name: "clear",
              activate: function() {
                n.clear(), n.closeActiveTool()
              }
            }, {
              name: "save",
              right: !0,
              hotkey: function() {
                return !!n.params.saveByEnter && "enter"
              },
              activate: function() {
                n.initText && n.wrapper.click(), n.save(), n.closeActiveTool()
              }
            }, {
              name: "open",
              right: !0,
              activate: function() {
                n.initText && n.wrapper.click(), n.closeActiveTool();
                var t = n.getElemByIdSafe(n.fileInputId);
                t.onchange = function(e) {
                  var r = e.target.files || e.dataTransfer.files;
                  r.length && (n.openFile(r[0]), t.value = "")
                }, t.click()
              }
            }, {
              name: "close",
              hotkey: function() {
                return !!n.params.hideByEsc && "esc"
              },
              right: !0,
              activate: function() {
                n.initText && n.wrapper.click();
                var t = function() {
                  n.closeActiveTool(), n.close(), n.hide()
                };
                n.params.onBeforeClose ? n.params.onBeforeClose(n.hasUnsaved, t) : t()
              }
            }], this.params = (0, c.setDefaults)(e, this.tools.map((function(t) {
              return t.name
            }))), this.colorWidgetState = {
              line: {
                target: "line",
                palleteColor: this.params.activeColor,
                alpha: this.params.activeColorAlpha,
                alphaColor: this.params.activeAlphaColor
              },
              fill: {
                target: "fill",
                palleteColor: this.params.activeFillColor,
                alpha: this.params.activeFillColorAlpha,
                alphaColor: this.params.activeFillAlphaColor
              },
              bg: {
                target: "bg",
                palleteColor: this.params.backgroundFillColor,
                alpha: this.params.backgroundFillColorAlpha,
                alphaColor: this.params.backgroundFillAlphaColor
              }
            }, this.currentBackground = this.colorWidgetState.bg.alphaColor, this.currentBackgroundAlpha = this.colorWidgetState.bg.alpha, this.controlBuilder = new m.default(this), this.isMobile = o.default.any, this.toolByName = {}, this.toolByKeyCode = {}, this.tools.forEach((function(t) {
              if (t.controls && (t.controls = t.controls.map((function(t) {
                  return t()
                }))), n.toolByName[t.name] = t, t.hotkey instanceof Function && (t.hotkey = t.hotkey()), t.hotkey && !n.params.hiddenTools.includes(t.name)) {
                if (!l.KEYS[t.hotkey]) throw new Error("Key code for ".concat(t.hotkey, " not defined in KEYS"));
                n.toolByKeyCode[l.KEYS[t.hotkey]] = t
              }
            })), this.activeTool = void 0, this.zoom = !1, this.ratioRelation = void 0, this.id = this.params.id, this.saving = !1, void 0 === this.id ? (this.id = (0, l.genId)(), this.holderId = (0, l.genId)(), this.holderEl = document.createElement("div"), this.holderEl.id = this.holderId, this.holderEl.className = "ptro-holder-wrapper", document.body.appendChild(this.holderEl), this.holderEl.innerHTML = "<div id='".concat(this.id, '\' class="ptro-holder"></div>'), this.baseEl = this.getElemByIdSafe(this.id)) : (this.baseEl = this.getElemByIdSafe(this.id), this.holderEl = null);
            var r = "",
              B = "";
            this.tools.filter((function(t) {
              return !n.params.hiddenTools.includes(t.name)
            })).forEach((function(t) {
              var e = (0, l.genId)();
              t.buttonId = e;
              var n = t.hotkey ? " [".concat(t.hotkey.toUpperCase(), "]") : "",
                o = '<button type="button" class="ptro-icon-btn ptro-color-control" title="'.concat((0, p.tr)("tools.".concat(t.name))).concat(n, '" ') + 'id="'.concat(e, '" >') + '<i class="ptro-icon ptro-icon-'.concat(t.name, '"></i></button>');
              t.right ? B += o : r += o
            })), this.inserter = f.default.get(this);
            var v = '<div class="ptro-crp-el">' + "".concat(i.default.code()).concat(u.default.code(), "</div>");
            this.loadedName = "", this.doc = document, this.wrapper = this.doc.createElement("div"), this.wrapper.id = "".concat(this.id, "-wrapper"), this.wrapper.className = "ptro-wrapper", this.wrapper.innerHTML = '<div class="ptro-scroller"><div class="ptro-center-table"><div class="ptro-center-tablecell">' + '<canvas id="'.concat(this.id, '-canvas"></canvas>') + '<div class="ptro-substrate"></div>'.concat(v) + "</div></div>" + "</div>".concat(s.default.html() + h.default.html() + d.default.html() + g.default.html(this) + this.inserter.html()), this.baseEl.appendChild(this.wrapper), this.scroller = this.doc.querySelector("#".concat(this.id, "-wrapper .ptro-scroller")), this.bar = this.doc.createElement("div"), this.bar.id = "".concat(this.id, "-bar"), this.bar.className = "ptro-bar ptro-color-main", this.fileInputId = (0, l.genId)(), this.bar.innerHTML = "<div>".concat(r) + '<span class="ptro-tool-controls"></span><span class="ptro-info"></span>' + '<span class="ptro-bar-right">'.concat(B, "</span>") + '<input id="'.concat(this.fileInputId, '" type="file" style="display: none" value="none" accept="image/x-png,image/png,image/gif,image/jpeg" /></div>'), this.isMobile && (this.bar.style["overflow-x"] = "auto"), this.baseEl.appendChild(this.bar);
            var w = this.doc.createElement("style");
            if (w.type = "text/css", w.innerHTML = this.params.styles, this.baseEl.appendChild(w), this.saveBtn = this.baseEl.querySelector("#".concat(this.toolByName.save.buttonId)), this.toolByName.save.buttonId && this.saveBtn && this.saveBtn.setAttribute("disabled", "true"), this.body = this.doc.body, this.info = this.doc.querySelector("#".concat(this.id, "-bar .ptro-info")), this.canvas = this.doc.querySelector("#".concat(this.id, "-canvas")), this.ctx = this.canvas.getContext("2d"), this.toolControls = this.doc.querySelector("#".concat(this.id, "-bar .ptro-tool-controls")), this.toolContainer = this.doc.querySelector("#".concat(this.id, "-wrapper .ptro-crp-el")), this.substrate = this.doc.querySelector("#".concat(this.id, "-wrapper .ptro-substrate")), this.zoomHelper = new h.default(this), this.zoomButtonActive = !1, this.select = new i.default(this, (function(t) {
                [n.toolByName.crop, n.toolByName.pixelize].forEach((function(e) {
                  n.setToolEnabled(e, t)
                }))
              })), this.params.backplateImgUrl) {
              this.tabelCell = this.canvas.parentElement, this.tabelCell.style.backgroundImage = "url(".concat(this.params.backplateImgUrl, ")"), this.tabelCell.style.backgroundRepeat = "no-repeat", this.tabelCell.style.backgroundPosition = "center center";
              var b = new Image;
              b.onload = function() {
                n.resize(b.naturalWidth, b.naturalHeight), n.adjustSizeFull(), n.worklog.captureState(), n.tabelCell.style.backgroundSize = "".concat(window.getComputedStyle(n.substrate).width, " ").concat(window.getComputedStyle(n.substrate).height)
              }, b.src = this.params.backplateImgUrl
            }
            this.resizer = new d.default(this), this.settings = new g.default(this), this.primitiveTool = new A.default(this), this.primitiveTool.setShadowOn(this.params.defaultPrimitiveShadowOn), this.primitiveTool.setLineWidth(this.params.defaultLineWidth), this.primitiveTool.setArrowLength(this.params.defaultArrowLength), this.primitiveTool.setEraserWidth(this.params.defaultEraserWidth), this.primitiveTool.setPixelSize(this.params.defaultPixelSize), this.hasUnsaved = !1, this.worklog = new a.default(this, (function(t) {
              n.saveBtn && !t.initial && (n.saveBtn.removeAttribute("disabled"), n.hasUnsaved = !0), n.setToolEnabled(n.toolByName.undo, !t.first), n.setToolEnabled(n.toolByName.redo, !t.last), n.params.onChange && n.params.onChange.call(n, {
                image: n.imageSaver,
                operationsDone: n.worklog.current.prevCount,
                realesedMemoryOperations: n.worklog.clearedCount
              })
            })), this.inserter.init(this), this.paintBucket = new C.default(this), this.textTool = new u.default(this), this.colorPicker = new s.default(this, (function(t) {
              n.colorWidgetState[t.target] = t, n.doc.querySelector("#".concat(n.id, " .ptro-color-btn[data-id='").concat(t.target, "']")).style["background-color"] = t.alphaColor;
              var e = (0, s.HexToRGB)(t.palleteColor);
              void 0 !== e && (t.palleteColor = (0, s.rgbToHex)(e.r, e.g, e.b), "line" === t.target ? ((0, c.setParam)("activeColor", t.palleteColor), (0, c.setParam)("activeColorAlpha", t.alpha)) : "fill" === t.target ? ((0, c.setParam)("activeFillColor", t.palleteColor), (0, c.setParam)("activeFillColorAlpha", t.alpha)) : "bg" === t.target ? ((0, c.setParam)("backgroundFillColor", t.palleteColor), (0, c.setParam)("backgroundFillColorAlpha", t.alpha)) : "stroke" === t.target && ((0, c.setParam)("textStrokeColor", t.palleteColor), (0, c.setParam)("textStrokeColorAlpha", t.alpha)))
            })), this.defaultTool = this.toolByName[this.params.defaultTool], this.tools.filter((function(t) {
              return -1 === n.params.hiddenTools.indexOf(t.name)
            })).forEach((function(t) {
              n.getBtnEl(t).onclick = function() {
                if (t !== n.defaultTool || n.activeTool !== t) {
                  var e = n.activeTool;
                  n.closeActiveTool(!0), e !== t ? n.setActiveTool(t) : n.setActiveTool(n.defaultTool)
                }
              }, n.getBtnEl(t).ontouch = n.getBtnEl(t).onclick
            })), this.getBtnEl(this.defaultTool).click(), this.imageSaver = {
              asDataURL: function(t, e) {
                var r = t;
                return void 0 === r && (r = n.loadedImageType ? n.loadedImageType : "image/png"), n.getAsUri(r, e)
              },
              asBlob: function(t, e) {
                var r = t;
                void 0 === r && (r = n.loadedImageType ? n.loadedImageType : "image/png");
                for (var o = n.getAsUri(r, e), i = atob(o.split(",")[1]), a = new ArrayBuffer(i.length), l = new Uint8Array(a), A = 0; A < i.length; A += 1) l[A] = i.charCodeAt(A);
                return new Blob([a], {
                  type: r
                })
              },
              getOriginalMimeType: function() {
                return n.loadedImageType
              },
              hasAlphaChannel: function() {
                for (var t = n.ctx.getImageData(0, 0, n.canvas.width, n.canvas.height).data, e = 3, r = t.length; e < r; e += 4)
                  if (t[e] < 255) return !0;
                return !1
              },
              suggestedFileName: function(t) {
                var e = t;
                return void 0 === e && (e = "png"), "".concat(n.loadedName || "image-".concat((0, l.genId)()), ".").concat(e)
              },
              getWidth: function() {
                return n.size.w
              },
              getHeight: function() {
                return n.size.h
              }
            }, this.initEventHandlers(), this.hide(), this.zoomFactor = 1
          }
          var e, n, r;
          return e = t, (n = [{
            key: "setToolEnabled",
            value: function(t, e) {
              if (t.buttonId) {
                var n = this.getElemByIdSafe(t.buttonId);
                e ? n.removeAttribute("disabled") : n.setAttribute("disabled", "true")
              }
            }
          }, {
            key: "getAsUri",
            value: function(t, e) {
              var n = e;
              return void 0 === n && (n = .92), this.canvas.toDataURL(t, n)
            }
          }, {
            key: "getBtnEl",
            value: function(t) {
              return this.getElemByIdSafe(t.buttonId)
            }
          }, {
            key: "save",
            value: function() {
              var t = this;
              if (this.saving) return this;
              this.saving = !0;
              var e = this.baseEl.querySelector("#".concat(this.toolByName.save.buttonId)),
                n = this.baseEl.querySelector("#".concat(this.toolByName.save.buttonId, " > i"));
              return this.toolByName.save.buttonId && e && e.setAttribute("disabled", "true"), this.hasUnsaved = !1, n && (n.className = "ptro-icon ptro-icon-loading ptro-spinning"), void 0 !== this.params.saveHandler ? this.params.saveHandler(this.imageSaver, (function(e) {
                !0 === e && t.hide(), n && (n.className = "ptro-icon ptro-icon-save"), t.saving = !1
              })) : ((0, l.logError)("No saveHandler defined, please check documentation"), n && (n.className = "ptro-icon ptro-icon-save"), this.saving = !1), this
            }
          }, {
            key: "close",
            value: function() {
              void 0 !== this.params.onClose && this.params.onClose()
            }
          }, {
            key: "closeActiveTool",
            value: function(t) {
              if (void 0 !== this.activeTool) {
                void 0 !== this.activeTool.close && this.activeTool.close(), this.toolControls.innerHTML = "";
                var e = this.getBtnEl(this.activeTool);
                e && (e.className = this.getBtnEl(this.activeTool).className.replace(" ptro-color-active-control", "")), this.activeTool = void 0
              }!0 !== t && this.setActiveTool(this.defaultTool)
            }
          }, {
            key: "handleToolEvent",
            value: function(t, e) {
              if (this.select.imagePlaced || this.select.area.activated) return this.select[t](e);
              if (this.activeTool && this.activeTool.eventListner) {
                var n = this.activeTool.eventListner();
                if (n[t]) return n[t](e)
              }
              return !1
            }
          }, {
            key: "handleClipCopyEvent",
            value: function(t) {
              var e = !1,
                n = "image/png";
              if (t.keyCode === l.KEYS.c && (t.ctrlKey || t.metaKey))
                if (console.log("handing copy"), this.inserter.waitChoice || this.select.imagePlaced || !this.select.shown) this.canvas.toBlob((function(t) {
                  navigator.clipboard.write([new ClipboardItem(w({}, n, t))])
                }), n, 1), e = !0;
                else {
                  var r = this.select.area,
                    o = r.bottoml[0] - r.topl[0],
                    i = r.bottoml[1] - r.topl[1],
                    a = this.doc.createElement("canvas");
                  a.width = o, a.height = i, a.getContext("2d").drawImage(this.canvas, -r.topl[0], -r.topl[1]), a.toBlob((function(t) {
                    navigator.clipboard.write([new ClipboardItem(w({}, n, t))])
                  }), n, 1), e = !0
                } return e
            }
          }, {
            key: "zoomImage",
            value: function(t, e) {
              var n = t.wheelDelta,
                r = t.clientX,
                o = t.clientY,
                i = n;
              void 0 !== e && (i = 1);
              var a = 1;
              this.size.w > this.wrapper.documentClientWidth && (a = Math.min(a, this.wrapper.documentClientWidth / this.size.w)), this.size.h > this.wrapper.documentClientHeight && (a = Math.min(a, this.wrapper.documentClientHeight / this.size.h)), !this.zoom && this.zoomFactor > a && (this.zoomFactor = a), this.zoomFactor += .2 * Math.sign(i), this.zoomFactor < a ? (this.zoom = !1, this.zoomFactor = a) : this.zoom = !0, this.adjustSizeFull(), this.select.adjustPosition(), this.zoom && (this.scroller.scrollLeft = this.curCord[0] / this.getScale() - (r - this.wrapper.documentOffsetLeft), this.scroller.scrollTop = this.curCord[1] / this.getScale() - (o - this.wrapper.documentOffsetTop))
            }
          }, {
            key: "initEventHandlers",
            value: function() {
              var t = this;
              this.documentHandlers = {
                mousedown: function(e) {
                  t.shown && (!t.worklog.empty || -1 === e.target.className.indexOf("ptro-crp-el") && -1 === e.target.className.indexOf("ptro-icon") && -1 === e.target.className.indexOf("ptro-named-btn") || t.clearBackground(), !0 !== t.colorPicker.handleMouseDown(e) && t.handleToolEvent("handleMouseDown", e))
                },
                touchstart: function(e) {
                  if (1 === e.touches.length) e.clientX = e.changedTouches[0].clientX, e.clientY = e.changedTouches[0].clientY, t.documentHandlers.mousedown(e);
                  else if (2 === e.touches.length) {
                    var n = (0, l.distance)({
                      x: e.changedTouches[0].clientX,
                      y: e.changedTouches[0].clientY
                    }, {
                      x: e.changedTouches[1].clientX,
                      y: e.changedTouches[1].clientY
                    });
                    t.lastFingerDist = n
                  }
                },
                touchend: function(e) {
                  e.clientX = e.changedTouches[0].clientX, e.clientY = e.changedTouches[0].clientY, t.documentHandlers.mouseup(e)
                },
                touchmove: function(e) {
                  if (1 === e.touches.length) e.clientX = e.changedTouches[0].clientX, e.clientY = e.changedTouches[0].clientY, t.documentHandlers.mousemove(e);
                  else if (2 === e.touches.length) {
                    var n = (0, l.distance)({
                      x: e.changedTouches[0].clientX,
                      y: e.changedTouches[0].clientY
                    }, {
                      x: e.changedTouches[1].clientX,
                      y: e.changedTouches[1].clientY
                    });
                    (n > t.lastFingerDist || n < t.lastFingerDist) && t.documentHandlers.wheel(e, 1, !0), t.lastFingerDist = n, e.stopPropagation(), t.zoomButtonActive || e.preventDefault()
                  }
                },
                mousemove: function(e) {
                  if (t.shown) {
                    t.handleToolEvent("handleMouseMove", e), t.colorPicker.handleMouseMove(e), t.zoomHelper.handleMouseMove(e), t.curCord = [e.clientX - t.elLeft() + t.scroller.scrollLeft, e.clientY - t.elTop() + t.scroller.scrollTop];
                    var n = t.getScale();
                    t.curCord = [t.curCord[0] * n, t.curCord[1] * n], "input" !== e.target.tagName.toLowerCase() && "button" !== e.target.tagName.toLowerCase() && "i" !== e.target.tagName.toLowerCase() && "select" !== e.target.tagName.toLowerCase() && (t.zoomButtonActive || e.preventDefault())
                  }
                },
                mouseup: function(e) {
                  t.shown && (t.handleToolEvent("handleMouseUp", e), t.colorPicker.handleMouseUp(e))
                },
                wheel: function(e, n, r) {
                  t.shown && (void 0 !== r ? r : e.ctrlKey) && (t.zoomImage(e, n), e.preventDefault())
                },
                keydown: function(e) {
                  console.log("event.target !== document.body", event.target, document.body);
                  var n = event.target;
                  if (!["input", "textarea", "div[contenteditable]"].some((function(t) {
                      return n.matches(t)
                    })) && t.shown) {
                    if (t.colorPicker.handleKeyDown(e)) return;
                    if (t.handleClipCopyEvent(e)) return;
                    var r = window.event ? event : e;
                    if (t.handleToolEvent("handleKeyDown", r)) return;
                    r.keyCode === l.KEYS.y && r.ctrlKey || r.keyCode === l.KEYS.z && r.ctrlKey && r.shiftKey ? (t.worklog.redoState(), e.preventDefault(), t.params.userRedo && t.params.userRedo.call()) : r.keyCode === l.KEYS.z && r.ctrlKey && (t.worklog.undoState(), e.preventDefault(), t.params.userUndo && t.params.userUndo.call()), t.toolByKeyCode[event.keyCode] && (t.getBtnEl(t.toolByKeyCode[event.keyCode]).click(), e.stopPropagation(), e.preventDefault()), t.saveBtn && r.keyCode === l.KEYS.s && r.ctrlKey && (t.initText && t.wrapper.click(), t.save(), r.preventDefault())
                  }
                },
                paste: function(e) {
                  if (t.initText && t.wrapper.click(), t.shown) {
                    var n = (e.clipboardData || e.originalEvent.clipboardData).items;
                    Object.keys(n).forEach((function(r) {
                      var o = n[r];
                      "file" === o.kind && "image" === o.type.split("/")[0] && (t.openFile(o.getAsFile()), e.preventDefault(), e.stopPropagation())
                    }))
                  }
                },
                dragover: function(e) {
                  if (t.shown) {
                    var n = e.target.classList[0];
                    "ptro-crp-el" !== n && "ptro-bar" !== n || (t.bar.className = "ptro-bar ptro-color-main ptro-bar-dragover"), e.preventDefault()
                  }
                },
                dragleave: function() {
                  t.shown && (t.bar.className = "ptro-bar ptro-color-main")
                },
                drop: function(e) {
                  if (t.shown) {
                    t.bar.className = "ptro-bar ptro-color-main", e.preventDefault();
                    var n = e.dataTransfer.files[0];
                    if (n) t.openFile(n);
                    else {
                      var r = e.dataTransfer.getData("text/html"),
                        o = /src.*?=['"](.+?)['"]/.exec(r);
                      t.inserter.handleOpen(o[1])
                    }
                  }
                }
              }, this.windowHandlers = {
                resize: function() {
                  t.shown && (t.adjustSizeFull(), t.syncToolElement())
                }
              }, this.listenersInstalled = !1
            }
          }, {
            key: "attachEventHandlers",
            value: function() {
              var t = this;
              this.listenersInstalled || (Object.keys(this.documentHandlers).forEach((function(e) {
                t.doc.addEventListener(e, t.documentHandlers[e], {
                  passive: !1
                })
              })), Object.keys(this.windowHandlers).forEach((function(e) {
                window.addEventListener(e, t.windowHandlers[e], {
                  passive: !1
                })
              })), this.listenersInstalled = !0)
            }
          }, {
            key: "removeEventHandlers",
            value: function() {
              var t = this;
              this.listenersInstalled && (Object.keys(this.documentHandlers).forEach((function(e) {
                t.doc.removeEventListener(e, t.documentHandlers[e])
              })), Object.keys(this.windowHandlers).forEach((function(e) {
                window.removeEventListener(e, t.windowHandlers[e])
              })), this.listenersInstalled = !1)
            }
          }, {
            key: "elLeft",
            value: function() {
              return this.toolContainer.documentOffsetLeft + this.scroller.scrollLeft
            }
          }, {
            key: "elTop",
            value: function() {
              return this.toolContainer.documentOffsetTop + this.scroller.scrollTop
            }
          }, {
            key: "fitImage",
            value: function(t, e) {
              this.loadedImageType = e, this.resize(t.naturalWidth, t.naturalHeight), this.ctx.drawImage(t, 0, 0), this.zoomFactor = this.wrapper.documentClientHeight / this.size.h - .2, this.adjustSizeFull(), this.worklog.captureState()
            }
          }, {
            key: "loadImage",
            value: function(t, e) {
              this.inserter.handleOpen(t, e)
            }
          }, {
            key: "show",
            value: function(t, e) {
              return this.shown = !0, this.scrollWidth = (0, l.getScrollbarWidth)(), this.isMobile && (this.origOverflowY = this.body.style["overflow-y"], this.params.fixMobilePageReloader && (this.body.style["overflow-y"] = "hidden")), this.baseEl.removeAttribute("hidden"), this.holderEl && this.holderEl.removeAttribute("hidden"), "string" == typeof t ? (this.loadedName = (0, l.trim)((t.substring(t.lastIndexOf("/") + 1) || "").replace(/\..+$/, "")), this.loadImage(t, e)) : !1 !== t && this.clear(), this.attachEventHandlers(), this
            }
          }, {
            key: "hide",
            value: function() {
              return this.isMobile && (this.body.style["overflow-y"] = this.origOverflowY), this.shown = !1, this.baseEl.setAttribute("hidden", ""), this.holderEl && this.holderEl.setAttribute("hidden", ""), this.removeEventHandlers(), void 0 !== this.params.onHide && this.params.onHide(), this
            }
          }, {
            key: "doScale",
            value: function(t) {
              var e = t.width,
                n = t.height,
                r = t.scale;
              if (r) {
                if (e || n) throw new Error("You can't pass width or height and scale at the same time");
                this.resizer.newW = Math.round(this.size.w * r), this.resizer.newH = Math.round(this.size.h * r)
              } else {
                if (r) throw new Error("You can't pass width or height and scale at the same time");
                this.resizer.newW = e || Math.round(this.size.w * (n / this.size.h)), this.resizer.newH = n || Math.round(this.size.h * (e / this.size.w))
              }
              this.resizer.scaleButton.onclick()
            }
          }, {
            key: "openFile",
            value: function(t) {
              if (t) {
                this.loadedName = (0, l.trim)((t.name || "").replace(/\..+$/, ""));
                var e = (window.URL ? window.URL : window.webkitURL).createObjectURL(t);
                this.loadImage(e, t.type)
              }
            }
          }, {
            key: "getScale",
            value: function() {
              return this.canvas.getAttribute("width") / this.canvas.offsetWidth
            }
          }, {
            key: "adjustSizeFull",
            value: function() {
              var t = this.wrapper.documentClientWidth / this.wrapper.documentClientHeight;
              if (!1 === this.zoom)
                if (this.size.w > this.wrapper.documentClientWidth || this.size.h > this.wrapper.documentClientHeight) {
                  var e = t < this.size.ratio;
                  this.ratioRelation = e, e ? (this.canvas.style.width = "".concat(this.wrapper.clientWidth, "px"), this.canvas.style.height = "auto") : (this.canvas.style.width = "auto", this.canvas.style.height = "".concat(this.wrapper.clientHeight, "px")), this.scroller.style.overflow = "hidden"
                } else this.scroller.style.overflow = "hidden", this.canvas.style.width = "auto", this.canvas.style.height = "auto", this.ratioRelation = 0;
              else this.scroller.style.overflow = "scroll", this.canvas.style.width = "".concat(this.size.w * this.zoomFactor, "px"), this.canvas.style.height = "".concat(this.size.h * this.zoomFactor, "px"), this.ratioRelation = 0;
              this.syncToolElement(), this.select.draw()
            }
          }, {
            key: "resize",
            value: function(t, e) {
              this.info.innerHTML = "".concat(t, "<span>x</span>").concat(e, "<br>").concat((this.originalMime || "png").replace("image/", "")), this.size = {
                w: t,
                h: e,
                ratio: t / e
              }, this.canvas.setAttribute("width", this.size.w), this.canvas.setAttribute("height", this.size.h)
            }
          }, {
            key: "syncToolElement",
            value: function() {
              var t = Math.round(this.canvas.documentClientWidth),
                e = this.canvas.offsetLeft,
                n = Math.round(this.canvas.documentClientHeight),
                r = this.canvas.offsetTop;
              this.toolContainer.style.left = "".concat(e, "px"), this.toolContainer.style.width = "".concat(t, "px"), this.toolContainer.style.top = "".concat(r, "px"), this.toolContainer.style.height = "".concat(n, "px"), this.substrate.style.left = "".concat(e, "px"), this.substrate.style.width = "".concat(t, "px"), this.substrate.style.top = "".concat(r, "px"), this.substrate.style.height = "".concat(n, "px")
            }
          }, {
            key: "clear",
            value: function() {
              var t = this,
                e = "fill" === this.params.defaultSize.width ? this.wrapper.clientWidth : this.params.defaultSize.width,
                n = "fill" === this.params.defaultSize.height ? this.wrapper.clientHeight : this.params.defaultSize.height;
              if (this.resize(e, n), this.clearBackground(), this.worklog.captureState(!0), this.worklog.clean = !0, this.syncToolElement(), this.adjustSizeFull(), this.params.initText && this.worklog.empty) {
                this.ctx.lineWidth = 3, this.ctx.strokeStyle = "#fff";
                var r = this.wrapper.querySelectorAll(".init-text");
                r.length > 0 && r.forEach((function(t) {
                  t.remove()
                })), this.initText = document.createElement("div"), this.initText.classList.add("init-text"), this.wrapper.append(this.initText), this.initText.innerHTML = '<div style="pointer-events: none;position:absolute;top:50%;width:100%;left: 50%; transform: translate(-50%, -50%)">' + "".concat(this.params.initText, "</div>"), this.initText.style.left = "0", this.initText.style.top = "0", this.initText.style.right = "0", this.initText.style.bottom = "0", this.initText.style.pointerEvents = "none", this.initText.style["text-align"] = "center", this.initText.style.position = "absolute", this.initText.style.color = this.params.initTextColor, this.initText.style["font-family"] = this.params.initTextStyle.split(/ (.+)/)[1], this.initText.style["font-size"] = this.params.initTextStyle.split(/ (.+)/)[0], this.wrapper.addEventListener("click", (function() {
                  t.initText.remove(), t.initText = null
                }), {
                  once: !0
                })
              }
            }
          }, {
            key: "clearBackground",
            value: function() {
              this.ctx.beginPath(), this.ctx.clearRect(0, 0, this.size.w, this.size.h), this.ctx.rect(0, 0, this.size.w, this.size.h), this.ctx.fillStyle = this.currentBackground, this.ctx.fill()
            }
          }, {
            key: "setActiveTool",
            value: function(t) {
              var e = this;
              this.activeTool = t, this.zoomButtonActive = !1;
              var n = this.getBtnEl(this.activeTool);
              n && (n.className += " ptro-color-active-control");
              var r = "";
              (t.controls || []).forEach((function(t) {
                if (t.id = (0, l.genId)(), t.title && (r += '<span class="ptro-tool-ctl-name" title="'.concat((0, p.tr)(t.titleFull), '">').concat((0, p.tr)(t.title), "</span>")), "btn" === t.type) r += '<button type="button" '.concat(t.hint ? 'title="'.concat((0, p.tr)(t.hint), '"') : "", ' class="ptro-color-control ').concat(t.icon ? "ptro-icon-btn" : "ptro-named-btn", '" ') + "id=".concat(t.id, ">").concat(t.icon ? '<i class="ptro-icon ptro-icon-'.concat(t.icon, '"></i>') : "") + "<p>".concat(t.name || "", "</p></button>");
                else if ("color" === t.type) r += '<button type="button" id='.concat(t.id, " data-id='").concat(t.target, "' ") + 'style="background-color: '.concat(e.colorWidgetState[t.target].alphaColor, '" ') + 'class="color-diwget-btn ptro-color-btn ptro-bordered-btn ptro-color-control"></button><span class="ptro-btn-color-checkers-bar"></span>';
                else if ("int" === t.type) r += "<input id=".concat(t.id, ' class="ptro-input" type="number" min="').concat(t.min, '" max="').concat(t.max, '" ') + "data-id='".concat(t.target, "'/>");
                else if ("bool" === t.type) r += "<button id=".concat(t.id, ' class="ptro-input ptro-check" data-value="false" type="button" ') + "data-id='".concat(t.target, "'></button>");
                else if ("dropdown" === t.type) {
                  var n = "";
                  t.getAvailableValues().forEach((function(t) {
                    n += "<option ".concat(t.extraStyle ? "style='".concat(t.extraStyle, "'") : "") + " value='".concat(t.value, "' ").concat(t.title ? "title='".concat(t.title, "'") : "", ">").concat(t.name, "</option>")
                  })), r += "<select id=".concat(t.id, ' class="ptro-input" ') + "data-id='".concat(t.target, "'>").concat(n, "</select>")
                }
              })), this.toolControls.innerHTML = r, (t.controls || []).forEach((function(t) {
                "int" === t.type ? (e.getElemByIdSafe(t.id).value = t.getValue(), e.getElemByIdSafe(t.id).oninput = t.action) : "bool" === t.type ? (e.getElemByIdSafe(t.id).setAttribute("data-value", t.getValue() ? "true" : "false"), e.getElemByIdSafe(t.id).onclick = t.action) : "dropdown" === t.type ? (e.getElemByIdSafe(t.id).onchange = t.action, e.getElemByIdSafe(t.id).value = t.getValue()) : e.getElemByIdSafe(t.id).onclick = t.action
              })), t.activate()
            }
          }]) && b(e.prototype, n), r && b(e, r), t
        }();
        e.default = function(t) {
          return new x(t)
        }
      },
      666: function(t, e, n) {
        "use strict";

        function r(t) {
          return (r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
            return typeof t
          } : function(t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
          })(t)
        }
        Object.defineProperty(e, "__esModule", {
          value: !0
        }), e.default = void 0;
        var o = function(t) {
          if (t && t.__esModule) return t;
          if (null === t || "object" !== r(t) && "function" != typeof t) return {
            default: t
          };
          var e = i();
          if (e && e.has(t)) return e.get(t);
          var n = {},
            o = Object.defineProperty && Object.getOwnPropertyDescriptor;
          for (var a in t)
            if (Object.prototype.hasOwnProperty.call(t, a)) {
              var l = o ? Object.getOwnPropertyDescriptor(t, a) : null;
              l && (l.get || l.set) ? Object.defineProperty(n, a, l) : n[a] = t[a]
            } n.default = t, e && e.set(t, n);
          return n
        }(n(794));

        function i() {
          if ("function" != typeof WeakMap) return null;
          var t = new WeakMap;
          return i = function() {
            return t
          }, t
        }

        function a(t, e) {
          for (var n = 0; n < e.length; n++) {
            var r = e[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
          }
        }
        var l = function() {
          function t(e) {
            ! function(t, e) {
              if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }(this, t), this.main = e, this.canvasWidth = 600, this.canvasHeight = 420, this.el = this.main.toolContainer, this.input = this.el.querySelector(".ptro-text-tool-input")
          }
          var e, n, r;
          return e = t, (n = [{
            key: "init",
            value: function() {
              this.ctx = this.main.ctx, this.canvas = this.main.canvas, this.colorLayerData = this.ctx.getImageData(0, 0, this.canvasWidth, this.canvasHeight), this.drawingAreaX = 0, this.drawingAreaY = 0, this.canvasWidth = this.canvas.width, this.canvasHeight = this.canvas.height, this.drawingAreaWidth = this.canvasWidth, this.drawingAreaHeight = this.canvasHeight
            }
          }, {
            key: "handleMouseDown",
            value: function(t) {
              if ("ptro-crp-el" === t.target.classList[0]) {
                this.init(), this.colorLayerData = this.ctx.getImageData(0, 0, this.canvasWidth, this.canvasHeight), this.active || (this.input.innerHTML = "<br>", this.pendingClear = !0), this.active = !0;
                var e = t.clientX - this.main.elLeft() + this.main.scroller.scrollLeft,
                  n = t.clientY - this.main.elTop() + this.main.scroller.scrollTop;
                this.paintAt(e, n)
              }
            }
          }, {
            key: "paintAt",
            value: function(t, e) {
              t = (t = Math.round(t)) > 0 ? t : 0, e = (e = Math.round(e - 1)) > 0 ? e : 0, this.getClickedOnColor(t, e);
              var n = 4 * (e * this.canvasWidth + t),
                r = this.getPixelColor(this.colorLayerData, n),
                i = r.r,
                a = r.g,
                l = r.b,
                A = (r.a, (0, o.HexToRGB)(this.main.colorWidgetState.fill.palleteColor));
              this.color = this.main.colorWidgetState.fill.palleteColor, i === A.r && a === A.g && l === A.b || (this.floodFill(t, e, i, a, l), this.ctx.putImageData(this.colorLayerData, 0, 0), this.main.worklog.captureState())
            }
          }, {
            key: "matchStartColor",
            value: function(t) {
              var e = this.getPixelColor(this.colorLayerData, t);
              return this.matchClickedColor(e.r, e.g, e.b, e.a)
            }
          }, {
            key: "matchClickedColor",
            value: function(t, e, n, r) {
              var o = this.main.params.bucketSensivity,
                i = Math.abs(t - this.clickedOnColor.r) < o,
                a = Math.abs(e - this.clickedOnColor.g) < o,
                l = Math.abs(n - this.clickedOnColor.b) < o,
                A = Math.abs(r - this.clickedOnColor.a) < o;
              return i && a && l && A
            }
          }, {
            key: "getClickedOnColor",
            value: function(t, e) {
              var n = 4 * (e * this.canvasWidth + t),
                r = this.getPixelColor(this.colorLayerData, n);
              this.clickedOnColor = {
                r: r.r,
                g: r.g,
                b: r.b,
                a: r.a
              }
            }
          }, {
            key: "floodFill",
            value: function(t, e, n, r, i) {
              for (var a, l, A, s, c, p, h = this.drawingAreaX, u = this.drawingAreaY, d = this.drawingAreaX + this.drawingAreaWidth - 1, f = this.drawingAreaY + this.drawingAreaHeight - 1, g = [
                  [t, e]
                ]; g.length;) {
                l = (a = g.pop())[0], s = 4 * ((A = a[1]) * this.canvasWidth + l);
                for (var m = (0, o.HexToRGB)(this.color); A >= u && this.matchStartColor(s);) A -= 1, s -= 4 * this.canvasWidth;
                for (s += 4 * this.canvasWidth, A += 1, c = !1, p = !1; A <= f && this.matchStartColor(s);) A += 1, this.colorPixel(s, m.r, m.g, m.b), l > h && (this.matchStartColor(s - 4) ? c || (g.push([l - 1, A]), c = !0) : c && (c = !1)), l < d && (this.matchStartColor(s + 4) ? p || (g.push([l + 1, A]), p = !0) : p && (p = !1)), s += 4 * this.canvasWidth
              }
            }
          }, {
            key: "colorPixel",
            value: function(t, e, n, r, o) {
              this.colorLayerData.data[t] = e, this.colorLayerData.data[t + 1] = n, this.colorLayerData.data[t + 2] = r, this.colorLayerData.data[t + 3] = void 0 !== o ? o : 255
            }
          }, {
            key: "getPixelColor",
            value: function(t, e) {
              return {
                r: t.data[e],
                g: t.data[e + 1],
                b: t.data[e + 2],
                a: t.data[e + 3]
              }
            }
          }]) && a(e.prototype, n), r && a(e, r), t
        }();
        e.default = l
      },
      927: function(t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
          value: !0
        }), e.setParam = function(t, e) {
          s[t] = e;
          try {
            localStorage.setItem(A, JSON.stringify(s))
          } catch (t) {
            console.warn("Unable save to localstorage: ".concat(t))
          }
        }, e.setDefaults = function(t, e) {
          ! function() {
            try {
              s = JSON.parse(localStorage.getItem(A))
            } catch (t) {
              console.warn("Unable get from localStorage: ".concat(t))
            }
            s || (s = {})
          }();
          var n = t || {};
          n.language && (0, i.activate)(n.language);
          n.NON_SELECTABLE_TOOLS = ["pixelize", "crop", "rotate"], n.activeColor = s.activeColor || n.activeColor || "#ff0000", n.activeColorAlpha = c(s.activeColorAlpha, n.activeColorAlpha, 1), n.activeAlphaColor = (0, r.HexToRGBA)(n.activeColor, n.activeColorAlpha), n.activeFillColor = s.activeFillColor || n.activeFillColor || "#000000", n.activeFillColorAlpha = c(s.activeFillColorAlpha, n.activeFillColorAlpha, 0), n.activeFillAlphaColor = (0, r.HexToRGBA)(n.activeFillColor, n.activeFillColorAlpha), n.replace_all_on_empty_background = n.initText = n.initText || null, n.initTextColor = n.initTextColor || "#808080", n.initTextStyle = n.initTextStyle || "26px 'Open Sans', sans-serif", n.defaultLineWidth = s.defaultLineWidth || n.defaultLineWidth || 5, n.defaultPrimitiveShadowOn = c(s.defaultPrimitiveShadowOn, n.defaultPrimitiveShadowOn, !0), n.defaultArrowLength = s.defaultArrowLength || n.defaultArrowLength || 32, n.defaultEraserWidth = c(s.defaultEraserWidth, n.defaultEraserWidth, 5), n.defaultFontSize = c(s.defaultFontSize, n.defaultFontSize, 24), n.defaultFontBold = c(s.defaultFontBold, n.defaultFontBold, !1), n.defaultFontItalic = c(s.defaultFontItalic, n.defaultFontItalic, !1), n.replaceAllOnEmptyBackground = c(n.replaceAllOnEmptyBackground, !0), n.backgroundFillColor = s.backgroundFillColor || n.backgroundFillColor || "#ffffff", n.backgroundFillColorAlpha = n.backplateImgUrl ? 0 : c(s.backgroundFillColorAlpha, n.backgroundFillColorAlpha, 1), n.backgroundFillAlphaColor = (0, r.HexToRGBA)(n.backgroundFillColor, n.backgroundFillColorAlpha), n.textStrokeColor = s.textStrokeColor || n.textStrokeColor || "#ffffff", n.textStrokeColorAlpha = c(s.textStrokeColorAlpha, n.textStrokeColorAlpha, 1), n.textStrokeAlphaColor = (0, r.HexToRGBA)(n.textStrokeColor, n.textStrokeColorAlpha), n.shadowScale = c(n.shadowScale, 1), n.defaultTextStrokeAndShadow = c(s.defaultTextStrokeAndShadow, n.defaultTextStrokeAndShadow, !0), n.worklogLimit = c(n.worklogLimit, 100), n.hiddenTools = n.hiddenTools || ["redo", "zoomin", "zoomout"], n.hiddenTools.forEach((function(t) {
            e.includes(t) || (0, o.logError)("Hidden tool with name ".concat(t))
          })), n.defaultTool ? n.hiddenTools.includes(n.defaultTool) && ((0, o.logError)("Can't hide default tool '".concat(n.defaultTool, "', please change default tool to another to hide it")), n.hiddenTools.splice(defaultInHiddenIndex, 1)) : n.defaultTool = e.filter((function(t) {
            return !n.hiddenTools.includes(t) && !n.NON_SELECTABLE_TOOLS.includes(t)
          }))[0];
          if (n.pixelizePixelSize = s.pixelizePixelSize || n.pixelizePixelSize || "20%", n.colorScheme = n.colorScheme || {}, n.colorScheme.main = n.colorScheme.main || "#fff", n.colorScheme.control = n.colorScheme.control || "#fff", n.colorScheme.controlShadow = n.colorScheme.controlShadow || "0px 0px 3px 1px #bbb", n.colorScheme.controlContent = n.colorScheme.controlContent || "#000000", n.colorScheme.hoverControl = n.colorScheme.hoverControl || n.colorScheme.control, n.colorScheme.hoverControlContent = n.colorScheme.hoverControlContent || "#1a3d67", n.colorScheme.toolControlNameColor = n.colorScheme.toolControlNameColor || "rgba(0,0,0,0.07)", n.colorScheme.activeControl = n.colorScheme.activeControl || "#7485B1", n.colorScheme.activeControlContent = n.colorScheme.activeControlContent || n.colorScheme.main, n.colorScheme.inputBorderColor = n.colorScheme.inputBorderColor || n.colorScheme.main, n.colorScheme.inputBackground = n.colorScheme.inputBackground || "#ffffff", n.colorScheme.inputShadow = n.colorScheme.inputShadow || "inset 0 0 4px 1px #ccc", n.colorScheme.inputText = n.colorScheme.inputText || n.colorScheme.activeControl, n.colorScheme.backgroundColor = n.colorScheme.backgroundColor || "#999999", n.colorScheme.dragOverBarColor = n.colorScheme.dragOverBarColor || "#899dff", n.defaultSize = n.defaultSize || "fill", n.defaultPixelSize = n.defaultPixelSize || 4, n.extraFonts = n.extraFonts || [], n.toolbarHeightPx = n.toolbarHeightPx || 40, n.buttonSizePx = n.buttonSizePx || 32, n.bucketSensivity = n.bucketSensivity || 100, "object" !== l(n.defaultSize))
            if ("fill" === n.defaultSize) n.defaultSize = {
              width: "fill",
              height: "fill"
            };
            else {
              var a = n.defaultSize.split("x");
              n.defaultSize = {
                width: (0, o.trim)(a[0]),
                height: (0, o.trim)(a[1])
              }
            } if (n.toolbarPosition = n.toolbarPosition || "bottom", n.fixMobilePageReloader = void 0 === n.fixMobilePageReloader || n.fixMobilePageReloader, n.translation) {
            var p = n.translation.name;
            i.default.get().addTranslation(p, n.translation.strings), i.default.get().activate(p)
          }
          return n.styles = ".ptro-color-main{\n      background-color:".concat(n.colorScheme.main, ";\n      color:").concat(n.colorScheme.controlContent, ";\n    }\n    .ptro-color-control{\n      box-shadow:").concat(n.colorScheme.controlShadow, ";\n      background-color:").concat(n.colorScheme.control, ";\n      color:").concat(n.colorScheme.controlContent, "}\n    .ptro-tool-ctl-name{\n      background-color:").concat(n.colorScheme.toolControlNameColor, ";\n    }\n    button.ptro-color-control:hover:not(.ptro-color-active-control):not([disabled]){\n        background-color: ").concat(n.colorScheme.hoverControl, ";\n        color:").concat(n.colorScheme.hoverControlContent, "}    \n    .ptro-bordered-control{border-color: ").concat(n.colorScheme.activeControl, "}\n    input.ptro-input,.ptro-check,input.ptro-input:focus,select.ptro-input,select.ptro-input:focus {\n      border: 1px solid ").concat(n.colorScheme.inputBorderColor, ";\n      background-color: ").concat(n.colorScheme.inputBackground, ";\n      color: ").concat(n.colorScheme.inputText, ";\n      box-shadow:").concat(n.colorScheme.inputShadow, ";\n    }\n    .ptro-bar-dragover{background-color:").concat(n.colorScheme.dragOverBarColor, "}\n    .ptro-color,.ptro-bordered-btn{\n      border: 1px solid ").concat(n.colorScheme.inputBorderColor, ";\n    }\n    .ptro-color-control:active:enabled {\n        background-color: ").concat(n.colorScheme.activeControl, ";\n        color: ").concat(n.colorScheme.activeControlContent, "}\n    .ptro-color-active-control{\n        background-color: ").concat(n.colorScheme.activeControl, ";\n        color:").concat(n.colorScheme.activeControlContent, "}\n    .ptro-wrapper{\n      background-color:").concat(n.colorScheme.backgroundColor, ";\n      bottom:").concat("top" === n.toolbarPosition ? "0" : n.toolbarHeightPx, "px;\n      top:").concat("top" === n.toolbarPosition ? n.toolbarHeightPx : "0", "px;\n    }\n    .ptro-icon-btn {\n      height: ").concat(n.buttonSizePx, "px;\n      width: ").concat(n.buttonSizePx, "px;\n      margin: 0 0 0 ").concat((n.toolbarHeightPx - n.buttonSizePx) / 2, "px;\n    }\n    .ptro-bar-right {\n      margin-right: ").concat((n.toolbarHeightPx - n.buttonSizePx) / 2, "px;\n    }\n    .ptro-bar {\n      height: ").concat(n.toolbarHeightPx, "px;\n      ").concat("top" === n.toolbarPosition ? "top" : "bottom", ": 0;\n    }"), n
        };
        var r = n(794),
          o = n(564),
          i = function(t) {
            if (t && t.__esModule) return t;
            if (null === t || "object" !== l(t) && "function" != typeof t) return {
              default: t
            };
            var e = a();
            if (e && e.has(t)) return e.get(t);
            var n = {},
              r = Object.defineProperty && Object.getOwnPropertyDescriptor;
            for (var o in t)
              if (Object.prototype.hasOwnProperty.call(t, o)) {
                var i = r ? Object.getOwnPropertyDescriptor(t, o) : null;
                i && (i.get || i.set) ? Object.defineProperty(n, o, i) : n[o] = t[o]
              } n.default = t, e && e.set(t, n);
            return n
          }(n(784));

        function a() {
          if ("function" != typeof WeakMap) return null;
          var t = new WeakMap;
          return a = function() {
            return t
          }, t
        }

        function l(t) {
          return (l = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
            return typeof t
          } : function(t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
          })(t)
        }
        var A = "painterro-data",
          s = {};

        function c() {
          for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++) e[n] = arguments[n];
          for (var r = 0; r < e.length; r += 1)
            if (void 0 !== e[r]) return e[r]
        }
      },
      335: function(t, e) {
        "use strict";

        function n(t, e) {
          for (var n = 0; n < e.length; n++) {
            var r = e[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
          }
        }
        Object.defineProperty(e, "__esModule", {
          value: !0
        }), e.default = void 0;
        var r = function() {
          function t(e) {
            ! function(t, e) {
              if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }(this, t), this.ctx = e.ctx, this.el = e.toolContainer, this.main = e, this.helperCanvas = document.createElement("canvas"), this.canvas = e.canvas
          }
          var e, r, o;
          return e = t, (r = [{
            key: "activate",
            value: function(t) {
              this.type = t, this.state = {}, this.ctx.lineJoin = "line" === t || "brush" === t || "eraser" === t || "arrow" === t ? "round" : "miter"
            }
          }, {
            key: "setLineWidth",
            value: function(t) {
              if (!"".concat(t).match(/^\d+$/)) throw Error('WARN: STR "'.concat(t, '" is not an int'));
              this.lineWidth = +t
            }
          }, {
            key: "setShadowOn",
            value: function(t) {
              this.shadowOn = t
            }
          }, {
            key: "setArrowLength",
            value: function(t) {
              this.arrowLength = t
            }
          }, {
            key: "setEraserWidth",
            value: function(t) {
              this.eraserWidth = t
            }
          }, {
            key: "handleMouseDown",
            value: function(t) {
              this.activate(this.type);
              var e = t.target.classList[0];
              this.ctx.lineWidth = this.lineWidth, this.ctx.strokeStyle = this.main.colorWidgetState.line.alphaColor, this.ctx.fillStyle = this.main.colorWidgetState.fill.alphaColor;
              var n = this.main.getScale();
              if (this.ctx.lineCap = "round", "ptro-crp-el" === e || "ptro-zoomer" === e)
                if (this.tmpData = this.ctx.getImageData(0, 0, this.main.size.w, this.main.size.h), "brush" === this.type || "eraser" === this.type) {
                  this.state.cornerMarked = !0;
                  var r = [t.clientX - this.main.elLeft() + this.main.scroller.scrollLeft, t.clientY - this.main.elTop() + this.main.scroller.scrollTop],
                    o = {
                      x: r[0] * n,
                      y: r[1] * n
                    };
                  this.points = [o], this.drawBrushPath()
                } else this.state.cornerMarked = !0, this.centerCord = [t.clientX - this.main.elLeft() + this.main.scroller.scrollLeft, t.clientY - this.main.elTop() + this.main.scroller.scrollTop], this.centerCord = [this.centerCord[0] * n, this.centerCord[1] * n]
            }
          }, {
            key: "drawBrushPath",
            value: function() {
              var t, e = this,
                n = this.points,
                r = this.ctx.globalCompositeOperation,
                o = "eraser" === this.type;
              t = this.main.colorWidgetState.line.alphaColor;
              for (var i = 1 !== this.main.currentBackgroundAlpha, a = 1; a <= (o && i ? 2 : 1); a += 1)
                if (o && (this.ctx.globalCompositeOperation = 1 === a && i ? "destination-out" : r, t = 1 === a && i ? "rgba(0,0,0,1)" : this.main.currentBackground), 1 === n.length) this.ctx.beginPath(), this.ctx.lineWidth = 0, this.ctx.fillStyle = t, this.ctx.arc(this.points[0].x, this.points[0].y, this.lineWidth / 2, this.lineWidth / 2, 0, 2 * Math.PI), this.ctx.fill(), this.ctx.closePath();
                else {
                  this.ctx.beginPath(), "eraser" === this.type ? this.ctx.lineWidth = this.eraserWidth : this.ctx.lineWidth = this.lineWidth, this.ctx.strokeStyle = t, this.ctx.fillStyle = this.main.colorWidgetState.fill.alphaColor, this.ctx.moveTo(this.points[0].x, this.points[0].y);
                  var l = void 0;
                  n.slice(1).forEach((function(t) {
                    e.ctx.lineTo(t.x, t.y), l = t
                  })), l && this.ctx.moveTo(l.x, l.y), this.ctx.stroke(), this.ctx.closePath()
                } this.ctx.globalCompositeOperation = r
            }
          }, {
            key: "handleMouseMove",
            value: function(t) {
              var e = this.ctx;
              if (this.state.cornerMarked) {
                this.ctx.putImageData(this.tmpData, 0, 0), this.curCord = [t.clientX - this.main.elLeft() + this.main.scroller.scrollLeft, t.clientY - this.main.elTop() + this.main.scroller.scrollTop];
                var n = this.main.getScale();
                if (this.curCord = [this.curCord[0] * n, this.curCord[1] * n], "brush" === this.type || "eraser" === this.type) {
                  var r = {
                    x: this.curCord[0],
                    y: this.curCord[1]
                  };
                  this.points.push(r), this.drawBrushPath()
                } else if ("line" === this.type) {
                  if (t.ctrlKey || t.shiftKey) {
                    var o = 180 * Math.atan(-(this.curCord[1] - this.centerCord[1]) / (this.curCord[0] - this.centerCord[0])) / Math.PI;
                    if (Math.abs(o) < 22.5) this.curCord[1] = this.centerCord[1];
                    else if (Math.abs(o) > 67.5) this.curCord[0] = this.centerCord[0];
                    else {
                      var i = (Math.abs(this.curCord[0] - this.centerCord[0]) - Math.abs(this.centerCord[1] - this.curCord[1])) / 2;
                      this.curCord[0] -= i * (this.centerCord[0] < this.curCord[0] ? 1 : -1), this.curCord[1] -= i * (this.centerCord[1] > this.curCord[1] ? 1 : -1)
                    }
                  }
                  e.beginPath(), e.moveTo(this.centerCord[0], this.centerCord[1]), e.lineTo(this.curCord[0], this.curCord[1]), e.closePath();
                  var a = e.shadowColor;
                  this.shadowOn && (e.shadowColor = "rgba(0,0,0,0.7)", e.shadowBlur = this.lineWidth, e.shadowOffsetX = this.lineWidth / 2, e.shadowOffsetY = this.lineWidth / 2), e.stroke(), e.shadowColor = a
                } else if ("arrow" === this.type) {
                  var l = 180 * Math.atan(-(this.curCord[1] - this.centerCord[1]) / (this.curCord[0] - this.centerCord[0])) / Math.PI;
                  if (t.ctrlKey || t.shiftKey)
                    if (Math.abs(l) < 22.5) this.curCord[1] = this.centerCord[1];
                    else if (Math.abs(l) > 67.5) this.curCord[0] = this.centerCord[0];
                  else {
                    var A = (Math.abs(this.curCord[0] - this.centerCord[0]) - Math.abs(this.centerCord[1] - this.curCord[1])) / 2;
                    this.curCord[0] -= A * (this.centerCord[0] < this.curCord[0] ? 1 : -1), this.curCord[1] -= A * (this.centerCord[1] > this.curCord[1] ? 1 : -1)
                  }
                  this.curCord[0] < this.centerCord[0] && (l = 180 + l), this.ctx.beginPath();
                  var s = this.ctx.lineCap,
                    c = this.ctx.fillStyle;
                  this.ctx.fillStyle = this.main.colorWidgetState.line.alphaColor, this.ctx.lineCap = "square";
                  var p, h, u, d = Math.min(this.arrowLength, .9 * Math.sqrt(Math.pow(this.centerCord[0] - this.curCord[0], 2) + Math.pow(this.centerCord[1] - this.curCord[1], 2))),
                    f = this.centerCord[0],
                    g = this.centerCord[1],
                    m = this.curCord[0],
                    C = this.curCord[1],
                    B = this.curCord[0],
                    v = this.curCord[1];
                  p = Math.atan2(C - g, m - f), h = d * Math.cos(p) + B, u = d * Math.sin(p) + v, this.ctx.moveTo(h, u), p += 1 / 3 * (2 * Math.PI), h = d * Math.cos(p) + B, u = d * Math.sin(p) + v, this.ctx.lineTo(h, u);
                  var w = B + (h - B) / 3,
                    b = v + (u - v) / 3;
                  e.lineTo(w, b), e.lineTo(this.centerCord[0], this.centerCord[1]), p += 1 / 3 * (2 * Math.PI);
                  var x = B + ((h = d * Math.cos(p) + B) - B) / 3,
                    y = v + ((u = d * Math.sin(p) + v) - v) / 3;
                  e.lineTo(x, y), e.lineTo(h, u), e.closePath();
                  var I = e.shadowColor;
                  this.shadowOn && (e.shadowColor = "rgba(0,0,0,0.7)", e.shadowBlur = Math.log(d) * this.main.params.shadowScale, e.shadowOffsetX = Math.log10(d), e.shadowOffsetY = Math.log10(d)), e.fill(), e.lineCap = s, e.fillStyle = c, e.shadowColor = I
                } else if ("rect" === this.type) {
                  e.beginPath();
                  var k = [this.centerCord[0], this.centerCord[1]],
                    S = this.curCord[0] - this.centerCord[0],
                    E = this.curCord[1] - this.centerCord[1];
                  if (t.ctrlKey || t.shiftKey) {
                    var z = Math.min(Math.abs(S), Math.abs(E));
                    S = z * Math.sign(S), E = z * Math.sign(E)
                  }
                  var T = this.lineWidth / 2;
                  S < 0 && (k[0] += S, S = -S), E < 0 && (k[1] += E, E = -E), this.ctx.rect(k[0] + T, k[1] + T, S - this.lineWidth, E - this.lineWidth), this.ctx.fill();
                  var Q = e.shadowColor;
                  this.shadowOn && (e.shadowColor = "rgba(0,0,0,0.7)", e.shadowBlur = this.lineWidth, e.shadowOffsetX = this.lineWidth / 2, e.shadowOffsetY = this.lineWidth / 2), this.lineWidth && this.ctx.strokeRect(k[0], k[1], S, E), e.shadowColor = Q, this.ctx.closePath()
                } else if ("ellipse" === this.type) {
                  this.ctx.beginPath();
                  var F = this.centerCord[0],
                    P = this.centerCord[1],
                    M = this.curCord[0] - F,
                    W = this.curCord[1] - P;
                  if (t.ctrlKey || t.shiftKey) {
                    var Y = Math.min(Math.abs(M), Math.abs(W));
                    M = Y * Math.sign(M), W = Y * Math.sign(W)
                  }
                  var L = Math.abs(M),
                    D = Math.abs(W),
                    O = Math.min(F, F + M),
                    j = Math.min(P, P + W);
                  this.ctx.save();
                  var R, H = 1,
                    N = 1,
                    G = L / 2,
                    U = D / 2;
                  L > D ? (N = L / D, R = G) : (H = D / L, R = U), this.ctx.scale(1 / H, 1 / N), this.ctx.arc((O + G) * H, (j + U) * N, R, 0, 2 * Math.PI), this.ctx.restore(), this.ctx.fill();
                  var J = e.shadowColor;
                  this.shadowOn && (e.shadowColor = "rgba(0,0,0,0.7)", e.shadowBlur = this.lineWidth, e.shadowOffsetX = this.lineWidth / 2, e.shadowOffsetY = this.lineWidth / 2), e.stroke(), e.shadowColor = J, this.ctx.beginPath()
                }
              }
            }
          }, {
            key: "handleMouseUp",
            value: function() {
              this.state.cornerMarked && (this.state.cornerMarked = !1, this.main.worklog.captureState())
            }
          }, {
            key: "setPixelSize",
            value: function(t) {
              this.pixelSize = t
            }
          }]) && n(e.prototype, r), o && n(e, o), t
        }();
        e.default = r
      },
      724: function(t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
          value: !0
        }), e.default = void 0;
        var r = n(784),
          o = n(564);

        function i(t, e) {
          for (var n = 0; n < e.length; n++) {
            var r = e[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
          }
        }
        var a = function() {
          function t(e) {
            var n = this;
            ! function(t, e) {
              if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }(this, t), this.main = e, this.wrapper = e.wrapper.querySelector(".ptro-resize-widget-wrapper"), this.inputW = e.wrapper.querySelector(".ptro-resize-widget-wrapper .ptro-resize-width-input"), this.inputH = e.wrapper.querySelector(".ptro-resize-widget-wrapper .ptro-resize-heigth-input"), this.inputWLimit = 1e4, this.inputHLimit = 13e3, this.linkButton = e.wrapper.querySelector(".ptro-resize-widget-wrapper button.ptro-link"), this.linkButtonIcon = e.wrapper.querySelector(".ptro-resize-widget-wrapper button.ptro-link i"), this.closeButton = e.wrapper.querySelector(".ptro-resize-widget-wrapper button.ptro-close"), this.scaleButton = e.wrapper.querySelector(".ptro-resize-widget-wrapper button.ptro-scale"), this.resizeButton = e.wrapper.querySelector(".ptro-resize-widget-wrapper button.ptro-resize"), this.linked = !0, this.closeButton.onclick = function() {
              n.startClose()
            }, this.scaleButton.onclick = function() {
              if (t.validationZeroValue(n.newH, n.newW)) {
                var e = n.main.size.w,
                  r = n.main.size.h,
                  o = n.main.canvas.toDataURL();
                n.main.resize(n.newW, n.newH), n.main.ctx.save(), n.main.ctx.scale(n.newW / e, n.newH / r);
                var i = new Image;
                i.onload = function() {
                  n.main.ctx.drawImage(i, 0, 0), n.main.adjustSizeFull(), n.main.ctx.restore(), n.main.worklog.captureState(), n.startClose()
                }, i.src = o
              }
            }, this.resizeButton.onclick = function() {
              if (t.validationZeroValue(n.newH, n.newW)) {
                var e = n.main.canvas.toDataURL();
                n.main.resize(n.newW, n.newH), n.main.clearBackground();
                var r = new Image;
                r.onload = function() {
                  n.main.ctx.drawImage(r, 0, 0), n.main.adjustSizeFull(), n.main.worklog.captureState(), n.startClose()
                }, r.src = e
              }
            }, this.linkButton.onclick = function() {
              n.linked = !n.linked, n.linked ? n.linkButtonIcon.className = "ptro-icon ptro-icon-linked" : n.linkButtonIcon.className = "ptro-icon ptro-icon-unlinked"
            }, this.inputW.oninput = function() {
              var t = Number(n.inputW.value);
              if (n.validationWidth(t), n.linked) {
                var e = n.main.size.ratio;
                n.newH = Math.round(n.newW / e), n.validationHeight(n.newH), n.inputH.value = n.newH
              }
            }, this.inputH.oninput = function() {
              var t = Number(n.inputH.value);
              if (n.validationHeight(t), n.linked) {
                var e = n.main.size.ratio;
                n.newW = Math.round(n.newH * e), n.validationWidth(n.newW), n.inputW.value = +n.newW
              }
            }
          }
          var e, n, a;
          return e = t, a = [{
            key: "validationEmptyValue",
            value: function(t) {
              return "" !== t || "0" !== t
            }
          }, {
            key: "validationZeroValue",
            value: function() {
              for (var t = !0, e = arguments.length, n = new Array(e), r = 0; r < e; r++) n[r] = arguments[r];
              return n.forEach((function(e) {
                t = !(0 === e) && t
              })), t
            }
          }, {
            key: "html",
            value: function() {
              return '<div class="ptro-resize-widget-wrapper ptro-common-widget-wrapper ptro-v-middle" hidden><div class="ptro-resize-widget ptro-color-main ptro-v-middle-in"><div style="display: inline-block"><table><tr>' + '<td class="ptro-label ptro-resize-table-left">'.concat((0, r.tr)("width"), "</td>") + '<td><input class="ptro-input ptro-resize-width-input" type="number" min="0" max="3000" step="1"/></td></tr><tr>' + '<td class="ptro-label ptro-resize-table-left">'.concat((0, r.tr)("height"), "</td>") + '<td><input class="ptro-input ptro-resize-heigth-input" type="number" min="0" max="3000" step="1"/></td></tr></table></div><div class="ptro-resize-link-wrapper">' + '<button type="button" class="ptro-icon-btn ptro-link ptro-color-control" title="'.concat((0, r.tr)("keepRatio"), '">') + '<i class="ptro-icon ptro-icon-linked" style="font-size: 18px;"></i></button></div><div></div><div style="margin-top: 40px;"><button type="button" class="ptro-named-btn ptro-resize ptro-color-control">' + "".concat((0, r.tr)("resizeResize"), "</button>") + '<button type="button" class="ptro-named-btn ptro-scale ptro-color-control">' + "".concat((0, r.tr)("resizeScale"), "</button>") + '<button type="button" class="ptro-named-btn ptro-close ptro-color-control">' + "".concat((0, r.tr)("cancel"), "</button>") + "</div></div></div>"
            }
          }], (n = [{
            key: "validationWidthValue",
            value: function(t) {
              return t <= this.inputWLimit
            }
          }, {
            key: "validationHeightValue",
            value: function(t) {
              return t <= this.inputHLimit
            }
          }, {
            key: "validationHeight",
            value: function(e) {
              if (!this.validationHeightValue(e)) return this.inputH.value = this.inputHLimit, void(this.newH = this.inputHLimit);
              this.newH = e, t.validationEmptyValue(e) ? this.newH = e : (this.inputH.value = 0, this.newH = 0)
            }
          }, {
            key: "validationWidth",
            value: function(e) {
              if (!this.validationWidthValue(e)) return this.inputW.value = this.inputWLimit, void(this.newW = this.inputWLimit);
              this.newW = e, t.validationEmptyValue(e) ? this.newW = e : (this.inputW.value = "0", this.newW = 0)
            }
          }, {
            key: "open",
            value: function() {
              this.wrapper.removeAttribute("hidden"), this.opened = !0, this.newW = this.main.size.w, this.newH = this.main.size.h, this.inputW.value = +this.newW, this.inputH.value = +this.newH
            }
          }, {
            key: "close",
            value: function() {
              this.wrapper.setAttribute("hidden", "true"), this.opened = !1
            }
          }, {
            key: "startClose",
            value: function() {
              this.main.closeActiveTool()
            }
          }, {
            key: "handleKeyDown",
            value: function(t) {
              return t.keyCode === o.KEYS.enter || t.keyCode === o.KEYS.esc && (this.startClose(), !0)
            }
          }]) && i(e.prototype, n), a && i(e, a), t
        }();
        e.default = a
      },
      505: function(t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
          value: !0
        }), e.default = void 0;
        var r = n(564);

        function o(t, e) {
          for (var n = 0; n < e.length; n++) {
            var r = e[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
          }
        }
        var i = function() {
          function t(e, n) {
            ! function(t, e) {
              if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }(this, t), this.main = e, this.canvas = e.canvas, this.wrapper = e.wrapper, this.ctx = e.ctx, this.areaionCallback = n, this.shown = !1, this.area = {
              el: e.toolContainer,
              rect: document.querySelector("#".concat(e.id, " .ptro-crp-rect"))
            }, this.imagePlaced = !1, this.areaionCallback(!1)
          }
          var e, n, i;
          return e = t, i = [{
            key: "code",
            value: function() {
              return '<div class="ptro-crp-rect" hidden><div class="ptro-crp-l select-handler"></div><div class="ptro-crp-r select-handler"></div><div class="ptro-crp-t select-handler"></div><div class="ptro-crp-b select-handler"></div><div class="ptro-crp-tl select-handler"></div><div class="ptro-crp-tr select-handler"></div><div class="ptro-crp-bl select-handler"></div><div class="ptro-crp-br select-handler"></div></div>'
            }
          }], (n = [{
            key: "activate",
            value: function() {
              this.area.activated = !0, this.areaionCallback(!1)
            }
          }, {
            key: "doCrop",
            value: function() {
              var t = this.ctx.getImageData(0, 0, this.main.size.w, this.main.size.h);
              this.main.resize(this.area.bottoml[0] - this.area.topl[0], this.area.bottoml[1] - this.area.topl[1]), this.main.ctx.putImageData(t, -this.area.topl[0], -this.area.topl[1]), this.main.adjustSizeFull(), this.main.worklog.captureState()
            }
          }, {
            key: "doPixelize",
            value: function() {
              var t = this.area.topl,
                e = [this.area.bottoml[0] - t[0], this.area.bottoml[1] - t[1]];
              if (this.pixelizePixelSize = this.main.params.pixelizePixelSize, "%" === this.pixelizePixelSize.slice(-1) ? this.pixelSize = Math.min(e[0], e[1]) / (100 / this.pixelizePixelSize.slice(0, -1)) : "px" === this.pixelizePixelSize.slice(-2).toLowerCase() ? this.pixelSize = this.pixelizePixelSize.slice(0, -2) : this.pixelSize = this.pixelizePixelSize, this.pixelSize < 2 && (this.pixelSize = 2), e[1] < e[0]) {
                this.pixelSizeY = this.pixelSize;
                var n = Math.round(e[0] / this.pixelSizeY);
                this.pixelSizeX = 1 * e[0] / n
              } else {
                this.pixelSizeX = this.pixelSize;
                var r = Math.round(e[1] / this.pixelSizeX);
                this.pixelSizeY = 1 * e[1] / r
              }
              for (var o = [], i = [e[0] / this.pixelSizeX, e[1] / this.pixelSizeY], a = 0; a < i[0]; a += 1) {
                for (var l = [], A = 0; A < i[1]; A += 1) l.push([0, 0, 0, 0, 0]);
                o.push(l)
              }
              for (var s = this.ctx.getImageData(t[0], t[1], e[0], e[1]), c = 0; c < e[0]; c += 1)
                for (var p = 0; p < e[1]; p += 1) {
                  var h = Math.floor(c / this.pixelSizeX),
                    u = Math.floor(p / this.pixelSizeY),
                    d = 4 * (p * e[0] + c);
                  o[h][u][0] += s.data[d], o[h][u][1] += s.data[d + 1], o[h][u][2] += s.data[d + 2], o[h][u][3] += s.data[d + 3], o[h][u][4] += 1
                }
              for (var f = 0; f < i[0]; f += 1)
                for (var g = 0; g < i[1]; g += 1) {
                  var m = o[f][g][4];
                  this.ctx.fillStyle = "rgba(\n".concat(Math.round(o[f][g][0] / m), ", \n").concat(Math.round(o[f][g][1] / m), ", \n").concat(Math.round(o[f][g][2] / m), ", \n").concat(Math.round(o[f][g][3] / m), ")");
                  var C = t[0] + f * this.pixelSizeX,
                    B = t[1] + g * this.pixelSizeY;
                  this.ctx.fillRect(C, B, this.pixelSizeX, this.pixelSizeY)
                }
              this.main.worklog.captureState()
            }
          }, {
            key: "doClearArea",
            value: function() {
              this.ctx.beginPath(), this.ctx.clearRect(this.area.topl[0], this.area.topl[1], this.area.bottoml[0] - this.area.topl[0], this.area.bottoml[1] - this.area.topl[1]), this.ctx.rect(this.area.topl[0], this.area.topl[1], this.area.bottoml[0] - this.area.topl[0], this.area.bottoml[1] - this.area.topl[1]), this.ctx.fillStyle = this.main.currentBackground, this.ctx.fill(), this.main.worklog.captureState()
            }
          }, {
            key: "selectAll",
            value: function() {
              this.setLeft(0), this.setRight(0), this.setBottom(0), this.setTop(0), this.show(), this.reCalcCropperCords(), this.area.activated && this.areaionCallback(!this.imagePlaced && this.area.rect.clientWidth > 0 && this.area.rect.clientHeight > 0)
            }
          }, {
            key: "getScale",
            value: function() {
              return this.canvas.clientWidth / this.canvas.getAttribute("width")
            }
          }, {
            key: "reCalcCropperCords",
            value: function() {
              var t = this.getScale();
              this.area.topl = [Math.round((this.rectLeft() - this.main.elLeft()) / t), Math.round((this.rectTop() - this.main.elTop()) / t)], this.area.bottoml = [Math.round(this.area.topl[0] + (this.area.rect.clientWidth + 2) / t), Math.round(this.area.topl[1] + (this.area.rect.clientHeight + 2) / t)]
            }
          }, {
            key: "adjustPosition",
            value: function() {
              if (this.shown) {
                var t = this.getScale();
                this.setLeft(this.area.topl[0] * t), this.setTop(this.area.topl[1] * t), this.setRight(0), this.setRight(this.canvas.clientWidth - this.area.bottoml[0] * t), this.setBottom(this.canvas.clientHeight - this.area.bottoml[1] * t)
              }
            }
          }, {
            key: "placeAt",
            value: function(t, e, n, r, o) {
              this.imagePlaced && this.finishPlacing(), this.main.closeActiveTool(!0), this.main.setActiveTool(this.main.defaultTool);
              var i = this.getScale();
              this.setLeft(t * i), this.setTop(e * i), this.setRight(n * i), this.setBottom(r * i);
              var a = document.createElement("canvas");
              a.width = o.naturalWidth, a.height = o.naturalHeight;
              var l = a.getContext("2d");
              l.drawImage(o, 0, 0), this.placedData = a.toDataURL("image/png");
              var A = 1e3 / Math.max(o.naturalWidth, o.naturalHeight);
              A >= 1 ? this.placedDataLow = this.placedData : (a.width = o.naturalWidth * A, a.height = o.naturalHeight * A, l.scale(A, A), l.drawImage(o, 0, 0), this.placedDataLow = a.toDataURL("image/png")), this.main.select.area.rect.style["background-image"] = "url(".concat(this.placedData, ")"), this.show(), this.reCalcCropperCords(), this.imagePlaced = !0, this.main.select.activate(), this.placedRatio = o.naturalWidth / o.naturalHeight
            }
          }, {
            key: "finishPlacing",
            value: function() {
              this.imagePlaced = !1, this.main.select.area.rect.style["background-image"] = "none", this.main.inserter.insert(this.area.topl[0], this.area.topl[1], this.area.bottoml[0] - this.area.topl[0], this.area.bottoml[1] - this.area.topl[1]), this.area.activated = !1
            }
          }, {
            key: "cancelPlacing",
            value: function() {
              this.imagePlaced = !1, this.main.select.area.rect.style["background-image"] = "none", this.hide(), this.main.worklog.undoState()
            }
          }, {
            key: "handleKeyDown",
            value: function(t) {
              if (this.main.inserter.handleKeyDown(t)) return !0;
              if (this.shown && this.imagePlaced) {
                if (t.keyCode === r.KEYS.enter) return this.finishPlacing(), !0;
                if (t.keyCode === r.KEYS.esc) return this.cancelPlacing(), !0
              } else {
                if (this.shown && t.keyCode === r.KEYS.del) return this.doClearArea(), !0;
                if (t.keyCode === r.KEYS.a && t.ctrlKey) return this.selectAll(), event.preventDefault(), !0;
                if (t.keyCode === r.KEYS.esc && this.shown) return this.hide(), !0
              }
              return !1
            }
          }, {
            key: "handleMouseDown",
            value: function(t) {
              var e = this,
                n = t.target.classList[0],
                r = {
                  "ptro-crp-el": function() {
                    if (e.area.activated) {
                      e.imagePlaced && e.finishPlacing();
                      var n = t.clientX - e.main.elLeft() + e.main.scroller.scrollLeft,
                        r = t.clientY - e.main.elTop() + e.main.scroller.scrollTop;
                      e.setLeft(n), e.setTop(r), e.setRight(e.area.el.clientWidth - n), e.setBottom(e.area.el.clientHeight - r), e.reCalcCropperCords(), e.area.resizingB = !0, e.area.resizingR = !0, e.hide()
                    }
                  },
                  "ptro-crp-rect": function() {
                    e.area.moving = !0, e.area.xHandle = t.clientX - e.rectLeft() + e.main.scroller.scrollLeft, e.area.yHandle = t.clientY - e.rectTop() + e.main.scroller.scrollTop
                  },
                  "ptro-crp-tr": function() {
                    e.area.resizingT = !0, e.area.resizingR = !0
                  },
                  "ptro-crp-br": function() {
                    e.area.resizingB = !0, e.area.resizingR = !0
                  },
                  "ptro-crp-bl": function() {
                    e.area.resizingB = !0, e.area.resizingL = !0
                  },
                  "ptro-crp-tl": function() {
                    e.area.resizingT = !0, e.area.resizingL = !0
                  },
                  "ptro-crp-t": function() {
                    e.area.resizingT = !0
                  },
                  "ptro-crp-r": function() {
                    e.area.resizingR = !0
                  },
                  "ptro-crp-b": function() {
                    e.area.resizingB = !0
                  },
                  "ptro-crp-l": function() {
                    e.area.resizingL = !0
                  }
                };
              n in r && (r[n](), this.imagePlaced && (this.main.select.area.rect.style["background-image"] = "url(".concat(this.placedDataLow, ")")))
            }
          }, {
            key: "setLeft",
            value: function(t) {
              this.left = t, this.area.rect.style.left = "".concat(t, "px")
            }
          }, {
            key: "setRight",
            value: function(t) {
              this.right = t, this.area.rect.style.right = "".concat(t, "px")
            }
          }, {
            key: "setTop",
            value: function(t) {
              this.top = t, this.area.rect.style.top = "".concat(t, "px")
            }
          }, {
            key: "setBottom",
            value: function(t) {
              this.bottom = t, this.area.rect.style.bottom = "".concat(t, "px")
            }
          }, {
            key: "handleMouseMove",
            value: function(t) {
              if (this.area.activated)
                if (this.area.moving) {
                  var e = t.clientX - this.main.elLeft() - this.area.xHandle + this.main.scroller.scrollLeft;
                  e < 0 ? e = 0 : e + this.area.rect.clientWidth > this.area.el.clientWidth - 2 && (e = this.area.el.clientWidth - this.area.rect.clientWidth - 2);
                  var n = e - this.left;
                  this.setLeft(e), this.setRight(this.right - n);
                  var o = t.clientY - this.main.elTop() - this.area.yHandle + this.main.scroller.scrollTop;
                  o < 0 ? o = 0 : o + this.area.rect.clientHeight > this.area.el.clientHeight - 2 && (o = this.area.el.clientHeight - this.area.rect.clientHeight - 2);
                  var i = o - this.top;
                  this.setTop(o), this.setBottom(this.bottom - i), this.reCalcCropperCords()
                } else {
                  var a = !1;
                  if (this.area.resizingL) {
                    a = !0;
                    var l = this.fixCropperLeft(t.clientX + this.main.scroller.scrollLeft);
                    this.setLeft(l - this.main.elLeft()), this.reCalcCropperCords()
                  }
                  if (this.area.resizingR) {
                    a = !0;
                    var A = this.fixCropperRight(t.clientX + this.main.scroller.scrollLeft);
                    this.setRight(this.area.el.clientWidth + this.main.elLeft() - A), this.reCalcCropperCords()
                  }
                  if (this.area.resizingT) {
                    a = !0;
                    var s = this.fixCropperTop(t.clientY + this.main.scroller.scrollTop);
                    this.setTop(s - this.main.elTop()), this.reCalcCropperCords()
                  }
                  if (this.area.resizingB) {
                    a = !0;
                    var c = this.fixCropperBottom(t.clientY + this.main.scroller.scrollTop);
                    this.setBottom(this.area.el.clientHeight + this.main.elTop() - c), this.reCalcCropperCords()
                  }!this.imagePlaced || t.ctrlKey || t.shiftKey || (this.area.resizingT && (this.area.resizingL ? this.leftKeepRatio() : this.rightKeepRatio(), this.topKeepRatio(), this.reCalcCropperCords()), this.area.resizingB && (this.area.resizingL ? this.leftKeepRatio() : this.rightKeepRatio(), this.bottomKeepRatio(), this.reCalcCropperCords()), this.area.resizingL && (this.area.resizingT ? this.topKeepRatio() : this.bottomKeepRatio(), this.leftKeepRatio(), this.reCalcCropperCords()), this.area.resizingR && (this.area.resizingT ? this.topKeepRatio() : this.bottomKeepRatio(), this.rightKeepRatio(), this.reCalcCropperCords())), a && !this.shown && this.show(), a && (0, r.clearSelection)()
                }
            }
          }, {
            key: "leftKeepRatio",
            value: function() {
              var t = this.area.rect.clientHeight * this.placedRatio,
                e = this.main.elLeft() + (this.area.el.clientWidth - this.right - t - 2),
                n = this.fixCropperLeft(e);
              this.setLeft(n - this.main.elLeft())
            }
          }, {
            key: "topKeepRatio",
            value: function() {
              var t = this.area.rect.clientWidth / this.placedRatio,
                e = this.fixCropperTop(this.main.elTop() + (this.area.el.clientHeight - this.bottom - t - 2));
              this.setTop(e - this.main.elTop())
            }
          }, {
            key: "bottomKeepRatio",
            value: function() {
              var t = this.area.rect.clientWidth / this.placedRatio,
                e = this.fixCropperBottom(this.main.elTop() + this.top + t + 2);
              this.setBottom(this.area.el.clientHeight + this.main.elTop() - e)
            }
          }, {
            key: "rightKeepRatio",
            value: function() {
              var t = this.area.rect.clientHeight * this.placedRatio,
                e = this.fixCropperRight(this.main.elLeft() + this.left + t + 2);
              this.setRight(this.area.el.clientWidth + this.main.elLeft() - e)
            }
          }, {
            key: "show",
            value: function() {
              this.shown = !0, this.area.rect.removeAttribute("hidden")
            }
          }, {
            key: "handleMouseUp",
            value: function() {
              this.area.activated && this.areaionCallback(!this.imagePlaced && this.area.rect.clientWidth > 0 && this.area.rect.clientHeight > 0), this.area.moving = !1, this.area.resizingT = !1, this.area.resizingR = !1, this.area.resizingB = !1, this.area.resizingL = !1, this.imagePlaced && (this.main.select.area.rect.style["background-image"] = "url(".concat(this.placedData, ")"))
            }
          }, {
            key: "close",
            value: function() {
              this.imagePlaced && this.finishPlacing(), this.area.activated = !1, this.hide()
            }
          }, {
            key: "hide",
            value: function() {
              this.area.rect.setAttribute("hidden", "true"), this.shown = !1, this.areaionCallback(!1)
            }
          }, {
            key: "draw",
            value: function() {
              if (this.area.topl) {
                var t = this.canvas.clientWidth / this.canvas.getAttribute("width");
                this.setLeft(this.area.topl[0] * t), this.setTop(this.area.topl[1] * t), this.setRight(this.area.el.clientWidth - (this.area.bottoml[0] - this.area.topl[0]) * t), this.setBottom(this.area.el.clientHeight - (this.area.bottoml[1] - this.area.topl[1]) * t)
              }
            }
          }, {
            key: "rectLeft",
            value: function() {
              return this.area.rect.documentOffsetLeft + this.main.scroller.scrollLeft
            }
          }, {
            key: "rectTop",
            value: function() {
              return this.area.rect.documentOffsetTop + this.main.scroller.scrollTop
            }
          }, {
            key: "fixCropperLeft",
            value: function(t) {
              var e = t,
                n = this.rectLeft() + this.area.rect.clientWidth;
              return e < this.main.elLeft() ? this.main.elLeft() : (e > n && (e = n, this.area.resizingL && (this.area.resizingL = !1, this.area.resizingR = !0)), e)
            }
          }, {
            key: "fixCropperRight",
            value: function(t) {
              var e = t,
                n = this.main.elLeft() + this.area.el.clientWidth;
              return e > n ? n : (e < this.rectLeft() && (e = this.rectLeft() + this.area.rect.clientWidth, this.area.resizingR && (this.area.resizingR = !1, this.area.resizingL = !0)), e)
            }
          }, {
            key: "fixCropperTop",
            value: function(t) {
              var e = t,
                n = this.rectTop() + this.area.rect.clientHeight;
              return e < this.main.elTop() ? this.main.elTop() : (e > n && (e = n, this.area.resizingT && (this.area.resizingT = !1, this.area.resizingB = !0)), e)
            }
          }, {
            key: "fixCropperBottom",
            value: function(t) {
              var e = t,
                n = this.main.elTop() + this.area.el.clientHeight;
              return e > n ? n : (e < this.rectTop() && (e = this.rectTop() + this.area.rect.clientHeight, this.area.resizingB && (this.area.resizingB = !1, this.area.resizingT = !0)), e)
            }
          }]) && o(e.prototype, n), i && o(e, i), t
        }();
        e.default = i
      },
      624: function(t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
          value: !0
        }), e.default = void 0;
        var r = n(784),
          o = n(564),
          i = n(927);

        function a(t, e) {
          for (var n = 0; n < e.length; n++) {
            var r = e[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
          }
        }
        var l = function() {
          function t(e) {
            var n = this;
            ! function(t, e) {
              if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }(this, t), this.main = e, this.wrapper = e.wrapper.querySelector(".ptro-settings-widget-wrapper"), this.inputPixelSize = e.wrapper.querySelector(".ptro-settings-widget-wrapper .ptro-pixel-size-input"), this.applyButton = e.wrapper.querySelector(".ptro-settings-widget-wrapper button.ptro-apply"), this.closeButton = e.wrapper.querySelector(".ptro-settings-widget-wrapper button.ptro-close"), this.clearButton = e.wrapper.querySelector(".ptro-settings-widget-wrapper button.ptro-clear"), this.bgSelBtn = e.wrapper.querySelector(".ptro-settings-widget-wrapper .ptro-color-btn"), this.errorHolder = e.wrapper.querySelector(".ptro-settings-widget-wrapper .ptro-error"), this.clearButton.onclick = function() {
              n.main.currentBackground = n.main.colorWidgetState.bg.alphaColor, n.main.currentBackgroundAlpha = n.main.colorWidgetState.bg.alpha, n.main.clearBackground(), n.startClose()
            }, this.bgSelBtn.onclick = function() {
              n.main.colorPicker.open(n.main.colorWidgetState.bg)
            }, this.closeButton.onclick = function() {
              n.startClose()
            }, this.applyButton && (this.applyButton.onclick = function() {
              var t, e = (0, o.trim)(n.inputPixelSize.value);
              if ("%" === e.slice(-1)) {
                var a = (0, o.trim)(e.slice(0, -1));
                (t = /^\d+$/.test(a) && 0 !== parseInt(a, 10)) && (e = "".concat(a, "%"))
              } else t = /^\d+$/.test(e) && 0 !== parseInt(e, 10);
              t ? (n.main.select.pixelizePixelSize = e, (0, i.setParam)("pixelizePixelSize", e), n.startClose(), n.errorHolder.setAttribute("hidden", "")) : (n.errorHolder.innerText = (0, r.tr)("wrongPixelSizeValue"), n.errorHolder.removeAttribute("hidden"))
            })
          }
          var e, n, l;
          return e = t, l = [{
            key: "html",
            value: function(t) {
              return '<div class="ptro-settings-widget-wrapper ptro-common-widget-wrapper ptro-v-middle" hidden><div class="ptro-settings-widget ptro-color-main ptro-v-middle-in"><table style="margin-top: 5px"><tr>' + '<td class="ptro-label ptro-resize-table-left" style="height:30px;">'.concat((0, r.tr)("backgroundColor"), "</td>") + '<td class="ptro-strict-cell"><button type="button" data-id="bg" class="ptro-color-btn ptro-bordered-btn ptro-color-control" style="margin-top: -12px;"></button><span class="ptro-btn-color-checkers"></span></td><td>' + '<button type="button" style="margin-top: -2px;" class="ptro-named-btn ptro-clear ptro-color-control" title="'.concat((0, r.tr)("fillPageWith"), '">').concat((0, r.tr)("clear"), "</button>") + "</td></tr>" + (t.params.pixelizeHideUserInput ? "" : "<tr>" + '<td class="ptro-label ptro-resize-table-left" >'.concat((0, r.tr)("pixelizePixelSize"), "</td>") + '<td colspan="2"><input class="ptro-input ptro-pixel-size-input" pattern="[0-9]{1,}%?" type="text" /></td></tr>') + '</table><div class="ptro-error" hidden></div><div style="margin-top: 20px">' + (t.params.pixelizeHideUserInput ? '<button type="button" class="ptro-named-btn ptro-close ptro-color-control">'.concat((0, r.tr)("close"), "</button>") : '<button type="button" class="ptro-named-btn ptro-apply ptro-color-control">' + "".concat((0, r.tr)("apply"), "</button>") + '<button type="button" class="ptro-named-btn ptro-close ptro-color-control">'.concat((0, r.tr)("cancel"), "</button>")) + "</div></div></div>"
            }
          }], (n = [{
            key: "handleKeyDown",
            value: function(t) {
              return t.keyCode === o.KEYS.enter || t.keyCode === o.KEYS.esc && (this.startClose(), !0)
            }
          }, {
            key: "open",
            value: function() {
              this.wrapper.removeAttribute("hidden"), this.opened = !0, this.inputPixelSize && (this.inputPixelSize.value = this.main.select.pixelizePixelSize), this.bgSelBtn.style["background-color"] = this.main.colorWidgetState.bg.alphaColor
            }
          }, {
            key: "close",
            value: function() {
              this.wrapper.setAttribute("hidden", "true"), this.opened = !1
            }
          }, {
            key: "startClose",
            value: function() {
              this.errorHolder.setAttribute("hidden", ""), this.main.closeActiveTool()
            }
          }]) && a(e.prototype, n), l && a(e, l), t
        }();
        e.default = l
      },
      997: function(t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
          value: !0
        }), e.default = void 0;
        var r, o = n(564),
          i = n(784),
          a = (r = n(306)) && r.__esModule ? r : {
            default: r
          };

        function l(t) {
          return function(t) {
            if (Array.isArray(t)) return A(t)
          }(t) || function(t) {
            if ("undefined" != typeof Symbol && Symbol.iterator in Object(t)) return Array.from(t)
          }(t) || function(t, e) {
            if (!t) return;
            if ("string" == typeof t) return A(t, e);
            var n = Object.prototype.toString.call(t).slice(8, -1);
            "Object" === n && t.constructor && (n = t.constructor.name);
            if ("Map" === n || "Set" === n) return Array.from(t);
            if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return A(t, e)
          }(t) || function() {
            throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
          }()
        }

        function A(t, e) {
          (null == e || e > t.length) && (e = t.length);
          for (var n = 0, r = new Array(e); n < e; n++) r[n] = t[n];
          return r
        }

        function s(t, e) {
          for (var n = 0; n < e.length; n++) {
            var r = e[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
          }
        }
        var c = function() {
          function t(e) {
            var n = this;
            ! function(t, e) {
              if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }(this, t), this.ctx = e.ctx, this.el = e.toolContainer, this.main = e, this.wrapper = e.wrapper, this.input = this.el.querySelector(".ptro-text-tool-input"), this.inputWrapper = this.el.querySelector(".ptro-text-tool-input-wrapper"), this.inputWrapper.style.display = "none", this.isBold = e.params.defaultFontBold, this.isItalic = e.params.defaultFontItalic, this.strokeOn = e.params.defaultTextStrokeAndShadow, this.strokeColor = e.params.textStrokeAlphaColor, this.setFontSize(e.params.defaultFontSize), this.setFont(this.getFonts()[0].value), this.setFontIsBold(this.isBold), this.setFontIsItalic(this.isItalic), this.el.querySelector(".ptro-text-tool-apply").onclick = function() {
              n.apply()
            }, this.el.querySelector(".ptro-text-tool-cancel").onclick = function() {
              n.close()
            }
          }
          var e, n, r;
          return e = t, r = [{
            key: "code",
            value: function() {
              return '<span class="ptro-text-tool-input-wrapper"><div contenteditable="true" class="ptro-text-tool-input"></div><span class="ptro-text-tool-buttons">' + '<button type="button" class="ptro-text-tool-apply ptro-icon-btn ptro-color-control" title="'.concat((0, i.tr)("apply"), '" \n                   style="margin: 2px">') + '<i class="ptro-icon ptro-icon-apply"></i></button>' + '<button type="button" class="ptro-text-tool-cancel ptro-icon-btn ptro-color-control" title="'.concat((0, i.tr)("cancel"), '"\n                   style="margin: 2px">') + '<i class="ptro-icon ptro-icon-close"></i></button></span></span>'
            }
          }], (n = [{
            key: "getFont",
            value: function() {
              return this.font
            }
          }, {
            key: "getFonts",
            value: function() {
              var t = ["Arial, Helvetica, sans-serif", '"Arial Black", Gadget, sans-serif', '"Comic Sans MS", cursive, sans-serif', "Impact, Charcoal, sans-serif", '"Lucida Sans Unicode", "Lucida Grande", sans-serif', "Tahoma, Geneva, sans-serif", '"Trebuchet MS", Helvetica, sans-serif', "Verdana, Geneva, sans-serif", '"Courier New", Courier, monospace', '"Lucida Console", Monaco, monospace'].concat(l(this.main.params.extraFonts)),
                e = [];
              return t.forEach((function(t) {
                var n = t.split(",")[0].replace(/"/g, "");
                e.push({
                  value: t,
                  name: n,
                  extraStyle: "font-family:".concat(t),
                  title: n
                })
              })), e
            }
          }, {
            key: "setFont",
            value: function(t) {
              this.font = t, this.input.style["font-family"] = t, this.active && this.input.focus(), this.active && this.reLimit()
            }
          }, {
            key: "setStrokeOn",
            value: function(t) {
              this.strokeOn = t, this.setStrokeParams()
            }
          }, {
            key: "setFontIsBold",
            value: function(t) {
              this.isBold = t, this.input.style["font-weight"] = t ? "bold" : "normal", this.active && (this.input.focus(), this.reLimit()), this.setStrokeParams()
            }
          }, {
            key: "setFontIsItalic",
            value: function(t) {
              this.isItalic = t, this.input.style["font-style"] = t ? "italic" : "normal", this.active && (this.input.focus(), this.reLimit())
            }
          }, {
            key: "setFontSize",
            value: function(t) {
              this.fontSize = t, this.input.style["font-size"] = "".concat(t, "px"), this.setStrokeParams(), this.active && this.reLimit()
            }
          }, {
            key: "setStrokeParams",
            value: function() {
              this.strokeOn ? this.input.style["text-shadow"] = "\n      -".concat(1, "px -").concat(1, "px 1px ").concat(this.strokeColor, ",").concat(1, "px -").concat(1, "px 1px ").concat(this.strokeColor, ",\n      -").concat(1, "px  ").concat(1, "px 1px ").concat(this.strokeColor, ",").concat(1, "px  ").concat(1, "px 1px ").concat(this.strokeColor, ",\n      ").concat(1, "px ").concat(1, "px ").concat(Math.log(this.fontSize) * this.main.params.shadowScale, "px black") : this.input.style["text-shadow"] = "none"
            }
          }, {
            key: "setFontColor",
            value: function(t) {
              this.color = t, this.input.style.color = t, this.input.style["outline-color"] = t
            }
          }, {
            key: "inputLeft",
            value: function() {
              return this.input.documentOffsetLeft + this.main.scroller.scrollLeft
            }
          }, {
            key: "inputTop",
            value: function() {
              return this.input.documentOffsetTop + this.main.scroller.scrollTop
            }
          }, {
            key: "reLimit",
            value: function() {
              this.inputWrapper.style.right = "auto", this.inputLeft() + this.input.clientWidth > this.main.elLeft() + this.el.clientWidth ? this.inputWrapper.style.right = "0" : this.inputWrapper.style.right = "auto", this.inputWrapper.style.bottom = "auto", this.inputTop() + this.input.clientHeight > this.main.elTop() + this.el.clientHeight ? this.inputWrapper.style.bottom = "0" : this.inputWrapper.style.bottom = "auto"
            }
          }, {
            key: "handleMouseDown",
            value: function(t) {
              var e = this;
              if ("ptro-crp-el" === t.target.classList[0]) {
                this.active || (this.input.innerHTML = "<br>", this.pendingClear = !0), this.active = !0, this.crd = [t.clientX - this.main.elLeft() + this.main.scroller.scrollLeft, t.clientY - this.main.elTop() + this.main.scroller.scrollTop];
                var n = this.main.getScale();
                this.scaledCord = [this.crd[0] * n, this.crd[1] * n], this.inputWrapper.style.left = "".concat(this.crd[0], "px"), this.inputWrapper.style.top = "".concat(this.crd[1], "px"), this.inputWrapper.style.display = "inline", this.input.focus(), this.reLimit(), this.input.onkeydown = function(t) {
                  t.ctrlKey && t.keyCode === o.KEYS.enter && (e.apply(), t.preventDefault()), t.keyCode === o.KEYS.esc && (e.close(), e.main.closeActiveTool(), t.preventDefault()), e.reLimit(), e.pendingClear && (e.input.innerText = e.input.innerText.slice(1), e.pendingClear = !1), t.stopPropagation()
                }, this.main.isMobile || t.preventDefault()
              }
            }
          }, {
            key: "apply",
            value: function() {
              var t = this,
                e = this.input.style.border,
                n = this.main.getScale();
              this.input.style.border = "none", a.default.toPng(this.input, {
                style: {
                  "transform-origin": "top left",
                  transform: "scale(".concat(n, ")")
                },
                width: this.input.clientWidth * n,
                height: this.input.clientHeight * n
              }).then((function(n) {
                var r = new Image;
                r.src = n, r.onload = function() {
                  t.ctx.drawImage(r, t.scaledCord[0], t.scaledCord[1]), t.input.style.border = e, t.close(), t.main.worklog.captureState(), t.main.closeActiveTool()
                }
              })).catch((function(t) {
                console.error("oops, something went wrong!", t)
              }))
            }
          }, {
            key: "close",
            value: function() {
              this.active = !1, this.inputWrapper.style.display = "none"
            }
          }]) && s(e.prototype, n), r && s(e, r), t
        }();
        e.default = c
      },
      784: function(t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
          value: !0
        }), e.activate = function(t) {
          return m.get().activate(t)
        }, e.tr = function(t) {
          return m.get().tr(t)
        }, e.default = void 0;
        var r = d(n(731)),
          o = d(n(347)),
          i = d(n(482)),
          a = d(n(831)),
          l = d(n(103)),
          A = d(n(486)),
          s = d(n(827)),
          c = d(n(274)),
          p = d(n(388)),
          h = d(n(401)),
          u = d(n(711));

        function d(t) {
          return t && t.__esModule ? t : {
            default: t
          }
        }

        function f(t, e) {
          for (var n = 0; n < e.length; n++) {
            var r = e[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
          }
        }
        var g = null,
          m = function() {
            function t() {
              ! function(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
              }(this, t), this.translations = {
                de: r.default,
                en: o.default,
                es: i.default,
                ca: a.default,
                fr: l.default,
                pl: A.default,
                "pt-PT": s.default,
                "pt-BR": c.default,
                ru: p.default,
                ja: h.default,
                nl: u.default
              }, this.defaultTranslator = this.translations.en
            }
            var e, n, d;
            return e = t, d = [{
              key: "get",
              value: function() {
                return g || (g = new t)
              }
            }], (n = [{
              key: "addTranslation",
              value: function(t, e) {
                this.translations[t] = e
              }
            }, {
              key: "activate",
              value: function(t) {
                void 0 !== this.translations[t] ? (this.trans = t, this.translator = this.translations[this.trans]) : this.translator = this.defaultTranslator
              }
            }, {
              key: "tr",
              value: function(t) {
                var e = t.split("."),
                  n = this.translator,
                  r = this.defaultTranslator;
                return e.forEach((function(t) {
                  r = r[t], void 0 !== n && (n = n[t])
                })), n || r
              }
            }]) && f(e.prototype, n), d && f(e, d), t
          }();
        e.default = m
      },
      564: function(t, e) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
          value: !0
        }), e.genId = function() {
          for (var t = "ptro", e = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789", n = 0; n < 20; n += 1) t += e.charAt(Math.floor(Math.random() * e.length));
          return t
        }, e.addDocumentObjectHelpers = function() {
          "documentOffsetTop" in Element.prototype || Object.defineProperty(Element.prototype, "documentOffsetTop", {
            get: function() {
              return this.getBoundingClientRect().top
            }
          });
          "documentOffsetLeft" in Element.prototype || Object.defineProperty(Element.prototype, "documentOffsetLeft", {
            get: function() {
              return this.getBoundingClientRect().left
            }
          });
          "documentClientWidth" in Element.prototype || Object.defineProperty(Element.prototype, "documentClientWidth", {
            get: function() {
              var t = this.getBoundingClientRect();
              return t.width ? t.width : t.right - t.left
            }
          });
          "documentClientHeight" in Element.prototype || Object.defineProperty(Element.prototype, "documentClientHeight", {
            get: function() {
              var t = this.getBoundingClientRect();
              return t.height ? t.height : t.bottom - t.top
            }
          })
        }, e.clearSelection = function() {
          var t = null;
          window.getSelection ? t = window.getSelection() : document.selection && (t = document.selection);
          t && (t.empty && t.empty(), t.removeAllRanges && t.removeAllRanges())
        }, e.distance = function(t, e) {
          var n = t.x - e.x,
            r = t.y - e.y;
          return Math.sqrt(n * n + r * r)
        }, e.trim = function(t) {
          return String(t).replace(/^\s+|\s+$/g, "")
        }, e.copyToClipboard = function(t) {
          if (window.clipboardData && window.clipboardData.setData) window.clipboardData.setData("Text", t);
          else if (document.queryCommandSupported && document.queryCommandSupported("copy")) {
            var e = document.createElement("textarea");
            e.textContent = t, e.style.position = "fixed", document.body.appendChild(e), e.select();
            try {
              document.execCommand("copy")
            } catch (t) {
              console.warn("Copy to clipboard failed.", t)
            } finally {
              document.body.removeChild(e)
            }
          }
        }, e.getScrollbarWidth = function() {
          var t = document.createElement("div");
          t.style.visibility = "hidden", t.style.width = "100px", t.style.msOverflowStyle = "scrollbar", document.body.appendChild(t);
          var e = t.offsetWidth;
          t.style.overflow = "scroll";
          var n = document.createElement("div");
          n.style.width = "100%", t.appendChild(n);
          var r = n.offsetWidth;
          return t.parentNode.removeChild(t), e - r
        }, e.imgToDataURL = function(t, e, n) {
          var r = new XMLHttpRequest;
          r.onload = function() {
            var t = new FileReader;
            t.onloadend = function() {
              e(t.result)
            }, t.readAsDataURL(r.response)
          }, r.onerror = function() {
            "function" == typeof n && n()
          }, r.open("GET", t), r.responseType = "blob", r.send()
        }, e.logError = function(t) {
          console.warn("[Painterro] ".concat(t))
        }, e.checkIn = function(t, e) {
          return -1 !== e.indexOf(t)
        }, e.KEYS = void 0;
        e.KEYS = {
          y: 89,
          z: 90,
          s: 83,
          c: 67,
          x: 88,
          a: 65,
          l: 76,
          p: 80,
          r: 82,
          o: 79,
          b: 66,
          e: 69,
          t: 84,
          f: 70,
          enter: 13,
          esc: 27,
          del: 46
        }
      },
      390: function(t, e) {
        "use strict";

        function n(t, e) {
          for (var n = 0; n < e.length; n++) {
            var r = e[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
          }
        }
        Object.defineProperty(e, "__esModule", {
          value: !0
        }), e.default = void 0;
        var r = function() {
          function t(e, n) {
            ! function(t, e) {
              if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }(this, t), this.main = e, this.current = null, this.changedHandler = n, this.empty = !0, this.clean = !0, this.ctx = e.ctx
          }
          var e, r, o;
          return e = t, (r = [{
            key: "getWorklogAsString",
            value: function(t) {
              var e = Object.assign({}, this.current),
                n = this.clearedCount;
              if (void 0 !== t.limit) {
                var r = t.limit;
                n = 0;
                var o, i = e;
                for (o = 0; o < r; o += 1) i.prevCount = r - o, o < r - 1 && i.prev && (i = i.prev);
                i.prev = null
              }
              return JSON.stringify({
                clearedCount: n,
                current: e
              })
            }
          }, {
            key: "loadWorklogFromString",
            value: function(t) {
              var e = JSON.parse(t);
              return e && (this.clearedCount = e.clearedCount, this.current = e.current, this.applyState(this.current)), this.main
            }
          }, {
            key: "changed",
            value: function(t) {
              this.current.prevCount - this.clearedCount > this.main.params.worklogLimit && (this.first = this.first.next, this.first.prev = null, this.clearedCount += 1), this.changedHandler({
                first: null === this.current.prev,
                last: null === this.current.next,
                initial: t
              }), this.empty = t, this.clean = !1
            }
          }, {
            key: "captureState",
            value: function(t) {
              var e = this.main.activeTool ? this.main.activeTool.name : null;
              this.main.params.NON_SELECTABLE_TOOLS.includes(e) && (e = this.main.defaultTool.name);
              var n = {
                sizew: this.main.size.w,
                sizeh: this.main.size.h,
                activeToolName: e,
                data: this.ctx.getImageData(0, 0, this.main.size.w, this.main.size.h)
              };
              null === this.current ? (n.prev = null, n.prevCount = 0, this.first = n, this.clearedCount = 0) : (n.prev = this.current, n.prevCount = this.current.prevCount + 1, this.current.next = n), n.next = null, this.current = n, this.changed(t)
            }
          }, {
            key: "reCaptureState",
            value: function() {
              null !== this.current.prev && (this.current = this.current.prev), this.captureState()
            }
          }, {
            key: "applyState",
            value: function(t) {
              this.main.resize(t.sizew, t.sizeh), this.main.ctx.putImageData(t.data, 0, 0), this.main.adjustSizeFull(), this.main.select.hide()
            }
          }, {
            key: "undoState",
            value: function() {
              if (null !== this.current.prev) {
                var t = this.current.activeToolName;
                this.current = this.current.prev, this.applyState(this.current), this.changed(!1), t ? (this.main.closeActiveTool(!0), this.main.setActiveTool(this.main.toolByName[t])) : this.main.closeActiveTool(), this.main.params.onUndo && this.main.params.onUndo(this.current)
              }
            }
          }, {
            key: "redoState",
            value: function() {
              if (null !== this.current.next) {
                this.current = this.current.next, this.applyState(this.current), this.changed(!1);
                var t = this.current.activeToolName;
                t ? (this.main.closeActiveTool(!0), this.main.setActiveTool(this.main.toolByName[t])) : this.main.closeActiveTool(), this.main.params.onRedo && this.main.params.onRedo(this.current)
              }
            }
          }]) && n(e.prototype, r), o && n(e, o), t
        }();
        e.default = r
      },
      9: function(t, e) {
        "use strict";

        function n(t, e) {
          for (var n = 0; n < e.length; n++) {
            var r = e[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
          }
        }
        Object.defineProperty(e, "__esModule", {
          value: !0
        }), e.default = void 0;
        var r = function() {
          function t(e) {
            ! function(t, e) {
              if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }(this, t), this.main = e, this.zomer = e.wrapper.querySelector(".ptro-zoomer"), this.zomerCtx = this.zomer.getContext("2d"), this.canvas = this.main.canvas, this.ctx = this.main.ctx, this.wrapper = this.main.wrapper, this.gridColor = this.zomerCtx.createImageData(1, 1), this.gridColor.data[0] = 255, this.gridColor.data[1] = 255, this.gridColor.data[2] = 255, this.gridColor.data[3] = 255, this.gridColorRed = this.zomerCtx.createImageData(1, 1), this.gridColorRed.data[0] = 255, this.gridColorRed.data[1] = 0, this.gridColorRed.data[2] = 0, this.gridColorRed.data[3] = 255, this.captW = 7, this.middle = Math.ceil(this.captW / 2) - 1, this.periodW = 8, this.fullW = this.captW * this.periodW, this.halfFullW = this.fullW / 2, this.zomer.setAttribute("width", this.fullW), this.zomer.setAttribute("height", this.fullW), this.cursor = this.wrapper.style.cursor
          }
          var e, r, o;
          return e = t, o = [{
            key: "html",
            value: function() {
              return '<canvas class="ptro-zoomer" width="" height="0"></canvas>'
            }
          }], (r = [{
            key: "handleMouseMove",
            value: function(t) {
              if (this.main.colorPicker.choosing && !t.altKey) {
                this.shown || (this.shown = !0, this.zomer.style.display = "block", this.cursor = this.wrapper.style.cursor, this.wrapper.style.cursor = "none");
                var e = this.main.getScale(),
                  n = [t.clientX - this.main.elLeft() + this.main.scroller.scrollLeft, t.clientY - this.main.elTop() + this.main.scroller.scrollTop],
                  r = n[0] * e;
                r = (r = r < 1 ? 1 : r) > this.main.size.w - 1 ? this.main.size.w - 1 : r;
                var o = n[1] * e;
                o = (o = o < 1 ? 1 : o) > this.main.size.h - 1 ? this.main.size.h - 1 : o;
                for (var i = this.captW, a = this.periodW, l = 0; l < i; l += 1)
                  for (var A = 0; A < i; A += 1)
                    for (var s = this.ctx.getImageData(r + l - this.middle, o + A - this.middle, 1, 1), c = 0; c < a; c += 1)
                      for (var p = 0; p < a; p += 1) c === a - 1 || p === a - 1 ? l === this.middle && A === this.middle || l === this.middle && A === this.middle - 1 && p === a - 1 || l === this.middle - 1 && A === this.middle && c === a - 1 ? this.zomerCtx.putImageData(this.gridColorRed, l * a + c, A * a + p) : this.zomerCtx.putImageData(this.gridColor, l * a + c, A * a + p) : this.zomerCtx.putImageData(s, l * a + c, A * a + p);
                this.zomer.style.left = "".concat(t.clientX - this.wrapper.documentOffsetLeft - this.halfFullW, "px"), this.zomer.style.top = "".concat(t.clientY - this.wrapper.documentOffsetTop - this.halfFullW, "px")
              } else this.shown && this.hideZoomHelper()
            }
          }, {
            key: "hideZoomHelper",
            value: function() {
              this.zomer.style.display = "none", this.wrapper.style.cursor = this.cursor, this.shown = !1
            }
          }]) && n(e.prototype, r), o && n(e, o), t
        }();
        e.default = r
      },
      831: function(t, e) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
          value: !0
        }), e.default = void 0;
        e.default = {
          lineColor: "L",
          lineColorFull: "Color de línia",
          fillColor: "O",
          fillColorFull: "Color per omplir",
          alpha: "T",
          alphaFull: "Transparència",
          lineWidth: "A",
          lineWidthFull: "Ample de línia",
          arrowLength: "L",
          arrowLengthFull: "Longitud de la fletxa",
          eraserWidth: "B",
          eraserWidthFull: "Ample de borrador",
          textColor: "C",
          textColorFull: "Color de texte",
          fontSize: "L",
          fontSizeFull: "Tamany de la lletra",
          fontStrokeSize: "TLl",
          fontStrokeSizeFull: "Tamany linea de la lletra",
          fontStyle: "EL",
          fontStyleFull: "Estil de lletra",
          fontName: "NL",
          fontNameFull: "Nom del tipus de lletra",
          textStrokeColor: "CL",
          textStrokeColorFull: "Color de lletra",
          apply: "Aplicar",
          cancel: "Cancel·lar",
          close: "Tancar",
          clear: "Netejar",
          width: "Ample",
          height: "Alt",
          keepRatio: "Mantenir ratio Ample/Alt",
          fillPageWith: "Omplir la pàgina amb el color de fons actual",
          pixelSize: "P",
          pixelSizeFull: "Tamany de pixel",
          resizeScale: "Escala",
          resizeResize: "Redimensionar",
          backgroundColor: "Color de fons de la pàgina",
          pixelizePixelSize: "Tamany de píxel al pixelar",
          wrongPixelSizeValue: "Tamany de píxel incorrecte. Pots entrar per exemple '20%' que significa que el tamany de píxel és 1/5 de l'àrea seleccionada, o '4' significa 4 px",
          tools: {
            crop: "Retallar imatge a l'àrea seleccionada",
            pixelize: "Pixelar l'àrea seleccionada",
            rect: "Dibuixar rectangle",
            ellipse: "Dibuixar eclipse",
            line: "Dibuixar línia",
            arrow: "Dibuixa la fletxa",
            rotate: "Rotar imatge",
            save: "Guardar image",
            load: "Carregar image",
            text: "Escriure texte",
            brush: "Pinzell",
            resize: "Cambiar tamany o escalar",
            open: "Obrir imatge",
            select: "Seleció d'àrea",
            close: "Tancar editor",
            eraser: "Borrador",
            settings: "Paràmetres"
          },
          pasteOptions: {
            fit: "Reemplaçar tot",
            extend_down: "Extendre cap avall",
            extend_right: "Extendre a la dreta",
            extend: "Extendre",
            over: "Empegar al damunt",
            how_to_paste: "Com s'ha d'empegar?"
          }
        }
      },
      731: function(t, e) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
          value: !0
        }), e.default = void 0;
        e.default = {
          lineColor: "L",
          lineColorFull: "Linienfarbe",
          fillColor: "F",
          fillColorFull: "Füllfarbe",
          alpha: "A",
          alphaFull: "Alpha",
          lineWidth: "B",
          lineWidthFull: "Linienbreite",
          arrowLength: "L",
          arrowLengthFull: "Pfeillänge",
          eraserWidth: "E",
          eraserWidthFull: "Radiergummibreite",
          textColor: "C",
          textColorFull: "Textfarbe",
          fontSize: "S",
          fontSizeFull: "Schriftgröße",
          fontStrokeSize: "St",
          fontStrokeSizeFull: "Strichbreite",
          fontStyle: "FS",
          fontStyleFull: "Schriftstil",
          fontName: "F",
          fontNameFull: "Schriftartenname",
          textStrokeColor: "SC",
          textStrokeColorFull: "Strichfarbe",
          apply: "Anwenden",
          cancel: "Abbrechen",
          close: "Schließen",
          clear: "Zurücksetzen",
          width: "Breite",
          height: "Höhe",
          keepRatio: "Breiten- / Höhenverhältnis beibehalten",
          fillPageWith: "Füllen Sie die Seite mit der aktuellen Hintergrundfarbe",
          pixelSize: "P",
          pixelSizeFull: "Pixel Größe",
          resizeScale: "Maßstab",
          resizeResize: "Größe ändern",
          backgroundColor: "Hintergrundfarbe der Seite",
          pixelizePixelSize: "Pixelate Pixelgröße",
          language: "Sprache",
          wrongPixelSizeValue: "Falsche Pixelgröße. Sie können zum Beispiel '20%' eingeben. Welche mittlere Pixelgröße wird 1/5 von die ausgewählte Bereichsseite, oder '4' bedeutet 4 px",
          tools: {
            crop: "Bild auf ausgewählten Bereich zuschneiden",
            pixelize: "Pixelisierung des ausgewählten Bereiches",
            rect: "Rechteck zeichnen",
            ellipse: "Ellipse zeichnen",
            line: "Linie zeichnen",
            arrow: "Pfeil zeichnen",
            rotate: "Bild umdrehen",
            save: "Bild speichern",
            load: "Bild hochladen",
            text: "Text hinzufügen",
            brush: "Pinsel",
            resize: "Größe ändern oder skalieren",
            open: "Bild öffnen",
            select: "Bereich auswählen",
            close: " Painterro schließen",
            eraser: "Radierer",
            settings: "Einstellungen",
            undo: "Rückgängig machen",
            redo: "Wiederholen"
          },
          pasteOptions: {
            fit: "Alle Austauschen ",
            extend_down: "Nach unten strecken",
            extend_right: "Nach rechts strecken",
            extend: "Strecken",
            over: "Überkleben",
            how_to_paste: "Wie füge ich hinzu?"
          }
        }
      },
      347: function(t, e) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
          value: !0
        }), e.default = void 0;
        e.default = {
          lineColor: "L",
          lineColorFull: "Line color",
          fillColor: "F",
          fillColorFull: "Fill color",
          alpha: "A",
          alphaFull: "Alpha",
          lineWidth: "W",
          lineWidthFull: "Line width",
          arrowLength: "L",
          arrowLengthFull: "Arrow length",
          eraserWidth: "E",
          eraserWidthFull: "Eraser width",
          textColor: "C",
          textColorFull: "Text color",
          fontSize: "S",
          fontSizeFull: "Font size",
          fontStrokeSize: "St",
          fontStrokeSizeFull: "Stroke width",
          fontIsBold: "<b>B</b>",
          fontIsBoldFull: "Bold",
          fontIsItalic: "<i>I</i>",
          fontIsItalicFull: "Italic",
          shadowOn: "SH",
          shadowOnFull: "Shadow",
          fontStrokeAndShadow: "S&S",
          fontStrokeAndShadowFull: "Stroke & Shadow",
          fontName: "F",
          fontNameFull: "Font name",
          textStrokeColor: "SC",
          textStrokeColorFull: "Stroke color",
          apply: "Apply",
          cancel: "Cancel",
          close: "Close",
          clear: "Clear",
          width: "Width",
          height: "Height",
          keepRatio: "Keep width/height ratio",
          fillPageWith: "Fill page with current background color",
          pixelSize: "P",
          pixelSizeFull: "Pixel size",
          resizeScale: "Scale",
          resizeResize: "Resize",
          backgroundColor: "Page background color",
          pixelizePixelSize: "Pixelize pixel size",
          language: "Language",
          wrongPixelSizeValue: "Wrong pixel size. You can enter e.g. '20%' which mean pixel size will be 1/5 of the selected area side, or '4' means 4 px",
          tools: {
            crop: "Crop image to selected area",
            pixelize: "Pixelize selected area",
            rect: "Draw rectangle",
            ellipse: "Draw ellipse",
            line: "Draw line",
            arrow: "Draw arrow",
            rotate: "Rotate image",
            save: "Save image",
            load: "Load image",
            text: "Put text",
            brush: "Brush",
            resize: "Resize or scale",
            open: "Open image",
            select: "Select area",
            close: "Close Painterro",
            eraser: "Eraser",
            settings: "Settings",
            zoomin: "Zoom In",
            zoomout: "Zoom Out",
            undo: "Undo",
            redo: "Redo",
            clear: "Clear",
            bucket: "Fill"
          },
          pasteOptions: {
            fit: "Replace all",
            extend_down: "Extend down",
            extend_right: "Extend right",
            extend_left: "Extend left",
            extend_top: "Extend top",
            extend: "Add",
            over: "Paste over",
            how_to_paste: "How to paste?"
          }
        }
      },
      482: function(t, e) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
          value: !0
        }), e.default = void 0;
        e.default = {
          lineColor: "L",
          lineColorFull: "Color de linea",
          fillColor: "O",
          fillColorFull: "Color de relleno",
          alpha: "T",
          alphaFull: "Transparencia",
          lineWidth: "A",
          lineWidthFull: "Ancho de linea",
          eraserWidth: "B",
          eraserWidthFull: "Ancho de borrador",
          textColor: "C",
          textColorFull: "Color de texto",
          fontSize: "L",
          fontSizeFull: "Tamaño de letra",
          fontStrokeSize: "TLl",
          fontStrokeSizeFull: "Tamaño de linea de letra",
          fontStyle: "EL",
          fontStyleFull: "Estilo de letra",
          fontName: "NL",
          fontNameFull: "Nombre del tipo de letra",
          textStrokeColor: "CL",
          textStrokeColorFull: "Color de letra",
          apply: "Aplicar",
          cancel: "Cancelar",
          close: "Cerrar",
          clear: "Limpiar",
          width: "Ancho",
          height: "Alto",
          keepRatio: "Mantener ratio Ancho/Alto",
          fillPageWith: "Rellenar la página con el color de fondo actual",
          pixelSize: "P",
          pixelSizeFull: "Tamaño de pixel",
          resizeScale: "Escala",
          resizeResize: "Redimensionar",
          backgroundColor: "Color de fondo de la página",
          pixelizePixelSize: "Tamaño de pixel al pixelar",
          wrongPixelSizeValue: "Tamaño de pixel incorrecto. Puedes entrar por ejemplo '20%' que significa que el tamaño de pixel es 1/5 del area seleccionada, o '4' significa 4 px",
          tools: {
            crop: "Recortar imagen a la area seleccionada",
            pixelize: "Pixelar la area seleccionada",
            rect: "Dibujar rectángulo",
            ellipse: "Dibujar eclipse",
            line: "Dibujar linea",
            rotate: "Rotar imagen",
            save: "Guardar imagen",
            load: "Cargar imagen",
            text: "Escribir texto",
            brush: "Pincel",
            resize: "Cambiar tamaño o escalar",
            open: "Abrir imagen",
            select: "Selección de area",
            close: "Cerrar editor",
            eraser: "Borrador",
            settings: "Parámetros"
          },
          pasteOptions: {
            fit: "Reemplazar todo",
            extend_down: "Extender hacia abajo",
            extend_right: "Extender a la derecha",
            extend: "Extender",
            over: "Pegar encima",
            how_to_paste: "Cómo se ha de pegar?"
          }
        }
      },
      103: function(t, e) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
          value: !0
        }), e.default = void 0;
        e.default = {
          lineColor: "CL",
          lineColorFull: "Couleur de la ligne",
          fillColor: "CR",
          fillColorFull: "Couleur de Remplissage",
          alpha: "T",
          alphaFull: "Transparence",
          lineWidth: "L",
          lineWidthFull: "Largeur de ligne",
          arrowLength: "F",
          arrowLengthFull: "Longeur de la flèche",
          eraserWidth: "LG",
          eraserWidthFull: "Largeur de la gomme",
          textColor: "CT",
          textColorFull: "Couleur du texte",
          fontSize: "TP",
          fontSizeFull: "Taille de Police",
          fontStrokeSize: "LT",
          fontStrokeSizeFull: "Largeur du trait",
          fontStyle: "SP",
          fontStyleFull: "Style de police",
          fontName: "NP",
          fontNameFull: "Nom de la police",
          textStrokeColor: "CT",
          textStrokeColorFull: "Couleur du trait",
          apply: "Appliquer",
          cancel: "Annuler",
          close: "Fermer",
          clear: "Effacer",
          width: "Largeur",
          height: "Hauteur",
          keepRatio: "Conserver le rapport largeur/hauteur",
          fillPageWith: "Remplir avec la couleur d'arrière-plan courante",
          pixelSize: "P",
          pixelSizeFull: "Taille de Pixel",
          resizeScale: "Échelle",
          resizeResize: "Redimensionner",
          backgroundColor: "Couleur de fond de la page",
          pixelizePixelSize: "Pixéliser la taille de pixel",
          language: "Langue",
          wrongPixelSizeValue: "Mauvaise taille de pixel. Vous pouvez ajouter par exemple e.g. '20%' ce qui signifie que la taille moyenne des pixels sera 1/5 de la surface sélectionnée, ou '4' signifie 4 px",
          tools: {
            crop: "Recadrer l'image dans la zone sélectionnée",
            pixelize: "Pixéliser la zone sélectionnée",
            rect: "Dessiner un rectangle",
            ellipse: "Dessiner une ellipse",
            line: "Dessiner une ligne",
            arrow: "Dessiner une flèche",
            rotate: "Pivoter l'image",
            save: "Enregistrer l'image",
            load: "Charger l'image",
            text: "Mettre du texte",
            brush: "Brosse",
            resize: "Redimensionner ou échelle",
            open: "Ouvrir l'image",
            select: "Sélectionnez une région",
            close: "Fermer Painterro",
            eraser: "Gomme",
            settings: "Réglages",
            undo: "Annuler",
            redo: "Refaire"
          },
          pasteOptions: {
            fit: "Tout Remplacer",
            extend_down: "Étendre vers le bas",
            extend_right: "Étendre à droite",
            extend: "Étendre",
            over: "Coller sur",
            how_to_paste: "Comment coller?"
          }
        }
      },
      401: function(t, e) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
          value: !0
        }), e.default = void 0;
        e.default = {
          lineColor: "線",
          lineColorFull: "線の色",
          fillColor: "塗",
          fillColorFull: "塗りつぶしの色",
          alpha: "A",
          alphaFull: "アルファ",
          lineWidth: "幅",
          lineWidthFull: "線の幅",
          arrowLength: "矢",
          arrowLengthFull: "矢印の長さ",
          eraserWidth: "幅",
          eraserWidthFull: "消しゴムの幅",
          textColor: "色",
          textColorFull: "テキストの色",
          fontSize: "級",
          fontSizeFull: "フォントサイズ",
          fontStrokeSize: "幅",
          fontStrokeSizeFull: "ストロークの幅",
          fontStyle: "書式",
          fontStyleFull: "フォントスタイル",
          fontName: "書体",
          fontNameFull: "フォント",
          textStrokeColor: "SC",
          textStrokeColorFull: "ストロークの色",
          apply: "適用",
          cancel: "キャンセル",
          close: "閉じる",
          clear: "クリア",
          width: "幅",
          height: "高さ",
          keepRatio: "幅／高さのアスペクト比を保つ",
          fillPageWith: "背景色でページを塗りつぶす",
          pixelSize: "モザ",
          pixelSizeFull: "モザイクサイズ",
          resizeScale: "スケール",
          resizeResize: "リサイズ",
          backgroundColor: "ページの背景色",
          pixelizePixelSize: "モザイクのサイズ",
          language: "言語",
          wrongPixelSizeValue: 'モザイクのサイズが正しくありません。次のように指定していください：\n "20%"（モザイクサイズは選択範囲の1/5になります）\n "4"（4pxを意味します）\n',
          tools: {
            crop: "切り抜き",
            pixelize: "モザイク",
            rect: "四角形を描く",
            ellipse: "円を描く",
            line: "線を描く",
            arrow: "矢印を描く",
            rotate: "画像を回転",
            save: "画像を保存",
            load: "画像を読み込み",
            text: "テキストを配置",
            brush: "ブラシ",
            resize: "リサイズまたはスケール",
            open: "画像を開く",
            select: "範囲選択",
            close: "Painterroを閉じる",
            eraser: "消しゴム",
            settings: "設定",
            undo: "元に戻す",
            redo: "やり直す"
          },
          pasteOptions: {
            fit: "すべてを置き換え",
            extend_down: "下に拡張",
            extend_right: "右に拡張",
            extend: "拡張",
            over: "重ねて貼り付け",
            how_to_paste: "どう貼り付ける？"
          }
        }
      },
      711: function(t, e) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
          value: !0
        }), e.default = void 0;
        e.default = {
          lineColor: "L",
          lineColorFull: "Lijnkleur",
          fillColor: "V",
          fillColorFull: "Vulkleur",
          alpha: "A",
          alphaFull: "Alpha",
          lineWidth: "D",
          lineWidthFull: "Lijndikte",
          arrowLength: "L",
          arrowLengthFull: "Pijllengte",
          eraserWidth: "G",
          eraserWidthFull: "Gumdikte",
          textColor: "K",
          textColorFull: "Tekstkleur",
          fontSize: "G",
          fontSizeFull: "Tekstgrootte",
          fontStrokeSize: "St",
          fontStrokeSizeFull: "Streepdikte",
          fontIsBold: "<b>V</b>",
          fontIsBoldFull: "Vetgedrukt",
          fontIsItalic: "<i>C</i>",
          fontIsItalicFull: "Cursief",
          shadowOn: "S",
          shadowOnFull: "Schaduw",
          fontStrokeAndShadow: "D&S",
          fontStrokeAndShadowFull: "Streep & Schaduw",
          fontName: "F",
          fontNameFull: "Naam lettertype",
          textStrokeColor: "SK",
          textStrokeColorFull: "Streepkleur",
          apply: "Toepassen",
          cancel: "Annuleren",
          close: "Sluiten",
          clear: "Opnieuw",
          width: "Breedte",
          height: "Hoogte",
          keepRatio: "Behoud breedte-/hoogteverhouding",
          fillPageWith: "Vul pagina met de huidige achtergrondkleur",
          pixelSize: "P",
          pixelSizeFull: "Pixelgrootte",
          resizeScale: "Schalen",
          resizeResize: "Grootte aanpassen",
          backgroundColor: "Achtergrondkleur pagina",
          pixelizePixelSize: "Pixelgrootte pixel",
          language: "Taal",
          wrongPixelSizeValue: "Foute pixelgrootte. Je kunt b.v. '20%' invullen, wat een pixelgrootte van 1/5 van de geselecteerde gebiedszijde betekent, of '4' voor een pixelgrootte van 4 px",
          tools: {
            crop: "Afbeelding bijsnijden naar geselecteerde gebied",
            pixelize: "Geselecteerde gebied pixelen",
            rect: "Teken rechthoek",
            ellipse: "Teken ovaal",
            line: "Teken lijn",
            arrow: "Teken pijl",
            rotate: "Afbeelding draaien",
            save: "Afbeelding opslaan",
            load: "Afbeelding laden",
            text: "Text schrijven",
            brush: "Penseel",
            resize: "Grootte aanpassen",
            open: "Afbeelding openen",
            select: "Gebied selecteren",
            close: "Painterro sluiten",
            eraser: "Gum",
            settings: "Instellingen",
            zoomin: "Inzoomen",
            zoomout: "Uitzoomen",
            undo: "Ongedaan maken",
            redo: "Opnieuw doen"
          },
          pasteOptions: {
            fit: "Vervang alles",
            extend_down: "Onder uitbreiden",
            extend_right: "Rechts uitbreiden",
            extend_left: "Links uitbreiden",
            extend_top: "Boven uitbreiden",
            extend: "Uitbreiden",
            over: "Overheen plakken",
            how_to_paste: "Hoe te plakken?"
          }
        }
      },
      486: function(t, e) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
          value: !0
        }), e.default = void 0;
        e.default = {
          lineColor: "K",
          lineColorFull: "Kolor linii",
          fillColor: "W",
          fillColorFull: "Kolor wypełnienia",
          alpha: "A",
          alphaFull: "Alpha",
          lineWidth: "L",
          lineWidthFull: "Szerokość linii",
          arrowLength: "S",
          arrowLengthFull: "Rozmiar strzałki",
          eraserWidth: "G",
          eraserWidthFull: "Wielkość gumki",
          textColor: "K",
          textColorFull: "Kolor tekstu",
          fontSize: "R",
          fontSizeFull: "Rozmiar czcionki",
          fontStrokeSize: "Sk",
          fontStrokeSizeFull: "Szerokość kreski",
          fontStyle: "Sc",
          fontStyleFull: "Styl czcionki",
          fontName: "C",
          fontNameFull: "Czcionka",
          textStrokeColor: "Kk",
          textStrokeColorFull: "Kolor kreski",
          apply: "Zastosuj",
          cancel: "Anuluj",
          close: "Zamknij",
          clear: "Wyczyść",
          width: "Szerokość",
          height: "Wysokość",
          keepRatio: "Zachowaj współczynnik proporcji",
          fillPageWith: "Wypełnij stronę obecnym kolorem tła",
          pixelSize: "P",
          pixelSizeFull: "Rozmiar pixela",
          resizeScale: "Skala",
          resizeResize: "Zmień rozmiar",
          backgroundColor: "Kolor tła strony",
          pixelizePixelSize: "Rozmiar pixela Pixelizera",
          language: "Język",
          wrongPixelSizeValue: "Zły rozmiar pixela. Poprawne wartości to np. '20%', co oznacza przyjęcie rozmiaru pixela jako 20% pola wybranego obszaru, lub '4' jako 4 px",
          tools: {
            crop: "Przytnij obraz do wybranego obszaru",
            pixelize: "Pixelizuj wybrany obszar",
            rect: "Rysuj prostokąt",
            ellipse: "Rysuj elipse",
            line: "Rysuj linię",
            arrow: "Rysuj strzałkę",
            rotate: "Obróć obraz",
            save: "Zapisz obraz",
            load: "Wczytaj obraz",
            text: "Dodaj tekst",
            brush: "Pędzel",
            resize: "Zmień rozmiar lub skalę",
            open: "Otwórz obraz",
            select: "Wybierz obszar",
            close: "Zamknij Painterro",
            eraser: "Gumka",
            settings: "Ustawienia",
            undo: "Cofnij",
            redo: "Przywróć"
          },
          pasteOptions: {
            fit: "Zastąp",
            extend_down: "Dodaj poniżej",
            extend_right: "Dodaj po prawej",
            extend: "Dodaj",
            over: "Dodaj ponad",
            how_to_paste: "Jak wkleić?"
          }
        }
      },
      274: function(t, e) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
          value: !0
        }), e.default = void 0;
        e.default = {
          lineColor: "L",
          lineColorFull: "Cor da linha",
          fillColor: "O",
          fillColorFull: "Cor do preenchimento",
          alpha: "T",
          alphaFull: "Transparência",
          lineWidth: "A",
          lineWidthFull: "Largura de linha",
          eraserWidth: "B",
          eraserWidthFull: "Largura do apagador",
          textColor: "C",
          textColorFull: "Cor do texto",
          fontSize: "L",
          fontSizeFull: "Tamanho da letra",
          fontStrokeSize: "TLl",
          fontStrokeSizeFull: "Tamanho da linha da letra",
          fontStyle: "EL",
          fontStyleFull: "Estilo de letra",
          fontName: "NL",
          fontNameFull: "Nome do tipo de letra",
          textStrokeColor: "CL",
          textStrokeColorFull: "Cor da letra",
          apply: "Aplicar",
          cancel: "Cancelar",
          close: "Fechar",
          clear: "Limpar",
          width: "Largura",
          height: "Altura",
          keepRatio: "Manter rácio Largura/Altura",
          fillPageWith: "Preencher a página com a cor de fundo atual",
          pixelSize: "P",
          pixelSizeFull: "Tamanho de píxel",
          resizeScale: "Escala",
          resizeResize: "Redimensionar",
          backgroundColor: "Cor de fundo da página",
          pixelizePixelSize: "Tamanho de píxel ao Pixelizar",
          wrongPixelSizeValue: "Tamanho de píxel incorreto. Pode colocar por exemplo '20%' que significa que o tamanho de píxel é 1/5 da área selecionada, o '4' significa 4 px",
          tools: {
            crop: "Recortar imagem pela área selecionada",
            pixelize: "Pixelizar a área selecionada",
            rect: "Desenhar retângulo",
            ellipse: "Desenhar elipse",
            line: "Desenhar linha",
            rotate: "Girar imagem",
            save: "Salvar imagem",
            load: "Carregar imagem",
            text: "Escrever texto",
            brush: "Pincel",
            resize: "Alterar tamanho ao redimensionar",
            open: "Abrir imagem",
            select: "Seleção da área",
            close: "Fechar editor",
            eraser: "Apagador",
            settings: "Configurações"
          },
          pasteOptions: {
            fit: "Substituir tudo",
            extend_down: "Acrescentar por baixo",
            extend_right: "Acrescentar pela direita",
            extend: "Acrescentar",
            over: "Por cima",
            how_to_paste: "Como colar?"
          }
        }
      },
      827: function(t, e) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
          value: !0
        }), e.default = void 0;
        e.default = {
          lineColor: "L",
          lineColorFull: "Cor da linha",
          fillColor: "O",
          fillColorFull: "Cor do preenchimento",
          alpha: "T",
          alphaFull: "Transparência",
          lineWidth: "A",
          lineWidthFull: "Largura de linha",
          eraserWidth: "B",
          eraserWidthFull: "Largura do apagador",
          textColor: "C",
          textColorFull: "Cor do texto",
          fontSize: "L",
          fontSizeFull: "Tamanho da letra",
          fontStrokeSize: "TLl",
          fontStrokeSizeFull: "Tamanho da linha da letra",
          fontStyle: "EL",
          fontStyleFull: "Tipo de letra",
          fontName: "NL",
          fontNameFull: "Nome do tipo de letra",
          textStrokeColor: "CL",
          textStrokeColorFull: "Cor da letra",
          apply: "Aplicar",
          cancel: "Cancelar",
          close: "Fechar",
          clear: "Limpar",
          width: "Largura",
          height: "Altura",
          keepRatio: "Manter rácio Largura/Altura",
          fillPageWith: "Preencher a página com a cor de fundo actual",
          pixelSize: "P",
          pixelSizeFull: "Tamanho de píxel",
          resizeScale: "Escala",
          resizeResize: "Redimensionar",
          backgroundColor: "Cor de fundo da página",
          pixelizePixelSize: "Tamanho de píxel ao Pixelizar",
          wrongPixelSizeValue: "Tamanho de píxel incorrecto. Podes colocar por exemplo '20%' que significa que o tamanho de píxel é 1/5 da área seleccionada, o '4' significa 4 px",
          tools: {
            crop: "Recortar imagem pela área seleccionada",
            pixelize: "Pixelizar a área seleccionada",
            rect: "Desenhar rectângulo",
            ellipse: "Desenhar elipse",
            line: "Desenhar linha",
            rotate: "Rodar imagem",
            save: "Guardar imagem",
            load: "Carregar imagem",
            text: "Escrever texto",
            brush: "Pincel",
            resize: "Alterar tamanho ao redimensionar",
            open: "Abrir imagem",
            select: "Selecção da área",
            close: "Fechar editor",
            eraser: "Apagador",
            settings: "Definições"
          },
          pasteOptions: {
            fit: "Substituir tudo",
            extend_down: "Acrescentar por baixo",
            extend_right: "Acrescentar pela direita",
            extend: "Acrescentar",
            over: "Por cima",
            how_to_paste: "Como colar?"
          }
        }
      },
      388: function(t, e) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
          value: !0
        }), e.default = void 0;
        e.default = {
          lineColor: "Л",
          lineColorFull: "Цвет линии",
          fillColor: "З",
          fillColorFull: "Цвет заливки",
          alpha: "П",
          alphaFull: "Прозрачность",
          lineWidth: "Ш",
          lineWidthFull: "Ширина линии",
          arrowLength: "Ш",
          arrowLengthFull: "Ширина стрелки",
          eraserWidth: "Ш",
          eraserWidthFull: "Ширина ластика",
          textColor: "Ц",
          textColorFull: "Цвет текста",
          fontSize: "Р",
          fontSizeFull: "Размер шрифта",
          fontStrokeSize: "Ш",
          fontStrokeSizeFull: "Ширина штриха",
          fontIsBold: "<b>Ж</b>",
          fontIsBoldFull: "Жирный",
          fontIsItalic: "<i>К</i>",
          fontIsItalicFull: "Курсив",
          shadowOn: "Т",
          shadowOnFull: "Тень",
          fontStrokeAndShadow: "О&Т",
          fontStrokeAndShadowFull: "Обводка и Тень",
          fontName: "Ш",
          fontNameFull: "Название шрифта",
          textStrokeColor: "ЦО",
          textStrokeColorFull: "Цвет обводки",
          apply: "Применить",
          cancel: "Отмена",
          close: "Закрыть",
          clear: "Очистить",
          width: "Ширина",
          height: "Высота",
          keepRatio: "Сохранить соотношение ширины/высоты",
          fillPageWith: "Заполнить страницу текущим цветом фона",
          pixelSize: "П",
          pixelSizeFull: "Размер пикселя",
          resizeScale: "Масштаб",
          resizeResize: "Изменить размер",
          backgroundColor: "Цвет фона страницы",
          pixelizePixelSize: "Пикселизация размера пикселя",
          language: "Язык",
          wrongPixelSizeValue: "Неправильный размер пикселя. Вы можете ввести, например '20%', что означает, что средний размер пикселя будет 1/5 отстороны выбранной области или '4', что означает 4 пикселя",
          tools: {
            crop: "Обрезать изображение до выделенной области",
            pixelize: "Сделать пикселизацию выделенной области",
            rect: "Рисовать прямоугольник",
            ellipse: "Рисовать эллипс",
            line: "Рисовать линию",
            arrow: "Рисовать Стрелку",
            rotate: "Повернуть лист",
            save: "Сохрнить изображение",
            load: "Загрузть изображение",
            text: "Вставить текст",
            brush: "Кисть",
            resize: "Изменить размер или масштаб",
            open: "Открыть изображение",
            select: "Выбрать область",
            close: "Закрыть редактор",
            eraser: "Ластик",
            settings: "Настройки",
            undo: "Отменить",
            redo: "Повторить"
          },
          pasteOptions: {
            fit: "Заменить всё",
            extend_down: "Добавить вниз",
            extend_right: "Добавить вправо",
            extend_left: "Добавить влево",
            extend_top: "Добавить вверх",
            extend: "Добавить",
            over: "Вставить",
            how_to_paste: "Как вставить?"
          }
        }
      },
      737: function(t, e, n) {
        "use strict";
        var r = n(15),
          o = n.n(r),
          i = n(645),
          a = n.n(i)()(o());
        a.push([t.id, '.color-diwget-btn {\n    height: 32px;\n    width: 32px;\n    cursor: pointer;\n    z-index: 1;\n}\n\n.color-diwget-btn-substrate {\n    width: 32px;\n}\n\nselect.ptro-input[data-id=\'fontName\'] {\n    width: 45px;\n}\n\n.ptro-bar .ptro-tool-ctl-name {\n    padding: 0 2px 0 0;\n    font-family: "Open Sans", sans-serif;\n    line-height: 22px;\n}\n\n.ptro-bar .ptro-tool-ctl-name {\n    margin-left: 5px;\n    border-top-left-radius: 10px;\n    border-bottom-left-radius: 10px;\n    padding-left: 3px;\n    padding-top: 4px;\n    padding-bottom: 4px;\n}\n\n.ptro-info {\n    font-family: "Open Sans", sans-serif;\n    font-size: 10px;\n    padding: 4px;\n    margin-left: auto;\n    word-break: keep-all;\n    white-space: normal;\n    text-align: right;\n}\n\n.ptro-info > span {\n    opacity: 0.5;\n}\n\n@media screen and (max-width: 768px) {\n    .ptro-bar > div {\n        white-space: nowrap;\n    }\n    span.ptro-bar-right {\n        float: none;\n    }\n    span.ptro-info {\n        display: none;\n    }\n    \n}\n\n.ptro-bar .ptro-input {\n    height: 32px;\n    line-height: 32px;\n    font-family: "Open Sans", sans-serif;\n    font-size: 16px;\n    position: relative;\n    padding-left: 2px;\n    padding-right: 0;\n}\n\n.ptro-bar .ptro-input[type="number"] {\n    width: 42px;\n}\n\n.ptro-bar .ptro-named-btn p {\n    margin: 0;\n}\n\n.ptro-bar {\n    bottom: 0;\n    position: absolute;\n    width: 100%;\n    font-size: 16px;\n    line-height: normal;\n}\n\n.ptro-bar > div {\n    position: relative;\n}\n\n.ptro-bar > div::-webkit-scrollbar {\n    height: 2px;\n}\n    \n/* Track */\n.ptro-bar > div::-webkit-scrollbar-track {\n    background: #f1f1f1;\n}\n    \n/* Handle */\n.ptro-bar > div::-webkit-scrollbar-thumb {\n    background: #888;\n}\n    \n/* Handle on hover */\n.ptro-bar > div::-webkit-scrollbar-thumb:hover {\n    background: #555;\n}\n\n.ptro-bar .ptro-icon-btn {\n}\n\nbutton.ptro-icon-right:first-of-type {\n    margin-right: 4px;\n}\n\nbutton.ptro-input[data-value="false"],button.ptro-input[data-value="true"] {\n    width: 28px;\n    height: 28px;\n    border: 0;\n    background: transparent;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    padding-left: 0px;\n    cursor: pointer;\n    outline: 0;\n}\n\nbutton.ptro-input[data-value="true"]::after {\n    content: \'✔\';\n    font-size: 20px;\n    line-height: 12px;\n    width: 12px;\n    height: 12px;\n    border: 0;\n    /* background: rgba(0,0,0,0.5); */\n    display: inline-block;\n}\n\n@-webkit-keyframes ptro-spin {\n  0% {\n    -webkit-transform: rotate(0deg);\n    transform: rotate(0deg);\n  }\n  100% {\n    -webkit-transform: rotate(359deg);\n    transform: rotate(359deg);\n  }\n}\n@keyframes ptro-spin {\n  0% {\n    -webkit-transform: rotate(0deg);\n    transform: rotate(0deg);\n  }\n  100% {\n    -webkit-transform: rotate(359deg);\n    transform: rotate(359deg);\n  }\n}\n\n.ptro-spinning {\n    -webkit-animation: ptro-spin 0.5s infinite steps(9);\n    animation: ptro-spin 0.8s infinite steps(9);\n    display: inline-block;\n    text-rendering: auto;\n    -webkit-font-smoothing: antialiased;\n}\n\n#container-bar {\n    display: block;\n}', "", {
          version: 3,
          sources: ["webpack://./css/bar-styles.css"],
          names: [],
          mappings: "AAAA;IACI,YAAY;IACZ,WAAW;IACX,eAAe;IACf,UAAU;AACd;;AAEA;IACI,WAAW;AACf;;AAEA;IACI,WAAW;AACf;;AAEA;IACI,kBAAkB;IAClB,oCAAoC;IACpC,iBAAiB;AACrB;;AAEA;IACI,gBAAgB;IAChB,4BAA4B;IAC5B,+BAA+B;IAC/B,iBAAiB;IACjB,gBAAgB;IAChB,mBAAmB;AACvB;;AAEA;IACI,oCAAoC;IACpC,eAAe;IACf,YAAY;IACZ,iBAAiB;IACjB,oBAAoB;IACpB,mBAAmB;IACnB,iBAAiB;AACrB;;AAEA;IACI,YAAY;AAChB;;AAEA;IACI;QACI,mBAAmB;IACvB;IACA;QACI,WAAW;IACf;IACA;QACI,aAAa;IACjB;;AAEJ;;AAEA;IACI,YAAY;IACZ,iBAAiB;IACjB,oCAAoC;IACpC,eAAe;IACf,kBAAkB;IAClB,iBAAiB;IACjB,gBAAgB;AACpB;;AAEA;IACI,WAAW;AACf;;AAEA;IACI,SAAS;AACb;;AAEA;IACI,SAAS;IACT,kBAAkB;IAClB,WAAW;IACX,eAAe;IACf,mBAAmB;AACvB;;AAEA;IACI,kBAAkB;AACtB;;AAEA;IACI,WAAW;AACf;;AAEA,UAAU;AACV;IACI,mBAAmB;AACvB;;AAEA,WAAW;AACX;IACI,gBAAgB;AACpB;;AAEA,oBAAoB;AACpB;IACI,gBAAgB;AACpB;;AAEA;AACA;;AAEA;IACI,iBAAiB;AACrB;;AAEA;IACI,WAAW;IACX,YAAY;IACZ,SAAS;IACT,uBAAuB;IACvB,aAAa;IACb,uBAAuB;IACvB,mBAAmB;IACnB,iBAAiB;IACjB,eAAe;IACf,UAAU;AACd;;AAEA;IACI,YAAY;IACZ,eAAe;IACf,iBAAiB;IACjB,WAAW;IACX,YAAY;IACZ,SAAS;IACT,iCAAiC;IACjC,qBAAqB;AACzB;;AAEA;EACE;IACE,+BAA+B;IAC/B,uBAAuB;EACzB;EACA;IACE,iCAAiC;IACjC,yBAAyB;EAC3B;AACF;AACA;EACE;IACE,+BAA+B;IAC/B,uBAAuB;EACzB;EACA;IACE,iCAAiC;IACjC,yBAAyB;EAC3B;AACF;;AAEA;IACI,mDAAmD;IACnD,2CAA2C;IAC3C,qBAAqB;IACrB,oBAAoB;IACpB,mCAAmC;AACvC;;AAEA;IACI,cAAc;AAClB",
          sourcesContent: ['.color-diwget-btn {\n    height: 32px;\n    width: 32px;\n    cursor: pointer;\n    z-index: 1;\n}\n\n.color-diwget-btn-substrate {\n    width: 32px;\n}\n\nselect.ptro-input[data-id=\'fontName\'] {\n    width: 45px;\n}\n\n.ptro-bar .ptro-tool-ctl-name {\n    padding: 0 2px 0 0;\n    font-family: "Open Sans", sans-serif;\n    line-height: 22px;\n}\n\n.ptro-bar .ptro-tool-ctl-name {\n    margin-left: 5px;\n    border-top-left-radius: 10px;\n    border-bottom-left-radius: 10px;\n    padding-left: 3px;\n    padding-top: 4px;\n    padding-bottom: 4px;\n}\n\n.ptro-info {\n    font-family: "Open Sans", sans-serif;\n    font-size: 10px;\n    padding: 4px;\n    margin-left: auto;\n    word-break: keep-all;\n    white-space: normal;\n    text-align: right;\n}\n\n.ptro-info > span {\n    opacity: 0.5;\n}\n\n@media screen and (max-width: 768px) {\n    .ptro-bar > div {\n        white-space: nowrap;\n    }\n    span.ptro-bar-right {\n        float: none;\n    }\n    span.ptro-info {\n        display: none;\n    }\n    \n}\n\n.ptro-bar .ptro-input {\n    height: 32px;\n    line-height: 32px;\n    font-family: "Open Sans", sans-serif;\n    font-size: 16px;\n    position: relative;\n    padding-left: 2px;\n    padding-right: 0;\n}\n\n.ptro-bar .ptro-input[type="number"] {\n    width: 42px;\n}\n\n.ptro-bar .ptro-named-btn p {\n    margin: 0;\n}\n\n.ptro-bar {\n    bottom: 0;\n    position: absolute;\n    width: 100%;\n    font-size: 16px;\n    line-height: normal;\n}\n\n.ptro-bar > div {\n    position: relative;\n}\n\n.ptro-bar > div::-webkit-scrollbar {\n    height: 2px;\n}\n    \n/* Track */\n.ptro-bar > div::-webkit-scrollbar-track {\n    background: #f1f1f1;\n}\n    \n/* Handle */\n.ptro-bar > div::-webkit-scrollbar-thumb {\n    background: #888;\n}\n    \n/* Handle on hover */\n.ptro-bar > div::-webkit-scrollbar-thumb:hover {\n    background: #555;\n}\n\n.ptro-bar .ptro-icon-btn {\n}\n\nbutton.ptro-icon-right:first-of-type {\n    margin-right: 4px;\n}\n\nbutton.ptro-input[data-value="false"],button.ptro-input[data-value="true"] {\n    width: 28px;\n    height: 28px;\n    border: 0;\n    background: transparent;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    padding-left: 0px;\n    cursor: pointer;\n    outline: 0;\n}\n\nbutton.ptro-input[data-value="true"]::after {\n    content: \'✔\';\n    font-size: 20px;\n    line-height: 12px;\n    width: 12px;\n    height: 12px;\n    border: 0;\n    /* background: rgba(0,0,0,0.5); */\n    display: inline-block;\n}\n\n@-webkit-keyframes ptro-spin {\n  0% {\n    -webkit-transform: rotate(0deg);\n    transform: rotate(0deg);\n  }\n  100% {\n    -webkit-transform: rotate(359deg);\n    transform: rotate(359deg);\n  }\n}\n@keyframes ptro-spin {\n  0% {\n    -webkit-transform: rotate(0deg);\n    transform: rotate(0deg);\n  }\n  100% {\n    -webkit-transform: rotate(359deg);\n    transform: rotate(359deg);\n  }\n}\n\n.ptro-spinning {\n    -webkit-animation: ptro-spin 0.5s infinite steps(9);\n    animation: ptro-spin 0.8s infinite steps(9);\n    display: inline-block;\n    text-rendering: auto;\n    -webkit-font-smoothing: antialiased;\n}\n\n#container-bar {\n    display: block;\n}'],
          sourceRoot: ""
        }]), e.Z = a
      },
      223: function(t, e, n) {
        "use strict";
        var r = n(15),
          o = n.n(r),
          i = n(645),
          a = n.n(i),
          l = n(667),
          A = n.n(l),
          s = n(141),
          c = n(589),
          p = a()(o()),
          h = A()(s.Z),
          u = A()(c.Z);
        p.push([t.id, '@font-face {\n\tfont-family: "ptroiconfont";\n\tsrc: url(' + h + ') format("woff"),\nurl(' + u + ') format("truetype");\n\tfont-weight: normal;\n    font-style: normal;\n}\n\n.ptro-icon {\n}\n\n.ptro-icon:before {\n\tfont-family: ptroiconfont !important;\n\tfont-style: normal !important;\n\tfont-weight: normal !important;\n\tfont-variant: normal !important;\n\ttext-transform: none !important;\n\tspeak: none;\n\t-webkit-font-smoothing: antialiased;\n\t-moz-osx-font-smoothing: grayscale;\n}\n\n.ptro-icon-apply:before {\n\tcontent: "\\f101";\n}\n.ptro-icon-arrow:before {\n\tcontent: "\\f102";\n}\n.ptro-icon-brush:before {\n\tcontent: "\\f103";\n}\n.ptro-icon-bucket:before {\n\tcontent: "\\f104";\n}\n.ptro-icon-clear:before {\n\tcontent: "\\f105";\n}\n.ptro-icon-close:before {\n\tcontent: "\\f106";\n}\n.ptro-icon-crop:before {\n\tcontent: "\\f107";\n}\n.ptro-icon-ellipse:before {\n\tcontent: "\\f108";\n}\n.ptro-icon-eraser:before {\n\tcontent: "\\f109";\n}\n.ptro-icon-line:before {\n\tcontent: "\\f10a";\n}\n.ptro-icon-linked:before {\n\tcontent: "\\f10b";\n}\n.ptro-icon-loading:before {\n\tcontent: "\\f10c";\n}\n.ptro-icon-mirror:before {\n\tcontent: "\\f10d";\n}\n.ptro-icon-open:before {\n\tcontent: "\\f10e";\n}\n.ptro-icon-painterro0:before {\n\tcontent: "\\f10f";\n}\n.ptro-icon-paste_extend_down:before {\n\tcontent: "\\f110";\n}\n.ptro-icon-paste_extend_left:before {\n\tcontent: "\\f111";\n}\n.ptro-icon-paste_extend_right:before {\n\tcontent: "\\f112";\n}\n.ptro-icon-paste_extend_top:before {\n\tcontent: "\\f113";\n}\n.ptro-icon-paste_fit:before {\n\tcontent: "\\f114";\n}\n.ptro-icon-paste_over:before {\n\tcontent: "\\f115";\n}\n.ptro-icon-pipette:before {\n\tcontent: "\\f116";\n}\n.ptro-icon-pixelize:before {\n\tcontent: "\\f117";\n}\n.ptro-icon-rect:before {\n\tcontent: "\\f118";\n}\n.ptro-icon-redo:before {\n\tcontent: "\\f119";\n}\n.ptro-icon-resize:before {\n\tcontent: "\\f11a";\n}\n.ptro-icon-rotate:before {\n\tcontent: "\\f11b";\n}\n.ptro-icon-save:before {\n\tcontent: "\\f11c";\n}\n.ptro-icon-select:before {\n\tcontent: "\\f11d";\n}\n.ptro-icon-settings:before {\n\tcontent: "\\f11e";\n}\n.ptro-icon-text:before {\n\tcontent: "\\f11f";\n}\n.ptro-icon-undo:before {\n\tcontent: "\\f120";\n}\n.ptro-icon-unlinked:before {\n\tcontent: "\\f121";\n}\n.ptro-icon-zoomin:before {\n\tcontent: "\\f122";\n}\n.ptro-icon-zoomout:before {\n\tcontent: "\\f123";\n}\n', "", {
          version: 3,
          sources: ["webpack://./css/icons/ptroiconfont.css"],
          names: [],
          mappings: "AAAA;CACC,2BAA2B;CAC3B;0DAC0E;CAC1E,mBAAmB;IAChB,kBAAkB;AACtB;;AAEA;AACA;;AAEA;CACC,oCAAoC;CACpC,6BAA6B;CAC7B,8BAA8B;CAC9B,+BAA+B;CAC/B,+BAA+B;CAC/B,WAAW;CACX,mCAAmC;CACnC,kCAAkC;AACnC;;AAEA;CACC,gBAAgB;AACjB;AACA;CACC,gBAAgB;AACjB;AACA;CACC,gBAAgB;AACjB;AACA;CACC,gBAAgB;AACjB;AACA;CACC,gBAAgB;AACjB;AACA;CACC,gBAAgB;AACjB;AACA;CACC,gBAAgB;AACjB;AACA;CACC,gBAAgB;AACjB;AACA;CACC,gBAAgB;AACjB;AACA;CACC,gBAAgB;AACjB;AACA;CACC,gBAAgB;AACjB;AACA;CACC,gBAAgB;AACjB;AACA;CACC,gBAAgB;AACjB;AACA;CACC,gBAAgB;AACjB;AACA;CACC,gBAAgB;AACjB;AACA;CACC,gBAAgB;AACjB;AACA;CACC,gBAAgB;AACjB;AACA;CACC,gBAAgB;AACjB;AACA;CACC,gBAAgB;AACjB;AACA;CACC,gBAAgB;AACjB;AACA;CACC,gBAAgB;AACjB;AACA;CACC,gBAAgB;AACjB;AACA;CACC,gBAAgB;AACjB;AACA;CACC,gBAAgB;AACjB;AACA;CACC,gBAAgB;AACjB;AACA;CACC,gBAAgB;AACjB;AACA;CACC,gBAAgB;AACjB;AACA;CACC,gBAAgB;AACjB;AACA;CACC,gBAAgB;AACjB;AACA;CACC,gBAAgB;AACjB;AACA;CACC,gBAAgB;AACjB;AACA;CACC,gBAAgB;AACjB;AACA;CACC,gBAAgB;AACjB;AACA;CACC,gBAAgB;AACjB;AACA;CACC,gBAAgB;AACjB",
          sourcesContent: ['@font-face {\n\tfont-family: "ptroiconfont";\n\tsrc: url("ptroiconfont.woff?616c25507ea43347b0fb23f24760dae2") format("woff"),\nurl("ptroiconfont.ttf?616c25507ea43347b0fb23f24760dae2") format("truetype");\n\tfont-weight: normal;\n    font-style: normal;\n}\n\n.ptro-icon {\n}\n\n.ptro-icon:before {\n\tfont-family: ptroiconfont !important;\n\tfont-style: normal !important;\n\tfont-weight: normal !important;\n\tfont-variant: normal !important;\n\ttext-transform: none !important;\n\tspeak: none;\n\t-webkit-font-smoothing: antialiased;\n\t-moz-osx-font-smoothing: grayscale;\n}\n\n.ptro-icon-apply:before {\n\tcontent: "\\f101";\n}\n.ptro-icon-arrow:before {\n\tcontent: "\\f102";\n}\n.ptro-icon-brush:before {\n\tcontent: "\\f103";\n}\n.ptro-icon-bucket:before {\n\tcontent: "\\f104";\n}\n.ptro-icon-clear:before {\n\tcontent: "\\f105";\n}\n.ptro-icon-close:before {\n\tcontent: "\\f106";\n}\n.ptro-icon-crop:before {\n\tcontent: "\\f107";\n}\n.ptro-icon-ellipse:before {\n\tcontent: "\\f108";\n}\n.ptro-icon-eraser:before {\n\tcontent: "\\f109";\n}\n.ptro-icon-line:before {\n\tcontent: "\\f10a";\n}\n.ptro-icon-linked:before {\n\tcontent: "\\f10b";\n}\n.ptro-icon-loading:before {\n\tcontent: "\\f10c";\n}\n.ptro-icon-mirror:before {\n\tcontent: "\\f10d";\n}\n.ptro-icon-open:before {\n\tcontent: "\\f10e";\n}\n.ptro-icon-painterro0:before {\n\tcontent: "\\f10f";\n}\n.ptro-icon-paste_extend_down:before {\n\tcontent: "\\f110";\n}\n.ptro-icon-paste_extend_left:before {\n\tcontent: "\\f111";\n}\n.ptro-icon-paste_extend_right:before {\n\tcontent: "\\f112";\n}\n.ptro-icon-paste_extend_top:before {\n\tcontent: "\\f113";\n}\n.ptro-icon-paste_fit:before {\n\tcontent: "\\f114";\n}\n.ptro-icon-paste_over:before {\n\tcontent: "\\f115";\n}\n.ptro-icon-pipette:before {\n\tcontent: "\\f116";\n}\n.ptro-icon-pixelize:before {\n\tcontent: "\\f117";\n}\n.ptro-icon-rect:before {\n\tcontent: "\\f118";\n}\n.ptro-icon-redo:before {\n\tcontent: "\\f119";\n}\n.ptro-icon-resize:before {\n\tcontent: "\\f11a";\n}\n.ptro-icon-rotate:before {\n\tcontent: "\\f11b";\n}\n.ptro-icon-save:before {\n\tcontent: "\\f11c";\n}\n.ptro-icon-select:before {\n\tcontent: "\\f11d";\n}\n.ptro-icon-settings:before {\n\tcontent: "\\f11e";\n}\n.ptro-icon-text:before {\n\tcontent: "\\f11f";\n}\n.ptro-icon-undo:before {\n\tcontent: "\\f120";\n}\n.ptro-icon-unlinked:before {\n\tcontent: "\\f121";\n}\n.ptro-icon-zoomin:before {\n\tcontent: "\\f122";\n}\n.ptro-icon-zoomout:before {\n\tcontent: "\\f123";\n}\n'],
          sourceRoot: ""
        }]), e.Z = p
      },
      170: function(t, e, n) {
        "use strict";
        var r = n(15),
          o = n.n(r),
          i = n(645),
          a = n.n(i),
          l = n(667),
          A = n.n(l),
          s = n(122),
          c = a()(o()),
          p = A()(s.Z);
        c.push([t.id, '.ptro-wrapper {\r\n    position: absolute;\r\n    top: 0;\r\n    left: 0;\r\n    right: 0;\r\n    text-align: center;\r\n    z-index: 10;\r\n    font-family: "Open Sans", sans-serif;\r\n}\r\n\r\n@media screen and (min-width: 869px) {\r\n    .ptro-holder {\r\n        position: fixed;\r\n        left: 35px;\r\n        right: 35px;\r\n        top: 35px;\r\n        bottom: 35px;\r\n        box-shadow: 1px 1px 5px #888;\r\n    }\r\n}\r\n\r\n@media screen and (max-width: 868px) {\r\n    .ptro-holder {\r\n        position: fixed;\r\n        box-shadow: 3px 3px 15px #787878;\r\n        left: 0;\r\n        right: 0;\r\n        top: 0;\r\n        bottom: 0;\r\n    }\r\n}\r\n\r\n.ptro-holder-wrapper {\r\n    position: fixed;\r\n    top: 0;\r\n    left: 0;\r\n    width: 100%;\r\n    height: 100%;\r\n    background-color: rgba(0,0,0,0.2);\r\n}\r\n\r\n.ptro-wrapper.ptro-v-aligned:before {\r\n    content: "";\r\n    display: inline-block;\r\n    vertical-align: middle;\r\n    height: 100%;\r\n}\r\n\r\n\r\n.ptro-icon {\r\n    font-size: 14px;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n}\r\n\r\n\r\n.ptro-icon-btn:disabled {\r\n    color: gray;\r\n}\r\n\r\n.ptro-wrapper canvas {\r\n    /* vertical-align: middle; */\r\n    display: inline-block;\r\n    touch-action: none;\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n    width: auto;\r\n    height: auto;\r\n}\r\n\r\n.ptro-center-table {\r\n    display:table;\r\n    width: 100%;\r\n    height: 100%;\r\n}\r\n\r\n.ptro-center-tablecell {\r\n    display:table-cell;\r\n    vertical-align:middle;\r\n}\r\n\r\n.ptro-icon-btn {\r\n    border: 0;\r\n    cursor: pointer;\r\n    flex-shrink: 0;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n}\r\n\r\n.ptro-icon-btn i {\r\n}\r\n\r\n\r\n.ptro-named-btn {\r\n    border: 0;\r\n    display: inline-block;\r\n    height: 30px;\r\n    margin-left: 4px;\r\n    font-family: "Open Sans", sans-serif;\r\n    position: relative;\r\n    top:-5px;\r\n    font-size: 14px;\r\n    cursor: pointer;\r\n}\r\n\r\n.ptro-icon-btn:focus,\r\n.ptro-named-btn:focus,\r\n.color-diwget-btn:focus,\r\n.ptro-color-btn:focus,\r\n.ptro-selector-btn:focus {\r\n    outline: none;\r\n}\r\n\r\n.ptro-color-btn {\r\n    height: 32px;\r\n    width: 32px;\r\n    cursor: pointer;\r\n}\r\n\r\n\r\n.ptro-wrapper .select-handler {\r\n    background-color: white;\r\n    border: 1px solid black;\r\n    width: 6px;\r\n    height: 6px;\r\n    position: absolute;\r\n    z-index: 10;\r\n}\r\n\r\n.ptro-wrapper .ptro-crp-el {\r\n    position: absolute;\r\n}\r\n\r\n.ptro-wrapper .ptro-substrate {\r\n    opacity: 0.3;\r\n    background-image: url(' + p + ');\r\n    background-size: 32px 32px;\r\n    z-index: -1;\r\n    position: absolute;\r\n}\r\n\r\n.ptro-wrapper .ptro-close-color-picker {\r\n    height: 24px;\r\n    margin-top: 5px;\r\n    margin-bottom: -5px;\r\n    margin-left: auto;\r\n}\r\n\r\n.ptro-tool-controls {\r\n    flex-shrink: 0;\r\n    display: flex;\r\n    align-items: center;\r\n}\r\n\r\n.ptro-wrapper .ptro-crp-rect {\r\n    position: absolute;\r\n    background-color: rgba(225, 225, 225, .5);\r\n    border: 1px dashed black;\r\n    cursor: move;\r\n    -moz-user-select: none;\r\n    /* -webkit-user-select: none; */\r\n    -ms-user-select: none;\r\n    user-select: none;\r\n    -webkit-user-drag: none;\r\n    user-drag: none;\r\n    -webkit-touch-callout: none;\r\n    background-repeat: no-repeat;\r\n    background-size: 100% 100%;\r\n}\r\n\r\n.ptro-wrapper .ptro-crp-tl {\r\n    position: absolute;\r\n    top: 0;\r\n    left: 0;\r\n    margin: -4px 0 0 -4px;\r\n    cursor: se-resize;\r\n}\r\n\r\n.ptro-wrapper .ptro-crp-bl {\r\n    position: absolute;\r\n    left: 0;\r\n    bottom: 0;\r\n    margin: 0 0 -4px -4px;\r\n    cursor: ne-resize;\r\n}\r\n\r\n.ptro-wrapper .ptro-crp-br {\r\n    position: absolute;\r\n    right: 0;\r\n    bottom: 0;\r\n    margin: 0 -4px -4px 0;\r\n    cursor: se-resize;\r\n}\r\n\r\n.ptro-wrapper .ptro-crp-tr {\r\n    position: absolute;\r\n    right: 0;\r\n    top: 0;\r\n    margin: -4px -4px 0 0;\r\n    cursor: ne-resize;\r\n}\r\n\r\n\r\n.ptro-wrapper .ptro-crp-l {\r\n    position: absolute;\r\n    top: 50%;\r\n    left: 0;\r\n    margin: -4px 0 0 -4px;\r\n    cursor: e-resize;\r\n}\r\n\r\n.ptro-wrapper .ptro-crp-t {\r\n    position: absolute;\r\n    top: 0;\r\n    left: 50%;\r\n    margin: -4px 0 0 -4px;\r\n    cursor: s-resize;\r\n}\r\n\r\n.ptro-wrapper .ptro-crp-r {\r\n    position: absolute;\r\n    top: 50%;\r\n    right: 0;\r\n    margin: -4px -4px 0 0 ;\r\n    cursor: e-resize;\r\n}\r\n\r\n.ptro-wrapper .ptro-crp-b {\r\n    position: absolute;\r\n    left: 50%;\r\n    bottom: 0;\r\n    margin: 0 0 -4px -4px;\r\n    cursor: s-resize;\r\n}\r\n\r\n.ptro-wrapper div,\r\n.ptro-wrapper span,\r\n.ptro-wrapper i,\r\n.ptro-bar .ptro-tool-ctl-name,\r\n.ptro-bar input,\r\n.ptro-bar .ptro-named-btn p {\r\n    -moz-user-select: none;\r\n   /* -webkit-user-select: none; */\r\n    -ms-user-select: none;\r\n    user-select: none;\r\n    -webkit-user-drag: none;\r\n    user-drag: none;\r\n    -webkit-touch-callout: none;\r\n}\r\n\r\n.ptro-bar > div {\r\n    overflow-x: auto;\r\n    overflow-y: hidden;\r\n    height: 100%;\r\n    display: flex;\r\n    align-items: center;\r\n}\r\n\r\n\r\n\r\n.ptro-wrapper .ptro-common-widget-wrapper {\r\n    position: absolute;\r\n    background-color: rgba(0, 0, 0, 0.6);\r\n    top: 0;\r\n    bottom: 0;\r\n    left: 0;\r\n    right: 0;\r\n}\r\n\r\n.ptro-wrapper .ptro-pallet canvas {\r\n    cursor: crosshair;\r\n}\r\n\r\ndiv.ptro-pallet {\r\n    line-height: 0;\r\n}\r\n\r\n.ptro-wrapper .ptro-pallet,\r\n.ptro-wrapper .ptro-resize-widget{\r\n    width: 200px;\r\n    padding: 10px;\r\n    z-index: 100;\r\n    box-sizing: border-box;\r\n}\r\n\r\n.ptro-error {\r\n    background-color: rgba(200, 0, 0, 0.5);\r\n    padding: 5px;\r\n    margin: 5px;\r\n    color: white;\r\n}\r\n\r\n.ptro-v-middle:before {\r\n    content: "";\r\n    display: inline-block;\r\n    vertical-align: middle;\r\n    height: 100%;\r\n}\r\n\r\n.ptro-v-middle-in {\r\n    display: inline-block;\r\n    vertical-align: middle;\r\n    position: relative;\r\n}\r\n\r\n.ptro-wrapper .ptro-settings-widget {\r\n    width: 300px;\r\n    padding: 10px;\r\n    z-index: 100;\r\n    box-sizing: border-box;\r\n}\r\n\r\ntd.ptro-resize-table-left {\r\n    text-align: right;\r\n    padding-right: 5px;\r\n    float: none;\r\n    font-size: 14px;\r\n}\r\n\r\n.ptro-wrapper .ptro-color-edit {\r\n    margin-top: 15px;\r\n}\r\n\r\n.ptro-wrapper .ptro-color-edit input {\r\n    float: left;\r\n    height: 24px;\r\n    text-align: center;\r\n    font-family: monospace;\r\n    font-size: 14px;\r\n}\r\n\r\n.ptro-wrapper .ptro-color-edit input:focus {\r\n    outline: none;\r\n}\r\n\r\n.ptro-wrapper .ptro-color-edit input.ptro-color {\r\n    width: 70px;\r\n}\r\n\r\n.ptro-wrapper .ptro-color-edit input.ptro-color-alpha {\r\n    font-size: 14px;\r\n    width: 55px;\r\n    padding: 0 0 0 2px;\r\n    line-height: 23px;\r\n    height: 23px;\r\n}\r\n\r\n.ptro-wrapper .ptro-color-alpha-label,\r\n.ptro-wrapper .ptro-label  {\r\n    float: left;\r\n    padding: 0 2px 0 0;\r\n    margin-left: 5px;\r\n    font-family: "Open Sans", sans-serif;\r\n}\r\n\r\n.ptro-pixel-size-input {\r\n    width: 60px;\r\n}\r\n\r\n.ptro-wrapper .ptro-pipette {\r\n    height: 24px;\r\n    width: 24px;\r\n    margin: 0;\r\n}\r\n\r\ndiv.ptro-color-widget-wrapper {\r\n\tz-index: 1000;\r\n}\r\n\r\n.ptro-wrapper .ptro-pipette i {\r\n    line-height: 16px;\r\n}\r\n\r\n.ptro-wrapper .ptro-pipette:active {\r\n    outline: none;\r\n}\r\n\r\n.ptro-wrapper .ptro-color-widget-wrapper .ptro-canvas-light,\r\n.ptro-wrapper .ptro-color-widget-wrapper .ptro-canvas-alpha {\r\n    margin-top: 10px;\r\n}\r\n\r\nspan.ptro-color-light-regulator,\r\nspan.ptro-color-alpha-regulator {\r\n    display: block;\r\n    margin-top: -5px;\r\n    margin-left: 5px;\r\n    position: absolute;\r\n    width: 0;\r\n    height: 0;\r\n    border-left: 5px solid transparent;\r\n    border-right: 5px solid transparent;\r\n    border-bottom: 5px solid;\r\n    cursor: crosshair;\r\n}\r\n\r\nspan.ptro-color-alpha-regulator {\r\n    margin-top: 0;\r\n}\r\n\r\n.alpha-checkers {\r\n    background-image: url(' + p + ");\r\n    display: block;\r\n    width: 100%;\r\n    height: 15px;\r\n    background-size: 10px 10px;\r\n    margin-top: -20px;\r\n}\r\n\r\ninput.ptro-input:focus,\r\nselect.ptro-input:focus {\r\n    outline: none;\r\n    box-shadow: none ;\r\n}\r\n\r\ninput.ptro-input,\r\nselect.ptro-input {\r\n    vertical-align: initial;\r\n    padding-top: 0;\r\n    padding-bottom: 0;\r\n    padding-right: 0;\r\n}\r\n\r\n.ptro-named-btn p {\r\n    font-size: inherit;\r\n    line-height: normal;\r\n    margin: inherit;\r\n}\r\n\r\n.ptro-wrapper .ptro-zoomer {\r\n    border-top:1px solid white;\r\n    border-left:1px solid white;\r\n    position: absolute;\r\n    z-index: 2000;\r\n    display: none;\r\n}\r\n\r\n.ptro-text-tool-input {\r\n    background-color: rgba(0,0,0,0);\r\n    width: auto;\r\n    outline: 1px dotted;\r\n    display: block;\r\n    min-width: 5px;\r\n    padding: 0 1px;\r\n    overflow-x: hidden;\r\n    word-wrap: normal;\r\n    overflow-y: hidden;\r\n    box-sizing: content-box;\r\n    line-height: normal;\r\n    text-align: left;\r\n}\r\n.ptro-paster-wrappers-fits {\r\n    display: flex;\r\n    justify-content: space-around;\r\n    align-items: center;\r\n}\r\n.ptro-selector-extend[type] {\r\n    height: 70px;\r\n    width: 70px;\r\n}\r\n.ptro-selector-extend div:last-child {\r\n    display: none;\r\n}\r\n.ptro-selector-fit[type] {\r\n    height: 220px;\r\n    width: 220px;\r\n    margin: 0px;\r\n}\r\n.ptro-paster-fit[class] {\r\n    margin-right: 46px;\r\n}\r\n.ptro-text-tool-buttons {\r\n    display: flex;\r\n    position: absolute;\r\n}\r\n.ptro-text-tool-input-wrapper {\r\n    position: absolute;\r\n}\r\n\r\nspan.ptro-btn-color-checkers {\r\n    background-image: url(" + p + ");\r\n    display: block;\r\n    width: 32px;\r\n    height: 32px;\r\n    background-size: 16px 16px;\r\n    margin-top: -32px;\r\n}\r\n\r\nspan.ptro-btn-color-checkers-bar {\r\n    background-image: url(" + p + ');\r\n    width: 32px;\r\n    line-height: 12px;\r\n    height: 32px;\r\n    background-size: 16px 16px;\r\n    z-index: 0;\r\n    position: relative;\r\n    margin-left: -32px;\r\n}\r\n\r\n.ptro-bar-right {\r\n    display: flex;\r\n\r\n}\r\n\r\n.ptro-link {\r\n    float: left;\r\n    margin-right: -12px;\r\n    margin-top: -23px;\r\n}\r\n\r\n.ptro-resize-link-wrapper {\r\n    display: inline-block;\r\n    height: 40px;\r\n}\r\n\r\n\r\ninput.ptro-resize-width-input,\r\ninput.ptro-resize-heigth-input,\r\ninput.ptro-pixel-size-input {\r\n    line-height: 22px;\r\n    padding: 0 0 0 4px;\r\n    height: 22px;\r\n    width: 80px;\r\n}\r\n\r\n.ptro-selector-btn i {\r\n    font-size: 56px;\r\n}\r\n\r\n.ptro-selector-btn {\r\n    opacity: 0.8;\r\n    border: 0;\r\n    width: 100px;\r\n    cursor: pointer;\r\n}\r\n\r\n.ptro-selector-btn {\r\n    margin-left: 5px;\r\n    margin-right: 5px;\r\n    margin-top: 5px;\r\n    margin-bottom: 5px;\r\n}\r\n\r\n.ptro-selector-btn div {\r\n    margin: 5px 0;\r\n}\r\n\r\n.ptro-paster-select .ptro-in div {\r\n    font-family: "Open Sans", sans-serif;\r\n    font-size: 14px;\r\n}\r\n\r\n.ptro-selector-btn:hover {\r\n    opacity: 0.6;\r\n}\r\n\r\n.ptro-paster-select {\r\n    display: inline-block;\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n    height: 100%;\r\n}\r\n\r\n.ptro-paster-select .ptro-in {\r\n    background-color: rgba(0,0,0,0.7);\r\n    padding: 40px;\r\n}\r\n.ptro-paster-select-wrapper {\r\n    position: absolute;\r\n    top: 0;\r\n    left: 0;\r\n    right: 0;\r\n    bottom: 0;\r\n}\r\n.ptro-paster-select-wrapper-extends button:first-child {\r\n    display: block;\r\n    margin: 0 auto;\r\n}\r\n.ptro-paster-select-wrapper-extends button:last-child{\r\n    display: block;\r\n    margin: 0 auto;\r\n}\r\n.ptro-paster-select-wrapper-extends button:nth-child(2){\r\n    display: inline-block;\r\n    margin-right: 78px;\r\n}\r\n.ptro-paster-fit .ptro-paster-wrapper-label[class] {\r\n    display: block; \r\n    color: white;\r\n    font-size: 20px;\r\n    text-align: center;\r\n    margin-top: 10px;\r\n    text-transform: uppercase;\r\n}\r\n.ptro-paster-select-wrapper-extends .ptro-paster-wrapper-label[class] {\r\n    display: block; \r\n    color: white;\r\n    font-size: 20px;\r\n    text-align: center;\r\n    margin-top: 10px;\r\n    text-transform: uppercase;\r\n}\r\n.ptro-paste-label {\r\n    color: white;\r\n    margin-bottom: 10px;\r\n}\r\n\r\n.ptro-iframe {\r\n    width: 100%;\r\n    height: 100%;\r\n    border: 0;\r\n}\r\n\r\n\r\n\r\ni.mce-i-painterro:before, span.mce_painterro:before {\r\n\tfont-size: 20px;\r\n\tfont-family: ptroiconfont;\r\n\tfont-style: normal;\r\n\tfont-weight: normal;\r\n\tfont-variant: normal;\r\n\ttext-transform: none;\r\n\tspeak: none;\r\n\t-webkit-font-smoothing: antialiased;\r\n\t-moz-osx-font-smoothing: grayscale;\r\n\tcontent: "\\f101";\r\n}\r\n\r\n.ptro-scroller {\r\n    position: absolute;\r\n    top: 0;\r\n    left: 0;\r\n    right: 0;\r\n    bottom: 0;\r\n}\r\n\r\ntd.ptro-strict-cell {\r\n    font-size: 8px;\r\n    line-height: normal;\r\n}', "", {
          version: 3,
          sources: ["webpack://./css/styles.css"],
          names: [],
          mappings: "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",
          sourcesContent: ['.ptro-wrapper {\r\n    position: absolute;\r\n    top: 0;\r\n    left: 0;\r\n    right: 0;\r\n    text-align: center;\r\n    z-index: 10;\r\n    font-family: "Open Sans", sans-serif;\r\n}\r\n\r\n@media screen and (min-width: 869px) {\r\n    .ptro-holder {\r\n        position: fixed;\r\n        left: 35px;\r\n        right: 35px;\r\n        top: 35px;\r\n        bottom: 35px;\r\n        box-shadow: 1px 1px 5px #888;\r\n    }\r\n}\r\n\r\n@media screen and (max-width: 868px) {\r\n    .ptro-holder {\r\n        position: fixed;\r\n        box-shadow: 3px 3px 15px #787878;\r\n        left: 0;\r\n        right: 0;\r\n        top: 0;\r\n        bottom: 0;\r\n    }\r\n}\r\n\r\n.ptro-holder-wrapper {\r\n    position: fixed;\r\n    top: 0;\r\n    left: 0;\r\n    width: 100%;\r\n    height: 100%;\r\n    background-color: rgba(0,0,0,0.2);\r\n}\r\n\r\n.ptro-wrapper.ptro-v-aligned:before {\r\n    content: "";\r\n    display: inline-block;\r\n    vertical-align: middle;\r\n    height: 100%;\r\n}\r\n\r\n\r\n.ptro-icon {\r\n    font-size: 14px;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n}\r\n\r\n\r\n.ptro-icon-btn:disabled {\r\n    color: gray;\r\n}\r\n\r\n.ptro-wrapper canvas {\r\n    /* vertical-align: middle; */\r\n    display: inline-block;\r\n    touch-action: none;\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n    width: auto;\r\n    height: auto;\r\n}\r\n\r\n.ptro-center-table {\r\n    display:table;\r\n    width: 100%;\r\n    height: 100%;\r\n}\r\n\r\n.ptro-center-tablecell {\r\n    display:table-cell;\r\n    vertical-align:middle;\r\n}\r\n\r\n.ptro-icon-btn {\r\n    border: 0;\r\n    cursor: pointer;\r\n    flex-shrink: 0;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n}\r\n\r\n.ptro-icon-btn i {\r\n}\r\n\r\n\r\n.ptro-named-btn {\r\n    border: 0;\r\n    display: inline-block;\r\n    height: 30px;\r\n    margin-left: 4px;\r\n    font-family: "Open Sans", sans-serif;\r\n    position: relative;\r\n    top:-5px;\r\n    font-size: 14px;\r\n    cursor: pointer;\r\n}\r\n\r\n.ptro-icon-btn:focus,\r\n.ptro-named-btn:focus,\r\n.color-diwget-btn:focus,\r\n.ptro-color-btn:focus,\r\n.ptro-selector-btn:focus {\r\n    outline: none;\r\n}\r\n\r\n.ptro-color-btn {\r\n    height: 32px;\r\n    width: 32px;\r\n    cursor: pointer;\r\n}\r\n\r\n\r\n.ptro-wrapper .select-handler {\r\n    background-color: white;\r\n    border: 1px solid black;\r\n    width: 6px;\r\n    height: 6px;\r\n    position: absolute;\r\n    z-index: 10;\r\n}\r\n\r\n.ptro-wrapper .ptro-crp-el {\r\n    position: absolute;\r\n}\r\n\r\n.ptro-wrapper .ptro-substrate {\r\n    opacity: 0.3;\r\n    background-image: url("checkers.svg");\r\n    background-size: 32px 32px;\r\n    z-index: -1;\r\n    position: absolute;\r\n}\r\n\r\n.ptro-wrapper .ptro-close-color-picker {\r\n    height: 24px;\r\n    margin-top: 5px;\r\n    margin-bottom: -5px;\r\n    margin-left: auto;\r\n}\r\n\r\n.ptro-tool-controls {\r\n    flex-shrink: 0;\r\n    display: flex;\r\n    align-items: center;\r\n}\r\n\r\n.ptro-wrapper .ptro-crp-rect {\r\n    position: absolute;\r\n    background-color: rgba(225, 225, 225, .5);\r\n    border: 1px dashed black;\r\n    cursor: move;\r\n    -moz-user-select: none;\r\n    /* -webkit-user-select: none; */\r\n    -ms-user-select: none;\r\n    user-select: none;\r\n    -webkit-user-drag: none;\r\n    user-drag: none;\r\n    -webkit-touch-callout: none;\r\n    background-repeat: no-repeat;\r\n    background-size: 100% 100%;\r\n}\r\n\r\n.ptro-wrapper .ptro-crp-tl {\r\n    position: absolute;\r\n    top: 0;\r\n    left: 0;\r\n    margin: -4px 0 0 -4px;\r\n    cursor: se-resize;\r\n}\r\n\r\n.ptro-wrapper .ptro-crp-bl {\r\n    position: absolute;\r\n    left: 0;\r\n    bottom: 0;\r\n    margin: 0 0 -4px -4px;\r\n    cursor: ne-resize;\r\n}\r\n\r\n.ptro-wrapper .ptro-crp-br {\r\n    position: absolute;\r\n    right: 0;\r\n    bottom: 0;\r\n    margin: 0 -4px -4px 0;\r\n    cursor: se-resize;\r\n}\r\n\r\n.ptro-wrapper .ptro-crp-tr {\r\n    position: absolute;\r\n    right: 0;\r\n    top: 0;\r\n    margin: -4px -4px 0 0;\r\n    cursor: ne-resize;\r\n}\r\n\r\n\r\n.ptro-wrapper .ptro-crp-l {\r\n    position: absolute;\r\n    top: 50%;\r\n    left: 0;\r\n    margin: -4px 0 0 -4px;\r\n    cursor: e-resize;\r\n}\r\n\r\n.ptro-wrapper .ptro-crp-t {\r\n    position: absolute;\r\n    top: 0;\r\n    left: 50%;\r\n    margin: -4px 0 0 -4px;\r\n    cursor: s-resize;\r\n}\r\n\r\n.ptro-wrapper .ptro-crp-r {\r\n    position: absolute;\r\n    top: 50%;\r\n    right: 0;\r\n    margin: -4px -4px 0 0 ;\r\n    cursor: e-resize;\r\n}\r\n\r\n.ptro-wrapper .ptro-crp-b {\r\n    position: absolute;\r\n    left: 50%;\r\n    bottom: 0;\r\n    margin: 0 0 -4px -4px;\r\n    cursor: s-resize;\r\n}\r\n\r\n.ptro-wrapper div,\r\n.ptro-wrapper span,\r\n.ptro-wrapper i,\r\n.ptro-bar .ptro-tool-ctl-name,\r\n.ptro-bar input,\r\n.ptro-bar .ptro-named-btn p {\r\n    -moz-user-select: none;\r\n   /* -webkit-user-select: none; */\r\n    -ms-user-select: none;\r\n    user-select: none;\r\n    -webkit-user-drag: none;\r\n    user-drag: none;\r\n    -webkit-touch-callout: none;\r\n}\r\n\r\n.ptro-bar > div {\r\n    overflow-x: auto;\r\n    overflow-y: hidden;\r\n    height: 100%;\r\n    display: flex;\r\n    align-items: center;\r\n}\r\n\r\n\r\n\r\n.ptro-wrapper .ptro-common-widget-wrapper {\r\n    position: absolute;\r\n    background-color: rgba(0, 0, 0, 0.6);\r\n    top: 0;\r\n    bottom: 0;\r\n    left: 0;\r\n    right: 0;\r\n}\r\n\r\n.ptro-wrapper .ptro-pallet canvas {\r\n    cursor: crosshair;\r\n}\r\n\r\ndiv.ptro-pallet {\r\n    line-height: 0;\r\n}\r\n\r\n.ptro-wrapper .ptro-pallet,\r\n.ptro-wrapper .ptro-resize-widget{\r\n    width: 200px;\r\n    padding: 10px;\r\n    z-index: 100;\r\n    box-sizing: border-box;\r\n}\r\n\r\n.ptro-error {\r\n    background-color: rgba(200, 0, 0, 0.5);\r\n    padding: 5px;\r\n    margin: 5px;\r\n    color: white;\r\n}\r\n\r\n.ptro-v-middle:before {\r\n    content: "";\r\n    display: inline-block;\r\n    vertical-align: middle;\r\n    height: 100%;\r\n}\r\n\r\n.ptro-v-middle-in {\r\n    display: inline-block;\r\n    vertical-align: middle;\r\n    position: relative;\r\n}\r\n\r\n.ptro-wrapper .ptro-settings-widget {\r\n    width: 300px;\r\n    padding: 10px;\r\n    z-index: 100;\r\n    box-sizing: border-box;\r\n}\r\n\r\ntd.ptro-resize-table-left {\r\n    text-align: right;\r\n    padding-right: 5px;\r\n    float: none;\r\n    font-size: 14px;\r\n}\r\n\r\n.ptro-wrapper .ptro-color-edit {\r\n    margin-top: 15px;\r\n}\r\n\r\n.ptro-wrapper .ptro-color-edit input {\r\n    float: left;\r\n    height: 24px;\r\n    text-align: center;\r\n    font-family: monospace;\r\n    font-size: 14px;\r\n}\r\n\r\n.ptro-wrapper .ptro-color-edit input:focus {\r\n    outline: none;\r\n}\r\n\r\n.ptro-wrapper .ptro-color-edit input.ptro-color {\r\n    width: 70px;\r\n}\r\n\r\n.ptro-wrapper .ptro-color-edit input.ptro-color-alpha {\r\n    font-size: 14px;\r\n    width: 55px;\r\n    padding: 0 0 0 2px;\r\n    line-height: 23px;\r\n    height: 23px;\r\n}\r\n\r\n.ptro-wrapper .ptro-color-alpha-label,\r\n.ptro-wrapper .ptro-label  {\r\n    float: left;\r\n    padding: 0 2px 0 0;\r\n    margin-left: 5px;\r\n    font-family: "Open Sans", sans-serif;\r\n}\r\n\r\n.ptro-pixel-size-input {\r\n    width: 60px;\r\n}\r\n\r\n.ptro-wrapper .ptro-pipette {\r\n    height: 24px;\r\n    width: 24px;\r\n    margin: 0;\r\n}\r\n\r\ndiv.ptro-color-widget-wrapper {\r\n\tz-index: 1000;\r\n}\r\n\r\n.ptro-wrapper .ptro-pipette i {\r\n    line-height: 16px;\r\n}\r\n\r\n.ptro-wrapper .ptro-pipette:active {\r\n    outline: none;\r\n}\r\n\r\n.ptro-wrapper .ptro-color-widget-wrapper .ptro-canvas-light,\r\n.ptro-wrapper .ptro-color-widget-wrapper .ptro-canvas-alpha {\r\n    margin-top: 10px;\r\n}\r\n\r\nspan.ptro-color-light-regulator,\r\nspan.ptro-color-alpha-regulator {\r\n    display: block;\r\n    margin-top: -5px;\r\n    margin-left: 5px;\r\n    position: absolute;\r\n    width: 0;\r\n    height: 0;\r\n    border-left: 5px solid transparent;\r\n    border-right: 5px solid transparent;\r\n    border-bottom: 5px solid;\r\n    cursor: crosshair;\r\n}\r\n\r\nspan.ptro-color-alpha-regulator {\r\n    margin-top: 0;\r\n}\r\n\r\n.alpha-checkers {\r\n    background-image: url("checkers.svg");\r\n    display: block;\r\n    width: 100%;\r\n    height: 15px;\r\n    background-size: 10px 10px;\r\n    margin-top: -20px;\r\n}\r\n\r\ninput.ptro-input:focus,\r\nselect.ptro-input:focus {\r\n    outline: none;\r\n    box-shadow: none ;\r\n}\r\n\r\ninput.ptro-input,\r\nselect.ptro-input {\r\n    vertical-align: initial;\r\n    padding-top: 0;\r\n    padding-bottom: 0;\r\n    padding-right: 0;\r\n}\r\n\r\n.ptro-named-btn p {\r\n    font-size: inherit;\r\n    line-height: normal;\r\n    margin: inherit;\r\n}\r\n\r\n.ptro-wrapper .ptro-zoomer {\r\n    border-top:1px solid white;\r\n    border-left:1px solid white;\r\n    position: absolute;\r\n    z-index: 2000;\r\n    display: none;\r\n}\r\n\r\n.ptro-text-tool-input {\r\n    background-color: rgba(0,0,0,0);\r\n    width: auto;\r\n    outline: 1px dotted;\r\n    display: block;\r\n    min-width: 5px;\r\n    padding: 0 1px;\r\n    overflow-x: hidden;\r\n    word-wrap: normal;\r\n    overflow-y: hidden;\r\n    box-sizing: content-box;\r\n    line-height: normal;\r\n    text-align: left;\r\n}\r\n.ptro-paster-wrappers-fits {\r\n    display: flex;\r\n    justify-content: space-around;\r\n    align-items: center;\r\n}\r\n.ptro-selector-extend[type] {\r\n    height: 70px;\r\n    width: 70px;\r\n}\r\n.ptro-selector-extend div:last-child {\r\n    display: none;\r\n}\r\n.ptro-selector-fit[type] {\r\n    height: 220px;\r\n    width: 220px;\r\n    margin: 0px;\r\n}\r\n.ptro-paster-fit[class] {\r\n    margin-right: 46px;\r\n}\r\n.ptro-text-tool-buttons {\r\n    display: flex;\r\n    position: absolute;\r\n}\r\n.ptro-text-tool-input-wrapper {\r\n    position: absolute;\r\n}\r\n\r\nspan.ptro-btn-color-checkers {\r\n    background-image: url("checkers.svg");\r\n    display: block;\r\n    width: 32px;\r\n    height: 32px;\r\n    background-size: 16px 16px;\r\n    margin-top: -32px;\r\n}\r\n\r\nspan.ptro-btn-color-checkers-bar {\r\n    background-image: url("checkers.svg");\r\n    width: 32px;\r\n    line-height: 12px;\r\n    height: 32px;\r\n    background-size: 16px 16px;\r\n    z-index: 0;\r\n    position: relative;\r\n    margin-left: -32px;\r\n}\r\n\r\n.ptro-bar-right {\r\n    display: flex;\r\n\r\n}\r\n\r\n.ptro-link {\r\n    float: left;\r\n    margin-right: -12px;\r\n    margin-top: -23px;\r\n}\r\n\r\n.ptro-resize-link-wrapper {\r\n    display: inline-block;\r\n    height: 40px;\r\n}\r\n\r\n\r\ninput.ptro-resize-width-input,\r\ninput.ptro-resize-heigth-input,\r\ninput.ptro-pixel-size-input {\r\n    line-height: 22px;\r\n    padding: 0 0 0 4px;\r\n    height: 22px;\r\n    width: 80px;\r\n}\r\n\r\n.ptro-selector-btn i {\r\n    font-size: 56px;\r\n}\r\n\r\n.ptro-selector-btn {\r\n    opacity: 0.8;\r\n    border: 0;\r\n    width: 100px;\r\n    cursor: pointer;\r\n}\r\n\r\n.ptro-selector-btn {\r\n    margin-left: 5px;\r\n    margin-right: 5px;\r\n    margin-top: 5px;\r\n    margin-bottom: 5px;\r\n}\r\n\r\n.ptro-selector-btn div {\r\n    margin: 5px 0;\r\n}\r\n\r\n.ptro-paster-select .ptro-in div {\r\n    font-family: "Open Sans", sans-serif;\r\n    font-size: 14px;\r\n}\r\n\r\n.ptro-selector-btn:hover {\r\n    opacity: 0.6;\r\n}\r\n\r\n.ptro-paster-select {\r\n    display: inline-block;\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n    height: 100%;\r\n}\r\n\r\n.ptro-paster-select .ptro-in {\r\n    background-color: rgba(0,0,0,0.7);\r\n    padding: 40px;\r\n}\r\n.ptro-paster-select-wrapper {\r\n    position: absolute;\r\n    top: 0;\r\n    left: 0;\r\n    right: 0;\r\n    bottom: 0;\r\n}\r\n.ptro-paster-select-wrapper-extends button:first-child {\r\n    display: block;\r\n    margin: 0 auto;\r\n}\r\n.ptro-paster-select-wrapper-extends button:last-child{\r\n    display: block;\r\n    margin: 0 auto;\r\n}\r\n.ptro-paster-select-wrapper-extends button:nth-child(2){\r\n    display: inline-block;\r\n    margin-right: 78px;\r\n}\r\n.ptro-paster-fit .ptro-paster-wrapper-label[class] {\r\n    display: block; \r\n    color: white;\r\n    font-size: 20px;\r\n    text-align: center;\r\n    margin-top: 10px;\r\n    text-transform: uppercase;\r\n}\r\n.ptro-paster-select-wrapper-extends .ptro-paster-wrapper-label[class] {\r\n    display: block; \r\n    color: white;\r\n    font-size: 20px;\r\n    text-align: center;\r\n    margin-top: 10px;\r\n    text-transform: uppercase;\r\n}\r\n.ptro-paste-label {\r\n    color: white;\r\n    margin-bottom: 10px;\r\n}\r\n\r\n.ptro-iframe {\r\n    width: 100%;\r\n    height: 100%;\r\n    border: 0;\r\n}\r\n\r\n\r\n\r\ni.mce-i-painterro:before, span.mce_painterro:before {\r\n\tfont-size: 20px;\r\n\tfont-family: ptroiconfont;\r\n\tfont-style: normal;\r\n\tfont-weight: normal;\r\n\tfont-variant: normal;\r\n\ttext-transform: none;\r\n\tspeak: none;\r\n\t-webkit-font-smoothing: antialiased;\r\n\t-moz-osx-font-smoothing: grayscale;\r\n\tcontent: "\\f101";\r\n}\r\n\r\n.ptro-scroller {\r\n    position: absolute;\r\n    top: 0;\r\n    left: 0;\r\n    right: 0;\r\n    bottom: 0;\r\n}\r\n\r\ntd.ptro-strict-cell {\r\n    font-size: 8px;\r\n    line-height: normal;\r\n}'],
          sourceRoot: ""
        }]), e.Z = c
      },
      645: function(t) {
        "use strict";
        t.exports = function(t) {
          var e = [];
          return e.toString = function() {
            return this.map((function(e) {
              var n = t(e);
              return e[2] ? "@media ".concat(e[2], " {").concat(n, "}") : n
            })).join("")
          }, e.i = function(t, n, r) {
            "string" == typeof t && (t = [
              [null, t, ""]
            ]);
            var o = {};
            if (r)
              for (var i = 0; i < this.length; i++) {
                var a = this[i][0];
                null != a && (o[a] = !0)
              }
            for (var l = 0; l < t.length; l++) {
              var A = [].concat(t[l]);
              r && o[A[0]] || (n && (A[2] ? A[2] = "".concat(n, " and ").concat(A[2]) : A[2] = n), e.push(A))
            }
          }, e
        }
      },
      15: function(t) {
        "use strict";

        function e(t, e) {
          return function(t) {
            if (Array.isArray(t)) return t
          }(t) || function(t, e) {
            if ("undefined" == typeof Symbol || !(Symbol.iterator in Object(t))) return;
            var n = [],
              r = !0,
              o = !1,
              i = void 0;
            try {
              for (var a, l = t[Symbol.iterator](); !(r = (a = l.next()).done) && (n.push(a.value), !e || n.length !== e); r = !0);
            } catch (t) {
              o = !0, i = t
            } finally {
              try {
                r || null == l.return || l.return()
              } finally {
                if (o) throw i
              }
            }
            return n
          }(t, e) || function(t, e) {
            if (!t) return;
            if ("string" == typeof t) return n(t, e);
            var r = Object.prototype.toString.call(t).slice(8, -1);
            "Object" === r && t.constructor && (r = t.constructor.name);
            if ("Map" === r || "Set" === r) return Array.from(t);
            if ("Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return n(t, e)
          }(t, e) || function() {
            throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
          }()
        }

        function n(t, e) {
          (null == e || e > t.length) && (e = t.length);
          for (var n = 0, r = new Array(e); n < e; n++) r[n] = t[n];
          return r
        }
        t.exports = function(t) {
          var n = e(t, 4),
            r = n[1],
            o = n[3];
          if ("function" == typeof btoa) {
            var i = btoa(unescape(encodeURIComponent(JSON.stringify(o)))),
              a = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(i),
              l = "/*# ".concat(a, " */"),
              A = o.sources.map((function(t) {
                return "/*# sourceURL=".concat(o.sourceRoot || "").concat(t, " */")
              }));
            return [r].concat(A).concat([l]).join("\n")
          }
          return [r].join("\n")
        }
      },
      667: function(t) {
        "use strict";
        t.exports = function(t, e) {
          return e || (e = {}), "string" != typeof(t = t && t.__esModule ? t.default : t) ? t : (/^['"].*['"]$/.test(t) && (t = t.slice(1, -1)), e.hash && (t += e.hash), /["'() \t\n]/.test(t) || e.needQuotes ? '"'.concat(t.replace(/"/g, '\\"').replace(/\n/g, "\\n"), '"') : t)
        }
      },
      306: function(t) {
        ! function(e) {
          "use strict";
          var n = function() {
              return {
                escape: function(t) {
                  return t.replace(/([.*+?^${}()|\[\]\/\\])/g, "\\$1")
                },
                parseExtension: e,
                mimeType: function(t) {
                  var n = e(t).toLowerCase();
                  return (r = "application/font-woff", o = "image/jpeg", {
                    woff: r,
                    woff2: r,
                    ttf: "application/font-truetype",
                    eot: "application/vnd.ms-fontobject",
                    png: "image/png",
                    jpg: o,
                    jpeg: o,
                    gif: "image/gif",
                    tiff: "image/tiff",
                    svg: "image/svg+xml"
                  })[n] || "";
                  var r, o
                },
                dataAsUrl: function(t, e) {
                  return "data:" + e + ";base64," + t
                },
                isDataUrl: function(t) {
                  return -1 !== t.search(/^(data:)/)
                },
                canvasToBlob: function(t) {
                  return t.toBlob ? new Promise((function(e) {
                    t.toBlob(e)
                  })) : function(t) {
                    return new Promise((function(e) {
                      for (var n = window.atob(t.toDataURL().split(",")[1]), r = n.length, o = new Uint8Array(r), i = 0; i < r; i++) o[i] = n.charCodeAt(i);
                      e(new Blob([o], {
                        type: "image/png"
                      }))
                    }))
                  }(t)
                },
                resolveUrl: function(t, e) {
                  var n = document.implementation.createHTMLDocument(),
                    r = n.createElement("base");
                  n.head.appendChild(r);
                  var o = n.createElement("a");
                  return n.body.appendChild(o), r.href = e, o.href = t, o.href
                },
                getAndEncode: function(t) {
                  var e = 3e4;
                  l.impl.options.cacheBust && (t += (/\?/.test(t) ? "&" : "?") + (new Date).getTime());
                  return new Promise((function(n) {
                    var r, o = new XMLHttpRequest;
                    if (o.onreadystatechange = a, o.ontimeout = A, o.responseType = "blob", o.timeout = e, o.open("GET", t, !0), o.send(), l.impl.options.imagePlaceholder) {
                      var i = l.impl.options.imagePlaceholder.split(/,/);
                      i && i[1] && (r = i[1])
                    }

                    function a() {
                      if (4 === o.readyState)
                        if (200 === o.status) {
                          var e = new FileReader;
                          e.onloadend = function() {
                            var t = e.result.split(/,/)[1];
                            n(t)
                          }, e.readAsDataURL(o.response)
                        } else r ? n(r) : s("cannot fetch resource: " + t + ", status: " + o.status)
                    }

                    function A() {
                      r ? n(r) : s("timeout of " + e + "ms occured while fetching resource: " + t)
                    }

                    function s(t) {
                      console.error(t), n("")
                    }
                  }))
                },
                uid: (t = 0, function() {
                  return "u" + e() + t++;

                  function e() {
                    return ("0000" + (Math.random() * Math.pow(36, 4) << 0).toString(36)).slice(-4)
                  }
                }),
                delay: function(t) {
                  return function(e) {
                    return new Promise((function(n) {
                      setTimeout((function() {
                        n(e)
                      }), t)
                    }))
                  }
                },
                asArray: function(t) {
                  for (var e = [], n = t.length, r = 0; r < n; r++) e.push(t[r]);
                  return e
                },
                escapeXhtml: function(t) {
                  return t.replace(/#/g, "%23").replace(/\n/g, "%0A")
                },
                makeImage: function(t) {
                  return new Promise((function(e, n) {
                    var r = new Image;
                    r.onload = function() {
                      e(r)
                    }, r.onerror = n, r.src = t
                  }))
                },
                width: function(t) {
                  var e = n(t, "border-left-width"),
                    r = n(t, "border-right-width");
                  return t.scrollWidth + e + r
                },
                height: function(t) {
                  var e = n(t, "border-top-width"),
                    r = n(t, "border-bottom-width");
                  return t.scrollHeight + e + r
                }
              };
              var t;

              function e(t) {
                var e = /\.([^\.\/]*?)$/g.exec(t);
                return e ? e[1] : ""
              }

              function n(t, e) {
                var n = window.getComputedStyle(t).getPropertyValue(e);
                return parseFloat(n.replace("px", ""))
              }
            }(),
            r = function() {
              var t = /url\(['"]?([^'"]+?)['"]?\)/g;
              return {
                inlineAll: function(t, n, i) {
                  return a() ? Promise.resolve(t) : Promise.resolve(t).then(r).then((function(e) {
                    var r = Promise.resolve(t);
                    return e.forEach((function(t) {
                      r = r.then((function(e) {
                        return o(e, t, n, i)
                      }))
                    })), r
                  }));

                  function a() {
                    return !e(t)
                  }
                },
                shouldProcess: e,
                impl: {
                  readUrls: r,
                  inline: o
                }
              };

              function e(e) {
                return -1 !== e.search(t)
              }

              function r(e) {
                for (var r, o = []; null !== (r = t.exec(e));) o.push(r[1]);
                return o.filter((function(t) {
                  return !n.isDataUrl(t)
                }))
              }

              function o(t, e, r, o) {
                return Promise.resolve(e).then((function(t) {
                  return r ? n.resolveUrl(t, r) : t
                })).then(o || n.getAndEncode).then((function(t) {
                  return n.dataAsUrl(t, n.mimeType(e))
                })).then((function(r) {
                  return t.replace(function(t) {
                    return new RegExp("(url\\(['\"]?)(" + n.escape(t) + ")(['\"]?\\))", "g")
                  }(e), "$1" + r + "$3")
                }))
              }
            }(),
            o = function() {
              return {
                resolveAll: function() {
                  return t(document).then((function(t) {
                    return Promise.all(t.map((function(t) {
                      return t.resolve()
                    })))
                  })).then((function(t) {
                    return t.join("\n")
                  }))
                },
                impl: {
                  readAll: t
                }
              };

              function t() {
                return Promise.resolve(n.asArray(document.styleSheets)).then((function(t) {
                  var e = [];
                  return t.forEach((function(t) {
                    try {
                      n.asArray(t.cssRules || []).forEach(e.push.bind(e))
                    } catch (e) {
                      console.log("Error while reading CSS rules from " + t.href, e.toString())
                    }
                  })), e
                })).then((function(t) {
                  return t.filter((function(t) {
                    return t.type === CSSRule.FONT_FACE_RULE
                  })).filter((function(t) {
                    return r.shouldProcess(t.style.getPropertyValue("src"))
                  }))
                })).then((function(e) {
                  return e.map(t)
                }));

                function t(t) {
                  return {
                    resolve: function() {
                      var e = (t.parentStyleSheet || {}).href;
                      return r.inlineAll(t.cssText, e)
                    },
                    src: function() {
                      return t.style.getPropertyValue("src")
                    }
                  }
                }
              }
            }(),
            i = function() {
              return {
                inlineAll: function e(o) {
                  return o instanceof Element ? i(o).then((function() {
                    return o instanceof HTMLImageElement ? t(o).inline() : Promise.all(n.asArray(o.childNodes).map((function(t) {
                      return e(t)
                    })))
                  })) : Promise.resolve(o);

                  function i(t) {
                    var e = t.style.getPropertyValue("background");
                    return e ? r.inlineAll(e).then((function(e) {
                      t.style.setProperty("background", e, t.style.getPropertyPriority("background"))
                    })).then((function() {
                      return t
                    })) : Promise.resolve(t)
                  }
                },
                impl: {
                  newImage: t
                }
              };

              function t(t) {
                return {
                  inline: function(e) {
                    return n.isDataUrl(t.src) ? Promise.resolve() : Promise.resolve(t.src).then(e || n.getAndEncode).then((function(e) {
                      return n.dataAsUrl(e, n.mimeType(t.src))
                    })).then((function(e) {
                      return new Promise((function(n, r) {
                        t.onload = n, t.onerror = r, t.src = e
                      }))
                    }))
                  }
                }
              }
            }(),
            a = {
              imagePlaceholder: void 0,
              cacheBust: !1
            },
            l = {
              toSvg: A,
              toPng: function(t, e) {
                return s(t, e || {}).then((function(t) {
                  return t.toDataURL()
                }))
              },
              toJpeg: function(t, e) {
                return s(t, e = e || {}).then((function(t) {
                  return t.toDataURL("image/jpeg", e.quality || 1)
                }))
              },
              toBlob: function(t, e) {
                return s(t, e || {}).then(n.canvasToBlob)
              },
              toPixelData: function(t, e) {
                return s(t, e || {}).then((function(e) {
                  return e.getContext("2d").getImageData(0, 0, n.width(t), n.height(t)).data
                }))
              },
              impl: {
                fontFaces: o,
                images: i,
                util: n,
                inliner: r,
                options: {}
              }
            };

          function A(t, e) {
            return function(t) {
              void 0 === t.imagePlaceholder ? l.impl.options.imagePlaceholder = a.imagePlaceholder : l.impl.options.imagePlaceholder = t.imagePlaceholder;
              void 0 === t.cacheBust ? l.impl.options.cacheBust = a.cacheBust : l.impl.options.cacheBust = t.cacheBust
            }(e = e || {}), Promise.resolve(t).then((function(t) {
              return c(t, e.filter, !0)
            })).then(p).then(h).then((function(t) {
              e.bgcolor && (t.style.backgroundColor = e.bgcolor);
              e.width && (t.style.width = e.width + "px");
              e.height && (t.style.height = e.height + "px");
              e.style && Object.keys(e.style).forEach((function(n) {
                t.style[n] = e.style[n]
              }));
              return t
            })).then((function(r) {
              return function(t, e, r) {
                return Promise.resolve(t).then((function(t) {
                  return t.setAttribute("xmlns", "http://www.w3.org/1999/xhtml"), (new XMLSerializer).serializeToString(t)
                })).then(n.escapeXhtml).then((function(t) {
                  return '<foreignObject x="0" y="0" width="100%" height="100%">' + t + "</foreignObject>"
                })).then((function(t) {
                  return '<svg xmlns="http://www.w3.org/2000/svg" width="' + e + '" height="' + r + '">' + t + "</svg>"
                })).then((function(t) {
                  return "data:image/svg+xml;charset=utf-8," + t
                }))
              }(r, e.width || n.width(t), e.height || n.height(t))
            }))
          }

          function s(t, e) {
            return A(t, e).then(n.makeImage).then(n.delay(100)).then((function(r) {
              var o = function(t) {
                var r = document.createElement("canvas");
                if (r.width = e.width || n.width(t), r.height = e.height || n.height(t), e.bgcolor) {
                  var o = r.getContext("2d");
                  o.fillStyle = e.bgcolor, o.fillRect(0, 0, r.width, r.height)
                }
                return r
              }(t);
              return o.getContext("2d").drawImage(r, 0, 0), o
            }))
          }

          function c(t, e, r) {
            return r || !e || e(t) ? Promise.resolve(t).then((function(t) {
              return t instanceof HTMLCanvasElement ? n.makeImage(t.toDataURL()) : t.cloneNode(!1)
            })).then((function(r) {
              return function(t, e, r) {
                var o = t.childNodes;
                return 0 === o.length ? Promise.resolve(e) : i(e, n.asArray(o), r).then((function() {
                  return e
                }));

                function i(t, e, n) {
                  var r = Promise.resolve();
                  return e.forEach((function(e) {
                    r = r.then((function() {
                      return c(e, n)
                    })).then((function(e) {
                      e && t.appendChild(e)
                    }))
                  })), r
                }
              }(t, r, e)
            })).then((function(e) {
              return function(t, e) {
                return e instanceof Element ? Promise.resolve().then(r).then(o).then(i).then(a).then((function() {
                  return e
                })) : e;

                function r() {
                  function r(t, e) {
                    function r(t, e) {
                      n.asArray(t).forEach((function(n) {
                        e.setProperty(n, t.getPropertyValue(n), t.getPropertyPriority(n))
                      }))
                    }
                    t.cssText ? e.cssText = t.cssText : r(t, e)
                  }
                  r(window.getComputedStyle(t), e.style)
                }

                function o() {
                  function r(r) {
                    var o = window.getComputedStyle(t, r),
                      i = o.getPropertyValue("content");
                    if ("" !== i && "none" !== i) {
                      var a = n.uid();
                      e.className = e.className + " " + a;
                      var l = document.createElement("style");
                      l.appendChild(A(a, r, o)), e.appendChild(l)
                    }

                    function A(t, e, r) {
                      var o = "." + t + ":" + e,
                        i = r.cssText ? a(r) : l(r);
                      return document.createTextNode(o + "{" + i + "}");

                      function a(t) {
                        var e = t.getPropertyValue("content");
                        return t.cssText + " content: " + e + ";"
                      }

                      function l(t) {
                        return n.asArray(t).map(e).join("; ") + ";";

                        function e(e) {
                          return e + ": " + t.getPropertyValue(e) + (t.getPropertyPriority(e) ? " !important" : "")
                        }
                      }
                    }
                  } [":before", ":after"].forEach((function(t) {
                    r(t)
                  }))
                }

                function i() {
                  t instanceof HTMLTextAreaElement && (e.innerHTML = t.value), t instanceof HTMLInputElement && e.setAttribute("value", t.value)
                }

                function a() {
                  e instanceof SVGElement && (e.setAttribute("xmlns", "http://www.w3.org/2000/svg"), e instanceof SVGRectElement && ["width", "height"].forEach((function(t) {
                    var n = e.getAttribute(t);
                    n && e.style.setProperty(t, n)
                  })))
                }
              }(t, e)
            })) : Promise.resolve()
          }

          function p(t) {
            return o.resolveAll().then((function(e) {
              var n = document.createElement("style");
              return t.appendChild(n), n.appendChild(document.createTextNode(e)), t
            }))
          }

          function h(t) {
            return i.inlineAll(t).then((function() {
              return t
            }))
          }
          t.exports = l
        }()
      },
      891: function(t, e, n) {
        "use strict";
        n.r(e), n.d(e, {
          default: function() {
            return B
          }
        });
        var r = /iPhone/i,
          o = /iPod/i,
          i = /iPad/i,
          a = /\biOS-universal(?:.+)Mac\b/i,
          l = /\bAndroid(?:.+)Mobile\b/i,
          A = /Android/i,
          s = /(?:SD4930UR|\bSilk(?:.+)Mobile\b)/i,
          c = /Silk/i,
          p = /Windows Phone/i,
          h = /\bWindows(?:.+)ARM\b/i,
          u = /BlackBerry/i,
          d = /BB10/i,
          f = /Opera Mini/i,
          g = /\b(CriOS|Chrome)(?:.+)Mobile/i,
          m = /Mobile(?:.+)Firefox\b/i,
          C = function(t) {
            return void 0 !== t && "MacIntel" === t.platform && "number" == typeof t.maxTouchPoints && t.maxTouchPoints > 1 && "undefined" == typeof MSStream
          };

        function B(t) {
          var e = {
            userAgent: "",
            platform: "",
            maxTouchPoints: 0
          };
          t || "undefined" == typeof navigator ? "string" == typeof t ? e.userAgent = t : t && t.userAgent && (e = {
            userAgent: t.userAgent,
            platform: t.platform,
            maxTouchPoints: t.maxTouchPoints || 0
          }) : e = {
            userAgent: navigator.userAgent,
            platform: navigator.platform,
            maxTouchPoints: navigator.maxTouchPoints || 0
          };
          var n = e.userAgent,
            B = n.split("[FBAN");
          void 0 !== B[1] && (n = B[0]), void 0 !== (B = n.split("Twitter"))[1] && (n = B[0]);
          var v = function(t) {
              return function(e) {
                return e.test(t)
              }
            }(n),
            w = {
              apple: {
                phone: v(r) && !v(p),
                ipod: v(o),
                tablet: !v(r) && (v(i) || C(e)) && !v(p),
                universal: v(a),
                device: (v(r) || v(o) || v(i) || v(a) || C(e)) && !v(p)
              },
              amazon: {
                phone: v(s),
                tablet: !v(s) && v(c),
                device: v(s) || v(c)
              },
              android: {
                phone: !v(p) && v(s) || !v(p) && v(l),
                tablet: !v(p) && !v(s) && !v(l) && (v(c) || v(A)),
                device: !v(p) && (v(s) || v(c) || v(l) || v(A)) || v(/\bokhttp\b/i)
              },
              windows: {
                phone: v(p),
                tablet: v(h),
                device: v(p) || v(h)
              },
              other: {
                blackberry: v(u),
                blackberry10: v(d),
                opera: v(f),
                firefox: v(m),
                chrome: v(g),
                device: v(u) || v(d) || v(f) || v(m) || v(g)
              },
              any: !1,
              phone: !1,
              tablet: !1
            };
          return w.any = w.apple.device || w.android.device || w.windows.device || w.other.device, w.phone = w.apple.phone || w.android.phone || w.windows.phone, w.tablet = w.apple.tablet || w.android.tablet || w.windows.tablet, w
        }
      },
      757: function(t, e, n) {
        "use strict";
        n.r(e);
        var r = n(379),
          o = n.n(r),
          i = n(737),
          a = {
            insert: "head",
            singleton: !1
          };
        o()(i.Z, a);
        e.default = i.Z.locals || {}
      },
      996: function(t, e, n) {
        "use strict";
        n.r(e);
        var r = n(379),
          o = n.n(r),
          i = n(223),
          a = {
            insert: "head",
            singleton: !1
          };
        o()(i.Z, a);
        e.default = i.Z.locals || {}
      },
      735: function(t, e, n) {
        "use strict";
        n.r(e);
        var r = n(379),
          o = n.n(r),
          i = n(170),
          a = {
            insert: "head",
            singleton: !1
          };
        o()(i.Z, a);
        e.default = i.Z.locals || {}
      },
      379: function(t, e, n) {
        "use strict";
        var r, o = function() {
            return void 0 === r && (r = Boolean(window && document && document.all && !window.atob)), r
          },
          i = function() {
            var t = {};
            return function(e) {
              if (void 0 === t[e]) {
                var n = document.querySelector(e);
                if (window.HTMLIFrameElement && n instanceof window.HTMLIFrameElement) try {
                  n = n.contentDocument.head
                } catch (t) {
                  n = null
                }
                t[e] = n
              }
              return t[e]
            }
          }(),
          a = [];

        function l(t) {
          for (var e = -1, n = 0; n < a.length; n++)
            if (a[n].identifier === t) {
              e = n;
              break
            } return e
        }

        function A(t, e) {
          for (var n = {}, r = [], o = 0; o < t.length; o++) {
            var i = t[o],
              A = e.base ? i[0] + e.base : i[0],
              s = n[A] || 0,
              c = "".concat(A, " ").concat(s);
            n[A] = s + 1;
            var p = l(c),
              h = {
                css: i[1],
                media: i[2],
                sourceMap: i[3]
              }; - 1 !== p ? (a[p].references++, a[p].updater(h)) : a.push({
              identifier: c,
              updater: g(h, e),
              references: 1
            }), r.push(c)
          }
          return r
        }

        function s(t) {
          var e = document.createElement("style"),
            r = t.attributes || {};
          if (void 0 === r.nonce) {
            var o = n.nc;
            o && (r.nonce = o)
          }
          if (Object.keys(r).forEach((function(t) {
              e.setAttribute(t, r[t])
            })), "function" == typeof t.insert) t.insert(e);
          else {
            var a = i(t.insert || "head");
            if (!a) throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
            a.appendChild(e)
          }
          return e
        }
        var c, p = (c = [], function(t, e) {
          return c[t] = e, c.filter(Boolean).join("\n")
        });

        function h(t, e, n, r) {
          var o = n ? "" : r.media ? "@media ".concat(r.media, " {").concat(r.css, "}") : r.css;
          if (t.styleSheet) t.styleSheet.cssText = p(e, o);
          else {
            var i = document.createTextNode(o),
              a = t.childNodes;
            a[e] && t.removeChild(a[e]), a.length ? t.insertBefore(i, a[e]) : t.appendChild(i)
          }
        }

        function u(t, e, n) {
          var r = n.css,
            o = n.media,
            i = n.sourceMap;
          if (o ? t.setAttribute("media", o) : t.removeAttribute("media"), i && "undefined" != typeof btoa && (r += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i)))), " */")), t.styleSheet) t.styleSheet.cssText = r;
          else {
            for (; t.firstChild;) t.removeChild(t.firstChild);
            t.appendChild(document.createTextNode(r))
          }
        }
        var d = null,
          f = 0;

        function g(t, e) {
          var n, r, o;
          if (e.singleton) {
            var i = f++;
            n = d || (d = s(e)), r = h.bind(null, n, i, !1), o = h.bind(null, n, i, !0)
          } else n = s(e), r = u.bind(null, n, e), o = function() {
            ! function(t) {
              if (null === t.parentNode) return !1;
              t.parentNode.removeChild(t)
            }(n)
          };
          return r(t),
            function(e) {
              if (e) {
                if (e.css === t.css && e.media === t.media && e.sourceMap === t.sourceMap) return;
                r(t = e)
              } else o()
            }
        }
        t.exports = function(t, e) {
          (e = e || {}).singleton || "boolean" == typeof e.singleton || (e.singleton = o());
          var n = A(t = t || [], e);
          return function(t) {
            if (t = t || [], "[object Array]" === Object.prototype.toString.call(t)) {
              for (var r = 0; r < n.length; r++) {
                var o = l(n[r]);
                a[o].references--
              }
              for (var i = A(t, e), s = 0; s < n.length; s++) {
                var c = l(n[s]);
                0 === a[c].references && (a[c].updater(), a.splice(c, 1))
              }
              n = i
            }
          }
        }
      },
      122: function(t, e) {
        "use strict";
        e.Z = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAiIGhlaWdodD0iMTAwIj48ZyBmaWxsPSIjNDY0NjQ2Ij48cGF0aCBkPSJNMCAwaDUwdjUwSDB6TTUwIDUwaDUwdjUwSDUweiIvPjwvZz48L3N2Zz4="
      },
      589: function(t, e) {
        "use strict";
        e.Z = "data:font/ttf;base64,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AOwAAwABBAkACgBWAQQAAwABBAkACwAmAVpwdHJvaWNvbmZvbnRSZWd1bGFycHRyb2ljb25mb250cHRyb2ljb25mb250VmVyc2lvbiAxLjBwdHJvaWNvbmZvbnRHZW5lcmF0ZWQgYnkgc3ZnMnR0ZiBmcm9tIEZvbnRlbGxvIHByb2plY3QuaHR0cDovL2ZvbnRlbGxvLmNvbQBwAHQAcgBvAGkAYwBvAG4AZgBvAG4AdABSAGUAZwB1AGwAYQByAHAAdAByAG8AaQBjAG8AbgBmAG8AbgB0AHAAdAByAG8AaQBjAG8AbgBmAG8AbgB0AFYAZQByAHMAaQBvAG4AIAAxAC4AMABwAHQAcgBvAGkAYwBvAG4AZgBvAG4AdABHAGUAbgBlAHIAYQB0AGUAZAAgAGIAeQAgAHMAdgBnADIAdAB0AGYAIABmAHIAbwBtACAARgBvAG4AdABlAGwAbABvACAAcAByAG8AagBlAGMAdAAuAGgAdAB0AHAAOgAvAC8AZgBvAG4AdABlAGwAbABvAC4AYwBvAG0AAAACAAAAAAAAAAYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD4BAgEDAQQBBQEGAQcBCAEJAQoBCwEMAQ0BDgEPARABEQESARMBFAEVARYBFwEYARkBGgEbARwBHQEeAR8BIAEhASIBIwEkASUBJgEnASgBKQEqASsBLAEtAS4BLwEwATEBMgEzATQBNQE2ATcBOAE5AToBOwE8AT0BPgE/AAVhcHBseQVhcnJvdwVicnVzaAZidWNrZXQFY2xlYXIFY2xvc2UEY3JvcAdlbGxpcHNlBmVyYXNlcgRsaW5lBmxpbmtlZAdsb2FkaW5nBm1pcnJvcgRvcGVuCnBhaW50ZXJybzARcGFzdGVfZXh0ZW5kX2Rvd24RcGFzdGVfZXh0ZW5kX2xlZnQScGFzdGVfZXh0ZW5kX3JpZ2h0EHBhc3RlX2V4dGVuZF90b3AJcGFzdGVfZml0CnBhc3RlX292ZXIHcGlwZXR0ZQhwaXhlbGl6ZQRyZWN0BHJlZG8GcmVzaXplBnJvdGF0ZQRzYXZlBnNlbGVjdAhzZXR0aW5ncwR0ZXh0BHVuZG8IdW5saW5rZWQGem9vbWluB3pvb21vdXQBYQFwAWwBeQFyAW8BdwFiAXUBcwFoAWMBawFlAXQBaQFuAWQBZwFtATABXwF4AWYBdgF6AAAAAA=="
      },
      141: function(t, e) {
        "use strict";
        e.Z = "data:font/woff;base64,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"
      }
    },
    e = {};

  function n(r) {
    if (e[r]) return e[r].exports;
    var o = e[r] = {
      id: r,
      exports: {}
    };
    return t[r].call(o.exports, o, o.exports, n), o.exports
  }
  return n.n = function(t) {
    var e = t && t.__esModule ? function() {
      return t.default
    } : function() {
      return t
    };
    return n.d(e, {
      a: e
    }), e
  }, n.d = function(t, e) {
    for (var r in e) n.o(e, r) && !n.o(t, r) && Object.defineProperty(t, r, {
      enumerable: !0,
      get: e[r]
    })
  }, n.o = function(t, e) {
    return Object.prototype.hasOwnProperty.call(t, e)
  }, n.r = function(t) {
    "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
      value: "Module"
    }), Object.defineProperty(t, "__esModule", {
      value: !0
    })
  }, n(165)
}().default;
//# sourceMappingURL=painterro-1.2.78.min.js.map
