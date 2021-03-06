RMapConstant = {
    JsServer: "https://mapdb.365ditu.cn/src/",
    MapRoot: new
    function() {
        var d = ["https://mapdb1.365ditu.cn/rt/mapdb/", "https://mapdb2.365ditu.cn/rt/mapdb/"],
        g = function(d) {
            function c(f, a) {
                for (var b = 0; a;) b = 2 * b + f % 2,
                f /= 2,
                f -= f % 1,
                a--;
                return b
            }
            d = String(d);
            var e = 4294967295,
            b = [],
            a,
            f,
            n;
            for (a = 255; 0 <= a; a--) {
                n = c(a, 32);
                for (f = 0; 8 > f; f++) n = (2 * n ^ 79764919 * ((n >>> 31) % 2)) >>> 0;
                b[a] = c(n, 32)
            }
            for (a = 0; a < d.length; a++) {
                n = d.charCodeAt(a);
                if (255 < n) throw new RangeError;
                f = e % 256 ^ n;
                e = (e / 256 ^ b[f]) >>> 0
            }
            return (e ^ 4294967295) >>> 0
        } (window.navigator.userAgent || "null") % d.length,
        e = g;
        this.setenv = function() {
            e = g;
            for (var h = 0; h < arguments.length; h++) e += parseInt(arguments[h]) % d.length;
            e %= d.length
        };
        this.toString = function() {
            return d[e]
        }
    },
    MapMinLevel: 2,
    MapMaxLevel: 13,
    Directorys: "0 1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16".split(" "),
    ScaleFactors: [30, 15, 10, 4, 2, 1, 0.4, 0.2, 0.1, 0.04, 0.02, 0.01, 0.004, 0.002, 0.001, 4E-4, 2E-4],
    GridFactors: [10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 40, 40, 40, 40, 40, 40, 40],
    MapPicWidth: 256,
    MapPicHeight: 256,
    PicType: ".png",
    MoveOffset: 20,
    AdjustFactor: 1E5,
    Copyright: "<div style='float:left; font-family:\u5fae\u8f6f\u96c5\u9ed1,\u5b8b\u4f53,arial,sans-serif; font-size:11px; text-align:center;'>Data \u00a9 <a href='http://www.365ditu.com/' target='_blank'>\u9053\u9053\u901a</a></div>"
};
RMapType = {
    Typical: "typical",
    Airscape: "airscape",
    Satellite: "satellite",
    None: ""
};
RBase = {
    $: function(d) {
        return document.getElementById(d)
    },
    setIe6BackgroundPng: function(d) {
        var g = d.get().style;
        d.get().style.filter = "progid:DXImageTransform.Microsoft.AlphaImageLoader(sizingMethod='crop'," + g.background.replace("url(", "src=").replace(")", "") + ")";
        d.get().style.background = "none"
    },
    setIe6ImgPng: function(d) {
        var g = navigator.appVersion.split("MSIE"),
        g = parseFloat(g[1]);
        5.5 <= g && (7 > g && document.body.filters) && (d.outerHTML = "<span " + (d.id ? "id='" + d.id + "' ": "") + (d.className ? "class='" + d.className + "' ": "") + (d.title ? "title='" + d.title + "' ": "title='" + d.alt + "' ") + ' style="width:' + d.width + "px; height:" + d.height + "px;" + ("display:inline-block;" + d.style.cssText) + ";filter:progid:DXImageTransform.Microsoft.AlphaImageLoader(src='" + d.src + "', sizingMethod='scale');\"></span>")
    },
    changeToRGBA: function(d, g) {
        var e = "";
        d && (d = d.replace("#", ""), 6 == d.length && (e = "rgba(" + (parseInt(d.substr(0, 2), 16) + ","), e += parseInt(d.substr(2, 2), 16) + ",", e += parseInt(d.substr(4, 2), 16) + ",", e = e + g + ")"));
        return e
    },
    stopPropagation: function(d) {
        d && d.stopPropagation ? d.stopPropagation() : window.event.cancelBubble = !0
    },
    getMouseEvent: function(d) {
        return d || window.event
    },
    getOffset: function(d) {
        d = d || window.event;
        var g = d.target;
        if (d.offsetY || !g) return d;
        void 0 == g.offsetLeft && (g = g.parentNode);
        for (var e = 0,
        h = 0; g;) e += g.offsetLeft,
        h += g.offsetTop,
        g = g.offsetParent;
        g = window.pageYOffset + d.clientY;
        d.offsetX = window.pageXOffset + d.clientX - e;
        d.offsetY = g - h;
        return d
    },
    getOffsetOnMapDiv: function(d) {
        d = d || window.event;
        var g = !1,
        e = d.target;
        e ? void 0 == e.offsetLeft && (e = e.parentNode) : e = d.srcElement;
        for (var h = 0,
        c = 0; e;) e.MapName && (g = !0),
        g && (h += e.offsetLeft, c += e.offsetTop),
        e = e.offsetParent;
        g = window.pageYOffset ? window.pageYOffset + d.clientY: d.clientY;
        d.offsetMapLeft = (window.pageXOffset ? window.pageXOffset + d.clientX: d.clientX) - h;
        d.offsetMapTop = g - c;
        return d
    },
    getMaxCoordinatesBounds: function(d) {
        var g = null;
        if (null != d && 0 < d.length) for (var e = 0; e < d.length; e++) 0 < d[e].Cx && 0 < d[e].Cy && (d[e].Cx = parseFloat(d[e].Cx), d[e].Cy = parseFloat(d[e].Cy), g ? (g.MinCoordinates.Cx > d[e].Cx && (g.MinCoordinates.Cx = d[e].Cx), g.MinCoordinates.Cy > d[e].Cy && (g.MinCoordinates.Cy = d[e].Cy), g.MaxCoordinates.Cx < d[e].Cx && (g.MaxCoordinates.Cx = d[e].Cx), g.MaxCoordinates.Cy < d[e].Cy && (g.MaxCoordinates.Cy = d[e].Cy)) : g = new RBounds(new RCoordinates(d[e].Cx, d[e].Cy), new RCoordinates(d[e].Cx, d[e].Cy)));
        return g
    },
    getMaxCoordinates: function(d, g) {
        var e = null;
        if (null != d && 0 < d.length) for (var h = 0; h < d.length; h++) 0 < d[h].Cx && 0 < d[h].Cy && (d[h].Cx = parseFloat(d[h].Cx), d[h].Cy = parseFloat(d[h].Cy), e ? (Math.abs(d[h].Cx - g.Cx) > Math.abs(e.Cx - g.Cx) && (e.Cx = d[h].Cx), Math.abs(d[h].Cy - g.Cy) > Math.abs(e.Lng - g.Cy) && (e.Cy = d[h].Cy)) : e = new RCoordinates(d[h].Cx, d[h].Cy));
        return e
    },
    _browser_ie6: -1 < navigator.appVersion.indexOf("MSIE 6.0;") && document.attachEvent
};
RCursor = {
    MouseNormalCursor: "url(" + RMapConstant.JsServer + "image/openhand.cur),default",
    MouseDownCursor: "url(" + RMapConstant.JsServer + "image/closedhand.cur),default",
    MouseMoveCursor: "url(" + RMapConstant.JsServer + "image/closedhand.cur),default",
    MouseUpCursor: "url(" + RMapConstant.JsServer + "image/openhand.cur),default",
    setMouseDefault: function() {
        RCursor.MouseNormalCursor = "url(" + RMapConstant.JsServer + "image/openhand.cur),default";
        RCursor.MouseDownCursor = "url(" + RMapConstant.JsServer + "image/closedhand.cur),default";
        RCursor.MouseMoveCursor = "url(" + RMapConstant.JsServer + "image/closedhand.cur),default";
        RCursor.MouseUpCursor = "url(" + RMapConstant.JsServer + "image/openhand.cur),default"
    },
    setMousePointer: function() {
        RCursor.MouseNormalCursor = "pointer";
        RCursor.MouseDownCursor = "pointer";
        RCursor.MouseMoveCursor = "pointer";
        RCursor.MouseUpCursor = "pointer"
    },
    setMouseTool: function() {
        RCursor.MouseNormalCursor = "crosshair";
        RCursor.MouseDownCursor = "crosshair";
        RCursor.MouseMoveCursor = "crosshair";
        RCursor.MouseUpCursor = "crosshair"
    }
};
RCompute = {
    EarthRadius: 6378137,
    getLineDistance: function(d) {
        for (var g = 0,
        e = 0; e < d.length - 1; e++) g += RCompute.distanceBetween(d[e], d[e + 1]);
        return g
    },
    distanceBetween: function(d, g) {
        return RCompute.EarthRadius * Math.acos(Math.cos(d.Cx * Math.PI / 180 - g.Cx * Math.PI / 180) * Math.cos(d.Cy * Math.PI / 180) * Math.cos(g.Cy * Math.PI / 180) + Math.sin(d.Cy * Math.PI / 180) * Math.sin(g.Cy * Math.PI / 180))
    },
    getPolygonArea: function(d) {
        for (var g = 0,
        e = 0; e < d.length; e++) var h = (e + 1) % d.length,
        c = d[e].Cx * Math.PI / 180 * RCompute.EarthRadius,
        k = Math.sin(d[e].Cy * Math.PI / 180) * RCompute.EarthRadius,
        b = d[h].Cx * Math.PI / 180 * RCompute.EarthRadius,
        h = Math.sin(d[h].Cy * Math.PI / 180) * RCompute.EarthRadius,
        g = g + (c * h - k * b);
        return g = 0.5 * Math.abs(g)
    },
    degreeFromDistance: function(d) {
        return Math.round(1E5 * (d / METERS_PER_DEGREE)) / 1E5
    }
};
RLevelCenter = function(d, g, e) {
    this.Cx = d;
    this.Cy = g;
    this.Level = e
};
RPoint = function(d, g) {
    this.X = d;
    this.Y = g
};
RCoordinates = function(d, g) {
    this.Cx = d;
    this.Cy = g
};
RBounds = function(d, g) {
    this.MinCoordinates = d;
    this.MaxCoordinates = g
};
RDiv = function(d, g, e, h, c) {
    this.div = document.createElement("Div");
    this.div.unselectable = "on";
    this.div.style.webkitUserSelect = "none";
    this.div.style.MozUserSelect = "none";
    this.div.style.position = "absolute";
    this.div.style.visibility = "inherit";
    if (d || 0 == d) this.div.style.left = d + "px";
    if (g || 0 == g) this.div.style.top = g + "px";
    if (c || 0 == c) this.div.style.zIndex = c;
    if (e || 0 == e) this.div.style.width = e + "px";
    if (h || 0 == h) this.div.style.height = h + "px";
    this.hide = function() {
        this.div.style.display = "none"
    };
    this.show = function() {
        this.div.style.display = "block"
    };
    this.get = function() {
        return this.div
    };
    this.set = function(c, b, a, f, n) {
        if (c || 0 == c) this.div.style.left = c + "px";
        if (b || 0 == b) this.div.style.top = b + "px";
        if (a || 0 == a) this.div.style.width = a + "px";
        if (f || 0 == f) this.div.style.height = f + "px";
        if (n || 0 == n) this.div.style.zIndex = n
    }
};
xxxxx_RImage = function(d, g, e, h, c, k) {
    this.img = new Image;
    this.img.style.position = "absolute";
    this.img.style.visibility = "inherit";
    this.img.unselectable = "on";
    this.img.style.webkitUserSelect = "none";
    this.img.style.MozUserSelect = "none";
    if (d || 0 == d) this.img.style.left = d + "px";
    if (g || 0 == g) this.img.style.top = g + "px";
    if (c || 0 == c) this.img.style.zIndex = c;
    if (e || 0 == e) this.img.style.width = e + "px";
    if (h || 0 == h) this.img.style.height = h + "px";
    k && (this.img.src = k);
    this.hide = function() {
        this.img.style.display = "none"
    };
    this.show = function() {
        this.img.style.display = "block"
    };
    this.get = function() {
        return this.img
    };
    this.set = function(b, a, f, n, c, d) {
        if (b || 0 == b) this.img.style.left = b + "px";
        if (a || 0 == a) this.img.style.top = a + "px";
        if (c || 0 == c) this.img.style.zIndex = c;
        if (f || 0 == f) this.img.style.width = f + "px";
        if (n || 0 == n) this.img.style.height = n + "px";
        d && (this.img.src = d)
    };
    this.setErrHandler = function(b) {
        this.img.onerror = b
    };
    this.setImgSrc = function(b) {
        this.img.src = b
    }
};
createRImage = function(d, g, e, h, c, k) {
    var b = new Image;
    b.style.position = "absolute";
    b.style.visibility = "inherit";
    b.unselectable = "on";
    b.style.webkitUserSelect = "none";
    b.style.MozUserSelect = "none";
    if (d || 0 == d) b.style.left = d + "px";
    if (g || 0 == g) b.style.top = g + "px";
    if (c || 0 == c) b.style.zIndex = c;
    if (e || 0 == e) b.style.width = e + "px";
    if (h || 0 == h) b.style.height = h + "px";
    k && (b.src = k);
    return b
};
var RTileLayer = function(d, g, e, h, c, k, b, a) {
    this.yIndex = this.xIndex = this.ySpan = this.xSpan = this.centerY = this.centerX = this.yAbsolute = this.xAbsolute = 0;
    this.picArr;
    this.Top = this.Left = 0;
    this.MapRoot = b;
    this.MapType = a;
    this.Cx = d;
    this.Cy = g;
    this.Level = e;
    this.MapWidth = h;
    this.MapHeight = c;
    this.Div = new RDiv(0, 0, null, null, k);
    this.directory = RMapConstant.Directorys[this.Level];
    this.scalefactor = RMapConstant.ScaleFactors[this.Level];
    this.gridfactor = RMapConstant.GridFactors[this.Level];
    this.setLeftTop = function(f, a) {
        this.Left = f;
        this.Top = a;
        this.Div.set(this.Left, this.Top, null, null, null)
    };
    this.show = function() {
        this.Div.show();
        this.initVariable();
        this.setLeftTop(0, 0);
        var f = 0;
        this.clear();
        for (this.picArr = Array(2 * this.xSpan + 1); Math.abs(f) <= this.xSpan;) {
            var a = Math.floor((this.xAbsolute + f) / this.gridfactor),
            b = parseInt(this.xAbsolute + f - a * this.gridfactor);
            0 > b && (b = this.gridfactor + b);
            var c = 0,
            d = f + this.xSpan;
            for (this.picArr[d] = Array(2 * this.ySpan + 1); Math.abs(c) <= this.ySpan;) {
                var e = [this.MapRoot, this.MapType ? this.MapType + "/": "", this.directory, "/"],
                g = Math.floor((this.yAbsolute + c) / this.gridfactor);
                0 > g && g++;
                var h = parseInt(this.yAbsolute + c - g * this.gridfactor);
                0 > h && (h = this.gridfactor + h);
                this.MapRoot.setenv && this.MapRoot.setenv(a, g, b, h);
                var k = f * RMapConstant.MapPicWidth + this.centerX,
                p = -1 * c * RMapConstant.MapPicHeight + this.centerY,
                q = this.ySpan - c;
                this.picArr[d][q] = new RImageLoader(k, p, e.concat(a, "/", g, "/", b, "_", h, RMapConstant.PicType).join(""), f, c);
                this.picArr[d][q].XGrid = f;
                this.picArr[d][q].YGrid = c;
                this.picArr[d][q].getCore().Left = k;
                this.picArr[d][q].getCore().Top = p;
                this.Div.get().appendChild(this.picArr[d][q].getCore());
                c == this.ySpan ? c = -1 : 0 <= c ? c++:c--
            }
            f == this.xSpan ? f = -1 : 0 <= f ? f++:f--
        }
    };
    this.hide = function() {
        this.Div.hide()
    };
    this.loadNewPic = function() {
        var f = this.Left + this.picArr[this.xIndex][0].Left + RMapConstant.MapPicWidth,
        a = this.Left + this.picArr[(this.xIndex + 1) % this.picArr.length][0].Left;
        a >= -1 * RMapConstant.MoveOffset ? this.loadLeftPic(a) : f <= this.MapWidth + RMapConstant.MoveOffset && this.loadRightPic(f);
        f = this.Top + this.picArr[0][this.yIndex].Top + RMapConstant.MapPicHeight;
        a = this.Top + this.picArr[0][(this.yIndex + 1) % this.picArr[0].length].Top;
        a >= -1 * RMapConstant.MoveOffset ? this.loadTopPic(a) : f <= this.MapHeight + RMapConstant.MoveOffset && this.loadBottomPic(f)
    };
    this.clear = function() {
        if (null != this.picArr) {
            for (var f = 0; f < this.picArr.length; f++) {
                for (var a = 0; a < this.picArr[f].length; a++) try {
                    this.Div.get().removeChild(this.picArr[f][a].getCore()),
                    this.picArr[f][a] = null
                } catch(b) {}
                this.picArr[f] = null
            }
            this.picArr = null
        }
    };
    this.initVariable = function() {
        this.xAbsolute = Math.floor(this.Cx / this.scalefactor);
        this.yAbsolute = Math.floor(this.Cy / this.scalefactor);
        this.centerX = Math.round(this.MapWidth / 2 - this.Cx * RMapConstant.AdjustFactor % (this.scalefactor * RMapConstant.AdjustFactor) * RMapConstant.MapPicWidth / (this.scalefactor * RMapConstant.AdjustFactor));
        this.centerY = Math.round(this.MapHeight / 2 - RMapConstant.MapPicHeight + this.Cy * RMapConstant.AdjustFactor % (this.scalefactor * RMapConstant.AdjustFactor) * RMapConstant.MapPicHeight / (this.scalefactor * RMapConstant.AdjustFactor));
        this.xSpan = Math.ceil(this.MapWidth / RMapConstant.MapPicWidth / 2);
        this.ySpan = Math.ceil(this.MapHeight / RMapConstant.MapPicHeight / 2);
        this.xIndex = 2 * this.xSpan;
        this.yIndex = 2 * this.ySpan
    };
    this.loadBottomPic = function(f) {
        f = Math.ceil((this.MapHeight + RMapConstant.MoveOffset - f) / RMapConstant.MapPicHeight);
        for (var a = 0; a < f; a++) {
            for (var b = (this.yIndex + 1) % this.picArr[0].length, c = this.picArr[0][this.yIndex].YGrid - 1, d = Math.floor((this.yAbsolute + c) / this.gridfactor), e = parseInt(this.yAbsolute + c - d * this.gridfactor), g = 0; g < this.picArr.length; g++) {
                var h = [this.MapRoot, this.MapType ? this.MapType + "/": "", this.directory, "/"],
                k = this.picArr[g][0].XGrid,
                p = Math.floor((this.xAbsolute + k) / this.gridfactor),
                k = parseInt(this.xAbsolute + k - p * this.gridfactor);
                this.MapRoot.setenv && this.MapRoot.setenv(p, d, k, e);
                this.picArr[g][b].set(null, this.picArr[0][this.yIndex].Top + RMapConstant.MapPicHeight, h.concat(p, "/", d, "/", k, "_" + e, RMapConstant.PicType).join(""), null, c);
                this.picArr[g][b].getCore().Top = this.picArr[0][this.yIndex].Top + RMapConstant.MapPicHeight
            }
            this.yIndex = (this.yIndex + 1) % this.picArr[0].length
        }
    };
    this.loadTopPic = function(f) {
        f = Math.ceil((f + RMapConstant.MoveOffset) / RMapConstant.MapPicHeight);
        for (var a = 0; a < f; a++) {
            for (var b = (this.yIndex + 1) % this.picArr[0].length, c = this.picArr[0][b].YGrid + 1, d = Math.floor((this.yAbsolute + c) / this.gridfactor), e = parseInt(this.yAbsolute + c - d * this.gridfactor), g = 0; g < this.picArr.length; g++) {
                var h = [this.MapRoot, this.MapType ? this.MapType + "/": "", this.directory, "/"],
                k = this.picArr[g][0].XGrid,
                p = Math.floor((this.xAbsolute + k) / this.gridfactor),
                k = parseInt(this.xAbsolute + k - p * this.gridfactor);
                this.MapRoot.setenv && this.MapRoot.setenv(p, d, k, e);
                this.picArr[g][this.yIndex].set(null, this.picArr[0][b].Top - RMapConstant.MapPicHeight, h.concat(p, "/", d, "/", k, "_", e, RMapConstant.PicType).join(""), null, c);
                this.picArr[g][this.yIndex].getCore().Top = this.picArr[0][b].Top - RMapConstant.MapPicHeight
            }
            this.yIndex = (this.yIndex - 1 + this.picArr[0].length) % this.picArr[0].length
        }
    };
    this.loadLeftPic = function(f) {
        f = Math.ceil((f + RMapConstant.MoveOffset) / RMapConstant.MapPicWidth);
        for (var a = 0; a < f; a++) {
            for (var b = (this.xIndex + 1) % this.picArr.length, c = this.picArr[b][0].XGrid - 1, d = Math.floor((this.xAbsolute + c) / this.gridfactor), g = parseInt(this.xAbsolute + c - d * this.gridfactor), e = 0; e < this.picArr[this.xIndex].length; e++) {
                var h = [this.MapRoot, this.MapType ? this.MapType + "/": "", this.directory, "/"],
                k = this.picArr[this.xIndex][e].YGrid,
                p = Math.floor((this.yAbsolute + k) / this.gridfactor),
                k = parseInt(this.yAbsolute + k - p * this.gridfactor);
                this.MapRoot.setenv && this.MapRoot.setenv(d, p, g, k);
                this.picArr[this.xIndex][e].set(this.picArr[b][0].Left - RMapConstant.MapPicWidth, null, h.concat(d, "/", p, "/", g, "_", k, RMapConstant.PicType).join(""), c, null);
                this.picArr[this.xIndex][e].getCore().Left = this.picArr[b][0].Left - RMapConstant.MapPicWidth
            }
            this.xIndex = (this.xIndex - 1 + this.picArr.length) % this.picArr.length
        }
    };
    this.loadRightPic = function(f) {
        f = Math.ceil((this.MapWidth + RMapConstant.MoveOffset - f) / RMapConstant.MapPicWidth);
        for (var a = 0; a < f; a++) {
            for (var b = this.picArr[this.xIndex][0].XGrid + 1, c = Math.floor((this.xAbsolute + b) / this.gridfactor), d = parseInt(this.xAbsolute + b - c * this.gridfactor), e = 0; e < this.picArr[this.xIndex].length; e++) {
                var g = [this.MapRoot, this.MapType ? this.MapType + "/": "", this.directory, "/"],
                h = this.picArr[this.xIndex][e].YGrid,
                k = Math.floor((this.yAbsolute + h) / this.gridfactor);
                0 > k && k++;
                h = parseInt(this.yAbsolute + h - k * this.gridfactor);
                this.MapRoot.setenv && this.MapRoot.setenv(c, k, d, h);
                var p = (this.xIndex + 1) % this.picArr.length;
                this.picArr[p][e].set(this.picArr[this.xIndex][0].Left + RMapConstant.MapPicWidth, null, g.concat(c, "/", k, "/", d, "_", h, RMapConstant.PicType).join(""), b, null);
                this.picArr[p][e].getCore().Left = this.picArr[this.xIndex][0].Left + RMapConstant.MapPicWidth
            }
            this.xIndex = (this.xIndex + 1) % this.picArr.length
        }
    };
    this.setZoom = function(a) {
        for (var b = 0; b < this.Div.get().childNodes.length; b++) {
            this.Div.get().childNodes[b].style.width = Math.ceil(RMapConstant.MapPicWidth * a) + "px";
            this.Div.get().childNodes[b].style.height = Math.ceil(RMapConstant.MapPicHeight * a) + "px";
            var c = this.MapWidth / 2 - this.Left - (this.MapWidth / 2 - this.Left - this.Div.get().childNodes[b].Left) * a,
            d = this.MapHeight / 2 - this.Top - (this.MapHeight / 2 - this.Top - this.Div.get().childNodes[b].Top) * a;
            this.Div.get().childNodes[b].style.left = Math.round(c) + "px";
            this.Div.get().childNodes[b].style.top = Math.round(d) + "px"
        }
    }
},
RImageLoader = function(d, g, e, h, c) {
    var k = this,
    b = 0;
    this.Left = d;
    this.Top = g;
    this.XGrid = h;
    this.YGrid = c;
    var a = document.createElement("div");
    a.style.position = "absolute";
    a.style.visibility = "inherit";
    a.unselectable = "on";
    a.style.webkitUserSelect = "none";
    a.style.MozUserSelect = "none";
    a.style.left = this.Left + "px";
    a.style.top = this.Top + "px";
    a.style.width = RMapConstant.MapPicWidth + "px";
    a.style.height = RMapConstant.MapPicHeight + "px";
    this.Tile = a;
    var f = new Image;
    f.style.display = "block";
    f.style.position = "absolute";
    f.style.width = "100%";
    f.style.height = "100%";
    f.style.visibility = "inherit";
    f.src = RMapConstant.JsServer + "image/none.gif";
    this.Tile.appendChild(f);
    f.onerror = function(a) {
        f.src = RMapConstant.JsServer + "image/none.gif";
        2 <= ++b ? b = 0 : f.src = k.PicSrc
    };
    f.style.transition = "opacity .2s linear";
    f.src = e;
    this.set = function(b, c, d, e, g) {
        if (b || 0 == b) this.Left = b,
        a.style.left = this.Left + "px";
        if (c || 0 == c) this.Top = c,
        a.style.top = this.Top + "px";
        if (e || 0 == e) this.XGrid = e;
        if (g || 0 == g) this.YGrid = g;
        d && ( - 1 < d.indexOf("/-") && (d = RMapConstant.JsServer + "image/none.gif"), RBase._browser_ie6 && f.style.filter ? (this.PicSrc = d, f.style.filter = "progid:DXImageTransform.Microsoft.AlphaImageLoader(src='" + this.PicSrc + "', sizingMethod='scale')") : (f.src = RMapConstant.JsServer + "image/none.gif", this.PicSrc = d, f.src = this.PicSrc))
    };
    this.getCore = function() {
        return a
    }
};
var RBaseGraphics = function(d, g, e, h, c, k, b, a, f) {
    var n = this;
    this.CoordinatesArr = d;
    this.LineWidth = g;
    this.LineColor = e;
    this.LineOpacity = h;
    this.FillColor = c;
    this.FillOpacity = k;
    b && (this.borderWidth = b);
    a && (this.borderColor = a);
    f && (this.borderOpacity = f);
    this.getMBR = function() {
        if (!d || !d.length) return {
            minx: 0,
            miny: 0,
            maxx: 0,
            maxy: 0
        };
        for (var a = this.CoordinatesArr[0].Cx, f = this.CoordinatesArr.Cy, b = a, c = f, n = 1; n < this.CoordinatesArr.length; n++) a = Math.min(a, this.CoordinatesArr[n].Cx),
        f = Math.min(f, this.CoordinatesArr.Cy),
        b = Math.max(b, this.CoordinatesArr.Cx),
        c = Math.max(c, this.CoordinatesArr.Cy);
        return {
            minx: a,
            miny: f,
            maxx: b,
            maxy: c
        }
    };
    this.Top = this.Left = 0;
    this.MBR = this.getMBR();
    this.Graphics = this.Maplet = this.Hook = null;
    this.Div = new RDiv(0, 0, null, null, 0);
    this.Div.get().oncontextmenu = function(a) {
        return ! 1
    };
    this.setMaplet = function(a) {
        this.Maplet = a
    };
    this.get = function() {
        this.Div.get()
    };
    this.show = function() {
        this.Div.get().style.visibility = "visible"
    };
    this.hide = function() {
        this.Div.get().style.visibility = "hidden"
    };
    this.update = function() {
        this.MBR = this.getMBR();
        this.refresh()
    };
    this.draw = function() {};
    this.refresh = function() {};
    this.dispose = function() {
        this.CoordinatesArr = [];
        this.LineWidth = 0;
        this.LineColor = "";
        this.LineOpacity = 1;
        this.FillColor = "";
        this.FillOpacity = 1;
        this.Top = this.Left = 0;
        this.Graphics = this.Maplet = this.Hook = null
    };
    this.runClickEvent = function(a) {
        n.dispatchEvent(RGraphicsEvent.MouseClickEvent)
    };
    this.runMouseOverEvent = function(a) {
        n.dispatchEvent(RGraphicsEvent.MouseOverEvent)
    };
    this.runMouseOutEvent = function(a) {
        n.dispatchEvent(RGraphicsEvent.MouseOutEvent)
    };
    this.runMouseDoubleClickEvent = function(a) {
        n.dispatchEvent(RGraphicsEvent.MouseDoubleClickEvent)
    };
    this.EventArray = [];
    this.EventArray[RGraphicsEvent.MouseClickEvent] = [];
    this.EventArray[RGraphicsEvent.MouseDoubleClickEvent] = [];
    this.EventArray[RGraphicsEvent.MouseOverEvent] = [];
    this.EventArray[RGraphicsEvent.MouseOutEvent] = [];
    this.addEventListener = function(a, f) {
        if (this.EventArray[a]) switch (this.EventArray[a].push(f), a) {
        case RGraphicsEvent.MouseClickEvent:
            this.Graphics.onclick || (this.Graphics.onclick = this.runClickEvent);
            break;
        case RGraphicsEvent.MouseOverEvent:
            this.Graphics.onmouseover || (this.Graphics.onmouseover = this.runMouseOverEvent);
            break;
        case RGraphicsEvent.MouseOutEvent:
            this.Graphics.onmouseout || (this.Graphics.onmouseout = this.runMouseOutEvent);
            break;
        case RGraphicsEvent.MouseDoubleClickEvent:
            this.Graphics.ondblclick || (this.Graphics.ondblclick = this.runMouseDoubleClickEvent)
        }
    };
    this.removeEventListener = function(a, f) {
        if (this.EventArray[a]) {
            for (var b = 0; b < this.EventArray[a].length; b++) this.EventArray[a][b] == f && this.EventArray[a].splice(b, 1);
            if (0 >= this.EventArray[a].length) switch (a) {
            case RGraphicsEvent.MouseClickEvent:
                this.Graphics.onclick = null;
                break;
            case RGraphicsEvent.MouseOverEvent:
                this.Graphics.onmouseover = null;
                break;
            case RGraphicsEvent.MouseOutEvent:
                this.Graphics.onmouseout = null;
                break;
            case RGraphicsEvent.MouseDoubleClickEvent:
                this.Graphics.ondblclick = null
            }
        }
    };
    this.dispatchEvent = function(a) {
        if (this.EventArray[a] && 0 < this.EventArray[a].length) {
            var f = new RGraphicsEvent(a);
            f.Cx = this.Cx;
            f.Cy = this.Cy;
            f.Hook = this.Hook;
            for (var b = 0; b < this.EventArray[a].length; b++) if (this.EventArray[a][b]) this.EventArray[a][b](f)
        }
    }
};
RLine = function(d, g, e, h) {
    RBaseGraphics.call(this, d, g, e, h);
    var c = this;
    this.Graphics = document.createElement("canvas");
    this.Graphics.getContext ? this.Context = this.Graphics.getContext("2d") : (this.Graphics = document.createElement("v:polyline"), this.Graphics.unselectable = "on", this.Graphics.fill = !1, this.Graphics.filled = !1);
    this.Div.get().appendChild(this.Graphics);
    this.update = function(c, b, a, f) {
        c && 0 < c.length && (this.CoordinatesArr = c);
        0 < b && (this.LineWidth = b);
        a && (this.lineColor = LineColor);
        if (f || 0 == f) this.LineOpacity = f;
        this.MBR = this.getMBR();
        this.refresh()
    };
    this.draw = function() {
        if (c.CoordinatesArr && c.CoordinatesArr.length) if (c.Context ? c.Context.clearRect(0, 0, c.Graphics.width, c.Graphics.height) : c.Graphics.points.value = "", c.Context) {
            c.Graphics.style.lineHeight = "10px";
            c.Context.lineWidth = c.LineWidth;
            c.Context.strokeStyle = c.LineColor;
            c.Context.globalAlpha = c.LineOpacity;
            c.Context.lineCap = "round";
            c.Context.lineJoin = "round";
            c.Context.beginPath();
            for (var d = 0; d < c.CoordinatesArr.length; d++) if (c.CoordinatesArr[d]) {
                var b = c.Maplet.toClientPoint(c.CoordinatesArr[d].Cx, c.CoordinatesArr[d].Cy);
                d ? c.Context.lineTo(b.X, b.Y) : c.Context.moveTo(b.X, b.Y)
            }
            c.Context.stroke();
            c.Context.closePath()
        } else {
            for (var a = [], d = 0; d < c.CoordinatesArr.length; d++) c.CoordinatesArr[d] && (b = c.Maplet.toClientPoint(c.CoordinatesArr[d].Cx, c.CoordinatesArr[d].Cy), a.push(b.X + "px," + b.Y + "px"));
            c.Graphics.StrokeColor = c.LineColor;
            c.Graphics.StrokeWeight = c.LineWidth + "px";
            c.Graphics.style.filter = "alpha(opacity=" + 100 * c.LineOpacity + ")";
            c.Graphics.points.value = a.join(" ")
        }
    };
    this.refresh = function() {
        c.Context && (c.Graphics.width = c.Maplet.MapWidth, c.Graphics.height = c.Maplet.MapHeight);
        c.draw()
    }
};
RouteLine = function(d, g, e, h, c, k, b, a) {
    RBaseGraphics.call(this, d, (g + e) / 2, h, c, null, null, k, b, a);
    var f = this;
    this.Graphics = document.createElement("canvas");
    this.Graphics.getContext ? this.Context = this.Graphics.getContext("2d") : (this.Graphics = document.createElement("v:polyline"), this.Graphics.unselectable = "on", this.Graphics.fill = !1, this.Graphics.filled = !1);
    this.Div.get().appendChild(this.Graphics);
    this.update = function(a, f, b, c, d, e, g, h) {
        a && 0 < a.length && (this.CoordinatesArr = a);
        0 < f && (this.LineWidth = (f + b) / 2);
        c && (this.LineColor = c);
        if (d || 0 == d) this.LineOpacity = d;
        0 < e && (this.borderWidth = e);
        g && (this.borderColor = g);
        if (h || 0 == h) this.borderOpacity = h;
        this.MBR = this.getMBR();
        this.refresh()
    };
    this.draw = function() {
        if (f.CoordinatesArr && f.CoordinatesArr.length) {
            f.Context ? f.Context.clearRect(0, 0, f.Graphics.width, f.Graphics.height) : f.Graphics.points.value = "";
            MapUtils.calculatePixDistanceByMi(g + e, f.Maplet.Level);
            var a = MapUtils.calculatePixDistanceByMi(g, f.Maplet.Level),
            b = MapUtils.calculatePixDistanceByMi(e, f.Maplet.Level),
            c = RBase.changeToRGBA(f.LineColor, f.LineOpacity);
            if (f.Context) {
                for (var d = [], h = [], k = 0; k < f.CoordinatesArr.length; k++) if (f.CoordinatesArr[k]) {
                    if (f.CoordinatesArr[k + 1]) var l = f.Maplet.toClientPoint(f.CoordinatesArr[k].Cx, f.CoordinatesArr[k].Cy),
                    m = f.Maplet.toClientPoint(f.CoordinatesArr[k + 1].Cx, f.CoordinatesArr[k + 1].Cy),
                    p = l.X - a * (l.Y - m.Y) / Math.sqrt(Math.pow(m.X - l.X, 2) + Math.pow(m.Y - l.Y, 2)),
                    q = l.Y - a * (m.X - l.X) / Math.sqrt(Math.pow(m.X - l.X, 2) + Math.pow(m.Y - l.Y, 2)),
                    s = l.X + b * (l.Y - m.Y) / Math.sqrt(Math.pow(m.X - l.X, 2) + Math.pow(m.Y - l.Y, 2)),
                    l = l.Y + b * (m.X - l.X) / Math.sqrt(Math.pow(m.X - l.X, 2) + Math.pow(m.Y - l.Y, 2));
                    else l = f.Maplet.toClientPoint(f.CoordinatesArr[k - 1].Cx, f.CoordinatesArr[k - 1].Cy),
                    m = f.Maplet.toClientPoint(f.CoordinatesArr[k].Cx, f.CoordinatesArr[k].Cy),
                    p = m.X - a * (l.Y - m.Y) / Math.sqrt(Math.pow(m.X - l.X, 2) + Math.pow(m.Y - l.Y, 2)),
                    q = m.Y - a * (m.X - l.X) / Math.sqrt(Math.pow(m.X - l.X, 2) + Math.pow(m.Y - l.Y, 2)),
                    s = m.X + b * (l.Y - m.Y) / Math.sqrt(Math.pow(m.X - l.X, 2) + Math.pow(m.Y - l.Y, 2)),
                    l = m.Y + b * (m.X - l.X) / Math.sqrt(Math.pow(m.X - l.X, 2) + Math.pow(m.Y - l.Y, 2));
                    d.push({
                        X: p,
                        Y: q
                    });
                    h.push({
                        X: s,
                        Y: l
                    })
                }
                f.Graphics.style.lineHeight = "10px";
                f.Context.lineCap = "miter";
                f.Context.lineJoin = "miter";
                f.Context.beginPath();
                f.Context.lineWidth = f.borderWidth;
                f.Context.strokeStyle = f.borderColor;
                f.Context.globalAlpha = f.borderOpacity;
                f.Context.fillStyle = c;
                h.reverse();
                a = d.concat(h);
                for (k = 0; k < a.length; k++) k ? f.Context.lineTo(a[k].X, a[k].Y) : f.Context.moveTo(a[k].X, a[k].Y);
                f.Context.lineTo(a[0].X, a[0].Y);
                f.Context.stroke();
                f.Context.fill();
                f.Context.closePath()
            } else {
                c = [];
                for (k = 0; k < f.CoordinatesArr.length; k++) f.CoordinatesArr[k] && f.CoordinatesArr[k + 1] && (l = f.Maplet.toClientPoint(f.CoordinatesArr[k].Cx, f.CoordinatesArr[k].Cy), m = f.Maplet.toClientPoint(f.CoordinatesArr[k + 1].Cx, f.CoordinatesArr[k + 1].Cy), p = l.X - a * (l.Y - m.Y) / Math.sqrt(Math.pow(m.X - l.X, 2) + Math.pow(m.Y - l.Y, 2)), q = l.Y - a * (m.X - l.X) / Math.sqrt(Math.pow(m.X - l.X, 2) + Math.pow(m.Y - l.Y, 2)), s = l.X + b * (l.Y - m.Y) / Math.sqrt(Math.pow(m.X - l.X, 2) + Math.pow(m.Y - l.Y, 2)), l = l.Y + b * (m.X - l.X) / Math.sqrt(Math.pow(m.X - l.X, 2) + Math.pow(m.Y - l.Y, 2)), c.push(p + "px," + q + "px"), c.push(s + "px," + l + "px"));
                f.Graphics.StrokeColor = f.LineColor;
                f.Graphics.StrokeWeight = f.LineWidth + "px";
                f.Graphics.style.filter = "alpha(opacity=" + 100 * f.LineOpacity + ")";
                f.Graphics.points.value = c.join(" ")
            }
        }
    };
    this.refresh = function() {
        f.Context && (f.Graphics.width = f.Maplet.MapWidth, f.Graphics.height = f.Maplet.MapHeight);
        f.draw()
    }
};
RPolygon = function(d, g, e, h, c, k) {
    RBaseGraphics.call(this, d, g, e, h, c, k);
    var b = this;
    this.Graphics = document.createElement("canvas");
    this.Graphics.getContext ? (this.Context = this.Graphics.getContext("2d"), this.Div.get().appendChild(this.Graphics)) : (this.Graphics = document.createElement("v:polyline"), this.Graphics.Filled = !1, this.Div.get().appendChild(this.Graphics), c && k && (this.Fill = document.createElement("v:polyline"), this.Fill.Filled = !0, this.Div.get().appendChild(this.Fill)));
    this.update = function(a, f, b, c, d, e) {
        a && 0 < a.length && (this.CoordinatesArr = a);
        0 < f && (this.LineWidth = f);
        b && (this.lineColor = LineColor);
        if (c || 0 == c) this.LineOpacity = c;
        d && e ? this.Fill || (this.Fill = document.createElement("v:polyline"), this.Fill.Filled = !0, this.Div.get().appendChild(this.Fill)) : this.Fill && (this.Div.get().removeChild(this.Fill), this.Fill = void 0);
        this.MBR = this.getMBR();
        this.refresh()
    };
    this.draw = function() {
        if (b.CoordinatesArr && b.CoordinatesArr.length) if (b.Context ? b.Context.clearRect(0, 0, b.Graphics.width, b.Graphics.height) : b.Graphics.points.value = "", b.Context) {
            b.Context.lineWidth = b.LineWidth;
            b.Context.lineCap = "round";
            b.Context.lineJoin = "round";
            b.Context.fillStyle = RBase.changeToRGBA(b.FillColor, b.FillOpacity);
            b.Context.strokeStyle = RBase.changeToRGBA(b.LineColor, b.LineOpacity);
            b.Context.beginPath();
            for (var a, f = 0; f < b.CoordinatesArr.length; f++) b.CoordinatesArr[f] && (a = b.Maplet.toClientPoint(b.CoordinatesArr[f].Cx, b.CoordinatesArr[f].Cy), f ? b.Context.lineTo(a.X, a.Y) : b.Context.moveTo(a.X, a.Y));
            a = b.Maplet.toClientPoint(b.CoordinatesArr[0].Cx, b.CoordinatesArr[0].Cy);
            b.Context.lineTo(a.X, a.Y);
            b.Context.fill();
            b.Context.stroke();
            b.Context.closePath()
        } else {
            for (var c = [], f = 0; f < b.CoordinatesArr.length; f++) b.CoordinatesArr[f] && (a = b.Maplet.toClientPoint(b.CoordinatesArr[f].Cx, b.CoordinatesArr[f].Cy), c.push(a.X + "px," + a.Y + "px"));
            a = b.Maplet.toClientPoint(b.CoordinatesArr[0].Cx, b.CoordinatesArr[0].Cy);
            c.push(a.X + "px," + a.Y + "px");
            b.Graphics.StrokeColor = b.LineColor;
            b.Graphics.StrokeWeight = b.LineWidth + "px";
            b.Graphics.style.filter = "alpha(opacity=" + 100 * b.LineOpacity + ")";
            a = c.join(" ");
            b.Graphics.points.value = a;
            b.Fill && (b.Fill.points.value = a, b.Fill.FillColor = b.FillColor, b.Fill.style.filter = "alpha(opacity=" + 100 * b.FillOpacity + ")")
        }
    };
    this.refresh = function() {
        b.Context && (b.Graphics.width = b.Maplet.MapWidth, b.Graphics.height = b.Maplet.MapHeight);
        b.draw()
    }
};
RCircle = function(d, g, e, h, c, k, b) {
    RBaseGraphics.call(this, null, e, h, c, k, b);
    var a = this;
    this.CenterCoordinates = d;
    this.SideCoordinates = g;
    this.Graphics = document.createElement("canvas");
    this.Graphics.getContext ? (this.Context = this.Graphics.getContext("2d"), this.Div.get().appendChild(this.Graphics)) : (this.Graphics = document.createElement("v:oval"), this.Graphics.unselectable = "on", this.Graphics.style.position = "absolute", this.Div.get().appendChild(this.Graphics), k && b && (this.Fill = document.createElement("v:oval"), this.Fill.style.position = "absolute", this.Filled = !0, this.Div.get().appendChild(this.Fill)));
    this.update = function(a, b, c, d, e, g, h) {
        a && (this.CenterCoordinates = a);
        b && (this.SideCoordinates = b);
        0 < c && (this.LineWidth = c);
        d && (this.lineColor = LineColor);
        if (e || 0 == e) this.LineOpacity = e;
        g && h ? this.Fill || (this.Fill = document.createElement("v:oval"), this.Fill.style.position = "absolute", this.Filled = !0, this.Div.get().appendChild(this.Fill)) : this.Fill && (this.Div.get().removeChild(this.Fill), this.Fill = void 0);
        this.MBR = this.getMBR();
        this.refresh()
    };
    this.draw = function() {
        if (a.CenterCoordinates && a.SideCoordinates) {
            var f = a.Maplet.toClientPoint(a.CenterCoordinates.Cx, a.CenterCoordinates.Cy),
            b = a.Maplet.toClientPoint(a.SideCoordinates.Cx, a.SideCoordinates.Cy),
            c = f.X - b.X,
            b = f.Y - b.Y,
            c = parseInt(Math.pow(c * c + b * b, 0.5));
            a.Context ? (a.Context.clearRect(0, 0, a.Graphics.width, a.Graphics.height), a.Context.lineWidth = a.LineWidth, a.Context.fillStyle = RBase.changeToRGBA(a.FillColor, a.FillOpacity), a.Context.strokeStyle = RBase.changeToRGBA(a.LineColor, a.LineOpacity), a.Context.beginPath(), a.Context.arc(f.X - a.LineWidth, f.Y - a.LineWidth, c, 0, 2 * Math.PI, !0), a.Context.fill(), a.Context.stroke(), a.Context.closePath()) : (a.Graphics.style.left = parseInt(f.X - c - a.LineWidth) + "px", a.Graphics.style.top = parseInt(f.Y - c - a.LineWidth) + "px", a.Fill && (a.Fill.style.left = parseInt(f.X - c) + "px", a.Fill.style.top = parseInt(f.Y - c) + "px"))
        }
    };
    this.refresh = function() {
        if (this.CenterCoordinates && this.SideCoordinates) {
            if (this.Context) this.Graphics.width = this.Maplet.MapWidth,
            this.Graphics.height = this.Maplet.MapHeight;
            else {
                var a = this.Maplet.toClientPoint(this.CenterCoordinates.Cx, this.CenterCoordinates.Cy),
                b = this.Maplet.toClientPoint(this.SideCoordinates.Cx, this.SideCoordinates.Cy),
                c = a.X - b.X,
                a = a.Y - b.Y,
                c = parseInt(Math.pow(c * c + a * a, 0.5));
                this.Graphics.style.width = 2 * (c + this.LineWidth) + "px";
                this.Graphics.style.height = 2 * (c + this.LineWidth) + "px";
                this.Graphics.StrokeColor = this.LineColor;
                this.Graphics.Stroked = !0;
                this.Graphics.StrokeWeight = this.LineWidth;
                this.Graphics.style.filter = "alpha(opacity=" + 100 * this.LineOpacity + ")";
                this.Fill && (this.Fill.style.width = 2 * c + "px", this.Fill.style.height = 2 * c + "px", this.Fill.FillColor = this.FillColor, this.Fill.style.filter = "alpha(opacity=" + 100 * this.FillOpacity + ")")
            }
            this.draw()
        }
    }
};
RCircleByRadius = function(d, g, e, h, c, k, b) {
    RBaseGraphics.call(this, null, e, h, c, k, b);
    var a = this;
    this.CenterCoordinates = d;
    this.Radius = g;
    this.Graphics = document.createElement("canvas");
    this.Graphics.getContext ? (this.Context = this.Graphics.getContext("2d"), this.Div.get().appendChild(this.Graphics)) : (this.Graphics = document.createElement("v:oval"), this.Graphics.unselectable = "on", this.Graphics.style.position = "absolute", this.Div.get().appendChild(this.Graphics), k && b && (this.Fill = document.createElement("v:oval"), this.Fill.style.position = "absolute", this.Filled = !0, this.Div.get().appendChild(this.Fill)));
    this.update = function(a, b, c, d, e, g, h) {
        a && (this.CenterCoordinates = a);
        b && (this.Radius = b);
        0 < c && (this.LineWidth = c);
        d && (this.LineColor = d);
        if (e || 0 == e) this.LineOpacity = e;
        g && h ? this.Fill || (this.Fill = document.getElementById("v:oval"), this.Fill.style.position = "absolute", this.Filled = !0, this.Div.get().appendChild(this.Fill)) : this.Fill && (this.Div.get().removeChild(this.Fill), this.Fill = void 0);
        this.MBR = this.getMBR();
        this.refresh()
    };
    this.draw = function() {
        if (a.CenterCoordinates && a.Radius) {
            var f = a.Maplet.toClientPoint(a.CenterCoordinates.Cx, a.CenterCoordinates.Cy),
            b;
            b = a.Radius.radiusPx ? a.Radius.radiusPx: MapUtils.calculatePixDistanceByMi(a.Radius.radiusMi, a.Maplet.Level);
            a.Context ? (a.Context.clearRect(0, 0, a.Graphics.width, a.Graphics.height), a.Context.lineWidth = a.LineWidth, a.Context.fillStyle = RBase.changeToRGBA(a.FillColor, a.FillOpacity), a.Context.strokeStyle = RBase.changeToRGBA(a.LineColor, a.LineOpacity), a.Context.beginPath(), a.Context.arc(f.X - a.LineWidth, f.Y - a.LineWidth, b, 0, 2 * Math.PI, !0), a.Context.fill(), a.Context.stroke(), a.Context.closePath()) : (a.Graphics.style.left = parseInt(f.X - a.Radius - a.LineWidth) + "px", a.Graphics.style.top = parseInt(f.Y - a.Radius - a.LineWidth) + "px", a.Fill && (a.Fill.style.left = parseInt(f.X - a.Radius) + "px", a.Fill.style.top = parseInt(f.Y - a.Radius) + "px"))
        }
    };
    this.refresh = function() {
        this.CenterCoordinates && this.Radius && (this.Context ? (this.Graphics.width = this.Maplet.MapWidth, this.Graphics.height = this.Maplet.MapHeight) : (this.Graphics.style.width = 2 * (this.Radius + this.LineWidth) + "px", this.Graphics.style.height = 2 * (this.Radius + this.LineWidth) + "px", this.Graphics.StrokeColor = this.LineColor, this.Graphics.Stroked = !0, this.Graphics.StrokeWeight = this.LineWidth, this.Graphics.style.filter = "alpha(opacity=" + 100 * this.LineOpacity + ")", this.Fill && (this.Fill.style.width = 2 * this.Radius + "px", this.Fill.style.height = 2 * this.Radius + "px", this.Fill.FillColor = this.FillColor, this.Fill.style.filter = "alpha(opacity=" + 100 * this.FillOpacity + ")")), this.draw())
    }
};
var RBaseMarker = function(d, g, e, h, c, k, b) {
    var a = this;
    this.Cx = d;
    this.Cy = g;
    this.DetaX = h;
    this.DetaY = c;
    this.Top = this.Left = 0;
    this.Maplet = this.Hook = null;
    this.Div = new RDiv(0, 0, null, null, 0);
    this.Div.get().style.cursor = "default";
    this.Div.get().onclick = function(a) {
        RBase.stopPropagation(a)
    };
    this.Div.get().ondblclick = function(a) {
        RBase.stopPropagation(a)
    };
    this.IconUrl = e;
    this.IconWidth = k;
    this.IconHeight = b;
    this.Icon = createRImage(0, 0, this.IconWidth, this.IconHeight, 0, this.IconUrl);
    this.Icon.style.cursor = "pointer";
    this.Div.get().appendChild(this.Icon);
    this.setMaplet = function(a) {
        this.Maplet = a
    };
    this.get = function() {
        this.Div.get()
    };
    this.show = function() {
        this.Div.show()
    };
    this.hide = function() {
        this.Div.hide()
    };
    this.update = function(a, b, c, d, e) {};
    this.refresh = function() {};
    this.dispose = function() {};
    this.Div.get().oncontextmenu = function(a) {
        return ! 1
    };
    this.Div.get().onmousedown = function(a) {
        RBase.stopPropagation(a)
    };
    this.Div.get().onmouseup = function(a) {
        RBase.stopPropagation(a)
    };
    this.Div.get().onmousemove = function(a) {
        RBase.stopPropagation(a)
    };
    this.Div.get().onmousewheel = function(a) {
        RBase.stopPropagation(a)
    };
    this.Icon.onclick = function(f) {
        a.runClickEvent(f);
        a.dispatchEvent(RMarkerEvent.MouseClickEvent, f)
    };
    this.runClickEvent = function(a) {};
    this.runMouseOverEvent = function(f) {
        f = RBase.getMouseEvent(f);
        a.dispatchEvent(RMarkerEvent.MouseOverEvent, f)
    };
    this.runMouseOutEvent = function(f) {
        f = RBase.getMouseEvent(f);
        a.dispatchEvent(RMarkerEvent.MouseOutEvent, f)
    };
    this.runMouseDoubleClickEvent = function(f) {
        f = RBase.getMouseEvent(f);
        a.dispatchEvent(RMarkerEvent.MouseDoubleClickEvent, f)
    };
    this.EventArray = [];
    this.EventArray[RMarkerEvent.MouseClickEvent] = [];
    this.EventArray[RMarkerEvent.MouseDoubleClickEvent] = [];
    this.EventArray[RMarkerEvent.MouseOverEvent] = [];
    this.EventArray[RMarkerEvent.MouseOutEvent] = [];
    this.addEventListener = function(a, b) {
        this.EventArray[a] && this.EventArray[a].push(b);
        switch (a) {
        case RMarkerEvent.MouseOverEvent:
            this.Icon.onmouseover || (this.Icon.onmouseover = this.runMouseOverEvent);
            break;
        case RMarkerEvent.MouseOutEvent:
            this.Icon.onmouseout || (this.Icon.onmouseout = this.runMouseOutEvent);
            break;
        case RMarkerEvent.MouseDoubleClickEvent:
            this.Icon.ondblclick || (this.Icon.ondblclick = this.runMouseDoubleClickEvent)
        }
    };
    this.removeEventListener = function(a, b) {
        if (this.EventArray[a]) {
            for (var c = 0; c < this.EventArray[a].length; c++) this.EventArray[a][c] == b && this.EventArray[a].splice(c, 1);
            if (0 >= this.EventArray[a].length) switch (a) {
            case RMarkerEvent.MouseOverEvent:
                this.Div.get().onmouseover = null;
                break;
            case RMarkerEvent.MouseOutEvent:
                this.Div.get().onmouseout = null;
                break;
            case RMarkerEvent.MouseDoubleClickEvent:
                this.Div.get().ondblclick = null
            }
        }
    };
    this.dispatchEvent = function(a, b) {
        if (this.EventArray[a] && 0 < this.EventArray[a].length) {
            var c = new RMarkerEvent(a);
            c.Cx = this.Cx;
            c.Cy = this.Cy;
            c.Hook = this.Hook;
            for (var d = 0; d < this.EventArray[a].length; d++) if (this.EventArray[a][d]) this.EventArray[a][d](c)
        }
    }
};
RPointMarker = function(d, g, e, h, c, k, b) {
    RBaseMarker.call(this, d, g, e, h, c, k, b);
    this.update = function(a, f, b, c, d, e, g) {
        0 < a && (this.Cx = a);
        0 < f && (this.Cy = f);
        b && (this.IconUrl = b);
        if (c || 0 == c) this.DetaX = c;
        if (d || 0 == d) this.DetaY = d;
        e && (this.IconWidth = e);
        g && (this.IconHeight = g);
        this.refresh()
    };
    this.refresh = function() {
        var a = this.Maplet.toPoint(this.Cx, this.Cy);
        this.Left = a.X + this.DetaX;
        this.Top = a.Y + this.DetaY;
        this.Div.set(this.Left, this.Top, null, null, null);
        this.Icon.style.width = this.IconWidth;
        this.Icon.style.height = this.IconHeight;
        this.Icon.src = this.IconUrl
    }
};
RLabelMarker = function(d, g, e, h, c, k, b, a) {
    RBaseMarker.call(this, d, g, h, c, k, b, a);
    var f = this;
    this.initTag = function() {
        this.TitleWidth = this.setWidthByStrByte(this.Title);
        this.MiddleDiv = new RDiv(14, 0, this.TitleWidth, 39, null);
        this.MiddleDiv.get().innerHTML = this.Title;
        this.MiddleDiv.get().style.backgroundImage = "url(" + RMapConstant.JsServer + "image/tag_middle.png)";
        this.MiddleDiv.get().style.fontFamily = "\u5fae\u8f6f\u96c5\u9ed1,\u5b8b\u4f53,arial,sans-serif";
        this.MiddleDiv.get().style.fontSize = "12px";
        this.MiddleDiv.get().style.lineHeight = "39px";
        this.MiddleDiv.get().style.textAlign = "center";
        this.MiddleDiv.get().style.fontWeight = "bold";
        this.LeftDiv = new RDiv(0, 0, 14, 39, null);
        this.LeftDiv.get().style.backgroundImage = "url(" + RMapConstant.JsServer + "image/tag_left.png)";
        this.RightDiv = new RDiv(this.TitleWidth + 14, 0, 14, 39, null);
        this.RightDiv.get().style.backgroundImage = "url(" + RMapConstant.JsServer + "image/tag_right.png)";
        this.ArrowDiv = new RDiv((14 + this.TitleWidth + 14 - 12) / 2, 37, 12, 39, null);
        this.ArrowDiv.get().style.backgroundImage = "url(" + RMapConstant.JsServer + "image/tag_arrow.png)";
        this.TagDiv = new RDiv( - (parseInt(this.LeftDiv.get().style.width) + parseInt(this.MiddleDiv.get().style.width) + parseInt(this.RightDiv.get().style.width) - this.IconWidth) / 2, -(parseInt(this.LeftDiv.get().style.height) + parseInt(this.ArrowDiv.get().style.height)), null, null, null);
        this.TagDiv.get().appendChild(this.LeftDiv.get());
        this.TagDiv.get().appendChild(this.MiddleDiv.get());
        this.TagDiv.get().appendChild(this.RightDiv.get());
        this.TagDiv.get().appendChild(this.ArrowDiv.get());
        this.hideLabel();
        this.Div.get().appendChild(this.TagDiv.get())
    };
    this.isShowTitle = !1;
    this.Title = e;
    this.TitleWidth = 0;
    this.Icon.onload = function() {
        f.IconWidth = this.width;
        f.refreshTitleLayout()
    };
    this.runClickEvent = function(a) {
        f.isShowTitle ? f.hideLabel() : f.showLabel()
    };
    this.update = function(a, f, b, c, d, e, g, h) {
        0 < a && (this.Cx = a);
        0 < f && (this.Cy = f);
        c && (this.IconUrl = c);
        if (d || 0 == d) this.DetaX = d;
        if (e || 0 == e) this.DetaY = e;
        g && (this.IconWidth = g);
        h && (this.IconHeight = h);
        b && (this.Title = b);
        this.refresh()
    };
    this.refresh = function() {
        var a = this.Maplet.toPoint(this.Cx, this.Cy);
        this.Left = a.X + this.DetaX;
        this.Top = a.Y + this.DetaY;
        this.Div.set(this.Left, this.Top, null, null, null);
        this.Icon.style.width = this.IconWidth;
        this.Icon.style.height = this.IconHeight;
        this.Icon.src = this.IconUrl;
        this.MiddleDiv.get().innerHTML = this.Title
    };
    this.refreshTitleLayout = function() {
        this.TitleWidth = this.setWidthByStrByte(this.Title);
        this.MiddleDiv.set(null, null, this.TitleWidth, null, null);
        this.RightDiv.set(this.TitleWidth + 14, null, null, null, null);
        this.ArrowDiv.set((14 + this.TitleWidth + 14 - 12) / 2, null, null, null, null);
        this.TagDiv.set( - (parseInt(this.LeftDiv.get().style.width) + parseInt(this.MiddleDiv.get().style.width) + parseInt(this.RightDiv.get().style.width) - this.IconWidth) / 2, -(parseInt(this.LeftDiv.get().style.height) + parseInt(this.ArrowDiv.get().style.height)), null, null, null)
    };
    this.showLabel = function() {
        this.TagDiv.show();
        this.isShowTitle = !0
    };
    this.hideLabel = function() {
        this.TagDiv.hide();
        this.isShowTitle = !1
    };
    this.setWidthByStrByte = function(a) {
        var f = 0;
        if (a) for (var b = 0; b < a.length; b++) 19968 > a.charCodeAt(b) || a.charCodeAt(b),
        f += 12;
        return f
    };
    this.initTag()
};
RAggregationMarkers = function(d, g, e) {
    var h = this,
    c = function() {
        for (var a = null,
        f = 0; f < h.arr.length; f++) if (a) {
            var b = this.map.toClientPoint(h.arr[f].Cx, h.arr[f].Cy),
            c = !0,
            d = 0,
            e;
            for (e in a) {
                var g = this.map.toClientPoint(a[e].Cx, a[e].Cy),
                k = b.Y - g.Y,
                g = b.X - g.X;
                if ( - 100 <= k && 100 >= k && -100 <= g && 100 >= g) {
                    c = !1;
                    a[e].arr.push(h.arr[f]);
                    break
                }
                d = e
            }
            c && (a[d + 1] = h.arr[f], a[d + 1].arr = [], a[d + 1].arr.push(h.arr[f]))
        } else a = {},
        a[0] = h.arr[f],
        a[0].arr = [],
        a[0].arr.push(h.arr[f]);
        return h.showPoints = a
    },
    k = function() {
        var a = h.showPoints;
        this.map.pointArr = [];
        h.aggregationMarkers = [];
        for (var f in a) {
            1 == a[f].arr.length ? (h.congruentInfo.congruentImgUrl = "./image/icon_0.png", h.congruentInfo.iconWidth = 20, h.congruentInfo.iconHeight = 30) : 1 < a[f].arr.length && 20 > a[f].arr.length ? (h.congruentInfo.congruentImgUrl = "./image/congruent0.png", h.congruentInfo.iconWidth = 53, h.congruentInfo.iconHeight = 53) : 20 <= a[f].arr.length && 40 > a[f].arr.length ? (h.congruentInfo.congruentImgUrl = "./image/congruent1.png", h.congruentInfo.iconWidth = 56, h.congruentInfo.iconHeight = 56) : 40 <= a[f].arr.length && 60 > a[f].arr.length ? (h.congruentInfo.congruentImgUrl = "./image/congruent2.png", h.congruentInfo.iconWidth = 66, h.congruentInfo.iconHeight = 66) : 60 <= a[f].arr.length && (h.congruentInfo.congruentImgUrl = "./image/congruent3.png", h.congruentInfo.iconWidth = 78, h.congruentInfo.iconHeight = 78);
            var b = new RPointMarker(a[f].Cx, a[f].Cy, h.congruentInfo.congruentImgUrl, h.congruentInfo.detaX, h.congruentInfo.detaY, h.congruentInfo.iconWidth, h.congruentInfo.iconHeight);
            b.arr = a[f].arr;
            this.map.addMarker(b);
            this.map.pointArr.push(b);
            h.aggregationMarkers.push(b);
            if (1 != a[f].arr.length) {
                $(b.Icon).after("<div  class='showPointsNum' alt='" + a[f].Cx + "-" + a[f].Cy + "' style='left: 14px;top: 12px;position: absolute;font-size: 10px;font-weight: bold;font-family: arial; color:#333333; cursor:pointer;'>" + a[f].arr.length + "</div>");
                var c = $(".showPointsNum", $(b.Icon).parent()),
                d = $(c).width() / 2,
                e = $(c).height() / 2,
                g = $(b.Icon)[0].clientWidth / 2,
                b = $(b.Icon)[0].clientHeight / 2;
                $(c).css({
                    left: g - d + "px",
                    top: b - e + "px"
                })
            }
        }
    },
    b = function() {
        var a = this.map;
        if (a.pointArr && 0 < a.pointArr.length) for (var f in a.pointArr) {
            a.pointArr[f].runClickEvent = function(f) {
                this.arr && 1 < this.arr.length && (a.setLevel(a.Level + 1), a.setCenter(this.Cx, this.Cy), a.removeMarkers(a.pointArr), c(), k(), b())
            };
            var d = $(".showPointsNum", $(a.pointArr[f].Icon).parent());
            $(d).unbind("click").mousedown(function(f) {
                a.setLevel(a.Level + 1);
                f = $(this).attr("alt").split("-");
                a.setCenter(f[0], f[1]);
                a.removeMarkers(a.pointArr);
                c();
                k();
                b()
            })
        }
    };
    this.getNoramlMarkers = function() {
        return h.normalMarkers
    };
    this.getAggregationMarkers = function() {
        return h.aggregationMarkers
    };
    this.hideAllMarker = function() {
        if (this.map.pointArr && 0 < this.map.pointArr.length) for (var a = 0; a < this.map.pointArr.length; a++) this.map.hideMarker(this.map.pointArr[a])
    };
    this.showAllMarker = function() {
        if (this.map.pointArr && 0 < this.map.pointArr.length) for (var a = 0; a < this.map.pointArr.length; a++) this.map.showMarker(this.map.pointArr[a])
    };
    this.refresh = function(a, b, c, d) {};
    this.init = function(a, f, d, e) {
        a && 0 < a.length && (h.arr = a);
        f && (h.congruentInfo = {
            congruentImgUrl: f.congruentImgUrl || "",
            detaX: f.detaX || -11,
            detaY: f.detaY || -30,
            iconWidth: f.iconWidth || 20,
            iconHeight: f.iconHeight || 30
        });
        h.compareWidth = d || 100;
        c();
        k();
        b()
    };
    this.appendToMap = function(a) {
        this.map = a;
        this.init(d, g, e, a)
    }
};
RSelfMarker = function(d, g, e, h, c, k, b, a) {
    RBaseMarker.call(this, d, g, h, c, k, b, a);
    var f = this;
    this.updateTag = function() {
        this.TagDiv = new RDiv(this.TagObject.detaX, this.TagObject.detaY, this.TagObject.width, this.TagObject.height, null);
        this.hideLabel();
        this.TagDiv.get().innerHTML = this.TagObject.html;
        this.Div.get().appendChild(this.TagDiv.get())
    };
    this.isShowTitle = !1;
    this.TagObject = e;
    this.Icon.onload = function() {
        f.IconWidth = this.width;
        f.IconHeight = this.height
    };
    this.runClickEvent = function(a) {
        f.isShowTitle ? f.hideLabel() : f.showLabel()
    };
    this.update = function(a, b, f, c, d, e, g, h) {
        0 < a && (this.Cx = a);
        0 < b && (this.Cy = b);
        c && (this.IconUrl = c);
        if (d || 0 == d) this.DetaX = d;
        if (e || 0 == e) this.DetaY = e;
        g && (this.IconWidth = g);
        h && (this.IconHeight = h);
        f && (this.TagObject = f, this.updateTag());
        this.refresh()
    };
    this.refresh = function() {
        var a = this.Maplet.toPoint(this.Cx, this.Cy);
        this.Left = a.X + this.DetaX;
        this.Top = a.Y + this.DetaY;
        this.Div.set(this.Left, this.Top, null, null, null);
        this.Icon.style.width = this.IconWidth;
        this.Icon.style.height = this.IconHeight;
        this.Icon.src = this.IconUrl
    };
    this.showLabel = function() {
        this.TagDiv.show();
        this.isShowTitle = !0
    };
    this.hideLabel = function() {
        this.TagDiv.hide();
        this.isShowTitle = !1
    };
    this.updateTag()
};
RWindowMarker = function(d, g, e, h, c, k, b, a) {
    RBaseMarker.call(this, d, g, h, c, k, b, a);
    var f = this;
    this.isShowTitle = this.isChangeCxOrCy = !1;
    this.TagObject = e;
    this.Icon.onload = function() {
        f.IconWidth = this.width;
        f.IconHeight = this.height
    };
    this.runClickEvent = function(a) {
        f.isShowTitle ? f.hideLabel() : f.showLabel()
    };
    this.update = function(a, b, f, c, d, e, g, h) {
        0 < a && a != this.Cx && (this.isChangeCxOrCy = !0, this.Cx = a);
        0 < b && b != this.Cy && (this.isChangeCxOrCy = !0, this.Cy = b);
        c && (this.IconUrl = c);
        if (d || 0 == d) this.DetaX = d;
        if (e || 0 == e) this.DetaY = e;
        g && (this.IconWidth = g);
        h && (this.IconHeight = h);
        f && (this.TagObject = f);
        this.refresh()
    };
    this.refresh = function() {
        var a = this.Maplet.toPoint(this.Cx, this.Cy);
        this.Left = a.X + this.DetaX;
        this.Top = a.Y + this.DetaY;
        this.Div.set(this.Left, this.Top, null, null, null);
        this.Icon.style.width = this.IconWidth;
        this.Icon.style.height = this.IconHeight;
        this.Icon.src = this.IconUrl;
        this.isChangeCxOrCy && (this.isChangeCxOrCy = !1, this.isShowTitle && this.Maplet.refreshTabMarkerBox(this))
    };
    this.showLabel = function() {
        this.Maplet.showWindowMarkerBox(this);
        this.isShowTitle = !0
    };
    this.hideLabel = function() {
        this.Maplet.hideWindowMarkerBox(this);
        this.isShowTitle = !1
    };
    this.dispose = function() {
        this.hideLabel()
    }
};
RTabMarker = function(d, g, e, h, c, k, b, a) {
    RWindowMarker.call(this, d, g, e, h, c, k, b, a);
    this.showLabel = function() {
        this.Maplet.showTabMarkerBox(this);
        this.isShowTitle = !0
    };
    this.hideLabel = function() {
        this.Maplet.hideTabMarkerBox(this);
        this.isShowTitle = !1
    };
    this.dispose = function() {
        this.hideLabel()
    }
};
RRotateMarker = function(d, g, e, h, c, k, b, a, f) {
    RBaseMarker.call(this, d, g, c, k, b, a, f);
    this.IconWidth = this.IconWidth ? this.IconWidth: this.Icon.width;
    this.IconHeight = this.IconHeight ? this.IconHeight: this.Icon.height;
    e && h ? (this.Cx2 = e, this.Cy2 = h) : this.Cy2 = this.Cx2 = 0;
    this.DegreeToRadian = Math.PI / 180;
    this.Radian = this.Degree = 0;
    this.rotate = function(a, b, f, c) {
        if (0 < a && 0 < b && 0 < f && 0 < c) {
            var d = navigator.userAgent;
            /msie/i.test(d) && !window.opera ? (this.Radian = Math.atan2(f - a, c - b), a = Math.sin(this.Radian), b = Math.cos(this.Radian), this.Icon.style.filter = "progid:DXImageTransform.Microsoft.Matrix(M11='" + b + "',M12='" + -a + "',M21='" + a + "',M22='" + b + "',sizingMethod='auto expand')") : (this.Degree = Math.atan2(f - a, c - b) / this.DegreeToRadian, /webkit/i.test(d) ? this.Icon.style.webkitTransform = "rotate(" + this.Degree + "deg)": /firefox/i.test(d) ? this.Icon.style.MozTransform = "rotate(" + this.Degree + "deg)": this.Icon.style.transform = "rotate(" + this.Degree + "deg)");
            this.DetaX = this.Icon.offsetWidth / -2;
            this.DetaY = this.Icon.offsetHeight / -2
        }
    };
    this.update = function(a, b, f, c, d, e, g, h, k) {
        0 < a && (this.Cx = a);
        0 < b && (this.Cy = b);
        0 < f && (this.Cx2 = f);
        0 < c && (this.Cy2 = c);
        d && (this.IconUrl = d);
        if (e || 0 == e) this.DetaX = e;
        if (g || 0 == g) this.DetaY = g;
        h && (this.IconWidth = h);
        k && (this.IconHeight = k);
        this.refresh()
    };
    this.refresh = function() {
        this.rotate(this.Cx, this.Cy, this.Cx2, this.Cy2);
        var a = this.Maplet.toPoint(this.Cx, this.Cy);
        this.Left = a.X + this.DetaX;
        this.Top = a.Y + this.DetaY;
        this.Div.set(this.Left, this.Top, null, null, null);
        this.Icon.style.width = this.IconWidth;
        this.Icon.style.height = this.IconHeight;
        this.Icon.src = this.IconUrl
    }
};
RRotateSelfMarker = function(d, g, e, h, c, k, b, a, f, n) {
    RRotateMarker.call(this, d, g, e, h, k, b, a, f, n);
    var r = this;
    this.updateTag = function() {
        this.TagObject && (this.TagDiv = new RDiv(this.TagObject.detaX, this.TagObject.detaY, this.TagObject.width, this.TagObject.height, null), this.hideLabel(), this.TagDiv.get().innerHTML = this.TagObject.html, this.Div.get().appendChild(this.TagDiv.get()))
    };
    this.isShowTitle = !1;
    this.TagObject = c;
    this.Icon.onload = function() {
        r.IconWidth = this.width;
        r.IconHeight = this.height
    };
    this.runClickEvent = function(a) {
        r.isShowTitle ? r.hideLabel() : r.showLabel()
    };
    this.update = function(a, b, f, c, d, e, g, n, h, k) {
        0 < a && (this.Cx = a);
        0 < b && (this.Cy = b);
        0 < f && (this.Cx2 = f);
        0 < c && (this.Cy2 = c);
        d && (this.TagObject = d, this.updateTag());
        e && (this.IconUrl = e);
        if (g || 0 == g) this.DetaX = g;
        if (n || 0 == n) this.DetaY = n;
        h && (this.IconWidth = h);
        k && (this.IconHeight = k);
        this.refresh()
    };
    this.refresh = function() {
        this.rotate(this.Cx, this.Cy, this.Cx2, this.Cy2);
        this.TagObject && this.TagDiv.set(this.TagObject.detaX - this.DetaX);
        var a = this.Maplet.toPoint(this.Cx, this.Cy);
        this.Left = a.X + this.DetaX;
        this.Top = a.Y + this.DetaY;
        this.Div.set(this.Left, this.Top, null, null, null);
        this.Icon.style.width = this.IconWidth;
        this.Icon.style.height = this.IconHeight;
        this.Icon.src = this.IconUrl
    };
    this.showLabel = function() {
        this.TagObject && (this.TagDiv.show(), this.isShowTitle = !0)
    };
    this.hideLabel = function() {
        this.TagObject && (this.TagDiv.hide(), this.isShowTitle = !1)
    };
    this.updateTag()
};
RRotateTabMarker = function(d, g, e, h, c, k, b, a, f, n) {
    RRotateMarker.call(this, d, g, e, h, k, b, a, f, n);
    var r = this;
    this.isChangeCxOrCy = !0;
    this.isShowTitle = !1;
    this.TagObject = c;
    this.Icon.onload = function() {
        r.IconWidth = this.width;
        r.IconHeight = this.height
    };
    this.runClickEvent = function(a) {
        r.isShowTitle ? r.hideLabel() : r.showLabel()
    };
    this.update = function(a, b, f, c, d, e, g, n, h, k) {
        0 < a && a != this.Cx && (this.isChangeCxOrCy = !0, this.Cx = a);
        0 < b && b != this.Cy && (this.isChangeCxOrCy = !0, this.Cy = b);
        0 < f && (this.Cx2 = f);
        0 < c && (this.Cy2 = c);
        e && (this.IconUrl = e);
        if (g || 0 == g) this.DetaX = g;
        if (n || 0 == n) this.DetaY = n;
        h && (this.IconWidth = h);
        k && (this.IconHeight = k);
        d && (this.TagObject = d);
        this.refresh()
    };
    this.refresh = function() {
        this.rotate(this.Cx, this.Cy, this.Cx2, this.Cy2);
        var a = this.Maplet.toPoint(this.Cx, this.Cy);
        this.Left = a.X + this.DetaX;
        this.Top = a.Y + this.DetaY;
        this.Div.set(this.Left, this.Top, null, null, null);
        this.Icon.style.width = this.IconWidth;
        this.Icon.style.height = this.IconHeight;
        this.Icon.src = this.IconUrl;
        this.isChangeCxOrCy && (this.isChangeCxOrCy = !1, this.isShowTitle && this.Maplet.refreshTabMarkerBox(this))
    };
    this.showLabel = function() {
        this.Maplet.showTabMarkerBox(this);
        this.isShowTitle = !0
    };
    this.hideLabel = function() {
        this.Maplet.hideTabMarkerBox(this);
        this.isShowTitle = !1
    };
    this.dispose = function() {
        this.hideLabel()
    }
};
RCustomerMarker = function(d, g, e, h, c, k, b) {
    var a = this;
    this.Cx = d;
    this.Cy = g;
    this.Width = h ? h: 0;
    this.Height = c ? c: 0;
    this.DetaX = k ? k: 0;
    this.DetaY = b ? b: 0;
    this.Html = e;
    this.Top = this.Left = 0;
    this.Maplet = this.Hook = null;
    this.Div = new RDiv(0, 0, null, null, 0);
    this.Div.get().style.cursor = "default";
    this.Div.get().onclick = function(a) {
        RBase.stopPropagation(a)
    };
    this.Div.get().ondblclick = function(a) {
        RBase.stopPropagation(a)
    };
    this.TagDiv = new RDiv(0, 0, null, null, 0);
    this.TagDiv.get().innerHTML = this.Html;
    this.Div.get().appendChild(this.TagDiv.get());
    this.setMaplet = function(a) {
        this.Maplet = a
    };
    this.get = function() {
        this.Div.get()
    };
    this.show = function() {
        this.Div.show()
    };
    this.hide = function() {
        this.Div.hide()
    };
    this.update = function(a, b, c, d, e, g, h) {
        0 < a && (this.Cx = a);
        0 < b && (this.Cy = b);
        c && (this.Html = c, this.TagDiv.get().innerHTML = this.Html);
        if (g || 0 == g) this.DetaX = g;
        if (h || 0 == h) this.DetaY = h;
        d && (this.Width = d);
        e && (this.Height = e);
        this.refresh()
    };
    this.refresh = function() {
        var a = this.Maplet.toPoint(this.Cx, this.Cy);
        this.Left = a.X + this.DetaX;
        this.Top = a.Y + this.DetaY;
        this.Div.set(this.Left, this.Top, this.Width, this.Height, null)
    };
    this.dispose = function() {};
    this.Div.get().onmousedown = function(a) {
        RBase.stopPropagation(a)
    };
    this.Div.get().onmouseup = function(a) {
        RBase.stopPropagation(a)
    };
    this.Div.get().onmousemove = function(a) {
        RBase.stopPropagation(a)
    };
    this.Div.get().onmousewheel = function(a) {
        RBase.stopPropagation(a)
    };
    this.runMouseOverEvent = function(b) {
        b = RBase.getMouseEvent(b);
        a.dispatchEvent(RMarkerEvent.MouseOverEvent, b)
    };
    this.runMouseOutEvent = function(b) {
        b = RBase.getMouseEvent(b);
        a.dispatchEvent(RMarkerEvent.MouseOutEvent, b)
    };
    this.runMouseDoubleClickEvent = function(b) {
        b = RBase.getMouseEvent(b);
        a.dispatchEvent(RMarkerEvent.MouseDoubleClickEvent, b)
    };
    this.EventArray = [];
    this.EventArray[RMarkerEvent.MouseClickEvent] = [];
    this.EventArray[RMarkerEvent.MouseDoubleClickEvent] = [];
    this.EventArray[RMarkerEvent.MouseOverEvent] = [];
    this.EventArray[RMarkerEvent.MouseOutEvent] = [];
    this.addEventListener = function(a, b) {
        this.EventArray[a] && this.EventArray[a].push(b);
        switch (a) {
        case RMarkerEvent.MouseOverEvent:
            this.Icon.onmouseover || (this.Icon.onmouseover = this.runMouseOverEvent);
            break;
        case RMarkerEvent.MouseOutEvent:
            this.Icon.onmouseout || (this.Icon.onmouseout = this.runMouseOutEvent);
            break;
        case RMarkerEvent.MouseDoubleClickEvent:
            this.Icon.ondblclick || (this.Icon.ondblclick = this.runMouseDoubleClickEvent)
        }
    };
    this.removeEventListener = function(a, b) {
        if (this.EventArray[a]) {
            for (var c = 0; c < this.EventArray[a].length; c++) this.EventArray[a][c] == b && this.EventArray[a].splice(c, 1);
            if (0 >= this.EventArray[a].length) switch (a) {
            case RMarkerEvent.MouseOverEvent:
                this.Div.get().onmouseover = null;
                break;
            case RMarkerEvent.MouseOutEvent:
                this.Div.get().onmouseout = null;
                break;
            case RMarkerEvent.MouseDoubleClickEvent:
                this.Div.get().ondblclick = null
            }
        }
    };
    this.dispatchEvent = function(a, b) {
        if (this.EventArray[a] && 0 < this.EventArray[a].length) {
            var c = new RMarkerEvent(a);
            c.Cx = this.Cx;
            c.Cy = this.Cy;
            c.Hook = this.Hook;
            for (var d = 0; d < this.EventArray[a].length; d++) if (this.EventArray[a][d]) this.EventArray[a][d](c)
        }
    }
};
RBaseMap = function(d, g, e, h, c, k, b) {
    document.body.addEventListener || (document.namespaces.add("v", "urn:schemas-microsoft-com:vml"), document.createStyleSheet().addRule("v\\:polyline", "behavior: url(#default#VML);"), document.createStyleSheet().addRule("v\\:shape", "behavior: url(#default#VML);"));
    var a = this;
    this.isDraging = this.isMoving = this.isZooming = !1;
    this.isCanMove = !0;
    this.isVisible = !1;
    this.zoomDiffer = 0;
    this.zoomCount = 15;
    this.oldZoomStep = this.oldZoomDes = 0;
    this.zoomDes = 1;
    this.stepCy = this.stepCx = this.newCy = this.newCx = this.yStep = this.xStep = this.oldCy = this.oldCx = this.moveCount = this.oldLevel = this.midZoomIndex = this.zoomStep = 0;
    if (h < RMapConstant.MapMinLevel || h > RMapConstant.MapMaxLevel) h = RMapConstant.MapMinLevel;
    this.Level = h;
    this.Top = this.Left = 0;
    this.Cx = parseFloat(g);
    this.Cy = parseFloat(e);
    this.MapWidth = c;
    this.MapHeight = k;
    this.MapRoot = RMapConstant.MapRoot;
    this.MapType = b ? b: RMapType.Typical;
    this.Tilelayers = Array(RMapConstant.Directorys.length);
    this.Div = new RDiv(0, 0, this.MapWidth, this.MapHeight, 0);
    this.Div.get().style.cursor = RCursor.MouseNormalCursor;
    this.Div.get().style.overflow = "hidden";
    this.Div.get().style.display = "none";
    this.Div.get().MapName = "map";
    this.Div.get().setAttribute("_rmap", "map");
    for (g = 0; g < RMapConstant.Directorys.length; g++) this.Tilelayers[g] = new RTileLayer(this.Cx, this.Cy, g, this.MapWidth, this.MapHeight, 10, this.MapRoot, this.MapType);
    this.maskDiv = new RDiv(0, 0, this.MapWidth, this.MapHeight, 100);
    this.maskDiv.get().style.backgroundImage = "url(" + RMapConstant.JsServer + "image/none.gif)";
    this.maskDiv.get().unselectable = "on";
    this.maskDiv.get().setAttribute("_rmap", "mask");
    this.Div.get().appendChild(this.maskDiv.get());
    d && (this.parent = "string" == typeof d ? RBase.$(d) : d, this.parent.appendChild(this.Div.get()));
    this.setLocation = function(a, b, c, d, e) {
        if (a || 0 == a || b || 0 == b) if (a != this.Left || b != this.Top) this.Left = parseFloat(a),
        this.Top = parseFloat(b),
        this.Tilelayers[this.Level].setLeftTop(this.Left, this.Top),
        this.Tilelayers[this.Level].loadNewPic(),
        this.Cx = this.oldCx + (this.oldLeft - this.Left) * RMapConstant.ScaleFactors[this.Level] / RMapConstant.MapPicWidth,
        this.Cy = this.oldCy - (this.oldTop - this.Top) * RMapConstant.ScaleFactors[this.Level] / RMapConstant.MapPicHeight,
        this.setTileLayer(this.Level, this.Cx, this.Cy, this.MapWidth, this.MapHeight);
        if (d || e) if (d != this.Cx || e != this.Cy) d = parseFloat(d),
        e = parseFloat(e),
        this.Left -= (d - this.Cx) * RMapConstant.MapPicWidth / RMapConstant.ScaleFactors[this.Level],
        this.Top += (e - this.Cy) * RMapConstant.MapPicHeight / RMapConstant.ScaleFactors[this.Level],
        this.Tilelayers[this.Level].setLeftTop(this.Left, this.Top),
        this.Tilelayers[this.Level].loadNewPic(),
        this.Cx = d,
        this.Cy = e,
        this.setTileLayer(this.Level, this.Cx, this.Cy, this.MapWidth, this.MapHeight);
        null != c && (void 0 != c && c >= RMapConstant.MapMinLevel && c <= RMapConstant.MapMaxLevel) && this.Level != c && (this.Top = this.Left = 0, this.oldLevel = this.Level, this.Level = parseInt(c), this.setTileLayer(this.Level, this.Cx, this.Cy, this.MapWidth, this.MapHeight), this.Tilelayers[this.Level].setLeftTop(0, 0), this.removeTileLayer(this.oldLevel), this.addTileLayer(this.Level))
    };
    this.toPoint = function(b, c) {
        var d = parseInt(a.MapWidth / 2 - a.Left - (a.Cx - b) * RMapConstant.MapPicWidth / RMapConstant.ScaleFactors[a.Level]),
        e = parseInt(a.MapHeight / 2 - a.Top + (a.Cy - c) * RMapConstant.MapPicHeight / RMapConstant.ScaleFactors[a.Level]);
        return new RPoint(d, e)
    };
    this.toClientPoint = function(b, c) {
        var d = parseInt(a.MapWidth / 2 - (a.Cx - b) * RMapConstant.MapPicWidth / RMapConstant.ScaleFactors[a.Level]),
        e = parseInt(a.MapHeight / 2 + (a.Cy - c) * RMapConstant.MapPicHeight / RMapConstant.ScaleFactors[a.Level]);
        return new RPoint(d, e)
    };
    this.toClientPointB = function(b, c, d) {
        b = parseInt(a.MapWidth / 2 - (a.Cx - b) * RMapConstant.MapPicWidth / RMapConstant.ScaleFactors[d]);
        c = parseInt(a.MapHeight / 2 + (a.Cy - c) * RMapConstant.MapPicHeight / RMapConstant.ScaleFactors[d]);
        return new RPoint(b, c)
    };
    this.toCoordinates = function(a, b) {
        return new RCoordinates(this.Cx - (this.MapWidth / 2 - a) * RMapConstant.ScaleFactors[this.Level] / RMapConstant.MapPicWidth, this.Cy + (this.MapHeight / 2 - b) * RMapConstant.ScaleFactors[this.Level] / RMapConstant.MapPicHeight)
    };
    this.setTileLayer = function(a, b, c, d, e) {
        b && (this.Tilelayers[a].Cx = b);
        c && (this.Tilelayers[a].Cy = c);
        if (d || 0 == d) this.Tilelayers[a].MapWidth = d;
        if (e || 0 == e) this.Tilelayers[a].MapHeight = e
    };
    this.addTileLayer = function(a) {
        this.Div.get().appendChild(this.Tilelayers[a].Div.get());
        this.Tilelayers[a].Div.get().setAttribute("_rmap", "tile_" + a.toString());
        this.Tilelayers[a].show();
        this.Left = this.Top = 0
    };
    this.removeTileLayer = function(a) {
        this.Tilelayers[a].clear();
        for (var b = 0; b < this.Div.get().childNodes.length; b++) if (this.Div.get().childNodes[b] == this.Tilelayers[a].Div.get()) {
            this.Div.get().removeChild(this.Tilelayers[a].Div.get());
            break
        }
    };
    this.changeMapType = function(a) {
        this.MapType = a;
        for (a = 0; a < RMapConstant.Directorys.length; a++) this.Tilelayers[a].MapType = this.MapType;
        this.removeTileLayer(this.Level);
        this.addTileLayer(this.Level);
        this.dispatchEvent(RMapEvent.MapTypeChanged)
    };
    this.show = function() {
        this.isVisible || (this.isVisible = !0, this.Div.get().style.display = "block")
    };
    this.hide = function() {
        this.isVisible && (this.isVisible = !1, this.Div.get().style.display = "none")
    };
    this.reset = function() {};
    this.resize = function(a, b) {
        if ((this.MapWidth != a || this.MapHeight != b) && 0 <= a && 0 <= b) {
            this.MapWidth = a;
            this.MapHeight = b;
            this.maskDiv.set(null, null, this.MapWidth, this.MapHeight, null);
            this.Div.set(null, null, this.MapWidth, this.MapHeight, null);
            for (var c = 0; c < RMapConstant.Directorys.length; c++) this.Tilelayers[c].Div.set(null, null, this.MapWidth, this.MapHeight, null),
            this.Tilelayers[c].MapWidth = this.MapWidth,
            this.Tilelayers[c].MapHeight = this.MapHeight,
            this.Tilelayers[c].Cx = this.Cx,
            this.Tilelayers[c].Cy = this.Cy;
            this.Tilelayers[this.Level].show();
            this.Left = this.Top = 0;
            this.dispatchEvent(RMapEvent.SizeChanged)
        }
    };
    this.getCenter = function() {
        return new RCoordinates(this.Cx, this.Cy)
    };
    this.setCenter = function(a, b) {
        if (a != this.Cx || b != this.Cy) this.Cx = parseFloat(a),
        this.Cy = parseFloat(b),
        this.setTileLayer(this.Level, this.Cx, this.Cy, this.MapWidth, this.MapHeight),
        this.Tilelayers[this.Level].show(),
        this.Top = this.Left = 0,
        this.dispatchEvent(RMapEvent.CenterChanged)
    };
    this.getLevel = function() {
        return this.Level
    };
    this.setLevel = function(a) {
        this.isCanZoomAndMove() && (null != a && void 0 != a && a >= RMapConstant.MapMinLevel && a <= RMapConstant.MapMaxLevel) && (this.setLocation(null, null, a), this.dispatchEvent(RMapEvent.LevelChanged))
    };
    this.smoothLevel = function(a) {
        null != a && (void 0 != a && a >= RMapConstant.MapMinLevel && a <= RMapConstant.MapMaxLevel) && (this.Level != a && this.isCanZoomAndMove()) && (this.oldLevel = this.Level, this.Level = a, this.startZoom())
    };
    this.move = function(a, b) {
        this.isCanZoomAndMove() && (this.setLocation(null, null, null, a, b), this.dispatchEvent(RMapEvent.Moved))
    };
    this.smoothMove = function(a, b) {
        if (this.isCanZoomAndMove()) {
            this.isMoving = !0;
            this.oldCx = this.Cx;
            this.oldCy = this.Cy;
            this.newCx = a;
            this.newCy = b;
            var c = Math.floor((this.oldCx - this.newCx) * RMapConstant.MapPicWidth / RMapConstant.ScaleFactors[this.Level]),
            d = Math.floor((this.oldCy - this.newCy) * RMapConstant.MapPicHeight / RMapConstant.ScaleFactors[this.Level]),
            e = Math.abs(c) > Math.abs(d) ? Math.abs(c) : Math.abs(d);
            this.moveCount = 10 + Math.round(e / 70);
            20 < this.moveCount && (this.moveCount = 20);
            this.xStep = c / this.moveCount;
            this.yStep = d / this.moveCount;
            this.stepCx = (this.oldCx - this.newCx) / this.moveCount;
            this.stepCy = (this.oldCy - this.newCy) / this.moveCount;
            this.startMove()
        }
    };
    this.ismove = !1;
    this.endCy = this.endCx = this.endLevel = 0;
    this.smoothLevelMove = function(a, b, c) {
        a = parseFloat(a);
        b = parseFloat(b);
        c = parseInt(c);
        if (this.isCanZoomAndMove()) {
            var d = this.getAppropriateMaxLevel([new RCoordinates(a, b)]);
            this.endCx = a;
            this.endCy = b;
            this.endLevel = c;
            d < this.Level && (this.Cx != a || this.Cy != b) ? (this.addEventListener(RMapEvent.LevelChanged, this.zoomHandle), this.ismove = !0, this.smoothLevel(d)) : this.Cx != a || this.Cy != b ? (this.addEventListener(RMapEvent.Moved, this.moveHandle), this.smoothMove(a, b)) : this.Level != c && (this.addEventListener(RMapEvent.LevelChanged, this.zoomHandle), this.smoothLevel(c))
        }
    };
    this.zoomHandle = function(b) {
        if (a.ismove) {
            if (a.Cx != a.endCx || a.Cy != a.endCy) a.addEventListener(RMapEvent.Moved, a.moveHandle),
            a.smoothMove(a.endCx, a.endCy);
            a.removeEventListener(RMapEvent.LevelChanged, a.zoomHandle)
        }
    };
    this.moveHandle = function(b) {
        a.ismove = !1;
        a.Level != a.endLevel && a.smoothLevel(a.endLevel);
        a.removeEventListener(RMapEvent.Moved, a.moveHandle)
    };
    this.getBounds = function() {
        var a = RMapConstant.ScaleFactors[this.Level] / RMapConstant.MapPicWidth * (this.MapWidth / 2),
        b = RMapConstant.ScaleFactors[this.Level] / RMapConstant.MapPicHeight * (this.MapHeight / 2),
        c = new RCoordinates(this.Cx - a, this.Cy - b),
        a = new RCoordinates(this.Cx + a, this.Cy + b);
        return new RBounds(c, a)
    };
    this.getAppropriateLevelCenter = function(a) {
        var b = null;
        if (a && 0 < a.length) {
            var c = RBase.getMaxCoordinatesBounds(a);
            if (c) {
                b = new RLevelCenter((c.MinCoordinates.Cx + c.MaxCoordinates.Cx) / 2, (c.MinCoordinates.Cy + c.MaxCoordinates.Cy) / 2, RMapConstant.MapMaxLevel);
                a = c.MaxCoordinates.Cx - c.MinCoordinates.Cx;
                for (var c = c.MaxCoordinates.Cy - c.MinCoordinates.Cy,
                d = RMapConstant.Directorys.length - 1; 0 <= d; d--) if (d >= RMapConstant.MapMinLevel && d <= RMapConstant.MapMaxLevel && RMapConstant.ScaleFactors[d] / RMapConstant.MapPicWidth * this.MapWidth > a && RMapConstant.ScaleFactors[d] / RMapConstant.MapPicHeight * this.MapHeight > c) {
                    b.Level = d;
                    break
                }
            } else b = new RLevelCenter(this.Cx, this.Cy, this.Level)
        }
        return b
    };
    this.getAppropriateMaxLevel = function(a) {
        var b = RMapConstant.MapMaxLevel;
        if (0 < a.length) {
            var c = RBase.getMaxCoordinates(a, this.getCenter());
            if (c) {
                a = 2 * Math.abs(c.Cx - this.Cx);
                for (var c = 2 * Math.abs(c.Cy - this.Cy), d = RMapConstant.Directorys.length - 1; 0 <= d; d--) if (d >= RMapConstant.MapMinLevel && d <= RMapConstant.MapMaxLevel && RMapConstant.ScaleFactors[d] / RMapConstant.MapPicWidth * this.MapWidth > a && RMapConstant.ScaleFactors[d] / RMapConstant.MapPicHeight * this.MapHeight > c) {
                    b = d;
                    break
                }
            } else b = this.Level
        }
        return b
    };
    this.refresh = function() {};
    this.isCanZoomAndMove = function() {
        return this.isMoving || this.isDraging || this.isZooming || !this.isCanMove ? !1 : !0
    };
    this.startZoom = function() {
        this.isZooming = !0;
        this.setTileLayer(this.Level, this.Cx, this.Cy, this.MapWidth, this.MapHeight);
        this.addTileLayer(this.Level);
        this.Tilelayers[this.oldLevel].Div.get().style.zIndex = 11;
        this.zoomDiffer = this.oldLevel - this.Level;
        this.zoomCount = 2 * Math.abs(this.zoomDiffer) + 5;
        this.midZoomIndex = Math.floor(this.zoomCount / 2);
        this.oldZoomDes = RMapConstant.ScaleFactors[this.oldLevel] / RMapConstant.ScaleFactors[this.Level];
        this.oldZoomStep = (RMapConstant.ScaleFactors[this.oldLevel] / RMapConstant.ScaleFactors[this.Level] - 1) / this.zoomCount;
        this.zoomStep = (1 - RMapConstant.ScaleFactors[this.Level] / RMapConstant.ScaleFactors[this.oldLevel]) / this.zoomCount;
        this.dispatchEvent(RMapEvent.LevelChange);
        setTimeout(this.zooming, 7)
    };
    this.zooming = function() {
        a.zoomCount -= 1;
        a.Tilelayers[a.Level].setZoom(a.zoomDes - a.zoomCount * a.zoomStep);
        a.zoomCount >= a.zoomStep && a.Tilelayers[a.oldLevel].setZoom(a.oldZoomDes - a.zoomCount * a.oldZoomStep);
        if (a.zoomCount == a.midZoomIndex) for (var b = 0; b < a.Div.get().childNodes.length; b++) if (a.Div.get().childNodes[b] == a.Tilelayers[a.oldLevel].Div.get()) {
            a.Tilelayers[a.oldLevel].Div.get().style.zIndex = 0;
            break
        }
        a.dispatchEvent(RMapEvent.LevelChanging);
        0 < a.zoomCount ? setTimeout(a.zooming, 10) : a.endZoom()
    };
    this.endZoom = function() {
        this.Top = this.Left = 0;
        this.Tilelayers[this.Level].setZoom(1);
        this.Tilelayers[this.Level].setLeftTop(0, 0);
        this.Tilelayers[this.oldLevel].setZoom(1);
        this.removeTileLayer(this.oldLevel);
        this.Tilelayers[this.oldLevel].Div.get().style.zIndex = 10;
        this.isZooming = !1;
        this.dispatchEvent(RMapEvent.LevelChanged)
    };
    this.stepIndex = this.oldTop = this.oldLeft = 0;
    this.startMove = function() {
        this.oldLeft = this.Left;
        this.oldTop = this.Top;
        this.stepIndex = 0;
        this.dispatchEvent(RMapEvent.Move);
        setTimeout(this.moving, 10)
    };
    this.moving = function() {
        a.stepIndex++;
        a.Left = a.oldLeft + a.xStep * a.stepIndex;
        a.Top = a.oldTop - a.yStep * a.stepIndex;
        a.Tilelayers[a.Level].setLeftTop(a.Left, a.Top);
        a.Cx = a.oldCx - a.stepIndex * a.stepCx;
        a.Cy = a.oldCy - a.stepIndex * a.stepCy;
        a.Tilelayers[a.Level].loadNewPic();
        a.dispatchEvent(RMapEvent.Moving);
        a.stepIndex < a.moveCount ? setTimeout(a.moving, 10) : a.endMove()
    };
    this.endMove = function() {
        this.Cx = this.newCx;
        this.Cy = this.newCy;
        this.proofreadCoordinate();
        this.setTileLayer(this.Level, this.Cx, this.Cy, this.MapWidth, this.MapHeight);
        this.isMoving = !1;
        this.dispatchEvent(RMapEvent.Moved)
    };
    this.proofreadCoordinate = function() {
        this.Left = this.oldLeft - (this.newCx - this.oldCx) * RMapConstant.MapPicWidth / RMapConstant.ScaleFactors[this.Level];
        this.Top = this.oldTop + (this.newCy - this.oldCy) * RMapConstant.MapPicHeight / RMapConstant.ScaleFactors[this.Level];
        this.Tilelayers[this.Level].setLeftTop(this.Left, this.Top)
    };
    this.maskDiv.get().oncontextmenu = function(a) {
        return ! 1
    };
    this.ey = this.ex = 0;
    d = function(b) {
        b = RBase.getMouseEvent(b);
        if (a.isCanZoomAndMove()) {
            var c = !1;
            a.Div.get().addEventListener ? 0 == b.button && (c = !0) : 1 == b.button && (c = !0);
            if (c) {
                a.Div.get().style.cursor = RCursor.MouseNormalCursor;
                a.isDraging = !0;
                a.isMoving = !0;
                a.oldCx = a.Cx;
                a.oldCy = a.Cy;
                a.oldLeft = a.Left;
                a.oldTop = a.Top;
                a.ex = b.clientX - a.Left;
                a.ey = b.clientY - a.Top;
                var d = function(b) {
                    b = RBase.getMouseEvent(b);
                    a.isDraging && (a.Div.get().style.cursor = RCursor.MouseMoveCursor, a.setLocation(b.clientX - a.ex, b.clientY - a.ey, null), a.dispatchEvent(RMapEvent.Moving))
                },
                e = function(b) {
                    b = RBase.getMouseEvent(b);
                    a.Div.get().style.cursor = RCursor.MouseUpCursor;
                    if (a.isDraging) {
                        a.isDraging = !1;
                        a.isMoving = !1;
                        var c = Math.abs(a.oldLeft - a.Left),
                        f = Math.abs(a.oldTop - a.Top);
                        if (1 < c || 1 < f) a.Cx = a.oldCx + (a.oldLeft - a.Left) * RMapConstant.ScaleFactors[a.Level] / RMapConstant.MapPicWidth,
                        a.Cy = a.oldCy - (a.oldTop - a.Top) * RMapConstant.ScaleFactors[a.Level] / RMapConstant.MapPicHeight;
                        a.dispatchEvent(RMapEvent.Moved)
                    }
                    b = b.srcElement || b.currentTarget;
                    b.removeEventListener ? (window.removeEventListener("mousemove", d, !0), window.removeEventListener("mouseup", e, !0)) : b.detachEvent && (b.releaseCapture(), b.detachEvent("onmousemove", d), b.detachEvent("onmouseup", e))
                };
                b = b.srcElement || b.currentTarget;
                b.addEventListener ? (window.addEventListener("mousemove", d, !0), window.addEventListener("mouseup", e, !0)) : b.attachEvent && (b.setCapture(), b.attachEvent("onmousemove", d), b.attachEvent("onmouseup", e));
                a.dispatchEvent(RMapEvent.Move)
            }
        }
    };
    this.Div.get().addEventListener ? this.Div.get().addEventListener("mousedown", d) : this.Div.get().attachEvent && this.Div.get().attachEvent("onmousedown", d);
    d = function(b) {
        a.dispatchEvent(RMapEvent.MouseDownEvent, b)
    };
    this.Div.get().addEventListener ? this.Div.get().addEventListener("mousedown", d) : this.Div.get().attachEvent && this.Div.get().attachEvent("onmousedown", d);
    d = function(b) {
        b = RBase.getMouseEvent(b);
        a.dispatchEvent(RMapEvent.MouseMoveEvent, b)
    };
    this.Div.get().addEventListener ? this.Div.get().addEventListener("mousemove", d) : this.Div.get().attachEvent && this.Div.get().attachEvent("onmousemove", d);
    d = function(b) {
        b = RBase.getMouseEvent(b);
        2 == b.button ? a.dispatchEvent(RMapEvent.MouseRightButtonEvent, b) : a.dispatchEvent(RMapEvent.MouseUpEvent, b)
    };
    this.Div.get().addEventListener ? this.Div.get().addEventListener("mouseup", d) : this.Div.get().attachEvent && this.Div.get().attachEvent("onmouseup", d);
    this.Div.get().onmousewheel = function(b) {
        b = RBase.getMouseEvent(b);
        0 < b.wheelDelta ? a.smoothLevel(a.Level + 1) : 0 > b.wheelDelta && a.smoothLevel(a.Level - 1);
        return ! 1
    };
    document.addEventListener && a.Div.get().addEventListener("DOMMouseScroll",
    function(b) {
        b = RBase.getMouseEvent(b);
        0 > b.detail ? a.smoothLevel(a.Level + 1) : a.smoothLevel(a.Level - 1)
    },
    !1);
    d = function(b) {
        if (!a.EventArray[RMapEvent.MouseDoubleClickEvent] || !a.EventArray[RMapEvent.MouseDoubleClickEvent].length) {
            b = RBase.getMouseEvent(b);
            if (!b.srcElement || b.srcElement.parentElement != a.Div.get()) {
                for (var c = 0,
                d = 0,
                e = b.srcElement;
                "map" != e.getAttribute("_rmap"); e = e.parentElement) c += e.offsetLeft,
                d += e.offsetTop;
                b = a.toCoordinates(c + b.offsetX, d + b.offsetY)
            } else b = a.toCoordinates(b.offsetX, b.offsetY);
            a.smoothMove(b.Cx, b.Cy)
        }
    };
    this.Div.get().addEventListener ? this.Div.get().addEventListener("dblclick", d) : this.Div.get().attachEvent && this.Div.get().attachEvent("ondblclick", d);
    this.runClickEvent = function(b) {
        b = RBase.getMouseEvent(b);
        a.dispatchEvent(RMapEvent.MouseClickEvent, b)
    };
    this.runMouseOverEvent = function(b) {
        b = RBase.getMouseEvent(b);
        a.dispatchEvent(RMapEvent.MouseOverEvent, b)
    };
    this.runMouseOutEvent = function(b) {
        b = RBase.getMouseEvent(b);
        a.dispatchEvent(RMapEvent.MouseOutEvent, b)
    };
    this.runMouseDoubleClickEvent = function(b) {
        b = RBase.getMouseEvent(b);
        a.dispatchEvent(RMapEvent.MouseDoubleClickEvent, b)
    };
    this.EventArray = [];
    this.EventArray[RMapEvent.MouseClickEvent] = [];
    this.EventArray[RMapEvent.MouseDoubleClickEvent] = [];
    this.EventArray[RMapEvent.MouseOverEvent] = [];
    this.EventArray[RMapEvent.MouseOutEvent] = [];
    this.EventArray[RMapEvent.MouseDownEvent] = [];
    this.EventArray[RMapEvent.MouseUpEvent] = [];
    this.EventArray[RMapEvent.MouseMoveEvent] = [];
    this.EventArray[RMapEvent.MouseRightButtonEvent] = [];
    this.EventArray[RMapEvent.MapTypeChanged] = [];
    this.EventArray[RMapEvent.SizeChanged] = [];
    this.EventArray[RMapEvent.LevelChange] = [];
    this.EventArray[RMapEvent.LevelChanging] = [];
    this.EventArray[RMapEvent.LevelChanged] = [];
    this.EventArray[RMapEvent.CenterChanged] = [];
    this.EventArray[RMapEvent.Move] = [];
    this.EventArray[RMapEvent.Moving] = [];
    this.EventArray[RMapEvent.Moved] = [];
    this.addEventListener = function(a, b) {
        if (this.EventArray[a]) switch (this.EventArray[a].push(b), a) {
        case RMapEvent.MouseClickEvent:
            this.Div.get().onclick || (this.Div.get().onclick = this.runClickEvent);
            break;
        case RMapEvent.MouseOverEvent:
            this.Div.get().onmouseover || (this.Div.get().onmouseover = this.runMouseOverEvent);
            break;
        case RMapEvent.MouseOutEvent:
            this.Div.get().onmouseout || (this.Div.get().onmouseout = this.runMouseOutEvent);
            break;
        case RMapEvent.MouseDoubleClickEvent:
            this.Div.get().ondblclick || (this.Div.get().ondblclick = this.runMouseDoubleClickEvent)
        }
    };
    this.removeEventListener = function(a, b) {
        if (this.EventArray[a]) {
            for (var c = 0; c < this.EventArray[a].length; c++) this.EventArray[a][c] == b && this.EventArray[a].splice(c, 1);
            if (0 >= this.EventArray[a].length) switch (a) {
            case RMapEvent.MouseClickEvent:
                this.Div.get().onclick = null;
                break;
            case RMapEvent.MouseOverEvent:
                this.Div.get().onmouseover = null;
                break;
            case RMapEvent.MouseOutEvent:
                this.Div.get().onmouseout = null;
                break;
            case RMapEvent.MouseDoubleClickEvent:
                this.Div.get().ondblclick = null
            }
        }
    };
    this.dispatchEvent = function(a, b, c) {
        if (this.EventArray[a] && 0 < this.EventArray[a].length) {
            var d = new RMapEvent(a);
            b ? (b = RBase.getOffsetOnMapDiv(b), d.MouseX = b.offsetMapLeft, d.MouseY = b.offsetMapTop, b = this.toCoordinates(d.MouseX, d.MouseY), d.MouseCx = b.Cx, d.MouseCy = b.Cy) : c && (d.MouseX = c.pageX, d.MouseY = c.pageY, b = this.toCoordinates(d.MouseX, d.MouseY), d.MouseCx = b.Cx, d.MouseCy = b.Cy);
            for (b = 0; b < this.EventArray[a].length; b++) if (this.EventArray[a][b]) this.EventArray[a][b](d)
        }
    };
    this.addTileLayer(this.Level)
};
RMap = function(d, g, e, h, c, k) {
    RBaseMap.call(this, d, g, e, h, c, k);
    var b = this;
    this.GraphicsArr = [];
    this.MarkerArr = [];
    this.graphicsDiv = new RDiv(0, 0, null, null, 200);
    this.graphicsDiv.get().setAttribute("_rmap", "graphics");
    this.markerDiv = new RDiv(0, 0, null, null, 300);
    this.markerDiv.get().setAttribute("_rmap", "marker");
    this.layerDiv = new RDiv(0, 0, null, null, 50);
    this.layerDiv.get().setAttribute("_rmap", "layer");
    this.layerDiv.layers = [];
    this.Div.get().appendChild(this.graphicsDiv.get());
    this.Div.get().appendChild(this.markerDiv.get());
    this.Div.get().appendChild(this.layerDiv.get());
    this.refresh = function() {
        this.refreshAllMarker();
        this.refreshAllGraphics()
    };
    this.addLayer = function(a, b, c) {
        var d = this.Cx,
        e = this.Cy;
        this.setLocation(0, 0);
        this.dispatchEvent(RMapEvent.CenterChanged);
        a = new __RLayer(this, a, b, c);
        this.layerDiv.get().appendChild(a.Div.get());
        a._pindex = this.layerDiv.layers.length + 1;
        this.layerDiv.layers.push(a);
        this.setCenter(d, e);
        this.dispatchEvent(RMapEvent.CenterChanged);
        return a
    };
    this.removeLayer = function(a) {
        a && a._pindex && (this.layerDiv.get().removeChild(a.Div.get()), this.layerDiv.layers.splice[a._pindex - 1], delete a._pindex, a.dispose())
    };
    this.removeAllLayers = function() {
        this.layerDiv.get().innerHTML = "";
        for (var a = 0; a < this.layerDiv.layers.length; a++) this.layerDiv.layers[a]._pindex = void 0,
        this.layerDiv.layers[a].dispose();
        this.layerDiv.layers = []
    };
    this.addMarker = function(a) {
        a.setMaplet(this);
        this.MarkerArr.push(a);
        this.markerDiv.get().appendChild(a.Div.get());
        a.refresh()
    };
    this.addAggregationMarkers = function(a) {
        a.appendToMap(this);
        var b = this;
        a.refresh = function(c, d, e, g) {
            b.removeMarkers(b.pointArr);
            a = new RAggregationMarkers(c, d, e, g);
            return b.addAggregationMarkers(a)
        };
        return a
    };
    this.removeMarkers = function(a) {
        for (var b in a) this.removeMarker(a[b])
    };
    this.setCenterMultiple = function(a) {
        for (var b = 0,
        c = 0,
        d = 0,
        e = 0,
        g = 0; g < a.length; g++) {
            var h = this.toClientPoint(a[g].Cx, a[g].Cy);
            0 == g ? (c = b = h.X, e = d = h.Y) : (b = h.X < b ? h.X: b, c = h.X > c ? h.X: c, d = h.Y < d ? h.Y: d, e = h.Y > e ? h.Y: e)
        }
        g = c;
        h = d;
        a = (b + c) / 2;
        e = (d + e) / 2;
        d = this.toCoordinates(b, d);
        g = this.toCoordinates(g, h);
        e = this.toCoordinates(a, e);
        b != c && (this.setCenter(e.Cx, e.Cy), b = this.toClientPoint(d.Cx, d.Cy), c = this.toClientPoint(g.Cx, g.Cy), this.paramLevel = this.Level, this.subLevelSelf(d, b, e), this.addLevelSelf(d, b, g, c, e), this.setLevel(this.paramLevel));
        this.setCenter(e.Cx, e.Cy)
    };
    this.subLevelSelf = function(a, b, c) {
        if (0 > b.X || 0 > b.Y) this.paramLevel -= 1,
        b = this.toClientPointB(a.Cx, a.Cy, this.paramLevel),
        this.subLevelSelf(a, b, c)
    };
    this.addLevelSelf = function(a, b, c, d, e) {
        0 < b.X && (0 < b.Y && d.X < this.MapWidth && d.Y < this.MapHeight) && (this.paramLevel += 1, b = this.toClientPointB(a.Cx, a.Cy, this.paramLevel), d = this.toClientPointB(c.Cx, c.Cy, this.paramLevel), 0 > b.X || 0 > b.Y ? this.subLevelSelf(a, b, e) : this.addLevelSelf(a, b, c, d, e))
    };
    this.refreshMarker = function(a) {
        a.refresh()
    };
    this.refreshAllMarker = function() {
        for (var a = 0; a < this.MarkerArr.length; a++) this.MarkerArr[a].refresh()
    };
    this.showMarker = function(a) {
        for (var b = 0; b < this.MarkerArr.length; b++) if (this.MarkerArr[b] == a) {
            a.show();
            break
        }
    };
    this.hideMarker = function(a) {
        for (var b = 0; b < this.markerDiv.get().childNodes.length; b++) if (this.markerDiv.get().childNodes[b] == a.Div.get()) {
            a.hide();
            break
        }
    };
    this.showAllMarker = function() {
        for (var a = 0; a < this.MarkerArr.length; a++) this.MarkerArr[a].show()
    };
    this.hideAllMarker = function() {
        for (var a = 0; a < this.MarkerArr.length; a++) this.MarkerArr[a].hide()
    };
    this.removeMarker = function(a) {
        for (var b = 0; b < this.MarkerArr.length; b++) if (this.MarkerArr[b] == a) {
            for (var c = 0; c < this.markerDiv.get().childNodes.length; c++) if (this.markerDiv.get().childNodes[c] == a.Div.get()) {
                this.markerDiv.get().removeChild(a.Div.get());
                break
            }
            this.MarkerArr.splice(b, 1);
            a && a.dispose();
            break
        }
    };
    this.removeAllMarker = function() {
        this.markerDiv.get().innerHTML = "";
        if (null != this.MarkerArr) {
            for (var a = 0; a < this.MarkerArr.length; a++) this.MarkerArr[a].dispose();
            this.MarkerArr.length = 0
        }
    };
    this.addGraphics = function(a) {
        a.setMaplet(this);
        this.GraphicsArr.push(a);
        this.graphicsDiv.get().appendChild(a.Div.get());
        a.refresh()
    };
    this.refreshGraphics = function(a) {
        a.refresh()
    };
    this.refreshAllGraphics = function() {
        for (var a = 0; a < this.GraphicsArr.length; a++) this.GraphicsArr[a].refresh()
    };
    this.drawAllGraphics = function() {
        for (var a = 0; a < b.GraphicsArr.length; a++) b.GraphicsArr[a].draw()
    };
    this.showGraphics = function(a) {
        for (var b = 0; b < this.GraphicsArr.length; b++) if (this.GraphicsArr[b] == a) {
            a.show();
            break
        }
    };
    this.hideGraphics = function(a) {
        for (var b = 0; b < this.graphicsDiv.get().childNodes.length; b++) if (this.graphicsDiv.get().childNodes[b] == a.Div.get()) {
            a.hide();
            break
        }
    };
    this.showAllGraphics = function() {
        for (var a = 0; a < this.GraphicsArr.length; a++) this.GraphicsArr[a].show()
    };
    this.hideAllGraphics = function() {
        for (var a = 0; a < this.GraphicsArr.length; a++) this.GraphicsArr[a].hide()
    };
    this.removeGraphics = function(a) {
        for (var b = 0; b < this.GraphicsArr.length; b++) if (this.GraphicsArr[b] == a) {
            for (var c = 0; c < this.graphicsDiv.get().childNodes.length; c++) if (this.graphicsDiv.get().childNodes[c] == a.Div.get()) {
                this.graphicsDiv.get().removeChild(a.Div.get());
                break
            }
            this.GraphicsArr.splice(b, 1);
            break
        }
    };
    this.removeAllGraphics = function() {
        this.graphicsDiv.get().innerHTML = "";
        if (null != this.GraphicsArr) for (; 0 < this.GraphicsArr.length;) this.GraphicsArr.shift()
    };
    this.runSizeChangedEvent = function(a) {
        b.markerDiv.set(0, 0, null, null, null);
        b.refreshAllMarker();
        b.refreshAllGraphics();
        b.SelectMarker && b.refreshWindowMarkerBox(b.SelectMarker);
        b.SelectTabMarker && b.refreshTabMarkerBox(b.SelectTabMarker)
    };
    this.runLevelChangeEvent = function(a) {
        b.markerDiv.get().style.visibility = "hidden";
        b.graphicsDiv.get().style.visibility = "hidden";
        b.layerDiv.get().style.visibility = "hidden"
    };
    this.runLevelChangedEvent = function(a) {
        b.markerDiv.set(b.Left, b.Top, null, null, null);
        b.refreshAllMarker();
        b.refreshAllGraphics();
        b.markerDiv.get().style.visibility = "visible";
        b.graphicsDiv.get().style.visibility = "visible";
        b.layerDiv.get().style.visibility = "visible";
        b.SelectMarker && b.refreshWindowMarkerBox(b.SelectMarker);
        b.SelectTabMarker && b.refreshTabMarkerBox(b.SelectTabMarker)
    };
    this.runCenterChangedEvent = function(a) {
        b.markerDiv.set(0, 0, null, null, null);
        b.refreshAllMarker();
        b.refreshAllGraphics();
        b.SelectMarker && b.refreshWindowMarkerBox(b.SelectMarker);
        b.SelectTabMarker && b.refreshTabMarkerBox(b.SelectTabMarker)
    };
    this.runMoveEvent = function(a) {
        b.graphicsDiv.get().addEventListener || (b.graphicsDiv.get().style.visibility = "hidden")
    };
    this.runMovingEvent = function(a) {
        b.markerDiv.set(b.Left, b.Top, null, null, null);
        b.graphicsDiv.get().addEventListener && b.drawAllGraphics()
    };
    this.runMovedEvent = function(a) {
        b.markerDiv.set(b.Left, b.Top, null, null, null);
        b.drawAllGraphics();
        b.graphicsDiv.get().addEventListener || (b.graphicsDiv.get().style.visibility = "visible")
    };
    this.addEventListener(RMapEvent.SizeChanged, this.runSizeChangedEvent);
    this.addEventListener(RMapEvent.LevelChange, this.runLevelChangeEvent);
    this.addEventListener(RMapEvent.LevelChanged, this.runLevelChangedEvent);
    this.addEventListener(RMapEvent.CenterChanged, this.runCenterChangedEvent);
    this.addEventListener(RMapEvent.Move, this.runMoveEvent);
    this.addEventListener(RMapEvent.Moved, this.runMovedEvent);
    this.addEventListener(RMapEvent.Moving, this.runMovingEvent);
    this.SelectTabMarker = null;
    this.hideTabMarkerBox = function(a) { (this.SelectTabMarker == a || !a) && this.TabMarkerBox && this.TabMarkerBox.hide()
    };
    this.showTabMarkerBox = function(a) {
        this.SelectTabMarker && (this.SelectTabMarker.hideLabel(), this.SelectTabMarker.Div.get().style.zIndex = 0);
        a.Div.get().style.zIndex = 100;
        this.SelectTabMarker = a;
        this.refreshTabMarkerBox(a);
        this.TabMarkerBox.show()
    };
    this.refreshTabMarkerBox = function(a) {
        this.TabMarkerBox || (this.TabMarkerBox = new RDiv(null, null, null, null, 1E4), this.TabMarkerBox.get().oncontextmenu = function(a) {
            return ! 1
        },
        this.TabMarkerBox.get().onmousedown = function(a) {
            RBase.stopPropagation(a)
        },
        this.TabMarkerBox.get().onmouseup = function(a) {
            RBase.stopPropagation(a)
        },
        this.TabMarkerBox.get().onmousemove = function(a) {
            RBase.stopPropagation(a)
        },
        this.TabMarkerBox.get().onmousewheel = function(a) {
            RBase.stopPropagation(a)
        },
        this.TabMarkerBox.get().onclick = function(a) {
            RBase.stopPropagation(a)
        },
        this.TabMarkerBox.get().ondblclick = function(a) {
            RBase.stopPropagation(a)
        },
        this.markerDiv.get().appendChild(this.TabMarkerBox.get()));
        this.TabMarkerBox.set(a.Left + a.TagObject.detaX - a.DetaX, a.Top + a.TagObject.detaY, a.TagObject.width, a.TagObject.height, null);
        this.TabMarkerBox.get().innerHTML = a.TagObject.html
    };
    this.SelectMarker = null;
    this.hideWindowMarkerBox = function(a) {
        if (this.SelectMarker == a || !a) this.WindowMarkerBox.hide(),
        this.ShadowDiv.hide()
    };
    this.showWindowMarkerBox = function(a) {
        this.SelectMarker && (this.SelectMarker.hideLabel(), this.SelectMarker.Div.get().style.zIndex = 0);
        a.Div.get().style.zIndex = 100;
        this.SelectMarker = a;
        this.refreshWindowMarkerBox(a);
        this.WindowMarkerBox.show();
        this.ShadowDiv.show()
    };
    this.refreshWindowMarkerBox = function(a) {
        this.WindowMarkerBox || (this.WindowMarkerBox = new RDiv(null, null, null, null, 1E4), this.WindowMarkerBox.get().oncontextmenu = function(a) {
            return ! 1
        },
        this.WindowMarkerBox.get().onmousedown = function(a) {
            RBase.stopPropagation(a)
        },
        this.WindowMarkerBox.get().onmouseup = function(a) {
            RBase.stopPropagation(a)
        },
        this.WindowMarkerBox.get().onmousemove = function(a) {
            RBase.stopPropagation(a)
        },
        this.WindowMarkerBox.get().onmousewheel = function(a) {
            RBase.stopPropagation(a)
        },
        this.WindowMarkerBox.get().onclick = function(a) {
            RBase.stopPropagation(a)
        },
        this.WindowMarkerBox.get().ondblclick = function(a) {
            RBase.stopPropagation(a)
        },
        this.WindowMarkerBox.ContentDiv = new RDiv(0, 0, null, null, 0), this.WindowMarkerBox.ContentDiv.get().style.border = "1px solid #999999", this.WindowMarkerBox.ContentDiv.get().style.background = "#FFFFFF", this.WindowMarkerBox.BottomDiv = new RDiv(null, null, 51, 31, 0), this.WindowMarkerBox.BottomDiv.get().style.background = "url(" + RMapConstant.JsServer + "image/marker_bottom.png)", window.XMLHttpRequest || RBase.setIe6BackgroundPng(this.WindowMarkerBox.BottomDiv), this.WindowMarkerBox.get().appendChild(this.WindowMarkerBox.ContentDiv.get()), this.WindowMarkerBox.get().appendChild(this.WindowMarkerBox.BottomDiv.get()), this.markerDiv.get().appendChild(this.WindowMarkerBox.get()), this.ShadowDiv || (this.ShadowDiv = new RDiv(null, null, null, null, -1), this.ShadowDiv.get().oncontextmenu = function(a) {
            return ! 1
        },
        this.markerDiv.get().appendChild(this.ShadowDiv.get())));
        this.WindowMarkerBox.set(a.Left - a.TagObject.width / 2 + 35, a.Top - a.TagObject.height + a.DetaY, null, null, null);
        this.WindowMarkerBox.ContentDiv.set(null, null, a.TagObject.width, a.TagObject.height, null);
        this.WindowMarkerBox.ContentDiv.get().innerHTML = a.TagObject.html;
        this.WindowMarkerBox.BottomDiv.set((a.TagObject.width - 51) / 2, a.TagObject.height + 1, null, null, null);
        this.refreshShadow(parseInt(this.WindowMarkerBox.get().style.left) - 30, parseInt(this.WindowMarkerBox.get().style.top) + a.TagObject.height / 2 + 10, a.TagObject.width, a.TagObject.height)
    };
    this.refreshShadow = function(a, b, c, d) {
        if (this.ShadowDiv) {
            if (a || 0 == a) this.ShadowDiv.get().style.left = a + "px";
            if (b || 0 == b) this.ShadowDiv.get().style.top = b + "px";
            if (c && d) {
                200 > c ? c = 200 : 650 < c && (c = 650);
                100 > d ? d = 100 : 600 < d && (d = 600);
                a = parseInt(d / 2) + 50;
                var e = c + a + 20;
                c = a - 30 - 60;
                a = 31 + c;
                b = a + 70;
                d = e - b - 70;
                var g = b + d,
                h = 70 + c,
                k = -323 + c,
                l = a - c,
                m = 70 + c,
                p = l + m,
                e = e - p - h,
                q = -1033 + c,
                s = p + e,
                t = 30 + c,
                u = parseInt((d - 140 + 52) / 2),
                v = u + 10,
                u = u - 10,
                w = 50 + v,
                x = 140 + w;
                c = [{
                    left: a,
                    top: 0,
                    width: 70,
                    height: 30,
                    imgLeft: -323,
                    imgTop: 0
                },
                {
                    left: b,
                    top: 0,
                    width: d,
                    height: 30,
                    imgLeft: -393,
                    imgTop: 0
                },
                {
                    left: g,
                    top: 0,
                    width: 70,
                    height: 30,
                    imgLeft: -1033,
                    imgTop: 0
                },
                {
                    left: l,
                    top: 30,
                    width: m,
                    height: c,
                    imgLeft: k,
                    imgTop: -30
                },
                {
                    left: p,
                    top: 30,
                    width: e,
                    height: c,
                    imgLeft: -360,
                    imgTop: -30
                },
                {
                    left: s,
                    top: 30,
                    width: h,
                    height: c,
                    imgLeft: q,
                    imgTop: -30
                },
                {
                    left: 0,
                    top: t,
                    width: 50,
                    height: 60,
                    imgLeft: -14,
                    imgTop: -310
                },
                {
                    left: 50,
                    top: t,
                    width: v,
                    height: 60,
                    imgLeft: -255,
                    imgTop: -310
                },
                {
                    left: w,
                    top: t,
                    width: 140,
                    height: 60,
                    imgLeft: -465,
                    imgTop: -310
                },
                {
                    left: x,
                    top: t,
                    width: u,
                    height: 60,
                    imgLeft: -255,
                    imgTop: -310
                },
                {
                    left: u + x,
                    top: t,
                    width: 70,
                    height: 60,
                    imgLeft: -754,
                    imgTop: -310
                }];
                a = "";
                if (window.XMLHttpRequest) for (b = 0; b < c.length; b++) a += "<div style='left: " + c[b].left + "px; top: " + c[b].top + "px; width: " + c[b].width + "px; height: " + c[b].height + "px; position: absolute; overflow: hidden; z-index: 1;'><img style='width:1144px;height:370px;position:absolute;left:" + c[b].imgLeft + "px;top:" + c[b].imgTop + "px;' src='" + RMapConstant.JsServer + "image/marker_shadow.png'  onmousedown='return false;'></div>";
                else for (b = 0; b < c.length; b++) a += "<div style='left: " + c[b].left + "px; top: " + c[b].top + "px; width: " + c[b].width + "px; height: " + c[b].height + "px; position: absolute; overflow: hidden; z-index: 1;'><span style='width:1144px;height:370px;left:" + c[b].imgLeft + "px;top:" + c[b].imgTop + "px;position:absolute;filter:progid:DXImageTransform.Microsoft.AlphaImageLoader (src=" + RMapConstant.JsServer + "image/marker_shadow.png, sizingMethod=scale);' onmousedown='return false;'></span></div>";
                this.ShadowDiv.get().innerHTML = a
            }
        }
    };
    this.Copyright = new RDiv(null, null, null, null, 1E4);
    this.Copyright.get().setAttribute("_rmap", "copyright");
    this.Copyright.get().style.left = "8px";
    this.Copyright.get().style.bottom = "5px";
    this.Copyright.get().innerHTML = RMapConstant.Copyright;
    this.Div.get().appendChild(this.Copyright.get())
};
RMapEvent = function(d) {
    this.Name = d;
    this.MouseX;
    this.MouseY;
    this.MouseCx;
    this.MouseCy
};
RMapEvent.MouseClickEvent = "MapMouseClickEvent";
RMapEvent.MouseDoubleClickEvent = "MapMouseDoubleClickEvent";
RMapEvent.MouseOverEvent = "MapMouseOverEvent";
RMapEvent.MouseOutEvent = "MapMouseOutEvent";
RMapEvent.MouseDownEvent = "MapMouseDownEvent";
RMapEvent.MouseUpEvent = "MapMouseUpEvent";
RMapEvent.MouseMoveEvent = "MapMouseMoveEvent";
RMapEvent.MouseRightButtonEvent = "MapMouseRightButtonEvent";
RMapEvent.MapTypeChanged = "MapTypeChanged";
RMapEvent.SizeChanged = "MapSizeChanged";
RMapEvent.LevelChange = "MapLevelChange";
RMapEvent.LevelChanging = "MapLevelChanging";
RMapEvent.LevelChanged = "MapLevelChanged";
RMapEvent.CenterChanged = "MapCenterChanged";
RMapEvent.Move = "MapMove";
RMapEvent.Moving = "MapMoving";
RMapEvent.Moved = "MapMoved";
RMarkerEvent = function(d) {
    this.Name = d;
    this.Cx;
    this.Cy;
    this.Hook
};
RMarkerEvent.MouseClickEvent = "MarkerMouseClickEvent";
RMarkerEvent.MouseDoubleClickEvent = "MarkerMouseDoubleClickEvent";
RMarkerEvent.MouseOverEvent = "MarkerMouseOverEvent";
RMarkerEvent.MouseOutEvent = "MarkerMouseOutEvent";
RGraphicsEvent = function(d) {
    this.Name = d;
    this.Cx;
    this.Cy;
    this.Hook
};
RGraphicsEvent.MouseClickEvent = "GraphicsMouseClickEvent";
RGraphicsEvent.MouseDoubleClickEvent = "GraphicsMouseDoubleClickEvent";
RGraphicsEvent.MouseOverEvent = "GraphicsMouseOverEvent";
RGraphicsEvent.MouseOutEvent = "GraphicsMouseOutEvent";
RToolEvent = function(d) {
    this.Name = d
};
RToolEvent.OpenTool = "OpenTool";
RToolEvent.CloseTool = "CloseTool";
RToolEvent.ClearGraphics = "ClearGraphics";
RToolEvent.DisposeTool = "DisposeTool";
RGeometry = {
    DetaValue: 2E-7,
    FC: function(d, g) {
        return d - g < RGeometry.DetaValue && d - g > -RGeometry.DetaValue ? !0 : !1
    },
    isPointOnLine: function(d, g, e) {
        return ! d || (!g || !e) || !1 == RGeometry.FC((e.Cy - d.Cy) * (g.Cx - d.Cx) - (g.Cy - d.Cy) * (e.Cx - d.Cx), 0) ? !1 : Math.min(d.Cx, g.Cx) <= e.Cx && e.Cx <= Math.max(d.Cx, g.Cx) && Math.min(d.Cy, g.Cy) <= e.Cy && e.Cy <= Math.max(d.Cy, g.Cy) ? !0 : !1
    },
    isPointOnPath: function(d, g) {
        if (!d || 3 > d.length || !g) return ! 1;
        for (var e = null,
        h = null,
        e = d[0], c = 1; c < d.length; c++) {
            h = d[c];
            if (RGeometry.isPointOnLine(e, h, g)) return ! 0;
            e = h
        }
        return ! 1
    },
    isPointInPolygon: function(d, g) {
        if (!d || 3 > d.length || !g) return - 1;
        for (var e = 0,
        h = 0,
        c = null,
        k = null,
        c = d[d.length - 1], b = 0; b < d.length; b++) {
            k = d[b];
            if (RGeometry.isPointOnLine(c, k, g)) return 2;
            g.Cx > Math.min(c.Cx, k.Cx) && (g.Cx <= Math.max(c.Cx, k.Cx) && g.Cy <= Math.max(c.Cy, k.Cy) && c.Cx != k.Cx) && (h = (g.Cx - c.Cx) * (k.Cy - c.Cy) / (k.Cx - c.Cx) + c.Cy, (c.Cy == k.Cy || g.Cy <= h) && e++);
            c = k
        }
        return 0 == e % 2 ? 0 : 1
    },
    circleDetaValue: 1E-5,
    isPointInCircle: function(d, g, e) {
        g = Math.sqrt(Math.pow(Math.abs(g.Cx - d.Cx), 2) + Math.pow(Math.abs(g.Cy - d.Cy), 2));
        d = Math.sqrt(Math.pow(Math.abs(e.Cx - d.Cx), 2) + Math.pow(Math.abs(e.Cy - d.Cy), 2));
        return d - g <= RGeometry.circleDetaValue && d - g >= -RGeometry.circleDetaValue ? 1 : d - g < -RGeometry.circleDetaValue ? 2 : 0
    }
};
RToolManager = function(d) {
    var g = this,
    e = 200,
    h = 220 + e,
    c = 210 + e,
    k = 210 + e,
    b = 250 + e,
    a = 260 + e,
    f = 230 + e,
    e = 1 + e;
    this.Maplet = d;
    this.Div = this.Maplet.Div;
    this.CrossImg;
    this.addCross = function(a, b, c) {
        this.CrossImg = createRImage(this.Maplet.MapWidth / 2 - b, this.Maplet.MapHeight / 2 - c, null, null, h, a);
        this.CrossImg.detaX = b;
        this.CrossImg.detaY = c;
        this.CrossImg.draggable = !1;
        this.Div.get().appendChild(this.CrossImg)
    };
    this.Scale;
    this.addScale = function(a, b, d, f) {
        this.Scale = new RDiv(a, b, null, 18, c);
        if (d || 0 == d) this.Scale.get().style.left = null,
        this.Scale.get().style.right = d + "px";
        if (f || 0 == f) this.Scale.get().style.top = null,
        this.Scale.get().style.bottom = f + "px";
        this.Scale.LeftDiv = new RDiv(0, 0, 1, 18, null);
        this.Scale.LeftDiv.get().style.background = "url(" + RMapConstant.JsServer + "image/tool/scale_hd.gif) no-repeat";
        this.Scale.RightDiv = new RDiv(0, 0, 1, 18, null);
        this.Scale.RightDiv.get().style.background = "url(" + RMapConstant.JsServer + "image/tool/scale_hd.gif) no-repeat";
        this.Scale.MiddleDiv = new RDiv(1, 0, 0, 18, null);
        this.Scale.MiddleDiv.get().style.background = "url(" + RMapConstant.JsServer + "image/tool/scale_bg.gif) no-repeat";
        this.Scale.MiddleDiv.get().style.fontFamily = "\u5fae\u8f6f\u96c5\u9ed1,\u5b8b\u4f53,arial,sans-serif";
        this.Scale.MiddleDiv.get().style.fontSize = "10px";
        this.Scale.MiddleDiv.get().style.textAlign = "center";
        this.Scale.get().appendChild(this.Scale.LeftDiv.get());
        this.Scale.get().appendChild(this.Scale.RightDiv.get());
        this.Scale.get().appendChild(this.Scale.MiddleDiv.get());
        this.Div.get().appendChild(this.Scale.get());
        this.refreshScale(this.Maplet.Level)
    };
    this.refreshScale = function(a) {
        var b = "",
        c = [1E3, 500, 200, 100, 50, 20, 10, 5, 2, 1],
        d = Math.round(10980171 * (RMapConstant.ScaleFactors[a] / RMapConstant.MapPicWidth));
        a = 1E3;
        d < a ? a = 1 : d /= a;
        for (var f = b = 0; f < c.length; f++) if (d >= c[f]) {
            b = c[f];
            break
        }
        c = 100 * (b / d);
        b += 1 == a ? "\u7c73": "\u516c\u91cc";
        this.Scale.MiddleDiv.set(null, null, c - 2, null, null);
        this.Scale.RightDiv.set(c - 1, null, null, null, null);
        this.Scale.MiddleDiv.get().innerHTML = b
    };
    this.Copyright;
    this.addCopyright = function(a, b, c, d, f) {
        if (f) {
            this.Copyright = new RDiv(a, b, null, null, k);
            if (c || 0 == c) this.Copyright.get().style.left = null,
            this.Copyright.get().style.right = c + "px";
            if (d || 0 == d) this.Copyright.get().style.top = null,
            this.Copyright.get().style.bottom = d + "px";
            this.Div.get().appendChild(this.Copyright.get());
            this.Maplet.Div.get().removeChild(this.Maplet.Copyright.get());
            this.Copyright.get().innerHTML = f
        } else this.Copyright = this.Maplet.Copyright
    };
    this.ZoomDirectBar;
    this.addZoomDirectBar = function(b, c, d, f) {
        this.ZoomDirectBar = new RZoomDirectBar(this.Maplet, a);
        this.Div.get().appendChild(this.ZoomDirectBar.Div.get());
        this.ZoomDirectBar.Div.set(b, c, null, null, null);
        if (d || 0 == d) this.ZoomDirectBar.Div.get().style.left = null,
        this.ZoomDirectBar.Div.get().style.right = d + "px";
        if (f || 0 == f) this.Copyright.get().style.top = null,
        this.Copyright.get().style.bottom = f + "px";
        this.ZoomDirectBar.refreshZoom()
    };
    this.EagleMap;
    this.addEagleMap = function(a, c, d, f) {
        this.EagleMap = new REagleMap(this.Maplet, a, c, b, f);
        this.Div.get().appendChild(this.EagleMap.OutDiv.get());
        d ? this.EagleMap.open() : this.EagleMap.close();
        this.EagleMap.runLevelChangedEvent()
    };
    this.toolDiv = null;
    this.toolArr = [];
    this.addTool = function(a) {
        this.toolDiv || (this.toolDiv = new RDiv(0, 0, null, null, e), this.Maplet.Div.get().appendChild(this.toolDiv.get()), this.toolDiv.get().setAttribute("_rmap", "tool"));
        this.toolArr.push(a);
        this.toolDiv.get().appendChild(a.Div.get())
    };
    this.removeTool = function(a) {
        for (var b = 0; b < this.toolArr.length; b++) if (a == this.toolArr[b]) {
            this.toolArr.splice(b, 1);
            break
        }
        this.toolDiv.get().removeChild(a.Div.get())
    };
    this.RightMenu;
    this.addRightMenu = function(a, b, c) {
        this.RightMenu || (this.RightMenu = new RRightMenu(a, b, c, f), this.RightMenu.close(), this.Div.get().appendChild(this.RightMenu.Div.get()), this.Maplet.addEventListener(RMapEvent.MouseRightButtonEvent, this.runRightButtonEvent), this.Maplet.addEventListener(RMapEvent.MouseDownEvent, this.closeRightMenu))
    };
    this.removeRightMenu = function() {
        this.RightMenu && (this.Div.get().removeChild(this.RightMenu.Div.get()), this.RightMenu.dispose(), this.RightMenu = null, this.Maplet.removeEventListener(RMapEvent.MouseRightButtonEvent, this.runRightButtonEvent), this.Maplet.removeEventListener(RMapEvent.MouseDownEvent, this.closeRightMenu))
    };
    this.openRightMenu = function() {
        g.RightMenu && g.RightMenu.open()
    };
    this.closeRightMenu = function() {
        g.RightMenu && g.RightMenu.close()
    };
    this.runRightButtonEvent = function(a) {
        if (g.RightMenu) {
            var b = a.MouseX;
            a = a.MouseY;
            b > g.Maplet.MapWidth - g.RightMenu.Width && (b -= g.RightMenu.Width);
            a > g.Maplet.MapHeight - g.RightMenu.Height && (a -= g.RightMenu.Height);
            g.RightMenu.Div.set(b, a);
            g.RightMenu.open()
        }
    };
    this.refreshAllTool = function() {
        if (g.toolDiv) for (var a = 0; a < g.toolArr.length; a++) g.toolArr[a].refresh()
    };
    this.runSizeChangedEvent = function(a) {
        g.Div.set(null, null, g.Maplet.MapWidth, g.Maplet.MapHeight, null);
        g.CrossImg && g.CrossImg.set(g.Maplet.MapWidth / 2 - g.CrossImg.detaX, g.Maplet.MapHeight / 2 - g.CrossImg.detaY, null, null, null, null);
        g.refreshAllTool()
    };
    this.runLevelChangeEvent = function(a) {
        g.toolDiv && g.toolDiv.hide()
    };
    this.runLevelChangedEvent = function(a) {
        g.Scale && g.refreshScale(g.Maplet.Level);
        g.toolDiv && (g.toolDiv.show(), g.refreshAllTool())
    };
    this.runCenterChangedEvent = function(a) {
        g.refreshAllTool()
    };
    this.runMovedEvent = function(a) {
        g.refreshAllTool()
    };
    this.runMovingEvent = function(a) {
        g.refreshAllTool()
    };
    this.Maplet.addEventListener(RMapEvent.SizeChanged, this.runSizeChangedEvent);
    this.Maplet.addEventListener(RMapEvent.LevelChange, this.runLevelChangeEvent);
    this.Maplet.addEventListener(RMapEvent.LevelChanged, this.runLevelChangedEvent);
    this.Maplet.addEventListener(RMapEvent.CenterChanged, this.runCenterChangedEvent);
    this.Maplet.addEventListener(RMapEvent.Moved, this.runMovedEvent);
    this.Maplet.addEventListener(RMapEvent.Moving, this.runMovingEvent)
};
var REagleMap = function(d, g, e, h, c) {
    var k = this;
    this.Maplet = d;
    this.DivWidth = g;
    this.DivHeight = e;
    this.OutDiv = new RDiv(null, null, g, e, h);
    this.OutDiv.get().style.cursor = "default";
    this.OutDiv.get().style.border = "solid 1px #999999";
    this.OutDiv.get().style.backgroundColor = "#FFFFFF";
    this.OutDiv.get().onmousedown = function(b) {
        RBase.stopPropagation(b)
    };
    this.OutDiv.get().onmouseup = function(b) {
        RBase.stopPropagation(b)
    };
    this.OutDiv.get().onmousemove = function(b) {
        RBase.stopPropagation(b)
    };
    this.OutDiv.get().onmousewheel = function(b) {
        RBase.stopPropagation(b)
    };
    this.OutDiv.get().onclick = function(b) {
        RBase.stopPropagation(b)
    };
    this.OutDiv.get().ondblclick = function(b) {
        RBase.stopPropagation(b)
    };
    d = this.Maplet.Level - 4;
    0 > d && (d = 0);
    c || (c = RMapType.Typical);
    RBaseMap.call(this, null, this.Maplet.Cx, this.Maplet.Cy, d, g - 8, e - 8, c);
    this.Div.get().style.border = "solid 1px #999999";
    this.Div.get().style.left = "3px";
    this.Div.get().style.top = "3px";
    this.Div.get().onmousewheel = null;
    this.OutDiv.get().appendChild(this.Div.get());
    this.show();
    this.floatDiv = new RDiv(null, null, g, e, 1E3);
    this.floatDiv.get().style.cssText += "opacity:0.5; filter:alpha(opacity=50);";
    this.floatDiv.get().style.border = "solid 1px #0000FF";
    this.floatDiv.get().style.background = "url(" + RMapConstant.JsServer + "image/tool/eagle_float_bg.gif)";
    this.Div.get().appendChild(this.floatDiv.get());
    this.refreshFloatDiv = function() {
        var b = this.Maplet.getBounds(),
        a = RMapConstant.MapPicWidth / RMapConstant.ScaleFactors[this.Level] * (b.MaxCoordinates.Cx - b.MinCoordinates.Cx),
        b = RMapConstant.MapPicWidth / RMapConstant.ScaleFactors[this.Level] * (b.MaxCoordinates.Cy - b.MinCoordinates.Cy);
        this.floatDiv.set((this.MapWidth - a) / 2, (this.MapHeight - b) / 2, a, b, null)
    };
    this.refreshFloatDiv();
    this.closeImg = createRImage(null, null, 16, 16, 2E3, RMapConstant.JsServer + "image/tool/eagle_close.gif");
    this.closeImg.style.left = null;
    this.closeImg.style.top = null;
    this.closeImg.style.right = "5px";
    this.closeImg.style.bottom = "5px";
    this.closeImg.style.cursor = "pointer";
    this.OutDiv.get().appendChild(this.closeImg);
    this.closeImg.onmousedown = function(b) {
        k.close();
        RBase.stopPropagation(b)
    };
    this.closeImg.style.display = "none";
    this.openImg = createRImage( - 1, -1, 16, 16, 2E3, RMapConstant.JsServer + "image/tool/eagle_open.gif");
    this.openImg.style.cursor = "pointer";
    this.OutDiv.get().appendChild(this.openImg);
    this.openImg.onmousedown = function(b) {
        k.open();
        RBase.stopPropagation(b)
    };
    this.open = function() {
        this.openImg.style.display = "none";
        this.closeImg.style.display = "block";
        this.OutDiv.get().style.left = null;
        this.OutDiv.get().style.top = null;
        this.OutDiv.get().style.right = "-7px";
        this.OutDiv.get().style.bottom = "-7px"
    };
    this.close = function() {
        this.closeImg.style.display = "none";
        this.openImg.style.display = "block";
        this.OutDiv.get().style.left = null;
        this.OutDiv.get().style.top = null;
        this.OutDiv.get().style.right = 13 - this.DivWidth + "px";
        this.OutDiv.get().style.bottom = 13 - this.DivHeight + "px"
    };
    this.show = function() {
        this.OutDiv.get().style.display = "block"
    };
    this.hide = function() {
        this.OutDiv.get().style.display = "none"
    };
    this.runSizeChangedEvent = function(b) {
        k.refreshFloatDiv()
    };
    this.runLevelChangedEvent = function(b) {
        k.Maplet.Level - 4 >= RMapConstant.MapMinLevel ? (k.show(), k.setLevel(k.Maplet.Level - 4)) : k.hide();
        k.refreshFloatDiv()
    };
    this.runCenterChangedEvent = function(b) { (k.Cx != k.Maplet.Cx || k.Cy != k.Maplet.Cy) && k.setCenter(k.Maplet.Cx, k.Maplet.Cy)
    };
    this.runMovedEvent = function(b) { (k.Cx != k.Maplet.Cx || k.Cy != k.Maplet.Cy) && k.move(k.Maplet.Cx, k.Maplet.Cy)
    };
    this.Maplet.addEventListener(RMapEvent.SizeChanged, this.runSizeChangedEvent);
    this.Maplet.addEventListener(RMapEvent.LevelChanged, this.runLevelChangedEvent);
    this.Maplet.addEventListener(RMapEvent.CenterChanged, this.runCenterChangedEvent);
    this.Maplet.addEventListener(RMapEvent.Moved, this.runMovedEvent);
    this.mMovedEvent = function(b) { (k.Cx != k.Maplet.Cx || k.Cy != k.Maplet.Cy) && k.Maplet.move(k.Cx, k.Cy)
    };
    this.addEventListener(RMapEvent.Moved, this.mMovedEvent)
},
RZoomDirectBar = function(d, g) {
    var e = this;
    this.Maplet = d;
    this.MapLevelCount = RMapConstant.MapMaxLevel - RMapConstant.MapMinLevel + 1;
    this.StripDivHeight = 7 * (this.MapLevelCount + 1);
    this.Div = new RDiv(null, null, null, null, g);
    this.Div.get().style.cursor = "default";
    this.Div.get().onmousedown = function(d) {
        RBase.stopPropagation(d)
    };
    this.Div.get().onmouseup = function(d) {
        RBase.stopPropagation(d)
    };
    this.Div.get().onmousemove = function(d) {
        RBase.stopPropagation(d)
    };
    this.Div.get().onmousewheel = function(d) {
        RBase.stopPropagation(d)
    };
    this.Div.get().onclick = function(d) {
        RBase.stopPropagation(d)
    };
    this.Div.get().ondblclick = function(d) {
        RBase.stopPropagation(d)
    };
    this.DirectDiv = new RDiv(0, 0, 50, 50, null);
    this.DirectDiv.get().style.background = "url(" + RMapConstant.JsServer + "image/tool/bar_head.png)";
    this.Div.get().appendChild(this.DirectDiv.get());
    this.EastDiv = new RDiv(33, 16, 17, 17, null);
    this.EastDiv.get().style.cursor = "pointer";
    this.SouthDiv = new RDiv(16, 33, 17, 17, null);
    this.SouthDiv.get().style.cursor = "pointer";
    this.WestDiv = new RDiv(0, 16, 17, 17, null);
    this.WestDiv.get().style.cursor = "pointer";
    this.NorthDiv = new RDiv(16, 0, 17, 17, null);
    this.NorthDiv.get().style.cursor = "pointer";
    this.Div.get().appendChild(this.EastDiv.get());
    this.Div.get().appendChild(this.SouthDiv.get());
    this.Div.get().appendChild(this.WestDiv.get());
    this.Div.get().appendChild(this.NorthDiv.get());
    this.EastDiv.get().onclick = function(d) {
        d = e.Maplet.Cx + Math.round(e.Maplet.MapWidth / 3) * (RMapConstant.ScaleFactors[e.Maplet.Level] / RMapConstant.MapPicWidth);
        e.Maplet.smoothMove(d, e.Maplet.Cy)
    };
    this.WestDiv.get().onclick = function(d) {
        d = e.Maplet.Cx - Math.round(e.Maplet.MapWidth / 3) * (RMapConstant.ScaleFactors[e.Maplet.Level] / RMapConstant.MapPicWidth);
        e.Maplet.smoothMove(d, e.Maplet.Cy)
    };
    this.SouthDiv.get().onclick = function(d) {
        d = e.Maplet.Cy - Math.round(e.Maplet.MapHeight / 3) * (RMapConstant.ScaleFactors[e.Maplet.Level] / RMapConstant.MapPicHeight);
        e.Maplet.smoothMove(e.Maplet.Cx, d)
    };
    this.NorthDiv.get().onclick = function(d) {
        d = e.Maplet.Cy + Math.round(e.Maplet.MapHeight / 3) * (RMapConstant.ScaleFactors[e.Maplet.Level] / RMapConstant.MapPicHeight);
        e.Maplet.smoothMove(e.Maplet.Cx, d)
    };
    this.ZoomDiv = new RDiv(15, 52, null, null, null);
    this.Div.get().appendChild(this.ZoomDiv.get());
    this.ZoominDiv = new RDiv(0, 0, 21, 21, 1);
    this.ZoominDiv.get().style.background = "url(" + RMapConstant.JsServer + "image/tool/bar_zoomin.png)";
    this.ZoominDiv.get().style.cursor = "pointer";
    this.ZoomoutDiv = new RDiv(0, this.StripDivHeight + 16, 21, 21, 1);
    this.ZoomoutDiv.get().style.background = "url(" + RMapConstant.JsServer + "image/tool/bar_zoomout.png)";
    this.ZoomoutDiv.get().style.cursor = "pointer";
    this.SliderDiv = new RDiv(0, 18, 21, 14, 2);
    this.SliderDiv.get().style.background = "url(" + RMapConstant.JsServer + "image/tool/bar_slider.png)";
    this.SliderDiv.get().style.cursor = "move";
    this.StripDiv = new RDiv(7, 19, 7, this.StripDivHeight, 0);
    this.StripDiv.get().style.cursor = "pointer";
    this.StripDiv.get().style.background = "url(" + RMapConstant.JsServer + "image/tool/bar_strip_bg.png)";
    this.StripDiv2 = new RDiv(7, 20, 7, this.StripDivHeight - 1, 0);
    this.StripDiv2.get().style.cursor = "pointer";
    this.StripDiv2.get().style.background = "url(" + RMapConstant.JsServer + "image/tool/bar_strip_bg2.png)";
    this.ZoomDiv.get().appendChild(this.ZoominDiv.get());
    this.ZoomDiv.get().appendChild(this.ZoomoutDiv.get());
    this.ZoomDiv.get().appendChild(this.SliderDiv.get());
    this.ZoomDiv.get().appendChild(this.StripDiv.get());
    this.ZoomDiv.get().appendChild(this.StripDiv2.get());
    window.XMLHttpRequest || (RBase.setIe6BackgroundPng(this.DirectDiv), RBase.setIe6BackgroundPng(this.ZoominDiv), RBase.setIe6BackgroundPng(this.ZoomoutDiv), RBase.setIe6BackgroundPng(this.SliderDiv), RBase.setIe6BackgroundPng(this.StripDiv), RBase.setIe6BackgroundPng(this.StripDiv2));
    this.ZoominDiv.get().onclick = function(d) {
        e.Maplet.smoothLevel(e.Maplet.Level + 1)
    };
    this.ZoomoutDiv.get().onclick = function(d) {
        e.Maplet.smoothLevel(e.Maplet.Level - 1)
    };
    this.StripDiv.get().onclick = function(d) {
        d = RBase.getOffset(d);
        d = RMapConstant.MapMaxLevel - Math.floor((d.offsetY - 3) / 7);
        0 > d && (d = 0);
        e.Maplet.smoothLevel(d)
    };
    this.StripDiv2.get().onclick = function(d) {
        d = RBase.getOffset(d);
        d = e.Maplet.Level - Math.floor((d.offsetY + 1 - 3) / 7);
        0 > d && (d = 0);
        e.Maplet.smoothLevel(d)
    };
    this.oldClientY = this.oldTop = 0;
    this.SliderDiv.get().onmousedown = function(d) {
        d = RBase.getMouseEvent(d);
        window.getSelection ? window.getSelection().removeAllRanges() : document.selection.empty();
        e.oldTop = parseInt(e.SliderDiv.get().style.top);
        e.oldClientY = d.clientY;
        e.SliderDiv.get().onmousemove = function(c) {
            c = RBase.getMouseEvent(c);
            c = e.oldTop + c.clientY - e.oldClientY;
            18 > c ? c = 18 : c > 7 * (e.MapLevelCount - 1) + 18 && (c = 7 * (e.MapLevelCount - 1) + 18);
            e.SliderDiv.set(null, c);
            e.StripDiv2.set(null, c + 2, null, e.StripDivHeight - c + 19, null)
        };
        e.SliderDiv.get().onmouseup = function(c) {
            c = RBase.getOffset(c);
            c = e.oldTop + c.clientY - e.oldClientY;
            18 > c ? c = 18 : c > 7 * (e.MapLevelCount - 1) + 18 && (c = 7 * (e.MapLevelCount - 1) + 18);
            e.SliderDiv.set(null, c);
            e.StripDiv2.set(null, c + 2, null, e.StripDivHeight - c + 19, null);
            c = RMapConstant.MapMaxLevel - Math.floor((c - 18 + 3) / 7);
            0 > c ? c = 0 : c > RMapConstant.MapMaxLevel && (c = RMapConstant.MapMaxLevel);
            c != e.Maplet.Level ? e.Maplet.smoothLevel(c) : e.refreshZoom();
            e.SliderDiv.get().onmousemove = null;
            e.SliderDiv.get().onmouseup = null;
            this.releaseCapture ? this.releaseCapture() : window.captureEvents && window.releaseEvents(Event.MOUSEMOVE | Event.MOUSEUP)
        };
        this.setCapture ? this.setCapture() : window.captureEvents && window.captureEvents(Event.MOUSEMOVE | Event.MOUSEUP)
    };
    this.refreshZoom = function() {
        var d = 7 * (RMapConstant.MapMaxLevel - e.Maplet.Level);
        0 > d && (d = 0);
        e.SliderDiv.set(null, 18 + d);
        e.StripDiv2.set(null, 20 + d, null, this.StripDivHeight - 1 - d, null)
    };
    this.runLevelChangedEvent = function(d) {
        e.refreshZoom()
    };
    this.Maplet.addEventListener(RMapEvent.LevelChanged, this.runLevelChangedEvent)
},
RRightMenu = function(d, g, e, h) {
    this.isOpen = !0;
    this.Width = g ? g: 0;
    this.Height = e ? e: 0;
    this.Div = new RDiv(null, null, null, null, h);
    this.Div.get().innerHTML = d;
    this.Div.get().oncontextmenu = function(c) {
        return ! 1
    };
    this.Div.get().onmousedown = function(c) {
        RBase.stopPropagation(c)
    };
    this.Div.get().onmouseup = function(c) {
        RBase.stopPropagation(c)
    };
    this.Div.get().onmousemove = function(c) {
        RBase.stopPropagation(c)
    };
    this.Div.get().onmousewheel = function(c) {
        RBase.stopPropagation(c)
    };
    this.Div.get().onclick = function(c) {
        RBase.stopPropagation(c)
    };
    this.Div.get().ondblclick = function(c) {
        RBase.stopPropagation(c)
    };
    this.open = function() {
        this.isOpen || (this.Div.get().style.display = "block", this.isOpen = !0)
    };
    this.close = function() {
        this.isOpen && (this.Div.get().style.display = "none", this.isOpen = !1)
    };
    this.dispose = function() {
        this.Div.get().innerHTML = "";
        this.Div = null
    }
},
MapUtils = {
    calculatePixDistance: function(d, g) {
        return Math.abs(d / RMapConstant.ScaleFactors[Math.floor(g)] * RMapConstant.MapPicWidth)
    },
    calculatePixDistanceByMi: function(d, g) {
        return MapUtils.calculatePixDistance(MapUtils.calculateDistanceByMi(d), g)
    },
    calculateDistanceByMi: function(d) {
        return 360 * (d / (12756274 * Math.PI))
    }
};
RBaseTool = function(d) {
    this.isCloseOtherTool = this.isClearOtherToolMarker = !0;
    this.isOpened = !1;
    this.CoordinatesArr = [];
    this.Div = new RDiv;
    this.Maplet = d;
    this.open = function() {};
    this.close = function() {};
    this.clear = function() {};
    this.refresh = function() {};
    this.EventArray = [];
    this.EventArray[RToolEvent.OpenTool] = [];
    this.EventArray[RToolEvent.CloseTool] = [];
    this.EventArray[RToolEvent.ClearGraphics] = [];
    this.EventArray[RToolEvent.DisposeTool] = [];
    this.addEventListener = function(d, e) {
        this.EventArray[d] && this.EventArray[d].push(e)
    };
    this.removeEventListener = function(d, e) {
        if (this.EventArray[d]) for (var h = 0; h < this.EventArray[d].length; h++) this.EventArray[d][h] == e && this.EventArray[d].splice(h, 1)
    };
    this.dispatchEvent = function(d) {
        if (this.EventArray[d] && 0 < this.EventArray[d].length) for (var e = new RToolEvent(d), h = 0; h < this.EventArray[d].length; h++) if (this.EventArray[d][h]) this.EventArray[d][h](e)
    }
};
RLineTool = function(d, g, e, h) {
    RBaseTool.call(this, d);
    var c = this;
    this.GraphicsObject;
    this.oldY = this.oldX = 0;
    this.isAddEvent = !1;
    this.open = function() {
        c.isOpened || (c.clear(), c.isOpened = !0, RCursor.setMouseTool(), c.Maplet.Div.get().style.cursor = RCursor.MouseNormalCursor, c.GraphicsObject = new RLine([], g, e, h), c.GraphicsObject.setMaplet(c.Maplet), c.GraphicsObject.Div.get().setAttribute("_rmap", "RLineTool"), c.Div.get().appendChild(c.GraphicsObject.Div.get()), c.Maplet.addEventListener(RMapEvent.MouseDownEvent, c.onMouseDown), c.dispatchEvent(RToolEvent.OpenTool))
    };
    this.close = function() {
        c.isOpened && (c.isOpened = !1, RCursor.setMouseDefault(), c.Maplet.Div.get().style.cursor = RCursor.MouseNormalCursor, c.Maplet.removeEventListener(RMapEvent.MouseDownEvent, c.onMouseDown), c.isAddEvent && (c.isAddEvent = !1, c.Maplet.removeEventListener(RMapEvent.MouseMoveEvent, c.onMouseMove), c.Maplet.removeEventListener(RMapEvent.MouseDoubleClickEvent, c.onMouseDoubleClick)), 0 < c.GraphicsObject.CoordinatesArr.length && (c.GraphicsObject.CoordinatesArr.pop(), c.GraphicsObject.refresh()), c.CoordinatesArr = c.GraphicsObject.CoordinatesArr, c.dispatchEvent(RToolEvent.CloseTool))
    };
    this.clear = function() { ! c.isOpened && null != c.GraphicsObject && (c.Div.get().removeChild(c.GraphicsObject.Div.get()), c.GraphicsObject.dispose(), c.GraphicsObject = null, c.CoordinatesArr = [], c.dispatchEvent(RToolEvent.ClearGraphics))
    };
    this.refresh = function() {
        c.GraphicsObject && c.GraphicsObject.CoordinatesArr && c.GraphicsObject.refresh()
    };
    this.onMouseDown = function(d) {
        if (c.isOpened && (2 < Math.abs(c.oldX - d.MouseX) || 2 < Math.abs(c.oldY - d.MouseY))) {
            c.oldX = d.MouseX;
            c.oldY = d.MouseY;
            d = new RCoordinates(d.MouseCx, d.MouseCy);
            if (0 >= c.GraphicsObject.CoordinatesArr.length) c.GraphicsObject.CoordinatesArr[0] = d,
            c.GraphicsObject.CoordinatesArr[c.GraphicsObject.CoordinatesArr.length] = null;
            else if (d.Cx != c.GraphicsObject.CoordinatesArr[c.GraphicsObject.CoordinatesArr.length - 2].Cx || d.Cy != c.GraphicsObject.CoordinatesArr[c.GraphicsObject.CoordinatesArr.length - 2].Cy) c.GraphicsObject.CoordinatesArr[c.GraphicsObject.CoordinatesArr.length - 1] = d,
            c.GraphicsObject.CoordinatesArr[c.GraphicsObject.CoordinatesArr.length] = null;
            c.isAddEvent || (c.Maplet.addEventListener(RMapEvent.MouseMoveEvent, c.onMouseMove), c.Maplet.addEventListener(RMapEvent.MouseDoubleClickEvent, c.onMouseDoubleClick), c.isAddEvent = !0)
        }
    };
    this.onMouseMove = function(d) {
        c.isOpened && (c.GraphicsObject.CoordinatesArr[c.GraphicsObject.CoordinatesArr.length - 1] = new RCoordinates(d.MouseCx, d.MouseCy), c.GraphicsObject && c.GraphicsObject.CoordinatesArr && c.GraphicsObject.draw())
    };
    this.onMouseDoubleClick = function(d) {
        c.isOpened && c.close()
    }
};
RPolygonTool = function(d, g, e, h, c, k) {
    RBaseTool.call(this, d);
    var b = this;
    this.GraphicsObject;
    this.oldY = this.oldX = 0;
    this.isAddEvent = !1;
    this.open = function() {
        b.isOpened || (b.clear(), b.isOpened = !0, RCursor.setMouseTool(), b.Maplet.Div.get().style.cursor = RCursor.MouseNormalCursor, b.GraphicsObject = new RPolygon([], g, e, h, c, k), b.GraphicsObject.setMaplet(b.Maplet), b.GraphicsObject.Div.get().setAttribute("_rmap", "RPolygonTool"), b.Div.get().appendChild(b.GraphicsObject.Div.get()), b.Maplet.addEventListener(RMapEvent.MouseDownEvent, b.onMouseDown), b.dispatchEvent(RToolEvent.OpenTool))
    };
    this.close = function() {
        b.isOpened && (b.isOpened = !1, RCursor.setMouseDefault(), b.Maplet.Div.get().style.cursor = RCursor.MouseNormalCursor, b.Maplet.removeEventListener(RMapEvent.MouseDownEvent, b.onMouseDown), b.isAddEvent && (b.isAddEvent = !1, b.Maplet.removeEventListener(RMapEvent.MouseMoveEvent, b.onMouseMove), b.Maplet.removeEventListener(RMapEvent.MouseDoubleClickEvent, b.onMouseDoubleClick)), 0 < b.GraphicsObject.CoordinatesArr.length && (b.GraphicsObject.CoordinatesArr.pop(), b.GraphicsObject.refresh()), b.CoordinatesArr = b.GraphicsObject.CoordinatesArr, b.dispatchEvent(RToolEvent.CloseTool))
    };
    this.clear = function() { ! b.isOpened && null != b.GraphicsObject && (b.Div.get().removeChild(b.GraphicsObject.Div.get()), b.GraphicsObject.dispose(), b.GraphicsObject = null, b.CoordinatesArr = [], b.dispatchEvent(RToolEvent.ClearGraphics))
    };
    this.refresh = function() {
        b.GraphicsObject && b.GraphicsObject.CoordinatesArr && b.GraphicsObject.refresh()
    };
    this.onMouseDown = function(a) {
        if (b.isOpened && (2 < Math.abs(b.oldX - a.MouseX) || 2 < Math.abs(b.oldY - a.MouseY))) {
            b.oldX = a.MouseX;
            b.oldY = a.MouseY;
            a = new RCoordinates(a.MouseCx, a.MouseCy);
            if (0 >= b.GraphicsObject.CoordinatesArr.length) b.GraphicsObject.CoordinatesArr[0] = a,
            b.GraphicsObject.CoordinatesArr[b.GraphicsObject.CoordinatesArr.length] = null;
            else if (a.Cx != b.GraphicsObject.CoordinatesArr[b.GraphicsObject.CoordinatesArr.length - 2].Cx || a.Cy != b.GraphicsObject.CoordinatesArr[b.GraphicsObject.CoordinatesArr.length - 2].Cy) b.GraphicsObject.CoordinatesArr[b.GraphicsObject.CoordinatesArr.length - 1] = a,
            b.GraphicsObject.CoordinatesArr[b.GraphicsObject.CoordinatesArr.length] = null;
            b.isAddEvent || (b.Maplet.addEventListener(RMapEvent.MouseMoveEvent, b.onMouseMove), b.Maplet.addEventListener(RMapEvent.MouseDoubleClickEvent, b.onMouseDoubleClick), b.isAddEvent = !0)
        }
    };
    this.onMouseMove = function(a) {
        b.isOpened && (b.GraphicsObject.CoordinatesArr[b.GraphicsObject.CoordinatesArr.length - 1] = new RCoordinates(a.MouseCx, a.MouseCy), b.GraphicsObject.refresh())
    };
    this.onMouseDoubleClick = function(a) {
        b.isOpened && b.close()
    }
};
RDistanceTool = function(d, g, e, h) {
    RBaseTool.call(this, d);
    var c = this;
    this.GraphicsObject;
    this.tipsDivArr = [];
    this.oldY = this.oldX = 0;
    this.isAddEvent = !1;
    this.open = function() {
        c.isOpened || (c.clear(), c.isOpened = !0, RCursor.setMouseTool(), c.Maplet.Div.get().style.cursor = RCursor.MouseNormalCursor, c.GraphicsObject = new RLine([], g, e, h), c.GraphicsObject.setMaplet(c.Maplet), c.GraphicsObject.Div.get().setAttribute("_rmap", "RDistanceTool"), c.Div.get().appendChild(c.GraphicsObject.Div.get()), c.Maplet.addEventListener(RMapEvent.MouseDownEvent, c.onMouseDown), c.dispatchEvent(RToolEvent.OpenTool))
    };
    this.close = function() {
        c.isOpened && (c.isOpened = !1, RCursor.setMouseDefault(), c.Maplet.Div.get().style.cursor = RCursor.MouseNormalCursor, c.Maplet.removeEventListener(RMapEvent.MouseDownEvent, c.onMouseDown), c.isAddEvent && (c.isAddEvent = !1, c.Maplet.removeEventListener(RMapEvent.MouseMoveEvent, c.onMouseMove), c.Maplet.removeEventListener(RMapEvent.MouseDoubleClickEvent, c.onMouseDoubleClick)), 0 < c.GraphicsObject.CoordinatesArr.length && (c.GraphicsObject.CoordinatesArr.pop(), c.GraphicsObject.refresh()), c.CoordinatesArr = c.GraphicsObject.CoordinatesArr, c.dispatchEvent(RToolEvent.CloseTool))
    };
    this.clear = function() {
        if (!c.isOpened && null != c.GraphicsObject) {
            c.Div.get().removeChild(c.GraphicsObject.Div.get());
            c.GraphicsObject.dispose();
            for (c.GraphicsObject = null; 0 < c.tipsDivArr.length;) c.Div.get().removeChild(c.tipsDivArr[c.tipsDivArr.length - 1].get()),
            c.tipsDivArr[c.tipsDivArr.length - 1] = null,
            c.tipsDivArr.pop();
            c.CoordinatesArr = [];
            c.dispatchEvent(RToolEvent.ClearGraphics)
        }
    };
    this.refresh = function() {
        if (c.GraphicsObject && c.GraphicsObject.CoordinatesArr) {
            for (var d = 0; d < c.GraphicsObject.CoordinatesArr.length; d++) if (c.tipsDivArr[d]) {
                var b = c.Maplet.toClientPoint(c.GraphicsObject.CoordinatesArr[d].Cx, c.GraphicsObject.CoordinatesArr[d].Cy);
                c.tipsDivArr[d].set(b.X, b.Y)
            }
            c.GraphicsObject.refresh()
        }
    };
    this.onMouseDown = function(d) {
        if (c.isOpened && (2 < Math.abs(c.oldX - d.MouseX) || 2 < Math.abs(c.oldY - d.MouseY))) {
            c.oldX = d.MouseX;
            c.oldY = d.MouseY;
            var b = new RCoordinates(d.MouseCx, d.MouseCy);
            if (0 >= c.GraphicsObject.CoordinatesArr.length) c.GraphicsObject.CoordinatesArr[0] = b,
            c.GraphicsObject.CoordinatesArr[c.GraphicsObject.CoordinatesArr.length] = null,
            c.addTipsDiv(d.MouseX, d.MouseY, "\u8d77\u70b9");
            else if (b.Cx != c.GraphicsObject.CoordinatesArr[c.GraphicsObject.CoordinatesArr.length - 2].Cx || b.Cy != c.GraphicsObject.CoordinatesArr[c.GraphicsObject.CoordinatesArr.length - 2].Cy) c.GraphicsObject.CoordinatesArr[c.GraphicsObject.CoordinatesArr.length - 1] = b,
            c.GraphicsObject.CoordinatesArr[c.GraphicsObject.CoordinatesArr.length] = null,
            b = Math.round(RCompute.getLineDistance(c.GraphicsObject.CoordinatesArr.slice(0, c.GraphicsObject.CoordinatesArr.length - 1))),
            c.addTipsDiv(d.MouseX, d.MouseY, 1E3 <= b ? b / 1E3 + "\u516c\u91cc": b + "\u7c73");
            c.isAddEvent || (c.Maplet.addEventListener(RMapEvent.MouseMoveEvent, c.onMouseMove), c.Maplet.addEventListener(RMapEvent.MouseDoubleClickEvent, c.onMouseDoubleClick), c.isAddEvent = !0)
        }
    };
    this.onMouseMove = function(d) {
        c.isOpened && (c.GraphicsObject.CoordinatesArr[c.GraphicsObject.CoordinatesArr.length - 1] = new RCoordinates(d.MouseCx, d.MouseCy), c.GraphicsObject.refresh())
    };
    this.onMouseDoubleClick = function(d) {
        c.isOpened && c.close()
    };
    this.addTipsDiv = function(d, b, a) {
        d = new RDiv(d, b, null, null, 10);
        b = new RDiv(10, -10, 7 * (a.length - 2) + 24, null, 0);
        b.get().style.backgroundColor = "#FFFACD";
        b.get().style.border = "solid #999999 1px";
        b.get().style.color = "#555555";
        b.get().style.fontFamily = "\u5fae\u8f6f\u96c5\u9ed1,\u5b8b\u4f53,arial,sans-serif";
        b.get().style.fontSize = "12px";
        b.get().style.lineHeight = "12px";
        b.get().style.padding = "3px";
        b.get().innerHTML = a;
        d.get().appendChild(b.get());
        a = new RDiv( - 5, -5, 10, 10, 1);
        a.get().style.background = "url(" + RMapConstant.JsServer + "image/tool/tool_point_icon.gif) no-repeat";
        d.get().appendChild(a.get());
        c.Div.get().appendChild(d.get());
        c.tipsDivArr.push(d)
    }
};
RAreaTool = function(d, g, e, h, c, k) {
    RBaseTool.call(this, d);
    var b = this;
    this.GraphicsObject;
    this.tipsDivArr = [];
    this.oldY = this.oldX = 0;
    this.isAddEvent = !1;
    this.open = function() {
        b.isOpened || (b.clear(), b.isOpened = !0, RCursor.setMouseTool(), b.Maplet.Div.get().style.cursor = RCursor.MouseNormalCursor, b.GraphicsObject = new RPolygon([], g, e, h, c, k), b.GraphicsObject.setMaplet(b.Maplet), b.GraphicsObject.Div.get().setAttribute("_rmap", "RAreaTool"), b.Div.get().appendChild(b.GraphicsObject.Div.get()), b.Maplet.addEventListener(RMapEvent.MouseDownEvent, b.onMouseDown), b.dispatchEvent(RToolEvent.OpenTool))
    };
    this.close = function() {
        b.isOpened && (b.isOpened = !1, RCursor.setMouseDefault(), b.Maplet.Div.get().style.cursor = RCursor.MouseNormalCursor, b.Maplet.removeEventListener(RMapEvent.MouseDownEvent, b.onMouseDown), b.isAddEvent && (b.isAddEvent = !1, b.Maplet.removeEventListener(RMapEvent.MouseMoveEvent, b.onMouseMove), b.Maplet.removeEventListener(RMapEvent.MouseDoubleClickEvent, b.onMouseDoubleClick)), 0 < b.GraphicsObject.CoordinatesArr.length && (b.GraphicsObject.CoordinatesArr.pop(), b.GraphicsObject.refresh()), b.CoordinatesArr = b.GraphicsObject.CoordinatesArr, b.dispatchEvent(RToolEvent.CloseTool))
    };
    this.clear = function() {
        if (!b.isOpened && null != b.GraphicsObject) {
            b.Div.get().removeChild(b.GraphicsObject.Div.get());
            b.GraphicsObject.dispose();
            b.GraphicsObject = null;
            for (b.labelDiv.hide(); 0 < b.tipsDivArr.length;) b.Div.get().removeChild(b.tipsDivArr[b.tipsDivArr.length - 1].get()),
            b.tipsDivArr[b.tipsDivArr.length - 1] = null,
            b.tipsDivArr.pop();
            b.CoordinatesArr = [];
            b.dispatchEvent(RToolEvent.ClearGraphics)
        }
    };
    this.refresh = function() {
        if (b.GraphicsObject && b.GraphicsObject.CoordinatesArr) {
            for (var a = 0; a < b.GraphicsObject.CoordinatesArr.length; a++) if (b.tipsDivArr[a]) {
                var c = b.Maplet.toClientPoint(b.GraphicsObject.CoordinatesArr[a].Cx, b.GraphicsObject.CoordinatesArr[a].Cy);
                b.tipsDivArr[a].set(c.X - 5, c.Y - 5);
                a == b.GraphicsObject.CoordinatesArr.length - 1 && b.labelDiv.set(c.X + 10, c.Y - 10)
            }
            b.GraphicsObject.refresh()
        }
    };
    this.onMouseDown = function(a) {
        if (b.isOpened && (2 < Math.abs(b.oldX - a.MouseX) || 2 < Math.abs(b.oldY - a.MouseY))) {
            b.oldX = a.MouseX;
            b.oldY = a.MouseY;
            var c = new RCoordinates(a.MouseCx, a.MouseCy);
            if (0 >= b.GraphicsObject.CoordinatesArr.length) b.GraphicsObject.CoordinatesArr[0] = c,
            b.GraphicsObject.CoordinatesArr[b.GraphicsObject.CoordinatesArr.length] = null,
            b.addTipsDiv(a.MouseX, a.MouseY);
            else if (c.Cx != b.GraphicsObject.CoordinatesArr[b.GraphicsObject.CoordinatesArr.length - 2].Cx || c.Cy != b.GraphicsObject.CoordinatesArr[b.GraphicsObject.CoordinatesArr.length - 2].Cy) b.GraphicsObject.CoordinatesArr[b.GraphicsObject.CoordinatesArr.length - 1] = c,
            b.GraphicsObject.CoordinatesArr[b.GraphicsObject.CoordinatesArr.length] = null,
            c = RCompute.getPolygonArea(b.GraphicsObject.CoordinatesArr.slice(0, b.GraphicsObject.CoordinatesArr.length - 1)),
            c = 1E6 > c ? Math.round(c) + "\u5e73\u65b9\u7c73": Math.round(c / 1E3) / 1E3 + "\u5e73\u65b9\u516c\u91cc",
            b.addTipsDiv(a.MouseX, a.MouseY, c);
            b.isAddEvent || (b.Maplet.addEventListener(RMapEvent.MouseMoveEvent, b.onMouseMove), b.Maplet.addEventListener(RMapEvent.MouseDoubleClickEvent, b.onMouseDoubleClick), b.isAddEvent = !0)
        }
    };
    this.onMouseMove = function(a) {
        b.isOpened && (b.GraphicsObject.CoordinatesArr[b.GraphicsObject.CoordinatesArr.length - 1] = new RCoordinates(a.MouseCx, a.MouseCy), b.GraphicsObject.refresh())
    };
    this.onMouseDoubleClick = function(a) {
        b.isOpened && b.close()
    };
    this.addTipsDiv = function(a, c, d) {
        var e = new RDiv(a - 5, c - 5, 10, 10, 11);
        e.get().style.background = "url(" + RMapConstant.JsServer + "image/tool/tool_point_icon.gif) no-repeat";
        b.Div.get().appendChild(e.get());
        b.tipsDivArr.push(e);
        d && (b.labelDiv.set(a + 10, c - 10, 7 * (d.length - 3) + 38, null, null), b.labelDiv.get().innerHTML = d, b.labelDiv.show())
    };
    this.labelDiv = new RDiv(null, null, null, null, 12);
    this.labelDiv.hide();
    this.labelDiv.get().style.backgroundColor = "#FFFACD";
    this.labelDiv.get().style.border = "solid #999999 1px";
    this.labelDiv.get().style.color = "#555555";
    this.labelDiv.get().style.fontFamily = "\u5fae\u8f6f\u96c5\u9ed1,\u5b8b\u4f53,arial,sans-serif";
    this.labelDiv.get().style.fontSize = "12px";
    this.labelDiv.get().style.lineHeight = "12px";
    this.labelDiv.get().style.padding = "3px";
    this.Div.get().appendChild(this.labelDiv.get())
};
RRectTool = function(d, g, e, h, c, k) {
    RBaseTool.call(this, d);
    var b = this;
    this.GraphicsObject;
    this.startPoint;
    this.endPoint;
    this.open = function() {
        b.isOpened || (b.clear(), b.isOpened = !0, RCursor.setMouseTool(), b.Maplet.Div.get().style.cursor = RCursor.MouseNormalCursor, b.GraphicsObject = new RPolygon([], g, e, h, c, k), b.GraphicsObject.setMaplet(b.Maplet), b.GraphicsObject.Div.get().setAttribute("_rmap", "RRectTool"), b.Div.get().appendChild(b.GraphicsObject.Div.get()), b.Maplet.addEventListener(RMapEvent.MouseDownEvent, b.onMouseDown), b.Maplet.isCanMove = !1, b.dispatchEvent(RToolEvent.OpenTool))
    };
    this.close = function() {
        b.isOpened && (b.isOpened = !1, b.Maplet.removeEventListener(RMapEvent.MouseDownEvent, b.onMouseDown), b.Maplet.removeEventListener(RMapEvent.MouseUpEvent, b.onMouseUp), b.Maplet.removeEventListener(RMapEvent.MouseMoveEvent, b.onMouseMove), RCursor.setMouseDefault(), b.Maplet.Div.get().style.cursor = RCursor.MouseNormalCursor, b.CoordinatesArr = b.GraphicsObject.CoordinatesArr, b.Maplet.isCanMove = !0, b.dispatchEvent(RToolEvent.CloseTool))
    };
    this.clear = function() { ! b.isOpened && null != b.GraphicsObject && (b.Div.get().removeChild(b.GraphicsObject.Div.get()), b.GraphicsObject.dispose(), b.GraphicsObject = null, b.CoordinatesArr = [], b.startPoint = null, b.endPoint = null, b.dispatchEvent(RToolEvent.ClearGraphics))
    };
    this.refresh = function() {
        b.GraphicsObject && b.GraphicsObject.CoordinatesArr && b.GraphicsObject.refresh()
    };
    this.isClickDown = !1;
    this.onMouseDown = function(a) {
        b.isOpened && !b.isClickDown && (b.isClickDown = !0, startPoint = new RCoordinates(a.MouseCx, a.MouseCy), b.Maplet.addEventListener(RMapEvent.MouseUpEvent, b.onMouseUp), b.Maplet.addEventListener(RMapEvent.MouseMoveEvent, b.onMouseMove))
    };
    this.onMouseUp = function(a) {
        b.isClickDown = !1;
        b.close()
    };
    this.onMouseMove = function(a) {
        if (b.isOpened && b.isClickDown) {
            endPoint = new RCoordinates(a.MouseCx, a.MouseCy);
            a = new RCoordinates(startPoint.Cx, startPoint.Cy);
            var c = new RCoordinates(endPoint.Cx, startPoint.Cy),
            d = new RCoordinates(endPoint.Cx, endPoint.Cy),
            e = new RCoordinates(startPoint.Cx, endPoint.Cy);
            b.GraphicsObject.CoordinatesArr = [a, c, d, e];
            b.GraphicsObject.refresh()
        }
    }
};
RCircleTool = function(d, g, e, h, c, k) {
    RBaseTool.call(this, d);
    var b = this;
    this.GraphicsObject;
    this.startPoint;
    this.endPoint;
    this.open = function() {
        b.isOpened || (b.clear(), b.isOpened = !0, RCursor.setMouseTool(), b.Maplet.Div.get().style.cursor = RCursor.MouseNormalCursor, b.GraphicsObject = new RCircle({},
        {},
        g, e, h, c, k), b.GraphicsObject.setMaplet(b.Maplet), b.GraphicsObject.Div.get().setAttribute("_rmap", "RCircleTool"), b.Div.get().appendChild(b.GraphicsObject.Div.get()), b.Maplet.addEventListener(RMapEvent.MouseDownEvent, b.onMouseDown), b.Maplet.isCanMove = !1, b.dispatchEvent(RToolEvent.OpenTool))
    };
    this.close = function() {
        b.isOpened && (b.isOpened = !1, b.Maplet.removeEventListener(RMapEvent.MouseDownEvent, b.onMouseDown), b.Maplet.removeEventListener(RMapEvent.MouseUpEvent, b.onMouseUp), b.Maplet.removeEventListener(RMapEvent.MouseMoveEvent, b.onMouseMove), RCursor.setMouseDefault(), b.Maplet.Div.get().style.cursor = RCursor.MouseNormalCursor, b.centerCoordinates = b.GraphicsObject.centerCoordinates, b.sideCoordinates = b.GraphicsObject.sideCoordinates, b.Maplet.isCanMove = !0, b.dispatchEvent(RToolEvent.CloseTool))
    };
    this.clear = function() { ! b.isOpened && null != b.GraphicsObject && (b.Div.get().removeChild(b.GraphicsObject.Div.get()), b.GraphicsObject.dispose(), b.GraphicsObject = null, b.CoordinatesArr = [], b.startPoint = null, b.endPoint = null, b.dispatchEvent(RToolEvent.ClearGraphics))
    };
    this.refresh = function() {
        b.GraphicsObject && (b.GraphicsObject.centerCoordinates && b.GraphicsObject.sideCoordinates) && b.GraphicsObject.update(b.GraphicsObject.centerCoordinates, b.GraphicsObject.sideCoordinates)
    };
    this.isClickDown = !1;
    this.onMouseDown = function(a) {
        b.isOpened && !b.isClickDown && (b.isClickDown = !0, startPoint = new RCoordinates(a.MouseCx, a.MouseCy), b.Maplet.addEventListener(RMapEvent.MouseUpEvent, b.onMouseUp), b.Maplet.addEventListener(RMapEvent.MouseMoveEvent, b.onMouseMove))
    };
    this.onMouseUp = function(a) {
        b.isClickDown = !1;
        b.close()
    };
    this.onMouseMove = function(a) {
        if (b.isOpened && b.isClickDown) {
            endPoint = new RCoordinates(a.MouseCx, a.MouseCy);
            a = new RCoordinates(startPoint.Cx, startPoint.Cy);
            new RCoordinates(endPoint.Cx, startPoint.Cy);
            var c = new RCoordinates(endPoint.Cx, endPoint.Cy);
            new RCoordinates(startPoint.Cx, endPoint.Cy);
            b.GraphicsObject.centerCoordinates = a;
            b.GraphicsObject.sideCoordinates = c;
            b.GraphicsObject.update(b.GraphicsObject.centerCoordinates, b.GraphicsObject.sideCoordinates)
        }
    }
};
RAddPointTool = function(d, g, e, h, c, k) {
    RBaseTool.call(this, d);
    var b = this;
    this.isMapMove = !1;
    this.PointMarker;
    this.Cx;
    this.Cy;
    this.open = function() {
        b.isOpened || (b.clear(), b.isOpened = !0, RCursor.setMouseTool(), b.Maplet.Div.get().style.cursor = RCursor.MouseNormalCursor, b.Maplet.addEventListener(RMapEvent.MouseUpEvent, b.onMouseUp), b.Maplet.addEventListener(RMapEvent.Moving, b.onMapMoving), b.dispatchEvent(RToolEvent.OpenTool))
    };
    this.close = function() {
        b.isOpened && (b.isOpened = !1, RCursor.setMouseDefault(), b.Maplet.Div.get().style.cursor = RCursor.MouseNormalCursor, b.Maplet.removeEventListener(RMapEvent.MouseUpEvent, b.onMouseUp), b.Maplet.removeEventListener(RMapEvent.Moving, b.onMapMoving), b.PointMarker && (b.Cx = b.PointMarker.Cx, b.Cy = b.PointMarker.Cy), b.dispatchEvent(RToolEvent.CloseTool))
    };
    this.clear = function() {
        b.isOpened || (b.Cx = 0, b.Cy = 0, null != b.PointMarker && (b.Maplet.removeMarker(b.PointMarker), b.PointMarker.dispose(), b.PointMarker = null, b.dispatchEvent(RToolEvent.ClearGraphics)))
    };
    this.refresh = function(a) {
        b.PointMarker.update(a.MouseCx, a.MouseCy)
    };
    this.onMouseUp = function(a) {
        b.isOpened && !b.isMapMove && (b.PointMarker = new RPointMarker(a.MouseCx, a.MouseCy, g, e, h, c, k), b.Maplet.addMarker(b.PointMarker), b.close());
        b.isMapMove = !1
    };
    this.onMapMoving = function(a) {
        b.isOpened && !b.isMapMove && (b.isMapMove = !0)
    }
};
__RLayer = function(d, g, e, h) {
    var c = this;
    this.Maplet = d;
    this.MapRoot = g;
    this.MapType = e;
    this.zIndex = h ? h: 0;
    this.Level = this.Maplet.Level;
    this.Top = this.Left = 0;
    this.Cx = this.Maplet.Cx;
    this.Cy = this.Maplet.Cy;
    this.MapWidth = this.Maplet.MapWidth;
    this.MapHeight = this.Maplet.MapHeight;
    this.Tilelayers = Array(RMapConstant.Directorys.length);
    this.Div = new RDiv(0, 0, this.MapWidth, this.MapHeight, this.zIndex);
    this.Div.get().style.overflow = "hidden";
    for (d = 0; d < RMapConstant.Directorys.length; d++) this.Tilelayers[d] = d >= RMapConstant.MapMinLevel || d <= RMapConstant.MapMaxLevel ? new RTileLayer(this.Cx, this.Cy, d, this.MapWidth, this.MapHeight, 0, this.MapRoot, this.MapType) : null;
    this.getCenter = function() {
        return new RCoordinates(this.Cx, this.Cy)
    };
    this.setCenter = function(a, b) {
        if (a != this.Cx || b != this.Cy) this.Top = this.Left = 0,
        this.Cx = a,
        this.Cy = b,
        this.setTileLayer(this.Level, this.Cx, this.Cy, this.MapWidth, this.MapHeight),
        this.Tilelayers[this.Level].setLeftTop(0, 0),
        this.Tilelayers[this.Level].show()
    };
    this.resize = function(a, b) {
        this.MapWidth = a;
        this.MapHeight = b;
        this.Div.set(null, null, this.MapWidth, this.MapHeight, null);
        for (var c = 0; c < RMapConstant.Directorys.length; c++) this.Tilelayers[c] && (this.Tilelayers[c].Div.set(null, null, this.MapWidth, this.MapHeight, null), this.Tilelayers[c].MapWidth = this.MapWidth, this.Tilelayers[c].MapHeight = this.MapHeight, this.Tilelayers[c].Cx = this.Cx, this.Tilelayers[c].Cy = this.Cy);
        this.Tilelayers[this.Level].show();
        this.Left = this.Top = 0
    };
    this.addTileLayer = function(a) {
        this.Div.get().appendChild(this.Tilelayers[a].Div.get());
        this.Tilelayers[a].show();
        this.Left = this.Top = 0
    };
    this.removeTileLayer = function(a) {
        this.Tilelayers[a].clear();
        for (var b = 0; b < this.Div.get().childNodes.length; b++) if (this.Div.get().childNodes[b] == this.Tilelayers[a].Div.get()) {
            this.Div.get().removeChild(this.Tilelayers[a].Div.get());
            break
        }
    };
    this.setTileLayer = function(a, b, c, d, e) {
        b && (this.Tilelayers[a].Cx = b);
        c && (this.Tilelayers[a].Cy = c);
        if (d || 0 == d) this.Tilelayers[a].MapWidth = d;
        if (e || 0 == e) this.Tilelayers[a].MapHeight = e
    };
    this.setLocation = function(a, b, d, e, g) {
        if (a || 0 == a || b || 0 == b) if (a != this.Left || b != this.Top) this.Left = a,
        this.Top = b,
        this.Tilelayers[this.Level].setLeftTop(this.Left, this.Top),
        this.Tilelayers[this.Level].loadNewPic(),
        this.Cx = e,
        this.Cy = g,
        this.setTileLayer(this.Level, this.Cx, this.Cy, this.MapWidth, this.MapHeight);
        null != d && (void 0 != d && d >= RMapConstant.MapMinLevel && d <= RMapConstant.MapMaxLevel) && this.Level != d && (this.removeTileLayer(this.Level), this.Top = this.Left = 0, this.Level = d, this.setTileLayer(this.Level, this.Cx, this.Cy, this.MapWidth, this.MapHeight), this.Tilelayers[this.Level].setLeftTop(0, 0), this.addTileLayer(this.Level));
        if (RBase._browser_ie6) {
            a = c.Div.get().getElementsByTagName("img");
            for (b = 0; b < a.length; b++) a[b].style.filter || (d = a[b].src, a[b].src = RMapConstant.JsServer + "image/none.gif", a[b].style.width = RMapConstant.MapPicWidth, a[b].style.width = RMapConstant.MapPicHeight, a[b].style.filter = "progid:DXImageTransform.Microsoft.AlphaImageLoader(src='" + d + "', sizingMethod='scale')")
        }
    };
    this.dispose = function() {
        this.clearHotspot();
        for (this.removeTileLayer(this.Level); 0 < this.Tilelayers.length;) this.Tilelayers[0] && (this.Tilelayers[0].clear(), this.Tilelayers[0] = null),
        this.Tilelayers.pop();
        this.Tilelayers = null;
        this.Maplet.removeEventListener(RMapEvent.MouseClickEvent, b);
        this.Maplet.removeEventListener(RMapEvent.SizeChanged, this.runSizeChangedEvent);
        this.Maplet.removeEventListener(RMapEvent.LevelChanged, this.runLevelChangedEvent);
        this.Maplet.removeEventListener(RMapEvent.CenterChanged, this.runCenterChangedEvent);
        this.Maplet.removeEventListener(RMapEvent.Moved, this.runMovedEvent);
        this.Maplet.removeEventListener(RMapEvent.Moving, this.runMovingEvent)
    };
    this.runSizeChangedEvent = function(a) {
        c.resize(c.Maplet.MapWidth, c.Maplet.MapHeight)
    };
    this.runLevelChangedEvent = function(a) {
        c.setLocation(null, null, c.Maplet.Level, null, null)
    };
    this.runCenterChangedEvent = function(a) {
        c.setCenter(c.Maplet.Cx, c.Maplet.Cy)
    };
    this.runMovedEvent = function(a) {
        c.setLocation(c.Maplet.Left, c.Maplet.Top, null, c.Maplet.Cx, c.Maplet.Cy)
    };
    this.runMovingEvent = function(a) {
        c.setLocation(c.Maplet.Left, c.Maplet.Top, null, c.Maplet.Cx, c.Maplet.Cy)
    };
    this.Maplet.addEventListener(RMapEvent.SizeChanged, this.runSizeChangedEvent);
    this.Maplet.addEventListener(RMapEvent.LevelChanged, this.runLevelChangedEvent);
    this.Maplet.addEventListener(RMapEvent.CenterChanged, this.runCenterChangedEvent);
    this.Maplet.addEventListener(RMapEvent.Moved, this.runMovedEvent);
    this.Maplet.addEventListener(RMapEvent.Moving, this.runMovingEvent);
    this.addTileLayer(this.Level);
    var k, b = function(a) {
        if (k) {
            a = {
                Cx: a.MouseCx,
                Cy: a.MouseCy
            };
            for (var b in k) {
                var d = k[b];
                if (!d.marker && RCompute.distanceBetween({
                    Cx: d.lng,
                    Cy: d.lat
                },
                a) < (d.bound || 3E3) * RMapConstant.ScaleFactors[c.Maplet.Level]) d.marker = new RLabelMarker(d.lng, d.lat, d.name, RMapConstant.JsServer + "image/hotspot.png", -8, -8, 16, 16),
                c.Maplet.addMarker(d.marker),
                d.marker.showLabel()
            }
            c.Maplet.refreshAllMarker()
        }
    };
    this.Maplet.addEventListener(RMapEvent.MouseClickEvent, b);
    this.clearHotspot = function() {
        if (k) {
            for (var a in k) if (k[a].marker) {
                var b = k[a];
                b.marker.hideLabel();
                b.marker.hide();
                c.Maplet.removeMarker(b.marker);
                delete b.marker
            }
            c.Maplet.refreshAllMarker();
            c.Maplet.removeEventListener(RMapEvent.SizeChanged, k.setup);
            c.Maplet.removeEventListener(RMapEvent.LevelChanged, k.setup);
            c.Maplet.removeEventListener(RMapEvent.CenterChanged, k.setup);
            c.Maplet.removeEventListener(RMapEvent.Moved, k.setup);
            k = null
        }
    };
    this.setHotspot = function(a) {
        this.clearHotspot();
        k = {};
        var b;
        k.setup = function() {
            b && (window.clearTimeout(b), b = null);
            b = window.setTimeout(function() {
                b = null;
                var d = c.Maplet.getBounds(),
                e;
                do e = "RmapHotspot_" + (Math.random().toString() + Math.random().toString()).replace(/\./g, "D");
                while (window[e]);
                window[e] = function(a) {
                    if (k && a && a.length) for (var b = 0; b < a.length; b++) {
                        var c = a[b];
                        k[c.id] = k[c.id] || c
                    }
                    window[e] = null
                };
                var g = document.createElement("script"),
                h = a.indexOf("?") + 1 ? "&": "?";
                g.src = a + h + "range=" + d.MinCoordinates.Cx.toString() + "," + d.MinCoordinates.Cy.toString() + "," + d.MaxCoordinates.Cx.toString() + "," + d.MaxCoordinates.Cy.toString() + "&callback=" + e;
                document.body.insertBefore(g, document.body.firstChild)
            },
            500)
        };
        c.Maplet.addEventListener(RMapEvent.SizeChanged, k.setup);
        c.Maplet.addEventListener(RMapEvent.LevelChanged, k.setup);
        c.Maplet.addEventListener(RMapEvent.CenterChanged, k.setup);
        c.Maplet.addEventListener(RMapEvent.Moved, k.setup);
        k.setup()
    }
};