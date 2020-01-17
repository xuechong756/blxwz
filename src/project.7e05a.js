window.__require = function e(t, o, n) {
    function i(a, c) {
        if (!o[a]) {
            if (!t[a]) {
                var s = a.split("/");
                if (s = s[s.length - 1],
                !t[s]) {
                    var l = "function" == typeof __require && __require;
                    if (!c && l)
                        return l(s, !0);
                    if (r)
                        return r(s, !0);
                    throw new Error("Cannot find module '" + a + "'")
                }
            }
            var p = o[a] = {
                exports: {}
            };
            t[a][0].call(p.exports, function(e) {
                return i(t[a][1][e] || e)
            }, p, p.exports, e, t, o, n)
        }
        return o[a].exports
    }
    for (var r = "function" == typeof __require && __require, a = 0; a < n.length; a++)
        i(n[a]);
    return i
}({
    ASCAd: [function(e, t, o) {
        "use strict";
        cc._RF.push(t, "ac3bf+dKoNGCK7fG6pKNvex", "ASCAd"),
        Object.defineProperty(o, "__esModule", {
            value: !0
        });
        var n = e("./AdPlugin")
          , i = function() {
            function e() {
                this.MainSwitch = !1,
                this.BannerSwitch = !1,
                this.IntersSwitch = !1,
                this.VideoSwitch = !1,
                this.NativeBannerSwitch = !1,
                this.NativeIntersSwitch = !1,
                this.NativeBigIntersSwitch = !1,
                this.NISwitch = !1,
                this.NavigateSwitch = !1,
                this.NavigateIconSwitch = !1,
                this.NavigateGroupSwitch = !1,
                this.IntersStartNum = 0,
                this.IntersIntervalNum = 0,
                this.IntersIntervalTime = 0,
                this.IntersControl = null,
                this.startIntersTime = !1,
                this.BannerUpdateTime = 30,
                this.nativeInstersFirstPercent = 0,
                this.nativeInstersPercent = 0,
                this.NativeIntersPercent = 100,
                this.IntersPercent = 0,
                this.totalVideo = 99999,
                this.videoNum = 99999,
                this.videoControlSwitch = !1,
                this.bannerNativePercent = 0,
                this.bannerFirst = !0,
                this.videoInterval = 0,
                this.desktopSwitch = !0,
                this.intersDelayTime = 0,
                this.intersDelayPercent = 0,
                this.intersDelayInterval = 0,
                this.nativeIntersFirstTime = 0,
                this.nativeIntersFakeInterval = 0,
                this.adIdentityEnabled = !1,
                this.adPlugin = n.default.getInstance()
            }
            return e.getInstance = function() {
                return e.instance || (e.instance = new e),
                e.instance
            }
            ,
            e.prototype.initAdServer = function() {
                console.log("ASCSDK", "initAdServer"),
                this.adPlugin && this.MainSwitch && this.adPlugin.initAdServer()
            }
            ,
            e.prototype.showBanner = function() {
                console.log("ASCSDK", "showBanner"),
                this.adPlugin && this.adPlugin.showBanner()
            }
            ,
            e.prototype.hideBanner = function() {
                console.log("ASCSDK", "hideBanner"),
                this.adPlugin && this.adPlugin.hideBanner()
            }
            ,
            e.prototype.showInters = function() {
                if (console.log("ASCSDK", "showInters"),
                this.adPlugin && (this.IntersSwitch || this.NativeIntersSwitch) && this.MainSwitch)
                    if (this.IntersControl) {
                        if (this.IntersStartNum < this.IntersControl.startNum)
                            return this.IntersStartNum++,
                            console.log("\u63d2\u5c4f\u5f00\u59cb\u6b21\u6570\u672a\u8fbe\u5230", this.IntersStartNum, "\u76ee\u6807\u6b21\u6570", this.IntersControl.startNum),
                            void cc.sys.localStorage.setItem("IntersStartNum", String(this.IntersStartNum));
                        if (this.IntersIntervalNum < this.IntersControl.intervalNum)
                            return this.IntersIntervalNum++,
                            void console.log("\u63d2\u5c4f\u95f4\u9694\u6b21\u6570\u672a\u8fbe\u5230", this.IntersIntervalNum, "\u76ee\u6807\u6b21\u6570", this.IntersControl.intervalNum);
                        if (this.IntersIntervalTime < this.IntersControl.intervalTime)
                            return void console.log("\u63d2\u5c4f\u95f4\u9694\u672a\u8fbe\u5230", this.IntersIntervalTime, "\u76ee\u6807\u65f6\u95f4", this.IntersControl.intervalTime);
                        this.IntersSwitch && this.NativeIntersSwitch ? Math.floor(100 * Math.random()) < this.NativeIntersPercent ? this.adPlugin.showNativeInsters() : this.adPlugin.showInters() : this.IntersSwitch ? this.adPlugin.showInters() : this.NativeIntersSwitch && this.adPlugin.showNativeInsters(),
                        this.startIntersTime = !0,
                        this.IntersIntervalTime = 0,
                        this.IntersIntervalNum = 0
                    } else
                        this.IntersSwitch && this.NativeIntersSwitch ? Math.floor(100 * Math.random()) < this.NativeIntersPercent ? this.adPlugin.showNativeInsters() : this.adPlugin.showInters() : this.IntersSwitch ? this.adPlugin.showInters() : this.NativeIntersSwitch && this.adPlugin.showNativeInsters()
            }
            ,
            e.prototype.getIntersFlag = function() {
                return console.log("ASCSDK", "getIntersFlag"),
                !!(this.adPlugin && this.IntersSwitch && this.MainSwitch) && this.adPlugin.getIntersFlag()
            }
            ,
            e.prototype.showVideo = function(e) {
                console.log("ASCSDK", "showVideo"),
                this.adPlugin.showVideo(e)
            }
            ,
            e.prototype.getVideoFlag = function() {
                return console.log("ASCSDK", "showVideoFlag"),
                !!(this.adPlugin && this.VideoSwitch && this.MainSwitch || this.adPlugin.isTest) && this.adPlugin.getVideoFlag()
            }
            ,
            e.prototype.showNative = function(e, t, o) {
                console.log("ASCSDK", "showNative"),
                this.adPlugin && this.NativeBigIntersSwitch && this.MainSwitch ? this.adPlugin.showNative(e, t, o) : this.adPlugin && this.adPlugin.isTest && this.adPlugin.showNative(e, t, o)
            }
            ,
            e.prototype.showNativeIcon = function(e, t, o, n) {
                console.log("ASCSDK", "showNative"),
                this.adPlugin && this.NativeBigIntersSwitch && this.MainSwitch ? this.adPlugin.showNativeIcon(e, t, o, n) : this.adPlugin && this.adPlugin.isTest && this.adPlugin.showNativeIcon(e, t, o, n)
            }
            ,
            e.prototype.getNativeFlag = function() {
                return console.log("ASCSDK", "getNativeFlag"),
                !!(this.adPlugin && (this.NativeBigIntersSwitch || this.NativeIntersSwitch) && this.MainSwitch || this.adPlugin.isTest) && this.adPlugin.getNativeFlag()
            }
            ,
            e.prototype.getNativeIconFlag = function() {
                return console.log("ASCSDK", "getNativeIconFlag"),
                !!(this.adPlugin && this.NativeBigIntersSwitch && this.MainSwitch || this.adPlugin.isTest) && this.adPlugin.getNativeFlag()
            }
            ,
            e.prototype.hideNative = function() {
                console.log("ASCSDK", "hideNative"),
                this.adPlugin && this.adPlugin.hideNative()
            }
            ,
            e.prototype.hideNativeIcon = function() {
                console.log("ASCSDK", "hideNativeIcon"),
                this.adPlugin && this.adPlugin.hideNativeIcon()
            }
            ,
            e.prototype.createBanner = function() {
                console.log("ASCSDK", "createBanner"),
                this.adPlugin && (this.adPlugin.bannerFirst = this.bannerFirst),
                this.adPlugin && (this.adPlugin.bannerNativePercent = this.bannerNativePercent),
                this.adPlugin && (this.adPlugin.bannerUpdateTime = this.BannerUpdateTime),
                this.adPlugin && this.BannerSwitch && this.adPlugin.createBanner()
            }
            ,
            e.prototype.createInters = function() {
                console.log("ASCSDK", "createInters"),
                this.adPlugin.intersDelayTime = this.intersDelayTime,
                this.adPlugin.intersDelayPercent = this.intersDelayPercent,
                this.adPlugin.intersDelayInterval = this.intersDelayInterval,
                this.adPlugin && this.IntersSwitch && this.adPlugin.createInters()
            }
            ,
            e.prototype.createVideo = function() {
                console.log("ASCSDK", "createVideo"),
                this.adPlugin.videoInterval = this.videoInterval,
                this.adPlugin && (this.adPlugin.totalVideo = this.totalVideo),
                this.adPlugin && (this.adPlugin.videoNum = this.videoNum),
                this.adPlugin && (this.adPlugin.videoControlSwitch = this.videoControlSwitch),
                this.adPlugin && this.VideoSwitch && this.adPlugin.createVideo()
            }
            ,
            e.prototype.createBigNative = function() {
                console.log("ASCSDK", "createIntersNative"),
                this.adPlugin && this.NativeBigIntersSwitch && this.adPlugin.createNative()
            }
            ,
            e.prototype.createNative = function() {
                console.log("ASCSDK", "createIntersNative"),
                this.adPlugin.nativeInstersFirstPercent = this.nativeInstersFirstPercent,
                this.adPlugin.nativeInstersPercent = this.nativeInstersPercent,
                this.adPlugin.nativeIntersFirstTime = this.nativeIntersFirstTime,
                this.adPlugin.nativeIntersFakeInterval = this.nativeIntersFakeInterval,
                this.adPlugin && this.NativeBigIntersSwitch && this.adPlugin.createNative()
            }
            ,
            e.prototype.createNavigate = function() {
                console.log("ASCSDK", "NavigateSwitch"),
                this.adPlugin && this.NavigateSwitch && this.NavigateIconSwitch && this.adPlugin.createNavigateIcon(),
                this.adPlugin && this.NavigateSwitch && this.NavigateGroupSwitch && this.adPlugin.createNavigateGroup(),
                this.adPlugin && this.NavigateSwitch && this.adPlugin.createNavigateSettle()
            }
            ,
            e.prototype.getNavigateIconFlag = function() {
                return console.log("ASCSDK", "getNativeFlag"),
                !!(this.adPlugin && this.MainSwitch || this.adPlugin.isTest) && this.adPlugin.getNavigateIconFlag()
            }
            ,
            e.prototype.showNavigateIcon = function(e, t, o, n, i) {
                console.log("ASCSDK", "showNavigateIcon"),
                (this.adPlugin && this.NavigateIconSwitch || this.adPlugin.isTest) && this.adPlugin.showNavigateIcon(e, t, o, n)
            }
            ,
            e.prototype.hideNavigateIcon = function() {
                console.log("ASCSDK", "hideNavigateIcon"),
                this.adPlugin && this.adPlugin.hideNavigateIcon()
            }
            ,
            e.prototype.hideNavigateGroup = function() {
                console.log("ASCSDK", "hideNavigateGroup"),
                this.adPlugin && this.adPlugin.hideNavigateGroup()
            }
            ,
            e.prototype.hideNavigateSettle = function() {
                console.log("ASCSDK", "hideNavigateSettle"),
                this.adPlugin && this.adPlugin.hideNavigateSettle()
            }
            ,
            e.prototype.getNavigateSettleFlag = function() {
                return console.log("ASCSDK", "getNavigateSettleFlag"),
                !!(this.adPlugin && this.MainSwitch || this.adPlugin.isTest) && this.adPlugin.getNavigateSettleFlag()
            }
            ,
            e.prototype.setGroup = function(e) {
                console.log("ASCSDK", "setGroup"),
                this.adPlugin && this.adPlugin.setGroup(e)
            }
            ,
            e.prototype.showNavigateGroup = function(e, t) {
                console.log("ASCSDK", "showNavigateGroup"),
                (this.adPlugin && this.NavigateGroupSwitch || this.adPlugin.isTest) && this.adPlugin.showNavigateGroup(e, t)
            }
            ,
            e.prototype.getNavigateGroupFlag = function() {
                return console.log("ASCSDK", "getNativeFlag"),
                !!(this.adPlugin && this.MainSwitch || this.adPlugin.isTest) && this.adPlugin.getNavigateGroupFlag()
            }
            ,
            e.prototype.getDeskTopFlag = function(e) {
                console.log("ASCSDK", "getDeskTopFlag"),
                this.adPlugin && this.desktopSwitch || this.adPlugin.isTest ? this.adPlugin.getDeskTopFlag(e) : e(!1)
            }
            ,
            e.prototype.showNavigateSettle = function(e, t, o) {
                console.log("ASCSDK", "showNavigateSettle"),
                (this.adPlugin && this.NavigateGroupSwitch || this.adPlugin.isTest) && this.adPlugin.showNavigateSettle(e, t, o)
            }
            ,
            e.prototype.addDeskTop = function(e) {
                console.log("ASCSDK", "addDeskTop"),
                (this.adPlugin && this.desktopSwitch || this.adPlugin.isTest) && this.adPlugin.addDeskTop(e)
            }
            ,
            e.prototype.initAd = function() {
                var e = this
                  , t = "http://www.ascmob.com/fastgameserver/advert/downAdConfigure?channelId=" + this.adPlugin.CHANNLEID + "&gameId=" + this.adPlugin.GAMEID
                  , o = this
                  , n = new XMLHttpRequest;
                n.onreadystatechange = function() {
                    if (4 == n.readyState && 200 == n.status) {
                        var e = n.responseText;
                        if (!e)
                            return void console.log("\u521d\u59cb\u5316\u5931\u8d25");
                        console.log(e);
                        var t = JSON.parse(e);
                        if (void 0 === t || !t || !t.data)
                            return void console.log("error : is not a json");
                        var i = t.data.adSwitch;
                        if (void 0 !== t.data.mainSwitch && (o.MainSwitch = t.data.mainSwitch),
                        !o.MainSwitch)
                            return void console.log("\u5e7f\u544a\u5f00\u5173\u6ca1\u6709\u5f00\u542f");
                        void 0 !== i.bannerSwitch && (o.BannerSwitch = i.bannerSwitch),
                        void 0 !== i.intersSwitch && (o.IntersSwitch = i.intersSwitch),
                        void 0 !== i.videoSwitch && (o.VideoSwitch = i.videoSwitch),
                        void 0 !== i.nativeBannerSwitch && (o.NativeBannerSwitch = i.nativeBannerSwitch),
                        void 0 !== i.nativeIntersSwitch && (o.NativeIntersSwitch = i.nativeIntersSwitch),
                        void 0 !== i.nativeBigIntersSwitch && (o.NativeBigIntersSwitch = i.nativeBigIntersSwitch);
                        var r = t.data.adCombineControl;
                        r && void 0 !== r.enableSwitch && (o.NISwitch = r.enableSwitch),
                        r && void 0 !== r.nativeIntersRatio && (o.NativeIntersPercent = r.nativeIntersRatio),
                        r && void 0 !== r.intersRatio && (o.IntersPercent = r.intersRatio);
                        var a = t.data.adIntersControl;
                        a && void 0 !== a && (o.IntersControl = a,
                        a.intervalNum && (o.IntersIntervalNum = a.intervalNum),
                        a.intervalTime && (o.IntersIntervalTime = a.intervalTime),
                        a.firstProbability && (o.nativeInstersFirstPercent = a.firstProbability),
                        a.delayEject && (o.intersDelayTime = a.delayEject),
                        a.delayProbability && (o.intersDelayPercent = a.delayProbability),
                        a.delayInterval && (o.intersDelayInterval = a.delayInterval),
                        o.IntersStartNum = Number(cc.sys.localStorage.getItem("IntersStartNum")),
                        o.IntersStartNum || (cc.sys.localStorage.setItem("IntersStartNum", "0"),
                        o.IntersStartNum = 0));
                        var c = t.data.adDynamicNativeInters;
                        c && void 0 !== c && (c.clickRatio && (o.nativeInstersPercent = c.clickRatio),
                        c.fewTimesClick && (o.nativeIntersFirstTime = c.fewTimesClick),
                        c.fewClickInterval && (o.nativeIntersFakeInterval = c.fewClickInterval));
                        var s = t.data.adBannerControl;
                        s && void 0 !== s && (s.BannerUpdateTime && (o.BannerUpdateTime = s.BannerUpdateTime),
                        s.priority && "nativeBanner" == s.priority && (o.bannerFirst = !1));
                        var l = t.data.adVideoControl;
                        l && void 0 !== l ? (l.totalVideo && (o.totalVideo = l.totalVideo),
                        l.videoNum && (o.videoNum = l.videoNum),
                        l.videoInterval && (o.videoInterval = l.videoInterval)) : o.videoControlSwitch = !1;
                        var p = t.data.adIdentity;
                        p && void 0 !== p && (p.enableSwitch && (o.adIdentityEnabled = p.enableSwitch),
                        o.adIdentityEnabled && (p.adBannerId && (o.adPlugin.BANNER = p.adBannerId),
                        p.adIntersId && (o.adPlugin.INTER = p.adIntersId),
                        p.adNativeId && (o.adPlugin.NATIVE = p.adNativeId),
                        p.adVideoId && (o.adPlugin.VIDEO = p.adVideoId))),
                        o.initAdServer(),
                        o.createBanner(),
                        o.createInters(),
                        o.createVideo(),
                        o.createNative()
                    }
                }
                ,
                n.open("GET", t, !0),
                n.send();
                var i = "channelId=" + this.adPlugin.CHANNLEID + "&gameId=" + this.adPlugin.GAMEID
                  , r = new XMLHttpRequest;
                r.onreadystatechange = function() {
                    if (4 == r.readyState && 200 == r.status) {
                        var e = r.responseText;
                        if (!e)
                            return void console.log("\u521d\u59cb\u5316\u5931\u8d25");
                        console.log(e);
                        var t = JSON.parse(e);
                        if (void 0 === t || !t || !t.data)
                            return void console.log("error : is not a json");
                        if (t.data.masterSwitch && void 0 !== t.data.masterSwitch && (o.NavigateSwitch = t.data.masterSwitch),
                        !o.NavigateSwitch)
                            return void console.log("\u4e92\u63a8\u5f00\u5173\u6ca1\u6709\u5f00\u542f");
                        var n = t.data.promoData;
                        n && void 0 !== n.iconSwitch && (o.NavigateIconSwitch = n.iconSwitch),
                        n && void 0 !== n.listSwitch && (o.NavigateGroupSwitch = n.listSwitch),
                        void 0 !== t.data.promoGameList && (o.adPlugin.NavigateList = t.data.promoGameList),
                        n && void 0 !== n.desktopSwitch && (o.desktopSwitch = n.desktopSwitch),
                        o.createNavigate()
                    }
                }
                ,
                console.log(i),
                r.open("POST", "http://www.ascmob.com/fastgameserver/advert/downPromoGames", !0),
                r.setRequestHeader("Content-type", "application/x-www-form-urlencoded"),
                r.send(i),
                setInterval(function() {
                    e.startIntersTime && o.IntersIntervalTime++
                }, 1e3)
            }
            ,
            e
        }();
        o.default = i,
        cc._RF.pop()
    }
    , {
        "./AdPlugin": "AdPlugin"
    }],
    ActionInstant: [function(e, t, o) {
        "use strict";
        cc._RF.push(t, "6152e+G4SRJP5EP/YNE8Ko3", "ActionInstant"),
        Object.defineProperty(o, "__esModule", {
            value: !0
        });
        var n = cc._decorator
          , i = n.ccclass
          , r = (n.property,
        function() {
            function e() {}
            return e.show = function(e, t) {
                void 0 === t && (t = null);
                var o = cc.show();
                this.runAction(e, o, t)
            }
            ,
            e.hide = function(e, t) {
                void 0 === t && (t = null);
                var o = cc.hide();
                this.runAction(e, o, t)
            }
            ,
            e.toggleVisibility = function() {}
            ,
            e.runAction = function(e, t, o) {
                if (void 0 === o && (o = null),
                null != o) {
                    var n = cc.sequence(t, o);
                    e.runAction(n)
                } else
                    e.runAction(t)
            }
            ,
            e = __decorate([i], e)
        }());
        o.default = r,
        cc._RF.pop()
    }
    , {}],
    ActionInterval: [function(e, t, o) {
        "use strict";
        cc._RF.push(t, "33eedBGjwpFLaJmoEs1PAaY", "ActionInterval"),
        Object.defineProperty(o, "__esModule", {
            value: !0
        });
        var n = cc._decorator
          , i = n.ccclass
          , r = (n.property,
        function() {
            function e() {}
            return e.MoveTo = function(e, t, o, n) {
                void 0 === n && (n = null);
                var i = cc.moveTo(t, o);
                this.runAction(e, i, n)
            }
            ,
            e.MoveBy = function(e, t, o, n) {
                void 0 === n && (n = null);
                var i = cc.moveBy(t, o);
                this.runAction(e, i, n)
            }
            ,
            e.MoveByLoop = function(e, t, o) {
                var n = cc.moveBy(t, o)
                  , i = cc.repeatForever(n);
                e.runAction(i)
            }
            ,
            e.RotateTo = function(e, t, o, n) {
                void 0 === n && (n = null);
                var i = cc.rotateTo(t, o);
                this.runAction(e, i, n)
            }
            ,
            e.RotateBy = function(e, t, o, n) {
                void 0 === n && (n = null);
                var i = cc.rotateBy(t, o);
                this.runAction(e, i, n)
            }
            ,
            e.ScaleTo = function(e, t, o, n) {
                void 0 === n && (n = null);
                var i = cc.scaleTo(t, o.x, o.y);
                this.runAction(e, i, n)
            }
            ,
            e.ScaleBy = function(e, t, o, n) {
                void 0 === n && (n = null);
                var i = cc.scaleBy(t, o.x, o.y);
                this.runAction(e, i, n)
            }
            ,
            e.FadeTo = function(e, t, o, n) {
                void 0 === n && (n = null);
                var i = cc.fadeTo(t, o);
                this.runAction(e, i, n)
            }
            ,
            e.FadeIn = function(e, t, o) {
                void 0 === o && (o = null);
                var n = cc.fadeIn(t);
                this.runAction(e, n, o)
            }
            ,
            e.FadeOut = function(e, t, o) {
                void 0 === o && (o = null);
                var n = cc.fadeOut(t);
                this.runAction(e, n, o)
            }
            ,
            e.skewTo = function() {}
            ,
            e.jumpTo = function() {}
            ,
            e.bezierTo = function() {}
            ,
            e.blink = function() {}
            ,
            e.tintTo = function() {}
            ,
            e.Sequence = function() {}
            ,
            e.runAction = function(e, t, o) {
                if (void 0 === o && (o = null),
                null != o) {
                    var n = cc.sequence(t, cc.callFunc(o));
                    e.runAction(n)
                } else
                    e.runAction(t)
            }
            ,
            e = __decorate([i], e)
        }());
        o.default = r,
        cc._RF.pop()
    }
    , {}],
    AdManager: [function(e, t, o) {
        "use strict";
        cc._RF.push(t, "9d5b8gi9GNOqLvJtS37/z7Z", "AdManager"),
        Object.defineProperty(o, "__esModule", {
            value: !0
        });
        var n, i = e("../Advertising/ASCAd"), r = cc._decorator, a = r.ccclass, c = r.property;
        (function(e) {
            e[e.Success = 1] = "Success",
            e[e.Fail = 2] = "Fail"
        }
        )(n = o.ResultEnum || (o.ResultEnum = {})),
        function(e) {
            e.Vertiacal = "vertiacal",
            e.Horizontal = "horizontal"
        }(o.NavigateDirection || (o.NavigateDirection = {})),
        function(e) {
            e.Left = "left",
            e.Right = "right"
        }(o.NavigateSide || (o.NavigateSide = {})),
        function(e) {
            e[e.BigWindow = 1] = "BigWindow",
            e[e.BothSide = 2] = "BothSide",
            e[e.Bar = 3] = "Bar"
        }(o.SettleNavigate || (o.SettleNavigate = {}));
        var s = function(e) {
            function t() {
                var t = null !== e && e.apply(this, arguments) || this;
                return t.videoPopup = null,
                t.desktopPopup = null,
                t.allFlagToggle = !0,
                t
            }
            var o;
            return __extends(t, e),
            o = t,
            Object.defineProperty(t.prototype, "interFlag", {
                get: function() {
                    return cc.sys.platform == Number(cc.sys.DESKTOP_BROWSER) ? this.allFlagToggle : i.default.getInstance().getIntersFlag()
                },
                enumerable: !0,
                configurable: !0
            }),
            Object.defineProperty(t.prototype, "videoFlag", {
                get: function() {
                    return cc.sys.platform == Number(cc.sys.DESKTOP_BROWSER) ? this.allFlagToggle : i.default.getInstance().getVideoFlag()
                },
                enumerable: !0,
                configurable: !0
            }),
            Object.defineProperty(t.prototype, "NavigateIconFlag", {
                get: function() {
                    return cc.sys.platform == Number(cc.sys.DESKTOP_BROWSER) ? this.allFlagToggle : i.default.getInstance().getNavigateIconFlag()
                },
                enumerable: !0,
                configurable: !0
            }),
            Object.defineProperty(t.prototype, "NavigateGroupFlag", {
                get: function() {
                    return cc.sys.platform == Number(cc.sys.DESKTOP_BROWSER) ? this.allFlagToggle : i.default.getInstance().getNavigateGroupFlag()
                },
                enumerable: !0,
                configurable: !0
            }),
            Object.defineProperty(t.prototype, "NavigateSettleFlag", {
                get: function() {
                    return cc.sys.platform == Number(cc.sys.DESKTOP_BROWSER) ? this.allFlagToggle : i.default.getInstance().getNavigateSettleFlag()
                },
                enumerable: !0,
                configurable: !0
            }),
            t.prototype.onLoad = function() {
                o.Instance = this,
                cc.game.addPersistRootNode(this.node),
                i.default.getInstance().initAd()
            }
            ,
            t.prototype.showBanner = function() {
                i.default.getInstance().showBanner()
            }
            ,
            t.prototype.hideBanner = function() {
                i.default.getInstance().hideBanner()
            }
            ,
            t.prototype.showInter = function() {
                this.interFlag ? i.default.getInstance().showInters() : this.adLog("the inter flag is false")
            }
            ,
            t.prototype.showVideo = function(e) {
                var t = this;
                this.videoFlag ? i.default.getInstance().showVideo(function(o) {
                    o ? (t.adLog("the video callback success." + o),
                    e(n.Success)) : (t.adLog("the video callback fail." + o),
                    e(n.Fail))
                }) : this.adLog("the video flag is false")
            }
            ,
            t.prototype.showNavigateIcon = function(e, t, o, n) {
                this.NavigateIconFlag ? i.default.getInstance().showNavigateIcon(e, t, o, n) : this.adLog("the  NavigateIconFlag is false")
            }
            ,
            t.prototype.showNavigateGroup = function(e, t) {
                this.NavigateGroupFlag ? i.default.getInstance().showNavigateGroup(e, t) : this.adLog("the showNavigateGroup is false")
            }
            ,
            t.prototype.showNavigateSettle = function(e, t, o) {
                this.NavigateSettleFlag ? i.default.getInstance().showNavigateSettle(e, t, o) : this.adLog("the showNavigateSettle is false")
            }
            ,
            t.prototype.desktopFlag = function(e) {
                var t = this;
                i.default.getInstance().getDeskTopFlag(function(o) {
                    t.adLog("the desktopFlag is " + o),
                    e(o ? n.Success : n.Fail)
                })
            }
            ,
            t.prototype.addDeskTop = function(e) {
                var t = this;
                i.default.getInstance().addDeskTop(function(o) {
                    t.adLog("the addDeskTop is " + o),
                    e(o ? n.Success : n.Fail)
                })
            }
            ,
            t.prototype.hideNavigateIcon = function() {
                i.default.getInstance().hideNavigateIcon()
            }
            ,
            t.prototype.hideNavigateGroup = function() {
                i.default.getInstance().hideNavigateGroup()
            }
            ,
            t.prototype.hideNavigateSettle = function() {
                i.default.getInstance().hideNavigateSettle()
            }
            ,
            t.prototype.showVideoPopup = function() {
                null != this.videoPopup && (this.videoPopup.active = !0)
            }
            ,
            t.prototype.showDesktopPopup = function() {
                null != this.desktopPopup && (this.desktopPopup.active = !0)
            }
            ,
            t.prototype.start = function() {}
            ,
            t.prototype.adLog = function(e) {
                for (var t = [], o = 1; o < arguments.length; o++)
                    t[o - 1] = arguments[o];
                console.log("ad log:" + e)
            }
            ,
            __decorate([c(cc.Node)], t.prototype, "videoPopup", void 0),
            __decorate([c(cc.Node)], t.prototype, "desktopPopup", void 0),
            t = o = __decorate([a], t)
        }(cc.Component);
        o.default = s,
        cc._RF.pop()
    }
    , {
        "../Advertising/ASCAd": "ASCAd"
    }],
    AdPlugin: [function(e, t, o) {
        "use strict";
        cc._RF.push(t, "ba394g+zxxKCZpLIV9Zzj8U", "AdPlugin"),
        Object.defineProperty(o, "__esModule", {
            value: !0
        });
        var n = function() {
            function e() {
                this.INTER = "",
                this.BANNER = "",
                this.VIDEO = "",
                this.NATIVE = "",
                this.BIGNATIVE = "",
                this.APPID = "",
                this.PACKAGE = "",
                this.CHANNLEID = "",
                this.GAMEID = "",
                this.NavigateList = null,
                this.cocosGroup = "",
                this.navigateBg = null,
                this.navigateSettle = null,
                this.isTest = !0,
                this.bigImage = null,
                this.bannerUpdateTime = 30,
                this.totalVideo = 99999,
                this.videoNum = 99999,
                this.videoInterval = 0,
                this.nativeIcon = null,
                this.intersDelayTime = 0
            }
            return e.getInstance = function() {
                return e.instance || (e.instance = new e),
                e.instance
            }
            ,
            e.prototype.initAdServer = function() {}
            ,
            e.prototype.createNative = function() {}
            ,
            e.prototype.createNavigateGroup = function() {}
            ,
            e.prototype.createNavigateIcon = function() {}
            ,
            e.prototype.createIntersNative = function() {}
            ,
            e.prototype.createBanner = function() {}
            ,
            e.prototype.createInters = function() {}
            ,
            e.prototype.createVideo = function() {}
            ,
            e.prototype.showBanner = function() {}
            ,
            e.prototype.showNativeBanner = function() {}
            ,
            e.prototype.hideNativeBanner = function() {}
            ,
            e.prototype.hideBanner = function() {}
            ,
            e.prototype.showInters = function() {}
            ,
            e.prototype.getIntersFlag = function() {
                return !1
            }
            ,
            e.prototype.showSplash = function() {}
            ,
            e.prototype.getSplashFlag = function() {
                return !1
            }
            ,
            e.prototype.showVideo = function(e) {
                var t = new cc.Node("layerBg");
                t.width = 2560,
                t.height = 2560,
                t.x = cc.winSize.width / 2,
                t.y = cc.winSize.height / 2,
                t.addComponent(cc.Sprite),
                t.opacity = 200,
                cc.loader.load("http://minigame.xplaymobile.com/oppo_native_insters%5ClayerBg.png", function(e, o) {
                    t.getComponent(cc.Sprite).spriteFrame = new cc.SpriteFrame(o),
                    t.width = 2560,
                    t.height = 2560
                });
                var o = cc.director.getScene();
                o.addChild(t),
                "" != this.cocosGroup && (t.group = this.cocosGroup),
                t.zIndex = 3e4,
                t.on(cc.Node.EventType.TOUCH_START, function(e) {});
                var n = new cc.Node("titleLabel");
                n.addComponent(cc.Label),
                n.getComponent(cc.Label).fontSize = 30,
                n.getComponent(cc.Label).enableWrapText = !0,
                n.width = cc.winSize.width - 200,
                n.getComponent(cc.Label).string = "\u89c6\u9891\u64ad\u653e\u56de\u8c03\u7684\u6d4b\u8bd5",
                n.x = 0,
                n.y = 100,
                t.addChild(n);
                var i = new cc.Node("buttonSuccess");
                i.addComponent(cc.Label),
                i.getComponent(cc.Label).fontSize = 30,
                i.getComponent(cc.Label).string = "\u64ad\u653e\u6210\u529f",
                i.x = -100,
                i.y = -100,
                t.addChild(i),
                i.on(cc.Node.EventType.TOUCH_START, function(n) {
                    o.removeChild(t),
                    e(!0)
                });
                var r = new cc.Node("buttonFailed");
                r.addComponent(cc.Label),
                r.getComponent(cc.Label).fontSize = 30,
                r.getComponent(cc.Label).string = "\u64ad\u653e\u5931\u8d25",
                r.x = 100,
                r.y = -100,
                t.addChild(r),
                r.on(cc.Node.EventType.TOUCH_START, function(n) {
                    o.removeChild(t),
                    e(!1)
                })
            }
            ,
            e.prototype.getVideoFlag = function() {
                return !0
            }
            ,
            e.prototype.showNative = function(e, t, o) {
                console.log("showNative====================");
                var n = cc.director.getScene()
                  , i = this;
                cc.loader.load("https://fastgame.xplaymobile.com/navigateUI/icon/iconBg.png", function(r, a) {
                    i.bigImage = new cc.Node("bigImage"),
                    i.bigImage.addComponent(cc.Sprite),
                    i.bigImage.getComponent(cc.Sprite).spriteFrame = new cc.SpriteFrame(a),
                    i.bigImage.width = 640,
                    i.bigImage.height = 320,
                    i.bigImage.scale = e,
                    i.bigImage.x = t,
                    i.bigImage.y = o,
                    i.bigImage.zIndex = 29999,
                    "" != i.cocosGroup && (i.bigImage.group = i.cocosGroup),
                    n.addChild(i.bigImage)
                })
            }
            ,
            e.prototype.showNativeIcon = function(e, t, o, n) {
                if (console.log("showNative===================="),
                !r.nativeIcon) {
                    var i = cc.director.getScene()
                      , r = this;
                    cc.loader.load("https://fastgame.xplaymobile.com/navigateUI/icon/iconBg.png", function(a, c) {
                        r.nativeIcon = new cc.Node("nativeIcon"),
                        r.nativeIcon.addComponent(cc.Sprite),
                        r.nativeIcon.getComponent(cc.Sprite).spriteFrame = new cc.SpriteFrame(c),
                        r.nativeIcon.width = e,
                        r.nativeIcon.height = t,
                        r.nativeIcon.x = o,
                        r.nativeIcon.y = n,
                        r.nativeIcon.zIndex = 29999,
                        "" != r.cocosGroup && (r.nativeIcon.group = r.cocosGroup),
                        i.addChild(r.nativeIcon)
                    })
                }
            }
            ,
            e.prototype.getNativeFlag = function() {
                return !0
            }
            ,
            e.prototype.getNativeIconFlag = function() {
                return !0
            }
            ,
            e.prototype.showNavigateSettle = function(e, t, o) {
                switch (e) {
                case 1:
                    var n = cc.director.getScene()
                      , i = this;
                    cc.loader.load("https://xiaobao-1257650259.cos.ap-guangzhou.myqcloud.com/nativeImage/nativeInstance/jiesuan.png", function(e, r) {
                        i.navigateSettle = new cc.Node("navigateSettle"),
                        i.navigateSettle.addComponent(cc.Sprite),
                        i.navigateSettle.getComponent(cc.Sprite).spriteFrame = new cc.SpriteFrame(r),
                        cc.winSize.width < cc.winSize.height ? (i.navigateSettle.width = .65 * cc.winSize.width,
                        i.navigateSettle.height = i.navigateSettle.width / 1.15) : (i.navigateSettle.height = cc.winSize.height / 5 * 2,
                        i.navigateSettle.width = 1.15 * i.navigateSettle.height),
                        i.navigateSettle.x = t,
                        i.navigateSettle.y = o,
                        i.navigateSettle.zIndex = 3e4,
                        "" != i.cocosGroup && (i.navigateSettle.group = i.cocosGroup),
                        n.addChild(i.navigateSettle)
                    });
                    break;
                case 2:
                    n = cc.director.getScene();
                    (i = this).navigateSettle = new cc.Node("navigateSettle"),
                    i.navigateSettle.x = 0,
                    i.navigateSettle.y = 0,
                    i.navigateSettle.zIndex = 3e4,
                    "" != i.cocosGroup && (i.navigateSettle.group = i.cocosGroup),
                    n.addChild(i.navigateSettle),
                    cc.loader.load("https://xiaobao-1257650259.cos.ap-guangzhou.myqcloud.com/nativeImage/navigateSettleLeft.png", function(e, t) {
                        var o = new cc.Node("navigateSettleLeft");
                        o.addComponent(cc.Sprite),
                        o.getComponent(cc.Sprite).spriteFrame = new cc.SpriteFrame(t),
                        cc.winSize.width < cc.winSize.height ? (o.width = .2 * cc.winSize.width,
                        o.height = o.width / .39) : (o.height = cc.winSize.height - 200,
                        o.width = .39 * cc.winSize.height),
                        o.x = o.width / 2,
                        o.y = cc.winSize.height / 2,
                        i.navigateSettle.addChild(o)
                    }),
                    cc.loader.load("https://xiaobao-1257650259.cos.ap-guangzhou.myqcloud.com/nativeImage/navigateSettlleRight.png", function(e, t) {
                        var o = new cc.Node("navigateSettleRight");
                        o.addComponent(cc.Sprite),
                        o.getComponent(cc.Sprite).spriteFrame = new cc.SpriteFrame(t),
                        cc.winSize.width < cc.winSize.height ? (o.width = .2 * cc.winSize.width,
                        o.height = o.width / .39) : (o.height = cc.winSize.height - 200,
                        o.width = .39 * cc.winSize.height),
                        o.x = cc.winSize.width - o.width / 2,
                        o.y = cc.winSize.height / 2,
                        i.navigateSettle.addChild(o)
                    });
                    break;
                case 3:
                    n = cc.director.getScene(),
                    i = this;
                    cc.loader.load("https://xiaobao-1257650259.cos.ap-guangzhou.myqcloud.com/nativeImage/settleType3.png", function(e, r) {
                        i.navigateSettle = new cc.Node("navigateSettle"),
                        i.navigateSettle.addComponent(cc.Sprite),
                        i.navigateSettle.getComponent(cc.Sprite).spriteFrame = new cc.SpriteFrame(r),
                        cc.winSize.width < cc.winSize.height ? (i.navigateSettle.width = .904 * cc.winSize.width,
                        i.navigateSettle.height = .317 * i.navigateSettle.width) : (i.navigateSettle.height = cc.winSize.height / 5,
                        i.navigateSettle.width = i.navigateSettle.height / .317),
                        i.navigateSettle.x = t,
                        i.navigateSettle.y = o,
                        i.navigateSettle.zIndex = 3e4,
                        "" != i.cocosGroup && (i.navigateSettle.group = i.cocosGroup),
                        n.addChild(i.navigateSettle)
                    })
                }
            }
            ,
            e.prototype.hideNavigateSettle = function() {
                this.navigateSettle && this.navigateSettle.removeFromParent()
            }
            ,
            e.prototype.hideNative = function() {
                this.bigImage && this.bigImage.removeFromParent()
            }
            ,
            e.prototype.hideNativeIcon = function() {
                this.nativeIcon && (this.bigImage.removeFromParent(),
                this.nativeIcon = null)
            }
            ,
            e.prototype.showNativeInsters = function() {}
            ,
            e.prototype.showNavigateIcon = function(e, t, o, n) {
                var i = cc.director.getScene()
                  , r = this;
                cc.loader.load("https://fastgame.xplaymobile.com/navigateUI/icon/iconBg.png", function(a, c) {
                    r.navigateBg = new cc.Node("navigateBg"),
                    r.navigateBg.addComponent(cc.Sprite),
                    r.navigateBg.getComponent(cc.Sprite).spriteFrame = new cc.SpriteFrame(c),
                    r.navigateBg.width = e,
                    r.navigateBg.height = t,
                    r.navigateBg.x = o,
                    r.navigateBg.y = n,
                    "" != r.cocosGroup && (r.navigateBg.group = r.cocosGroup),
                    i.addChild(r.navigateBg)
                })
            }
            ,
            e.prototype.showNavigateGroup = function(e, t) {}
            ,
            e.prototype.hideNavigateIcon = function() {
                this.navigateBg && this.navigateBg.removeFromParent()
            }
            ,
            e.prototype.hideNavigateGroup = function() {}
            ,
            e.prototype.getDeskTopFlag = function(e) {
                e(!0)
            }
            ,
            e.prototype.addDeskTop = function(e) {
                e(!0)
            }
            ,
            e.prototype.setGroup = function(e) {
                this.cocosGroup = e
            }
            ,
            e.prototype.getNavigateGroupFlag = function() {
                return !0
            }
            ,
            e.prototype.getNavigateIconFlag = function() {
                return !0
            }
            ,
            e.prototype.getNavigateSettleFlag = function() {
                return !0
            }
            ,
            e
        }();
        o.default = n,
        cc._RF.pop()
    }
    , {}],
    Answer: [function(e, t, o) {
        "use strict";
        cc._RF.push(t, "aa672s6Xr1IqobrGVvf64xy", "Answer"),
        Object.defineProperty(o, "__esModule", {
            value: !0
        });
        var n = cc._decorator
          , i = n.ccclass
          , r = n.property
          , a = function(e) {
            function t() {
                var t = null !== e && e.apply(this, arguments) || this;
                return t.label = null,
                t
            }
            return __extends(t, e),
            t.prototype.onLoad = function() {}
            ,
            t.prototype.start = function() {}
            ,
            t.prototype.update = function(e) {}
            ,
            __decorate([r(cc.Node)], t.prototype, "label", void 0),
            t = __decorate([i], t)
        }(cc.Component);
        o.default = a;
        var c = function() {
            return function() {
                this.startPos = cc.Vec2.ZERO,
                this.endPos = cc.Vec2.ZERO
            }
        }();
        o.AnswerJSONObj = c,
        cc._RF.pop()
    }
    , {}],
    AudioManager: [function(e, t, o) {
        "use strict";
        cc._RF.push(t, "07492TMoBpL3KPs/48Duu7M", "AudioManager"),
        Object.defineProperty(o, "__esModule", {
            value: !0
        });
        var n, i = e("./ResourceManager"), r = e("../Main"), a = cc._decorator, c = a.ccclass, s = a.property, l = function(e) {
            function t() {
                var t = null !== e && e.apply(this, arguments) || this;
                return t.bgAudioSource = null,
                t.soundAudioSource = null,
                t.soundMap = new Map,
                t.arr = [],
                t
            }
            var o;
            return __extends(t, e),
            o = t,
            t.prototype.onLoad = function() {
                o._instance = this
            }
            ,
            t.prototype.start = function() {
                this.arr.push(n.Bomb),
                this.arr.push(n.Cut),
                this.arr.push(n.PinHit16),
                this.arr.push(n.click),
                this.loadRemoteClip(0, this.arr[0])
            }
            ,
            t.prototype.loadRemoteClip = function(e, t) {
                var o = this;
                i.ResourceManager.getInstance().loadResources("audio/" + t, cc.AudioClip, function(t) {
                    0 == e ? o.soundMap.set(n.Bomb, t) : 1 == e ? o.soundMap.set(n.Cut, t) : 2 == e ? o.soundMap.set(n.PinHit16, t) : 3 == e && o.soundMap.set(n.click, t),
                    ++e < 4 && o.loadRemoteClip(e, o.arr[e])
                })
            }
            ,
            t.prototype.PlayBg = function() {
                r.default.Instance.IsMusicToggle ? (this.bgAudioSource.play(),
                this.bgAudioSource.loop = !0) : this.stop()
            }
            ,
            t.prototype.stop = function() {
                this.bgAudioSource.stop()
            }
            ,
            t.prototype.playOneShot = function(e) {
                r.default.Instance.IsSoundToggle && (null == this.soundMap.get(e) && console.error("the music is null:" + e),
                this.soundAudioSource.clip = this.soundMap.get(e),
                this.soundAudioSource.play())
            }
            ,
            t.prototype.stopSound = function() {}
            ,
            t.prototype.stopMusic = function() {}
            ,
            t.prototype.stopAll = function() {}
            ,
            t._instance = null,
            __decorate([s(cc.AudioSource)], t.prototype, "bgAudioSource", void 0),
            __decorate([s(cc.AudioSource)], t.prototype, "soundAudioSource", void 0),
            t = o = __decorate([c], t)
        }(cc.Component);
        o.default = l,
        function(e) {
            e.Bomb = "Bomb",
            e.Cut = "Cut",
            e.PinHit16 = "PinHit16",
            e.click = "Click"
        }(n = o.AudioEnum || (o.AudioEnum = {})),
        cc._RF.pop()
    }
    , {
        "../Main": "Main",
        "./ResourceManager": "ResourceManager"
    }],
    BallExtraForce: [function(e, t, o) {
        "use strict";
        cc._RF.push(t, "1ca82667M9KjpsCSgE6ztxh", "BallExtraForce"),
        Object.defineProperty(o, "__esModule", {
            value: !0
        });
        var n = cc._decorator
          , i = n.ccclass
          , r = n.property
          , a = function(e) {
            function t() {
                var t = null !== e && e.apply(this, arguments) || this;
                return t.isEnableCollision = !1,
                t.collisionForce = cc.Vec2.ZERO,
                t.istrigger = !1,
                t
            }
            return __extends(t, e),
            t.prototype.onLoad = function() {}
            ,
            t.prototype.start = function() {}
            ,
            t.prototype.onBeginContact = function(e, t, o) {
                var n = this;
                if (!this.istrigger && this.isEnableCollision && "bottle" != o.node.group) {
                    this.istrigger = !0;
                    var i = o.node.position
                      , r = i.sub(this.node.position).mag();
                    if (r > 300)
                        return;
                    var a = i.sub(this.node.position).normalize();
                    setTimeout(function() {
                        n.getComponent(cc.RigidBody).linearVelocity = cc.v2(a.x * n.collisionForce.x, a.y * n.collisionForce.y)
                    }, 200),
                    console.log(i, r, a, this.getComponent(cc.RigidBody).linearVelocity)
                }
            }
            ,
            t.prototype.update = function(e) {}
            ,
            __decorate([r], t.prototype, "isEnableCollision", void 0),
            __decorate([r], t.prototype, "collisionForce", void 0),
            t = __decorate([i], t)
        }(cc.Component);
        o.default = a,
        cc._RF.pop()
    }
    , {}],
    BallVo: [function(e, t, o) {
        "use strict";
        cc._RF.push(t, "5fd9bOlqwhNjZyCMNJi8HIy", "BallVo"),
        Object.defineProperty(o, "__esModule", {
            value: !0
        });
        var n = e("./BaseVo")
          , i = e("../Events/EventManager")
          , r = e("../Main")
          , a = cc._decorator
          , c = a.ccclass
          , s = a.property
          , l = function(e) {
            function t() {
                var t = null !== e && e.apply(this, arguments) || this;
                return t.isConnectJoint = !0,
                t.isStaticOnLoad = !1,
                t.isAddForce = !1,
                t.initForce = 0,
                t.initForceY = 0,
                t.changeForce = cc.v2(600, 0),
                t.changeGravityScale = 2,
                t.changeDensity = 10,
                t.changeFriction = 0,
                t.timer = 0,
                t
            }
            return __extends(t, e),
            t.prototype.onLoad = function() {
                this.node.getComponent(cc.RigidBody).type = this.isStaticOnLoad ? cc.RigidBodyType.Static : cc.RigidBodyType.Dynamic,
                this.getComponent(cc.PhysicsCircleCollider).friction = 0,
                this.node.group = "ball"
            }
            ,
            t.prototype.start = function() {}
            ,
            t.prototype.boomHandle = function(e) {
                this.getComponent(cc.RigidBody).gravityScale = this.changeGravityScale,
                this.getComponent(cc.PhysicsCircleCollider).density = this.changeDensity;
                var t = e
                  , o = this.node.position.sub(t).mag()
                  , n = this.node.position.sub(t).normalize();
                this.getComponent(cc.RigidBody).linearVelocity = cc.v2(n.x * this.changeForce.x, n.y * this.changeForce.y),
                console.log(t, o, n, this.getComponent(cc.RigidBody).linearVelocity)
            }
            ,
            t.prototype.setRopeInfo = function(e, t) {}
            ,
            t.prototype.update = function(e) {
                if (this.node.position.y < -2e3) {
                    if (!r.default.Instance.gameStart)
                        return;
                    r.default.Instance.ballCount > 1 ? r.default.Instance.ballCount-- : i.default.Instance.dispatchEvent(r.default.Instance.CHECK_BOTTLE_DOWN_COUNT),
                    this.node.destroy()
                }
            }
            ,
            __decorate([s], t.prototype, "isConnectJoint", void 0),
            __decorate([s], t.prototype, "isStaticOnLoad", void 0),
            __decorate([s], t.prototype, "isAddForce", void 0),
            __decorate([s], t.prototype, "initForce", void 0),
            __decorate([s], t.prototype, "initForceY", void 0),
            __decorate([s], t.prototype, "changeForce", void 0),
            __decorate([s], t.prototype, "changeGravityScale", void 0),
            __decorate([s], t.prototype, "changeDensity", void 0),
            __decorate([s], t.prototype, "changeFriction", void 0),
            __decorate([s], t.prototype, "timer", void 0),
            t = __decorate([c], t)
        }(n.default);
        o.default = l,
        cc._RF.pop()
    }
    , {
        "../Events/EventManager": "EventManager",
        "../Main": "Main",
        "./BaseVo": "BaseVo"
    }],
    BalloonVo: [function(e, t, o) {
        "use strict";
        cc._RF.push(t, "31eabgtc59GyrCfz3GKk0ye", "BalloonVo"),
        Object.defineProperty(o, "__esModule", {
            value: !0
        });
        var n = cc._decorator
          , i = n.ccclass
          , r = n.property
          , a = function(e) {
            function t() {
                var t = null !== e && e.apply(this, arguments) || this;
                return t.linearVelocity = cc.Vec2.ZERO,
                t.rigibody = null,
                t
            }
            return __extends(t, e),
            t.prototype.onLoad = function() {}
            ,
            t.prototype.start = function() {
                this.rigibody = this.getComponent(cc.RigidBody),
                console.log("mass:", this.getComponent(cc.RigidBody).getMass()),
                cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN, this.keydownHandle, this)
            }
            ,
            t.prototype.keydownHandle = function(e) {
                e.keyCode == cc.macro.KEY.up && (this.rigibody.linearVelocity = cc.v2(0, 1e3))
            }
            ,
            t.prototype.update = function(e) {
                this.rigibody.linearVelocity = this.linearVelocity
            }
            ,
            t.prototype.onBeginContact = function(e, t, o) {
                o.node.group
            }
            ,
            __decorate([r(cc.Vec2)], t.prototype, "linearVelocity", void 0),
            t = __decorate([i], t)
        }(cc.Component);
        o.default = a,
        cc._RF.pop()
    }
    , {}],
    Ball: [function(e, t, o) {
        "use strict";
        cc._RF.push(t, "7a3b8ADK4FHl77oUUpdioHJ", "Ball"),
        Object.defineProperty(o, "__esModule", {
            value: !0
        });
        var n = e("../VO/BallVo")
          , i = e("../Main")
          , r = e("../Managers/JsonGenerator")
          , a = cc._decorator
          , c = a.ccclass
          , s = a.property
          , l = function(e) {
            function t() {
                var t = null !== e && e.apply(this, arguments) || this;
                return t.isEnableRopeJoint = !0,
                t.isAddForce = !1,
                t.linearVelocity = 2,
                t.ropeJoint = null,
                t.mRigidBody = null,
                t.timer = 0,
                t
            }
            return __extends(t, e),
            t.prototype.onLoad = function() {
                this.mRigidBody = this.node.getComponent(cc.RigidBody)
            }
            ,
            t.prototype.start = function() {
                this.isEnableRopeJoint && (this.ropeJoint = this.getComponent(cc.RopeJoint));
                var e = this;
                r.default.instance.isGenerator || this.getComponent(n.default).isAddForce && (i.default.Instance.isDebug || 6 == i.default.Instance.userData.currMaxLevel && 1 == i.default.Instance.userData.currMinLevel && (e.getComponent(cc.RigidBody).gravityScale = 5,
                e.getComponent(cc.PhysicsCircleCollider).density = 1,
                e.getComponent(cc.PhysicsCircleCollider).apply()),
                setTimeout(function() {
                    e.getComponent(cc.RigidBody).type = cc.RigidBodyType.Dynamic,
                    e.getComponent(cc.RigidBody).linearVelocity = new cc.Vec2(e.getComponent(n.default).initForce,e.getComponent(n.default).initForceY)
                }, this.getComponent(n.default).timer))
            }
            ,
            t.prototype.update = function(e) {
                this.mRigidBody
            }
            ,
            __decorate([s], t.prototype, "isEnableRopeJoint", void 0),
            __decorate([s], t.prototype, "isAddForce", void 0),
            __decorate([s], t.prototype, "linearVelocity", void 0),
            __decorate([s], t.prototype, "timer", void 0),
            t = __decorate([c], t)
        }(cc.Component);
        o.default = l,
        cc._RF.pop()
    }
    , {
        "../Main": "Main",
        "../Managers/JsonGenerator": "JsonGenerator",
        "../VO/BallVo": "BallVo"
    }],
    BaseJoint: [function(e, t, o) {
        "use strict";
        cc._RF.push(t, "b0027VopoxJO6PZMm2XdT9a", "BaseJoint"),
        Object.defineProperty(o, "__esModule", {
            value: !0
        });
        var n = cc._decorator
          , i = n.ccclass
          , r = (n.property,
        function(e) {
            function t() {
                return null !== e && e.apply(this, arguments) || this
            }
            return __extends(t, e),
            t = __decorate([i], t)
        }(cc.Component));
        o.default = r,
        cc._RF.pop()
    }
    , {}],
    BasePanel: [function(e, t, o) {
        "use strict";
        cc._RF.push(t, "4a4d5Qn9KtLiaNqIRC8tHmi", "BasePanel"),
        Object.defineProperty(o, "__esModule", {
            value: !0
        });
        var n = cc._decorator
          , i = n.ccclass
          , r = (n.property,
        function(e) {
            function t() {
                var t = null !== e && e.apply(this, arguments) || this;
                return t.panelEnum = null,
                t
            }
            return __extends(t, e),
            t.prototype.onLoad = function() {}
            ,
            t.prototype.start = function() {}
            ,
            t.prototype.setDataInfo = function() {
                for (var e = [], t = 0; t < arguments.length; t++)
                    e[t] = arguments[t]
            }
            ,
            t.prototype.show = function() {
                for (var e = [], t = 0; t < arguments.length; t++)
                    e[t] = arguments[t];
                this.node.active = !0,
                console.log("show panel is : " + this.node.name),
                this.node.setPosition(cc.Vec2.ZERO)
            }
            ,
            t.prototype.hide = function() {
                this.node.active = !1
            }
            ,
            t.prototype.update = function(e) {}
            ,
            t = __decorate([i], t)
        }(cc.Component));
        o.default = r,
        cc._RF.pop()
    }
    , {}],
    BasePopup: [function(e, t, o) {
        "use strict";
        cc._RF.push(t, "963ffbjMDlF87bm+Wpq6rZm", "BasePopup"),
        Object.defineProperty(o, "__esModule", {
            value: !0
        });
        var n = cc._decorator
          , i = n.ccclass
          , r = (n.property,
        function(e) {
            function t() {
                return null !== e && e.apply(this, arguments) || this
            }
            return __extends(t, e),
            t.prototype.start = function() {}
            ,
            t.prototype.show = function() {}
            ,
            t.prototype.hide = function() {}
            ,
            t.prototype.onDestroy = function() {}
            ,
            t = __decorate([i], t)
        }(cc.Component));
        o.default = r,
        cc._RF.pop()
    }
    , {}],
    BaseVo: [function(e, t, o) {
        "use strict";
        cc._RF.push(t, "2ecb4AXwTNLIo6SY/beJopQ", "BaseVo"),
        Object.defineProperty(o, "__esModule", {
            value: !0
        });
        var n = e("./VOEnum")
          , i = cc._decorator
          , r = i.ccclass
          , a = i.property
          , c = function(e) {
            function t() {
                var t = null !== e && e.apply(this, arguments) || this;
                return t.itemType = 0,
                t
            }
            return __extends(t, e),
            t.prototype.update = function(e) {}
            ,
            t.prototype.onBeginContact = function(e, t, o) {}
            ,
            t.prototype.setRigidInfo = function(e) {
                this.node.getComponent(cc.RigidBody).type = e.type,
                this.node.getComponent(cc.RigidBody).gravityScale = e.gravityScale,
                this.node.getComponent(cc.RigidBody).fixedRotation = e.fixedRot,
                this.node.getComponent(cc.RigidBody).linearVelocity = e.linearVelocity
            }
            ,
            t.prototype.setBoxColliderInfo = function(e) {
                this.getComponent(cc.PhysicsBoxCollider).size = e.size,
                this.getComponent(cc.PhysicsBoxCollider).offset = e.offset,
                this.setColliderInfo(this.getComponent(cc.PhysicsBoxCollider), e),
                this.getComponent(cc.PhysicsBoxCollider).apply()
            }
            ,
            t.prototype.setCircleColliderInfo = function(e) {
                this.getComponent(cc.PhysicsCircleCollider).offset = e.offset,
                this.getComponent(cc.PhysicsCircleCollider).radius = e.radius,
                this.setColliderInfo(this.getComponent(cc.PhysicsCircleCollider), e),
                this.getComponent(cc.PhysicsCircleCollider).apply()
            }
            ,
            t.prototype.setColliderInfo = function(e, t) {
                e.density = t.density,
                e.sensor = t.sensor,
                e.friction = t.friction,
                e.restitution = t.restitution
            }
            ,
            t.prototype.setRopeJointInfo = function(e) {
                this.getComponent(cc.RopeJoint).maxLength = e.maxLength,
                this.setJointInfo(this.getComponent(cc.RopeJoint), e),
                this.getComponent(cc.RopeJoint).apply()
            }
            ,
            t.prototype.setDistanceInfo = function(e) {
                this.getComponent(cc.DistanceJoint).distance = e.maxLength,
                this.setJointInfo(this.getComponent(cc.DistanceJoint), e),
                this.getComponent(cc.DistanceJoint).apply()
            }
            ,
            t.prototype.setBallInfo = function(e) {}
            ,
            t.prototype.setRevoluteJointInfo = function() {}
            ,
            t.prototype.setJointInfo = function(e, t) {
                e.anchor = t.anchor,
                e.connectedAnchor = t.connectedAnchor
            }
            ,
            __decorate([a({
                type: cc.Enum(n.ItemType)
            })], t.prototype, "itemType", void 0),
            t = __decorate([r], t)
        }(cc.Component);
        o.default = c;
        var s = function() {
            function e() {
                this.name = "",
                this.group = "",
                this.pos = cc.Vec2.ZERO,
                this.scale = cc.Vec2.ONE,
                this.rot = 0,
                this.size = cc.Size.ZERO,
                this.bodyType = cc.RigidBodyType.Static,
                this.itemType = n.ItemType.Ball
            }
            return e.prototype.setBaseInfo = function(e, t) {
                e.group = t.group,
                e.name = t.name,
                e.pos = t.position,
                e.scale = new cc.Vec2(t.scaleX,t.scaleY),
                e.rot = t.angle,
                e.size = t.getContentSize()
            }
            ,
            e.prototype.setRigidInfo = function(e) {
                var t = new f
                  , o = e.getComponent(cc.RigidBody);
                return t.gravityScale = o.gravityScale,
                t.linearVelocity = o.linearVelocity,
                t.type = o.type,
                t.fixedRot = o.fixedRotation,
                t
            }
            ,
            e.prototype.setColliderInfo = function(e) {
                var t = new v;
                return t.density = e.density,
                t.friction = e.friction,
                t.offset = e.offset,
                t.restitution = e.restitution,
                t.sensor = e.sensor,
                t
            }
            ,
            e.prototype.setJointInfo = function(e, t, o) {
                return e.anchor = t.anchor,
                e.connectedAnchor = t.connectedAnchor,
                e.maxLength = o,
                e
            }
            ,
            e
        }();
        o.BaseTable = s;
        var l = function(e) {
            function t() {
                var t = null !== e && e.apply(this, arguments) || this;
                return t.maxLength = 0,
                t.rigid = new f,
                t.collider = new m,
                t.joints = [],
                t.isAddForce = !1,
                t.initForce = 0,
                t.initForceY = 0,
                t.changeForce = cc.v2(600, 0),
                t.changeGravityScale = 1,
                t.changeDensity = 1,
                t.changeFriction = 0,
                t.timer = 0,
                t
            }
            return __extends(t, e),
            t
        }(s);
        o.BallTable = l;
        var p = function(e) {
            function t() {
                var t = null !== e && e.apply(this, arguments) || this;
                return t.anchor = cc.Vec2.ZERO,
                t.connectedAnchor = cc.Vec2.ZERO,
                t.maxLength = 0,
                t.rigid = new f,
                t.collider = new m,
                t.isVisibleSprite = !1,
                t
            }
            return __extends(t, e),
            t
        }(s);
        o.JointTable = p;
        var d = function(e) {
            function t() {
                var t = null !== e && e.apply(this, arguments) || this;
                return t.joints = [],
                t.collider = new y,
                t.size = cc.Size.ZERO,
                t
            }
            return __extends(t, e),
            t
        }(s);
        o.ColliderJointTable = d;
        var u = function(e) {
            function t() {
                var t = null !== e && e.apply(this, arguments) || this;
                return t.colliderType = n.ColliderType.Box,
                t.rigid = new f,
                t.collider = new y,
                t.joints = [],
                t
            }
            return __extends(t, e),
            t
        }(s);
        o.BoardTable = u;
        var h = function(e) {
            function t() {
                var t = null !== e && e.apply(this, arguments) || this;
                return t.colliderAfterForce = cc.Vec2.ZERO,
                t
            }
            return __extends(t, e),
            t
        }(s);
        o.BottleTable = h;
        var g = function(e) {
            function t() {
                var t = null !== e && e.apply(this, arguments) || this;
                return t.isRangeBoom = !1,
                t.initForce = cc.Vec2.ZERO,
                t.rigid = new f,
                t.collider = new y,
                t.joints = [],
                t
            }
            return __extends(t, e),
            t
        }(s);
        o.BoomTable = g;
        var f = function() {
            return function() {
                this.gravityScale = 0,
                this.linearVelocity = cc.Vec2.ZERO,
                this.fixedRot = !1
            }
        }();
        o.RigidBodyVo = f;
        var v = function() {
            return function() {
                this.offset = cc.Vec2.ZERO
            }
        }();
        o.ColliderVo = v;
        var y = function(e) {
            function t() {
                var t = null !== e && e.apply(this, arguments) || this;
                return t.size = cc.Size.ZERO,
                t
            }
            return __extends(t, e),
            t
        }(v);
        o.PhysicsBoxColliderVo = y;
        var m = function(e) {
            function t() {
                var t = null !== e && e.apply(this, arguments) || this;
                return t.radius = 0,
                t
            }
            return __extends(t, e),
            t
        }(v);
        o.PhysicsCircleColliderVo = m;
        var _ = function() {
            return function() {}
        }();
        o.JointVo = _,
        cc._RF.pop()
    }
    , {
        "./VOEnum": "VOEnum"
    }],
    BoardColliderVo: [function(e, t, o) {
        "use strict";
        cc._RF.push(t, "7f8d0Vxmh9DmpQsQ7JMb2tO", "BoardColliderVo"),
        Object.defineProperty(o, "__esModule", {
            value: !0
        });
        var n = e("./BoardVo")
          , i = e("./VOEnum")
          , r = cc._decorator
          , a = r.ccclass
          , c = r.property
          , s = function(e) {
            function t() {
                var t = null !== e && e.apply(this, arguments) || this;
                return t.colliderType = i.ColliderType.Box,
                t
            }
            return __extends(t, e),
            t.prototype.onLoad = function() {
                this.node.getComponent(cc.Sprite) && (this.node.getComponent(cc.Sprite).enabled = !1)
            }
            ,
            t.prototype.start = function() {}
            ,
            t.prototype.update = function(t) {
                e.prototype.update.call(this, t)
            }
            ,
            __decorate([c({
                type: cc.Enum(i.ColliderType)
            })], t.prototype, "colliderType", void 0),
            t = __decorate([a], t)
        }(n.default);
        o.default = s,
        cc._RF.pop()
    }
    , {
        "./BoardVo": "BoardVo",
        "./VOEnum": "VOEnum"
    }],
    BoardParent: [function(e, t, o) {
        "use strict";
        cc._RF.push(t, "8460bONeGZKFqbDG+DSl1aj", "BoardParent"),
        Object.defineProperty(o, "__esModule", {
            value: !0
        });
        var n = e("../UI/UIUtility/ActionInterval")
          , i = cc._decorator
          , r = i.ccclass
          , a = i.property
          , c = function(e) {
            function t() {
                var t = null !== e && e.apply(this, arguments) || this;
                return t.isMove = !1,
                t
            }
            return __extends(t, e),
            t.prototype.onLoad = function() {}
            ,
            t.prototype.start = function() {
                this.isMove && n.default.MoveBy(this.node, 1, new cc.Vec2(0,100), this.down.bind(this))
            }
            ,
            t.prototype.up = function() {
                n.default.MoveBy(this.node, 1, new cc.Vec2(0,100), this.down.bind(this))
            }
            ,
            t.prototype.down = function() {
                n.default.MoveBy(this.node, 1, new cc.Vec2(0,-100), this.up.bind(this))
            }
            ,
            t.prototype.update = function(e) {
                this.isMove
            }
            ,
            __decorate([a], t.prototype, "isMove", void 0),
            t = __decorate([r], t)
        }(cc.Component);
        o.default = c,
        cc._RF.pop()
    }
    , {
        "../UI/UIUtility/ActionInterval": "ActionInterval"
    }],
    BoardVo: [function(e, t, o) {
        "use strict";
        cc._RF.push(t, "6a831Q3q91M4o8JsbfW1xMK", "BoardVo"),
        Object.defineProperty(o, "__esModule", {
            value: !0
        });
        var n = e("./BaseVo")
          , i = e("./VOEnum")
          , r = e("../UI/UIUtility/ActionInterval")
          , a = cc._decorator
          , c = a.ccclass
          , s = a.property
          , l = function(e) {
            function t() {
                var t = null !== e && e.apply(this, arguments) || this;
                return t.boardType = i.BoardType.Straight,
                t.isMove = !1,
                t.offsetY = 0,
                t.supper = 1.5,
                t
            }
            return __extends(t, e),
            t.prototype.onLoad = function() {}
            ,
            t.prototype.setBoardType = function(e) {
                this.boardType = e
            }
            ,
            t.prototype.start = function() {
                this.isMove
            }
            ,
            t.prototype.up = function() {
                r.default.MoveBy(this.node, 1, new cc.Vec2(0,100), this.down.bind(this))
            }
            ,
            t.prototype.down = function() {
                r.default.MoveBy(this.node, 1, new cc.Vec2(0,-100), this.up.bind(this))
            }
            ,
            t.prototype.update = function(t) {
                e.prototype.update.call(this, t),
                this.isMove && (this.offsetY += 1,
                this.node.position = this.node.position.add(new cc.Vec2(0,this.supper)),
                this.offsetY > 120 && (this.supper *= -1,
                this.offsetY = 0))
            }
            ,
            __decorate([s({
                type: cc.Enum(i.BoardType)
            })], t.prototype, "boardType", void 0),
            __decorate([s], t.prototype, "isMove", void 0),
            t = __decorate([c], t)
        }(n.default);
        o.default = l,
        cc._RF.pop()
    }
    , {
        "../UI/UIUtility/ActionInterval": "ActionInterval",
        "./BaseVo": "BaseVo",
        "./VOEnum": "VOEnum"
    }],
    BoomVo: [function(e, t, o) {
        "use strict";
        cc._RF.push(t, "bb4d3klN5hGf763M3SIyPny", "BoomVo"),
        Object.defineProperty(o, "__esModule", {
            value: !0
        });
        var n = e("./BaseVo")
          , i = e("../Events/EventManager")
          , r = e("../Main")
          , a = e("./BallVo")
          , c = e("../Managers/AudioManager")
          , s = cc._decorator
          , l = s.ccclass
          , p = s.property
          , d = function(e) {
            function t() {
                var t = null !== e && e.apply(this, arguments) || this;
                return t.isRangeBoom = !1,
                t.initForce = cc.Vec2.ZERO,
                t.timer = null,
                t.isSettingDelayShot = !0,
                t.delayShot = 0,
                t.isTrigger = !1,
                t
            }
            var o;
            return __extends(t, e),
            o = t,
            t.prototype.onLoad = function() {}
            ,
            t.prototype.start = function() {
                var e = this
                  , t = this;
                this.isSettingDelayShot && setTimeout(function() {
                    t.getComponent(cc.RigidBody).type = cc.RigidBodyType.Dynamic,
                    t.getComponent(cc.RigidBody).linearVelocity = e.initForce
                }, this.delayShot)
            }
            ,
            t.prototype.shotBoom = function() {}
            ,
            t.prototype.onBeginContact = function(e, t, n) {
                if ("ball" == n.node.group && (r.default.Instance.isDebug || c.default._instance.playOneShot(c.AudioEnum.Bomb),
                !this.isTrigger)) {
                    this.isTrigger = !0,
                    i.default.Instance.dispatchEvent(o.BOOM_EVENT_START, {
                        _node: cc.Node,
                        pos: this.node.position,
                        isAddForce: this.isRangeBoom
                    }),
                    n.node.getComponent(a.default) && n.node.getComponent(a.default).boomHandle(this.node.position),
                    this.getComponent(cc.PhysicsBoxCollider).enabled = !1,
                    this.timer.getComponent(cc.ParticleSystem).resetSystem();
                    var s = this;
                    this.scheduleOnce(function() {
                        s.node.destroy()
                    }, .2)
                }
            }
            ,
            t.prototype.update = function(e) {
                this.node.position.y < -2e3 && this.node.destroy()
            }
            ,
            t.BOOM_EVENT_START = "boom_event_start",
            __decorate([p], t.prototype, "isRangeBoom", void 0),
            __decorate([p(cc.Vec2)], t.prototype, "initForce", void 0),
            __decorate([p(cc.Node)], t.prototype, "timer", void 0),
            __decorate([p], t.prototype, "isSettingDelayShot", void 0),
            __decorate([p], t.prototype, "delayShot", void 0),
            t = o = __decorate([l], t)
        }(n.default);
        o.default = d,
        cc._RF.pop()
    }
    , {
        "../Events/EventManager": "EventManager",
        "../Main": "Main",
        "../Managers/AudioManager": "AudioManager",
        "./BallVo": "BallVo",
        "./BaseVo": "BaseVo"
    }],
    BottleVo: [function(e, t, o) {
        "use strict";
        cc._RF.push(t, "94a1f3m2OBI/rnJLPX0EIEL", "BottleVo"),
        Object.defineProperty(o, "__esModule", {
            value: !0
        });
        var n = e("./BaseVo")
          , i = e("../Main")
          , r = e("../Events/EventManager")
          , a = e("./BoomVo")
          , c = e("../Managers/AudioManager")
          , s = cc._decorator
          , l = s.ccclass
          , p = s.property
          , d = function(e) {
            function t() {
                var t = null !== e && e.apply(this, arguments) || this;
                return t.initPos = cc.Vec2.ZERO,
                t.colliderAfterForce = cc.Vec2.ZERO,
                t.index = 0,
                t.isTrigger = !1,
                t.isPlaySound = !1,
                t
            }
            return __extends(t, e),
            t.prototype.onLoad = function() {}
            ,
            t.prototype.start = function() {
                i.default.Instance.bottleNum++,
                i.default.Instance.bottleNodes.push(this.node),
                this.node.getComponent(cc.RigidBody).enabledContactListener = !0,
                this.initPos = this.node.position,
                r.default.Instance.addListener(a.default.BOOM_EVENT_START, this.boomEventHandle, this),
                i.default.Instance.isDebug || "6_4" != i.default.Instance.getLevel() || "7_1" != i.default.Instance.getLevel() || "7_3" == i.default.Instance.getLevel() || (this.getComponent(cc.PhysicsPolygonCollider).friction = 0,
                this.getComponent(cc.PhysicsPolygonCollider).density = .01,
                this.createPolygonPoints())
            }
            ,
            t.prototype.createPolygonPoints = function() {
                var e = this.node.width
                  , t = this.node.height
                  , o = cc.v2(-e / 2, t / 3)
                  , n = cc.v2(e / 2, t / 3)
                  , i = cc.v2(-e / 2, 0)
                  , r = cc.v2(e / 2, 0)
                  , a = cc.v2(e / 4, t)
                  , c = cc.v2(e / 4, 2 / 9 * t)
                  , s = [];
                s.push(i),
                s.push(r),
                s.push(n),
                s.push(a);
                for (var l = 1; l <= 3; l++) {
                    var p = cc.v2(l * c.x - e / 2, l * (2 / 9) * t + t / 3);
                    s.push(p)
                }
                s.push(o),
                this.getComponent(cc.PhysicsPolygonCollider).points = s,
                this.getComponent(cc.PhysicsPolygonCollider).restitution = 1,
                this.getComponent(cc.PhysicsPolygonCollider).apply()
            }
            ,
            t.prototype.boomEventHandle = function(e) {
                if (0 != e.detail.isAddForce) {
                    this.getComponent(cc.RigidBody).gravityScale = 1,
                    this.getComponent(cc.PhysicsBoxCollider).density = 3;
                    var t = e.detail.pos
                      , o = this.node.position.sub(t).mag();
                    if (!(o > 300)) {
                        var n = Math.cos((this.node.position.x - t.x) / o) * (180 / Math.PI)
                          , a = this.node.position.sub(t).normalize();
                        this.getComponent(cc.RigidBody).linearVelocity = cc.v2(800 * a.x, Math.abs(300 * a.y)),
                        r.default.Instance.dispatchEvent(i.default.Instance.TRIGGER_BOTTLE),
                        console.log(t, o, n, a, this.getComponent(cc.RigidBody).linearVelocity)
                    }
                }
            }
            ,
            t.prototype.checkFallDown = function() {
                if (!this.isTrigger)
                    return Math.abs(this.node.position.y - this.initPos.y) > 5 && (this.isTrigger = !0,
                    !0)
            }
            ,
            t.prototype.onBeginContact = function(t, o, n) {
                if (e.prototype.onBeginContact.call(this, t, o, n),
                "ball" == n.node.group && i.default.Instance.gameStart && ("6_1" != i.default.Instance.getLevel() && "7_2" != i.default.Instance.getLevel() && "7_3" != i.default.Instance.getLevel() && "11_3" != i.default.Instance.getLevel() || (this.getComponent(cc.RigidBody).linearVelocity = cc.v2(200, 0)),
                this.isPlaySound || (c.default._instance.playOneShot(c.AudioEnum.PinHit16),
                this.isPlaySound = !0),
                !this.isTrigger)) {
                    setTimeout(function() {}, 700)
                }
            }
            ,
            t.prototype.checkTrigger = function() {
                Math.abs(this.node.position.y - this.initPos.y)
            }
            ,
            __decorate([p(cc.Vec2)], t.prototype, "colliderAfterForce", void 0),
            t = __decorate([l], t)
        }(n.default);
        o.default = d,
        cc._RF.pop()
    }
    , {
        "../Events/EventManager": "EventManager",
        "../Main": "Main",
        "../Managers/AudioManager": "AudioManager",
        "./BaseVo": "BaseVo",
        "./BoomVo": "BoomVo"
    }],
    BoxVo: [function(e, t, o) {
        "use strict";
        cc._RF.push(t, "f1fc5GbJh9DL5EWjXz9auEz", "BoxVo"),
        Object.defineProperty(o, "__esModule", {
            value: !0
        });
        var n = e("./BaseVo")
          , i = cc._decorator
          , r = i.ccclass
          , a = i.property
          , c = function(e) {
            function t() {
                var t = null !== e && e.apply(this, arguments) || this;
                return t.isTrigger = !1,
                t
            }
            return __extends(t, e),
            t.prototype.onLoad = function() {}
            ,
            t.prototype.start = function() {}
            ,
            t.prototype.update = function(e) {}
            ,
            t.prototype.onBeginContact = function(t, o, n) {
                if (e.prototype.onBeginContact.call(this, t, o, n),
                "ball" == n.node.group) {
                    if (this.isTrigger)
                        return;
                    this.isTrigger = !0;
                    var i = this;
                    this.node.getComponent(cc.Sprite).spriteFrame = null,
                    this.node.removeComponent(cc.PhysicsBoxCollider),
                    this.boomParticle.node.active = !0,
                    this.boomParticle.playAnimation("newAnimation", 1),
                    this.scheduleOnce(function() {
                        i.node.destroy()
                    }, 1.5)
                }
            }
            ,
            __decorate([a(dragonBones.ArmatureDisplay)], t.prototype, "boomParticle", void 0),
            t = __decorate([r], t)
        }(n.default);
        o.default = c,
        cc._RF.pop()
    }
    , {
        "./BaseVo": "BaseVo"
    }],
    CarVo: [function(e, t, o) {
        "use strict";
        cc._RF.push(t, "5446bDTCXVNjItU8Je5h+ri", "CarVo"),
        Object.defineProperty(o, "__esModule", {
            value: !0
        });
        var n = e("./BaseVo")
          , i = cc._decorator
          , r = i.ccclass
          , a = i.property
          , c = function(e) {
            function t() {
                var t = null !== e && e.apply(this, arguments) || this;
                return t.changeGravityScale = 1,
                t.changeDensity = 1,
                t.changeFriction = 0,
                t
            }
            return __extends(t, e),
            t.prototype.onLoad = function() {}
            ,
            t.prototype.start = function() {}
            ,
            t.prototype.update = function(e) {}
            ,
            __decorate([a], t.prototype, "changeGravityScale", void 0),
            __decorate([a], t.prototype, "changeDensity", void 0),
            __decorate([a], t.prototype, "changeFriction", void 0),
            t = __decorate([r], t)
        }(n.default);
        o.default = c,
        cc._RF.pop()
    }
    , {
        "./BaseVo": "BaseVo"
    }],
    CirclingMotion: [function(e, t, o) {
        "use strict";
        cc._RF.push(t, "87ba9D/yJ1FprfGGP0pIXQm", "CirclingMotion"),
        Object.defineProperty(o, "__esModule", {
            value: !0
        });
        var n = cc._decorator
          , i = n.ccclass
          , r = n.property
          , a = function(e) {
            function t() {
                var t = null !== e && e.apply(this, arguments) || this;
                return t.radius = 100,
                t.angleSpeed = 10,
                t.speedAccelerated = 6,
                t.angle = 0,
                t.currPos = cc.Vec2.ZERO,
                t.centerPos = cc.Vec2.ZERO,
                t.startMove = !1,
                t.targetNode = null,
                t._x = 0,
                t._y = 0,
                t
            }
            return __extends(t, e),
            t.prototype.onLoad = function() {
                this.targetNode = this.node
            }
            ,
            t.prototype.start = function() {}
            ,
            t.prototype.runCirclingMotion = function(e, t, o, n, i) {
                this.targetNode = e,
                this.angle = t,
                this.angleSpeed = o,
                this.centerPos = n,
                this.radius = i,
                this.startMove = !0
            }
            ,
            t.prototype.update = function(e) {
                this.startMove && (this.angle < 320 ? (this.angle += this.angleSpeed * e,
                this.angleSpeed += this.speedAccelerated,
                this._x = this.centerPos.x + Math.cos(this.angle * Math.PI / 180) * this.radius,
                this._y = this.centerPos.x + Math.sin(this.angle * Math.PI / 180) * this.radius,
                this.targetNode.position = cc.v2(this._x, this._y)) : (this.targetNode.getComponent(cc.RigidBody).gravityScale = 5,
                this.startMove = !1))
            }
            ,
            __decorate([r], t.prototype, "radius", void 0),
            __decorate([r], t.prototype, "angleSpeed", void 0),
            __decorate([r], t.prototype, "speedAccelerated", void 0),
            __decorate([r], t.prototype, "angle", void 0),
            __decorate([r(cc.Vec2)], t.prototype, "currPos", void 0),
            __decorate([r(cc.Vec2)], t.prototype, "centerPos", void 0),
            t = __decorate([i], t)
        }(cc.Component);
        o.default = a,
        cc._RF.pop()
    }
    , {}],
    CustomEvent: [function(e, t, o) {
        "use strict";
        cc._RF.push(t, "ace33FkWWZKkraZd6cdrPFn", "CustomEvent"),
        Object.defineProperty(o, "__esModule", {
            value: !0
        });
        var n = cc._decorator
          , i = n.ccclass
          , r = (n.property,
        function(e) {
            function t(t, o, n) {
                var i = e.call(this, t, o) || this;
                return null != n && i.setUserData(n),
                i
            }
            return __extends(t, e),
            t.prototype.setData = function(e) {
                this.setUserData(e)
            }
            ,
            t = __decorate([i], t)
        }(cc.Event.EventCustom));
        o.default = r,
        cc._RF.pop()
    }
    , {}],
    DelayShoot: [function(e, t, o) {
        "use strict";
        cc._RF.push(t, "6e40bqxjtZC/INwzVW/5MwA", "DelayShoot"),
        Object.defineProperty(o, "__esModule", {
            value: !0
        });
        var n = e("../Main")
          , i = e("../Managers/AudioManager")
          , r = e("../VO/BallVo")
          , a = cc._decorator
          , c = a.ccclass
          , s = (a.property,
        function(e) {
            function t() {
                var t = null !== e && e.apply(this, arguments) || this;
                return t.initForce = new cc.Vec2(0,0),
                t.startTimer = 200,
                t
            }
            return __extends(t, e),
            t.prototype.onLoad = function() {}
            ,
            t.prototype.start = function() {
                var e = this;
                this.getComponent(cc.RigidBody).type = cc.RigidBodyType.Static;
                var t = this;
                this.scheduleOnce(function() {
                    t.getComponent(cc.RigidBody).type = cc.RigidBodyType.Dynamic,
                    t.getComponent(cc.RigidBody).linearVelocity = e.initForce
                }, this.startTimer / 1e3)
            }
            ,
            t.prototype.update = function(e) {}
            ,
            t.prototype.onBeginContact = function(e, t, o) {
                "ball" == o.node.group && (n.default.Instance.isDebug || i.default._instance.playOneShot(i.AudioEnum.PinHit16),
                o.node.getComponent(r.default).boomHandle(this.node.position))
            }
            ,
            t = __decorate([c], t)
        }(cc.Component));
        o.default = s,
        cc._RF.pop()
    }
    , {
        "../Main": "Main",
        "../Managers/AudioManager": "AudioManager",
        "../VO/BallVo": "BallVo"
    }],
    Emitter: [function(e, t, o) {
        "use strict";
        cc._RF.push(t, "94567fpWMpKepYdc9mm6eoJ", "Emitter"),
        Object.defineProperty(o, "__esModule", {
            value: !0
        });
        var n = e("../Tools/ObjectTool")
          , i = e("./DelayShoot")
          , r = cc._decorator
          , a = r.ccclass
          , c = r.property
          , s = function(e) {
            function t() {
                var t = null !== e && e.apply(this, arguments) || this;
                return t.emitNode = null,
                t.intervalTimer = 100,
                t.shootIntervalTimer = 2e3,
                t.initForce = cc.Vec2.ZERO,
                t.initPos = cc.Vec2.ZERO,
                t.initGravity = 1,
                t.interval = null,
                t
            }
            return __extends(t, e),
            t.prototype.onLoad = function() {}
            ,
            t.prototype.start = function() {
                for (var e = 0; e < 5; e++)
                    this.shoot(e);
                var t = this;
                this.interval = setInterval(function() {
                    for (var e = 0; e < 5; e++)
                        t.shoot(e)
                }, this.shootIntervalTimer)
            }
            ,
            t.prototype.shoot = function(e) {
                if (null != this.emitNode && void 0 != this.emitNode) {
                    var t = n.ObjectTool.instanceWithPrefab(this.emitNode.name, this.emitNode, this.node);
                    t.position = this.initPos,
                    t.getComponent(cc.RigidBody).gravityScale = this.initGravity,
                    t.getComponent(i.default).initForce = this.initForce,
                    t.getComponent(i.default).startTimer = e * this.intervalTimer
                } else
                    this.interval && clearInterval(this.interval)
            }
            ,
            t.prototype.update = function(e) {}
            ,
            __decorate([c(cc.Prefab)], t.prototype, "emitNode", void 0),
            __decorate([c], t.prototype, "intervalTimer", void 0),
            __decorate([c], t.prototype, "shootIntervalTimer", void 0),
            __decorate([c(cc.Vec2)], t.prototype, "initForce", void 0),
            __decorate([c(cc.Vec2)], t.prototype, "initPos", void 0),
            __decorate([c], t.prototype, "initGravity", void 0),
            t = __decorate([a], t)
        }(cc.Component);
        o.default = s,
        cc._RF.pop()
    }
    , {
        "../Tools/ObjectTool": "ObjectTool",
        "./DelayShoot": "DelayShoot"
    }],
    EventManager: [function(e, t, o) {
        "use strict";
        cc._RF.push(t, "17f118abMJBtrL3WYdZGnab", "EventManager"),
        Object.defineProperty(o, "__esModule", {
            value: !0
        });
        var n = cc._decorator
          , i = n.ccclass
          , r = (n.property,
        function(e) {
            function t() {
                return null !== e && e.apply(this, arguments) || this
            }
            var o;
            return __extends(t, e),
            o = t,
            t.prototype.onLoad = function() {
                o.Instance = this
            }
            ,
            t.prototype.start = function() {}
            ,
            t.prototype.dispatchEvent = function(e, t) {
                var o = new cc.Event.EventCustom(e,!0);
                null != t && o.setUserData(t),
                this.node.dispatchEvent(o)
            }
            ,
            t.prototype.addListener = function(e, t, o) {
                this.node.on(e, t, o)
            }
            ,
            t.prototype.closeListener = function(e, t) {
                this.node.off(e, t)
            }
            ,
            t.createEventHandler = function(e, t, o, n) {
                var i = new cc.Component.EventHandler;
                return i.target = e,
                i.component = t,
                i.handler = o,
                i.customEventData = n,
                i
            }
            ,
            t.prototype.update = function(e) {}
            ,
            t.Instance = null,
            t = o = __decorate([i], t)
        }(cc.Component));
        o.default = r,
        cc._RF.pop()
    }
    , {}],
    EventNames: [function(e, t, o) {
        "use strict";
        cc._RF.push(t, "d8d24d/wA9BO750id452PyK", "EventNames"),
        Object.defineProperty(o, "__esModule", {
            value: !0
        });
        var n = function() {
            function e() {}
            return e.SWITCH_PANEL = "switch_panel",
            e
        }();
        o.default = n,
        cc._RF.pop()
    }
    , {}],
    EventType: [function(e, t, o) {
        "use strict";
        cc._RF.push(t, "1c495kLTzBGXrZK3lefUW+4", "EventType"),
        Object.defineProperty(o, "__esModule", {
            value: !0
        });
        var n = function() {
            function e() {}
            return e.EVENT_NAME = "event_name",
            e.SHOW_TIP = "show_tip",
            e.ADD_DESKTOP = "add_desktop",
            e
        }();
        o.EventType = n;
        var i = function() {
            function e() {}
            return e.MOUSE_CLICK = "click",
            e.MOUSE_DOWN = "mousedown",
            e.MOUSE_ENTER = "mouseenter",
            e.MOUSE_MOVE = "mousemove",
            e.MOUSE_LEAVE = "mouseleave",
            e.MOUSE_UP = "mouseup",
            e.MOUSE_WHEEL = "mousewheel",
            e.TOUCH_START = "touchstart",
            e.TOUCH_MOVE = "touchmove",
            e.TOUCH_END = "touchend",
            e.TOUCH_CANCEL = "touchcancel",
            e.EVENT_SHOW = "game_on_show",
            e.EVENT_HIDE = "game_on_hide",
            e
        }();
        o.System_Event = i,
        cc._RF.pop()
    }
    , {}],
    ExplosionVictim: [function(e, t, o) {
        "use strict";
        cc._RF.push(t, "d2593IoAGJFEbjAWKSJau9+", "ExplosionVictim"),
        Object.defineProperty(o, "__esModule", {
            value: !0
        });
        var n = e("../Events/EventManager")
          , i = e("../VO/BoomVo")
          , r = cc._decorator
          , a = r.ccclass
          , c = r.property
          , s = function(e) {
            function t() {
                var t = null !== e && e.apply(this, arguments) || this;
                return t.explosionForce = cc.Vec2.ZERO,
                t
            }
            return __extends(t, e),
            t.prototype.onLoad = function() {
                n.default.Instance.addListener(i.default.BOOM_EVENT_START, this.explosionHandle, this)
            }
            ,
            t.prototype.explosionHandle = function(e) {
                var t = e.detail.pos
                  , o = this.node.position.sub(t).mag();
                if (!(o > 300)) {
                    var n = this.node.position.sub(t).normalize();
                    this.getComponent(cc.RigidBody).linearVelocity = cc.v2(n.x * this.explosionForce.x, n.y * this.explosionForce.y),
                    console.log("ExplosionVictim....", o, n, this.getComponent(cc.RigidBody).linearVelocity)
                }
            }
            ,
            t.prototype.start = function() {}
            ,
            t.prototype.update = function(e) {}
            ,
            __decorate([c(cc.Vec2)], t.prototype, "explosionForce", void 0),
            t = __decorate([a], t)
        }(cc.Component);
        o.default = s,
        cc._RF.pop()
    }
    , {
        "../Events/EventManager": "EventManager",
        "../VO/BoomVo": "BoomVo"
    }],
    ExtraForce: [function(e, t, o) {
        "use strict";
        cc._RF.push(t, "f59bf+aQ2dFwZ3WSVb0lH7U", "ExtraForce"),
        Object.defineProperty(o, "__esModule", {
            value: !0
        });
        var n = cc._decorator
          , i = n.ccclass
          , r = n.property
          , a = function(e) {
            function t() {
                var t = null !== e && e.apply(this, arguments) || this;
                return t.isEnableCollision = !1,
                t.collisionForce = cc.Vec2.ZERO,
                t
            }
            return __extends(t, e),
            t.prototype.onLoad = function() {}
            ,
            t.prototype.start = function() {}
            ,
            t.prototype.addExtraForce = function() {}
            ,
            t.prototype.onBeginContact = function(e, t, o) {
                this.isEnableCollision && "ball" == o.node.group && (this.getComponent(cc.RigidBody).linearVelocity = this.collisionForce),
                this.isEnableCollision && "boom" == o.node.group && (this.getComponent(cc.RigidBody).linearVelocity = this.collisionForce)
            }
            ,
            t.prototype.update = function(e) {}
            ,
            __decorate([r], t.prototype, "isEnableCollision", void 0),
            __decorate([r], t.prototype, "collisionForce", void 0),
            t = __decorate([i], t)
        }(cc.Component);
        o.default = a,
        cc._RF.pop()
    }
    , {}],
    FileManager: [function(e, t, o) {
        "use strict";
        cc._RF.push(t, "be262r63z9LMZtNAUgv8lIg", "FileManager"),
        Object.defineProperty(o, "__esModule", {
            value: !0
        });
        var n = cc._decorator
          , i = n.ccclass
          , r = (n.property,
        function(e) {
            function t() {
                return null !== e && e.apply(this, arguments) || this
            }
            return __extends(t, e),
            t.prototype.onLoad = function() {}
            ,
            t.prototype.start = function() {}
            ,
            t.writeJsonToTxt = function(e, t) {
                console.log("-----------------------create data json file-----------------");
                var o = jsb.fileUtils.getWritablePath() + "json_dir";
                jsb.fileUtils.isDirectoryExist(o) ? console.log("=========== dir is exist") : jsb.fileUtils.createDirectory(o),
                jsb.fileUtils.writeStringToFile(t, o + "/" + e + ".json")
            }
            ,
            t = __decorate([i], t)
        }(cc.Component));
        o.default = r,
        cc._RF.pop()
    }
    , {}],
    FileUtil: [function(e, t, o) {
        "use strict";
        cc._RF.push(t, "a7891gso7xMlZZU3XlgKniw", "FileUtil"),
        cc.Class({
            extends: cc.Component,
            properties: {},
            start: function() {
                console.log("dddddddddddddddd: " + jsb.fileUtils.getWritablePath());
                var e = jsb.fileUtils.getWritablePath() + "new_dir";
                jsb.fileUtils.isDirectoryExist(e) ? console.log("dir is exist!!!") : jsb.fileUtils.createDirectory(e);
                jsb.fileUtils.writeStringToFile("hello test_write !!!!!", e + "/test_str_write.txt")
            },
            writeJsonToTxt: function(e, t) {
                console.log("-----------------------create data json file-----------------");
                var o = jsb.fileUtils.getWritablePath() + "json_dir";
                jsb.fileUtils.isDirectoryExist(o) ? console.log("=========== dir is exist") : jsb.fileUtils.createDirectory(o),
                jsb.fileUtils.writeStringToFile(t, o + "/" + e + ".json")
            }
        }),
        cc._RF.pop()
    }
    , {}],
    FistVo: [function(e, t, o) {
        "use strict";
        cc._RF.push(t, "562e29VfntDBZ3Dbt71btOR", "FistVo"),
        Object.defineProperty(o, "__esModule", {
            value: !0
        });
        var n = e("./BaseVo")
          , i = cc._decorator
          , r = i.ccclass
          , a = i.property
          , c = function(e) {
            function t() {
                var t = null !== e && e.apply(this, arguments) || this;
                return t.fistNode = null,
                t.board = null,
                t.shotTimer = 2e3,
                t.speed = 8,
                t.timer = 0,
                t.flag = !1,
                t
            }
            return __extends(t, e),
            t.prototype.onLoad = function() {}
            ,
            t.prototype.start = function() {
                this.node.getChildByName("ani").getComponent(cc.Animation).play("fistAni")
            }
            ,
            t.prototype.update = function(e) {
                var t = this;
                this.fistNode.position = this.fistNode.position.sub(cc.v2(this.speed, 0)),
                this.board.width += this.speed;
                var o = this;
                if (this.fistNode.position.x < -261 && (this.speed *= -1,
                this.flag = !1),
                this.fistNode.position.x > -80 && !this.flag) {
                    this.flag = !0;
                    var n = this.speed;
                    this.speed = 0,
                    this.scheduleOnce(function(e) {
                        t.flag = !0,
                        console.log("--------------------", !0),
                        o.speed = -1 * n,
                        o.node.getChildByName("ani").getComponent(cc.Animation).play("fistAni")
                    }, this.shotTimer / 1e3)
                }
            }
            ,
            __decorate([a(cc.Node)], t.prototype, "fistNode", void 0),
            __decorate([a(cc.Node)], t.prototype, "board", void 0),
            __decorate([a], t.prototype, "shotTimer", void 0),
            t = __decorate([r], t)
        }(n.default);
        o.default = c,
        cc._RF.pop()
    }
    , {
        "./BaseVo": "BaseVo"
    }],
    Fist: [function(e, t, o) {
        "use strict";
        cc._RF.push(t, "47ee8TcVcNBqpqxq9HwRYtz", "Fist"),
        Object.defineProperty(o, "__esModule", {
            value: !0
        });
        var n = e("../VO/BallVo")
          , i = cc._decorator
          , r = i.ccclass
          , a = i.property
          , c = function(e) {
            function t() {
                var t = null !== e && e.apply(this, arguments) || this;
                return t.isDelayShot = !1,
                t.isTrigger = !1,
                t.collider = null,
                t.isBoomTrigger = !1,
                t.boomCollider = null,
                t.countDown = 0,
                t
            }
            return __extends(t, e),
            t.prototype.onLoad = function() {}
            ,
            t.prototype.start = function() {}
            ,
            t.prototype.update = function(e) {
                this.isTrigger && this.node.position.x < -260 && (this.isTrigger = !1,
                this.collider && this.collider.getComponent(n.default).boomHandle(this.node.position)),
                this.isBoomTrigger && this.node.position.x < -260 && (this.isBoomTrigger = !1,
                this.boomCollider && (this.boomCollider.getComponent(cc.RigidBody).linearVelocity = cc.v2(0, 550)))
            }
            ,
            t.prototype.onBeginContact = function(e, t, o) {
                "ball" == o.node.group && (this.isDelayShot ? (this.collider = o.node,
                this.isTrigger = !0) : o.node.getComponent(n.default).boomHandle(this.node.position)),
                "boom" == o.node.group && (this.boomCollider = o.node,
                this.isBoomTrigger = !0)
            }
            ,
            __decorate([a], t.prototype, "isDelayShot", void 0),
            t = __decorate([r], t)
        }(cc.Component);
        o.default = c,
        cc._RF.pop()
    }
    , {
        "../VO/BallVo": "BallVo"
    }],
    Four: [function(e, t, o) {
        "use strict";
        cc._RF.push(t, "31ffdTH+xlJzLFosgv50cKb", "Four"),
        Object.defineProperty(o, "__esModule", {
            value: !0
        });
        var n = e("./Tools/ObjectTool")
          , i = e("./GraphicsTool")
          , r = e("./Model/Parabola")
          , a = cc._decorator
          , c = a.ccclass
          , s = a.property
          , l = function(e) {
            function t() {
                var t = null !== e && e.apply(this, arguments) || this;
                return t.mGraphics = null,
                t.ball = null,
                t.ballRopeArr = [],
                t.parent = null,
                t.hingePre = null,
                t.rightNail = null,
                t.leftNail = null,
                t.graphics = null,
                t.hingeArr = null,
                t.isDraw = !1,
                t.isBallRopeDraw = !0,
                t._p1 = null,
                t._p2 = null,
                t._r1 = null,
                t._r2 = null,
                t
            }
            return __extends(t, e),
            t.prototype.onLoad = function() {
                cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN, this.onKeyDown, this),
                this.graphics = n.ObjectTool.instanceWithPrefab("_graphics", this.mGraphics, this.node, new cc.Vec2(0,0)).getComponent(cc.Graphics),
                this.graphics.node.setSiblingIndex(0),
                this.hingeArr = new Array
            }
            ,
            t.prototype.start = function() {
                this.isDraw = !0,
                this.ball.getComponent(cc.RigidBody).applyLinearImpulse(new cc.Vec2(200,200), this.ball.getComponent(cc.RigidBody).getWorldCenter(), !0)
            }
            ,
            t.prototype.createRopeNail = function() {
                var e = new cc.Vec2(361,369)
                  , t = new cc.Vec2(20,30)
                  , o = n.ObjectTool.instanceWithPrefab("nail", this.rightNail, this.node, e);
                this.hingeArr.push(o);
                for (var i = e.y, a = (e.y - t.y) / 20, c = 0, s = o.getComponent(cc.RigidBody), l = o.position, p = new r.default(t,e), d = 0; d < 20; d++) {
                    i -= a,
                    c = p.calaXYValue(i);
                    var u = n.ObjectTool.instanceWithPrefab("nail", this.hingePre, this.node, new cc.Vec2(i,c))
                      , h = this.vec2Distance(l, u.position);
                    u.group = "wall",
                    console.log(i, c, h),
                    u.getComponent(cc.RopeJoint).connectedBody = s,
                    u.getComponent(cc.RopeJoint).maxLength = h - 2,
                    u.getComponent(cc.PhysicsCircleCollider).radius = 1,
                    u.getComponent(cc.PhysicsCircleCollider).offset = new cc.Vec2(5,-5),
                    s = u.getComponent(cc.RigidBody),
                    l = u.position,
                    u.opacity = 0,
                    this.hingeArr.push(u)
                }
                var g = n.ObjectTool.instanceWithPrefab("nail", this.leftNail, this.node, t);
                g.getComponent(cc.RopeJoint).connectedBody = s,
                g.getComponent(cc.RopeJoint).maxLength = 5,
                this.hingeArr.push(g),
                this.isDraw = !0
            }
            ,
            t.prototype.calaParabola = function(e, t) {}
            ,
            t.prototype.onKeyDown = function(e) {
                switch (e.keyCode) {
                case cc.macro.KEY.a:
                    this.ball.getComponentInChildren(cc.RopeJoint).enabled = !1,
                    this.isBallRopeDraw = !1;
                    break;
                case cc.macro.KEY.b:
                case cc.macro.KEY.c:
                }
            }
            ,
            t.prototype.vec2Distance = function(e, t) {
                return e.sub(t).mag()
            }
            ,
            t.prototype.update = function(e) {
                if (this.isDraw) {
                    this.graphics.clear();
                    for (var t = 0; t < this.hingeArr.length - 1; t++)
                        this._p1 = this.hingeArr[t],
                        this._p2 = this.hingeArr[t + 1],
                        i.default.drawContinuousLine(this.graphics, this._p1.position, this._p2.position, cc.Color.WHITE, 5);
                    if (this.isBallRopeDraw)
                        for (var o = 0; o < this.ballRopeArr.length - 1; o++) {
                            this._r1 = this.ballRopeArr[o],
                            this._r2 = this.ballRopeArr[o + 1];
                            var n = this.localConvertWorldPointAR(this._r1)
                              , r = this.localConvertWorldPointAR(this._r2);
                            i.default.drawContinuousLine(this.graphics, n, r, cc.Color.WHITE, 5)
                        }
                }
            }
            ,
            t.prototype.drawLine = function(e, t) {
                i.default.ObjDrawLine(this.graphics, e, t, cc.Color.WHITE, 5)
            }
            ,
            t.prototype.localConvertWorldPointAR = function(e) {
                if (e) {
                    var t = e.convertToWorldSpaceAR(cc.v2(0, 0));
                    return t = new cc.Vec2(t.x - cc.winSize.width / 2,t.y - cc.winSize.height / 2)
                }
                return cc.v2(0, 0)
            }
            ,
            __decorate([s(cc.Prefab)], t.prototype, "mGraphics", void 0),
            __decorate([s(cc.Node)], t.prototype, "ball", void 0),
            __decorate([s(cc.Node)], t.prototype, "ballRopeArr", void 0),
            __decorate([s(cc.Node)], t.prototype, "parent", void 0),
            __decorate([s(cc.Prefab)], t.prototype, "hingePre", void 0),
            __decorate([s(cc.Prefab)], t.prototype, "rightNail", void 0),
            __decorate([s(cc.Prefab)], t.prototype, "leftNail", void 0),
            t = __decorate([c], t)
        }(cc.Component);
        o.default = l;
        var p = function() {
            return function() {}
        }();
        o.GraphicsVo = p,
        cc._RF.pop()
    }
    , {
        "./GraphicsTool": "GraphicsTool",
        "./Model/Parabola": "Parabola",
        "./Tools/ObjectTool": "ObjectTool"
    }],
    GameStorage: [function(e, t, o) {
        "use strict";
        cc._RF.push(t, "edc1dy7Q5tMLbmPpYGgJWVr", "GameStorage"),
        Object.defineProperty(o, "__esModule", {
            value: !0
        });
        var n = cc._decorator
          , i = n.ccclass
          , r = (n.property,
        function() {
            function e() {}
            return e.setItem = function(e, t) {
                cc.sys.localStorage.setItem(e, t)
            }
            ,
            e.getItem = function(e) {
                return cc.sys.localStorage.getItem(e)
            }
            ,
            e.remove = function(e) {
                return cc.sys.localStorage.removeItem(e)
            }
            ,
            e.setItemJson = function(e, t) {
                cc.sys.localStorage.setItem(e, JSON.stringify(t))
            }
            ,
            e.getItemJson = function(e) {
                var t = cc.sys.localStorage.getItem(e, "");
                return console.log(t),
                null == t || void 0 == t || "" == t ? null : (console.log("data is not null", t),
                JSON.parse(t))
            }
            ,
            e.clear = function() {
                cc.sys.localStorage.clear()
            }
            ,
            e = __decorate([i], e)
        }());
        o.GameStorage = r,
        cc._RF.pop()
    }
    , {}],
    GlobalPath: [function(e, t, o) {
        "use strict";
        cc._RF.push(t, "b5621pum+xLmYJbpL0LKcuJ", "GlobalPath"),
        Object.defineProperty(o, "__esModule", {
            value: !0
        });
        var n = function() {
            function e() {}
            return e.SERVER_PATH = "http://192.168.1.31:8081/",
            e.UI_PANEL_DIR = "prefabs/ui_panel/",
            e.DETAIL_PANEL_PATH = "prefabs/Details/",
            e.UI_ATLAS_PATH = "atlas",
            e
        }();
        o.GlobalPath = n,
        cc._RF.pop()
    }
    , {}],
    GraphicsCreator: [function(e, t, o) {
        "use strict";
        cc._RF.push(t, "8aa9cDZZrBMm6YvtW2ULquV", "GraphicsCreator"),
        Object.defineProperty(o, "__esModule", {
            value: !0
        });
        var n = e("../Managers/ResourceManager")
          , i = e("../Tools/ObjectTool")
          , r = e("../GraphicsTool")
          , a = e("../Managers/LevelTest")
          , c = e("../VO/BallVo")
          , s = e("../Managers/LevelTest")
          , l = e("../Managers/JsonGenerator")
          , p = e("../VO/BoardVo")
          , d = e("../VO/BoomVo")
          , u = e("../VO/CarVo")
          , h = e("../Common/ExtraForce")
          , g = cc._decorator
          , f = g.ccclass
          , v = g.property
          , y = function() {
            return function() {
                this.id = 0
            }
        }();
        o.ObjTest = y;
        var m = function(e) {
            function t() {
                var t = null !== e && e.apply(this, arguments) || this;
                return t.grphicsPre = null,
                t.graphics = null,
                t.graphicsNum = 1,
                t.graphicsNumArr = [],
                t.graphicsArr = new Array,
                t.drawArr = new Array,
                t.isDraw = !1,
                t.startUpdate = !1,
                t.lineArr = new Map,
                t.p1 = null,
                t.p2 = null,
                t.timer = 0,
                t
            }
            return __extends(t, e),
            t.prototype.onLoad = function() {
                var e = this;
                n.ResourceManager.getInstance().loadResources("prefabs/_graphics", cc.Prefab, function(t) {
                    e.grphicsPre = t,
                    l.default.instance.isGenerator || e.init()
                })
            }
            ,
            t.prototype.init = function() {
                this.graphicsNum = this.graphicsNumArr.length;
                for (var e = 0; e < this.graphicsNum; e++) {
                    var t = i.ObjectTool.instanceWithPrefab("graphics", this.grphicsPre, this.node, new cc.Vec2(0,0)).getComponent(cc.Graphics);
                    t.node.setSiblingIndex(0),
                    this.graphicsArr.push(t),
                    this.drawArr.push(!0)
                }
                for (var o = this.graphicsNum, n = 0, r = [], a = 0; a < this.graphicsNum; a++) {
                    n = o + this.graphicsNumArr[a].y,
                    r = [];
                    for (var c = o; c < n; c++) {
                        var s = this.node.children[c];
                        null != s && void 0 != s && r.push(s)
                    }
                    this.lineArr.set(a, r),
                    o += this.graphicsNumArr[a].y
                }
                this.updateVertorPos(),
                this.startUpdate = !0
            }
            ,
            t.prototype.updateVertorPos = function() {
                if (this.getComponentsInChildren(c.default).length <= 1)
                    for (var e = this.node.children[this.node.childrenCount - 1], t = 0; t < this.lineArr.size; t++)
                        this.lineArr.get(t).push(e),
                        a.default.Instance.ropeNodeArr.push(new _(this.node,t,new s.VertorObj(this.lineArr.get(t)[0].position,e.position)));
                else {
                    var o = this.node.children[this.node.childrenCount - 1]
                      , n = this.node.children[this.node.childrenCount - 2];
                    this.lineArr.get(0).push(o),
                    this.lineArr.get(1).push(n),
                    a.default.Instance.ropeNodeArr.push(new _(this.node,0,new s.VertorObj(this.lineArr.get(0)[0].position,o.position))),
                    a.default.Instance.ropeNodeArr.push(new _(this.node,1,new s.VertorObj(this.lineArr.get(1)[0].position,n.position)))
                }
            }
            ,
            t.prototype.start = function() {}
            ,
            t.prototype.update = function(e) {
                if (this.startUpdate)
                    for (var t = 0; t < this.graphicsNum; t++)
                        if (this.graphicsArr[t].clear(),
                        this.drawArr[t])
                            for (var o = 0; o < this.lineArr.get(t).length - 1; o++)
                                this.p1 = this.lineArr.get(t)[o],
                                this.p2 = this.lineArr.get(t)[o + 1],
                                r.default.drawContinuousLine(this.graphicsArr[t], this.p1.position, this.p2.position, cc.Color.WHITE, 10);
                        else
                            this.graphicsArr[t].clear()
            }
            ,
            t.prototype.aPos = function() {
                return this.node.children[1].position
            }
            ,
            t.prototype.bPos = function() {
                return this.node.children[this.node.childrenCount - 1].position
            }
            ,
            t.prototype.disEnable = function(e) {
                void 0 === e && (e = 0);
                var t = this.node.children[this.node.childrenCount - 1];
                if (console.log("cut the index:", e),
                this.getComponentsInChildren(c.default).length <= 1)
                    if (t.getComponent(c.default) || t.getComponent(p.default) || t.getComponent(d.default))
                        t.getComponents(cc.Joint)[e].enabled = !1,
                        t.getComponent(cc.RigidBody).type = cc.RigidBodyType.Dynamic,
                        t.getComponent(c.default) ? (t.getComponent(cc.PhysicsCircleCollider).density = t.getComponent(c.default).changeDensity,
                        t.getComponent(cc.RigidBody).gravityScale *= t.getComponent(c.default).changeGravityScale,
                        t.getComponent(cc.PhysicsCircleCollider).apply()) : t.getComponent(cc.RigidBody).gravityScale *= 2;
                    else if (t.getComponent(u.default))
                        t.getComponents(cc.RopeJoint)[0].enabled = !1,
                        t.getComponent(cc.RigidBody).type = cc.RigidBodyType.Dynamic,
                        t.getComponent(cc.RigidBody).gravityScale *= t.getComponent(u.default).changeGravityScale,
                        t.getComponent(cc.PhysicsBoxCollider).density = t.getComponent(u.default).changeDensity,
                        t.getComponent(cc.PhysicsBoxCollider).friction = t.getComponent(u.default).changeFriction,
                        t.getComponent(cc.PhysicsBoxCollider).apply();
                    else if (t.getComponent(cc.Joint)) {
                        for (var o = 0; o < this.lineArr.get(e).length - 1; o++) {
                            var n = this.lineArr.get(e)[o];
                            n.getComponent(cc.DistanceJoint) && n.removeComponent(cc.DistanceJoint),
                            n.getComponent(cc.PhysicsBoxCollider) && n.removeComponent(cc.PhysicsBoxCollider),
                            n.getComponent(cc.PhysicsCircleCollider) && n.removeComponent(cc.PhysicsCircleCollider)
                        }
                        if (t.getComponent(cc.DistanceJoint)) {
                            var i = t.getComponents(cc.DistanceJoint);
                            e < i.length ? i[e].enabled = !1 : i[0].enabled = !1
                        }
                    } else
                        this.node.children[this.node.childrenCount - 2].removeComponent(cc.RevoluteJoint),
                        this.node.children[this.node.childrenCount - 2].removeComponent(cc.RopeJoint);
                else {
                    var r = this.lineArr.get(e);
                    r[r.length - 3].removeComponent(cc.DistanceJoint);
                    var a = this.node.children[this.node.childrenCount - (e + 1)];
                    a.getComponent(cc.PhysicsCircleCollider).density = a.getComponent(c.default).changeDensity,
                    a.getComponent(cc.PhysicsCircleCollider).apply(),
                    a.getComponent(cc.RigidBody).gravityScale *= a.getComponent(c.default).changeGravityScale,
                    a.removeComponent(cc.DistanceJoint),
                    setTimeout(function() {
                        a.getComponent(cc.RigidBody).linearVelocity = cc.v2(300 * (0 == e ? 1 : -1), 0)
                    }, 200)
                }
                t.getComponent(h.default) && t.getComponent(h.default).addExtraForce(),
                this.drawArr[e] = !1,
                this.graphicsArr[e].clear()
            }
            ,
            __decorate([v(cc.Vec2)], t.prototype, "graphicsNumArr", void 0),
            t = __decorate([f], t)
        }(cc.Component);
        o.default = m;
        var _ = function() {
            return function(e, t, o) {
                this.node = e,
                this.index = t,
                this.vector = o
            }
        }();
        o.LineObj = _,
        cc._RF.pop()
    }
    , {
        "../Common/ExtraForce": "ExtraForce",
        "../GraphicsTool": "GraphicsTool",
        "../Managers/JsonGenerator": "JsonGenerator",
        "../Managers/LevelTest": "LevelTest",
        "../Managers/ResourceManager": "ResourceManager",
        "../Tools/ObjectTool": "ObjectTool",
        "../VO/BallVo": "BallVo",
        "../VO/BoardVo": "BoardVo",
        "../VO/BoomVo": "BoomVo",
        "../VO/CarVo": "CarVo"
    }],
    GraphicsTool: [function(e, t, o) {
        "use strict";
        cc._RF.push(t, "8dd2ebOCl9GrqWDZILIShp5", "GraphicsTool"),
        Object.defineProperty(o, "__esModule", {
            value: !0
        });
        var n = cc._decorator
          , i = n.ccclass
          , r = (n.property,
        function() {
            function e() {}
            return e.ObjDrawLine = function(e, t, o, n, i) {
                this.drawContinuousLine(e, new cc.Vec2(t.position.x,t.position.y), new cc.Vec2(o.position.x,o.position.y), n, i)
            }
            ,
            e.drawOneLine = function(e, t, o, n, i) {
                e.clear(),
                e.lineWidth = 5,
                e.strokeColor = n,
                e.moveTo(t.x, t.y),
                e.lineTo(o.x, o.y),
                e.stroke()
            }
            ,
            e.drawContinuousLine = function(e, t, o, n, i) {
                e.lineWidth = i,
                e.strokeColor = n,
                e.moveTo(t.x, t.y),
                e.lineTo(o.x, o.y),
                e.stroke()
            }
            ,
            e = __decorate([i], e)
        }());
        o.default = r,
        cc._RF.pop()
    }
    , {}],
    GroupSetting: [function(e, t, o) {
        "use strict";
        cc._RF.push(t, "7bbdeOS/O5J5YidalpQHji9", "GroupSetting"),
        Object.defineProperty(o, "__esModule", {
            value: !0
        });
        var n = cc._decorator
          , i = n.ccclass
          , r = n.property
          , a = function(e) {
            function t() {
                var t = null !== e && e.apply(this, arguments) || this;
                return t.group = "",
                t
            }
            return __extends(t, e),
            t.prototype.onLoad = function() {}
            ,
            t.prototype.start = function() {
                this.node.group = this.group
            }
            ,
            t.prototype.update = function(e) {}
            ,
            __decorate([r], t.prototype, "group", void 0),
            t = __decorate([i], t)
        }(cc.Component);
        o.default = a,
        cc._RF.pop()
    }
    , {}],
    IAd: [function(e, t, o) {
        "use strict";
        cc._RF.push(t, "9ece3ylS/JOLaencqdaePJL", "IAd"),
        Object.defineProperty(o, "__esModule", {
            value: !0
        }),
        cc._RF.pop()
    }
    , {}],
    ImmediateExplosion: [function(e, t, o) {
        "use strict";
        cc._RF.push(t, "f506enNWSBFvqtOwBgyV0XW", "ImmediateExplosion"),
        Object.defineProperty(o, "__esModule", {
            value: !0
        });
        var n = e("../Managers/AudioManager")
          , i = e("../Main")
          , r = cc._decorator
          , a = r.ccclass
          , c = r.property
          , s = function(e) {
            function t() {
                var t = null !== e && e.apply(this, arguments) || this;
                return t.particle = null,
                t.isTrigger = !1,
                t
            }
            return __extends(t, e),
            t.prototype.onLoad = function() {}
            ,
            t.prototype.start = function() {}
            ,
            t.prototype.update = function(e) {}
            ,
            t.prototype.onBeginContact = function(e, t, o) {
                if ("wall" != o.node.group && !this.isTrigger) {
                    i.default.Instance.isDebug || n.default._instance.playOneShot(n.AudioEnum.Bomb),
                    this.getComponent(cc.PhysicsBoxCollider).enabled = !1,
                    this.particle.getComponent(cc.ParticleSystem).resetSystem();
                    var r = this;
                    setTimeout(function() {
                        r.node.destroy()
                    }, 200)
                }
            }
            ,
            __decorate([c(cc.Node)], t.prototype, "particle", void 0),
            t = __decorate([a], t)
        }(cc.Component);
        o.default = s,
        cc._RF.pop()
    }
    , {
        "../Main": "Main",
        "../Managers/AudioManager": "AudioManager"
    }],
    JointUtil: [function(e, t, o) {
        "use strict";
        cc._RF.push(t, "b6dd2Ly98BMi6jZXf0FeZVY", "JointUtil"),
        Object.defineProperty(o, "__esModule", {
            value: !0
        });
        var n = cc._decorator
          , i = n.ccclass
          , r = (n.property,
        function() {
            function e() {}
            return e.creatRope = function() {}
            ,
            e.createRevolute = function() {}
            ,
            e.createDistance = function() {}
            ,
            e.createPrisMatic = function() {}
            ,
            e.connectBody = function(e) {}
            ,
            e = __decorate([i], e)
        }());
        o.default = r,
        function(e) {
            e[e.Revolute = 0] = "Revolute",
            e[e.Distance = 1] = "Distance",
            e[e.Prismatic = 2] = "Prismatic",
            e[e.Weld = 3] = "Weld",
            e[e.Wheel = 4] = "Wheel",
            e[e.Rope = 5] = "Rope",
            e[e.Motor = 6] = "Motor"
        }(o.JointEnum || (o.JointEnum = {})),
        cc._RF.pop()
    }
    , {}],
    JointVo: [function(e, t, o) {
        "use strict";
        cc._RF.push(t, "4b5f9roNoBCyay6qV4N8eSG", "JointVo"),
        Object.defineProperty(o, "__esModule", {
            value: !0
        });
        var n = e("./BaseVo")
          , i = e("./VOEnum")
          , r = cc._decorator
          , a = r.ccclass
          , c = r.property
          , s = function(e) {
            function t() {
                var t = null !== e && e.apply(this, arguments) || this;
                return t.jointType = i.JointType.Nail,
                t.isVisibleSprite = !1,
                t
            }
            return __extends(t, e),
            t.prototype.onLoad = function() {}
            ,
            t.prototype.setType = function(e) {
                this.jointType = e
            }
            ,
            t.prototype.start = function() {
                this.isVisibleSprite ? this.node.opacity = 255 : this.node.opacity = 0
            }
            ,
            __decorate([c({
                type: cc.Enum(i.JointType)
            })], t.prototype, "jointType", void 0),
            __decorate([c], t.prototype, "isVisibleSprite", void 0),
            t = __decorate([a], t)
        }(n.default);
        o.default = s,
        cc._RF.pop()
    }
    , {
        "./BaseVo": "BaseVo",
        "./VOEnum": "VOEnum"
    }],
    JsonGenerator: [function(e, t, o) {
        "use strict";
        cc._RF.push(t, "e03e9yc4I5KerHjvy9m+m9G", "JsonGenerator"),
        Object.defineProperty(o, "__esModule", {
            value: !0
        });
        var n, i = e("./FileManager"), r = e("../VO/BallVo"), a = e("../VO/JointVo"), c = e("../VO/BaseVo"), s = e("../VO/VOEnum"), l = e("../VO/BoardVo"), p = e("../VO/BottleVo"), d = e("../Model/GraphicsCreator"), u = e("../VO/BoomVo"), h = cc._decorator, g = h.ccclass, f = h.property;
        (function(e) {
            e.bends = "bends",
            e.balls = "balls",
            e.nail_nail = "nail_nail",
            e.nail_nail_collider = "nail_nail_collider",
            e.bottles = "bottles",
            e.nail_ball = "nail_ball",
            e.nail_board = "nail_board",
            e.nail_boom = "nail_boom",
            e.nail_ball_nail = "nail_ball_nail",
            e.nail_three_ball = "nail_three_ball",
            e.nail_ball_nail_distance = "nail_ball_nail_distance",
            e.nail_dynamic_board = "nail_dynamic_board",
            e.booms = "booms"
        }
        )(n = o.LevelWidgetTypeEnum || (o.LevelWidgetTypeEnum = {}));
        var v = function() {
            return function() {
                this.graphicsNumArr = [],
                this.objectArr = []
            }
        }();
        o.WidgetVo = v;
        var y = function(e) {
            function t() {
                var t = null !== e && e.apply(this, arguments) || this;
                return t.isGenerator = !1,
                t.table = null,
                t.num = 0,
                t.levelArr = [],
                t
            }
            var o;
            return __extends(t, e),
            o = t,
            t.prototype.onLoad = function() {
                o.instance = this
            }
            ,
            t.prototype.start = function() {
                var e = this;
                setTimeout(function() {
                    e.isGenerator && e.generator2()
                }, 1e3)
            }
            ,
            t.prototype.setTableInfo = function(e, t, o, n, i, r, a, c, s, l) {
                e.id = t,
                e.name = o,
                e.itemType = n,
                e.pos = i,
                e.rot = r,
                e.scale = a,
                e.size = c
            }
            ,
            t.prototype.generator2 = function() {
                for (var e = 0; e < this.node.childrenCount; e++) {
                    var t = this.node.children[e];
                    if (t.name == n.bends) {
                        for (var o = new v, a = 0; a < t.childrenCount; a++) {
                            var c = t.children[a];
                            this.table = this.setBoardInfo(c),
                            this.num++,
                            o.objectArr.push(this.table)
                        }
                        o._name = n.bends,
                        this.levelArr.push(o)
                    } else if (t.name == n.nail_nail) {
                        o = new v;
                        for (var s = 0; s < t.childrenCount; s++) {
                            var p = t.children[s];
                            this.table = this.setJointInfo(p),
                            this.num++,
                            o.objectArr.push(this.table)
                        }
                        o._name = n.nail_nail,
                        o.graphicsNumArr = t.getComponent(d.default).graphicsNumArr,
                        this.levelArr.push(o)
                    } else if (t.name == n.nail_nail_collider) {
                        o = new v;
                        for (var h = 0; h < t.childrenCount; h++) {
                            p = t.children[h];
                            0 == h || h == t.childrenCount - 1 ? this.table = this.setJointInfo(p) : this.table = this.setColliderJointTable(p),
                            this.num++,
                            o.objectArr.push(this.table)
                        }
                        o._name = n.nail_nail_collider,
                        o.graphicsNumArr = t.getComponent(d.default).graphicsNumArr,
                        this.levelArr.push(o)
                    } else if (t.name == n.bottles) {
                        o = new v;
                        for (var g = 0; g < t.childrenCount; g++) {
                            p = t.children[g];
                            this.table = this.setBottleInfo(p),
                            o.objectArr.push(this.table)
                        }
                        o._name = n.bottles,
                        this.levelArr.push(o)
                    } else if (t.name == n.nail_ball || t.name == n.nail_board) {
                        o = new v;
                        for (var f = 0; f < t.childrenCount; f++) {
                            if ((p = t.children[f]).getComponent(r.default)) {
                                var y = this.setBallInfo(p);
                                o.objectArr.push(y)
                            } else
                                p.getComponent(l.default) ? (this.table = this.setBoardInfo(p),
                                o.objectArr.push(this.table)) : (this.table = this.setJointInfo(p),
                                o.objectArr.push(this.table))
                        }
                        o._name = t.name,
                        o.graphicsNumArr = t.getComponent(d.default).graphicsNumArr,
                        this.levelArr.push(o)
                    } else if (t.name == n.nail_ball_nail || t.name == n.nail_three_ball || t.name == n.nail_boom) {
                        o = new v;
                        for (var m = 0; m < t.childrenCount; m++) {
                            if ((p = t.children[m]).getComponent(r.default)) {
                                y = this.setBallInfo(p);
                                o.objectArr.push(y)
                            } else if (p.getComponent(u.default)) {
                                var _ = this.setBoomInfo(p);
                                o.objectArr.push(_)
                            } else
                                this.table = this.setJointInfo(p),
                                o.objectArr.push(this.table)
                        }
                        o._name = t.name,
                        o.graphicsNumArr = t.getComponent(d.default).graphicsNumArr,
                        this.levelArr.push(o)
                    } else if (t.name == n.balls) {
                        o = new v;
                        for (var b = 0; b < t.childrenCount; b++) {
                            p = t.children[b],
                            y = this.setBallInfo(p);
                            o.objectArr.push(y)
                        }
                        o._name = n.balls,
                        this.levelArr.push(o)
                    } else if (t.name == n.booms) {
                        o = new v;
                        for (var C = 0; C < t.childrenCount; C++) {
                            p = t.children[C],
                            y = this.setBoomInfo(p);
                            o.objectArr.push(y)
                        }
                        o._name = n.booms,
                        this.levelArr.push(o)
                    }
                }
                var S = JSON.stringify(this.levelArr);
                console.log(S),
                0 == cc.sys.platform && i.default.writeJsonToTxt(cc.director.getScene().name, S)
            }
            ,
            t.prototype.setBoardInfo = function(e) {
                var t = new c.BoardTable;
                console.log(e),
                t.setBaseInfo(t, e),
                t.boardType = e.getComponent(l.default).boardType,
                e.getComponent(cc.RigidBody) && (t.bodyType = e.getComponent(cc.RigidBody).type,
                t.rigid = t.setRigidInfo(e)),
                e.getComponent(cc.PhysicsBoxCollider) && (t.collider = t.setColliderInfo(e.getComponent(cc.PhysicsBoxCollider)),
                t.collider.size = e.getComponent(cc.PhysicsBoxCollider).size),
                e.getComponent(l.default) && (t.itemType = e.getComponent(l.default).itemType);
                for (var o = 0; o < e.getComponents(cc.Joint).length; o++) {
                    var n = e.getComponents(cc.Joint)[o]
                      , i = new c.JointTable;
                    n.node.getComponent(cc.RopeJoint) && t.joints.push(t.setJointInfo(i, n, n.node.getComponent(cc.RopeJoint).maxLength)),
                    n.node.getComponent(cc.DistanceJoint) && t.joints.push(t.setJointInfo(i, n, n.node.getComponent(cc.DistanceJoint).distance))
                }
                return t
            }
            ,
            t.prototype.setJointInfo = function(e) {
                var t = new c.JointTable;
                return t.setBaseInfo(t, e),
                t.group = "joint",
                null == e.getComponent(cc.RevoluteJoint) && (t.collider = t.setColliderInfo(e.getComponent(cc.PhysicsCircleCollider))),
                null == e.getComponent(cc.RevoluteJoint) && (t.collider.radius = e.getComponent(cc.PhysicsCircleCollider).radius),
                t.rigid = t.setRigidInfo(e),
                t.itemType = e.getComponent(a.default).itemType,
                t.isVisibleSprite = e.getComponent(a.default).isVisibleSprite,
                e.getComponent(cc.RopeJoint) ? t.setJointInfo(t, e.getComponent(cc.RopeJoint), e.getComponent(cc.RopeJoint).maxLength) : e.getComponent(cc.DistanceJoint) && t.setJointInfo(t, e.getComponent(cc.DistanceJoint), e.getComponent(cc.DistanceJoint).distance),
                t
            }
            ,
            t.prototype.setColliderJointTable = function(e) {
                var t = new c.ColliderJointTable;
                t.size = e.getComponent(cc.PhysicsBoxCollider).size,
                t.collider = t.setColliderInfo(e.getComponent(cc.PhysicsBoxCollider));
                var o = new c.JointTable;
                o.setBaseInfo(o, e),
                o.rigid = o.setRigidInfo(e),
                o.itemType = e.getComponent(a.default).itemType,
                o.isVisibleSprite = e.getComponent(a.default).isVisibleSprite,
                o.anchor = e.getComponentsInChildren(cc.RevoluteJoint)[0].anchor,
                o.connectedAnchor = e.getComponentsInChildren(cc.RevoluteJoint)[0].connectedAnchor;
                var n = new c.JointTable;
                return n.setBaseInfo(n, e),
                n.anchor = e.getComponentsInChildren(cc.RevoluteJoint)[1].anchor,
                n.connectedAnchor = e.getComponentsInChildren(cc.RevoluteJoint)[1].connectedAnchor,
                t.joints.push(o),
                t.joints.push(n),
                t
            }
            ,
            t.prototype.setBottleInfo = function(e) {
                var t = new c.BottleTable;
                return t.setBaseInfo(t, e),
                t.colliderAfterForce = e.getComponent(p.default).colliderAfterForce,
                t.collider = t.setColliderInfo(e.getComponent(cc.PhysicsBoxCollider)),
                t.collider.size = e.getComponent(cc.PhysicsBoxCollider).size,
                t.rigid = t.setRigidInfo(e),
                t.itemType = e.getComponent(p.default).itemType,
                t
            }
            ,
            t.prototype.setBallInfo = function(e) {
                var t = new c.BallTable;
                t.setBaseInfo(t, e),
                t.collider = t.setColliderInfo(e.getComponent(cc.PhysicsCircleCollider)),
                t.collider.radius = e.getComponent(cc.PhysicsCircleCollider).radius,
                t.rigid = t.setRigidInfo(e),
                t.itemType = e.getComponent(r.default).itemType,
                t.isAddForce = e.getComponent(r.default).isAddForce,
                t.initForce = e.getComponent(r.default).initForce,
                t.initForceY = e.getComponent(r.default).initForceY,
                t.changeDensity = e.getComponent(r.default).changeDensity,
                t.changeForce = e.getComponent(r.default).changeForce,
                t.changeFriction = e.getComponent(r.default).changeFriction,
                t.changeGravityScale = e.getComponent(r.default).changeGravityScale,
                t.timer = e.getComponent(r.default).timer;
                for (var o = 0; o < e.getComponents(cc.RopeJoint).length; o++) {
                    var n = e.getComponents(cc.RopeJoint)[o]
                      , i = new c.JointTable;
                    t.joints.push(t.setJointInfo(i, n, n.maxLength))
                }
                for (var a = 0; a < e.getComponents(cc.DistanceJoint).length; a++) {
                    var s = e.getComponents(cc.DistanceJoint)[a];
                    i = new c.JointTable;
                    t.joints.push(t.setJointInfo(i, s, s.distance))
                }
                return t
            }
            ,
            t.prototype.setBoomInfo = function(e) {
                var t = new c.BoomTable;
                t.setBaseInfo(t, e),
                t.collider = t.setColliderInfo(e.getComponent(cc.PhysicsBoxCollider)),
                t.collider.size = e.getComponent(cc.PhysicsBoxCollider).size,
                t.rigid = t.setRigidInfo(e),
                t.itemType = s.ItemType.Boom,
                t.isRangeBoom = e.getComponent(u.default).isRangeBoom,
                t.initForce = e.getComponent(u.default).initForce;
                for (var o = 0; o < e.getComponents(cc.RopeJoint).length; o++) {
                    var n = e.getComponents(cc.RopeJoint)[o]
                      , i = new c.JointTable;
                    t.joints.push(t.setJointInfo(i, n, n.maxLength))
                }
                for (var r = 0; r < e.getComponents(cc.DistanceJoint).length; r++) {
                    var a = e.getComponents(cc.DistanceJoint)[r];
                    i = new c.JointTable;
                    t.joints.push(t.setJointInfo(i, a, a.distance))
                }
                return t
            }
            ,
            t.prototype.update = function(e) {}
            ,
            __decorate([f], t.prototype, "isGenerator", void 0),
            t = o = __decorate([g], t)
        }(cc.Component);
        o.default = y,
        cc._RF.pop()
    }
    , {
        "../Model/GraphicsCreator": "GraphicsCreator",
        "../VO/BallVo": "BallVo",
        "../VO/BaseVo": "BaseVo",
        "../VO/BoardVo": "BoardVo",
        "../VO/BoomVo": "BoomVo",
        "../VO/BottleVo": "BottleVo",
        "../VO/JointVo": "JointVo",
        "../VO/VOEnum": "VOEnum",
        "./FileManager": "FileManager"
    }],
    JsonHelper: [function(e, t, o) {
        "use strict";
        cc._RF.push(t, "a45edugIfFNLJYXYRNGy/sF", "JsonHelper"),
        Object.defineProperty(o, "__esModule", {
            value: !0
        });
        var n = function() {
            function e() {}
            return e.ReadJson = function(e, t) {
                cc.loader.loadRes(e, cc.JsonAsset, function(o, n) {
                    o ? console.error("error: -----------" + o + ",_url: ", e) : (console.log("data " + e + " load complete:", n._name),
                    void 0 !== t && t instanceof Function && t(JSON.stringify(n.json)))
                })
            }
            ,
            e.ReadJsonWithHttp = function(e, t) {
                var o = new XMLHttpRequest;
                o.onreadystatechange = function() {
                    4 === o.readyState && 200 === o.status && (console.log("data " + e + " load complete:"),
                    void 0 !== t && t instanceof Function && t(o.responseText))
                }
                ,
                o.open("GET", e, !0),
                o.send()
            }
            ,
            e
        }();
        o.JsonHelper = n,
        cc._RF.pop()
    }
    , {}],
    LanguageData: [function(e, t, o) {
        "use strict";
        cc._RF.push(t, "61de062n4dJ7ZM9/Xdumozn", "LanguageData");
        var n = e("polyglot.min")
          , i = null;
        function r(e) {
            return window.i18n.languages[e]
        }
        function a(e) {
            e && (i ? i.replace(e) : i = new n({
                phrases: e,
                allowMissing: !0
            }))
        }
        window.i18n || (window.i18n = {
            languages: {},
            curLang: ""
        }),
        t.exports = {
            init: function(e) {
                if (e !== window.i18n.curLang) {
                    var t = r(e) || {};
                    window.i18n.curLang = e,
                    a(t),
                    this.inst = i
                }
            },
            t: function(e, t) {
                if (i)
                    return i.t(e, t)
            },
            inst: i,
            updateSceneRenderers: function() {
                for (var e = cc.director.getScene().children, t = [], o = 0; o < e.length; ++o) {
                    var n = e[o].getComponentsInChildren("LocalizedLabel");
                    Array.prototype.push.apply(t, n)
                }
                for (var i = 0; i < t.length; ++i) {
                    var r = t[i];
                    r.node.active && r.updateLabel()
                }
                for (var a = [], c = 0; c < e.length; ++c) {
                    var s = e[c].getComponentsInChildren("LocalizedSprite");
                    Array.prototype.push.apply(a, s)
                }
                for (var l = 0; l < a.length; ++l) {
                    var p = a[l];
                    p.node.active && p.updateSprite(window.i18n.curLang)
                }
            }
        },
        cc._RF.pop()
    }
    , {
        "polyglot.min": "polyglot.min"
    }],
    LevelInfo: [function(e, t, o) {
        "use strict";
        cc._RF.push(t, "5f05dbmjm5G15HpjIkTx8rK", "LevelInfo"),
        Object.defineProperty(o, "__esModule", {
            value: !0
        });
        var n = cc._decorator
          , i = n.ccclass
          , r = n.property
          , a = function(e) {
            function t() {
                var t = null !== e && e.apply(this, arguments) || this;
                return t.label = null,
                t
            }
            return __extends(t, e),
            t.prototype.onLoad = function() {}
            ,
            t.prototype.start = function() {}
            ,
            t.prototype.update = function(e) {}
            ,
            __decorate([r(cc.Node)], t.prototype, "label", void 0),
            t = __decorate([i], t)
        }(cc.Component);
        o.default = a,
        cc._RF.pop()
    }
    , {}],
    LevelTest: [function(e, t, o) {
        "use strict";
        cc._RF.push(t, "941b4wUbf5GN6PN1a+HffBv", "LevelTest"),
        Object.defineProperty(o, "__esModule", {
            value: !0
        });
        var n = e("../Common/JsonHelper")
          , i = e("./ResourceManager")
          , r = e("../Tools/ObjectTool")
          , a = e("../Events/EventType")
          , c = e("../Model/GraphicsCreator")
          , s = e("../Tools/MathTool")
          , l = e("../Main")
          , p = e("../UI/UIController")
          , d = e("./AudioManager")
          , u = cc._decorator
          , h = u.ccclass
          , g = (u.property,
        function(e) {
            function t() {
                var t = null !== e && e.apply(this, arguments) || this;
                return t.grphicsPre = null,
                t.graphics = null,
                t.ropeHingeArr = null,
                t.nailHingeArr = null,
                t.scissorPos = null,
                t.ropeNodeArr = [],
                t.answer = [],
                t.isScissorsed = !1,
                t.timeout = null,
                t.startPoint = cc.Vec2.ZERO,
                t.endPoint = cc.Vec2.ZERO,
                t._p1 = null,
                t._p2 = null,
                t.startIndex = 0,
                t.timer = 0,
                t
            }
            var o;
            return __extends(t, e),
            o = t,
            t.prototype.onLoad = function() {
                var e = this;
                o.Instance = this;
                var t = this;
                i.ResourceManager.getInstance().loadResources("prefabs/_graphics", cc.Prefab, function(o) {
                    t.grphicsPre = o,
                    t.graphics = r.ObjectTool.instanceWithPrefab("graphics", t.grphicsPre, t.node, new cc.Vec2(0,0)).getComponent(cc.Graphics),
                    t.graphics.node.setSiblingIndex(e.node.childrenCount - 1),
                    t.graphics.lineWidth = 5,
                    t.graphics.strokeColor = cc.Color.WHITE
                }),
                n.JsonHelper.ReadJson("levelDatas/answer", function(e) {
                    for (var o = JSON.parse(e), n = 0; n < o.length; n++) {
                        var i = o[n];
                        t.answer.push(i)
                    }
                })
            }
            ,
            t.prototype.showTip = function() {
                if (!l.default.Instance.isDebug) {
                    this.isScissorsed = !1;
                    var e = this
                      , t = 4 * (l.default.Instance.userData.currMaxLevel - 1) + l.default.Instance.userData.currMinLevel - 1;
                    this.answer.length <= t || (clearTimeout(this.timeout),
                    this.timeout = setTimeout(function() {
                        var o = e.answer[t];
                        p.default.Instance.moveScissors(o.startPos, o.endPos)
                    }, 2e3))
                }
            }
            ,
            t.prototype.start = function() {
                cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN, this.keyDownHandle, this),
                this.node.on(a.System_Event.TOUCH_START, this.touchStartHandle, this),
                this.node.on(a.System_Event.TOUCH_MOVE, this.touchMoveHandle, this),
                this.node.on(a.System_Event.TOUCH_END, this.touchEndHandle, this),
                this.node.on(a.System_Event.TOUCH_CANCEL, this.touchEndHandle, this)
            }
            ,
            t.prototype.touchStartHandle = function(e) {
                this.graphics.clear(),
                this.graphics.lineWidth = 5,
                this.graphics.strokeColor = cc.Color.WHITE,
                this.startPoint = new cc.Vec2(e.getLocation().x - cc.winSize.width / 2,e.getLocation().y - cc.winSize.height / 2)
            }
            ,
            t.prototype.touchMoveHandle = function(e) {
                this.graphics.clear(),
                this.graphics.moveTo(this.startPoint.x, this.startPoint.y),
                this.endPoint = new cc.Vec2(e.getLocation().x - cc.winSize.width / 2,e.getLocation().y - cc.winSize.height / 2),
                this.graphics.lineTo(this.endPoint.x, this.endPoint.y),
                this.graphics.stroke()
            }
            ,
            t.prototype.touchEndHandle = function(e) {
                if (this.isScissorsed = !0,
                0 == l.default.Instance.isDebug && (d.default._instance.playOneShot(d.AudioEnum.Cut),
                p.default.Instance.DisplayScissor(!1)),
                this.endPoint = new cc.Vec2(e.getLocation().x - cc.winSize.width / 2,e.getLocation().y - cc.winSize.height / 2),
                this.graphics.clear(),
                console.log(this.ropeNodeArr.length),
                !(this.endPoint.sub(this.startPoint).mag() < 10)) {
                    this.scissorPos = new f(this.startPoint,this.endPoint);
                    for (var t = 0; t < this.ropeNodeArr.length; t++) {
                        s.MathTool.isIntersect(this.scissorPos.A, this.scissorPos.B, this.ropeNodeArr[t].vector.A, this.ropeNodeArr[t].vector.B) && this.ropeNodeArr[t].node.getComponent(c.default).disEnable(this.ropeNodeArr[t].index)
                    }
                }
            }
            ,
            t.prototype.moveComplete = function() {
                this.graphics.clear(),
                this.graphics.node.position = cc.Vec2.ZERO
            }
            ,
            t.prototype.update = function(e) {
                if (this.timer += e,
                this.timer > 1) {
                    this.timer = 0;
                    for (var t = 0; t < this.ropeNodeArr.length; t++) {
                        var o = this.ropeNodeArr[t]
                          , n = o.node.children[o.node.childrenCount - 1];
                        o.vector.A = o.node.getComponent(c.default).lineArr.get(o.index)[0].position,
                        o.vector.B = n.position
                    }
                }
            }
            ,
            t.prototype.keyDownHandle = function(e) {
                switch (e.keyCode) {
                case cc.macro.KEY.q:
                case cc.macro.KEY.a:
                case cc.macro.KEY.b:
                    break;
                case cc.macro.KEY.c:
                    cc.director.getPhysicsManager().enabled = !0,
                    cc.director.getCollisionManager().enabled = !0
                }
            }
            ,
            t = o = __decorate([h], t)
        }(cc.Component));
        o.default = g;
        var f = function() {
            return function(e, t) {
                this.A = new cc.Vec2,
                this.B = new cc.Vec2,
                this.A = e,
                this.B = t
            }
        }();
        o.VertorObj = f,
        cc._RF.pop()
    }
    , {
        "../Common/JsonHelper": "JsonHelper",
        "../Events/EventType": "EventType",
        "../Main": "Main",
        "../Model/GraphicsCreator": "GraphicsCreator",
        "../Tools/MathTool": "MathTool",
        "../Tools/ObjectTool": "ObjectTool",
        "../UI/UIController": "UIController",
        "./AudioManager": "AudioManager",
        "./ResourceManager": "ResourceManager"
    }],
    LocalizedLabel: [function(e, t, o) {
        "use strict";
        cc._RF.push(t, "744dcs4DCdNprNhG0xwq6FK", "LocalizedLabel");
        var n = e("LanguageData");
        cc.Class({
            extends: cc.Component,
            editor: {
                executeInEditMode: !0,
                menu: "i18n/LocalizedLabel"
            },
            properties: {
                dataID: {
                    get: function() {
                        return this._dataID
                    },
                    set: function(e) {
                        this._dataID !== e && (this._dataID = e,
                        this.updateLabel())
                    }
                },
                _dataID: ""
            },
            onLoad: function() {
                n.inst || n.init(),
                this.fetchRender()
            },
            fetchRender: function() {
                var e = this.getComponent(cc.Label);
                if (e)
                    return this.label = e,
                    void this.updateLabel()
            },
            updateLabel: function() {
                this.label ? n.t(this.dataID) && (this.label.string = n.t(this.dataID)) : cc.error("Failed to update localized label, label component is invalid!")
            }
        }),
        cc._RF.pop()
    }
    , {
        LanguageData: "LanguageData"
    }],
    LocalizedSprite: [function(e, t, o) {
        "use strict";
        cc._RF.push(t, "f34ac2GGiVOBbG6XlfvgYP4", "LocalizedSprite");
        var n = e("SpriteFrameSet");
        cc.Class({
            extends: cc.Component,
            editor: {
                executeInEditMode: !0,
                inspector: "packages://i18n/inspector/localized-sprite.js",
                menu: "i18n/LocalizedSprite"
            },
            properties: {
                spriteFrameSet: {
                    default: [],
                    type: n
                }
            },
            onLoad: function() {
                this.fetchRender()
            },
            fetchRender: function() {
                var e = this.getComponent(cc.Sprite);
                if (e)
                    return this.sprite = e,
                    void this.updateSprite(window.i18n.curLang)
            },
            getSpriteFrameByLang: function(e) {
                for (var t = 0; t < this.spriteFrameSet.length; ++t)
                    if (this.spriteFrameSet[t].language === e)
                        return this.spriteFrameSet[t].spriteFrame
            },
            updateSprite: function(e) {
                if (this.sprite) {
                    var t = this.getSpriteFrameByLang(e);
                    !t && this.spriteFrameSet[0] && (t = this.spriteFrameSet[0].spriteFrame),
                    this.sprite.spriteFrame = t
                } else
                    cc.error("Failed to update localized sprite, sprite component is invalid!")
            }
        }),
        cc._RF.pop()
    }
    , {
        SpriteFrameSet: "SpriteFrameSet"
    }],
    Main: [function(e, t, o) {
        "use strict";
        cc._RF.push(t, "b2fedM9M2NKhahJeIWAA3O0", "Main"),
        Object.defineProperty(o, "__esModule", {
            value: !0
        });
        var n, i = e("./VO/BallVo"), r = e("./Model/UserData"), a = e("./Common/GameStorage"), c = e("./Events/EventManager"), s = e("./UI/UIController"), l = e("./Managers/ObjectGenerator"), p = e("./Managers/LevelTest"), d = e("./VO/BaseVo"), u = e("./Common/PrefabName"), h = e("./VO/BoomVo"), g = e("./Tools/ObjectTool"), f = e("./VO/BottleVo"), v = cc._decorator, y = v.ccclass, m = v.property;
        (function(e) {
            e[e.NailBall = 0] = "NailBall",
            e[e.DynamicBall = 1] = "DynamicBall",
            e[e.Null = -1] = "Null"
        }
        )(n = o.GameType || (o.GameType = {}));
        var _ = function(e) {
            function t() {
                var t = null !== e && e.apply(this, arguments) || this;
                return t.isDebugPhysics = !0,
                t.isDebugDraw = !0,
                t.isDebug = !1,
                t.gameoverParticels = [],
                t.gameStart = !1,
                t.userData = null,
                t.GAME_USER_DATA = "rope_game_user_data",
                t.GAME_DATA_COMPLETE = "game_data_complete",
                t.GAME_START = "rope_game_start",
                t.GAME_OVER = "game_over",
                t.CHECK_BOTTLE_DOWN_COUNT = "check_bottle_down_count",
                t.isMusicToggle = !0,
                t.isSoundToggle = !0,
                t.MUSIC_TOGGLE = "music_toggle",
                t.SOUND_TOGGLE = "sound_toggle",
                t.TRIGGER_BOTTLE = "trigger_bottle",
                t.bottleNum = 0,
                t.ballCount = 0,
                t.bottleNodes = new Array,
                t.cutBallCount = 0,
                t.gameType = n.Null,
                t.maxLevel = "20_4",
                t.checkBottleTimer = 0,
                t.fallDownBottleNum = 0,
                t.startTimer = 0,
                t.spawnTimer = 0,
                t.maxTimer = 0,
                t.spawnCount = 0,
                t.ballTable = null,
                t.boomTable = null,
                t.creatorCount = 0,
                t.interval = null,
                t
            }
            var o;
            return __extends(t, e),
            o = t,
            Object.defineProperty(t.prototype, "IsMusicToggle", {
                get: function() {
                    return this.isMusicToggle
                },
                enumerable: !0,
                configurable: !0
            }),
            Object.defineProperty(t.prototype, "IsSoundToggle", {
                get: function() {
                    return this.isSoundToggle
                },
                enumerable: !0,
                configurable: !0
            }),
			t.prototype.autoAdapteScreen = function(){
				var _canvas = cc.Canvas.instance;
				_canvas.fitHeight = true;
				_canvas.fitWidth = false;
			},
            t.prototype.onLoad = function() {
				this.autoAdapteScreen();
                o.Instance = this,
                this.devicePixel = cc.winSize,
                console.log("system devicePixel: " + this.devicePixel.width, this.devicePixel.height),
                this.isDebugPhysics && (cc.director.getPhysicsManager().enabled = !0,
                cc.director.getCollisionManager().enabled = !0),
                this.isDebugDraw && (cc.director.getCollisionManager().enabledDebugDraw = !0,
                cc.director.getPhysicsManager().debugDrawFlags = cc.PhysicsManager.DrawBits.e_aabbBit | cc.PhysicsManager.DrawBits.e_jointBit | cc.PhysicsManager.DrawBits.e_shapeBit),
                this.isDebug || (this.isMusicToggle = (a.GameStorage.getItem(this.MUSIC_TOGGLE),
                !0),
                this.setMusicToggle(this.IsMusicToggle),
                this.isSoundToggle = (a.GameStorage.getItem(this.SOUND_TOGGLE),
                !0),
                this.setSoundToggle(this.IsSoundToggle),
                this.userData = new r.default,
                this.userData = Object.assign(new r.default, a.GameStorage.getItemJson(this.GAME_USER_DATA)),
                null != this.userData && void 0 != this.userData || (console.log("userdata is null create"),
                this.userData = new r.default,
                this.userData.currMaxLevel = 1,
                this.userData.currMinLevel = 1),
                console.log("userdata,", this.userData.currMaxLevel, this.userData.currMinLevel));
				
				var reBtn = cc.find("MainPanel/restartBtn", this.node);
				reBtn.removeComponent(cc.Widget);
				
                this.Tili = cc.sys.localStorage.getItem("tl");
                if(null == this.Tili || undefined == this.Tili || "" == this.Tili){
                    this.Tili = 3;
                }
                
                cc.game.on(cc.game.EVENT_HIDE, function() {
                    cc.sys.localStorage.setItem("tl", this.Tili);
                    this.saveUserData();
                }.bind(this));
                
				//修改 体力
				var tiliNode = new cc.Node();
				tiliNode.x = reBtn.x + reBtn.width/2;
				tiliNode.y = reBtn.y - reBtn.height;
				tiliNode.parent = reBtn.parent;
				
				this.TiliLabel = tiliNode.addComponent(cc.Label);
                this.TiliLabel.string = "体力:" + this.Tili;
                //倒计时
                var timeNode = new cc.Node();
                timeNode.x = tiliNode.x;
                timeNode.y = tiliNode.y - tiliNode.height;
                timeNode.parent = tiliNode.parent;

                //总定时
                var time_s = 1800;
                var timeLabel = timeNode.addComponent(cc.Label);
                timeLabel.fontSize = 30;
                timeLabel.lineHeight = timeLabel.fontSize;
                timeLabel.schedule(function(){
                    if(--time_s > 0){
                        timeLabel.string = ((time_s/60)>>0) + ":" + (time_s%60);
                    }else{
                        time_s = 1800;
                        cc.sys.localStorage.setItem("tl", this.Tili);
                        this.TiliLabel.string = "体力:" + this.Tili;
                    }
                }.bind(this), 1);
            }
            ,
            t.prototype.start = function() {
                c.default.Instance.addListener(this.GAME_START, this.startGameHandle, this)
            }
            ,
            t.prototype.startGameHandle = function(e) {
                this.isDebug || (p.default.Instance.showTip(),
                6 == this.userData.currMaxLevel && (this.cutBallCount = 3,
                1 == this.userData.currMinLevel || 2 == this.userData.currMinLevel ? this.maxTimer = this.ballTable.timer / 1e3 : 3 == this.userData.currMinLevel ? this.maxTimer = 1 : 4 == this.userData.currMinLevel && (this.maxTimer = 2),
                this.spawnTimer = this.maxTimer,
                this.spawnCount = 0),
                s.default.Instance.UpdateUI())
            }
            ,
            t.prototype.update = function(e) {
                if (this.gameStart) {
                    if (this.checkBottleTimer += e,
                    this.checkBottleTimer > 1.2) {
                        this.checkBottleTimer = 0;
                        for (var t = 0; t < this.bottleNodes.length; t++) {
                            this.bottleNodes[t].getComponent(f.default).checkFallDown() && this.fallDownBottleNum++
                        }
                        if (console.log("check falldown bottle num: ", this.fallDownBottleNum, this.bottleNum),
                        this.fallDownBottleNum >= this.bottleNum)
                        {
                            if((this.Tili - 1) >= 0){
                                this.userData.currMinLevel++,
                                5 == this.userData.currMinLevel && (this.userData.currMaxLevel++,
                                this.userData.currMinLevel = 1),
                                s.default.Instance.DisplayScissor(!1),
                                this.saveUserData();
                            }
                            this.clearData(),
                            l.default.Instance.nextLevelJson(),
                            this.gameoverParticels[0].node.active = !0,
                            this.gameoverParticels[1].node.active = !0,
                            this.gameoverParticels[0].resetSystem(),
                            this.gameoverParticels[1].resetSystem();
                            setTimeout(this.gameOver.bind(this), 2e3);
                        }
                        else if (this.cutBallCount <= 0 && this.gameType == n.NailBall && (this.startTimer += 1,
                        this.startTimer > 3))
                            return this.gameStart = !1,
                            void s.default.Instance.showRetry()
                    }
                    6 == this.userData.currMaxLevel && this.spawnCount < 30 && (this.spawnTimer += e,
                    this.spawnTimer > this.maxTimer && (console.log("spawn:" + this.spawnTimer),
                    this.spawnCount++,
                    this.spawnTimer = 0,
                    this.spawnObj()))
                } else
                    this.checkBottleTimer = 0
            }
            ,
            t.prototype.setNextLevel = function() {

                if(this.Tili > 0){
                    this.TiliLabel.string = "体力:" + (--this.Tili);
                    cc.sys.localStorage.setItem("tl", this.Tili);
                    this.nextLevel();
                }else{
                    var thisObj = this;
                    
                    //埋点 激励回调下面
                    // {
                        // thisObj.userData.currMinLevel++,
                        // 5 == thisObj.userData.currMinLevel && (thisObj.userData.currMaxLevel++,
                        //     thisObj.userData.currMinLevel = 1);
                    //     thisObj.saveUserData();
                    //     thisObj.nextLevel();
                    // }
                }
            },
            t.prototype.nextLevel = function(){
                p.default.Instance.ropeNodeArr = [],
                l.default.Instance.parent.destroyAllChildren(),
                l.default.Instance.parent.removeAllChildren(!0),
                l.default.Instance.resLoadComplete(),
                s.default.Instance.UpdateUI();
            }
            ,
            t.prototype.spawnObj = function() {
                if ("6_1" == this.getLevel() || "6_2" == this.getLevel()) {
                    if (this.ballTable) {
                        var e = l.default.Instance.createPrefab(l.default.Instance.getPrefabeFromName(u.PrefabName.ball), this.ballTable);
                        l.default.Instance.setBallInfo(e, this.ballTable)
                    }
                } else if ("6_3" == this.getLevel()) {
                    this.creatorCount++;
                    var t = g.ObjectTool.instanceWithPrefab("ball2", l.default.Instance.getPrefabeFromName(u.PrefabName.ball), l.default.Instance.parent);
                    t.position = cc.v2(-322, 252),
                    t.setContentSize(new cc.Size(60,60)),
                    t.group = "ball",
                    t.getComponent(cc.RigidBody).type = cc.RigidBodyType.Static,
                    t.getComponent(cc.PhysicsCircleCollider).radius = 30,
                    t.getComponent(cc.PhysicsCircleCollider).density = 5,
                    t.getComponent(cc.PhysicsCircleCollider).apply(),
                    t.getComponent(i.default).isAddForce = !0,
                    t.getComponent(i.default).initForce = 360,
                    t.getComponent(i.default).initForceY = 800,
                    c.default.Instance.dispatchEvent(o.Instance.CHECK_BOTTLE_DOWN_COUNT)
                } else if ("6_4" == this.getLevel())
                    for (var n = 0; n < 5; n++)
                        if (this.boomTable) {
                            var r = l.default.Instance.createPrefab(l.default.Instance.getPrefabeFromName(u.PrefabName.boom), this.boomTable);
                            r.getComponent(d.default).setRigidInfo(this.boomTable.rigid),
                            r.getComponent(d.default).setBoxColliderInfo(this.boomTable.collider),
                            r.getComponent(h.default).delayShot = 300 * n,
                            r.getComponent(h.default).isRangeBoom = this.boomTable.isRangeBoom,
                            r.getComponent(h.default).initForce = this.boomTable.initForce,
                            r.getComponent(h.default).shotBoom()
                        }
            }
            ,
            t.prototype.gameOver = function() {
                this.gameoverParticels[0].node.active = !1,
                this.gameoverParticels[1].node.active = !1,
                1 == this.userData.currMinLevel ? (this.clearData(),
                l.default.Instance.parent.destroyAllChildren(),
                l.default.Instance.parent.removeAllChildren(!0),
                c.default.Instance.dispatchEvent(this.GAME_OVER)) : this.getLevel() != this.maxLevel ? this.setNextLevel() : (s.default.Instance.showAllLevelComplete(),
                this.clearData(),
                l.default.Instance.parent.destroyAllChildren(),
                l.default.Instance.parent.removeAllChildren(!0),
                this.gameStart = !1)
            }
            ,
            t.prototype.ClearAndResetGame = function() {
                this.clearData(),
                l.default.Instance.parent.destroyAllChildren(),
                l.default.Instance.parent.removeAllChildren(!0),
                l.default.Instance.resLoadComplete(),
                s.default.Instance.UpdateUI()
            }
            ,
            t.prototype.clearData = function() {
                clearInterval(this.interval),
                this.startTimer = 0,
                this.bottleNodes = new Array,
                this.fallDownBottleNum = 0,
                this.gameStart = !1,
                this.cutBallCount = 0,
                this.bottleNum = 0,
                this.ballCount = 0,
                this.ballTable = null,
                this.boomTable = null,
                p.default.Instance.ropeNodeArr = []
            }
            ,
            t.prototype.getLevelStr = function() {
                return "level_" + this.userData.currMaxLevel + "_" + this.userData.currMinLevel
            }
            ,
            t.prototype.getLevel = function() {
                return this.userData.currMaxLevel + "_" + this.userData.currMinLevel
            }
            ,
            t.prototype.setMusicToggle = function(e) {
                this.isMusicToggle = e,
                a.GameStorage.setItem(this.MUSIC_TOGGLE, e)
            }
            ,
            t.prototype.setSoundToggle = function(e) {
                this.isSoundToggle = e,
                a.GameStorage.setItem(this.SOUND_TOGGLE, e)
            }
            ,
            t.prototype.saveUserData = function() {
                a.GameStorage.setItemJson(this.GAME_USER_DATA, this.userData)
            }
            ,
            __decorate([m], t.prototype, "isDebugPhysics", void 0),
            __decorate([m], t.prototype, "isDebugDraw", void 0),
            __decorate([m], t.prototype, "isDebug", void 0),
            __decorate([m(cc.ParticleSystem)], t.prototype, "gameoverParticels", void 0),
            t = o = __decorate([y], t)
        }(cc.Component);
        o.default = _,
        cc._RF.pop()
    }
    , {
        "./Common/GameStorage": "GameStorage",
        "./Common/PrefabName": "PrefabName",
        "./Events/EventManager": "EventManager",
        "./Managers/LevelTest": "LevelTest",
        "./Managers/ObjectGenerator": "ObjectGenerator",
        "./Model/UserData": "UserData",
        "./Tools/ObjectTool": "ObjectTool",
        "./UI/UIController": "UIController",
        "./VO/BallVo": "BallVo",
        "./VO/BaseVo": "BaseVo",
        "./VO/BoomVo": "BoomVo",
        "./VO/BottleVo": "BottleVo"
    }],
    MathTool: [function(e, t, o) {
        "use strict";
        cc._RF.push(t, "04fddU4wpFE8p3hWCcv2GWG", "MathTool"),
        Object.defineProperty(o, "__esModule", {
            value: !0
        });
        var n = function() {
            function e() {}
            return e.GetRandom = function(e) {
                return Math.floor(e * Math.random())
            }
            ,
            e.luckyDraw = function(e) {
                var t = Math.floor(100 * Math.random());
                return console.log("\u6982\u7387\uff1a", e, ",\u5b9e\u9645\uff1a", t),
                t <= Number(e)
            }
            ,
            e.vec2Distance = function(e, t) {
                return e.sub(t).mag()
            }
            ,
            e.RandomMinMax = function(e, t) {
                return e + Math.floor(Math.random() * (t - e))
            }
            ,
            e.Clamp = function(e, t, o) {
                return e <= t ? e = t : e >= o && (e = o),
                e
            }
            ,
            e.getMax = function(e, t) {
                return e > t ? e : t
            }
            ,
            e.getMin = function(e, t) {
                return e > t ? t : e
            }
            ,
            e.getArrValMin = function(e) {
                return e.sort(function(e, t) {
                    return e - t
                })[0]
            }
            ,
            e.isIntersect = function(e, t, o, n) {
                return cc.Intersection.lineLine(e, t, o, n)
            }
            ,
            e.prototype.Cross = function(e, t) {}
            ,
            e
        }();
        o.MathTool = n,
        cc._RF.pop()
    }
    , {}],
    ObjectGenerator: [function(e, t, o) {
        "use strict";
        cc._RF.push(t, "14df2F2Dh5JcK75AQUFas5v", "ObjectGenerator"),
        Object.defineProperty(o, "__esModule", {
            value: !0
        });
        var n = e("../Tools/ObjectTool")
          , i = e("../VO/JointVo")
          , r = e("../Tools/MathTool")
          , a = e("../VO/BallVo")
          , c = e("./ResourceManager")
          , s = e("../Common/ObjectName")
          , l = e("../Model/Parabola")
          , p = e("../Common/JsonHelper")
          , d = e("../VO/BaseVo")
          , u = e("../VO/VOEnum")
          , h = e("./JsonGenerator")
          , g = e("../Model/GraphicsCreator")
          , f = e("../VO/BaseVo")
          , v = e("../Main")
          , y = e("../VO/BoomVo")
          , m = e("../Common/PrefabName")
          , _ = e("../Events/EventManager")
          , b = cc._decorator
          , C = b.ccclass
          , S = (b.property,
        function(e) {
            function t() {
                var t = null !== e && e.apply(this, arguments) || this;
                return t.parent = null,
                t.prefabeMap = new Map,
                t.bottlePre = null,
                t.grphicsPre = null,
                t.startNailPre = null,
                t.whiteBoardPre = null,
                t.endNailPre = null,
                t.hingePre = null,
                t.ballPre = null,
                t.boomPre = null,
                t.distanceJointPre = null,
                t.revoluteJointPre = null,
                t.straightBoardPre = null,
                t.straight2BoardPre = null,
                t.stairPre = null,
                t.rightAngleBoardPre = null,
                t.endBoardPre = null,
                t.bendBoardPre = null,
                t.bend40BoardPre = null,
                t.bend50BoardPre = null,
                t.ballPlayer = null,
                t.graphics = null,
                t.ropeHingeArr = null,
                t.nailHingeArr = null,
                t.isDraw = !1,
                t.isBallRopeDraw = !0,
                t.jsonData = "",
                t.loadIndex = 0,
                t.Interval = null,
                t.ballArr = null,
                t.boardArr = null,
                t.bottleArr = null,
                t.ropeArr = null,
                t._p1 = null,
                t._p2 = null,
                t
            }
            var o;
            return __extends(t, e),
            o = t,
            t.prototype.onLoad = function() {
                o.Instance = this,
                this.parent = this.node.getChildByName("Levels")
            }
            ,
            t.prototype.start = function() {
                var e = this
                  , t = this;
                c.ResourceManager.getInstance().loadResourceDir("prefabs/", cc.Prefab, function(t) {
                    for (var o = 0; o < t.length; o++)
                        switch (e.prefabeMap.set(t[o]._name, t[o]),
                        t[o]._name) {
                        case s.default.BALL:
                            e.ballPre = t[o];
                            break;
                        case s.default.BOOM:
                            e.boomPre = t[o];
                            break;
                        case s.default.GRAPHICS:
                            e.grphicsPre = t[o];
                            break;
                        case s.default.BOTTLE_COPY:
                            e.bottlePre = t[o];
                            break;
                        case s.default.HINGE_POINT:
                            e.hingePre = t[o];
                            break;
                        case s.default.START_NAIL:
                            e.startNailPre = t[o];
                            break;
                        case s.default.END_NAIL:
                            e.endNailPre = t[o];
                            break;
                        case s.default.STRAIGHT:
                            e.straightBoardPre = t[o];
                            break;
                        case s.default.STRAIGHT_2:
                            e.straight2BoardPre = t[o];
                            break;
                        case s.default.RIGHT_ANGLE:
                            e.rightAngleBoardPre = t[o];
                            break;
                        case s.default.END_BOARD:
                            e.endBoardPre = t[o];
                            break;
                        case s.default.BEND:
                            e.bendBoardPre = t[o];
                            break;
                        case s.default.BEND40:
                            e.bend40BoardPre = t[o];
                            break;
                        case s.default.BEND50:
                            e.bend50BoardPre = t[o];
                            break;
                        case s.default.REVOLUTE_POINT:
                            e.revoluteJointPre = t[o];
                            break;
                        case s.default.DISTANCE_POINT:
                            e.distanceJointPre = t[o];
                            break;
                        case s.default.WHITE_BOARD:
                            e.whiteBoardPre = t[o];
                            break;
                        case s.default.STAIR:
                            e.stairPre = t[o]
                        }
                    e.loadIndex++
                }),
                v.default.Instance.userData.currMaxLevel < 8 ? p.JsonHelper.ReadJson("levelDatas/" + v.default.Instance.getLevelStr(), function(o) {
                    e.loadIndex++,
                    t.jsonData = o
                }) : this.loadIndex++,
                cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN, this.onKeyDown, this),
                this.Interval = setInterval(function() {
                    if (!v.default.Instance.gameStart && 2 == e.loadIndex)
                        if (clearInterval(t.Interval),
                        e.loadIndex = 0,
                        "6_3" == v.default.Instance.getLevel() || "7_4" == v.default.Instance.getLevel() || v.default.Instance.userData.currMaxLevel >= 8) {
                            c.ResourceManager.getInstance().loadResources("levels/level_" + v.default.Instance.getLevel(), cc.Prefab, function(e) {
                                n.ObjectTool.instanceWithPrefab("level" + v.default.Instance.getLevel(), e, t.parent),
                                v.default.Instance.gameStart = !0,
                                _.default.Instance.dispatchEvent(v.default.Instance.GAME_START)
                            })
                        } else
                            t.resLoadComplete()
                }, 500)
            }
            ,
            t.prototype.nextLevelJson = function() {
                var e = this;
                v.default.Instance.userData.currMaxLevel < 8 && p.JsonHelper.ReadJson("levelDatas/" + v.default.Instance.getLevelStr(), function(t) {
                    e.jsonData = t
                })
            }
            ,
            t.prototype.getPrefabeFromName = function(e) {
                return 0 == this.prefabeMap.has(e) && console.error("the prefab name of " + e + " is not exist!"),
                this.prefabeMap.get(e)
            }
            ,
            t.prototype.resLoadComplete = function() {
                var e = this;
                if (this.ropeHingeArr = new Array,
                this.nailHingeArr = new Array,
                "6_3" == v.default.Instance.getLevel() || "7_4" == v.default.Instance.getLevel() || v.default.Instance.userData.currMaxLevel >= 8) {
                    c.ResourceManager.getInstance().loadResources("levels/level_" + v.default.Instance.getLevel(), cc.Prefab, function(t) {
                        n.ObjectTool.instanceWithPrefab("level" + v.default.Instance.getLevel(), t, e.parent),
                        v.default.Instance.gameStart = !0,
                        _.default.Instance.dispatchEvent(v.default.Instance.GAME_START)
                    })
                } else
                    this.parse(this.jsonData);
                v.default.Instance.gameStart = !0,
                _.default.Instance.dispatchEvent(v.default.Instance.GAME_START)
            }
            ,
            t.prototype.parse = function(e) {
                this.ballArr = new Array,
                this.boardArr = new Array,
                this.bottleArr = new Array,
                this.ropeArr = new Array;
                new d.BallTable,
                new d.BoardTable,
                new d.BottleTable,
                new d.JointTable;
                for (var t = JSON.parse(e), o = 0; o < t.length; o++) {
                    var r = t[o];
                    switch (r._name) {
                    case h.LevelWidgetTypeEnum.bends:
                        for (var a = 0; a < r.objectArr.length; a++) {
                            (S = Object.assign(new d.BoardTable, r.objectArr[a])).boardType == u.BoardType.Straight ? this.createPrefab(this.getPrefabeFromName(m.PrefabName.Straight), S) : S.boardType == u.BoardType.Bend_30 ? this.createPrefab(this.getPrefabeFromName(m.PrefabName.bend), S) : S.boardType == u.BoardType.Bend_40 ? this.createPrefab(this.getPrefabeFromName(m.PrefabName.bend40), S) : S.boardType == u.BoardType.Bend_50 ? this.createPrefab(this.getPrefabeFromName(m.PrefabName.bend50), S) : S.boardType == u.BoardType.RightAngle ? this.createPrefab(this.getPrefabeFromName(m.PrefabName.rightAngle), S) : S.boardType == u.BoardType.LeftEnd ? this.createPrefab(this.getPrefabeFromName(m.PrefabName.Boardend), S) : S.boardType == u.BoardType.Collider ? this.createBoardCollider(S.pos, S.size, S.rot) : S.boardType == u.BoardType.Stair ? this.createPrefab(this.getPrefabeFromName(m.PrefabName.stair), S) : S.boardType == u.BoardType.Straight2 && this.createPrefab(this.getPrefabeFromName(m.PrefabName.Straight2), S)
                        }
                        break;
                    case h.LevelWidgetTypeEnum.bottles:
                        for (var c = 0; c < r.objectArr.length; c++) {
                            var s = Object.assign(new d.BottleTable, r.objectArr[c])
                              , l = this.createPrefab(this.bottlePre, s);
                            l.name = "bottle_" + c,
                            "6_4" != v.default.Instance.getLevel() && "7_1" != v.default.Instance.getLevel() && "7_3" != v.default.Instance.getLevel() && (l.removeComponent(cc.PhysicsPolygonCollider),
                            l.addComponent(cc.PhysicsBoxCollider),
                            l.getComponent(f.default).setBoxColliderInfo(s.collider)),
                            l.group = "bottle"
                        }
                        break;
                    case h.LevelWidgetTypeEnum.nail_ball:
                    case h.LevelWidgetTypeEnum.nail_board:
                    case h.LevelWidgetTypeEnum.nail_boom:
                        var p = []
                          , _ = n.ObjectTool.createNode(h.LevelWidgetTypeEnum.nail_ball, this.parent, cc.Vec2.ZERO);
                        _.setContentSize(new cc.Size(720,1280));
                        for (var b = 0; b < r.objectArr.length; b++)
                            if (0 == b) {
                                var C = Object.assign(new d.JointTable, r.objectArr[b]);
                                (A = this.createPrefab(this.startNailPre, C)).getComponent(i.default).isVisibleSprite = r.objectArr[b].isVisibleSprite,
                                A.setParent(_),
                                p.push(A.getComponent(cc.RigidBody))
                            } else if (b == r.objectArr.length - 1) {
                                if (r.objectArr[b].itemType == u.ItemType.Ball)
                                    (ee = this.createBall(r.objectArr[b], this.getPrefabeFromName(m.PrefabName.ball), _)).getComponent(f.default).setRopeJointInfo(r.objectArr[b].joints[0]),
                                    ee.getComponent(cc.RopeJoint).connectedBody = p.pop(),
                                    v.default.Instance.ballCount++,
                                    v.default.Instance.cutBallCount++;
                                else if (r.objectArr[b].itemType == u.ItemType.Board) {
                                    var S = Object.assign(new d.BoardTable, r.objectArr[b])
                                      , I = this.createPrefab(this.whiteBoardPre, S);
                                    I.setParent(_),
                                    this.setBoardInfo(I, S),
                                    I.getComponent(cc.RopeJoint).connectedBody = p.pop()
                                } else if (r.objectArr[b].itemType == u.ItemType.Boom) {
                                    var P = Object.assign(new d.BoomTable, r.objectArr[b])
                                      , T = this.createPrefab(this.boomPre, P);
                                    T.setParent(_),
                                    this.setBoomInfo(T, P),
                                    T.getComponent(cc.RopeJoint).connectedBody = p.pop()
                                }
                            } else {
                                var w = Object.assign(new d.JointTable, r.objectArr[b])
                                  , B = this.createPrefab(this.hingePre, w);
                                B.setParent(_),
                                B.getComponent(f.default).setRopeJointInfo(w),
                                B.getComponent(cc.RopeJoint).connectedBody = p.pop(),
                                p.push(B.getComponent(cc.RigidBody))
                            }
                        _.addComponent(g.default),
                        _.getComponent(g.default).graphicsNumArr = r.graphicsNumArr,
                        this.isBallRopeDraw = !0;
                        break;
                    case h.LevelWidgetTypeEnum.nail_nail:
                        var R = [];
                        _ = null,
                        (_ = n.ObjectTool.createNode(h.LevelWidgetTypeEnum.nail_nail, this.parent, cc.Vec2.ZERO)).setContentSize(new cc.Size(720,1280)),
                        console.log(r.objectArr);
                        for (var N = 0; N < r.objectArr.length; N++)
                            if (0 == N) {
                                var A = this.createStartNail(r.objectArr[N], this.startNailPre, _);
                                R.push(A.getComponent(cc.RigidBody))
                            } else if (N == r.objectArr.length - 1) {
                                var F = Object.assign(new d.JointTable, r.objectArr[N]);
                                (ee = this.createPrefab(this.endNailPre, F)).getComponent(cc.RigidBody).type = cc.RigidBodyType.Static,
                                ee.getComponent(f.default).setDistanceInfo(F),
                                ee.getComponent(i.default).isVisibleSprite = F.isVisibleSprite,
                                ee.setParent(_),
                                ee.getComponent(cc.DistanceJoint).connectedBody = R.pop()
                            } else {
                                w = Object.assign(new d.JointTable, r.objectArr[N]);
                                (W = this.createPrefab(this.hingePre, w)).getComponent(f.default).setDistanceInfo(w),
                                W.getComponent(i.default).isVisibleSprite = w.isVisibleSprite,
                                W.group = "wall",
                                null != w.collider && W.getComponent(cc.PhysicsCircleCollider) && (W.getComponent(cc.PhysicsCircleCollider).radius = w.collider.radius,
                                W.getComponent(cc.PhysicsCircleCollider).apply()),
                                W.getComponent(cc.DistanceJoint).connectedBody = R.pop(),
                                W.setParent(_),
                                R.push(W.getComponent(cc.RigidBody))
                            }
                        _.addComponent(g.default),
                        _.getComponent(g.default).graphicsNumArr = r.graphicsNumArr;
                        break;
                    case h.LevelWidgetTypeEnum.nail_nail_collider:
                        R = [],
                        _ = null,
                        (_ = n.ObjectTool.createNode(h.LevelWidgetTypeEnum.nail_nail, this.parent, cc.Vec2.ZERO)).setContentSize(new cc.Size(720,1280));
                        for (var V = r, M = 0; M < V.objectArr.length; M++)
                            if (0 == M) {
                                A = this.createStartNail(r.objectArr[M], this.startNailPre, _);
                                R.push(A.getComponent(cc.RigidBody))
                            } else if (M == r.objectArr.length - 1) {
                                F = Object.assign(new d.JointTable, r.objectArr[M]);
                                (ee = this.createPrefab(this.endNailPre, F)).getComponent(cc.RigidBody).type = cc.RigidBodyType.Static,
                                ee.getComponent(f.default).setDistanceInfo(F),
                                ee.getComponent(i.default).isVisibleSprite = F.isVisibleSprite,
                                ee.setParent(_),
                                R.push(ee.getComponent(cc.RigidBody))
                            } else {
                                (W = this.createRevoluteColliderJoint(V.objectArr[M], _)).setParent(_),
                                R.push(W.getComponent(cc.RigidBody))
                            }
                        for (var E = 1; E < R.length - 1; E++) {
                            var O = R[E]
                              , L = R[E - 1]
                              , D = R[E + 1];
                            O.node.getComponents(cc.RevoluteJoint)[0].connectedBody = L,
                            O.node.getComponents(cc.RevoluteJoint)[1].connectedBody = D
                        }
                        _.addComponent(g.default),
                        _.getComponent(g.default).graphicsNumArr = r.graphicsNumArr;
                        break;
                    case h.LevelWidgetTypeEnum.nail_ball_nail:
                    case h.LevelWidgetTypeEnum.nail_three_ball:
                        p = [],
                        (_ = n.ObjectTool.createNode(h.LevelWidgetTypeEnum.nail_ball, this.parent, cc.Vec2.ZERO)).setContentSize(new cc.Size(720,1280));
                        for (var x = r, j = 0, J = 0, G = x.objectArr.length - 1, U = [], H = 0; H < x.graphicsNumArr.length; H++) {
                            R = [],
                            J = j + x.graphicsNumArr[H].y;
                            for (var z = j; z < J; z++)
                                if (z == j) {
                                    C = Object.assign(new d.JointTable, x.objectArr[z]);
                                    (A = this.createPrefab(this.startNailPre, C)).setParent(_),
                                    A.getComponent(i.default).isVisibleSprite = C.isVisibleSprite,
                                    A.getComponent(cc.RigidBody).type = cc.RigidBodyType.Static,
                                    R.push(A.getComponent(cc.RigidBody))
                                } else {
                                    var W, k = Object.assign(new d.JointTable, x.objectArr[z]);
                                    (W = this.createPrefab(this.hingePre, k)).setParent(_),
                                    W.getComponent(cc.RopeJoint) && (W.getComponent(cc.RopeJoint).maxLength = k.maxLength - 1,
                                    W.getComponent(f.default).setRopeJointInfo(k)),
                                    W.getComponent(cc.DistanceJoint) && (W.getComponent(f.default).setDistanceInfo(k),
                                    W.getComponent(cc.DistanceJoint).distance = k.maxLength - 1),
                                    W.getComponent(cc.RopeJoint).connectedBody = R.pop(),
                                    R.push(W.getComponent(cc.RigidBody))
                                }
                            U.push(R.pop()),
                            j += x.graphicsNumArr[H].y
                        }
                        var K = Object.assign(new d.BallTable, x.objectArr[G])
                          , Y = this.createBall(x.objectArr[G], this.getPrefabeFromName(m.PrefabName.ball), _);
                        if (v.default.Instance.cutBallCount++,
                        this.setBallInfo(Y, K),
                        r._name == h.LevelWidgetTypeEnum.nail_ball_nail) {
                            Y.addComponent(cc.DistanceJoint),
                            Y.addComponent(cc.DistanceJoint);
                            for (var Z = 0; Z < K.joints.length; Z++)
                                this.setJDistanceJoint(Y.getComponents(cc.DistanceJoint)[Z], K.joints[Z]),
                                Y.getComponents(cc.DistanceJoint)[Z].connectedBody = U[Z];
                            Y.getComponent(cc.RopeJoint) && Y.removeComponent(cc.RopeJoint)
                        } else if (r._name == h.LevelWidgetTypeEnum.nail_three_ball) {
                            for (var q = 3 - Y.getComponents(cc.RopeJoint).length; q > 0; )
                                Y.addComponent(cc.RopeJoint),
                                q--;
                            for (var X = 0; X < K.joints.length; X++)
                                this.setRopeJoint(Y.getComponents(cc.RopeJoint)[X], K.joints[X]),
                                Y.getComponents(cc.RopeJoint)[X].connectedBody = U[X];
                            Y.getComponent(cc.DistanceJoint) && Y.removeComponent(cc.DistanceJoint)
                        }
                        Y.getComponent(cc.RigidBody).type = cc.RigidBodyType.Static,
                        v.default.Instance.ballCount++,
                        _.addComponent(g.default),
                        _.getComponent(g.default).graphicsNumArr = r.graphicsNumArr,
                        this.isBallRopeDraw = !0;
                        break;
                    case h.LevelWidgetTypeEnum.balls:
                        if (6 != v.default.Instance.userData.currMaxLevel)
                            for (var Q = 0; Q < r.objectArr.length; Q++) {
                                v.default.Instance.ballCount++;
                                var $ = Object.assign(new d.BallTable, r.objectArr[Q])
                                  , ee = this.createPrefab(this.ballPre, $);
                                this.setBallInfo(ee, $)
                            }
                        else {
                            var te = Object.assign(new d.BallTable, r.objectArr[0]);
                            v.default.Instance.ballTable = te
                        }
                        break;
                    case h.LevelWidgetTypeEnum.booms:
                        if (6 != v.default.Instance.userData.currMaxLevel)
                            for (var oe = 0; oe < r.objectArr.length; oe++) {
                                var ne = Object.assign(new d.BoomTable, r.objectArr[oe])
                                  , ie = this.createPrefab(this.boomPre, ne);
                                ie.getComponent(f.default).setRigidInfo(ne.rigid),
                                ie.getComponent(f.default).setBoxColliderInfo(ne.collider),
                                ie.getComponent(y.default).isRangeBoom = ne.isRangeBoom
                            }
                        else {
                            te = Object.assign(new d.BoomTable, r.objectArr[0]);
                            v.default.Instance.boomTable = te
                        }
                    }
                }
            }
            ,
            t.prototype.createBall = function(e, t, o) {
                var n = Object.assign(new d.BallTable, e)
                  , i = this.createPrefab(this.ballPre, n);
                return o && i.setParent(o),
                void 0 != i.group && null != i && (i.group = n.group),
                i.getComponent(f.default).setRigidInfo(n.rigid),
                i.getComponent(f.default).setCircleColliderInfo(n.collider),
                i.getComponent(a.default).isAddForce = n.isAddForce,
                i.getComponent(a.default).isAddForce = n.isAddForce,
                i.getComponent(a.default).initForce = n.initForce,
                i.getComponent(a.default).initForceY = n.initForceY,
                i.getComponent(a.default).changeDensity = n.changeDensity,
                i.getComponent(a.default).changeFriction = n.changeFriction,
                i.getComponent(a.default).changeForce = n.changeForce,
                i.getComponent(a.default).changeGravityScale = n.changeGravityScale,
                i
            }
            ,
            t.prototype.createStartNail = function(e, t, o) {
                var n = Object.assign(new d.JointTable, e)
                  , r = this.createPrefab(t, n);
                return r.setParent(o),
                r.getComponent(i.default).isVisibleSprite = n.isVisibleSprite,
                r.getComponent(cc.RigidBody).type = cc.RigidBodyType.Static,
                r
            }
            ,
            t.prototype.createHingeNail = function(e, t, o) {
                var n = Object.assign(new d.JointTable, e)
                  , r = this.createPrefab(this.hingePre, n);
                return r.setParent(o),
                r.getComponent(i.default).isVisibleSprite = n.isVisibleSprite,
                r.getComponent(cc.RopeJoint) && (r.getComponent(cc.RopeJoint).maxLength = n.maxLength - 1,
                r.getComponent(f.default).setRopeJointInfo(n)),
                r.getComponent(cc.DistanceJoint) && r.getComponent(f.default).setDistanceInfo(n),
                null != n.collider && r.getComponent(cc.PhysicsCircleCollider) && (r.getComponent(cc.PhysicsCircleCollider).radius = n.collider.radius,
                r.getComponent(cc.PhysicsCircleCollider).apply()),
                r
            }
            ,
            t.prototype.createRevoluteColliderJoint = function(e, t) {
                var o = Object.assign(new d.ColliderJointTable, e)
                  , n = this.createPrefab(this.getPrefabeFromName(m.PrefabName.revolutePoint), o.joints[0]);
                n.group = "wall",
                n.setParent(t),
                n.getComponent(i.default).isVisibleSprite = o.joints[0].isVisibleSprite,
                n.getComponent(f.default).setColliderInfo(n.getComponent(cc.PhysicsBoxCollider), o.collider),
                n.getComponent(cc.PhysicsBoxCollider).size = o.size,
                n.getComponent(cc.PhysicsBoxCollider).apply();
                var r = n.getComponents(cc.RevoluteJoint)[0]
                  , a = n.getComponents(cc.RevoluteJoint)[1];
                return this.setDistanceInfo(r, o.joints[0]),
                this.setDistanceInfo(a, o.joints[1]),
                n
            }
            ,
            t.prototype.setDistanceInfo = function(e, t) {
                this.setJointInfo(e, t),
                e.apply()
            }
            ,
            t.prototype.setJointInfo = function(e, t) {
                e.anchor = t.anchor,
                e.connectedAnchor = t.connectedAnchor
            }
            ,
            t.prototype.createPrefab = function(e, t) {
                var o = this.instanceObj(t.name, e);
                return this.baseCreate(o, t),
                o.group = t.group,
                o
            }
            ,
            t.prototype.createBoardCollider = function(e, t, o) {
                var i = n.ObjectTool.createNode("coll", this.parent);
                i.position = new cc.Vec2(e.x,e.y),
                i.setContentSize(t),
                i.angle = o,
                i.group = "wall",
                i.addComponent(cc.PhysicsBoxCollider),
                null != i.getComponent(cc.RigidBody) && void 0 != i.getComponent(cc.RigidBody) || i.addComponent(cc.RigidBody),
                i.getComponent(cc.PhysicsBoxCollider).size.width = t.width,
                i.getComponent(cc.PhysicsBoxCollider).size.height = t.height,
                i.getComponent(cc.RigidBody).type = cc.RigidBodyType.Static,
                i.getComponent(cc.PhysicsBoxCollider).apply()
            }
            ,
            t.prototype.baseCreate = function(e, t) {
                e.position = t.pos,
                e.setScale(t.scale),
                e.angle = t.rot,
                e.setContentSize(t.size)
            }
            ,
            t.prototype.instanceObj = function(e, t) {
                return n.ObjectTool.instanceWithPrefab(e, t, this.parent)
            }
            ,
            t.prototype.setJDistanceJoint = function(e, t) {
                e.distance = t.maxLength,
                e.anchor = t.anchor,
                e.connectedAnchor = t.connectedAnchor,
                e.apply()
            }
            ,
            t.prototype.setRopeJoint = function(e, t) {
                e.maxLength = t.maxLength,
                e.anchor = t.anchor,
                e.connectedAnchor = t.connectedAnchor,
                e.apply()
            }
            ,
            t.prototype.setBallInfo = function(e, t) {
                void 0 != t.group && null != t && (e.group = t.group),
                t.joints.length > 0 && e.getComponent(f.default).setRopeJointInfo(t.joints[0]),
                e.group = "ball",
                e.getComponent(f.default).setRigidInfo(t.rigid),
                e.getComponent(f.default).setCircleColliderInfo(t.collider),
                e.getComponent(a.default).isAddForce = t.isAddForce,
                e.getComponent(a.default).initForce = t.initForce,
                e.getComponent(a.default).initForceY = t.initForceY,
                e.getComponent(a.default).changeDensity = t.changeDensity,
                e.getComponent(a.default).changeFriction = t.changeFriction,
                e.getComponent(a.default).changeForce = t.changeForce,
                e.getComponent(a.default).changeGravityScale = t.changeGravityScale,
                e.getComponent(a.default).timer = t.timer
            }
            ,
            t.prototype.setBoardInfo = function(e, t) {
                e.getComponent(f.default).setRopeJointInfo(t.joints[0]),
                e.getComponent(f.default).setRigidInfo(t.rigid),
                e.getComponent(f.default).setBoxColliderInfo(t.collider)
            }
            ,
            t.prototype.setBoomInfo = function(e, t) {
                e.getComponent(y.default).isRangeBoom = t.isRangeBoom,
                e.getComponent(y.default).initForce = t.initForce,
                e.getComponent(f.default).setRopeJointInfo(t.joints[0]),
                e.getComponent(f.default).setRigidInfo(t.rigid),
                e.getComponent(f.default).setBoxColliderInfo(t.collider)
            }
            ,
            t.prototype.createRopeBall = function() {
                var e = new cc.Vec2(-95,510)
                  , t = new cc.Vec2(-95,230)
                  , o = n.ObjectTool.instanceWithPrefab("nail", this.startNailPre, this.parent, e);
                console.log(o.position.x, o.position.y);
                var i = o.getComponent(cc.RigidBody)
                  , c = o.position;
                this.ropeHingeArr.push(o);
                for (var s = null, l = e.y, p = (e.y - t.y) / 5, d = 0; d < 4; d++) {
                    l -= p,
                    (s = n.ObjectTool.instanceWithPrefab("nail", this.hingePre, this.parent, new cc.Vec2(e.x,l))).group = "wall";
                    var u = r.MathTool.vec2Distance(c, s.position);
                    console.log(s.position.x, s.position.y, u),
                    i = s.getComponent(cc.RigidBody),
                    c = s.position,
                    this.ropeHingeArr.push(s)
                }
                l -= p;
                var h = n.ObjectTool.instanceWithPrefab("ball", this.ballPre, this.parent, new cc.Vec2(t.x,l))
                  , g = r.MathTool.vec2Distance(c, h.position);
                h.getComponent(a.default).setRopeInfo(i, g),
                console.log(h.position.x, h.position.y, g),
                this.ballPlayer = h.getComponent(cc.RigidBody),
                this.ballPlayer.fixedRotation = !0,
                this.ropeHingeArr.push(h),
                this.isBallRopeDraw = !0
            }
            ,
            t.prototype.createRopeNail = function() {
                var e = new cc.Vec2(556,408)
                  , t = new cc.Vec2(97,-139)
                  , o = n.ObjectTool.instanceWithPrefab("nail", this.startNailPre, this.node, e);
                console.log(o.position.x, o.position.y),
                this.nailHingeArr.push(o);
                for (var i = e.x, a = (e.x - t.x) / 10, c = 0, s = o.getComponent(cc.RigidBody), p = o.position, d = new l.default(t,e), u = 0; u < 10; u++) {
                    i -= a,
                    c = d.calaXYValue(i);
                    var h = n.ObjectTool.instanceWithPrefab("nail", this.hingePre, this.node, new cc.Vec2(i,c))
                      , g = r.MathTool.vec2Distance(p, h.position);
                    h.group = "wall",
                    h.getComponent(cc.RopeJoint).connectedBody = s,
                    h.getComponent(cc.RopeJoint).maxLength = g,
                    h.getComponent(cc.PhysicsCircleCollider).radius = 3,
                    h.getComponent(cc.PhysicsCircleCollider).offset = new cc.Vec2(5,-5),
                    h.getComponent(cc.RigidBody).type = cc.RigidBodyType.Dynamic,
                    s = h.getComponent(cc.RigidBody),
                    p = h.position,
                    h.opacity = 0,
                    this.nailHingeArr.push(h),
                    console.log(h.position.x, h.position.y, g)
                }
                var f = n.ObjectTool.instanceWithPrefab("nail", this.endNailPre, this.node, t);
                f.getComponent(cc.RopeJoint).connectedBody = s,
                f.getComponent(cc.RopeJoint).maxLength = 5,
                console.log(f.position.x, f.position.y, 5),
                this.nailHingeArr.push(f),
                this.isDraw = !0
            }
            ,
            t.prototype.createDistance = function() {
                var e = new cc.Vec2(556,408)
                  , t = new cc.Vec2(97,-139)
                  , o = n.ObjectTool.instanceWithPrefab("nail", this.startNailPre, this.node, e);
                console.log(o.position.x, o.position.y),
                this.nailHingeArr.push(o);
                for (var i = e.x, a = (e.x - t.x) / 10, c = 0, s = o.getComponent(cc.RigidBody), p = o.position, d = new l.default(t,e), u = 0; u < 10; u++) {
                    i -= a,
                    c = d.calaXYValue(i);
                    var h = n.ObjectTool.instanceWithPrefab("nail", this.hingePre, this.node, new cc.Vec2(i,c))
                      , g = r.MathTool.vec2Distance(p, h.position);
                    h.group = "wall",
                    h.getComponent(cc.RopeJoint).connectedBody = s,
                    h.getComponent(cc.RopeJoint).maxLength = g,
                    h.getComponent(cc.PhysicsCircleCollider).radius = 3,
                    h.getComponent(cc.PhysicsCircleCollider).offset = new cc.Vec2(5,-5),
                    h.getComponent(cc.RigidBody).type = cc.RigidBodyType.Dynamic,
                    s = h.getComponent(cc.RigidBody),
                    p = h.position,
                    h.opacity = 0,
                    this.nailHingeArr.push(h),
                    console.log(h.position.x, h.position.y, g)
                }
                var f = n.ObjectTool.instanceWithPrefab("nail", this.endNailPre, this.node, t);
                f.getComponent(cc.RopeJoint).connectedBody = s,
                f.getComponent(cc.RopeJoint).maxLength = 5,
                console.log(f.position.x, f.position.y, 5),
                this.nailHingeArr.push(f),
                this.isDraw = !0
            }
            ,
            t.prototype.update = function(e) {
                this.isDraw
            }
            ,
            t.prototype.onKeyDown = function(e) {
                switch (e.keyCode) {
                case cc.macro.KEY.q:
                case cc.macro.KEY.a:
                case cc.macro.KEY.b:
                case cc.macro.KEY.c:
                }
            }
            ,
            t = o = __decorate([C], t)
        }(cc.Component));
        o.default = S,
        cc._RF.pop()
    }
    , {
        "../Common/JsonHelper": "JsonHelper",
        "../Common/ObjectName": "ObjectName",
        "../Common/PrefabName": "PrefabName",
        "../Events/EventManager": "EventManager",
        "../Main": "Main",
        "../Model/GraphicsCreator": "GraphicsCreator",
        "../Model/Parabola": "Parabola",
        "../Tools/MathTool": "MathTool",
        "../Tools/ObjectTool": "ObjectTool",
        "../VO/BallVo": "BallVo",
        "../VO/BaseVo": "BaseVo",
        "../VO/BoomVo": "BoomVo",
        "../VO/JointVo": "JointVo",
        "../VO/VOEnum": "VOEnum",
        "./JsonGenerator": "JsonGenerator",
        "./ResourceManager": "ResourceManager"
    }],
    ObjectName: [function(e, t, o) {
        "use strict";
        cc._RF.push(t, "9e2a3z36wlBVZ+UXpfyQwxw", "ObjectName"),
        Object.defineProperty(o, "__esModule", {
            value: !0
        });
        var n = cc._decorator
          , i = n.ccclass
          , r = (n.property,
        function() {
            function e() {}
            return e.GRAPHICS = "_graphics",
            e.BALL = "ball",
            e.BOOM = "boom",
            e.WHITE_BOARD = "white_board",
            e.BOTTLE_COPY = "bottle",
            e.HINGE_POINT = "hingePoint",
            e.END_NAIL = "endNail",
            e.START_NAIL = "startNail",
            e.STRAIGHT = "Straight",
            e.STRAIGHT_2 = "Straight2",
            e.STAIR = "stair",
            e.RIGHT_ANGLE = "rightAngle",
            e.END_BOARD = "Boardend",
            e.BEND = "bend",
            e.BEND40 = "bend40",
            e.BEND50 = "bend50",
            e.DISTANCE_POINT = "distancePoint",
            e.REVOLUTE_POINT = "revolutePoint",
            e.REVOLUTE_WHITE_BOARD = "revolute_white_board",
            e = __decorate([i], e)
        }());
        o.default = r,
        cc._RF.pop()
    }
    , {}],
    ObjectTool: [function(e, t, o) {
        "use strict";
        cc._RF.push(t, "14ec0i3NLxIbqnG/FlwQFzb", "ObjectTool"),
        Object.defineProperty(o, "__esModule", {
            value: !0
        });
        var n = function() {
            function e() {}
            return e.prototype.start = function() {}
            ,
            e.createNode = function(e, t, o) {
                void 0 === o && (o = new cc.Vec2(0,0));
                var n = new cc.Node(e);
                return null != t ? t.addChild(n) : cc.director.getScene().addChild(n),
                n
            }
            ,
            e.createNodeWithParent = function(e, t, o, n) {
                return void 0 === n && (n = new cc.Vec2(0,0)),
                (t = cc.instantiate(t)).name = e,
                null != o ? o.addChild(t) : cc.director.getScene().addChild(t),
                t.setPosition(n),
                t
            }
            ,
            e.createSpriteNode = function(e, t, o) {
                var n = new cc.Node(e);
                return n.addComponent(cc.Sprite).spriteFrame = t,
                null != o ? o.addChild(n) : cc.director.getScene().addChild(n),
                n
            }
            ,
            e.instanceWithPrefab = function(e, t, o, n) {
                void 0 === n && (n = new cc.Vec2(0,0));
                var i = cc.instantiate(t);
                return null == i && console.error("the _prefab " + e + ",_prefab name:" + t + " is null!!!"),
                i.name = e,
                null != o ? o.addChild(i) : cc.director.getScene().addChild(i),
                i.setPosition(n),
                i
            }
            ,
            e.instanceWithNode = function(e, t, o, n) {
                void 0 === n && (n = new cc.Vec2(0,0));
                var i = cc.instantiate(t);
                return null == i && console.error("the _prefab " + e + ",_prefab name:" + t + " is null!!!"),
                i.name = e,
                null != o ? o.addChild(i) : cc.director.getScene().addChild(i),
                i.setPosition(n),
                i
            }
            ,
            e.GlobalFindObj = function(e) {
                var t = cc.find("Canvas/" + e);
                return null == t && console.error("\uff01\uff01\uff01the find node is null------------------------"),
                t
            }
            ,
            e.FindObjWithParent = function(e, t) {
                var o = cc.find(e, t);
                return null == o && console.error("\uff01\uff01\uff01the find " + e + " node is null------------------------"),
                o
            }
            ,
            e.GetCanvas = function() {
                return cc.find("Canvas")
            }
            ,
            e.GetMainCamera = function() {
                return cc.find("Canvas/Main Camera")
            }
            ,
            e.setScale = function(e, t, o, n) {
                void 0 === o && (o = 0),
                void 0 === n && (n = 0),
                0 != o && 0 != n && (e.setScale(1),
                e.width = o,
                e.height = n);
                var i = 0;
                i = t.getRect().width > t.getRect().height ? e.width / t.getRect().width : e.height / t.getRect().height,
                e.width = t.getRect().width,
                e.height = t.getRect().height,
                e.setScale(i)
            }
            ,
            e.SetRoleScale = function(e, t, o, n) {
                void 0 === o && (o = 0),
                void 0 === n && (n = 0),
                0 != o && 0 != n && (e.setScale(1),
                e.width = o,
                e.height = n);
                var i = 0;
                if (i = t.getRect().width > t.getRect().height ? e.width / t.getRect().width : e.height / t.getRect().height,
                e.width >= t.getRect().width && e.height >= t.getRect().height)
                    return i = 1,
                    e.width = t.getRect().width,
                    void (e.height = t.getRect().height);
                e.width = t.getRect().width,
                e.height = t.getRect().height,
                e.setScale(i)
            }
            ,
            e.createText = function(e, t, o, n) {
                void 0 === n && (n = new cc.Vec2(0,0));
                var i = new cc.Node(e);
                i.setPosition(n),
                i.addComponent(cc.Label),
                i.getComponent(cc.Label).string = o,
                i.getComponent(cc.Label).fontSize = 20,
                i.getComponent(cc.Label).lineHeight = 23,
                i.color = new cc.Color(93,236,60);
                var r = cc.moveBy(.5, cc.v2(0, 40));
                return i.runAction(cc.sequence(r, cc.callFunc(function() {
                    i.destroy()
                }
                .bind(this)))),
                null != t ? t.addChild(i) : cc.director.getScene().addChild(i),
                i
            }
            ,
            e.finish = function() {
                console.log("\u52a8\u4f5c\u5b8c\u6210----------")
            }
            ,
            e.forEachObject = function(e) {
                for (var t in e)
                    if (e.hasOwnProperty(t)) {
                        var o = e[t];
                        console.log("obj key:" + t + ",value :" + o)
                    }
            }
            ,
            e.parseKeyValue = function(e) {
                for (var t = (e = e.replace("{", "").replace("}", "")).split(","), o = [], n = 0; n < t.length; n++) {
                    var i = t[n];
                    o.push([i.split(":")[0], i.split(":")[1]])
                }
                return o
            }
            ,
            e
        }();
        o.ObjectTool = n,
        cc._RF.pop()
    }
    , {}],
    Parabola: [function(e, t, o) {
        "use strict";
        cc._RF.push(t, "47e8a2gIGpLwKAFq6T2KC0a", "Parabola"),
        Object.defineProperty(o, "__esModule", {
            value: !0
        });
        var n = cc._decorator
          , i = n.ccclass
          , r = (n.property,
        function() {
            function e(e, t) {
                this.x = 0,
                this.y = 0,
                this.a = 0,
                this.h = 0,
                this.k = 0,
                this.h = e.x,
                this.k = e.y,
                this.a = (t.y - this.k) / ((t.x - this.h) * (t.x - this.h))
            }
            return e.prototype.calaXYValue = function(e) {
                return this.a * ((e - this.h) * (e - this.h)) + this.k
            }
            ,
            e = __decorate([i], e)
        }());
        o.default = r,
        cc._RF.pop()
    }
    , {}],
    PrefabName: [function(e, t, o) {
        "use strict";
        cc._RF.push(t, "134caz9ym1Gnbbw9f3m5229", "PrefabName"),
        Object.defineProperty(o, "__esModule", {
            value: !0
        });
        var n = cc._decorator;
        n.ccclass,
        n.property;
        (function(e) {
            e.ball = "ball",
            e.bend = "bend",
            e.bend40 = "bend40",
            e.bend50 = "bend50",
            e.Boardend = "Boardend",
            e.boom = "boom",
            e.bottle = "bottle",
            e.distancePoint = "distancePoint",
            e.endNail = "endNail",
            e.hingePoint = "hingePoint",
            e.home_07 = "home_07",
            e.home_08 = "home_08",
            e.revolutePoint = "revolutePoint",
            e.revolute_white_board = "revolute_white_board",
            e.rightAngle = "rightAngle",
            e.stair = "stair",
            e.startNail = "startNail",
            e.Straight = "Straight",
            e.Straight2 = "Straight2",
            e.whiteLine = "whiteLine",
            e.white_board = "white_board",
            e._graphics = "_graphics",
            e.level_6_3 = "level_6_3"
        }
        )(o.PrefabName || (o.PrefabName = {})),
        cc._RF.pop()
    }
    , {}],
    ResourceManager: [function(e, t, o) {
        "use strict";
        cc._RF.push(t, "4d743kJCp5FUY7kUxQPJYQ0", "ResourceManager"),
        Object.defineProperty(o, "__esModule", {
            value: !0
        });
        var n = cc._decorator
          , i = (n.ccclass,
        n.property,
        function() {
            function e() {}
            return e.getInstance = function() {
                return e.instance || (e.instance = new e),
                e.instance
            }
            ,
            e.prototype.loadResources = function(e, t, o, n) {
                cc.loader.loadRes(e, t, n, function(t, n) {
                    t ? console.error("!!! load _url:" + e + " ......." + t) : (console.log("load " + e + " res complete..." + n._name),
                    null == n && console.error("the obj:", e, " is null!!!"),
                    void 0 !== o && o instanceof Function && o(n))
                })
            }
            ,
            e.prototype.loadResourceDir = function(e, t, o) {
                cc.loader.loadResDir(e, t, this.loadingProgress, function(t, n) {
                    if (t)
                        console.error("!!! load error....." + e + "," + t);
                    else {
                        console.log("load " + e + " folder res");
                        for (var i = 0; i < n.length; i++)
                            console.log("load " + n[i]._name + " object ");
                        console.log("res length:" + n.length),
                        void 0 !== o && o instanceof Function && o(n)
                    }
                })
            }
            ,
            e.prototype.loadingProgress = function(e, t, o) {}
            ,
            e.prototype.loadSpriteFrameRemote = function(e, t) {
                cc.loader.load(e, function(o, n) {
                    o ? console.log("load fail " + o) : (console.log("load " + e + " res complete..." + n._name),
                    void 0 !== t && t instanceof Function && t(n))
                })
            }
            ,
            e.prototype.unLoadRes = function(e) {
                cc.loader.releaseRes(e)
            }
            ,
            e.prototype.unLoadAllRes = function() {
                cc.loader.releaseAll()
            }
            ,
            e.prototype.unLoadAsset = function(e) {
                cc.loader.releaseRes(e)
            }
            ,
            e.prototype.unLoadAllAsset = function(e) {
                cc.loader.releaseResDir(e)
            }
            ,
            e
        }());
        o.ResourceManager = i,
        cc._RF.pop()
    }
    , {}],
    Rope: [function(e, t, o) {
        "use strict";
        cc._RF.push(t, "930d5kHjJlA8YYWyEa4okvK", "Rope"),
        Object.defineProperty(o, "__esModule", {
            value: !0
        });
        var n = e("./GraphicsTool")
          , i = cc._decorator
          , r = i.ccclass
          , a = i.property
          , c = function(e) {
            function t() {
                var t = null !== e && e.apply(this, arguments) || this;
                return t.ropeList1 = [],
                t.ropeList2 = [],
                t.point1 = null,
                t.graphicsNode = null,
                t._graphics = null,
                t.isRelease = !1,
                t
            }
            return __extends(t, e),
            t.prototype.onLoad = function() {
                this._graphics = this.graphicsNode.getComponent(cc.Graphics),
                cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN, this.onKeyDown, this);
                for (var e = 0; e < this.ropeList1.length; e++)
                    this.ropeList1[e].opacity = 0
            }
            ,
            t.prototype.onKeyDown = function(e) {
                switch (e.keyCode) {
                case cc.macro.KEY.a:
                    for (var t = 0; t < this.ropeList1.length; t++)
                        this.ropeList1[t].getComponent(cc.RopeJoint).enabled = !1;
                    this.isRelease = !0,
                    this._graphics.clear();
                    break;
                case cc.macro.KEY.b:
                    for (t = 0; t < this.ropeList1.length; t++)
                        this.ropeList1[t].getComponent(cc.RopeJoint).enabled = !0;
                    this.isRelease = !1,
                    this._graphics.clear()
                }
            }
            ,
            t.prototype.start = function() {}
            ,
            t.prototype.update = function(e) {
                if (!this.isRelease) {
                    this._graphics.clear();
                    for (var t = 0; t < this.ropeList1.length - 1; t++) {
                        var o = this.ropeList1[t]
                          , i = this.ropeList1[t + 1];
                        t < this.ropeList1.length - 2 ? this.drawLine(o, i) : n.default.drawContinuousLine(this._graphics, o.position, this.localConvertWorldPointAR(i), cc.Color.WHITE, 5)
                    }
                }
            }
            ,
            t.prototype.drawLine = function(e, t) {
                n.default.ObjDrawLine(this._graphics, e, t, cc.Color.WHITE, 5)
            }
            ,
            t.prototype.localConvertWorldPointAR = function(e) {
                if (e) {
                    var t = e.convertToWorldSpaceAR(cc.v2(0, 0));
                    return t = new cc.Vec2(t.x - cc.director.getWinSizeInPixels().width / 2,t.y - cc.director.getWinSizeInPixels().height / 2),
                    console.log(t.x, t.y),
                    t
                }
                return cc.v2(0, 0)
            }
            ,
            t.prototype.localConvertWorldPoint = function(e) {
                if (e) {
                    var t = e.convertToWorldSpace(cc.v2(0, 0));
                    return console.log(t.x, t.y),
                    t
                }
                return null
            }
            ,
            __decorate([a(cc.Node)], t.prototype, "ropeList1", void 0),
            __decorate([a(cc.Node)], t.prototype, "ropeList2", void 0),
            __decorate([a(cc.Node)], t.prototype, "point1", void 0),
            __decorate([a(cc.Node)], t.prototype, "graphicsNode", void 0),
            t = __decorate([r], t)
        }(cc.Component);
        o.default = c,
        cc._RF.pop()
    }
    , {
        "./GraphicsTool": "GraphicsTool"
    }],
    SelfRotation: [function(e, t, o) {
        "use strict";
        cc._RF.push(t, "28fe3ZxYVBBXLjNhR4p0T7i", "SelfRotation"),
        Object.defineProperty(o, "__esModule", {
            value: !0
        });
        var n = cc._decorator
          , i = n.ccclass
          , r = n.property
          , a = function(e) {
            function t() {
                var t = null !== e && e.apply(this, arguments) || this;
                return t.speed = 1,
                t
            }
            return __extends(t, e),
            t.prototype.onLoad = function() {}
            ,
            t.prototype.start = function() {}
            ,
            t.prototype.update = function(e) {
                this.node.angle -= this.speed
            }
            ,
            __decorate([r], t.prototype, "speed", void 0),
            t = __decorate([i], t)
        }(cc.Component);
        o.default = a,
        cc._RF.pop()
    }
    , {}],
    Splash: [function(e, t, o) {
        "use strict";
        cc._RF.push(t, "043879ObzZMIZOS7b4dFleR", "Splash"),
        Object.defineProperty(o, "__esModule", {
            value: !0
        });
        var n = cc._decorator
          , i = n.ccclass
          , r = n.property
          , a = function(e) {
            function t() {
                var t = null !== e && e.apply(this, arguments) || this;
                return t.loadLabel = null,
                t
            }
            return __extends(t, e),
			t.prototype.onLoad = function(){
				this.autoAdapteScreen();
			},
			t.prototype.autoAdapteScreen = function(){
				var _canvas = cc.Canvas.instance;
				_canvas.fitHeight = true;
				_canvas.fitWidth = false;
			},
            t.prototype.start = function() {
                var e = this;
                self = this,
                setTimeout(function() {
                    cc.director.preloadScene("Main", e.onProgress.bind(e), function() {
                        cc.director.loadScene("Main")
                    })
                }, 2e3)
            }
            ,
            t.prototype.onProgress = function(e, t, o) {
                self.loadLabel.string = Math.floor(e / t * 100) + "%"
            }
            ,
            __decorate([r(cc.Label)], t.prototype, "loadLabel", void 0),
            t = __decorate([i], t)
        }(cc.Component);
        o.default = a,
        cc._RF.pop()
    }
    , {}],
    SpringVo: [function(e, t, o) {
        "use strict";
        cc._RF.push(t, "42a10MSivFG8ZEmAtEQTLw4", "SpringVo"),
        Object.defineProperty(o, "__esModule", {
            value: !0
        });
        var n = e("./BaseVo")
          , i = cc._decorator
          , r = i.ccclass
          , a = i.property
          , c = function(e) {
            function t() {
                var t = null !== e && e.apply(this, arguments) || this;
                return t.springForce = cc.Vec2.ZERO,
                t
            }
            return __extends(t, e),
            t.prototype.onLoad = function() {}
            ,
            t.prototype.start = function() {}
            ,
            t.prototype.update = function(e) {}
            ,
            t.prototype.onBeginContact = function(t, o, n) {
                if (e.prototype.onBeginContact.call(this, t, o, n),
                "ball" == n.node.group) {
                    var i = n.node;
                    this.node.getComponent(cc.Animation).play("springAni"),
                    i.getComponent(cc.RigidBody).linearVelocity = this.springForce,
                    this.node.getComponent(cc.Animation).on("finished", function() {}, this),
                    console.log("ball trigger spring")
                }
            }
            ,
            __decorate([a(cc.Vec2)], t.prototype, "springForce", void 0),
            t = __decorate([r], t)
        }(n.default);
        o.default = c,
        cc._RF.pop()
    }
    , {
        "./BaseVo": "BaseVo"
    }],
    SpriteFrameSet: [function(e, t, o) {
        "use strict";
        cc._RF.push(t, "97019Q80jpE2Yfz4zbuCZBq", "SpriteFrameSet");
        var n = cc.Class({
            name: "SpriteFrameSet",
            properties: {
                language: "",
                spriteFrame: cc.SpriteFrame
            }
        });
        t.exports = n,
        cc._RF.pop()
    }
    , {}],
    SpriteFrameState: [function(e, t, o) {
        "use strict";
        cc._RF.push(t, "58ff6VsMyxKpaKCsQFVXUAG", "SpriteFrameState"),
        Object.defineProperty(o, "__esModule", {
            value: !0
        });
        var n = cc._decorator
          , i = n.ccclass
          , r = n.property
          , a = function(e) {
            function t() {
                var t = null !== e && e.apply(this, arguments) || this;
                return t.sprites = [],
                t
            }
            return __extends(t, e),
            t.prototype.start = function() {}
            ,
            t.prototype.setSprite = function(e) {
                this.node.getComponent(cc.Sprite).spriteFrame = this.sprites[e]
            }
            ,
            t.prototype.swap = function(e) {
                void 0 === e && (e = !0),
                this.node.getComponent(cc.Sprite).spriteFrame = e ? this.sprites[0] : this.sprites[1]
            }
            ,
            __decorate([r(cc.SpriteFrame)], t.prototype, "sprites", void 0),
            t = __decorate([i], t)
        }(cc.Component);
        o.default = a,
        function(e) {
            e[e.Default = 0] = "Default",
            e[e.State1 = 1] = "State1",
            e[e.State2 = 2] = "State2"
        }(o.SpriteFrameEnum || (o.SpriteFrameEnum = {})),
        cc._RF.pop()
    }
    , {}],
    Test: [function(e, t, o) {
        "use strict";
        cc._RF.push(t, "1f608PMt89HXoz8Ko5teE28", "Test"),
        Object.defineProperty(o, "__esModule", {
            value: !0
        });
        var n = cc._decorator
          , i = n.ccclass
          , r = (n.property,
        function(e) {
            function t() {
                return null !== e && e.apply(this, arguments) || this
            }
            return __extends(t, e),
            t.prototype.onLoad = function() {}
            ,
            t.prototype.start = function() {}
            ,
            t.prototype.update = function(e) {}
            ,
            t = __decorate([i], t)
        }(cc.Component));
        o.default = r,
        cc._RF.pop()
    }
    , {}],
    TetherBall: [function(e, t, o) {
        "use strict";
        cc._RF.push(t, "3cbd1eTb+NEnImUukvxE5gq", "TetherBall"),
        Object.defineProperty(o, "__esModule", {
            value: !0
        });
        var n = cc._decorator
          , i = n.ccclass
          , r = (n.property,
        function(e) {
            function t() {
                return null !== e && e.apply(this, arguments) || this
            }
            return __extends(t, e),
            t.prototype.onLoad = function() {}
            ,
            t.prototype.start = function() {}
            ,
            t.prototype.update = function(e) {}
            ,
            t = __decorate([i], t)
        }(cc.Component));
        o.default = r,
        cc._RF.pop()
    }
    , {}],
    ThreeTest: [function(e, t, o) {
        "use strict";
        cc._RF.push(t, "4a4a9SL7jhHPpGcFu9lvs7N", "ThreeTest"),
        Object.defineProperty(o, "__esModule", {
            value: !0
        });
        var n = cc._decorator
          , i = n.ccclass
          , r = n.property
          , a = function(e) {
            function t() {
                var t = null !== e && e.apply(this, arguments) || this;
                return t.ball = null,
                t.ballRopes = [],
                t
            }
            return __extends(t, e),
            t.prototype.onLoad = function() {
                cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN, this.onKeyDown, this);
                for (var e = this.ball.getComponents(cc.RopeJoint), t = 0; t < e.length; t++) {
                    var o = e[t];
                    this.ballRopes[t] = o,
                    console.log("body:====" + o.connectedBody.name)
                }
            }
            ,
            t.prototype.onKeyDown = function(e) {
                switch (e.keyCode) {
                case cc.macro.KEY.a:
                    this.ballRopes[0].enabled = !1;
                    break;
                case cc.macro.KEY.b:
                    this.ballRopes[1].enabled = !1;
                    break;
                case cc.macro.KEY.c:
                    this.ballRopes[2].enabled = !1
                }
            }
            ,
            t.prototype.start = function() {}
            ,
            __decorate([r(cc.Node)], t.prototype, "ball", void 0),
            __decorate([r(cc.RopeJoint)], t.prototype, "ballRopes", void 0),
            t = __decorate([i], t)
        }(cc.Component);
        o.default = a,
        cc._RF.pop()
    }
    , {}],
    UIController: [function(e, t, o) {
        "use strict";
        cc._RF.push(t, "e3068qlZwJGkqwjsGHiQRHb", "UIController"),
        Object.defineProperty(o, "__esModule", {
            value: !0
        });
        var n = e("./UIUtility/SpriteFrameState")
          , i = e("../Events/EventType")
          , r = e("../Main")
          , a = e("./UIUtility/ActionInterval")
          , c = e("../Events/EventManager")
          , s = e("../Managers/LevelTest")
          , l = cc._decorator
          , p = l.ccclass
          , d = l.property
          , u = function(e) {
            function t() {
                var t = null !== e && e.apply(this, arguments) || this;
                return t.levelCompletePanel = null,
                t.allLevelCompletePanel = null,
                t.goldTxt = null,
                t.leveltxt = null,
                t.restartBtn = null,
                t.nextBtn = null,
                t.gameoverGoldTxt = null,
                t.settingBtn = null,
                t.retryBtn = null,
                t.miniLevels = [],
                t.scissors = null,
                t.hand = null,
                t.miniLevel = 0,
                t.tweenCount = 0,
                t
            }
            var o;
            return __extends(t, e),
            o = t,
            t.prototype.onLoad = function() {
                o.Instance = this,
                this.miniLevels = this.miniLevelParent.children,
                this.restartBtn.on(i.System_Event.TOUCH_START, this.restartHandle, this),
                this.settingBtn.on(i.System_Event.TOUCH_START, this.settingHandle, this),
                this.nextBtn.on(i.System_Event.TOUCH_START, this.nextLevelHandle, this),
                this.retryBtn.on(i.System_Event.TOUCH_START, this.restartHandle, this),
                this.levelCompletePanel.active = !1
            }
            ,
            t.prototype.start = function() {
                c.default.Instance.addListener(r.default.Instance.GAME_OVER, this.showGameOverUI, this)
            }
            ,
            t.prototype.UpdateUI = function() {
                this.leveltxt.string = "\u5173\u5361 " + r.default.Instance.userData.currMaxLevel,
                this.goldTxt.string = "" + r.default.Instance.userData.gold,
                this.switchMiniLevel(r.default.Instance.userData.currMinLevel - 1),
                this.tweenCount = 0
            }
            ,
            t.prototype.showGameOverUI = function(e) {
                this.levelCompletePanel.active = !0
            }
            ,
            t.prototype.showRetry = function() {
                this.retryBtn.active = !0
            }
            ,
            t.prototype.nextLevelHandle = function() {
                this.levelCompletePanel.active = !1,
                r.default.Instance.setNextLevel()
            }
            ,
            t.prototype.restartHandle = function(e) {
                this.retryBtn.active = !1,
                r.default.Instance.ClearAndResetGame()
            }
            ,
            t.prototype.settingHandle = function(e) {
                r.default.Instance.setSoundToggle(!r.default.Instance.IsSoundToggle),
                this.settingBtn.getComponent(n.default).swap(r.default.Instance.IsSoundToggle)
            }
            ,
            t.prototype.update = function(e) {}
            ,
            t.prototype.DisplayScissor = function(e) {
                void 0 === e && (e = !0),
                this.hand.active = e,
                this.scissors.active = e
            }
            ,
            t.prototype.moveScissors = function(e, t) {
                if (0 != r.default.Instance.gameStart) {
                    if (!s.default.Instance.isScissorsed) {
                        var o = this;
                        this.DisplayScissor(!0),
                        console.log(e, t);
                        cc.v2(e.x - cc.winSize.width / 2, e.y - cc.winSize.height / 2),
                        cc.v2(t.x - cc.winSize.width / 2, t.y - cc.winSize.height / 2);
                        this.hand.position = e,
                        this.scissors.position = e,
                        a.default.MoveTo(this.hand, 1.5, t, function() {
                            o.tweenCount <= 2 ? (this.DisplayScissor(!1),
                            o.tweenCount++,
                            o.moveScissors(e, t)) : this.DisplayScissor(!1)
                        }
                        .bind(this))
                    }
                } else
                    this.DisplayScissor(!1)
            }
            ,
            t.prototype.switchMiniLevel = function(e) {
                for (var t = 0; t < this.miniLevels.length; t++) {
                    var o = this.miniLevels[t];
                    t <= e ? o.getComponent(n.default).swap(!1) : o.getComponent(n.default).swap(!0)
                }
            }
            ,
            t.prototype.showAllLevelComplete = function() {
                this.allLevelCompletePanel.active = !0
            }
            ,
            __decorate([d(cc.Node)], t.prototype, "levelCompletePanel", void 0),
            __decorate([d(cc.Node)], t.prototype, "allLevelCompletePanel", void 0),
            __decorate([d(cc.Label)], t.prototype, "goldTxt", void 0),
            __decorate([d(cc.Label)], t.prototype, "leveltxt", void 0),
            __decorate([d(cc.Node)], t.prototype, "restartBtn", void 0),
            __decorate([d(cc.Node)], t.prototype, "nextBtn", void 0),
            __decorate([d(cc.Label)], t.prototype, "gameoverGoldTxt", void 0),
            __decorate([d(cc.Node)], t.prototype, "settingBtn", void 0),
            __decorate([d(cc.Node)], t.prototype, "retryBtn", void 0),
            __decorate([d(cc.Node)], t.prototype, "miniLevelParent", void 0),
            __decorate([d(cc.Node)], t.prototype, "scissors", void 0),
            __decorate([d(cc.Node)], t.prototype, "hand", void 0),
            t = o = __decorate([p], t)
        }(cc.Component);
        o.default = u,
        cc._RF.pop()
    }
    , {
        "../Events/EventManager": "EventManager",
        "../Events/EventType": "EventType",
        "../Main": "Main",
        "../Managers/LevelTest": "LevelTest",
        "./UIUtility/ActionInterval": "ActionInterval",
        "./UIUtility/SpriteFrameState": "SpriteFrameState"
    }],
    UIPanelEnum: [function(e, t, o) {
        "use strict";
        cc._RF.push(t, "ecad9GK/HxDtpWmdrvZOw1h", "UIPanelEnum"),
        Object.defineProperty(o, "__esModule", {
            value: !0
        }),
        function(e) {
            e[e.StartPanel = 0] = "StartPanel",
            e[e.IllustPanel = 1] = "IllustPanel",
            e[e.CasePanel = 3] = "CasePanel",
            e[e.StageMenuPanel = 4] = "StageMenuPanel",
            e[e.ResultPanel = 5] = "ResultPanel",
            e[e.MissPanel = 6] = "MissPanel",
            e[e.SolvePanel = 7] = "SolvePanel",
            e[e.Null = 8] = "Null"
        }(o.UIPanelEnum || (o.UIPanelEnum = {})),
        cc._RF.pop()
    }
    , {}],
    UITranfromUtility: [function(e, t, o) {
        "use strict";
        cc._RF.push(t, "948e8V0DDxNLLLjNa3s9bzF", "UITranfromUtility"),
        Object.defineProperty(o, "__esModule", {
            value: !0
        });
        var n = cc._decorator
          , i = n.ccclass
          , r = (n.property,
        function() {
            function e() {}
            return e.localConvertWorldPointAR = function(e) {
                if (e) {
                    var t = e.convertToWorldSpaceAR(cc.v2(0, 0));
                    return t = new cc.Vec2(t.x - cc.winSize.width / 2,t.y - cc.winSize.height / 2)
                }
                return cc.v2(0, 0)
            }
            ,
            e = __decorate([i], e)
        }());
        o.default = r,
        cc._RF.pop()
    }
    , {}],
    UserData: [function(e, t, o) {
        "use strict";
        cc._RF.push(t, "89c2bnYxPlNeb7N7jU2GNQV", "UserData"),
        Object.defineProperty(o, "__esModule", {
            value: !0
        });
        var n = function() {
            return function() {
                this.currMaxLevel = 1,
                this.currMinLevel = 1,
                this.gold = 0
            }
        }();
        o.default = n,
        cc._RF.pop()
    }
    , {}],
    VOEnum: [function(e, t, o) {
        "use strict";
        cc._RF.push(t, "0cb76nlglNGv64wM0Neq4He", "VOEnum"),
        Object.defineProperty(o, "__esModule", {
            value: !0
        }),
        function(e) {
            e[e.Ball = 0] = "Ball",
            e[e.Boom = 1] = "Boom",
            e[e.Board = 2] = "Board",
            e[e.Bottle = 3] = "Bottle",
            e[e.Rope = 4] = "Rope",
            e[e.Car = 5] = "Car",
            e[e.Spring = 6] = "Spring"
        }(o.ItemType || (o.ItemType = {})),
        function(e) {
            e[e.Straight = 0] = "Straight",
            e[e.Bend_30 = 1] = "Bend_30",
            e[e.Bend_40 = 2] = "Bend_40",
            e[e.Bend_50 = 3] = "Bend_50",
            e[e.Bend_135 = 4] = "Bend_135",
            e[e.RightAngle = 5] = "RightAngle",
            e[e.LeftEnd = 6] = "LeftEnd",
            e[e.RightEnd = 7] = "RightEnd",
            e[e.Custom1 = 8] = "Custom1",
            e[e.Stair = 9] = "Stair",
            e[e.Straight2 = 10] = "Straight2",
            e[e.Collider = 101] = "Collider"
        }(o.BoardType || (o.BoardType = {})),
        function(e) {
            e[e.Circle = 0] = "Circle",
            e[e.Box = 1] = "Box",
            e[e.Polygon = 2] = "Polygon"
        }(o.ColliderType || (o.ColliderType = {})),
        function(e) {
            e[e.Hinge = 0] = "Hinge",
            e[e.Nail = 1] = "Nail",
            e[e.Revolute = 2] = "Revolute"
        }(o.JointType || (o.JointType = {})),
        function(e) {
            e[e.A = 0] = "A",
            e[e.B = 1] = "B",
            e[e.C = 2] = "C",
            e[e.D = 3] = "D",
            e[e.E = 4] = "E",
            e[e.F = 5] = "F",
            e[e.G = 6] = "G",
            e[e.H = 7] = "H",
            e[e.I = 8] = "I",
            e[e.J = 9] = "J",
            e[e.K = 10] = "K",
            e[e.L = 11] = "L",
            e[e.M = 12] = "M",
            e[e.N = 13] = "N",
            e[e.O = 14] = "O",
            e[e.P = 15] = "P",
            e[e.Q = 16] = "Q",
            e[e.R = 17] = "R",
            e[e.S = 18] = "S",
            e[e.T = 19] = "T",
            e[e.U = 20] = "U",
            e[e.V = 21] = "V",
            e[e.W = 22] = "W",
            e[e.X = 23] = "X",
            e[e.Y = 24] = "Y",
            e[e.Z = 25] = "Z",
            e[e.Null = -1] = "Null"
        }(o.NameOrder || (o.NameOrder = {})),
        cc._RF.pop()
    }
    , {}],
    Version: [function(e, t, o) {
        "use strict";
        cc._RF.push(t, "c40edojMUtEZLCaZ7eCaA9N", "Version"),
        Object.defineProperty(o, "__esModule", {
            value: !0
        });
        var n = e("./Common/GameStorage")
          , i = cc._decorator
          , r = i.ccclass
          , a = i.property
          , c = function(e) {
            function t() {
                var t = null !== e && e.apply(this, arguments) || this;
                return t.va = "",
                t.vb = "",
                t
            }
            return __extends(t, e),
            t.prototype.onLoad = function() {
                n.GameStorage.getItem("rope_game_version") && (this.va = n.GameStorage.getItem("rope_game_version"))
            }
            ,
            t.prototype.start = function() {
                "" != this.va ? -1 == this.versionCompareHandle(this.va, this.vb) && n.GameStorage.clear() : (this.va = this.vb,
                n.GameStorage.setItem("rope_game_version", this.va))
            }
            ,
            t.prototype.versionCompareHandle = function(e, t) {
                cc.log("JS Custom Version Compare: version A is " + e + ", version B is " + t);
                for (var o = e.split("."), n = t.split("."), i = 0; i < o.length; ++i) {
                    var r = parseInt(o[i])
                      , a = parseInt(n[i] || 0);
                    if (r !== a)
                        return r - a
                }
                return n.length > o.length ? -1 : 0
            }
            ,
            t.prototype.update = function(e) {}
            ,
            __decorate([a(cc.String)], t.prototype, "vb", void 0),
            t = __decorate([r], t)
        }(cc.Component);
        o.default = c,
        cc._RF.pop()
    }
    , {
        "./Common/GameStorage": "GameStorage"
    }],
    VivoSDK: [function(e, t, o) {
        "use strict";
        cc._RF.push(t, "92ad74DagJHT6DCuHAlkdIc", "VivoSDK"),
        Object.defineProperty(o, "__esModule", {
            value: !0
        });
        var n = function() {
            function e() {}
            return e.prototype.vibrateShort = function() {
                cc.sys.platform === cc.sys.VIVO_GAME && qg.vibrateShort()
            }
            ,
            e.prototype.vibrateLong = function() {
                cc.sys.platform === cc.sys.VIVO_GAME && qg.vibrateLong()
            }
            ,
            e
        }();
        o.default = n,
        cc._RF.pop()
    }
    , {}],
    WhiteLine: [function(e, t, o) {
        "use strict";
        cc._RF.push(t, "c07a5TjU5JNGKqY09Srd2OX", "WhiteLine"),
        Object.defineProperty(o, "__esModule", {
            value: !0
        });
        var n = cc._decorator
          , i = n.ccclass
          , r = (n.property,
        function(e) {
            function t() {
                return null !== e && e.apply(this, arguments) || this
            }
            return __extends(t, e),
            t.prototype.onLoad = function() {}
            ,
            t.prototype.start = function() {}
            ,
            t.prototype.apply = function(e, t, o) {
                this.node.position = e,
                this.node.setContentSize(o),
                this.node.angle = t,
                this.node.getComponent(cc.PhysicsBoxCollider).size = o,
                this.node.getComponent(cc.PhysicsBoxCollider).apply()
            }
            ,
            t.prototype.update = function(e) {}
            ,
            t = __decorate([i], t)
        }(cc.Component));
        o.default = r,
        cc._RF.pop()
    }
    , {}],
    "polyglot.min": [function(e, t, o) {
        "use strict";
        cc._RF.push(t, "e26fd9yy65A4q3/JkpVnFYg", "polyglot.min");
        var n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
            return typeof e
        }
        : function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        }
        ;
        (function(e, i) {
            "function" == typeof define && define.amd ? define([], function() {
                return i(e)
            }) : "object" == (void 0 === o ? "undefined" : n(o)) ? t.exports = i(e) : e.Polyglot = i(e)
        }
        )(void 0, function(e) {
            function t(e) {
                e = e || {},
                this.phrases = {},
                this.extend(e.phrases || {}),
                this.currentLocale = e.locale || "en",
                this.allowMissing = !!e.allowMissing,
                this.warn = e.warn || l
            }
            function o(e) {
                var t, o, n, i = {};
                for (t in e)
                    if (e.hasOwnProperty(t))
                        for (n in o = e[t])
                            i[o[n]] = t;
                return i
            }
            function i(e) {
                return e.replace(/^\s+|\s+$/g, "")
            }
            function r(e, t, o) {
                var n, r;
                return null != o && e ? n = i((r = e.split(d))[c(t, o)] || r[0]) : n = e,
                n
            }
            function a(e) {
                var t = o(h);
                return t[e] || t.en
            }
            function c(e, t) {
                return u[a(e)](t)
            }
            function s(e, t) {
                for (var o in t)
                    "_" !== o && t.hasOwnProperty(o) && (e = e.replace(new RegExp("%\\{" + o + "\\}","g"), t[o]));
                return e
            }
            function l(t) {
                e.console && e.console.warn && e.console.warn("WARNING: " + t)
            }
            function p(e) {
                var t = {};
                for (var o in e)
                    t[o] = e[o];
                return t
            }
            t.VERSION = "0.4.3",
            t.prototype.locale = function(e) {
                return e && (this.currentLocale = e),
                this.currentLocale
            }
            ,
            t.prototype.extend = function(e, t) {
                var o;
                for (var i in e)
                    e.hasOwnProperty(i) && (o = e[i],
                    t && (i = t + "." + i),
                    "object" == (void 0 === o ? "undefined" : n(o)) ? this.extend(o, i) : this.phrases[i] = o)
            }
            ,
            t.prototype.clear = function() {
                this.phrases = {}
            }
            ,
            t.prototype.replace = function(e) {
                this.clear(),
                this.extend(e)
            }
            ,
            t.prototype.t = function(e, t) {
                var o, n;
                return "number" == typeof (t = null == t ? {} : t) && (t = {
                    smart_count: t
                }),
                "string" == typeof this.phrases[e] ? o = this.phrases[e] : "string" == typeof t._ ? o = t._ : this.allowMissing ? o = e : (this.warn('Missing translation for key: "' + e + '"'),
                n = e),
                "string" == typeof o && (t = p(t),
                n = s(n = r(o, this.currentLocale, t.smart_count), t)),
                n
            }
            ,
            t.prototype.has = function(e) {
                return e in this.phrases
            }
            ;
            var d = "||||"
              , u = {
                chinese: function(e) {
                    return 0
                },
                german: function(e) {
                    return 1 !== e ? 1 : 0
                },
                french: function(e) {
                    return e > 1 ? 1 : 0
                },
                russian: function(e) {
                    return e % 10 == 1 && e % 100 != 11 ? 0 : e % 10 >= 2 && e % 10 <= 4 && (e % 100 < 10 || e % 100 >= 20) ? 1 : 2
                },
                czech: function(e) {
                    return 1 === e ? 0 : e >= 2 && e <= 4 ? 1 : 2
                },
                polish: function(e) {
                    return 1 === e ? 0 : e % 10 >= 2 && e % 10 <= 4 && (e % 100 < 10 || e % 100 >= 20) ? 1 : 2
                },
                icelandic: function(e) {
                    return e % 10 != 1 || e % 100 == 11 ? 1 : 0
                }
            }
              , h = {
                chinese: ["fa", "id", "ja", "ko", "lo", "ms", "th", "tr", "zh"],
                german: ["da", "de", "en", "es", "fi", "el", "he", "hu", "it", "nl", "no", "pt", "sv"],
                french: ["fr", "tl", "pt-br"],
                russian: ["hr", "ru"],
                czech: ["cs"],
                polish: ["pl"],
                icelandic: ["is"]
            };
            return t
        }),
        cc._RF.pop()
    }
    , {}]
}, {}, ["LanguageData", "LocalizedLabel", "LocalizedSprite", "SpriteFrameSet", "polyglot.min", "ASCAd", "AdPlugin", "IAd", "BallExtraForce", "ExtraForce", "GameStorage", "GlobalPath", "ImmediateExplosion", "JsonHelper", "ObjectName", "PrefabName", "SelfRotation", "CustomEvent", "EventManager", "EventNames", "EventType", "Four", "GraphicsTool", "Main", "AdManager", "AudioManager", "FileManager", "JointUtil", "JsonGenerator", "LevelTest", "ObjectGenerator", "ResourceManager", "Answer", "Ball", "CirclingMotion", "DelayShoot", "Emitter", "ExplosionVictim", "Fist", "GraphicsCreator", "GroupSetting", "LevelInfo", "Parabola", "TetherBall", "UserData", "WhiteLine", "Rope", "Splash", "Test", "ThreeTest", "FileUtil", "MathTool", "ObjectTool", "BasePopup", "BasePanel", "UIController", "UIPanelEnum", "ActionInstant", "ActionInterval", "SpriteFrameState", "UITranfromUtility", "BallVo", "BalloonVo", "BaseJoint", "BaseVo", "BoardColliderVo", "BoardParent", "BoardVo", "BoomVo", "BottleVo", "BoxVo", "CarVo", "FistVo", "JointVo", "SpringVo", "VOEnum", "Version", "VivoSDK"]);
