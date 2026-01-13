window.__require = (function t(e, o, i) {
  function n(r, s) {
    if (!o[r]) {
      if (!e[r]) {
        var c = r.split('/');
        if (((c = c[c.length - 1]), !e[c])) {
          var l = 'function' == typeof __require && __require;
          if (!s && l) return l(c, !0);
          if (a) return a(c, !0);
          throw new Error("Cannot find module '" + r + "'");
        }
        r = c;
      }
      var p = (o[r] = { exports: {} });
      e[r][0].call(
        p.exports,
        function (t) {
          return n(e[r][1][t] || t);
        },
        p,
        p.exports,
        t,
        e,
        o,
        i,
      );
    }
    return o[r].exports;
  }
  for (
    var a = 'function' == typeof __require && __require, r = 0;
    r < i.length;
    r++
  )
    n(i[r]);
  return n;
})(
  {
    ApiBase: [
      function (t, e, o) {
        'use strict';
        var i, n, a, r, s;
        cc._RF.push(e, '31e7ellL+lOtbYqd1d6InRp', 'ApiBase'),
          (a = t('./EventTypes')),
          (i = t('./App')),
          (n = t('./MathUtil')),
          ((s = function () {
            (this.remote_url = ''),
              (this.host_url = ''),
              (this.openid = 'player1'),
              (this.openCustomerService = function () {});
          }).prototype.login = function () {
            var t;
            (null != (t = i.App.storage.read('loginCode')) && '' != t) ||
              ((t = n.default.randomString(24)),
              i.App.storage.save('loginCode', t)),
              i.App.event.emit(a.default.GET_LOGIN_CODE, { code: t });
          }),
          (s.prototype.getLaunchOptionsSync = function () {
            return { scene: 1089 };
          }),
          (s.prototype.getSystemInfoSync = function () {
            return null;
          }),
          (s.prototype.onShow = function () {}),
          (s.prototype.onHide = function () {}),
          (s.prototype.checkScene = function () {
            return Promise.resolve(!1);
          }),
          (s.prototype.showLoading = function () {}),
          (s.prototype.hideLoading = function () {}),
          (s.prototype.showToast = function () {}),
          (s.prototype.hideToast = function () {}),
          (s.prototype.showModal = function (t) {
            t.success && t.success({ confirm: !0 });
          }),
          (s.prototype.showClubButton = function () {}),
          (s.prototype.hideClubButton = function () {}),
          (s.prototype.destroyClubButton = function () {}),
          (s.prototype.onShareMessageToFriend = function () {}),
          (s.prototype.navigateToMiniProgram = function () {
            return __awaiter(this, void 0, Promise, function () {
              return __generator(this, function () {
                return [2];
              });
            });
          }),
          (s.prototype.triggerGC = function () {}),
          (s.prototype.setEnableDebug = function () {}),
          (s.prototype.createAuthorizeBtn = function () {}),
          (s.prototype.removeAuthBtn = function () {}),
          (s.prototype.setKeepScreenOn = function () {}),
          (s.prototype.requestSubscribeMessage = function () {}),
          (s.prototype.setVibrateSetting = function () {}),
          (s.prototype.vibrateShort = function () {}),
          (s.prototype.vibrateLong = function () {}),
          (s.prototype.getWindowInfo = function () {}),
          (s.prototype.getMenuButtonBoundingClientRect = function () {
            return { center: 70, top: 10 };
          }),
          (s.prototype.postMessage = function () {}),
          (s.prototype.initBanerAd = function () {}),
          (s.prototype.showBanner = function () {}),
          (s.prototype.hideBanner = function () {}),
          (s.prototype.destroyBanner = function () {}),
          (s.prototype.createNativeAd = function () {}),
          (s.prototype.getNativeAdData = function () {
            return null;
          }),
          (s.prototype.reportAdShow = function () {}),
          (s.prototype.reportAdClick = function () {}),
          (s.prototype.initInterstitialAd = function () {}),
          (s.prototype.showInterstitialAd = function () {}),
          (s.prototype.showVideoAd = function () {}),
          (s.prototype.installShortcut = function () {}),
          (s.prototype.loadZip = function () {
            return Promise.resolve();
          }),
          (s.prototype.exitMiniProgram = function () {
            return !1;
          }),
          (s.prototype.setLoadingProgress = function () {}),
          (s.prototype.canPay = function () {
            return !1;
          }),
          (s.prototype.pay = function () {
            return __awaiter(this, void 0, void 0, function () {
              return __generator(this, function () {
                return [2];
              });
            });
          }),
          (s.prototype.canShare = function () {
            return !1;
          }),
          (s.prototype.initShare = function () {}),
          (s.prototype.share = function () {}),
          (s.prototype.shareForReward = function () {
            return __awaiter(this, void 0, Promise, function () {
              return __generator(this, function () {
                return [2, Promise.resolve(!0)];
              });
            });
          }),
          (r = s),
          (o.default = r),
          cc._RF.pop();
      },
      {
        './App': 'App',
        './EventTypes': 'EventTypes',
        './MathUtil': 'MathUtil',
      },
    ],
    AppStart: [
      function (t, e, o) {
        'use strict';
        var i, n, a, r, s, c, l, p, u, d, h, _, f, m, y, g, v, b, w, A;
        cc._RF.push(e, '40c2evW7vdHBaIUTxOyr8e3', 'AppStart'),
          (i = t('./App')),
          (s = t('./UIMgr')),
          t('./GameCtrl'),
          (u = t('./ExptData')),
          (c = t('./GameSetting')),
          (n = t('./LocalData')),
          (h = t('./SkinData')),
          (a = t('./UserData')),
          (f = t('./GameEnums')),
          (m = t('./EventTypes')),
          (_ = t('./NetHelper')),
          (r = t('./UIHelper')),
          (p = t('./EffectMgr')),
          (b = t('./GameMgr')),
          (l = t('./NetMgr')),
          (d = t('./ResUtils')),
          (v = (g = cc._decorator).ccclass),
          g.property,
          (w = cc.Component),
          (A = function () {
            var t;
            return (
              ((t = (null !== w && w.apply(this, arguments)) || this).isReady =
                !1),
              t
            );
          }),
          __extends(A, w),
          (A.prototype.onLoad = function () {
            var t;
            (t = this),
              i.App.init(),
              r.default.initialize(),
              _.default.initialize(),
              l.NetMgr.login(),
              i.App.event.on(
                m.default.LAUNCH_LOAD_COMPLETE,
                function () {
                  return __awaiter(t, void 0, void 0, function () {
                    return __generator(this, function () {
                      return (
                        this.init(), this.initData(), this.gameStart(), [2]
                      );
                    });
                  });
                },
                this,
              ),
              cc.sys.platform == cc.sys.WECHAT_GAME &&
                wx.getSetting({
                  withSubscriptions: !0,
                  success: function (t) {
                    var e, o, i, n;
                    console.log('getSetting', t),
                      console.log(
                        'getSetting',
                        'SYS_MSG_TYPE_INTERACTIVE',
                        null ==
                          (o =
                            null ==
                            (e = null == t ? void 0 : t.subscriptionsSetting)
                              ? void 0
                              : e.itemSettings)
                          ? void 0
                          : o.SYS_MSG_TYPE_INTERACTIVE,
                      ),
                      null ==
                        (null ==
                        (n =
                          null ==
                          (i = null == t ? void 0 : t.subscriptionsSetting)
                            ? void 0
                            : i.itemSettings)
                          ? void 0
                          : n.SYS_MSG_TYPE_WHATS_NEW) && (b.GameMgr.isDy = !0);
                  },
                });
          }),
          (A.prototype.init = function () {
            p.EffectMgr.initLayer(i.App.gui.getLayer(s.LayerEnum.TIPS_LAYER));
          }),
          (A.prototype.initData = function () {
            a.UserData.initData(),
              h.SkinData.initData(),
              u.ExptData.init(),
              i.App.sound.updateSetting(
                1 == n.LocalData.getValue('music'),
                1 == n.LocalData.getValue('sound'),
              ),
              i.App.platform.initShare(
                c.GameSetting.share_info,
                c.GameSetting.share_time,
              ),
              i.App.platform.initInterstitialAd(c.GameSetting.splash_ids[0]);
          }),
          (A.prototype.gameStart = function () {
            return __awaiter(this, void 0, void 0, function () {
              return __generator(this, function (t) {
                switch (t.label) {
                  case 1:
                    return t.sent(), [3, 4];
                  case 2:
                  case 0:
                    return [4, i.App.gui.openUI(r.UIEnum.HomeView)];
                  case 3:
                    t.sent(), (t.label = 4);
                  case 4:
                    return (
                      i.App.sound.playMusic(
                        d.ResUtils.Audios.bgm,
                        f.BundleType.Game,
                      ),
                      i.App.event.emit(m.default.FIRST_VIEW_SHOW),
                      (this.isReady = !0),
                      [2]
                    );
                }
              });
            });
          }),
          (A.prototype.update = function (t) {
            this.isReady && (b.GameMgr.onUpdate(t), n.LocalData.onUpdate(t));
          }),
          (y = __decorate([v], A)),
          (o.default = y),
          cc._RF.pop();
      },
      {
        './App': 'App',
        './EffectMgr': 'EffectMgr',
        './EventTypes': 'EventTypes',
        './ExptData': 'ExptData',
        './GameCtrl': 'GameCtrl',
        './GameEnums': 'GameEnums',
        './GameMgr': 'GameMgr',
        './GameSetting': 'GameSetting',
        './LocalData': 'LocalData',
        './NetHelper': 'NetHelper',
        './NetMgr': 'NetMgr',
        './ResUtils': 'ResUtils',
        './SkinData': 'SkinData',
        './UIHelper': 'UIHelper',
        './UIMgr': 'UIMgr',
        './UserData': 'UserData',
      },
    ],
    App: [
      function (t, e, o) {
        'use strict';
        var i, n, a, r, s, c, l, p;
        cc._RF.push(e, 'adb73+O1IZJPqR+cNoTGYxD', 'App'),
          (o.App = void 0),
          (i = t('./EventMgr')),
          (s = t('./ResMgr')),
          (l = t('./SoundMgr')),
          (r = t('./StorageMgr')),
          (n = t('./UIMgr')),
          (c = t('./HttpNet')),
          (a = t('./PlatformMgr')),
          ((p = o.App || (o.App = {})).event = null),
          (p.sound = null),
          (p.storage = null),
          (p.gui = null),
          (p.res = null),
          (p.http = null),
          (p.platform = null),
          (p.track = null),
          (p.init = function () {
            var t;
            (p.event = new i.EventMgr()),
              (p.sound = new l.SoundMgr()),
              (p.storage = new r.StorageMgr()),
              (p.gui = new n.UIMgr()),
              (p.res = new s.ResMgr()),
              (p.http = new c.HttpNet()),
              (t = new a.PlatformMgr()),
              (p.platform = t.api),
              (p.track = t.track);
          }),
          cc._RF.pop();
      },
      {
        './EventMgr': 'EventMgr',
        './HttpNet': 'HttpNet',
        './PlatformMgr': 'PlatformMgr',
        './ResMgr': 'ResMgr',
        './SoundMgr': 'SoundMgr',
        './StorageMgr': 'StorageMgr',
        './UIMgr': 'UIMgr',
      },
    ],
    ArrayUtil: [
      function (t, e, o) {
        'use strict';
        var i, n, a;
        cc._RF.push(e, 'c7281semIxJjYS6X9E928qh', 'ArrayUtil'),
          (i = t('./MathUtil')),
          ((a = function () {}).shuffle = function (t) {
            if (null != t && 0 != t.length)
              for (var e = t.length, o = 0; o < e; o++) {
                var n, a;
                (a = i.default.randomRangeInt(0, e)),
                  (n = t[o]),
                  (t[o] = t[a]),
                  (t[a] = n);
              }
            return t;
          }),
          (a.clone = function (t, e) {
            return t
              ? (e ? (e.length = 0) : (e = []),
                t.forEach(function (t) {
                  e.push(t);
                }),
                e)
              : [];
          }),
          (a.deepCopy = function (t) {
            var e;
            return (e = JSON.stringify(t)), JSON.parse(e);
          }),
          (a.no_repeatArray = function (t) {
            for (var e = [], o = 0; o < t.length; o++)
              -1 === e.indexOf(t[o]) && e.push(t[o]);
            return e;
          }),
          (a.splice = function (t, e) {
            var o;
            -1 != (o = t.indexOf(e)) && t.splice(o, 1);
          }),
          (n = a),
          (o.default = n),
          cc._RF.pop();
      },
      { './MathUtil': 'MathUtil' },
    ],
    AssetMgr: [
      function (t, e, o) {
        'use strict';
        var i, n, a, r;
        cc._RF.push(e, 'fcd62d/g/hNDYtNsWyTSHJB', 'AssetMgr'),
          (o.AssetMgr = o.IDHelper = void 0),
          ((a = function () {}).getID = function () {
            return ++this._id;
          }),
          (a._id = 0),
          (i = a),
          (o.IDHelper = i),
          ((r = function () {
            (this.assetMap = new Map()),
              (this.remoteMap = new Map()),
              (this.idleMap = new Map());
          }).prototype.getAsset = function (t) {
            var e;
            return (
              (e = this),
              new Promise(function (o, i) {
                return __awaiter(e, void 0, void 0, function () {
                  var e, n, a, r, s, c, l, p;
                  return (
                    (e = this),
                    __generator(this, function (u) {
                      switch (u.label) {
                        case 0:
                          return (
                            (r = t.url),
                            (a = t.type),
                            (s = t.bundle),
                            (l = void 0 === s ? 'resources' : s),
                            (p = this._getAsset(r, a, l))
                              ? (this.activeAsset(p.asset.assetID),
                                o(p.asset),
                                [2])
                              : 'resources' == l
                                ? [3, 2]
                                : [4, this.getBundle(l)]
                          );
                        case 1:
                          return (c = u.sent()), [3, 3];
                        case 2:
                          (c = cc.resources), (u.label = 3);
                        case 3:
                          return (
                            (n = c)
                              ? n.load(r, a, function (t, n) {
                                  t
                                    ? (cc.error(
                                        '\u83b7\u53d6\u8d44\u6e90\u5931\u8d25\uff1a' +
                                          r +
                                          ' bundle:' +
                                          l,
                                      ),
                                      i())
                                    : (e.saveAsset(r, a, n, l), o(n));
                                })
                              : i(),
                            [2]
                          );
                      }
                    })
                  );
                });
              })
            );
          }),
          (r.prototype.getRemote = function (t, e) {
            return __awaiter(this, void 0, Promise, function () {
              var o;
              return (
                (o = this),
                __generator(this, function () {
                  return [
                    2,
                    new Promise(function (n) {
                      var a, r;
                      (r = o.findRemoteRes(t))
                        ? n(r.asset)
                        : ((a = function (e, a) {
                            a
                              ? ((a.assetID = i.getID()),
                                o.remoteMap.set(a.assetID, {
                                  url: t,
                                  bundle: 'remote',
                                  asset: a,
                                }),
                                n(a))
                              : console.log(
                                  '[ \u8fdc\u7a0b\u52a0\u8f7d\u5931\u8d25 ] >',
                                  t,
                                );
                          }),
                          e
                            ? cc.assetManager.loadRemote(t, e, a)
                            : cc.assetManager.loadRemote(t, a));
                    }),
                  ];
                })
              );
            });
          }),
          (r.prototype.findRemoteRes = function (t) {
            for (
              var e = null, o = 0, i = Array.from(this.remoteMap.values());
              o < i.length;
              o++
            ) {
              var n;
              if ((n = i[o]).url == t) {
                e = n;
                break;
              }
            }
            return e;
          }),
          (r.prototype._getAsset = function (t, e, o) {
            void 0 === o && (o = 'resources');
            for (
              var i = null, n = 0, a = Array.from(this.assetMap.values());
              n < a.length;
              n++
            ) {
              var r;
              if ((r = a[n]).url == t && r.type == e && r.bundle == o) {
                i = r;
                break;
              }
            }
            return i;
          }),
          (r.prototype.releaseAsset = function (t) {
            var e;
            (e = this.assetMap.get(t)) &&
              (this.assetMap.delete(t), e.asset.decRef(), (e.asset = null)),
              (e = this.remoteMap.get(t)) &&
                (this.remoteMap.delete(t), e.asset.decRef(), (e.asset = null));
          }),
          (r.prototype.idleAsset = function (t) {
            t && this.idleMap.set(t, Date.now());
          }),
          (r.prototype.destroyAsset = function (t, e) {
            var o, i;
            (i = this),
              (o = []),
              this.idleMap.forEach(function (e, i) {
                Date.now() - e > t && o.push(i);
              }),
              e(o),
              o.forEach(function (t) {
                i.idleMap.delete(t), i.releaseAsset(t);
              });
          }),
          (r.prototype.getBundle = function (t) {
            return new Promise(function (e, o) {
              var i;
              (i = cc.assetManager.getBundle(t))
                ? e(i)
                : cc.assetManager.loadBundle(t, function (t, i) {
                    t
                      ? (cc.error(
                          '\u52a0\u8f7dbundle:' + i + '\u5931\u8d25' + t,
                        ),
                        o())
                      : e(i);
                  });
            });
          }),
          (r.prototype.saveAsset = function (t, e, o, n) {
            var a;
            t &&
              o &&
              null == this._getAsset(t, e, n) &&
              ((a = i.getID()),
              (o.assetID = a),
              this.assetMap.set(a, { url: t, type: e, bundle: n, asset: o }),
              this.activeAsset(a));
          }),
          (r.prototype.activeAsset = function (t) {
            this.idleMap.delete(t);
          }),
          (n = r),
          (o.AssetMgr = new n()),
          cc._RF.pop();
      },
      {},
    ],
    AvatarAssembler: [
      function (t, e, o) {
        'use strict';
        var i, n, a, r, s, c;
        cc._RF.push(e, '45279iUvaxDYLwEzo4OPRTm', 'AvatarAssembler'),
          (i = t('./GTAutoFitSpriteAssembler2D')),
          (a = cc.gfx),
          (n = new a.VertexFormat([
            { name: a.ATTR_POSITION, type: a.ATTR_TYPE_FLOAT32, num: 2 },
            { name: a.ATTR_UV0, type: a.ATTR_TYPE_FLOAT32, num: 2 },
            { name: 'a_p', type: a.ATTR_TYPE_FLOAT32, num: 2 },
            { name: 'a_q', type: a.ATTR_TYPE_FLOAT32, num: 2 },
          ])),
          (s = i.default),
          (c = function () {
            var t;
            return (
              ((t =
                (null !== s && s.apply(this, arguments)) ||
                this).floatsPerVert = 8),
              t
            );
          }),
          __extends(c, s),
          (c.prototype.initData = function () {
            var t;
            (t = this._renderData).createFlexData(
              0,
              this.verticesCount,
              this.indicesCount,
              this.getVfmt(),
            );
            for (
              var e = t.iDatas[0], o = e.length / 6, i = 0, n = 0;
              i < o;
              i++
            ) {
              var a;
              (a = 4 * i),
                (e[n++] = a),
                (e[n++] = 1 + a),
                (e[n++] = 2 + a),
                (e[n++] = 1 + a),
                (e[n++] = 3 + a),
                (e[n++] = 2 + a);
            }
          }),
          (c.prototype.getVfmt = function () {
            return n;
          }),
          (c.prototype.getBuffer = function () {
            return cc.renderer._handle.getBuffer('mesh', this.getVfmt());
          }),
          (c.prototype.updateColor = function () {}),
          (c.prototype.updateUVs = function (t) {
            var e, o, i, n, a, r;
            s.prototype.updateUVs.call(this, t),
              (e = this._uv),
              (a = t._spriteFrame.isRotated()),
              (r = e[0]),
              (i = e[2]),
              (n = e[1]),
              (o = e[5]),
              a && ((r = e[1]), (i = e[3]), (n = e[0]), (o = e[4]));
            for (
              var c = 1 / (i - r),
                l = -r * c,
                p = 1 / (n - o),
                u = -o * p,
                d = this.uvOffset,
                h = this.floatsPerVert,
                _ = this._renderData.vDatas[0],
                f = 0;
              f < 4;
              f++
            ) {
              var m;
              (m = h * f + d),
                a
                  ? ((_[m + 2] = p),
                    (_[m + 3] = c),
                    (_[m + 4] = u),
                    (_[m + 5] = l))
                  : ((_[m + 2] = c),
                    (_[m + 3] = p),
                    (_[m + 4] = l),
                    (_[m + 5] = u));
            }
          }),
          (r = c),
          (o.default = r),
          cc._RF.pop();
      },
      { './GTAutoFitSpriteAssembler2D': 'GTAutoFitSpriteAssembler2D' },
    ],
    AvatarSprite: [
      function (t, e, o) {
        'use strict';
        var i, n, a, r, s, c;
        cc._RF.push(e, 'b1649Wc9Q1OSLLcuayZnPTw', 'AvatarSprite'),
          (i = t('./AvatarAssembler')),
          (n = (r = cc._decorator).ccclass),
          r.property,
          (s = cc.Sprite),
          (c = function () {
            return (null !== s && s.apply(this, arguments)) || this;
          }),
          __extends(c, s),
          (c.prototype._resetAssembler = function () {
            this.setVertsDirty(),
              (this._assembler = new i.default()).init(this);
          }),
          (a = __decorate([n], c)),
          (o.default = a),
          cc._RF.pop();
      },
      { './AvatarAssembler': 'AvatarAssembler' },
    ],
    BasePanel: [
      function (t, e, o) {
        'use strict';
        var i, n, a, r, s, c, l;
        cc._RF.push(e, 'b3a4drYQOhL+J19r9nfjubZ', 'BasePanel'),
          (s = t('./App')),
          (a = t('./BaseUI')),
          (n = (r = cc._decorator).ccclass),
          r.property,
          (c = a.default),
          (l = function () {
            var t;
            return (
              ((t = (null !== c && c.apply(this, arguments)) || this).isInit =
                !1),
              (t._viewData = null),
              t
            );
          }),
          __extends(l, c),
          (l.prototype.initUI = function () {}),
          (l.prototype.onOpen = function (t) {
            this._viewData = t;
          }),
          (l.prototype.onClose = function () {
            this.clear();
          }),
          (l.prototype.playIn = function () {
            return this.initEvent(), Promise.resolve();
          }),
          (l.prototype.playOut = function () {}),
          (l.prototype.initEvent = function () {}),
          (l.prototype.clear = function () {
            c.prototype.clear.call(this), s.App.event.targetOff(this);
          }),
          (l.prototype.seekChild = function (t, e) {
            if (t) {
              if (t.name === e) return t;
              for (var o = t.children, i = 0; i < o.length; ++i) {
                var n;
                if ((n = this.seekChild(o[i], e))) return n;
              }
            }
          }),
          (l.prototype.delay = function (t) {
            var e;
            return (
              (e = this),
              new Promise(function (o) {
                e.scheduleOnce(function () {
                  o();
                }, t);
              })
            );
          }),
          (i = __decorate([n], l)),
          (o.default = i),
          cc._RF.pop();
      },
      { './App': 'App', './BaseUI': 'BaseUI' },
    ],
    BaseUI: [
      function (t, e, o) {
        'use strict';
        var i, n, a, r, s, c;
        cc._RF.push(e, '41053zFlN1IfoOspG/g+Cvs', 'BaseUI'),
          (i = t('./App')),
          (r = (n = cc._decorator).ccclass),
          n.property,
          (s = cc.Component),
          (c = function () {
            var t;
            return (
              ((t =
                (null !== s && s.apply(this, arguments)) || this)._touchList =
                {}),
              (t._grayList = {}),
              t
            );
          }),
          __extends(c, s),
          (c.prototype.setGray = function (t, e) {
            var o, i, n, a, r, s;
            (s = this),
              (i = cc.Material.getBuiltinMaterial(
                e
                  ? cc.Material.BUILTIN_NAME.GRAY_SPRITE
                  : cc.Material.BUILTIN_NAME.SPRITE,
              )),
              t instanceof cc.Node &&
                ((o = t.uuid),
                (this._grayList[o] = { button: t, isGray: e }),
                (r = t.getComponent(cc.Button)) && (r.interactable = !e),
                (n = t.getComponent(cc.Sprite)) && n.setMaterial(0, i),
                (a = t.getComponent(cc.Label)) && a.setMaterial(0, i),
                t.children.forEach(function (t) {
                  s.setGray(t, e);
                }));
          }),
          (c.prototype.on = function (t, e, o, n) {
            var a, r, s, c, l, p, u, d, h;
            (u = this),
              t && e
                ? ((l = (r = n || {}).sound),
                  (d =
                    void 0 === l
                      ? { path: 'audios/btn_click', bundle: 'game' }
                      : l),
                  (h = void 0 === (p = r.scale) ? 1.1 : p),
                  (c = t.uuid),
                  this._touchList[c]
                    ? console.warn('\u91cd\u590d\u8bbe\u7f6e--\x3e', c, t.name)
                    : ((a = t.getComponent(cc.Button)) ||
                        1 == h ||
                        (((a = t.addComponent(cc.Button)).transition =
                          cc.Button.Transition.SCALE),
                        (a.zoomScale = h),
                        (a.enableAutoGrayEffect = !0)),
                      this._grayList[c] &&
                        this.setGray(t, this._grayList[c].isGray),
                      (s = function (t) {
                        (u._grayList[c] && u._grayList[c].isGray) ||
                          (t.type == cc.Node.EventType.TOUCH_END &&
                            (d &&
                              '' != d.path &&
                              i.App.sound.playEffect(d.path, d.bundle),
                            e.call(o || u, t),
                            i.App.event.emit('CLICK_END')));
                      }),
                      t.on(cc.Node.EventType.TOUCH_END, s),
                      (this._touchList[c] = { button: t, handler: s })))
                : cc.error(
                    t ? 'handler\u4e3a\u7a7a--\x3e' : 'button\u4e3a\u7a7a',
                  );
          }),
          (c.prototype.off = function (t) {
            var e, o;
            t
              ? (this.setGray(t, !1),
                (e = t.uuid),
                this._touchList[e] &&
                  ((o = this._touchList[e].handler),
                  t.off(cc.Node.EventType.TOUCH_END, o),
                  delete this._touchList[e]))
              : cc.error('target \u4e3a\u7a7a');
          }),
          (c.prototype.clear = function () {
            for (var t in this._touchList) this.off(this._touchList[t].button);
          }),
          (c.prototype.eventOn = function (t, e, o) {
            i.App.event.on(t, e, o);
          }),
          (c.prototype.eventOff = function (t, e, o) {
            i.App.event.off(t, e, o);
          }),
          (c.prototype.onDestroy = function () {
            this.clear();
          }),
          (a = __decorate([r], c)),
          (o.default = a),
          cc._RF.pop();
      },
      { './App': 'App' },
    ],
    BlockItem: [
      function (t, e, o) {
        'use strict';
        var i, n, a, r, s, c, l;
        cc._RF.push(e, '8cba47rustFb5Pob5bZZSXy', 'BlockItem'),
          (s = t('./BaseUI')),
          (i = (a = cc._decorator).ccclass),
          (r = a.property),
          (c = s.default),
          (l = function () {
            var t;
            return (
              ((t = (null !== c && c.apply(this, arguments)) || this).nameBg1 =
                null),
              (t.nameBg2 = null),
              (t.nameLab = null),
              (t.nameLabOut = null),
              (t.numLab = null),
              (t.itemPre = null),
              (t.itemLayout = null),
              (t.btnCollect = null),
              (t.gou = null),
              t
            );
          }),
          __extends(l, c),
          __decorate([r(cc.Node)], l.prototype, 'nameBg1', void 0),
          __decorate([r(cc.Node)], l.prototype, 'nameBg2', void 0),
          __decorate([r(cc.Label)], l.prototype, 'nameLab', void 0),
          __decorate([r(cc.LabelOutline)], l.prototype, 'nameLabOut', void 0),
          __decorate([r(cc.Label)], l.prototype, 'numLab', void 0),
          __decorate([r(cc.Node)], l.prototype, 'itemPre', void 0),
          __decorate([r(cc.Layout)], l.prototype, 'itemLayout', void 0),
          __decorate([r(cc.Node)], l.prototype, 'btnCollect', void 0),
          __decorate([r(cc.Node)], l.prototype, 'gou', void 0),
          (n = __decorate([i], l)),
          (o.default = n),
          cc._RF.pop();
      },
      { './BaseUI': 'BaseUI' },
    ],
    BottleItem2: [
      function (t, e, o) {
        'use strict';
        var i, n, a, r, s, c, l, p, u, d;
        cc._RF.push(e, '8ef3fQ+jTFCdKIPz8aSgDhM', 'BottleItem2'),
          (r = t('./ArrayUtil')),
          (l = t('./BaseUI')),
          (a = t('./GameCtrl')),
          (i = t('./GameEnums')),
          (c = (s = cc._decorator).ccclass),
          (p = s.property),
          (u = l.default),
          (d = function () {
            var t;
            return (
              ((t = (null !== u && u.apply(this, arguments)) || this).waters =
                []),
              (t.colorList = []),
              (t.gai = null),
              (t.isReady = !1),
              t
            );
          }),
          __extends(d, u),
          (d.prototype.getColors = function () {
            return this.colorList;
          }),
          (d.prototype.onEnable = function () {
            this.gai && (this.gai.active = a.GameCtrl.mode == i.GameMode.Level);
          }),
          (d.prototype.clear = function () {
            u.prototype.clear.call(this),
              (this.colorList.length = 0),
              this.showWaterItems();
          }),
          (d.prototype.setData = function (t) {
            r.default.clone(t, this.colorList),
              this.initWaterColor(),
              (this.isReady = !0);
          }),
          (d.prototype.initWaterColor = function () {
            for (var t = this, e = 0; e < this.colorList.length; e++)
              !(function (e) {
                var o;
                (o = a.GameCtrl.getColor(t.colorList[e])),
                  t.waters[e].children.forEach(function (t) {
                    'top' != t.name ? (t.color = o[0]) : (t.color = o[1]);
                  });
              })(e);
            this.showWaterItems();
          }),
          (d.prototype.moveTo = function (t, e) {
            var o;
            return (
              (o = this),
              new Promise(function (i) {
                var n;
                (o.isReady = !1),
                  e || ((n = t.sub(o.node.position).mag()), (e = n / 1500)),
                  cc
                    .tween(o.node)
                    .to(e, { position: t })
                    .call(function () {
                      i(), (o.isReady = !0);
                    })
                    .start();
              })
            );
          }),
          (d.prototype.showWaterItems = function () {
            for (var t = 0; t < 4; t++)
              this.waters[t].active = t < this.colorList.length;
          }),
          __decorate([p([cc.Node])], d.prototype, 'waters', void 0),
          __decorate([p(cc.Node)], d.prototype, 'gai', void 0),
          (n = __decorate([c], d)),
          (o.default = n),
          cc._RF.pop();
      },
      {
        './ArrayUtil': 'ArrayUtil',
        './BaseUI': 'BaseUI',
        './GameCtrl': 'GameCtrl',
        './GameEnums': 'GameEnums',
      },
    ],
    BottleItem: [
      function (t, e, o) {
        'use strict';
        cc._RF.push(e, 'cc1b7ONGkpLYb/QSet3oVvm', 'BottleItem');
        var i = t('./SpineEffect'),
          n = t('./App'),
          a = t('./ArrayUtil'),
          r = t('./MathUtil'),
          s = t('./BaseUI'),
          c = t('./GameCtrl'),
          l = t('./UserData'),
          p = t('./GameConst'),
          u = t('./GameEnums'),
          d = t('./EventTypes'),
          h = t('./GameMgr'),
          _ = t('./ResUtils'),
          f = t('./Cover'),
          m = cc._decorator,
          y = m.ccclass,
          g = m.property,
          v = (function (t) {
            function e() {
              var e = (null !== t && t.apply(this, arguments)) || this;
              return (
                (e.content = null),
                (e.shuizhu = null),
                (e.shuizhuBody = null),
                (e.mask = null),
                (e.video = null),
                (e.waters = []),
                (e.whs = []),
                (e.bottle0 = null),
                (e.bottle1 = null),
                (e.heightLight = null),
                (e.steel = null),
                (e.full = null),
                (e.shadown = null),
                (e.finish = null),
                (e.finishEff = null),
                (e.layout = null),
                (e.gou = null),
                (e.steelBiao = null),
                (e.steelNumLab = null),
                (e.shadownSp = null),
                (e.shadownList = []),
                (e.cover = null),
                (e.effect = null),
                (e.zdEff = null),
                (e.sdEff = null),
                (e.itemPos = []),
                (e.colorList = []),
                (e.basePos = cc.v3()),
                (e.steelPos = cc.v3()),
                (e._canClick = !0),
                (e.tempPoints = []),
                (e._status = 0),
                (e.darkNum = 0),
                (e.isRefresh = !1),
                (e._isFinshed = !1),
                (e.timeMap = new Map()),
                (e.bot_pos0 = null),
                (e.bot_pos1 = null),
                (e.floatTw = null),
                (e.layer0 = null),
                (e.layer1 = null),
                (e.gouTw = null),
                (e.scale = 1),
                (e.steelColor = 0),
                (e.steelNum = 0),
                (e.shakeTw = null),
                e
              );
            }
            return (
              __extends(e, t),
              Object.defineProperty(e.prototype, 'canClick', {
                set: function (t) {
                  this._canClick = t;
                },
                enumerable: !1,
                configurable: !0,
              }),
              Object.defineProperty(e.prototype, 'status', {
                get: function () {
                  return this._status;
                },
                enumerable: !1,
                configurable: !0,
              }),
              Object.defineProperty(e.prototype, 'isLock', {
                get: function () {
                  return 2 == this._status;
                },
                enumerable: !1,
                configurable: !0,
              }),
              Object.defineProperty(e.prototype, 'isFinshed', {
                get: function () {
                  return this._isFinshed;
                },
                enumerable: !1,
                configurable: !0,
              }),
              (e.prototype.onLoad = function () {
                var t = this;
                (this.layer0 = this.content.getChildByName('layer0')),
                  (this.layer1 = this.content.getChildByName('layer1')),
                  (this.heightLight.active = !1),
                  (this.steel.active = !1),
                  (this.bot_pos0 = r.default.v3Copy(this.bottle0.position)),
                  (this.bot_pos1 = r.default.v3Copy(this.bottle1.position)),
                  (this.steelPos = r.default.v3Copy(this.steel.position)),
                  this.timeMap.set(1, 0.3),
                  this.timeMap.set(2, 0.5),
                  this.timeMap.set(3, 0.65),
                  this.timeMap.set(4, 0.8);
                for (var e = 0; e < this.waters.length; e++)
                  this.itemPos[e] = r.default.v3Copy(this.waters[e].position);
                (this.floatTw = cc
                  .tween(this.content)
                  .sequence(
                    cc
                      .tween(this.content)
                      .to(0.5, { position: cc.v3(0, 4), angle: -3 }),
                    cc
                      .tween(this.content)
                      .to(0.5, { position: cc.v3(0, 8), angle: 0 }),
                    cc
                      .tween(this.content)
                      .to(0.5, { position: cc.v3(0, 4), angle: 3 }),
                    cc
                      .tween(this.content)
                      .to(0.5, { position: cc.v3(0, 0), angle: 0 }),
                  )
                  .repeatForever()),
                  (this.gouTw = cc
                    .tween(this.gou)
                    .call(function () {
                      t.gou.scale = 1;
                    })
                    .sequence(
                      cc.tween(this.gou).to(0.7, { scale: 1.5 }),
                      cc.tween(this.gou).to(0.3, { scale: 1 }),
                    ));
              }),
              (e.prototype.setSelected = function (t) {
                return __awaiter(this, void 0, void 0, function () {
                  var e,
                    o = this;
                  return __generator(this, function (i) {
                    switch (i.label) {
                      case 0:
                        return t
                          ? (n.App.sound.playEffect(
                              _.ResUtils.Audios.pickUp,
                              u.BundleType.Game,
                            ),
                            (this.heightLight.active = !0),
                            this.stopShake(),
                            c.GameCtrl.mode == u.GameMode.Level &&
                              ((e = c.GameCtrl.getColor(
                                this.colorList[this.colorList.length - 1],
                              )),
                              (this.zdEff.color = e[1]),
                              (this.shakeTw = cc
                                .tween(this.node)
                                .delay(0.7)
                                .call(function () {
                                  o.zdEff.active = !1;
                                })),
                              t) &&
                              cc
                                .tween(this.content)
                                .to(0.06, {
                                  scale: 1.06,
                                  position: cc.v3(0, 15),
                                })
                                .to(0.03, { scale: 1, position: cc.v3(0, 0) })
                                .start(),
                            (this.shadownSp.spriteFrame = this.shadownList[2]),
                            cc
                              .tween(this.shadown)
                              .to(0.08, {
                                position: cc.v3(
                                  this.basePos.x + 30 + 25,
                                  this.basePos.y - 190 + 30,
                                ),
                              })
                              .start(),
                            [
                              4,
                              this.moveTo(
                                cc.v3(this.basePos.x, this.basePos.y + 40),
                                0.06,
                                0,
                                !1,
                                function () {
                                  var t, e;
                                  c.GameCtrl.mode == u.GameMode.Level
                                    ? ((o.zdEff.active = !0),
                                      null != (t = o.shakeTw) && t.start())
                                    : null != (e = o.floatTw) && e.start();
                                },
                              ),
                            ])
                          : [3, 2];
                      case 1:
                        return i.sent(), [3, 4];
                      case 2:
                        return (
                          this.stopFloat(),
                          cc
                            .tween(this.shadown)
                            .to(0.08, {
                              position: cc.v3(
                                this.basePos.x + 30,
                                this.basePos.y - 190,
                              ),
                            })
                            .call(function () {
                              o.shadownSp.spriteFrame = o.shadownList[0];
                            })
                            .start(),
                          (this.heightLight.active = !1),
                          [
                            4,
                            this.moveTo(
                              cc.v3(this.basePos.x, this.basePos.y),
                              0.06,
                              0,
                              !1,
                              function () {
                                var t;
                                c.GameCtrl.mode == u.GameMode.Level &&
                                  ((o.zdEff.active = !0),
                                  null != (t = o.shakeTw)) &&
                                  t.start();
                              },
                            ),
                          ]
                        );
                      case 3:
                        i.sent(), (i.label = 4);
                      case 4:
                        return [2];
                    }
                  });
                });
              }),
              (e.prototype.stopFloat = function () {
                var t;
                null != (t = this.floatTw) && t.stop(),
                  cc.Tween.stopAllByTarget(this.content),
                  (this.content.position = cc.v3(0, 0)),
                  (this.content.angle = 0);
              }),
              (e.prototype.onEnable = function () {
                var t = this;
                (this.zdEff.active = !1),
                  (this.sdEff.active = !1),
                  (this.heightLight.active = !1),
                  this.unscheduleAllCallbacks(),
                  (this.content.angle = 0),
                  this.scheduleOnce(function () {
                    (t.basePos.x = t.node.position.x),
                      (t.basePos.y = t.node.position.y),
                      t.on(t.content, t.onNodeClick, t, { sound: {} }),
                      (t.isMask = !1);
                  }),
                  n.App.event.on(
                    d.default.On_Bottle_Collect_End,
                    this.onBottleCollectEnd,
                    this,
                  );
              }),
              (e.prototype.onBottleCollectEnd = function (t) {
                0 < this.steelNum &&
                  (0 === this.steelColor || this.steelColor == t.color) &&
                  (--this.steelNum,
                  (this.steelNumLab.string = this.steelNum.toString()),
                  0 == this.steelNum) &&
                  ((this.steelNumLab.string = ''),
                  (this.shadown.opacity = 255),
                  this.steelFlyout());
              }),
              Object.defineProperty(e.prototype, 'isMask', {
                set: function () {},
                enumerable: !1,
                configurable: !0,
              }),
              (e.prototype.getWaterNum = function () {
                return this.colorList.length;
              }),
              (e.prototype.setSteel = function (t, e) {
                (this.steelColor = t),
                  (this.steelNum = e),
                  (this.steel.active = 0 < e),
                  (this.steelNumLab.string = e.toString()),
                  (this.steelBiao.color =
                    0 != t ? c.GameCtrl.getColor(t)[0] : cc.Color.WHITE);
              }),
              (e.prototype.getColors = function () {
                return this.colorList;
              }),
              (e.prototype.calcPoints = function () {
                for (var t = 0; t < p.GameConst.b1_points.length; t++) {
                  this.tempPoints[t] || (this.tempPoints[t] = cc.v3());
                  var e = p.GameConst.b1_points[t],
                    o = this.mask.node.convertToWorldSpaceAR(e);
                  (this.tempPoints[t].x = o.x), (this.tempPoints[t].y = o.y);
                }
                return this.tempPoints;
              }),
              (e.prototype.onDisable = function () {
                this.off(this.content),
                  this.clear(),
                  n.App.event.targetOff(this);
              }),
              (e.prototype.clear = function () {
                (this.colorList.length = 0), this.showWaterItems();
              }),
              (e.prototype.onNodeClick = function () {
                var t, e, o, i;
                return __awaiter(this, void 0, void 0, function () {
                  return __generator(this, function (a) {
                    switch (a.label) {
                      case 0:
                        return 2 != this._status
                          ? [3, 2]
                          : [4, h.GameMgr.showVideoAd()];
                      case 1:
                        return (
                          1 == a.sent() &&
                            (c.GameCtrl.mode == u.GameMode.Normal
                              ? null != (t = n.App.track) &&
                                t.trackEvent('tz_vd_' + l.UserData.ptLv)
                              : c.GameCtrl.mode == u.GameMode.Endless
                                ? null != (e = n.App.track) &&
                                  e.trackEvent('wj_vd')
                                : c.GameCtrl.mode == u.GameMode.Level &&
                                  (null != (o = n.App.track) &&
                                    o.trackEvent('cg_vd_' + l.UserData.cgLv),
                                  null != (i = n.App.track) &&
                                    i.trackEvent(
                                      'cg_kongping_' + l.UserData.cgLv,
                                    )),
                            this.unlock()),
                          [2]
                        );
                      case 2:
                        return (
                          !this._canClick ||
                            this.isFull() ||
                            0 < this.steelNum ||
                            this.isRefresh ||
                            n.App.event.emit(
                              d.default.On_Bottle_Item_Click,
                              this,
                            ),
                          [2]
                        );
                    }
                  });
                });
              }),
              (e.prototype.unlock = function () {
                2 == this._status &&
                  ((this._status = 0), (this.video.active = !1));
              }),
              (e.prototype.setScale = function (t) {
                this.scale = t;
              }),
              (e.prototype.setData = function (t, e, o, i) {
                void 0 === o && (o = 0),
                  (this.finish.active = !1),
                  (this.finish.parent = this.content),
                  (this.finish.position = cc.v3()),
                  (this.steel.active = !1),
                  (this._isFinshed = !1),
                  (this.heightLight.active = !1),
                  (this.darkNum = o),
                  (this._status = e),
                  (this.video.active = 2 == this._status),
                  (this.shuizhu.active = !1),
                  (this.full.active = !1),
                  (this._canClick = !0),
                  (this.isRefresh = !1),
                  this.stopFloat(),
                  this.appear(),
                  (this.steelNum = 0),
                  (this.steelColor = 0),
                  (this.layout.node.active = !0),
                  cc.Tween.stopAllByTarget(this.node),
                  a.default.clone(t, this.colorList),
                  this.initWaterColor(),
                  this.updateWaterHeight(p.GameConst.WaterMaxY[t.length]),
                  this.showWaterItems(),
                  i
                    ? (this.setSteel(i.color, i.num),
                      (this.shadownSp.spriteFrame = this.shadownList[1]))
                    : (this.shadownSp.spriteFrame = this.shadownList[0]);
              }),
              (e.prototype.initWaterColor = function () {
                var t = this;
                this.whs.forEach(function (t) {
                  t.active = !1;
                });
                var e = !1,
                  o = this.darkNum;
                this.darkNum = Math.min(
                  this.darkNum,
                  this.colorList.length - 1,
                );
                var i = -1;
                0 < o &&
                  this.darkNum < o &&
                  ((i = this.darkNum),
                  n.App.event.emit(d.default.On_Wh_Effect, this.node.position));
                for (var a = this, r = this.colorList.length - 1; 0 <= r; r--)
                  !(function (o) {
                    var n = a.colorList[o],
                      r = -1;
                    0 < o && (r = a.colorList[o - 1]),
                      !e && o < a.darkNum && (e = !0);
                    var s = c.GameCtrl.getColor(n);
                    a.waters[o] || console.log('[BottleItem]--\x3e[line:314]:'),
                      a.waters[o] &&
                        a.waters[o].children.forEach(function (a) {
                          e
                            ? ((a.color = cc.Color.BLACK.fromHEX('#3E3E3E')),
                              (t.whs[o].active = !0),
                              'bot' == a.name && (a.opacity = 255))
                            : ('top' != a.name
                                ? ((a.color = s[0]),
                                  'bot' == a.name &&
                                    (!(0 < t.darkNum) || o > t.darkNum
                                      ? (a.opacity = r == n ? 255 : 0)
                                      : (a.opacity = 0)))
                                : (a.color = s[1]),
                              o == i &&
                                ((a.color = cc.Color.BLACK.fromHEX('#3E3E3E')),
                                ('top' != a.name
                                  ? cc
                                      .tween(a)
                                      .to(0.2, { color: s[0] })
                                      .call(function () {
                                        a.color = s[0];
                                      })
                                  : cc
                                      .tween(a)
                                      .to(0.2, { color: s[1] })
                                      .call(function () {
                                        a.color = s[1];
                                      })
                                ).start()));
                        });
                  })(r);
              }),
              (e.prototype.rotateTo = function (t) {
                this.content.angle = t;
                var e = 0,
                  o = 4 * p.GameConst.GridHeight + 20,
                  i = o / 4 - 3,
                  n = o / 3 - 6,
                  a = o / 2 - 9,
                  r = o / 2 + 60;
                t >= p.GameConst.BottleAngles[3] &&
                  (this.waters[3].active = !1),
                  t >= p.GameConst.BottleAngles[2] &&
                    (this.waters[2].active = !1),
                  t >= p.GameConst.BottleAngles[1] &&
                    (this.waters[1].active = !1),
                  t <= 30 &&
                    (e = p.GameConst.GridHeight + 4 * cc.misc.clamp01(t / 15));
                for (var s = 3; 0 <= s; s--) {
                  var c,
                    l,
                    u = this.waters[s];
                  (u.skewY = cc.misc.clampf(-t, -86, 0)),
                    u.active &&
                      (t <= 30
                        ? (u.height = e)
                        : t <= p.GameConst.BottleAngles[3]
                          ? ((l =
                              (c = p.GameConst.BottleAngles[3]) -
                              p.GameConst.BottleAngles[4]),
                            (u.height =
                              3 == s
                                ? i * cc.misc.clamp01((c - t) / l)
                                : cc.misc.lerp(
                                    i,
                                    n,
                                    cc.misc.clamp01(
                                      (t - p.GameConst.BottleAngles[4]) / l,
                                    ),
                                  )))
                          : t <= p.GameConst.BottleAngles[2]
                            ? ((l =
                                (c = p.GameConst.BottleAngles[2]) -
                                p.GameConst.BottleAngles[3]),
                              (u.height =
                                2 == s
                                  ? n * cc.misc.clamp01((c - t) / l)
                                  : cc.misc.lerp(
                                      n,
                                      a,
                                      cc.misc.clamp01(
                                        (t - p.GameConst.BottleAngles[3]) / l,
                                      ),
                                    )))
                            : t <= p.GameConst.BottleAngles[1]
                              ? ((l =
                                  (c = p.GameConst.BottleAngles[1]) -
                                  p.GameConst.BottleAngles[2]),
                                (u.height =
                                  1 == s
                                    ? a * cc.misc.clamp01((c - t) / l)
                                    : cc.misc.lerp(
                                        a,
                                        r,
                                        cc.misc.clamp01(
                                          (t - p.GameConst.BottleAngles[2]) / l,
                                        ),
                                      )))
                              : ((l =
                                  (c = p.GameConst.BottleAngles[0]) -
                                  p.GameConst.BottleAngles[1]),
                                (u.height = r * cc.misc.clamp01((c - t) / l)),
                                (u.x = 84 < t ? ((t - 84) / 5.5) * -40 : 0)));
                }
              }),
              (e.prototype.moveTo = function (t, e, o, i, n) {
                var a = this;
                return (
                  void 0 === i && (i = !1),
                  new Promise(function (r) {
                    var s;
                    e || ((s = t.sub(a.node.position).mag()), (e = s / 1600)),
                      o && (e -= o),
                      (e = cc.misc.clampf(e, 0.1, 5)),
                      cc.Tween.stopAllByTarget(a.node);
                    var c = cc.tween(a.node);
                    i
                      ? c.to(
                          e,
                          { position: t },
                          {
                            easing: function (t, e) {
                              return (
                                t *
                                t *
                                (((e = void 0 === e ? -4 : e) + 1) * t - e)
                              );
                            },
                          },
                        )
                      : c.to(e, { position: t }),
                      c
                        .call(function () {
                          n && n(), r();
                        })
                        .start();
                  })
                );
              }),
              (e.prototype.moveBack = function (t) {
                return (
                  void 0 === t && (t = 0),
                  __awaiter(this, void 0, void 0, function () {
                    return __generator(this, function (e) {
                      switch (e.label) {
                        case 0:
                          return [4, this.moveTo(this.basePos, t, 0, !0)];
                        case 1:
                          return e.sent(), [2];
                      }
                    });
                  })
                );
              }),
              (e.prototype.calculateTriangleSides = function (t) {
                var e = r.default.calculateTriangleSides(t, 20, !1),
                  o = e.adjacent;
                return (
                  e.hypotenuse,
                  {
                    angle: t,
                    opposite: r.default.calculateRightTriangleSides(t, o)
                      .opposite,
                    adjacent: o,
                  }
                );
              }),
              (e.prototype.stopShake = function () {
                var t;
                null != (t = this.shakeTw) && t.stop(),
                  (this.zdEff.active = !1);
              }),
              (e.prototype.waterOut = function (t) {
                var e = this;
                return new Promise(function (o) {
                  var i = t.color,
                    a = t.num,
                    s = t.dir,
                    c = t.pos,
                    l = t.callback;
                  (e.shuizhu.active = !1),
                    (e.node.scaleX = s),
                    (e.bottle0.scaleX = s),
                    (e.bottle1.scaleX = s),
                    (e.whs[0].parent.scaleX = s),
                    (e.heightLight.active = !1),
                    e.stopFloat(),
                    e.stopShake();
                  var d = e.colorList.length - a,
                    h = p.GameConst.BottleAngles[d],
                    f = [78, 66, 54, 42, 30][e.colorList.length - 1],
                    m = e.calculateTriangleSides(f),
                    y = cc.v3(c.x + m.opposite * t.dir, c.y + 150);
                  n.App.sound.playEffect(
                    _.ResUtils.Audios.remove,
                    u.BundleType.Game,
                  );
                  var g = 1 == a ? 0.2 : 0.17 * a,
                    v = { angle: 0 },
                    b = r.default.getDistance(c, y) / 1200,
                    w = y.sub(e.node.position),
                    A = e.shadown.position.add(w);
                  cc.tween(e.shadown).to(b, { position: A }).start(),
                    e.moveTo(y, b);
                  var L = e.colorList.length - a;
                  cc.tween(v)
                    .to(
                      b,
                      { angle: f },
                      {
                        onUpdate: function () {
                          e.rotateTo(v.angle);
                        },
                      },
                    )
                    .call(function () {
                      l(),
                        cc
                          .tween(v)
                          .to(
                            g,
                            { angle: h },
                            {
                              onUpdate: function () {
                                e.rotateTo(v.angle);
                                var o = e.calculateTriangleSides(v.angle),
                                  n = cc.v3(
                                    c.x + o.opposite * t.dir,
                                    c.y + 150,
                                  );
                                (e.node.position = n),
                                  e.showShuiZhu(
                                    i,
                                    e.content.angle,
                                    g,
                                    L * p.GameConst.GridHeight,
                                  );
                              },
                            },
                          )
                          .call(function () {
                            e.shuizhu.active = !1;
                            for (var t = 0; t < a; t++) e.colorList.pop();
                            e.showWaterItems();
                          })
                          .delay(0.1)
                          .call(function () {
                            __awaiter(e, void 0, void 0, function () {
                              var t = this;
                              return __generator(this, function (e) {
                                switch (e.label) {
                                  case 0:
                                    return (
                                      cc
                                        .tween(v)
                                        .to(
                                          b,
                                          { angle: 0 },
                                          {
                                            onUpdate: function () {
                                              t.rotateTo(v.angle);
                                            },
                                          },
                                        )
                                        .start(),
                                      cc
                                        .tween(this.shadown)
                                        .to(0.1 + b, {
                                          position: cc.v3(
                                            this.basePos.x + 30,
                                            this.basePos.y - 190,
                                          ),
                                        })
                                        .call(function () {
                                          t.shadownSp.spriteFrame =
                                            t.shadownList[0];
                                        })
                                        .start(),
                                      [4, this.moveBack(0.1 + b)]
                                    );
                                  case 1:
                                    return (
                                      e.sent(),
                                      this.initWaterColor(),
                                      (this.node.position = this.basePos),
                                      (this.node.scaleX = 1),
                                      (this.bottle0.scaleX = 1),
                                      (this.bottle1.scaleX = 1),
                                      (this.whs[0].parent.scaleX = 1),
                                      o(),
                                      [2]
                                    );
                                }
                              });
                            });
                          })
                          .start();
                    })
                    .start();
                });
              }),
              (e.prototype.showShuiZhu = function (t, e, o, i) {
                void 0 === i && (i = 0),
                  (this.shuizhu.angle = -e),
                  this.shuizhu.active ||
                    (this.shuizhu.children.forEach(function (e) {
                      e.color = c.GameCtrl.getColor(t)[1];
                    }),
                    (this.shuizhu.active = !0),
                    (this.shuizhuBody.height = 0),
                    cc.Tween.stopAllByTarget(this.shuizhuBody),
                    cc
                      .tween(this.shuizhuBody)
                      .to(0.1, { height: 300 })
                      .start());
              }),
              (e.prototype.showWaterItems = function () {
                for (var t, e = 0; e < 4; e++)
                  this.waters[e].active = e < this.colorList.length;
                null != (t = this.layout) && t.updateLayout();
              }),
              (e.prototype.waterIn = function (t, e, o) {
                var i = this;
                return new Promise(function (a) {
                  i.stopShake();
                  for (
                    var s = i.colorList.length, l = 0;
                    l < e && i.colorList.length < 5;
                    l++
                  )
                    i.colorList.push(t);
                  i.initWaterColor(),
                    i.updateWaterHeight(p.GameConst.WaterMaxY[s]);
                  var d = 0.2 * e,
                    h = { height: p.GameConst.WaterMaxY[s] },
                    f =
                      _.ResUtils.Audios.pour +
                      '' +
                      r.default.randomRangeInt(1, 5);
                  cc.tween(h)
                    .delay(0.1)
                    .call(function () {
                      n.App.sound.playEffect(f, u.BundleType.Game, 2);
                    })
                    .to(
                      d,
                      { height: p.GameConst.WaterMaxY[i.colorList.length] },
                      {
                        onUpdate: function () {
                          var e;
                          i.sdEff.active ||
                            ((e = c.GameCtrl.getColor(t)),
                            (i.sdEff.color = e[1]),
                            (i.sdEff.active = !0)),
                            i.updateWaterHeight(h.height);
                        },
                      },
                    )
                    .call(function () {
                      i.sdEff.active = !1;
                    })
                    .delay(0.1)
                    .call(function () {
                      i.initWaterColor(),
                        i.updateWaterHeight(
                          p.GameConst.WaterMaxY[i.colorList.length],
                        ),
                        n.App.sound.stopEffect(f),
                        o(),
                        a();
                    })
                    .start();
                });
              }),
              (e.prototype.updateWaterHeight = function (t) {
                var e;
                this.waters.forEach(function (e, o) {
                  e.position = cc.v3();
                  var i = cc.misc.clampf(t - p.GameConst.WaterMaxY[o], 0, 46);
                  (e.height = i), (e.active = 0 < i);
                }),
                  null != (e = this.layout) && e.updateLayout();
              }),
              (e.prototype.show = function () {}),
              (e.prototype.hide = function () {
                this.clear(),
                  (this.node.active = !1),
                  (this.bottle0.active = !1),
                  (this.bottle1.active = !1),
                  (this.steel.active = !1),
                  (this.layout.node.active = !1),
                  (this.finish.active = !1),
                  (this.shadown.active = !1),
                  c.GameCtrl.bottleList.push(this);
              }),
              (e.prototype.disappear = function () {
                var t = this;
                return new Promise(function (e) {
                  var o, i;
                  (t.bottle0.parent = t.layer0),
                    (t.bottle1.parent = t.layer1),
                    (t.steel.parent = t.content),
                    (t.bottle0.position = t.bot_pos0),
                    (t.bottle1.position = t.bot_pos1),
                    cc.Tween.stopAllByTarget(t.content),
                    cc.Tween.stopAllByTarget(t.finish),
                    (t.finish.parent = t.content),
                    (t.finish.position = cc.v3(0, -110)),
                    (t.finish.active = u.GameMode.Level == c.GameCtrl.mode),
                    t.finish.active &&
                      (null != (o = t.gouTw) && o.start(),
                      null != (i = t.finishEff) &&
                        i.playEff({
                          act: 'animation',
                          isLoop: !1,
                          complete: function () {},
                        }),
                      t.cover.playEff()),
                    cc
                      .tween(t.content)
                      .delay(0.5)
                      .call(function () {
                        var e = c.GameCtrl.getColor(t.colorList[0]);
                        (t.full.active = !0),
                          (t.full.color = e[0]),
                          (t.layout.node.active = !0),
                          (t.shadown.active =
                            u.GameMode.Level == c.GameCtrl.mode);
                      })
                      .to(0.3, {
                        opacity: u.GameMode.Level != c.GameCtrl.mode ? 0 : 255,
                      })
                      .delay(0.2)
                      .call(function () {
                        u.GameMode.Level != c.GameCtrl.mode &&
                          (t.clear(),
                          n.App.event.emit(d.default.On_Bottle_Del, {
                            item: t,
                            wpos: t.node.convertToWorldSpaceAR(cc.v3()),
                          }),
                          (t.node.active = !1),
                          (t.bottle0.active = !1),
                          (t.bottle1.active = !1),
                          (t.steel.active = !1),
                          (t.layout.node.active = !0)),
                          (t.full.active = !1),
                          (t._isFinshed = !0),
                          e();
                      })
                      .start();
                });
              }),
              (e.prototype.appear = function () {
                (this.content.opacity = 255),
                  (this.full.active = !1),
                  (this.node.active = !0),
                  (this.bottle0.active = !0),
                  (this.bottle1.active = !0),
                  (this.shadown.active = !0);
              }),
              (e.prototype.deleteColor = function (t) {
                this.colorList.splice(t, 1),
                  this.initWaterColor(),
                  this.showWaterItems();
              }),
              (e.prototype.setColors = function (t) {
                (this.colorList = t),
                  this.initWaterColor(),
                  this.updateWaterHeight(
                    p.GameConst.WaterMaxY[this.colorList.length],
                  ),
                  this.showWaterItems();
              }),
              (e.prototype.getLast = function () {
                var t = -1,
                  e = 0;
                if (0 < this.colorList.length) {
                  t = this.colorList[this.colorList.length - 1];
                  for (
                    var o = Math.min(this.darkNum, this.colorList.length - 1),
                      i = this.colorList.length - 1;
                    o <= i && this.colorList[i] == t;
                    i--
                  )
                    e++;
                }
                return {
                  color: t,
                  sameNum: e,
                  emptyNum: 4 - this.colorList.length,
                };
              }),
              (e.prototype.onRefresh = function (t) {
                var e = this;
                return new Promise(function (o) {
                  e.isRefresh ||
                    (e.getLast().sameNum != e.colorList.length &&
                      ((e.isRefresh = !0),
                      cc
                        .tween(e.node)
                        .delay(0.06)
                        .call(function () {
                          var t, o;
                          2 == e.colorList.length
                            ? ((t = e.colorList[0]),
                              (o = e.colorList[1]),
                              (e.colorList[0] = o),
                              (e.colorList[1] = t))
                            : a.default.shuffle(e.colorList),
                            e.initWaterColor(),
                            e.showWaterItems();
                        })
                        .union()
                        .repeat(10)
                        .call(function () {
                          if (t && 0 != t.length)
                            a.default.clone(t, e.colorList);
                          else {
                            var i = e.colorList[e.colorList.length - 1],
                              n = -1;
                            a.default.shuffle(e.colorList);
                            for (var r = 0; r < e.colorList.length; r++)
                              if (e.colorList[r] != i) {
                                (n = e.colorList[r]), e.colorList.splice(r, 1);
                                break;
                              }
                            e.colorList.push(n);
                          }
                          e.initWaterColor(),
                            e.showWaterItems(),
                            (e.isRefresh = !1),
                            o();
                        })
                        .start()));
                });
              }),
              (e.prototype.steelFlyout = function () {
                var t = this;
                (this.shadownSp.spriteFrame = this.shadownList[0]),
                  n.App.sound.playEffect(
                    _.ResUtils.Audios.flyout,
                    u.BundleType.Game,
                  ),
                  cc
                    .tween(this.steel)
                    .by(0.1, { position: cc.v3(0, 900) })
                    .call(function () {
                      (t.steel.active = !1),
                        t.steel.setPosition(t.steelPos.x, t.steelPos.y);
                    })
                    .start();
              }),
              (e.prototype.isFull = function () {
                var t = this.getLast();
                return 0 < t.color && 4 == t.sameNum;
              }),
              (e.prototype.isEmpty = function () {
                return 0 == this.colorList.length;
              }),
              (e.prototype.isSteel = function () {
                return 0 < this.steelNum;
              }),
              __decorate([g(cc.Node)], e.prototype, 'content', void 0),
              __decorate([g(cc.Node)], e.prototype, 'shuizhu', void 0),
              __decorate([g(cc.Node)], e.prototype, 'shuizhuBody', void 0),
              __decorate([g(cc.Mask)], e.prototype, 'mask', void 0),
              __decorate([g(cc.Node)], e.prototype, 'video', void 0),
              __decorate([g([cc.Node])], e.prototype, 'waters', void 0),
              __decorate([g([cc.Node])], e.prototype, 'whs', void 0),
              __decorate([g(cc.Node)], e.prototype, 'bottle0', void 0),
              __decorate([g(cc.Node)], e.prototype, 'bottle1', void 0),
              __decorate([g(cc.Node)], e.prototype, 'heightLight', void 0),
              __decorate([g(cc.Node)], e.prototype, 'steel', void 0),
              __decorate([g(cc.Node)], e.prototype, 'full', void 0),
              __decorate([g(cc.Node)], e.prototype, 'shadown', void 0),
              __decorate([g(cc.Node)], e.prototype, 'finish', void 0),
              __decorate([g(i.default)], e.prototype, 'finishEff', void 0),
              __decorate([g(cc.Layout)], e.prototype, 'layout', void 0),
              __decorate([g(cc.Node)], e.prototype, 'gou', void 0),
              __decorate([g(cc.Node)], e.prototype, 'steelBiao', void 0),
              __decorate([g(cc.Label)], e.prototype, 'steelNumLab', void 0),
              __decorate([g(cc.Sprite)], e.prototype, 'shadownSp', void 0),
              __decorate(
                [g([cc.SpriteFrame])],
                e.prototype,
                'shadownList',
                void 0,
              ),
              __decorate([g(f.default)], e.prototype, 'cover', void 0),
              __decorate([g(cc.Node)], e.prototype, 'effect', void 0),
              __decorate([g(cc.Node)], e.prototype, 'zdEff', void 0),
              __decorate([g(cc.Node)], e.prototype, 'sdEff', void 0),
              __decorate([y], e)
            );
          })(s.default);
        (o.default = v), cc._RF.pop();
      },
      {
        './App': 'App',
        './ArrayUtil': 'ArrayUtil',
        './BaseUI': 'BaseUI',
        './Cover': 'Cover',
        './EventTypes': 'EventTypes',
        './GameConst': 'GameConst',
        './GameCtrl': 'GameCtrl',
        './GameEnums': 'GameEnums',
        './GameMgr': 'GameMgr',
        './MathUtil': 'MathUtil',
        './ResUtils': 'ResUtils',
        './SpineEffect': 'SpineEffect',
        './UserData': 'UserData',
      },
    ],
    BoxItem: [
      function (t, e, o) {
        'use strict';
        var i, n, a, r, s, c, l, p, u, d, h;
        cc._RF.push(e, '7cc95a5eXdDaKdywcek2CXm', 'BoxItem'),
          (r = t('./App')),
          (n = t('./BaseUI')),
          (i = t('./GameEnums')),
          (a = t('./EventTypes')),
          (u = t('./ResUtils')),
          (s = (l = cc._decorator).ccclass),
          (p = l.property),
          (d = n.default),
          (h = function () {
            var t;
            return (
              ((t = (null !== d && d.apply(this, arguments)) || this).closeSp =
                null),
              (t.open1Sp = null),
              (t.open2Sp = null),
              (t.content = null),
              (t.shadow = null),
              (t.lockSp = null),
              (t._isLock = !1),
              (t.basePos = cc.v3()),
              (t.shadowPos = cc.v3()),
              (t.bottle = null),
              (t.isReady = !1),
              (t.isOccupied = !1),
              (t._color = i.ColorType.None),
              t
            );
          }),
          __extends(h, d),
          (h.prototype.onLoad = function () {
            (this.basePos.x = this.node.position.x),
              (this.basePos.y = this.node.position.y),
              (this.shadowPos.x = this.shadow.position.x),
              (this.shadowPos.y = this.shadow.position.y);
          }),
          Object.defineProperty(h.prototype, 'isLock', {
            get: function () {
              return this._isLock;
            },
            enumerable: !1,
            configurable: !0,
          }),
          (h.prototype.setColor = function (t) {
            return __awaiter(this, void 0, void 0, function () {
              return __generator(this, function (e) {
                switch (e.label) {
                  case 0:
                    return (
                      (this._color = t),
                      (this.node.scale = 1),
                      (this.isOccupied = !1),
                      this.close(),
                      [
                        4,
                        r.App.res.setSprite(
                          this.closeSp,
                          'res/game/box/' + t + '-1',
                          i.BundleType.Game,
                        ),
                      ]
                    );
                  case 1:
                    return (
                      e.sent(),
                      [
                        4,
                        r.App.res.setSprite(
                          this.open1Sp,
                          'res/game/box/' + t + '-2',
                          i.BundleType.Game,
                        ),
                      ]
                    );
                  case 2:
                    return (
                      e.sent(),
                      [
                        4,
                        r.App.res.setSprite(
                          this.open2Sp,
                          'res/game/box/' + t + '-3',
                          i.BundleType.Game,
                        ),
                      ]
                    );
                  case 3:
                    return (
                      e.sent(),
                      this.bottle &&
                        (r.App.res.putNodeToPool(this.bottle),
                        (this.bottle = null)),
                      [2]
                    );
                }
              });
            });
          }),
          (h.prototype.setStatus = function (t) {
            (this._isLock = t),
              this.close(),
              t
                ? ((this.lockSp.opacity = 255),
                  r.App.res.setSprite(
                    this.closeSp,
                    'res/game/box/0-1',
                    i.BundleType.Game,
                  ))
                : (this.lockSp.opacity = 0),
              0 != this.basePos.x &&
                0 != this.basePos.y &&
                (this.node.position = this.basePos),
              0 != this.shadowPos.x &&
                0 != this.shadowPos.y &&
                (this.shadow.position = this.shadowPos);
          }),
          (h.prototype.getColor = function () {
            return this._color;
          }),
          (h.prototype.onEnable = function () {
            this.close(), this.on(this.node, this.onBoxClick, this);
          }),
          (h.prototype.onDisable = function () {
            this.off(this.node);
          }),
          (h.prototype.onBoxClick = function () {
            this.isLock && r.App.event.emit(a.default.On_Box_Click, this);
          }),
          (h.prototype.addBottle = function (t) {
            var e;
            return (
              (e = this),
              new Promise(function (o) {
                var n, a;
                t
                  ? ((e.bottle = t),
                    r.App.sound.playEffect(
                      u.ResUtils.Audios.bag,
                      i.BundleType.Game,
                    ),
                    (n = t.convertToWorldSpaceAR(cc.v3())),
                    (a = e.content.convertToNodeSpaceAR(n)),
                    (t.position = cc.v3(a.x, a.y)),
                    (t.parent = e.content),
                    cc
                      .tween(t)
                      .to(0.15, { position: cc.v3(0, 70) })
                      .delay(0.2)
                      .call(function () {
                        o();
                      })
                      .start())
                  : o();
              })
            );
          }),
          (h.prototype.open = function () {
            (this.closeSp.node.opacity = 0),
              (this.open1Sp.node.opacity = 255),
              (this.open2Sp.node.opacity = 255);
          }),
          (h.prototype.close = function () {
            (this.closeSp.node.opacity = 255),
              (this.open1Sp.node.opacity = 0),
              (this.open2Sp.node.opacity = 0);
          }),
          (h.prototype.boxOut = function () {
            var t;
            return (
              (t = this),
              new Promise(function (e) {
                (t.isReady = !1),
                  cc
                    .tween(t.node)
                    .to(0.3, { position: cc.v3(t.node.position.x, 1060) })
                    .call(function () {
                      t.bottle &&
                        (r.App.res.putNodeToPool(t.bottle), (t.bottle = null)),
                        e();
                    })
                    .start(),
                  cc
                    .tween(t.shadow)
                    .to(0.3, {
                      position: cc.v3(t.shadowPos.x + 837, t.shadowPos.y + 530),
                    })
                    .start();
              })
            );
          }),
          (h.prototype.boxIn = function () {
            var t;
            return (
              (t = this),
              new Promise(function (e) {
                (t.shadow.position = cc.v3(
                  t.shadowPos.x + 837,
                  t.shadowPos.y + 530,
                )),
                  cc
                    .tween(t.node)
                    .to(0.3, { position: cc.v3(t.basePos.x, t.basePos.y) })
                    .call(function () {
                      (t.isReady = !0), e();
                    })
                    .start(),
                  cc
                    .tween(t.shadow)
                    .to(0.3, { position: cc.v3(t.shadowPos.x, t.shadowPos.y) })
                    .start();
              })
            );
          }),
          __decorate([p(cc.Sprite)], h.prototype, 'closeSp', void 0),
          __decorate([p(cc.Sprite)], h.prototype, 'open1Sp', void 0),
          __decorate([p(cc.Sprite)], h.prototype, 'open2Sp', void 0),
          __decorate([p(cc.Node)], h.prototype, 'content', void 0),
          __decorate([p(cc.Node)], h.prototype, 'shadow', void 0),
          __decorate([p(cc.Node)], h.prototype, 'lockSp', void 0),
          (c = __decorate([s], h)),
          (o.default = c),
          cc._RF.pop();
      },
      {
        './App': 'App',
        './BaseUI': 'BaseUI',
        './EventTypes': 'EventTypes',
        './GameEnums': 'GameEnums',
        './ResUtils': 'ResUtils',
      },
    ],
    Breath: [
      function (t, e, o) {
        'use strict';
        var i, n, a, r, s, c;
        cc._RF.push(e, '0a618RhVphIYaOaXyDu2+DC', 'Breath'),
          (a = (i = cc._decorator).ccclass),
          (n = i.property),
          (s = cc.Component),
          (c = function () {
            var t;
            return (
              ((t = (null !== s && s.apply(this, arguments)) || this).time = 1),
              (t.mut = 1.1),
              (t.auto = !1),
              (t._scale = 0),
              (t._tween = null),
              t
            );
          }),
          __extends(c, s),
          (c.prototype.onLoad = function () {
            (this._scale = this.node.scale),
              (this._tween = cc.tween(this.node).repeatForever(
                cc
                  .tween()
                  .to(this.time, { scale: this._scale * this.mut })
                  .to(this.time, { scale: this._scale }),
              ));
          }),
          (c.prototype.onEnable = function () {
            this.auto && this.playEff();
          }),
          (c.prototype.playEff = function () {
            var t, e;
            (this.node.scale = this._scale),
              null != (t = this._tween) && t.stop(),
              null != (e = this._tween) && e.start();
          }),
          (c.prototype.stopEff = function () {
            var t;
            (this.node.scale = this._scale),
              null != (t = this._tween) && t.stop();
          }),
          __decorate([n], c.prototype, 'time', void 0),
          __decorate([n], c.prototype, 'mut', void 0),
          __decorate([n()], c.prototype, 'auto', void 0),
          (r = __decorate([a], c)),
          (o.default = r),
          cc._RF.pop();
      },
      {},
    ],
    CollectItem: [
      function (t, e, o) {
        'use strict';
        var i, n, a, r, s, c, l, p, u;
        cc._RF.push(e, '904e3haWfJMh73TYLWyqt42', 'CollectItem'),
          (r = t('./App')),
          (i = t('./UserData')),
          (n = t('./GameEnums')),
          (a = (c = cc._decorator).ccclass),
          (l = c.property),
          (p = cc.Component),
          (u = function () {
            var t;
            return (
              ((t = (null !== p && p.apply(this, arguments)) || this).gray =
                null),
              (t.iconSp = null),
              (t.wh = null),
              (t.nameLab = null),
              t
            );
          }),
          __extends(u, p),
          (u.prototype.setData = function (t) {
            var e;
            r.App.res.setSprite(
              this.iconSp,
              'res/collect/' + t.icon,
              n.BundleType.Game,
            ),
              (this.nameLab.string = t.name),
              (e = i.UserData.isCollect(t.id)),
              (this.gray.active = !e),
              (this.wh.active = !e),
              (this.iconSp.node.color = e ? cc.Color.WHITE : cc.Color.BLACK),
              (this.nameLab.node.active = e);
          }),
          __decorate([l(cc.Node)], u.prototype, 'gray', void 0),
          __decorate([l(cc.Sprite)], u.prototype, 'iconSp', void 0),
          __decorate([l(cc.Node)], u.prototype, 'wh', void 0),
          __decorate([l(cc.Label)], u.prototype, 'nameLab', void 0),
          (s = __decorate([a], u)),
          (o.default = s),
          cc._RF.pop();
      },
      { './App': 'App', './GameEnums': 'GameEnums', './UserData': 'UserData' },
    ],
    CollectView: [
      function (t, e, o) {
        'use strict';
        cc._RF.push(e, '38028CIGGtLJ4sMtlmZE2pe', 'CollectView');
        var i,
          n,
          a,
          r,
          s,
          c,
          l,
          p,
          u,
          d,
          h,
          _,
          f,
          m = t('../../../RxManager/AdManager').default;
        (s = t('./App')),
          (d = t('./List')),
          (n = t('./BasePanel')),
          (r = t('./GameSetting')),
          (i = t('./UIHelper')),
          (l = t('./EffectMgr')),
          (a = t('./CollectItem')),
          (p = (u = cc._decorator).ccclass),
          (c = u.property),
          (_ = n.default),
          (f = function () {
            var t;
            return (
              ((t = (null !== _ && _.apply(this, arguments)) || this).panel =
                null),
              (t.btnClose = null),
              (t.list = null),
              t
            );
          }),
          __extends(f, _),
          (f.prototype.playIn = function () {
            return __awaiter(this, void 0, Promise, function () {
              return __generator(this, function (t) {
                switch (t.label) {
                  case 0:
                    return [4, l.EffectMgr.viewOpenAnim(this.panel, 1)];
                  case 1:
                    return t.sent(), _.prototype.playIn.call(this), [2];
                }
              });
            });
          }),
          (f.prototype.initEvent = function () {
            this.on(this.btnClose, this.onBtnCloseClick, this);
          }),
          (f.prototype.onEnable = function () {
            this.updateView(), m.getInstance().showInsert();
          }),
          (f.prototype.updateView = function () {
            this.list.numItems = r.GameSetting.collect_conf.length;
          }),
          (f.prototype.onBtnCloseClick = function () {
            s.App.gui.closeUI(i.UIEnum.CollectView);
          }),
          (f.prototype.onItemRender = function (t, e) {
            t.getComponent(a.default).setData(r.GameSetting.collect_conf[e]);
          }),
          __decorate([c(cc.Node)], f.prototype, 'panel', void 0),
          __decorate([c(cc.Node)], f.prototype, 'btnClose', void 0),
          __decorate([c(d.default)], f.prototype, 'list', void 0),
          (h = __decorate([p], f)),
          (o.default = h),
          cc._RF.pop();
      },
      {
        '../../../RxManager/AdManager': void 0,
        './App': 'App',
        './BasePanel': 'BasePanel',
        './CollectItem': 'CollectItem',
        './EffectMgr': 'EffectMgr',
        './GameSetting': 'GameSetting',
        './List': 'List',
        './UIHelper': 'UIHelper',
      },
    ],
    ConfData: [
      function (t, e, o) {
        'use strict';
        var i, n, a, r;
        cc._RF.push(e, '1a670hfZyJBFa1GIcUrJfrE', 'ConfData'),
          (o.ConfData = void 0),
          (n = t('./LevelConf')),
          (a = t('./SkinConf')),
          ((r = function () {
            (this.levelConf = new n.default()),
              (this.skinConf = new a.default());
          }).prototype.parse = function (t) {
            var e;
            this[(e = t.name)] && this[e].parse(e, t);
          }),
          (i = r),
          (o.ConfData = new i()),
          cc._RF.pop();
      },
      { './LevelConf': 'LevelConf', './SkinConf': 'SkinConf' },
    ],
    CourseView: [
      function (t, e, o) {
        'use strict';
        var i, n, a, r, s, c, l, p, u, d, h, _;
        cc._RF.push(e, 'e7d8ezWQoZAha5ujVzrrfVn', 'CourseView'),
          t('../../../RxManager/AdManager').default,
          (n = t('./App')),
          (d = t('./BaseUI')),
          (i = t('./GameCtrl')),
          (l = t('./EventTypes')),
          (a = t('./UIHelper')),
          (u = t('./Rotate')),
          (p = (c = cc._decorator).ccclass),
          (s = c.property),
          (h = d.default),
          (_ = function () {
            var t;
            return (
              ((t = (null !== h && h.apply(this, arguments)) || this).content =
                null),
              (t.gridLayer = null),
              (t.pourLayer = null),
              (t.bottleLayer0 = null),
              (t.bottleLayer1 = null),
              (t.bottleLayer2 = null),
              (t.shadownLayer = null),
              (t.finishLayer = null),
              (t.lockLayer = null),
              (t.mask = null),
              (t.btnBack0 = null),
              (t.wz01 = null),
              (t.wz02 = null),
              (t.guide = null),
              (t.gridSp = null),
              (t.lightNode = null),
              (t.line = null),
              (t.lights = []),
              (t.guidePos = []),
              (t.guideList = [0, 1, 3, 1, 0, 2, 3, 2, 0, 1, 3, 1]),
              (t.guideIndex = 0),
              (t.ctx = null),
              (t.grid_rt = new cc.RenderTexture()),
              t
            );
          }),
          __extends(_, h),
          (_.prototype.onLoad = function () {
            for (var t = 0; t < this.lightNode.childrenCount; t++)
              this.lights.push(this.lightNode.children[t]);
          }),
          (_.prototype.onEnable = function () {
            i.GameCtrl.init({
              gridLayer: this.gridLayer,
              pourLayer: this.pourLayer,
              finishLayer: this.finishLayer,
              lockLayer: this.lockLayer,
              bottleLayer0: this.bottleLayer0,
              shadownLayer: this.shadownLayer,
              bottleLayer1: this.bottleLayer1,
              bottleLayer2: this.bottleLayer2,
            }),
              this.updateView(),
              this.onPlayGame(),
              this.initEvent();
          }),
          (_.prototype.onDisable = function () {
            i.GameCtrl.clearGame(), n.App.event.targetOff(this), this.clear();
          }),
          (_.prototype.update = function (t) {
            i.GameCtrl.onUpdate(t);
          }),
          (_.prototype.updateView = function () {
            this.lights.forEach(function (t) {
              t.active = !1;
            }),
              (this.wz01.active = !0),
              (this.wz02.active = !1),
              (this.guide.active = !1);
          }),
          (_.prototype.playGame = function () {
            return __awaiter(this, void 0, void 0, function () {
              return __generator(this, function (t) {
                switch (t.label) {
                  case 0:
                    return [4, i.GameCtrl.playGame()];
                  case 1:
                    return t.sent(), (this.line.active = !1), [2];
                }
              });
            });
          }),
          (_.prototype.initEvent = function () {
            n.App.event.on(
              l.default.On_Bottle_Collect,
              this.onBottleCollect,
              this,
            ),
              n.App.event.on(
                l.default.On_Bottle_Item_Click,
                this.onGridItemClick,
                this,
              ),
              n.App.event.on(l.default.On_Game_Init, this.onGameInit, this),
              n.App.event.on(
                l.default.On_Pour_Water_Act_End,
                this.onGridLayerDraw,
                this,
              ),
              n.App.event.on(l.default.On_Bottle_Del, this.onBottleDel, this),
              this.on(this.btnBack0, this.onBtnBack0Click, this);
          }),
          (_.prototype.onBottleCollect = function (t) {
            return __awaiter(this, void 0, void 0, function () {
              return __generator(this, function () {
                return (
                  this.lights.forEach(function (t) {
                    t.active = !1;
                  }),
                  (this.lightNode.position = this.gridLayer.position),
                  (this.lightNode.scale = this.gridLayer.scale),
                  (this.lights[0].position = t.pos.add(cc.v3(0, -100))),
                  (this.lights[0].active = !0),
                  (this.lights[0].getComponent(u.default).play_sec = 1),
                  [2]
                );
              });
            });
          }),
          (_.prototype.onBtnBack0Click = function () {
            i.GameCtrl.gamePause(), n.App.gui.openUI(a.UIEnum.SettingView);
          }),
          (_.prototype.onBottleDel = function (t) {
            return __awaiter(this, void 0, void 0, function () {
              return __generator(this, function () {
                return this.onGridLayerDraw(), i.GameCtrl.onBottleDel(t), [2];
              });
            });
          }),
          (_.prototype.onGridItemClick = function (t) {
            return __awaiter(this, void 0, void 0, function () {
              var e, o;
              return (
                (o = this),
                __generator(this, function (n) {
                  switch (n.label) {
                    case 0:
                      return (
                        (e = 'item_' + this.guideList[this.guideIndex]),
                        t.node.name != e
                          ? [2]
                          : ((this.guideIndex += 1),
                            this.showGuide(),
                            (this.wz01.active = !1),
                            (this.wz02.active = !0),
                            [
                              4,
                              i.GameCtrl.onGridItemClick(t, function () {
                                o.onGridLayerDraw();
                              }),
                            ])
                      );
                    case 1:
                      return n.sent(), this.onGridLayerDraw(), [2];
                  }
                })
              );
            });
          }),
          (_.prototype.onPlayGame = function () {
            this.playGame();
          }),
          (_.prototype.onGameInit = function () {
            var t;
            (t = this), (this.guidePos.length = 0);
            for (
              var e = (this.guideIndex = 0);
              e < this.gridLayer.childrenCount;
              e++
            ) {
              var o, i;
              (o = this.gridLayer.children[e].convertToWorldSpaceAR(cc.v3())),
                (i = this.node.convertToNodeSpaceAR(o)),
                this.guidePos.push(cc.v3(i.x + 30, i.y - 130));
            }
            (this.lockLayer.active = !0),
              this.scheduleOnce(function () {
                cc.Tween.stopAllByTarget(t.guide),
                  (t.guide.active = !0),
                  cc
                    .tween(t.guide)
                    .sequence(
                      cc.tween().to(0.5, { scale: 0.9 }),
                      cc.tween().to(0.5, { scale: 1.1 }),
                    )
                    .repeatForever()
                    .start(),
                  t.showGuide(),
                  t.draw(),
                  (t.lockLayer.active = !1);
              }, 0.1);
          }),
          (_.prototype.onGridLayerDraw = function () {
            this.draw();
          }),
          (_.prototype.draw = function () {
            var t, e;
            (this.gridSp.node.active = !1),
              (this.gridLayer.opacity = 255),
              (t = this.getRenderTexture(
                this.gridLayer,
                4,
                this.grid_rt,
                cc.RenderTexture.DepthStencilFormat.RB_FMT_D24S8,
              )),
              (e = new cc.SpriteFrame()).setTexture(t),
              (this.gridSp.spriteFrame = e),
              (this.gridSp.node.position = this.gridLayer.position),
              (this.gridSp.node.active = !0),
              (this.gridLayer.opacity = 0);
          }),
          (_.prototype.getRenderTexture = function (t, e, o, i) {
            var n, a, r, s, c;
            return cc.isValid(t)
              ? ((n = t.getBoundingBox()),
                (a = Math.floor(n.width)),
                (r = Math.floor(n.height)),
                i ? o.initWithSize(a, r, i) : o.initWithSize(a, r),
                (o._premultiplyAlpha = !0),
                ((s = new cc.Node()).parent = t),
                ((c = s.addComponent(cc.Camera)).clearFlags =
                  cc.Camera.ClearFlags.COLOR),
                (c.backgroundColor = cc.color(255, 255, 255, 0)),
                (c.zoomRatio = cc.winSize.height / r),
                (c.cullingMask = e),
                (c.targetTexture = o),
                c.render(t),
                s.destroy(),
                o)
              : null;
          }),
          (_.prototype.showGuide = function () {
            var t, e;
            null != (e = this.guideList[this.guideIndex]) &&
            (t = this.guidePos[e])
              ? (this.guide.position = t)
              : (this.guide.active = !1);
          }),
          __decorate([s(cc.Node)], _.prototype, 'content', void 0),
          __decorate([s(cc.Node)], _.prototype, 'gridLayer', void 0),
          __decorate([s(cc.Node)], _.prototype, 'pourLayer', void 0),
          __decorate([s(cc.Node)], _.prototype, 'bottleLayer0', void 0),
          __decorate([s(cc.Node)], _.prototype, 'bottleLayer1', void 0),
          __decorate([s(cc.Node)], _.prototype, 'bottleLayer2', void 0),
          __decorate([s(cc.Node)], _.prototype, 'shadownLayer', void 0),
          __decorate([s(cc.Node)], _.prototype, 'finishLayer', void 0),
          __decorate([s(cc.Node)], _.prototype, 'lockLayer', void 0),
          __decorate([s(cc.Mask)], _.prototype, 'mask', void 0),
          __decorate([s(cc.Node)], _.prototype, 'btnBack0', void 0),
          __decorate([s(cc.Node)], _.prototype, 'wz01', void 0),
          __decorate([s(cc.Node)], _.prototype, 'wz02', void 0),
          __decorate([s(cc.Node)], _.prototype, 'guide', void 0),
          __decorate([s(cc.Sprite)], _.prototype, 'gridSp', void 0),
          __decorate([s(cc.Node)], _.prototype, 'lightNode', void 0),
          __decorate([s(cc.Node)], _.prototype, 'line', void 0),
          (r = __decorate([p], _)),
          (o.default = r),
          cc._RF.pop();
      },
      {
        '../../../RxManager/AdManager': void 0,
        './App': 'App',
        './BaseUI': 'BaseUI',
        './EventTypes': 'EventTypes',
        './GameCtrl': 'GameCtrl',
        './Rotate': 'Rotate',
        './UIHelper': 'UIHelper',
      },
    ],
    Cover: [
      function (t, e, o) {
        'use strict';
        var i, n, a, r, s, c;
        cc._RF.push(e, '6871euK045MhJh9UASRwvfE', 'Cover'),
          (n = (a = cc._decorator).ccclass),
          (i = a.property),
          (s = cc.Component),
          (c = function () {
            var t;
            return (
              ((t = (null !== s && s.apply(this, arguments)) || this).anim =
                null),
              t
            );
          }),
          __extends(c, s),
          (c.prototype.playEff = function () {
            var t;
            return (
              (t = this),
              new Promise(function (e) {
                t.anim.setCurrentTime(0),
                  t.anim.on(
                    'finished',
                    function () {
                      e();
                    },
                    t,
                  ),
                  t.anim.play('gai1');
              })
            );
          }),
          __decorate([i(cc.Animation)], c.prototype, 'anim', void 0),
          (r = __decorate([n], c)),
          (o.default = r),
          cc._RF.pop();
      },
      {},
    ],
    DailyRewardView: [
      function (t, e, o) {
        'use strict';
        var i, n, a, r, s, c, l;
        cc._RF.push(e, 'ae10eSLeexMC7gFth9EtQTR', 'DailyRewardView'),
          (s = t('./BasePanel')),
          (n = (a = cc._decorator).ccclass),
          (r = a.property),
          (c = s.default),
          (l = function () {
            var t;
            return (
              ((t = (null !== c && c.apply(this, arguments)) || this).panel =
                null),
              (t.btnClose = null),
              (t.btnGet = null),
              (t.btnGray = null),
              t
            );
          }),
          __extends(l, c),
          __decorate([r(cc.Node)], l.prototype, 'panel', void 0),
          __decorate([r(cc.Node)], l.prototype, 'btnClose', void 0),
          __decorate([r(cc.Node)], l.prototype, 'btnGet', void 0),
          __decorate([r(cc.Node)], l.prototype, 'btnGray', void 0),
          (i = __decorate([n], l)),
          (o.default = i),
          cc._RF.pop();
      },
      { './BasePanel': 'BasePanel' },
    ],
    DateUtil: [
      function (t, e, o) {
        'use strict';
        var i, n;
        cc._RF.push(e, '9d233eYlkRAA70V/mha6bQU', 'DateUtil'),
          ((n = function () {}).timeFormat = function (t) {
            var e, o, i, n, a, r;
            return (
              (i = (
                '0' +
                ((n =
                  0 < (t = void 0 === t ? 0 : t)
                    ? new Date(new Date().getTime() + 864e5 * t)
                    : new Date(Number(new Date()) - 864e5 * t)).getMonth() +
                  1)
              ).slice(-2)),
              (e = ('0' + n.getDate()).slice(-2)),
              (r = ('0' + n.getHours()).slice(-2)),
              (o = ('0' + n.getMinutes()).slice(-2)),
              (a = ('0' + n.getSeconds()).slice(-2)),
              n.getFullYear() + '/' + i + '/' + e + ' ' + r + ':' + o + ':' + a
            );
          }),
          (n.secondFormat = function (t) {
            var e, o, i;
            return (
              (o = 0),
              (i = 0),
              60 < (e = Math.floor(t)) &&
                ((o = Math.floor(e / 60)), (e = Math.floor(e % 60)), 60 <= o) &&
                ((i = Math.floor(o / 60)), (o = Math.floor(o % 60))),
              { hour: i, minute: o, second: e }
            );
          }),
          (n.secondFormat1 = function (t) {
            var e, o, i, n;
            return (
              (n = function (t) {
                return t < 10 ? '0' + t : t + '';
              }),
              (i = 0),
              (o = 0),
              60 <= (e = Math.ceil(t)) &&
                ((i = Math.floor(e / 60)), (e = Math.floor(e % 60)), 60 <= i) &&
                ((o = Math.floor(i / 60)), (i = Math.floor(i % 60))),
              0 < o ? n(o) + ':' + n(i) + ':' + n(e) : n(i) + ':' + n(e)
            );
          }),
          (n.secondFormat2 = function (t, e) {
            var o, i;
            return (
              void 0 === e && (e = !1),
              (t = Math.round(t)) <= 0 && (t = 0),
              (o = ''),
              24 < (i = this.secondFormat(t)).hour
                ? (o =
                    Math.floor(i.hour / 24) +
                    '\u5929' +
                    (i.hour % 24) +
                    '\u65f6')
                : 0 < i.hour
                  ? ((o = i.hour + '\u65f6' + i.minute + '\u5206'),
                    e && (o += i.second + '\u79d2'))
                  : (o =
                      0 < i.minute
                        ? i.minute + '\u5206' + i.second + '\u79d2'
                        : i.second + '\u79d2'),
              o
            );
          }),
          (n.getSecond = function (t, e) {
            return (Number(new Date(t)) - Number(new Date(e))) / 1e3;
          }),
          (n.getDays = function (t, e) {
            return Math.floor((Number(t) - Number(e)) / 864e5);
          }),
          (n.compareVersion = function (t, e) {
            (t = t.split('.')), (e = e.split('.'));
            for (var o = Math.max(t.length, e.length); t.length < o; )
              t.push('0');
            for (; e.length < o; ) e.push('0');
            for (var i = 0; i < o; i++) {
              var n, a;
              if (((a = parseInt(t[i])), (n = parseInt(e[i])) < a)) return 1;
              if (a < n) return -1;
            }
            return 0;
          }),
          (n.compare = function (t, e) {
            var o, i;
            return (
              (i = new Date()),
              (o = new Date()),
              i.setTime(t),
              o.setTime(e),
              cc.log('compare', i, o),
              i.getFullYear() == o.getFullYear() &&
                i.getMonth() == o.getMonth() &&
                i.getDate() == o.getDate()
            );
          }),
          (i = n),
          (o.default = i),
          cc._RF.pop();
      },
      {},
    ],
    DelayUtil: [
      function (t, e, o) {
        'use strict';
        var i, n;
        cc._RF.push(e, 'ec73e25GXVOuYakT/ugg0p3', 'DelayUtil'),
          ((n = function () {}).delay = function (t, e) {
            var o;
            return (
              (o = this),
              new Promise(function (i) {
                var n;
                o._dic[t]
                  ? (console.warn('DelayUtil \u6709\u76f8\u540ckey', t), i())
                  : ((o._dic[t] = n = {}),
                    cc
                      .tween(n)
                      .delay(e)
                      .call(function () {
                        delete o._dic[t], i();
                      })
                      .start());
              })
            );
          }),
          (n._dic = {}),
          (i = n),
          (o.default = i),
          cc._RF.pop();
      },
      {},
    ],
    DiffAct: [
      function (t, e, o) {
        'use strict';
        var i, n, a, r, s, c, l;
        cc._RF.push(e, '6cb78SyQztJ3I6hxmQPcELm', 'DiffAct'),
          (a = t('./App')),
          (i = (r = cc._decorator).ccclass),
          (s = r.property),
          (c = cc.Component),
          (l = function () {
            var t;
            return (
              ((t = (null !== c && c.apply(this, arguments)) || this).body =
                null),
              (t.tween = null),
              t
            );
          }),
          __extends(l, c),
          (l.prototype.onLoad = function () {
            var t;
            (t = this),
              (this.tween = cc
                .tween(this.body)
                .call(function () {
                  t.body.position = cc.v3(-650, 0);
                })
                .to(0.5, { position: cc.v3(0, 0) })
                .delay(1)
                .to(0.5, { position: cc.v3(650, 0) })
                .call(function () {
                  a.App.res.putNodeToPool(t.node);
                }));
          }),
          (l.prototype.onEnable = function () {
            var t, e;
            null != (t = this.tween) && t.stop(),
              null != (e = this.tween) && e.start();
          }),
          __decorate([s(cc.Node)], l.prototype, 'body', void 0),
          (n = __decorate([i], l)),
          (o.default = n),
          cc._RF.pop();
      },
      { './App': 'App' },
    ],
    DisAppear: [
      function (t, e, o) {
        'use strict';
        var i, n, a, r, s;
        cc._RF.push(e, 'd7df0BT0mxDAZgfdm7cLVa5', 'DisAppear'),
          (n = (a = cc._decorator).ccclass),
          a.property,
          (r = cc.Component),
          (s = function () {
            return (null !== r && r.apply(this, arguments)) || this;
          }),
          __extends(s, r),
          (s.prototype.onDisable = function () {
            console.log('[ 11 ] >', 11);
          }),
          (i = __decorate([n], s)),
          (o.default = i),
          cc._RF.pop();
      },
      {},
    ],
    EffectMgr: [
      function (t, e, o) {
        'use strict';
        var i, n, a, r, s, c;
        cc._RF.push(e, 'fd0f1L4QU5MT5IyQpmFEXoe', 'EffectMgr'),
          (o.EffectMgr = void 0),
          (r = t('./App')),
          (s = t('./DelayUtil')),
          (a = t('./GameEnums')),
          (n = t('./ResUtils')),
          ((c = function () {
            this._layer = null;
          }).prototype.initLayer = function (t) {
            this._layer = t;
          }),
          (c.prototype.showTips = function (t, e) {
            return __awaiter(this, void 0, void 0, function () {
              var o;
              return __generator(this, function (i) {
                switch (i.label) {
                  case 0:
                    return [
                      4,
                      r.App.res.getNodeFromPool(
                        n.ResUtils.prefabs.Tips,
                        a.BundleType.Game,
                      ),
                    ];
                  case 1:
                    return (
                      (o = i.sent()) &&
                        ((o.position = e || cc.v3()),
                        o.getComponent('TipsNode').show(t),
                        (o.parent = this._layer)),
                      [2]
                    );
                }
              });
            });
          }),
          (c.prototype.showTips2 = function (t, e, o) {
            return __awaiter(this, void 0, void 0, function () {
              var i;
              return __generator(this, function (s) {
                switch (s.label) {
                  case 0:
                    return [
                      4,
                      r.App.res.getNodeFromPool(
                        n.ResUtils.prefabs.Tips2,
                        a.BundleType.Game,
                      ),
                    ];
                  case 1:
                    return (
                      (i = s.sent()) &&
                        ((i.position = o || cc.v3()),
                        i.getComponent('TipsNode2').show(t, e),
                        (i.parent = this._layer)),
                      [2]
                    );
                }
              });
            });
          }),
          (c.prototype.showTips3 = function (t, e) {
            return __awaiter(this, void 0, void 0, function () {
              var o;
              return __generator(this, function (i) {
                switch (i.label) {
                  case 0:
                    return [
                      4,
                      r.App.res.getNodeFromPool(
                        n.ResUtils.prefabs.Tips3,
                        a.BundleType.Game,
                      ),
                    ];
                  case 1:
                    return (
                      (o = i.sent()) &&
                        ((o.position = e || cc.v3()),
                        o.getComponent('TipsNode3').show(t),
                        (o.parent = this._layer)),
                      [2]
                    );
                }
              });
            });
          }),
          (c.prototype.viewOpenAnim = function (t, e) {
            return (
              void 0 === e && (e = 1.1),
              new Promise(function (o) {
                cc.Tween.stopAllByTarget(t),
                  cc
                    .tween(t)
                    .call(function () {
                      t.scale = 0;
                    })
                    .to(0.2, { scale: e }, { easing: 'backOut' })
                    .call(function () {
                      o();
                    })
                    .start();
              })
            );
          }),
          (c.prototype.playDiffAct = function () {
            return __awaiter(this, void 0, void 0, function () {
              var t;
              return __generator(this, function (e) {
                switch (e.label) {
                  case 0:
                    return [
                      4,
                      r.App.res.getNodeFromPool(
                        n.ResUtils.prefabs.diff,
                        a.BundleType.Game,
                      ),
                    ];
                  case 1:
                    return (
                      ((t = e.sent()).position = cc.v3()),
                      (t.parent = this._layer),
                      [4, s.default.delay('diff', 2)]
                    );
                  case 2:
                    return e.sent(), [2];
                }
              });
            });
          }),
          (i = c),
          (o.EffectMgr = new i()),
          cc._RF.pop();
      },
      {
        './App': 'App',
        './DelayUtil': 'DelayUtil',
        './GameEnums': 'GameEnums',
        './ResUtils': 'ResUtils',
      },
    ],
    EnergyNode: [
      function (t, e, o) {
        'use strict';
        var i, n, a, r, s, c, l, p, u, d, h, _;
        cc._RF.push(e, 'ab027fCVBxOj6B0zL1Eucku', 'EnergyNode'),
          t('../../../RxManager/MyLog').default,
          (o.EnergyNode = void 0),
          (c = t('./App')),
          (d = t('./DateUtil')),
          (l = t('./BaseUI')),
          (n = t('./GameSetting')),
          (u = t('./UserData')),
          (s = t('./EventTypes')),
          (a = (p = cc._decorator).ccclass),
          (r = p.property),
          (h = l.default),
          (_ = function () {
            var t;
            return (
              ((t = (null !== h && h.apply(this, arguments)) || this).numLab =
                null),
              (t.timeLab = null),
              (t.btnAdd = null),
              t
            );
          }),
          __extends(_, h),
          (_.prototype.onEnable = function () {
            this.updatView(),
              this.initEvent(),
              0 == n.GameSetting.is_use_energy && (this.node.parent = null);
          }),
          (_.prototype.onDisable = function () {
            c.App.event.targetOff(this), this.off(this.node);
          }),
          (_.prototype.updatView = function () {
            var t, e;
            (t = u.UserData.energy),
              (e = u.UserData.energy_time),
              (this.numLab.string = t + ''),
              this.timeLab && e <= 0 && (this.timeLab.string = '');
          }),
          (_.prototype.initEvent = function () {
            this.on(this.node, this.onBtnAdd, this, { scale: 1 }),
              c.App.event.on(
                s.default.On_Update_Energy_time,
                this.onTimeUpudate,
                this,
              ),
              c.App.event.on(
                s.default.On_Engery_Change,
                this.onValueUpudate,
                this,
              );
          }),
          (_.prototype.onValueUpudate = function () {
            this.updatView();
          }),
          (_.prototype.onTimeUpudate = function (t) {
            var e;
            this.timeLab &&
              (t.isEnd
                ? (this.timeLab.string = '')
                : ((e = Math.floor(t.ms / 1e3)),
                  (this.timeLab.string = d.default.secondFormat1(e))));
          }),
          (_.prototype.onBtnAdd = function () {}),
          __decorate([r(cc.Label)], _.prototype, 'numLab', void 0),
          __decorate([r(cc.Label)], _.prototype, 'timeLab', void 0),
          __decorate([r(cc.Node)], _.prototype, 'btnAdd', void 0),
          (i = __decorate([a()], _)),
          (o.EnergyNode = i),
          cc._RF.pop();
      },
      {
        '../../../RxManager/MyLog': void 0,
        './App': 'App',
        './BaseUI': 'BaseUI',
        './DateUtil': 'DateUtil',
        './EventTypes': 'EventTypes',
        './GameSetting': 'GameSetting',
        './UserData': 'UserData',
      },
    ],
    EnergyView: [
      function (t, e, o) {
        'use strict';
        cc._RF.push(e, '25077CPhYhAHKdOu3HsITkn', 'EnergyView');
        var i,
          n,
          a,
          r,
          s,
          c,
          l,
          p,
          u,
          d,
          h,
          _,
          f,
          m,
          y,
          g = t('../../../RxManager/AdManager').default;
        (a = t('./App')),
          (c = t('./BasePanel')),
          (n = t('./GameCtrl')),
          (d = t('./GameSetting')),
          (r = t('./UserData')),
          (p = t('./TrackEnums')),
          (f = t('./UIHelper')),
          (_ = t('./EffectMgr')),
          (s = t('./GameMgr')),
          (l = (u = cc._decorator).ccclass),
          (h = u.property),
          (m = c.default),
          (y = function () {
            var t;
            return (
              ((t = (null !== m && m.apply(this, arguments)) || this).panel =
                null),
              (t.btnVideo = null),
              (t.btnGold = null),
              (t.btnNo = null),
              (t.goldLab = null),
              t
            );
          }),
          __extends(y, m),
          (y.prototype.playIn = function () {
            return __awaiter(this, void 0, void 0, function () {
              return __generator(this, function (t) {
                switch (t.label) {
                  case 0:
                    return [4, _.EffectMgr.viewOpenAnim(this.panel, 1)];
                  case 1:
                    return t.sent(), m.prototype.playIn.call(this), [2];
                }
              });
            });
          }),
          (y.prototype.initEvent = function () {
            this.on(this.btnVideo, this.onBtnVideoClick, this),
              this.on(this.btnNo, this.onBtnNoClick, this),
              this.on(this.btnGold, this.onBtnGoldClick, this);
          }),
          (y.prototype.onEnable = function () {
            var t, e;
            n.GameCtrl.gamePause(),
              (e = d.GameSetting.energy_conf.default_value - r.UserData.energy),
              (t = d.GameSetting.energy_conf.use_gold * e),
              (this.goldLab.string = t.toString()),
              g.getInstance().showInsert();
          }),
          (y.prototype.onDisable = function () {
            n.GameCtrl.gameResume();
          }),
          (y.prototype.onBtnGoldClick = function () {
            var t, e, o;
            (o = d.GameSetting.energy_conf.default_value - r.UserData.energy),
              (t = d.GameSetting.energy_conf.use_gold * o),
              r.UserData.useGold(t)
                ? (r.UserData.addEnergy(o),
                  a.App.gui.closeUI(f.UIEnum.EnergyView),
                  null != (e = this._viewData) &&
                    e.callback &&
                    this._viewData.callback(!0))
                : a.App.gui.openUI(f.UIEnum.ShopView);
          }),
          (y.prototype.onBtnVideoClick = function () {
            var t, e, o;
            return __awaiter(this, void 0, void 0, function () {
              return __generator(this, function (i) {
                switch (i.label) {
                  case 0:
                    return [4, s.GameMgr.showVideoAd()];
                  case 1:
                    return (
                      1 == i.sent() &&
                        (null != (t = a.App.track) &&
                          t.trackEvent(p.TrackEnums.recovery),
                        r.UserData.addEnergy(
                          d.GameSetting.energy_conf.default_value -
                            r.UserData.energy,
                        ),
                        a.App.gui.closeUI(f.UIEnum.EnergyView),
                        null != (e = a.App.track) && e.trackEvent('recovery'),
                        null != (o = this._viewData)) &&
                        o.callback &&
                        this._viewData.callback(!0),
                      [2]
                    );
                }
              });
            });
          }),
          (y.prototype.onBtnNoClick = function () {
            var t;
            a.App.gui.closeUI(f.UIEnum.EnergyView),
              null != (t = this._viewData) &&
                t.callback &&
                this._viewData.callback(!1);
          }),
          __decorate([h(cc.Node)], y.prototype, 'panel', void 0),
          __decorate([h(cc.Node)], y.prototype, 'btnVideo', void 0),
          __decorate([h(cc.Node)], y.prototype, 'btnGold', void 0),
          __decorate([h(cc.Node)], y.prototype, 'btnNo', void 0),
          __decorate([h(cc.Label)], y.prototype, 'goldLab', void 0),
          (i = __decorate([l], y)),
          (o.default = i),
          cc._RF.pop();
      },
      {
        '../../../RxManager/AdManager': void 0,
        './App': 'App',
        './BasePanel': 'BasePanel',
        './EffectMgr': 'EffectMgr',
        './GameCtrl': 'GameCtrl',
        './GameMgr': 'GameMgr',
        './GameSetting': 'GameSetting',
        './TrackEnums': 'TrackEnums',
        './UIHelper': 'UIHelper',
        './UserData': 'UserData',
      },
    ],
    EventMgr: [
      function (t, e, o) {
        'use strict';
        var i, n;
        cc._RF.push(e, '22941HXjCtGgbbGnCNRVhcM', 'EventMgr'),
          (o.EventMgr = void 0),
          ((n = function () {
            n._instance
              ? console.error('EventMgr \u5df2\u5b9e\u4f8b\u5316')
              : (n._instance = this);
          }).prototype.on = function (t, e, o, i) {
            t && o
              ? cc.game.on(t, e, o, i)
              : console.error(
                  '\u4e8b\u4ef6\u5bf9\u8c61|\u7c7b\u578b\u4e3a\u7a7a===> type = ',
                  t,
                  'target =',
                  o,
                );
          }),
          (n.prototype.once = function (t, e, o) {
            t && o
              ? cc.game.once(t, e, o)
              : console.error(
                  '\u4e8b\u4ef6\u5bf9\u8c61|\u7c7b\u578b\u4e3a\u7a7a===> type = ',
                  t,
                  'target =',
                  o,
                );
          }),
          (n.prototype.off = function (t, e, o) {
            t && o
              ? cc.game.off(t, e, o)
              : console.error(
                  '\u4e8b\u4ef6\u5bf9\u8c61|\u7c7b\u578b\u4e3a\u7a7a===> type = ',
                  t,
                  'target =',
                  o,
                );
          }),
          (n.prototype.targetOff = function (t) {
            t
              ? cc.game.targetOff(t)
              : console.error('\u4e8b\u4ef6\u5bf9\u8c61===>  target =', t);
          }),
          (n.prototype.emit = function (t, e, o, i, n, a) {
            cc.game.emit(t, e, o, i, n, a);
          }),
          (i = n),
          (o.EventMgr = i),
          cc._RF.pop();
      },
      {},
    ],
    EventTypes: [
      function (t, e, o) {
        'use strict';
        var i, n;
        cc._RF.push(e, '47a9cmZ3lBBYINmP5x1THJD', 'EventTypes'),
          ((n = function () {}).GET_LOGIN_CODE = 'get_login_code'),
          (n.LAUNCH_LOAD_PROGRESS = 'launch_load_progress'),
          (n.LAUNCH_LOAD_COMPLETE = 'launch_load_complete'),
          (n.FIRST_VIEW_SHOW = 'first_view_show'),
          (n.USER_SHARE = 'USER_SHARE'),
          (n.ON_SHOW = 'ON_SHOW'),
          (n.USER_AUTH = 'USER_AUTH'),
          (n.NATIVEAD_LOAD_COMPLETE = 'NATIVEAD_LOAD_COMPLETE'),
          (n.HAD_INSTALL_SHORTCUT = 'HAD_INSTALL_SHORTCUT'),
          (n.VIEW_OPEN = 'View_open'),
          (n.VIEW_CLOSE = 'View_close'),
          (n.Get_Setting_Complete = 'Get_Setting_Complete'),
          (n.On_Update_Energy_time = 'On_Update_Energy_time'),
          (n.On_Common_Values_Update = 'On_Common_Values_Update'),
          (n.On_Bottle_Item_Click = 'On_Bottle_Item_Click'),
          (n.On_Next_Level = 'On_Next_Level'),
          (n.On_Hp_Change = 'On_Hp_Change'),
          (n.On_Game_Init = 'On_Game_Init'),
          (n.On_Game_Pass = 'On_Game_Pass'),
          (n.On_Game_Win = 'On_Game_Win'),
          (n.On_Game_Fail = 'On_Game_Fail'),
          (n.On_Prop_Num_Change = 'On_Prop_Num_Change'),
          (n.On_Game_Replay = 'On_Game_Replay'),
          (n.On_Change_Skin = 'On_Change_Skin'),
          (n.On_Collect_Change = 'On_Collect_Change'),
          (n.On_Item_Selected = 'On_Item_Selected'),
          (n.On_Item_Cancel = 'On_Item_Cancel'),
          (n.On_Get_Friend_Reward = 'On_Get_Friend_Reward'),
          (n.On_Game_Revive = 'On_Game_Revive'),
          (n.On_Get_Help_Reward = 'On_Get_Help_Reward'),
          (n.On_All_Skin_Unlock = 'On_All_Skin_Unlock'),
          (n.On_Bottle_Del = 'On_Bottle_Del'),
          (n.On_Engery_Change = 'On_Engery_Change'),
          (n.On_Score_Change = 'On_Score_Change'),
          (n.On_Bottle_Num_Change = 'On_Bottle_Num_Change'),
          (n.On_Game_Unlock_Bot = 'On_Game_Unlock_Bot'),
          (n.On_Pour_Water_Act_End = 'On_Pour_Water_Act_End'),
          (n.On_Pour_Water_Act_Start = 'On_Pour_Water_Act_Start'),
          (n.On_Next_Fly_End = 'On_Next_Fly_End'),
          (n.On_Bottle_Collect = 'On_Bottle_Collect'),
          (n.On_Game_Time_Add = 'On_Game_Time_Add'),
          (n.On_Game_Step_Add = 'On_Game_Step_Add'),
          (n.On_Endless_Clear_One = 'On_Endless_Clear_One'),
          (n.On_Tz_Num_Update = 'On_Tz_Num_Update'),
          (n.On_Sign_Update = 'On_Sign_Update'),
          (n.On_Bottle_Collect_End = 'On_Bottle_Collect_End'),
          (n.On_Wh_Effect = 'On_Wh_Effect'),
          (n.On_Box_Init = 'On_Box_Init'),
          (n.On_Dl_Effect = 'On_Dl_Effect'),
          (n.On_Add_Bottle_Effect = 'On_Add_Bottle_Effect'),
          (n.On_Box_Click = 'On_Box_Click'),
          (n.On_Gold_Change = 'On_Gold_Change'),
          (n.On_Guide_Next_Step = 'On_Guide_Next_Step'),
          (n.On_Game_Play = 'On_Game_Play'),
          (n.CLUB_BUTTON_CLICK = 'CLUB_BUTTON_CLICK'),
          (n.On_Video_Ad_Show = 'On_Video_Ad_Show'),
          (n.On_Rank_Data_Update = 'On_Rank_Data_Update'),
          (i = n),
          (o.default = i),
          cc._RF.pop();
      },
      {},
    ],
    ExptData: [
      function (t, e, o) {
        'use strict';
        var i, n;
        cc._RF.push(e, 'afb50ZX0v1L1KSrHtS718PP', 'ExptData'),
          (o.ExptData = void 0),
          (n = function () {
            (this.exptInfo = null), (this.expt_key = 'expt_1731482533');
          }),
          Object.defineProperty(n.prototype, 'isGuide', {
            get: function () {
              return !!this.exptInfo && 1 == this.exptInfo[this.expt_key];
            },
            enumerable: !1,
            configurable: !0,
          }),
          Object.defineProperty(n.prototype, 'isHard', {
            get: function () {
              return !!this.exptInfo && 2 == this.exptInfo[this.expt_key];
            },
            enumerable: !1,
            configurable: !0,
          }),
          (n.prototype.init = function () {
            var t;
            (this.exptInfo = (((t = {})[this.expt_key] = 1), t)),
              console.log(
                '[ \u5b9e\u9a8c\u6570\u636e\uff1a ] >',
                this.exptInfo,
              );
          }),
          (n.prototype.setType = function (t) {
            var e;
            (this.exptInfo = (((e = {})[this.expt_key] = t), e)),
              console.log(
                '[ \u5b9e\u9a8c\u6570\u636e\uff1a ] >',
                this.exptInfo,
              );
          }),
          (i = n),
          (o.ExptData = new i()),
          cc._RF.pop();
      },
      {},
    ],
    Extend: [
      function (t, e) {
        'use strict';
        cc._RF.push(e, '7233ae7Zv1F7II2SAtJadpO', 'Extend'),
          (cc.Node.prototype.uid = ''),
          (cc.Asset.prototype.uid = 0),
          (cc.ActionInterval.prototype.step = function (t) {
            var e;
            this.paused ||
              (this._firstTick && !this._goto
                ? ((this._firstTick = !1), (this._elapsed = 0))
                : (this._elapsed += t),
              (e =
                this._elapsed /
                (1.192092896e-7 < this._duration
                  ? this._duration
                  : 1.192092896e-7)),
              this.update(0 < (e = e < 1 ? e : 1) ? e : 0),
              this._repeatMethod &&
                1 < this._timesForRepeat &&
                this.isDone() &&
                (this._repeatForever || this._timesForRepeat--,
                this.startWithTarget(this.target),
                this.step(this._elapsed - this._duration)));
          }),
          (cc.Tween.prototype.pause = function () {
            this._finalAction && (this._finalAction.paused = !0);
          }),
          (cc.Tween.prototype.resume = function () {
            this._finalAction && (this._finalAction.paused = !1);
          }),
          (cc.Tween.prototype.speed = function (t) {
            this._finalAction &&
              ((this._finalAction._speedMethod = !0),
              (this._finalAction._speed = t));
          }),
          (cc.Tween.prototype.duration = function () {
            return this._finalAction && this._finalAction._duration;
          }),
          (cc.Tween.prototype.elapsed = function () {
            return this._finalAction && this._finalAction._elapsed;
          }),
          cc._RF.pop();
      },
      {},
    ],
    FailView: [
      function (t, e, o) {
        'use strict';
        var i, n, a, r, s, c, l, p, u, d, h, _, f, m, y;
        cc._RF.push(e, '1af68RA5jJNZ6FArMOtCJSI', 'FailView'),
          (r = t('./App')),
          (s = t('./BasePanel')),
          (p = t('./GameCtrl')),
          (f = t('./GameEnums')),
          (l = t('./EventTypes')),
          (d = t('./UIHelper')),
          (_ = t('./EffectMgr')),
          (i = t('./GameMgr')),
          (c = t('./ResUtils')),
          (n = (h = cc._decorator).ccclass),
          (u = h.property),
          (m = s.default),
          (y = function () {
            var t;
            return (
              ((t = (null !== m && m.apply(this, arguments)) || this).panel =
                null),
              (t.btnAgain = null),
              (t.btnHome = null),
              (t.light = null),
              t
            );
          }),
          __extends(y, m),
          (y.prototype.onEnable = function () {
            r.App.sound.playEffect(c.ResUtils.Audios.fail, f.BundleType.Game),
              i.GameMgr.showInterstitialAd();
          }),
          (y.prototype.initEvent = function () {
            this.on(this.btnAgain, this.onBtnAgainClick, this),
              this.on(this.btnHome, this.onBtnHomeClick, this);
          }),
          (y.prototype.playIn = function () {
            return __awaiter(this, void 0, void 0, function () {
              return __generator(this, function (t) {
                switch (t.label) {
                  case 0:
                    return [4, _.EffectMgr.viewOpenAnim(this.panel, 1.7)];
                  case 1:
                    return t.sent(), m.prototype.playIn.call(this), [2];
                }
              });
            });
          }),
          (y.prototype.update = function () {
            this.light.active && --this.light.angle;
          }),
          (y.prototype.onBtnAgainClick = function () {
            return __awaiter(this, void 0, void 0, function () {
              return __generator(this, function () {
                return (
                  r.App.gui.closeUI(d.UIEnum.FailView),
                  r.App.event.emit(l.default.On_Game_Replay),
                  [2]
                );
              });
            });
          }),
          (y.prototype.onBtnHomeClick = function () {
            return __awaiter(this, void 0, void 0, function () {
              return __generator(this, function (t) {
                switch (t.label) {
                  case 0:
                    return [4, r.App.gui.openUI(d.UIEnum.HomeView)];
                  case 1:
                    return (
                      t.sent(),
                      p.GameCtrl.removeGame(),
                      r.App.gui.closeUI(d.UIEnum.FailView),
                      [2]
                    );
                }
              });
            });
          }),
          __decorate([u(cc.Node)], y.prototype, 'panel', void 0),
          __decorate([u(cc.Node)], y.prototype, 'btnAgain', void 0),
          __decorate([u(cc.Node)], y.prototype, 'btnHome', void 0),
          __decorate([u(cc.Node)], y.prototype, 'light', void 0),
          (a = __decorate([n], y)),
          (o.default = a),
          cc._RF.pop();
      },
      {
        './App': 'App',
        './BasePanel': 'BasePanel',
        './EffectMgr': 'EffectMgr',
        './EventTypes': 'EventTypes',
        './GameCtrl': 'GameCtrl',
        './GameEnums': 'GameEnums',
        './GameMgr': 'GameMgr',
        './ResUtils': 'ResUtils',
        './UIHelper': 'UIHelper',
      },
    ],
    FriendData: [
      function (t, e, o) {
        'use strict';
        cc._RF.push(e, '95c1cxLaeJIeYMQJyf1EK4a', 'FriendData'),
          (o.FriendData = void 0),
          (o.FriendData = new (function () {})()),
          cc._RF.pop();
      },
      {},
    ],
    FriendItem: [
      function (t, e, o) {
        'use strict';
        var i, n, a, r, s, c, l, p;
        cc._RF.push(e, '09974kvZGRBQZNtl/SO/wbt', 'FriendItem'),
          (i = t('./App')),
          (a = t('./BaseUI')),
          (r = (c = cc._decorator).ccclass),
          (s = c.property),
          (l = a.default),
          (p = function () {
            var t;
            return (
              ((t = (null !== l && l.apply(this, arguments)) || this).nameLab =
                null),
              (t.ipLab = null),
              (t.valueLab = null),
              (t.head = null),
              (t.kg_2 = null),
              (t.btnGet = null),
              (t.hasGet = null),
              (t.defHead = null),
              (t._data = null),
              t
            );
          }),
          __extends(p, l),
          (p.prototype.onEnable = function () {
            this.on(this.btnGet, this.onBtnGetClick, this);
          }),
          (p.prototype.onDisable = function () {
            this.off(this.btnGet);
          }),
          (p.prototype.setData = function (t) {
            return __awaiter(this, void 0, void 0, function () {
              var e, o;
              return __generator(this, function (n) {
                switch (n.label) {
                  case 0:
                    return (
                      (this._data = t),
                      console.log(
                        '[ \u597d\u53cb ] >',
                        this._data,
                        t.nickname,
                        t.avatarurl,
                      ),
                      (this.nameLab.string =
                        t.nickname || '\u6e38\u5ba2' + t.uid),
                      (this.valueLab.string = '\u7b2c' + t.p_level + '\u5c42'),
                      (this.ipLab.string =
                        'IP:' + (t.ip_city || '\u672a\u77e5')),
                      (this.head.spriteFrame = null),
                      this.updateView(),
                      t.avatarurl
                        ? [
                            4,
                            i.App.res.loadRemote(t.avatarurl, { ext: '.png' }),
                          ]
                        : [3, 2]
                    );
                  case 1:
                    return (
                      (e = n.sent()),
                      t && t.avatarurl == this._data.avatarurl && e
                        ? ((o = new cc.SpriteFrame()).setTexture(e),
                          (this.head.spriteFrame = o))
                        : i.App.res.idleAsset(e),
                      [3, 3]
                    );
                  case 2:
                    (this.head.spriteFrame = this.defHead), (n.label = 3);
                  case 3:
                    return [2];
                }
              });
            });
          }),
          (p.prototype.updateView = function () {}),
          (p.prototype.onBtnGetClick = function () {}),
          __decorate([s(cc.Label)], p.prototype, 'nameLab', void 0),
          __decorate([s(cc.Label)], p.prototype, 'ipLab', void 0),
          __decorate([s(cc.Label)], p.prototype, 'valueLab', void 0),
          __decorate([s(cc.Sprite)], p.prototype, 'head', void 0),
          __decorate([s(cc.Node)], p.prototype, 'kg_2', void 0),
          __decorate([s(cc.Node)], p.prototype, 'btnGet', void 0),
          __decorate([s(cc.Node)], p.prototype, 'hasGet', void 0),
          __decorate([s(cc.SpriteFrame)], p.prototype, 'defHead', void 0),
          (n = __decorate([r], p)),
          (o.default = n),
          cc._RF.pop();
      },
      { './App': 'App', './BaseUI': 'BaseUI' },
    ],
    FriendView: [
      function (t, e, o) {
        'use strict';
        var i, n, a, r, s, c, l, p, u, d, h, _, f, m;
        cc._RF.push(e, '4e16483Ln5GAJfWV3snodrl', 'FriendView'),
          (s = t('./App')),
          (n = t('./List')),
          (i = t('./BasePanel')),
          (u = t('./NetData')),
          (d = t('./EventTypes')),
          (_ = t('./UIHelper')),
          (h = t('./EffectMgr')),
          (p = t('./FriendItem')),
          (r = (a = cc._decorator).ccclass),
          (l = a.property),
          (f = i.default),
          (m = function () {
            var t;
            return (
              ((t = (null !== f && f.apply(this, arguments)) || this).panel =
                null),
              (t.btnClose = null),
              (t.btnShare = null),
              (t.tipsNode = null),
              (t.btnTest = null),
              (t.listView = null),
              t
            );
          }),
          __extends(m, f),
          (m.prototype.playIn = function () {
            return __awaiter(this, void 0, Promise, function () {
              return __generator(this, function (t) {
                switch (t.label) {
                  case 0:
                    return [4, h.EffectMgr.viewOpenAnim(this.panel, 1)];
                  case 1:
                    return t.sent(), f.prototype.playIn.call(this), [2];
                }
              });
            });
          }),
          (m.prototype.initEvent = function () {
            this.on(this.btnClose, this.onBtnCloseClick, this),
              this.on(this.btnShare, this.onBtnShareClick, this),
              this.on(this.btnTest, this.onBtnTestClick, this),
              s.App.event.on(
                d.default.On_Get_Friend_Reward,
                this.onGetReward,
                this,
              );
          }),
          (m.prototype.onEnable = function () {
            this.updateView();
          }),
          (m.prototype.updateView = function () {
            (this.btnTest.active = 101 == window.test),
              101 == window.opacity
                ? (this.btnTest.opacity = 0)
                : (this.btnTest.opacity = 255),
              (this.listView.node.active = 0 < u.NetData.inviteList.length),
              (this.tipsNode.active = 0 == u.NetData.inviteList.length),
              (this.listView.numItems = u.NetData.inviteList.length);
          }),
          (m.prototype.onGetReward = function () {}),
          (m.prototype.onItemRender = function (t, e) {
            t.getComponent(p.default).setData(u.NetData.inviteList[e]);
          }),
          (m.prototype.onBtnCloseClick = function () {
            s.App.gui.closeUI(_.UIEnum.FriendView);
          }),
          (m.prototype.onBtnShareClick = function () {
            s.App.platform.share({});
          }),
          (m.prototype.onBtnTestClick = function () {
            u.NetData.initData(), this.updateView();
          }),
          __decorate([l(cc.Node)], m.prototype, 'panel', void 0),
          __decorate([l(cc.Node)], m.prototype, 'btnClose', void 0),
          __decorate([l(cc.Node)], m.prototype, 'btnShare', void 0),
          __decorate([l(cc.Node)], m.prototype, 'tipsNode', void 0),
          __decorate([l(cc.Node)], m.prototype, 'btnTest', void 0),
          __decorate([l(n.default)], m.prototype, 'listView', void 0),
          (c = __decorate([r], m)),
          (o.default = c),
          cc._RF.pop();
      },
      {
        './App': 'App',
        './BasePanel': 'BasePanel',
        './EffectMgr': 'EffectMgr',
        './EventTypes': 'EventTypes',
        './FriendItem': 'FriendItem',
        './List': 'List',
        './NetData': 'NetData',
        './UIHelper': 'UIHelper',
      },
    ],
    GTAssembler2D: [
      function (t, e, o) {
        'use strict';
        var i, n, a;
        cc._RF.push(e, '0df1aRFWsFJJYfB4ddHztbB', 'GTAssembler2D'),
          (n = cc.Assembler),
          (a = function () {
            var t;
            return (
              ((t =
                (null !== n && n.apply(this, arguments)) ||
                this).verticesCount = 4),
              (t.indicesCount = 6),
              (t.floatsPerVert = 5),
              (t.uvOffset = 2),
              (t.colorOffset = 4),
              (t._renderData = null),
              (t._local = null),
              t
            );
          }),
          __extends(a, n),
          (a.prototype.init = function (t) {
            n.prototype.init.call(this, t),
              (this._renderData = new cc.RenderData()),
              this._renderData.init(this),
              this.initLocal(),
              this.initData();
          }),
          Object.defineProperty(a.prototype, 'verticesFloats', {
            get: function () {
              return this.verticesCount * this.floatsPerVert;
            },
            enumerable: !1,
            configurable: !0,
          }),
          (a.prototype.initData = function () {
            this._renderData.createQuadData(
              0,
              this.verticesFloats,
              this.indicesCount,
            );
          }),
          (a.prototype.initLocal = function () {
            (this._local = []), (this._local.length = 4);
          }),
          (a.prototype.updateColor = function (t, e) {
            var o;
            if ((o = this._renderData.uintVDatas[0])) {
              e = null != e ? e : t.node.color._val;
              for (
                var i = this.floatsPerVert, n = this.colorOffset, a = o.length;
                n < a;
                n += i
              )
                o[n] = e;
            }
          }),
          (a.prototype.getBuffer = function () {
            return cc.renderer._handle._meshBuffer;
          }),
          (a.prototype.updateWorldVerts = function (t) {
            this.updateWorldVertsWebGL(t);
          }),
          (a.prototype.updateWorldVertsWebGL = function () {}),
          (a.prototype.updateWorldVertsNative = function () {
            var t, e, o, i, n, a, r, s;
            (a = this._local),
              (t = this._renderData.vDatas[0]),
              (n = this.floatsPerVert),
              (i = a[0]),
              (e = a[2]),
              (r = a[1]),
              (o = a[3]),
              (s = 0),
              (t[0] = i),
              (t[1] = r),
              (t[(s += n)] = e),
              (t[s + 1] = r),
              (t[(s += n)] = i),
              (t[s + 1] = o),
              (t[(s += n)] = e),
              (t[s + 1] = o);
          }),
          (a.prototype.fillBuffers = function (t, e) {
            var o, i, n, a, r, s, c;
            e.worldMatDirty && this.updateWorldVerts(t),
              (r = (c = this._renderData).vDatas[0]),
              (n = c.iDatas[0]),
              (o =
                (i = (s = this.getBuffer()).request(
                  this.verticesCount,
                  this.indicesCount,
                )).byteOffset >> 2),
              (a = s._vData),
              r.length + o > a.length
                ? a.set(r.subarray(0, a.length - o), o)
                : a.set(r, o);
            for (
              var l = s._iData,
                p = i.indiceOffset,
                u = i.vertexOffset,
                d = 0,
                h = n.length;
              d < h;
              d++
            )
              l[p++] = u + n[d];
          }),
          (a.prototype.packToDynamicAtlas = function (t, e) {
            var o, i;
            !e._original &&
              cc.dynamicAtlasManager &&
              e._texture.packable &&
              (o = cc.dynamicAtlasManager.insertSpriteFrame(e)) &&
              e._setDynamicAtlasFrame(o),
              (i = t._materials[0]) &&
                i.getProperty('texture') !== e._texture &&
                ((t._vertsDirty = !0), t._updateMaterial());
          }),
          (a.prototype.updateUVs = function () {
            for (
              var t = [0, 0, 1, 0, 0, 1, 1, 1],
                e = this.uvOffset,
                o = this.floatsPerVert,
                i = this._renderData.vDatas[0],
                n = 0;
              n < 4;
              n++
            ) {
              var a, r;
              (a = 2 * n), (i[(r = o * n + e)] = t[a]), (i[r + 1] = t[1 + a]);
            }
          }),
          (a.prototype.updateVerts = function (t) {
            var e, o, i, n, a, r, s, c, l;
            (i = (r = t.node).width),
              (e = r.height),
              (s = r.anchorX * i),
              (a = -(c = r.anchorY * e)),
              (l = i - s),
              (o = e - c),
              ((n = this._local)[0] = -s),
              (n[1] = a),
              (n[2] = l),
              (n[3] = o),
              this.updateWorldVerts(t);
          }),
          (a.prototype.updateRenderData = function (t) {
            t._vertsDirty &&
              (this.updateUVs(t), this.updateVerts(t), (t._vertsDirty = !1));
          }),
          (i = a),
          (o.default = i),
          cc._RF.pop();
      },
      {},
    ],
    GTAutoFitSpriteAssembler2D: [
      function (t, e, o) {
        'use strict';
        var i, n, a;
        cc._RF.push(e, 'c4446ZLLb9LI7CaQ0I6Ak2N', 'GTAutoFitSpriteAssembler2D'),
          (n = t('../_script/GTSimpleSpriteAssembler2D').default),
          (a = function () {
            var t;
            return (
              ((t = (null !== n && n.apply(this, arguments)) || this)._uv = []),
              t
            );
          }),
          __extends(a, n),
          (a.prototype.updateUVs = function (t) {
            var e, o;
            if (
              ((e = t._spriteFrame.getRect()),
              (o = t.node),
              e.width && e.height && o.width && o.height)
            ) {
              var i, a, r, s, c, l, p, u, d, h, _;
              Object.assign(this._uv, t._spriteFrame.uv),
                (a = this._uv),
                (l = e.width / o.width),
                (r = e.height / o.height),
                (u = t._spriteFrame.isRotated()),
                (p = a[0]),
                (c = a[2]),
                (s = a[1]),
                (h = a[5]),
                u && ((p = a[1]), (c = a[3]), (s = a[0]), (h = a[4])),
                r < l
                  ? ((p =
                      a[0 + (i = u ? 1 : 0)] =
                      a[4 + i] =
                        (_ = 0.5 * (p + c)) - (d = 0.5 * (c - p) * (r / l))),
                    (c = a[2 + i] = a[6 + i] = _ + d))
                  : ((s =
                      a[1 + (i = u ? -1 : 0)] =
                      a[3 + i] =
                        (_ = 0.5 * (s + h)) + (d = 0.5 * (s - h) * (l / r))),
                    (h = a[5 + i] = a[7 + i] = _ - d));
              for (
                var f = this.uvOffset,
                  m = this.floatsPerVert,
                  y = this._renderData.vDatas[0],
                  g = 0;
                g < 4;
                g++
              ) {
                var v, b;
                (v = 2 * g), (y[(b = m * g + f)] = a[v]), (y[b + 1] = a[1 + v]);
              }
            } else n.prototype.updateUVs.call(this, t);
          }),
          (i = a),
          (o.default = i),
          cc._RF.pop();
      },
      { '../_script/GTSimpleSpriteAssembler2D': 'GTSimpleSpriteAssembler2D' },
    ],
    GTSimpleSpriteAssembler2D: [
      function (t, e, o) {
        'use strict';
        var i, n, a;
        cc._RF.push(e, '97683xGOJFHe7YPEx3cmw6b', 'GTSimpleSpriteAssembler2D'),
          (n = t('./GTAssembler2D').default),
          (a = function () {
            return (null !== n && n.apply(this, arguments)) || this;
          }),
          __extends(a, n),
          (a.prototype.updateRenderData = function (t) {
            this.packToDynamicAtlas(t, t._spriteFrame),
              n.prototype.updateRenderData.call(this, t);
          }),
          (a.prototype.updateUVs = function (t) {
            for (
              var e = t._spriteFrame.uv,
                o = this.uvOffset,
                i = this.floatsPerVert,
                n = this._renderData.vDatas[0],
                a = 0;
              a < 4;
              a++
            ) {
              var r, s;
              (r = 2 * a), (n[(s = i * a + o)] = e[r]), (n[s + 1] = e[1 + r]);
            }
          }),
          (a.prototype.updateVerts = function (t) {
            var e, o, i, n, a, r, s, c, l, p, u, d, h, _, f, m, y, g, v, b;
            (v = (y = t.node).width),
              (l = y.height),
              (i = y.anchorX * v),
              (d = y.anchorY * l),
              t.trim
                ? ((o = -i), (s = -d), (_ = v - i), (f = l - d))
                : ((r = (g = t.spriteFrame)._originalSize.width),
                  (e = g._originalSize.height),
                  (n = g._rect.width),
                  (b = g._rect.height),
                  (p = (c = g._offset).x + (r - n) / 2),
                  (a = c.x - (r - n) / 2),
                  (o = p * (u = v / r) - i),
                  (s = (c.y + (e - b) / 2) * (h = l / e) - d),
                  (_ = v + a * u - i),
                  (f = l + (c.y - (e - b) / 2) * h - d)),
              ((m = this._local)[0] = o),
              (m[1] = s),
              (m[2] = _),
              (m[3] = f),
              this.updateWorldVerts(t);
          }),
          (i = a),
          (o.default = i),
          cc._RF.pop();
      },
      { './GTAssembler2D': 'GTAssembler2D' },
    ],
    GameConst: [
      function (t, e, o) {
        'use strict';
        cc._RF.push(e, 'd9ae0qBTv9K0Z2pNVxEhglP', 'GameConst'),
          (o.GameConst = void 0),
          (o.GameConst = new (function () {
            (this.colorMap = {
              1: [
                [cc.color().fromHEX('#ff0507'), cc.color().fromHEX('#ff6e6e')],
                [cc.color().fromHEX('#d8d403'), cc.color().fromHEX('#f5f378')],
                [cc.color().fromHEX('#003cd2'), cc.color().fromHEX('#4074f7')],
                [cc.color().fromHEX('#01b700'), cc.color().fromHEX('#33e833')],
                [cc.color().fromHEX('#069eb6'), cc.color().fromHEX('#2cbdd4')],
                [cc.color().fromHEX('#f6700f'), cc.color().fromHEX('#ff9a28')],
                [cc.color().fromHEX('#3e006b'), cc.color().fromHEX('#7b31b0')],
                [cc.color().fromHEX('#a8b4ce'), cc.color().fromHEX('#cfddfc')],
              ],
              2: [
                [cc.color().fromHEX('#2bd300'), cc.color().fromHEX('#81ff61')],
                [cc.color().fromHEX('#00a0ff'), cc.color().fromHEX('#8dd4ff')],
                [cc.color().fromHEX('#ff8b04'), cc.color().fromHEX('#ffac4b')],
                [cc.color().fromHEX('#eed603'), cc.color().fromHEX('#ffef66')],
                [cc.color().fromHEX('#7b00ff'), cc.color().fromHEX('#b067ff')],
                [cc.color().fromHEX('#ff3a8c'), cc.color().fromHEX('#ff7eb4')],
                [cc.color().fromHEX('#FF81B4'), cc.color().fromHEX('#FFAFD1')],
              ],
              3: [
                [cc.color().fromHEX('#aedd1f'), cc.color().fromHEX('#e0ff81')],
                [cc.color().fromHEX('#40c2ff'), cc.color().fromHEX('#a9e4ff')],
                [cc.color().fromHEX('#43d9b4'), cc.color().fromHEX('#a4eddb')],
                [cc.color().fromHEX('#f3da00'), cc.color().fromHEX('#ffef66')],
                [cc.color().fromHEX('#a36dff'), cc.color().fromHEX('#d3b9ff')],
                [cc.color().fromHEX('#ed6190'), cc.color().fromHEX('#ff92c0')],
                [cc.color().fromHEX('#FF6AAC'), cc.color().fromHEX('#FFA3CC')],
              ],
            }),
              (this.BottleWidth = 97),
              (this.Half_BottleWidth = 0.5 * this.BottleWidth),
              (this.BottleHeight = 240),
              (this.Half_BottleHeight = 0.5 * this.BottleHeight),
              (this.GridHeight = 46),
              (this.BottleAngles = [89.5, 78, 66, 54, 42]),
              (this.WaterMaxY = [0, 46, 92, 138, 184, 230]),
              (this.b1_points = [
                cc.v3(-21, 160),
                cc.v3(-21, 13),
                cc.v3(-17, 6),
                cc.v3(-8, 0),
                cc.v3(8, 0),
                cc.v3(15, 4),
                cc.v3(21, 13),
                cc.v3(21, 160),
              ]),
              (this.waterSizes = [
                { angle: 0, height: 40 },
                { angle: 45, height: 50 },
                { angle: 60, height: 70 },
                { angle: 75, height: 100 },
                { angle: 89, height: 100 },
              ]);
          })()),
          cc._RF.pop();
      },
      {},
    ],
    GameCtrl: [
      function (t, e, o) {
        'use strict';
        cc._RF.push(e, '5c316UAhKJAR5ed7U0Bbmgq', 'GameCtrl'),
          (o.GameCtrl = void 0);
        var i = t('./App'),
          n = t('./UIMgr'),
          a = t('./ArrayUtil'),
          r = t('./MathUtil'),
          s = t('./ConfData'),
          c = t('./GameSetting'),
          l = t('./NetData'),
          p = t('./SkinData'),
          u = t('./UserData'),
          d = t('./GameConst'),
          h = t('./GameEnums'),
          _ = t('./TrackEnums'),
          f = t('./EventTypes'),
          m = t('./UIHelper'),
          y = t('./GameMgr'),
          g = t('./ResUtils'),
          v = t('./BottleItem'),
          b = t('./BottleItem2'),
          w = t('./GameView2'),
          A = (function () {
            function t() {
              (this._gridLayer = null),
                (this._lockLayer = null),
                (this._pourLayer = null),
                (this._bottleLayer0 = null),
                (this._shadownLayer = null),
                (this._bottleLayer1 = null),
                (this._bottleLayer2 = null),
                (this._finishLayer = null),
                (this._upEffectLayer = null),
                (this._downEffectLayer = null),
                (this._btContent = null),
                (this.stepCount = 0),
                (this.isDark = !1),
                (this.isRefresh = !1),
                (this.items = []),
                (this.nextBt = null),
                (this._mode = h.GameMode.Course),
                (this.score = 0),
                (this.maxScore = 0),
                (this.delNum = 0),
                (this._revive_times = 3),
                (this._playTime = 0),
                (this._maxTime = 0),
                (this._isPause = !0),
                (this.colorList = null),
                (this.awaitList = []),
                (this.nextBot_pos = cc.v3(0, 52)),
                (this.nextBot_scale = 0.4),
                (this.useStep = 0),
                (this.boxList = []),
                (this.levelData = null),
                (this.prevStep = null),
                (this.bottleList = []),
                (this.gameNode = null),
                (this.checkDelay = 0),
                (this.winDelay = 0),
                (this.curr_item = null);
            }
            return (
              Object.defineProperty(t.prototype, 'mode', {
                get: function () {
                  return this._mode;
                },
                set: function (t) {
                  this._mode = t;
                },
                enumerable: !1,
                configurable: !0,
              }),
              Object.defineProperty(t.prototype, 'revive_times', {
                get: function () {
                  return this._revive_times;
                },
                enumerable: !1,
                configurable: !0,
              }),
              Object.defineProperty(t.prototype, 'playTime', {
                get: function () {
                  return this._playTime < 0 ? 0 : this._playTime;
                },
                enumerable: !1,
                configurable: !0,
              }),
              Object.defineProperty(t.prototype, 'maxTime', {
                get: function () {
                  return this._maxTime;
                },
                enumerable: !1,
                configurable: !0,
              }),
              Object.defineProperty(t.prototype, 'isPause', {
                get: function () {
                  return this._isPause;
                },
                set: function (t) {
                  (this._isPause = t),
                    console.warn('\u72b6\u6001', this._isPause, Date.now());
                },
                enumerable: !1,
                configurable: !0,
              }),
              (t.prototype.addGame = function () {
                var t;
                return __awaiter(this, void 0, void 0, function () {
                  var e, o, a, r, c, l;
                  return __generator(this, function (u) {
                    switch (u.label) {
                      case 0:
                        return (
                          (o = e = null),
                          this._mode != h.GameMode.Course
                            ? [3, 2]
                            : (null != (t = i.App.track) &&
                                t.trackEvent(_.TrackEnums.course),
                              [
                                4,
                                i.App.res.getNodeFromPool(
                                  'views/games/CourseView',
                                  h.BundleType.Game,
                                ),
                              ])
                        );
                      case 1:
                        return (e = u.sent()), [3, 7];
                      case 2:
                        return this._mode != h.GameMode.Level
                          ? [3, 5]
                          : ((a = p.SkinData.theme_skin),
                            (r = s.ConfData.skinConf.getSkinVo(2, a)),
                            [
                              4,
                              i.App.res.getSpriteFrame(
                                'res/skin/' + r.bg,
                                h.BundleType.Game,
                              ),
                            ]);
                      case 3:
                        return (
                          (o = u.sent()),
                          [
                            4,
                            i.App.res.getNodeFromPool(
                              'views/games/GameView2',
                              h.BundleType.Game,
                            ),
                          ]
                        );
                      case 4:
                        return (
                          (e = u.sent()),
                          (c = e.getComponent(w.default)) && c.setBg(o),
                          [3, 7]
                        );
                      case 5:
                        return [
                          4,
                          i.App.res.getNodeFromPool(
                            'views/games/GameView1',
                            h.BundleType.Game,
                          ),
                        ];
                      case 6:
                        (e = u.sent()), (u.label = 7);
                      case 7:
                        return (
                          this.removeGame(),
                          (this.gameNode = e),
                          (l = i.App.gui.getLayer(n.LayerEnum.GAME_LAYER)),
                          (this.gameNode.parent = l),
                          this.initEvent(),
                          [2]
                        );
                    }
                  });
                });
              }),
              (t.prototype.initEvent = function () {
                i.App.event.targetOff(this),
                  i.App.event.on(f.default.On_Wh_Effect, this.onWhEffect, this),
                  i.App.event.on(f.default.On_Dl_Effect, this.onDlEffect, this),
                  i.App.event.on(
                    f.default.On_Add_Bottle_Effect,
                    this.onAddBottleEffect,
                    this,
                  );
              }),
              (t.prototype.removeGame = function () {
                this.gameNode && i.App.res.putNodeToPool(this.gameNode);
              }),
              (t.prototype.onWhEffect = function (t) {
                return __awaiter(this, void 0, void 0, function () {
                  var e;
                  return __generator(this, function (o) {
                    switch (o.label) {
                      case 0:
                        return [
                          4,
                          i.App.res.getNodeFromPool(
                            g.ResUtils.prefabs.WhEff,
                            h.BundleType.Game,
                          ),
                        ];
                      case 1:
                        return (
                          ((e = o.sent()).parent = this._upEffectLayer),
                          (e.position = t),
                          [2]
                        );
                    }
                  });
                });
              }),
              (t.prototype.onDlEffect = function (t) {
                return __awaiter(this, void 0, void 0, function () {
                  var e, o;
                  return __generator(this, function (n) {
                    switch (n.label) {
                      case 0:
                        return [
                          4,
                          i.App.res.getNodeFromPool(
                            g.ResUtils.prefabs.DlEff,
                            h.BundleType.Game,
                          ),
                        ];
                      case 1:
                        return (
                          ((e = n.sent()).parent = this._upEffectLayer),
                          (e.position = t),
                          [
                            4,
                            i.App.res.getNodeFromPool(
                              g.ResUtils.prefabs.DlEff2,
                              h.BundleType.Game,
                            ),
                          ]
                        );
                      case 2:
                        return (
                          ((o = n.sent()).parent = this._downEffectLayer),
                          (o.position = t),
                          [2]
                        );
                    }
                  });
                });
              }),
              (t.prototype.onAddBottleEffect = function (t) {
                return __awaiter(this, void 0, void 0, function () {
                  var e;
                  return __generator(this, function (o) {
                    switch (o.label) {
                      case 0:
                        return [
                          4,
                          i.App.res.getNodeFromPool(
                            g.ResUtils.prefabs.AppearEff0,
                            h.BundleType.Game,
                          ),
                        ];
                      case 1:
                        return (
                          ((e = o.sent()).parent = this._downEffectLayer),
                          (e.position = t),
                          [
                            4,
                            i.App.res.getNodeFromPool(
                              g.ResUtils.prefabs.AppearEff1,
                              h.BundleType.Game,
                            ),
                          ]
                        );
                      case 2:
                        return (
                          ((e = o.sent()).parent = this._upEffectLayer),
                          (e.position = t),
                          [2]
                        );
                    }
                  });
                });
              }),
              (t.prototype.init = function (t) {
                (this._gridLayer = t.gridLayer),
                  (this._lockLayer = t.lockLayer),
                  (this._pourLayer = t.pourLayer),
                  (this._bottleLayer0 = t.bottleLayer0),
                  (this._bottleLayer1 = t.bottleLayer1),
                  (this._shadownLayer = t.shadownLayer),
                  (this._bottleLayer2 = t.bottleLayer2),
                  (this._finishLayer = t.finishLayer),
                  (this._upEffectLayer = t.upEffectLayer),
                  (this._downEffectLayer = t.downEffectLayer),
                  (this._btContent = t.btContent);
              }),
              (t.prototype.clearDl = function () {
                for (
                  var t,
                    e,
                    o,
                    n =
                      (null == (t = this._upEffectLayer)
                        ? void 0
                        : t.children.length) - 1;
                  0 <= n;
                  n--
                )
                  'dlEff' == (o = this._upEffectLayer.children[n]).name &&
                    i.App.res.putNodeToPool(o);
                for (
                  n =
                    (null == (e = this._downEffectLayer)
                      ? void 0
                      : e.children.length) - 1;
                  0 <= n;
                  n--
                )
                  'dlEff2' == (o = this._downEffectLayer.children[n]).name &&
                    i.App.res.putNodeToPool(o);
              }),
              (t.prototype.playGame = function () {
                var t, e, o, n, a, r, s, l;
                return __awaiter(this, void 0, void 0, function () {
                  var p;
                  return __generator(this, function (d) {
                    switch (d.label) {
                      case 0:
                        return (
                          (this.score = 0),
                          (this.winDelay = 0),
                          (this.isDark = !1),
                          (this.isRefresh = !1),
                          (this.awaitList.length = 0),
                          (this.isPause = !0),
                          (this._revive_times = c.GameSetting.revive_times),
                          (this.stepCount = Number.MAX_SAFE_INTEGER),
                          this._mode == h.GameMode.Normal &&
                            (this.stepCount = c.GameSetting.pt_conf.step_count),
                          (this.prevStep = null),
                          this.clearGame(),
                          (this._lockLayer.active = !0),
                          this._mode == h.GameMode.Normal
                            ? (null != (t = i.App.track) &&
                                t.trackEvent(_.TrackEnums.tz),
                              null != (e = i.App.track) &&
                                e.trackEvent('tz_play_' + u.UserData.ptLv),
                              null != (o = i.App.track) &&
                                o.onStart(1e3 + u.UserData.ptLv))
                            : this._mode == h.GameMode.Level
                              ? (null != (n = i.App.track) &&
                                  n.trackEvent(_.TrackEnums.cg),
                                null != (a = i.App.track) &&
                                  a.trackEvent('cg_play_' + u.UserData.cgLv),
                                null != (r = i.App.track) &&
                                  r.onStart(u.UserData.cgLv))
                              : this._mode == h.GameMode.Endless &&
                                (null != (s = i.App.track) &&
                                  s.trackEvent('wj_play'),
                                null != (l = i.App.track) && l.onStart(1e4)),
                          (this.bottleList.length = 0),
                          [4, this.initGame()]
                        );
                      case 1:
                        return (
                          d.sent(),
                          (this._lockLayer.active = !1),
                          (this.isPause = !1),
                          (p = h.GameMode.Course != this._mode),
                          (p =
                            (h.GameMode.Level != this._mode ||
                              1 == c.GameSetting.cg_show_bottle) &&
                            p) &&
                            i.App.gui.openUI(m.UIEnum.PropItemView, {
                              propType: h.PropItemType.Bottle,
                            }),
                          [2]
                        );
                    }
                  });
                });
              }),
              (t.prototype.onUpdate = function (t) {
                var e, o;
                this._isPause ||
                  -1 == this._playTime ||
                  ((o = this._playTime),
                  (this._playTime -= t),
                  60 <= o &&
                    this._playTime < 60 &&
                    (this.gamePause(),
                    i.App.gui.openUI(m.UIEnum.PropItemView, {
                      propType: h.PropItemType.Time,
                    })),
                  0 < this.awaitList.length &&
                    this._btContent &&
                    null != (e = this.nextBt) &&
                    e.isReady &&
                    this.flyIn(this.awaitList.shift()),
                  0 < this.winDelay
                    ? ((this.winDelay -= t),
                      this.winDelay <= 0 &&
                        ((this._lockLayer.active = !1),
                        i.App.gui.closeUI(m.UIEnum.ReviveView),
                        this.gameWin()))
                    : this._mode != h.GameMode.Level &&
                      (0 < this.checkDelay
                        ? (this.checkDelay -= t)
                        : ((this.checkDelay = 0.5), this.endCheck())));
              }),
              (t.prototype.getWaterNums = function () {
                for (var t = new Map(), e = 0; e < this.items.length; e++) {
                  var o = this.items[e];
                  if (!o.isFull() && !o.isSteel())
                    for (var i = o.getColors(), n = 0; n < i.length; n++) {
                      var a = i[n],
                        r = t.get(a) || 0;
                      t.set(a, r + 1);
                    }
                }
                return t;
              }),
              (t.prototype.endCheck = function () {
                !(this._playTime <= 0 || this.stepCount <= 0) || this.winCheck()
                  ? this.winCheck()
                  : this.tryRevive(this._playTime <= 0 ? 1 : 2);
              }),
              (t.prototype.winCheck = function () {
                var t;
                return (
                  this._mode != h.GameMode.Endless &&
                  !(
                    this._mode == h.GameMode.Normal && 0 < this.colorList.length
                  ) &&
                  (this._mode == h.GameMode.Level
                    ? (this.delNum >= this.maxScore
                        ? ((this._lockLayer.active = !0), (this.winDelay = 0.5))
                        : this.items.every(function (t) {
                            var e;
                            return (
                              !t.node.active ||
                              0 ==
                                (null == (e = t.getColors())
                                  ? void 0
                                  : e.length)
                            );
                          }) &&
                          (console.log(
                            '\u6240\u6709\u74f6\u5b50\u6ca1\u6c34\u5566',
                          ),
                          (this._lockLayer.active = !0),
                          (this.winDelay = 0.7),
                          (this.delNum = this.maxScore)),
                      this.delNum >= this.maxScore)
                    : ((t = this.score >= this.maxScore) &&
                        ((this._lockLayer.active = !0), (this.winDelay = 0.5)),
                      t))
                );
              }),
              (t.prototype.initGame = function () {
                return __awaiter(this, void 0, void 0, function () {
                  var t,
                    e,
                    o,
                    n,
                    a,
                    r,
                    s,
                    l,
                    p,
                    u,
                    _,
                    m,
                    g,
                    v,
                    b,
                    w,
                    A,
                    L,
                    S,
                    C;
                  return __generator(this, function (E) {
                    switch (E.label) {
                      case 0:
                        if (
                          ((this._playTime = Number.MAX_SAFE_INTEGER),
                          this._mode == h.GameMode.Normal
                            ? (this._playTime = c.GameSetting.pt_conf.sec)
                            : this._mode == h.GameMode.Endless
                              ? (this._playTime = c.GameSetting.wj_conf.sec)
                              : this._mode == h.GameMode.Level &&
                                ((this.levelData = this.calcCgLeveData()),
                                (this._playTime = Number.MAX_SAFE_INTEGER),
                                (this.isDark = !1)),
                          y.GameMgr.isGm &&
                            (this._playTime = Number.MAX_SAFE_INTEGER),
                          (this._maxTime = this._playTime),
                          (this.colorList = this.initData()),
                          this._btContent && (this._btContent.active = !1),
                          (this._finishLayer.active =
                            this._mode == h.GameMode.Level),
                          this._mode != h.GameMode.Course)
                        )
                          return [3, 5];
                        (p = 1),
                          (n = -165),
                          (this._gridLayer.position = cc.v3(n * p, 130)),
                          (this._pourLayer.position = cc.v3(n * p, 130)),
                          (this._bottleLayer0.position = cc.v3(n * p, 130)),
                          (this._bottleLayer1.position = cc.v3(n * p, 130)),
                          (this._bottleLayer2.position = cc.v3(n * p, 130)),
                          (this._shadownLayer.position = cc.v3(n * p, 130)),
                          (this._finishLayer.position = cc.v3(n * p, 130)),
                          (this._gridLayer.scale = p),
                          (this._pourLayer.scale = p),
                          (this._bottleLayer0.scale = p),
                          (this._bottleLayer1.scale = p),
                          (this._bottleLayer2.scale = p),
                          (this._shadownLayer.scale = p),
                          (this._finishLayer.scale = p),
                          (t = c.GameSetting.new_map[0]),
                          (v = 0),
                          (E.label = 1);
                      case 1:
                        return v < 4
                          ? [4, this.addItem(v, t[v], cc.v3(110 * v, 0))]
                          : [3, 4];
                      case 2:
                        E.sent(), (E.label = 3);
                      case 3:
                        return v++, [3, 1];
                      case 4:
                        return [3, 17];
                      case 5:
                        if (this._mode != h.GameMode.Level) return [3, 10];
                        (p = 1),
                          (this._gridLayer.position = cc.v3(0, 0)),
                          (this._pourLayer.position = cc.v3(0, 0)),
                          (this._bottleLayer0.position = cc.v3(0, 0)),
                          (this._bottleLayer1.position = cc.v3(0, 0)),
                          (this._bottleLayer2.position = cc.v3(0, 0)),
                          (this._shadownLayer.position = cc.v3(0, 0)),
                          (this._finishLayer.position = cc.v3(0, 0)),
                          (this._gridLayer.scale = p),
                          (this._pourLayer.scale = p),
                          (this._bottleLayer0.scale = p),
                          (this._bottleLayer1.scale = p),
                          (this._bottleLayer2.scale = p),
                          (this._shadownLayer.scale = p),
                          (this._finishLayer.scale = p),
                          (e = this.levelData),
                          (v = 0),
                          (E.label = 6);
                      case 6:
                        return v < e.length
                          ? ((o = e[v]),
                            [
                              4,
                              this.addItem(
                                v,
                                1 == o.isVideo ? 2 : 1,
                                cc.v3(o.position.x, o.position.y + 130),
                                o.whNums,
                                o.isLock
                                  ? { color: o.lockColor, num: o.lockNums }
                                  : null,
                              ),
                            ])
                          : [3, 9];
                      case 7:
                        E.sent(), (E.label = 8);
                      case 8:
                        return v++, [3, 6];
                      case 9:
                        return (
                          console.log(this._gridLayer.getBoundingBox()), [3, 17]
                        );
                      case 10:
                        (n = -335),
                          (a = 55),
                          (r = c.GameSetting.challenge_map),
                          (s = 0),
                          r.forEach(function (t) {
                            s = Math.max(s, t.length);
                          }),
                          (l = 20),
                          (p = 0.6041666666666666),
                          (u = d.GameConst.BottleWidth * s + l * (s - 1)),
                          (_ =
                            d.GameConst.BottleHeight * r.length +
                            a * (r.length - 1)),
                          console.log('[ \u7f29\u653e ] >', p),
                          (m = 0.5 * _ * (p = 1.4 < p ? 1.4 : p)),
                          (n = 0.5 * -u * p),
                          (this._gridLayer.position = cc.v3(n, m)),
                          (this._pourLayer.position = cc.v3(n, m)),
                          (this._bottleLayer0.position = cc.v3(n, m)),
                          (this._bottleLayer1.position = cc.v3(n, m)),
                          (this._bottleLayer2.position = cc.v3(n, m)),
                          (this._shadownLayer.position = cc.v3(n, m)),
                          (this._finishLayer.position = cc.v3(n, m)),
                          (this._gridLayer.scale = p),
                          (this._pourLayer.scale = p),
                          (this._bottleLayer0.scale = p),
                          (this._bottleLayer1.scale = p),
                          (this._bottleLayer2.scale = p),
                          (this._shadownLayer.scale = p),
                          (this._finishLayer.scale = p),
                          (v = g = 0),
                          (E.label = 11);
                      case 11:
                        if (!(v < r.length)) return [3, 16];
                        (b = r[v]),
                          (w = -(d.GameConst.BottleHeight + a) * v),
                          b.length,
                          (A = d.GameConst.Half_BottleWidth),
                          (L = 0),
                          (E.label = 12);
                      case 12:
                        return L < b.length
                          ? [
                              4,
                              this.addItem(
                                g,
                                b[L],
                                cc.v3(A + (d.GameConst.BottleWidth + l) * L, w),
                              ),
                            ]
                          : [3, 15];
                      case 13:
                        E.sent(), (g += 1), (E.label = 14);
                      case 14:
                        return L++, [3, 12];
                      case 15:
                        return v++, [3, 11];
                      case 16:
                        this._btContent &&
                          ((S = this.items[this.items.length - 1]),
                          (C = this.items[this.items.length - 9]),
                          this._btContent) &&
                          (this._btContent.position = cc.v3(
                            this._gridLayer.x + C.node.x * p,
                            this._gridLayer.y + (S.node.y - 110) * p,
                          )),
                          console.log('[ colors ] >', this.colorList),
                          (E.label = 17);
                      case 17:
                        return this._mode == h.GameMode.Course ||
                          this._mode == h.GameMode.Level
                          ? [3, 19]
                          : [4, this.addNext()];
                      case 18:
                        E.sent(), this.showNextBot(), (E.label = 19);
                      case 19:
                        return (
                          this._mode == h.GameMode.Normal &&
                            c.GameSetting.steel_conf.length,
                          i.App.event.emit(f.default.On_Game_Init),
                          [2]
                        );
                    }
                  });
                });
              }),
              (t.prototype.initData = function () {
                var t, e, o, i, n;
                return this._mode == h.GameMode.Course
                  ? ((t = []),
                    a.default.shuffle((e = [3, 5])),
                    (t[0] = [(o = e[0]), (i = e[1]), o]),
                    (t[1] = [i, i]),
                    (t[2] = [o, i, o]),
                    (this.maxScore = 2),
                    t)
                  : ((n = null),
                    this._mode == h.GameMode.Normal
                      ? (n = c.GameSetting.pt_conf.colors)
                      : this._mode == h.GameMode.Endless
                        ? (n = c.GameSetting.wj_conf.colors)
                        : this._mode == h.GameMode.Level &&
                          (n = c.GameSetting.level_conf.colors),
                    this._mode == h.GameMode.Level
                      ? this.calcLevelBottleMap()
                      : this.calcBottleMap(n));
              }),
              (t.prototype.calcCgLeveData = function () {
                var t = u.UserData.cgLv,
                  e = 0;
                return (
                  t > s.ConfData.levelConf.cg_max_level
                    ? u.UserData.recordLv == t
                      ? (e = u.UserData.recordRealLv)
                      : ((e = r.default.randomRangeInt(
                          4,
                          s.ConfData.levelConf.cg_max_level + 1,
                        )),
                        u.UserData.setLvRecord(t, e))
                    : (e = t),
                  s.ConfData.levelConf.getCgConf(e)
                );
              }),
              (t.prototype.updateSteel = function () {}),
              (t.prototype.addNext = function () {
                return __awaiter(this, void 0, void 0, function () {
                  var t;
                  return __generator(this, function (e) {
                    switch (e.label) {
                      case 0:
                        return [
                          4,
                          i.App.res.getNodeFromPool(
                            'prefabs/next_bottle1',
                            h.BundleType.Game,
                          ),
                        ];
                      case 1:
                        return (
                          ((t = e.sent()).parent = this._btContent),
                          (t.position = this.nextBot_pos),
                          (t.scale = this.nextBot_scale),
                          (this.nextBt = t.getComponent(b.default)),
                          [2]
                        );
                    }
                  });
                });
              }),
              (t.prototype.calcLevelBottleMap = function () {
                for (
                  var t = [], e = [], o = this.levelData, n = [], r = 0;
                  r < o.length;
                  r++
                ) {
                  var s = o[r],
                    c = a.default.clone(s.colors);
                  if ((t.push(c), 0 < s.lockColor))
                    for (var l = 0; l < s.lockNums; l++) n.push(s.lockColor);
                  for (var p = 0, d = c; p < d.length; p++) {
                    var h = d[p];
                    e[h] || (e[h] = []), e[h].push(h);
                  }
                }
                var _ = 0;
                for (r = this.boxList.length = 0; r < e.length; r++) {
                  var m = e[r];
                  if (0 < (null == m ? void 0 : m.length)) {
                    m.length % 4 != 0 &&
                      console.error('[ \u6570\u91cf\u4e0d\u5bf9 ] >', m);
                    for (var y = m.length / 4, g = 0; g < y; g++)
                      this.boxList.push(m[0]);
                    _ += y;
                  }
                }
                if (1 != u.UserData.cgLv) {
                  if ((a.default.shuffle(this.boxList), 0 < n.length)) {
                    var v = a.default.clone(this.boxList);
                    for (a.default.shuffle(n); 0 < n.length; ) {
                      var b = n.pop(),
                        w = this.boxList.lastIndexOf(b);
                      -1 != w && this.boxList.splice(w, 1),
                        this.boxList.unshift(b);
                    }
                    this.compareArr(this.boxList, v) ||
                      (console.error('\u9519\u8bef', this.boxList, v),
                      (this.boxList = v));
                  }
                } else this.boxList = [6, 1, 2];
                return (
                  (this.maxScore = _),
                  (this.delNum = 0),
                  i.App.event.emit(f.default.On_Box_Init),
                  t
                );
              }),
              (t.prototype.compareArr = function (t, e) {
                if (!t || !e || t.length !== e.length) return !1;
                for (var o = {}, i = {}, n = 0; n < t.length; n++)
                  o[t[n]] = (o[t[n]] || 0) + 1;
                for (n = 0; n < e.length; n++) i[e[n]] = (i[e[n]] || 0) + 1;
                var a = Object.keys(o);
                if (a.length !== Object.keys(i).length) return !1;
                for (n = 0; n < a.length; n++) {
                  var r = a[n];
                  if (o[r] !== i[r]) return !1;
                }
                return !0;
              }),
              (t.prototype.calcBottleMap = function (t) {
                var e = [],
                  o = [],
                  i = 0;
                a.default.shuffle(t);
                for (var n = 0, s = t.length; n < s; n++)
                  !(function (e) {
                    (i += t[e]),
                      (o[e] = Array.from({ length: 4 * t[e] }, function () {
                        return e + 1;
                      }));
                  })(n);
                this._mode == h.GameMode.Endless
                  ? (this.maxScore = Number.MAX_SAFE_INTEGER)
                  : (this.maxScore = i);
                var c = function (t, e, i) {
                  var n = o[e];
                  if (n)
                    for (var a = Math.min(i, n.length), r = 0; r < a; r++)
                      t.push(n.pop());
                };
                o.sort(function (t, e) {
                  return e.length - t.length;
                });
                var l = [];
                for (n = 0; n < i; n++)
                  !(function () {
                    var t = Math.min(4, o.length),
                      i = [];
                    if (1 == o.length) {
                      c(i, 0, 4);
                      var n = i[0];
                      console.warn('[ \u524d\u9762\u66ff\u6362 ] >');
                      for (var s = !1, p = 0; p < e.length; p++) {
                        a.default.clone(e[p], l);
                        for (var u = 0; u < 4; u++) {
                          var d = l[u];
                          if (d != n) {
                            if (
                              ((l[u] = n),
                              !l.every(function (t) {
                                return t == n;
                              }))
                            ) {
                              (i[0] = e[p][u]), (e[p][u] = n), (s = !0);
                              break;
                            }
                            l[u] = d;
                          }
                        }
                        if (s) break;
                      }
                    } else {
                      switch (r.default.randomRangeInt(0, t)) {
                        case 0:
                          c(i, 0, 3), c(i, 1, 1);
                          break;
                        case 1:
                          c(i, 0, 2), c(i, 1, 2);
                          break;
                        case 2:
                          c(i, 0, 2), c(i, 1, 1), c(i, 2, 1);
                          break;
                        case 3:
                          c(i, 0, 1), c(i, 1, 1), c(i, 2, 1), c(i, 3, 1);
                      }
                      for (; i.length < 4; )
                        for (
                          p = o.length - 1;
                          0 <= p &&
                          (0 < o[p].length && c(i, p, 1), 4 != i.length);
                          p--
                        );
                    }
                    for (
                      a.default.shuffle(i),
                        e.push(i),
                        o.sort(function (t, e) {
                          return e.length - t.length;
                        }),
                        4 < i.length && console.error('[ temp ] >', i),
                        p = o.length - 1;
                      0 <= p;
                      p--
                    )
                      0 == o[p].length && o.pop();
                  })();
                return a.default.shuffle(e), e;
              }),
              (t.prototype.addItem = function (t, e, o, n, a) {
                var r;
                return (
                  void 0 === n && (n = 0),
                  __awaiter(this, void 0, void 0, function () {
                    var s, c, l;
                    return __generator(this, function (p) {
                      switch (p.label) {
                        case 0:
                          return [
                            4,
                            i.App.res.getNodeFromPool(
                              'prefabs/bottle_item1',
                              h.BundleType.Game,
                            ),
                          ];
                        case 1:
                          return (
                            (s = p.sent()),
                            (c = s.getComponent(v.default)),
                            this.items.push(c),
                            (l =
                              this._mode == h.GameMode.Level
                                ? this.colorList[t]
                                : 1 == e
                                  ? null == (r = this.getNextColors())
                                    ? void 0
                                    : r.colors
                                  : []),
                            (c.node.name = 'item_' + t),
                            (c.node.position = o),
                            (c.node.parent = this._gridLayer),
                            (c.shadown.parent = this._shadownLayer),
                            (c.shadown.position = o.add(cc.v3(30, -190))),
                            c.setData(l, e, n, a),
                            this.addToGridLayer(c, o),
                            [2]
                          );
                      }
                    });
                  })
                );
              }),
              (t.prototype.getNextColors = function () {
                var t = this.colorList.length,
                  e = this.colorList.shift() || [];
                if (
                  this._mode == h.GameMode.Endless &&
                  1 == this.colorList.length
                )
                  for (
                    var o = this.calcBottleMap(c.GameSetting.wj_conf.colors),
                      i = 0;
                    i < o.length;
                    i++
                  )
                    this.colorList.push(o[i]);
                return { colors: e, nums: t };
              }),
              (t.prototype.delItem = function () {}),
              (t.prototype.getItemPos = function () {
                return null;
              }),
              
              (t.prototype.getColor = function (t) {
                var e = p.SkinData.color_skin,
                  o = d.GameConst.colorMap[e];
                return o
                  ? (o[t - 1] || console.error('error', t), o[t - 1])
                  : [cc.Color.WHITE, cc.Color.WHITE];
              }),
              (t.prototype.onBottleDel = function (t) {
                this.awaitList.push(t);
              }),
              (t.prototype.flyIn = function (t) {
                return __awaiter(this, void 0, void 0, function () {
                  var e, o;
                  return __generator(this, function (n) {
                    switch (n.label) {
                      case 0:
                        return 0 == (e = this.nextBt.getColors()).length
                          ? [2]
                          : ((o = this._btContent.convertToNodeSpaceAR(
                              t.wpos.sub(cc.v3(0, 78.54166666666666)),
                            )),
                            (this.nextBt.node.scale = 0.6041666666666666),
                            [4, this.nextBt.moveTo(o)]);
                      case 1:
                        return (
                          n.sent(),
                          t.item.setData(e, 1),
                          (this.nextBt.node.position = this.nextBot_pos),
                          (this.nextBt.node.scale = this.nextBot_scale),
                          this._mode != h.GameMode.Course &&
                            this._mode != h.GameMode.Level &&
                            this.showNextBot(),
                          i.App.event.emit(f.default.On_Next_Fly_End),
                          [2]
                        );
                    }
                  });
                });
              }),
              (t.prototype.onUnlockBot = function () {
                for (var t = this._gridLayer.childrenCount - 1; 0 <= t; t--) {
                  var e = this._gridLayer.children[t].getComponent(v.default);
                  if (2 == e.status) {
                    e.unlock();
                    break;
                  }
                }
              }),
              (t.prototype.onShuffle = function () {
                return __awaiter(this, void 0, void 0, function () {
                  var t, e, o, n;
                  return __generator(this, function (a) {
                    switch (a.label) {
                      case 0:
                        return (
                          (this.prevStep = null),
                          (this.isRefresh = !0),
                          this.curr_item
                            ? [4, this.curr_item.setSelected(!1)]
                            : [3, 2]
                        );
                      case 1:
                        a.sent(),
                          this.addToGridLayer(
                            this.curr_item,
                            this.curr_item.node.position,
                          ),
                          (this.curr_item = null),
                          (a.label = 2);
                      case 2:
                        for (t = 0; t < this._gridLayer.childrenCount; t++)
                          (e = this._gridLayer.children[t]).active &&
                            ((o = e.getComponent(v.default)),
                            (n = o.getColors()),
                            !o.isFull()) &&
                            !o.isEmpty() &&
                            !o.isSteel() &&
                            1 < n.length &&
                            i.App.event.emit(
                              f.default.On_Dl_Effect,
                              o.node.position,
                            );
                        return [2];
                    }
                  });
                });
              }),
              (t.prototype.onRestore = function () {
                var t, e;
                return __awaiter(this, void 0, void 0, function () {
                  return __generator(this, function (o) {
                    switch (o.label) {
                      case 0:
                        return this.prevStep
                          ? this.curr_item
                            ? [4, this.curr_item.setSelected(!1)]
                            : [3, 2]
                          : [3, 3];
                      case 1:
                        o.sent(),
                          this.addToGridLayer(
                            this.curr_item,
                            this.curr_item.node.position,
                          ),
                          (this.curr_item = null),
                          (o.label = 2);
                      case 2:
                        null != (t = this.prevStep.src) &&
                          t.item.setColors(this.prevStep.src.colors),
                          null != (e = this.prevStep.tar) &&
                            e.item.setColors(this.prevStep.tar.colors),
                          (this.prevStep = null),
                          (o.label = 3);
                      case 3:
                        return [2];
                    }
                  });
                });
              }),
              (t.prototype.onAddEmptyBottle = function () {
                var t;
                return __awaiter(this, void 0, void 0, function () {
                  var e;
                  return __generator(this, function () {
                    return (
                      0 < this.bottleList.length &&
                        (null != (t = i.App.track) &&
                          t.onRunning(
                            u.UserData.cgLv,
                            '\u7a7a\u74f6\u9053\u5177',
                          ),
                        (e = this.bottleList.shift()).setData([], 0),
                        i.App.event.emit(
                          f.default.On_Add_Bottle_Effect,
                          e.node.position,
                        )),
                      [2]
                    );
                  });
                });
              }),
              (t.prototype.onRefresh = function () {
                for (
                  var t,
                    e = this,
                    o = [],
                    i = new Map(),
                    n = function (t) {
                      for (var e = 0; e < t.length; e++) {
                        var i = t[e] - 1;
                        o[i] || (o[i] = []), o[i].push(t[e]);
                      }
                    },
                    s = 0;
                  s < this._gridLayer.childrenCount;
                  s++
                ) {
                  var c,
                    l = this._gridLayer.children[s];
                  !l.active ||
                    (c = l.getComponent(v.default)).isFull() ||
                    c.isEmpty() ||
                    2 == c.status ||
                    (0 < (t = c.getColors()).length &&
                      (i.set(l.name, t.length), n(t), c.clear()));
                }
                for (
                  this.nextBt &&
                    this._mode != h.GameMode.Level &&
                    0 < (t = this.nextBt.getColors()).length &&
                    n(t),
                    s = this.colorList.length - 1;
                  0 <= s;
                  s--
                )
                  n((t = this.colorList.pop()));
                o.sort(function (t, e) {
                  return e.length - t.length;
                });
                var p = function (t, e, i) {
                    var n,
                      a = o[e];
                    if (a)
                      for (var r = 0; r < i; r++)
                        0 < a.length && ((n = a.pop()), t.push(n));
                  },
                  u = function (t) {
                    if (1 == o.length) {
                      p(t, 0, 4);
                      var i = t[0];
                      console.warn('[ \u524d\u9762\u66ff\u6362 ] >');
                      for (var n = 0; n < e.colorList.length; n++) {
                        a.default.clone(e.colorList[n], m);
                        for (var s = 0; s < 4; s++) {
                          var c = m[s];
                          if (c != i) {
                            if (
                              ((m[s] = i),
                              !m.every(function (t) {
                                return t == i;
                              }))
                            ) {
                              (t[0] = e.colorList[n][s]),
                                (e.colorList[n][s] = i);
                              break;
                            }
                            m[s] = c;
                          }
                        }
                      }
                    } else {
                      switch (r.default.randomRangeInt(0, 4)) {
                        case 0:
                          p(t, 0, 3), p(t, 1, 1);
                          break;
                        case 1:
                          p(t, 0, 2), p(t, 1, 2);
                          break;
                        case 2:
                          3 < o.length && a.default.shuffle(o),
                            p(t, 0, 2),
                            p(t, 1, 1),
                            p(t, 2, 1);
                          break;
                        case 3:
                          4 < o.length && a.default.shuffle(o),
                            p(t, 0, 1),
                            p(t, 1, 1),
                            p(t, 2, 1),
                            p(t, 3, 1);
                      }
                      for (; t.length < 4; )
                        for (
                          var l = o.length - 1;
                          0 <= l &&
                          (0 < o[l].length && p(t, l, 1), 4 != t.length);
                          l--
                        );
                    }
                    d();
                  },
                  d = function () {
                    o.sort(function (t, e) {
                      return e.length - t.length;
                    });
                    for (var t = o.length - 1; 0 <= t; t--)
                      (o[t] && 0 != o[t].length) || o.pop();
                  },
                  _ = [];
                for (s = 0; s < o.length; s++) {
                  var f = o[s];
                  0 < (null == f ? void 0 : f.length) && _.push(f);
                }
                (o = _).sort(function (t, e) {
                  return e.length - t.length;
                });
                var m = [],
                  y = (this.colorList.length = 0);
                if (
                  (i.forEach(function (t) {
                    var i = [];
                    if (t < 4)
                      if (1 == o.length)
                        for (var n = 0; n < t; n++) i.push(o[0].pop());
                      else
                        for (n = 0; n < t; n++)
                          (y = r.default.randomRangeInt(0, o.length)),
                            p(i, y, 1),
                            d();
                    else u(i);
                    e.colorList.push(i);
                  }),
                  this._mode == h.GameMode.Endless ||
                    this._mode == h.GameMode.Normal)
                )
                  for (s = 0; s < 100 && 0 < o.length; s++)
                    u((t = [])), this.colorList.push(t);
                this.colorList.forEach(function (t) {
                  a.default.shuffle(t);
                }),
                  i.forEach(function (t, o) {
                    e._gridLayer
                      .getChildByName(o)
                      .getComponent(v.default)
                      .setData(e.colorList.shift(), 1);
                  }),
                  this._mode != h.GameMode.Course &&
                    this._mode != h.GameMode.Level &&
                    this.showNextBot();
              }),
              (t.prototype.onLx = function () {
                for (
                  var t = [], e = 0;
                  e < this._gridLayer.childrenCount;
                  e++
                ) {
                  var o,
                    i,
                    n = this._gridLayer.children[e];
                  n.active &&
                    ((i = (o = n.getComponent(v.default)).getColors()),
                    !o.isFull()) &&
                    !o.isEmpty() &&
                    0 < i.length &&
                    t.push(o);
                }
                a.default.shuffle(t);
                var r = 0,
                  s = t[0].getColors()[0];
                for (
                  e = 0;
                  e < 110 &&
                  ((function () {
                    a.default.shuffle(t);
                    for (var e = !1, o = 0; o < t.length; o++) {
                      for (
                        var i = t[o], n = i.getColors(), c = n.length - 1;
                        0 <= c;
                        c--
                      )
                        if (n[c] == s) {
                          i.deleteColor(c), r++, (e = !0);
                          break;
                        }
                      if (e) {
                        console.log('\u5220\u9664\uff1a', r);
                        break;
                      }
                    }
                  })(),
                  !(4 <= r));
                  e++
                );
                console.warn('\u603b\u5171\u5220\u9664\uff1a', r),
                  (this.score += 1);
              }),
              (t.prototype.onTips = function () {
                for (
                  var t = null, e = null, o = [], i = [], n = [], r = 0;
                  r < this._gridLayer.childrenCount;
                  r++
                ) {
                  var s,
                    c,
                    l = this._gridLayer.children[r];
                  l.active &&
                    2 != (s = l.getComponent(v.default)).status &&
                    (4 == (c = s.getLast()).emptyNum
                      ? o
                      : 0 < c.emptyNum
                        ? i
                        : n
                    ).push({ child: l, data: c });
                }
                if (0 < o.length) {
                  a.default.shuffle(o), (t = o[0].child);
                  var p = i.concat(n);
                  a.default.shuffle(p), (e = p[0].child);
                } else {
                  a.default.shuffle(i), (p = i.concat(n)), a.default.shuffle(p);
                  var u = i.length,
                    d = p.length;
                  for (r = 0; r < u - 1; r++) {
                    for (var h = i[r], _ = h.data, f = 0; f < d; f++) {
                      var m = p[f],
                        y = m.data;
                      if (h != m && _.color == y.color) {
                        (t = h.child), (e = m.child);
                        break;
                      }
                    }
                    if (t && e) break;
                  }
                }
                return (
                  console.log('[ \u5339\u914d ] >', t.name, e.name),
                  { item1: t, item2: e }
                );
              }),
              (t.prototype.onAddTime = function (t, e) {
                void 0 === e && (e = !0);
                var o = this._playTime;
                (this._playTime += t),
                  i.App.event.emit(f.default.On_Game_Time_Add, {
                    old: o,
                    now: this._playTime,
                    isAudio: e,
                  });
              }),
              (t.prototype.showNextBot = function () {
                var t = this.getNextColors(),
                  e = t.colors;
                this.nextBt.setData(e),
                  (this._btContent.active = 0 < t.nums),
                  i.App.event.emit(f.default.On_Bottle_Num_Change, t);
              }),
              (t.prototype.calcRefresh = function (t) {
                for (
                  var e,
                    o,
                    i = t.getColors(),
                    n = t.getLast(),
                    r = a.default.clone(i),
                    s = [],
                    c = 0;
                  c < this._gridLayer.childrenCount;
                  c++
                ) {
                  var l = this._gridLayer.children[c];
                  if (l.active && l != t.node) {
                    var p = (e = l.getComponent(v.default)).getLast();
                    if (!e.isLock) {
                      if (e.isEmpty() || (0 < p.emptyNum && p.color == n.color))
                        return r;
                      (e.isEmpty() || 0 < p.emptyNum) && s.push(e);
                    }
                  }
                }
                var u = [];
                for (c = i.length - 1; 0 <= c; c--)
                  for (var d = i[c], h = 0; h < s.length; h++)
                    (p = (e = s[h]).getLast()).color == d && u.push(d);
                return (
                  0 < u.length &&
                    (a.default.shuffle(r),
                    a.default.shuffle(u),
                    (o = r.indexOf((d = u[0]))),
                    r.splice(o, 1),
                    r.push(d)),
                  r
                );
              }),
              (t.prototype.onGridItemClick = function (t) {
                return __awaiter(this, void 0, void 0, function () {
                  var e, o, i, n, a;
                  return __generator(this, function (r) {
                    switch (r.label) {
                      case 0:
                        return this.isRefresh
                          ? t.isEmpty() ||
                            t.isFull() ||
                            t.isSteel() ||
                            t.getColors().length <= 1
                            ? [2]
                            : (this.addToPourLayer(t),
                              (this.isRefresh = !1),
                              this.clearDl(),
                              (e = this.calcRefresh(t)),
                              [4, t.onRefresh(e)])
                          : [3, 2];
                      case 1:
                        return (
                          r.sent(), this.addToGridLayer(t, t.node.position), [2]
                        );
                      case 2:
                        return (
                          (o = t.getLast()),
                          this.curr_item
                            ? this.curr_item != t
                              ? [3, 4]
                              : [4, t.setSelected(!1)]
                            : (4 == o.emptyNum ||
                                ((this.curr_item = t),
                                this.addToPourLayer(t),
                                t.setSelected(!0)),
                              [2])
                        );
                      case 3:
                        return (
                          r.sent(),
                          this.addToGridLayer(t, t.node.position),
                          (this.curr_item = null),
                          [2]
                        );
                      case 4:
                        return (
                          (i = this.curr_item.getLast()),
                          0 == o.emptyNum || (0 < o.color && i.color != o.color)
                            ? ((n = this.curr_item),
                              (this.curr_item = null),
                              this.onGridItemClick(t),
                              [4, n.setSelected(!1)])
                            : [3, 6]
                        );
                      case 5:
                        return (
                          r.sent(), this.addToGridLayer(n, n.node.position), [2]
                        );
                      case 6:
                        return (
                          (i.color != o.color && 4 != o.emptyNum) ||
                            ((this.curr_item.canClick = !1),
                            (t.canClick = !1),
                            (a = Math.min(o.emptyNum, i.sameNum)),
                            this.pourWater(this.curr_item, t, i.color, a)),
                          (this.curr_item = null),
                          [2]
                        );
                    }
                  });
                });
              }),
              (t.prototype.addToPourLayer = function (t) {
                (t.bottle0.parent = t.layer0),
                  (t.bottle0.position = t.bot_pos0),
                  (t.bottle1.parent = t.layer1),
                  (t.bottle1.position = t.bot_pos1),
                  (t.steel.parent = t.content),
                  (t.steel.position = t.steelPos),
                  (t.node.parent = this._pourLayer),
                  (t.node.zIndex = 0);
              }),
              (t.prototype.addToGridLayer = function (t, e) {
                (t.bottle0.parent = this._bottleLayer0),
                  (t.bottle0.position = e.add(t.bot_pos0)),
                  (t.bottle1.parent = this._bottleLayer1),
                  (t.bottle1.position = e.add(t.bot_pos1)),
                  (t.steel.parent = this._bottleLayer2),
                  (t.steel.position = e.add(t.steelPos)),
                  (t.node.parent = this._gridLayer),
                  (t.node.zIndex = -e.y);
              }),
              (t.prototype.pourWater = function (t, e, o, n) {
                return __awaiter(this, void 0, void 0, function () {
                  var r,
                    s,
                    l = this;
                  return __generator(this, function (p) {
                    switch (p.label) {
                      case 0:
                        return (
                          i.App.event.emit(f.default.On_Pour_Water_Act_Start),
                          this.addToPourLayer(t),
                          this.addToPourLayer(e),
                          t.getWaterNum(),
                          (r =
                            t.node.position.x == e.node.position.x
                              ? 600 <= t.node.convertToWorldSpaceAR(cc.v3()).x
                                ? -1
                                : 1
                              : t.node.position.x > e.node.position.x
                                ? 1
                                : -1),
                          (s = cc.v3(e.node.position.x, e.node.position.y)),
                          (this.prevStep = {
                            src: {
                              item: t,
                              colors: a.default.clone(t.getColors()),
                            },
                            tar: {
                              item: e,
                              colors: a.default.clone(e.getColors()),
                            },
                          }),
                          [
                            4,
                            t.waterOut({
                              color: o,
                              num: n,
                              dir: r,
                              pos: s,
                              callback: function () {
                                e.waterIn(o, n, function () {
                                  l.tarEndAct(e);
                                });
                              },
                            }),
                          ]
                        );
                      case 1:
                        return p.sent(), [4, this.srcEndAct(t)];
                      case 2:
                        return (
                          p.sent(),
                          (this.stepCount = cc.misc.clampf(
                            this.stepCount - 1,
                            0,
                            Number.MAX_SAFE_INTEGER,
                          )),
                          (this.useStep += 1),
                          this.useStep % c.GameSetting.steel_step == 0 &&
                            this.updateSteel(),
                          i.App.event.emit(f.default.On_Pour_Water_Act_End),
                          [2]
                        );
                    }
                  });
                });
              }),
              (t.prototype.srcEndAct = function (t) {
                return __awaiter(this, void 0, void 0, function () {
                  return __generator(this, function () {
                    return (
                      this.addToGridLayer(t, t.node.position),
                      (t.canClick = !0),
                      [2]
                    );
                  });
                });
              }),
              (t.prototype.tarEndAct = function (t) {
                return __awaiter(this, void 0, void 0, function () {
                  var e;
                  return __generator(this, function (o) {
                    switch (o.label) {
                      case 0:
                        return t.isFull()
                          ? ((this.prevStep = null),
                            y.GameMgr.vibrateShort(),
                            (e =
                              this._mode == h.GameMode.Level
                                ? g.ResUtils.Audios.full2
                                : g.ResUtils.Audios.full),
                            i.App.sound.playEffect(e, h.BundleType.Game),
                            u.UserData.addScore(this._mode),
                            this._mode != h.GameMode.Level &&
                              i.App.event.emit(f.default.On_Bottle_Collect, {
                                pos: t.node.position,
                              }),
                            this._mode == h.GameMode.Endless &&
                              (this.onAddTime(
                                c.GameSetting.endless_add_time,
                                !1,
                              ),
                              i.App.event.emit(f.default.On_Endless_Clear_One)),
                            [4, t.disappear()])
                          : [3, 2];
                      case 1:
                        o.sent(),
                          (t.finish.position = t.node.position.add(
                            cc.v3(0, -110),
                          )),
                          (t.finish.parent = this._finishLayer),
                          (t.finish.active = !0),
                          (this.score += 1),
                          (o.label = 2);
                      case 2:
                        return (
                          this.addToGridLayer(t, t.node.position),
                          i.App.event.emit(f.default.On_Pour_Water_Act_End),
                          (t.canClick = !0),
                          [2]
                        );
                    }
                  });
                });
              }),
              (t.prototype.clearGame = function () {
                var t, e, o, n;
                (this.curr_item = null), (this._playTime = -1);
                for (var r = 0, s = this.items.length; r < s; r++) {
                  var c = this.items[r];
                  i.App.res.putNodeToPool(c.node);
                }
                this.nextBt && i.App.res.putNodeToPool(this.nextBt.node);
                var l = a.default.clone(
                  null == (t = this._upEffectLayer) ? void 0 : t.children,
                );
                for (r = l.length - 1; 0 <= r; r--) {
                  var p = l[r];
                  i.App.res.putNodeToPool(p);
                }
                for (
                  r =
                    (l = a.default.clone(
                      null == (e = this._downEffectLayer) ? void 0 : e.children,
                    )).length - 1;
                  0 <= r;
                  r--
                )
                  (p = l[r]), i.App.res.putNodeToPool(p);
                (this.items.length = 0),
                  this._bottleLayer0.removeAllChildren(!1),
                  this._bottleLayer1.removeAllChildren(!1),
                  this._bottleLayer2.removeAllChildren(!1),
                  this._shadownLayer.removeAllChildren(!1),
                  this._finishLayer.removeAllChildren(!1),
                  null != (o = this._upEffectLayer) && o.removeAllChildren(!1),
                  null != (n = this._downEffectLayer) &&
                    n.removeAllChildren(!1);
              }),
              (t.prototype.gameRevive = function (t) {
                var e;
                (this.isPause = !1),
                  --this._revive_times,
                  1 == t
                    ? this.onAddTime(c.GameSetting.revive_sec)
                    : ((e = this.stepCount),
                      (this.stepCount += c.GameSetting.revive_step),
                      i.App.event.emit(f.default.On_Game_Step_Add, {
                        old: e,
                        now: this.stepCount,
                      }));
              }),
              (t.prototype.addStep = function (t) {
                var e = this.stepCount;
                (this.stepCount += t),
                  i.App.event.emit(f.default.On_Game_Step_Add, {
                    old: e,
                    now: this.stepCount,
                  });
              }),
              (t.prototype.gameWin = function () {
                var t, e, o, n, a;
                return __awaiter(this, void 0, void 0, function () {
                  return __generator(this, function (r) {
                    switch (r.label) {
                      case 0:
                        return (
                          (this.isPause = !0),
                          console.log('[ \u6e38\u620f\u80dc\u5229 ] >'),
                          this._mode != h.GameMode.Course
                            ? [3, 2]
                            : (null != (t = i.App.track) &&
                                t.trackEvent('course_win'),
                              (this.mode = h.GameMode.Level),
                              [4, this.addGame()])
                        );
                      case 1:
                        return r.sent(), [3, 3];
                      case 2:
                        this._mode == h.GameMode.Level &&
                          (null != (e = i.App.track) &&
                            e.onEnd(u.UserData.cgLv, 'complete'),
                          null != (o = i.App.track) &&
                            o.trackEvent('cg_win_' + u.UserData.cgLv),
                          1 == u.UserData.cgLv) &&
                          i.App.gui.closeUI(m.UIEnum.GuideView),
                          this._mode == h.GameMode.Normal &&
                            (null != (n = i.App.track) &&
                              n.onEnd(1e3 + u.UserData.ptLv, 'complete'),
                            null != (a = i.App.track) &&
                              a.trackEvent('tz_win_' + u.UserData.ptLv),
                            l.NetData.addTzNum(1)),
                          u.UserData.pass(this._mode),
                          i.App.gui.openUI(m.UIEnum.WinView),
                          (r.label = 3);
                      case 3:
                        return [2];
                    }
                  });
                });
              }),
              (t.prototype.gameFail = function () {
                var t, e;
                this._mode == h.GameMode.Level &&
                  null != (t = i.App.track) &&
                  t.onEnd(u.UserData.cgLv, 'fail'),
                  this._mode == h.GameMode.Normal &&
                    null != (e = i.App.track) &&
                    e.onEnd(1e3 + u.UserData.ptLv, 'fail'),
                  (this.isPause = !0),
                  console.log('[ \u6e38\u620f\u5931\u8d25 ] >'),
                  i.App.gui.openUI(m.UIEnum.FailView);
              }),
              (t.prototype.tryRevive = function (t) {
                (this.isPause = !0),
                  i.App.gui.openUI(m.UIEnum.ReviveView, { type: t });
              }),
              (t.prototype.gamePause = function () {
                this.isPause = !0;
              }),
              (t.prototype.gameResume = function () {
                this.isPause = !1;
              }),
              t
            );
          })();
        (o.GameCtrl = new A()), cc._RF.pop();
      },
      {
        './App': 'App',
        './ArrayUtil': 'ArrayUtil',
        './BottleItem': 'BottleItem',
        './BottleItem2': 'BottleItem2',
        './ConfData': 'ConfData',
        './EventTypes': 'EventTypes',
        './GameConst': 'GameConst',
        './GameEnums': 'GameEnums',
        './GameMgr': 'GameMgr',
        './GameSetting': 'GameSetting',
        './GameView2': 'GameView2',
        './MathUtil': 'MathUtil',
        './NetData': 'NetData',
        './ResUtils': 'ResUtils',
        './SkinData': 'SkinData',
        './TrackEnums': 'TrackEnums',
        './UIHelper': 'UIHelper',
        './UIMgr': 'UIMgr',
        './UserData': 'UserData',
      },
    ],
    GameEnums: [
      function (t, e, o) {
        'use strict';
        var i, n;
        cc._RF.push(e, 'b4019GdP3VJyaODMmzVj5NX', 'GameEnums'),
          (o.ColorType = o.PropItemType = o.GameMode = o.BundleType = void 0),
          ((i = o.BundleType || (o.BundleType = {})).Resources = 'resources'),
          (i.Game = 'game'),
          ((n = o.GameMode || (o.GameMode = {}))[(n.Course = 1)] = 'Course'),
          (n[(n.Normal = 2)] = 'Normal'),
          (n[(n.Endless = 3)] = 'Endless'),
          (n[(n.Level = 4)] = 'Level'),
          (function (t) {
            (t[(t.None = 0)] = 'None'),
              (t[(t.Refresh = 1)] = 'Refresh'),
              (t[(t.Tips = 2)] = 'Tips'),
              (t[(t.Time = 3)] = 'Time'),
              (t[(t.Bottle = 4)] = 'Bottle'),
              (t[(t.Lx = 5)] = 'Lx'),
              (t[(t.Dl = 6)] = 'Dl'),
              (t[(t.Hb = 7)] = 'Hb'),
              (t[(t.Kp = 8)] = 'Kp');
          })(o.PropItemType || (o.PropItemType = {})),
          (function (t) {
            (t[(t.None = 0)] = 'None'),
              (t[(t.Red = 1)] = 'Red'),
              (t[(t.Yellow = 2)] = 'Yellow'),
              (t[(t.Blue = 3)] = 'Blue'),
              (t[(t.Green = 4)] = 'Green'),
              (t[(t.Cyan = 5)] = 'Cyan'),
              (t[(t.Orange = 6)] = 'Orange'),
              (t[(t.Purple = 7)] = 'Purple'),
              (t[(t.White = 8)] = 'White');
          })(o.ColorType || (o.ColorType = {})),
          cc._RF.pop();
      },
      {},
    ],
    GameMgr: [
      function (t, e, o) {
        'use strict';
        cc._RF.push(e, '0e8c8DwP8hG64ic1UmfqXo4', 'GameMgr');
        var i,
          n,
          a,
          r,
          s,
          c,
          l,
          p = t('../../../RxManager/AdManager').default;
        t('../../../RxManager/MyLog').default,
          t('./../../_script/Ad_Data_Base').AD_TYPE,
          t('./../../_script/Ad_Mgr').default,
          (o.GameMgr = void 0),
          (s = t('./App')),
          t('./GameCtrl'),
          (c = t('./GameSetting')),
          (i = t('./LocalData')),
          (a = t('./UserData')),
          (r = t('./EventTypes')),
          ((l = function () {
            (this.isDy = !1),
              (this.guideStep = 0),
              (this._isGm = !1),
              (this.showNum = 0);
          }).prototype.onUpdate = function (t) {
            this.onEnergyUpdate(t);
          }),
          Object.defineProperty(l.prototype, 'isGm', {
            get: function () {
              return this._isGm;
            },
            set: function (t) {
              this._isGm = t;
            },
            enumerable: !1,
            configurable: !0,
          }),
          (l.prototype.onEnergyUpdate = function () {
            0 < a.UserData.energy_time &&
              (Date.now() - a.UserData.energy_time >=
                c.GameSetting.energy_conf.recovery_mil_sec &&
                a.UserData.recoveryEnergy(),
              0 < a.UserData.energy_time
                ? s.App.event.emit(r.default.On_Update_Energy_time, {
                    ms:
                      c.GameSetting.energy_conf.recovery_mil_sec -
                      (Date.now() - i.LocalData.getValue('energy_time')),
                    isEnd: !1,
                  })
                : s.App.event.emit(r.default.On_Update_Energy_time, {
                    ms: 0,
                    isEnd: !0,
                  }));
          }),
          (l.prototype.vibrateShort = function () {
            1 == i.LocalData.getValue('vibrate') &&
              s.App.platform.vibrateShort();
          }),
          (l.prototype.ocCallBack = function () {}),
          (l.prototype.showVideoAd = function () {
            return new Promise(function (t) {
              p.getInstance().showReward(function (e) {
                t(1 == e);
              });
            });
          }),
          (l.prototype.showInterstitialAd = function () {
            p.getInstance().showInsert();
          }),
          (n = l),
          (o.GameMgr = new n()),
          cc._RF.pop();
      },
      {
        '../../../RxManager/AdManager': void 0,
        '../../../RxManager/MyLog': void 0,
        './../../_script/Ad_Data_Base': void 0,
        './../../_script/Ad_Mgr': void 0,
        './App': 'App',
        './EventTypes': 'EventTypes',
        './GameCtrl': 'GameCtrl',
        './GameSetting': 'GameSetting',
        './LocalData': 'LocalData',
        './UserData': 'UserData',
      },
    ],
    GameSetting: [
      function (t, e, o) {
        'use strict';
        var i, n, a, r, s, c, l;
        cc._RF.push(e, 'da6f6V3GzVDO56StNIMhF2l', 'GameSetting'),
          (o.GameSetting = void 0),
          (a = t('./App')),
          (i = t('./ArrayUtil')),
          (n = t('./DateUtil')),
          (s = t('./NetHelper')),
          (r = t('./ConfData')),
          ((l = function () {
            (this.video_ids = ['adunit-aa7ce7f8a7e7c089']),
              (this.splash_ids = ['adunit-351a2c1878458c44']),
              (this.splash_show_sec = 1),
              (this.splash_view = [0, 0, 1, 1]),
              (this.splash_ctrl = { open: 1, lv_val: 1, new: 1, count: 2 }),
              (this.gm_ids = ['1']),
              (this.is_new = 0),
              (this.add_time_utc = 1729754858e3),
              (this.share_info = null),
              (this.share_time = 3),
              (this.revive_times = 1),
              (this.prop_first_share = 1),
              (this.is_new_enter_course = 0),
              (this.show_feedBack = 0),
              (this.show_hand_tips = 0),
              (this.pass_gold = 45),
              (this.shop_gold = 100),
              (this.cg_lv_list = []),
              (this.cg_lv_conf_release = 'release'),
              (this.cg_lv_conf_debug = 'debug'),
              (this.energy_conf = {
                default_value: 5,
                recovery_mil_sec: 6e5,
                use_value: 1,
                use_gold: 180,
                free_value: 5,
              }),
              (this.tj_reward = { type: 100, name: '\u4f53\u529b', value: 1 }),
              (this.is_use_energy = 1),
              (this.revive_sec = 300),
              (this.revive_step = 150),
              (this.prop_time_sec = 120),
              (this.is_enter_cg = 0),
              (this.steel_empty_num = 20),
              (this.steel_step = 5),
              (this.steel_max = 4),
              (this.steel_lv = 3),
              (this.steel_conf = [
                { level: 2, num: 2 },
                { level: 4, num: 2 },
                { level: 5, num: 3 },
              ]),
              (this.pt_conf = {
                colors: [17, 13, 8, 8, 8, 7],
                sec: 300,
                step_count: 150,
              }),
              (this.level_conf = {
                colors: [5, 4, 4, 4, 4, 4],
                sec: 300,
                step_count: 150,
                isDark: 0,
                l3: '',
                l4: '',
                ids: [],
              }),
              (this.level_bottle_sp = 10),
              (this.wj_conf = { colors: [16, 16, 8, 8, 8, 8], sec: 300 }),
              (this.cg_show_bottle = 0),
              (this.cg_show_step = 0),
              (this.endless_add_time = 10),
              (this.ts_num = 5),
              (this.add_time_sec = 300),
              (this.tz_unlock_lv = 0),
              (this.pyq_openlink = ''),
              (this.new_map = [[1, 0, 1, 1]]),
              (this.challenge_map = [
                [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
                [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
                [1, 1, 2, 2, 0, 0, 0, 1, 1, 1],
                [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
                [1, 1, 1, 1, 1, 1, 1],
              ]),
              (this.level_map = [
                [1, 1, 1, 1, 1, 1, 1],
                [1, 1, 2, 2, 0, 1, 1],
                [1, 1, 1, 1, 1, 1, 1],
                [1, 1, 1, 1, 1, 1, 1],
              ]),
              (this.signIn_conf = [
                { day: 1, type: 6, value: 1, scale: 0.35 },
                { day: 2, type: 4, value: 3, scale: 0.35 },
                { day: 3, type: 3, value: 5, scale: 0.35 },
                { day: 4, type: 2, value: 1, scale: 0.35 },
                { day: 5, type: 1, value: 1, scale: 0.35 },
                { day: 6, type: 4, value: 2, scale: 0.35 },
                { day: 7, type: 5, value: 1, scale: 1 },
              ]),
              (this.qrCodeUrl = ''),
              (this.qrCodeDesc =
                '\u6b22\u8fce\u622a\u56fe\uff0c\u626b\u7801\u52a0\u5165\u73a9\u5bb6\u5fae\u4fe1\u7fa4\uff0c\n\u9886\u53d6\u5151\u6362\u7801'),
              (this.back_show_skin = 0),
              (this.collect_conf = [
                { id: 1, icon: 'jwj1', name: '\u6e05\u51c9\u51b0\u8336' },
                { id: 2, icon: 'jwj2', name: '\u9ec4\u8272\u559c\u9e4a' },
                {
                  id: 3,
                  icon: 'jwj3',
                  name: '\u963f\u62c9\u65af\u52a0\u603b\u88c1',
                },
                { id: 4, icon: 'jwj4', name: '\u84dd\u8272\u590f\u5a01\u5937' },
                { id: 5, icon: 'jwj5', name: '\u6731\u4e3d\u53f6' },
                { id: 6, icon: 'jwj6', name: '\u91d1\u6c64\u529b' },
                { id: 7, icon: 'jwj7', name: '\u5927\u90fd\u4f1a' },
                { id: 8, icon: 'jwj8', name: '\u66fc\u54c8\u987f' },
                { id: 9, icon: 'jwj9', name: '\u6930\u6797\u98d8\u9999' },
                {
                  id: 10,
                  icon: 'jwj10',
                  name: '\u8349\u8393\u4ee3\u57fa\u91cc',
                },
                {
                  id: 11,
                  icon: 'jwj11',
                  name: '\u9ed1\u767d\u4fc4\u7f57\u65af',
                },
                {
                  id: 12,
                  icon: 'jwj12',
                  name: '\u83e0\u841d\u9a6c\u5929\u5c3c',
                },
                { id: 13, icon: 'jwj13', name: '\u6cd5\u56fd75' },
                {
                  id: 14,
                  icon: 'jwj14',
                  name: '\u67e0\u6aac\u9a6c\u5929\u5c3c',
                },
                {
                  id: 15,
                  icon: 'jwj15',
                  name: '\u7c89\u7ea2\u83ab\u5409\u6258',
                },
                { id: 16, icon: 'jwj16', name: '\u767d\u8272\u4f73\u4eba' },
                {
                  id: 17,
                  icon: 'jwj17',
                  name: '\u84dd\u8272\u739b\u683c\u4e3d\u5854',
                },
                { id: 18, icon: 'jwj18', name: '\u6708\u5149' },
                { id: 19, icon: 'jwj19', name: '\u7c89\u7ea2\u9999\u69df' },
                { id: 20, icon: 'jwj20', name: '\u8840\u8165\u739b\u4e3d' },
                { id: 21, icon: 'jwj21', name: '\u67e0\u6aac\u6c34' },
                { id: 22, icon: 'jwj22', name: '\u5929\u4f7f\u4e4b\u543b' },
                {
                  id: 23,
                  icon: 'jwj23',
                  name: '\u67e0\u6aac\u9a6c\u5929\u5c3c',
                },
                {
                  id: 24,
                  icon: 'jwj24',
                  name: '\u767e\u52a0\u5f97\u9e21\u5c3e\u9152',
                },
                {
                  id: 25,
                  icon: 'jwj25',
                  name: '\u83e0\u841d\u9a6c\u5929\u5c3c',
                },
                { id: 26, icon: 'jwj26', name: '\u8fc8\u6cf0' },
                { id: 27, icon: 'jwj27', name: '\u9633\u5149\u6c99\u6ee9' },
                { id: 28, icon: 'jwj28', name: '\u67e0\u6aac\u77f3\u69b4' },
                {
                  id: 29,
                  icon: 'jwj29',
                  name: '\u67e0\u6aac\u83ab\u5409\u6258',
                },
                { id: 30, icon: 'jwj30', name: '\u767d\u4fc4\u7f57\u65af' },
                { id: 31, icon: 'jwj31', name: '\u67e0\u6aac\u6930\u5b50' },
                {
                  id: 32,
                  icon: 'jwj32',
                  name: '\u767d\u6851\u683c\u5229\u4e9a',
                },
                {
                  id: 33,
                  icon: 'jwj33',
                  name: '\u9f99\u820c\u5170\u65e5\u51fa',
                },
                { id: 34, icon: 'jwj34', name: '\u91d1\u9152\u82cf\u6253' },
                {
                  id: 35,
                  icon: 'jwj35',
                  name: '\u83e0\u841d\u4ee3\u57fa\u91cc',
                },
                { id: 36, icon: 'jwj36', name: '\u7c89\u7ea2\u73ab\u7470' },
                { id: 37, icon: 'jwj37', name: '\u7eff\u8272\u86b1\u8722' },
                { id: 38, icon: 'jwj38', name: '\u7ea2\u9f99' },
                {
                  id: 39,
                  icon: 'jwj39',
                  name: '\u9999\u8549\u9a6c\u5929\u5c3c',
                },
                { id: 40, icon: 'jwj40', name: '\u87ba\u4e1d\u8d77\u5b50' },
                { id: 41, icon: 'jwj41', name: '\u7c89\u7ea2\u6843\u5b50' },
                { id: 42, icon: 'jwj42', name: '\u67e0\u6aac\u8393\u679c' },
                { id: 43, icon: 'jwj43', name: '\u5185\u683c\u7f57\u5c3c' },
                { id: 44, icon: 'jwj44', name: '\u7ea2\u7c89\u4f73\u4eba' },
                { id: 45, icon: 'jwj45', name: '\u7ea2\u5b9d\u77f3' },
                {
                  id: 46,
                  icon: 'jwj46',
                  name: '\u67e0\u6aac\u91d1\u6c64\u529b',
                },
                {
                  id: 47,
                  icon: 'jwj47',
                  name: '\u9ed1\u767d\u5a01\u58eb\u5fcc',
                },
                { id: 48, icon: 'jwj48', name: '\u7ea2\u6a31\u6843' },
                { id: 49, icon: 'jwj49', name: '\u6027\u611f\u6c99\u6ee9' },
                {
                  id: 50,
                  icon: 'jwj50',
                  name: '\u963f\u4f69\u7f57\u6a59\u5149',
                },
              ]),
              (this.skin_conf1 = [
                {
                  type: 1,
                  id: 1,
                  name: '\u74f6\u5b501',
                  icon: 'pz04',
                  bg: '',
                  prefabs: ['bottle_item4', 'next_bottle4'],
                  video_num: 1,
                  gold_num: 0,
                  offsetX: 40,
                },
                {
                  type: 1,
                  id: 2,
                  name: '\u74f6\u5b502',
                  icon: 'pz02',
                  bg: '',
                  prefabs: ['bottle_item2', 'next_bottle2'],
                  video_num: 2,
                  gold_num: 0,
                  offsetX: 30,
                },
                {
                  type: 1,
                  id: 3,
                  name: '\u74f6\u5b503',
                  icon: 'pz03',
                  bg: '',
                  prefabs: ['bottle_item3', 'next_bottle3'],
                  video_num: 3,
                  gold_num: 0,
                  offsetX: 12,
                },
                {
                  type: 1,
                  id: 4,
                  name: '\u74f6\u5b504',
                  icon: 'pz01',
                  bg: '',
                  prefabs: ['bottle_item1', 'next_bottle1'],
                  video_num: 4,
                  gold_num: 0,
                  offsetX: 20,
                },
                {
                  type: 1,
                  id: 5,
                  name: '\u74f6\u5b505',
                  icon: 'pz05',
                  bg: '',
                  prefabs: ['bottle_item5', 'next_bottle5'],
                  video_num: 1,
                  gold_num: 0,
                  offsetX: 40,
                },
                {
                  type: 1,
                  id: 6,
                  name: '\u74f6\u5b506',
                  icon: 'pz06',
                  bg: '',
                  prefabs: ['bottle_item6', 'next_bottle6'],
                  video_num: 1,
                  gold_num: 0,
                  offsetX: 40,
                },
                {
                  type: 2,
                  id: 1,
                  name: '\u4e3b\u98981',
                  icon: 'theme01',
                  bg: 'bg01',
                  prefabs: '',
                  video_num: 1,
                  gold_num: 100,
                  offsetX: 0,
                },
                {
                  type: 2,
                  id: 2,
                  name: '\u4e3b\u98982',
                  icon: 'theme02',
                  bg: 'bg02',
                  prefabs: '',
                  video_num: 2,
                  gold_num: 200,
                  offsetX: 0,
                },
                {
                  type: 2,
                  id: 3,
                  name: '\u4e3b\u98983',
                  icon: 'theme03',
                  bg: 'bg03',
                  prefabs: '',
                  video_num: 3,
                  gold_num: 300,
                  offsetX: 0,
                },
                {
                  type: 2,
                  id: 4,
                  name: '\u4e3b\u98984',
                  icon: 'theme04',
                  bg: 'bg04',
                  prefabs: '',
                  video_num: 4,
                  gold_num: 400,
                  offsetX: 0,
                },
                {
                  type: 2,
                  id: 5,
                  name: '\u4e3b\u98985',
                  icon: 'theme05',
                  bg: 'bg05',
                  prefabs: '',
                  video_num: 1,
                  gold_num: 500,
                  offsetX: 0,
                },
                {
                  type: 2,
                  id: 6,
                  name: '\u4e3b\u98986',
                  icon: 'theme06',
                  bg: 'bg06',
                  prefabs: '',
                  video_num: 1,
                  gold_num: 600,
                  offsetX: 0,
                },
                {
                  type: 2,
                  id: 7,
                  name: '\u4e3b\u98987',
                  icon: 'theme07',
                  bg: 'bg07',
                  prefabs: '',
                  video_num: 1,
                  gold_num: 700,
                  offsetX: 0,
                },
                {
                  type: 2,
                  id: 8,
                  name: '\u4e3b\u98988',
                  icon: 'theme08',
                  bg: 'bg08',
                  prefabs: '',
                  video_num: 1,
                  gold_num: 700,
                  offsetX: 0,
                },
                {
                  type: 3,
                  id: 1,
                  name: '\u989c\u82721',
                  icon: 'ys01',
                  bg: '',
                  prefabs: '',
                  video_num: 1,
                  gold_num: 0,
                  offsetX: 0,
                },
                {
                  type: 3,
                  id: 2,
                  name: '\u989c\u82722',
                  icon: 'ys02',
                  bg: '',
                  prefabs: '',
                  video_num: 4,
                  gold_num: 0,
                  offsetX: 0,
                },
                {
                  type: 3,
                  id: 3,
                  name: '\u989c\u82723',
                  icon: 'ys03',
                  bg: '',
                  prefabs: '',
                  video_num: 1,
                  gold_num: 0,
                  offsetX: 0,
                },
              ]),
              r.ConfData.skinConf.parse('skin_conf', this.skin_conf1),
              i.default.clone(this.cg_lv_list, r.ConfData.levelConf.lv_list);
          }).prototype.parse = function (t, e) {
            for (var o in this) e.hasOwnProperty(o) && (this[o] = e[o]);
            e.add_time &&
              ((this.add_time_utc = 1e3 * e.add_time),
              n.default.compare(this.add_time_utc, Date.now())) &&
              (a.App.track.is_new = 1),
              s.default.config == t &&
                e.cg_lv_list &&
                i.default.clone(e.cg_lv_list, r.ConfData.levelConf.lv_list),
              s.default.config == t &&
                this.skin_conf1 &&
                r.ConfData.skinConf.parse('skin_conf', this.skin_conf1),
              console.log('[ data ] >', e);
          }),
          (c = l),
          (o.GameSetting = new c()),
          cc._RF.pop();
      },
      {
        './App': 'App',
        './ArrayUtil': 'ArrayUtil',
        './ConfData': 'ConfData',
        './DateUtil': 'DateUtil',
        './NetHelper': 'NetHelper',
      },
    ],
    GameView2: [
      function (t, e, o) {
        'use strict';
        cc._RF.push(e, '09befEk0c5Bwa5djD2Evsnw', 'GameView2');
        var i,
          n,
          a,
          r,
          s,
          c,
          l,
          p,
          u,
          d,
          h,
          _,
          f,
          m,
          y,
          g,
          v,
          b,
          w,
          A = t('../../../RxManager/MyLog').default;
        (u = t('././App')),
          (_ = t('././ArrayUtil')),
          (n = t('././BasePanel')),
          (v = t('././GameCtrl')),
          (m = t('././GameSetting')),
          (r = t('././UserData')),
          (p = t('././GameEnums')),
          (h = t('././EventTypes')),
          (f = t('././UIHelper')),
          (g = t('././GameMgr')),
          (s = t('././BottleItem')),
          (a = t('././BottleItem2')),
          (d = t('././BoxItem')),
          (c = (l = cc._decorator).ccclass),
          (i = l.property),
          (b = n.default),
          (w = function () {
            var t;
            return (
              ((t = (null !== b && b.apply(this, arguments)) || this).bg =
                null),
              (t.content = null),
              (t.gridLayer = null),
              (t.pourLayer = null),
              (t.lockLayer = null),
              (t.effectLayer0 = null),
              (t.effectLayer = null),
              (t.btnBack1 = null),
              (t.lvLab1 = null),
              (t.btnDl = null),
              (t.dl_add1 = null),
              (t.dl_video1 = null),
              (t.dl_numLab1 = null),
              (t.btnHt = null),
              (t.ht_add1 = null),
              (t.ht_video1 = null),
              (t.ht_gray = null),
              (t.ht_numLab1 = null),
              (t.btnNewBottle = null),
              (t.bottle_add1 = null),
              (t.bottle_video1 = null),
              (t.bottle_numLab1 = null),
              (t.bt_gray = null),
              (t.bottleLayer0 = null),
              (t.bottleLayer1 = null),
              (t.bottleLayer2 = null),
              (t.shadownLayer = null),
              (t.finishLayer = null),
              (t.gridSp = null),
              (t.warnNode = null),
              (t.btnTest = null),
              (t.boxs = []),
              (t.ui = null),
              (t.hand = null),
              (t.dl_utc = 0),
              (t.ts_utc = 0),
              (t.js_utc = 0),
              (t.bottles = []),
              (t.hand_utc = 0),
              (t.check_delay = 0.1),
              (t.guide_delay = 0),
              (t.hand_tips_delay = 0),
              (t.isSoftGuide = !1),
              (t.boxNum = 0),
              (t.isDraw = !1),
              (t.grid_rt = new cc.RenderTexture()),
              t
            );
          }),
          __extends(w, b),
          (w.prototype.onLoad = function () {
            var t;
            cc
              .tween(this.warnNode)
              .sequence(
                cc.tween(this.warnNode).to(0.5, { opacity: 100 }),
                cc.tween(this.warnNode).to(0.5, { opacity: 255 }),
              )
              .repeatForever()
              .start(),
              (this.btnTest.active = 101 == window.test),
              101 == window.opacity
                ? (this.btnTest.opacity = 0)
                : (this.btnTest.opacity = 255),
              (t = this.hand.getChildByName('sz_icon')),
              cc
                .tween(t)
                .sequence(
                  cc.tween().to(0.5, { position: cc.v3(10, -10) }),
                  cc.tween().to(0.5, { position: cc.v3(0, 0) }),
                )
                .repeatForever()
                .start();
          }),
          (w.prototype.onEnable = function () {
            v.GameCtrl.init({
              gridLayer: this.gridLayer,
              upEffectLayer: this.effectLayer,
              downEffectLayer: this.effectLayer0,
              pourLayer: this.pourLayer,
              lockLayer: this.lockLayer,
              bottleLayer0: this.bottleLayer0,
              finishLayer: this.finishLayer,
              bottleLayer1: this.bottleLayer1,
              bottleLayer2: this.bottleLayer2,
              shadownLayer: this.shadownLayer,
            }),
              this.initEvent(),
              this.onPlayGame(),
              this.updateView(),
              this.updateProp();
          }),
          (w.prototype.setBg = function (t) {
            this.bg.spriteFrame = t;
          }),
          (w.prototype.onDisable = function () {
            var t;
            this.grid_rt.clear(),
              null != (t = this.gridSp.spriteFrame) && t.destroy(),
              (this.gridSp.spriteFrame = null),
              v.GameCtrl.clearGame(),
              this.clear(),
              u.App.event.targetOff(this);
          }),
          (w.prototype.update = function (t) {
            v.GameCtrl.onUpdate(t),
              v.GameCtrl.prevStep && this.ht_gray.active
                ? (this.ht_gray.active = !1)
                : v.GameCtrl.prevStep ||
                  this.ht_gray.active ||
                  (this.ht_gray.active = !0),
              0 < v.GameCtrl.bottleList.length && this.bt_gray.active
                ? (this.bt_gray.active = !1)
                : 0 != v.GameCtrl.bottleList.length ||
                  this.bt_gray.active ||
                  (this.bt_gray.active = !0),
              (this.check_delay -= t),
              this.check_delay <= 0 &&
                (this.checkBoxs(), (this.check_delay = 0.1)),
              v.GameCtrl.isPause ||
                (0 < this.hand_tips_delay && 1 == m.GameSetting.show_hand_tips
                  ? ((this.hand_tips_delay -= t),
                    this.hand_tips_delay <= 0 && this.showHandTips())
                  : (!this.hand.active &&
                      15e3 < Date.now() - this.hand_utc &&
                      this.showHand(),
                    this.hand.active &&
                      ((this.guide_delay += t), 5 <= this.guide_delay) &&
                      this.hideHand()));
          }),
          (w.prototype.checkBoxs = function () {
            for (var t = !1, e = 0; e < this.bottles.length; e++) {
              var o;
              if ((o = this.bottles[e]).node.active && o.isFinshed)
                for (var i = 0; i < this.boxs.length; i++) {
                  var n;
                  if (
                    !(n = this.boxs[i]).isLock &&
                    n.isReady &&
                    !n.isOccupied &&
                    n.getColor() == o.getColors()[0]
                  ) {
                    (n.isOccupied = !0),
                      this.bottleFly(o, n),
                      o.hide(),
                      (t = !0);
                    break;
                  }
                }
              if (t) break;
            }
          }),
          (w.prototype.bottleFly = function (t, e) {
            var o;
            return __awaiter(this, void 0, void 0, function () {
              var i, n, s;
              return (
                (s = this),
                __generator(this, function (c) {
                  switch (c.label) {
                    case 0:
                      return (
                        (n = t.getColors()[0]),
                        [
                          4,
                          u.App.res.getNodeFromPool(
                            'prefabs/next_bottle1',
                            p.BundleType.Game,
                          ),
                        ]
                      );
                    case 1:
                      return (
                        ((i = c.sent()).parent = this.effectLayer),
                        i.setPosition(t.node.position),
                        i.getComponent(a.default).setData([n, n, n, n]),
                        e.open(),
                        g.GameMgr.vibrateShort(),
                        1 == r.UserData.cgLv &&
                          (this.boxNum++,
                          null != (o = u.App.track) &&
                            o.trackEvent('cg_box_' + this.boxNum)),
                        this.hideHand(),
                        (this.hand_tips_delay = 0),
                        console.warn('22222222222'),
                        cc
                          .tween(i)
                          .then(
                            cc.jumpTo(
                              0.3,
                              e.node.position.x,
                              e.node.position.y + 200,
                              280,
                              1,
                            ),
                          )
                          .call(function () {
                            return __awaiter(s, void 0, void 0, function () {
                              return __generator(this, function (t) {
                                switch (t.label) {
                                  case 0:
                                    return [4, e.addBottle(i)];
                                  case 1:
                                    return (
                                      t.sent(),
                                      2 != g.GameMgr.guideStep
                                        ? [3, 3]
                                        : (u.App.event.emit(
                                            h.default.On_Guide_Next_Step,
                                          ),
                                          [4, this.delay(2)])
                                    );
                                  case 2:
                                    t.sent(),
                                      u.App.event.emit(
                                        h.default.On_Guide_Next_Step,
                                      ),
                                      (t.label = 3);
                                  case 3:
                                    return (
                                      6 == g.GameMgr.guideStep &&
                                        u.App.event.emit(
                                          h.default.On_Guide_Next_Step,
                                        ),
                                      [4, e.boxOut()]
                                    );
                                  case 4:
                                    return (
                                      t.sent(),
                                      u.App.event.emit(
                                        h.default.On_Bottle_Collect_End,
                                        { color: n },
                                      ),
                                      v.GameCtrl.delNum++,
                                      v.GameCtrl.winCheck(),
                                      0 < v.GameCtrl.boxList.length &&
                                      v.GameCtrl.delNum < v.GameCtrl.maxScore
                                        ? (this.updateBox(e), [4, e.boxIn()])
                                        : [3, 6]
                                    );
                                  case 5:
                                    t.sent(),
                                      u.App.event.emit(
                                        h.default.On_Guide_Next_Step,
                                      ),
                                      (t.label = 6);
                                  case 6:
                                    return (
                                      5 == g.GameMgr.guideStep &&
                                        this.scheduleOnce(function () {
                                          u.App.event.emit(
                                            h.default.On_Guide_Next_Step,
                                          );
                                        }, 0.5),
                                      this.checkTips(2.5),
                                      [2]
                                    );
                                }
                              });
                            });
                          })
                          .start(),
                        [2]
                      );
                  }
                })
              );
            });
          }),
          (w.prototype.updateView = function () {
            this.lvLab1.string = '\u5173\u5361 ' + r.UserData.cgLv;
          }),
          (w.prototype.updateProp = function () {
            (this.dl_numLab1.string = '' + r.UserData.dlNum),
              (this.ht_numLab1.string = '' + r.UserData.hbNum),
              (this.bottle_numLab1.string = '' + r.UserData.kpNum),
              (this.dl_video1.active = r.UserData.dlNum <= 0),
              (this.ht_video1.active = r.UserData.hbNum <= 0),
              (this.bottle_video1.active = r.UserData.kpNum <= 0),
              (this.dl_add1.active = 0 < r.UserData.dlNum),
              (this.ht_add1.active = 0 < r.UserData.hbNum),
              (this.bottle_add1.active = 0 < r.UserData.kpNum),
              (this.dl_numLab1.node.active = 0 < r.UserData.dlNum),
              (this.ht_numLab1.node.active = 0 < r.UserData.hbNum),
              (this.bottle_numLab1.node.active = 0 < r.UserData.kpNum);
          }),
          (w.prototype.playGame = function () {
            return __awaiter(this, void 0, void 0, function () {
              return __generator(this, function (t) {
                switch ((A.d('==GameView2===playGame===', t.label), t.label)) {
                  case 0:
                    return (
                      (this.ui.active = 1 != r.UserData.cgLv),
                      (this.hand.active = !1),
                      (this.warnNode.active = !1),
                      (this.gridSp.node.active = !1),
                      (this.boxNum = 0),
                      (this.hand_tips_delay = 0),
                      cc.Tween.stopAllByTarget(this.content),
                      p.GameMode.Level == v.GameCtrl.mode &&
                        (this.content.scale = 1.2),
                      this.hideHand(),
                      [4, v.GameCtrl.playGame()]
                    );
                  case 1:
                    return (
                      t.sent(),
                      1 != r.UserData.cgLv
                        ? [3, 3]
                        : [4, u.App.gui.openUI(f.UIEnum.GuideView)]
                    );
                  case 2:
                    t.sent(), (t.label = 3);
                  case 3:
                    return [2];
                }
              });
            });
          }),
          (w.prototype.initEvent = function () {
            u.App.event.on(
              h.default.On_Bottle_Item_Click,
              this.onGridItemClick,
              this,
            ),
              u.App.event.on(h.default.On_Next_Level, this.onPlayNext, this),
              u.App.event.on(h.default.On_Game_Init, this.onGameInit, this),
              u.App.event.on(h.default.On_Box_Init, this.onBoxsInit, this),
              u.App.event.on(
                h.default.On_Prop_Num_Change,
                this.onPropItemChange,
                this,
              ),
              u.App.event.on(h.default.On_Game_Replay, this.onGameReplay, this),
              u.App.event.on(h.default.On_Game_Revive, this.onGameRevive, this),
              u.App.event.on(h.default.On_Bottle_Del, this.onBottleDel, this),
              u.App.event.on(
                h.default.On_Game_Unlock_Bot,
                this.unlockBot,
                this,
              ),
              u.App.event.on(
                h.default.On_Pour_Water_Act_End,
                this.onPourWaterEnd,
                this,
              ),
              u.App.event.on(
                h.default.On_Pour_Water_Act_Start,
                this.onPourWaterStart,
                this,
              ),
              u.App.event.on(h.default.On_Next_Fly_End, this.onFlyEnd, this),
              u.App.event.on(h.default.On_Box_Click, this.onBoxClick, this),
              this.on(this.btnDl, this.onBtnDlClick, this, { sound: {} }),
              this.on(this.btnHt, this.onBtnHtClick, this, { sound: {} }),
              this.on(this.btnNewBottle, this.onBtnNewBottleClick, this, {
                sound: {},
              }),
              this.on(this.btnBack1, this.onBtnBackClick, this),
              this.on(
                this.btnTest,
                function () {
                  v.GameCtrl.gameWin();
                },
                this,
              );
          }),
          (w.prototype.unlockBot = function () {
            v.GameCtrl.onUnlockBot();
          }),
          (w.prototype.onBoxClick = function (t) {
            var e, o;
            return __awaiter(this, void 0, void 0, function () {
              return __generator(this, function (i) {
                switch (i.label) {
                  case 0:
                    return t.isLock
                      ? [
                          4,
                          g.GameMgr.showVideoAd({
                            lv: r.UserData.cgLv,
                            itemName: '\u89e3\u9501\u888b\u5b50',
                          }),
                        ]
                      : [2];
                  case 1:
                    return (
                      1 == i.sent() &&
                        (null != (e = u.App.track) &&
                          e.trackEvent('cg_vd_' + r.UserData.cgLv),
                        null != (o = u.App.track) &&
                          o.trackEvent('cg_daizi_' + r.UserData.cgLv),
                        this.hideHand(),
                        t.setStatus(!1),
                        this.updateBox(t, !0, !0),
                        this.checkTips(2.5)),
                      [2]
                    );
                }
              });
            });
          }),
          (w.prototype.onBtnDlClick = function () {
            var t, e;
            return __awaiter(this, void 0, void 0, function () {
              return __generator(this, function (o) {
                switch (o.label) {
                  case 0:
                    return Date.now() - this.dl_utc < 500 ||
                      v.GameCtrl.isRefresh
                      ? [2]
                      : (this.hideHand(),
                        (this.dl_utc = Date.now()),
                        0 != r.UserData.dlNum
                          ? [3, 2]
                          : (u.App.sound.playEffect(
                              'audios/btn_click',
                              p.BundleType.Game,
                            ),
                            [
                              4,
                              g.GameMgr.showVideoAd({
                                lv: r.UserData.cgLv,
                                itemName: '\u6253\u4e71\u9053\u5177',
                              }),
                            ]));
                  case 1:
                    return 1 != o.sent()
                      ? [2]
                      : (null != (t = u.App.track) &&
                          t.trackEvent('cg_vd_' + r.UserData.cgLv),
                        null != (e = u.App.track) &&
                          e.trackEvent('cg_props1_' + r.UserData.cgLv),
                        [3, 3]);
                  case 2:
                    r.UserData.useProp(p.PropItemType.Dl), (o.label = 3);
                  case 3:
                    return [4, v.GameCtrl.onShuffle()];
                  case 4:
                    return o.sent(), (this.isDraw = !0), this.hideHand(), [2];
                }
              });
            });
          }),
          (w.prototype.onBtnHtClick = function () {
            var t, e;
            return __awaiter(this, void 0, void 0, function () {
              var o;
              return (
                (o = this),
                __generator(this, function (i) {
                  switch (i.label) {
                    case 0:
                      return Date.now() - this.ts_utc < 500
                        ? (console.log('[ \u70b9\u7684\u6709\u70b9\u5feb ] >'),
                          [2])
                        : (this.hideHand(),
                          v.GameCtrl.prevStep
                            ? ((this.ts_utc = Date.now()),
                              0 != r.UserData.hbNum
                                ? [3, 2]
                                : (u.App.sound.playEffect(
                                    'audios/btn_click',
                                    p.BundleType.Game,
                                  ),
                                  [
                                    4,
                                    g.GameMgr.showVideoAd({
                                      lv: r.UserData.cgLv,
                                      itemName: '\u56de\u9000\u9053\u5177',
                                    }),
                                  ]))
                            : [2]);
                    case 1:
                      return 1 != i.sent()
                        ? [2]
                        : (null != (t = u.App.track) &&
                            t.trackEvent('cg_vd_' + r.UserData.cgLv),
                          null != (e = u.App.track) &&
                            e.trackEvent('cg_props2_' + r.UserData.cgLv),
                          [3, 3]);
                    case 2:
                      r.UserData.useProp(p.PropItemType.Hb), (i.label = 3);
                    case 3:
                      return [4, v.GameCtrl.onRestore()];
                    case 4:
                      return (
                        i.sent(),
                        this.scheduleOnce(function () {
                          o.isDraw = !0;
                        }, 0.1),
                        this.hideHand(),
                        [2]
                      );
                  }
                })
              );
            });
          }),
          (w.prototype.onBtnNewBottleClick = function () {
            var t, e;
            return __awaiter(this, void 0, void 0, function () {
              return __generator(this, function (o) {
                switch (o.label) {
                  case 0:
                    return Date.now() - this.js_utc < 500 ||
                      0 == v.GameCtrl.bottleList.length
                      ? [2]
                      : (this.hideHand(),
                        (this.js_utc = Date.now()),
                        0 != r.UserData.kpNum
                          ? [3, 2]
                          : (u.App.sound.playEffect(
                              'audios/btn_click',
                              p.BundleType.Game,
                            ),
                            [
                              4,
                              g.GameMgr.showVideoAd({
                                lv: r.UserData.cgLv,
                                itemName: '\u7a7a\u74f6\u9053\u5177',
                              }),
                            ]));
                  case 1:
                    return 1 != o.sent()
                      ? [2]
                      : (null != (t = u.App.track) &&
                          t.trackEvent('cg_vd_' + r.UserData.cgLv),
                        null != (e = u.App.track) &&
                          e.trackEvent('cg_props3_' + r.UserData.cgLv),
                        [3, 3]);
                  case 2:
                    r.UserData.useProp(p.PropItemType.Kp), (o.label = 3);
                  case 3:
                    return [4, v.GameCtrl.onAddEmptyBottle()];
                  case 4:
                    return o.sent(), this.hideHand(), (this.isDraw = !0), [2];
                }
              });
            });
          }),
          (w.prototype.showHand = function () {
            var t, e;
            this.hand.active ||
              ((this.hand.active = !0),
              (this.guide_delay = 0),
              (t = [this.btnDl]),
              v.GameCtrl.prevStep && t.push(this.btnHt),
              0 < v.GameCtrl.bottleList.length && t.push(this.btnNewBottle),
              (this.isSoftGuide = !0),
              _.default.shuffle(t),
              (e = t[0].convertToWorldSpaceAR(cc.v3(0, -25))),
              (e = this.node.convertToNodeSpaceAR(e)),
              (this.hand.position = e));
          }),
          (w.prototype.hideHand = function () {
            this.isSoftGuide &&
              ((this.hand.active = !1), (this.hand_utc = Date.now()));
          }),
          (w.prototype.onBtnBackClick = function () {
            v.GameCtrl.gamePause(), u.App.gui.openUI(f.UIEnum.SettingView);
          }),
          (w.prototype.onBottleDel = function (t) {
            return __awaiter(this, void 0, void 0, function () {
              return __generator(this, function () {
                return this.onGridLayerDraw(), v.GameCtrl.onBottleDel(t), [2];
              });
            });
          }),
          (w.prototype.onGridItemClick = function (t) {
            return __awaiter(this, void 0, void 0, function () {
              var e;
              return (
                (e = this),
                __generator(this, function (o) {
                  switch (o.label) {
                    case 0:
                      return (
                        this.hideHand(),
                        [
                          4,
                          v.GameCtrl.onGridItemClick(t, function () {
                            e.onGridLayerDraw();
                          }),
                        ]
                      );
                    case 1:
                      return o.sent(), this.onGridLayerDraw(), [2];
                  }
                })
              );
            });
          }),
          (w.prototype.onPlayNext = function () {
            this.onPlayGame(), this.updateView();
          }),
          (w.prototype.onPlayGame = function () {
            this.playGame();
          }),
          (w.prototype.onBoxsInit = function () {
            for (var t = 0; t < this.boxs.length; t++)
              this.boxs[t].setStatus(1 < t),
                t < 2 && this.updateBox(this.boxs[t], !0);
          }),
          (w.prototype.onGameInit = function () {
            var t;
            (t = this), (this.gridLayer.opacity = 255), u.App.gui.isLock(!0);
            for (
              var e = (this.bottles.length = 0);
              e < this.gridLayer.childrenCount;
              e++
            ) {
              var o;
              (o = this.gridLayer.children[e].getComponent(s.default)),
                this.bottles.push(o);
            }
            cc.tween(this.content)
              .to(0.2, { scale: 1 })
              .call(function () {
                t.draw(0.1), u.App.gui.isLock(!1), (t.hand_utc = Date.now());
              })
              .start();
          }),
          (w.prototype.updateBox = function (t, e, o) {
            var i, n;
            if ((void 0 === e && (e = !1), (a = 0), (o = void 0 !== o && o))) {
              if (
                ((n = v.GameCtrl.getWaterNums()),
                (i = 0),
                n.forEach(function (t, e) {
                  4 <= t && 0 == i && (i = e);
                }),
                0 == i)
              )
                a = v.GameCtrl.boxList.shift();
              else
                for (var a = i, r = 0; r < v.GameCtrl.boxList.length; r++)
                  if (v.GameCtrl.boxList[r] == i) {
                    v.GameCtrl.boxList.splice(r, 1);
                    break;
                  }
            } else a = v.GameCtrl.boxList.shift();
            a
              ? ((t.node.active = !0), t.setColor(a), e && (t.isReady = !0))
              : (t.node.active = !1);
          }),
          (w.prototype.onPropItemChange = function () {
            this.updateProp();
          }),
          (w.prototype.onGameReplay = function () {
            this.onPlayGame();
          }),
          (w.prototype.onGameRevive = function (t) {
            null != t && t.isRevive
              ? v.GameCtrl.gameRevive(t.type)
              : v.GameCtrl.gameFail();
          }),
          (w.prototype.lateUpdate = function () {
            this.isDraw && (this.draw(), (this.isDraw = !1));
          }),
          (w.prototype.checkTips = function (t) {
            void 0 === t && (t = 0);
            for (
              var e = v.GameCtrl.getWaterNums(), o = !0, i = 0;
              i < this.boxs.length;
              i++
            ) {
              var n, a;
              if (
                !(n = this.boxs[i]).isLock &&
                n.isReady &&
                !n.isOccupied &&
                ((a = n.getColor()), 4 <= (e.get(a) || 0))
              ) {
                o = !1;
                break;
              }
            }
            o
              ? (this.hand_tips_delay = t)
              : ((this.hand_tips_delay = 0), (this.hand.active = !1)),
              (this.hand_utc = Date.now());
          }),
          (w.prototype.showHandTips = function () {
            this.hand_utc = Date.now();
            for (var t = !1, e = 2; e < this.boxs.length; e++) {
              var o;
              if ((o = this.boxs[e]).isLock) {
                var i;
                (this.isSoftGuide = !1),
                  (this.hand.active = !0),
                  (i = o.node.convertToWorldSpaceAR(cc.v3(0, -45))),
                  (i = this.node.convertToNodeSpaceAR(i)),
                  (this.hand.position = i),
                  (t = !0);
                break;
              }
            }
            !t &&
              0 < v.GameCtrl.bottleList.length &&
              ((this.isSoftGuide = !1),
              (this.hand.active = !0),
              (i = this.btnNewBottle.convertToWorldSpaceAR(cc.v3(0, -25))),
              (i = this.node.convertToNodeSpaceAR(i)),
              (this.hand.position = i));
          }),
          (w.prototype.onPourWaterStart = function () {}),
          (w.prototype.onPourWaterEnd = function () {
            (this.isDraw = !0), this.checkTips(2.5);
          }),
          (w.prototype.onFlyEnd = function () {
            this.isDraw = !0;
          }),
          (w.prototype.onGridLayerDraw = function () {
            this.isDraw = !0;
          }),
          (w.prototype.draw = function () {}),
          (w.prototype.getRenderTexture = function (t, e, o, i) {
            var n, a, r, s, c;
            return cc.isValid(t)
              ? ((n = t.getBoundingBox()),
                (a = Math.floor(n.width)),
                (r = Math.floor(n.height)),
                i ? o.initWithSize(a, r, i) : o.initWithSize(a, r),
                ((s = new cc.Node()).parent = t),
                ((c = s.addComponent(cc.Camera)).clearFlags =
                  cc.Camera.ClearFlags.COLOR),
                (c.backgroundColor = cc.color(255, 255, 255, 0)),
                (c.zoomRatio = cc.winSize.height / r),
                (c.cullingMask = e),
                (c.targetTexture = o),
                c.render(t),
                s.destroy(),
                o)
              : null;
          }),
          __decorate([i(cc.Sprite)], w.prototype, 'bg', void 0),
          __decorate([i(cc.Node)], w.prototype, 'content', void 0),
          __decorate([i(cc.Node)], w.prototype, 'gridLayer', void 0),
          __decorate([i(cc.Node)], w.prototype, 'pourLayer', void 0),
          __decorate([i(cc.Node)], w.prototype, 'lockLayer', void 0),
          __decorate([i(cc.Node)], w.prototype, 'effectLayer0', void 0),
          __decorate([i(cc.Node)], w.prototype, 'effectLayer', void 0),
          __decorate([i(cc.Node)], w.prototype, 'btnBack1', void 0),
          __decorate([i(cc.Label)], w.prototype, 'lvLab1', void 0),
          __decorate([i(cc.Node)], w.prototype, 'btnDl', void 0),
          __decorate([i(cc.Node)], w.prototype, 'dl_add1', void 0),
          __decorate([i(cc.Node)], w.prototype, 'dl_video1', void 0),
          __decorate([i(cc.Label)], w.prototype, 'dl_numLab1', void 0),
          __decorate([i(cc.Node)], w.prototype, 'btnHt', void 0),
          __decorate([i(cc.Node)], w.prototype, 'ht_add1', void 0),
          __decorate([i(cc.Node)], w.prototype, 'ht_video1', void 0),
          __decorate([i(cc.Node)], w.prototype, 'ht_gray', void 0),
          __decorate([i(cc.Label)], w.prototype, 'ht_numLab1', void 0),
          __decorate([i(cc.Node)], w.prototype, 'btnNewBottle', void 0),
          __decorate([i(cc.Node)], w.prototype, 'bottle_add1', void 0),
          __decorate([i(cc.Node)], w.prototype, 'bottle_video1', void 0),
          __decorate([i(cc.Label)], w.prototype, 'bottle_numLab1', void 0),
          __decorate([i(cc.Node)], w.prototype, 'bt_gray', void 0),
          __decorate([i(cc.Node)], w.prototype, 'bottleLayer0', void 0),
          __decorate([i(cc.Node)], w.prototype, 'bottleLayer1', void 0),
          __decorate([i(cc.Node)], w.prototype, 'bottleLayer2', void 0),
          __decorate([i(cc.Node)], w.prototype, 'shadownLayer', void 0),
          __decorate([i(cc.Node)], w.prototype, 'finishLayer', void 0),
          __decorate([i(cc.Sprite)], w.prototype, 'gridSp', void 0),
          __decorate([i(cc.Node)], w.prototype, 'warnNode', void 0),
          __decorate([i(cc.Node)], w.prototype, 'btnTest', void 0),
          __decorate([i([d.default])], w.prototype, 'boxs', void 0),
          __decorate([i(cc.Node)], w.prototype, 'ui', void 0),
          __decorate([i(cc.Node)], w.prototype, 'hand', void 0),
          (y = __decorate([c], w)),
          (o.default = y),
          cc._RF.pop();
      },
      {
        '../../../RxManager/MyLog': void 0,
        '././App': 'App',
        '././ArrayUtil': 'ArrayUtil',
        '././BasePanel': 'BasePanel',
        '././BottleItem': 'BottleItem',
        '././BottleItem2': 'BottleItem2',
        '././BoxItem': 'BoxItem',
        '././EventTypes': 'EventTypes',
        '././GameCtrl': 'GameCtrl',
        '././GameEnums': 'GameEnums',
        '././GameMgr': 'GameMgr',
        '././GameSetting': 'GameSetting',
        '././UIHelper': 'UIHelper',
        '././UserData': 'UserData',
      },
    ],
    GameView: [
      function (t, e, o) {
        'use strict';
        cc._RF.push(e, '95b6dNwcYBKYJMxJ9PCLOSQ', 'GameView');
        var i = t('./App'),
          n = t('./DateUtil'),
          a = t('./BasePanel'),
          r = t('./GameCtrl'),
          s = t('./GameSetting'),
          c = t('./SkinData'),
          l = t('./UserData'),
          p = t('./GameEnums'),
          u = t('./EventTypes'),
          d = t('./UIHelper'),
          h = t('./EffectMgr'),
          _ = t('./GameMgr'),
          f = t('./ResUtils'),
          m = t('./Rotate'),
          y = t('../../../RxManager/MyLog').default,
          g = cc._decorator,
          v = g.ccclass,
          b = g.property,
          w = (function (t) {
            function e() {
              var e = (null !== t && t.apply(this, arguments)) || this;
              return (
                (e.bg = null),
                (e.top = null),
                (e.content = null),
                (e.gridLayer = null),
                (e.pourLayer = null),
                (e.lockLayer = null),
                (e.lineLayer = null),
                (e.lineNode = null),
                (e.btContent = null),
                (e.bottleNum = null),
                (e.btnBack1 = null),
                (e.lvLab1 = null),
                (e.scoreLab1 = null),
                (e.bsLab1 = null),
                (e.timeLab1 = null),
                (e.bar1 = null),
                (e.btnSx1 = null),
                (e.sx_add1 = null),
                (e.sx_video1 = null),
                (e.sx_plus1 = null),
                (e.sx_numLab1 = null),
                (e.btnXc1 = null),
                (e.xc_add1 = null),
                (e.xc_video1 = null),
                (e.xc_plus1 = null),
                (e.xc_numLab1 = null),
                (e.btnTime1 = null),
                (e.time_add1 = null),
                (e.time_video1 = null),
                (e.time_plus1 = null),
                (e.time_numLab1 = null),
                (e.btnLx = null),
                (e.lx_add = null),
                (e.lx_video = null),
                (e.lx_plus = null),
                (e.lx_numLab = null),
                (e.bottleLayer0 = null),
                (e.bottleLayer1 = null),
                (e.bottleLayer2 = null),
                (e.shadownLayer = null),
                (e.finishLayer = null),
                (e.wj_1 = null),
                (e.wj_2 = null),
                (e.gridSp = null),
                (e.lightNode = null),
                (e.warnNode = null),
                (e.stepLayout = null),
                (e.btnTest = null),
                (e.skin_offset = new Map()),
                (e.lights = []),
                (e.dl_utc = 0),
                (e.ts_utc = 0),
                (e.js_utc = 0),
                (e.lx_utc = 0),
                (e.lines = []),
                (e.isTimeRoll = !1),
                (e.isStepRoll = !1),
                (e.isDraw = !1),
                (e.grid_rt = new cc.RenderTexture()),
                e
              );
            }
            return (
              __extends(e, t),
              (e.prototype.onLoad = function () {
                for (var t = 0; t < this.lightNode.childrenCount; t++)
                  this.lights.push(this.lightNode.children[t]);
                for (
                  cc
                    .tween(this.warnNode)
                    .sequence(
                      cc.tween(this.warnNode).to(0.5, { opacity: 100 }),
                      cc.tween(this.warnNode).to(0.5, { opacity: 255 }),
                    )
                    .repeatForever()
                    .start(),
                    this.btnTest.active = 101 == window.test,
                    101 == window.opacity
                      ? (this.btnTest.opacity = 0)
                      : (this.btnTest.opacity = 255),
                    this.lines.push(this.lineNode),
                    t = 0;
                  t < 12;
                  t++
                ) {
                  var e = cc.instantiate(this.lineNode);
                  (e.parent = this.lineLayer), this.lines.push(e);
                }
              }),
              (e.prototype.onEnable = function () {
                this.skin_offset.set(1, cc.v3(-1, 0)),
                  this.skin_offset.set(2, cc.v3(0, 0)),
                  this.skin_offset.set(3, cc.v3(0, 0)),
                  this.skin_offset.set(4, cc.v3()),
                  this.skin_offset.set(5, cc.v3()),
                  this.skin_offset.set(6, cc.v3(0, 0.5)),
                  r.GameCtrl.init({
                    gridLayer: this.gridLayer,
                    pourLayer: this.pourLayer,
                    lockLayer: this.lockLayer,
                    bottleLayer0: this.bottleLayer0,
                    finishLayer: this.finishLayer,
                    bottleLayer1: this.bottleLayer1,
                    bottleLayer2: this.bottleLayer2,
                    shadownLayer: this.shadownLayer,
                    btContent: this.btContent,
                  }),
                  this.onPlayGame(),
                  this.updateView(),
                  this.updateProp(),
                  this.initEvent();
              }),
              (e.prototype.onDisable = function () {
                var t;
                p.GameMode.Endless == r.GameCtrl.mode
                  ? l.UserData.addRank(3)
                  : p.GameMode.Normal == r.GameCtrl.mode &&
                    l.UserData.addRank(1),
                  this.grid_rt.clear(),
                  null != (t = this.gridSp.spriteFrame) && t.destroy(),
                  (this.gridSp.spriteFrame = null),
                  r.GameCtrl.clearGame(),
                  this.clear(),
                  i.App.event.targetOff(this);
              }),
              (e.prototype.update = function (t) {
                r.GameCtrl.onUpdate(t),
                  this.updateTime(),
                  this.updateStepcount();
              }),
              (e.prototype.setBg = function () {}),
              (e.prototype.updateView = function () {
                p.GameMode.Normal == r.GameCtrl.mode
                  ? (this.lvLab1.string = '\u5173\u5361 ' + l.UserData.ptLv)
                  : p.GameMode.Level == r.GameCtrl.mode
                    ? (this.lvLab1.string = '\u5173\u5361 ' + l.UserData.cgLv)
                    : (this.lvLab1.string = '\u65e0\u5c3d\u6a21\u5f0f'),
                  this.lights.forEach(function (t) {
                    t.active = !1;
                  }),
                  (this.btnXc1.active = p.GameMode.Level != r.GameCtrl.mode),
                  (this.btnLx.active = p.GameMode.Level == r.GameCtrl.mode),
                  this.updateStepcount(),
                  this.updateScore();
              }),
              (e.prototype.updateStepcount = function () {
                this.isStepRoll ||
                  (p.GameMode.Endless == r.GameCtrl.mode
                    ? (this.bsLab1.string = '')
                    : (this.bsLab1.string = r.GameCtrl.stepCount + ''),
                  (this.wj_1.active = p.GameMode.Endless == r.GameCtrl.mode),
                  this.warnCheck());
              }),
              (e.prototype.updateScore = function () {
                var t = 0;
                p.GameMode.Normal == r.GameCtrl.mode
                  ? (t = l.UserData.ptScore)
                  : p.GameMode.Endless == r.GameCtrl.mode
                    ? (t = l.UserData.wjScore)
                    : p.GameMode.Level == r.GameCtrl.mode &&
                      (t = l.UserData.cgScore),
                  (this.scoreLab1.string = '' + t);
              }),
              (e.prototype.updateTime = function () {
                this.isTimeRoll ||
                  (_.GameMgr.isGm
                    ? (this.timeLab1.string = '')
                    : ((this.timeLab1.string = n.default.secondFormat1(
                        r.GameCtrl.playTime,
                      )),
                      p.GameMode.Course != r.GameCtrl.mode &&
                        ((this.bar1.fillRange = cc.misc.clamp01(
                          r.GameCtrl.playTime / r.GameCtrl.maxTime,
                        )),
                        this.warnCheck())));
              }),
              (e.prototype.updateProp = function () {
                (this.sx_numLab1.string = '' + l.UserData.sxNum),
                  (this.xc_numLab1.string = '' + l.UserData.tsNum),
                  (this.time_numLab1.string = '' + l.UserData.jsNum),
                  (this.lx_numLab.string = '' + l.UserData.lxNum),
                  (this.sx_video1.active = l.UserData.sxNum <= 0),
                  (this.xc_video1.active = l.UserData.tsNum <= 0),
                  (this.lx_video.active = l.UserData.lxNum <= 0),
                  (this.time_video1.active = l.UserData.jsNum <= 0),
                  (this.sx_add1.active = 0 < l.UserData.sxNum),
                  (this.xc_add1.active = 0 < l.UserData.tsNum),
                  (this.lx_add.active = 0 < l.UserData.lxNum),
                  (this.time_add1.active = 0 < l.UserData.jsNum),
                  (this.sx_plus1.active = l.UserData.sxNum <= 0),
                  (this.xc_plus1.active = l.UserData.tsNum <= 0),
                  (this.lx_plus.active = l.UserData.lxNum <= 0),
                  (this.time_plus1.active = l.UserData.jsNum <= 0),
                  (this.sx_numLab1.node.active = 0 < l.UserData.sxNum),
                  (this.xc_numLab1.node.active = 0 < l.UserData.tsNum),
                  (this.lx_numLab.node.active = 0 < l.UserData.lxNum),
                  (this.time_numLab1.node.active = 0 < l.UserData.jsNum);
              }),
              (e.prototype.warnCheck = function () {
                this.warnNode.active
                  ? 5 < r.GameCtrl.stepCount &&
                    30 < r.GameCtrl.playTime &&
                    (this.warnNode.active = !1)
                  : (r.GameCtrl.stepCount <= 5 || r.GameCtrl.playTime <= 30) &&
                    (this.warnNode.active = !0);
              }),
              (e.prototype.playGame = function () {
                return __awaiter(this, void 0, void 0, function () {
                  return __generator(this, function (t) {
                    switch (
                      (y.d('==GameView===playGame===', t.label), t.label)
                    ) {
                      case 0:
                        return (
                          (this.isStepRoll = !1),
                          (this.isTimeRoll = !1),
                          (this.warnNode.active = !1),
                          (this.gridSp.node.active = !1),
                          (this.stepLayout.parent.active = !0),
                          cc.Tween.stopAllByTarget(this.content),
                          p.GameMode.Level == r.GameCtrl.mode &&
                            0 == s.GameSetting.cg_show_step &&
                            (this.stepLayout.parent.active = !1),
                          p.GameMode.Level == r.GameCtrl.mode &&
                            (this.content.scale = 1.2),
                          [4, r.GameCtrl.playGame()]
                        );
                      case 1:
                        return t.sent(), (this.lineLayer.active = !1), [2];
                    }
                  });
                });
              }),
              (e.prototype.initEvent = function () {
                i.App.event.on(
                  u.default.On_Bottle_Item_Click,
                  this.onGridItemClick,
                  this,
                ),
                  i.App.event.on(
                    u.default.On_Bottle_Collect,
                    this.onBottleCollect,
                    this,
                  ),
                  i.App.event.on(
                    u.default.On_Next_Level,
                    this.onPlayNext,
                    this,
                  ),
                  i.App.event.on(u.default.On_Game_Init, this.onGameInit, this),
                  i.App.event.on(
                    u.default.On_Prop_Num_Change,
                    this.onPropItemChange,
                    this,
                  ),
                  i.App.event.on(
                    u.default.On_Game_Replay,
                    this.onGameReplay,
                    this,
                  ),
                  i.App.event.on(
                    u.default.On_Game_Revive,
                    this.onGameRevive,
                    this,
                  ),
                  i.App.event.on(
                    u.default.On_Bottle_Del,
                    this.onBottleDel,
                    this,
                  ),
                  i.App.event.on(
                    u.default.On_Score_Change,
                    this.updateScore,
                    this,
                  ),
                  i.App.event.on(
                    u.default.On_Bottle_Num_Change,
                    this.onBottleNum,
                    this,
                  ),
                  i.App.event.on(
                    u.default.On_Game_Unlock_Bot,
                    this.unlockBot,
                    this,
                  ),
                  i.App.event.on(
                    u.default.On_Pour_Water_Act_End,
                    this.onPourWaterEnd,
                    this,
                  ),
                  i.App.event.on(
                    u.default.On_Next_Fly_End,
                    this.onFlyEnd,
                    this,
                  ),
                  i.App.event.on(
                    u.default.On_Game_Time_Add,
                    this.onTimeAdd,
                    this,
                  ),
                  i.App.event.on(
                    u.default.On_Game_Step_Add,
                    this.onStepAdd,
                    this,
                  ),
                  i.App.event.on(
                    u.default.On_Endless_Clear_One,
                    this.onClearAddTime,
                    this,
                  ),
                  this.on(
                    this.stepLayout,
                    function () {
                      r.GameCtrl.addStep(1);
                    },
                    this,
                  ),
                  this.on(this.btnSx1, this.onBtnSxClick, this, { sound: {} }),
                  this.on(this.btnXc1, this.onBtnXcClick, this, { sound: {} }),
                  this.on(this.btnLx, this.onBtnLxClick, this, { sound: {} }),
                  this.on(this.btnTime1, this.onBtnTimeClick, this, {
                    sound: {},
                  }),
                  this.on(this.btnBack1, this.onBtnBackClick, this),
                  this.on(
                    this.btnTest,
                    function () {
                      r.GameCtrl.gameWin();
                    },
                    this,
                  );
              }),
              (e.prototype.onClearAddTime = function () {
                i.App.sound.playEffect(
                  f.ResUtils.Audios.short_addtime,
                  p.BundleType.Game,
                ),
                  h.EffectMgr.showTips3(
                    '+' + s.GameSetting.endless_add_time + 's',
                    this.top.position.sub(cc.v3(-150, 40)),
                  );
              }),
              (e.prototype.onTimeAdd = function (t) {
                var e = this;
                this.warnCheck(), (this.isTimeRoll = !0);
                var o = { value: t.old };
                t.isAudio &&
                  i.App.sound.playEffect(
                    f.ResUtils.Audios.add,
                    p.BundleType.Game,
                  ),
                  cc
                    .tween(o)
                    .to(
                      0.7,
                      { value: t.now },
                      {
                        onUpdate: function () {
                          (e.timeLab1.string = n.default.secondFormat1(
                            Math.ceil(o.value),
                          )),
                            p.GameMode.Course != r.GameCtrl.mode &&
                              (e.bar1.fillRange = cc.misc.clamp01(
                                o.value / r.GameCtrl.maxTime,
                              ));
                        },
                      },
                    )
                    .call(function () {
                      (e.isTimeRoll = !1), e.updateTime();
                    })
                    .start(),
                  cc
                    .tween(this.timeLab1.node)
                    .sequence(
                      cc.tween().to(0.1, { scale: 1.2 }),
                      cc.tween().to(0.1, { scale: 1 }),
                    )
                    .repeat(3)
                    .call(function () {
                      e.timeLab1.node.scale = 1;
                    })
                    .start();
              }),
              (e.prototype.onStepAdd = function (t) {
                var e = this;
                this.warnCheck(), (this.isStepRoll = !0);
                var o = { value: t.old };
                i.App.sound.playEffect(
                  f.ResUtils.Audios.add,
                  p.BundleType.Game,
                ),
                  cc
                    .tween(o)
                    .to(
                      0.7,
                      { value: t.now },
                      {
                        onUpdate: function () {
                          e.bsLab1.string = '' + Math.ceil(o.value);
                        },
                      },
                    )
                    .call(function () {
                      (e.isStepRoll = !1), e.updateStepcount();
                    })
                    .start(),
                  cc
                    .tween(this.stepLayout)
                    .sequence(
                      cc.tween().to(0.1, { scale: 1.2 }),
                      cc.tween().to(0.1, { scale: 1 }),
                    )
                    .repeat(3)
                    .call(function () {
                      e.stepLayout.scale = 1;
                    })
                    .start();
              }),
              (e.prototype.unlockBot = function () {
                r.GameCtrl.onUnlockBot();
              }),
              (e.prototype.showTipsLight = function (t) {
                var e = t.item1.convertToWorldSpaceAR(cc.v3(0, -100)),
                  o = t.item2.convertToWorldSpaceAR(cc.v3(0, -100));
                (this.lights[0].position =
                  this.lightNode.convertToNodeSpaceAR(e)),
                  (this.lights[1].position =
                    this.lightNode.convertToNodeSpaceAR(o)),
                  (this.lights[0].active = !0),
                  (this.lights[1].active = !0);
              }),
              (e.prototype.onBtnSxClick = function () {
                var t, e;
                return __awaiter(this, void 0, void 0, function () {
                  return __generator(this, function (o) {
                    switch (o.label) {
                      case 0:
                        return Date.now() - this.dl_utc < 500
                          ? [2]
                          : ((this.dl_utc = Date.now()),
                            0 != l.UserData.sxNum
                              ? [3, 2]
                              : (i.App.sound.playEffect(
                                  'audios/btn_click',
                                  p.BundleType.Game,
                                ),
                                [
                                  4,
                                  _.GameMgr.showVideoAd({
                                    lv:
                                      r.GameCtrl.mode == p.GameMode.Normal
                                        ? 1e3 + l.UserData.ptLv
                                        : 1e4,
                                    itemName: '\u5237\u65b0\u9053\u5177',
                                  }),
                                ]));
                      case 1:
                        if (1 != o.sent()) return [2];
                        l.UserData.addProp(p.PropItemType.Refresh, 1, !1),
                          r.GameCtrl.mode == p.GameMode.Normal &&
                            null != (t = i.App.track) &&
                            t.trackEvent('tz_vd_' + l.UserData.ptLv),
                          r.GameCtrl.mode == p.GameMode.Endless &&
                            null != (e = i.App.track) &&
                            e.trackEvent('wj_vd'),
                          (o.label = 2);
                      case 2:
                        return (
                          i.App.sound.playEffect(
                            f.ResUtils.Audios.disruption,
                            p.BundleType.Game,
                          ),
                          l.UserData.useProp(p.PropItemType.Refresh),
                          r.GameCtrl.onRefresh(),
                          this.draw(0.1),
                          [2]
                        );
                    }
                  });
                });
              }),
              (e.prototype.onBtnLxClick = function () {
                return __awaiter(this, void 0, void 0, function () {
                  return __generator(this, function (t) {
                    switch (t.label) {
                      case 0:
                        return Date.now() - this.lx_utc < 500
                          ? [2]
                          : ((this.lx_utc = Date.now()),
                            0 != l.UserData.lxNum
                              ? [3, 2]
                              : (i.App.sound.playEffect(
                                  'audios/btn_click',
                                  p.BundleType.Game,
                                ),
                                [4, _.GameMgr.showVideoAd()]));
                      case 1:
                        if (1 != t.sent()) return [2];
                        l.UserData.addProp(p.PropItemType.Lx, 1, !1),
                          (t.label = 2);
                      case 2:
                        return (
                          i.App.sound.playEffect(
                            f.ResUtils.Audios.tips,
                            p.BundleType.Game,
                          ),
                          l.UserData.useProp(p.PropItemType.Lx),
                          r.GameCtrl.onLx(),
                          this.draw(0.1),
                          [2]
                        );
                    }
                  });
                });
              }),
              (e.prototype.onBtnXcClick = function () {
                var t, e;
                return __awaiter(this, void 0, void 0, function () {
                  var o;
                  return __generator(this, function (n) {
                    switch (n.label) {
                      case 0:
                        return Date.now() - this.ts_utc < 500
                          ? (console.log(
                              '[ \u70b9\u7684\u6709\u70b9\u5feb ] >',
                            ),
                            [2])
                          : ((this.ts_utc = Date.now()),
                            0 != l.UserData.tsNum
                              ? [3, 2]
                              : (i.App.sound.playEffect(
                                  'audios/btn_click',
                                  p.BundleType.Game,
                                ),
                                [
                                  4,
                                  _.GameMgr.showVideoAd({
                                    lv:
                                      r.GameCtrl.mode == p.GameMode.Normal
                                        ? 1e3 + l.UserData.ptLv
                                        : 1e4,
                                    itemName: '\u63d0\u793a\u9053\u5177',
                                  }),
                                ]));
                      case 1:
                        if (1 != n.sent()) return [2];
                        r.GameCtrl.mode == p.GameMode.Normal &&
                          null != (t = i.App.track) &&
                          t.trackEvent('tz_vd_' + l.UserData.ptLv),
                          r.GameCtrl.mode == p.GameMode.Endless &&
                            null != (e = i.App.track) &&
                            e.trackEvent('wj_vd'),
                          l.UserData.addProp(p.PropItemType.Tips, 1, !1),
                          (n.label = 2);
                      case 2:
                        return (
                          l.UserData.useProp(p.PropItemType.Tips),
                          (o = r.GameCtrl.onTips()).item1 &&
                            o.item2 &&
                            (i.App.sound.playEffect(
                              f.ResUtils.Audios.tips,
                              p.BundleType.Game,
                            ),
                            this.showTipsLight(o)),
                          [2]
                        );
                    }
                  });
                });
              }),
              (e.prototype.onBtnTimeClick = function () {
                var t, e;
                return __awaiter(this, void 0, void 0, function () {
                  return __generator(this, function (o) {
                    switch (o.label) {
                      case 0:
                        return Date.now() - this.js_utc < 500
                          ? [2]
                          : ((this.js_utc = Date.now()),
                            0 != l.UserData.jsNum
                              ? [3, 2]
                              : (i.App.sound.playEffect(
                                  'audios/btn_click',
                                  p.BundleType.Game,
                                ),
                                [
                                  4,
                                  _.GameMgr.showVideoAd({
                                    lv:
                                      r.GameCtrl.mode == p.GameMode.Normal
                                        ? 1e3 + l.UserData.ptLv
                                        : 1e4,
                                    itemName: '\u52a0\u65f6\u9053\u5177',
                                  }),
                                ]));
                      case 1:
                        if (1 != o.sent()) return [2];
                        l.UserData.addProp(p.PropItemType.Time, 1, !1),
                          r.GameCtrl.mode == p.GameMode.Normal &&
                            null != (t = i.App.track) &&
                            t.trackEvent('tz_vd_' + l.UserData.ptLv),
                          r.GameCtrl.mode == p.GameMode.Endless &&
                            null != (e = i.App.track) &&
                            e.trackEvent('wj_vd'),
                          (o.label = 2);
                      case 2:
                        return (
                          l.UserData.useProp(p.PropItemType.Time),
                          r.GameCtrl.onAddTime(s.GameSetting.add_time_sec),
                          [2]
                        );
                    }
                  });
                });
              }),
              (e.prototype.onBtnBackClick = function () {
                r.GameCtrl.gamePause(), i.App.gui.openUI(d.UIEnum.SettingView);
              }),
              (e.prototype.onBottleDel = function (t) {
                return __awaiter(this, void 0, void 0, function () {
                  return __generator(this, function () {
                    return (
                      this.onGridLayerDraw(), r.GameCtrl.onBottleDel(t), [2]
                    );
                  });
                });
              }),
              (e.prototype.onBottleCollect = function (t) {
                return __awaiter(this, void 0, void 0, function () {
                  var e, o;
                  return __generator(this, function () {
                    for (
                      this.lights.forEach(function (t) {
                        t.active = !1;
                      }),
                        this.lightNode.position = this.gridLayer.position,
                        this.lightNode.scale = this.gridLayer.scale,
                        e = 0;
                      e < this.lights.length;
                      e++
                    )
                      if (!(o = this.lights[e]).active) {
                        (o.position = t.pos.add(cc.v3(0, -130))),
                          (o.active = !0),
                          (o.getComponent(m.default).play_sec = 1);
                        break;
                      }
                    return [2];
                  });
                });
              }),
              (e.prototype.onGridItemClick = function (t) {
                return __awaiter(this, void 0, void 0, function () {
                  var e = this;
                  return __generator(this, function (o) {
                    switch (o.label) {
                      case 0:
                        return (
                          this.lights.forEach(function (t) {
                            t.active = !1;
                          }),
                          [
                            4,
                            r.GameCtrl.onGridItemClick(t, function () {
                              e.onGridLayerDraw();
                            }),
                          ]
                        );
                      case 1:
                        return o.sent(), this.onGridLayerDraw(), [2];
                    }
                  });
                });
              }),
              (e.prototype.onPlayNext = function () {
                this.onPlayGame(), this.updateView();
              }),
              (e.prototype.onPlayGame = function () {
                this.playGame();
              }),
              (e.prototype.onBottleNum = function (t) {
                (this.bottleNum.string =
                  '' + (p.GameMode.Endless == r.GameCtrl.mode ? '' : t.nums)),
                  (this.wj_2.active = p.GameMode.Endless == r.GameCtrl.mode),
                  (this.bottleNum.node.active =
                    p.GameMode.Normal == r.GameCtrl.mode);
              }),
              (e.prototype.onGameInit = function () {
                var t = this;
                p.GameMode.Level == r.GameCtrl.mode
                  ? ((this.gridLayer.opacity = 255),
                    i.App.gui.isLock(!0),
                    cc
                      .tween(this.content)
                      .to(0.2, { scale: 1 })
                      .call(function () {
                        t.draw(0.1), i.App.gui.isLock(!1);
                      })
                      .start())
                  : this.draw(0.1);
              }),
              (e.prototype.onPropItemChange = function () {
                this.updateProp();
              }),
              (e.prototype.onGameReplay = function () {
                this.onPlayGame();
              }),
              (e.prototype.onGameRevive = function (t) {
                null != t && t.isRevive
                  ? r.GameCtrl.gameRevive(t.type)
                  : r.GameCtrl.gameFail();
              }),
              (e.prototype.lateUpdate = function () {
                this.isDraw && (this.draw(), (this.isDraw = !1));
              }),
              (e.prototype.onPourWaterEnd = function () {
                this.isDraw = !0;
              }),
              (e.prototype.onFlyEnd = function () {
                this.isDraw = !0;
              }),
              (e.prototype.onGridLayerDraw = function () {
                this.isDraw = !0;
              }),
              (e.prototype.draw = function (t) {
                function e() {
                  var t;
                  (o.gridLayer.opacity = 255),
                    o.grid_rt.clear(),
                    null != (t = o.gridSp.spriteFrame) && t.destroy(),
                    o.gridSp.node.active || (o.gridSp.node.active = !0);
                  var e = o.getRenderTexture(
                      o.gridLayer,
                      4,
                      o.grid_rt,
                      cc.gfx.RB_FMT_S8,
                    ),
                    i = new cc.SpriteFrame();
                  i.setTexture(e), (o.gridSp.spriteFrame = i);
                  var n = o.skin_offset.get(c.SkinData.bot_skin) || cc.v3();
                  (o.gridSp.node.position = o.gridLayer.position.add(n)),
                    (o.gridLayer.opacity = 0);
                }
                var o = this;
                void 0 === t && (t = 0),
                  (this.isDraw = !1),
                  this.unscheduleAllCallbacks(),
                  0 < t
                    ? this.scheduleOnce(function () {
                        e();
                      }, t)
                    : e();
              }),
              (e.prototype.getRenderTexture = function (t, e, o, i) {
                var n, a, r, s, c;
                return cc.isValid(t)
                  ? ((n = t.getBoundingBox()),
                    (a = Math.floor(n.width)),
                    (r = Math.floor(n.height)),
                    i ? o.initWithSize(a, r, i) : o.initWithSize(a, r),
                    ((s = new cc.Node()).parent = t),
                    ((c = s.addComponent(cc.Camera)).clearFlags =
                      cc.Camera.ClearFlags.COLOR),
                    (c.backgroundColor = cc.color(255, 255, 255, 0)),
                    (c.zoomRatio = cc.winSize.height / r),
                    (c.cullingMask = e),
                    (c.targetTexture = o),
                    c.render(t),
                    s.destroy(),
                    o)
                  : null;
              }),
              __decorate([b(cc.Sprite)], e.prototype, 'bg', void 0),
              __decorate([b(cc.Node)], e.prototype, 'top', void 0),
              __decorate([b(cc.Node)], e.prototype, 'content', void 0),
              __decorate([b(cc.Node)], e.prototype, 'gridLayer', void 0),
              __decorate([b(cc.Node)], e.prototype, 'pourLayer', void 0),
              __decorate([b(cc.Node)], e.prototype, 'lockLayer', void 0),
              __decorate([b(cc.Node)], e.prototype, 'lineLayer', void 0),
              __decorate([b(cc.Node)], e.prototype, 'lineNode', void 0),
              __decorate([b(cc.Node)], e.prototype, 'btContent', void 0),
              __decorate([b(cc.Label)], e.prototype, 'bottleNum', void 0),
              __decorate([b(cc.Node)], e.prototype, 'btnBack1', void 0),
              __decorate([b(cc.Label)], e.prototype, 'lvLab1', void 0),
              __decorate([b(cc.Label)], e.prototype, 'scoreLab1', void 0),
              __decorate([b(cc.Label)], e.prototype, 'bsLab1', void 0),
              __decorate([b(cc.Label)], e.prototype, 'timeLab1', void 0),
              __decorate([b(cc.Sprite)], e.prototype, 'bar1', void 0),
              __decorate([b(cc.Node)], e.prototype, 'btnSx1', void 0),
              __decorate([b(cc.Node)], e.prototype, 'sx_add1', void 0),
              __decorate([b(cc.Node)], e.prototype, 'sx_video1', void 0),
              __decorate([b(cc.Node)], e.prototype, 'sx_plus1', void 0),
              __decorate([b(cc.Label)], e.prototype, 'sx_numLab1', void 0),
              __decorate([b(cc.Node)], e.prototype, 'btnXc1', void 0),
              __decorate([b(cc.Node)], e.prototype, 'xc_add1', void 0),
              __decorate([b(cc.Node)], e.prototype, 'xc_video1', void 0),
              __decorate([b(cc.Node)], e.prototype, 'xc_plus1', void 0),
              __decorate([b(cc.Label)], e.prototype, 'xc_numLab1', void 0),
              __decorate([b(cc.Node)], e.prototype, 'btnTime1', void 0),
              __decorate([b(cc.Node)], e.prototype, 'time_add1', void 0),
              __decorate([b(cc.Node)], e.prototype, 'time_video1', void 0),
              __decorate([b(cc.Node)], e.prototype, 'time_plus1', void 0),
              __decorate([b(cc.Label)], e.prototype, 'time_numLab1', void 0),
              __decorate([b(cc.Node)], e.prototype, 'btnLx', void 0),
              __decorate([b(cc.Node)], e.prototype, 'lx_add', void 0),
              __decorate([b(cc.Node)], e.prototype, 'lx_video', void 0),
              __decorate([b(cc.Node)], e.prototype, 'lx_plus', void 0),
              __decorate([b(cc.Label)], e.prototype, 'lx_numLab', void 0),
              __decorate([b(cc.Node)], e.prototype, 'bottleLayer0', void 0),
              __decorate([b(cc.Node)], e.prototype, 'bottleLayer1', void 0),
              __decorate([b(cc.Node)], e.prototype, 'bottleLayer2', void 0),
              __decorate([b(cc.Node)], e.prototype, 'shadownLayer', void 0),
              __decorate([b(cc.Node)], e.prototype, 'finishLayer', void 0),
              __decorate([b(cc.Node)], e.prototype, 'wj_1', void 0),
              __decorate([b(cc.Node)], e.prototype, 'wj_2', void 0),
              __decorate([b(cc.Sprite)], e.prototype, 'gridSp', void 0),
              __decorate([b(cc.Node)], e.prototype, 'lightNode', void 0),
              __decorate([b(cc.Node)], e.prototype, 'warnNode', void 0),
              __decorate([b(cc.Node)], e.prototype, 'stepLayout', void 0),
              __decorate([b(cc.Node)], e.prototype, 'btnTest', void 0),
              __decorate([v], e)
            );
          })(a.default);
        (o.default = w), cc._RF.pop();
      },
      {
        '../../../RxManager/MyLog': void 0,
        './App': 'App',
        './BasePanel': 'BasePanel',
        './DateUtil': 'DateUtil',
        './EffectMgr': 'EffectMgr',
        './EventTypes': 'EventTypes',
        './GameCtrl': 'GameCtrl',
        './GameEnums': 'GameEnums',
        './GameMgr': 'GameMgr',
        './GameSetting': 'GameSetting',
        './ResUtils': 'ResUtils',
        './Rotate': 'Rotate',
        './SkinData': 'SkinData',
        './UIHelper': 'UIHelper',
        './UserData': 'UserData',
      },
    ],
    GameVos: [
      function (t, e) {
        'use strict';
        cc._RF.push(e, '428f2QUMUJBrJAiT/O5ITpk', 'GameVos'),
          console.log('\u7a7a\u6587\u4ef6'),
          cc._RF.pop();
      },
      {},
    ],
    GoldNode: [
      function (t, e, o) {
        'use strict';
        var i, n, a, r, s, c, l, p, u, d, h;
        cc._RF.push(e, '6d13a8XMQpDFbkOkAW99n/p', 'GoldNode'),
          (o.GoldNode = void 0),
          (i = t('./App')),
          (u = t('./BaseUI')),
          (s = t('./UserData')),
          (n = t('./EventTypes')),
          (r = t('./UIHelper')),
          (p = (l = cc._decorator).ccclass),
          (a = l.property),
          (d = u.default),
          (h = function () {
            var t;
            return (
              ((t = (null !== d && d.apply(this, arguments)) || this).numLab =
                null),
              (t.btnAdd = null),
              (t.canClick = !0),
              t
            );
          }),
          __extends(h, d),
          (h.prototype.onEnable = function () {
            this.updatView(), this.initEvent();
          }),
          (h.prototype.onDisable = function () {
            i.App.event.targetOff(this), this.off(this.node);
          }),
          (h.prototype.updatView = function () {
            this.numLab.string = '' + s.UserData.gold;
          }),
          (h.prototype.initEvent = function () {
            this.canClick &&
              this.on(this.node, this.onBtnAdd, this, { scale: 1 }),
              i.App.event.on(
                n.default.On_Gold_Change,
                this.onValueUpudate,
                this,
              );
          }),
          (h.prototype.onValueUpudate = function () {
            this.updatView();
          }),
          (h.prototype.onBtnAdd = function () {
            var t;
            this.canClick &&
              (null != (t = i.App.track) && t.trackEvent('shop'),
              i.App.gui.openUI(r.UIEnum.ShopView));
          }),
          __decorate([a(cc.Label)], h.prototype, 'numLab', void 0),
          __decorate([a(cc.Node)], h.prototype, 'btnAdd', void 0),
          __decorate([a()], h.prototype, 'canClick', void 0),
          (c = __decorate([p()], h)),
          (o.GoldNode = c),
          cc._RF.pop();
      },
      {
        './App': 'App',
        './BaseUI': 'BaseUI',
        './EventTypes': 'EventTypes',
        './UIHelper': 'UIHelper',
        './UserData': 'UserData',
      },
    ],
    GuideView: [
      function (t, e, o) {
        'use strict';
        var i, n, a, r, s, c, l, p, u;
        cc._RF.push(e, '53e60osoXRAco3AssqnZ21y', 'GuideView'),
          (n = t('./App')),
          (l = t('./BasePanel')),
          (s = t('./EventTypes')),
          (r = t('./GameMgr')),
          (i = (a = cc._decorator).ccclass),
          a.property,
          (p = l.default),
          (u = function () {
            var t;
            return (
              ((t = (null !== p && p.apply(this, arguments)) || this).stepList =
                []),
              (t.step = 0),
              t
            );
          }),
          __extends(u, p),
          (u.prototype.onLoad = function () {
            for (var t = 1; t < 10; t++) {
              var e, o, i;
              if (!(i = this.node.getChildByName('step' + t))) break;
              this.stepList.push(i),
                (i.active = !1),
                (e = i.getChildByName('hand')) &&
                  ((o = e.children[0]),
                  cc
                    .tween(o)
                    .to(0.5, { position: cc.v3(-15, 15) })
                    .to(0.5, { position: cc.v3(0, 0) })
                    .union()
                    .repeatForever()
                    .start());
            }
          }),
          (u.prototype.onEnable = function () {
            var t;
            (t = this),
              (this.step = 0),
              n.App.event.on(
                s.default.On_Bottle_Item_Click,
                this.onBottleItemClick,
                this,
              ),
              n.App.event.on(
                s.default.On_Guide_Next_Step,
                this.onGuideNextStep,
                this,
              ),
              this.scheduleOnce(function () {
                t.stepList[0].active = !0;
              }, 0.2);
          }),
          (u.prototype.onDisable = function () {
            n.App.event.targetOff(this);
          }),
          (u.prototype.onBottleItemClick = function () {
            (0 != this.step && 1 != this.step) || this.onGuideNextStep();
          }),
          (u.prototype.onGuideNextStep = function () {
            (this.stepList[this.step].active = !1),
              this.step < this.stepList.length - 1 &&
                (this.step++,
                (this.stepList[this.step].active = !0),
                (r.GameMgr.guideStep = this.step));
          }),
          (c = __decorate([i], u)),
          (o.default = c),
          cc._RF.pop();
      },
      {
        './App': 'App',
        './BasePanel': 'BasePanel',
        './EventTypes': 'EventTypes',
        './GameMgr': 'GameMgr',
      },
    ],
    HelpItem: [
      function (t, e, o) {
        'use strict';
        var i, n, a, r, s, c, l;
        cc._RF.push(e, '505f15jHdVIwLrhG9rBpyD3', 'HelpItem'),
          (n = t('./BaseUI')),
          (a = (i = cc._decorator).ccclass),
          (s = i.property),
          (c = n.default),
          (l = function () {
            var t;
            return (
              ((t = (null !== c && c.apply(this, arguments)) || this).nameLab =
                null),
              (t.ipLab = null),
              (t.dateLab = null),
              (t.head = null),
              (t.hasGet = null),
              (t.block = null),
              (t.bgSp = null),
              (t.iconSp = null),
              (t.newIcon = null),
              (t.defHead = null),
              (t._data = null),
              (t.sid = 0),
              (t.idx = 0),
              t
            );
          }),
          __extends(l, c),
          __decorate([s(cc.Label)], l.prototype, 'nameLab', void 0),
          __decorate([s(cc.Label)], l.prototype, 'ipLab', void 0),
          __decorate([s(cc.Label)], l.prototype, 'dateLab', void 0),
          __decorate([s(cc.Sprite)], l.prototype, 'head', void 0),
          __decorate([s(cc.Node)], l.prototype, 'hasGet', void 0),
          __decorate([s(cc.Node)], l.prototype, 'block', void 0),
          __decorate([s(cc.Sprite)], l.prototype, 'bgSp', void 0),
          __decorate([s(cc.Sprite)], l.prototype, 'iconSp', void 0),
          __decorate([s(cc.Node)], l.prototype, 'newIcon', void 0),
          __decorate([s(cc.SpriteFrame)], l.prototype, 'defHead', void 0),
          (r = __decorate([a], l)),
          (o.default = r),
          cc._RF.pop();
      },
      { './BaseUI': 'BaseUI' },
    ],
    HelpView: [
      function (t, e, o) {
        'use strict';
        var i, n, a, r, s, c, l, p, u;
        cc._RF.push(e, '79c88K6ipdEWq8R4i9l/4hF', 'HelpView'),
          (s = t('./List')),
          (c = t('./BasePanel')),
          (n = t('./SkinItem2')),
          (i = (r = cc._decorator).ccclass),
          (l = r.property),
          (p = c.default),
          (u = function () {
            var t;
            return (
              ((t = (null !== p && p.apply(this, arguments)) || this).panel =
                null),
              (t.btnClose = null),
              (t.item2 = null),
              (t.listView = null),
              (t.tipsNode = null),
              (t.listTitle = null),
              (t.btnShare = null),
              t
            );
          }),
          __extends(u, p),
          __decorate([l(cc.Node)], u.prototype, 'panel', void 0),
          __decorate([l(cc.Node)], u.prototype, 'btnClose', void 0),
          __decorate([l(n.default)], u.prototype, 'item2', void 0),
          __decorate([l(s.default)], u.prototype, 'listView', void 0),
          __decorate([l(cc.Node)], u.prototype, 'tipsNode', void 0),
          __decorate([l(cc.Node)], u.prototype, 'listTitle', void 0),
          __decorate([l(cc.Node)], u.prototype, 'btnShare', void 0),
          (a = __decorate([i], u)),
          (o.default = a),
          cc._RF.pop();
      },
      {
        './BasePanel': 'BasePanel',
        './List': 'List',
        './SkinItem2': 'SkinItem2',
      },
    ],
    HomeView: [
      function (t, e, o) {
        'use strict';
        cc._RF.push(e, 'd5d692TOclBJ4AMtBmb4U9g', 'HomeView');
        var i,
          n,
          a,
          r,
          s,
          c,
          l,
          p,
          u,
          d,
          h,
          _,
          f,
          m,
          y,
          g,
          v,
          b,
          w,
          A,
          L,
          S,
          C,
          E,
          G = t('../../../RxManager/AdManager').default,
          k = t('../../../RxManager/MyLog').default,
          D = t('../../../RxManager/RxConfig').default,
          T = t('../../../RxManager/RxUtls').default;
        (p = t('./Breath')),
          (f = t('./App')),
          (n = t('./UIMgr')),
          (w = t('./DateUtil')),
          (g = t('./BasePanel')),
          (a = t('./GameCtrl')),
          (S = t('./GameSetting')),
          (m = t('./LocalData')),
          (i = t('./NetData')),
          (A = t('./SkinData')),
          (r = t('./UserData')),
          (u = t('./GameEnums')),
          (d = t('./TrackEnums')),
          (s = t('./EventTypes')),
          (c = t('./UIHelper')),
          (L = t('./EffectMgr')),
          (_ = t('./GameMgr')),
          (h = t('./NetMgr'));
        var I = t('./UserData');
        (y = (b = cc._decorator).ccclass),
          (l = b.property),
          (C = g.default),
          (E = function () {
            var t;
            return (
              ((t = (null !== C && C.apply(this, arguments)) || this).btnSound =
                null),
              (t.sound_op = null),
              (t.sound_cl = null),
              (t.btnNew = null),
              (t.btnPt = null),
              (t.btnWj = null),
              (t.btnDay = null),
              (t.btnInvite = null),
              (t.btnSkin = null),
              (t.btnRank = null),
              (t.btnCollect = null),
              (t.btnRukou = null),
              (t.btnMoreGame = null),
              (t.btnShare = null),
              (t.btnSC = null),
              (t.btnZm = null),
              (t.btnTz = null),
              (t.Tzqp = null),
              (t.TzNumLab = null),
              (t.dayHd = null),
              (t.skin_hd = null),
              (t.dayBreath = null),
              (t.skinBreath = null),
              (t.levelLab = null),
              (t.debug = null),
              (t.levelEdit = null),
              (t.btnGo = null),
              (t.btnDy = null),
              (t.btnPy = null),
              (t.btnFeedBack = null),
              (t.isFirst = !0),
              (t.isClickPlay = !1),
              (t.isCheckDy = !0),
              (t.leftReward = null),
              (t.moreGame = null),
              t
            );
          }),
          __extends(E, C),
          (E.prototype.onLoad = function () {
            var t, e;
            (window.UserData = I.UserData),
              null != (t = f.App.track) && t.trackEvent(d.TrackEnums.home),
              (e = this.Tzqp.getChildByName('layout')),
              cc
                .tween(e)
                .sequence(
                  cc.tween().to(0.1, { scale: 0.9 }),
                  cc.tween().to(0.1, { scale: 1.1 }),
                  cc.tween().to(0.1, { scale: 1 }),
                )
                .delay(1)
                .union()
                .repeatForever()
                .start(),
              (this.debug.active = 101 == window.test),
              (this.btnFeedBack.active = 1 == S.GameSetting.show_feedBack),
              G.getInstance().getData();
          }),
          (E.prototype.onEnable = function () {
            var t = this;
            this.udpateView(),
              (this.isClickPlay = !1),
              this.isFirst || this.checkSkin(),
              (this.leftReward.active = G.getInstance().checkLeftReward()),
              this.checkSign(),
              this.checkSkinHd(),
              (this.isFirst = !1),
              (1 != T.get('navigateToScene') &&
                '1' != T.get('navigateToScene')) ||
                (this.btnRukou.active = !1),
              (this.moreGame.active = !1),
              G.getInstance().getData(function () {
                t.moreGame.active = D.getInstance().wx_info.showMoreGame;
              });
          }),
          (E.prototype.onDisable = function () {
            this.unscheduleAllCallbacks(), this.hideAuth(), this.hidePyq();
          }),
          (E.prototype.udpateView = function () {
            (this.TzNumLab.string = i.NetData.tzNum + ''),
              this.checkDy(),
              (this.levelLab.string =
                '- \u7b2c ' + r.UserData.cgLv + ' \u5173 -'),
              this.onViewChange();
          }),
          (E.prototype.checkSkin = function () {
            A.SkinData.isAllUnlock() ||
              1 != S.GameSetting.back_show_skin ||
              f.App.gui.openUI(c.UIEnum.SkinView);
          }),
          (E.prototype.checkSign = function () {
            var t;
            (t = w.default.compare(r.UserData.sign_date, Date.now())),
              (this.dayHd.active = !t),
              t ? this.dayBreath.stopEff() : this.dayBreath.playEff();
          }),
          (E.prototype.checkSkinHd = function () {
            var t;
            (t = A.SkinData.isAllUnlock()),
              (this.skin_hd.active = !t),
              t ? this.skinBreath.stopEff() : this.skinBreath.playEff();
          }),
          (E.prototype.initEvent = function () {
            this.on(this.btnSound, this.onBtnSoundClick, this),
              this.on(this.btnNew, this.onBtnNewClick, this),
              this.on(this.btnPt, this.onBtnPtClick, this),
              this.on(this.btnWj, this.onBtnWjClick, this),
              this.on(this.btnDay, this.onBtnDayClick, this),
              this.on(this.btnInvite, this.onBtnInviteClick, this),
              this.on(this.btnSkin, this.onBtnSkinClick, this),
              this.on(this.btnRank, this.onBtnRankClick, this),
              this.on(this.btnShare, this.onBtnShareClick, this),
              this.on(this.btnSC, this.onBtnSCClick, this),
              this.on(this.btnTz, this.onBtnTzClick, this),
              this.on(this.btnZm, this.onBtnZmClick, this),
              this.on(this.btnCollect, this.onBtnCollectClick, this),
              this.on(this.btnRukou, this.onBtnRukouClick, this),
              this.on(this.btnMoreGame, this.onBtnMoreGameClick, this),
              this.on(this.btnGo, this.onBtnGoClick, this),
              this.on(this.btnDy, this.onBtnDyClick, this),
              this.on(this.btnPy, this.onBtnPyClick, this),
              this.on(this.btnFeedBack, this.onBtnFeedBackClick, this),
              f.App.event.on(s.default.USER_AUTH, this.onUserAuth, this),
              f.App.event.on(s.default.VIEW_OPEN, this.onViewChange, this),
              f.App.event.on(s.default.VIEW_CLOSE, this.onViewChange, this),
              f.App.event.on(s.default.On_Tz_Num_Update, this.onTzUpdate, this),
              f.App.event.on(s.default.On_Sign_Update, this.checkSign, this),
              f.App.event.on(s.default.On_Change_Skin, this.checkSkinHd, this),
              f.App.event.on(s.default.On_Game_Play, this.onBtnPtClick, this),
              f.App.event.on(
                s.default.CLUB_BUTTON_CLICK,
                this.onBtnPyClick,
                this,
              );
          }),
          (E.prototype.onBtnMoreGameClick = function () {
            k.d('====onBtnMoreGameClick===='),
              cc.director.loadScene('LoadScene');
          }),
          (E.prototype.checkDy = function () {
            this.btnDy.active = _.GameMgr.isDy;
          }),
          (E.prototype.onBtnDyClick = function () {
            var t, e;
            (e = this),
              cc.sys.platform == cc.sys.WECHAT_GAME &&
                wx.requestSubscribeSystemMessage &&
                (null != (t = f.App.track) && t.trackEvent('dygx'),
                wx.requestSubscribeSystemMessage({
                  msgTypeList: ['SYS_MSG_TYPE_WHATS_NEW'],
                  success: function (t) {
                    console.log('\u8ba2\u9605\u7ed3\u679c', t),
                      (_.GameMgr.isDy = !1),
                      (e.btnDy.active = !1),
                      (_.GameMgr.isDy = !1);
                  },
                }));
          }),
          (E.prototype.onBtnFeedBackClick = function () {}),
          (E.prototype.onBtnPyClick = function () {
            var t;
            null != (t = f.App.track) && t.trackEvent('yxq');
          }),
          (E.prototype.onBtnGoClick = function () {
            var t;
            (t = this.levelEdit.string) &&
              (r.UserData.setCgLv(parseInt(t)), this.onBtnPtClick());
          }),
          (E.prototype.onTzUpdate = function () {
            this.TzNumLab.string = i.NetData.tzNum + '';
          }),
          (E.prototype.onUserAuth = function (t) {
            m.LocalData.setValue('nick_name', t.nickName),
              m.LocalData.setValue('head_url', t.avatarUrl),
              h.NetMgr.setUserInfo(),
              this.hideAuth();
          }),
          (E.prototype.onViewChange = function () {
            var t;
            (t = f.App.gui.getLastNode(n.LayerEnum.TOP_LAYER)),
              this.unscheduleAllCallbacks(),
              !t && f.App.gui.hasUI(c.UIEnum.HomeView)
                ? (this.showAuth(), this.showPyq())
                : (this.hideAuth(), this.hidePyq());
          }),
          (E.prototype.showAuth = function () {
            var t;
            (t = this),
              m.LocalData.getValue('head_url') ||
                this.scheduleOnce(function () {
                  f.App.platform.createAuthorizeBtn(t.btnRank);
                }, 0.05);
          }),
          (E.prototype.hideAuth = function () {
            f.App.platform.removeAuthBtn();
          }),
          (E.prototype.showPyq = function () {
            var t;
            (t = this),
              this.scheduleOnce(function () {
                f.App.platform.showClubButton(t.btnPy, {
                  image: 'https://cdn.gzgame99.cn/bottle/wx/icon/yxq.png',
                });
              });
          }),
          (E.prototype.hidePyq = function () {
            f.App.platform.hideClubButton();
          }),
          (E.prototype.onBtnSoundClick = function () {
            f.App.gui.openUI(c.UIEnum.SettingView, { from: 'home' });
          }),
          (E.prototype.onBtnNewClick = function () {
            return __awaiter(this, void 0, void 0, function () {
              return __generator(this, function (t) {
                switch (t.label) {
                  case 0:
                    return this.isClickPlay
                      ? [2]
                      : 0 == r.UserData.energy
                        ? (f.App.gui.openUI(c.UIEnum.EnergyView), [2])
                        : ((this.isClickPlay = !0),
                          (a.GameCtrl.mode = u.GameMode.Course),
                          [4, a.GameCtrl.addGame()]);
                  case 1:
                    return t.sent(), f.App.gui.closeUI(c.UIEnum.HomeView), [2];
                }
              });
            });
          }),
          (E.prototype.onBtnPtClick = function () {
            return __awaiter(this, void 0, void 0, function () {
              return __generator(this, function (t) {
                switch (
                  (G.getInstance().startRecordVideo(),
                  k.d('====onBtnPtClick======', t.label),
                  t.label)
                ) {
                  case 0:
                    return this.isClickPlay
                      ? [2]
                      : 0 >= r.UserData.energy
                        ? (f.App.gui.openUI(c.UIEnum.EnergyView), [2])
                        : ((this.isClickPlay = !0),
                          (a.GameCtrl.mode = u.GameMode.Level),
                          [4, a.GameCtrl.addGame()]);
                  case 1:
                    return t.sent(), f.App.gui.closeUI(c.UIEnum.HomeView), [2];
                }
              });
            });
          }),
          (E.prototype.onBtnWjClick = function () {
            return __awaiter(this, void 0, void 0, function () {
              return (
                G.getInstance().startRecordVideo(),
                __generator(this, function (t) {
                  switch (t.label) {
                    case 0:
                      return [4, _.GameMgr.showVideoAd()];
                    case 1:
                      return 1 != t.sent()
                        ? [2]
                        : ((a.GameCtrl.mode = u.GameMode.Endless),
                          [4, a.GameCtrl.addGame()]);
                    case 2:
                      return (
                        t.sent(), f.App.gui.closeUI(c.UIEnum.HomeView), [2]
                      );
                  }
                })
              );
            });
          }),
          (E.prototype.onBtnDayClick = function () {
            f.App.gui.openUI(c.UIEnum.SignInView);
          }),
          (E.prototype.onBtnInviteClick = function () {}),
          (E.prototype.onBtnSkinClick = function () {
            var t;
            null != (t = f.App.track) && t.trackEvent('skin'),
              f.App.gui.openUI(c.UIEnum.SkinView);
          }),
          (E.prototype.onBtnRankClick = function () {}),
          (E.prototype.onBtnShareClick = function () {
            G.getInstance().share();
          }),
          (E.prototype.onBtnSCClick = function () {}),
          (E.prototype.onBtnTzClick = function () {
            return __awaiter(this, void 0, void 0, function () {
              return (
                G.getInstance().startRecordVideo(),
                __generator(this, function (t) {
                  switch (t.label) {
                    case 0:
                      return r.UserData.cgLv <= S.GameSetting.tz_unlock_lv
                        ? (L.EffectMgr.showTips(
                            '\u901a\u5173\u7b2c' +
                              S.GameSetting.tz_unlock_lv +
                              '\u5173\u5f00\u653e',
                          ),
                          [2])
                        : this.isClickPlay
                          ? [2]
                          : 0 == r.UserData.energy
                            ? (f.App.gui.openUI(c.UIEnum.EnergyView), [2])
                            : ((this.isClickPlay = !0),
                              (a.GameCtrl.mode = u.GameMode.Normal),
                              [4, a.GameCtrl.addGame()]);
                    case 1:
                      return (
                        t.sent(), f.App.gui.closeUI(c.UIEnum.HomeView), [2]
                      );
                  }
                })
              );
            });
          }),
          (E.prototype.onBtnZmClick = function () {}),
          (E.prototype.onBtnCollectClick = function () {
            var t;
            null != (t = f.App.track) && t.trackEvent('coll'),
              f.App.gui.openUI(c.UIEnum.CollectView);
          }),
          (E.prototype.onBtnRukouClick = function () {
            var t;
            1 != T.get('navigateToScene') && '1' != T.get('navigateToScene')
              ? (null != (t = f.App.track) && t.trackEvent('coll'),
                f.App.gui.openUI(c.UIEnum.RukouView))
              : L.EffectMgr.showTips(
                  '\u5df2\u83b7\u5f97\u4fa7\u8fb9\u680f\u5956\u52b1',
                );
          }),
          __decorate([l(cc.Node)], E.prototype, 'btnSound', void 0),
          __decorate([l(cc.Node)], E.prototype, 'sound_op', void 0),
          __decorate([l(cc.Node)], E.prototype, 'sound_cl', void 0),
          __decorate([l(cc.Node)], E.prototype, 'btnNew', void 0),
          __decorate([l(cc.Node)], E.prototype, 'btnPt', void 0),
          __decorate([l(cc.Node)], E.prototype, 'btnWj', void 0),
          __decorate([l(cc.Node)], E.prototype, 'btnDay', void 0),
          __decorate([l(cc.Node)], E.prototype, 'btnInvite', void 0),
          __decorate([l(cc.Node)], E.prototype, 'btnSkin', void 0),
          __decorate([l(cc.Node)], E.prototype, 'btnRank', void 0),
          __decorate([l(cc.Node)], E.prototype, 'btnCollect', void 0),
          __decorate([l(cc.Node)], E.prototype, 'btnRukou', void 0),
          __decorate([l(cc.Node)], E.prototype, 'btnMoreGame', void 0),
          __decorate([l(cc.Node)], E.prototype, 'btnShare', void 0),
          __decorate([l(cc.Node)], E.prototype, 'btnSC', void 0),
          __decorate([l(cc.Node)], E.prototype, 'btnZm', void 0),
          __decorate([l(cc.Node)], E.prototype, 'btnTz', void 0),
          __decorate([l(cc.Node)], E.prototype, 'Tzqp', void 0),
          __decorate([l(cc.Label)], E.prototype, 'TzNumLab', void 0),
          __decorate([l(cc.Node)], E.prototype, 'dayHd', void 0),
          __decorate([l(cc.Node)], E.prototype, 'skin_hd', void 0),
          __decorate([l(p.default)], E.prototype, 'dayBreath', void 0),
          __decorate([l(p.default)], E.prototype, 'skinBreath', void 0),
          __decorate([l(cc.Label)], E.prototype, 'levelLab', void 0),
          __decorate([l(cc.Node)], E.prototype, 'debug', void 0),
          __decorate([l(cc.EditBox)], E.prototype, 'levelEdit', void 0),
          __decorate([l(cc.Node)], E.prototype, 'btnGo', void 0),
          __decorate([l(cc.Node)], E.prototype, 'btnDy', void 0),
          __decorate([l(cc.Node)], E.prototype, 'btnPy', void 0),
          __decorate([l(cc.Node)], E.prototype, 'btnFeedBack', void 0),
          __decorate([l(cc.Node)], E.prototype, 'leftReward', void 0),
          __decorate([l(cc.Node)], E.prototype, 'moreGame', void 0),
          (v = __decorate([y], E)),
          (o.default = v),
          cc._RF.pop();
      },
      {
        '../../../RxManager/AdManager': void 0,
        '../../../RxManager/MyLog': void 0,
        '../../../RxManager/RxConfig': void 0,
        '../../../RxManager/RxUtls': void 0,
        './App': 'App',
        './BasePanel': 'BasePanel',
        './Breath': 'Breath',
        './DateUtil': 'DateUtil',
        './EffectMgr': 'EffectMgr',
        './EventTypes': 'EventTypes',
        './GameCtrl': 'GameCtrl',
        './GameEnums': 'GameEnums',
        './GameMgr': 'GameMgr',
        './GameSetting': 'GameSetting',
        './LocalData': 'LocalData',
        './NetData': 'NetData',
        './NetMgr': 'NetMgr',
        './SkinData': 'SkinData',
        './TrackEnums': 'TrackEnums',
        './UIHelper': 'UIHelper',
        './UIMgr': 'UIMgr',
        './UserData': 'UserData',
      },
    ],
    HttpNet: [
      function (t, e, o) {
        'use strict';
        var i, n, a, r;
        cc._RF.push(e, 'f1137RgLTtFNIYS0zVdTN1P', 'HttpNet'),
          (o.HttpNet = void 0),
          (a = t('./App')),
          (i = t('./NetBase')),
          ((r = function () {
            (this.netBase = new i.default()),
              (this.version = '1.0.0'),
              (this.host = ''),
              (this.channel_id = ''),
              (this.scene = ''),
              (this.inviter_id = 0),
              (this.share_type = ''),
              (this.user_cfg = 0),
              (this.invit_date = 0),
              (this.miniID = ''),
              (this.appId = ''),
              (this.parsers = new Map()),
              (this.reqList = {}),
              r._instance
                ? console.error('HttpNet \u5df2\u5b9e\u4f8b\u5316')
                : (((r._instance = this).netBase.host = this.host),
                  (this.netBase.version = window.version || this.version),
                  (this.netBase.appid = window.appid || this.appId),
                  (this.netBase.miniID = window.miniID || this.miniID),
                  (this.netBase.isInit = !0));
          }).prototype.initialize = function (t) {
            var e, o, i;
            for (var n in t) this.hasOwnProperty(n) && (this[n] = t[n]);
            (this.netBase.host = this.host),
              console.warn('host', this.host),
              (e = a.App.platform.getLaunchOptionsSync()) &&
                ((o = (e.query && e.query.channel_id) || ''),
                (i = (e.referrerInfo && e.referrerInfo.appId) || ''),
                (this.channel_id = o || i),
                (this.scene = e.scene || ''),
                (this.inviter_id = (e.query && e.query.inviter_id) || 0),
                (this.share_type = (e.query && e.query.share_type) || ''),
                (this.user_cfg = (e.query && e.query.user_cfg) || 0),
                (this.invit_date = (e.query && e.query.date) || 0));
          }),
          (r.prototype.setOpenId = function (t) {
            (this.openid = t),
              (this.netBase.openid = t),
              console.log('openid:', t),
              (a.App.platform.openid = t),
              a.App.track.setOpenid(t);
          }),
          (r.prototype.setUID = function (t) {
            (this.uid = t), console.log('uid:', t);
          }),
          (r.prototype.getUid = function () {
            return this.uid;
          }),
          (r.prototype.getOpenId = function () {
            return '1';
          }),
          (r.prototype.register = function (t, e) {
            this.parsers.has(t)
              ? console.warn('\u5df2\u6ce8\u518c\u89e3\u6790\u5668' + t)
              : this.parsers.set(t, e);
          }),
          (r.prototype.send = function (t, e, o, i) {
            var n;
            return (
              (n = this),
              new Promise(function (a, r) {
                var s;
                n.reqList[t]
                  ? (console.warn('\u5df2\u5728\u8bf7\u6c42\uff1a' + t), r())
                  : ((s = n.makeReqBody(t, o, e, i)),
                    n.netBase.request(s).then(
                      function (e) {
                        null != e && e.openid && n.setOpenId(e.openid),
                          null != e && e.id && n.setUID(e.id),
                          n.parsers.has(t) && n.parsers.get(t).parse(t, e),
                          a(e);
                      },
                      function (t) {
                        null != t && t.msg && console.warn('err.msg:' + t.msg),
                          r(t);
                      },
                    ));
              })
            );
          }),
          (r.prototype.makeReqBody = function (t, e, o, i) {
            var n;
            if (
              (((n = {}).url = t),
              (n.method = null != e ? e : 'POST'),
              i && (n.host = i),
              (n.data = {
                openid: this.openid,
                uid: this.uid,
                appid: this.appId,
                channel_id: this.channel_id,
                scene_id: this.scene,
              }),
              this.inviter_id && (n.data.inviter_id = this.inviter_id),
              this.share_type && (n.data.share_type = this.share_type),
              this.user_cfg && (n.data.user_cfg = this.user_cfg),
              this.invit_date && (n.data.date = this.invit_date),
              o)
            )
              for (var a in o) n.data[a] = o[a];
            return (
              console.log('\u8bf7\u6c42\u6570\u636e\uff1a', JSON.stringify(n)),
              n
            );
          }),
          (n = r),
          (o.HttpNet = n),
          cc._RF.pop();
      },
      { './App': 'App', './NetBase': 'NetBase' },
    ],
    IConfParser: [
      function (t, e, o) {
        'use strict';
        cc._RF.push(e, 'a4200zS1L5EDLgW+5E5BSIG', 'IConfParser'),
          (o.default = function () {}),
          cc._RF.pop();
      },
      {},
    ],
    IDataConfVo: [
      function (t, e) {
        'use strict';
        cc._RF.push(e, 'a7ef9cciTtIdKLVnSkHKsrS', 'IDataConfVo'),
          console.log('\u7a7a\u6587\u4ef6'),
          cc._RF.pop();
      },
      {},
    ],
    IParser: [
      function (t, e, o) {
        'use strict';
        cc._RF.push(e, 'f1f11dVqLVDdrFHlO9zUid4', 'IParser'),
          (o.default = function () {}),
          cc._RF.pop();
      },
      {},
    ],
    IServerVo: [
      function (t, e) {
        'use strict';
        cc._RF.push(e, '26d8asCNxxEGans2rhgeUs7', 'IServerVo'),
          console.log('\u7a7a\u6587\u4ef6'),
          cc._RF.pop();
      },
      {},
    ],
    ITTAd: [
      function (t, e) {
        'use strict';
        cc._RF.push(e, '123c9x+AZZBWIM48h+ppvm4', 'ITTAd'),
          console.log('\u7a7a\u6587\u4ef6'),
          cc._RF.pop();
      },
      {},
    ],
    IconInfo: [
      function (t, e) {
        'use strict';
        cc._RF.push(e, '23f8dv4I0BK0YECTO8SbghH', 'IconInfo'),
          console.log('\u7a7a\u6587\u4ef6'),
          cc._RF.pop();
      },
      {},
    ],
    LaunchMgr: [
      function (t, e, o) {
        'use strict';
        var i, n, a, r, s, c, l, p, u, d, h, _;
        cc._RF.push(e, '33805W2eNJOQbHC4PW4cKB3', 'LaunchMgr'),
          (o.LaunchMgr = void 0),
          (c = t('./App')),
          (n = t('./PromiseUtil')),
          (s = t('./ConfData')),
          (i = t('./GameSetting')),
          (l = t('./LocalData')),
          (d = t('./NetData')),
          (h = t('./GameEnums')),
          (u = t('./TrackEnums')),
          (p = t('./EventTypes')),
          (r = t('./NetMgr')),
          ((_ = function () {
            this.isLoadRemoteConf = !1;
          }).prototype.start = function () {
            var t, e;
            return __awaiter(this, void 0, void 0, function () {
              return __generator(this, function (o) {
                switch (o.label) {
                  case 0:
                    return [4, r.NetMgr.getSetting()];
                  case 1:
                    return o.sent(), [4, r.NetMgr.getData()];
                  case 2:
                    return (
                      o.sent(),
                      l.LocalData.initData(d.NetData.gameData),
                      1 == l.LocalData.getValue('cgLv') &&
                        (c.App.track.is_new = 1),
                      null != (t = c.App.track) &&
                        t.trackEvent(u.TrackEnums.loading),
                      null != (e = c.App.track) &&
                        e.trackEvent(u.TrackEnums.register),
                      c.App.platform.hideLoading(),
                      [4, this.loadRemoteConf()]
                    );
                  case 3:
                    return (
                      o.sent(),
                      this.isLoadRemoteConf ? [3, 5] : [4, this.loadLocalConf()]
                    );
                  case 4:
                    o.sent(), (o.label = 5);
                  case 5:
                    return [4, this.loadRes()];
                  case 6:
                    return (
                      o.sent(), this.onProgress(1), [4, r.NetMgr.getCustoms()]
                    );
                  case 7:
                    return (
                      o.sent(),
                      c.App.event.emit(p.default.LAUNCH_LOAD_COMPLETE),
                      this.preload(),
                      [2]
                    );
                }
              });
            });
          }),
          (_.prototype.loadRes = function () {
            return __awaiter(this, void 0, void 0, function () {
              return __generator(this, function (t) {
                switch (t.label) {
                  case 0:
                    return [4, n.default.awaitTo(this.loadAssets())];
                  case 1:
                    return t.sent(), [2];
                }
              });
            });
          }),
          (_.prototype.loadLocalConf = function () {
            return __awaiter(this, void 0, void 0, function () {
              var t;
              return (
                (t = this),
                __generator(this, function () {
                  return [
                    2,
                    new Promise(function (e) {
                      return __awaiter(t, void 0, void 0, function () {
                        return __generator(this, function (t) {
                          switch (t.label) {
                            case 0:
                              return [4, this.loadBundle()];
                            case 1:
                              return (
                                t
                                  .sent()
                                  .load(
                                    'conf/levelConf',
                                    cc.JsonAsset,
                                    function (t, o) {
                                      s.ConfData.levelConf.parse('', o), e();
                                    },
                                  ),
                                [2]
                              );
                          }
                        });
                      });
                    }),
                  ];
                })
              );
            });
          }),
          (_.prototype.loadRemoteConf = function () {
            return __awaiter(this, void 0, void 0, function () {
              var t;
              return (
                (t = this),
                __generator(this, function () {
                  return [
                    2,
                    new Promise(function (e) {
                      return __awaiter(t, void 0, void 0, function () {
                        var t;
                        return (
                          (t = this),
                          __generator(this, function () {
                            return (
                              cc.resources.load('levelConf', function (o, n) {
                                o ||
                                  ((t.isLoadRemoteConf = !0),
                                  console.log(
                                    '\u8fdc\u7a0b\u914d\u7f6e\u52a0\u8f7d\u5b8c\u6210',
                                    101 == window.test
                                      ? i.GameSetting.cg_lv_conf_debug
                                      : i.GameSetting.cg_lv_conf_release,
                                  ),
                                  s.ConfData.levelConf.parse(void 0, n)),
                                  e();
                              }),
                              [2]
                            );
                          })
                        );
                      });
                    }),
                  ];
                })
              );
            });
          }),
          (_.prototype.loadBundle = function () {
            return c.App.res.getBundle(h.BundleType.Game);
          }),
          (_.prototype.loadAssets = function () {
            return __awaiter(this, void 0, void 0, function () {
              var t;
              return __generator(this, function (e) {
                switch (e.label) {
                  case 0:
                    return (
                      (t = [
                        {
                          url: 'views/HomeView',
                          type: cc.Prefab,
                          bundle: h.BundleType.Game,
                        },
                      ]),
                      [4, c.App.res.loadAssets(t)]
                    );
                  case 1:
                    return e.sent(), [2];
                }
              });
            });
          }),
          (_.prototype.preload = function () {
            return __awaiter(this, void 0, void 0, function () {
              return __generator(this, function (t) {
                switch (t.label) {
                  case 0:
                    return [4, this.loadBundle()];
                  case 1:
                    return (
                      t
                        .sent()
                        .preloadDir(
                          'res/game/box',
                          cc.SpriteFrame,
                          function (t, e) {
                            console.log(
                              '\u9884\u52a0\u8f7d\u5b8c\u6210',
                              e.length,
                            );
                          },
                        ),
                      [2]
                    );
                }
              });
            });
          }),
          (_.prototype.onProgress = function () {}),
          (a = _),
          (o.LaunchMgr = new a()),
          cc._RF.pop();
      },
      {
        './App': 'App',
        './ConfData': 'ConfData',
        './EventTypes': 'EventTypes',
        './GameEnums': 'GameEnums',
        './GameSetting': 'GameSetting',
        './LocalData': 'LocalData',
        './NetData': 'NetData',
        './NetMgr': 'NetMgr',
        './PromiseUtil': 'PromiseUtil',
        './TrackEnums': 'TrackEnums',
      },
    ],
    LevelConf: [
      function (t, e, o) {
        'use strict';
        var i, n, a;
        cc._RF.push(e, 'efe99mrnntFZpfhE5b8AYpZ', 'LevelConf'),
          (n = t('./MathUtil')),
          ((a = function () {
            (this.cg_level_map = new Map()),
              (this.cg_max_level = 0),
              (this.lv_list = []);
          }).prototype.parse = function (t, e) {
            for (var o in e.json) {
              var i;
              (i = parseInt(o.split('_')[1])),
                (this.cg_max_level = Math.max(this.cg_max_level, i)),
                this.cg_level_map.set(i, e.json[o]);
            }
            console.log('[ this.cg_level_map ] >', this.cg_level_map);
          }),
          (a.prototype.getCgConf = function (t) {
            var e, o;
            return (
              t <= this.cg_max_level
                ? (0 < this.lv_list.length && (t = this.lv_list[t - 1] || t),
                  console.log('[ level ] >', t),
                  (o = this.cg_level_map.get(t)))
                : ((e = n.default.randomRangeInt(4, this.cg_max_level + 1)),
                  (o = this.cg_level_map.get(e))),
              JSON.parse(JSON.stringify(o))
            );
          }),
          (i = a),
          (o.default = i),
          cc._RF.pop();
      },
      { './MathUtil': 'MathUtil' },
    ],
    ListItem: [
      function (t, e, o) {
        'use strict';
        var i, n, a, r, s, c, l, p, u, d, h;
        cc._RF.push(e, '44079lDsqtKTrkGzKo4MaxZ', 'ListItem'),
          (l = (n = cc._decorator).ccclass),
          (c = n.property),
          (i = n.disallowMultiple),
          (a = n.menu),
          (s = n.executionOrder),
          ((u = r = r || {})[(u.NONE = 0)] = 'NONE'),
          (u[(u.TOGGLE = 1)] = 'TOGGLE'),
          (u[(u.SWITCH = 2)] = 'SWITCH'),
          (d = cc.Component),
          (h = function () {
            var t;
            return (
              ((t = (null !== d && d.apply(this, arguments)) || this).icon =
                null),
              (t.title = null),
              (t.selectedMode = r.NONE),
              (t.selectedFlag = null),
              (t.selectedSpriteFrame = null),
              (t._unselectedSpriteFrame = null),
              (t.adaptiveSize = !1),
              (t._selected = !1),
              (t._eventReg = !1),
              t
            );
          }),
          __extends(h, d),
          Object.defineProperty(h.prototype, 'selected', {
            get: function () {
              return this._selected;
            },
            set: function (t) {
              if (((this._selected = t), this.selectedFlag))
                switch (this.selectedMode) {
                  case r.TOGGLE:
                    this.selectedFlag.active = t;
                    break;
                  case r.SWITCH:
                    var e = this.selectedFlag.getComponent(cc.Sprite);
                    e &&
                      (e.spriteFrame = t
                        ? this.selectedSpriteFrame
                        : this._unselectedSpriteFrame);
                }
            },
            enumerable: !1,
            configurable: !0,
          }),
          Object.defineProperty(h.prototype, 'btnCom', {
            get: function () {
              return (
                this._btnCom ||
                  (this._btnCom = this.node.getComponent(cc.Button)),
                this._btnCom
              );
            },
            enumerable: !1,
            configurable: !0,
          }),
          (h.prototype.onLoad = function () {
            var t;
            this.selectedMode == r.SWITCH &&
              ((t = this.selectedFlag.getComponent(cc.Sprite)),
              (this._unselectedSpriteFrame = t.spriteFrame));
          }),
          (h.prototype.onDestroy = function () {
            this.node.off(
              cc.Node.EventType.SIZE_CHANGED,
              this._onSizeChange,
              this,
            );
          }),
          (h.prototype._registerEvent = function () {
            this._eventReg ||
              (this.btnCom &&
                0 < this.list.selectedMode &&
                this.btnCom.clickEvents.unshift(
                  this.createEvt(this, 'onClickThis'),
                ),
              this.adaptiveSize &&
                this.node.on(
                  cc.Node.EventType.SIZE_CHANGED,
                  this._onSizeChange,
                  this,
                ),
              (this._eventReg = !0));
          }),
          (h.prototype._onSizeChange = function () {
            this.list._onItemAdaptive(this.node);
          }),
          (h.prototype.createEvt = function (t, e, o) {
            var i;
            if ((void 0 === o && (o = null), t.isValid))
              return (
                (t.comName =
                  t.comName ||
                  t.name
                    .match(/\<(.*?)\>/g)
                    .pop()
                    .replace(/\<|>/g, '')),
                ((i = new cc.Component.EventHandler()).target = o || t.node),
                (i.component = t.comName),
                (i.handler = e),
                i
              );
          }),
          (h.prototype.showAni = function (t, e, o) {
            var i, n;
            switch (((n = this), t)) {
              case 0:
                i = cc
                  .tween(n.node)
                  .to(0.2, { scale: 0.7 })
                  .by(0.3, { y: 2 * n.node.height });
                break;
              case 1:
                i = cc
                  .tween(n.node)
                  .to(0.2, { scale: 0.7 })
                  .by(0.3, { x: 2 * n.node.width });
                break;
              case 2:
                i = cc
                  .tween(n.node)
                  .to(0.2, { scale: 0.7 })
                  .by(0.3, { y: -2 * n.node.height });
                break;
              case 3:
                i = cc
                  .tween(n.node)
                  .to(0.2, { scale: 0.7 })
                  .by(0.3, { x: -2 * n.node.width });
                break;
              default:
                i = cc.tween(n.node).to(0.3, { scale: 0.1 });
            }
            (e || o) &&
              i.call(function () {
                if (o) {
                  n.list._delSingleItem(n.node);
                  for (var t = n.list.displayData.length - 1; 0 <= t; t--)
                    if (n.list.displayData[t].id == n.listId) {
                      n.list.displayData.splice(t, 1);
                      break;
                    }
                }
                e();
              }),
              i.start();
          }),
          (h.prototype.onClickThis = function () {
            this.list.selectedId = this.listId;
          }),
          __decorate([c({ type: cc.Sprite })], h.prototype, 'icon', void 0),
          __decorate([c({ type: cc.Node })], h.prototype, 'title', void 0),
          __decorate(
            [c({ type: cc.Enum(r) })],
            h.prototype,
            'selectedMode',
            void 0,
          ),
          __decorate(
            [
              c({
                type: cc.Node,
                visible: function () {
                  return this.selectedMode > r.NONE;
                },
              }),
            ],
            h.prototype,
            'selectedFlag',
            void 0,
          ),
          __decorate(
            [
              c({
                type: cc.SpriteFrame,
                visible: function () {
                  return this.selectedMode == r.SWITCH;
                },
              }),
            ],
            h.prototype,
            'selectedSpriteFrame',
            void 0,
          ),
          __decorate([c({})], h.prototype, 'adaptiveSize', void 0),
          (p = __decorate(
            [l, i(), a('\u81ea\u5b9a\u4e49\u7ec4\u4ef6/List Item'), s(-5001)],
            h,
          )),
          (o.default = p),
          cc._RF.pop();
      },
      {},
    ],
    List: [
      function (t, e, o) {
        'use strict';
        var i, n, a, r;
        cc._RF.push(e, '5f5f2pWTJZMA63Xi2GsVyRc', 'List');
        var s,
          c = cc._decorator,
          l = c.ccclass,
          p = c.property,
          u = c.disallowMultiple,
          d = c.menu,
          h = c.executionOrder,
          _ = c.requireComponent,
          f = t('./ListItem');
        ((r = i = i || {})[(r.NODE = 1)] = 'NODE'),
          (r[(r.PREFAB = 2)] = 'PREFAB'),
          ((s = n = n || {})[(s.NORMAL = 1)] = 'NORMAL'),
          (s[(s.ADHERING = 2)] = 'ADHERING'),
          (s[(s.PAGE = 3)] = 'PAGE'),
          (function (t) {
            (t[(t.NONE = 0)] = 'NONE'),
              (t[(t.SINGLE = 1)] = 'SINGLE'),
              (t[(t.MULT = 2)] = 'MULT');
          })((a = a || {}));
        var m = (function (t) {
          function e() {
            var e = (null !== t && t.apply(this, arguments)) || this;
            return (
              (e.templateType = i.NODE),
              (e.tmpNode = null),
              (e.tmpPrefab = null),
              (e._slideMode = n.NORMAL),
              (e.pageDistance = 0.3),
              (e.pageChangeEvent = new cc.Component.EventHandler()),
              (e._virtual = !0),
              (e.cyclic = !1),
              (e.lackCenter = !1),
              (e.lackSlide = !1),
              (e._updateRate = 0),
              (e.frameByFrameRenderNum = 0),
              (e.renderEvent = new cc.Component.EventHandler()),
              (e.selectedMode = a.NONE),
              (e.repeatEventSingle = !1),
              (e.selectedEvent = new cc.Component.EventHandler()),
              (e._selectedId = -1),
              (e._forceUpdate = !1),
              (e._updateDone = !0),
              (e._numItems = 0),
              (e._inited = !1),
              (e._needUpdateWidget = !1),
              (e._aniDelRuning = !1),
              (e._doneAfterUpdate = !1),
              (e.adhering = !1),
              (e._adheringBarrier = !1),
              (e.curPageNum = 0),
              e
            );
          }
          return (
            __extends(e, t),
            Object.defineProperty(e.prototype, 'slideMode', {
              get: function () {
                return this._slideMode;
              },
              set: function (t) {
                this._slideMode = t;
              },
              enumerable: !1,
              configurable: !0,
            }),
            Object.defineProperty(e.prototype, 'virtual', {
              get: function () {
                return this._virtual;
              },
              set: function (t) {
                null != t && (this._virtual = t),
                  0 != this._numItems && this._onScrolling();
              },
              enumerable: !1,
              configurable: !0,
            }),
            Object.defineProperty(e.prototype, 'updateRate', {
              get: function () {
                return this._updateRate;
              },
              set: function (t) {
                0 <= t && t <= 6 && (this._updateRate = t);
              },
              enumerable: !1,
              configurable: !0,
            }),
            Object.defineProperty(e.prototype, 'selectedId', {
              get: function () {
                return this._selectedId;
              },
              set: function (t) {
                var e,
                  o,
                  i,
                  n = this;
                switch (n.selectedMode) {
                  case a.SINGLE:
                    (n.repeatEventSingle || t != n._selectedId) &&
                      ((e = n.getItemByListId(t)),
                      (o = void 0),
                      0 <= n._selectedId
                        ? (n._lastSelectedId = n._selectedId)
                        : (n._lastSelectedId = null),
                      (n._selectedId = t),
                      e && ((o = e.getComponent(f.default)).selected = !0),
                      0 <= n._lastSelectedId &&
                        n._lastSelectedId != n._selectedId &&
                        (i = n.getItemByListId(n._lastSelectedId)) &&
                        (i.getComponent(f.default).selected = !1),
                      n.selectedEvent) &&
                      cc.Component.EventHandler.emitEvents(
                        [n.selectedEvent],
                        e,
                        t % this._actualNumItems,
                        null == n._lastSelectedId
                          ? null
                          : n._lastSelectedId % this._actualNumItems,
                      );
                    break;
                  case a.MULT:
                    if (!(e = n.getItemByListId(t))) return;
                    (o = e.getComponent(f.default)),
                      0 <= n._selectedId && (n._lastSelectedId = n._selectedId),
                      (n._selectedId = t);
                    var r = !o.selected;
                    o.selected = r;
                    var s = n.multSelected.indexOf(t);
                    r && s < 0
                      ? n.multSelected.push(t)
                      : !r && 0 <= s && n.multSelected.splice(s, 1),
                      n.selectedEvent &&
                        cc.Component.EventHandler.emitEvents(
                          [n.selectedEvent],
                          e,
                          t % this._actualNumItems,
                          null == n._lastSelectedId
                            ? null
                            : n._lastSelectedId % this._actualNumItems,
                          r,
                        );
                }
              },
              enumerable: !1,
              configurable: !0,
            }),
            Object.defineProperty(e.prototype, 'numItems', {
              get: function () {
                return this._actualNumItems;
              },
              set: function (t) {
                var e = this;
                if (e.checkInited(!1))
                  if (null == t || t < 0)
                    cc.error('numItems set the wrong::', t);
                  else if (
                    ((e._actualNumItems = e._numItems = t),
                    (e._forceUpdate = !0),
                    e._virtual)
                  )
                    e._resizeContent(),
                      e.cyclic && (e._numItems = e._cyclicNum * e._numItems),
                      e._onScrolling(),
                      e.frameByFrameRenderNum ||
                        e.slideMode != n.PAGE ||
                        (e.curPageNum = e.nearestListId);
                  else {
                    e.cyclic &&
                      (e._resizeContent(),
                      (e._numItems = e._cyclicNum * e._numItems));
                    var o = e.content.getComponent(cc.Layout);
                    if (
                      (o && (o.enabled = !0),
                      e._delRedundantItem(),
                      (e.firstListId = 0) < e.frameByFrameRenderNum)
                    ) {
                      for (
                        var i =
                            e.frameByFrameRenderNum > e._numItems
                              ? e._numItems
                              : e.frameByFrameRenderNum,
                          a = 0;
                        a < i;
                        a++
                      )
                        e._createOrUpdateItem2(a);
                      e.frameByFrameRenderNum < e._numItems &&
                        ((e._updateCounter = e.frameByFrameRenderNum),
                        (e._updateDone = !1));
                    } else {
                      for (a = 0; a < e._numItems; a++)
                        e._createOrUpdateItem2(a);
                      e.displayItemNum = e._numItems;
                    }
                  }
              },
              enumerable: !1,
              configurable: !0,
            }),
            Object.defineProperty(e.prototype, 'scrollView', {
              get: function () {
                return this._scrollView;
              },
              enumerable: !1,
              configurable: !0,
            }),
            (e.prototype.onLoad = function () {
              this._init();
            }),
            (e.prototype.onDestroy = function () {
              var t = this;
              cc.isValid(t._itemTmp) && t._itemTmp.destroy(),
                cc.isValid(t.tmpNode) && t.tmpNode.destroy(),
                t._pool && t._pool.clear();
            }),
            (e.prototype.onEnable = function () {
              this._registerEvent(),
                this._init(),
                this._aniDelRuning &&
                  ((this._aniDelRuning = !1),
                  this._aniDelItem &&
                    (this._aniDelBeforePos &&
                      ((this._aniDelItem.position = this._aniDelBeforePos),
                      delete this._aniDelBeforePos),
                    this._aniDelBeforeScale &&
                      ((this._aniDelItem.scale = this._aniDelBeforeScale),
                      delete this._aniDelBeforeScale),
                    delete this._aniDelItem),
                  this._aniDelCB) &&
                  (this._aniDelCB(), delete this._aniDelCB);
            }),
            (e.prototype.onDisable = function () {
              this._unregisterEvent();
            }),
            (e.prototype._registerEvent = function () {
              var t = this;
              t.node.on(cc.Node.EventType.TOUCH_START, t._onTouchStart, t, !0),
                t.node.on('touch-up', t._onTouchUp, t),
                t.node.on(
                  cc.Node.EventType.TOUCH_CANCEL,
                  t._onTouchCancelled,
                  t,
                  !0,
                ),
                t.node.on('scroll-began', t._onScrollBegan, t, !0),
                t.node.on('scroll-ended', t._onScrollEnded, t, !0),
                t.node.on('scrolling', t._onScrolling, t, !0),
                t.node.on(cc.Node.EventType.SIZE_CHANGED, t._onSizeChanged, t);
            }),
            (e.prototype._unregisterEvent = function () {
              var t = this;
              t.node.off(cc.Node.EventType.TOUCH_START, t._onTouchStart, t, !0),
                t.node.off('touch-up', t._onTouchUp, t),
                t.node.off(
                  cc.Node.EventType.TOUCH_CANCEL,
                  t._onTouchCancelled,
                  t,
                  !0,
                ),
                t.node.off('scroll-began', t._onScrollBegan, t, !0),
                t.node.off('scroll-ended', t._onScrollEnded, t, !0),
                t.node.off('scrolling', t._onScrolling, t, !0),
                t.node.off(cc.Node.EventType.SIZE_CHANGED, t._onSizeChanged, t);
            }),
            (e.prototype._init = function () {
              var t = this;
              if (!t._inited)
                if (
                  ((t._scrollView = t.node.getComponent(cc.ScrollView)),
                  (t.content = t._scrollView.content),
                  t.content)
                ) {
                  switch (
                    ((t._layout = t.content.getComponent(cc.Layout)),
                    (t._align = t._layout.type),
                    (t._resizeMode = t._layout.resizeMode),
                    (t._startAxis = t._layout.startAxis),
                    (t._topGap = t._layout.paddingTop),
                    (t._rightGap = t._layout.paddingRight),
                    (t._bottomGap = t._layout.paddingBottom),
                    (t._leftGap = t._layout.paddingLeft),
                    (t._columnGap = t._layout.spacingX),
                    (t._lineGap = t._layout.spacingY),
                    t._colLineNum,
                    (t._verticalDir = t._layout.verticalDirection),
                    (t._horizontalDir = t._layout.horizontalDirection),
                    t.setTemplateItem(
                      cc.instantiate(
                        t.templateType == i.PREFAB ? t.tmpPrefab : t.tmpNode,
                      ),
                    ),
                    (t._slideMode != n.ADHERING && t._slideMode != n.PAGE) ||
                      ((t._scrollView.inertia = !1),
                      (t._scrollView._onMouseWheel = function () {})),
                    t.virtual || (t.lackCenter = !1),
                    (t._lastDisplayData = []),
                    (t.displayData = []),
                    (t._pool = new cc.NodePool()),
                    (t._forceUpdate = !1),
                    (t._updateCounter = 0),
                    (t._updateDone = !0),
                    (t.curPageNum = 0),
                    t.cyclic &&
                      ((t._scrollView._processAutoScrolling =
                        this._processAutoScrolling.bind(t)),
                      (t._scrollView._startBounceBackIfNeeded = function () {
                        return !1;
                      })),
                    t._align)
                  ) {
                    case cc.Layout.Type.HORIZONTAL:
                      switch (t._horizontalDir) {
                        case cc.Layout.HorizontalDirection.LEFT_TO_RIGHT:
                          t._alignCalcType = 1;
                          break;
                        case cc.Layout.HorizontalDirection.RIGHT_TO_LEFT:
                          t._alignCalcType = 2;
                      }
                      break;
                    case cc.Layout.Type.VERTICAL:
                      switch (t._verticalDir) {
                        case cc.Layout.VerticalDirection.TOP_TO_BOTTOM:
                          t._alignCalcType = 3;
                          break;
                        case cc.Layout.VerticalDirection.BOTTOM_TO_TOP:
                          t._alignCalcType = 4;
                      }
                      break;
                    case cc.Layout.Type.GRID:
                      switch (t._startAxis) {
                        case cc.Layout.AxisDirection.HORIZONTAL:
                          switch (t._verticalDir) {
                            case cc.Layout.VerticalDirection.TOP_TO_BOTTOM:
                              t._alignCalcType = 3;
                              break;
                            case cc.Layout.VerticalDirection.BOTTOM_TO_TOP:
                              t._alignCalcType = 4;
                          }
                          break;
                        case cc.Layout.AxisDirection.VERTICAL:
                          switch (t._horizontalDir) {
                            case cc.Layout.HorizontalDirection.LEFT_TO_RIGHT:
                              t._alignCalcType = 1;
                              break;
                            case cc.Layout.HorizontalDirection.RIGHT_TO_LEFT:
                              t._alignCalcType = 2;
                          }
                      }
                  }
                  t.content.removeAllChildren(), (t._inited = !0);
                } else
                  cc.error(t.node.name + "'s cc.ScrollView unset content!");
            }),
            (e.prototype._processAutoScrolling = function (t) {
              var e;
              this._scrollView._autoScrollAccumulatedTime += +t;
              var o = Math.min(
                1,
                this._scrollView._autoScrollAccumulatedTime /
                  this._scrollView._autoScrollTotalTime,
              );
              this._scrollView._autoScrollAttenuate &&
                (o = (e = o - 1) * e * e * e * e + 1);
              var i = this._scrollView._autoScrollStartPosition.add(
                  this._scrollView._autoScrollTargetDelta.mul(o),
                ),
                n = this._scrollView.getScrollEndedEventTiming(),
                a = Math.abs(o - 1) <= n;
              Math.abs(o - 1) <= this._scrollView.getScrollEndedEventTiming() &&
                !this._scrollView._isScrollEndedWithThresholdEventFired &&
                (this._scrollView._dispatchEvent('scroll-ended-with-threshold'),
                (this._scrollView._isScrollEndedWithThresholdEventFired = !0)),
                a && (this._scrollView._autoScrolling = !1);
              var r = i.sub(this._scrollView.getContentPosition());
              this._scrollView._moveContent(this._scrollView._clampDelta(r), a),
                this._scrollView._dispatchEvent('scrolling'),
                this._scrollView._autoScrolling ||
                  ((this._scrollView._isBouncing = !1),
                  (this._scrollView._scrolling = !1),
                  this._scrollView._dispatchEvent('scroll-ended'));
            }),
            (e.prototype.setTemplateItem = function (t) {
              if (t) {
                var e,
                  o = this;
                switch (
                  ((o._itemTmp = t),
                  o._resizeMode == cc.Layout.ResizeMode.CHILDREN
                    ? (o._itemSize = o._layout.cellSize)
                    : (o._itemSize = cc.size(t.width, t.height)),
                  t.getComponent(f.default) || (o.selectedMode = a.NONE),
                  (e = t.getComponent(cc.Widget)) &&
                    e.enabled &&
                    (o._needUpdateWidget = !0),
                  o.selectedMode == a.MULT && (o.multSelected = []),
                  o._align)
                ) {
                  case cc.Layout.Type.HORIZONTAL:
                    (o._colLineNum = 1), (o._sizeType = !1);
                    break;
                  case cc.Layout.Type.VERTICAL:
                    (o._colLineNum = 1), (o._sizeType = !0);
                    break;
                  case cc.Layout.Type.GRID:
                    switch (o._startAxis) {
                      case cc.Layout.AxisDirection.HORIZONTAL:
                        var i = o.content.width - o._leftGap - o._rightGap;
                        (o._colLineNum = Math.floor(
                          (i + o._columnGap) /
                            (o._itemSize.width + o._columnGap),
                        )),
                          (o._sizeType = !0);
                        break;
                      case cc.Layout.AxisDirection.VERTICAL:
                        var n = o.content.height - o._topGap - o._bottomGap;
                        (o._colLineNum = Math.floor(
                          (n + o._lineGap) / (o._itemSize.height + o._lineGap),
                        )),
                          (o._sizeType = !1);
                    }
                }
              }
            }),
            (e.prototype.checkInited = function (t) {
              return (
                void 0 === t && (t = !0),
                !!this._inited ||
                  (t && cc.error('List initialization not completed!'), !1)
              );
            }),
            (e.prototype._resizeContent = function () {
              var t,
                e,
                o,
                i,
                n = this;
              switch (n._align) {
                case cc.Layout.Type.HORIZONTAL:
                  e = n._customSize
                    ? ((t = n._getFixedSize(null)),
                      n._leftGap +
                        t.val +
                        n._itemSize.width * (n._numItems - t.count) +
                        n._columnGap * (n._numItems - 1) +
                        n._rightGap)
                    : n._leftGap +
                      n._itemSize.width * n._numItems +
                      n._columnGap * (n._numItems - 1) +
                      n._rightGap;
                  break;
                case cc.Layout.Type.VERTICAL:
                  e = n._customSize
                    ? ((t = n._getFixedSize(null)),
                      n._topGap +
                        t.val +
                        n._itemSize.height * (n._numItems - t.count) +
                        n._lineGap * (n._numItems - 1) +
                        n._bottomGap)
                    : n._topGap +
                      n._itemSize.height * n._numItems +
                      n._lineGap * (n._numItems - 1) +
                      n._bottomGap;
                  break;
                case cc.Layout.Type.GRID:
                  switch ((n.lackCenter && (n.lackCenter = !1), n._startAxis)) {
                    case cc.Layout.AxisDirection.HORIZONTAL:
                      var a = Math.ceil(n._numItems / n._colLineNum);
                      e =
                        n._topGap +
                        n._itemSize.height * a +
                        n._lineGap * (a - 1) +
                        n._bottomGap;
                      break;
                    case cc.Layout.AxisDirection.VERTICAL:
                      var r = Math.ceil(n._numItems / n._colLineNum);
                      e =
                        n._leftGap +
                        n._itemSize.width * r +
                        n._columnGap * (r - 1) +
                        n._rightGap;
                  }
              }
              var s = n.content.getComponent(cc.Layout);
              s && (s.enabled = !1),
                (n._allItemSize = e),
                (n._allItemSizeNoEdge =
                  n._allItemSize -
                  (n._sizeType
                    ? n._topGap + n._bottomGap
                    : n._leftGap + n._rightGap)),
                n.cyclic &&
                  ((o = n._sizeType ? n.node.height : n.node.width),
                  (n._cyclicPos1 = 0),
                  (o -= n._cyclicPos1),
                  (n._cyclicNum = Math.ceil(o / n._allItemSizeNoEdge) + 1),
                  (i = n._sizeType ? n._lineGap : n._columnGap),
                  (n._cyclicPos2 = n._cyclicPos1 + n._allItemSizeNoEdge + i),
                  (n._cyclicAllItemSize =
                    n._allItemSize +
                    n._allItemSizeNoEdge * (n._cyclicNum - 1) +
                    i * (n._cyclicNum - 1)),
                  (n._cycilcAllItemSizeNoEdge =
                    n._allItemSizeNoEdge * n._cyclicNum),
                  (n._cycilcAllItemSizeNoEdge += i * (n._cyclicNum - 1))),
                (n._lack =
                  !n.cyclic &&
                  n._allItemSize <
                    (n._sizeType ? n.node.height : n.node.width));
              var c = (n._lack && n.lackCenter) || !n.lackSlide ? 0.1 : 0,
                l = null;
              (l = n._lack
                ? (n._sizeType ? n.node.height : n.node.width) - c
                : n.cyclic
                  ? n._cyclicAllItemSize
                  : n._allItemSize) < 0 && (l = 0),
                n._sizeType ? (n.content.height = l) : (n.content.width = l);
            }),
            (e.prototype._onScrolling = function (t) {
              if (
                (void 0 === t && (t = null),
                null == this.frameCount && (this.frameCount = this._updateRate),
                !this._forceUpdate &&
                  t &&
                  'scroll-ended' != t.type &&
                  0 < this.frameCount)
              )
                this.frameCount--;
              else if (
                ((this.frameCount = this._updateRate), !this._aniDelRuning)
              ) {
                if (this.cyclic) {
                  var e,
                    o = this.content.getPosition();
                  o = this._sizeType ? o.y : o.x;
                  var i =
                    this._allItemSizeNoEdge +
                    (this._sizeType ? this._lineGap : this._columnGap);
                  switch (
                    ((e = this._sizeType ? cc.v2(0, i) : cc.v2(i, 0)),
                    this._alignCalcType)
                  ) {
                    case 1:
                      o > -this._cyclicPos1
                        ? ((this.content.x = -this._cyclicPos2),
                          this._scrollView.isAutoScrolling() &&
                            (this._scrollView._autoScrollStartPosition =
                              this._scrollView._autoScrollStartPosition.sub(e)))
                        : o < -this._cyclicPos2 &&
                          ((this.content.x = -this._cyclicPos1),
                          this._scrollView.isAutoScrolling()) &&
                          (this._scrollView._autoScrollStartPosition =
                            this._scrollView._autoScrollStartPosition.add(e));
                      break;
                    case 2:
                      o < this._cyclicPos1
                        ? ((this.content.x = this._cyclicPos2),
                          this._scrollView.isAutoScrolling() &&
                            (this._scrollView._autoScrollStartPosition =
                              this._scrollView._autoScrollStartPosition.add(e)))
                        : o > this._cyclicPos2 &&
                          ((this.content.x = this._cyclicPos1),
                          this._scrollView.isAutoScrolling()) &&
                          (this._scrollView._autoScrollStartPosition =
                            this._scrollView._autoScrollStartPosition.sub(e));
                      break;
                    case 3:
                      o < this._cyclicPos1
                        ? ((this.content.y = this._cyclicPos2),
                          this._scrollView.isAutoScrolling() &&
                            (this._scrollView._autoScrollStartPosition =
                              this._scrollView._autoScrollStartPosition.add(e)))
                        : o > this._cyclicPos2 &&
                          ((this.content.y = this._cyclicPos1),
                          this._scrollView.isAutoScrolling()) &&
                          (this._scrollView._autoScrollStartPosition =
                            this._scrollView._autoScrollStartPosition.sub(e));
                      break;
                    case 4:
                      o > -this._cyclicPos1
                        ? ((this.content.y = -this._cyclicPos2),
                          this._scrollView.isAutoScrolling() &&
                            (this._scrollView._autoScrollStartPosition =
                              this._scrollView._autoScrollStartPosition.sub(e)))
                        : o < -this._cyclicPos2 &&
                          ((this.content.y = -this._cyclicPos1),
                          this._scrollView.isAutoScrolling()) &&
                          (this._scrollView._autoScrollStartPosition =
                            this._scrollView._autoScrollStartPosition.add(e));
                  }
                }
                var n, a, r, s;
                if (
                  (this._calcViewPos(),
                  this._sizeType
                    ? ((n = this.viewTop), (r = this.viewBottom))
                    : ((a = this.viewRight), (s = this.viewLeft)),
                  this._virtual)
                ) {
                  var c;
                  this.displayData = [];
                  var l = 0,
                    p = this._numItems - 1;
                  if (this._customSize)
                    for (var u = !1; l <= p && !u; l++)
                      switch (((c = this._calcItemPos(l)), this._align)) {
                        case cc.Layout.Type.HORIZONTAL:
                          c.right >= s && c.left <= a
                            ? this.displayData.push(c)
                            : 0 != l && 0 < this.displayData.length && (u = !0);
                          break;
                        case cc.Layout.Type.VERTICAL:
                          c.bottom <= n && c.top >= r
                            ? this.displayData.push(c)
                            : 0 != l && 0 < this.displayData.length && (u = !0);
                          break;
                        case cc.Layout.Type.GRID:
                          switch (this._startAxis) {
                            case cc.Layout.AxisDirection.HORIZONTAL:
                              c.bottom <= n && c.top >= r
                                ? this.displayData.push(c)
                                : 0 != l &&
                                  0 < this.displayData.length &&
                                  (u = !0);
                              break;
                            case cc.Layout.AxisDirection.VERTICAL:
                              c.right >= s && c.left <= a
                                ? this.displayData.push(c)
                                : 0 != l &&
                                  0 < this.displayData.length &&
                                  (u = !0);
                          }
                      }
                  else {
                    var d = this._itemSize.width + this._columnGap,
                      h = this._itemSize.height + this._lineGap;
                    switch (this._alignCalcType) {
                      case 1:
                        (l = (s - this._leftGap) / d),
                          (p = (a - this._leftGap) / d);
                        break;
                      case 2:
                        (l = (-a - this._rightGap) / d),
                          (p = (-s - this._rightGap) / d);
                        break;
                      case 3:
                        (l = (-n - this._topGap) / h),
                          (p = (-r - this._topGap) / h);
                        break;
                      case 4:
                        (l = (r - this._bottomGap) / h),
                          (p = (n - this._bottomGap) / h);
                    }
                    for (
                      l = Math.floor(l) * this._colLineNum,
                        p = Math.ceil(p) * this._colLineNum,
                        l < 0 && (l = 0),
                        --p >= this._numItems && (p = this._numItems - 1);
                      l <= p;
                      l++
                    )
                      this.displayData.push(this._calcItemPos(l));
                  }
                  if (
                    (this._delRedundantItem(),
                    this.displayData.length <= 0 || !this._numItems)
                  )
                    this._lastDisplayData = [];
                  else {
                    (this.firstListId = this.displayData[0].id),
                      (this.displayItemNum = this.displayData.length);
                    var _ = this._lastDisplayData.length,
                      f = this.displayItemNum != _;
                    if (
                      (f &&
                        (0 < this.frameByFrameRenderNum &&
                          this._lastDisplayData.sort(function (t, e) {
                            return t - e;
                          }),
                        (f =
                          this.firstListId != this._lastDisplayData[0] ||
                          this.displayData[this.displayItemNum - 1].id !=
                            this._lastDisplayData[_ - 1])),
                      this._forceUpdate || f)
                    )
                      if (0 < this.frameByFrameRenderNum)
                        0 < this._numItems
                          ? (this._updateDone
                              ? (this._updateCounter = 0)
                              : (this._doneAfterUpdate = !0),
                            (this._updateDone = !1))
                          : ((this._updateCounter = 0),
                            (this._updateDone = !0));
                      else {
                        this._lastDisplayData = [];
                        for (var m = 0; m < this.displayItemNum; m++)
                          this._createOrUpdateItem(this.displayData[m]);
                        this._forceUpdate = !1;
                      }
                    this._calcNearestItem();
                  }
                }
              }
            }),
            (e.prototype._calcViewPos = function () {
              var t = this.content.getPosition();
              switch (this._alignCalcType) {
                case 1:
                  (this.elasticLeft = 0 < t.x ? t.x : 0),
                    (this.viewLeft = (t.x < 0 ? -t.x : 0) - this.elasticLeft),
                    (this.viewRight = this.viewLeft + this.node.width),
                    (this.elasticRight =
                      this.viewRight > this.content.width
                        ? Math.abs(this.viewRight - this.content.width)
                        : 0),
                    (this.viewRight += this.elasticRight);
                  break;
                case 2:
                  (this.elasticRight = t.x < 0 ? -t.x : 0),
                    (this.viewRight = (0 < t.x ? -t.x : 0) + this.elasticRight),
                    (this.viewLeft = this.viewRight - this.node.width),
                    (this.elasticLeft =
                      this.viewLeft < -this.content.width
                        ? Math.abs(this.viewLeft + this.content.width)
                        : 0),
                    (this.viewLeft -= this.elasticLeft);
                  break;
                case 3:
                  (this.elasticTop = t.y < 0 ? Math.abs(t.y) : 0),
                    (this.viewTop = (0 < t.y ? -t.y : 0) + this.elasticTop),
                    (this.viewBottom = this.viewTop - this.node.height),
                    (this.elasticBottom =
                      this.viewBottom < -this.content.height
                        ? Math.abs(this.viewBottom + this.content.height)
                        : 0),
                    (this.viewBottom += this.elasticBottom);
                  break;
                case 4:
                  (this.elasticBottom = 0 < t.y ? Math.abs(t.y) : 0),
                    (this.viewBottom =
                      (t.y < 0 ? -t.y : 0) - this.elasticBottom),
                    (this.viewTop = this.viewBottom + this.node.height),
                    (this.elasticTop =
                      this.viewTop > this.content.height
                        ? Math.abs(this.viewTop - this.content.height)
                        : 0),
                    (this.viewTop -= this.elasticTop);
              }
            }),
            (e.prototype._calcItemPos = function (t) {
              var e, o, i, n, a, r, s, c;
              switch (this._align) {
                case cc.Layout.Type.HORIZONTAL:
                  switch (this._horizontalDir) {
                    case cc.Layout.HorizontalDirection.LEFT_TO_RIGHT:
                      return (
                        (c = this._customSize
                          ? ((r = this._getFixedSize(t)),
                            (s =
                              this._leftGap +
                              (this._itemSize.width + this._columnGap) *
                                (t - r.count) +
                              (r.val + this._columnGap * r.count)),
                            0 < (l = this._customSize[t])
                              ? l
                              : this._itemSize.width)
                          : ((s =
                              this._leftGap +
                              (this._itemSize.width + this._columnGap) * t),
                            this._itemSize.width)),
                        {
                          id: t,
                          left: (s = this.lackCenter
                            ? (s -= this._leftGap) +
                              (this.content.width / 2 -
                                this._allItemSizeNoEdge / 2)
                            : s),
                          right: (i = s + c),
                          x: s + this._itemTmp.anchorX * c,
                          y: this._itemTmp.y,
                        }
                      );
                    case cc.Layout.HorizontalDirection.RIGHT_TO_LEFT:
                      return (
                        (c = this._customSize
                          ? ((r = this._getFixedSize(t)),
                            (i =
                              -this._rightGap -
                              (this._itemSize.width + this._columnGap) *
                                (t - r.count) -
                              (r.val + this._columnGap * r.count)),
                            0 < (l = this._customSize[t])
                              ? l
                              : this._itemSize.width)
                          : ((i =
                              -this._rightGap -
                              (this._itemSize.width + this._columnGap) * t),
                            this._itemSize.width)),
                        {
                          id: t,
                          right: (i = this.lackCenter
                            ? (i += this._rightGap) -
                              (this.content.width / 2 -
                                this._allItemSizeNoEdge / 2)
                            : i),
                          left: (s = i - c),
                          x: s + this._itemTmp.anchorX * c,
                          y: this._itemTmp.y,
                        }
                      );
                  }
                  break;
                case cc.Layout.Type.VERTICAL:
                  switch (this._verticalDir) {
                    case cc.Layout.VerticalDirection.TOP_TO_BOTTOM:
                      return (
                        (p = this._customSize
                          ? ((r = this._getFixedSize(t)),
                            (e =
                              -this._topGap -
                              (this._itemSize.height + this._lineGap) *
                                (t - r.count) -
                              (r.val + this._lineGap * r.count)),
                            0 < (l = this._customSize[t])
                              ? l
                              : this._itemSize.height)
                          : ((e =
                              -this._topGap -
                              (this._itemSize.height + this._lineGap) * t),
                            this._itemSize.height)),
                        {
                          id: t,
                          top: (e = this.lackCenter
                            ? (e += this._topGap) -
                              (this.content.height / 2 -
                                this._allItemSizeNoEdge / 2)
                            : e),
                          bottom: (o = e - p),
                          x: this._itemTmp.x,
                          y: o + this._itemTmp.anchorY * p,
                        }
                      );
                    case cc.Layout.VerticalDirection.BOTTOM_TO_TOP:
                      var l,
                        p = this._customSize
                          ? ((r = this._getFixedSize(t)),
                            (o =
                              this._bottomGap +
                              (this._itemSize.height + this._lineGap) *
                                (t - r.count) +
                              (r.val + this._lineGap * r.count)),
                            0 < (l = this._customSize[t])
                              ? l
                              : this._itemSize.height)
                          : ((o =
                              this._bottomGap +
                              (this._itemSize.height + this._lineGap) * t),
                            this._itemSize.height);
                      return {
                        id: t,
                        top: (e =
                          (o = this.lackCenter
                            ? (o -= this._bottomGap) +
                              (this.content.height / 2 -
                                this._allItemSizeNoEdge / 2)
                            : o) + p),
                        bottom: o,
                        x: this._itemTmp.x,
                        y: o + this._itemTmp.anchorY * p,
                      };
                  }
                case cc.Layout.Type.GRID:
                  var u = Math.floor(t / this._colLineNum);
                  switch (this._startAxis) {
                    case cc.Layout.AxisDirection.HORIZONTAL:
                      switch (this._verticalDir) {
                        case cc.Layout.VerticalDirection.TOP_TO_BOTTOM:
                          a =
                            (o =
                              (e =
                                -this._topGap -
                                (this._itemSize.height + this._lineGap) * u) -
                              this._itemSize.height) +
                            this._itemTmp.anchorY * this._itemSize.height;
                          break;
                        case cc.Layout.VerticalDirection.BOTTOM_TO_TOP:
                          (e =
                            (o =
                              this._bottomGap +
                              (this._itemSize.height + this._lineGap) * u) +
                            this._itemSize.height),
                            (a =
                              o +
                              this._itemTmp.anchorY * this._itemSize.height);
                      }
                      switch (
                        ((n =
                          this._leftGap +
                          (t % this._colLineNum) *
                            (this._itemSize.width + this._columnGap)),
                        this._horizontalDir)
                      ) {
                        case cc.Layout.HorizontalDirection.LEFT_TO_RIGHT:
                          n =
                            (n +=
                              this._itemTmp.anchorX * this._itemSize.width) -
                            this.content.anchorX * this.content.width;
                          break;
                        case cc.Layout.HorizontalDirection.RIGHT_TO_LEFT:
                          n =
                            -1 *
                            ((n +=
                              (1 - this._itemTmp.anchorX) *
                              this._itemSize.width) -
                              (1 - this.content.anchorX) * this.content.width);
                      }
                      return { id: t, top: e, bottom: o, x: n, y: a };
                    case cc.Layout.AxisDirection.VERTICAL:
                      switch (this._horizontalDir) {
                        case cc.Layout.HorizontalDirection.LEFT_TO_RIGHT:
                          (i =
                            (s =
                              this._leftGap +
                              (this._itemSize.width + this._columnGap) * u) +
                            this._itemSize.width),
                            (n =
                              s + this._itemTmp.anchorX * this._itemSize.width),
                            (n -= this.content.anchorX * this.content.width);
                          break;
                        case cc.Layout.HorizontalDirection.RIGHT_TO_LEFT:
                          (n =
                            (s =
                              (i =
                                -this._rightGap -
                                (this._itemSize.width + this._columnGap) * u) -
                              this._itemSize.width) +
                            this._itemTmp.anchorX * this._itemSize.width),
                            (n +=
                              (1 - this.content.anchorX) * this.content.width);
                      }
                      switch (
                        ((a =
                          -this._topGap -
                          (t % this._colLineNum) *
                            (this._itemSize.height + this._lineGap)),
                        this._verticalDir)
                      ) {
                        case cc.Layout.VerticalDirection.TOP_TO_BOTTOM:
                          a =
                            (a -=
                              (1 - this._itemTmp.anchorY) *
                              this._itemSize.height) +
                            (1 - this.content.anchorY) * this.content.height;
                          break;
                        case cc.Layout.VerticalDirection.BOTTOM_TO_TOP:
                          a =
                            -1 *
                            ((a -=
                              this._itemTmp.anchorY * this._itemSize.height) +
                              this.content.anchorY * this.content.height);
                      }
                      return { id: t, left: s, right: i, x: n, y: a };
                  }
              }
            }),
            (e.prototype._calcExistItemPos = function (t) {
              var e,
                o = this.getItemByListId(t);
              return o
                ? ((e = { id: t, x: o.x, y: o.y }),
                  this._sizeType
                    ? ((e.top = o.y + o.height * (1 - o.anchorY)),
                      (e.bottom = o.y - o.height * o.anchorY))
                    : ((e.left = o.x - o.width * o.anchorX),
                      (e.right = o.x + o.width * (1 - o.anchorX))),
                  e)
                : null;
            }),
            (e.prototype.getItemPos = function (t) {
              return this._virtual || this.frameByFrameRenderNum
                ? this._calcItemPos(t)
                : this._calcExistItemPos(t);
            }),
            (e.prototype._getFixedSize = function (t) {
              if (!this._customSize) return null;
              var e;
              null == t && (t = this._numItems);
              var o = 0,
                i = 0;
              for (e in this._customSize)
                parseInt(e) < t && ((o += this._customSize[e]), i++);
              return { val: o, count: i };
            }),
            (e.prototype._onScrollBegan = function () {
              this._sizeType
                ? (this._beganPos = this.viewTop)
                : (this._beganPos = this.viewLeft);
            }),
            (e.prototype._onScrollEnded = function () {
              var t,
                e = this;
              (e.curScrollIsTouch = !1),
                null != e.scrollToListId &&
                  ((t = e.getItemByListId(e.scrollToListId)),
                  (e.scrollToListId = null),
                  t) &&
                  cc
                    .tween(t)
                    .to(0.1, { scale: 1.06 })
                    .to(0.1, { scale: 1 })
                    .start(),
                e._onScrolling(),
                e._slideMode != n.ADHERING || e.adhering
                  ? e._slideMode == n.PAGE &&
                    (null != e._beganPos && e.curScrollIsTouch
                      ? this._pageAdhere()
                      : e.adhere())
                  : e.adhere();
            }),
            (e.prototype._onTouchStart = function (t) {
              if (
                ((this.curScrollIsTouch = !0),
                t.eventPhase !== cc.Event.AT_TARGET || t.target !== this.node)
              ) {
                for (var e = t.target; null == e._listId && e.parent; )
                  e = e.parent;
                null != e._listId
                  ? (this._scrollItem = e)
                  : (this._scrollItem = t.target);
              }
            }),
            (e.prototype._onTouchUp = function () {
              var t = this;
              (t._scrollPos = null),
                t._slideMode == n.ADHERING
                  ? (this.adhering && (this._adheringBarrier = !0), t.adhere())
                  : t._slideMode == n.PAGE &&
                    (null != t._beganPos ? this._pageAdhere() : t.adhere()),
                (this._scrollItem = null);
            }),
            (e.prototype._onTouchCancelled = function () {
              var t = this;
              (t._scrollPos = null),
                t._slideMode == n.ADHERING
                  ? (t.adhering && (t._adheringBarrier = !0), t.adhere())
                  : t._slideMode == n.PAGE &&
                    (null != t._beganPos ? t._pageAdhere() : t.adhere()),
                (this._scrollItem = null);
            }),
            (e.prototype._onSizeChanged = function () {
              this.checkInited(!1) && this._onScrolling();
            }),
            (e.prototype._onItemAdaptive = function (t) {
              var e;
              ((!this._sizeType && t.width != this._itemSize.width) ||
                (this._sizeType && t.height != this._itemSize.height)) &&
                (this._customSize || (this._customSize = {}),
                (e = this._sizeType ? t.height : t.width),
                this._customSize[t._listId] != e) &&
                ((this._customSize[t._listId] = e),
                this._resizeContent(),
                this.updateAll(),
                null != this._scrollToListId) &&
                ((this._scrollPos = null),
                this.unschedule(this._scrollToSo),
                this.scrollTo(
                  this._scrollToListId,
                  Math.max(
                    0,
                    this._scrollToEndTime - new Date().getTime() / 1e3,
                  ),
                ));
            }),
            (e.prototype._pageAdhere = function () {
              var t = this;
              if (
                t.cyclic ||
                !(
                  0 < t.elasticTop ||
                  0 < t.elasticRight ||
                  0 < t.elasticBottom ||
                  0 < t.elasticLeft
                )
              ) {
                var e;
                e = t._sizeType ? t.viewTop : t.viewLeft;
                var o =
                  (t._sizeType ? t.node.height : t.node.width) * t.pageDistance;
                if (Math.abs(t._beganPos - e) > o)
                  switch (t._alignCalcType) {
                    case 1:
                    case 4:
                      t._beganPos > e ? t.prePage(0.5) : t.nextPage(0.5);
                      break;
                    case 2:
                    case 3:
                      t._beganPos < e ? t.prePage(0.5) : t.nextPage(0.5);
                  }
                else
                  t.elasticTop <= 0 &&
                    t.elasticRight <= 0 &&
                    t.elasticBottom <= 0 &&
                    t.elasticLeft <= 0 &&
                    t.adhere();
                t._beganPos = null;
              }
            }),
            (e.prototype.adhere = function () {
              var t,
                e = this;
              e.checkInited() &&
                !(
                  0 < e.elasticTop ||
                  0 < e.elasticRight ||
                  0 < e.elasticBottom ||
                  0 < e.elasticLeft
                ) &&
                ((e.adhering = !0),
                e._calcNearestItem(),
                (t =
                  (e._sizeType ? e._topGap : e._leftGap) /
                  (e._sizeType ? e.node.height : e.node.width)),
                e.scrollTo(e.nearestListId, 0.7, t));
            }),
            (e.prototype.update = function () {
              if (!(this.frameByFrameRenderNum <= 0 || this._updateDone))
                if (this._virtual) {
                  for (
                    var t =
                        this._updateCounter + this.frameByFrameRenderNum >
                        this.displayItemNum
                          ? this.displayItemNum
                          : this._updateCounter + this.frameByFrameRenderNum,
                      e = this._updateCounter;
                    e < t;
                    e++
                  ) {
                    var o = this.displayData[e];
                    o && this._createOrUpdateItem(o);
                  }
                  this._updateCounter >= this.displayItemNum - 1
                    ? this._doneAfterUpdate
                      ? ((this._updateCounter = 0),
                        (this._updateDone = !1),
                        (this._doneAfterUpdate = !1))
                      : ((this._updateDone = !0),
                        this._delRedundantItem(),
                        (this._forceUpdate = !1),
                        this._calcNearestItem(),
                        this.slideMode == n.PAGE &&
                          (this.curPageNum = this.nearestListId))
                    : (this._updateCounter += this.frameByFrameRenderNum);
                } else if (this._updateCounter < this._numItems) {
                  for (
                    t =
                      this._updateCounter + this.frameByFrameRenderNum >
                      this._numItems
                        ? this._numItems
                        : this._updateCounter + this.frameByFrameRenderNum,
                      e = this._updateCounter;
                    e < t;
                    e++
                  )
                    this._createOrUpdateItem2(e);
                  this._updateCounter += this.frameByFrameRenderNum;
                } else
                  (this._updateDone = !0),
                    this._calcNearestItem(),
                    this.slideMode == n.PAGE &&
                      (this.curPageNum = this.nearestListId);
            }),
            (e.prototype._createOrUpdateItem = function (t) {
              var e,
                o,
                i,
                n = this.getItemByListId(t.id);
              n
                ? this._forceUpdate &&
                  this.renderEvent &&
                  (n.setPosition(cc.v2(t.x, t.y)),
                  this._resetItemSize(n),
                  this.renderEvent) &&
                  cc.Component.EventHandler.emitEvents(
                    [this.renderEvent],
                    n,
                    t.id % this._actualNumItems,
                  )
                : ((n = (e = 0 < this._pool.size())
                    ? this._pool.get()
                    : cc.instantiate(this._itemTmp)),
                  (e && cc.isValid(n)) ||
                    ((n = cc.instantiate(this._itemTmp)), (e = !1)),
                  n._listId != t.id &&
                    ((n._listId = t.id), n.setContentSize(this._itemSize)),
                  n.setPosition(cc.v2(t.x, t.y)),
                  this._resetItemSize(n),
                  this.content.addChild(n),
                  e &&
                    this._needUpdateWidget &&
                    (o = n.getComponent(cc.Widget)) &&
                    o.updateAlignment(),
                  n.setSiblingIndex(this.content.childrenCount - 1),
                  (i = n.getComponent(f.default)),
                  (n.listItem = i) &&
                    ((i.listId = t.id), (i.list = this), i._registerEvent()),
                  this.renderEvent &&
                    cc.Component.EventHandler.emitEvents(
                      [this.renderEvent],
                      n,
                      t.id % this._actualNumItems,
                    )),
                this._resetItemSize(n),
                this._updateListItem(n.listItem),
                this._lastDisplayData.indexOf(t.id) < 0 &&
                  this._lastDisplayData.push(t.id);
            }),
            (e.prototype._createOrUpdateItem2 = function (t) {
              var e,
                o = this.content.children[t];
              o
                ? this._forceUpdate &&
                  this.renderEvent &&
                  ((o._listId = t), e && (e.listId = t), this.renderEvent) &&
                  cc.Component.EventHandler.emitEvents(
                    [this.renderEvent],
                    o,
                    t % this._actualNumItems,
                  )
                : (((o = cc.instantiate(this._itemTmp))._listId = t),
                  this.content.addChild(o),
                  (e = o.getComponent(f.default)),
                  (o.listItem = e) &&
                    ((e.listId = t), (e.list = this), e._registerEvent()),
                  this.renderEvent &&
                    cc.Component.EventHandler.emitEvents(
                      [this.renderEvent],
                      o,
                      t % this._actualNumItems,
                    )),
                this._updateListItem(e),
                this._lastDisplayData.indexOf(t) < 0 &&
                  this._lastDisplayData.push(t);
            }),
            (e.prototype._updateListItem = function (t) {
              if (t && this.selectedMode > a.NONE) {
                var e = t.node;
                switch (this.selectedMode) {
                  case a.SINGLE:
                    t.selected = this.selectedId == e._listId;
                    break;
                  case a.MULT:
                    t.selected = 0 <= this.multSelected.indexOf(e._listId);
                }
              }
            }),
            (e.prototype._resetItemSize = function () {}),
            (e.prototype._updateItemPos = function (t) {
              var e = null;
              e = isNaN(t) ? t : this.getItemByListId(t);
              var o = this.getItemPos(e._listId);
              e.setPosition(o.x, o.y);
            }),
            (e.prototype.setMultSelected = function (t, e) {
              var o = this;
              if (o.checkInited()) {
                if ((Array.isArray(t) || (t = [t]), null == e))
                  o.multSelected = t;
                else {
                  var i = void 0,
                    n = void 0;
                  if (e)
                    for (var a = t.length - 1; 0 <= a; a--)
                      (i = t[a]),
                        (n = o.multSelected.indexOf(i)) < 0 &&
                          o.multSelected.push(i);
                  else
                    for (a = t.length - 1; 0 <= a; a--)
                      (i = t[a]),
                        0 <= (n = o.multSelected.indexOf(i)) &&
                          o.multSelected.splice(n, 1);
                }
                (o._forceUpdate = !0), o._onScrolling();
              }
            }),
            (e.prototype.getMultSelected = function () {
              return this.multSelected;
            }),
            (e.prototype.hasMultSelected = function (t) {
              return this.multSelected && 0 <= this.multSelected.indexOf(t);
            }),
            (e.prototype.updateItem = function (t) {
              if (this.checkInited())
                for (
                  var e = 0, o = (t = Array.isArray(t) ? t : [t]).length;
                  e < o;
                  e++
                ) {
                  var i = t[e],
                    n = this.getItemByListId(i);
                  n &&
                    cc.Component.EventHandler.emitEvents(
                      [this.renderEvent],
                      n,
                      i % this._actualNumItems,
                    );
                }
            }),
            (e.prototype.updateAll = function () {
              this.checkInited() && (this.numItems = this.numItems);
            }),
            (e.prototype.getItemByListId = function (t) {
              if (this.content)
                for (var e = this.content.childrenCount - 1; 0 <= e; e--) {
                  var o = this.content.children[e];
                  if (o._listId == t) return o;
                }
            }),
            (e.prototype._getOutsideItem = function () {
              for (
                var t, e = [], o = this.content.childrenCount - 1;
                0 <= o;
                o--
              )
                (t = this.content.children[o]),
                  this.displayData.find(function (e) {
                    return e.id == t._listId;
                  }) || e.push(t);
              return e;
            }),
            (e.prototype._delRedundantItem = function () {
              if (this._virtual)
                for (
                  var t = this._getOutsideItem(), e = t.length - 1;
                  0 <= e;
                  e--
                ) {
                  var o = t[e];
                  if (
                    !this._scrollItem ||
                    o._listId != this._scrollItem._listId
                  ) {
                    (o.isCached = !0), this._pool.put(o);
                    for (var i = this._lastDisplayData.length - 1; 0 <= i; i--)
                      if (this._lastDisplayData[i] == o._listId) {
                        this._lastDisplayData.splice(i, 1);
                        break;
                      }
                  }
                }
              else
                for (; this.content.childrenCount > this._numItems; )
                  this._delSingleItem(
                    this.content.children[this.content.childrenCount - 1],
                  );
            }),
            (e.prototype._delSingleItem = function (t) {
              t.removeFromParent(), t.destroy && t.destroy();
            }),
            (e.prototype.aniDelItem = function (t, e, o) {
              var i,
                n,
                r,
                s,
                c = this;
              return c.checkInited() && !c.cyclic && c._virtual
                ? e
                  ? c._aniDelRuning
                    ? console.warn(
                        'Please wait for the current deletion to finish!',
                      )
                    : void ((n = c.getItemByListId(t))
                        ? ((i = n.getComponent(f.default)),
                          (c._aniDelRuning = !0),
                          (c._aniDelCB = e),
                          (c._aniDelItem = n),
                          (c._aniDelBeforePos = n.position),
                          (c._aniDelBeforeScale = n.scale),
                          (r = c.displayData[c.displayData.length - 1].id),
                          (s = i.selected),
                          i.showAni(
                            o,
                            function () {
                              var o, i;
                              if (
                                (null != (o = r < c._numItems - 2 ? r + 1 : o)
                                  ? ((i = c._calcItemPos(o)),
                                    c.displayData.push(i),
                                    c._virtual
                                      ? c._createOrUpdateItem(i)
                                      : c._createOrUpdateItem2(o))
                                  : c._numItems--,
                                c.selectedMode == a.SINGLE)
                              )
                                s
                                  ? (c._selectedId = -1)
                                  : 0 <= c._selectedId - 1 && c._selectedId--;
                              else if (
                                c.selectedMode == a.MULT &&
                                c.multSelected.length
                              ) {
                                var n = c.multSelected.indexOf(t);
                                0 <= n && c.multSelected.splice(n, 1);
                                for (
                                  var l = c.multSelected.length - 1;
                                  0 <= l;
                                  l--
                                )
                                  (p = c.multSelected[l]) >= t &&
                                    c.multSelected[l]--;
                              }
                              if (c._customSize) {
                                var p;
                                c._customSize[t] && delete c._customSize[t];
                                var u = {};
                                for (p in c._customSize) {
                                  var d = c._customSize[p],
                                    h = parseInt(p);
                                  u[h - (t <= h ? 1 : 0)] = d;
                                }
                                c._customSize = u;
                              }
                              (l = null != o ? o : r),
                                (c._aniDelRuning = !1),
                                e(t),
                                (c._aniDelCB = null);
                            },
                            !0,
                          ))
                        : e(t))
                  : cc.error(
                      'CallFunc are not allowed to be NULL, You need to delete the corresponding index in the data array in the CallFunc!',
                    )
                : cc.error('This function is not allowed to be called!');
            }),
            (e.prototype.scrollTo = function (t, e, o, i) {
              void 0 === e && (e = 0.5),
                void 0 === o && (o = null),
                void 0 === i && (i = !1);
              var n = this;
              if (n.checkInited(!1)) {
                var a, r;
                null == e ? (e = 0.5) : e < 0 && (e = 0),
                  t < 0 ? (t = 0) : t >= n._numItems && (t = n._numItems - 1),
                  !n._virtual &&
                    n._layout &&
                    n._layout.enabled &&
                    n._layout.updateLayout();
                var s = n.getItemPos(t);
                if (!s) return !1;
                switch (n._alignCalcType) {
                  case 1:
                    (a = s.left),
                      (a -= null != o ? n.node.width * o : n._leftGap),
                      (s = cc.v2(a, 0));
                    break;
                  case 2:
                    (a = s.right - n.node.width),
                      (a += null != o ? n.node.width * o : n._rightGap),
                      (s = cc.v2(a + n.content.width, 0));
                    break;
                  case 3:
                    (r = s.top),
                      (r += null != o ? n.node.height * o : n._topGap),
                      (s = cc.v2(0, -r));
                    break;
                  case 4:
                    (r = s.bottom + n.node.height),
                      (r -= null != o ? n.node.height * o : n._bottomGap),
                      (s = cc.v2(0, -r + n.content.height));
                }
                var c = n.content.getPosition();
                c = Math.abs(n._sizeType ? c.y : c.x);
                var l = n._sizeType ? s.y : s.x;
                0.5 < Math.abs((null != n._scrollPos ? n._scrollPos : c) - l) &&
                  (n._scrollView.scrollToOffset(s, e),
                  (n._scrollToListId = t),
                  (n._scrollToEndTime = new Date().getTime() / 1e3 + e),
                  (n._scrollToSo = n.scheduleOnce(function () {
                    var e;
                    n._adheringBarrier ||
                      (n.adhering = n._adheringBarrier = !1),
                      (n._scrollPos =
                        n._scrollToListId =
                        n._scrollToEndTime =
                        n._scrollToSo =
                          null),
                      i &&
                        (e = n.getItemByListId(t)) &&
                        cc
                          .tween(e)
                          .to(0.1, { scale: 1.05 })
                          .to(0.1, { scale: 1 })
                          .start();
                  }, e + 0.1)),
                  e <= 0) &&
                  n._onScrolling();
              }
            }),
            (e.prototype._calcNearestItem = function () {
              var t,
                e,
                o = this;
              (o.nearestListId = null), o._virtual && o._calcViewPos();
              for (
                var i = o.viewTop,
                  n = o.viewRight,
                  a = o.viewBottom,
                  r = o.viewLeft,
                  s = !1,
                  c = 0;
                c < o.content.childrenCount && !s;
                c += o._colLineNum
              )
                if (
                  (t = o._virtual ? o.displayData[c] : o._calcExistItemPos(c))
                )
                  switch (
                    ((e = o._sizeType
                      ? (t.top + t.bottom) / 2
                      : (t.left + t.right) / 2),
                    o._alignCalcType)
                  ) {
                    case 1:
                      t.right >= r &&
                        ((o.nearestListId = t.id),
                        e < r && (o.nearestListId += o._colLineNum),
                        (s = !0));
                      break;
                    case 2:
                      t.left <= n &&
                        ((o.nearestListId = t.id),
                        n < e && (o.nearestListId += o._colLineNum),
                        (s = !0));
                      break;
                    case 3:
                      t.bottom <= i &&
                        ((o.nearestListId = t.id),
                        i < e && (o.nearestListId += o._colLineNum),
                        (s = !0));
                      break;
                    case 4:
                      t.top >= a &&
                        ((o.nearestListId = t.id),
                        e < a && (o.nearestListId += o._colLineNum),
                        (s = !0));
                  }
              if (
                (t = o._virtual
                  ? o.displayData[o.displayItemNum - 1]
                  : o._calcExistItemPos(o._numItems - 1)) &&
                t.id == o._numItems - 1
              )
                switch (
                  ((e = o._sizeType
                    ? (t.top + t.bottom) / 2
                    : (t.left + t.right) / 2),
                  o._alignCalcType)
                ) {
                  case 1:
                    e < n && (o.nearestListId = t.id);
                    break;
                  case 2:
                    r < e && (o.nearestListId = t.id);
                    break;
                  case 3:
                    a < e && (o.nearestListId = t.id);
                    break;
                  case 4:
                    e < i && (o.nearestListId = t.id);
                }
            }),
            (e.prototype.prePage = function (t) {
              void 0 === t && (t = 0.5),
                this.checkInited() && this.skipPage(this.curPageNum - 1, t);
            }),
            (e.prototype.nextPage = function (t) {
              void 0 === t && (t = 0.5),
                this.checkInited() && this.skipPage(this.curPageNum + 1, t);
            }),
            (e.prototype.skipPage = function (t, e) {
              var o = this;
              if (o.checkInited())
                return o._slideMode != n.PAGE
                  ? cc.error(
                      'This function is not allowed to be called, Must SlideMode = PAGE!',
                    )
                  : void (
                      t < 0 ||
                      t >= o._numItems ||
                      (o.curPageNum != t &&
                        ((o.curPageNum = t),
                        o.pageChangeEvent &&
                          cc.Component.EventHandler.emitEvents(
                            [o.pageChangeEvent],
                            t,
                          ),
                        o.scrollTo(t, e)))
                    );
            }),
            (e.prototype.calcCustomSize = function (t) {
              var e = this;
              if (e.checkInited()) {
                if (!e._itemTmp) return cc.error('Unset template item!');
                if (!e.renderEvent) return cc.error('Unset Render-Event!');
                e._customSize = {};
                var o = cc.instantiate(e._itemTmp);
                e.content.addChild(o);
                for (var i = 0; i < t; i++)
                  cc.Component.EventHandler.emitEvents([e.renderEvent], o, i),
                    (o.height == e._itemSize.height &&
                      o.width == e._itemSize.width) ||
                      (e._customSize[i] = e._sizeType ? o.height : o.width);
                return (
                  Object.keys(e._customSize).length || (e._customSize = null),
                  o.removeFromParent(),
                  o.destroy && o.destroy(),
                  e._customSize
                );
              }
            }),
            __decorate(
              [p({ type: cc.Enum(i) })],
              e.prototype,
              'templateType',
              void 0,
            ),
            __decorate(
              [
                p({
                  type: cc.Node,
                  visible: function () {
                    return this.templateType == i.NODE;
                  },
                }),
              ],
              e.prototype,
              'tmpNode',
              void 0,
            ),
            __decorate(
              [
                p({
                  type: cc.Prefab,
                  visible: function () {
                    return this.templateType == i.PREFAB;
                  },
                }),
              ],
              e.prototype,
              'tmpPrefab',
              void 0,
            ),
            __decorate([p()], e.prototype, '_slideMode', void 0),
            __decorate(
              [p({ type: cc.Enum(n) })],
              e.prototype,
              'slideMode',
              null,
            ),
            __decorate(
              [
                p({
                  type: cc.Float,
                  range: [0, 1, 0.1],
                  slide: !0,
                  visible: function () {
                    return this._slideMode == n.PAGE;
                  },
                }),
              ],
              e.prototype,
              'pageDistance',
              void 0,
            ),
            __decorate(
              [
                p({
                  type: cc.Component.EventHandler,
                  visible: function () {
                    return this._slideMode == n.PAGE;
                  },
                }),
              ],
              e.prototype,
              'pageChangeEvent',
              void 0,
            ),
            __decorate([p()], e.prototype, '_virtual', void 0),
            __decorate([p({ type: cc.Boolean })], e.prototype, 'virtual', null),
            __decorate(
              [
                p({
                  visible: function () {
                    var t = this.slideMode == n.NORMAL;
                    return t || (this.cyclic = !1), t;
                  },
                }),
              ],
              e.prototype,
              'cyclic',
              void 0,
            ),
            __decorate(
              [
                p({
                  visible: function () {
                    return this.virtual;
                  },
                }),
              ],
              e.prototype,
              'lackCenter',
              void 0,
            ),
            __decorate(
              [
                p({
                  visible: function () {
                    var t = this.virtual && !this.lackCenter;
                    return t || (this.lackSlide = !1), t;
                  },
                }),
              ],
              e.prototype,
              'lackSlide',
              void 0,
            ),
            __decorate(
              [p({ type: cc.Integer })],
              e.prototype,
              '_updateRate',
              void 0,
            ),
            __decorate(
              [p({ type: cc.Integer, range: [0, 6, 1], slide: !0 })],
              e.prototype,
              'updateRate',
              null,
            ),
            __decorate(
              [p({ type: cc.Integer, range: [0, 12, 1], slide: !0 })],
              e.prototype,
              'frameByFrameRenderNum',
              void 0,
            ),
            __decorate(
              [p({ type: cc.Component.EventHandler })],
              e.prototype,
              'renderEvent',
              void 0,
            ),
            __decorate(
              [p({ type: cc.Enum(a) })],
              e.prototype,
              'selectedMode',
              void 0,
            ),
            __decorate(
              [
                p({
                  visible: function () {
                    return this.selectedMode == a.SINGLE;
                  },
                }),
              ],
              e.prototype,
              'repeatEventSingle',
              void 0,
            ),
            __decorate(
              [
                p({
                  type: cc.Component.EventHandler,
                  visible: function () {
                    return this.selectedMode > a.NONE;
                  },
                }),
              ],
              e.prototype,
              'selectedEvent',
              void 0,
            ),
            __decorate(
              [p({ serializable: !1 })],
              e.prototype,
              '_numItems',
              void 0,
            ),
            __decorate(
              [
                l,
                u(),
                d('\u81ea\u5b9a\u4e49\u7ec4\u4ef6/List'),
                _(cc.ScrollView),
                h(-5e3),
              ],
              e,
            )
          );
        })(cc.Component);
        (o.default = m), cc._RF.pop();
      },
      { './ListItem': 'ListItem' },
    ],
    LocalData: [
      function (t, e, o) {
        'use strict';
        cc._RF.push(e, '62847KXSxZIvY/qXyDpeeQ/', 'LocalData');
        var i,
          n,
          a,
          r,
          s,
          c,
          l,
          p = t('../../../RxManager/MyLog').default;
        (o.LocalData = void 0),
          (c = t('./App')),
          (n = t('./DateUtil')),
          (i = t('./MathUtil')),
          (s = t('./ObjectUtil')),
          (a = t('./NetMgr')),
          ((l = function () {
            (this._data = {
              id: 1,
              login: 0,
              loginDay: 1,
              online_sec: 0,
              nick_name: '\u6e38\u5ba2' + i.default.randomRangeInt(1e5, 999999),
              head_url: '',
              music: 1,
              sound: 1,
              vibrate: 1,
              energy: 0,
              energy_time: 0,
              ptLv: 1,
              sxNum: 0,
              tsNum: 0,
              jsNum: 0,
              lxNum: 0,
              ptScore: 0,
              wjScore: 0,
              cgLv: 1,
              cgScore: 0,
              sign_date: 0,
              sign_num: 0,
              day_share: 0,
              favorite: 0,
              inv_num: 0,
              bot_skin: 0,
              theme_skin: 0,
              color_skin: 0,
              bot_list: [],
              theme_list: [],
              color_list: [],
              collects: [],
              skin_videos: {},
              gold: 0,
              dl_first: 0,
              ts_first: 0,
              dlNum: 0,
              hbNum: 0,
              kpNum: 0,
              recordLv: 0,
              recordRealLv: 0,
            }),
              (this.isUpdate = !1),
              (this.posSec = 0);
          }).prototype.initData = function (t) {
            var e;
            if (
              ((!(e = c.App.storage.read('zs_spx')) ||
                (null == t ? void 0 : t.cgLv) > e.cgLv) &&
                ((e = t),
                console.warn('\u4f7f\u7528\u8fdc\u7a0b\u6570\u636e', t)),
              e)
            ) {
              for (var o in e)
                if ('lvRecord' != o)
                  if ('object' == s.default.identifyType(e[o]) && this._data[o])
                    for (var i in e[o]) this._data[o][i] = e[o][i];
                  else this._data[o] = e[o];
              this.udpateNewDay();
            }
            (this._data.login = Date.now()), this.save();
          }),
          (l.prototype.setValue = function (t, e) {
            'energy_time' != t && p.d('===LocalData==setValue==', t, e),
              (this._data[t] = e),
              this.save();
          }),
          (l.prototype.getValue = function (t) {
            return (
              'energy_time' != t &&
                p.d('===LocalData==getValue==', t, this._data[t]),
              this._data[t]
            );
          }),
          (l.prototype.udpateNewDay = function () {
            var t, e;
            (t = Date.now()) <= (e = this._data.login) ||
              n.default.compare(e, t) ||
              ((this._data.loginDay += 1),
              (this._data.online_sec = 0),
              (this._data.day_share = 0),
              (this._data.favorite = 0),
              (this._data.dl_first = 0),
              (this._data.ts_first = 0));
          }),
          (l.prototype.save = function () {
            c.App.storage.save('zs_spx', this._data), (this.isUpdate = !0);
          }),
          (l.prototype.onUpdate = function (t) {
            (this.posSec += t), 120 <= this.posSec && this.postData();
          }),
          (l.prototype.postData = function () {
            return __awaiter(this, void 0, void 0, function () {
              return __generator(this, function () {
                return (
                  !this.isUpdate ||
                    this._data.cgLv <= 3 ||
                    ((this.isUpdate = !1),
                    (this.posSec = 0),
                    a.NetMgr.setData(this._data)),
                  [2]
                );
              });
            });
          }),
          (r = l),
          (o.LocalData = new r()),
          cc._RF.pop();
      },
      {
        '../../../RxManager/MyLog': void 0,
        './App': 'App',
        './DateUtil': 'DateUtil',
        './MathUtil': 'MathUtil',
        './NetMgr': 'NetMgr',
        './ObjectUtil': 'ObjectUtil',
      },
    ],
    MathUtil: [
      function (t, e, o) {
        'use strict';
        var i, n, a;
        cc._RF.push(e, 'a0d11bib2tALYmhIiIiCtBG', 'MathUtil'),
          (n = t('./ArrayUtil')),
          ((a = function () {}).randomRangeInt = function (t, e) {
            var o;
            return (o = Math.random()), t + Math.floor(o * (e - t));
          }),
          (a.randomRangeFloat = function (t, e) {
            return t + Math.random() * (e - t);
          }),
          (a.randomArray = function (t) {
            return t[0 | this.randomRangeInt(0, t.length)];
          }),
          (a.RandomIntBoth = function (t, e, o) {
            if (
              (t = Math.floor(t)) >= (e = Math.floor(e)) ||
              e - t < o ||
              0 == o
            )
              return (
                console.error('min > max ||  max - min < num || num == 0'), null
              );
            for (var i = [], a = t; a < e; a++) i.push(a);
            n.default.shuffle(i);
            var r = Math.min(i.length, o),
              s = [];
            for (a = 0; a < r; a++) s.push(i.shift());
            return s;
          }),
          (a.getAngle = function (t) {
            return (180 * t) / Math.PI;
          }),
          (a.getRadian = function (t) {
            return (t / 180) * Math.PI;
          }),
          (a.getRadianTwoPoint = function (t, e) {
            var o, i;
            return (o = e.x - t.x), (i = e.y - t.y), Math.atan2(i, o);
          }),
          (a.getAngleTwoPoint = function (t, e) {
            var o, i, n;
            return (
              (o = e.y - t.y),
              (n = e.x - t.x),
              0 == o
                ? n < 0
                  ? 180
                  : 0
                : (0 == n
                    ? 0 < o
                      ? (i = 90)
                      : o < 0 && (i = 270)
                    : ((i = this.getAngle(
                        Math.atan(Math.abs(o) / Math.abs(n)),
                      )),
                      0 < n
                        ? o < 0 && (i = 360 - i)
                        : (i = 0 < o ? 180 - i : 180 + i)),
                  i)
            );
          }),
          (a.getDistance = function (t, e) {
            var o, i, n;
            return t && e
              ? ((o = e.x - t.x),
                (i = e.y - t.y),
                (n = Math.pow(o, 2) + Math.pow(i, 2)),
                Math.sqrt(n))
              : 1e4;
          }),
          (a.exactCount = function (t, e) {
            var o;
            return (
              void 0 === e && (e = 0), ((t * (o = Math.pow(10, e))) | 0) / o
            );
          }),
          (a.calculateTriangleSides = function (t, e, o) {
            var i, n, a, r;
            return (
              (r = t * (Math.PI / 180)),
              (n = o ? e / Math.cos(r) : e / Math.sin(r)),
              (i = o ? e * Math.tan(r) : void 0),
              (a = o ? void 0 : e / Math.tan(r)),
              __assign(
                __assign({ hypotenuse: n }, void 0 !== i && { opposite: i }),
                void 0 !== a && { adjacent: a },
              )
            );
          }),
          (a.calculateRightTriangleSides = function (t, e) {
            var o;
            return (
              (o = t * (Math.PI / 180)),
              { opposite: e * Math.sin(o), adjacent: e * Math.cos(o) }
            );
          }),
          (a.getBezierCutAngle = function (t, e, o, i) {
            var n, a;
            return (
              (a = 2 * (t.x * (i - 1) + e.x * (1 - 2 * i) + o.x * i)),
              (n = 2 * (t.y * (i - 1) + e.y * (1 - 2 * i) + o.y * i)),
              this.getAngle(Math.atan2(n, a))
            );
          }),
          (a.getBezierPoint = function (t, e, o, i, n) {
            return (
              ((n = (n = void 0 === n ? null : n) || new cc.Vec2()).x =
                (1 - i) * (1 - i) * t.x + 2 * i * (1 - i) * e.x + i * i * o.x),
              (n.y =
                (1 - i) * (1 - i) * t.y + 2 * i * (1 - i) * e.y + i * i * o.y),
              n
            );
          }),
          (a.getBezier3Point = function (t, e, o, i, n, a) {
            var r, s, c, l, p, u;
            return (
              (a = (a = void 0 === a ? null : a) || new cc.Vec2()),
              (c = 3 * (e.x - t.x)),
              (u = 3 * (o.x - e.x) - c),
              (p = i.x - t.x - c - u),
              (r = 3 * (e.y - t.y)),
              (s = 3 * (o.y - e.y) - r),
              (l = i.y - t.y - r - s),
              (a.x = p * n * n * n + u * n * n + c * n + t.x),
              (a.y = l * n * n * n + s * n * n + r * n + t.y),
              a
            );
          }),
          (a.getBezier3CutAngle = function (t, e, o, i, n) {
            var a, r;
            return (
              (a =
                3 * t.x * (1 - n) * (1 - n) * -1 +
                3 * e.x * ((1 - n) * (1 - n) + 2 * n * (1 - n) * -1) +
                3 * o.x * (2 * n * (1 - n) + n * n * -1) +
                3 * i.x * n * n),
              (r =
                3 * t.y * (1 - n) * (1 - n) * -1 +
                3 * e.y * ((1 - n) * (1 - n) + 2 * n * (1 - n) * -1) +
                3 * o.y * (2 * n * (1 - n) + n * n * -1) +
                3 * i.y * n * n),
              this.getAngle(Math.atan2(r, a))
            );
          }),
          (a.randomString = function (t) {
            for (var e = '', o = 0; o < t; o++)
              e += 'ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz2345678'.charAt(
                Math.floor(48 * Math.random()),
              );
            return e;
          }),
          (a.isInRange = function (t, e, o) {
            return t <= o && o <= e;
          }),
          (a.rotatePoint = function (t, e, o, i) {
            var n, r, s;
            return (
              void 0 === o && (o = cc.v3()),
              0 == e
                ? cc.v3(t.x, t.y)
                : ((n = a.getRadian(e)),
                  (r =
                    (t.x - o.x) * Math.cos(n) -
                    (t.y - o.y) * Math.sin(n) +
                    o.x),
                  (s =
                    (t.x - o.x) * Math.sin(n) +
                    (t.y - o.y) * Math.cos(n) +
                    o.y),
                  i ? ((i.x = r), (i.y = s), i) : cc.v3(r, s))
            );
          }),
          (a.v3Copy = function (t, e) {
            return ((e = e || cc.v3()).x = t.x), (e.y = t.y), (e.z = t.z), e;
          }),
          (i = a),
          (o.default = i),
          cc._RF.pop();
      },
      { './ArrayUtil': 'ArrayUtil' },
    ],
    NetBase: [
      function (t, e, o) {
        'use strict';
        var i, n;
        cc._RF.push(e, '5fdc2W52VpJZJARunKaK4uv', 'NetBase'),
          ((n = function () {
            (this.host = ''),
              (this.version = ''),
              (this.appid = ''),
              (this.openid = ''),
              (this.miniID = ''),
              (this.platform = 0),
              (this.serverID = ''),
              (this.token = ''),
              (this.isInit = !0),
              (this.sessionId = ''),
              (this.isMultiLogin = !1);
          }).prototype.request = function (t) {
            var e;
            if (((e = this), !this.isMultiLogin))
              return new Promise(function (o, i) {
                var n, a, r, s, c;
                if (
                  ((c = function (t) {
                    console.warn('onError', t ? JSON.stringify(t) : ''), i();
                  }),
                  t.host
                    ? ((r = Object.create({})).url = t.host + t.url)
                    : ((r = Object.create({})).url = e.host + t.url),
                  (r.method = t.method || 'GET'),
                  (r.header = t.header || {}),
                  (r.data = t.data || {}),
                  e.isInit || i(),
                  (n = ''),
                  'GET' == r.method)
                ) {
                  for (var l in ((n = '?'), r.data))
                    '?' != n && '' != n && (n += '&'),
                      (n += l + '=' + encodeURIComponent(r.data[l]));
                  '?' == n && (n = '');
                }
                return (
                  (s = r.url + ('GET' != r.method ? '' : encodeURI(n))),
                  ((a = new XMLHttpRequest()).timeout = 5e3),
                  a.open(r.method, s, !0),
                  (a.withCredentials = !0),
                  'POST' == r.method &&
                    a.setRequestHeader('Content-Type', 'application/json'),
                  a.setRequestHeader('version', e.version),
                  a.setRequestHeader('authorization', e.getAuthorization()),
                  a.setRequestHeader('platform', e.platform + ''),
                  a.setRequestHeader('server-id', e.serverID || '1'),
                  a.setRequestHeader('token', e.token),
                  a.setRequestHeader('appid', e.appid),
                  a.setRequestHeader('app-id', e.miniID),
                  (a.ontimeout = c),
                  (a.onerror = c),
                  (a.onreadystatechange = function () {
                    var n;
                    4 === a.readyState &&
                      (200 == a.status
                        ? (n = e.parseToJson(a.responseText))
                          ? (t.isLoginURL && e.setSessionID(a),
                            200 == n.code ? o(n.data) : i(n))
                          : (console.warn('err', a.responseText), i(null))
                        : (console.log(t.url + ' error: ' + a.status),
                          i('status=' + a.status)));
                  }),
                  'GET' == r.method ? a.send() : a.send(JSON.stringify(r.data)),
                  a
                );
              });
          }),
          (n.prototype.getAuthorization = function () {
            return '';
          }),
          (n.prototype.parseToJson = function (t) {
            try {
              return JSON.parse(t);
            } catch (t) {
              return console.log(t), null;
            }
          }),
          (n.prototype.setSessionID = function (t) {
            var e;
            null !=
              (e = (t.getResponseHeader('Set-Cookie') || '').match(
                /PHPSESSID\=(.*)\;/,
              )) && (this.sessionId = e[1]),
              console.log('setSessionID\uff1a', this.sessionId);
          }),
          (i = n),
          (o.default = i),
          cc._RF.pop();
      },
      {},
    ],
    NetData: [
      function (t, e, o) {
        'use strict';
        var i, n, a, r, s;
        cc._RF.push(e, 'a18e7B/FnxA6I6HtGDM79rl', 'NetData'),
          (o.NetData = void 0),
          (n = t('./App')),
          (i = t('./EventTypes')),
          (r = t('./NetHelper')),
          (s = function () {
            (this._gameData = null),
              (this._inviteList = []),
              (this._helpList = []),
              (this._rankList1 = []),
              (this._rankList2 = []),
              (this._rankList3 = []),
              (this._tzNum = 0),
              (this.province = ''),
              (this.isAdd = !1),
              this.initData();
          }),
          Object.defineProperty(s.prototype, 'gameData', {
            get: function () {
              return this._gameData;
            },
            enumerable: !1,
            configurable: !0,
          }),
          Object.defineProperty(s.prototype, 'inviteList', {
            get: function () {
              return this._inviteList;
            },
            enumerable: !1,
            configurable: !0,
          }),
          Object.defineProperty(s.prototype, 'rankList1', {
            get: function () {
              return this._rankList1;
            },
            enumerable: !1,
            configurable: !0,
          }),
          Object.defineProperty(s.prototype, 'rankList2', {
            get: function () {
              return this._rankList2;
            },
            enumerable: !1,
            configurable: !0,
          }),
          Object.defineProperty(s.prototype, 'rankList3', {
            get: function () {
              return this._rankList3;
            },
            enumerable: !1,
            configurable: !0,
          }),
          Object.defineProperty(s.prototype, 'helpList', {
            get: function () {
              return this._helpList;
            },
            enumerable: !1,
            configurable: !0,
          }),
          Object.defineProperty(s.prototype, 'tzNum', {
            get: function () {
              return this._tzNum;
            },
            enumerable: !1,
            configurable: !0,
          }),
          (s.prototype.addTzNum = function (t) {
            this.isAdd || ((this.isAdd = !0), (this._tzNum += t));
          }),
          (s.prototype.parse = function (t, e) {
            t == r.default.getData &&
              ((this._gameData = null == e ? void 0 : e.gamedata),
              console.log(
                '[ \u8fdc\u7a0b\u6e38\u620f\u6570\u636e\uff1a ] >',
                this._gameData,
              )),
              t == r.default.getInviterInfo &&
                ((this._inviteList = e.list),
                console.log('[ \u9080\u8bf7\u5217\u8868 ] >', e)),
              t == r.default.getAssistList &&
                ((this._helpList = e || []),
                console.log('[ \u52a9\u529b ] >', e)),
              t == r.default.getCustoms &&
                ((this._tzNum = (null == e ? void 0 : e.num) || 0),
                console.log('[ \u6311\u6218\u901a\u5173 ] >', e),
                n.App.event.emit(i.default.On_Tz_Num_Update));
          }),
          (s.prototype.setRankData = function (t, e) {
            1 == t
              ? (this._rankList3 = e)
              : 3 == t
                ? (this._rankList2 = e)
                : 4 == t && (this._rankList1 = e),
              console.log('[ \u6392\u884c\u699c ] >', t, e),
              n.App.event.emit(i.default.On_Rank_Data_Update, t);
          }),
          (s.prototype.initData = function () {
            (this._inviteList = [
              {
                id: 1,
                nickname: '',
                avatarurl: '',
                ip_city: '',
                p_level: 1,
                s_level: 1,
                uid: 2,
              },
              {
                id: 2,
                nickname: '\u66f2\u7ec8\u4eba\u4e0d\u6563',
                avatarurl:
                  'https://thirdqq.qlogo.cn/qqapp/1110439699/AB3601472246A81291208F53018B434A/100',
                ip_city: '\u897f\u85cf',
                p_level: 6,
                s_level: 2,
                uid: 3,
              },
            ]),
              (this._rankList1 = [
                { nickname: '', headimgurl: '', val: 1e3, openid: '' },
                {
                  nickname: '\u66f2\u7ec8\u4eba\u4e0d\u6563',
                  headimgurl:
                    'https://thirdqq.qlogo.cn/qqapp/1110439699/AB3601472246A81291208F53018B434A/100',
                  val: 800,
                  openid: '',
                },
                {
                  nickname: '\u62fe\u7396\u3044',
                  headimgurl:
                    'https://thirdqq.qlogo.cn/qqapp/1110439699/780B13E7B6946C0CB4FD7E4472189326/100',
                  val: 700,
                  openid: '',
                },
                {
                  nickname: '\u753b\u4e2d\u4eba',
                  headimgurl:
                    'https://thirdqq.qlogo.cn/qqapp/1110439699/780B13E7B6946C0CB4FD7E4472189326/100',
                  val: 600,
                  openid: '',
                },
                {
                  nickname: '\u4e16\u4fd7',
                  headimgurl:
                    'https://thirdqq.qlogo.cn/qqapp/1110439699/780B13E7B6946C0CB4FD7E4472189326/100',
                  val: 500,
                  openid: '',
                },
                {
                  nickname: '\u9e22\u65f6\u5341\u4e8c',
                  headimgurl:
                    'https://thirdqq.qlogo.cn/qqapp/1110439699/780B13E7B6946C0CB4FD7E4472189326/100',
                  val: 400,
                  openid: '',
                },
              ]),
              (this._rankList2 = [
                {
                  nickname: '\u66f2\u7ec8\u4eba\u4e0d\u6563',
                  headimgurl:
                    'https://thirdqq.qlogo.cn/qqapp/1110439699/AB3601472246A81291208F53018B434A/100',
                  val: 800,
                  openid: '',
                },
                {
                  nickname: '\u62fe\u7396\u3044',
                  headimgurl:
                    'https://thirdqq.qlogo.cn/qqapp/1110439699/780B13E7B6946C0CB4FD7E4472189326/100',
                  val: 700,
                  openid: '',
                },
                {
                  nickname: '\u753b\u4e2d\u4eba',
                  headimgurl:
                    'https://thirdqq.qlogo.cn/qqapp/1110439699/780B13E7B6946C0CB4FD7E4472189326/100',
                  val: 600,
                  openid: '',
                },
                {
                  nickname: '\u4e16\u4fd7',
                  headimgurl:
                    'https://thirdqq.qlogo.cn/qqapp/1110439699/780B13E7B6946C0CB4FD7E4472189326/100',
                  val: 500,
                  openid: '',
                },
                {
                  nickname: '\u9e22\u65f6\u5341\u4e8c',
                  headimgurl:
                    'https://thirdqq.qlogo.cn/qqapp/1110439699/780B13E7B6946C0CB4FD7E4472189326/100',
                  val: 400,
                  openid: '',
                },
              ]),
              (this._rankList3 = [
                {
                  nickname: '\u4e16\u4fd7',
                  headimgurl:
                    'https://thirdqq.qlogo.cn/qqapp/1110439699/780B13E7B6946C0CB4FD7E4472189326/100',
                  val: 500,
                  openid: '',
                },
                {
                  nickname: '\u9e22\u65f6\u5341\u4e8c',
                  headimgurl:
                    'https://thirdqq.qlogo.cn/qqapp/1110439699/780B13E7B6946C0CB4FD7E4472189326/100',
                  val: 400,
                  openid: '',
                },
                {
                  nickname:
                    '\u66f2\u7ec8\u4eba\u4e0d\u6563\u66f2\u7ec8\u4eba\u4e0d\u6563',
                  headimgurl:
                    'https://thirdqq.qlogo.cn/qqapp/1110439699/AB3601472246A81291208F53018B434A/100',
                  val: 100,
                  openid: '',
                },
              ]);
          }),
          (a = s),
          (o.NetData = new a()),
          cc._RF.pop();
      },
      {
        './App': 'App',
        './EventTypes': 'EventTypes',
        './NetHelper': 'NetHelper',
      },
    ],
    NetHelper: [
      function (t, e, o) {
        'use strict';
        var i, n, a, r, s;
        cc._RF.push(e, 'c8268XrUqNAyLmzHFSINmG0', 'NetHelper'),
          (i = t('./App')),
          (n = t('./GameSetting')),
          (a = t('./NetData')),
          ((s = function () {}).initialize = function () {
            i.App.http.initialize({ host: i.App.platform.host_url }),
              i.App.http.register(s.login, n.GameSetting),
              i.App.http.register(s.config, n.GameSetting),
              i.App.http.register(s.getData, a.NetData),
              i.App.http.register(s.getInviterInfo, a.NetData),
              i.App.http.register(s.getAssistList, a.NetData),
              i.App.http.register(s.getCustoms, a.NetData);
          }),
          (s.login = 'api/user/login'),
          (s.config = 'api/setting/config'),
          (s.dau = 'stat/index/initV2'),
          (s.setData = 'api/user/setData'),
          (s.getData = 'api/user/getData'),
          (s.setUserInfo = 'api/user/setUserInfo'),
          (s.addRankList = 'api/user/addRankList'),
          (s.getInviterInfo = 'api/user/getInviterInfo'),
          (s.getRankList = 'api/user/getRankList'),
          (s.getAssistList = 'api/user/getAssistList'),
          (s.upCustoms = 'api/user/upCustoms'),
          (s.getCustoms = 'api/user/getCustoms'),
          (r = s),
          (o.default = r),
          cc._RF.pop();
      },
      {
        './App': 'App',
        './GameSetting': 'GameSetting',
        './NetData': 'NetData',
      },
    ],
    NetMgr: [
      function (t, e, o) {
        'use strict';
        var i, n, a, r, s, c, l;
        cc._RF.push(e, '0a7e8VURGZKQZlwgTGdB2Y7', 'NetMgr'),
          (o.NetMgr = void 0),
          (s = t('./App')),
          t('./LocalData'),
          (i = t('./NetData')),
          (a = t('./EventTypes')),
          (n = t('./NetHelper')),
          (c = t('./LaunchMgr')),
          ((l = function () {
            this.code = '';
          }).prototype.login = function () {
            var t;
            (t = this),
              s.App.event.once(
                a.default.GET_LOGIN_CODE,
                function (e) {
                  return __awaiter(t, void 0, void 0, function () {
                    return __generator(this, function () {
                      return (
                        console.warn('\u767b\u9646code:', JSON.stringify(e)),
                        (this.code = e.code),
                        c.LaunchMgr.start(),
                        [2]
                      );
                    });
                  });
                },
                this,
              ),
              s.App.platform.login();
          }),
          (l.prototype.getSetting = function () {
            return __awaiter(this, void 0, void 0, function () {
              return __generator(this, function (t) {
                switch (t.label) {
                  case 0:
                    return [2];
                  case 1:
                    return t.sent(), [4, s.App.http.send(n.default.config)];
                  case 2:
                    return t.sent(), [2];
                }
              });
            });
          }),
          (l.prototype.getInviterInfo = function () {
            return __awaiter(this, void 0, void 0, function () {
              return __generator(this, function (t) {
                switch (t.label) {
                  case 0:
                    return [2];
                  case 1:
                    return t.sent(), [2];
                }
              });
            });
          }),
          (l.prototype.setUserInfo = function () {
            return __awaiter(this, void 0, void 0, function () {
              return __generator(this, function () {
                return [2];
              });
            });
          }),
          (l.prototype.setData = function () {
            return __awaiter(this, void 0, void 0, function () {
              return __generator(this, function () {
                return [2];
              });
            });
          }),
          (l.prototype.getData = function () {
            return __awaiter(this, void 0, void 0, function () {
              return __generator(this, function (t) {
                switch (t.label) {
                  case 0:
                    return [2];
                  case 1:
                    return t.sent(), [2];
                }
              });
            });
          }),
          (l.prototype.addRankList = function () {
            return __awaiter(this, void 0, void 0, function () {
              return __generator(this, function () {
                return [2];
              });
            });
          }),
          (l.prototype.getRankList = function (t) {
            return __awaiter(this, void 0, void 0, function () {
              var e;
              return __generator(this, function (o) {
                switch (o.label) {
                  case 0:
                    return [2];
                  case 1:
                    return (e = o.sent()), i.NetData.setRankData(t, e), [2];
                }
              });
            });
          }),
          (l.prototype.getAssistList = function () {
            return __awaiter(this, void 0, void 0, function () {
              return __generator(this, function () {
                return [2];
              });
            });
          }),
          (l.prototype.getCustoms = function () {
            return __awaiter(this, void 0, void 0, function () {
              return __generator(this, function () {
                return [2];
              });
            });
          }),
          (l.prototype.upCustoms = function () {
            return __awaiter(this, void 0, void 0, function () {
              return __generator(this, function () {
                return [2];
              });
            });
          }),
          (l.prototype.uploadDau = function () {
            var t, e, o, i;
            (t = s.App.platform.getSystemInfoSync()),
              (o = (i = s.App.platform.getLaunchOptionsSync()).query),
              (e = {
                share_id: 1036 == i.scene ? i.referrerInfo.appId : '',
                inviter_id: '',
                sdk_version: '1.0.0',
                network_type: t.wifiSignal ? 'wifi' : 'cell',
                system: t.system,
                client: t.model,
                user_tag: 1,
                query: o,
                wx_version: t.version,
              }),
              s.App.http.send(
                n.default.dau,
                e,
                'POST',
                'https://log.328vip.com/',
              );
          }),
          (r = l),
          (o.NetMgr = new r()),
          cc._RF.pop();
      },
      {
        './App': 'App',
        './EventTypes': 'EventTypes',
        './LaunchMgr': 'LaunchMgr',
        './LocalData': 'LocalData',
        './NetData': 'NetData',
        './NetHelper': 'NetHelper',
      },
    ],
    NumberUtil: [
      function (t, e, o) {
        'use strict';
        var i, n;
        cc._RF.push(e, '75bbc46tzhJxr+rGFboLWZW', 'NumberUtil'),
          ((n = function () {}).format = function (t) {
            return t;
          }),
          (n.convertNum = function (t) {
            var e, o, i;
            if (
              ((i = (e = t.split('e+'))[0].split('.').join('')),
              0 < (o = parseInt(e[1]) + 1 - i.length))
            )
              for (var n = 0; n < o; n++) i += '0';
            return i;
          }),
          (i = n),
          (o.default = i),
          cc._RF.pop();
      },
      {},
    ],
    ObjectUtil: [
      function (t, e, o) {
        'use strict';
        var i, n;
        cc._RF.push(e, 'e83c4LHLh1L6KTSPAZdHnrO', 'ObjectUtil'),
          ((n = function () {}).identifyType = function (t) {
            return null === t
              ? 'null'
              : void 0 === t
                ? 'undefined'
                : 'string' == typeof t
                  ? 'string'
                  : 'number' == typeof t
                    ? 'number'
                    : 'boolean' == typeof t
                      ? 'boolean'
                      : Array.isArray(t)
                        ? 'array'
                        : t instanceof Date
                          ? 'Date'
                          : t instanceof RegExp
                            ? 'RegExp'
                            : 'function' == typeof t
                              ? 'function'
                              : 'object';
          }),
          (i = n),
          (o.default = i),
          cc._RF.pop();
      },
      {},
    ],
    PlatformMgr: [
      function (t, e, o) {
        'use strict';
        var i, n, a, r;
        cc._RF.push(e, '2e07aseSLRCZaAg9arEu2Ms', 'PlatformMgr'),
          (o.PlatformMgr = void 0),
          (i = t('./ApiBase')),
          (n = t('./TrackBase')),
          ((r = function () {
            r._instance
              ? console.error('PlatformMgr \u5df2\u5b9e\u4f8b\u5316')
              : (r._instance = this);
          }).prototype.initAPI = function () {
            this._api = new i.default();
          }),
          Object.defineProperty(r.prototype, 'api', {
            get: function () {
              return this._api || this.initAPI(), this._api;
            },
            enumerable: !1,
            configurable: !0,
          }),
          (r.prototype.initTrack = function () {
            this._track = new n.TrackBase();
          }),
          Object.defineProperty(r.prototype, 'track', {
            get: function () {
              return this._track || this.initTrack(), this._track;
            },
            enumerable: !1,
            configurable: !0,
          }),
          (a = r),
          (o.PlatformMgr = a),
          cc._RF.pop();
      },
      { './ApiBase': 'ApiBase', './TrackBase': 'TrackBase' },
    ],
    PromiseUtil: [
      function (t, e, o) {
        'use strict';
        var i, n;
        cc._RF.push(e, 'f022asYQr1NOKBsuQvCte51', 'PromiseUtil'),
          ((n = function () {}).awaitTo = function (t) {
            if (t)
              return t
                .then(function (t) {
                  return [null, t];
                })
                .catch(function (t) {
                  return [t, null];
                });
            Promise.resolve();
          }),
          (n.execute = function (t) {
            return new Promise(function (e, o) {
              t && 0 != t.length
                ? Promise.all(t)
                    .then(function () {
                      e();
                    })
                    .catch(function () {
                      o();
                    })
                : e();
            });
          }),
          (i = n),
          (o.default = i),
          cc._RF.pop();
      },
      {},
    ],
    PropItemView: [
      function (t, e, o) {
        'use strict';
        cc._RF.push(e, '6948341WKZD/bMp/07Qf4Rh', 'PropItemView');
        var i,
          n,
          a,
          r,
          s,
          c,
          l,
          p,
          u,
          d,
          h,
          _,
          f,
          m,
          y,
          g,
          v,
          b = t('../../../RxManager/AdManager').default;
        (m = t('./App')),
          (r = t('./BasePanel')),
          (c = t('./GameCtrl')),
          (l = t('./GameSetting')),
          (f = t('./UserData')),
          (_ = t('./GameEnums')),
          (u = t('./TrackEnums')),
          (d = t('./EventTypes')),
          (a = t('./UIHelper')),
          (p = t('./EffectMgr')),
          (n = t('./GameMgr')),
          (y = (i = cc._decorator).ccclass),
          (s = i.property),
          (g = r.default),
          (v = function () {
            var t;
            return (
              ((t = (null !== g && g.apply(this, arguments)) || this).panel =
                null),
              (t.icons = []),
              (t.btnVideo = null),
              (t.btnNo = null),
              (t.tipsLab3 = null),
              (t.is_share = !1),
              (t.tween = null),
              t
            );
          }),
          __extends(v, g),
          (v.prototype.onLoad = function () {
            this.tween = cc
              .tween(this.btnVideo)
              .to(0.5, { scale: 0.94 })
              .to(0.5, { scale: 1 })
              .union()
              .repeatForever()
              .start();
          }),
          (v.prototype.playIn = function () {
            return __awaiter(this, void 0, void 0, function () {
              return __generator(this, function (t) {
                switch (t.label) {
                  case 0:
                    return [4, p.EffectMgr.viewOpenAnim(this.panel, 1)];
                  case 1:
                    return t.sent(), g.prototype.playIn.call(this), [2];
                }
              });
            });
          }),
          (v.prototype.initEvent = function () {
            this.on(this.btnVideo, this.onBtnVideoClick, this),
              this.on(this.btnNo, this.onBtnNoClick, this);
          }),
          (v.prototype.onEnable = function () {
            c.GameCtrl.gamePause(),
              this.updateView(),
              b.getInstance().showInsert();
          }),
          (v.prototype.onDisable = function () {
            c.GameCtrl.gameResume();
          }),
          (v.prototype.updateView = function () {
            this.tipsLab3.string =
              '\u65f6\u95f4\u4e0d\u591a\u4e86\n\u589e\u52a0' +
              Math.floor(l.GameSetting.prop_time_sec / 60) +
              '\u5206\u949f\u6e38\u620f\u65f6\u95f4';
            for (var t = 0; t < this.icons.length; ++t)
              this.icons[t].active = this._viewData.propType - 1 == t;
            this.is_share = !1;
          }),
          (v.prototype.onBtnVideoClick = function () {
            var t, e, o, i, r, s, p, h, y, g;
            return __awaiter(this, void 0, void 0, function () {
              var v, b, w;
              return __generator(this, function (A) {
                switch (A.label) {
                  case 0:
                    return (
                      (v = !1),
                      this.is_share
                        ? [4, m.App.platform.shareForReward({})]
                        : [3, 2]
                    );
                  case 1:
                    return (v = A.sent()), [3, 4];
                  case 2:
                    return [4, n.GameMgr.showVideoAd()];
                  case 3:
                    (b = A.sent()), (v = 1 == b), (A.label = 4);
                  case 4:
                    if (v) {
                      switch ((w = this._viewData.propType)) {
                        case _.PropItemType.Refresh:
                          f.UserData.addProp(w, 1, !0),
                            c.GameCtrl.mode == _.GameMode.Normal &&
                              null != (t = m.App.track) &&
                              t.trackEvent(
                                this.is_share
                                  ? 'shr_refresh_' + f.UserData.ptLv
                                  : 'vd_refresh_' + f.UserData.ptLv,
                              ),
                            _.GameMode.Endless != c.GameCtrl.mode ||
                              (null != (e = m.App.track) &&
                                e.trackEvent(
                                  this.is_share
                                    ? u.TrackEnums.ed_shr_refresh
                                    : u.TrackEnums.ed_vd_refresh,
                                ));
                          break;
                        case _.PropItemType.Tips:
                          f.UserData.addProp(w, l.GameSetting.ts_num, !0),
                            c.GameCtrl.mode == _.GameMode.Normal &&
                              null != (o = m.App.track) &&
                              o.trackEvent(
                                this.is_share
                                  ? 'shr_tips_' + f.UserData.ptLv
                                  : 'vd_tips_' + f.UserData.ptLv,
                              ),
                            _.GameMode.Endless != c.GameCtrl.mode ||
                              (null != (i = m.App.track) &&
                                i.trackEvent(
                                  this.is_share
                                    ? u.TrackEnums.ed_shr_tips
                                    : u.TrackEnums.ed_vd_tips,
                                ));
                          break;
                        case _.PropItemType.Time:
                          c.GameCtrl.onAddTime(l.GameSetting.prop_time_sec),
                            c.GameCtrl.mode == _.GameMode.Level &&
                              null != (r = m.App.track) &&
                              r.trackEvent('cg_vd_addtime_' + f.UserData.cgLv),
                            c.GameCtrl.mode == _.GameMode.Normal &&
                              null != (s = m.App.track) &&
                              s.trackEvent('vd_delay_' + f.UserData.ptLv),
                            _.GameMode.Endless != c.GameCtrl.mode ||
                              (null != (p = m.App.track) &&
                                p.trackEvent(u.TrackEnums.ed_vd_delay));
                          break;
                        case _.PropItemType.Bottle:
                          m.App.event.emit(d.default.On_Game_Unlock_Bot);
                      }
                      c.GameCtrl.mode == _.GameMode.Normal &&
                        null != (h = m.App.track) &&
                        h.trackEvent('tz_vd_' + f.UserData.ptLv),
                        c.GameCtrl.mode == _.GameMode.Level &&
                          null != (y = m.App.track) &&
                          y.trackEvent('cg_vd_' + f.UserData.cgLv),
                        _.GameMode.Endless == c.GameCtrl.mode &&
                          null != (g = m.App.track) &&
                          g.trackEvent('wj_vd'),
                        m.App.gui.closeUI(a.UIEnum.PropItemView);
                    }
                    return [2];
                }
              });
            });
          }),
          (v.prototype.onBtnNoClick = function () {
            m.App.gui.closeUI(a.UIEnum.PropItemView);
          }),
          __decorate([s(cc.Node)], v.prototype, 'panel', void 0),
          __decorate([s([cc.Node])], v.prototype, 'icons', void 0),
          __decorate([s(cc.Node)], v.prototype, 'btnVideo', void 0),
          __decorate([s(cc.Node)], v.prototype, 'btnNo', void 0),
          __decorate([s(cc.Label)], v.prototype, 'tipsLab3', void 0),
          (h = __decorate([y], v)),
          (o.default = h),
          cc._RF.pop();
      },
      {
        '../../../RxManager/AdManager': void 0,
        './App': 'App',
        './BasePanel': 'BasePanel',
        './EffectMgr': 'EffectMgr',
        './EventTypes': 'EventTypes',
        './GameCtrl': 'GameCtrl',
        './GameEnums': 'GameEnums',
        './GameMgr': 'GameMgr',
        './GameSetting': 'GameSetting',
        './TrackEnums': 'TrackEnums',
        './UIHelper': 'UIHelper',
        './UserData': 'UserData',
      },
    ],
    RankItem: [
      function (t, e, o) {
        'use strict';
        var i, n, a, r, s, c, l;
        cc._RF.push(e, '15c873c35BFS6X2vngj5Z9S', 'RankItem'),
          (s = t('./App')),
          (n = (r = cc._decorator).ccclass),
          (a = r.property),
          (c = cc.Component),
          (l = function () {
            var t;
            return (
              ((t = (null !== c && c.apply(this, arguments)) || this).orderSp =
                null),
              (t.orderLab = null),
              (t.nameLab = null),
              (t.valueLab = null),
              (t.head = null),
              (t.orderSpf = []),
              (t.defHead = null),
              t
            );
          }),
          __extends(l, c),
          (l.prototype.setData = function (t, e) {
            return __awaiter(this, void 0, void 0, function () {
              var o, i, n;
              return __generator(this, function (a) {
                switch (a.label) {
                  case 0:
                    return e
                      ? ((this.nameLab.string = e.nickname.substring(0, 6)),
                        (this.valueLab.string = e.val + '\u5206'),
                        t < 3
                          ? ((this.orderSp.spriteFrame = this.orderSpf[t]),
                            (this.orderLab.string = ''),
                            (this.orderSp.node.active = !0))
                          : ((this.orderSp.node.active = !1),
                            (this.orderLab.string =
                              9999 < t
                                ? Math.floor(t / 1e4) + 'w+'
                                : t + 1 + '')),
                        (this.head.spriteFrame = null),
                        e.headimgurl
                          ? ((o = e.headimgurl),
                            [4, s.App.res.loadRemote(o, { ext: '.png' })])
                          : [3, 2])
                      : [2];
                  case 1:
                    return (
                      (i = a.sent()),
                      e &&
                        e.headimgurl == o &&
                        i &&
                        ((n = new cc.SpriteFrame()).setTexture(i),
                        (this.head.spriteFrame = n)),
                      [3, 3]
                    );
                  case 2:
                    (this.head.spriteFrame = this.defHead), (a.label = 3);
                  case 3:
                    return [2];
                }
              });
            });
          }),
          __decorate([a(cc.Sprite)], l.prototype, 'orderSp', void 0),
          __decorate([a(cc.Label)], l.prototype, 'orderLab', void 0),
          __decorate([a(cc.Label)], l.prototype, 'nameLab', void 0),
          __decorate([a(cc.Label)], l.prototype, 'valueLab', void 0),
          __decorate([a(cc.Sprite)], l.prototype, 'head', void 0),
          __decorate([a([cc.SpriteFrame])], l.prototype, 'orderSpf', void 0),
          __decorate([a(cc.SpriteFrame)], l.prototype, 'defHead', void 0),
          (i = __decorate([n], l)),
          (o.default = i),
          cc._RF.pop();
      },
      { './App': 'App' },
    ],
    ResMgr: [
      function (t, e, o) {
        'use strict';
        var i, n, a, r;
        cc._RF.push(e, 'eac1amNpZJCw5D1M3ZgcXVk', 'ResMgr'),
          (o.ResMgr = void 0),
          (a = t('./PromiseUtil')),
          (i = t('./AssetMgr')),
          ((r = function () {
            (this._nodePool = new Map()),
              (this._loadingRes = {}),
              (this._resCount = {}),
              (this._assetRecord = {}),
              r._instance
                ? console.error('ResMgr \u5df2\u5b9e\u4f8b\u5316')
                : (r._instance = this);
          }).prototype.destroyAsset = function (t) {
            var e;
            (e = this),
              void 0 === t && (t = 3e4),
              console.log(
                '[ cache \u91ca\u653e\u524d ] >',
                cc.assetManager.assets.count,
              ),
              (t = 10),
              i.AssetMgr.destroyAsset(t, function (t) {
                console.warn('\u91ca\u653e\u5217\u8868\uff1a', t.toString()),
                  e._destroyNode(t);
              }),
              101 == window.test &&
                setTimeout(function () {
                  console.log(
                    '[ cache ] >',
                    cc.assetManager.assets.count,
                    cc.assetManager.assets,
                  );
                }, 1e3);
          }),
          (r.prototype.loadAssets = function (t, e, o) {
            return __awaiter(this, void 0, void 0, function () {
              var n, r, s, c, l, p, u, d, h;
              return __generator(this, function (_) {
                switch (_.label) {
                  case 0:
                    for (l in ((n = 0), (r = t.length), (s = []), (c = []), t))
                      c.push(l);
                    (p = 0), (_.label = 1);
                  case 1:
                    return p < c.length
                      ? ((u = c[p]),
                        [4, a.default.awaitTo(i.AssetMgr.getAsset(t[u]))])
                      : [3, 4];
                  case 2:
                    (d = _.sent())[1] &&
                      ((h = d[1]),
                      (n += 1),
                      e && e(n / r),
                      s.push(h),
                      i.AssetMgr.idleAsset(h.uid)),
                      (_.label = 3);
                  case 3:
                    return p++, [3, 1];
                  case 4:
                    return o && o(s), [2];
                }
              });
            });
          }),
          (r.prototype.loadDir = function (t, e, o, n) {
            return __awaiter(this, void 0, void 0, function () {
              var a;
              return (
                (a = this),
                __generator(this, function () {
                  return [
                    2,
                    new Promise(function (r) {
                      return __awaiter(a, void 0, void 0, function () {
                        var a;
                        return __generator(this, function (s) {
                          switch (s.label) {
                            case 0:
                              return o ? [4, i.AssetMgr.getBundle(o)] : [3, 2];
                            case 1:
                              return (a = s.sent()), [3, 3];
                            case 2:
                              (a = cc.resources), (s.label = 3);
                            case 3:
                              return (
                                a.loadDir(
                                  t,
                                  e,
                                  function (t, e) {
                                    n && n(t / e);
                                  },
                                  function (t, e) {
                                    r(e);
                                  },
                                ),
                                [2]
                              );
                          }
                        });
                      });
                    }),
                  ];
                })
              );
            });
          }),
          (r.prototype.loadRemote = function (t, e) {
            return __awaiter(this, void 0, void 0, function () {
              return __generator(this, function (o) {
                switch (o.label) {
                  case 0:
                    return [4, i.AssetMgr.getRemote(t, e)];
                  case 1:
                    return [2, o.sent()];
                }
              });
            });
          }),
          (r.prototype.getBundle = function (t) {
            return i.AssetMgr.getBundle(t);
          }),
          (r.prototype.putNodeToPool = function (t, e) {
            var o;
            void 0 === e && (e = !0),
              t &&
                (o = this.getPool(t.assetID)) &&
                ((t.parent = null),
                o.nodes.push(t),
                o.nodes.length == o.count) &&
                e &&
                i.AssetMgr.idleAsset(t.assetID);
          }),
          (r.prototype.getNodeFromPool = function (t, e) {
            return (
              void 0 === e && (e = 'resources'),
              __awaiter(this, void 0, Promise, function () {
                var o, n, r, s;
                return __generator(this, function (c) {
                  switch (c.label) {
                    case 0:
                      return [
                        4,
                        a.default.awaitTo(
                          i.AssetMgr.getAsset({
                            url: t,
                            type: cc.Prefab,
                            bundle: e,
                          }),
                        ),
                      ];
                    case 1:
                      return (o = c.sent())[1]
                        ? ((n = o[1]),
                          (r = this.getPool(n.assetID)),
                          (s = r.nodes.pop()) ||
                            ((s = cc.instantiate(n)),
                            (r.count += 1),
                            (s.assetID = n.assetID)),
                          [2, s])
                        : [2, null];
                  }
                });
              })
            );
          }),
          (r.prototype.getPool = function (t) {
            var e;
            return (
              (e = this._nodePool.get(t)) ||
                this._nodePool.set(t, (e = { nodes: [], count: 0 })),
              e
            );
          }),
          (r.prototype.getJsonAsset = function (t, e) {
            return __awaiter(this, void 0, Promise, function () {
              return __generator(this, function (o) {
                switch (o.label) {
                  case 0:
                    return [
                      4,
                      i.AssetMgr.getAsset({
                        url: t,
                        type: cc.JsonAsset,
                        bundle: e,
                      }),
                    ];
                  case 1:
                    return [2, o.sent() || null];
                }
              });
            });
          }),
          (r.prototype.getAudio = function (t, e) {
            return __awaiter(this, void 0, Promise, function () {
              return __generator(this, function (o) {
                switch (o.label) {
                  case 0:
                    return [
                      4,
                      i.AssetMgr.getAsset({
                        url: t,
                        type: cc.AudioClip,
                        bundle: e,
                      }),
                    ];
                  case 1:
                    return [2, o.sent() || null];
                }
              });
            });
          }),
          (r.prototype.getSpriteFrame = function (t, e) {
            return __awaiter(this, void 0, Promise, function () {
              return __generator(this, function (o) {
                switch (o.label) {
                  case 0:
                    return [
                      4,
                      i.AssetMgr.getAsset({
                        url: t,
                        type: cc.SpriteFrame,
                        bundle: e,
                      }),
                    ];
                  case 1:
                    return [2, o.sent() || null];
                }
              });
            });
          }),
          (r.prototype.getAsset = function (t, e, o) {
            return (
              void 0 === e && (e = cc.Asset),
              __awaiter(this, void 0, Promise, function () {
                return __generator(this, function (n) {
                  switch (n.label) {
                    case 0:
                      return [
                        4,
                        i.AssetMgr.getAsset({ url: t, type: e, bundle: o }),
                      ];
                    case 1:
                      return [2, n.sent() || null];
                  }
                });
              })
            );
          }),
          (r.prototype.setSprite = function (t, e, o, n) {
            return (
              void 0 === o && (o = ''),
              void 0 === n && (n = !0),
              __awaiter(this, void 0, void 0, function () {
                var r, s, c;
                return __generator(this, function (l) {
                  switch (l.label) {
                    case 0:
                      return !t ||
                        !e ||
                        this._loadingRes[t.uuid] == e ||
                        ((r = t.uuid),
                        t.spriteFrame &&
                          this._assetRecord[r] &&
                          this._assetRecord[r] == e)
                        ? [2]
                        : ((this._loadingRes[r] = e),
                          this._resCount[e] ||
                            (this._resCount[e] = { count: 0, autoRelease: n }),
                          (this._resCount[e].count += 1),
                          [
                            4,
                            a.default.awaitTo(
                              i.AssetMgr.getAsset({
                                url: e,
                                type: cc.SpriteFrame,
                                bundle: o,
                              }),
                            ),
                          ]);
                    case 1:
                      if ((s = l.sent())[1]) {
                        if (
                          ((c = s[1]),
                          this._loadingRes[r] == e &&
                            (t.spriteFrame &&
                              this._assetRecord[r] &&
                              i.AssetMgr.idleAsset(t.spriteFrame.assetID),
                            delete this._loadingRes[r],
                            t.isValid) &&
                            t.node.activeInHierarchy)
                        )
                          return (
                            (t.spriteFrame = c), (this._assetRecord[r] = e), [2]
                          );
                        i.AssetMgr.idleAsset(c.assetID);
                      }
                      return [2];
                  }
                });
              })
            );
          }),
          (r.prototype.setSkeletonData = function (t, e, o, n) {
            return (
              void 0 === o && (o = ''),
              void 0 === n && (n = !0),
              __awaiter(this, void 0, void 0, function () {
                var r, s, c;
                return __generator(this, function (l) {
                  switch (l.label) {
                    case 0:
                      if (!t || !e || this._loadingRes[t.uuid] == e) return [2];
                      if (
                        ((r = t.uuid), t.skeletonData && this._assetRecord[r])
                      ) {
                        if (this._assetRecord[r] == e) return [2];
                        i.AssetMgr.idleAsset(t.skeletonData.assetID);
                      }
                      return (
                        (this._loadingRes[r] = e),
                        this._resCount[e] ||
                          (this._resCount[e] = { count: 0, autoRelease: n }),
                        (this._resCount[e].count += 1),
                        [
                          4,
                          a.default.awaitTo(
                            i.AssetMgr.getAsset({
                              url: e,
                              type: sp.SkeletonData,
                              bundle: o,
                            }),
                          ),
                        ]
                      );
                    case 1:
                      if ((s = l.sent())[1]) {
                        if (
                          ((c = s[1]),
                          this._loadingRes[r] == e &&
                            (delete this._loadingRes[r], t.isValid) &&
                            t.node.activeInHierarchy)
                        )
                          return (
                            (t.skeletonData = c),
                            (this._assetRecord[r] = e),
                            [2]
                          );
                        i.AssetMgr.idleAsset(c.assetID);
                      }
                      return [2];
                  }
                });
              })
            );
          }),
          (r.prototype._destroyNode = function (t) {
            var e;
            (e = this),
              t.forEach(function (t) {
                var o;
                (o = e._nodePool.get(t)) &&
                  (o.nodes.forEach(function (t) {
                    t.destroy();
                  }),
                  (o.nodes = null),
                  (o.count = 0)),
                  e._nodePool.delete(t);
              });
          }),
          (r.prototype.idleAsset = function (t) {
            var e;
            t &&
              (i.AssetMgr.idleAsset(t.assetID), t instanceof cc.SpriteFrame) &&
              (e = t.getTexture()) &&
              e.assetID &&
              i.AssetMgr.idleAsset(e.assetID);
          }),
          (n = r),
          (o.ResMgr = n),
          cc._RF.pop();
      },
      { './AssetMgr': 'AssetMgr', './PromiseUtil': 'PromiseUtil' },
    ],
    ResUtils: [
      function (t, e, o) {
        'use strict';
        cc._RF.push(e, '4c87etJhFJOW7KOD+aSe7pc', 'ResUtils'),
          (o.ResUtils = void 0),
          (o.ResUtils = new (function () {
            (this.prefabs = {
              Tips: 'prefabs/tipsNode',
              Tips2: 'prefabs/tipsNode2',
              Tips3: 'prefabs/tipsNode3',
              diff: 'prefabs/ndbs',
              Bottle_Item1: 'prefabs/bottle_item1',
              Bottle_Item2: 'prefabs/bottle_item2',
              Bottle_Item3: 'prefabs/bottle_item3',
              Bottle_Item4: 'prefabs/bottle_item4',
              Bottle_Item5: 'prefabs/bottle_item5',
              Bottle_Item6: 'prefabs/bottle_item6',
              WhEff: 'prefabs/whEff',
              DlEff: 'prefabs/dlEff',
              DlEff2: 'prefabs/dlEff2',
              AppearEff0: 'prefabs/appearEff0',
              AppearEff1: 'prefabs/appearEff1',
            }),
              (this.Audios = {
                bgm: 'audios/bgm',
                btn_click: 'audios/btn_click',
                fail: 'audios/\u5931\u8d25',
                win: 'audios/\u80dc\u5229',
                del: 'audios/\u7816\u5757\u6d88\u6389',
                del_err: 'audios/\u6d88\u9519',
                appear: 'audios/\u7816\u5757\u5b8c\u5168\u663e\u793a',
                enter: 'audios/\u7816\u5757\u9010\u6e10\u51fa\u73b0',
                full: 'audios/\u88c5\u6ee1',
                full2: 'audios/\u88c5\u6ee12',
                pour: 'audios/\u5012\u6c34',
                pickUp: 'audios/\u62ff\u8d77\u6c34\u676f',
                remove: 'audios/\u79fb\u51fa',
                error_act: 'audios/\u9519\u8bef\u64cd\u4f5c',
                add: 'audios/\u589e\u52a0',
                tips: 'audios/\u63d0\u793a',
                disruption: 'audios/\u6253\u4e71',
                short_addtime: 'audios/\u77ed\u52a0\u65f6',
                flyout: 'audios/\u98de\u51fa',
                bag: 'audios/\u888b\u5b50',
              });
          })()),
          cc._RF.pop();
      },
      {},
    ],
    ReviveView: [
      function (t, e, o) {
        'use strict';
        cc._RF.push(e, '2c511+hfVNGkIC6C7XXTk4P', 'ReviveView');
        var i,
          n,
          a,
          r,
          s,
          c,
          l,
          p,
          u,
          d,
          h,
          _,
          f,
          m,
          y,
          g,
          v,
          b = t('../../../RxManager/AdManager').default;
        (m = t('./App')),
          (f = t('./BasePanel')),
          (r = t('./GameCtrl')),
          (i = t('./GameSetting')),
          (n = t('./UserData')),
          (d = t('./GameEnums')),
          (a = t('./TrackEnums')),
          (h = t('./EventTypes')),
          (y = t('./UIHelper')),
          (s = t('./EffectMgr')),
          (_ = t('./GameMgr')),
          (l = (c = cc._decorator).ccclass),
          (u = c.property),
          (g = f.default),
          (v = function () {
            var t;
            return (
              ((t = (null !== g && g.apply(this, arguments)) || this).panel =
                null),
              (t.timeNode = null),
              (t.stepNode = null),
              (t.btnVideo = null),
              (t.btnNo = null),
              (t.tipsLab5 = null),
              (t.tipsLab6 = null),
              t
            );
          }),
          __extends(v, g),
          (v.prototype.playIn = function () {
            return __awaiter(this, void 0, void 0, function () {
              return __generator(this, function (t) {
                switch (t.label) {
                  case 0:
                    return [4, s.EffectMgr.viewOpenAnim(this.panel, 1)];
                  case 1:
                    return t.sent(), g.prototype.playIn.call(this), [2];
                }
              });
            });
          }),
          (v.prototype.initEvent = function () {
            this.on(this.btnVideo, this.onBtnVideoClick, this),
              this.on(this.btnNo, this.onBtnNoClick, this);
          }),
          (v.prototype.onEnable = function () {
            this.updateView(), b.getInstance().showInsert();
          }),
          (v.prototype.onDisable = function () {
            r.GameCtrl.gameResume();
          }),
          (v.prototype.updateView = function () {
            (this.timeNode.active = 1 == this._viewData.type),
              (this.stepNode.active = 2 == this._viewData.type),
              (this.tipsLab5.string =
                '\u65f6\u95f4\u5230\u4e86\n\u589e\u52a0' +
                Math.floor(i.GameSetting.revive_sec / 60) +
                '\u5206\u949f\u6e38\u620f\u65f6\u95f4'),
              (this.tipsLab6.string =
                '\u89c2\u770b\u5e7f\u544a\u53ef\u4ee5\u589e\u52a0' +
                i.GameSetting.revive_step +
                '\u6b65');
          }),
          (v.prototype.onBtnVideoClick = function () {
            var t, e;
            return __awaiter(this, void 0, void 0, function () {
              return __generator(this, function (o) {
                switch (o.label) {
                  case 0:
                    return [4, _.GameMgr.showVideoAd()];
                  case 1:
                    return (
                      1 == o.sent() &&
                        (r.GameCtrl.mode == d.GameMode.Normal &&
                          null != (t = m.App.track) &&
                          t.trackEvent(
                            1 == this._viewData.type
                              ? 'vd_time_' + n.UserData.ptLv
                              : 'vd_step_' + n.UserData.ptLv,
                          ),
                        r.GameCtrl.mode == d.GameMode.Endless &&
                          null != (e = m.App.track) &&
                          e.trackEvent(
                            1 == this._viewData.type
                              ? a.TrackEnums.ed_vd_time
                              : a.TrackEnums.ed_vd_step,
                          ),
                        m.App.gui.closeUI(y.UIEnum.ReviveView),
                        m.App.event.emit(h.default.On_Game_Revive, {
                          isRevive: !0,
                          type: this._viewData.type,
                        })),
                      [2]
                    );
                }
              });
            });
          }),
          (v.prototype.onBtnNoClick = function () {
            m.App.gui.closeUI(y.UIEnum.ReviveView),
              m.App.event.emit(h.default.On_Game_Revive, { isRevive: !1 });
          }),
          __decorate([u(cc.Node)], v.prototype, 'panel', void 0),
          __decorate([u(cc.Node)], v.prototype, 'timeNode', void 0),
          __decorate([u(cc.Node)], v.prototype, 'stepNode', void 0),
          __decorate([u(cc.Node)], v.prototype, 'btnVideo', void 0),
          __decorate([u(cc.Node)], v.prototype, 'btnNo', void 0),
          __decorate([u(cc.Label)], v.prototype, 'tipsLab5', void 0),
          __decorate([u(cc.Label)], v.prototype, 'tipsLab6', void 0),
          (p = __decorate([l], v)),
          (o.default = p),
          cc._RF.pop();
      },
      {
        '../../../RxManager/AdManager': void 0,
        './App': 'App',
        './BasePanel': 'BasePanel',
        './EffectMgr': 'EffectMgr',
        './EventTypes': 'EventTypes',
        './GameCtrl': 'GameCtrl',
        './GameEnums': 'GameEnums',
        './GameMgr': 'GameMgr',
        './GameSetting': 'GameSetting',
        './TrackEnums': 'TrackEnums',
        './UIHelper': 'UIHelper',
        './UserData': 'UserData',
      },
    ],
    Rotate: [
      function (t, e, o) {
        'use strict';
        var i, n, a, r, s, c;
        cc._RF.push(e, 'f7bf5DoUkdPgbREap59Ees4', 'Rotate'),
          (i = (r = cc._decorator).ccclass),
          (n = r.property),
          (s = cc.Component),
          (c = function () {
            var t;
            return (
              ((t = (null !== s && s.apply(this, arguments)) || this).body =
                null),
              (t.angle = -1),
              (t.play_sec = 0),
              t
            );
          }),
          __extends(c, s),
          (c.prototype.update = function (t) {
            0 < this.play_sec && ((this.play_sec -= t), this.play_sec <= 0)
              ? (this.node.active = !1)
              : (this.body.angle += this.angle);
          }),
          __decorate([n(cc.Node)], c.prototype, 'body', void 0),
          __decorate([n()], c.prototype, 'angle', void 0),
          (a = __decorate([i], c)),
          (o.default = a),
          cc._RF.pop();
      },
      {},
    ],
    RoundBox: [
      function (t, e, o) {
        'use strict';
        var i, n, a, r, s, c, l, p, u;
        cc._RF.push(e, 'dba1dJXmbJMeqvNyGmloSYm', 'RoundBox'),
          (o.SizeMode = void 0),
          (a = [0, 9, 11, 0, 11, 1, 2, 8, 10, 2, 4, 8, 3, 5, 7, 3, 7, 6]),
          ((p = n = o.SizeMode || (o.SizeMode = {}))[
            (p['CUSTOM: \u81ea\u5b9a\u4e49\u5c3a\u5bf8'] = 0)
          ] = 'CUSTOM: \u81ea\u5b9a\u4e49\u5c3a\u5bf8'),
          (p[
            (p[
              'TRIMMED: \u539f\u59cb\u5c3a\u5bf8\u88c1\u526a\u900f\u660e\u50cf\u7d20'
            ] = 1)
          ] =
            'TRIMMED: \u539f\u59cb\u5c3a\u5bf8\u88c1\u526a\u900f\u660e\u50cf\u7d20'),
          (p[(p['RAW: \u56fe\u7247\u539f\u59cb\u5c3a\u5bf8'] = 2)] =
            'RAW: \u56fe\u7247\u539f\u59cb\u5c3a\u5bf8'),
          (r = cc._decorator),
          (i = r.ccclass),
          (l = r.property),
          r.menu,
          (u = function () {
            (this.leftBottom = !0),
              (this.rightBottom = !0),
              (this.rightTop = !0),
              (this.leftTop = !0),
              (this.visible = null);
          }),
          __decorate([l({})], u.prototype, 'leftBottom', void 0),
          __decorate([l({})], u.prototype, 'rightBottom', void 0),
          __decorate([l({})], u.prototype, 'rightTop', void 0),
          __decorate([l({})], u.prototype, 'leftTop', void 0),
          (s = __decorate([i('Corner')], u)),
          (c = (function (t) {
            var e;
            return (
              (e = function () {
                var e;
                return (
                  ((e =
                    (null !== t && t.apply(this, arguments)) || this).atlas =
                    null),
                  (e._spriteFrame = null),
                  (e._sizeMode =
                    n[
                      'TRIMMED: \u539f\u59cb\u5c3a\u5bf8\u88c1\u526a\u900f\u660e\u50cf\u7d20'
                    ]),
                  (e._radius = 100),
                  (e._segment = 5),
                  (e._corner = new s()),
                  (e.renderData = null),
                  (e.xyOffset = 1e8),
                  (e.uvOffset = 1e8),
                  (e.colorOffset = 1e8),
                  (e.step = 0),
                  (e.local = []),
                  e
                );
              }),
              __extends(e, t),
              Object.defineProperty(e.prototype, 'spriteFrame', {
                get: function () {
                  return this._spriteFrame;
                },
                set: function (t) {
                  (this._spriteFrame = t),
                    this.updateSpriteFrame(),
                    this.updateSizeMode();
                },
                enumerable: !1,
                configurable: !0,
              }),
              Object.defineProperty(e.prototype, 'sizeMode', {
                get: function () {
                  return this._sizeMode;
                },
                set: function (t) {
                  (this._sizeMode = t), this.updateSizeMode();
                },
                enumerable: !1,
                configurable: !0,
              }),
              Object.defineProperty(e.prototype, 'radius', {
                get: function () {
                  return this._radius;
                },
                set: function (t) {
                  (this._radius = Math.max(t, 0)), this.setVertsDirty();
                },
                enumerable: !1,
                configurable: !0,
              }),
              Object.defineProperty(e.prototype, 'segment', {
                get: function () {
                  return this._segment;
                },
                set: function (t) {
                  (this._segment = Math.max(t, 1)),
                    this.createBuffer(),
                    this.updateIndice(),
                    this.setVertsDirty(),
                    (this.node._renderFlag |= cc.RenderFlow.FLAG_OPACITY_COLOR);
                },
                enumerable: !1,
                configurable: !0,
              }),
              Object.defineProperty(e.prototype, 'corner', {
                get: function () {
                  return this._corner;
                },
                set: function (t) {
                  (this._corner = t),
                    this.updateCorner(),
                    this.createBuffer(),
                    this.updateIndice(),
                    this.setVertsDirty(),
                    (this.node._renderFlag |= cc.RenderFlow.FLAG_OPACITY_COLOR);
                },
                enumerable: !1,
                configurable: !0,
              }),
              (e.prototype._resetAssembler = function () {
                var t, e;
                ((t = this._assembler = new cc.Assembler()).updateRenderData =
                  this.updateVData.bind(this)),
                  (t.updateColor = this.updateColor.bind(this)),
                  t.init(this),
                  (this.renderData = new cc.RenderData()),
                  this.renderData.init(t);
                for (
                  var o = t.getVfmt(), i = o._elements, n = i.length - 1;
                  -1 < n;
                  this.step += i[n--].bytes >> 2
                );
                (e = o._attr2el),
                  (this.xyOffset = e.a_position.offset >> 2),
                  (this.uvOffset = e.a_uv0.offset >> 2),
                  (this.colorOffset = e.a_color.offset >> 2);
              }),
              (e.prototype.onLoad = function () {
                this.updateSpriteFrame(),
                  this.updateSizeMode(),
                  this.updateCorner(),
                  this.createBuffer(),
                  this.updateIndice(),
                  this.node.on(
                    cc.Node.EventType.ANCHOR_CHANGED,
                    this.onAnchorChanged,
                    this,
                  ),
                  this.node.on(
                    cc.Node.EventType.SIZE_CHANGED,
                    this.onSizeChanged,
                    this,
                  );
              }),
              (e.prototype.onDestroy = function () {
                t.prototype.onDestroy.call(this),
                  this.node.off(
                    cc.Node.EventType.ANCHOR_CHANGED,
                    this.onAnchorChanged,
                    this,
                  ),
                  this.node.off(
                    cc.Node.EventType.SIZE_CHANGED,
                    this.onSizeChanged,
                    this,
                  );
              }),
              (e.prototype.updateCorner = function () {
                var t;
                (t = this._corner).visible = [
                  t.leftBottom,
                  t.rightBottom,
                  t.rightTop,
                  t.leftTop,
                ];
              }),
              (e.prototype.createBuffer = function () {
                for (
                  var t, e, o = 0, i = 0, n = this._corner.visible;
                  i < 4;
                  n[i++] && ++o
                );
                (t = new Float32Array(5 * (12 + o * (this._segment - 1)))),
                  (e = new Uint16Array(3 * (6 + o * this._segment))),
                  this.renderData.updateMesh(0, t, e);
              }),
              (e.prototype.fillBuffers = function (t, e) {
                var o, i, n, a, r, s;
                (s = this.renderData.vDatas[0]),
                  (a = this.renderData.iDatas[0]),
                  e.worldMatDirty && this.fitXY(s),
                  (o =
                    (r = (i = e._meshBuffer).request(s.length, a.length))
                      .byteOffset >> 2),
                  (n = i._vData),
                  s.length + o > n.length
                    ? n.set(s.subarray(0, n.length - o), o)
                    : n.set(s, o);
                for (
                  var c = i._iData,
                    l = r.indiceOffset,
                    p = r.vertexOffset,
                    u = 0,
                    d = a.length;
                  u < d;
                  c[l++] = p + a[u++]
                );
              }),
              (e.prototype.updateSpriteFrame = function () {
                var t, e;
                (e = this._spriteFrame),
                  (this._assembler.fillBuffers = e
                    ? this.fillBuffers.bind(this)
                    : function () {}),
                  (t =
                    this.getMaterial(0) ||
                    cc.Material.getBuiltinMaterial('2d-sprite')).define(
                    'USE_TEXTURE',
                    !0,
                  ),
                  t.setProperty('texture', e ? e.getTexture() : null);
              }),
              (e.prototype.updateSizeMode = function () {
                if (this._spriteFrame)
                  switch (this._sizeMode) {
                    case n[
                      'TRIMMED: \u539f\u59cb\u5c3a\u5bf8\u88c1\u526a\u900f\u660e\u50cf\u7d20'
                    ]:
                      this.node.setContentSize(this._spriteFrame._rect.size);
                      break;
                    case n['RAW: \u56fe\u7247\u539f\u59cb\u5c3a\u5bf8']:
                      this.node.setContentSize(this._spriteFrame._originalSize);
                  }
              }),
              (e.prototype.updateVData = function () {
                var t, e, o, i, n, a, r, s, c, l, p, u, d, h, _;
                (_ = this.renderData.vDatas[0]),
                  (r = cc.sys.isNative ? _ : this.local),
                  (s = (i = this.node).width),
                  (p = i.height),
                  (e = -s * i.anchorX),
                  (n = -p * i.anchorY),
                  (u = s * (1 - i.anchorX)),
                  (h = p * (1 - i.anchorY)),
                  (l = e + (d = Math.min(this._radius, Math.min(s, p) / 2))),
                  (t = n + d),
                  (c = u - d),
                  (o = h - d),
                  (a = this._corner),
                  (r[0] = l),
                  a.leftBottom ? (r[1] = t) : (r[1] = n),
                  (r[5] = e),
                  (r[6] = r[1]),
                  (r[10] = l),
                  (r[11] = n),
                  (r[15] = c),
                  a.rightBottom ? (r[16] = t) : (r[16] = n),
                  (r[20] = c),
                  (r[21] = n),
                  (r[25] = u),
                  (r[26] = r[16]),
                  (r[30] = c),
                  a.rightTop ? (r[31] = o) : (r[31] = h),
                  (r[35] = u),
                  (r[36] = r[31]),
                  (r[40] = c),
                  (r[41] = h),
                  (r[45] = l),
                  a.leftTop ? (r[46] = o) : (r[46] = h),
                  (r[50] = l),
                  (r[51] = h),
                  (r[55] = e),
                  (r[56] = r[46]);
                for (
                  var f = Math.PI / (this._segment << 1),
                    m = Math.cos(f),
                    y = Math.sin(f),
                    g = a.visible,
                    v = 0,
                    b = 60,
                    w = this.step;
                  v < 4;
                  ++v
                )
                  if (g[v])
                    for (
                      var A = 3 * v * w,
                        L = r[A],
                        S = r[1 + A],
                        C = r[(A += w)] - L,
                        E = r[A + 1] - S,
                        G = 0,
                        k = this._segment - 1;
                      G < k;
                      ++G
                    )
                      (r[b] = L + C * m - E * y),
                        (r[b + 1] = S + E * m + C * y),
                        (C = r[b] - L),
                        (E = r[b + 1] - S),
                        (b += w);
                for (
                  cc.sys.isNative || this.fitXY(_),
                    v = 0,
                    k = _.length,
                    w = this.step;
                  v < k;
                  v += w
                )
                  (_[v + 2] = (r[v] - e) / s),
                    (_[v + 3] = 1 - (r[v + 1] - n) / p);
                this.fitUV(_);
              }),
              (e.prototype.fitXY = function (t) {
                for (
                  var e = this.node._worldMatrix.m,
                    o = e[0],
                    i = e[1],
                    n = e[4],
                    a = e[5],
                    r = e[12],
                    s = e[13],
                    c = this.xyOffset,
                    l = t.length,
                    p = this.step,
                    u = this.local;
                  c < l;
                  c += p
                ) {
                  var d, h;
                  (d = u[c]),
                    (h = u[c + 1]),
                    (t[c] = d * o + h * n + r),
                    (t[c + 1] = d * i + h * a + s);
                }
              }),
              (e.prototype.fitUV = function (t) {
                var e, o, i, n;
                if (null !== (e = this._spriteFrame))
                  if (
                    ((o = e._texture.width),
                    (n = e._texture.height),
                    (i = e._rect),
                    e._rotated)
                  )
                    for (
                      var a = this.uvOffset, r = t.length, s = this.step;
                      a < r;
                      a += s, 0
                    ) {
                      var c;
                      (c = t[a]),
                        (t[a] = ((1 - t[a + 1]) * i.height + i.x) / o),
                        (t[a + 1] = (c * i.width + i.y) / n);
                    }
                  else
                    for (
                      a = this.uvOffset, r = t.length, s = this.step;
                      a < r;
                      a += s, 0
                    )
                      (t[a] = (t[a] * i.width + i.x) / o),
                        (t[a + 1] = (t[a + 1] * i.height + i.y) / n);
              }),
              (e.prototype.updateColor = function () {
                for (
                  var t = this.renderData.uintVDatas[0],
                    e = this.node.color._val,
                    o = this.colorOffset,
                    i = t.length,
                    n = this.step;
                  o < i;
                  t[o] = e, o += n
                );
              }),
              (e.prototype.updateIndice = function () {
                for (
                  var t = this.renderData.iDatas[0], e = a.length - 1;
                  -1 < e;
                  t[e] = a[e--]
                );
                var o = a.length,
                  i = this._corner.visible,
                  n = 36;
                for (e = 0; e < 4; ++e)
                  if (i[e]) {
                    for (
                      var r = 3 * e,
                        s = 1 + r,
                        c = n / 3,
                        l = 0,
                        p = this._segment - 1;
                      l < p;
                      ++l
                    )
                      (t[o++] = r),
                        (t[o++] = s),
                        (t[o++] = c),
                        (s = c++),
                        (n += 3);
                    (t[o++] = r), (t[o++] = s), (t[o++] = 2 + r);
                  }
              }),
              (e.prototype.onAnchorChanged = function () {
                this.setVertsDirty();
              }),
              (e.prototype.onSizeChanged = function () {
                if ((this.setVertsDirty(), this._spriteFrame))
                  switch (this._sizeMode) {
                    case n[
                      'TRIMMED: \u539f\u59cb\u5c3a\u5bf8\u88c1\u526a\u900f\u660e\u50cf\u7d20'
                    ]:
                      var t = this._spriteFrame._rect.size;
                      if (
                        this.node.width === t.width &&
                        this.node.height === t.height
                      )
                        return;
                      break;
                    case n['RAW: \u56fe\u7247\u539f\u59cb\u5c3a\u5bf8']:
                      var e = this._spriteFrame._originalSize;
                      if (
                        this.node.width === e.width &&
                        this.node.height === e.height
                      )
                        return;
                  }
                this._sizeMode = n['CUSTOM: \u81ea\u5b9a\u4e49\u5c3a\u5bf8'];
              }),
              __decorate(
                [l({ type: cc.SpriteAtlas, serializable: !1, readonly: !0 })],
                e.prototype,
                'atlas',
                void 0,
              ),
              __decorate([l], e.prototype, '_spriteFrame', void 0),
              __decorate(
                [l({ type: cc.SpriteFrame })],
                e.prototype,
                'spriteFrame',
                null,
              ),
              __decorate([l], e.prototype, '_sizeMode', void 0),
              __decorate(
                [l({ type: cc.Enum(n) })],
                e.prototype,
                'sizeMode',
                null,
              ),
              __decorate([l], e.prototype, '_radius', void 0),
              __decorate([l({})], e.prototype, 'radius', null),
              __decorate([l], e.prototype, '_segment', void 0),
              __decorate(
                [l({ type: cc.Integer })],
                e.prototype,
                'segment',
                null,
              ),
              __decorate([l], e.prototype, '_corner', void 0),
              __decorate([l({})], e.prototype, 'corner', null),
              __decorate([i], e)
            );
          })(cc.RenderComponent)),
          (o.default = c),
          cc._RF.pop();
      },
      {},
    ],
    RukouView: [
      function (t, e, o) {
        'use strict';
        cc._RF.push(e, 'e0304QGg3pOwIqY0RR6+TWM', 'RukouView');
        var i,
          n,
          a,
          r,
          s,
          c,
          l,
          p,
          u,
          d,
          h,
          _,
          f = t('../../../RxManager/AdManager').default,
          m = t('../../../RxManager/RxUtls').default;
        (r = t('./App')),
          (s = t('./BasePanel')),
          (c = t('./GameCtrl')),
          t('./GameEnums'),
          t('./EventTypes'),
          (p = t('./UIHelper')),
          (d = t('./EffectMgr')),
          (i = t('./GameMgr')),
          t('./ResUtils'),
          (n = (u = cc._decorator).ccclass),
          (l = u.property),
          (h = s.default),
          (_ = function () {
            var t;
            return (
              ((t = (null !== h && h.apply(this, arguments)) || this).panel =
                null),
              (t.btnAgain = null),
              (t.btnHome = null),
              (t.light = null),
              t
            );
          }),
          __extends(_, h),
          (_.prototype.onEnable = function () {
            i.GameMgr.showInterstitialAd();
          }),
          (_.prototype.initEvent = function () {
            this.on(this.btnAgain, this.onBtnAgainClick, this),
              this.on(this.btnHome, this.onBtnHomeClick, this);
          }),
          (_.prototype.playIn = function () {
            return __awaiter(this, void 0, void 0, function () {
              return __generator(this, function (t) {
                switch (t.label) {
                  case 0:
                    return [4, d.EffectMgr.viewOpenAnim(this.panel, 1.7)];
                  case 1:
                    return t.sent(), h.prototype.playIn.call(this), [2];
                }
              });
            });
          }),
          (_.prototype.update = function () {
            this.light.active && --this.light.angle;
          }),
          (_.prototype.onBtnAgainClick = function () {
            1 != m.get('navigateToScene') && '1' != m.get('navigateToScene')
              ? (f.getInstance().navigateToScene(), this.onBtnHomeClick())
              : d.EffectMgr.showTips(
                  '\u5df2\u83b7\u5f97\u4fa7\u8fb9\u680f\u5956\u52b1',
                );
          }),
          (_.prototype.onBtnHomeClick = function () {
            return __awaiter(this, void 0, void 0, function () {
              return __generator(this, function (t) {
                switch (t.label) {
                  case 0:
                    return [4, r.App.gui.openUI(p.UIEnum.HomeView)];
                  case 1:
                    return (
                      t.sent(),
                      c.GameCtrl.removeGame(),
                      r.App.gui.closeUI(p.UIEnum.RukouView),
                      [2]
                    );
                }
              });
            });
          }),
          __decorate([l(cc.Node)], _.prototype, 'panel', void 0),
          __decorate([l(cc.Node)], _.prototype, 'btnAgain', void 0),
          __decorate([l(cc.Node)], _.prototype, 'btnHome', void 0),
          __decorate([l(cc.Node)], _.prototype, 'light', void 0),
          (a = __decorate([n], _)),
          (o.default = a),
          cc._RF.pop();
      },
      {
        '../../../RxManager/AdManager': void 0,
        '../../../RxManager/RxUtls': void 0,
        './App': 'App',
        './BasePanel': 'BasePanel',
        './EffectMgr': 'EffectMgr',
        './EventTypes': 'EventTypes',
        './GameCtrl': 'GameCtrl',
        './GameEnums': 'GameEnums',
        './GameMgr': 'GameMgr',
        './ResUtils': 'ResUtils',
        './UIHelper': 'UIHelper',
      },
    ],
    SettingView: [
      function (t, e, o) {
        'use strict';
        cc._RF.push(e, '3dd356WGoZId7TVS0ICMY0q', 'SettingView');
        var i,
          n,
          a,
          r,
          s,
          c,
          l,
          p,
          u,
          d,
          h,
          _,
          f,
          m,
          y,
          g = t('../../../RxManager/AdManager').default;
        (a = t('./App')),
          (s = t('./BasePanel')),
          (p = t('./GameCtrl')),
          (l = t('./GameSetting')),
          (i = t('./LocalData')),
          (n = t('./UserData')),
          (c = t('./EventTypes')),
          (h = t('./UIHelper')),
          (u = t('./EffectMgr')),
          t('./GameMgr'),
          (f = (d = cc._decorator).ccclass),
          (_ = d.property),
          (m = s.default),
          (y = function () {
            var t;
            return (
              ((t = (null !== m && m.apply(this, arguments)) || this).panel =
                null),
              (t.btnSoundOn = null),
              (t.btnSoundOff = null),
              (t.btnMusicOn = null),
              (t.btnMusicOff = null),
              (t.btnVibrateOn = null),
              (t.btnVibrateOff = null),
              (t.btnBack = null),
              (t.btnReplay = null),
              (t.btnClose = null),
              (t.btns = null),
              (t.btnFeedBack = null),
              (t.versionLabel = null),
              (t.idLab = null),
              (t.lvEditBox = null),
              (t.btnGo = null),
              (t.debug = null),
              t
            );
          }),
          __extends(y, m),
          (y.prototype.onEnable = function () {
            (this.btnFeedBack.active = 1 == l.GameSetting.show_feedBack),
              p.GameCtrl.gamePause(),
              this.updateView(),
              (this.idLab.string = 'ID:' + a.App.http.getOpenId()),
              (this.debug.active = 101 == window.test),
              g.getInstance().showInsert();
          }),
          (y.prototype.onDisable = function () {}),
          (y.prototype.updateView = function () {
            var t, e, o, n;
            (t = 1 == i.LocalData.getValue('sound')),
              (o = 1 == i.LocalData.getValue('music')),
              a.App.sound.updateSetting(o, t),
              (this.btnSoundOn.active = t),
              (this.btnSoundOff.active = !t),
              (this.btnMusicOn.active = o),
              (this.btnMusicOff.active = !o),
              (e = 1 == i.LocalData.getValue('vibrate')),
              (this.btnVibrateOn.active = e),
              (this.btnVibrateOff.active = !e),
              'home' == (null == (n = this._viewData) ? void 0 : n.from)
                ? ((this.btns.active = !1), (this.panel.height = 320))
                : ((this.btns.active = !0), (this.panel.height = 460)),
              (this.versionLabel.string =
                '\u7248\u672c\u53f7\uff1av' + window.version);
          }),
          (y.prototype.playIn = function () {
            return __awaiter(this, void 0, Promise, function () {
              return __generator(this, function (t) {
                switch (t.label) {
                  case 0:
                    return [4, u.EffectMgr.viewOpenAnim(this.panel, 1.8)];
                  case 1:
                    return t.sent(), m.prototype.playIn.call(this), [2];
                }
              });
            });
          }),
          (y.prototype.initEvent = function () {
            this.on(this.btnSoundOn, this.onBtnSoundClick, this),
              this.on(this.btnSoundOff, this.onBtnSoundClick, this),
              this.on(this.btnMusicOn, this.onBtnMusicClick, this),
              this.on(this.btnMusicOff, this.onBtnMusicClick, this),
              this.on(this.btnVibrateOn, this.onBtnVibrateClick, this),
              this.on(this.btnVibrateOff, this.onBtnVibrateClick, this),
              this.on(this.btnBack, this.onBtnBackClick, this),
              this.on(this.btnReplay, this.onBtnReplayClick, this),
              this.on(this.btnClose, this.onBtnCloseClick, this),
              this.on(this.btnFeedBack, this.onBtnFeedBackClick, this),
              this.on(this.idLab.node, this.onIdLabClick, this),
              this.on(this.btnGo, this.onBtnGoClick, this);
          }),
          (y.prototype.onIdLabClick = function () {
            cc.sys.platform == cc.sys.WECHAT_GAME &&
              wx.setClipboardData({
                data: a.App.http.getOpenId(),
                success: function () {
                  console.log('\u590d\u5236\u5230\u7c98\u8d34\u677f');
                },
              });
          }),
          (y.prototype.onBtnGoClick = function () {
            var t;
            (t = parseInt(this.lvEditBox.string)),
              n.UserData.setCgLv((t = t < 1 ? 1 : t)),
              a.App.gui.closeUI(h.UIEnum.SettingView),
              a.App.event.emit(c.default.On_Game_Play);
          }),
          (y.prototype.onBtnVibrateClick = function () {
            var t;
            (t = i.LocalData.getValue('vibrate')),
              i.LocalData.setValue('vibrate', 1 == t ? 0 : 1),
              this.updateView();
          }),
          (y.prototype.onBtnBackClick = function () {
            return __awaiter(this, void 0, void 0, function () {
              return __generator(this, function (t) {
                switch (t.label) {
                  case 0:
                    return [4, a.App.gui.openUI(h.UIEnum.HomeView)];
                  case 1:
                    return (
                      t.sent(),
                      p.GameCtrl.removeGame(),
                      a.App.gui.closeUI(h.UIEnum.SettingView),
                      [2]
                    );
                }
              });
            });
          }),
          (y.prototype.onBtnReplayClick = function () {
            var t;
            (t = this),
              n.UserData.useEnergy()
                ? (a.App.gui.closeUI(h.UIEnum.SettingView),
                  a.App.event.emit(c.default.On_Game_Replay))
                : a.App.gui.openUI(h.UIEnum.EnergyView, {
                    callback: function (e) {
                      return __awaiter(t, void 0, void 0, function () {
                        return __generator(this, function () {
                          return e && this.onBtnReplayClick(), [2];
                        });
                      });
                    },
                  });
          }),
          (y.prototype.onBtnCloseClick = function () {
            var t;
            'home' != (null == (t = this._viewData) ? void 0 : t.from) &&
              p.GameCtrl.gameResume(),
              a.App.gui.closeUI(h.UIEnum.SettingView);
          }),
          (y.prototype.onBtnFeedBackClick = function () {}),
          (y.prototype.onBtnSoundClick = function () {
            var t;
            (t = i.LocalData.getValue('sound')),
              i.LocalData.setValue('sound', 1 == t ? 0 : 1),
              this.updateView();
          }),
          (y.prototype.onBtnMusicClick = function () {
            var t;
            (t = i.LocalData.getValue('music')),
              i.LocalData.setValue('music', 1 == t ? 0 : 1),
              this.updateView();
          }),
          __decorate([_(cc.Node)], y.prototype, 'panel', void 0),
          __decorate([_(cc.Node)], y.prototype, 'btnSoundOn', void 0),
          __decorate([_(cc.Node)], y.prototype, 'btnSoundOff', void 0),
          __decorate([_(cc.Node)], y.prototype, 'btnMusicOn', void 0),
          __decorate([_(cc.Node)], y.prototype, 'btnMusicOff', void 0),
          __decorate([_(cc.Node)], y.prototype, 'btnVibrateOn', void 0),
          __decorate([_(cc.Node)], y.prototype, 'btnVibrateOff', void 0),
          __decorate([_(cc.Node)], y.prototype, 'btnBack', void 0),
          __decorate([_(cc.Node)], y.prototype, 'btnReplay', void 0),
          __decorate([_(cc.Node)], y.prototype, 'btnClose', void 0),
          __decorate([_(cc.Node)], y.prototype, 'btns', void 0),
          __decorate([_(cc.Node)], y.prototype, 'btnFeedBack', void 0),
          __decorate([_(cc.Label)], y.prototype, 'versionLabel', void 0),
          __decorate([_(cc.Label)], y.prototype, 'idLab', void 0),
          __decorate([_(cc.EditBox)], y.prototype, 'lvEditBox', void 0),
          __decorate([_(cc.Node)], y.prototype, 'btnGo', void 0),
          __decorate([_(cc.Node)], y.prototype, 'debug', void 0),
          (r = __decorate([f], y)),
          (o.default = r),
          cc._RF.pop();
      },
      {
        '../../../RxManager/AdManager': void 0,
        './App': 'App',
        './BasePanel': 'BasePanel',
        './EffectMgr': 'EffectMgr',
        './EventTypes': 'EventTypes',
        './GameCtrl': 'GameCtrl',
        './GameMgr': 'GameMgr',
        './GameSetting': 'GameSetting',
        './LocalData': 'LocalData',
        './UIHelper': 'UIHelper',
        './UserData': 'UserData',
      },
    ],
    ShopView: [
      function (t, e, o) {
        'use strict';
        var i, n, a, r, s, c, l, p, u, d, h, _;
        cc._RF.push(e, '9e8bevohdJE5rNOoeSbfzxK', 'ShopView'),
          (a = t('./App')),
          (n = t('./BasePanel')),
          (p = t('./GameSetting')),
          (u = t('./UserData')),
          (i = t('./UIHelper')),
          (r = t('./GameMgr')),
          (c = (l = cc._decorator).ccclass),
          (d = l.property),
          (h = n.default),
          (_ = function () {
            var t;
            return (
              ((t = (null !== h && h.apply(this, arguments)) || this).btnGet =
                null),
              (t.btnClose = null),
              (t.goldLab = null),
              t
            );
          }),
          __extends(_, h),
          (_.prototype.onEnable = function () {
            (this.goldLab.string = p.GameSetting.shop_gold + '\u91d1\u5e01'),
              AdManager.getInstance().showInsert();
          }),
          (_.prototype.initEvent = function () {
            this.on(this.btnGet, this.onBtnGetClick, this),
              this.on(this.btnClose, this.onBtnCloseClick, this);
          }),
          (_.prototype.onBtnGetClick = function () {
            var t;
            return __awaiter(this, void 0, void 0, function () {
              return __generator(this, function (e) {
                switch (e.label) {
                  case 0:
                    return [4, r.GameMgr.showVideoAd()];
                  case 1:
                    return (
                      1 == e.sent() &&
                        (u.UserData.addGold(p.GameSetting.shop_gold),
                        null != (t = a.App.track) && t.trackEvent('shop_gold')),
                      [2]
                    );
                }
              });
            });
          }),
          (_.prototype.onBtnCloseClick = function () {
            a.App.gui.closeUI(i.UIEnum.ShopView);
          }),
          __decorate([d(cc.Node)], _.prototype, 'btnGet', void 0),
          __decorate([d(cc.Node)], _.prototype, 'btnClose', void 0),
          __decorate([d(cc.Label)], _.prototype, 'goldLab', void 0),
          (s = __decorate([c], _)),
          (o.default = s),
          cc._RF.pop();
      },
      {
        './App': 'App',
        './BasePanel': 'BasePanel',
        './GameMgr': 'GameMgr',
        './GameSetting': 'GameSetting',
        './UIHelper': 'UIHelper',
        './UserData': 'UserData',
      },
    ],
    SignInItem: [
      function (t, e, o) {
        'use strict';
        var i, n, a, r, s, c, l, p;
        cc._RF.push(e, 'cf0124ZiChFVJDDx/Ht0IcT', 'SignInItem'),
          (c = t('./App')),
          (r = t('./GameEnums')),
          (n = (a = cc._decorator).ccclass),
          (s = a.property),
          (l = cc.Component),
          (p = function () {
            var t;
            return (
              ((t = (null !== l && l.apply(this, arguments)) || this).iconSp =
                null),
              (t.lockNode = null),
              (t.infoLabel = null),
              t
            );
          }),
          __extends(p, l),
          (p.prototype.setData = function (t) {
            switch (t.type) {
              case 1:
                c.App.res.setSprite(
                  this.iconSp,
                  'res/ui/panel/dl_icon',
                  r.BundleType.Game,
                ),
                  (this.infoLabel.string =
                    '\u6253\u4e71\u9053\u5177 +' + t.value);
                break;
              case 2:
                c.App.res.setSprite(
                  this.iconSp,
                  'res/ui/panel/ts_icon',
                  r.BundleType.Game,
                ),
                  (this.infoLabel.string =
                    '\u63d0\u793a\u9053\u5177 +' + t.value);
                break;
              case 3:
                c.App.res.setSprite(
                  this.iconSp,
                  'res/ui/panel/sj_icon',
                  r.BundleType.Game,
                ),
                  (this.infoLabel.string =
                    '\u52a0\u65f6\u9053\u5177 +' + t.value);
                break;
              case 4:
                c.App.res.setSprite(
                  this.iconSp,
                  'res/ui/panel/tl_icon',
                  r.BundleType.Game,
                ),
                  (this.infoLabel.string = '\u4f53\u529b +' + t.value);
                break;
              case 5:
                this.infoLabel.string = '';
                break;
              case 6:
                c.App.res.setSprite(
                  this.iconSp,
                  'res/ui/panel/lx_icon',
                  r.BundleType.Game,
                ),
                  (this.infoLabel.string =
                    '\u8fde\u6d88\u9053\u5177 +' + t.value);
            }
          }),
          (p.prototype.setStatus = function (t) {
            this.lockNode.active = 1 == t;
          }),
          __decorate([s(cc.Sprite)], p.prototype, 'iconSp', void 0),
          __decorate([s(cc.Node)], p.prototype, 'lockNode', void 0),
          __decorate([s(cc.Label)], p.prototype, 'infoLabel', void 0),
          (i = __decorate([n], p)),
          (o.default = i),
          cc._RF.pop();
      },
      { './App': 'App', './GameEnums': 'GameEnums' },
    ],
    SignInView: [
      function (t, e, o) {
        'use strict';
        var i, n, a, r, s, c, l, p, u, d, h, _, f, m, y, g;
        cc._RF.push(e, '4de83Y5JApDuYyAijysG+0w', 'SignInView'),
          (a = t('./App')),
          (r = t('./DateUtil')),
          (f = t('./BasePanel')),
          (p = t('./GameSetting')),
          (l = t('./UserData')),
          (h = t('./TrackEnums')),
          (c = t('./UIHelper')),
          (u = t('./EffectMgr')),
          (s = t('./GameMgr')),
          (i = t('./SignInItem')),
          (d = (m = cc._decorator).ccclass),
          (_ = m.property),
          (y = f.default),
          (g = function () {
            var t;
            return (
              ((t = (null !== y && y.apply(this, arguments)) || this).panel =
                null),
              (t.btnOne = null),
              (t.btnTwo = null),
              (t.btnClose = null),
              (t.itemParent = null),
              (t._itemList = []),
              (t.currVo = null),
              t
            );
          }),
          __extends(g, y),
          (g.prototype.initUI = function () {
            for (var t = 0; t < this.itemParent.childrenCount; t++) {
              var e;
              (e = this.itemParent.children[t].getComponent(i.default)),
                this._itemList.push(e),
                e.setData(p.GameSetting.signIn_conf[t]);
            }
          }),
          (g.prototype.onEnable = function () {
            this.updateView();
          }),
          (g.prototype.onDisable = function () {}),
          (g.prototype.updateView = function () {
            var t, e;
            (e = r.default.compare(l.UserData.sign_date, Date.now())),
              (this.btnOne.active = !e),
              (this.btnTwo.active = !e),
              (t = l.UserData.sign_num % 7),
              e || (this.currVo = p.GameSetting.signIn_conf[t]),
              0 == t && e && (t = 7);
            for (var o = 0; o < 7; o++)
              this._itemList[o].setStatus(o < t ? 1 : 0);
          }),
          (g.prototype.playIn = function () {
            return __awaiter(this, void 0, Promise, function () {
              return __generator(this, function (t) {
                switch (t.label) {
                  case 0:
                    return [4, u.EffectMgr.viewOpenAnim(this.panel, 1)];
                  case 1:
                    return t.sent(), y.prototype.playIn.call(this), [2];
                }
              });
            });
          }),
          (g.prototype.initEvent = function () {
            this.on(this.btnOne, this.onBtnOneClick, this),
              this.on(this.btnTwo, this.onBtnTwoClick, this),
              this.on(this.btnClose, this.onBtnCloseClick, this);
          }),
          (g.prototype.onBtnOneClick = function () {
            return __awaiter(this, void 0, void 0, function () {
              return __generator(this, function () {
                return (
                  l.UserData.signIn(this.currVo, 1), this.updateView(), [2]
                );
              });
            });
          }),
          (g.prototype.onBtnTwoClick = function () {
            var t;
            return __awaiter(this, void 0, void 0, function () {
              return __generator(this, function (e) {
                switch (e.label) {
                  case 0:
                    return [4, s.GameMgr.showVideoAd()];
                  case 1:
                    return (
                      1 == e.sent() &&
                        (null != (t = a.App.track) &&
                          t.trackEvent(h.TrackEnums.daily_sign),
                        l.UserData.signIn(this.currVo, 2),
                        this.updateView()),
                      [2]
                    );
                }
              });
            });
          }),
          (g.prototype.onBtnCloseClick = function () {
            a.App.gui.closeUI(c.UIEnum.SignInView);
          }),
          __decorate([_(cc.Node)], g.prototype, 'panel', void 0),
          __decorate([_(cc.Node)], g.prototype, 'btnOne', void 0),
          __decorate([_(cc.Node)], g.prototype, 'btnTwo', void 0),
          __decorate([_(cc.Node)], g.prototype, 'btnClose', void 0),
          __decorate([_(cc.Node)], g.prototype, 'itemParent', void 0),
          (n = __decorate([d], g)),
          (o.default = n),
          cc._RF.pop();
      },
      {
        './App': 'App',
        './BasePanel': 'BasePanel',
        './DateUtil': 'DateUtil',
        './EffectMgr': 'EffectMgr',
        './GameMgr': 'GameMgr',
        './GameSetting': 'GameSetting',
        './SignInItem': 'SignInItem',
        './TrackEnums': 'TrackEnums',
        './UIHelper': 'UIHelper',
        './UserData': 'UserData',
      },
    ],
    SkinConf: [
      function (t, e, o) {
        'use strict';
        var i, n;
        cc._RF.push(e, 'f55099y8MBN4qgAsvJ1mvGj', 'SkinConf'),
          ((n = function () {
            (this._skinMap = new Map()),
              (this._bottleList = []),
              (this._themeList = []),
              (this._colorList = []);
          }).prototype.parse = function (t, e) {
            for (var o in e) {
              var i;
              (i = e[o]),
                this._skinMap.set(i.type + '_' + i.id, i),
                1 == i.type
                  ? this._bottleList.push(i)
                  : 2 == i.type
                    ? this._themeList.push(i)
                    : 3 == i.type && this._colorList.push(i);
            }
            console.log(
              '[ SkinConf ] >',
              this._skinMap,
              this._bottleList,
              this._themeList,
              this._colorList,
            );
          }),
          (n.prototype.getBottleList = function () {
            return this._bottleList;
          }),
          (n.prototype.getThemeList = function () {
            return this._themeList;
          }),
          (n.prototype.getColorList = function () {
            return this._colorList;
          }),
          (n.prototype.getSkinVo = function (t, e) {
            return this._skinMap.get(t + '_' + e);
          }),
          (i = n),
          (o.default = i),
          cc._RF.pop();
      },
      {},
    ],
    SkinData: [
      function (t, e, o) {
        'use strict';
        var i, n, a, r, s, c, l;
        cc._RF.push(e, 'ccfb8oedURHgag7/odiD4mR', 'SkinData'),
          (o.SkinData = void 0),
          (c = t('./App')),
          (r = t('./ArrayUtil')),
          (n = t('./EventTypes')),
          (s = t('./ConfData')),
          (a = t('./LocalData')),
          (l = function () {
            (this._bot_skin = 0),
              (this._theme_skin = 0),
              (this._color_skin = 0),
              (this._bot_list = null),
              (this._theme_list = null),
              (this._color_list = null);
          }),
          Object.defineProperty(l.prototype, 'bot_skin', {
            get: function () {
              return this._bot_skin;
            },
            enumerable: !1,
            configurable: !0,
          }),
          Object.defineProperty(l.prototype, 'theme_skin', {
            get: function () {
              return this._theme_skin;
            },
            enumerable: !1,
            configurable: !0,
          }),
          Object.defineProperty(l.prototype, 'color_skin', {
            get: function () {
              return this._color_skin;
            },
            enumerable: !1,
            configurable: !0,
          }),
          Object.defineProperty(l.prototype, 'bot_list', {
            get: function () {
              return this._bot_list;
            },
            enumerable: !1,
            configurable: !0,
          }),
          Object.defineProperty(l.prototype, 'theme_list', {
            get: function () {
              return this._theme_list;
            },
            enumerable: !1,
            configurable: !0,
          }),
          Object.defineProperty(l.prototype, 'color_list', {
            get: function () {
              return this._color_list;
            },
            enumerable: !1,
            configurable: !0,
          }),
          (l.prototype.initData = function () {
            (this._bot_skin = a.LocalData.getValue('bot_skin')),
              (this._theme_skin = a.LocalData.getValue('theme_skin')),
              (this._color_skin = a.LocalData.getValue('color_skin')),
              (this._bot_list = a.LocalData.getValue('bot_list')),
              (this._theme_list = a.LocalData.getValue('theme_list')),
              (this._color_list = a.LocalData.getValue('color_list')),
              4 != this._bot_skin &&
                ((this._bot_skin = 4),
                (this._bot_list = [4]),
                a.LocalData.setValue('bot_skin', this._bot_skin),
                a.LocalData.setValue('bot_list', this._bot_list)),
              0 == this._theme_skin &&
                ((this._theme_skin = 1),
                (this._theme_list = [1]),
                a.LocalData.setValue('theme_skin', this._theme_skin),
                a.LocalData.setValue('theme_list', this._theme_list)),
              0 == this._color_skin &&
                ((this._color_skin = 1),
                (this._color_list = [1]),
                a.LocalData.setValue('color_skin', this._color_skin),
                a.LocalData.setValue('color_list', this._color_list));
          }),
          (l.prototype.unlockSkin = function (t, e) {
            var o;
            1 == t
              ? -1 == this._bot_list.indexOf(e) &&
                (this._bot_list.push(e),
                a.LocalData.setValue('bot_skin', e),
                a.LocalData.setValue('bot_list', this._bot_list))
              : 2 == t
                ? -1 == this._theme_list.indexOf(e) &&
                  (this._theme_list.push(e),
                  a.LocalData.setValue('theme_skin', e),
                  a.LocalData.setValue('theme_list', this._theme_list),
                  null != (o = c.App.track)) &&
                  o.trackEvent('skin_unlock_bg' + e)
                : 3 == t &&
                  -1 == this._color_list.indexOf(e) &&
                  (this._color_list.push(e),
                  a.LocalData.setValue('color_skin', e),
                  a.LocalData.setValue('color_list', this._color_list)),
              this.usingSkin(t, e),
              c.App.event.emit(n.default.On_Change_Skin, { type: t, id: e });
          }),
          (l.prototype.unlockRandomTheme = function () {
            for (
              var t = s.ConfData.skinConf.getThemeList(), e = [], o = 0;
              o < t.length;
              o++
            )
              this.theme_list.includes(t[o].id) || e.push(t[o].id);
            return (
              0 < e.length && r.default.shuffle(e),
              this.unlockSkin(2, e[0]),
              0 < e.length
            );
          }),
          (l.prototype.usingSkin = function (t, e) {
            1 == t
              ? this._bot_list.includes(e) &&
                ((this._bot_skin = e),
                a.LocalData.setValue('bot_skin', this._bot_skin))
              : 2 == t
                ? this._theme_list.includes(e) &&
                  ((this._theme_skin = e),
                  a.LocalData.setValue('theme_skin', this._theme_skin))
                : 3 == t &&
                  this._color_list.includes(e) &&
                  ((this._color_skin = e),
                  a.LocalData.setValue('color_skin', this._color_skin)),
              c.App.event.emit(n.default.On_Change_Skin, { type: t, id: e });
          }),
          (l.prototype.isAllUnlock = function () {
            for (
              var t = s.ConfData.skinConf.getBottleList(), e = 0;
              e < t.length;
              e++
            )
              if (-1 == this._bot_list.indexOf(t[e].id)) return !1;
            for (
              t = s.ConfData.skinConf.getThemeList(), e = 0;
              e < t.length;
              e++
            )
              if (-1 == this._theme_list.indexOf(t[e].id)) return !1;
            for (
              t = s.ConfData.skinConf.getColorList(), e = 0;
              e < t.length;
              e++
            )
              if (-1 == this._color_list.indexOf(t[e].id)) return !1;
            return !0;
          }),
          (l.prototype.unlockAll = function () {
            s.ConfData.skinConf.getBottleList();
            for (
              var t = s.ConfData.skinConf.getThemeList(), e = 0;
              e < t.length;
              e++
            )
              this.unlockSkin(2, t[e].id);
          }),
          (i = l),
          (o.SkinData = new i()),
          cc._RF.pop();
      },
      {
        './App': 'App',
        './ArrayUtil': 'ArrayUtil',
        './ConfData': 'ConfData',
        './EventTypes': 'EventTypes',
        './LocalData': 'LocalData',
      },
    ],
    SkinItem2: [
      function (t, e, o) {
        'use strict';
        var i, n, a, r, s, c, l;
        cc._RF.push(e, '58941vw/NtBRqkBUWAXPz3v', 'SkinItem2'),
          (a = t('./BaseUI')),
          (n = (r = cc._decorator).ccclass),
          (s = r.property),
          (c = a.default),
          (l = function () {
            var t;
            return (
              ((t = (null !== c && c.apply(this, arguments)) || this).iconSp =
                null),
              (t.nameLab = null),
              (t.numLab = null),
              (t.itemPre = null),
              (t.itemLayout = null),
              (t.sk_id = -1),
              (t._items = []),
              t
            );
          }),
          __extends(l, c),
          __decorate([s(cc.Sprite)], l.prototype, 'iconSp', void 0),
          __decorate([s(cc.Label)], l.prototype, 'nameLab', void 0),
          __decorate([s(cc.Label)], l.prototype, 'numLab', void 0),
          __decorate([s(cc.Node)], l.prototype, 'itemPre', void 0),
          __decorate([s(cc.Layout)], l.prototype, 'itemLayout', void 0),
          (i = __decorate([n], l)),
          (o.default = i),
          cc._RF.pop();
      },
      { './BaseUI': 'BaseUI' },
    ],
    SkinItem: [
      function (t, e, o) {
        'use strict';
        var i, n, a, r, s, c, l, p, u, d, h;
        cc._RF.push(e, '5c6c6ZzqSdKX4vt4Wln0Bv5', 'SkinItem'),
          (l = t('./App')),
          (r = t('./BaseUI')),
          (s = t('./SkinData')),
          (c = t('./GameEnums')),
          (i = t('./EventTypes')),
          (u = (p = cc._decorator).ccclass),
          (a = p.property),
          (d = r.default),
          (h = function () {
            var t;
            return (
              ((t = (null !== d && d.apply(this, arguments)) || this).iconSp =
                null),
              (t.lock = null),
              (t.selectNode = null),
              (t._data = null),
              t
            );
          }),
          __extends(h, d),
          (h.prototype.setData = function (t) {
            (this.name = 'item_' + t.id), (this._data = t);
          }),
          (h.prototype.getData = function () {
            return this._data;
          }),
          (h.prototype.onEnable = function () {
            this.on(this.node, this.onClick, this), this.setSprite();
          }),
          (h.prototype.onDisable = function () {
            this.off(this.node);
          }),
          (h.prototype.updateView = function () {
            var t;
            switch (((t = null), this._data.type)) {
              case 1:
                t = s.SkinData.bot_list;
                break;
              case 2:
                t = s.SkinData.theme_list;
                break;
              case 3:
                t = s.SkinData.color_list;
            }
            this.lock.active = !t.includes(this._data.id);
          }),
          (h.prototype.setSprite = function () {
            l.App.res.setSprite(
              this.iconSp,
              'res/skin/' + this._data.icon,
              c.BundleType.Game,
            );
          }),
          (h.prototype.onClick = function () {
            l.App.event.emit(i.default.On_Item_Selected, this);
          }),
          (h.prototype.onSelected = function (t) {
            this.selectNode.active = t;
          }),
          __decorate([a(cc.Sprite)], h.prototype, 'iconSp', void 0),
          __decorate([a(cc.Node)], h.prototype, 'lock', void 0),
          __decorate([a(cc.Node)], h.prototype, 'selectNode', void 0),
          (n = __decorate([u], h)),
          (o.default = n),
          cc._RF.pop();
      },
      {
        './App': 'App',
        './BaseUI': 'BaseUI',
        './EventTypes': 'EventTypes',
        './GameEnums': 'GameEnums',
        './SkinData': 'SkinData',
      },
    ],
    SkinPage: [
      function (t, e, o) {
        'use strict';
        var i, n, a, r, s, c, l, p, u, d, h, _, f, m, y;
        cc._RF.push(e, '01155WGFUFDabE7VCVwT3dm', 'SkinPage'),
          (h = t('./App')),
          (l = t('./BaseUI')),
          (_ = t('./SkinData')),
          (n = t('./UserData')),
          (f = t('./EventTypes')),
          (r = t('./UIHelper')),
          (a = t('./EffectMgr')),
          (i = t('./GameMgr')),
          (u = t('./SkinItem')),
          (p = (d = cc._decorator).ccclass),
          (c = d.property),
          (m = l.default),
          (y = function () {
            var t;
            return (
              ((t = (null !== m && m.apply(this, arguments)) || this).list =
                null),
              (t.itemPre = null),
              (t.btnGet = null),
              (t.btnUse = null),
              (t.btnGold = null),
              (t.using = null),
              (t.lockLab = null),
              (t.nameLab = null),
              (t.goldLab = null),
              (t._data = null),
              (t.items = []),
              (t.curr_item = null),
              t
            );
          }),
          __extends(y, m),
          (y.prototype.setData = function (t) {
            this._data = t;
          }),
          (y.prototype.onEnable = function () {
            0 == this.items.length && this.initItems(),
              this.updateItems(),
              h.App.event.on(f.default.On_Item_Selected, this.onSelected, this),
              h.App.event.on(f.default.On_Change_Skin, this.updateItems, this),
              this.on(this.btnGet, this.onBtnGetClick, this),
              this.on(this.btnUse, this.onBtnUseClick, this),
              this.on(this.btnGold, this.onBtnGoldClick, this),
              this.list.scrollToTop(0);
          }),
          (y.prototype.onDisable = function () {
            var t;
            h.App.event.targetOff(this),
              null != (t = this.curr_item) && t.onSelected(!1),
              (this.curr_item = null),
              this.clear();
          }),
          (y.prototype.updateItems = function () {
            for (var t = 0; t < this.items.length; t++) {
              var e, o;
              (e = this.items[t]).updateView(),
                !this.curr_item &&
                  ((1 == (o = e.getData()).type &&
                    o.id == _.SkinData.bot_skin) ||
                    (2 == o.type && o.id == _.SkinData.theme_skin) ||
                    (3 == o.type && o.id == _.SkinData.color_skin)) &&
                  this.onSelected(e);
            }
          }),
          (y.prototype.initItems = function () {
            for (var t, e = 0; e < this._data.length; e++)
              0 == e
                ? this.onItemRender(this.itemPre, e)
                : ((t = cc.instantiate(this.itemPre)),
                  this.onItemRender(t, e),
                  (t.parent = this.list.content));
          }),
          (y.prototype.onItemRender = function (t, e) {
            var o, i;
            (i = this._data[e]),
              (o = t.getComponent(u.default)).setData(i),
              this.items.push(o),
              o.onSelected(!1),
              ((1 == i.type && i.id == _.SkinData.bot_skin) ||
                (2 == i.type && i.id == _.SkinData.theme_skin) ||
                (3 == i.type && i.id == _.SkinData.color_skin)) &&
                this.onSelected(o);
          }),
          (y.prototype.onBtnGoldClick = function () {
            var t;
            (t = this.curr_item.getData()),
              n.UserData.useGold(t.gold_num)
                ? (a.EffectMgr.showTips('\u8d2d\u4e70\u6210\u529f'),
                  _.SkinData.unlockSkin(t.type, t.id),
                  this.updateItems(),
                  this.onSelected(this.curr_item))
                : (a.EffectMgr.showTips('\u91d1\u5e01\u4e0d\u8db3'),
                  h.App.gui.openUI(r.UIEnum.ShopView));
          }),
          (y.prototype.onBtnGetClick = function () {
            return __awaiter(this, void 0, void 0, function () {
              var t;
              return __generator(this, function (e) {
                switch (e.label) {
                  case 0:
                    return [4, i.GameMgr.showVideoAd()];
                  case 1:
                    return (
                      1 == e.sent() &&
                        ((t = this.curr_item.getData()),
                        n.UserData.addSkinVideoNum(t.type, t.id),
                        n.UserData.getSkinVideoNum(t.type, t.id) >=
                          t.video_num &&
                          (_.SkinData.unlockSkin(t.type, t.id),
                          this.updateItems()),
                        this.onSelected(this.curr_item)),
                      [2]
                    );
                }
              });
            });
          }),
          (y.prototype.onBtnUseClick = function () {
            var t;
            (t = this.curr_item.getData()),
              _.SkinData.usingSkin(t.type, t.id),
              this.updateItems(),
              this.onSelected(this.curr_item);
          }),
          (y.prototype.onSelected = function (t) {
            var e, o, i, a;
            switch (
              (this.curr_item && this.curr_item.onSelected(!1),
              (this.curr_item = t),
              this.curr_item.onSelected(!0),
              (i = t.getData()),
              (this.nameLab.string = i.name),
              (this.goldLab.string = i.gold_num.toString()),
              (e = n.UserData.getSkinVideoNum(i.type, i.id)),
              (this.lockLab.string = '(' + e + '/' + i.video_num + ')'),
              (o = 0),
              (a = null),
              i.type)
            ) {
              case 1:
                (o = _.SkinData.bot_skin), (a = _.SkinData.bot_list);
                break;
              case 2:
                (o = _.SkinData.theme_skin), (a = _.SkinData.theme_list);
                break;
              case 3:
                (o = _.SkinData.color_skin), (a = _.SkinData.color_list);
            }
            (this.btnUse.active = i.id != o && -1 != a.indexOf(i.id)),
              (this.btnGet.active =
                i.id != o && -1 == a.indexOf(i.id) && 0 < i.video_num),
              (this.btnGold.active =
                i.id != o &&
                -1 == a.indexOf(i.id) &&
                0 == i.video_num &&
                0 < i.gold_num),
              (this.using.active = i.id == o);
          }),
          __decorate([c(cc.ScrollView)], y.prototype, 'list', void 0),
          __decorate([c(cc.Node)], y.prototype, 'itemPre', void 0),
          __decorate([c(cc.Node)], y.prototype, 'btnGet', void 0),
          __decorate([c(cc.Node)], y.prototype, 'btnUse', void 0),
          __decorate([c(cc.Node)], y.prototype, 'btnGold', void 0),
          __decorate([c(cc.Node)], y.prototype, 'using', void 0),
          __decorate([c(cc.Label)], y.prototype, 'lockLab', void 0),
          __decorate([c(cc.Label)], y.prototype, 'nameLab', void 0),
          __decorate([c(cc.Label)], y.prototype, 'goldLab', void 0),
          (s = __decorate([p], y)),
          (o.default = s),
          cc._RF.pop();
      },
      {
        './App': 'App',
        './BaseUI': 'BaseUI',
        './EffectMgr': 'EffectMgr',
        './EventTypes': 'EventTypes',
        './GameMgr': 'GameMgr',
        './SkinData': 'SkinData',
        './SkinItem': 'SkinItem',
        './UIHelper': 'UIHelper',
        './UserData': 'UserData',
      },
    ],
    SkinView: [
      function (t, e, o) {
        'use strict';
        cc._RF.push(e, 'aef78Ua0UBN9bMEUhRiGg+r', 'SkinView');
        var i,
          n,
          a,
          r,
          s,
          c,
          l,
          p,
          u,
          d,
          h,
          _,
          f,
          m = t('../../../RxManager/AdManager').default;
        (r = t('./App')),
          (u = t('./BasePanel')),
          (n = t('./ConfData')),
          (h = t('./SkinData')),
          (l = t('./UIHelper')),
          (p = t('./EffectMgr')),
          (a = t('./SkinPage')),
          (d = (s = cc._decorator).ccclass),
          (c = s.property),
          (_ = u.default),
          (f = function () {
            var t;
            return (
              ((t = (null !== _ && _.apply(this, arguments)) || this).panel =
                null),
              (t.skinPages = []),
              (t.btnBot = null),
              (t.btnTheme = null),
              (t.btnClose = null),
              (t.btnColor = null),
              (t.btnAll = null),
              t
            );
          }),
          __extends(f, _),
          (f.prototype.onLoad = function () {
            this.skinPages[0].setData(n.ConfData.skinConf.getBottleList()),
              this.skinPages[1].setData(n.ConfData.skinConf.getThemeList()),
              this.skinPages[2].setData(n.ConfData.skinConf.getColorList()),
              m.getInstance().showInsert();
          }),
          (f.prototype.playIn = function () {
            return __awaiter(this, void 0, Promise, function () {
              return __generator(this, function (t) {
                switch (t.label) {
                  case 0:
                    return [4, p.EffectMgr.viewOpenAnim(this.panel, 1)];
                  case 1:
                    return t.sent(), _.prototype.playIn.call(this), [2];
                }
              });
            });
          }),
          (f.prototype.initEvent = function () {
            this.on(this.btnBot, this.onBtnBotClick, this),
              this.on(this.btnTheme, this.onBtnThemeClick, this),
              this.on(this.btnColor, this.onBtnColorClick, this),
              this.on(this.btnClose, this.onBtnCloseClick, this),
              this.on(this.btnAll, this.onBtnAllClick, this);
          }),
          (f.prototype.onEnable = function () {
            this.updateView();
          }),
          (f.prototype.updateView = function () {
            (this.btnAll.active = 101 == window.test),
              101 == window.opacity
                ? (this.btnAll.opacity = 0)
                : (this.btnAll.opacity = 255),
              this.setPage(1);
          }),
          (f.prototype.setPage = function (t) {
            for (var e = 0; e < this.skinPages.length; e++)
              this.skinPages[e].node.active = e === t;
          }),
          (f.prototype.onBtnCloseClick = function () {
            r.App.gui.closeUI(l.UIEnum.SkinView);
          }),
          (f.prototype.onBtnBotClick = function () {
            this.setPage(0);
          }),
          (f.prototype.onBtnThemeClick = function () {
            this.setPage(1);
          }),
          (f.prototype.onBtnColorClick = function () {
            this.setPage(2);
          }),
          (f.prototype.onBtnAllClick = function () {
            h.SkinData.unlockAll();
          }),
          __decorate([c(cc.Node)], f.prototype, 'panel', void 0),
          __decorate([c([a.default])], f.prototype, 'skinPages', void 0),
          __decorate([c(cc.Node)], f.prototype, 'btnBot', void 0),
          __decorate([c(cc.Node)], f.prototype, 'btnTheme', void 0),
          __decorate([c(cc.Node)], f.prototype, 'btnClose', void 0),
          __decorate([c(cc.Node)], f.prototype, 'btnColor', void 0),
          __decorate([c(cc.Node)], f.prototype, 'btnAll', void 0),
          (i = __decorate([d], f)),
          (o.default = i),
          cc._RF.pop();
      },
      {
        '../../../RxManager/AdManager': void 0,
        './App': 'App',
        './BasePanel': 'BasePanel',
        './ConfData': 'ConfData',
        './EffectMgr': 'EffectMgr',
        './SkinData': 'SkinData',
        './SkinPage': 'SkinPage',
        './UIHelper': 'UIHelper',
      },
    ],
    SoundMgr: [
      function (t, e, o) {
        'use strict';
        cc._RF.push(e, '86a9bOzdJRHTKo9SI70DAm6', 'SoundMgr');
        var i,
          n,
          a,
          r = t('../../../RxManager/MyLog').default;
        (o.SoundMgr = void 0),
          (i = t('./App')),
          ((a = function () {
            (this._musicOn = !0),
              (this._soundOn = !0),
              (this.bgm = { path: '', bundle: '' }),
              (this.musicMap = new Map()),
              (this.soundMap = new Map()),
              (this.effectMap = new Map()),
              a._instance
                ? console.error('SoundMgr \u5df2\u5b9e\u4f8b\u5316')
                : (a._instance = this);
          }).prototype.updateSetting = function (t, e) {
            this._musicOn != t && ((this._musicOn = t), this._updateVoice()),
              (this._soundOn = e);
          }),
          (a.prototype._updateVoice = function () {
            this._musicOn
              ? this.bgm.path && this.playMusic(this.bgm.path, this.bgm.bundle)
              : this.stopMusic();
          }),
          (a.prototype.getClip = function (t, e) {
            return (
              void 0 === e && (e = ''),
              __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (o) {
                  switch (o.label) {
                    case 0:
                      return [4, i.App.res.getAudio(t, e)];
                    case 1:
                      return [2, o.sent()];
                  }
                });
              })
            );
          }),
          (a.prototype.playMusic = function (t, e, o) {
            return (
              r.d('===SoundMgr====playMusic=====', t),
              void 0 === t && (t = ''),
              void 0 === e && (e = ''),
              void 0 === o && (o = !0),
              __awaiter(this, void 0, void 0, function () {
                var n, a;
                return __generator(this, function (r) {
                  switch (r.label) {
                    case 0:
                      return t &&
                        (cc.audioEngine.isMusicPlaying && this.stopMusic(),
                        (this.bgm.path = t),
                        (this.bgm.bundle = e),
                        this._musicOn)
                        ? ((n = null),
                          t.startsWith('https://')
                            ? [4, i.App.res.loadRemote(t)]
                            : [3, 2])
                        : [2];
                    case 1:
                      return (n = r.sent()), [3, 4];
                    case 2:
                      return [4, this.getClip(t, e)];
                    case 3:
                      (n = r.sent()), (r.label = 4);
                    case 4:
                      return (
                        n &&
                          this._musicOn &&
                          ((a = cc.audioEngine.playMusic(n, o)),
                          cc.audioEngine.setVolume(a, 0.5),
                          this.musicMap.set(t + '_' + e, { id: a, audio: n })),
                        [2]
                      );
                  }
                });
              })
            );
          }),
          (a.prototype.resumeMusic = function () {
            var t, e;
            this.playMusic(
              null == (t = this.bgm) ? void 0 : t.path,
              null == (e = this.bgm) ? void 0 : e.bundle,
            );
          }),
          (a.prototype.stopMusic = function () {
            var t, e, o, n;
            (o =
              null != (n = this.bgm) && n.path.startsWith('https://')
                ? null == (e = this.bgm)
                  ? void 0
                  : e.path
                : this.bgm.path + '_' + this.bgm.bundle),
              (t = this.musicMap.get(o)) &&
                (this.musicMap.delete(o),
                i.App.res.idleAsset(t.audio),
                (t.audio = null),
                (t.id = 0)),
              cc.audioEngine.stopMusic();
          }),
          (a.prototype.playEffect = function (t, e, o) {
            return (
              void 0 === e && (e = ''),
              void 0 === o && (o = 1),
              __awaiter(this, void 0, void 0, function () {
                var n, a, r, s, c, l;
                return (
                  (n = this),
                  __generator(this, function (p) {
                    switch (p.label) {
                      case 0:
                        return this._soundOn && t
                          ? ((s = ''),
                            (c = null),
                            t.startsWith('https://')
                              ? ((s = t), [4, i.App.res.loadRemote(t)])
                              : [3, 2])
                          : [2];
                      case 1:
                        return (c = p.sent()), [3, 4];
                      case 2:
                        return (s = t + '_' + e), [4, this.getClip(t, e)];
                      case 3:
                        (c = p.sent()), (p.label = 4);
                      case 4:
                        (r = function (e) {
                          return new Promise(function (o) {
                            var i;
                            e && n._soundOn
                              ? ((i = cc.audioEngine.playEffect(e, !1)),
                                n.effectMap.set(t, i),
                                n.soundMap.set(s, { audio: e }),
                                cc.audioEngine.setFinishCallback(
                                  i,
                                  function () {
                                    o();
                                  },
                                ))
                              : o();
                          });
                        }),
                          (l = 0),
                          (p.label = 5);
                      case 5:
                        return l < o ? [4, r(c)] : [3, 8];
                      case 6:
                        p.sent(), (p.label = 7);
                      case 7:
                        return l++, [3, 5];
                      case 8:
                        return (
                          (a = this.soundMap.get(s)) &&
                            (this.soundMap.delete(s),
                            i.App.res.idleAsset(a.audio),
                            (a.audio = null)),
                          [2]
                        );
                    }
                  })
                );
              })
            );
          }),
          (a.prototype.stopEffect = function (t) {
            var e;
            0 < (e = this.effectMap.get(t)) && cc.audioEngine.stopEffect(e);
          }),
          (a.prototype.stopAllEffects = function () {
            this.soundMap.forEach(function (t) {
              t.audio && (i.App.res.idleAsset(t.audio), (t.audio = null));
            }),
              this.soundMap.clear(),
              cc.audioEngine.stopAllEffects();
          }),
          (n = a),
          (o.SoundMgr = n),
          cc._RF.pop();
      },
      { '../../../RxManager/MyLog': void 0, './App': 'App' },
    ],
    SpineEffect: [
      function (t, e, o) {
        'use strict';
        var i, n, a, r, s, c, l;
        cc._RF.push(e, 'e945b8hbTlCyY9NQqH3ad/x', 'SpineEffect'),
          (i = t('./App')),
          (s = (n = cc._decorator).ccclass),
          (a = n.property),
          (c = cc.Component),
          (l = function () {
            var t;
            return (
              ((t = (null !== c && c.apply(this, arguments)) || this).body =
                null),
              (t.isAuto = !1),
              (t.isRemove = !1),
              (t.animName = ''),
              t
            );
          }),
          __extends(l, c),
          (l.prototype.onEnable = function () {
            var t;
            (t = this),
              this.isAuto &&
                this.playEff({
                  act: this.animName,
                  isLoop: !this.isRemove,
                  complete: function () {
                    t.isRemove && i.App.res.putNodeToPool(t.node);
                  },
                });
          }),
          (l.prototype.playEff = function (t) {
            var e, o, i, n, a, r, s, c, l, p;
            (e = this),
              (i = void 0 === (c = (p = t || {}).act) ? '' : c),
              (n = void 0 === (a = p.isLoop) || a),
              (s = p.complete),
              (o = void 0 === s ? null : s),
              (l = void 0 === (r = p.timeScale) ? 1 : r),
              this.body.setCompleteListener(null),
              n ||
                this.body.setCompleteListener(function () {
                  e.body.setCompleteListener(null), o && o();
                }),
              (this.body.timeScale = l = i ? l : 0),
              this.body.setAnimation(0, i, n);
          }),
          __decorate([a(sp.Skeleton)], l.prototype, 'body', void 0),
          __decorate([a()], l.prototype, 'isAuto', void 0),
          __decorate(
            [
              a({
                visible: function () {
                  return this.isAuto;
                },
              }),
            ],
            l.prototype,
            'isRemove',
            void 0,
          ),
          __decorate(
            [
              a({
                visible: function () {
                  return this.isAuto;
                },
              }),
            ],
            l.prototype,
            'animName',
            void 0,
          ),
          (r = __decorate([s], l)),
          (o.default = r),
          cc._RF.pop();
      },
      { './App': 'App' },
    ],
    StorageMgr: [
      function (t, e, o) {
        'use strict';
        cc._RF.push(e, 'bfd65K9oGtHZYHquqg7RqLm', 'StorageMgr');
        var i,
          n,
          a = t('../../../RxManager/MyLog').default;
        (o.StorageMgr = void 0),
          ((n = function () {
            (this.jmKey = 'g6do7i8f8akoe7cv'),
              n._instance
                ? console.error('StorageMgr \u5df2\u5b9e\u4f8b\u5316')
                : (n._instance = this);
          }).prototype.read = function (t, e) {
            var o;
            if ((void 0 === e && (e = !1), null != t))
              return (
                (o = cc.sys.localStorage.getItem(t))
                  ? ((o = e
                      ? JSON.parse(this.XOR(o, this.jmKey))
                      : JSON.parse(o)),
                    console.log('\u8bfb\u53d6\u6570\u636e\uff1a', t, o))
                  : (o = (o = cc.sys.localStorage.getItem(t)) && JSON.parse(o)),
                o
              );
          }),
          (n.prototype.save = function (t, e, o) {
            void 0 === o && (o = !1);
            try {
              var i;
              null != t &&
                ((i = o
                  ? this.XOR(JSON.stringify(e), this.jmKey)
                  : JSON.stringify(e)),
                a.d('===StorageMgr====save===', t, i),
                cc.sys.localStorage.setItem(t, i));
            } catch (t) {
              cc.error(t);
            }
          }),
          (n.prototype.clear = function () {
            return cc.sys.localStorage.clear();
          }),
          (n.prototype.rm = function (t) {
            if (null != t) return cc.sys.localStorage.removeItem(t);
          }),
          (n.prototype.XOR = function (t, e) {
            for (var o = '', i = 0, n = 0; n < t.length; n++) {
              var a;
              (a = t.charCodeAt(n) ^ e.charCodeAt(i++ % e.length)),
                (o += String.fromCharCode(a));
            }
            return o;
          }),
          (i = n),
          (o.StorageMgr = i),
          cc._RF.pop();
      },
      { '../../../RxManager/MyLog': void 0 },
    ],
    StringUtil: [
      function (t, e, o) {
        'use strict';
        var i, n;
        cc._RF.push(e, 'fd1b7P8WbtHNb4QR9BjtZZS', 'StringUtil'),
          ((n = function () {}).filterStr = function (t) {
            for (
              var e = new RegExp(
                  "[`~!@#$^&*()=|{}':;',\\[\\].<>/?~\uff01@#\uffe5\u2026\u2026&*\uff08\uff09\u2014\u2014|{}\u3010\u3011\u2018\uff1b\uff1a\u201d\u201c'\u3002\uff0c\u3001\uff1f%+_]",
                ),
                o = '',
                i = 0;
              i < t.length;
              i++
            )
              o += t.substr(i, 1).replace(e, '');
            return o;
          }),
          (n.trimSpace = function (t) {
            return t.replace(/^\s*(.*?)[\s\n]*$/g, '$1');
          }),
          (n.getLength = function (t) {
            for (var e, o = t.split(''), i = 0, n = 0, a = o.length; n < a; n++)
              (e = o[n]), this.isChinese(e) ? (i += 2) : (i += 1);
            return i;
          }),
          (n.isChinese = function (t) {
            return /^.*[\u4E00-\u9FA5]+.*$/.test(t);
          }),
          (n.stringToCode16 = function (t) {
            for (var e = t.length, o = '', i = 0; i < e; i++)
              o += ';' + t.charCodeAt(i).toString(16);
            return o;
          }),
          (n.code16ToString = function (t) {
            for (
              var e, o, i = '', n = t.split(';'), a = 0, r = n.length;
              a < r;
              a++
            ) {
              (e = 0), (o = n[a]).length < 4 && (e = 4 - o.length);
              for (var s = 0; s < e; s++) o = '0' + o;
              i += '\\u' + o;
            }
            return i;
          }),
          (n.cutOutStr = function (t, e) {
            for (
              var o,
                i,
                n,
                a = /\uD83C[\uDF00-\uDFFF]|\uD83D[\uDC00-\uDE4F]/g,
                r = 0,
                s = 0,
                c = 0;
              c < t.length;
              c++
            ) {
              if (
                ((i = r),
                (n = s),
                2 < t.charCodeAt(c).toString(16).length ? (r += 2) : (r += 1),
                ++s,
                a.test(t.substr(c, 2)) && (++c, ++s),
                e < r)
              ) {
                (s = n), (r = i);
                break;
              }
              if (r == e) break;
            }
            return (o = t.substr(0, s)), s < t.length && (o += '...'), o;
          }),
          (i = n),
          (o.default = i),
          cc._RF.pop();
      },
      {},
    ],
    SubContextView: [
      function (t, e, o) {
        'use strict';
        var i, n, a, r, s, c, l, p, u, d, h, _, f;
        cc._RF.push(e, '387e2bf+BVEU5z5p6kjaQBd', 'SubContextView'),
          (o.SubRankType = void 0),
          (u = t('./UserData')),
          (n = t('./BaseUI')),
          (i = (l = cc._decorator).ccclass),
          (s = l.property),
          (c = l.menu),
          (p = l.requireComponent),
          ((d = r = o.SubRankType || (o.SubRankType = {}))[(d.pass = 0)] =
            'pass'),
          (d[(d.friend = 1)] = 'friend'),
          (d[(d.over = 2)] = 'over'),
          (d[(d.orient = 3)] = 'orient'),
          (h = n.default),
          (_ = function () {
            var t;
            return (
              ((t = (null !== h && h.apply(this, arguments)) || this).type =
                r.orient),
              (t.strongRender = !1),
              t
            );
          }),
          __extends(_, h),
          ((f = _).prototype.onLoad = function () {
            cc.sys.platform == cc.sys.WECHAT_GAME &&
              ((this.openDataContext = wx.getOpenDataContext()),
              (this.texture = new cc.Texture2D()),
              (this.sprite = this.node.getComponent(cc.Sprite)),
              (this.sprite.spriteFrame = new cc.SpriteFrame(this.texture)),
              f.SubComponentArr.push(this),
              (this.strongRender = !0));
          }),
          (_.prototype.onEnable = function () {
            var t;
            if (((t = this), cc.sys.platform == cc.sys.WECHAT_GAME)) {
              for (var e = f.SubComponentArr.length - 1; 0 <= e; e--) {
                var o;
                (o = f.SubComponentArr[e]).type !== this.type &&
                  (o.unscheduleAllCallbacks(),
                  cc.isValid(o.node)
                    ? (o.enabled = !1)
                    : f.SubComponentArr.splice(e, 1));
              }
              this.updateSubContextViewport(),
                this.postMessage({ key: 'show' }),
                this.postMessage({
                  key: 'update',
                  value: u.UserData.ptScore + '',
                }),
                console.log('[ SubContextView ] >'),
                this.weakRender(),
                this.on(
                  this.node,
                  function (e) {
                    cc.sys.platform == cc.sys.WECHAT_GAME &&
                      t.openDataContext.postMessage({
                        key: 'touch',
                        value: t.node.convertToNodeSpaceAR(e.getLocation()),
                      });
                  },
                  this,
                );
            }
          }),
          (_.prototype.postMessage = function (t) {
            cc.sys.platform == cc.sys.WECHAT_GAME &&
              (this.openDataContext.postMessage(t), this.weakRender());
          }),
          (_.prototype.onDisable = function () {
            this.clear(),
              cc.sys.platform == cc.sys.WECHAT_GAME &&
                this.openDataContext.postMessage({ event: 'hide' });
          }),
          (_.prototype.onDestroy = function () {
            for (var t = f.SubComponentArr.length - 1; 0 <= t; t--)
              if (f.SubComponentArr[t] == this) {
                f.SubComponentArr.splice(t, 1);
                break;
              }
          }),
          (_.prototype.updateSubContextViewport = function () {
            var t, e, o;
            (this.openDataContext.canvas.width = this.node.width),
              (this.openDataContext.canvas.height = this.node.height),
              (t = this.node.getBoundingBoxToWorld()),
              (e = cc.view.getScaleX()),
              (o = cc.view.getScaleY()),
              this.openDataContext.postMessage({
                key: 'viewport',
                value: {
                  x: t.x * e + cc.view.getViewportRect().x,
                  y: t.y * o + cc.view.getViewportRect().y,
                  width: t.width * e,
                  height: t.height * o,
                },
              });
          }),
          (_.prototype.weakRender = function () {
            var t;
            (t = this),
              this.unscheduleAllCallbacks(),
              this.schedule(
                function () {
                  t.render();
                },
                0.05,
                20,
              );
          }),
          (_.prototype.render = function () {
            this.texture.initWithElement(this.openDataContext.canvas),
              this.sprite.spriteFrame.setTexture(this.texture);
          }),
          (_.prototype.update = function () {
            cc.sys.platform == cc.sys.WECHAT_GAME &&
              this.strongRender &&
              this.render();
          }),
          (_.SubComponentArr = []),
          __decorate([s({ type: cc.Enum(r) })], _.prototype, 'type', void 0),
          (a = f =
            __decorate([i, p(cc.Sprite), c('\u5b50\u57df\u7ec4\u4ef6')], _)),
          (o.default = a),
          cc._RF.pop();
      },
      { './BaseUI': 'BaseUI', './UserData': 'UserData' },
    ],
    TTAPI: [
      function (t, e, o) {
        'use strict';
        var i, n, a, r, s, c, l, p;
        cc._RF.push(e, '60a2cNLN/FGoKiGFLfORmzY', 'TTAPI'),
          (r = t('./EventTypes')),
          (s = t('./App')),
          (i = t('./ApiBase')),
          (a = t('./WxShare')),
          (c = t('./TTRevardVideoAd')),
          (l = i.default),
          (p = function () {
            var t, e, o;
            return (
              ((t = l.call(this) || this).phoneRatio = 1),
              (t.remote_url = ''),
              (t.host_url = ''),
              (t.log_url = ''),
              (t._isLoading = !1),
              (t._failFunc = null),
              (t._videoAd = null),
              (t.clubButton = null),
              (t.openCustomerService = function (t) {
                tt.openCustomerServiceConversation &&
                  tt.openCustomerServiceConversation(t || {});
              }),
              (t.btnAuthorize = null),
              (t._canVibrate = !0),
              (t.postMessage = function (t) {
                tt.getOpenDataContext &&
                  (console.log('postMessage', JSON.stringify(t)),
                  tt.getOpenDataContext().postMessage(t));
              }),
              (t.wxShare = new a.default()),
              t.onShow(),
              (o = cc.view.getFrameSize()),
              (e = cc.winSize),
              (t.phoneRatio = e.width / o.width),
              console.log('WxAPI api', t.phoneRatio, o, e),
              t
            );
          }),
          __extends(p, l),
          (p.prototype.login = function () {
            var t;
            this.setKeepScreenOn(!0),
              ((t = Object.create({})).success = function (t) {
                s.App.event.emit(r.default.GET_LOGIN_CODE, { code: t.code });
              }),
              tt.login(t);
          }),
          (p.prototype.onShow = function () {
            tt.onShow &&
              tt.onShow(function (t) {
                s.App.event.emit(r.default.USER_SHARE),
                  s.App.sound.resumeMusic(),
                  console.log('tt onShow ____', t),
                  t && (t.query, t.referrerInfo, t.scene),
                  s.App.event.emit(r.default.ON_SHOW);
              });
          }),
          (p.prototype.getLaunchOptionsSync = function () {
            return tt.getLaunchOptionsSync ? tt.getLaunchOptionsSync() : null;
          }),
          (p.prototype.getSystemInfoSync = function () {
            return tt.getSystemInfoSync ? tt.getSystemInfoSync() : null;
          }),
          (p.prototype.showLoading = function (t) {
            var e, o, i, n, a;
            (n = this),
              void 0 === t && (t = {}),
              tt.showLoading &&
                !this._isLoading &&
                ((this._isLoading = !0),
                (a = t.title),
                (o = void 0 === (i = t.delay) ? 0 : i),
                (e = t.mask),
                tt.showLoading({
                  title: void 0 === a ? '\u52a0\u8f7d\u4e2d' : a,
                  mask: void 0 !== e && e,
                }),
                0 < o) &&
                setTimeout(function () {
                  n.hideLoading();
                }, o);
          }),
          (p.prototype.hideLoading = function () {
            tt.hideLoading && ((this._isLoading = !1), tt.hideLoading());
          }),
          (p.prototype.initBanerAd = function () {}),
          (p.prototype.showBanner = function () {}),
          (p.prototype.hideBanner = function () {}),
          (p.prototype.destroyBanner = function () {}),
          Object.defineProperty(p.prototype, 'isBannerShow', {
            get: function () {
              return !0;
            },
            enumerable: !1,
            configurable: !0,
          }),
          (p.prototype.showVideoAd = function (t, e, o, i) {
            this._videoAd || (this._videoAd = new c.default([t])),
              console.log('[ \u89c6\u9891ID ] >', t),
              this._videoAd.showVideoAd({ success: e, fail: o, error: i });
          }),
          (p.prototype.showClubButton = function () {}),
          (p.prototype.hideClubButton = function () {}),
          (p.prototype.onShareMessageToFriend = function (t) {
            tt.onShareMessageToFriend && tt.onShareMessageToFriend(t);
          }),
          (p.prototype.navigateToMiniProgram = function () {
            return __awaiter(this, void 0, void 0, function () {
              return __generator(this, function () {
                return [2];
              });
            });
          }),
          (p.prototype.previewImage = function () {}),
          (p.prototype.triggerGC = function () {
            tt.triggerGC && tt.triggerGC();
          }),
          (p.prototype.createAuthorizeBtn = function () {}),
          (p.prototype.removeAuthBtn = function () {
            this.btnAuthorize && this.btnAuthorize.hide();
          }),
          (p.prototype.onTap = function (t) {
            console.log('onTap res: ', t),
              t.userInfo
                ? (s.App.event.emit(r.default.USER_AUTH, t.userInfo),
                  this.removeAuthBtn(),
                  this.btnAuthorize.destroy(),
                  (this.btnAuthorize = null))
                : this._failFunc && this._failFunc(),
              (this._failFunc = null);
          }),
          (p.prototype.setKeepScreenOn = function (t) {
            void 0 === t && (t = !0),
              tt.setKeepScreenOn && tt.setKeepScreenOn({ keepScreenOn: t });
          }),
          (p.prototype.requestSubscribeMessage = function (t) {
            tt.requestSubscribeMessage &&
              0 != t.tmplIds.length &&
              (console.log('\u8bf7\u6c42\u8ba2\u9605'),
              tt.requestSubscribeMessage(t));
          }),
          (p.prototype.setVibrateSetting = function (t) {
            this._canVibrate = t;
          }),
          (p.prototype.vibrateShort = function () {
            this._canVibrate &&
              tt.vibrateShort &&
              tt.vibrateShort({
                success: function () {},
                fail: function () {},
                complete: function () {},
              });
          }),
          (p.prototype.vibrateLong = function () {
            this._canVibrate &&
              tt.vibrateLong &&
              tt.vibrateLong({
                success: function () {},
                fail: function () {},
                complete: function () {},
              });
          }),
          (p.prototype.showToast = function (t) {
            console.log('\u63d0\u793a\uff1a', t.title),
              tt.showToast && tt.showToast(t);
          }),
          (p.prototype.hideToast = function (t) {
            tt.hideToast && tt.hideToast(t);
          }),
          (p.prototype.showModal = function (t) {
            console.log('\u63d0\u793a\uff1a', t.title),
              tt.showModal && tt.showModal(t);
          }),
          (p.prototype.getWindowInfo = function () {
            return tt.getWindowInfo ? tt.getWindowInfo() : null;
          }),
          (p.prototype.getMenuButtonBoundingClientRect = function () {
            var t, e;
            return tt.getMenuButtonBoundingClientRect
              ? ((t = tt.getMenuButtonBoundingClientRect()),
                console.log('rect', t, this.phoneRatio),
                t.top ||
                  (t = {
                    width: 87,
                    height: 32,
                    top: 60,
                    bottom: 42,
                    left: 278,
                    right: 365,
                  }),
                (e = {
                  center: this.phoneRatio * (t.top + 0.5 * t.height),
                  top: t.top * this.phoneRatio,
                }),
                console.log(
                  '\u80f6\u56ca\u4f4d\u7f6e\uff1a',
                  JSON.stringify(e),
                ),
                e)
              : { center: 60, top: 10 };
          }),
          (p.prototype.exitMiniProgram = function () {
            return !(
              cc.sys.platform !== cc.sys.WECHAT_GAME ||
              !tt.exitMiniProgram ||
              (tt.exitMiniProgram(), 0)
            );
          }),
          (p.prototype.checkScene = function () {
            return new Promise(function (t) {
              return t(!0), !0;
            });
          }),
          (p.prototype.canShare = function () {
            return !0;
          }),
          (p.prototype.initShare = function (t, e) {
            this.wxShare.initShare(t, e);
          }),
          (p.prototype.share = function (t) {
            this.canShare() && this.wxShare.share(t);
          }),
          (p.prototype.shareForReward = function (t) {
            return __awaiter(this, void 0, void 0, function () {
              return __generator(this, function (e) {
                switch (e.label) {
                  case 0:
                    return [4, this.wxShare.shareForReward(t)];
                  case 1:
                    return [2, e.sent()];
                }
              });
            });
          }),
          (n = p),
          (o.default = n),
          cc._RF.pop();
      },
      {
        './ApiBase': 'ApiBase',
        './App': 'App',
        './EventTypes': 'EventTypes',
        './TTRevardVideoAd': 'TTRevardVideoAd',
        './WxShare': 'WxShare',
      },
    ],
    TTRevardVideoAd: [
      function (t, e, o) {
        'use strict';
        var i, n, a;
        cc._RF.push(e, 'c052cX+JCtBFYfWFa+NS5LX', 'TTRevardVideoAd'),
          (n = t('./ArrayUtil')),
          ((a = function (t) {
            var e;
            (e = this),
              (this._rewardAds = []),
              (this.onSuccessCallBack = null),
              (this.onFailCallback = null),
              (this.onErrorCallback = null),
              (this._adUnitIds = []),
              (this._currAd = null),
              (this._isShow = !1),
              (this._cloneAds = []),
              (this.onLoad = function () {
                console.log('\u89c6\u9891onLoad'),
                  e._currAd &&
                    (console.log('\u89c6\u9891onLoad-------'),
                    (e._currAd.isLoad = !0),
                    e._isShow) &&
                    ((e._isShow = !1), e._currAd.customAd.show());
              }),
              (this.videoError = function (t) {
                console.log(
                  '\u89c6\u9891\u5931\u8d25\uff1a' + JSON.stringify(t),
                ),
                  e.onErrorCallback && e.onErrorCallback(t),
                  e._currAd &&
                    e._currAd.customAd &&
                    (e._currAd.customAd.offError(e.videoError),
                    e._currAd.customAd.offClose(e.videoClose),
                    e._currAd.customAd.offLoad(e.onLoad)),
                  e._currAd && (e._currAd.isError = !0);
              }),
              (this.videoClose = function (t) {
                (t && t.isEnded) || void 0 === t
                  ? (console.log(
                      '\u6b63\u5e38\u64ad\u653e\u7ed3\u675f\uff0c\u53ef\u4ee5\u4e0b\u53d1\u6e38\u620f\u5956\u52b1',
                    ),
                    e.onSuccessCallBack && e.onSuccessCallBack(t))
                  : (console.log(
                      '\u64ad\u653e\u4e2d\u9014\u9000\u51fa\uff0c\u4e0d\u4e0b\u53d1\u6e38\u620f\u5956\u52b1',
                    ),
                    e.onFailCallback && e.onFailCallback(t));
              }),
              (this._adUnitIds = t);
            for (var o = 0, i = this._adUnitIds.length; o < i; o++) {
              var n;
              (n = {
                customAd: null,
                adUnitId: this._adUnitIds[o],
                isLoad: !1,
                isError: !1,
                errorCount: 0,
                showCount: 0,
              }),
                this._rewardAds.push(n);
            }
            this.createVideoAd();
          }).prototype.createVideoAd = function () {
            var t;
            0 != this._rewardAds.length &&
              tt.createRewardedVideoAd &&
              ((t = this.getAd()),
              console.log('\u521b\u5efa\u89c6\u9891AD', t.adUnitId),
              (t.customAd = tt.createRewardedVideoAd({ adUnitId: t.adUnitId })),
              (this._currAd = t).customAd.onError(this.videoError),
              t.customAd.onClose(this.videoClose),
              t.customAd.onLoad(this.onLoad),
              this._currAd.customAd.load());
          }),
          (a.prototype.getAd = function () {
            var t;
            return (
              0 == this._cloneAds.length &&
                ((this._cloneAds = n.default.clone(this._rewardAds)),
                n.default.shuffle(this._cloneAds)),
              ((t = this._cloneAds.pop()).isLoad = !1),
              (t.isError = !1),
              (t.customAd = null),
              t
            );
          }),
          (a.prototype.showVideoAd = function (t) {
            (this.onSuccessCallBack = t.success),
              (this.onFailCallback = t.fail),
              (this.onErrorCallback = t.error),
              this._currAd &&
                (this._currAd.isError
                  ? ((this._isShow = !0), this.createVideoAd())
                  : this._currAd.customAd.show());
          }),
          (a.prototype.destroy = function () {
            this._currAd &&
              ((this._currAd = null),
              (this.onSuccessCallBack = null),
              (this.onFailCallback = null),
              (this.onErrorCallback = null));
          }),
          (i = a),
          (o.default = i),
          cc._RF.pop();
      },
      { './ArrayUtil': 'ArrayUtil' },
    ],
    TTUma: [
      function (t, e, o) {
        'use strict';
        var i, n, a;
        cc._RF.push(e, '60130NcSUVCTbtcEOMDf1fJ', 'TTUma'),
          (o.TTUma = void 0),
          (n = t('./TrackBase').TrackBase),
          (a = function () {
            return (null !== n && n.apply(this, arguments)) || this;
          }),
          __extends(a, n),
          (a.prototype.setOpenid = function (t) {
            tt.uma && tt.uma.setOpenid(t), n.prototype.setOpenid.call(this, t);
          }),
          (a.prototype.trackEvent = function (t) {
            t &&
              ((t = this.prefix(t)),
              tt.uma && tt.uma.trackEvent(t),
              n.prototype.trackEvent.call(this, t));
          }),
          (a.prototype.onStart = function (t) {
            tt.uma &&
              tt.uma &&
              tt.uma.stage &&
              tt.uma.stage.onStart({
                stageId: t + '',
                stageName: '\u7b2c' + t + '\u5173',
              }),
              n.prototype.onStart.call(this, t);
          }),
          (a.prototype.onEnd = function (t, e) {
            tt.uma.stage.onEnd({
              stageId: t,
              stageName: '\u5173\u5361' + t,
              event: e,
            }),
              n.prototype.onEnd.call(this, t, e);
          }),
          (i = a),
          (o.TTUma = i),
          cc._RF.pop();
      },
      { './TrackBase': 'TrackBase' },
    ],
    TipsNode2: [
      function (t, e, o) {
        'use strict';
        var i, n, a, r, s, c, l;
        cc._RF.push(e, 'b249886eL1FA5sXbu+r18Xl', 'TipsNode2'),
          (s = t('./App')),
          (a = (n = cc._decorator).ccclass),
          (i = n.property),
          (c = cc.Component),
          (l = function () {
            var t;
            return (
              ((t = (null !== c && c.apply(this, arguments)) || this).layout =
                null),
              (t.icons = []),
              (t.numLab = null),
              (t.tween = null),
              t
            );
          }),
          __extends(l, c),
          (l.prototype.onLoad = function () {
            var t;
            (t = this),
              (this.tween = cc
                .tween(this.layout.node)
                .call(function () {
                  (t.layout.node.opacity = 0),
                    (t.layout.node.position = cc.v3(0, 0));
                })
                .delay(0.05)
                .call(function () {
                  t.layout.updateLayout(), (t.layout.node.opacity = 255);
                })
                .to(0.6400000000000001, { position: cc.v3(0, 150) })
                .to(0.96, { position: cc.v3(0, 250), opacity: 0 })
                .call(function () {
                  s.App.res.putNodeToPool(t.node);
                }));
          }),
          (l.prototype.show = function (t, e) {
            void 0 === e && (e = 1),
              this.icons.forEach(function (e, o) {
                e.active = o == t - 1;
              }),
              (this.numLab.string = 'x' + e);
          }),
          (l.prototype.onEnable = function () {
            this.playEff();
          }),
          (l.prototype.playEff = function () {
            var t, e;
            null != (t = this.tween) && t.stop(),
              null != (e = this.tween) && e.start();
          }),
          __decorate([i(cc.Layout)], l.prototype, 'layout', void 0),
          __decorate([i([cc.Node])], l.prototype, 'icons', void 0),
          __decorate([i(cc.Label)], l.prototype, 'numLab', void 0),
          (r = __decorate([a], l)),
          (o.default = r),
          cc._RF.pop();
      },
      { './App': 'App' },
    ],
    TipsNode3: [
      function (t, e, o) {
        'use strict';
        var i, n, a, r, s, c, l;
        cc._RF.push(e, '8d2e97ubGFIKpW/qq/gFuO1', 'TipsNode3'),
          (i = t('./App')),
          (s = (r = cc._decorator).ccclass),
          (n = r.property),
          (c = cc.Component),
          (l = function () {
            var t;
            return (
              ((t = (null !== c && c.apply(this, arguments)) || this).msgLab =
                null),
              (t.tween = null),
              t
            );
          }),
          __extends(l, c),
          (l.prototype.onLoad = function () {
            var t;
            (t = this),
              (this.tween = cc
                .tween(this.msgLab.node)
                .call(function () {
                  (t.msgLab.node.opacity = 255),
                    (t.msgLab.node.position = cc.v3(0, -50));
                })
                .to(0.6400000000000001, { position: cc.v3(0, 0) })
                .to(0.96, { position: cc.v3(0, 50), opacity: 0 })
                .call(function () {
                  i.App.res.putNodeToPool(t.node);
                }));
          }),
          (l.prototype.show = function (t) {
            this.msgLab.string = t;
          }),
          (l.prototype.onEnable = function () {
            this.playEff();
          }),
          (l.prototype.playEff = function () {
            var t, e;
            null != (t = this.tween) && t.stop(),
              null != (e = this.tween) && e.start();
          }),
          __decorate([n(cc.Label)], l.prototype, 'msgLab', void 0),
          (a = __decorate([s], l)),
          (o.default = a),
          cc._RF.pop();
      },
      { './App': 'App' },
    ],
    TipsNode: [
      function (t, e, o) {
        'use strict';
        var i, n, a, r, s, c, l;
        cc._RF.push(e, 'b1711wB2tRIW4rtXKNmGbDR', 'TipsNode'),
          (s = t('./App')),
          (a = (n = cc._decorator).ccclass),
          (r = n.property),
          (c = cc.Component),
          (l = function () {
            var t;
            return (
              ((t = (null !== c && c.apply(this, arguments)) || this).msgLab =
                null),
              (t.layout = null),
              (t.tween = null),
              t
            );
          }),
          __extends(l, c),
          (l.prototype.onLoad = function () {
            var t;
            (t = this),
              (this.tween = cc
                .tween(this.layout.node)
                .call(function () {
                  (t.layout.node.opacity = 0),
                    (t.layout.node.position = cc.v3(0, 0));
                })
                .delay(0.05)
                .call(function () {
                  t.layout.updateLayout(), (t.layout.node.opacity = 255);
                })
                .to(0.6400000000000001, { position: cc.v3(0, 150) })
                .to(0.96, { position: cc.v3(0, 250), opacity: 0 })
                .call(function () {
                  s.App.res.putNodeToPool(t.node);
                }));
          }),
          (l.prototype.show = function (t) {
            this.msgLab.string = t;
          }),
          (l.prototype.onEnable = function () {
            this.playEff();
          }),
          (l.prototype.playEff = function () {
            var t, e;
            null != (t = this.tween) && t.stop(),
              null != (e = this.tween) && e.start();
          }),
          __decorate([r(cc.Label)], l.prototype, 'msgLab', void 0),
          __decorate([r(cc.Layout)], l.prototype, 'layout', void 0),
          (i = __decorate([a], l)),
          (o.default = i),
          cc._RF.pop();
      },
      { './App': 'App' },
    ],
    TopWidget: [
      function (t, e, o) {
        'use strict';
        var i, n, a, r, s, c, l;
        cc._RF.push(e, 'e41a34U8jZJeI0tttw/qyr3', 'TopWidget'),
          (r = t('./App')),
          (i = (a = cc._decorator).ccclass),
          (n = a.property),
          (c = cc.Component),
          (l = function () {
            var t;
            return (
              ((t = (null !== c && c.apply(this, arguments)) || this).offsetY =
                0),
              t
            );
          }),
          __extends(l, c),
          (l.prototype.start = function () {
            var t, e, o;
            (e = 0),
              (o = r.App.platform.getMenuButtonBoundingClientRect()) &&
                (e = o.center),
              (e += this.offsetY),
              ((t = this.node.position).y = (cc.winSize.height >> 1) - e),
              (this.node.position = t),
              console.warn('this.topWidget', e, JSON.stringify(o));
          }),
          __decorate([n], l.prototype, 'offsetY', void 0),
          (s = __decorate([i], l)),
          (o.default = s),
          cc._RF.pop();
      },
      { './App': 'App' },
    ],
    TrackBase: [
      function (t, e, o) {
        'use strict';
        var i, n;
        cc._RF.push(e, '249fc5dCphFlaYMXPGXdKRE', 'TrackBase');
        var a = t('./../../_script/Ad_Mgr').default;
        (o.TrackBase = void 0),
          (n = function () {
            this._is_new = 0;
          }),
          Object.defineProperty(n.prototype, 'is_new', {
            set: function (t) {
              (this._is_new = t),
                console.log(
                  '[ \u8bbe\u7f6e\u662f\u5426\u4e3a\u65b0\u624b ] >',
                  t,
                );
            },
            enumerable: !1,
            configurable: !0,
          }),
          (n.prototype.setOpenid = function (t) {
            console.warn('[ \u8bbe\u7f6e openid] >', t);
          }),
          (n.prototype.trackEvent = function (t) {
            (t = this.prefix(t)), console.warn('[ \u4e0a\u62a5\uff1a ] >', t);
          }),
          (n.prototype.onStart = function (t) {
            console.warn('[ \u5173\u5361\u5f00\u59cb\uff1a ] >', t),
              a.Instance.Show_Box();
          }),
          (n.prototype.onEnd = function (t, e) {
            console.warn('[ \u5173\u5361\u7ed3\u675f\uff1a ] >', t, e),
              a.Instance.Show_Box();
          }),
          (n.prototype.onRunning = function () {}),
          (n.prototype.prefix = function (t) {
            return (1 == this._is_new ? 'new' : 'sum') + '_' + t;
          }),
          (i = n),
          (o.TrackBase = i),
          cc._RF.pop();
      },
      { './../../_script/Ad_Mgr': void 0 },
    ],
    TrackEnums: [
      function (t, e, o) {
        'use strict';
        var i;
        cc._RF.push(e, '24d70ny7hZCOpO3TpvUm4PN', 'TrackEnums'),
          (o.TrackEnums = void 0),
          ((i = o.TrackEnums || (o.TrackEnums = {})).register = 'register'),
          (i.loading = 'loading'),
          (i.home = 'home'),
          (i.course = 'course'),
          (i.tz = 'tz'),
          (i.endless = 'endless'),
          (i.cg = 'cg'),
          (i.recovery = 'recovery'),
          (i.daily_share = 'daily_share'),
          (i.skin = 'skin'),
          (i.daily_sign = 'daily_sign'),
          (i.vd_cup_1 = 'vd_cup_1'),
          (i.vd_refresh_1 = 'vd_refresh_1'),
          (i.shr_refresh_1 = 'shr_refresh_1'),
          (i.vd_tips_1 = 'vd_tips_1'),
          (i.shr_tips_1 = 'shr_tips_1'),
          (i.vd_delay_1 = 'vd_delay_1'),
          (i.refresh_1 = 'refresh_1'),
          (i.tips_1 = 'tips_1'),
          (i.delay_1 = 'delay_1'),
          (i.vd_time_1 = 'vd_time_1'),
          (i.vd_step_1 = 'vd_step_1'),
          (i.ed_vd = 'ed_vd'),
          (i.ed_vd_cup = 'ed_vd_cup'),
          (i.ed_vd_refresh = 'ed_vd_refresh'),
          (i.ed_shr_refresh = 'ed_shr_refresh'),
          (i.ed_vd_tips = 'ed_vd_tips'),
          (i.ed_shr_tips = 'ed_shr_tips'),
          (i.ed_vd_delay = 'ed_vd_delay'),
          (i.ed_refresh = 'ed_refresh'),
          (i.ed_tips = 'ed_tips'),
          (i.ed_delay = 'ed_delay'),
          (i.ed_vd_time = 'ed_vd_time'),
          (i.ed_vd_step = 'ed_vd_step'),
          cc._RF.pop();
      },
      {},
    ],
    TweenMgr: [
      function (t, e) {
        'use strict';
        cc._RF.push(e, '36ae04Yj0FOEopaCBN1O7ow', 'TweenMgr'),
          console.log('\u7a7a\u6587\u4ef6'),
          cc._RF.pop();
      },
      {},
    ],
    UIHelper: [
      function (t, e, o) {
        'use strict';
        var i, n, a, r, s, c, l;
        cc._RF.push(e, '955bf70/wdMJYAWR+6pWs6y', 'UIHelper'),
          (o.UIEnum = void 0),
          (a = t('./App')),
          (n = t('./UIMgr')),
          (s = t('./GameEnums')),
          ((c = i = o.UIEnum || (o.UIEnum = {}))[(c.HomeView = 0)] =
            'HomeView'),
          (c[(c.PropItemView = 1)] = 'PropItemView'),
          (c[(c.SettingView = 2)] = 'SettingView'),
          (c[(c.WinView = 3)] = 'WinView'),
          (c[(c.FailView = 4)] = 'FailView'),
          (c[(c.SkinView = 6)] = 'SkinView'),
          (c[(c.FriendView = 7)] = 'FriendView'),
          (c[(c.DailyRewardView = 8)] = 'DailyRewardView'),
          (c[(c.ReviveView = 9)] = 'ReviveView'),
          (c[(c.WarnView = 10)] = 'WarnView'),
          (c[(c.HelpView = 11)] = 'HelpView'),
          (c[(c.EnergyView = 12)] = 'EnergyView'),
          (c[(c.SignInView = 13)] = 'SignInView'),
          (c[(c.FavoriteView = 15)] = 'FavoriteView'),
          (c[(c.CollectView = 17)] = 'CollectView'),
          (c[(c.ShopView = 19)] = 'ShopView'),
          (c[(c.GuideView = 20)] = 'GuideView'),
          (c[(c.RukouView = 21)] = 'RukouView'),
          ((l = function () {}).initialize = function () {
            a.App.gui.register({
              id: i.HomeView,
              url: 'views/HomeView',
              layer: n.LayerEnum.VIEW_LAYER,
              bundle: s.BundleType.Game,
              destroy: !1,
            }),
              a.App.gui.register({
                id: i.WinView,
                url: 'views/WinView',
                layer: n.LayerEnum.TOP_LAYER,
                bundle: s.BundleType.Game,
                destroy: !1,
              }),
              a.App.gui.register({
                id: i.FailView,
                url: 'views/FailView',
                layer: n.LayerEnum.TOP_LAYER,
                bundle: s.BundleType.Game,
                destroy: !1,
              }),
              a.App.gui.register({
                id: i.SettingView,
                url: 'views/SettingView',
                layer: n.LayerEnum.TOP_LAYER,
                bundle: s.BundleType.Game,
                destroy: !1,
              }),
              a.App.gui.register({
                id: i.PropItemView,
                url: 'views/PropItemView',
                layer: n.LayerEnum.TOP_LAYER,
                bundle: s.BundleType.Game,
                destroy: !1,
              }),
              a.App.gui.register({}),
              a.App.gui.register({
                id: i.SkinView,
                url: 'views/SkinView',
                layer: n.LayerEnum.TOP_LAYER,
                bundle: s.BundleType.Game,
                destroy: !1,
              }),
              a.App.gui.register({
                id: i.FriendView,
                url: 'views/FriendView',
                layer: n.LayerEnum.TOP_LAYER,
                bundle: s.BundleType.Game,
                destroy: !1,
              }),
              a.App.gui.register({
                id: i.DailyRewardView,
                url: 'views/DailyRewardView',
                layer: n.LayerEnum.TOP_LAYER,
                bundle: s.BundleType.Game,
                destroy: !1,
              }),
              a.App.gui.register({
                id: i.ReviveView,
                url: 'views/ReviveView',
                layer: n.LayerEnum.TOP_LAYER,
                bundle: s.BundleType.Game,
                destroy: !1,
              }),
              a.App.gui.register({
                id: i.WarnView,
                url: 'views/WarnView',
                layer: n.LayerEnum.TOP_LAYER,
                bundle: s.BundleType.Game,
                destroy: !1,
              }),
              a.App.gui.register({
                id: i.HelpView,
                url: 'views/HelpView',
                layer: n.LayerEnum.TOP_LAYER,
                bundle: s.BundleType.Game,
                destroy: !1,
              }),
              a.App.gui.register({
                id: i.EnergyView,
                url: 'views/EnergyView',
                layer: n.LayerEnum.TOP_LAYER,
                bundle: s.BundleType.Game,
                destroy: !1,
              }),
              a.App.gui.register({
                id: i.SignInView,
                url: 'views/SignInView',
                layer: n.LayerEnum.TOP_LAYER,
                bundle: s.BundleType.Game,
                destroy: !1,
              }),
              a.App.gui.register({}),
              a.App.gui.register({}),
              a.App.gui.register({}),
              a.App.gui.register({
                id: i.CollectView,
                url: 'views/CollectView',
                layer: n.LayerEnum.TOP_LAYER,
                bundle: s.BundleType.Game,
                destroy: !1,
              }),
              a.App.gui.register({}),
              a.App.gui.register({
                id: i.ShopView,
                url: 'views/ShopView',
                layer: n.LayerEnum.TOP_LAYER,
                bundle: s.BundleType.Game,
                destroy: !1,
              }),
              a.App.gui.register({
                id: i.GuideView,
                url: 'views/GuideView',
                layer: n.LayerEnum.TOP_LAYER,
                bundle: s.BundleType.Game,
                destroy: !1,
              }),
              a.App.gui.register({
                id: i.RukouView,
                url: 'views/RukouView',
                layer: n.LayerEnum.TOP_LAYER,
                bundle: s.BundleType.Game,
                destroy: !1,
              }),
              a.App.gui.register({});
          }),
          (r = l),
          (o.default = r),
          cc._RF.pop();
      },
      { './App': 'App', './GameEnums': 'GameEnums', './UIMgr': 'UIMgr' },
    ],
    UIMgr: [
      function (t, e, o) {
        'use strict';
        var i, n, a, r, s, c, l;
        cc._RF.push(e, 'f8279HGn4BC37BxkvZdWNEk', 'UIMgr'),
          t('./../../_script/Ad_Mgr').default,
          (o.UIMgr = o.LayerEnum = void 0),
          (i = t('./EventTypes')),
          (s = t('./App')),
          (a = t('./BasePanel')),
          ((l = r = o.LayerEnum || (o.LayerEnum = {}))[(l.GAME_LAYER = 0)] =
            'GAME_LAYER'),
          (l[(l.VIEW_LAYER = 1)] = 'VIEW_LAYER'),
          (l[(l.TOP_LAYER = 2)] = 'TOP_LAYER'),
          (l[(l.TIPS_LAYER = 3)] = 'TIPS_LAYER'),
          (l[(l.LOCK_LAYER = 4)] = 'LOCK_LAYER'),
          (l[(l.MAX_LAYER = 5)] = 'MAX_LAYER'),
          ((c = function () {
            (this.canvas = null),
              (this.layers = new Map()),
              (this.viewList = {}),
              (this.uiList = {}),
              (this.loadingUI = {}),
              c._instance
                ? console.error('UIMgr \u5df2\u5b9e\u4f8b\u5316')
                : (c._instance = this).setup();
          }).prototype.setup = function () {
            this.canvas = cc.find('Canvas');
            for (var t = r.MAX_LAYER, e = 0; e < t; ++e) {
              var o, i;
              ((i = new cc.Node()).width = this.canvas.width),
                (i.height = this.canvas.height),
                ((o = i.addComponent(cc.Widget)).isAlignBottom = !0),
                (o.isAlignTop = !0),
                (o.isAlignLeft = !0),
                (o.isAlignRight = !0),
                (o.left = 0),
                (o.right = 0),
                (o.top = 0),
                (o.bottom = 0),
                (i.parent = this.canvas),
                o.updateAlignment(),
                e == r.LOCK_LAYER &&
                  (i.addComponent(cc.BlockInputEvents), (i.active = !1)),
                this.layers.set(e, i);
            }
            cc.log('canvas:' + this.canvas.childrenCount);
          }),
          (c.prototype.register = function (t) {
            var e, o, i, n, a;
            (a = t.id),
              (n = t.url),
              (o = t.bundle),
              (e = t.layer),
              (i = t.destroy),
              !this.viewList[a] && n
                ? (this.viewList[a] = {
                    url: n,
                    layer: void 0 === e ? 0 : e,
                    destroy: void 0 === i || i,
                    bundle: void 0 === o ? '' : o,
                  })
                : console.warn(
                    this.viewList[a]
                      ? 'ui\u5df2\u6ce8\u518c:' + a
                      : ' \u6ce8\u518curl\u4e3a\u7a7a:' + a,
                  );
          }),
          (c.prototype.find = function (t) {
            return this.viewList[t] || null;
          }),
          (c.prototype.openUI = function (t, e, o) {
            return __awaiter(this, void 0, void 0, function () {
              var n;
              return __generator(this, function (a) {
                switch (a.label) {
                  case 0:
                    return (
                      console.warn('\u5c55\u793aUI' + t),
                      this.loadingUI[t] || this.uiList[t]
                        ? (console.warn(
                            this.loadingUI[t]
                              ? 'ui\u52a0\u8f7d\u4e2d:' + t
                              : ' ui\u5df2\u5728\u663e\u793a\u5217\u8868:' + t,
                          ),
                          [2])
                        : ((this.loadingUI[t] = 1), [4, this.getNode(t)])
                    );
                  case 1:
                    return (n = a.sent())
                      ? (this.isLock(!0),
                        (o = o || this.viewList[t].layer),
                        [4, this.showUI(t, n, e, o)])
                      : [3, 3];
                  case 2:
                    a.sent(),
                      s.App.event.emit(i.default.VIEW_OPEN, t),
                      this.isLock(!1),
                      (a.label = 3);
                  case 3:
                    return [2];
                }
              });
            });
          }),
          (c.prototype.closeUI = function (t) {
            var e, o, n;
            (o = this.uiList[t]) &&
              ((n = o.getComponent(a.default)) && n.onClose(),
              (e = this.viewList[t]) && s.App.res.putNodeToPool(o, e.destroy),
              delete this.uiList[t],
              s.App.event.emit(i.default.VIEW_CLOSE, t));
          }),
          (c.prototype.hasUI = function (t) {
            return null != this.uiList[t];
          }),
          (c.prototype.getUI = function (t) {
            return this.uiList[t];
          }),
          (c.prototype.getNode = function (t) {
            return __awaiter(this, void 0, void 0, function () {
              var e, o, i, n;
              return __generator(this, function (a) {
                switch (a.label) {
                  case 0:
                    return (
                      (e = this.viewList[t]),
                      (o = null),
                      e && ((i = e.url), (n = e.bundle), i)
                        ? [4, s.App.res.getNodeFromPool(i, n)]
                        : [3, 2]
                    );
                  case 1:
                    (o = a.sent()), (a.label = 2);
                  case 2:
                    return [2, o];
                }
              });
            });
          }),
          (c.prototype.showUI = function (t, e, o, i) {
            return (
              void 0 === o && (o = null),
              __awaiter(this, void 0, void 0, function () {
                var n, r;
                return __generator(this, function (s) {
                  switch (s.label) {
                    case 0:
                      return (n = e.getComponent(a.default))
                        ? (n.isInit || (n.initUI(), (n.isInit = !0)),
                          n.onOpen(o),
                          (r = this.getLayer(i)),
                          (e.parent = r),
                          [4, n.playIn()])
                        : [3, 2];
                    case 1:
                      s.sent(), (s.label = 2);
                    case 2:
                      return (
                        (this.uiList[t] = e), delete this.loadingUI[t], [2]
                      );
                  }
                });
              })
            );
          }),
          (c.prototype.isLock = function (t) {
            var e;
            (e = this.getLayer(r.LOCK_LAYER)) && (e.active = t);
          }),
          (c.prototype.getLastNode = function (t) {
            var e;
            return (
              (e = this.layers.get(t)),
              t && 0 != e.childrenCount ? e.children[e.childrenCount - 1] : null
            );
          }),
          (c.prototype.getLayer = function (t) {
            return this.layers.get(t) || this.canvas;
          }),
          (n = c),
          (o.UIMgr = n),
          cc._RF.pop();
      },
      {
        './../../_script/Ad_Mgr': void 0,
        './App': 'App',
        './BasePanel': 'BasePanel',
        './EventTypes': 'EventTypes',
      },
    ],
    UserData: [
      function (t, e, o) {
        'use strict';
        cc._RF.push(e, '15622NGnNdABI5Ygi3jb3bs', 'UserData');
        var i,
          n,
          a,
          r,
          s,
          c,
          l,
          p,
          u,
          d,
          h,
          _,
          f = t('../../../RxManager/MyLog').default;
        (o.UserData = void 0),
          (c = t('./App')),
          (s = t('./GameCtrl')),
          (i = t('./GameEnums')),
          (n = t('./TrackEnums')),
          (p = t('./EventTypes')),
          (h = t('./EffectMgr')),
          (l = t('./NetMgr')),
          (r = t('./GameSetting')),
          (d = t('./LocalData')),
          (a = t('./SkinData')),
          (_ = function () {
            (this._energy = 0),
              (this._energy_time = 0),
              (this._ptLv = 0),
              (this._ptScore = 0),
              (this._wjScore = 0),
              (this._cgLv = 0),
              (this._cgScore = 0),
              (this._sxNum = 0),
              (this._tsNum = 0),
              (this._jsNum = 0),
              (this._lxNum = 0),
              (this._dlNum = 0),
              (this._hbNum = 0),
              (this._kpNum = 0),
              (this._sign_date = 0),
              (this._sign_num = 0),
              (this._day_share = 0),
              (this._favorite = 0),
              (this._inv_num = 0),
              (this._dl_first = 0),
              (this._ts_first = 0),
              (this._collects = null),
              (this._gold = 0),
              (this._recordLv = 0),
              (this._recordRealLv = 0),
              (this._skin_videos = null);
          }),
          Object.defineProperty(_.prototype, 'energy', {
            get: function () {
              return this._energy;
            },
            enumerable: !1,
            configurable: !0,
          }),
          Object.defineProperty(_.prototype, 'energy_time', {
            get: function () {
              return this._energy_time;
            },
            enumerable: !1,
            configurable: !0,
          }),
          Object.defineProperty(_.prototype, 'ptLv', {
            get: function () {
              return this._ptLv;
            },
            enumerable: !1,
            configurable: !0,
          }),
          Object.defineProperty(_.prototype, 'cgLv', {
            get: function () {
              return this._cgLv;
            },
            enumerable: !1,
            configurable: !0,
          }),
          Object.defineProperty(_.prototype, 'cgScore', {
            get: function () {
              return this._cgScore;
            },
            enumerable: !1,
            configurable: !0,
          }),
          Object.defineProperty(_.prototype, 'ptScore', {
            get: function () {
              return this._ptScore;
            },
            enumerable: !1,
            configurable: !0,
          }),
          Object.defineProperty(_.prototype, 'wjScore', {
            get: function () {
              return this._wjScore;
            },
            enumerable: !1,
            configurable: !0,
          }),
          Object.defineProperty(_.prototype, 'sxNum', {
            get: function () {
              return this._sxNum;
            },
            enumerable: !1,
            configurable: !0,
          }),
          Object.defineProperty(_.prototype, 'tsNum', {
            get: function () {
              return this._tsNum;
            },
            enumerable: !1,
            configurable: !0,
          }),
          Object.defineProperty(_.prototype, 'jsNum', {
            get: function () {
              return this._jsNum;
            },
            enumerable: !1,
            configurable: !0,
          }),
          Object.defineProperty(_.prototype, 'lxNum', {
            get: function () {
              return this._lxNum;
            },
            enumerable: !1,
            configurable: !0,
          }),
          Object.defineProperty(_.prototype, 'sign_date', {
            get: function () {
              return this._sign_date;
            },
            enumerable: !1,
            configurable: !0,
          }),
          Object.defineProperty(_.prototype, 'sign_num', {
            get: function () {
              return this._sign_num;
            },
            enumerable: !1,
            configurable: !0,
          }),
          Object.defineProperty(_.prototype, 'day_share', {
            get: function () {
              return this._day_share;
            },
            enumerable: !1,
            configurable: !0,
          }),
          Object.defineProperty(_.prototype, 'favorite', {
            get: function () {
              return this._favorite;
            },
            enumerable: !1,
            configurable: !0,
          }),
          Object.defineProperty(_.prototype, 'inv_num', {
            get: function () {
              return this._inv_num;
            },
            enumerable: !1,
            configurable: !0,
          }),
          Object.defineProperty(_.prototype, 'dl_first', {
            get: function () {
              return this._dl_first;
            },
            enumerable: !1,
            configurable: !0,
          }),
          Object.defineProperty(_.prototype, 'ts_first', {
            get: function () {
              return this._ts_first;
            },
            enumerable: !1,
            configurable: !0,
          }),
          Object.defineProperty(_.prototype, 'gold', {
            get: function () {
              return this._gold;
            },
            enumerable: !1,
            configurable: !0,
          }),
          Object.defineProperty(_.prototype, 'dlNum', {
            get: function () {
              return this._dlNum;
            },
            enumerable: !1,
            configurable: !0,
          }),
          Object.defineProperty(_.prototype, 'hbNum', {
            get: function () {
              return this._hbNum;
            },
            enumerable: !1,
            configurable: !0,
          }),
          Object.defineProperty(_.prototype, 'kpNum', {
            get: function () {
              return this._kpNum;
            },
            enumerable: !1,
            configurable: !0,
          }),
          Object.defineProperty(_.prototype, 'recordLv', {
            get: function () {
              return this._recordLv;
            },
            enumerable: !1,
            configurable: !0,
          }),
          Object.defineProperty(_.prototype, 'recordRealLv', {
            get: function () {
              return this._recordRealLv;
            },
            enumerable: !1,
            configurable: !0,
          }),
          (_.prototype.initData = function () {
            (this._ptLv = d.LocalData.getValue('ptLv')),
              (this._ptScore = d.LocalData.getValue('ptScore')),
              (this._wjScore = d.LocalData.getValue('wjScore')),
              (this._cgLv = d.LocalData.getValue('cgLv')),
              (this._cgScore = d.LocalData.getValue('cgScore')),
              (this._sxNum = d.LocalData.getValue('sxNum')),
              (this._tsNum = d.LocalData.getValue('tsNum')),
              (this._jsNum = d.LocalData.getValue('jsNum')),
              (this._lxNum = d.LocalData.getValue('lxNum')),
              (this._dlNum = d.LocalData.getValue('dlNum')),
              (this._hbNum = d.LocalData.getValue('hbNum')),
              (this._kpNum = d.LocalData.getValue('kpNum')),
              (this._sign_date = d.LocalData.getValue('sign_date')),
              (this._sign_num = d.LocalData.getValue('sign_num')),
              (this._day_share = d.LocalData.getValue('day_share')),
              (this._favorite = d.LocalData.getValue('favorite')),
              (this._inv_num = d.LocalData.getValue('inv_num')),
              (this._dl_first = d.LocalData.getValue('dl_first')),
              (this._ts_first = d.LocalData.getValue('ts_first')),
              (this._skin_videos = d.LocalData.getValue('skin_videos') || {}),
              (this._recordLv = d.LocalData.getValue('recordLv')),
              (this._recordRealLv = d.LocalData.getValue('recordRealLv')),
              (this._collects = d.LocalData.getValue('collects') || []),
              (this._gold = d.LocalData.getValue('gold')),
              (this._energy = d.LocalData.getValue('energy')),
              (this._energy_time = d.LocalData.getValue('energy_time')),
              0 == this._energy && 0 == this._energy_time
                ? ((this._energy = r.GameSetting.energy_conf.default_value),
                  d.LocalData.setValue('energy', this._energy))
                : 0 < this._energy_time && this.recoveryEnergy(),
              cc.sys.platform == cc.sys.WECHAT_GAME &&
                wx.setUserCloudStorage &&
                (wx.setUserCloudStorage({
                  KVDataList: [{ key: 'pt_score', value: this._cgScore + '' }],
                }),
                wx.setUserCloudStorage({
                  KVDataList: [{ key: 'wj_score', value: this._wjScore + '' }],
                }));
          }),
          (_.prototype.setLvRecord = function (t, e) {
            (this._recordLv = t),
              (this._recordRealLv = e),
              d.LocalData.setValue('recordLv', this._recordLv),
              d.LocalData.setValue('recordRealLv', this._recordRealLv);
          }),
          (_.prototype.addRank = function (t) {
            if (!(o.UserData.cgLv <= 3))
              switch ((console.log('\u6392\u884c\u4e0a\u62a5', t), t)) {
                case 1:
                  l.NetMgr.addRankList(1, this._ptScore);
                  break;
                case 3:
                  l.NetMgr.addRankList(3, this._wjScore);
                  break;
                case 4:
                  l.NetMgr.addRankList(
                    4,
                    this._cgScore + this._ptScore + this._wjScore,
                  );
              }
          }),
          (_.prototype.addCollect = function (t) {
            this._collects.indexOf(t) < 0 &&
              (this._collects.push(t),
              d.LocalData.setValue('collects', this._collects));
          }),
          (_.prototype.getNewCollectID = function () {
            for (
              var t = -1, e = 0;
              e < r.GameSetting.collect_conf.length;
              e++
            ) {
              var o;
              if (
                ((o = r.GameSetting.collect_conf[e].id), !this.isCollect(o))
              ) {
                t = o;
                break;
              }
            }
            return t;
          }),
          (_.prototype.isCollect = function (t) {
            return 0 <= this._collects.indexOf(t);
          }),
          (_.prototype.addGold = function (t) {
            null != t &&
              ((this._gold += t),
              d.LocalData.setValue('gold', this._gold),
              c.App.event.emit(p.default.On_Gold_Change));
          }),
          (_.prototype.useGold = function (t) {
            return !(
              null == t ||
              this._gold < t ||
              ((this._gold -= t),
              d.LocalData.setValue('gold', this._gold),
              c.App.event.emit(p.default.On_Gold_Change),
              0)
            );
          }),
          (_.prototype.recoveryEnergy = function () {
            if (0 != this._energy_time)
              return this._energy >= r.GameSetting.energy_conf.default_value
                ? ((this._energy_time = 0),
                  void d.LocalData.setValue('energy_time', this._energy_time))
                : void (
                    Date.now() - this._energy_time <
                      r.GameSetting.energy_conf.recovery_mil_sec ||
                    ((this._energy_time +=
                      r.GameSetting.energy_conf.recovery_mil_sec),
                    (this._energy += 1),
                    d.LocalData.setValue('energy_time', this._energy_time),
                    d.LocalData.setValue('energy', this._energy),
                    c.App.event.emit(p.default.On_Engery_Change),
                    this.recoveryEnergy())
                  );
          }),
          (_.prototype.getSkinVideoNum = function (t, e) {
            return this._skin_videos[t + '_' + e] || 0;
          }),
          (_.prototype.addSkinVideoNum = function (t, e) {
            var o, i;
            (i = t + '_' + e),
              (o = this._skin_videos[i] || 0),
              (this._skin_videos[i] = o += 1),
              d.LocalData.setValue('skin_videos', this._skin_videos);
          }),
          (_.prototype.useEnergy = function (t) {
            return (
              f.d('=====useEnergy======', t),
              0 == r.GameSetting.is_use_energy ||
                ((t = t || r.GameSetting.energy_conf.use_value),
                !(
                  this._energy < t ||
                  ((this._energy -= t),
                  d.LocalData.setValue('energy', this._energy),
                  this._energy < r.GameSetting.energy_conf.default_value &&
                    0 == this._energy_time &&
                    ((this._energy_time = Date.now()),
                    d.LocalData.setValue('energy_time', this._energy_time)),
                  c.App.event.emit(p.default.On_Engery_Change),
                  0)
                ))
            );
          }),
          (_.prototype.addEnergy = function (t) {
            (this._energy += t),
              f.d('===UserData========', this._energy),
              d.LocalData.setValue('energy', this._energy),
              this._energy >= r.GameSetting.energy_conf.default_value &&
                ((this._energy_time = 0),
                d.LocalData.setValue('energy_time', this._energy_time)),
              c.App.event.emit(p.default.On_Engery_Change);
          }),
          (_.prototype.addProp = function (t, e, o) {
            switch ((void 0 === o && (o = !1), t)) {
              case i.PropItemType.Refresh:
                (this._sxNum += e),
                  d.LocalData.setValue('sxNum', this._sxNum),
                  (this._dl_first = 1),
                  d.LocalData.setValue('dl_first', this._dl_first);
                break;
              case i.PropItemType.Tips:
                (this._tsNum += e),
                  d.LocalData.setValue('tsNum', this._tsNum),
                  (this._ts_first = 1),
                  d.LocalData.setValue('ts_first', this._ts_first);
                break;
              case i.PropItemType.Time:
                (this._jsNum += e), d.LocalData.setValue('jsNum', this._jsNum);
                break;
              case i.PropItemType.Lx:
                (this._lxNum += e), d.LocalData.setValue('lxNum', this._lxNum);
                break;
              case i.PropItemType.Dl:
                (this._dlNum += e), d.LocalData.setValue('dlNum', this._dlNum);
                break;
              case i.PropItemType.Hb:
                (this._hbNum += e), d.LocalData.setValue('hbNum', this._hbNum);
                break;
              case i.PropItemType.Kp:
                (this._kpNum += e), d.LocalData.setValue('kpNum', this._kpNum);
            }
            o && h.EffectMgr.showTips2(t, e),
              c.App.event.emit(p.default.On_Prop_Num_Change);
          }),
          (_.prototype.useProp = function (t, e) {
            var o, a, r, l, u, h, _, f, m, y;
            switch ((void 0 === e && (e = 1), (a = !1), t)) {
              case i.PropItemType.Refresh:
                this._sxNum >= e &&
                  ((this._sxNum -= e),
                  d.LocalData.setValue('sxNum', this._sxNum),
                  (a = !0),
                  s.GameCtrl.mode == i.GameMode.Normal &&
                    null != (h = c.App.track) &&
                    h.trackEvent('refresh_' + this.ptLv),
                  s.GameCtrl.mode == i.GameMode.Level &&
                    null != (f = c.App.track) &&
                    f.trackEvent('cg_refresh_' + this.cgLv),
                  i.GameMode.Endless == s.GameCtrl.mode) &&
                  null != (l = c.App.track) &&
                  l.trackEvent(n.TrackEnums.ed_refresh);
                break;
              case i.PropItemType.Tips:
                this._tsNum >= e &&
                  ((this._tsNum -= e),
                  d.LocalData.setValue('tsNum', this._tsNum),
                  (a = !0),
                  s.GameCtrl.mode == i.GameMode.Normal &&
                    null != (_ = c.App.track) &&
                    _.trackEvent('tips_' + this.ptLv),
                  i.GameMode.Endless == s.GameCtrl.mode) &&
                  null != (m = c.App.track) &&
                  m.trackEvent(n.TrackEnums.ed_tips);
                break;
              case i.PropItemType.Time:
                this._jsNum >= e &&
                  ((this._jsNum -= e),
                  d.LocalData.setValue('jsNum', this._jsNum),
                  (a = !0),
                  s.GameCtrl.mode == i.GameMode.Normal &&
                    null != (y = c.App.track) &&
                    y.trackEvent('delay_' + this.ptLv),
                  s.GameCtrl.mode == i.GameMode.Level &&
                    null != (r = c.App.track) &&
                    r.trackEvent('cg_delay_' + this.cgLv),
                  i.GameMode.Endless == s.GameCtrl.mode) &&
                  null != (o = c.App.track) &&
                  o.trackEvent(n.TrackEnums.ed_delay);
                break;
              case i.PropItemType.Lx:
                this._lxNum >= e &&
                  ((this._lxNum -= e),
                  d.LocalData.setValue('lxNum', this._lxNum),
                  (a = !0),
                  s.GameCtrl.mode == i.GameMode.Level) &&
                  null != (u = c.App.track) &&
                  u.trackEvent('cg_tips_' + this.cgLv);
                break;
              case i.PropItemType.Dl:
                this._dlNum >= e &&
                  ((this._dlNum -= e),
                  d.LocalData.setValue('dlNum', this._dlNum),
                  (a = !0));
                break;
              case i.PropItemType.Hb:
                this._hbNum >= e &&
                  ((this._hbNum -= e),
                  d.LocalData.setValue('hbNum', this._hbNum),
                  (a = !0));
                break;
              case i.PropItemType.Kp:
                this._kpNum >= e &&
                  ((this._kpNum -= e),
                  d.LocalData.setValue('kpNum', this._kpNum),
                  (a = !0));
            }
            return c.App.event.emit(p.default.On_Prop_Num_Change), a;
          }),
          (_.prototype.signIn = function (t, e) {
            var o;
            switch ((void 0 === e && (e = 1), (o = ''), t.type)) {
              case 1:
                this.addProp(i.PropItemType.Refresh, t.value * e),
                  (o =
                    '\u7b7e\u5230\u6210\u529f\uff0c\u83b7\u5f97\u6253\u4e71\u9053\u5177+' +
                    t.value * e);
                break;
              case 2:
                this.addProp(i.PropItemType.Tips, t.value * e),
                  (o =
                    '\u7b7e\u5230\u6210\u529f\uff0c\u83b7\u5f97\u63d0\u793a\u9053\u5177+' +
                    t.value * e);
                break;
              case 3:
                this.addProp(i.PropItemType.Time, t.value * e),
                  (o =
                    '\u7b7e\u5230\u6210\u529f\uff0c\u83b7\u5f97\u52a0\u65f6\u9053\u5177+' +
                    t.value * e);
                break;
              case 4:
                this.addEnergy(t.value * e),
                  (o =
                    '\u7b7e\u5230\u6210\u529f\uff0c\u83b7\u5f97\u4f53\u529b+' +
                    t.value * e);
                break;
              case 5:
                a.SkinData.unlockRandomTheme() &&
                  (o =
                    '\u7b7e\u5230\u6210\u529f\uff0c\u83b7\u5f97\u65b0\u4e3b\u9898');
                break;
              case 6:
                this.addProp(i.PropItemType.Lx, t.value * e),
                  (o =
                    '\u7b7e\u5230\u6210\u529f\uff0c\u83b7\u5f97\u8fde\u6d88\u9053\u5177+' +
                    t.value * e);
                break;
              case 7:
                this.addProp(i.PropItemType.Dl, t.value * e),
                  (o =
                    '\u7b7e\u5230\u6210\u529f\uff0c\u83b7\u5f97\u6253\u4e71\u9053\u5177+' +
                    t.value * e);
                break;
              case 8:
                this.addProp(i.PropItemType.Hb, t.value * e),
                  (o =
                    '\u7b7e\u5230\u6210\u529f\uff0c\u83b7\u5f97\u56de\u9000\u9053\u5177+' +
                    t.value * e);
                break;
              case 9:
                this.addProp(i.PropItemType.Kp, t.value * e),
                  (o =
                    '\u7b7e\u5230\u6210\u529f\uff0c\u83b7\u5f97\u7a7a\u74f6\u9053\u5177+' +
                    t.value * e);
            }
            (this._sign_date = Date.now()),
              (this._sign_num += 1),
              d.LocalData.setValue('sign_date', this._sign_date),
              d.LocalData.setValue('sign_num', this._sign_num),
              o && h.EffectMgr.showTips(o),
              c.App.event.emit(p.default.On_Sign_Update);
          }),
          (_.prototype.addScore = function (t) {
            t == i.GameMode.Normal
              ? ((this._ptScore += 1),
                d.LocalData.setValue('ptScore', this._ptScore))
              : t == i.GameMode.Level
                ? ((this._cgScore += 1),
                  d.LocalData.setValue('cgScore', this._cgScore),
                  cc.sys.platform == cc.sys.WECHAT_GAME &&
                    wx.setUserCloudStorage &&
                    wx.setUserCloudStorage({
                      KVDataList: [
                        { key: 'pt_score', value: this._cgScore + '' },
                      ],
                    }),
                  c.App.platform.postMessage({
                    cmd: 'update',
                    value: this._cgScore + '',
                  }))
                : t == i.GameMode.Endless &&
                  ((this._wjScore += 1),
                  d.LocalData.setValue('wjScore', this._wjScore),
                  cc.sys.platform == cc.sys.WECHAT_GAME) &&
                  wx.setUserCloudStorage &&
                  wx.setUserCloudStorage({
                    KVDataList: [
                      { key: 'wj_score', value: this._wjScore + '' },
                    ],
                  }),
              c.App.event.emit(p.default.On_Score_Change);
          }),
          (_.prototype.pass = function (t) {
            t == i.GameMode.Normal
              ? ((this._ptLv += 1),
                d.LocalData.setValue('ptLv', this._ptLv),
                l.NetMgr.upCustoms())
              : t == i.GameMode.Level &&
                ((this._cgLv += 1),
                d.LocalData.setValue('cgLv', this._cgLv),
                o.UserData.addRank(4));
          }),
          (_.prototype.setCgLv = function (t) {
            (this._cgLv = t), d.LocalData.setValue('cgLv', this._cgLv);
          }),
          (_.prototype.getDayShareReward = function () {
            (this._day_share = Date.now()),
              d.LocalData.setValue('day_share', this._day_share),
              this.addProp(i.PropItemType.Refresh, 1);
          }),
          (_.prototype.getFavoriteReward = function () {
            var t, e, o, n;
            switch (
              ((this._favorite = Date.now()),
              d.LocalData.setValue('favorite', this._favorite),
              (t =
                (null == (n = r.GameSetting.tj_reward) ? void 0 : n.type) || 1),
              (e =
                (null == (o = r.GameSetting.tj_reward) ? void 0 : o.value) ||
                1),
              t)
            ) {
              case i.PropItemType.Refresh:
              case i.PropItemType.Tips:
              case i.PropItemType.Time:
              case i.PropItemType.Dl:
              case i.PropItemType.Hb:
              case i.PropItemType.Kp:
                this.addProp(t, e);
                break;
              case 100:
                this.addEnergy(e);
            }
          }),
          (_.prototype.getInviteReward = function () {
            (this._inv_num += 1),
              d.LocalData.setValue('inv_num', this._inv_num),
              this.addProp(i.PropItemType.Refresh, 1),
              this.addProp(i.PropItemType.Lx, 1),
              this.addProp(i.PropItemType.Time, 1);
          }),
          (u = _),
          (o.UserData = new u()),
          cc._RF.pop();
      },
      {
        '../../../RxManager/MyLog': void 0,
        './App': 'App',
        './EffectMgr': 'EffectMgr',
        './EventTypes': 'EventTypes',
        './GameCtrl': 'GameCtrl',
        './GameEnums': 'GameEnums',
        './GameSetting': 'GameSetting',
        './LocalData': 'LocalData',
        './NetMgr': 'NetMgr',
        './SkinData': 'SkinData',
        './TrackEnums': 'TrackEnums',
      },
    ],
    Utils: [
      function (t, e, o) {
        'use strict';
        var i, n;
        cc._RF.push(e, '91ae3AnG4JM94Q+hcBvR3Ep', 'Utils'),
          ((n = function () {}).range = function (t, e) {
            return Math.floor(Math.random() * (t - e) + e);
          }),
          (n.randByList = function (t, e, o) {
            var i, n, a, r;
            return (
              void 0 === e && (e = !1),
              void 0 === o && (o = 0),
              (r = Math.floor(Math.random() * t.length)),
              e
                ? ((n = 2 * o + 1),
                  (i = r - o) < 0
                    ? (i = 0)
                    : i > t.length - n && (i = t.length - n),
                  (a = t.splice(i, n))[Math.floor((a.length - 1) / 2)])
                : t[r]
            );
          }),
          (n.getTwoPosLen = function (t, e) {
            return Math.sqrt(Math.pow(t.x - e.x, 2) + Math.pow(t.y - e.y, 2));
          }),
          (n.clone = function (t) {
            if (t && t.constructor === Object)
              for (
                var e = new t.constructor(), o = 0, i = Object.keys(t);
                o < i.length;
                o++
              ) {
                var n;
                e[(n = i[o])] = this.clone(t[n]);
              }
            else if (t && t.constructor === Array) {
              e = [];
              for (var a = 0; a < t.length; a++) e.push(this.clone(t[a]));
            } else e = t;
            return e;
          }),
          (n.randByArea = function (t, e) {
            var o;
            return (
              void 0 === e && (e = !1),
              (o = Math.random() * (t[1] - t[0]) + t[0]),
              e ? Math.floor(o) : o
            );
          }),
          (n.randomRangeInt = function (t, e) {
            var o;
            return (o = Math.random()), t + Math.floor(o * (e - t));
          }),
          (n.shuffle = function (t) {
            if (null != t && 0 != t.length)
              for (var e = t.length, o = 0; o < e; o++) {
                var i, n;
                (i = this.randomRangeInt(0, e)),
                  (n = t[o]),
                  (t[o] = t[i]),
                  (t[i] = n);
              }
            return t;
          }),
          (n.qClone = function (t) {
            var e;
            return (
              (e = []),
              t.forEach(function (t) {
                e.push(t);
              }),
              e
            );
          }),
          (n.formatSecToStr = function (t) {
            var e, o, i;
            return (
              (i = (t = void 0 === t ? 0 : t) % 60),
              (e = Math.floor((t % 3600) / 60)),
              (0 < (o = Math.floor(t / 60 / 60)) ? o + ':' : '') +
                e.toString().padStart(2, '0') +
                ':' +
                i.toString().padStart(2, '0')
            );
          }),
          (n.intervalDay = function (t, e) {
            var o, i, n, a;
            return (
              (o = new Date(t)),
              (n = new Date(
                o.getFullYear(),
                o.getMonth(),
                o.getDate(),
              ).getTime()),
              (a = new Date(e)),
              (i =
                (new Date(
                  a.getFullYear(),
                  a.getMonth(),
                  a.getDate(),
                ).getTime() -
                  n) /
                1e3),
              Math.ceil(i / 24 / 60 / 60)
            );
          }),
          (n.getChineseNum = function (t) {
            return [
              '\u4e00',
              '\u4e8c',
              '\u4e09',
              '\u56db',
              '\u4e94',
              '\u516d',
              '\u4e03',
              '\u516b',
              '\u4e5d',
              '\u5341',
            ][(t - 1) % 10];
          }),
          (n.toChineseBig = function (t) {
            var e, o;
            if (
              ((o = [
                '\u96f6',
                '\u4e00',
                '\u4e8c',
                '\u4e09',
                '\u56db',
                '\u4e94',
                '\u516d',
                '\u4e03',
                '\u516b',
                '\u4e5d',
              ]),
              (e = [
                '',
                '\u5341',
                '\u767e',
                '\u5343',
                '\u4e07',
                '\u5341',
                '\u767e',
                '\u5343',
                '\u4ebf',
                '\u5341',
                '\u767e',
                '\u5343',
                '\u4e07',
                '\u5341',
                '\u767e',
                '\u5343',
                '\u4ebf',
              ]),
              !t || isNaN(t))
            )
              return '\u96f6';
            for (
              var i = t.toString().split(''), n = '', a = 0;
              a < i.length;
              a++
            ) {
              var r;
              (r = i.length - 1 - a), (n = e[a] + n), (n = o[i[r]] + n);
            }
            return (n = (n = (n = (n = (n = n
              .replace(/\u96f6(\u5343|\u767e|\u5341)/g, '\u96f6')
              .replace(/\u5341\u96f6/g, '\u5341')).replace(
              /\u96f6+/g,
              '\u96f6',
            ))
              .replace(/\u96f6\u4ebf/g, '\u4ebf')
              .replace(/\u96f6\u4e07/g, '\u4e07')).replace(
              /\u4ebf\u4e07/g,
              '\u4ebf',
            )).replace(/\u96f6+$/, '')).replace(/^\u4e00\u5341/g, '\u5341');
          }),
          (n.executePreFrame = function (t, e, o) {
            return (
              void 0 === o && (o = 0.016666666666666666),
              new Promise(function (i) {
                var n, a;
                (a = function () {
                  var t;
                  if (((t = new Date().getTime()), e && e())) i(!1);
                  else
                    for (var r = n.next(); ; r = n.next()) {
                      if (null == r || r.done) return i(!0);
                      if (new Date().getTime() - t > o)
                        return setTimeout(function () {
                          a();
                        }, 1e3 * o);
                    }
                }),
                  (n = t),
                  a();
              })
            );
          }),
          (n.executeFrame = function (t, e, o, i) {
            return (
              void 0 === i && (i = 0.016666666666666666),
              __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (n) {
                  switch (n.label) {
                    case 0:
                      return [
                        4,
                        this.executePreFrame(this.getItemGenerator(t, e), o, i),
                      ];
                    case 1:
                      return n.sent(), [2];
                  }
                });
              })
            );
          }),
          (n.getItemGenerator = function (t, e) {
            var o;
            return __generator(this, function (i) {
              switch (i.label) {
                case 0:
                  (o = 0), (i.label = 1);
                case 1:
                  return o < t ? [4, e(o)] : [3, 4];
                case 2:
                  i.sent(), (i.label = 3);
                case 3:
                  return o++, [3, 1];
                case 4:
                  return [2];
              }
            });
          }),
          (n.randWeights = function (t) {
            var e;
            (e = 0),
              t.forEach(function (t) {
                return (e += t);
              });
            for (var o = Math.random() * e, i = 0; i < t.length; i++)
              if ((o -= t[i]) < 0) return i;
          }),
          (n.randFromList = function (t, e) {
            return this.randSortList(t).slice(0, e);
          }),
          (n.randSortList = function (t) {
            return t.sort(function () {
              return Math.random() - 0.5;
            });
          }),
          (n.removeFromList = function (t, e) {
            var o;
            (o = t.indexOf(e)), t.splice(o, 1);
          }),
          (n.wait = function (t) {
            return (
              void 0 === t && (t = 1),
              new Promise(function (e) {
                setTimeout(function () {
                  e();
                }, 1e3 * t);
              })
            );
          }),
          (n.getTrueScale = function (t) {
            for (var e = t.scale; t.parent; ) e *= (t = t.parent).scale;
            return e;
          }),
          (n.checkPointInBox = function (t, e) {
            return (
              t.x < e.x + e.width / 2 &&
              t.x > e.x - e.width / 2 &&
              t.y < e.y + e.height / 2 &&
              t.y > e.y - e.height / 2
            );
          }),
          (n.cutStr = function (t, e) {
            var o, i;
            if (
              (void 0 === e && (e = 14),
              (o = ''),
              (i = t.length),
              t.replace(/[^\x00-\xff]/g, '**').length <= e)
            )
              return t;
            for (var n = 0, a = 0; n < i; n++) {
              var r;
              if (
                ((r = t.charAt(n)),
                /[\x00-\xff]/.test(r) ? a++ : (a += 2),
                !(a <= e))
              )
                return o;
              o += r;
            }
          }),
          (n.getRichArr = function (t) {
            for (
              var e = t.replace(/<.+?\/?>/g, '').split(''),
                o = [t],
                i = e.length;
              1 < i;
              i--
            ) {
              var n, a, r, s;
              (a = (r = o[e.length - i]).lastIndexOf(e[i - 1])),
                (n = r.slice(0, a)),
                (s = r.slice(a + 1, r.length)),
                o.push(n + s);
            }
            return o;
          }),
          (n.getRadianTwoPoint = function (t, e) {
            var o, i;
            return (o = e.x - t.x), (i = e.y - t.y), Math.atan2(i, o);
          }),
          (n.getAngelTwoPoint = function (t, e) {
            var o;
            return (o = this.getRadianTwoPoint(t, e)), this.getAngel(o);
          }),
          (n.getAngel = function (t) {
            return (180 * t) / Math.PI;
          }),
          (n.getRadian = function (t) {
            return (t / 180) * Math.PI;
          }),
          (n.getCirclePos = function (t, e, o) {
            var i, n;
            return (
              (i = t.x + e * Math.cos((o * Math.PI) / 180)),
              (n = t.y + e * Math.sin((o * Math.PI) / 180)),
              cc.v3(i, n)
            );
          }),
          (n.getIndexByWeight = function (t) {
            for (var e = 0, o = 0; o < t.length; o++) e += t[o].weight;
            var i = Math.ceil(Math.random() * e);
            for (o = 0; o < t.length; o++)
              if (i >= (e -= t[o].weight)) return o;
          }),
          (n.randList = function (t, e) {
            return (
              t.sort(function () {
                return Math.random() - 0.5;
              }),
              e ? t.slice(0, e) : t
            );
          }),
          (i = n),
          (o.default = i),
          cc._RF.pop();
      },
      {},
    ],
    WXUma: [
      function (t, e, o) {
        'use strict';
        var i, n, a;
        cc._RF.push(e, '58965pHEC9D75k8Nu0e8WRr', 'WXUma'),
          (o.WxUma = void 0),
          (n = t('TrackBase').TrackBase),
          (a = function () {
            return (null !== n && n.apply(this, arguments)) || this;
          }),
          __extends(a, n),
          (a.prototype.setOpenid = function (t) {
            cc.sys.platform == cc.sys.WECHAT_GAME && wx.uma.setOpenid(t),
              n.prototype.setOpenid.call(this, t);
          }),
          (a.prototype.trackEvent = function (t) {
            t &&
              ((t = this.prefix(t)),
              cc.sys.platform == cc.sys.WECHAT_GAME && wx.uma.trackEvent(t),
              n.prototype.trackEvent.call(this, t));
          }),
          (a.prototype.onStart = function (t) {
            cc.sys.platform == cc.sys.WECHAT_GAME &&
              wx.uma &&
              wx.uma.stage &&
              wx.uma.stage.onStart({
                stageId: t + '',
                stageName: '\u7b2c' + t + '\u5173',
              }),
              n.prototype.onStart.call(this, t);
          }),
          (a.prototype.onEnd = function (t, e) {
            var o;
            cc.sys.platform == cc.sys.WECHAT_GAME &&
              null != (o = wx.uma.stage) &&
              o.onEnd({ stageId: t, stageName: '\u5173\u5361' + t, event: e }),
              n.prototype.onEnd.call(this, t, e);
          }),
          (a.prototype.onRunning = function (t, e) {
            var o;
            cc.sys.platform == cc.sys.WECHAT_GAME &&
              (console.log('\u4f7f\u7528\u9053\u5177', t, e),
              null != (o = wx.uma.stage)) &&
              o.onRunning({
                stageId: 'stage' + t,
                stageName: '\u5173\u5361' + t,
                event: 'tools',
                params: { itemName: e },
              });
          }),
          (i = a),
          (o.WxUma = i),
          cc._RF.pop();
      },
      { TrackBase: 'TrackBase' },
    ],
    WarnView: [
      function (t, e, o) {
        'use strict';
        var i, n, a, r, s, c, l, p, u;
        cc._RF.push(e, '50330/d1EVBx4+UeKP1R0ur', 'WarnView'),
          (l = t('./App')),
          (c = t('./BasePanel')),
          (s = t('./UIHelper')),
          (n = (a = cc._decorator).ccclass),
          (r = a.property),
          (p = c.default),
          (u = function () {
            var t;
            return (
              ((t = (null !== p && p.apply(this, arguments)) || this).btnOk =
                null),
              (t.btnNo = null),
              t
            );
          }),
          __extends(u, p),
          (u.prototype.initEvent = function () {
            this.on(this.btnOk, this.onBtnOkClick, this),
              this.on(this.btnNo, this.onBtnCloseClick, this);
          }),
          (u.prototype.onBtnOkClick = function () {
            var t;
            null != (t = this._viewData) && t.callback({ confirm: !0 }),
              this.close();
          }),
          (u.prototype.onBtnCloseClick = function () {
            this.close();
          }),
          (u.prototype.close = function () {
            l.App.gui.closeUI(s.UIEnum.WarnView);
          }),
          __decorate([r(cc.Node)], u.prototype, 'btnOk', void 0),
          __decorate([r(cc.Node)], u.prototype, 'btnNo', void 0),
          (i = __decorate([n], u)),
          (o.default = i),
          cc._RF.pop();
      },
      { './App': 'App', './BasePanel': 'BasePanel', './UIHelper': 'UIHelper' },
    ],
    WinView: [
      function (t, e, o) {
        'use strict';
        cc._RF.push(e, 'a1645IbRahGGpcjTIc4dbMg', 'WinView'),
          t('../../../RxManager/AdManager').default;
        var i,
          n,
          a,
          r,
          s,
          c,
          l,
          p,
          u,
          d,
          h,
          _,
          f,
          m,
          y,
          g,
          v,
          b = t('../../../RxManager/RxUtls').default;
        (d = t('./App')),
          (m = t('./BasePanel')),
          (y = t('./GameCtrl')),
          (l = t('./GameSetting')),
          (f = t('./UserData')),
          (u = t('./GameEnums')),
          (c = t('./EventTypes')),
          (n = t('./UIHelper')),
          (s = t('./EffectMgr')),
          (a = t('./GameMgr')),
          (p = t('./ResUtils')),
          (r = (h = cc._decorator).ccclass),
          (_ = h.property),
          (g = m.default),
          (v = function () {
            var t;
            return (
              ((t = (null !== g && g.apply(this, arguments)) || this).panel =
                null),
              (t.title = null),
              (t.btnNext = null),
              (t.btnShare = null),
              (t.btnDouble = null),
              (t.doubleLab = null),
              (t.goldLab = null),
              (t.arrow = null),
              (t.cd = null),
              (t.light = null),
              (t.iconSp = null),
              (t.pzSpf = null),
              (t.nameLab = null),
              (t.isPause = !1),
              (t.time = 0),
              (t.time_max = 0.6),
              (t.dir = 1),
              (t.rate = 1),
              (t.current_time = null),
              (t.rateArr = [2, 3, 5, 3, 2]),
              t
            );
          }),
          __extends(v, g),
          (v.prototype.onEnable = function () {
            this.updateView(),
              d.App.sound.playEffect(p.ResUtils.Audios.win, u.BundleType.Game),
              a.GameMgr.showInterstitialAd();
          }),
          (v.prototype.updateView = function () {
            var t, e;
            (this.isPause = !1),
              (this.time = Math.random() * this.time_max),
              (this.dir = 1),
              y.GameCtrl.mode == u.GameMode.Level &&
              0 < (t = f.UserData.getNewCollectID())
                ? ((e = l.GameSetting.collect_conf[t - 1]),
                  (this.nameLab.string = '\u606d\u559c\u83b7\u5f97' + e.name),
                  (this.nameLab.node.active = !0),
                  (this.iconSp.node.angle = 10),
                  f.UserData.addCollect(t),
                  d.App.res.setSprite(
                    this.iconSp,
                    'res/collect/' + e.icon,
                    u.BundleType.Game,
                  ))
                : ((this.nameLab.node.active = !1),
                  (this.iconSp.node.angle = 0),
                  (this.iconSp.spriteFrame = this.pzSpf)),
              (this.current_time.string = b.getCurrentTime());
          }),
          (v.prototype.playIn = function () {
            return __awaiter(this, void 0, void 0, function () {
              return __generator(this, function (t) {
                switch (t.label) {
                  case 0:
                    return [4, s.EffectMgr.viewOpenAnim(this.panel, 1)];
                  case 1:
                    return t.sent(), g.prototype.playIn.call(this), [2];
                }
              });
            });
          }),
          (v.prototype.initEvent = function () {
            this.on(this.btnNext, this.onBtnNextClick, this),
              this.on(this.btnShare, this.onBtnShareClick, this),
              this.on(this.btnDouble, this.onBtnDoubleClick, this);
          }),
          (v.prototype.update = function (t) {
            var e;
            --this.light.angle,
              this.isPause ||
                (this.time >= this.time_max
                  ? (this.dir = -1)
                  : this.time <= 0 && (this.dir = 1),
                (this.time += this.dir * t),
                (e = (this.time / this.time_max) * 640 - 320),
                (this.arrow.position = cc.v3(e, 45)),
                this.udpateGold());
          }),
          (v.prototype.udpateGold = function () {
            var t;
            (t = cc.misc.clampf(
              Math.floor((this.time / this.time_max) * this.rateArr.length),
              0,
              this.rateArr.length - 1,
            )),
              (this.rate = this.rateArr[t]),
              (this.goldLab.string = l.GameSetting.pass_gold.toString()),
              (this.doubleLab.string = (
                l.GameSetting.pass_gold * this.rate
              ).toString());
          }),
          (v.prototype.getGold = function () {
            var t, e;
            (t = cc.misc.clampf(
              Math.floor((this.time / this.time_max) * this.rateArr.length),
              0,
              this.rateArr.length - 1,
            )),
              (this.rate = this.rateArr[t]),
              (e = Math.floor(l.GameSetting.pass_gold * this.rate)),
              f.UserData.addGold(e);
          }),
          (v.prototype.onBtnNextClick = function () {
            (this.isPause = !0),
              d.App.gui.isLock(!0),
              f.UserData.addGold(l.GameSetting.pass_gold),
              this.scheduleOnce(function () {
                d.App.gui.isLock(!1),
                  d.App.gui.closeUI(n.UIEnum.WinView),
                  d.App.event.emit(c.default.On_Next_Level);
              }, 0.5);
          }),
          (v.prototype.onBtnDoubleClick = function () {
            var t;
            return __awaiter(this, void 0, void 0, function () {
              return __generator(this, function (e) {
                switch (e.label) {
                  case 0:
                    return (this.isPause = !0), [4, a.GameMgr.showVideoAd()];
                  case 1:
                    return (
                      1 == e.sent()
                        ? (d.App.gui.isLock(!0),
                          this.getGold(),
                          null != (t = d.App.track) &&
                            t.trackEvent('cg_gold_vd_' + (f.UserData.cgLv - 1)),
                          this.scheduleOnce(function () {
                            d.App.gui.isLock(!1),
                              d.App.gui.closeUI(n.UIEnum.WinView),
                              d.App.event.emit(c.default.On_Next_Level);
                          }, 0.5))
                        : (this.isPause = !1),
                      [2]
                    );
                }
              });
            });
          }),
          (v.prototype.onBtnShareClick = function () {
            return __awaiter(this, void 0, void 0, function () {
              return __generator(this, function () {
                return d.App.platform.share({}), [2];
              });
            });
          }),
          __decorate([_(cc.Node)], v.prototype, 'panel', void 0),
          __decorate([_(cc.Node)], v.prototype, 'title', void 0),
          __decorate([_(cc.Node)], v.prototype, 'btnNext', void 0),
          __decorate([_(cc.Node)], v.prototype, 'btnShare', void 0),
          __decorate([_(cc.Node)], v.prototype, 'btnDouble', void 0),
          __decorate([_(cc.Label)], v.prototype, 'doubleLab', void 0),
          __decorate([_(cc.Label)], v.prototype, 'goldLab', void 0),
          __decorate([_(cc.Node)], v.prototype, 'arrow', void 0),
          __decorate([_(cc.Node)], v.prototype, 'cd', void 0),
          __decorate([_(cc.Node)], v.prototype, 'light', void 0),
          __decorate([_(cc.Sprite)], v.prototype, 'iconSp', void 0),
          __decorate([_(cc.SpriteFrame)], v.prototype, 'pzSpf', void 0),
          __decorate([_(cc.Label)], v.prototype, 'nameLab', void 0),
          __decorate([_(cc.Label)], v.prototype, 'current_time', void 0),
          (i = __decorate([r], v)),
          (o.default = i),
          cc._RF.pop();
      },
      {
        '../../../RxManager/AdManager': void 0,
        '../../../RxManager/RxUtls': void 0,
        './App': 'App',
        './BasePanel': 'BasePanel',
        './EffectMgr': 'EffectMgr',
        './EventTypes': 'EventTypes',
        './GameCtrl': 'GameCtrl',
        './GameEnums': 'GameEnums',
        './GameMgr': 'GameMgr',
        './GameSetting': 'GameSetting',
        './ResUtils': 'ResUtils',
        './UIHelper': 'UIHelper',
        './UserData': 'UserData',
      },
    ],
    WxAPI: [
      function (t, e, o) {
        'use strict';
        var i, n, a, r, s, c, l, p, u, d;
        cc._RF.push(e, 'e6be1hyp2FKKpzKB0UsdmK9', 'WxAPI'),
          (n = t('./EventTypes')),
          (r = t('./App')),
          (c = t('./ApiBase')),
          (a = t('./WxBannerAd')),
          (p = t('./WxInterstitialAd')),
          (s = t('./WxRewardVideoAd')),
          (l = t('./WxShare')),
          (u = c.default),
          (d = function () {
            var t, e, o;
            return (
              ((o = u.call(this) || this).phoneRatio = 1),
              (o.remote_url = ''),
              (o.host_url = ''),
              (o.log_url = ''),
              (o._isLoading = !1),
              (o._failFunc = null),
              (o._bannerAd = null),
              (o._interstitialAd = null),
              (o._videoAd = new s.default()),
              (o.clubButton = null),
              (o.openCustomerService = function (t) {
                cc.sys.platform == cc.sys.WECHAT_GAME &&
                  wx.openCustomerServiceConversation &&
                  wx.openCustomerServiceConversation(t || {});
              }),
              (o.btnAuthorize = null),
              (o._canVibrate = !0),
              (o.postMessage = function (t) {
                cc.sys.platform == cc.sys.WECHAT_GAME &&
                  wx.getOpenDataContext &&
                  (console.log('postMessage', JSON.stringify(t)),
                  wx.getOpenDataContext().postMessage(t));
              }),
              (o.wxShare = new l.default()),
              o.onShow(),
              (t = cc.view.getFrameSize()),
              (e = cc.winSize),
              (o.phoneRatio = e.width / t.width),
              console.log('WxAPI api', o.phoneRatio, t, e),
              o
            );
          }),
          __extends(d, u),
          (d.prototype.login = function () {
            var t, e;
            (e = this),
              this.setKeepScreenOn(!0),
              ((t = Object.create({})).success = function (t) {
                r.App.event.emit(n.default.GET_LOGIN_CODE, { code: t.code });
              }),
              (t.fail = function (t) {
                console.log('login fail', t), e.login();
              }),
              wx.login(t);
          }),
          (d.prototype.onShow = function () {
            var t, e, o, i;
            cc.sys.platform == cc.sys.WECHAT_GAME &&
              wx.onShow &&
              (wx.onShow(function (t) {
                r.App.event.emit(n.default.USER_SHARE),
                  r.App.sound.resumeMusic(),
                  console.log('wx onShow ____', t),
                  t && (t.query, t.referrerInfo, t.scene),
                  r.App.event.emit(n.default.ON_SHOW);
              }),
              wx.showShareMenu &&
                wx.showShareMenu({
                  withShareTicket: !0,
                  menus: ['shareAppMessage', 'shareTimeline'],
                }),
              (t = wx.getLaunchOptionsSync())) &&
              (t.scene,
              (e = t.query),
              (i = void 0 === (o = t.referrerInfo) ? null : o),
              console.log('launchOption', JSON.stringify(e), i));
          }),
          (d.prototype.getLaunchOptionsSync = function () {
            return cc.sys.platform == cc.sys.WECHAT_GAME &&
              wx.getLaunchOptionsSync
              ? wx.getLaunchOptionsSync()
              : null;
          }),
          (d.prototype.getSystemInfoSync = function () {
            return cc.sys.platform == cc.sys.WECHAT_GAME && wx.getSystemInfoSync
              ? wx.getSystemInfoSync()
              : null;
          }),
          (d.prototype.showLoading = function (t) {
            var e, o, i, n, a;
            (e = this),
              void 0 === t && (t = {}),
              cc.sys.platform == cc.sys.WECHAT_GAME &&
                wx.showLoading &&
                !this._isLoading &&
                ((this._isLoading = !0),
                (n = t.title),
                (o = void 0 === (a = t.delay) ? 0 : a),
                (i = t.mask),
                wx.showLoading({
                  title: void 0 === n ? '\u52a0\u8f7d\u4e2d' : n,
                  mask: void 0 !== i && i,
                }),
                0 < o) &&
                setTimeout(function () {
                  e.hideLoading();
                }, o);
          }),
          (d.prototype.hideLoading = function () {
            cc.sys.platform == cc.sys.WECHAT_GAME &&
              wx.hideLoading &&
              ((this._isLoading = !1), wx.hideLoading());
          }),
          (d.prototype.initBanerAd = function (t) {
            this._bannerAd || (this._bannerAd = new a.default(t));
          }),
          (d.prototype.showBanner = function (t) {
            this.isBannerShow && this._bannerAd && this._bannerAd.show(t);
          }),
          (d.prototype.hideBanner = function () {
            this._bannerAd && this._bannerAd.hide();
          }),
          (d.prototype.destroyBanner = function () {
            this._bannerAd && this._bannerAd.destroy();
          }),
          Object.defineProperty(d.prototype, 'isBannerShow', {
            get: function () {
              return !0;
            },
            enumerable: !1,
            configurable: !0,
          }),
          (d.prototype.initInterstitialAd = function (t, e) {
            void 0 === e && (e = 31e3),
              (this._interstitialAd = new p.default()),
              this._interstitialAd.create(t, e);
          }),
          (d.prototype.showInterstitialAd = function () {
            this._interstitialAd && this._interstitialAd.show();
          }),
          (d.prototype.showVideoAd = function (t, e, o, i) {
            cc.sys.platform == cc.sys.WECHAT_GAME
              ? (console.log('[ \u89c6\u9891ID ] >', t),
                this._videoAd.showVideoAd({
                  adUnitId: t,
                  success: e,
                  fail: o,
                  error: i,
                }))
              : e && e();
          }),
          (d.prototype.showClubButton = function (t, e) {
            var o, i, a, s, c, l, p;
            cc.sys.platform == cc.sys.WECHAT_GAME &&
              wx.createGameClubButton &&
              (this.clubButton
                ? ((o = t.convertToWorldSpaceAR(cc.v2())),
                  (i = cc.winSize),
                  (a = t.width / this.phoneRatio),
                  (s = t.height / this.phoneRatio),
                  (c = o.x / this.phoneRatio - (a >> 1)),
                  (l = (i.height - o.y) / this.phoneRatio - (s >> 1) - 2),
                  (this.clubButton.style.left = c),
                  (this.clubButton.style.top = l))
                : (t.getBoundingBoxToWorld(),
                  (o = t.convertToWorldSpaceAR(cc.v2())),
                  cc.view.getFrameSize(),
                  (i = cc.winSize),
                  (a = t.width / this.phoneRatio),
                  (s = t.height / this.phoneRatio),
                  (c = o.x / this.phoneRatio - (a >> 1)),
                  (l = (i.height - o.y) / this.phoneRatio - (s >> 1) - 2),
                  ((p = Object.create({})).style = {
                    left: c,
                    top: l,
                    width: a,
                    height: s,
                    backgroundColor: '',
                    borderRadius: 10,
                  }),
                  (p.type = 'image'),
                  e.openlink && (p.openlink = e.openlink),
                  e.hasRedDot && (p.hasRedDot = e.hasRedDot),
                  e.image && (p.image = e.image),
                  console.log('[ createGameClubButton ] >', p),
                  (this.clubButton = wx.createGameClubButton(p)),
                  this.clubButton.onTap(function () {
                    console.log('\u70b9\u51fb\u670b\u53cb\u5708'),
                      r.App.event.emit(n.default.CLUB_BUTTON_CLICK);
                  })),
              console.log('[ this.clubButto ] >', this.clubButton),
              this.clubButton.show());
          }),
          (d.prototype.hideClubButton = function () {
            cc.sys.platform == cc.sys.WECHAT_GAME &&
              this.clubButton &&
              this.clubButton.hide();
          }),
          (d.prototype.onShareMessageToFriend = function (t) {
            cc.sys.platform == cc.sys.WECHAT_GAME &&
              wx.onShareMessageToFriend &&
              wx.onShareMessageToFriend(t);
          }),
          (d.prototype.navigateToMiniProgram = function (t) {
            return __awaiter(this, void 0, void 0, function () {
              var e, o, i;
              return __generator(this, function () {
                return (
                  cc.sys.platform == cc.sys.WECHAT_GAME &&
                    wx.navigateToMiniProgram &&
                    ((e = t.appId),
                    (o = t.path),
                    (i = t.extraData),
                    wx.navigateToMiniProgram({
                      appId: e,
                      path: o,
                      extraData: i,
                      success: function () {
                        console.log('[ \u8df3\u8f6c\u6210\u529f ] >', t.appId);
                      },
                      fail: function () {},
                    })),
                  [2]
                );
              });
            });
          }),
          (d.prototype.previewImage = function (t) {
            var e;
            cc.sys.platform == cc.sys.WECHAT_GAME &&
              wx.previewImage &&
              ((e = { urls: [t], current: t }),
              console.log('previewImage', t),
              wx.previewImage(e));
          }),
          (d.prototype.triggerGC = function () {
            cc.sys.platform == cc.sys.WECHAT_GAME &&
              wx.triggerGC &&
              wx.triggerGC();
          }),
          (d.prototype.createAuthorizeBtn = function (t, e, o) {
            var i, n, a, r, s, c, l, p;
            void 0 === e && (e = 0),
              cc.sys.platform == cc.sys.WECHAT_GAME &&
                wx.createUserInfoButton &&
                t &&
                ((this._failFunc = o),
                (i = t.getBoundingBoxToWorld()),
                (n = cc.view.getFrameSize()),
                (a = cc.winSize),
                console.log(i, n, a),
                (r = i.x / this.phoneRatio),
                (s = (a.height - i.y - i.height) / this.phoneRatio),
                (c = i.width / this.phoneRatio),
                (l = i.height / this.phoneRatio),
                Object.create({}),
                (p = {
                  type: 'text',
                  text: '',
                  style: {
                    left: r - e / 2,
                    top: s - e / 2,
                    width: c + e,
                    height: l + e,
                    lineHeight: 0,
                    backgroundColor: '',
                    textAlign: 'center',
                    fontSize: 16,
                    borderRadius: 4,
                  },
                }),
                this.btnAuthorize
                  ? ((this.btnAuthorize.style.left = r),
                    (this.btnAuthorize.style.top = s),
                    this.btnAuthorize.show())
                  : ((this.btnAuthorize = wx.createUserInfoButton(p)),
                    this.btnAuthorize.show(),
                    this.btnAuthorize.onTap(this.onTap.bind(this))));
          }),
          (d.prototype.removeAuthBtn = function () {
            this.btnAuthorize && this.btnAuthorize.hide();
          }),
          (d.prototype.onTap = function (t) {
            console.log('onTap res: ', t),
              t.userInfo
                ? (r.App.event.emit(n.default.USER_AUTH, t.userInfo),
                  this.removeAuthBtn(),
                  this.btnAuthorize.destroy(),
                  (this.btnAuthorize = null))
                : this._failFunc && this._failFunc(),
              (this._failFunc = null);
          }),
          (d.prototype.setKeepScreenOn = function (t) {
            void 0 === t && (t = !0),
              cc.sys.platform == cc.sys.WECHAT_GAME &&
                wx.setKeepScreenOn &&
                wx.setKeepScreenOn({ keepScreenOn: t });
          }),
          (d.prototype.requestSubscribeMessage = function (t) {
            cc.sys.platform == cc.sys.WECHAT_GAME &&
              wx.requestSubscribeMessage &&
              0 != t.tmplIds.length &&
              (console.log('\u8bf7\u6c42\u8ba2\u9605'),
              wx.requestSubscribeMessage(t));
          }),
          (d.prototype.setVibrateSetting = function (t) {
            this._canVibrate = t;
          }),
          (d.prototype.vibrateShort = function () {
            this._canVibrate &&
              cc.sys.platform == cc.sys.WECHAT_GAME &&
              wx.vibrateShort &&
              wx.vibrateShort({
                success: function () {},
                fail: function () {},
                complete: function () {},
              });
          }),
          (d.prototype.vibrateLong = function () {
            this._canVibrate &&
              cc.sys.platform == cc.sys.WECHAT_GAME &&
              wx.vibrateLong &&
              wx.vibrateLong({
                success: function () {},
                fail: function () {},
                complete: function () {},
              });
          }),
          (d.prototype.showToast = function (t) {
            console.log('\u63d0\u793a\uff1a', t.title),
              cc.sys.platform == cc.sys.WECHAT_GAME &&
                wx.showToast &&
                wx.showToast(t);
          }),
          (d.prototype.hideToast = function (t) {
            cc.sys.platform == cc.sys.WECHAT_GAME &&
              wx.hideToast &&
              wx.hideToast(t);
          }),
          (d.prototype.showModal = function (t) {
            console.log('\u63d0\u793a\uff1a', t.title),
              cc.sys.platform == cc.sys.WECHAT_GAME &&
                wx.showModal &&
                wx.showModal(t);
          }),
          (d.prototype.getWindowInfo = function () {
            return wx.getWindowInfo ? wx.getWindowInfo() : null;
          }),
          (d.prototype.getMenuButtonBoundingClientRect = function () {
            var t, e;
            return cc.sys.platform == cc.sys.WECHAT_GAME &&
              wx.getMenuButtonBoundingClientRect
              ? ((t = wx.getMenuButtonBoundingClientRect()),
                console.log('rect', t, this.phoneRatio),
                t.top ||
                  (t = {
                    width: 87,
                    height: 32,
                    top: 60,
                    bottom: 42,
                    left: 278,
                    right: 365,
                  }),
                (e = {
                  center: this.phoneRatio * (t.top + 0.5 * t.height),
                  top: t.top * this.phoneRatio,
                }),
                console.log(
                  '\u80f6\u56ca\u4f4d\u7f6e\uff1a',
                  JSON.stringify(e),
                ),
                e)
              : { center: 60, top: 10 };
          }),
          (d.prototype.exitMiniProgram = function () {
            return !(
              cc.sys.platform !== cc.sys.WECHAT_GAME ||
              !wx.exitMiniProgram ||
              (wx.exitMiniProgram(), 0)
            );
          }),
          (d.prototype.canShare = function () {
            return !0;
          }),
          (d.prototype.initShare = function (t, e) {
            this.wxShare.initShare(t, e);
          }),
          (d.prototype.share = function (t) {
            this.canShare() && this.wxShare.share(t);
          }),
          (d.prototype.shareForReward = function (t) {
            return __awaiter(this, void 0, void 0, function () {
              return __generator(this, function (e) {
                switch (e.label) {
                  case 0:
                    return [4, this.wxShare.shareForReward(t)];
                  case 1:
                    return [2, e.sent()];
                }
              });
            });
          }),
          (i = d),
          (o.default = i),
          cc._RF.pop();
      },
      {
        './ApiBase': 'ApiBase',
        './App': 'App',
        './EventTypes': 'EventTypes',
        './WxBannerAd': 'WxBannerAd',
        './WxInterstitialAd': 'WxInterstitialAd',
        './WxRewardVideoAd': 'WxRewardVideoAd',
        './WxShare': 'WxShare',
      },
    ],
    WxBannerAd: [
      function (t, e, o) {
        'use strict';
        var i, n, a, r;
        cc._RF.push(e, '66dbfxlH25GSICnib69xZgP', 'WxBannerAd'),
          ((a = function (t) {
            var e, o, n;
            (n = this),
              (this._ads = []),
              (this._index = 0),
              (this._banner = null),
              (this._bannerState = i.LOADING),
              (this.bannerRatio = -1),
              (this.readHight = 104),
              (this.onBannerError = function () {
                (n._bannerState = i.ERROE), n.destroy();
              }),
              (this.onBanneronLoad = function () {
                n._bannerState != i.HIDE && n._bannerState != i.DESTROY
                  ? (n._banner.show(),
                    (n._bannerState = i.SHOW),
                    console.warn('banner', n._banner.style))
                  : (n._bannerState = i.READY);
              }),
              (this.onBannerResize = function (t) {
                console.warn('banner reszie', t.width, t.height),
                  (n.readHight = Math.max(n.readHight, t.height));
              }),
              (this._ads = t),
              (o = cc.view.getFrameSize()),
              (e = cc.winSize),
              (this.bannerRatio = o.width / e.width);
          }).prototype.createAd = function (t) {
            var e, o, n;
            if (wx.createBannerAd && 0 != this._ads.length)
              return this._banner
                ? ((this._banner.style = t),
                  this._bannerState,
                  i.READY,
                  this._banner)
                : ((e = this._ads[this._index % this._ads.length]),
                  ((o = {}).adUnitId = e),
                  (o.style = t),
                  (this._bannerState = i.LOADING),
                  (n = wx.createBannerAd(o)).onError(this.onBannerError),
                  n.onLoad(this.onBanneronLoad),
                  n.onResize(this.onBannerResize),
                  n);
          }),
          (a.prototype.show = function (t) {
            var e, o, n, a, r, s, c;
            (e = cc.winSize),
              (r = cc.view.getFrameSize()),
              (o = void 0 === (c = t.top) ? e.height - 300 : c),
              (a = void 0 === (s = t.width) ? e.width * this.bannerRatio : s),
              (n = 0.5 * (r.width - a)),
              (o *= this.bannerRatio) + this.readHight > r.height ||
                ((this._banner = this.createAd({ top: o, width: a, left: n })),
                this._banner &&
                  this._bannerState == i.READY &&
                  (this._banner.show(), (this._bannerState = i.SHOW)));
          }),
          (a.prototype.hide = function () {
            this._banner &&
              (this._banner.hide(), cc.log('\u5e7f\u544a\u9690\u85cf')),
              (this._bannerState = i.HIDE);
          }),
          (a.prototype.destroy = function () {
            this._banner &&
              this._bannerState != i.LOADING &&
              this._bannerState != i.READY &&
              (this._banner.offError(this.onBannerError),
              this._banner.offLoad(this.onBanneronLoad),
              this._banner.offResize(this.onBannerResize),
              this._banner.destroy(),
              (this._banner = null),
              cc.log('\u5e7f\u544a\u9500\u6bc1')),
              (this._bannerState = i.DESTROY);
          }),
          (n = a),
          (o.default = n),
          ((r = i = i || {})[(r.LOADING = 0)] = 'LOADING'),
          (r[(r.READY = 1)] = 'READY'),
          (r[(r.SHOW = 2)] = 'SHOW'),
          (r[(r.HIDE = 3)] = 'HIDE'),
          (r[(r.ERROE = 4)] = 'ERROE'),
          (r[(r.DESTROY = 5)] = 'DESTROY'),
          cc._RF.pop();
      },
      {},
    ],
    WxInterstitialAd: [
      function (t, e, o) {
        'use strict';
        var i, n;
        cc._RF.push(e, '5d0b5Yx1/BOq7IMLiUbtHtD', 'WxInterstitialAd'),
          ((n = function () {
            (this.interstitialAd = null),
              (this.isReady = !1),
              (this.showSec = -1),
              (this.adUnitId = ''),
              (this.delayMs = 0),
              (this._id = 0);
          }).prototype.create = function (t, e) {
            var o, i;
            (i = this),
              void 0 === e && (e = 3e4),
              (this.adUnitId = t),
              (this.delayMs = e),
              (o = wx.createInterstitialAd({ adUnitId: t })),
              console.log('\u521b\u5efa\u63d2\u5c4f\u5e7f\u544a', t, e),
              o.onLoad(function () {
                console.log(
                  '\u63d2\u5c4f \u5e7f\u544a\u52a0\u8f7d\u6210\u529f',
                ),
                  (i.isReady = !0);
              }),
              o.onError(function (t) {
                console.log('\u63d2\u5c4f \u5e7f\u544a\u9519\u8bef', t),
                  (i.isReady = !1),
                  i.interstitialAd.destroy(),
                  (i.interstitialAd = null),
                  i.dealyCreate(e);
              }),
              o.onClose(function () {
                i.interstitialAd.destroy(),
                  (i.interstitialAd = null),
                  (i.showSec = Date.now()),
                  (i.isReady = !1),
                  console.log('\u63d2\u5c4f \u5e7f\u544a\u5173\u95ed'),
                  i.dealyCreate(e);
              }),
              (this.interstitialAd = o),
              (this.showSec = Date.now());
          }),
          (n.prototype.dealyCreate = function (t) {
            var e;
            (e = this),
              void 0 === t && (t = 3e4),
              clearTimeout(this._id),
              (this._id = setTimeout(function () {
                e.create(e.adUnitId, e.delayMs);
              }, t));
          }),
          (n.prototype.show = function () {
            var t, e;
            (t = this),
              this.isReady &&
                ((this.isReady = !1),
                console.log('\u5c55\u793a\u63d2\u5c4f\u5e7f\u544a'),
                null != (e = this.interstitialAd)) &&
                e.show().catch(function (e) {
                  console.log(
                    '\u63d2\u5c4f\u5e7f\u544a\u5c55\u793a\u5931\u8d25',
                    e,
                  ),
                    t.interstitialAd.destroy(),
                    (t.interstitialAd = null),
                    t.dealyCreate(t.delayMs);
                });
          }),
          (i = n),
          (o.default = i),
          cc._RF.pop();
      },
      {},
    ],
    WxRewardVideoAd: [
      function (t, e, o) {
        'use strict';
        var i, n, a, r;
        cc._RF.push(e, 'ee7f1yYK+dIVYeY4sOppRGm', 'WxRewardVideoAd'),
          (n = t('./EventTypes')),
          (i = t('./App')),
          ((r = function () {
            var t;
            (t = this),
              (this._rewardAd = null),
              (this.onSuccessCallBack = null),
              (this.onFailCallback = null),
              (this.onErrorCallback = null),
              (this.isInit = !1),
              (this.videoError = function (e) {
                console.log(
                  '\u89c6\u9891\u5931\u8d25\uff1a' + JSON.stringify(e),
                ),
                  t.onErrorCallback && t.onErrorCallback(e),
                  t.destroy();
              }),
              (this.videoLoad = function () {
                console.log('\u52a0\u8f7d\u89c6\u9891\u5b8c\u6210');
              }),
              (this.videoClose = function (e) {
                (e && e.isEnded) || void 0 === e
                  ? (console.log(
                      '\u6b63\u5e38\u64ad\u653e\u7ed3\u675f\uff0c\u53ef\u4ee5\u4e0b\u53d1\u6e38\u620f\u5956\u52b1',
                    ),
                    t.onSuccessCallBack && t.onSuccessCallBack(e))
                  : (console.log(
                      '\u64ad\u653e\u4e2d\u9014\u9000\u51fa\uff0c\u4e0d\u4e0b\u53d1\u6e38\u620f\u5956\u52b1',
                    ),
                    t.onFailCallback && t.onFailCallback(e));
              });
          }).prototype.createVideoAd = function (t) {
            !wx.createRewardedVideoAd ||
              this._rewardAd ||
              (console.log('\u521b\u5efa\u89c6\u9891AD', t),
              (this._rewardAd = wx.createRewardedVideoAd({ adUnitId: t })),
              this.isInit) ||
              ((this.isInit = !0),
              this._rewardAd.onError(this.videoError),
              this._rewardAd.onClose(this.videoClose),
              this._rewardAd.onLoad(this.videoLoad));
          }),
          (r.prototype.showVideoAd = function (t) {
            var e;
            (e = this),
              this.createVideoAd(t.adUnitId),
              (this.onSuccessCallBack = t.success),
              (this.onFailCallback = t.fail),
              (this.onErrorCallback = t.error),
              this._rewardAd
                .show()
                .then(function () {
                  console.log(
                    '\u6fc0\u52b1\u89c6\u9891 \u5e7f\u544a\u663e\u793a',
                  ),
                    i.App.event.emit(n.default.On_Video_Ad_Show);
                })
                .catch(function () {
                  e._rewardAd
                    .load()
                    .then(function () {
                      e._rewardAd.show().then(function () {
                        console.log(
                          '\u6fc0\u52b1\u89c6\u9891 \u5e7f\u544a\u663e\u793a',
                        ),
                          i.App.event.emit(n.default.On_Video_Ad_Show);
                      });
                    })
                    .catch(function () {
                      e.onErrorCallback && e.onErrorCallback();
                    });
                });
          }),
          (r.prototype.destroy = function () {
            this._rewardAd &&
              ((this._rewardAd = null),
              (this.onSuccessCallBack = null),
              (this.onFailCallback = null),
              (this.onErrorCallback = null));
          }),
          (a = r),
          (o.default = a),
          cc._RF.pop();
      },
      { './App': 'App', './EventTypes': 'EventTypes' },
    ],
    WxShare: [
      function (t, e, o) {
        'use strict';
        var i, n, a, r, s;
        cc._RF.push(e, '06a85RQXRxKnrsIQ2HtOYGM', 'WxShare'),
          (r = t('./EventTypes')),
          (a = t('./App')),
          (n = t('./MathUtil')),
          ((s = function () {
            (this.shareObj = {}),
              (this.share_info = []),
              (this.share_time = 3),
              (this.uid = 0);
          }).prototype.initShare = function (t, e) {
            (this.share_info = t),
              (this.share_time = e),
              this.onShareAppMessage(),
              (this.uid = a.App.http.getUid());
          }),
          (s.prototype.share = function (t) {
            var e;
            if (
              cc.sys.platform === cc.sys.WECHAT_GAME &&
              0 < this.share_info.length
            ) {
              var o, i, n, a, r, s, c;
              for (r in (wx.updateShareMenu &&
                wx.updateShareMenu({ withShareTicket: !0 }),
              (c = (o = this.getShareTiltleThumb()).title),
              (a = o.imageUrl),
              o.id,
              (s = ''),
              t.inviter_id || (s = 'inviter_id=' + this.uid),
              t))
                '' != s && (s += '&'), (s += r + '=' + t[r]);
              console.log('[ \u5206\u4eabquery ] >', s),
                ((i = Object.create({})).title = c),
                (i.imageUrl = a),
                (i.query = s),
                console.log(
                  '[ \u5206\u4eab\u6570\u636e ] >',
                  JSON.stringify(i),
                ),
                null != (e = wx.uma) && e.trackShare
                  ? ((n = wx.uma.trackShare(i)), wx.shareAppMessage(n))
                  : wx.shareAppMessage(i);
            }
          }),
          (s.prototype.shareForReward = function (t) {
            var e;
            return (
              (e = this),
              cc.log('\u53d1\u8d77\u9080\u8bf7'),
              new Promise(function (o, i) {
                var n;
                cc.sys.platform == cc.sys.WECHAT_GAME &&
                0 != e.share_info.length
                  ? ((n = Date.now()),
                    a.App.event.targetOff(e.shareObj),
                    a.App.event.on(
                      r.default.USER_SHARE,
                      function () {
                        cc.log(
                          '\u5206\u4eab\u8fd4\u56de\u65f6\u95f4\uff1a' +
                            (Date.now() - n),
                        ),
                          Date.now() - n >= e.share_time ? o(!0) : o(!1),
                          a.App.event.targetOff(e.shareObj);
                      },
                      e.shareObj,
                    ),
                    e.share(t))
                  : i();
              })
            );
          }),
          (s.prototype.onShareAppMessage = function () {
            var t, e, o, i;
            cc.sys.platform == cc.sys.WECHAT_GAME &&
              0 != this.share_info.length &&
              ((t = this.getShareTiltleThumb()),
              (e = t.title),
              (o = t.imageUrl),
              (i = 'inviter_id=' + this.uid),
              wx.onShareAppMessage(function () {
                return { title: e, imageUrl: o, query: i };
              }));
          }),
          (s.prototype.getShareTiltleThumb = function () {
            var t, e, o, i, a;
            return (
              (e = ''),
              (a = ''),
              (i = 0),
              0 < (t = this.share_info).length &&
                ((e = (o = t[n.default.randomRangeInt(0, t.length)]).title),
                (a = o.images),
                (i = o.id)),
              { title: e, imageUrl: a, id: i }
            );
          }),
          (s.prototype.getLostShareMsg = function () {
            return [
              '\u672c\u6b21\u5206\u4eab\u65e0\u6548\uff0c\u8bf7\u5206\u4eab\u5230\u5176\u4ed6\u7fa4',
              '\u5206\u4eab\u5931\u8d25\uff0c\u8bf7\u91cd\u8bd5',
              '\u8bf7\u5206\u4eab\u5230\u4e0d\u540c\u7684\u7fa4',
            ][Math.floor(3 * Math.random())];
          }),
          (i = s),
          (o.default = i),
          cc._RF.pop();
      },
      {
        './App': 'App',
        './EventTypes': 'EventTypes',
        './MathUtil': 'MathUtil',
      },
    ],
    YoYo: [
      function (t, e, o) {
        'use strict';
        var i, n, a, r, s, c, l;
        cc._RF.push(e, 'a879cKZqARNbLwajMfHwzkp', 'YoYo'),
          (i = t('./MathUtil')),
          (r = (a = cc._decorator).ccclass),
          (s = a.property),
          (c = cc.Component),
          (l = function () {
            var t;
            return (
              ((t = (null !== c && c.apply(this, arguments)) || this).body =
                null),
              t
            );
          }),
          __extends(l, c),
          (l.prototype.onLoad = function () {
            var t;
            (t = cc.v3()),
              i.default.v3Copy(this.body.position, t),
              cc
                .tween(this.body)
                .sequence(
                  cc.tween().to(0.3, { position: cc.v3(t.x + 15, t.y - 15) }),
                  cc.tween().to(0.3, { position: cc.v3(t.x, t.y) }),
                )
                .repeatForever()
                .start();
          }),
          __decorate([s(cc.Node)], l.prototype, 'body', void 0),
          (n = __decorate([r], l)),
          (o.default = n),
          cc._RF.pop();
      },
      { './MathUtil': 'MathUtil' },
    ],
  },
  {},
  [
    'ApiBase',
    'App',
    'AppStart',
    'ArrayUtil',
    'AssetMgr',
    'AvatarAssembler',
    'AvatarSprite',
    'BasePanel',
    'BaseUI',
    'BlockItem',
    'BottleItem',
    'BottleItem2',
    'BoxItem',
    'Breath',
    'CollectItem',
    'CollectView',
    'ConfData',
    'CourseView',
    'Cover',
    'DailyRewardView',
    'DateUtil',
    'DelayUtil',
    'DiffAct',
    'DisAppear',
    'EffectMgr',
    'EnergyNode',
    'EnergyView',
    'EventMgr',
    'EventTypes',
    'ExptData',
    'Extend',
    'FailView',
    'FriendData',
    'FriendItem',
    'FriendView',
    'GTAssembler2D',
    'GTAutoFitSpriteAssembler2D',
    'GTSimpleSpriteAssembler2D',
    'GameConst',
    'GameCtrl',
    'GameEnums',
    'GameMgr',
    'GameSetting',
    'GameView',
    'GameView2',
    'GameVos',
    'GoldNode',
    'GuideView',
    'HelpItem',
    'HelpView',
    'HomeView',
    'HttpNet',
    'IConfParser',
    'IDataConfVo',
    'IParser',
    'IServerVo',
    'ITTAd',
    'IconInfo',
    'LaunchMgr',
    'LevelConf',
    'List',
    'ListItem',
    'LocalData',
    'MathUtil',
    'NetBase',
    'NetData',
    'NetHelper',
    'NetMgr',
    'NumberUtil',
    'ObjectUtil',
    'PlatformMgr',
    'PromiseUtil',
    'PropItemView',
    'RankItem',
    'ResMgr',
    'ResUtils',
    'ReviveView',
    'Rotate',
    'RoundBox',
    'RukouView',
    'SettingView',
    'ShopView',
    'SignInItem',
    'SignInView',
    'SkinConf',
    'SkinData',
    'SkinItem',
    'SkinItem2',
    'SkinPage',
    'SkinView',
    'SoundMgr',
    'SpineEffect',
    'StorageMgr',
    'StringUtil',
    'SubContextView',
    'TTAPI',
    'TTRevardVideoAd',
    'TTUma',
    'TipsNode',
    'TipsNode2',
    'TipsNode3',
    'TopWidget',
    'TrackBase',
    'TrackEnums',
    'TweenMgr',
    'UIHelper',
    'UIMgr',
    'UserData',
    'Utils',
    'WXUma',
    'WarnView',
    'WinView',
    'WxAPI',
    'WxBannerAd',
    'WxInterstitialAd',
    'WxRewardVideoAd',
    'WxShare',
    'YoYo',
  ],
);
