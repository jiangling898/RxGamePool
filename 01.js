var game1=require('./game1')
var game2=require('./game2')
var game3=require('./game3')
window.__require = function e(t, i, n) {
  function a(s, r) {
    if (!i[s]) {
      if (!t[s]) {
        var c = s.split("/");
        if (c = c[c.length - 1], !t[c]) {
          var l = "function" == typeof __require && __require;
          if (!r && l) return l(c, !0);
          if (o) return o(c, !0);
          throw new Error("Cannot find module '" + s + "'")
        }
        s = c
      }
      var h = i[s] = {
        exports: {}
      };
      t[s][0].call(h.exports, function (e) {
        return a(t[s][1][e] || e)
      }, h, h.exports, e, t, i, n)
    }
    return i[s].exports
  }
  for (var o = "function" == typeof __require && __require, s = 0; s < n.length; s++) a(n[s]);
  return a
}({
  AD: [function (e, t) {
    "use strict";
    cc._RF.push(t, "b3be35kHDFG8Lq/uJIfg1D9", "AD");
    var i = e("../RxManager/RxManager").default;
    window.AD = {
      chanelName: "android",
      chanelName1: "android",
      delayTime: 0,
      wuDianRate: 0,
      gameOverTimes: 0,
      firstToMenu: !0,
      changeWuDianRate: function () {},
      showAD: function (e, t) {
        t && console.log("\u6fc0\u52b1\u89c6\u9891\u5e7f\u544a:  " + t.name), this.callN = t, this.callerN = e, i.getInstance().showReward(function () {
          AD.callN && AD.callerN && AD.callerN.call(AD.callN, e.dataN)
        })
      },
      chaPing: function (e) {
        void 0 === e && (e = ""), i.getInstance().showInsert(e)
      },
      showBanner: function (e) {
        void 0 === e && (e = ""), i.getInstance().showBanner(e)
      },
      hideBanner: function (e) {
        void 0 === e && (e = ""), i.getInstance().hideBanner(e)
      },
      moreGame: function () {
        i.getInstance().moreGame()
      },
      gameOver: function () {},
      addToDesk: function () {
        i.getInstance().addShortcut()
      },
      couldZDJ: function () {
        return Tools.random(1, 100) < this.wuDianRate
      },
      isBigScreen: function () {
        return console.log("\u662f\u957f\u5c4f\u5417  " + cc.winSize.width / cc.winSize.height), cc.winSize.width / cc.winSize.height > 1.8
      },
      switchZDJ: function () {
        AD.delayTime = 1
      }
    }, cc._RF.pop()
  }, {
    "../RxManager/RxManager": "RxManager"
  }],
  AIBase: [function (e, t) {
    "use strict";

    function i(e, t) {
      var i;
      if ("undefined" == typeof Symbol || null == e[Symbol.iterator]) {
        if (Array.isArray(e) || (i = n(e)) || t && e && "number" == typeof e.length) {
          i && (e = i);
          var a = 0;
          return function () {
            return a >= e.length ? {
              done: !0
            } : {
              done: !1,
              value: e[a++]
            }
          }
        }
        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }
      return (i = e[Symbol.iterator]()).next.bind(i)
    }

    function n(e, t) {
      if (e) {
        if ("string" == typeof e) return a(e, t);
        var i = Object.prototype.toString.call(e).slice(8, -1);
        return "Object" === i && e.constructor && (i = e.constructor.name), "Map" === i || "Set" === i ? Array.from(e) : "Arguments" === i || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i) ? a(e, t) : void 0
      }
    }

    function a(e, t) {
      (null == t || t > e.length) && (t = e.length);
      for (var i = 0, n = new Array(t); i < t; i++) n[i] = e[i];
      return n
    }
    cc._RF.push(t, "0279eoNvcRPALdm1b9HKmrp", "AIBase");
    var o = e("AStar").AStarMap;
    e("Types"), cc.Class({
      extends: cc.Component,
      properties: {
        decisionInterval: .5,
        minColorDiff: {
          default: 80,
          type: cc.Integer,
          visible: !1
        }
      },
      init: function (e, t) {
        this.stateMachine = {
          currentState: "idle",
          prevState: null,
          stateTime: 0
        }, this.decisionData = {
          targetPosition: null,
          nextPosition: null,
          pathPosArray: []
        }, this.character = t, this.moveScript = t.moveScript, this.game = e, this.decisionTimer = 0, this.pathRecalculateInterval = 1, this.pathRecalculateTimer = 0, this.perceptionData = this.character.perceptionData, GlobalMng.isTestDraw && (this.colorHistory = [], this.createDraw()), this.astarMap = new o(this.game.curMapScript.curTiledMap, "\u969c\u788d\u7269"), this.astarMap.initMap(), this.changeState("idle"), this.onInit()
      },
      update: function (e) {
        this.character.isAlive && (this.stateMachine.stateTime += e, this.decisionTimer += e, this.decisionTimer >= this.decisionInterval && (this.decisionTimer = 0, this.onMakeDecision()), this.onExecuteCurrentState(e))
      },
      onInit: function () {},
      onMakeDecision: function () {},
      onExecuteCurrentState: function (e) {
        switch (this.stateMachine.currentState) {
          case "idle":
            this.onExecuteIdleState(e);
            break;
          case "patrol":
            this.onExecutePatrolState(e);
            break;
          case "chase":
            this.onExecuteChaseState(e);
            break;
          case "attack":
            this.onExecuteAttackState(e);
            break;
          case "flee":
            this.onExecuteFleeState(e);
            break;
          case "useItem":
            this.onExecuteUseItemState(e);
            break;
          case "teamwork":
            this.onExecuteTeamworkState(e);
            break;
          default:
            this.onExecuteCustomState(e, this.stateMachine.currentState)
        }
      },
      onExecuteIdleState: function () {},
      onExecutePatrolState: function () {},
      onExecuteChaseState: function () {},
      onExecuteAttackState: function () {},
      onExecuteFleeState: function () {},
      onExecuteUseItemState: function () {},
      onExecuteTeamworkState: function () {},
      onExecuteCustomState: function () {},
      changeState: function (e) {
        this.stateMachine.currentState !== e && (this.stateMachine.prevState = this.stateMachine.currentState, this.stateMachine.currentState = e, this.stateMachine.stateTime = 0, "function" == typeof this["onExit" + this._capitalizeFirstLetter(this.stateMachine.prevState)] && this["onExit" + this._capitalizeFirstLetter(this.stateMachine.prevState)](), "function" == typeof this["onEnter" + this._capitalizeFirstLetter(e)] && this["onEnter" + this._capitalizeFirstLetter(e)]())
      },
      updatePathMove: function (e) {
        if (this.decisionData.pathPosArray && 0 !== this.decisionData.pathPosArray.length && this.decisionData.nextPosition) {
          var t = this.node.position,
            i = this.decisionData.nextPosition.sub(t);
          if (i.mag() <= this.moveScript.getCurSpeed() * e) {
            if (this.decisionData.pathPosArray.shift(), !(this.decisionData.pathPosArray.length > 0)) return void this.clearMove();
            this.decisionData.nextPosition = this.decisionData.pathPosArray[0]
          } else this.moveScript.moveDir = i.normalize()
        } else this.moveScript.moveDir = null
      },
      findPathTo: function (e, t, i) {
        return void 0 === i && (i = "best"), "best" == i ? this.decisionData.pathPosArray = this.astarMap.getPathByPos(e, t) : "safe" == i && (this.decisionData.pathPosArray = this.astarMap.getSafePath(e, t)), this.decisionData.pathPosArray && this.decisionData.pathPosArray.length > 0 && this.decisionData.pathPosArray.shift(), this.decisionData.nextPosition = this.decisionData.pathPosArray.length > 0 ? this.decisionData.pathPosArray[0] : null, this.decisionData.targetPosition = t, GlobalMng.isTestDraw && this.drawPathPoint(this.decisionData.pathPosArray), this.decisionData.pathPosArray.length
      },
      clearMove: function () {
        this.decisionData.pathPosArray = [], this.decisionData.nextPosition = null, this.decisionData.targetPosition = null, this.moveScript.moveDir = null
      },
      _capitalizeFirstLetter: function (e) {
        return e.charAt(0).toUpperCase() + e.slice(1)
      },
      createDraw: function () {
        var e = new cc.Node;
        this.game.playerRoot.addChild(e), this.graphics = e.addComponent(cc.Graphics), this.graphics.lineWidth = 10, this.graphics.fillColor = this.getRandomColor()
      },
      getRandomColor: function () {
        var e, t = 0;
        do {
          if (e = new cc.Color(Math.floor(256 * Math.random()), Math.floor(256 * Math.random()), Math.floor(256 * Math.random())), t++, this.isColorDifferent(e)) return this.colorHistory.push(e), e
        } while (t < 20);
        return console.warn("\u8fbe\u5230\u6700\u5927\u5c1d\u8bd5\u6b21\u6570\uff0c\u8fd4\u56de\u6700\u540e\u989c\u8272"), this.colorHistory.push(e), e
      },
      isColorDifferent: function (e) {
        for (var t, n = i(this.colorHistory); !(t = n()).done;) {
          var a = t.value,
            o = Math.abs(e.getR() - a.getR()),
            s = Math.abs(e.getG() - a.getG()),
            r = Math.abs(e.getB() - a.getB());
          if (o < this.minColorDiff || s < this.minColorDiff || r < this.minColorDiff) return !1
        }
        return !0
      },
      drawPathPoint: function (e) {
        if (this.graphics.clear(), e.length > 0)
          for (var t = 0; t < e.length; t++) {
            var i = e[t];
            this.graphics.circle(i.x, i.y, 10), this.graphics.fill()
          }
      }
    }), cc._RF.pop()
  }, {
    AStar: "AStar",
    Types: "Types"
  }],
  AIHuman: [function (e, t) {
    "use strict";

    function i(e, t) {
      var i;
      if ("undefined" == typeof Symbol || null == e[Symbol.iterator]) {
        if (Array.isArray(e) || (i = n(e)) || t && e && "number" == typeof e.length) {
          i && (e = i);
          var a = 0;
          return function () {
            return a >= e.length ? {
              done: !0
            } : {
              done: !1,
              value: e[a++]
            }
          }
        }
        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }
      return (i = e[Symbol.iterator]()).next.bind(i)
    }

    function n(e, t) {
      if (e) {
        if ("string" == typeof e) return a(e, t);
        var i = Object.prototype.toString.call(e).slice(8, -1);
        return "Object" === i && e.constructor && (i = e.constructor.name), "Map" === i || "Set" === i ? Array.from(e) : "Arguments" === i || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i) ? a(e, t) : void 0
      }
    }

    function a(e, t) {
      (null == t || t > e.length) && (t = e.length);
      for (var i = 0, n = new Array(t); i < t; i++) n[i] = e[i];
      return n
    }
    cc._RF.push(t, "cad5ci9N+VF9JMhB0wqnOrT", "AIHuman");
    var o = cc.Enum({
        BustFire: -1,
        AudoFire: -1,
        NoneFire: -1
      }),
      s = cc.Enum({
        Brave: 1,
        Keep: 2,
        Clever: 3,
        Wander: 4
      });
    cc.Class({
      extends: e("AIBase"),
      properties: {
        personality: {
          default: s.Brave,
          type: s,
          tooltip: "\u6027\u683c\u7279\u70b9"
        }
      },
      onInit: function () {
        this.personality = this.game.humanAiAlity.pop(), this.attackWay = o.NoneFire, this.isNeedAttack = !1, this.avoidDistance = 450, this.safeDistance = 650, this.isInDefend = !1, this.curDefenseNode = null, this.recordDefndNode = null, this.lastTime = null, this.isCanFindAnother = !1, this.mapLeftX = -1500, this.mapRightX = 1500, this.mapTopY = 1500, this.mapBottomY = -1500, this.isShouldAvoid = !1, this.thinkTime = 0, this.autoFireTime = 0, this.liudanTime = _.random(1, 3), this.setXingGe(), GlobalMng.isChallengeModel() ? this.changeState("youdang") : this.changeState("find")
      },
      setXingGe: function () {
        this.character && (this.personality == s.Brave ? (this.setBrave(), this.attackWay = o.AudoFire) : this.personality == s.Keep ? (this.setKeep(), this.attackWay = o.AudoFire) : this.personality == s.Clever ? (this.setClever(), this.attackWay = o.AudoFire) : this.personality == s.Wander && (this.setWander(), this.attackWay = o.AudoFire))
      },
      setBrave: function () {
        this.decisionInterval = _.randomInRange(.25, .67), this.avoidDistance = this.character.weapon.range - 20, this.safeDistance = this.character.weapon.range, this.personality = s.Brave, this.node.getChildByName("\u6027\u683c").getComponent(cc.Label).string = "\u52c7\u731b"
      },
      setKeep: function () {
        this.personality = s.Keep, this.node.getChildByName("\u6027\u683c").getComponent(cc.Label).string = "\u575a\u5b88"
      },
      setClever: function () {
        this.avoidDistance = _.random(450, 550), this.safeDistance = _.random(600, 650), this.personality = s.Clever, this.node.getChildByName("\u6027\u683c").getComponent(cc.Label).string = "\u575a\u5b88+\u8eb2\u907f"
      },
      setWander: function () {
        this.decisionInterval = .25, this.avoidDistance = 500, this.safeDistance = 550, this.personality = s.Wander, this.node.getChildByName("\u6027\u683c").getComponent(cc.Label).string = "\u6e38\u8d70"
      },
      onMakeDecision: function () {
        if (this._super(), this.game.gameModeBase.countDownEnd) switch (this.personality) {
          case s.Brave:
            this.braveDecision();
            break;
          case s.Keep:
            this.keepDecision();
            break;
          case s.Clever:
            this.cleverDecision();
            break;
          case s.Wander:
            this.wanderDecision()
        }
      },
      braveDecision: function () {
        cc.isValid(this.perceptionData.nearestEnemy) && this.braveShoudAvoid() ? this.changeState("avoid") : this.perceptionData.nearestEnemyDist > this.safeDistance ? this.changeState("findZombie") : this.changeState("idle")
      },
      keepDecision: function () {
        this.isInDefend || (cc.isValid(this.perceptionData.nearestEnemy) && this.shouldAvoid() ? this.changeState("avoid") : "look" !== this.stateMachine.currentState && this.changeState("beseFind"))
      },
      cleverDecision: function () {
        this.isInDefend ? cc.isValid(this.perceptionData.nearestEnemy) && this.shouldAvoid() && this.changeState("avoid") : cc.isValid(this.perceptionData.nearestEnemy) && this.shouldAvoid() ? this.changeState("avoid") : "look" !== this.stateMachine.currentState && this.changeState("beseFind")
      },
      wanderDecision: function () {
        if (this.isInDefend) {
          var e = (new Date).getTime();
          this.lastTime ? (e - this.lastTime) / 1e3 >= 5 && this.changeState("anotherFind") : this.lastTime = (new Date).getTime()
        } else cc.isValid(this.perceptionData.nearestEnemy) && this.shouldAvoid() ? (this.curDefenseNode = null, this.lastTime = null, this.isCanFindAnother = !1, this.changeState("avoid")) : this.curDefenseNode && this.isCanFindAnother ? this.changeState("anotherFind") : "look" !== this.stateMachine.currentState && this.changeState("beseFind")
      },
      onExecuteCurrentState: function (e) {
        switch (this.stateMachine.currentState) {
          case "find":
            this.findDefensePoint(e);
            break;
          case "look":
            this.lookDefindPos(e);
            break;
          case "defend":
            this.defendState(e);
            break;
          case "beseFind":
            this.findBestDefensePoint(e);
            break;
          case "anotherFind":
            this.findAnotherPoint(e);
            break;
          case "findZombie":
            this.findZombie(e);
            break;
          case "avoid":
            this.avoid(e);
            break;
          case "idle":
            this.idleState(e);
            break;
          case "youdang":
            this.youdangState(e)
        }
        this.autoAttack(e)
      },
      onEnterFind: function () {
        this.curDefenseNode = this.game.getRandomOneDefend(), this.findPathTo(this.node.getPosition(), this.curDefenseNode.getPosition())
      },
      findDefensePoint: function (e) {
        if (this.updatePathMove(e), this.curDefenseNode) {
          var t = this.node.getPosition().sub(this.curDefenseNode.getPosition()).mag();
          this.inDefenRange(t) && this.changeState("look")
        }
      },
      onEnterLook: function () {
        this.curDifendTarget = this.game.getRandDefendStandPos(this.curDefenseNode), this.findPathTo(this.node.getPosition(), this.curDifendTarget.getPosition())
      },
      lookDefindPos: function (e) {
        this.updatePathMove(e), this.decisionData.targetPosition || this.changeState("defend")
      },
      onEnterDefend: function () {
        this.clearMove(), this.isInDefend = !0, this.pathRecalculateInterval = 2, this.pathRecalculateTimer = 2
      },
      onExitDefend: function () {
        this.isInDefend = !1
      },
      defendState: function (e) {
        if (this.pathRecalculateTimer += e, this.pathRecalculateTimer >= this.pathRecalculateInterval) {
          this.pathRecalculateTimer = 0;
          var t = this.node.getPosition();
          this.curDefenseNode && (this.curDifendTarget = this.game.getRandDefendStandPos(this.curDefenseNode), this.findPathTo(t, this.curDifendTarget.getPosition()))
        }
        this.updatePathMove(e)
      },
      onEnterBeseFind: function () {
        this.pathRecalculateInterval = 15, this.pathRecalculateTimer = 15
      },
      findBestDefensePoint: function (e) {
        if (this.pathRecalculateTimer += e, this.pathRecalculateTimer >= this.pathRecalculateInterval) {
          this.pathRecalculateTimer = 0;
          var t = this.node.getPosition();
          this.curDefenseNode = this.selectBestDefensePoint(t), this.curDefenseNode ? this.findPathTo(t, this.curDefenseNode.getPosition()) : this.changeState("find")
        }
        if (this.updatePathMove(e), this.curDefenseNode) {
          var i = this.node.getPosition().sub(this.curDefenseNode.getPosition()).mag();
          this.inDefenRange(i) && this.changeState("look")
        }
      },
      onEnterAnotherFind: function () {
        this.pathRecalculateInterval = 40, this.pathRecalculateTimer = 40, this.isCanFindAnother = !0
      },
      findAnotherPoint: function (e) {
        if (this.pathRecalculateTimer += e, this.pathRecalculateTimer >= this.pathRecalculateInterval) {
          this.pathRecalculateTimer = 0;
          var t = this.node.getPosition();
          this.recordDefndNode = this.game.getAnotherOneDefend(this.curDefenseNode), this.recordDefndNode && this.findPathTo(t, this.recordDefndNode.getPosition())
        }
        if (this.updatePathMove(e), this.recordDefndNode) {
          var i = this.node.getPosition().sub(this.recordDefndNode.getPosition()).mag();
          this.inDefenRange(i) && (this.lastTime = null, this.curDefenseNode = this.recordDefndNode, this.changeState("look"))
        }
      },
      onEnterFindZombie: function () {
        this.pathRecalculateInterval = .25, this.pathRecalculateTimer = 0
      },
      findZombie: function (e) {
        if (cc.isValid(this.perceptionData.nearestEnemy)) {
          if (this.pathRecalculateTimer += e, this.pathRecalculateTimer >= this.pathRecalculateInterval) {
            this.pathRecalculateTimer = 0;
            var t = this.node.getPosition(),
              i = this.perceptionData.nearestEnemy.getPosition();
            this.findPathTo(t, i)
          }
          this.updatePathMove(e)
        } else GlobalMng.isChallengeModel() || this.changeState("find")
      },
      onEnterAvoid: function () {
        this.pathRecalculateInterval = .5, this.pathRecalculateTimer = .5
      },
      avoid: function (e) {
        this.pathRecalculateTimer += e, cc.isValid(this.perceptionData.nearestEnemy) && !this.isSafe() ? (this.pathRecalculateTimer >= this.pathRecalculateInterval && (this.pathRecalculateTimer = 0, this.recalculateAvoidPath()), this.updatePathMove(e)) : this.decisionTimer = this.decisionInterval
      },
      onEnterYoudang: function () {
        this.clearMove(), this.pathRecalculateInterval = 2, this.pathRecalculateTimer = 2
      },
      youdangState: function (e) {
        if (this.pathRecalculateTimer += e, this.pathRecalculateTimer >= this.pathRecalculateInterval) {
          this.pathRecalculateTimer = 0;
          var t = this.node.getPosition(),
            i = GlobalMng.ccTools.randomPointInCircle(cc.v2(0, 0), 300);
          this.findPathTo(t, i)
        }
        this.updatePathMove(e)
      },
      recalculateAvoidPath: function () {
        var e = this.node.getPosition(),
          t = this.perceptionData.nearestEnemy;
        if (cc.isValid(t) && this.findPathTo(e, t.getPosition(), "safe") <= 3) {
          var i = t.getPosition(),
            n = e.sub(i).normalize(),
            a = (Math.random() - .5) * Math.PI / 12,
            o = Math.cos(a),
            s = Math.sin(a),
            r = cc.v2(n.x * o - n.y * s, n.x * s + n.y * o),
            c = e.add(r.mul(350));
          this.findPathTo(e, c)
        }
      },
      onEnterIdle: function () {
        GlobalMng.isChallengeModel() ? this.changeState("youdang") : (console.log("\u8fdb\u5165\u95f2\u7f6e\u72b6\u6001"), this.clearMove())
      },
      idleState: function () {},
      autoAttack: function (e) {
        this.character.weapon.isInWeaponRange() ? (this.character.onDownSkill1(), this.character.isSavior && (this.autoFireTime += e, this.autoFireTime >= this.liudanTime && (this.autoFireTime = 0, this.liudanTime = _.random(1, 3), this.character.fireUowitzer()))) : (this.thinkTime += e, this.thinkTime >= .33 && (this.thinkTime = 0, this.character.onUpSkill1(), this.character.weapon.isNeedReload()))
      },
      shouldAvoid: function () {
        return !!this.perceptionData.nearestEnemy && (this.perceptionData.nearestEnemyDist <= this.avoidDistance ? this.isShouldAvoid = !0 : this.perceptionData.nearestEnemyDist >= this.avoidDistance + 250 && (this.isShouldAvoid = !1), this.isShouldAvoid)
      },
      braveShoudAvoid: function () {
        return !!this.perceptionData.nearestEnemy && this.perceptionData.nearestEnemyDist <= this.avoidDistance
      },
      isSafe: function () {
        return !this.perceptionData.nearestEnemy || this.perceptionData.nearestEnemyDist >= this.safeDistance
      },
      inDefenRange: function (e) {
        return e <= 500
      },
      selectBestDefensePoint: function (e) {
        if (!this.game.defendArray || 0 === this.game.defendArray.length) return null;
        var t, n = null,
          a = -1 / 0,
          o = null;
        cc.isValid(this.perceptionData.nearestEnemy) && (o = this.perceptionData.nearestEnemy.getPosition());
        for (var s = i(this.game.defendArray); !(t = s()).done;) {
          var r = t.value,
            c = r.getPosition(),
            l = this.calculateDefensePointScore(e, c, o);
          l > a && (a = l, n = r)
        }
        return n
      },
      calculateDefensePointScore: function (e, t) {
        return 0 - .2 * e.sub(t).mag()
      }
    }), cc._RF.pop()
  }, {
    AIBase: "AIBase"
  }],
  AIZombie: [function (e, t) {
    "use strict";

    function i(e, t) {
      var i;
      if ("undefined" == typeof Symbol || null == e[Symbol.iterator]) {
        if (Array.isArray(e) || (i = n(e)) || t && e && "number" == typeof e.length) {
          i && (e = i);
          var a = 0;
          return function () {
            return a >= e.length ? {
              done: !0
            } : {
              done: !1,
              value: e[a++]
            }
          }
        }
        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }
      return (i = e[Symbol.iterator]()).next.bind(i)
    }

    function n(e, t) {
      if (e) {
        if ("string" == typeof e) return a(e, t);
        var i = Object.prototype.toString.call(e).slice(8, -1);
        return "Object" === i && e.constructor && (i = e.constructor.name), "Map" === i || "Set" === i ? Array.from(e) : "Arguments" === i || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i) ? a(e, t) : void 0
      }
    }

    function a(e, t) {
      (null == t || t > e.length) && (t = e.length);
      for (var i = 0, n = new Array(t); i < t; i++) n[i] = e[i];
      return n
    }
    cc._RF.push(t, "c4451LZZixNVZuisAj7wgYd", "AIZombie");
    var o = cc.Enum({
      Lazy: 1,
      Keep: 2,
      Clever: 3,
      MoRi: 4
    });
    cc.Class({
      extends: e("AIBase"),
      properties: {
        personality: {
          default: o.Lazy,
          type: o,
          tooltip: "\u6027\u683c\u7279\u70b9"
        }
      },
      onInit: function () {
        GlobalMng.isChallengeModel() ? this.personality = 4 : this.personality = this.game.zombieAiAlity.pop(), this.pathRecalculateInterval = .5, this.currentTarget = null, this.patrolCenter = null, this.personality == o.Lazy ? this.setLazy() : this.personality == o.Keep ? this.setKeep() : this.personality == o.Clever && this.setClever(), this.changeState("idle")
      },
      setLazy: function () {
        this.character.sightRadius = 650, this.node.getChildByName("\u6027\u683c").getComponent(cc.Label).string = "\u5de1\u903b+\u8ffd\u51fb"
      },
      setKeep: function () {
        this.node.getChildByName("\u6027\u683c").getComponent(cc.Label).string = "\u8ffd\u51fb+\u6807\u8bb0\u9884\u6d4b"
      },
      setClever: function () {
        this.node.getChildByName("\u6027\u683c").getComponent(cc.Label).string = "\u7b56\u7565\u7ed5\u8def"
      },
      onMakeDecision: function () {
        switch (this._super(), this.personality) {
          case o.Lazy:
            this.lazyDecision();
            break;
          case o.Keep:
            this.keepDecision();
            break;
          case o.Clever:
            this.cleverDecision();
            break;
          case o.MoRi:
            var e = this.perceptionData.nearestEnemy;
            cc.isValid(e) && (cc.isValid(this.currentTarget) && this.currentTarget !== e && this.currentTarget.getComponent("Human").unLockMarked(this.character.id), this.currentTarget = e, this.currentTarget.getComponent("Human").biaojiMarked(this.character.id), this.changeState("chase"))
        }
      },
      lazyDecision: function () {
        if (this.perceptionData.visibleHuman.length > 0) {
          var e = this.perceptionData.nearestThreeHuman[0];
          cc.isValid(e) ? (this.currentTarget = e, this.currentTarget.getComponent("Human").biaojiMarked(this.character.id), this.changeState("chase")) : this.changeState("patrol")
        } else this.changeState("patrol")
      },
      keepDecision: function () {
        for (var e, t = null, n = -1 / 0, a = i(this.perceptionData.nearestThreeHuman); !(e = a()).done;) {
          var o = e.value;
          if (cc.isValid(o)) {
            var s = _.dist(this.node.getPosition(), o.position),
              r = o.getComponent("Human").markedByInfected,
              c = this.character.getZombieCountByPos(o.position, 800),
              l = 120 * (4e3 - s) / (s + 1) - r * (380 / this.game.getZombieNum()) - 150 * c;
            l > n && (n = l, t = o)
          }
        }
        if (t) cc.isValid(this.currentTarget) && this.currentTarget !== t && this.currentTarget.getComponent("Human").unLockMarked(this.character.id), this.currentTarget = t, this.currentTarget.getComponent("Human").biaojiMarked(this.character.id), this.changeState("chase");
        else {
          var h = this.perceptionData.nearestEnemy;
          cc.isValid(h) && (cc.isValid(this.currentTarget) && this.currentTarget !== h && this.currentTarget.getComponent("Human").unLockMarked(this.character.id), this.currentTarget = h, this.currentTarget.getComponent("Human").biaojiMarked(this.character.id), this.changeState("chase"))
        }
      },
      cleverDecision: function () {
        for (var e, t = null, n = -1 / 0, a = i(this.perceptionData.nearestThreeHuman); !(e = a()).done;) {
          var o = e.value;
          if (cc.isValid(o)) {
            var s = _.dist(this.node.getPosition(), o.position),
              r = o.getComponent("Human").markedByInfected,
              c = this.character.getZombieCountByPos(o.position, 800),
              l = 80 * (4e3 - s) / (s + 1) - r * (380 / this.game.getZombieNum()) - 150 * c;
            l > n && (n = l, t = o)
          }
        }
        if (t) cc.isValid(this.currentTarget) && this.currentTarget !== t && this.currentTarget.getComponent("Human").unLockMarked(this.character.id), this.currentTarget = t;
        else {
          var h = this.perceptionData.nearestEnemy;
          cc.isValid(h) && (cc.isValid(this.currentTarget) && this.currentTarget !== h && this.currentTarget.getComponent("Human").unLockMarked(this.character.id), this.currentTarget = h)
        }
        cc.isValid(this.currentTarget) && (this.currentTarget.getComponent("Human").markedByInfected >= 2 ? this.changeState("flank") : (this.currentTarget.getComponent("Human").biaojiMarked(this.character.id), this.changeState("chase")))
      },
      deathZombieAI: function () {
        cc.isValid(this.currentTarget) && this.currentTarget.getComponent("Human").unLockMarked(this.character.id)
      },
      onExecuteCurrentState: function (e) {
        switch (this.stateMachine.currentState) {
          case "chase":
            this.chaseState(e);
            break;
          case "patrol":
            this.patrolState(e);
            break;
          case "flank":
            this.flankState(e)
        }
      },
      onEnterChase: function () {
        this.pathRecalculateTimer = .5, this.pathRecalculateInterval = .5
      },
      onExitChase: function () {
        cc.isValid(this.currentTarget) && this.currentTarget.getComponent("Human").unLockMarked(this.character.id)
      },
      chaseState: function (e) {
        if (this.pathRecalculateTimer += e, cc.isValid(this.currentTarget) && this.pathRecalculateTimer >= this.pathRecalculateInterval) {
          var t = this.node.getPosition();
          this.pathRecalculateTimer = 0, this.findPathTo(t, this.currentTarget.position)
        }
        this.updatePathMove(e)
      },
      onEnterPatrol: function () {
        this.pathRecalculateTimer = 5, this.pathRecalculateInterval = 5
      },
      patrolState: function (e) {
        if (this.pathRecalculateTimer += e, this.pathRecalculateTimer >= this.pathRecalculateInterval || !this.decisionData.nextPosition) {
          this.pathRecalculateTimer = 0;
          var t = this.node.getPosition(),
            i = this.game.getRandomOneDefend().getPosition();
          this.findPathTo(t, i)
        }
        this.updatePathMove(e)
      },
      onEnterFlank: function () {
        this.pathRecalculateTimer = 3, this.pathRecalculateInterval = 3
      },
      flankState: function (e) {
        if (this.pathRecalculateTimer += e, this.pathRecalculateTimer >= this.pathRecalculateInterval && (this.pathRecalculateTimer = 0, cc.isValid(this.currentTarget))) {
          var t = this.node.getPosition(),
            i = this.currentTarget.getComponent("Human").moveScript.moveDir,
            n = this.currentTarget.getPosition();
          if (i && i.mag() > 0) {
            var a = (Math.random() - .5) * Math.PI,
              o = Math.cos(a),
              s = Math.sin(a),
              r = cc.v2(i.x * o - i.y * s, i.x * s + i.y * o),
              c = n.add(r.mul(600));
            this.findPathTo(t, c)
          } else this.findPathTo(t, n)
        }
        this.updatePathMove(e)
      },
      onUpdate01: function () {
        this.perceptionData.nearestEnemy && this.character.isInAttackRange() ? this.character.attack() : _.isLucky(10) && this.character.attack()
      }
    }), cc._RF.pop()
  }, {
    AIBase: "AIBase"
  }],
  ALayerBase: [function (e, t) {
    "use strict";
    cc._RF.push(t, "80abaUYWW1EwZ+MDyy+vw8B", "ALayerBase"), cc.Class({
      extends: cc.Component,
      properties: {},
      onLoad: function () {
        GlobalMng.uiMng.showPopup(this.node.getChildByName("root"))
      },
      onEnable: function () {
        AD.chaPing("ALayerBase"), AD.showBanner("ALayerBase")
      },
      onDisable: function () {
        AD.hideBanner("ALayerBase")
      },
      btnClose: function () {
        this.closeCallBack(), null != this.node && this.node.destroy()
      },
      btnCloseByAnima: function () {
        var e = this;
        GlobalMng.uiMng.hidePopup(this.node.getChildByName("root"), function () {
          e.btnClose()
        })
      },
      btnVideo: function (e) {
        var t = this;
        AD.showAD(function () {
          GlobalMng.resumeAll(), t.videoSuccess(e.currentTarget.name)
        }, this)
      },
      closeCallBack: function () {},
      videoSuccess: function (e) {
        console.log("\u89c6\u9891\u6309\u94ae\u56de\u8c03 \u8282\u70b9\u540d" + e)
      }
    }), cc._RF.pop()
  }, {}],
  AShareUIBase: [function (e, t) {
    "use strict";
    cc._RF.push(t, "1ddc7AAR6ROLK/uiXqA3+Oi", "AShareUIBase"), cc.Class({
      extends: cc.Component,
      properties: {},
      onEnable: function () {
        AD.chaPing("AShareUIBase"), AD.showBanner("AShareUIBase")
      },
      onDisable: function () {
        AD.hideBanner("AShareUIBase")
      },
      onLoad: function () {
        this.prefabPath = "", this.rootNode = this.node.getChildByName("root")
      },
      setPrefabPath: function (e) {
        "" == this.prefabPath && (this.prefabPath = e)
      },
      show: function () {
        GlobalMng.uiMng.showPopup(this.node.getChildByName("root"), arguments.length <= 0 ? void 0 : arguments[0])
      },
      videoSuccess: function (e) {
        console.log("\u89c6\u9891\u6309\u94ae\u56de\u8c03 \u8282\u70b9\u540d" + e)
      },
      hideSuccess: function () {},
      closeCallBack: function () {},
      closeDirectlyShare: function () {
        GlobalMng.resumeAll(), GlobalMng.uiMng.closeShareDG(this.prefabPath), this.hideSuccess()
      },
      btnCloseShare: function () {
        GlobalMng.resumeAll(), GlobalMng.uiMng.hideShareDG(this.prefabPath, function () {}), this.hideSuccess(), this.closeCallBack()
      },
      btnVideo: function (e) {
        var t = this;
        AD.showAD(function () {
          GlobalMng.resumeAll(), t.videoSuccess(e.currentTarget.name)
        }, this)
      }
    }), cc._RF.pop()
  }, {}],
  AStar: [function (e, t, i) {
    "use strict";

    function n(e, t) {
      var i;
      if ("undefined" == typeof Symbol || null == e[Symbol.iterator]) {
        if (Array.isArray(e) || (i = a(e)) || t && e && "number" == typeof e.length) {
          i && (e = i);
          var n = 0;
          return function () {
            return n >= e.length ? {
              done: !0
            } : {
              done: !1,
              value: e[n++]
            }
          }
        }
        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }
      return (i = e[Symbol.iterator]()).next.bind(i)
    }

    function a(e, t) {
      if (e) {
        if ("string" == typeof e) return o(e, t);
        var i = Object.prototype.toString.call(e).slice(8, -1);
        return "Object" === i && e.constructor && (i = e.constructor.name), "Map" === i || "Set" === i ? Array.from(e) : "Arguments" === i || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i) ? o(e, t) : void 0
      }
    }

    function o(e, t) {
      (null == t || t > e.length) && (t = e.length);
      for (var i = 0, n = new Array(t); i < t; i++) n[i] = e[i];
      return n
    }
    cc._RF.push(t, "b3d3fuhBPRCGJN1ZhTCE6U7", "AStar"), i.__esModule = !0, i.AStarMap = void 0;
    var s = Object.freeze({
        NORMAL: 0,
        START: 1,
        END: 2,
        OBSTACLES: 3
      }),
      r = function () {
        function e(e, t, i) {
          this.row = e, this.col = t, this.type = i, this.reset()
        }
        return e.prototype.reset = function () {
          this.value_G = 1 / 0, this.value_H = 0, this.value_F = 0, this.previousPoint = null, this.inOpenList = !1, this.inClosedList = !1
        }, e
      }(),
      c = function () {
        function e() {
          this.elements = [], this.elementSet = new Set
        }
        var t = e.prototype;
        return t.enqueue = function (e, t) {
          var i = 1e4 * e.row + e.col;
          this.elementSet.has(i) ? this._updatePriority(e, t) : (this.elements.push({
            element: e,
            priority: t
          }), this.elementSet.add(i), this._bubbleUp(this.elements.length - 1))
        }, t.dequeue = function () {
          if (0 === this.elements.length) return null;
          var e = this.elements[0],
            t = this.elements.pop(),
            i = 1e4 * e.element.row + e.element.col;
          return this.elementSet.delete(i), this.elements.length > 0 && (this.elements[0] = t, this._sinkDown(0)), e.element
        }, t.isEmpty = function () {
          return 0 === this.elements.length
        }, t._updatePriority = function (e, t) {
          for (var i = 0; i < this.elements.length; i++)
            if (this.elements[i].element === e) {
              var n = this.elements[i].priority;
              this.elements[i].priority = t, t < n ? this._bubbleUp(i) : t > n && this._sinkDown(i);
              break
            }
        }, t._bubbleUp = function (e) {
          for (var t = this.elements[e], i = t.element, n = t.priority; e > 0;) {
            var a = e - 1 >> 1;
            if (this.elements[a].priority <= n) break;
            this.elements[e] = this.elements[a], e = a
          }
          this.elements[e] = {
            element: i,
            priority: n
          }
        }, t._sinkDown = function (e) {
          for (var t = this.elements.length, i = this.elements[e], n = i.element, a = i.priority;;) {
            var o = 1 + (e << 1),
              s = o + 1,
              r = null;
            if (o < t && this.elements[o].priority < a && (r = o), s < t && this.elements[s].priority < (null === r ? a : this.elements[o].priority) && (r = s), null === r) break;
            this.elements[e] = this.elements[r], e = r
          }
          this.elements[e] = {
            element: n,
            priority: a
          }
        }, e
      }(),
      l = function () {
        function e(e) {
          this.tiledMap = e;
          for (var t = arguments.length, i = new Array(t > 1 ? t - 1 : 0), n = 1; n < t; n++) i[n - 1] = arguments[n];
          this.obstaclesNameArray = i, this.mapObstaclesArray = [], this.tileSize = null, this.mapSize = null, this.mapPointsArray = null, this.startIndex = [0, 0], this.endIndex = [0, 0], this.eightDirectionCheck = !0, this.isWorking = !1, this.posCache = new Map, this.obstaclePoints = new Set, this.directions8 = [
            [-1, -1],
            [-1, 0],
            [-1, 1],
            [0, -1],
            [0, 1],
            [1, -1],
            [1, 0],
            [1, 1]
          ], this.directions4 = [
            [-1, 0],
            [1, 0],
            [0, -1],
            [0, 1]
          ], this.diagonalCost = Math.SQRT2, this.straightCost = 1, this._initConstants()
        }
        var t = e.prototype;
        return t._initConstants = function () {
          this.tileSize = this.tiledMap.getTileSize(), this.mapSize = this.tiledMap.getMapSize(), this.mapHeight = this.mapSize.height, this.mapWidth = this.mapSize.width, this.tileHeight = this.tileSize.height, this.tileWidth = this.tileSize.width, this.tiledMapHeight = this.mapHeight * this.tileHeight, this.tiledMapWidth = this.mapWidth * this.tileWidth, this.halfMapWidth = .5 * this.tiledMapWidth, this.halfMapHeight = .5 * this.tiledMapHeight, this.halfTileWidth = .5 * this.tileWidth, this.halfTileHeight = .5 * this.tileHeight
        }, t.initMap = function () {
          var e = this;
          this.mapPointsArray = Array.from({
            length: this.mapHeight
          }, function (t, i) {
            return Array.from({
              length: e.mapWidth
            }, function (e, t) {
              return new r(i, t, s.NORMAL)
            })
          }), this.mapObstaclesArray = this.obstaclesNameArray.map(function (t) {
            return e.tiledMap.getLayer(t)
          }).filter(function (e) {
            return e
          }), this._cacheObstaclePoints(), this._resetMap()
        }, t._cacheObstaclePoints = function () {
          var e;
          this.obstaclePoints.clear();
          for (var t = n(this.mapObstaclesArray); !(e = t()).done;)
            for (var i = e.value, a = 0; a < i._tiles.length; a++)
              if (0 !== i._tiles[a]) {
                var o = Math.floor(a / this.mapWidth),
                  s = a % this.mapWidth;
                this.obstaclePoints.add(o * this.mapWidth + s)
              }
        }, t._resetMap = function () {
          for (var e = 0; e < this.mapHeight; e++)
            for (var t = 0; t < this.mapWidth; t++) {
              var i = this.mapPointsArray[e][t];
              (1 / 0 !== i.value_G || i.inOpenList || i.inClosedList) && i.reset(), i.type = this.obstaclePoints.has(e * this.mapWidth + t) ? s.OBSTACLES : s.NORMAL
            }
          this._setSpecialPoints()
        }, t._setSpecialPoints = function () {
          this.mapPointsArray[this.startIndex[0]][this.startIndex[1]].type = s.START, this.mapPointsArray[this.endIndex[0]][this.endIndex[1]].type = s.END
        }, t.getPathByPos = function (e, t) {
          if (this.isWorking) return [e];
          this.isWorking = !0;
          try {
            var i = this._validatePositions(e, t);
            return this.startIndex = i[0], this.endIndex = i[1], this._isValidPoint.apply(this, this.startIndex) && this._isValidPoint.apply(this, this.endIndex) ? this.startIndex[0] === this.endIndex[0] && this.startIndex[1] === this.endIndex[1] ? [e] : (this._resetMap(), this._findPath() || [e, t]) : [e, t]
          } finally {
            this.isWorking = !1
          }
        }, t._validatePositions = function (e, t) {
          var i = this.getNearWalkableTile(e),
            n = this.getNearWalkableTile(t);
          return this._isObstacle.apply(this, i) ? (console.warn("\u8d77\u70b9\u4f4d\u4e8e\u969c\u788d\u7269"), [this.getFallbackPosition(i), n]) : this._isObstacle.apply(this, n) ? (console.warn("\u7ec8\u70b9\u4f4d\u4e8e\u969c\u788d\u7269"), [i, this.getFallbackPosition(n)]) : [i, n]
        }, t._findPath = function () {
          var e = this.eightDirectionCheck ? this.directions8 : this.directions4,
            t = this.startIndex,
            i = t[0],
            n = t[1],
            a = this.endIndex,
            o = a[0],
            r = a[1],
            l = new c,
            h = this.mapPointsArray[i][n];
          for (h.value_G = 0, h.value_H = this._heuristic(i, n, o, r), h.value_F = h.value_H, h.inOpenList = !0, l.enqueue(h, h.value_F); !l.isEmpty();) {
            var u = l.dequeue();
            if (u.inOpenList = !1, u.inClosedList = !0, u.row === o && u.col === r) return this._reconstructPath(u);
            for (var d = 0; d < e.length; d++) {
              var p = e[d],
                m = p[0],
                g = p[1],
                f = u.row + m,
                y = u.col + g;
              if (this._isValidPoint(f, y)) {
                var v = this.mapPointsArray[f][y];
                if (!v.inClosedList && v.type !== s.OBSTACLES && !this._isDiagonalBlocked(u, m, g)) {
                  var C = Math.abs(m) + Math.abs(g) === 2 ? this.diagonalCost : this.straightCost,
                    b = u.value_G + C;
                  b < v.value_G && (v.previousPoint = u, v.value_G = b, v.value_H = this._heuristic(f, y, o, r), v.value_F = b + v.value_H, v.inOpenList || (v.inOpenList = !0, l.enqueue(v, v.value_F)))
                }
              }
            }
          }
          return this._getFallbackPath()
        }, t._isDiagonalBlocked = function (e, t, i) {
          return Math.abs(t) + Math.abs(i) === 2 && (this._isObstacle(e.row + t, e.col) || this._isObstacle(e.row, e.col + i))
        }, t._heuristic = function (e, t, i, n) {
          var a = Math.abs(e - i),
            o = Math.abs(t - n);
          return Math.max(a, o) + (this.diagonalCost - 1) * Math.min(a, o)
        }, t._reconstructPath = function (e) {
          for (var t = [], i = e; i;) t.unshift(this.convertTiledToNodePos(i.row, i.col)), i = i.previousPoint;
          return t.length > 1 ? t : []
        }, t._getFallbackPath = function () {
          for (var e = null, t = 1 / 0, i = 0; i < this.mapHeight; i++)
            for (var n = 0; n < this.mapWidth; n++) {
              var a = this.mapPointsArray[i][n];
              if (a.inClosedList) {
                var o = this._heuristic.apply(this, [i, n].concat(this.endIndex));
                o < t && (t = o, e = a)
              }
            }
          return e ? this._reconstructPath(e) : []
        }, t.getNearWalkableTile = function (e) {
          var t = this.convertNodePosToTiled(e),
            i = t[0],
            a = t[1];
          if (this._isWalkable(i, a)) return [i, a];
          for (var o = [
              [i, a, 0]
            ], s = new Set([i * this.mapWidth + a]), r = this.eightDirectionCheck ? this.directions8 : this.directions4, c = Math.min(this.mapWidth, this.mapHeight) / 4; o.length > 0;) {
            var l, h = o.shift(),
              u = h[0],
              d = h[1],
              p = h[2];
            if (p > c) break;
            for (var m = n(r); !(l = m()).done;) {
              var g = l.value,
                f = u + g[0],
                y = d + g[1],
                v = f * this.mapWidth + y;
              if (this._isValidPoint(f, y) && !s.has(v)) {
                if (this._isWalkable(f, y)) return [f, y];
                s.add(v), o.push([f, y, p + 1])
              }
            }
          }
          return [i, a]
        }, t._isValidPoint = function (e, t) {
          return e >= 0 && e < this.mapHeight && t >= 0 && t < this.mapWidth
        }, t._isWalkable = function (e, t) {
          return this._isValidPoint(e, t) && !this.obstaclePoints.has(e * this.mapWidth + t)
        }, t._isObstacle = function (e, t) {
          return this._isValidPoint(e, t) && this.obstaclePoints.has(e * this.mapWidth + t)
        }, t.convertTiledToNodePos = function (e, t) {
          var i = e + "," + t;
          if (this.posCache.has(i)) return this.posCache.get(i);
          var n = t * this.tileWidth - this.halfMapWidth + this.halfTileWidth,
            a = this.halfMapHeight - e * this.tileHeight - this.halfTileHeight,
            o = cc.v2(n, a);
          return this.posCache.size > 1e3 && this.posCache.clear(), this.posCache.set(i, o), o
        }, t.convertNodePosToTiled = function (e) {
          var t = Math.round((e.x + this.halfMapWidth - this.halfTileWidth) / this.tileWidth),
            i = Math.round((this.halfMapHeight - e.y - this.halfTileHeight) / this.tileHeight);
          return [Math.max(0, Math.min(this.mapHeight - 1, i)), Math.max(0, Math.min(this.mapWidth - 1, t))]
        }, t.getSafePath = function (e, t, i, n) {
          if (void 0 === i && (i = 10), void 0 === n && (n = 100), this.isWorking) return [e];
          this.isWorking = !0;
          try {
            var a = this.convertNodePosToTiled(e),
              o = a[0],
              s = a[1],
              r = this.convertNodePosToTiled(t),
              c = r[0],
              l = r[1],
              h = this._generateThreatGrid(c, l, n);
            this.startIndex = [o, s], this.endIndex = this._findSafestPoint(h, i), this._resetMap();
            var u = this._findPath() || [e];
            return u.length > 1 ? u : [e]
          } finally {
            this.isWorking = !1
          }
        }, t._generateThreatGrid = function (e, t, i) {
          for (var n = this, a = Array(this.mapHeight).fill().map(function () {
              return Array(n.mapWidth).fill(0)
            }), o = 0; o < this.mapHeight; o++)
            for (var s = 0; s < this.mapWidth; s++) {
              var r = o - e,
                c = s - t,
                l = Math.sqrt(r * r + c * c);
              a[o][s] = i * Math.exp(-.2 * l)
            }
          return a
        }, t._findSafestPoint = function (e, t) {
          for (var i = this.startIndex, n = 1 / 0, a = Math.max(0, this.startIndex[0] - t), o = Math.min(this.mapHeight - 1, this.startIndex[0] + t), s = Math.max(0, this.startIndex[1] - t), r = Math.min(this.mapWidth - 1, this.startIndex[1] + t), c = a; c <= o; c++)
            for (var l = s; l <= r; l++) e[c][l] < n && this._isWalkable(c, l) && (n = e[c][l], i = [c, l]);
          return i
        }, t.getFallbackPosition = function (e) {
          return this.getNearWalkableTile(this.convertTiledToNodePos.apply(this, e))
        }, e
      }();
    i.AStarMap = l, cc._RF.pop()
  }, {}],
  ActorSpineShow: [function (e, t) {
    "use strict";
    cc._RF.push(t, "c2b25pbDalBZIe2SCRffE1X", "ActorSpineShow"), cc.Class({
      extends: cc.Component,
      properties: {
        labSkinName: cc.Label,
        spLevel: cc.Sprite,
        skillNode: cc.Node,
        defaultName: "",
        isShowFire: !1,
        isShowChuChang: !1
      },
      onLoad: function () {
        this.skillNode && this.skillNode.on(cc.Node.EventType.TOUCH_START, this.clickSkillDesc, this), "" != this.defaultName && this.intiSKin(this.defaultName)
      },
      setHuanSke: function () {},
      setZombieSke: function () {},
      intiSKin: function (e, t) {
        var i = this;
        if (this.ske = this.ske ? this.ske : this.node.getComponent(sp.Skeleton), GlobalMng.sceneMng.setSkeByBundle("human/\u89d2\u8272", this.ske, "\u5f85\u673a", !0, e, function () {
            if (i.ske.setSkin(e), i.ske.setSlotsToSetupPose(), i.ske.setAnimation(0, "\u5f85\u673a", !0), t && i.ske.setAnimation(5, "\u6362\u67aa/" + t, !1), i.isShowFire) {
              i.ske.node.stopAllActions();
              var n = _.randomInRange(.1, 1.1),
                a = _.randomInRange(1.1, 1.6);
              cc.tween(i.ske.node).repeatForever(cc.tween().delay(n).call(function () {
                i.ske.setAnimation(0, "\u5f00\u67aa", !0)
              }).delay(a).call(function () {
                i.ske.setAnimation(0, "\u5f85\u673a", !0)
              }).delay(3)).start()
            }
            i.isShowChuChang && i.ske.setAnimation(0, "\u51fa\u573a", !0)
          }), this.labSkinName && (this.labSkinName.string = e), this.spLevel) {
          var n = GlobalMng.jsonMng.getConfigByEle("PeopleDataTable", "Name", e).Lv;
          GlobalMng.sceneMng.setSpriteFrameByBundle("Res/\u89d2\u8272\u7ea7\u522b/sd_dk_name_" + n, this.spLevel)
        }
      },
      initZombieSkin: function (e) {
        var t = this;
        if (this.ske = this.ske ? this.ske : this.node.getComponent(sp.Skeleton), GlobalMng.sceneMng.setSkeByBundle("\u611f\u67d3\u8005/" + e, this.ske, "\u5f85\u673a", !0, "default", function () {
            t.isShowFire && (t.ske.setAnimation(0, "\u653b\u51fb", !1), t.ske.addAnimation(0, "\u5f85\u673a", !0))
          }), this.labSkinName && (this.labSkinName.string = e), this.spLevel) {
          var i = GlobalMng.jsonMng.getConfigByEle("MonsterDataTable", "Name", e).Lv;
          GlobalMng.sceneMng.setSpriteFrameByBundle("Res/\u89d2\u8272\u7ea7\u522b/sd_dk_name_" + i, this.spLevel)
        }
        this.skillNode && (this.skillName = GlobalMng.jsonMng.getConfigByEle("MonsterDataTable", "Name", e).Skill, GlobalMng.sceneMng.setSpriteFrameByBundle("Res/\u6280\u80fdicon/" + this.skillName, this.skillNode.getChildByName("sp").getComponent(cc.Sprite)))
      },
      clickSkillDesc: function () {
        var e = this;
        GlobalMng.sceneMng.createUIByBundle("ui/layer/SkillDesc", cc.find("Canvas"), function (t) {
          t.getComponent("SkillDesc").initSkll(e.skillName)
        })
      }
    }), cc._RF.pop()
  }, {}],
  ActorWeaponShow: [function (e, t) {
    "use strict";
    cc._RF.push(t, "8f7ddFdjulP/paK6PHpnXdy", "ActorWeaponShow"), cc.Class({
      extends: cc.Component,
      properties: {
        skeWeapon: sp.Skeleton,
        spLevel: cc.Sprite,
        labAttack: cc.Label,
        labSpeed: cc.Label,
        labSV: cc.Label,
        labAmmo: cc.Label,
        labWeaponName: cc.Label,
        pbAttack: cc.ProgressBar,
        pbSpeed: cc.ProgressBar,
        pbSV: cc.ProgressBar,
        pbAmmo: cc.ProgressBar
      },
      onLoad: function () {},
      getWeaponAverage: function (e, t, i) {
        var n = GlobalMng.jsonMng.queryConfig("GunsDataTable", function (i) {
            return i[e] === t
          }),
          a = 0;
        return n.forEach(function (e) {
          a += e[i]
        }), a / n.length
      },
      initWeapon: function (e) {
        var t = GlobalMng.jsonMng.getConfigByEle("GunsDataTable", "Name", e),
          i = 1500;
        if ("\u51b2\u950b\u67aa" == t.GunsType ? i = 150 : "\u9730\u5f39\u67aa" == t.GunsType ? i = 249 : "\u7a81\u51fb\u6b65\u67aa" == t.GunsType ? i = 150 : "\u72d9\u51fb\u67aa" == t.GunsType ? i = 1800 : "\u673a\u67aa" == t.GunsType && (i = 150), this.skeWeapon && this.skeWeapon.setAnimation(0, "\u67aa\u52a8\u6001/" + e, !0), this.spLevel && GlobalMng.sceneMng.setSpriteFrameByBundle("Res/\u89d2\u8272\u7ea7\u522b/sd_dk_name_" + t.Lv, this.spLevel), this.labAttack && (this.labAttack.string = t.ATK), this.labSpeed && (this.labSpeed.string = t.RPM), this.labSV && (this.labSV.string = t.GunSV), this.labAmmo && (this.labAmmo.string = t.GunAmmo), this.labWeaponName && (this.labWeaponName.string = t.Name), this.pbAttack && this.setProgress(this.pbAttack, t.ATK, i), this.pbSpeed) {
          var n = 2.5 - t.RPM;
          this.setProgress(this.pbSpeed, n, 2.5)
        }
        this.pbSV && this.setProgress(this.pbSV, t.GunSV, 100), this.pbAmmo && this.setProgress(this.pbAmmo, t.GunAmmo, 150)
      },
      setProgress: function (e, t, i) {
        e.node.stopAllActions(), e.progress = 0;
        var n = t / i;
        cc.tween(e).to(.15, {
          progress: n
        }, {
          easing: "linear"
        }).start()
      }
    }), cc._RF.pop()
  }, {}],
  AudioController: [function (e, t) {
    "use strict";
    cc._RF.push(t, "d734coRSR9FbZg2sBleEZyn", "AudioController"), e("Game"), cc.Class({
      extends: cc.Component,
      properties: {
        MAX_DISTANCE: {
          default: 800,
          tooltip: "\u8d85\u8fc7\u6b64\u8ddd\u79bb\u65e0\u58f0\u97f3"
        },
        MIN_DISTANCE: {
          default: 400,
          tooltip: "\u5728\u6b64\u8ddd\u79bb\u6216\u4ee5\u5185\u4e3a\u6700\u5927\u97f3\u91cf"
        },
        MAX_VOLUME: {
          default: 1,
          tooltip: "\u6700\u5927\u97f3\u91cf"
        },
        MIN_VOLUME: {
          default: .5,
          tooltip: "\u6700\u5c0f\u97f3\u91cf"
        }
      },
      start: function () {
        this.trainAudio = this.node.getComponent(cc.AudioSource), this.trainAudio.volume = 0
      },
      update: function () {
        if (this.game.roleLoadCompelete) {
          var e, t, i, n, a = null,
            o = 0;
          GlobalMng.isSingel() ? (a = GlobalMng.isHuman() ? this.game.role1Script.node : this.game.ghost1Script.node, o = this.calculateDistance(this.node, a)) : (GlobalMng.isHuman() ? (e = this.game.role1Script.node, t = this.game.role2Script.node) : (e = this.game.ghost1Script.node, t = this.game.ghost2Script.node), i = this.calculateDistance(this.node, e), n = this.calculateDistance(this.node, t), o = Math.min(i, n)), this.adjustAudioVolume(o)
        }
      },
      calculateDistance: function (e, t) {
        if (!e || !t) return 1 / 0;
        var i = e.getPosition(),
          n = t.getPosition();
        return i.sub(n).mag()
      },
      adjustAudioVolume: function (e) {
        if (e > this.MAX_DISTANCE) this.trainAudio.volume = 0;
        else if (e <= this.MIN_DISTANCE) this.trainAudio.volume = this.MAX_VOLUME;
        else {
          var t = this.MAX_VOLUME - this.MIN_VOLUME,
            i = this.MAX_DISTANCE - this.MIN_DISTANCE,
            n = (e - this.MIN_DISTANCE) / i,
            a = this.MAX_VOLUME - t * n;
          this.trainAudio.volume = Math.max(this.MIN_VOLUME, Math.min(this.MAX_VOLUME, a))
        }
      }
    }), cc._RF.pop()
  }, {
    Game: "Game"
  }],
  AudioMng: [function (e, t) {
    "use strict";
    cc._RF.push(t, "4d4a5t50e9IypgOKeBbxhU1", "AudioMng");
    var i = e("Configuration");
    cc.Class({
      extends: cc.Component,
      properties: {
        gamemusic: {
          default: [],
          type: cc.AudioClip
        },
        gamesound: {
          default: [],
          type: cc.AudioClip
        },
        isUseBundle: !1
      },
      init: function () {
        GlobalMng.audioMng = this, cc.game.addPersistRootNode(this.node), this.curBGMIndex = -1, this.musicId = null, this.soundId = [], this.dynamicsId = {}, this.audioClipCache = {}, this.effectSound = null, this.musicVolume = i.getGlobalData("music") ? 1 : 0, this.soundVolume = i.getGlobalData("sound") ? 1 : 0, this.vibrateOpen = i.getGlobalData("vibrate"), console.log("\u80cc\u666f\u97f3\u4e50\u97f3\u91cf: " + this.musicVolume), console.log("\u97f3\u6548\u97f3\u91cf: " + this.soundVolume), this.setSound(this.musicVolume), this.setSound(this.soundVolume, !1), this.setVibrate(this.vibrateOpen), this.bgmSequence = [1, 2, 3], this.currentBGMIndexInSequence = 0
      },
      setBundel: function () {
        this.resBundel = cc.resources
      },
      playGameMusic: function (e) {
        this.curBGMIndex == e && this.musicId && cc.audioEngine.getState(this.musicId) === cc.audioEngine.AudioState.PLAYING || (this.musicId && cc.audioEngine.stop(this.musicId), this.curBGMIndex = e, this.musicId = cc.audioEngine.play(this.gamemusic[e], !0, this.musicVolume))
      },
      playGameMusicInSequence: function (e) {
        var t = this;
        e && this.musicId && cc.audioEngine.stop(this.musicId);
        var i = this.bgmSequence[this.currentBGMIndexInSequence];
        this.curBGMIndex = i, this.musicId = cc.audioEngine.play(this.gamemusic[i], !1, this.musicVolume), cc.audioEngine.setFinishCallback(this.musicId, function () {
          t.currentBGMIndexInSequence = (t.currentBGMIndexInSequence + 1) % t.bgmSequence.length, t.playGameMusicInSequence(!1)
        })
      },
      stopMusic: function () {
        cc.audioEngine.stop(this.musicId), this.musicId = null
      },
      playSound: function (e, t, i) {
        t = t || !1, i = i || 1, this.soundId[e] && cc.audioEngine.getState(this.soundId[e]) === cc.audioEngine.AudioState.PLAYING || (this.soundId[e] = cc.audioEngine.play(this.gamesound[e], t, i))
      },
      stopSound: function (e) {
        this.soundId[e] && (cc.audioEngine.stop(this.soundId[e]), delete this.soundId[e])
      },
      setVibrate: function (e) {
        this.vibrateOpen = e, i.setGlobalData("vibrate", e)
      },
      vibrateDevice: function () {
        if (this.vibrateOpen) try {
          window.wx ? wx.vibrateShort() : window.tt ? tt.vibrateShort() : window.qg ? qg.vibrateShort() : window.qq && qq.vibrateShort()
        } catch (e) {}
      },
      setSound: function (e, t) {
        if (t = !1 !== t, !("number" != typeof e || isNaN(e) || e < 0 || e > 1))
          if (t) this.musicId && cc.audioEngine.setVolume(this.musicId, e), this.musicVolume = e, i.setGlobalData("music", e > 0);
          else
            for (var n in cc.audioEngine.setEffectsVolume(e), this.soundVolume = e, i.setGlobalData("sound", e > 0), this.dynamicsId) cc.audioEngine.setVolume(this.dynamicsId[n], e)
      },
      preloadSoundRes: function (e) {
        var t = this;
        e.forEach(function (e) {
          t.audioClipCache[e] || cc.resources.load("audios/zEffect/" + e, cc.AudioClip, function (i, n) {
            i ? console.error("\u9884\u52a0\u8f7d\u97f3\u6548\u5931\u8d25:", e, i) : (t.audioClipCache[e] = n, n.addRef())
          })
        })
      },
      playSoundRes: function (e, t, i, n) {
        t = t || 1, i = i || !1, n = n || null;
        var a = this;
        this.audioClipCache[e] ? this._playAudioClip(e, this.audioClipCache[e], t, i, n) : cc.resources.load("audios/zEffect/" + e, cc.AudioClip, function (o, s) {
          o ? console.error("\u64ad\u653e\u97f3\u6548\u5931\u8d25:", e, o) : (a.audioClipCache[e] = s, s.addRef(), a._playAudioClip(e, s, t, i, n))
        })
      },
      _playAudioClip: function (e, t, i, n, a) {
        var o = cc.audioEngine.play(t, n, i * this.soundVolume);
        if (this.dynamicsId[e] = o, !n) {
          var s = this;
          cc.audioEngine.setFinishCallback(o, function () {
            a && a(), delete s.dynamicsId[e]
          })
        }
      },
      stopSoundRes: function (e) {
        this.dynamicsId[e] && (cc.audioEngine.stop(this.dynamicsId[e]), delete this.dynamicsId[e])
      }
    }), cc._RF.pop()
  }, {
    Configuration: "Configuration"
  }],
  BulletBase: [function (e, t) {
    "use strict";
    cc._RF.push(t, "3c05eRpQiVOEoBQ+wSOCyyM", "BulletBase"), e("PoolMng"), cc.Class({
      extends: cc.Component,
      properties: {
        bulletId: 0,
        bulletName: "\u9ed8\u8ba4\u5b50\u5f39",
        speed: 1e3,
        penetration: 0,
        damageDropStart: 200,
        damageDropEnd: 500,
        minDamagePercent: .5,
        _isActive: !1,
        _travelDistance: 0,
        _sourceWeapon: null,
        _sourceCharacter: null,
        _direction: cc.v2(1, 0)
      },
      onLoad: function () {
        this.penetration = this.ysPenetration
      },
      update: function (e) {
        var t = this;
        if (this._isActive) {
          var i = this._direction.mul(this.speed * e);
          this.node.position = this.node.position.add(i), this._travelDistance += i.mag(), this._travelDistance >= this.flyDist && ("\u69b4\u5f39" == this.bulletName && GlobalMng.sceneMng.createUIByBundle("actor/skillEffect/\u69b4\u5f39\u7206\u70b8", this.game.bulletRoot, function (e) {
            e.setPosition(t.node.getPosition()), e.getComponent("GrenadeBoom").initGrenade(t._sourceCharacter)
          }), this.deactivate())
        }
      },
      init: function (e, t) {
        this._sourceWeapon = e, this._sourceCharacter = e.character, this.flyDist = e.range;
        var i = t.normalize();
        if (e.gunSV < 100) {
          var n = .2 * (100 - e.gunSV),
            a = (2 * Math.random() - 1) * n * Math.PI / 180;
          i = cc.v2(t.x * Math.cos(a) - t.y * Math.sin(a), t.x * Math.sin(a) + t.y * Math.cos(a)).normalize()
        }
        this._direction = i, this.speed = e.bulletSpeed;
        var o = 180 * Math.atan2(i.y, i.x) / Math.PI;
        this.node.angle = o - 90, this._isActive = !0, this.game = cc.find("Canvas").getComponent("Game")
      },
      setConfig: function (e) {
        for (var t in e) this.hasOwnProperty(t) && (this[t] = e[t])
      },
      calculateHitPoint: function (e) {
        var t, i = e.node.position.clone(),
          n = this._direction;
        e instanceof cc.BoxCollider ? t = e.size.width : e instanceof cc.CircleCollider && (t = 2 * e.radius);
        var a = n.mul(t / 2);
        return i.add(a)
      },
      onCollisionEnter: function (e, t) {
        var i = this,
          n = this.calculateHitPoint(t);
        0 == t.tag ? this.onHit(e.node.parent, n) : 1 == t.tag && (this.deactivate(), GlobalMng.sceneMng.createUIByBundle("actor/skillEffect/\u69b4\u5f39\u7206\u70b8", this.game.bulletRoot, function (e) {
          e.setPosition(n), e.getComponent("GrenadeBoom").initGrenade(i._sourceCharacter)
        }))
      },
      onHit: function (e, t) {
        var i = this.getTargetType(e),
          n = this.calculateDamage();
        "\u611f\u67d3\u8005" == i && this.applyDamage(e, n, t), this.game.bulletFactory.createImpactEffect(t, i), this.game.bulletFactory.playImpactSound(t, i), this.penetration > 0 ? this.penetration-- : this.deactivate()
      },
      calculateDamage: function () {
        var e = this._sourceWeapon.calculateDamage(),
          t = e.damage,
          i = null;
        if (this._sourceWeapon.gunHit > 0) {
          var n = this._sourceWeapon.gunHit / 100;
          t *= i = 1 + (2 * Math.random() - 1) * n
        }
        return e.damage = t, e.randomMultiplier = i, e
      },
      applyDamage: function (e, t, i) {
        var n = e.getComponent("Zombie");
        n && n.takeDamage(t, {
          source: this._sourceCharacter,
          weapon: this._sourceWeapon,
          dir: this._direction,
          hitPoint: i
        })
      },
      getTargetType: function (e) {
        return "zombie" == e.group ? "\u611f\u67d3\u8005" : "default"
      },
      deactivate: function () {
        this._travelDistance = 0, this._isActive = !1, this.ysPenetration = this.penetration, this.unscheduleAllCallbacks(), this.game.bulletFactory.recycleBullet(this.node)
      }
    }), cc._RF.pop()
  }, {
    PoolMng: "PoolMng"
  }],
  BulletFactory: [function (e, t) {
    "use strict";
    cc._RF.push(t, "a545c/rDsZAQIokXQJveQVH", "BulletFactory");
    var i = e("PoolMng");
    cc.Class({
      extends: cc.Component,
      properties: {
        bulletPrefabs: [cc.Prefab],
        effectPrefabs: [cc.Prefab],
        enablePooling: !0
      },
      init: function (e) {
        this.game = e
      },
      createBullet: function (e, t, n, a, o) {
        var s = null;
        if (this.enablePooling) {
          var r = this.bulletPrefabs[e];
          if (!r) return cc.error("BulletFactory: \u672a\u627e\u5230\u7c7b\u578b\u4e3a " + e + " \u7684\u5b50\u5f39\u9884\u5236\u4f53"), null;
          s = i.getNode(r)
        } else {
          var c = this.bulletPrefabs[e];
          if (!c) return cc.error("BulletFactory: \u672a\u627e\u5230\u7c7b\u578b\u4e3a " + e + " \u7684\u5b50\u5f39\u9884\u5236\u4f53"), null;
          s = cc.instantiate(c)
        }
        s.parent = this.game.bulletRoot, s.setPosition(n), s.active = !0;
        var l = s.getComponent("BulletBase");
        return l && (l.init(t, a), o && l.setConfig(o)), s
      },
      recycleBullet: function (e) {
        this.enablePooling ? (e.active = !1, i.putNode(e)) : null == e || e.destroy()
      },
      createImpactEffect: function () {},
      createCriticalEffect: function () {},
      playImpactSound: function () {}
    }), cc._RF.pop()
  }, {
    PoolMng: "PoolMng"
  }],
  ButtonCtrl: [function (e, t) {
    "use strict";
    cc._RF.push(t, "06098QFzu5PHq1v1AlTDfwi", "ButtonCtrl"), cc.Class({
      extends: cc.Component,
      properties: {},
      onLoad: function () {
        function e() {}
        this.node.on("touchstart", function () {
          GlobalMng.audioMng.playSoundRes("sfx_Btn")
        }, this), this.node.on("touchend", e, this), this.node.on("touchcancel", e, this)
      }
    }), cc._RF.pop()
  }, {}],
  CCTools: [function (e, t) {
    "use strict";
    cc._RF.push(t, "5fb104P15FFFp+vQXAE88SV", "CCTools");
    var i = new(cc.Class({
      onLoad: function () {},
      randomPointInCircle: function (e, t) {
        var i = 2 * Math.random() * Math.PI,
          n = Math.sqrt(Math.random()) * t,
          a = e.x + n * Math.cos(i),
          o = e.y + n * Math.sin(i);
        return new cc.Vec2(a, o)
      },
      hideChildNodesByName: function (e) {
        e.children.forEach(function (e) {
          e.active = !1
        })
      },
      deleteChildNodesByName: function (e, t) {
        e && Array.isArray(t) ? e.children.forEach(function (e) {
          t.includes(e.name) && (null == e || e.destroy())
        }) : console.error("\u65e0\u6548\u7684\u53c2\u6570\uff1a\u8bf7\u786e\u4fddparentNode\u662fcc.Node\uff0cnameArray\u662f\u5b57\u7b26\u4e32\u6570\u7ec4\u3002")
      },
      transformToNode1Local: function (e, t) {
        var i = t.parent.convertToWorldSpaceAR(t.getPosition());
        return e.convertToNodeSpaceAR(i)
      },
      getDirectionVector: function (e, t) {
        var i = e.convertToWorldSpaceAR(cc.v2(0, 0)),
          n = t.convertToWorldSpaceAR(cc.v2(0, 0));
        return cc.v2(n.x - i.x, n.y - i.y).normalize()
      },
      screenShake: function (e, t, i) {
        void 0 === t && (t = .5), void 0 === i && (i = 10), e.stopAllActions();
        var n = e.position.clone(),
          a = cc.sequence(cc.repeat(cc.sequence(cc.moveBy(.1, cc.v2(Math.random() * i - i / 2, Math.random() * i - i / 2)), cc.moveTo(.1, n)), Math.floor(t / .2)), cc.moveTo(.1, cc.v2(0, 0)));
        e.runAction(a)
      },
      getRandomPointInRadius: function (e, t) {
        var i = Math.random() * t,
          n = 2 * Math.random() * Math.PI,
          a = i * Math.cos(n),
          o = i * Math.sin(n);
        return cc.v2(e.x + a, e.y + o)
      },
      calculatePoints: function (e, t, i, n) {
        for (var a = i / 2, o = [], s = 0; s < n; s++) {
          var r = s * (360 / n) * (Math.PI / 180),
            c = e + a * Math.cos(r),
            l = t + a * Math.sin(r);
          o.push({
            x: c,
            y: l
          })
        }
        return o
      },
      getAngleBetweenNodes: function (e, t) {
        var i = e.convertToWorldSpaceAR(cc.v2(0, 0)),
          n = t.convertToWorldSpaceAR(cc.v2(0, 0)),
          a = n.x - i.x,
          o = n.y - i.y;
        return Math.atan2(o, a) * (180 / Math.PI)
      },
      getWorldDistance: function (e, t) {
        var i = e.convertToWorldSpaceAR(cc.v2(0, 0)),
          n = t.convertToWorldSpaceAR(cc.v2(0, 0)),
          a = Math.abs(i.x - n.x),
          o = Math.abs(i.y - n.y);
        return [i.sub(n).mag(), a, o]
      },
      scrollVerticaPos: function (e, t, i) {
        var n = Math.abs(i.y),
          a = t.getContentSize(),
          o = 1 - (n / a.height >= .5 ? n + i.height / 2 : n - i.height / 2) / a.height;
        o = Math.min(Math.max(o, 0), 1), e.scrollToPercentVertical(o, .25)
      },
      scrollHorizontalPos: function (e, t, i) {
        var n = Math.abs(i.x),
          a = t.getContentSize(),
          o = (n / a.width >= .5 ? n + i.width / 2 : n - i.width / 2) / a.width;
        o = Math.min(Math.max(o, 0), 1), e.scrollToPercentHorizontal(o, .25)
      },
      getCameraMovePos: function (e, t, i) {
        var n = e / 2,
          a = t / 2,
          o = cc.winSize.width / 2,
          s = cc.winSize.height / 2,
          r = i.x,
          c = i.y;
        return r < -n + o ? r = -n + o : r > n - o && (r = n - o), c < -a + s ? c = -a + s : c > a - s && (c = a - s), cc.v2(r, c)
      },
      vectorsToDegress: function (e, t) {
        var i = e.signAngle(t);
        return cc.misc.radiansToDegrees(i)
      },
      degreesToVectors: function (e, t) {
        var i = cc.misc.degreesToRadians(e);
        return t.rotate(-i)
      },
      findClosestNode: function (e, t) {
        if (!e || !t || 0 === t.length) return null;
        var i = null,
          n = 1 / 0,
          a = e.parent.convertToWorldSpaceAR(e.position);
        return t.forEach(function (e) {
          var t = e.parent.convertToWorldSpaceAR(e.position),
            o = a.sub(t).mag();
          o < n && (n = o, i = e)
        }), [i, n]
      },
      setGray: function (e, t) {
        for (var i = e.getComponentsInChildren(cc.Sprite), n = 0; n < i.length; ++n) {
          var a = i[n];
          t ? a.setMaterial(0, cc.Material.getBuiltinMaterial("2d-gray-sprite")) : a.setMaterial(0, cc.Material.getBuiltinMaterial("2d-sprite"))
        }
      },
      checkGoldTips: function (e, t, i, n) {
        var a, o, s = cc.view.getVisibleSize().width / 4,
          r = e.convertToWorldSpaceAR(cc.v2(0, 0)),
          c = t.convertToWorldSpaceAR(cc.v2(0, 0)),
          l = i.width / 2,
          h = i.height / 2;
        GlobalMng.isDouble() && 1 == n ? (c.x += s, a = cc.v2(-cc.winSize.width / 2 + l, -cc.winSize.height / 2 + h), o = cc.v2(-l, cc.winSize.height / 2 - h)) : GlobalMng.isDouble() && 2 == n ? (c.x -= s, a = cc.v2(l, -cc.winSize.height / 2 + h), o = cc.v2(cc.winSize.width / 2 - l, cc.winSize.height / 2 - h)) : (a = cc.v2(-cc.winSize.width / 2 + l, -cc.winSize.height / 2 + h), o = cc.v2(cc.winSize.width / 2 - l, cc.winSize.height / 2 - h));
        var u = r.sub(c),
          d = u.clone(),
          p = u.clampf(a, o);
        if (p.mag() == d.mag()) i.active = !1;
        else {
          i.setPosition(p.x, p.y);
          var m = (GlobalMng.isDouble() ? r.sub(c.add(p)).normalize() : r.sub(c).normalize()).signAngle(cc.v2(0, 1)) / Math.PI * 180;
          i.getChildByName("goldTipRotate").angle = -m, i.active = !0
        }
      },
      loadMoveClip: function (e, t, i) {
        var n = this,
          a = null,
          o = null;
        cc.assetManager.loadRemote({
          url: e,
          type: "json"
        }, function (e, t) {
          e || null !== (a = t) && null !== o && n.convertMovieClip2Animation(a, o, i)
        }), cc.assetManager.loadRemote({
          url: t,
          type: "png"
        }, function (e, t) {
          e || (o = t, null !== a && null !== o && n.convertMovieClip2Animation(a, o, i))
        })
      },
      convertMovieClip2Animation: function (e, t, i) {
        var n = e.res,
          a = {};
        for (var o in n) {
          var s = n[o],
            r = new cc.SpriteFrame(t, cc.rect(s.x, s.y, s.w, s.h));
          a[o] = r
        }
        var c = e.mc,
          l = [];
        for (var h in c) {
          var u = {},
            d = c[h];
          u.sample = d.frameRate, u.frames = [];
          for (var p = 0; p < d.frames.length; p++)
            for (var m = d.frames[p], g = 0; g < m.duration; g++) u.frames.push(a[m.res]);
          var f = cc.AnimationClip.createWithSpriteFrames(u.frames, u.sample);
          f.name = h, l.push(f)
        }
        i(null, l)
      },
      formatName: function (e) {
        var t = "";
        if (e.length)
          if (e.length > 6) {
            for (var i = 0; i < 6; i++) {
              var n = e[i] + e[i + 1];
              null !== emojione.regUnicode.exec(n) ? (t += n, i++) : t += e[i]
            }
            t += "..."
          } else t = e;
        return t
      },
      getRandomPositionInRadius: function (e, t) {
        var i = Math.random() * Math.PI * 2,
          n = Math.random() * t,
          a = e.x + Math.cos(i) * n,
          o = e.y + Math.sin(i) * n;
        return cc.v2(a, o)
      }
    }));
    i.onLoad(), t.exports = i, cc._RF.pop()
  }, {}],
  CameraController: [function (e, t) {
    "use strict";
    cc._RF.push(t, "f0286ll1apKZrae9hy6uAYC", "CameraController"), e("Types"), e("Game"), cc.Class({
      extends: cc.Component,
      properties: {
        ctlType: {
          default: 0,
          tooltip: "\u63a7\u5236\u7c7b\u578b"
        },
        isUseRenderCamera: !1,
        isFloow: !0
      },
      initCamera: function (e, t, i, n) {
        void 0 === n && (n = !1), this.node.active = !0, this.followTarget = e, this.mapWidth = t, this.mapHeight = i, this.camera = this.node.getComponent(cc.Camera);
        var a = cc.v2(-this.mapWidth / 2, -this.mapHeight / 2),
          o = cc.v2(this.mapWidth / 2, this.mapHeight / 2),
          s = cc.v2(cc.winSize.width / 2, cc.winSize.height / 2);
        n && (s = cc.v2(cc.winSize.width / 2 - GlobalMng.getDoubleRightCenter().x, cc.winSize.height / 2), this.isUseRenderCamera ? this.cameraRendeTextureSplit() : this.cameraViewPortSplit()), this.cameraRangeBox = cc.rect(a.x + s.x, a.y + s.y, o.x - s.x, o.y - s.y)
      },
      update: function (e) {
        if (cc.isValid(this.followTarget)) {
          if (this.followTarget && this.isFloow) {
            var t = this.followTarget.x,
              i = this.followTarget.y + 30;
            if (t = Math.max(this.cameraRangeBox.x, Math.min(t, this.cameraRangeBox.width)), i = Math.max(this.cameraRangeBox.y, Math.min(i, this.cameraRangeBox.height)), GlobalMng.isSingle()) {
              var n = this.node.position,
                a = cc.v2(t, i);
              this.lastTargetPos || (this.lastTargetPos = a.clone());
              var o = a.sub(this.lastTargetPos).div(e);
              this.lastTargetPos = a.clone();
              var s = n.sub(a).mag(),
                r = o.mag() / 500,
                c = s / 200,
                l = Math.max(r, c),
                h = Math.max(.02, Math.min(.3, .1 * (1 - l))),
                u = cc.v2(0, 0),
                d = this.smoothDamp(n.x, a.x, u.x, h, 1 / 0, e),
                p = this.smoothDamp(n.y, a.y, u.y, h, 1 / 0, e);
              this.node.setPosition(d, p)
            } else {
              var m = GlobalMng.getDoubleRightCenter().x;
              1 === this.ctlType ? this.node.setPosition(t - m, i) : 2 === this.ctlType && this.node.setPosition(t + m, i)
            }
          }
        } else this.followTarget = null
      },
      smoothDamp: function (e, t, i, n, a, o) {
        var s = 2 / (n = Math.max(1e-4, n)),
          r = s * o,
          c = 1 / (1 + r + .48 * r * r + .235 * r * r * r),
          l = e - t,
          h = t,
          u = a * n,
          d = (i + s * (l = Math.min(Math.max(l, -u), u))) * o;
        i = (i - s * d) * c;
        var p = (t = e - l) + (l + d) * c;
        return h - e > 0 == p > h && (i = ((p = h) - h) / o), p
      },
      cameraViewPortSplit: function () {
        1 == this.ctlType ? (this.camera.rect = new cc.Rect(-.5, 0, 1, 1), this.node.setPosition(GlobalMng.getDoubleLeftCenter())) : 2 == this.ctlType && (this.camera.rect = new cc.Rect(.5, 0, 1, 1), this.node.setPosition(GlobalMng.getDoubleRightCenter()))
      },
      cameraRendeTextureSplit: function () {
        var e = cc.view.getVisibleSize();
        this.renderSp.node.width = e.width / 2 - 10, this.renderSp.node.height = e.height;
        var t = new cc.RenderTexture;
        t.initWithSize(this.renderSp.node.width, this.renderSp.node.height), this.camera.targetTexture = t;
        var i = new cc.SpriteFrame;
        i.setTexture(t), this.renderSp.spriteFrame = i, this.renderSp.node.scaleY = -1, 1 == this.ctlType ? (this.renderSp.node.x = -e.width / 4, this.camera.clearFlags = cc.Camera.ClearFlags.COLOR | cc.Camera.ClearFlags.DEPTH | cc.Camera.ClearFlags.STENCIL) : 2 == this.ctlType && (this.renderSp.node.x = e.width / 4, this.camera.clearFlags = cc.Camera.ClearFlags.COLOR | cc.Camera.ClearFlags.DEPTH | cc.Camera.ClearFlags.STENCIL)
      },
      isPointInCameraView: function (e, t) {
        if (void 0 === t && (t = 1), !this.camera || !this.node.active || !e) return !1;
        var i = this.node.getPosition(),
          n = cc.winSize,
          a = n.width * this.camera.rect.width * t,
          o = n.height * this.camera.rect.height * t,
          s = this.camera.rect.x * n.width,
          r = this.camera.rect.y * n.height,
          c = a / 2,
          l = o / 2,
          h = i.x + s,
          u = i.y + r,
          d = h - c,
          p = h + c,
          m = u - l,
          g = u + l;
        return e.x >= d && e.x <= p && e.y >= m && e.y <= g
      },
      debugDrawViewBounds: function (e) {
        if (void 0 === e && (e = 1), this.camera && this.node.active) {
          var t = this.node.getPosition(),
            i = cc.winSize,
            n = this.camera.rect,
            a = i.width * n.width * e,
            o = i.height * n.height * e,
            s = t.x + n.x * i.width,
            r = t.y + n.y * i.height,
            c = a / 2,
            l = o / 2;
          console.log("\u89c6\u91ce\u8fb9\u754c:", {
            left: s - c,
            right: s + c,
            bottom: r - l,
            top: r + l,
            center: {
              x: s,
              y: r
            },
            size: {
              width: a,
              height: o
            }
          })
        }
      },
      setFloow: function (e) {
        this.isFloow = e
      }
    }), cc._RF.pop()
  }, {
    Game: "Game",
    Types: "Types"
  }],
  ChallengeModel: [function (e, t) {
    "use strict";
    cc._RF.push(t, "09802xBj8lA9LMJRW7nguKN", "ChallengeModel");
    var i = e("Types");
    e("PlayerData"), cc.Class({
      extends: e("GameModeBase"),
      properties: {},
      init: function (e) {
        this._super(e), this.curGameRound = 1, this.gameToltaRound = 15, this.waitReviveTime = 0, this.playerNum = 4, this.tableData = GlobalMng.jsonMng.getConfig("TiaoZhanMonsterDataTable"), this.tableId = 0, this.currentBatch = null, this.finally = !1
      },
      onInitGameModel: function () {
        this.game.joystickNode.getChildByName("Video").active = !1, this.game.humanAiAlity = [1, 1, 1, 1, 1, 1, 1], this.game.mapTip(), this.game.showCountUI(), this._createPlayer(), this.game.initHumanPanel(), this.prepareNextBatch(), this.showTipBoShu(this.curGameRound), this.game.gameState = i.GameState.Playing, this.countDownEnd = !0;
        for (var e = 0; e < this.game.humanArray.length; e++) {
          var t = this.game.humanArray[e].getComponent("Human");
          this.game.tiaozhanPanel.children[e].name = t.name, this.game.tiaozhanPanel.children[e].getChildByName("labName").getComponent(cc.Label).string = this.game.getPlayerRecordBypName(t.name).nickName
        }
        this.game.tiaozhanPanel.active = !0
      },
      prepareNextBatch: function () {
        if (this.tableId >= this.tableData.length) this.finally = !0, this.currentBatch = null;
        else {
          var e = this.tableData[this.tableId],
            t = JSON.parse(e.MonsterHome),
            i = JSON.parse(e.MonsterType),
            n = JSON.parse(e.MonsterNum);
          this.currentBatch = {
            spawns: t.map(function (e, t) {
              return {
                MonsterHome: e,
                MonsterType: i[t],
                MonsterNum: n[t],
                currentNum: 0
              }
            }),
            MonsterCD: e.MonsterCD,
            MonsterHP: e.MonsterHP,
            MonsterATK: e.MonsterATK,
            MonsterSpeed: e.MonsterSpeed,
            totalSpawned: 0,
            totalToSpawn: n.reduce(function (e, t) {
              return e + t
            }, 0)
          }
        }
      },
      startSpawn: function () {
        this.currentBatch && this.schedule(this.spawnZombie, this.currentBatch.MonsterCD)
      },
      stopSpawn: function () {
        this.unschedule(this.spawnZombie), this.currentBatch = null
      },
      spawnZombie: function () {
        var e = this,
          t = this.currentBatch;
        t && (t.spawns.forEach(function (n) {
          var a = n.MonsterType,
            o = GlobalMng.jsonMng.getConfigByEle("MonsterDataTable", "ID", a),
            s = e.game.curMapNode.getChildByName("\u51fa\u602a\u70b9").getChildByName(n.MonsterHome + "").getPosition();
          e.game.createZombie(s, o, {
            ctlType: 0,
            maxHealth: t.MonsterHP,
            attackWay: i.ZombieAttackWay.None,
            isCanRevive: !1,
            isParasite: !1,
            speed: t.MonsterSpeed,
            attackPower: t.MonsterATK,
            name: "\u611f\u67d3\u8005xx"
          }, "\u611f\u67d3\u8005\u65e0\u78b0\u649e"), t.totalSpawned++
        }), t.totalSpawned >= t.totalToSpawn && (this.stopSpawn(), this.tableId++, this.prepareNextBatch(), this.tableId < this.tableData.length && this.tableData[this.tableId].Round === this.curGameRound && this.startSpawn()))
      },
      showTipBoShu: function (e) {
        var t = this;
        GlobalMng.sceneMng.createUIByBundle("gameTipCenter/\u6311\u6218\u6ce2\u6570", this.game.gameTipCenterRoot, function (i) {
          i.zIndex = 100, i.getChildByName("labNum").getComponent(cc.Label).string = "\u7b2c" + e + "\u6ce2", GlobalMng.audioMng.playSoundRes("\u5bf9\u6218\u5f00\u59cb");
          var n = i.getChildByName("pp_img_guang");
          cc.tween(n).set({
            scaleX: 0
          }).parallel(cc.tween().to(.35, {
            scaleX: 1
          }, {
            easing: "sineOut"
          }), cc.tween().to(.35, {
            opacity: 150
          }).to(.15, {
            opacity: 255
          }, {
            easing: "sineIn"
          })).delay(.5).to(.35, {
            scaleX: 0
          }).delay(2).call(function () {
            t.startSpawn(), null == i || i.destroy()
          }).start()
        })
      },
      onCheckZombieIsWin: function () {},
      onCheckHumanIsWin: function () {
        var e = this;
        this.game.gameIsOver() || 0 !== this.game.getZombieNum() || (this.finally ? this.scheduleOnce(function () {
          GlobalMng.uiMng.showMemoryRes("ui/layer/\u6e38\u620f\u7ed3\u7b97", e.game.popUIRoot)
        }, 1) : this.tableId < this.tableData.length && this.tableData[this.tableId].Round > this.curGameRound && (this.curGameRound = this.tableData[this.tableId].Round, this.game.challengeUI.flushRound(), this.showTipBoShu(this.curGameRound)))
      },
      gameOver: function () {
        var e = this;
        this.stopSpawn(), this.game.gameTipRoot.removeAllChildren(!0), this.game.gameTipCenterRoot.removeAllChildren(!0), GlobalMng.uiMng.hideShareDG("ui/panel/RevivePanel"), this.game.joystickNode.active = !1, this.game.cameraScript.followTarget = null, this.game.gameState = i.GameState.Over, this.game.allActorArray.forEach(function (e) {
          e.active = !1
        }), GlobalMng.audioMng.playSoundRes("\u6e38\u620f\u7ed3\u7b97\u754c\u9762bgm"), GlobalMng.sceneMng.createUIByBundle("gameTipCenter/\u6e38\u620f\u7ed3\u675fTips", this.game.popUIRoot, function (t) {
          t.getChildByName("root").getComponent(cc.Animation).on("finished", function () {
            null == t || t.destroy(), GlobalMng.uiMng.showMemoryRes("ui/layer/\u6e38\u620f\u7ed3\u7b97", e.game.popUIRoot)
          })
        })
      }
    }), cc._RF.pop()
  }, {
    GameModeBase: "GameModeBase",
    PlayerData: "PlayerData",
    Types: "Types"
  }],
  ChallengeUI: [function (e, t) {
    "use strict";
    cc._RF.push(t, "e627evNUwJFjoo1CxnCaoAo", "ChallengeUI"), cc.Class({
      extends: cc.Component,
      properties: {
        labRound: cc.Label,
        labScore: cc.Label,
        labZombieNum: cc.Label
      },
      onLoad: function () {
        this.game = cc.find("Canvas").getComponent("Game"), this.game01DT = 0, this.flushRound()
      },
      flushRound: function () {
        this.labRound.string = this.game.gameModeBase.curGameRound + "/" + this.game.gameModeBase.gameToltaRound
      },
      flushScore: function () {
        this.labScore.string = this.game.selfPlayer.scoreTotal, this.labZombieNum.string = this.game.getZombieNum()
      },
      update: function (e) {
        0 != this.game.gameIsPlayIng() && (this.game01DT += e, this.game01DT >= .1 && (this.game01DT = 0, this.flushScore()))
      }
    }), cc._RF.pop()
  }, {}],
  Character: [function (e, t) {
    "use strict";

    function i(e, t) {
      var i;
      if ("undefined" == typeof Symbol || null == e[Symbol.iterator]) {
        if (Array.isArray(e) || (i = n(e)) || t && e && "number" == typeof e.length) {
          i && (e = i);
          var a = 0;
          return function () {
            return a >= e.length ? {
              done: !0
            } : {
              done: !1,
              value: e[a++]
            }
          }
        }
        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }
      return (i = e[Symbol.iterator]()).next.bind(i)
    }

    function n(e, t) {
      if (e) {
        if ("string" == typeof e) return a(e, t);
        var i = Object.prototype.toString.call(e).slice(8, -1);
        return "Object" === i && e.constructor && (i = e.constructor.name), "Map" === i || "Set" === i ? Array.from(e) : "Arguments" === i || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i) ? a(e, t) : void 0
      }
    }

    function a(e, t) {
      (null == t || t > e.length) && (t = e.length);
      for (var i = 0, n = new Array(t); i < t; i++) n[i] = e[i];
      return n
    }
    cc._RF.push(t, "fedafpzjKBL0a3vcFj8l9WZ", "Character");
    var o = e("Types"),
      s = e("Constants"),
      r = e("PoolMng");
    cc.Class({
      extends: cc.Component,
      properties: {
        maxHealth: {
          default: 100,
          tooltip: "\u6700\u5927\u751f\u547d\u503c"
        },
        speed: {
          default: 200,
          tooltip: "\u79fb\u52a8\u901f\u5ea6"
        },
        team: {
          default: o.ActorTeam.None,
          type: o.ActorTeam,
          tooltip: "\u6240\u5c5e\u961f\u4f0d"
        },
        ctlType: {
          default: o.ActorControl.Player1,
          type: o.ActorControl,
          tooltip: "\u63a7\u5236\u7c7b\u578b"
        },
        healthPb: cc.ProgressBar
      },
      init: function (e, t) {
        void 0 === t && (t = {}), this.game = e, this.moveScript = this.node.getComponent("Move"), this.moveScript || (this.moveScript = this.node.addComponent("Move")), this.isAlive = !0, this.isInvalid = !1, this.id = this.node.uuid, this.name = null != t.name ? t.name : "", this.maxHealth = null != t.maxHealth ? t.maxHealth : this.maxHealth, this.health = this.maxHealth, this.team = null != t.team ? t.team : this.team, this.ctlType = null != t.ctlType ? t.ctlType : this.ctlType;
        var i = t.speed || this.speed,
          n = t.mirrorNode || this.node.getChildByName("ske");
        this.moveScript.initMove(i, n), this.moveScript.setCharacter(this), this.spineCtrl = this.node.getComponent("SpineCtrl"), this.spineCtrl.init("\u5f85\u673a"), this.actionState = o.ActorActionState.Sport, this.isUpdateZindex = !0, this.updateZTime = 0, this.buffData = [], this.isTimeTravel = !1, this.isCharge = !1, this.avoidance = 0, this.activeTimers = [], this._lastDamageTextTime = 0, this._throttleInterval = .1, this.isPlayWalkSond = !1, this.scoreOnce = 0, this.scoreDataBuffer = 0, this.scoreTotal = 0, this.killNum = 0, this.deadNum = 0, this.realAreaNode = this.node.getChildByName("realArea"), this.soleAreaNode = this.node.getChildByName("soleArea"), this.ysAreaSzie = this.realAreaNode.getContentSize(), this.node.getChildByName("realArea").getComponent(cc.Sprite).enabled = GlobalMng.isTestColl, this.realAreaNode.getComponent("ZombieCollArea").setCharacterTarget(this), this.soleAreaNode.getComponent("ZombieCollArea").setCharacterTarget(this), this.openBoxCollder(), this.perceptionData = {
          visibleZombie: [],
          visibleHuman: [],
          visibleItems: [],
          nearestThreeHuman: [],
          nearestThreeZombie: [],
          nearestEnemy: null,
          nearestAlly: null
        }, this.sightRadius = 1e4, this.isPlayer() ? (this.cameraNode = cc.find("Canvas/roleCamera"), this.cameraScript = this.cameraNode.getComponent("CameraController"), this.cameraScript.initCamera(this.node, this.game.curMapScript.mapTotalWidth, this.game.curMapScript.mapTotalHeight, !1), this.setupInputEvents(), this.node.getChildByName("selfTag").active = !0, this.schedule(this.flushscoreOnce, .1)) : this.node.getChildByName("selfTag").active = !1
      },
      onDestroy: function () {
        this.isPlayer() && (this.game.InputManager.off("buttonDown", null, this.ctlType), this.game.InputManager.off("buttonUp", null, this.ctlType))
      },
      closeBoxCollder: function () {
        this.realAreaNode.active = !1, this.soleAreaNode.active = !1
      },
      openBoxCollder: function () {
        this.realAreaNode.active = !0, this.soleAreaNode.active = !0
      },
      setupInputEvents: function () {
        var e = this;
        this.game.InputManager.on("buttonDown", function (t) {
          "skill1" == t && e.onDownSkill1()
        }, this.ctlType), this.game.InputManager.on("buttonUp", function (t) {
          "skill1" == t && e.onUpSkill1()
        }, this.ctlType), this.game.InputManager.on("buttonDown", function (t) {
          "skill2" == t && e.onDownSkill2()
        }, this.ctlType), this.game.InputManager.on("buttonUp", function (t) {
          "skill2" == t && e.onUpSkill2()
        }, this.ctlType), this.game.InputManager.on("buttonDown", function (t) {
          "skill3" == t && e.onDownSkill3()
        }, this.ctlType), this.game.InputManager.on("buttonUp", function (t) {
          "skill3" == t && e.onUpSkill3()
        }, this.ctlType)
      },
      showDamageText: function (e, t, i) {
        var n = 2 * Math.random() * Math.PI,
          a = _.random(0, 5),
          o = _.random(0, 5),
          c = t.x + a * Math.cos(n),
          l = t.y + o * Math.sin(n),
          h = cc.v2(c, l),
          u = r.getNode(this.game.damageLabelPrefab);
        u.parent = this.game.bulletRoot, u.zIndex = s.ZORDER.EFFECT_NUM_GRENADE, u.setPosition(h), u.y += 50, u.opacity = 255, u.scale = 1, u.angle = 0;
        var d = u.getChildByName("lab").getComponent(cc.Label);
        if (d.fontSize = 50, d.node.color = new cc.Color(255, 255, 255), d && (d.string = "-" + e), d.node.getChildByName("icon").active = !1, i) {
          var p = 0;
          i >= 1 && (p = 100 * (i - 1)), p > 0 && p < 5 ? d.fontSize = 65 : p >= 5 && (d.fontSize = 70, d.node.color = new cc.Color(255, 0, 0), d.string = "" + e, d.node.getChildByName("icon").active = !0)
        }
        var m = cc.v2(h.x, h.y + 100);
        cc.tween(u).parallel(cc.tween().to(.5, {
          position: m
        }, {
          easing: "sineIn"
        }), cc.tween().to(.35, {
          angle: -5
        }, {
          easing: "sineIn"
        }), cc.tween().to(.5, {
          scale: .1
        }, {
          easing: "sineIn"
        })).call(function () {
          r.putNode(u)
        }).start()
      },
      changeHealthSp: function () {
        var e = this.healthPb.node.getChildByName("bar").getComponent(cc.Sprite);
        GlobalMng.sceneMng.setSpriteFrameByBundle("Res/\u8840\u6761/img_xueTiao_lan", e)
      },
      hideHealth: function () {
        this.healthPb.node.active = !1
      },
      showHealth: function () {
        this.healthPb.node.active = !0
      },
      flushHealth: function (e) {
        void 0 === e && (e = 0), _.isNumber(e) && (this.health += e, this.health <= 0 && (this.health = 0), this.health >= this.maxHealth && (this.health = this.maxHealth), this.healthPb.progress = this.health / this.maxHealth, GlobalMng.isChallengeModel() && this.isHuman() && (this.game.tiaozhanPanel.getChildByName(this.name).getChildByName("blood").getComponent(cc.ProgressBar).progress = this.healthPb.progress, this.health <= 0 ? this.game.tiaozhanPanel.getChildByName(this.name).getChildByName("dead").active = !0 : this.game.tiaozhanPanel.getChildByName(this.name).getChildByName("dead").active = !1))
      },
      setSportState: function () {
        this.actionState = o.ActorActionState.Sport
      },
      setFreezeState: function () {
        this.actionState = o.ActorActionState.Freeze
      },
      setOtherState: function () {
        this.actionState = o.ActorActionState.Other
      },
      getIsSportState: function () {
        return this.actionState === o.ActorActionState.Sport
      },
      getIsFreezeState: function () {
        return this.actionState === o.ActorActionState.Freeze
      },
      getOtherState: function () {
        return this.actionState === o.ActorActionState.Other
      },
      isHuman: function () {
        return this.team == o.ActorTeam.Human
      },
      isZombie: function () {
        return this.team == o.ActorTeam.Zombie
      },
      addBuff: function (e) {
        this.buffData.push(e)
      },
      removeBuff: function (e) {
        _.removeItem(this.buffData, e)
      },
      isHasBuffById: function (e) {
        return this.buffData.includes(e)
      },
      openTimeTravel: function () {
        this.isTimeTravel = !0
      },
      closeTimeTravel: function () {
        this.isTimeTravel = !1
      },
      isAI: function () {
        return 0 == this.ctlType
      },
      isPlayer: function () {
        return 0 != this.ctlType
      },
      setRealAreaSize: function (e, t) {
        this.realAreaNode.width = e, this.realAreaNode.height = t, this.realAreaNode.getComponent(cc.BoxCollider).size.width = e, this.realAreaNode.getComponent(cc.BoxCollider).size.width = t
      },
      restoreRealAreaSize: function () {
        this.realAreaNode.width = this.ysAreaSzie.width, this.realAreaNode.height = this.ysAreaSzie.height, this.realAreaNode.getComponent(cc.BoxCollider).size.width = this.ysAreaSzie.height, this.realAreaNode.getComponent(cc.BoxCollider).size.width = this.ysAreaSzie.width
      },
      getCenterPos: function () {
        var e = this.node.x + this.realAreaNode.x,
          t = this.node.y + this.realAreaNode.y;
        return cc.v2(e, t)
      },
      getTopPos: function () {
        var e = this.node.x + this.realAreaNode.x,
          t = this.node.y + this.realAreaNode.y,
          i = this.realAreaNode.height / 2;
        return cc.v2(e, t + i)
      },
      getCurPayerDir: function () {
        return this.game.InputManager.getDirection(this.ctlType)
      },
      playWalk: function () {
        var e = this;
        this.isPlayWalkSond || (this.isPlayWalkSond = !0, GlobalMng.audioMng.playSoundRes("\u8dd1\u6b65\u58f0_0" + _.random(1, 4), 1, !1, function () {
          e.isPlayWalkSond = !1
        }))
      },
      heal: function (e) {
        this.isAlive && (this.health += e, this.health > this.maxHealth && (this.health = this.maxHealth), this.onHealthChanged())
      },
      setMaxHealth: function (e) {
        this.maxHealth = e, this.health = this.maxHealth
      },
      revive: function () {
        this.isAlive = !0, this.thaw(), this.onRevive()
      },
      die: function () {
        this.isAlive = !1, this.freeze(), this.onDeath()
      },
      isDie: function () {
        return !this.isAlive
      },
      setParasite: function (e) {
        this.setParasite = e
      },
      tipMessage: function (e) {
        this.isPlayer() && GlobalMng.uiMng.showTip(e)
      },
      speedUp: function (e, t, i, n) {
        void 0 === i && (i = 0), void 0 === n && (n = i), this.moveScript.speedUp(e, t, i, n)
      },
      slowDown: function (e, t, i, n) {
        void 0 === i && (i = 0), void 0 === n && (n = i), this.moveScript.slowDown(e, t, i, n)
      },
      restoreSpeed: function () {
        this.moveScript.restoreSpeed()
      },
      resetAllSpeed: function () {
        this.moveScript.resetAllSpeed()
      },
      changeBaseSpeed: function (e) {
        this.moveScript.changeBaseSpeed(e)
      },
      freeze: function () {
        this.moveScript.setFreeze(!0)
      },
      thaw: function () {
        this.isAlive && (this.isInvalid || this.moveScript.setFreeze(!1))
      },
      setInvalidFlg: function (e) {
        this.isInvalid = e
      },
      getInvalid: function () {
        return this.isInvalid
      },
      blurring: function (e, t) {
        void 0 === e && (e = 125), (t || this.node).opacity = e
      },
      restoreBlurring: function (e, t) {
        void 0 === e && (e = 255), (t || this.node).opacity = e
      },
      onIsCanSlown: function () {
        return !0
      },
      onIsCanUp: function () {
        return !0
      },
      onIsChangeSpeed: function () {
        return !0
      },
      onHealthChanged: function () {
        console.log(this.node.name + " \u751f\u547d\u503c: " + this.health + "/" + this.maxHealth)
      },
      onDeath: function () {
        console.log(this.node.name + " \u5df2\u6b7b\u4ea1")
      },
      onRevive: function () {},
      onDownSkill1: function () {},
      onUpSkill1: function () {},
      onDownSkill2: function () {},
      onDownSkill3: function () {},
      setUpdateZindex: function (e) {
        this.isUpdateZindex = e
      },
      isRectCollision: function (e, t) {
        return !(e.x + e.width < t.x || e.x > t.x + t.width || e.y + e.height < t.y || e.y > t.y + t.height)
      },
      _updateVisibleEntities: function () {
        var e;
        this.perceptionData.visibleZombie = [], this.perceptionData.visibleHuman = [], this.perceptionData.visibleItems = [];
        for (var t, n = this.node.getPosition(), a = i(this.game.humanArray); !(e = a()).done;) {
          var o = e.value;
          o !== this.node && n.sub(o.position).mag() <= this.sightRadius && this.perceptionData.visibleHuman.push(o)
        }
        for (var s = i(this.game.zombieArray); !(t = s()).done;) {
          var r = t.value;
          r !== this.node && n.sub(r.position).mag() <= this.sightRadius && this.perceptionData.visibleZombie.push(r)
        }
        if (this.isHuman())
          for (var c, l = i(this.game.itemArray); !(c = l()).done;) {
            var h = c.value;
            n.sub(h.position).mag() <= this.sightRadius && this.perceptionData.visibleItems.push(h)
          }
      },
      _findNearestEntities: function () {
        this.perceptionData.nearestEnemy = null, this.perceptionData.nearestAlly = null, this.perceptionData.nearestEnemyDist = null, this.perceptionData.nearestAllyDist = null, this.perceptionData.nearestThreeHuman = [], this.perceptionData.nearestThreeZombie = [];
        var e = 1 / 0,
          t = 1 / 0,
          n = this.node.getPosition(),
          a = [],
          o = [];
        if (this.isHuman()) {
          for (var s, r, c = i(this.game.zombieArray); !(s = c()).done;) {
            var l = s.value;
            if (l.getComponent("Zombie").isCanLock) {
              var h = n.sub(l.getPosition()).mag();
              o.push({
                entity: l,
                distance: h
              }), h < e && (e = h, this.perceptionData.nearestEnemy = l, this.perceptionData.nearestEnemyDist = h)
            }
          }
          for (var u = i(this.game.humanArray); !(r = u()).done;) {
            var d = r.value;
            if (d !== this.node) {
              var p = n.sub(d.getPosition()).mag();
              a.push({
                entity: d,
                distance: p
              }), p < t && (t = p, this.perceptionData.nearestAlly = d, this.perceptionData.nearestAllyDist = p)
            }
          }
        } else if (this.isZombie()) {
          for (var m, g, f = i(this.game.humanArray); !(m = f()).done;) {
            var y = m.value,
              v = n.sub(y.getPosition()).mag();
            a.push({
              entity: y,
              distance: v
            }), v < e && (e = v, this.perceptionData.nearestEnemy = y, this.perceptionData.nearestEnemyDist = v)
          }
          for (var C = i(this.game.zombieArray); !(g = C()).done;) {
            var b = g.value;
            if (b !== this.node) {
              var S = n.sub(b.getPosition()).mag();
              o.push({
                entity: b,
                distance: S
              }), S < t && (t = S, this.perceptionData.nearestAlly = b, this.perceptionData.nearestAllyDist = S)
            }
          }
        }
        a.sort(function (e, t) {
          return e.distance - t.distance
        }), this.perceptionData.nearestThreeHuman = a.slice(0, 3).map(function (e) {
          return e.entity
        }), o.sort(function (e, t) {
          return e.distance - t.distance
        }), this.perceptionData.nearestThreeZombie = o.slice(0, 3).map(function (e) {
          return e.entity
        })
      },
      getEnemiesCount: function (e) {
        var t = 0,
          n = this.node.getPosition();
        if (this.isHuman())
          if (e)
            for (var a, o = i(this.game.zombieArray); !(a = o()).done;) {
              var s = a.value;
              n.sub(s.getPosition()).mag() < e && t++
            } else t = this.game.zombieArray.length;
          else if (e)
          for (var r, c = i(this.game.humanArray); !(r = c()).done;) {
            var l = r.value;
            n.sub(l.getPosition()).mag() < e && t++
          } else t = this.game.humanArray.length;
        return t
      },
      getZombieCountByPos: function (e, t) {
        for (var n, a = 0, o = i(this.game.zombieArray); !(n = o()).done;) {
          var s = n.value;
          _.dist(e, s.position) <= t && a++
        }
        return a
      },
      startTimer: function (e, t, i, n) {
        if (this.activeTimers.some(function (t) {
            return t.key === e
          })) console.warn("\u8ba1\u65f6\u4efb\u52a1 " + e + " \u5df2\u5b58\u5728\uff01");
        else {
          var a = {
            key: e,
            remainingTime: t,
            originalDuration: t,
            callback: i,
            updateCallback: n
          };
          this.activeTimers.push(a)
        }
      },
      stopTimer: function (e) {
        this.activeTimers = this.activeTimers.filter(function (t) {
          return t.key !== e
        })
      },
      clearAllTimers: function () {
        this.activeTimers = []
      },
      isKeyRuning: function (e) {
        return this.activeTimers.some(function (t) {
          return t.key === e
        })
      },
      _updatePerception: function () {
        this._updateVisibleEntities(), this._findNearestEntities()
      },
      onUpdate01: function () {},
      update: function (e) {
        if (this.isAlive) {
          if (this.updateZTime += e, this.updateZTime >= .1 && (this.updateZTime = 0, this.isUpdateZindex && (this.node.zIndex = -1 * this.node.y), this._updatePerception(), this.onUpdate01()), 0 != this.ctlType) {
            var t = this.game.InputManager.getDirection(this.ctlType);
            this.moveScript.setMoveDir(t)
          }
          for (var i = this.activeTimers.length - 1; i >= 0; i--) {
            var n = this.activeTimers[i];
            if (n.remainingTime -= e, n.updateCallback) {
              var a = n.remainingTime / n.originalDuration;
              n.updateCallback(a)
            }
            n.remainingTime <= 0 && (n.remainingTime = 0, n.callback(), this.activeTimers.splice(i, 1))
          }
        }
      },
      scoreCompute: function (e) {
        if (this.scoreTotal += e, this.game.addRandkData(this.name, "score", e), this.isPlayer())
          for (this.scoreOnce += e, this.scoreOnce >= 1500 && (this.scoreOnce = 1500); this.scoreOnce >= 300;) this.scoreDataBuffer++, this.scoreOnce -= 300, this.scoreDataBuffer = this.scoreDataBuffer >= 10 ? 10 : this.scoreDataBuffer, this.scoreOnce = this.scoreOnce <= 0 ? 0 : this.scoreOnce
      },
      flushscoreOnce: function () {
        this.scoreDataBuffer > 0 && (this.scoreDataBuffer--, this.game.showPlayerScorePanel())
      }
    }), cc._RF.pop()
  }, {
    Constants: "Constants",
    PoolMng: "PoolMng",
    Types: "Types"
  }],
  CheckPoint: [function (e, t) {
    "use strict";
    cc._RF.push(t, "bef06Qoj7FK0o2cbtuylrvI", "CheckPoint");
    var i = e("PlayerData");
    cc.Class({
      extends: cc.Component,
      properties: {
        signinRedNode: cc.Node,
        rankRewardRedNode: cc.Node,
        newRedNode: cc.Node
      },
      timeStamp: function (e) {
        var t = (new Date).getTime();
        return t -= e, t /= 1e3, t /= 60, t /= 60, (t /= 24) < 1 ? t = 1 : t >= 1 && t < 2 ? t = 2 : t >= 2 && t < 3 ? t = 3 : t >= 3 && t < 4 ? t = 4 : t >= 4 && t < 5 ? t = 5 : t >= 5 && t < 6 ? t = 6 : t >= 6 && t < 7 ? t = 7 : t > 7 && (t = 7), t
      },
      checkSignin: function () {
        for (var e = this.timeStamp(i.playerInfo.signTime), t = !1, n = 0; n < e; n++)
          if (0 == i.playerInfo.signData[n]) {
            t = !0;
            break
          } this.signinRedNode.active = !!t
      },
      checkRank: function () {
        for (var e = !1, t = GlobalMng.jsonMng.getConfig("RankTable"), n = 0; n < t.length; n++)
          if (0 == i.playerInfo.rankGoldData[n] && i.playerInfo.rank >= t[n].ID) {
            e = !0;
            break
          } this.rankRewardRedNode.active = !!e
      },
      checkNew: function () {
        this.newRedNode.active = !i.playerInfo.hasNewPack
      }
    }), cc._RF.pop()
  }, {
    PlayerData: "PlayerData"
  }],
  ChuanSongDai: [function (e, t) {
    "use strict";
    cc._RF.push(t, "a62a8RPW3xGnqIONIPuDVrT", "ChuanSongDai");
    var i = cc.Enum({
      Up: 0,
      Right: 1,
      Down: 2,
      Left: 3
    });
    cc.Class({
      extends: cc.Component,
      properties: {
        speedDir: {
          default: i.Right,
          type: i,
          tooltip: "\u4f20\u9001\u5e26\u79fb\u52a8\u65b9\u5411"
        },
        moveSpeed: {
          default: 100,
          type: cc.Float,
          tooltip: "\u4f20\u9001\u5e26\u79fb\u52a8\u901f\u5ea6\uff08\u50cf\u7d20/\u79d2\uff09"
        }
      },
      onLoad: function () {
        this.moveSpeed = 50
      },
      onCollisionStay: function (e) {
        var t = e.node.name,
          n = null;
        if ("realArea" === t) {
          var a, o = null == (a = e.node.getComponent("ZombieCollArea")) ? void 0 : a.character;
          o && (n = o.node)
        } else "\u9999\u8549" != t && "\u6c34\u6ce1" != t || (n = e.node);
        if (n) {
          var s = cc.director.getDeltaTime(),
            r = this.moveSpeed * s;
          switch (this.speedDir) {
            case i.Up:
              n.y += r;
              break;
            case i.Right:
              n.x += r;
              break;
            case i.Down:
              n.y -= r;
              break;
            case i.Left:
              n.x -= r
          }
        }
      }
    }), cc._RF.pop()
  }, {}],
  ChuanSongMen: [function (e, t) {
    "use strict";
    cc._RF.push(t, "0efdcnIA1hKDazqDW9KXvcl", "ChuanSongMen"), cc.Class({
      extends: cc.Component,
      properties: {
        anotherDoor: cc.Node
      },
      onLoad: function () {
        this.coolDown = 10, this.passThrough = !1, this.countDown = this.coolDown
      },
      onCollisionEnter: function (e) {
        if ("realArea" == e.node.name && !this.passThrough && this.anotherDoor) {
          var t = e.node.getComponent("ZombieCollArea").character,
            i = t.node;
          t.openTimeTravel(), t.freeze(), GlobalMng.audioMng.playSoundRes("\u4f20\u9001"), cc.tween(i).to(.2, {
            scale: 0,
            position: this.node.getPosition()
          }).delay(.2).set({
            position: this.anotherDoor.getPosition()
          }).to(.2, {
            scale: 1
          }).call(function () {
            t.thaw(), t.closeTimeTravel(), 0 == t.ctlType && t.resMoveSetData()
          }).start(), this.passThrough = !0, this.anotherDoor.getComponent("ChuanSongMen").passThrough = !0
        }
      },
      update: function (e) {
        this.passThrough && (this.countDown -= e, this.countDown <= 0 && (this.countDown = this.coolDown, this.passThrough = !1))
      }
    }), cc._RF.pop()
  }, {}],
  CoinMng: [function (e, t) {
    "use strict";
    cc._RF.push(t, "1f0506R9XNDIb1FWV0Iz5Gd", "CoinMng"), cc.Class({
      extends: cc.Component,
      properties: {
        coinPrefab: {
          default: null,
          type: cc.Prefab
        },
        diamondPrefab: {
          default: null,
          type: cc.Prefab
        },
        maxDuration: .8
      },
      onLoad: function () {
        this.itemPool = null, this.goldPool = new cc.NodePool, this.diamondPool = new cc.NodePool, this.items = [];
        for (var e = 0; e < 10; e++) {
          var t = cc.instantiate(this.coinPrefab),
            i = cc.instantiate(this.diamondPrefab);
          this.goldPool.put(t), this.diamondPool.put(i)
        }
      },
      randomRange: function (e, t) {
        return e + Math.random() * (t - e)
      },
      spawnItem: function (e, t, i, n, a) {
        var o;
        switch (void 0 === n && (n = "coin"), void 0 === a && (a = null), n) {
          case "diamond":
            o = this.diamondPrefab, this.itemPool = this.diamondPool;
            break;
          default:
            o = this.coinPrefab, this.itemPool = this.goldPool
        }
        var s = null;
        (s = this.itemPool.size() > 0 ? this.itemPool.get() : cc.instantiate(o)).parent = i, s.zIndex = 900;
        var r = i.convertToNodeSpaceAR(e),
          c = i.convertToNodeSpaceAR(t);
        s.setPosition(r);
        var l = {
          node: s,
          startPos: r,
          targetPos: c,
          controlPoint: this._calculateControlPoint(r, c),
          duration: a || this.maxDuration,
          elapsed: 0
        };
        this.items.push(l)
      },
      _calculateControlPoint: function (e, t) {
        return cc.v2((e.x + t.x) / 2 + this.randomRange(-100, 100), (e.y + t.y) / 2 + this.randomRange(-100, 100))
      },
      update: function (e) {
        var t = this;
        this.items.forEach(function (i) {
          i.elapsed += e;
          var n = cc.misc.clamp01(i.elapsed / i.duration),
            a = t._calculateBezierPosition(i.startPos, i.controlPoint, i.targetPos, n);
          i.node.setPosition(a.x, a.y), n >= 1 && (t.itemPool.put(i.node), t.items = t.items.filter(function (e) {
            return e !== i
          }))
        })
      },
      _calculateBezierPosition: function (e, t, i, n) {
        var a = Math.pow(1 - n, 2) * e.x + 2 * (1 - n) * n * t.x + Math.pow(n, 2) * i.x,
          o = Math.pow(1 - n, 2) * e.y + 2 * (1 - n) * n * t.y + Math.pow(n, 2) * i.y;
        return cc.v2(a, o)
      },
      createGoldAnimation: function (e, t, i, n) {
        for (var a = this, o = function (e) {
            var o = cc.instantiate(a.coinPrefab);
            t.addChild(o), o.setPosition(i);
            var s = 200 * Math.random() - 100,
              r = 200 * Math.random() - 100,
              c = cc.v2(i.x + s, i.y + r),
              l = .05 * e;
            l >= .3 && (l = .3), cc.tween(o).to(.35, {
              position: c,
              scale: .8
            }, {
              easing: "smooth"
            }).to(.35 + l, {
              position: n,
              scale: .3
            }, {
              easing: "sineIn"
            }).call(function () {
              null == o || o.destroy()
            }).start()
          }, s = 0; s < e; s++) o(s)
      }
    }), cc._RF.pop()
  }, {}],
  Configuration: [function (e, t) {
    "use strict";
    cc._RF.push(t, "98d0dXE77FDeYwUDGlo18tV", "Configuration");
    var i = "DuoRenQiangZhanLuanDou20250813",
      n = cc.Class({
        statics: {
          instance: null,
          getInstance: function () {
            return this.instance || (this.instance = new n, this.instance.onLoad()), this.instance
          }
        },
        onLoad: function () {
          var e, t = this;
          if (this.jsonData = {
              userId: "",
              lastSaveTime: 0,
              music: !0,
              sound: !0,
              vibrate: !0
            }, this.path = this.getConfigPath(), (e = cc.sys.isNative ? jsb.fileUtils.getValueMapFromFile(this.path)[i] : cc.sys.localStorage.getItem(i)) && e.length) {
            e.startsWith("@") && (e = e.substring(1));
            try {
              this.jsonData = JSON.parse(e)
            } catch (e) {
              console.error("Error parsing JSON data:", e)
            }
          }
          this.markSave = !1, this.saveTimer = setInterval(function () {
            t.scheduleSave()
          }, 500)
        },
        setConfigDataWithoutSave: function (e, t) {
          var i = this.jsonData.userId;
          this.jsonData[i] ? this.jsonData[i][e] = t : console.error("No account, cannot save.")
        },
        setConfigData: function (e, t) {
          this.setConfigDataWithoutSave(e, t), this.markSave = !0
        },
        getConfigData: function (e) {
          var t = this.jsonData.userId;
          return this.jsonData[t] ? this.jsonData[t][e] || "" : (console.log("No account, cannot load."), "")
        },
        setGlobalData: function (e, t) {
          this.jsonData[e] = t, this.save()
        },
        getGlobalData: function (e) {
          return this.jsonData[e]
        },
        setUserId: function (e) {
          this.jsonData.userId = e, this.jsonData[e] || (this.jsonData[e] = {}), this.save()
        },
        getUserId: function () {
          return this.jsonData.userId
        },
        scheduleSave: function () {
          this.markSave && this.save()
        },
        markModified: function () {
          this.markSave = !0
        },
        save: function () {
          var e = JSON.stringify(this.jsonData);
          if (this.markSave = !1, cc.sys.isNative) {
            var t = {};
            t[i] = e, jsb.fileUtils.writeToFile(t, this.path)
          } else cc.sys.localStorage.setItem(i, e)
        },
        getTimeDifference: function () {
          var e = Date.now();
          return (e - (this.jsonData.lastSaveTime || e)) / 1e3
        },
        getConfigPath: function () {
          return cc.sys.platform === cc.sys.OS_WINDOWS ? "src/conf" : cc.sys.platform === cc.sys.OS_LINUX ? "./conf" : cc.sys.isNative ? jsb.fileUtils.getWritablePath() + "conf" : "src/conf"
        },
        parseUrl: function (e) {
          if (e && !("string" == typeof e && e.length <= 0)) {
            var t = {};
            if ("string" == typeof e) try {
              new URLSearchParams(e.split("?")[1]).forEach(function (e, i) {
                t[i] = e
              })
            } catch (e) {
              console.error("Failed to parse URL parameters:", e)
            } else t = e;
            t.action && this.setGlobalData("urlParams", t), t.source && this.setGlobalData("source", t.source), t.adchannelid && this.setGlobalData("adchannelid", t.adchannelid)
          }
        },
        generateGuestAccount: function () {
          return "" + Date.now() + Math.floor(1e3 * Math.random())
        },
        clearData: function () {
          this.jsonData = {
            userId: "",
            lastSaveTime: 0
          }, this.save()
        },
        clearInfo: function () {
          this.jsonData[this.jsonData.userId] = {}, this.jsonData.lastSaveTime = 0, this.save()
        }
      });
    t.exports = n.getInstance(), cc._RF.pop()
  }, {}],
  Constants: [function (e, t) {
    "use strict";
    cc._RF.push(t, "b830f7MU8xDpqg4sxGivRp8", "Constants"), t.exports = {
      VERSION: "1.0.0",
      LOCAL_CACHE: {
        PLAYER: "player",
        SETTINGS: "settings",
        DATA_VERSION: "dataVersion"
      },
      ZORDER: {
        BACKGROUND: 1,
        CHARACTER: 100,
        EFFECT_NUM_BULLET: 2e3,
        EFFECT_NUM: 2001,
        EFFECT_NUM_GRENADE: 2002,
        GAME_MESSAGE: 3e3,
        UI_MODAL: 4e3,
        SYSTEM_TIPS: 5e3,
        LOADING_SCREEN: 6e3,
        MAX_LAYER: 9999
      }
    }, cc._RF.pop()
  }, {}],
  DiCi: [function (e, t) {
    "use strict";
    cc._RF.push(t, "e7a312DA+tEUrcOoB9Sq2D9", "DiCi");
    var i = e("Types");
    cc.Class({
      extends: cc.Component,
      properties: {},
      onLoad: function () {
        this.isAttack = !1, this.node.getComponent(cc.BoxCollider).enabled = !1
      },
      diciUp: function () {
        this.isAttack = !0, this.node.getComponent(cc.BoxCollider).enabled = !0
      },
      diciDown: function () {
        this.isAttack = !1, this.node.getComponent(cc.BoxCollider).enabled = !1
      },
      onCollisionEnter: function (e) {
        if ("soleArea" == e.node.name && this.isAttack) {
          var t = e.node.getComponent("ZombieCollArea").character,
            n = t.node.uuid,
            a = t.team == i.ActorTeam.Human ? 50 : 30;
          0 == t.isHasBufferById(i.BufferKey.Dici) && t.onIsCanSlown() && (t.addBufffer(i.BufferKey.Dici), t.slowDown(a, 3), this.game.timeMng.startTimer(n, .5, function () {
            t.removeBuffer(i.BufferKey.Dici)
          }))
        }
      }
    }), cc._RF.pop()
  }, {
    Types: "Types"
  }],
  DoomsLayerModel: [function (e, t) {
    "use strict";
    cc._RF.push(t, "ebccaxSJTBArI9suUVkCk+u", "DoomsLayerModel");
    var i = e("Types");
    cc.Class({
      extends: e("GameModeBase"),
      properties: {},
      onInitGameModel: function () {
        this._super()
      },
      onModelStart: function () {
        var e = this;
        this.game.joystickNode.getChildByName("Video").getChildByName("btn\u7ec8\u7ed3\u8005").active = !0, this.scheduleOnce(function () {
          if (e.game.joystickNode.getChildByName("Video").getChildByName("btn\u7ec8\u7ed3\u8005").active = !1, 1 != e.curGameRound && 0 == e.game.isVideoSpecial && _.isLucky(70)) {
            var t = [e.game.humanArray[e.game.humanArray.length - 1], e.game.humanArray[0]];
            e.game.humanArray[0] = t[0], e.game.humanArray[e.game.humanArray.length - 1] = t[1]
          }
          for (var i = e.game.humanArray.length - 1; i > 0; i--) e.game.humanArray[i].getComponent("Human").toZombie(!0);
          e.game.humanArray[0].getComponent("Human").toDoomsLayer();
          var n = e.game.humanArray[0].getComponent("Human").getNickName();
          GlobalMng.sceneMng.createUIByBundle("gameTip/\u88ab\u9009\u4e3a\u7ec8\u7ed3\u8005", e.game.gameTipRoot, function (e) {
            e.getChildByName("labName").getComponent(cc.Label).string = n
          }), e.countDownEnd = !0
        }, this.gameCountZombie)
      },
      onGetZombieData: function () {
        var e = e = _.random(2, 6),
          t = GlobalMng.jsonMng.queryConfig("MonsterDataTable", function (t) {
            return t.ID === e
          })[0];
        return [i.ZombieAttackWay.None, !1, t]
      },
      onCheckZombieIsWin: function () {
        this.game.gameIsOver() || 0 != this.game.getHumanNum() || (this.zombieWinRound++, this.modelRounOver(2))
      },
      onCheckHumanIsWin: function (e) {
        void 0 === e && (e = !1), this.game.gameIsOver() || 0 != this.game.getZombieNum() && !e || (this.humanWinRound++, this.modelRounOver(1))
      }
    }), cc._RF.pop()
  }, {
    GameModeBase: "GameModeBase",
    Types: "Types"
  }],
  DragonCtrl: [function (e, t) {
    "use strict";
    cc._RF.push(t, "7f379c3mwFDWItdWfJ2wrOY", "DragonCtrl"), cc.Class({
      extends: cc.Component,
      properties: {
        ske: dragonBones.ArmatureDisplay,
        daijiName: "\u5f85\u673a"
      },
      onLoad: function () {
        this.currentAnimation = "", "\u5f85\u673a" == this.daijiName && (this.idleAnimation = "\u5f85\u673a", this.playIdle())
      },
      setSkePos: function (e) {
        var t = this.ske.node.x,
          i = this.ske.node.y;
        this.node.y = e.y + i, this.node.x = t <= 0 ? e.x + t : e.x - t
      },
      playIdle: function () {
        this.currentAnimation !== this.idleAnimation && (this.ske.playAnimation(this.idleAnimation, 0), this.currentAnimation = this.idleAnimation)
      },
      playNoIdle: function (e, t, i) {
        void 0 === t && (t = !1), void 0 === i && (i = null), i && this.ske.addEventListener(dragonBones.EventObject.COMPLETE, function (t) {
          t.animationState.name === e && i()
        }), this.ske.playAnimation(e, t ? 0 : 1), this.currentAnimation = e
      },
      playAnimation: function (e, t, i) {
        var n = this;
        void 0 === t && (t = !1), void 0 === i && (i = null), this.currentAnimation !== e && (this.ske.addEventListener(dragonBones.EventObject.COMPLETE, function (a) {
          a.animationState.name === e && (i && i(), t || n.playIdle())
        }), this.ske.playAnimation(e, t ? 0 : 1), this.currentAnimation = e)
      }
    }), cc._RF.pop()
  }, {}],
  DropWeapon: [function (e, t) {
    "use strict";
    cc._RF.push(t, "c5953TLDlhN9aMMpyF4VjGQ", "DropWeapon"), cc.Class({
      extends: cc.Component,
      properties: {
        weaponSp: sp.Skeleton
      },
      initWeaponId: function (e) {
        var t = GlobalMng.jsonMng.getConfigByEle("GunsDataTable", "ID", e);
        this.weaponSp.setAnimation(0, "\u67aa\u52a8\u6001/" + t.Name, !0), this.wId = e, this.wGrade = t.Lv, this.wName = t.Name
      },
      deleyTimeCollier: function () {
        var e = this;
        this.node.getComponent(cc.BoxCollider).enabled = !1, this.scheduleOnce(function () {
          e.node.getComponent(cc.BoxCollider).enabled = !0
        }, 3)
      }
    }), cc._RF.pop()
  }, {}],
  EffectBase: [function (e, t) {
    "use strict";
    cc._RF.push(t, "3b747CZPUBKmK1FAuBAoUA6", "EffectBase"), cc.Class({
      extends: cc.Component,
      properties: {},
      onLoad: function () {
        this.controlTime = 0, this.lifeTime = -1
      },
      initEffect: function (e, t) {
        void 0 === t && (t = -1), this.controlTime = e.controlTime, this.lifeTime = t, this.skillData = e
      },
      desper: function () {
        var e;
        null == (e = this.node) || e.destroy()
      }
    }), cc._RF.pop()
  }, {}],
  EffectBoom: [function (e, t) {
    "use strict";
    cc._RF.push(t, "e8dfb3EBm5D7L0v9+HbAOPU", "EffectBoom"), e("Game"), cc.Class({
      extends: e("EffectBase"),
      properties: {},
      initEffect: function (e, t) {
        var i = this;
        this._super(e);
        var n = this.game.findNearestMonster(t.node);
        if (n) {
          this.monster = n[0].getComponent("Zombie");
          var a = this.monster.getCenterPos(),
            o = n[1] / 1e3;
          cc.tween(this.node).to(o, {
            position: a
          }, {
            easing: "quadIn"
          }).call(function () {
            i.desper(), i.monster.eatTrap(e)
          }).start()
        } else this.desper()
      },
      desper: function () {
        var e;
        GlobalMng.uiMng.createDynamicsSke("actor/skillBoom/boom_\u70b8\u5f39", this.game.playerRoot, this.monster.getCenterPos()), null == (e = this.node) || e.destroy()
      }
    }), cc._RF.pop()
  }, {
    EffectBase: "EffectBase",
    Game: "Game"
  }],
  EffectChuanSongMen: [function (e, t) {
    "use strict";
    cc._RF.push(t, "6c19cljlo1OP54LCKGQ7GPE", "EffectChuanSongMen"), e("Game"), cc.Class({
      extends: e("EffectBase"),
      properties: {},
      chuanSong: function (e, t) {
        var i = this,
          n = null;
        GlobalMng.sceneMng.createUIByBundle("actor/skillEffect/\u4f20\u9001\u95e8", this.game.curMapScript.keyRoot, function (e) {
          e.setPosition(t), n = e
        }), cc.tween(e).to(.2, {
          scale: 0
        }).call(function () {
          i.desper()
        }).to(.3, {
          position: t
        }).to(.2, {
          scale: 1
        }).call(function () {
          e.getComponent("Character") && e.getComponent("Character").thaw(), e.getComponent("Player") && e.getComponent("Player").closeTimeTravel()
        }).delay(.5).call(function () {
          n && n.getComponent("EffectChuanSongMen").desper()
        }).start()
      },
      initEffect: function (e, t) {
        this._super(e);
        var i = this.game.findOneKeyPosByDist(t.node.getPosition());
        this.chuanSong(t.node, i)
      },
      desper: function () {
        var e = this;
        cc.tween(this.node).to(.3, {
          scale: 0
        }).call(function () {
          var t;
          null == (t = e.node) || t.destroy()
        }).start()
      }
    }), cc._RF.pop()
  }, {
    EffectBase: "EffectBase",
    Game: "Game"
  }],
  EventMng: [function (e, t) {
    "use strict";
    cc._RF.push(t, "40702s1uiJHsY1nYyhjTJrE", "EventMng");
    var i = cc.Class({
      properties: {
        mode: {
          default: "multi",
          visible: !0
        },
        oneHandlers: {
          default: {},
          visible: !1
        },
        multiHandlers: {
          default: {},
          visible: !1
        },
        supportEvent: {
          default: null,
          visible: !1
        },
        _EVENT_TYPE: {
          default: [],
          visible: !1
        }
      },
      on: function (e, t, i) {
        var n = {
          handler: t,
          target: i
        };
        if ("one" === this.mode) this.oneHandlers[e] = n;
        else {
          var a = this.multiHandlers[e] || [];
          a.push(n), this.multiHandlers[e] = a
        }
      },
      off: function (e, t, i) {
        if ("one" === this.mode) {
          var n = this.oneHandlers[e];
          n && n.handler === t && (this.oneHandlers[e] = null)
        } else {
          var a = this.multiHandlers[e];
          if (a)
            for (var o = 0; o < a.length; o++)
              if (a[o].handler === t && (!i || i === a[o].target)) {
                a.splice(o, 1);
                break
              }
        }
      },
      dispatchEvent: function (e) {
        if (null === this.supportEvent || this.supportEvent.hasOwnProperty(e)) {
          var t = [].slice.call(arguments, 1);
          if ("one" === this.mode) {
            var i = this.oneHandlers[e];
            i && i.handler && i.handler.apply(i.target, t)
          } else {
            var n = this.multiHandlers[e];
            if (n)
              for (var a = 0; a < n.length; a++) n[a].handler.apply(n[a].target, t)
          }
        } else cc.error("please add the event into EventMng.js")
      },
      setSupportEventList: function (e) {
        if (!(e instanceof Array)) return cc.error("supportEvent was not array"), !1;
        for (var t in this.supportEvent = {}, e) this.supportEvent[e[t]] = t;
        return !0
      },
      onLoad: function () {
        this._EVENT_TYPE = ["UpdateGold"], this.setSupportEventList(this._EVENT_TYPE)
      }
    });

    function n(e) {
      var t = new i;
      return t.mode = e || "multi", t.onLoad(), t
    }
    t.exports = {
      one: n("one"),
      multi: n("multi"),
      default: n("multi")
    }, cc._RF.pop()
  }, {}],
  FangHuFu: [function (e, t) {
    "use strict";
    cc._RF.push(t, "267036XRaBEg77ijdxkBce9", "FangHuFu"), cc.Class({
      extends: e("AShareUIBase"),
      properties: {},
      onLoad: function () {
        this._super()
      },
      show: function () {
        this._super()
      },
      videoSuccess: function () {
        this.btnCloseShare(), GlobalMng.getGame().selfPlayer.setBiochemical(!0), GlobalMng.uiMng.showTip("\u5df2\u83b7\u5f97\u8d85\u7ea7\u9632\u62a4\u670d")
      },
      hideSuccess: function () {}
    }), cc._RF.pop()
  }, {
    AShareUIBase: "AShareUIBase"
  }],
  GameCommonTip: [function (e, t) {
    "use strict";
    cc._RF.push(t, "e326cds3sxEvoS9UMZRQ9cC", "GameCommonTip");
    var i = cc.Enum({
        None: -1,
        ForeverScale: -1,
        ScaleX_0_1: -1
      }),
      n = cc.Enum({
        None: 0,
        ScaleOutY_0: 1,
        SlideOutByPosX: 2,
        Fade: 3
      });
    cc.Class({
      extends: cc.Component,
      properties: {
        autoDestroy: {
          default: !0,
          tooltip: "\u63d0\u793a\u7ed3\u675f\u540e\u662f\u5426\u81ea\u52a8\u9500\u6bc1\u8282\u70b9"
        },
        duration: {
          default: 2,
          type: cc.Float,
          tooltip: "\u63d0\u793a\u663e\u793a\u7684\u6301\u7eed\u65f6\u95f4\uff08\u79d2\uff09"
        },
        displayType: {
          default: i.None,
          type: i,
          tooltip: "\u51fa\u73b0\u65f6UI\u663e\u793a\u6548\u679c"
        },
        destroyType: {
          default: n.ScaleOutY_0,
          type: n,
          tooltip: "\u9500\u6bc1\u65f6\u7684UI\u663e\u793a\u6548\u679c"
        },
        isAutoInit: {
          default: !0,
          tooltip: "\u662f\u5426\u81ea\u52a8\u521d\u59cb\u5316"
        },
        isShowDuraction: {
          default: !1,
          tooltip: "\u662f\u5426\u663e\u793a\u6301\u7eed\u65f6\u95f4"
        }
      },
      onLoad: function () {
        this.callFunc = null, this.maxScale = 1.1, this.minScale = .9, this.scaleTime = .5, this.isAutoInit && this.init(null)
      },
      init: function (e) {
        switch (this.callFunc = e, this.displayType) {
          case i.ForeverScale:
            cc.tween(this.node).repeatForever(cc.tween().to(this.scaleTime, {
              scale: this.maxScale
            }, {
              easing: "smooth"
            }).to(this.scaleTime, {
              scale: this.minScale
            }, {
              easing: "smooth"
            })).start();
            break;
          case i.ScaleX_0_1:
            cc.tween(this.node).set({
              scaleX: 0
            }).parallel(cc.tween().to(.35, {
              scaleX: 1
            }, {
              easing: "sineOut"
            }), cc.tween().to(.2, {
              opacity: 150
            }).to(.15, {
              opacity: 255
            }, {
              easing: "sineIn"
            })).start()
        }
        this.autoDestroy && this.scheduleOnce(this.destroyTip, this.duration), this.isShowDuraction && (this.node.getChildByName("labCount").getComponent(cc.Label).string = this.duration, this.schedule(this.oneSecondCallBack, 1))
      },
      destroyTip: function () {
        var e = this;
        this.destroyType == n.ScaleOutY_0 ? cc.tween(this.node).to(.2, {
          scaleY: 0
        }).call(function () {
          var t;
          e.callFunc && e.callFunc(), null == (t = e.node) || t.destroy()
        }).start() : this.destroyType == n.SlideOutByPosX ? cc.tween(this.node).to(.2, {
          x: 350,
          opacity: 0
        }, {
          easing: "sineOut"
        }).call(function () {
          var t;
          e.callFunc && e.callFunc(), null == (t = e.node) || t.destroy()
        }).start() : this.destroyType == n.Fade && cc.tween(this.node).to(.2, {
          opacity: 0
        }, {
          easing: "sineOut"
        }).call(function () {
          var t;
          e.callFunc && e.callFunc(), null == (t = e.node) || t.destroy()
        }).start()
      },
      oneSecondCallBack: function () {
        this.duration--, this.duration <= 0 && (this.duration = 0), this.node.getChildByName("labCount").getComponent(cc.Label).string = this.duration
      }
    }), cc._RF.pop()
  }, {}],
  GameFail: [function (e, t) {
    "use strict";
    cc._RF.push(t, "10653HuNORJjKSc+JZwfSI1", "GameFail"), e("Game"), e("Types"), cc.Class({
      extends: e("GameWin"),
      properties: {},
      initPlayer: function () {
        this.winOrLose = !1, GlobalMng.isSingle() ? (this.player1Node.active = !0, this.player2Node.active = !1, this.playerInfoFlush(this.player1Node, this.game.getPlayerById(1))) : (this.player1Node.active = !0, this.player2Node.active = !0, this.playerInfoFlush(this.player1Node, this.game.getPlayerById(1)), this.playerInfoFlush(this.player2Node, this.game.getPlayerById(2))), this.rewardCoin = 2 * this.game.gameRunTime, this.labGold.string = this.rewardCoin
      },
      playerInfoFlush: function (e, t) {
        var i = e.getChildByName("ske").getComponent(sp.Skeleton);
        i.skeletonData = t.skeletonData, i.clearTracks(), i.setToSetupPose(), i.setAnimation(0, "\u5931\u8d25\u7ed3\u7b97", !0)
      },
      playerOverEffect: function () {
        GlobalMng.audioMng.playSoundRes("\u6e38\u620f\u5931\u8d25")
      },
      btnAgain: function () {
        var e = this;
        this.isInitGold && (GlobalMng.uiMng.showSharedMask(), GlobalMng.eventOne.dispatchEvent("UpdateGold", this.rewardCoin, !0, !0, null, {
          startPos: cc.v2(320, -90)
        }), cc.director.preloadScene("main"), this.scheduleOnce(function () {
          var t;
          null == (t = e.rootNode.getChildByName("GoldMng")) || t.destroy(), GlobalMng.uiMng.closeShareDG(e.prefabPath), GlobalMng.uiMng.hideSharedMask(), cc.director.loadScene("main", function () {
            cc.find("Canvas").getComponent("Main").showRole()
          })
        }, .85))
      }
    }), cc._RF.pop()
  }, {
    Game: "Game",
    GameWin: "GameWin",
    Types: "Types"
  }],
  GameLoading: [function (e, t) {
    "use strict";
    cc._RF.push(t, "c21bfA60FlMhLYFuT1Xfz9p", "GameLoading"), cc.Class({
      extends: cc.Component,
      properties: {
        progress: cc.ProgressBar,
        percent: cc.Label
      },
      init: function (e) {
        void 0 === e && (e = .5), this.node.opacity = 255, this.loadTime = .35 * Math.random() + e, this.elapsedTime = 0, this.multip = 1, this.progress.progress = 0, this.percent.string = "0%", this.isLoadingCompleted = !1, this.callBack = null
      },
      update: function (e) {
        this.elapsedTime += e * this.multip;
        var t = this.elapsedTime / this.loadTime;
        this.progress.progress = t, this.percent.string = Math.floor(100 * t) + "%", this.elapsedTime >= this.loadTime && (this.progress.progress = 1, this.percent.string = "100%", this.isLoadingCompleted && (this.node.active = !1, this.callBack && this.callBack()))
      },
      setLoadCompelect: function (e, t) {
        void 0 === e && (e = 1), this.multip = e, this.callBack = t, this.isLoadingCompleted = !0
      }
    }), cc._RF.pop()
  }, {}],
  GameModeBase: [function (e, t) {
    "use strict";
    cc._RF.push(t, "f9785eOrO1Kc7gP8+RRwEup", "GameModeBase");
    var i = e("Types"),
      n = e("PlayerData");
    cc.Class({
      extends: cc.Component,
      properties: {},
      init: function (e) {
        this.game = e, this.gameCountZombie = 10, this.curGameRound = 1, this.gameToltaRound = 3, this.humanWinRound = 0, this.zombieWinRound = 0, this.waitReviveTime = 3, this.playerNum = 12, this.countDownEnd = !1
      },
      onInitGameModel: function () {
        var e = this;
        this.game.joystickNode.getChildByName("Video").getChildByName("btn\u6551\u4e16\u4e3b").active = !1, this.game.joystickNode.getChildByName("Video").getChildByName("btn\u7ec8\u7ed3\u8005").active = !1, this.game.joystickNode.getChildByName("Video").getChildByName("btn\u8d85\u4f53").active = !1, this.game.joystickNode.getChildByName("Video").active = !0, this._createPlayer(), this.randSkinId = _.shuffle([2, 2, 2, 2, 2, 2, 2, 2, 0, 0, 0, 0]), this.countDownEnd = !1, this.game.scoreUI.setRoundLabel(this.curGameRound + "/" + this.gameToltaRound), this.game.scoreUI.setHumanWinRoundLabel(this.humanWinRound), this.game.scoreUI.setZombieWinRoundLabel(this.zombieWinRound), this.game.mapTip(), GlobalMng.sceneMng.createUIByBundle("gameTipCenter/\u56de\u5408\u63d0\u793a", this.game.gameTipCenterRoot, function (t) {
          GlobalMng.audioMng.playSoundRes("\u5bf9\u6218\u5f00\u59cb"), t.getChildByName("anima").getChildByName("spRound").getChildByName(e.curGameRound + "").active = !0, t.getChildByName("anima").getComponent(cc.Animation).on("finished", function () {
            e.game.startCount(), null == t || t.destroy()
          })
        }), this.game.initHumanPanel()
      },
      onGetZombieData: function () {},
      onCheckZombieIsWin: function () {},
      onCheckHumanIsWin: function (e) {
        void 0 === e && (e = !1)
      },
      onModelStart: function () {},
      modelRounOver: function (e) {
        var t = this;
        this.game.gameState = i.GameState.Over, this.scheduleOnce(function () {
          t.roundOver(e)
        }, 1)
      },
      roundOver: function (e) {
        var t, i = this;
        this.game.gameTipRoot.removeAllChildren(!0), this.game.gameTipCenterRoot.removeAllChildren(!0), this.game.joystickNode.active = !1, this.game.cameraScript.followTarget = null, this.game.allActorArray.forEach(function (e) {
          var t = e.getComponent("Character");
          t.isAlive = !1, t.freeze(), t.spineCtrl.playIdle()
        });
        for (var n = this.game.waitReviveZombie.length - 1; n >= 0; n--) {
          var a;
          null == (a = this.game.waitReviveZombie[n]) || a.destroy()
        }
        this.game.scoreUI.flushActor(), t = 1 == e ? "\u5c0f\u7ed3\u7b97\u4eba\u7c7b\u80dc\u5229" : "\u5c0f\u7ed3\u7b97\u611f\u67d3\u8005\u80dc\u5229", GlobalMng.sceneMng.createUIByBundle("gameTipCenter/" + t, this.game.popUIRoot, function (e) {
          GlobalMng.audioMng.playSoundRes("\u6e38\u620f\u80dc\u5229"), cc.tween(e.getChildByName("animation")).delay(2).to(.5, {
            scale: 0,
            angle: 720
          }, {
            easing: "sineOut"
          }).delay(.2).call(function () {
            null == e || e.destroy(), i.curGameRound++, i.curGameRound > i.gameToltaRound ? (cc.audioEngine.stopAllEffects(), GlobalMng.audioMng.playSoundRes("\u6e38\u620f\u7ed3\u7b97\u754c\u9762bgm"), GlobalMng.sceneMng.createUIByBundle("gameTipCenter/\u6e38\u620f\u7ed3\u675fTips", i.game.popUIRoot, function (e) {
              e.getChildByName("root").getComponent(cc.Animation).on("finished", function () {
                null == e || e.destroy(), GlobalMng.uiMng.showMemoryRes("ui/layer/\u6e38\u620f\u7ed3\u7b97", i.game.popUIRoot)
              })
            })) : i.game.restGame()
          }).start()
        })
      },
      getZomConfigByEle: function (e, t) {
        return GlobalMng.jsonMng.queryConfig("MonsterDataTable", function (i) {
          return i[e] === t
        })[0]
      },
      _createPlayer: function () {
        for (var e = 0; e < this.playerNum; e++)
          if (0 == e) this.game.createHuman(this.game.bornPos[0], n.getSkinNameById(), {
            ctlType: 1,
            name: ""
          });
          else {
            var t = this.game.recordRank[e].skinName;
            this.game.createHuman(this.game.bornPos[e], t, {
              ctlType: 0,
              name: ""
            })
          }
      }
    }), cc._RF.pop()
  }, {
    PlayerData: "PlayerData",
    Types: "Types"
  }],
  GamePlayIntro: [function (e, t) {
    "use strict";
    cc._RF.push(t, "d3b5daEYDRO9pnsvcL8xPAu", "GamePlayIntro"), cc.Class({
      extends: e("AShareUIBase"),
      properties: {},
      onLoad: function () {
        this._super()
      },
      show: function () {
        this._super()
      },
      videoSuccess: function () {},
      hideSuccess: function () {}
    }), cc._RF.pop()
  }, {
    AShareUIBase: "AShareUIBase"
  }],
  GameWin: [function (e, t) {
    "use strict";
    cc._RF.push(t, "e544etyBcxCf6zFGpoeRcwj", "GameWin"), e("Game");
    var i = e("PlayerData"),
      n = e("Types");
    cc.Class({
      extends: cc.Component,
      properties: {
        resultNode: cc.Node,
        pbExp: cc.ProgressBar,
        labCurGrade: cc.Label,
        labAddExp: cc.Label,
        labKill: cc.Label,
        labRank: cc.Label,
        labGold: cc.Label,
        labAddExpNum: cc.Label,
        showBtnNode: cc.Node
      },
      onEnable: function () {
        AD.hideBanner(), AD.chaPing()
      },
      onLoad: function () {
        var e = this;
        this.startUpdate = !1, this.game = cc.find("Canvas").getComponent("Game"), this.game.gameState = n.GameState.Over;
        var t = this.game.getCurPlayerRank()[0];
        this.isWin = t <= 5, this.expArrayRank = [500, 480, 460, 440, 420, 400, 380, 360, 340, 320, 300, 280], this.goldArrayRank = [800, 750, 700, 650, 600, 550, 500, 450, 400, 350, 300, 260], this.upgradeExp = i.getCurNeedExp(), this.rankId = this.game.getCurPlayerRank()[0], this.rankData = this.game.getCurPlayerRank()[1], this.getExp = this.expArrayRank[this.rankId], this.getGold = this.goldArrayRank[this.rankId], GlobalMng.isChallengeModel() && (this.getGold = [200, 400, 600, 700, 800, 900, 1e3, 1100, 1200, 1300, 1400, 1500, 2e3, 2200, 3e3][this.game.gameModeBase.curGameRound - 1]), this.labAddExp.string = "EXP+" + this.getExp, this.labAddExpNum.string = this.getExp, this.labKill.string = this.rankData.kill, this.labRank.string = this.rankId, this.labGold.string = this.getGold, this.flushGrade(i.playerInfo.grade), this.pbExp.progress = i.playerInfo.exp / this.upgradeExp, this.uidataExp = i.playerInfo.exp, this.uidataTotalExp = i.playerInfo.exp + this.getExp, cc.tween(this.labAddExp.node).set({
          scale: 10,
          opacity: 0
        }).delay(.65).to(.38, {
          scale: 1,
          opacity: 255
        }, {
          easing: "sineOut"
        }).delay(.25).call(function () {
          e.startUpdate = !0
        }).start(), GlobalMng.isChallengeModel() ? this.duanweiNode = this.node.getChildByName("\u6ca1\u6bb5\u4f4d") : (this.isWin ? this.duanweiNode = this.node.getChildByName("\u6bb5\u4f4d\u63d0\u5347") : this.duanweiNode = this.node.getChildByName("\u6bb5\u4f4d\u4e0b\u964d"), this.rankNode = this.duanweiNode.getChildByName("animationNode").getChildByName("rank"), this.flushDuanWeiSP())
      },
      flushInfo: function () {
        for (var e = 0; e < this.roleNode.length; e++) {
          var t = this.game.recordRank[e],
            n = this.roleNode[e].getChildByName("roleNode"),
            a = n.getChildByName("labPlayerName").getComponent(cc.Label);
          "\u73a9\u5bb61" == t.pName ? (a.node.color = new cc.Color(255, 208, 60), n.getChildByName("rank").getComponent("PaiWeiShow").initPaiWei(i.playerInfo.rank), a.string = t.nickName, n.getChildByName("\u89d2\u8272").getComponent("ActorSpineShow").intiSKin(i.getSkinNameById(), i.getWeaponNameById())) : (n.getChildByName("rank").getComponent("PaiWeiShow").initPaiWei(t.rankId), a.string = t.nickName, n.getChildByName("\u89d2\u8272").getComponent("ActorSpineShow").intiSKin(t.skinName, t.gunName))
        }
      },
      addGrade: function () {
        console.log("\u5347\u7ea7"), i.playerInfo.grade++, this.flushGrade(i.playerInfo.grade, !0), this.upgradeExp = i.getCurNeedExp()
      },
      saveGarde: function () {
        i.playerInfo.exp = parseInt(this.uidataExp), console.log("\u5f53\u524d\u7ecf\u9a8c\uff1a" + i.playerInfo.exp), console.log("\u7b49\u7ea7\uff1a" + i.playerInfo.grade), i.savePlayerInfoToLocalCache(), this.showDuanWei()
      },
      flushGrade: function (e, t) {
        void 0 === t && (t = !1), this.labCurGrade.string = "Lv." + e, t && cc.tween(this.labCurGrade.node).to(.15, {
          scale: 1.2
        }).to(.15, {
          scale: 1
        }).start()
      },
      flushDuanWeiSP: function () {
        GlobalMng.isChallengeModel() || (this.isWin ? (i.playerInfo.rank++, i.playerInfo.rank >= 1051 && (i.playerInfo.rank = 1051)) : (i.playerInfo.rank--, i.playerInfo.rank <= 1001 && (i.playerInfo.rank = 1001)), this.rankNode.getComponent("PaiWeiShow").initPaiWei(i.playerInfo.rank), i.savePlayerInfoToLocalCache())
      },
      showDuanWei: function () {
        var e = this;
        GlobalMng.isChallengeModel() ? (GlobalMng.eventOne.dispatchEvent("UpdateGold", this.getGold, !0, !0, null, {
          startPos: cc.v2(330, -212)
        }), this.showBtnNode.active = !0) : (this.duanweiNode.active = !0, this.scheduleOnce(function () {
          e.duanweiNode.getChildByName("clickText").active = !0, e.duanweiNode.getChildByName("mask").on(cc.Node.EventType.TOUCH_START, e.clickGoOn, e)
        }, .5), this.isWin ? GlobalMng.audioMng.playSoundRes("\u6bb5\u4f4d\u664b\u7ea7") : (this.duanweiNode.getChildByName("dwTips\u964d\u7ea7").getChildByName("lab").getComponent(cc.Label).string = this.rankId, GlobalMng.audioMng.playSoundRes("\u6bb5\u4f4d\u4e0b\u964d")))
      },
      clickGoOn: function () {
        this.duanweiNode.getChildByName("mask").off(cc.Node.EventType.TOUCH_START, this.clickGoOn, this), GlobalMng.eventOne.dispatchEvent("UpdateGold", this.getGold, !0, !0, null, {
          startPos: cc.v2(330, -212)
        }), this.duanweiNode.active = !1, this.showBtnNode.active = !0
      },
      btnReturn: function () {
        cc.audioEngine.stopAllEffects(), cc.director.loadScene("main")
      },
      btnDouble: function () {
        var e = this;
        AD.showAD(function () {
          cc.audioEngine.stopAllEffects(), GlobalMng.eventOne.dispatchEvent("UpdateGold", e.getGold, !0, !0, null, {
            startPos: cc.v2(330, -212)
          }), cc.director.loadScene("main")
        }, this)
      },
      btnAgain: function () {
        cc.audioEngine.stopAllEffects(), cc.director.preloadScene("game"), GlobalMng.uiMng.turnSceneAnimation(1, .8, function () {
          cc.director.loadScene("game")
        }, 2.5, function () {
          cc.find("Canvas").getComponent("Game").gameModeBase.onInitGameModel()
        })
      },
      btnRecord: function () {
        GlobalMng.uiMng.showShareDG("ui/layer/Rank", this.popUIRoot)
      },
      update: function (e) {
        if (this.startUpdate) {
          var t = this.getExp * e * .75;
          this.uidataExp += t, this.pbExp.progress = this.uidataExp / this.upgradeExp, this.uidataExp >= this.uidataTotalExp ? (this.startUpdate = !1, this.uidataExp = this.uidataTotalExp, this.pbExp.progress = this.uidataExp / this.upgradeExp, this.saveGarde()) : this.uidataExp >= this.upgradeExp && (this.uidataExp = 0, this.uidataTotalExp -= this.upgradeExp, this.addGrade())
        }
      }
    }), cc._RF.pop()
  }, {
    Game: "Game",
    PlayerData: "PlayerData",
    Types: "Types"
  }],
  Game: [function (e, t) {
    "use strict";
    cc._RF.push(t, "07bbfnGKEVEraYd+cTaARbB", "Game");
    var i = e("Types");
    e("QuadTree");
    var n = e("PlayerData");
    cc.Class({
      extends: cc.Component,
      properties: {
        inputRoot: cc.Node,
        mapRoot: cc.Node,
        itemRoot: cc.Node,
        playerRoot: cc.Node,
        bulletRoot: cc.Node,
        tipUIRoot: cc.Node,
        popUIRoot: cc.Node,
        joystickNode: cc.Node,
        scoreUINode: cc.Node,
        challengeUINode: cc.Node,
        miniMapArea: cc.Node,
        miniSprite: cc.Sprite,
        damageLabelPrefab: cc.Prefab,
        grenadePrefab: cc.Prefab,
        howitzerNode: cc.Node,
        labBullet: cc.Label,
        teachNode: cc.Node,
        tiaozhanPanel: cc.Node
      },
      onLoad: function () {
        var e = this;
        GlobalMng.isInGame = !0, GlobalMng.audioMng.playGameMusic(1), this.gameState = i.GameState.None, this.cameraNode = cc.find("Canvas/roleCamera"), this.cameraScript = this.cameraNode.getComponent("CameraController"), this.InputManager = cc.find("InputManager").getComponent("InputManager"), this.InputManager.init(), this.InputManager.setJoyInput(this.joystickNode), this.bulletFactory = cc.find("BulletFactory").getComponent("BulletFactory"), this.bulletFactory.init(this), this.scoreUI = this.scoreUINode.getComponent("ScoreUI"), this.scoreFeedPanel = cc.find("scoreFeed", this.tipUIRoot).getComponent("ScoreFeedMng"), this.killFeedPanel = cc.find("killFeed", this.tipUIRoot).getComponent("KillFeedMng"), this.challengeUI = this.challengeUINode.getComponent("ChallengeUI"), this.gameTipRoot = this.tipUIRoot.getChildByName("gameTip"), this.gameTipCenterRoot = this.tipUIRoot.getChildByName("tip"), this.isMapTip = !1, this.humanArray = [], this.zombieArray = [], this.allActorArray = [], this.waitReviveZombie = [], this.itemArray = [], this.defendArray = [], this.defendPosArray1 = [], this.defendPosArray2 = [], this.defendPosArray3 = [], this.defendPosArray4 = [], this.defendPosArray5 = [], this.bornPos = [], this.humanAiAlity = _.shuffle([1, 1, 4, 3, 3, 3, 3, 3, 3, 3, 3]), this.zombieAiAlity = _.shuffle([3, 3, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2]), this.humanViewIndex = 0, this.zombieViewIndex = 0, this.howitzerNode.active = !1, this.playerAICount = 1, this.isShowMiniMap = !1, this.joystickNode.active = !1, this.isVideoSpecial = !1, this.recordRank = GlobalMng.recordRank, this.initGamePlay(), this.initModelMap(), 0 == n.playerInfo.hasSeenGuide && (this.teachNode.active = !0, this.scheduleOnce(function () {
          e.teachNode.active = !1, n.playerInfo.hasSeenGuide = !0, n.savePlayerInfoToLocalCache()
        }, 5))
      },
      onDestroy: function () {
        this.gameModeBase && (this.gameModeBase.unscheduleAllCallbacks(), this.gameModeBase = null)
      },
      gameIsPlayIng: function () {
        return this.gameState == i.GameState.Playing
      },
      gameIsOver: function () {
        return this.gameState == i.GameState.Over
      },
      gameIsPause: function () {
        return this.gameState == i.GameState.Paused
      },
      gameIsNone: function () {
        return this.gameState == i.GameState.None
      },
      restGame: function () {
        var e = this;
        this.isVideoSpecial = !1, this.joystickNode.getChildByName("Video").active = !0, this.InputManager.resetJoystick(), this.cameraScript.followTarget = null, this.playerAICount = 1, this.unscheduleAllCallbacks(), this.gameModeBase.unscheduleAllCallbacks(), this.humanArray = [], this.zombieArray = [], this.allActorArray = [], this.waitReviveZombie = [], this.itemArray = [], this.humanAiAlity = _.shuffle([1, 1, 4, 3, 3, 3, 3, 3, 3, 3, 3]), this.zombieAiAlity = _.shuffle([3, 3, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2]), this.humanViewIndex = 0, this.zombieViewIndex = 0, this.itemRoot.children.forEach(function (e) {
          return null == e ? void 0 : e.destroy()
        }), this.itemRoot.removeAllChildren(), this.playerRoot.children.forEach(function (e) {
          return null == e ? void 0 : e.destroy()
        }), this.playerRoot.removeAllChildren(), this.bulletRoot.children.forEach(function (e) {
          return null == e ? void 0 : e.destroy()
        }), this.bulletRoot.removeAllChildren(), this.scoreUI.resetGameTime(), this.scoreFeedPanel.resetAll(), this.killFeedPanel.resetAll(), this.skillPB && (this.skillPB.progress = 0), this.scheduleOnce(function () {
          e.gameModeBase.onInitGameModel()
        }, 0)
      },
      clearLayer: function () {
        var e, t;
        this.selectZombieNode && (null == (e = this.selectZombieNode) || e.destroy(), this.selectZombieNode = null), this.observerLayer && (null == (t = this.observerLayer) || t.destroy(), this.observerLayer = null)
      },
      initGamePlay: function () {
        switch (this.gameModeBase = null, GlobalMng.gamePlay) {
          case i.GamePlay.SurvivalMode:
            this.gameModeBase = new(e("SurvivalMode"));
            break;
          case i.GamePlay.DoomsLayerModel:
            this.gameModeBase = new(e("DoomsLayerModel"));
            break;
          case i.GamePlay.SaviorModel:
            this.gameModeBase = new(e("SaviorModel"));
            break;
          case i.GamePlay.TranscendentModel:
            this.gameModeBase = new(e("TranscendentModel"));
            break;
          case i.GamePlay.ChallengeModel:
            this.gameModeBase = new(e("ChallengeModel"))
        }
        this.gameModeBase.init(this)
      },
      setBulletLabel: function (e) {
        this.labBullet.string = e
      },
      initZombiePanel: function () {
        this.joystickNode.active = !0, this.joystickNode.getChildByName("labeBulletNum").active = !1, this.joystickNode.getChildByName("SkillButtons").getChildByName("skill3").active = !1, this.joystickNode.getChildByName("SkillButtons").getChildByName("skill1").getChildByName("skillBg2").active = !0, this.joystickNode.getChildByName("SkillButtons").getChildByName("skill2").getChildByName("skillProgress").active = !0, this.joystickNode.getChildByName("SkillButtons").getChildByName("skill1").getChildByName("skillBg").active = !1, this.joystickNode.getChildByName("SkillButtons").getChildByName("skill2").getChildByName("skillBg").active = !1, this.joystickNode.getChildByName("SkillButtons").getChildByName("skill2").getChildByName("skillProgress").active = !0, this.joystickNode.getChildByName("btn\u9632\u62a4\u670d").active = !1, this.skillPB = this.joystickNode.getChildByName("SkillButtons").getChildByName("skill2").getChildByName("skillProgress").getComponent(cc.ProgressBar), this.skillLabel = this.joystickNode.getChildByName("SkillButtons").getChildByName("skill2").getChildByName("labTime").getComponent(cc.Label), this.skillPB.progress = 0, this.skillLabel.string = "", this.howitzerNode.active = !1
      },
      initHumanPanel: function () {
        this.joystickNode.active = !0, this.joystickNode.getChildByName("labeBulletNum").active = !0, this.joystickNode.getChildByName("SkillButtons").getChildByName("skill3").active = !0, this.joystickNode.getChildByName("SkillButtons").getChildByName("skill1").getChildByName("skillBg").active = !0, this.joystickNode.getChildByName("SkillButtons").getChildByName("skill2").getChildByName("skillBg").active = !0, this.joystickNode.getChildByName("SkillButtons").getChildByName("skill2").getChildByName("skillProgress").active = !1, this.joystickNode.getChildByName("SkillButtons").getChildByName("skill2").getChildByName("labTime").getComponent(cc.Label).string = "", this.joystickNode.getChildByName("SkillButtons").getChildByName("skill1").getChildByName("skillBg2").active = !1, this.joystickNode.getChildByName("SkillButtons").getChildByName("skill2").getChildByName("skillBg2").active = !1, GlobalMng.gamePlay == i.GamePlay.SurvivalMode || GlobalMng.gamePlay == i.GamePlay.SaviorModel ? this.joystickNode.getChildByName("btn\u9632\u62a4\u670d").active = !0 : this.joystickNode.getChildByName("btn\u9632\u62a4\u670d").active = !1, this.howitzerNode.active = !1, this.grenadePB = this.joystickNode.getChildByName("SkillButtons").getChildByName("skill3").getChildByName("progress").getComponent(cc.ProgressBar), this.grenadeLabel = this.joystickNode.getChildByName("SkillButtons").getChildByName("skill3").getChildByName("labTime").getComponent(cc.Label), this.grenadePB.progress = 0, this.grenadeLabel.string = ""
      },
      initModelMap: function () {
        GlobalMng.isChallengeModel() ? this.createChallengeMap() : this.createNomalMap()
      },
      createNomalMap: function () {
        var e = "map" + _.random(1, 4);
        this.curMapName = e + "", GlobalMng.sceneMng.setSpriteFrameByBundle("Res/\u5c0f\u5730\u56fe/" + e, this.miniSprite), this.curMapNode = GlobalMng.uiMng.showMemoryRes("levels/map/" + e, this.mapRoot, cc.v2(0, 0)), this.airDrop = this.curMapNode.getChildByName("\u7a7a\u6295\u70b9").children, this.defendArray = this.curMapNode.getChildByName("\u9632\u5b88\u70b9").children, this.curMapScript = this.curMapNode.getComponent("Map");
        for (var t = this.curMapNode.getChildByName("\u9632\u5b88\u7ad9\u4f4d").children, i = 0; i < t.length; i++) {
          var n = t[i];
          "defind1" == n.name ? this.defendPosArray1.push(n) : "defind2" == n.name ? this.defendPosArray2.push(n) : "defind3" == n.name ? this.defendPosArray3.push(n) : "defind4" == n.name ? this.defendPosArray4.push(n) : "defind5" == n.name && this.defendPosArray5.push(n)
        }
        for (var a = this.curMapNode.getChildByName("\u73a9\u5bb6\u51fa\u751f\u70b9").children, o = 0; o < a.length; o++) this.bornPos.push(a[o].getPosition());
        this.bornPos = _.shuffle(this.bornPos), this.curMapScript.init(this), this.scaleBili = this.curMapScript.miniBili, this.isShowMiniMap = !0
      },
      createChallengeMap: function () {
        this.curMapName = "\u6311\u6218\u5730\u56fe", this.curMapNode = GlobalMng.uiMng.showMemoryRes("levels/map/\u6311\u6218\u5730\u56fe", this.mapRoot, cc.v2(0, 0)), this.curMapScript = this.curMapNode.getComponent("Map");
        for (var e = this.curMapNode.getChildByName("\u73a9\u5bb6\u51fa\u751f\u70b9").children, t = 0; t < e.length; t++) this.bornPos.push(e[t].getPosition());
        this.curMapScript.init(this)
      },
      showCountUI: function () {
        GlobalMng.isChallengeModel() ? (this.scoreUI.node.active = !1, this.miniMapArea.parent.active = !1, this.challengeUI.node.active = !0) : (this.scoreUI.node.active = !0, this.challengeUI.node.active = !1)
      },
      startCount: function () {
        var e = this;
        GlobalMng.audioMng.playSoundRes("\u5012\u8ba1\u65f6"), this.showCountUI(), GlobalMng.sceneMng.createUIByBundle("gameTip/\u5012\u8ba1\u65f6\u63d0\u793a", this.gameTipRoot, function (t) {
          t.setPosition(0, 200), e.gameState = i.GameState.Playing, e.gameCount = e.gameModeBase.gameCountZombie, e.countNode = t, e.countNode.getChildByName("labCout").getComponent(cc.Label).string = e.gameCount, e.gameModeBase.onModelStart()
        }), this.scheduleOnce(function () {
          0 == n.playerInfo.modelLock["GameModel" + GlobalMng.gamePlay].jieshao && (n.playerInfo.modelLock["GameModel" + GlobalMng.gamePlay].jieshao = !0, n.savePlayerInfoToLocalCache(), e.btnWanFa(), GlobalMng.pauseAll())
        }, 1)
      },
      mapTip: function () {
        var e = this;
        this.isMapTip || (this.isMapTip = !0, GlobalMng.sceneMng.createUIByBundle("gameTip/\u5730\u56fe\u63d0\u793a", this.gameTipRoot, function (t) {
          t.getChildByName(e.curMapName).active = !0
        }))
      },
      getCurPlayerRank: function () {
        this.recordRank.sort(function (e, t) {
          return t.score - e.score
        });
        for (var e = 0; e < this.recordRank.length; e++) {
          var t = this.recordRank[e];
          if ("\u73a9\u5bb61" == t.pName) return [e + 1, t]
        }
      },
      getPlayerRecordBypName: function (e) {
        if ("\u611f\u67d3\u8005xx" == e) return {
          nickName: "\u611f\u67d3\u8005"
        };
        for (var t = 0; t < this.recordRank.length; t++) {
          var i = this.recordRank[t];
          if (i.pName == e) return i
        }
      },
      addRandkData: function (e, t, i) {
        "\u611f\u67d3\u8005xx" != e && (this.recordRank.filter(function (t) {
          return t.pName === e
        })[0][t] += i)
      },
      createZombie: function (e, t, i, n) {
        var a = this;
        void 0 === n && (n = "\u611f\u67d3\u8005"), i.zombieData = t, GlobalMng.uiMng.createDynamicsSke("actor/skillEffect/\u611f\u67d3\u7279\u6548", this.bulletRoot, e, null, null), this.scheduleOnce(function () {
          var t = GlobalMng.poolMng.getNode(GlobalMng.uiMng.dictSharedPanel["actor/zombie/" + n]);
          t.parent = a.playerRoot, t.setPosition(e), t.zIndex = 10, t.getComponent("Character").init(a, i), a.addZombie(t), 1 == i.ctlType && (a.selfPlayer = t.getComponent("Character"))
        }, .35)
      },
      createHuman: function (e, t, i) {
        i.skin = t;
        var n = cc.instantiate(GlobalMng.uiMng.dictSharedPanel["actor/human/\u4eba\u7c7b"]);
        n.parent = this.playerRoot, n.setPosition(e), n.zIndex = 10, n.getComponent("Character").init(this, i), this.addHuman(n), 1 == i.ctlType && (this.selfPlayer = n.getComponent("Character"))
      },
      createObserverUI: function () {
        var e = this;
        this.joystickNode.active = !1, GlobalMng.sceneMng.createUIByBundle("ui/layer/ObserverLayer", this.gameTipCenterRoot, function (t) {
          t.zIndex = 1e3, e.observerLayer = t
        })
      },
      changeHumanCameraView: function () {
        this.humanArray.length > 0 && cc.isValid(this.humanArray[this.humanViewIndex]) ? this.cameraScript.followTarget = this.humanArray[this.humanViewIndex] : this.cameraScript.followTarget = null, this.humanViewIndex++, this.humanViewIndex >= this.humanArray.length && (this.humanViewIndex = 0)
      },
      changeZombieCameraView: function () {
        this.zombieArray.length > 0 && cc.isValid(this.zombieArray[this.zombieViewIndex]) ? this.cameraScript.followTarget = this.zombieArray[this.zombieViewIndex] : this.cameraScript.followTarget = null, this.zombieViewIndex++, this.zombieViewIndex >= this.zombieArray.length && (this.zombieViewIndex = 0)
      },
      removeHuman: function (e) {
        _.removeItem(this.humanArray, e), _.removeItem(this.allActorArray, e), this.zombieArray.forEach(function (e) {
          e.getComponent("Character")._updatePerception()
        }), this.humanArray.forEach(function (e) {
          e.getComponent("Character")._updatePerception()
        }), this.gameModeBase.onCheckZombieIsWin()
      },
      removeZomie: function (e) {
        _.removeItem(this.zombieArray, e), _.removeItem(this.allActorArray, e), this.zombieArray.forEach(function (e) {
          e.getComponent("Character")._updatePerception()
        }), this.humanArray.forEach(function (e) {
          e.getComponent("Character")._updatePerception()
        }), this.gameModeBase.onCheckHumanIsWin()
      },
      addHuman: function (e) {
        this.humanArray.push(e), this.allActorArray.push(e)
      },
      addZombie: function (e) {
        this.zombieArray.push(e), this.allActorArray.push(e)
      },
      getZombieNum: function () {
        return this.zombieArray.length
      },
      getHumanNum: function () {
        return this.humanArray.length
      },
      getRandomOneDefend: function () {
        var e = _.random(0, this.defendArray.length - 1);
        return this.defendArray[e]
      },
      getAnotherOneDefend: function (e) {
        if (!this.defendArray || this.defendArray.length <= 1) return null;
        var t = this.defendArray.filter(function (t) {
          return t !== e
        });
        return t[Math.floor(Math.random() * t.length)]
      },
      getRandDefendStandPos: function (e) {
        if (!e) return null;
        var t = this["defendPosArray" + e.name];
        return t[Math.floor(Math.random() * t.length)]
      },
      drop: function () {
        var e = this;
        GlobalMng.audioMng.playSoundRes("\u76f4\u5347\u673a\u5f00\u573a");
        var t = GlobalMng.jsonMng.queryConfig("GunsDataTable", function (e) {
            return 3 == e.Lv
          }),
          i = GlobalMng.jsonMng.queryConfig("GunsDataTable", function (e) {
            return 2 == e.Lv
          }),
          n = [].concat(t, i),
          a = [1017, 1026, 1029];
        this.airDrop = _.shuffle(this.airDrop), GlobalMng.sceneMng.createUIByBundle("gameTip/\u7a7a\u6295\u7bb1\u5230\u8fbe", this.gameTipRoot, function (e) {
          e.setPosition(0, 200)
        });
        for (var o = function (t) {
            var i = e.airDrop[t];
            t < 2 ? GlobalMng.sceneMng.createUIByBundle("actor/drop/\u5f39\u836f", e.itemRoot, function (e) {
              e.setPosition(i)
            }) : t < 5 ? GlobalMng.sceneMng.createUIByBundle("actor/drop/\u6b66\u5668/\u666e\u901a", e.itemRoot, function (e) {
              e.getComponent("DropWeapon").initWeaponId(a.pop()), e.setPosition(i)
            }) : GlobalMng.sceneMng.createUIByBundle("actor/drop/\u6b66\u5668/\u7a00\u6709", e.itemRoot, function (e) {
              var t = n.pop().ID;
              e.getComponent("DropWeapon").initWeaponId(t), e.setPosition(i)
            })
          }, s = 0; s < this.airDrop.length; s++) o(s)
      },
      showKillPanel: function (e, t) {
        var i = this.killFeedPanel.createPrefab(),
          n = i.getChildByName("killer"),
          a = i.getChildByName("dead");
        n.getComponent(cc.Label).string = this.getPlayerRecordBypName(e.name).nickName, a.getComponent(cc.Label).string = this.getPlayerRecordBypName(t.name).nickName, e.isHuman() ? (n.color = new cc.Color(63, 163, 235), a.color = new cc.Color(255, 0, 0)) : (n.color = new cc.Color(255, 0, 0), a.color = new cc.Color(63, 163, 235)), this.killFeedPanel.addKillFeed(i)
      },
      showPlayerScorePanel: function () {
        this.scoreFeedPanel.addKillFeed()
      },
      createSkeUI: function (e, t, i, n, a, o) {
        GlobalMng.sceneMng.createUIByBundle(e, this.gameTipCenterRoot, function (s) {
          if (s) {
            s.parent = a, o && (s.zIndex = o), s.setPosition(t);
            var r = s.getChildByName("ske").getComponent(sp.Skeleton);
            i && (r.setSkin(i), r.setSlotsToSetupPose()), n && (r.setAnimation(0, n, !1), r.setCompleteListener(function (e) {
              n && e.animation.name !== n || null == s || s.destroy()
            }))
          } else console.error("Failed to create effect node from path: " + e)
        })
      },
      playSoundByDist: function (e, t, i) {
        this.cameraScript.isPointInCameraView(t, 1) && (i.isPlayer() ? GlobalMng.audioMng.playSoundRes(e, GlobalMng.audioMng.soundVolume) : GlobalMng.audioMng.playSoundRes(e, .35 * GlobalMng.audioMng.soundVolume))
      },
      update: function () {
        if (this.isShowMiniMap) {
          this.miniMapArea.children.forEach(function (e) {
            return e.active = !1
          });
          for (var e = 0; e < this.allActorArray.length; e++) {
            var t = this.allActorArray[e].getComponent("Character"),
              i = this.allActorArray[e].getPosition(),
              n = this.miniMapArea.getChildByName(t.name);
            if (n) {
              n.active = !0;
              var a = i.mul(this.scaleBili);
              n.setPosition(a), t.isPlayer() ? n.getChildByName("player").active = !0 : (n.getChildByName("player").active = !1, t.isZombie() ? n.getChildByName("bg").active = !1 : n.getChildByName("bg").active = !0)
            }
          }
        }
      },
      btnReturn: function () {
        GlobalMng.uiMng.showShareDG("ui/panel/SecondPanel", this.popRoot)
      },
      btnRecord: function () {
        GlobalMng.uiMng.showShareDG("ui/layer/Rank", this.popUIRoot)
      },
      btnUowitzer: function () {
        this.selfPlayer.isAlive && this.selfPlayer.fireUowitzer()
      },
      btnWanFa: function () {
        GlobalMng.uiMng.showShareDG("ui/panel/Introduction", this.popUIRoot)
      },
      btnShengHuaFu: function () {
        GlobalMng.uiMng.showShareDG("ui/panel/FangHuFu", this.popUIRoot)
      },
      btnVideoSpecial: function (e, t) {
        var i = this;
        AD.showAD(function () {
          i.isVideoSpecial = !0, i.joystickNode.getChildByName("Video").active = !1, GlobalMng.uiMng.showTip("\u4f60\u5373\u5c06\u88ab\u9009\u4e3a" + t)
        }, this)
      },
      btnVideoBullet: function () {
        var e = this;
        AD.showAD(function () {
          e.joystickNode.getChildByName("VideoBullet").active = !1, e.selfPlayer.tipMessage("\u8865\u7ed9\u5b50\u5f39"), GlobalMng.audioMng.playSoundRes("\u62fe\u53d6\u7269\u54c1"), e.selfPlayer.weapon.fillup()
        }, this)
      }
    }), cc._RF.pop()
  }, {
    ChallengeModel: "ChallengeModel",
    DoomsLayerModel: "DoomsLayerModel",
    PlayerData: "PlayerData",
    QuadTree: "QuadTree",
    SaviorModel: "SaviorModel",
    SurvivalMode: "SurvivalMode",
    TranscendentModel: "TranscendentModel",
    Types: "Types"
  }],
  GateAudo: [function (e, t) {
    "use strict";
    cc._RF.push(t, "170daJ59stOY61Uh/AOFH9i", "GateAudo"), e("Game"), cc.Class({
      extends: cc.Component,
      properties: {
        inRange: {
          default: 300,
          type: cc.Float,
          tooltip: "\u89e6\u53d1\u5f00\u95e8\u7684\u8303\u56f4"
        },
        levelRange: {
          default: 500,
          type: cc.Float,
          tooltip: "\u5f53\u6240\u6709\u5b9e\u4f53\u90fd\u5728\u5916\u90e8\u65f6\u89e6\u53d1\u95e8\u5173\u95ed\u7684\u8303\u56f4"
        }
      },
      onLoad: function () {
        this.inRange = 260, this.levelRange = 300, this.game = this.game, this.doorIsOpen = !1, this.updateTime = 0, this.ske = this.node.getChildByName("ske").getComponent(sp.Skeleton)
      },
      checkDistances: function () {
        for (var e = this.game.playerArray.concat(this.game.monsterArray), t = !1, i = !0, n = this.node.getPosition(), a = 0; a < e.length; a++)
          if (e[a] && e[a].isValid) {
            var o = e[a].getPosition(),
              s = _.dist(n, o);
            if (s <= this.inRange) {
              t = !0, i = !1;
              break
            }
            s <= this.levelRange && (i = !1)
          } t && !this.doorIsOpen ? this.openTheDoor() : !t && this.doorIsOpen && i && this.closeTheDoor()
      },
      openTheDoor: function () {
        this.doorIsOpen || (this.doorIsOpen = !0, this.ske.setAnimation(0, "\u5f00", !1))
      },
      closeTheDoor: function () {
        this.doorIsOpen && (this.doorIsOpen = !1, this.ske.setAnimation(0, "\u5173", !1))
      },
      update: function (e) {
        this.updateTime += e, this.updateTime >= .1 && (this.updateTime = 0, this.checkDistances())
      }
    }), cc._RF.pop()
  }, {
    Game: "Game"
  }],
  GiftPack: [function (e, t) {
    "use strict";
    cc._RF.push(t, "e3b63OjaWNBhK5m6u6tvk+/", "GiftPack"), cc.Class({
      extends: e("AShareUIBase"),
      properties: {},
      onLoad: function () {
        this._super()
      },
      show: function () {
        this._super()
      },
      videoSuccess: function () {
        GlobalMng.eventOne.dispatchEvent("UpdateGold", 5e3, !0, !0)
      }
    }), cc._RF.pop()
  }, {
    AShareUIBase: "AShareUIBase"
  }],
  GoldMng: [function (e, t) {
    "use strict";
    cc._RF.push(t, "b1403NWsLJMNrrx8K1Yv40G", "GoldMng");
    var i = e("PlayerData"),
      n = e("EventMng").one;
    cc.Class({
      extends: cc.Component,
      properties: {
        labGold: {
          default: null,
          type: cc.Label
        }
      },
      onLoad: function () {
        this.isClicking = !1, this.goldTitle = this.node.getChildByName("goldTitle"), n.on("UpdateGold", this.updateGold, this), this.labGold.string = i.playerInfo.gold
      },
      onDestroy: function () {
        n.off("UpdateGold", this.updateGold, this)
      },
      updateGold: function (e, t, n, a, o) {
        void 0 === t && (t = !0), void 0 === n && (n = !0), void 0 === o && (o = {});
        var s = 0;
        if (null != e && "number" == typeof e) {
          if (GlobalMng.audioMng.playSoundRes("\u83b7\u5f97\u8d27\u5e01"), s = i.playerInfo.gold, i.playerInfo.gold += e, i.savePlayerInfoToLocalCache(), a && a(), t) {
            var r = o.scoreDur ? o.scoreDur : .25;
            this.playScoreEffect(this.labGold, i.playerInfo.gold, r, s)
          } else this.labGold.string = i.playerInfo.gold;
          if (n) {
            var c = o.minGold ? o.minGold : 100,
              l = o.maxGold ? o.maxGold : 200,
              h = o.startPos ? o.startPos : cc.v2(0, 0),
              u = o.endPos ? o.endPos : this.goldTitle.position,
              d = o.flyParent ? o.flyParent : this.node;
            this.createGoldAnimation(15, d, h, u, l, c)
          }
        }
      },
      playScoreEffect: function (e, t, i, n) {
        void 0 === i && (i = 1), void 0 === n && (n = 0);
        var a = n,
          o = (t - n) / (i / .02);
        e.unscheduleAllCallbacks(), e.schedule(function () {
          a += o, o > 0 && a >= t || o < 0 && a <= t ? (a = t, e.string = Math.floor(a), e.unscheduleAllCallbacks()) : e.string = Math.floor(a)
        }, .02)
      },
      createGoldAnimation: function (e, t, i, n, a, o) {
        var s = this;
        void 0 === a && (a = 250), void 0 === o && (o = 150);
        for (var r = function () {
            var e = cc.instantiate(s.goldTitle.getChildByName("goldIcon"));
            t.addChild(e), e.setPosition(i), e.opacity = 0;
            var r = Math.random() * a - o,
              c = Math.random() * a - o + 100,
              l = cc.v2(i.x + r, i.y + c),
              h = .2 * Math.random();
            cc.tween(e).parallel(cc.tween().to(.1, {
              opacity: 255,
              scale: 1.2
            }, {
              easing: "sineOut"
            }), cc.tween().to(.15, {
              angle: 360
            }, {
              easing: "sineInOut"
            })).to(.2, {
              position: l
            }, {
              easing: "sineOut"
            }).parallel(cc.tween().to(.25 + h, {
              position: n,
              scale: .2
            }, {
              easing: "sineIn"
            }), cc.tween().to(.25 + h, {
              angle: 720,
              opacity: 50
            }, {
              easing: "sineIn"
            })).call(function () {
              null == e || e.destroy()
            }).start()
          }, c = 0; c < e; c++) r()
      }
    }), cc._RF.pop()
  }, {
    EventMng: "EventMng",
    PlayerData: "PlayerData"
  }],
  GrenadeBoom: [function (e, t) {
    "use strict";
    cc._RF.push(t, "633d4k1BAJJu5x7CUTiWfyY", "GrenadeBoom"), cc.Class({
      extends: cc.Component,
      properties: {},
      initGrenade: function (e) {
        var t = this;
        e.isPlayer() ? GlobalMng.audioMng.playSoundRes("\u624b\u96f7\u7206\u70b8") : cc.find("Canvas").getComponent("Game").playSoundByDist("\u624b\u96f7\u7206\u70b8", this.node.getPosition(), e);
        var i = this.node.getChildByName("ske").getComponent(sp.Skeleton);
        i.setAnimation(0, "animation", !1), i.setCompleteListener(function (e) {
          var i;
          "animation" === e.animation.name && (null == (i = t.node) || i.destroy())
        }), this._sourceCharacter = e, this.schedule(function () {
          t.node.getComponent(cc.BoxCollider).enabled = !1
        }, .1)
      },
      boomBoom: function () {
        this.node.getComponent(cc.BoxCollider).enabled && (this.node.getComponent(cc.BoxCollider).enabled = !1, this.node.getComponent(cc.BoxCollider).enabled = !0), this.boomTimes++, this.boomTimes >= 2 && (this.node.getComponent(cc.BoxCollider).enabled = !1)
      }
    }), cc._RF.pop()
  }, {}],
  HttpUtis: [function (e, t, i) {
    "use strict";
    cc._RF.push(t, "a23be/NZe1CqZ3TIKSbC4+H", "HttpUtis"), Object.defineProperty(i, "__esModule", {
      value: !0
    });
    var n = e("./MyLog"),
      a = e("./RxConfig"),
      o = function () {
        function e() {}
        return e.getInstance = function () {
          return e.instance || (e.instance = new e), e.instance
        }, e.prototype.get = function (e, t) {
          this.common("GET", e, null, t)
        }, e.prototype.post = function (e, t, i) {
          this.common("POST", e, t, i)
        }, e.prototype.common = function (t, i, o, s) {
          var r, c = new XMLHttpRequest;
          c.open(t, i), n.default.d("==common=="), c.setRequestHeader("Content-type", "application/json"), c.setRequestHeader("Access-Control-Allow-Origin", "http://localhost:7456"), c.setRequestHeader("Access-Control-Allow-Methods", "POST,GET,OPTIONS, PUT, DELETE"), "POST" == t ? (r = JSON.stringify(o), c.send(r)) : (n.default.d("==send=="), c.send()), c.addEventListener("load", function () {
            a.default.getInstance().platform_info.platform == a.default.getInstance().platform_info.vivoGame ? e.getInstance().HttpResponse(c, s) : c.readyState == XMLHttpRequest.DONE && e.getInstance().HttpResponse(c, s)
          })
        }, e.prototype.HttpResponse = function (e, t) {
          200 == e.status ? (n.default.d("==post==" + e.responseText), null != t && t({
            status: "ok",
            data: e.responseText
          })) : (n.default.d("==post==Error: " + e.status), null != t && t({
            status: "fail",
            data: null
          }))
        }, e
      }();
    i.default = o, cc._RF.pop()
  }, {
    "./MyLog": "MyLog",
    "./RxConfig": "RxConfig"
  }],
  HumanCollArea: [function (e, t) {
    "use strict";
    cc._RF.push(t, "dd783JxXydMdJTTtKK2aT1j", "HumanCollArea"), cc.Class({
      extends: e("ZombieCollArea"),
      properties: {},
      onCollisionEnter: function (e) {
        var t;
        if (100 == e.tag) 0 == GlobalMng.isChallengeModel() && this.character.tipMessage("\u8865\u7ed9\u5b50\u5f39"), GlobalMng.audioMng.playSoundRes("\u62fe\u53d6\u7269\u54c1"), this.character.weapon.equipBullet(), "\u5f39\u836f\u65e0\u5c3d" != e.node.name && (null == (t = e.node) || t.destroy());
        else if (101 == e.tag) {
          GlobalMng.audioMng.playSoundRes("\u62fe\u53d6\u6b66\u5668");
          var i, n = e.node.getComponent("DropWeapon");
          1 == n.wGrade && this.character.isCanReplaceWeapon ? (this.character.tipMessage("\u83b7\u5f97\u7a7a\u6295\u8865\u7ed9" + n.wName), this.character.replaceWeapon(n.wId), null == (i = e.node) || i.destroy()) : n.wGrade > 1 && this.character.isCanReplaceWeapon && this.character.isPlayer() && GlobalMng.uiMng.showShareDG("ui/panel/WeaponPush", this.popUIRoot, null, [n.wName, e.node])
        }
      },
      onCollisionExit: function () {}
    }), cc._RF.pop()
  }, {
    ZombieCollArea: "ZombieCollArea"
  }],
  HumanSoleArea: [function (e, t) {
    "use strict";
    cc._RF.push(t, "aafa7rhyyFN6Z03lYdOL03q", "HumanSoleArea"), cc.Class({
      extends: e("ZombieCollArea"),
      properties: {},
      onCollisionEnter: function () {},
      onCollisionExit: function () {}
    }), cc._RF.pop()
  }, {
    ZombieCollArea: "ZombieCollArea"
  }],
  Human: [function (e, t) {
    "use strict";
    cc._RF.push(t, "6ee39AOoqpLB7WZ7dOn+Y9X", "Human"), e("Types");
    var i = e("Constants"),
      n = e("PlayerData");
    cc.Class({
      extends: e("Character"),
      properties: {
        gunPosNode: cc.Node,
        bulletPress: cc.Sprite,
        grenadePress: cc.ProgressBar
      },
      init: function (e, t) {
        void 0 === t && (t = {}), this._super(e, t), this.initCompleted = !0, this.markedByInfected = 0, this.markedByZombies = [], this.isFire = !1, this.hasBiochemical = null != t.hasBiochemical && t.hasBiochemical, this.isSavior = !1, this.restoreImageTime = 1.5, this.isCanReplaceWeapon = !0, this._liuDanAamage = 3e3, this.howizerNum = 10, this.howizerInterval = 1.2, this.howizerIsCanFire = !0, this.initPlayerInfo(t), this.setSportState()
      },
      initPlayerInfo: function (e) {
        this.spineCtrl._setSkin(e.skin), this.weaponNode = this.node.getChildByName("weapon"), this.weapon = this.weaponNode.addComponent("WeaponBase"), this.weapon.setHolder(this), this._chargeStartTime = 0, this._maxChargeTime = 1, this._minThrowDistance = 150, this._maxThrowDistance = 550, this._minSpeed = 500, this._maxSpeed = 1400, this._minScale = .5, this._maxScale = .7, this._gAamage = 500, this._grenadeInterval = 5, this._grenadeIsCanThrow = !0, this.recordData = this.game.getPlayerRecordBypName(this.name), this.isAI() ? (this.replaceWeapon(_.random(1001, 1031)), this.game.playerAICount++, this.node.getComponent("AIBase").init(this.game, this), this.node.getComponent("AIBase").enabled = !0, this.name = "\u73a9\u5bb6" + this.game.playerAICount, this.changeHealthSp()) : (this.name = "\u73a9\u5bb61", this.replaceWeapon(n.playerInfo.weapon)), this.node.getChildByName("labName").getComponent(cc.Label).string = this.game.getPlayerRecordBypName(this.name).nickName
      },
      setBiochemical: function (e) {
        this.hasBiochemical = e, this.hasBiochemical || this.isPlayer() && (GlobalMng.audioMng.playSoundRes("\u51fb\u8d25\u611f\u67d3"), this.game.createSkeUI("actor/skillEffect/\u51fb\u6740\u56fe\u6807", cc.v2(0, -200), "\u611f\u67d3\u5931\u8d25", "animation", this.game.gameTipCenterRoot, null))
      },
      setSavior: function () {
        this.isPlayer() && (this.game.howitzerNode.active = !0, this.game.howitzerNode.getChildByName("progress").getComponent(cc.ProgressBar).progress = 0, this.game.howitzerNode.getChildByName("num").getComponent(cc.Label).string = this.howizerNum), this.isCanReplaceWeapon = !1, this.isSavior = !0, this.setBiochemical(!0);
        var e = GlobalMng.jsonMng.queryConfig("PeopleDataTable", function (e) {
          return "\u6551\u4e16\u4e3b" === e.Name
        })[0];
        this.setMaxHealth(e.PeopleHp), this.spineCtrl._setSkin("\u6551\u4e16\u4e3b"), this.replaceWeapon(1032), this.node.getChildByName("\u6551\u4e16\u4e3b").active = !0, this.node.getChildByName("\u7c92\u5b50\u4e0a").active = !0, this.node.getChildByName("\u7c92\u5b50\u4e0b").active = !0, this.moveScript.changeBaseSpeedByNum(20)
      },
      toDoomsLayer: function () {
        this.isCanReplaceWeapon = !1;
        var e = GlobalMng.jsonMng.queryConfig("PeopleDataTable", function (e) {
          return "\u672b\u65e5\u7ec8\u7ed3\u8005" === e.Name
        })[0];
        this.setMaxHealth(e.PeopleHp), this.spineCtrl._setSkin("\u672b\u65e5\u7ec8\u7ed3\u8005"), this.replaceWeapon(1033), this.node.getChildByName("\u7c92\u5b50\u4e0a").active = !0, this.node.getChildByName("\u7c92\u5b50\u4e0a").active = !0, this.moveScript.changeBaseSpeedByNum(30)
      },
      toZombie: function (e) {
        var t = this;
        void 0 === e && (e = !1), !this.hasBiochemical || e ? (this.game.removeHuman(this.node), this.isPlayer() ? (this.node.active = !1, this.cameraScript.followTarget = null, e ? this.changeToZombie(e) : GlobalMng.sceneMng.createUIByBundle("ui/layer/SelectZombie", this.game.gameTipCenterRoot, function (e) {
          e.zIndex = 1e3, t.game.selectZombieNode = e
        })) : this.changeToZombie(e)) : this.setBiochemical(!1)
      },
      changeToZombie: function (e, t) {
        var i;
        void 0 === t && (t = null), this.isAlive = !1;
        var n = this.game.gameModeBase.onGetZombieData(e),
          a = n[0],
          o = n[1],
          s = t || n[2],
          r = e ? s.MonsterMaxHp : s.MonsterHp;
        this.isPlayer() && (r *= 1.5, console.log("\u8840\u91cf\u7ffb\u500d + ", r)), this.game.createZombie(this.node.getPosition(), s, {
          ctlType: this.ctlType,
          name: this.name,
          maxHealth: r,
          attackWay: a,
          isCanRevive: o,
          isParasite: e,
          speed: s.MonsterSpeed,
          attackPower: s.MonsterAtk,
          ID: s.ID
        }), null == (i = this.node) || i.destroy(), this.isPlayer() && this.game.initZombiePanel(), 0 == e && (this.deadNum++, this.game.addRandkData(this.name, "dead", 1))
      },
      getNickName: function () {
        return this.game.getPlayerRecordBypName(this.name).nickName
      },
      biaojiMarked: function (e) {
        this.markedByZombies.includes(e) || (this.markedByZombies.push(e), this.markedByInfected = this.markedByZombies.length)
      },
      unLockMarked: function (e) {
        var t = this.markedByZombies.indexOf(e); - 1 !== t && (this.markedByZombies.splice(t, 1), this.markedByInfected = this.markedByZombies.length)
      },
      isZombieMarked: function (e) {
        return this.markedByZombies.includes(e)
      },
      flushHowitzerUI: function () {
        var e = this;
        this.game.howitzerNode.getChildByName("num").getComponent(cc.Label).string = this.howizerNum, this.howizerNum > 0 ? this.startTimer("\u69b4\u5f39\u53d1\u5c04\u5b9a\u65f6\u5668", this.howizerInterval, function () {
          e.howizerIsCanFire = !0, cc.tween(e.game.howitzerNode).to(.06, {
            scale: 1.1
          }).to(.06, {
            scale: 1
          }).start()
        }, function (t) {
          e.game.howitzerNode.getChildByName("progress").getComponent(cc.ProgressBar).progress = t
        }) : this.game.howitzerNode.getChildByName("progress").getComponent(cc.ProgressBar).progress = 1
      },
      onDownSkill1: function () {
        this.isAlive && (this.isFire || this.weapon.startFire())
      },
      onUpSkill1: function () {
        this.isAlive && this.isFire && (this.isFire = !1, this.weapon.stopFire())
      },
      onDownSkill2: function () {
        this.isAlive && this.weapon.reload()
      },
      onUpSkill2: function () {},
      onDownSkill3: function () {
        var e = this;
        this.isAlive && this._grenadeIsCanThrow && (console.log("\u84c4\u529b\u4e2d"), GlobalMng.audioMng.playSoundRes("\u84c4\u80fd_\u624b\u96f7"), this._chargeStartTime = cc.director.getTotalTime() / 1e3, this.grenadePress.node.stopAllActions(), this.grenadePress.node.parent.stopAllActions(), this.grenadePress.progress = 0, this.grenadePress.node.parent.scale = 1, this.grenadePress.node.parent.angle = 0, this.grenadePress.node.parent.opacity = 255, this.grenadePress.node.parent.active = !0, cc.tween(this.grenadePress.node.parent).repeatForever(cc.tween().to(.08, {
          scale: 1.01,
          angle: 1,
          opacity: 215
        }, {
          easing: "sineOut"
        }).to(.08, {
          scale: 1,
          angle: -1,
          opacity: 255
        }, {
          easing: "sineIn"
        })).start(), cc.tween(this.grenadePress).to(this._maxChargeTime, {
          progress: 1
        }, {
          easing: "linear"
        }).call(function () {
          e.grenadePress.node.parent.stopAllActions(), e.grenadePress.node.parent.opacity = 255, cc.tween(e.grenadePress.node.parent).repeat(30, cc.tween().to(.1, {
            scale: 1.2
          }).to(.1, {
            scale: 1
          }).to(.05, {
            angle: 5
          }).to(.05, {
            angle: -5
          }).to(.05, {
            angle: 0
          })).start()
        }).start())
      },
      onUpSkill3: function () {
        var e = this;
        if (this.isAlive && this._grenadeIsCanThrow) {
          this._grenadeIsCanThrow = !1, this.startTimer("\u624b\u96f7\u6295\u63b7\u5b9a\u65f6\u5668", this._grenadeInterval, function () {
            e.game.grenadeLabel.string = "", e._grenadeIsCanThrow = !0, cc.tween(e.game.grenadePB.node.parent).to(.06, {
              scale: 1.1
            }).to(.06, {
              scale: 1
            }).start()
          }, function (t) {
            var i = e._grenadeInterval * t;
            e.game.grenadePB.progress = t, e.game.grenadeLabel.string = i.toFixed(2)
          }), GlobalMng.audioMng.playSoundRes("\u6295\u63b7\u624b\u96f7"), GlobalMng.audioMng.stopSoundRes("\u84c4\u80fd_\u624b\u96f7"), console.log("\u6254\u51fa"), this.grenadePress.node.parent.active = !1, this.grenadePress.node.stopAllActions(), this.grenadePress.node.parent.stopAllActions();
          var t = cc.director.getTotalTime() / 1e3,
            n = Math.min(t - this._chargeStartTime, this._maxChargeTime) / this._maxChargeTime,
            a = null;
          cc.isValid(this.perceptionData.nearestEnemy) && this.perceptionData.nearestEnemyDist <= this._maxThrowDistance && (a = this.perceptionData.nearestEnemy);
          var o = this.moveScript.getFaceDir().x,
            s = this.getCenterPos();
          s.x += o * this._maxThrowDistance;
          var r = this.node.position,
            c = (a ? a.getPosition() : s).sub(r).normalize(),
            l = this._minThrowDistance + (this._maxThrowDistance - this._minThrowDistance) * n,
            h = r.add(c.mul(l)),
            u = this._minSpeed + (this._maxSpeed - this._minSpeed) * n,
            d = this._minScale + (this._maxScale - this._minScale) * n,
            p = cc.instantiate(this.game.grenadePrefab);
          if (p) {
            p.parent = this.game.bulletRoot, p.zIndex = i.ZORDER.EFFECT_NUM_GRENADE, p.setPosition(r), p.scale = .5;
            var m = h.sub(r).mag() / u,
              g = 50 * (1 - n) + 150,
              f = r.add(h).mul(.5).add(cc.v2(0, g));
            console.log(m), cc.tween(p).parallel(cc.tween().bezierTo(m, r, f, h, {
              easing: "sineOut"
            }), cc.tween().sequence(cc.tween().to(.3 * m, {
              scale: 1.5 * d
            }, {
              easing: "backOut"
            }), cc.tween().to(.3 * m, {
              scale: .9 * d
            }, {
              easing: "sineInOut"
            }), cc.tween().to(.4 * m, {
              scale: 1.2 * d
            }, {
              easing: "elasticOut"
            })), cc.tween().to(m, {
              angle: 720 * -n
            }, {
              easing: "quadInOut"
            }), cc.tween().sequence(cc.tween().to(.3 * m, {
              opacity: 200,
              color: cc.Color.YELLOW
            }, {
              easing: "sineIn"
            }), cc.tween().to(.4 * m, {
              opacity: 255,
              color: cc.Color.ORANGE
            }, {
              easing: "sineOut"
            }), cc.tween().to(.3 * m, {
              opacity: 220,
              color: cc.Color.WHITE
            }, {
              easing: "sineInOut"
            }))).call(function () {
              if (null == p || p.destroy(), cc.isValid(e.node)) {
                var t = p.position;
                GlobalMng.ccTools.screenShake(cc.find("Canvas/UICamera")), GlobalMng.sceneMng.createUIByBundle("actor/skillEffect/\u624b\u96f7\u7206\u70b8", e.game.bulletRoot, function (i) {
                  i.setPosition(t), i.getComponent("GrenadeBoom").initGrenade(e)
                })
              }
            }).start()
          } else console.error("Failed to get grenade from pool!")
        }
      },
      fireUowitzer: function () {
        var e = this;
        if (!(this.howizerNum <= 0) && this.howizerIsCanFire) {
          this.howizerIsCanFire = !1, this.howizerNum--, this.flushHowitzerUI(), GlobalMng.audioMng.playSoundRes("\u69b4\u5f39\u53d1\u5c04\u5668");
          var t = this.moveScript.getFaceDir(),
            i = this.weapon.getFirePos();
          if (this.perceptionData.nearestEnemy && this.weapon.isInWeaponRange()) {
            var n = this.perceptionData.nearestEnemy.getComponent("Character").getCenterPos();
            t = n.sub(i).normalize(), this.restoreImageTime = 0, this.moveScript.mirrorImage = null, this.updateGunBody()
          } else this.moveScript.restoreImage(), this.restoreBone(), this.restoreImageTime = 10;
          this.firAction(), this.scheduleOnce(function () {
            GlobalMng.sceneMng.createUIByBundle("actor/bullet/\u69b4\u5f39_\u84dd", e.game.bulletRoot, function (n) {
              n.setPosition(i), n.getComponent("BulletBase").init({
                character: e,
                gunSV: 100,
                bulletSpeed: 1500
              }, t)
            })
          }, 0)
        }
      },
      reloadBulletPress: function () {
        var e = this;
        this.bulletPress.fillRange = 0, this.currentRelodTime = 0, this.startTimer("\u6362\u5f39\u5b9a\u65f6\u5668", this.weapon.reloadTime, function () {}, function (t) {
          e.bulletPress.fillRange = 1 - t
        }), this.moveScript.restoreImage(), this.restoreBone(), this.restoreImageTime = 10
      },
      setCurBulletPress: function (e) {
        this.weapon._isReloading && this.stopTimer("\u6362\u5f39\u5b9a\u65f6\u5668"), this.bulletPress.fillRange = e
      },
      kill: function (e) {
        var t;
        this.isAlive && (this.killNum++, this.game.addRandkData(this.name, "kill", 1), this.isPlayer() ? (t = this.killNum >= 2 ? "\u8fde\u6740" : "\u51fb\u8d25", GlobalMng.audioMng.playSoundRes("\u51fb\u8d25\u611f\u67d3"), this.game.createSkeUI("actor/skillEffect/\u51fb\u6740\u56fe\u6807", cc.v2(0, -200), t, "animation", this.game.gameTipCenterRoot, null)) : e.zhuGongTime > 0 && (GlobalMng.audioMng.playSoundRes("\u51fb\u8d25\u611f\u67d3"), this.game.createSkeUI("actor/skillEffect/\u51fb\u6740\u56fe\u6807", cc.v2(0, -200), "\u52a9\u653b", "animation", this.game.gameTipCenterRoot, null)))
      },
      takeDamage: function (e) {
        if (this.isAlive) {
          var t = (1 - this.avoidance) * e.attackPower,
            i = parseInt(t);
          this.flushHealth(-i), this.health <= 0 && (this.health = 0, this.die());
          var n = this.getTopPos();
          this.showDamageText(e.attackPower, n)
        }
      },
      onDeath: function () {
        var e = this;
        this.deadNum++, this.game.addRandkData(this.name, "dead", 1), this.weapon.stopFire(), this.game.removeHuman(this.node), this.hideHealth(), this.node.getChildByName("selfTag").active = !1, this.closeBoxCollder(), this.spineCtrl.playSke("\u6b7b\u4ea1", function () {
          var t;
          e.isPlayer() ? GlobalMng.isChallengeModel() ? (e.node.active = !1, GlobalMng.uiMng.showShareDG("ui/panel/RevivePanel", e.popRoot)) : GlobalMng.uiMng.createDynamicsSke("actor/skillEffect/\u722a\u75d5", e.game.gameTipCenterRoot, cc.v2(0, 0), null, function () {
            var t;
            e.game.cameraScript.followTarget == e.node && (e.game.createObserverUI(), e.game.changeHumanCameraView(), null == (t = e.node) || t.destroy())
          }) : null == (t = e.node) || t.destroy()
        })
      },
      revive: function () {
        var e = this;
        this.showHealth(), this.flushHealth(this.maxHealth), this.isAlive = !0, this.game.addHuman(this.node), this.spineCtrl.playIdle(), this.openBoxCollder(), this.node.getChildByName("selfTag").active = this.isPlayer(), this.thaw(), this.node.active = !0, this.avoidance = 1, this.scheduleOnce(function () {
          e.avoidance = 0
        }, 5)
      },
      replaceWeapon: function (e) {
        if (this.isAlive) {
          this.restoreBone();
          var t = GlobalMng.jsonMng.queryConfig("GunsDataTable", function (t) {
            return t.ID === e
          })[0];
          this.spineCtrl.ske.setAnimation(5, "\u6362\u67aa/" + t.Name, !1);
          var i = {
            baseDamage: t.ATK,
            fireRate: t.RPM,
            decelerationFactor: t.BackValue / 100,
            decelerationDuration: t.BackTime,
            gunSV: t.GunSV,
            range: t.GunRange,
            clipSize: t.GunAmmo,
            ammoSize: t.GunAmmoSum,
            gunHit: t.GunHit,
            reloadTime: t.GunReload,
            bulletSpeed: t.GunBulletrate
          };
          this.isPlayer() && (i.range = 1e3), this.weapon.setWeaponConfig(i, t)
        }
      },
      reloadAction: function () {
        this.isAlive && (this.restoreBone(), this.spineCtrl.ske.setAnimation(3, "\u6362\u5f39", !0))
      },
      firAction: function () {
        var e = this;
        this.isAlive && (this.spineCtrl.ske.setCompleteListener(null), this.stopTimer("\u6e05\u9664\u5f00\u67aa\u52a8\u4f5c\u5b9a\u65f6\u5668"), this.spineCtrl.ske.setAnimation(1, "\u5f00\u67aa", !1), this.spineCtrl.ske.setCompleteListener(function (t) {
          if ("\u5f00\u67aa" === t.animation.name) {
            var i = 1.5 - e.restoreImageTime;
            i <= 0 ? e.spineCtrl._clearTracks(1) : e.startTimer("\u6e05\u9664\u5f00\u67aa\u52a8\u4f5c\u5b9a\u65f6\u5668", i, function () {
              e.spineCtrl._clearTracks(1)
            })
          }
        }))
      },
      restoreBone: function () {
        this.spineCtrl.ske.findBone("\u7784\u51c6").rotation = 0
      },
      updateAction: function () {
        this.isAlive && this.getIsSportState() && (this.moveScript.getIsStopState() ? this.spineCtrl.playIdle() : (null == this.moveScript.mirrorImage ? this.moveScript.YsmirrorImage.scaleX > 0 && this.moveScript.isLeft() ? this.spineCtrl.playSkeLoop("\u9000\u8dd1") : this.moveScript.YsmirrorImage.scaleX < 0 && this.moveScript.isRight() ? this.spineCtrl.playSkeLoop("\u9000\u8dd1") : this.spineCtrl.playSkeLoop("\u8dd1") : this.spineCtrl.playSkeLoop("\u8dd1"), this.isPlayer() && this.playWalk()))
      },
      updateGunBody: function () {
        if (this.restoreImageTime += .1, this.restoreImageTime < 1.5) {
          if (cc.isValid(this.perceptionData.nearestEnemy) && this.perceptionData.nearestEnemyDist >= 50) {
            var e = this.weapon.getFirePos(),
              t = this.perceptionData.nearestEnemy.getComponent("Character").getCenterPos().sub(e).normalize(),
              i = cc.v2(1, 0),
              n = i.signAngle(t),
              a = cc.misc.radiansToDegrees(n),
              o = this.spineCtrl.ske.findBone("\u7784\u51c6");
            this.perceptionData.nearestEnemy.x > this.node.x ? o.rotation = a : (n = (i = cc.v2(-1, 0)).signAngle(t), a = cc.misc.radiansToDegrees(n), o.rotation = -a), 0 == this.moveScript.isFaceTarget(this.perceptionData.nearestEnemy) && this.moveScript.changeFace()
          }
        } else this.moveScript.restoreImage(), this.restoreBone()
      },
      onUpdate01: function () {
        this.updateGunBody()
      },
      updatePlayer: function () {
        this.initCompleted
      },
      update: function (e) {
        this._super(e), this.isAlive && (this.updatePlayer(e), this.node.getChildByName("biaoji").getComponent(cc.Label).string = this.markedByInfected)
      }
    }), cc._RF.pop()
  }, {
    Character: "Character",
    Constants: "Constants",
    PlayerData: "PlayerData",
    Types: "Types"
  }],
  Icon: [function (e, t, i) {
    "use strict";
    cc._RF.push(t, "27cb8Mxn0lL2bYYgTaZWVv8", "Icon");
    var n, a = this && this.__extends || (n = function (e, t) {
        return (n = Object.setPrototypeOf || {
            __proto__: []
          }
          instanceof Array && function (e, t) {
            e.__proto__ = t
          } || function (e, t) {
            for (var i in t) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i])
          })(e, t)
      }, function (e, t) {
        function i() {
          this.constructor = e
        }
        n(e, t), e.prototype = null === t ? Object.create(t) : (i.prototype = t.prototype, new i)
      }),
      o = this && this.__decorate || function (e, t, i, n) {
        var a, o = arguments.length,
          s = o < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, i) : n;
        if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(e, t, i, n);
        else
          for (var r = e.length - 1; r >= 0; r--)(a = e[r]) && (s = (o < 3 ? a(s) : o > 3 ? a(t, i, s) : a(t, i)) || s);
        return o > 3 && s && Object.defineProperty(t, i, s), s
      };
    Object.defineProperty(i, "__esModule", {
      value: !0
    });
    var s = e("../../MyLog"),
      r = e("./MoreGameManager"),
      c = cc._decorator,
      l = c.ccclass,
      h = c.property,
      u = function (e) {
        function t() {
          var t = null !== e && e.apply(this, arguments) || this;
          return t.prefab = null, t.parent = null, t.moreGamex = 0, t.moreGamey = 0, t.scaleData = 1, t
        }
        return a(t, e), t.prototype.start = function () {
          s.default.d("===Icon=start===");
          var e = this;
          this.node.setScale(.7, .7), r.default.getInstance().GetGameMore(function (t) {
            e.node.active = t
          })
        }, t.prototype.Open = function () {
          var e = this;
          if (null == r.default.getInstance().games) {
            var t = this;
            r.default.getInstance().GetGameMore(function (i) {
              t.node.active = i, 1 == i && e.CreateFrepab()
            })
          } else this.CreateFrepab()
        }, t.prototype.CreateFrepab = function () {
          s.default.d("==icon=CreateFrepab=" + r.default.getInstance().games.length);
          var e = this.node.parent;
          null != this.parent && (e = this.parent);
          var t = cc.instantiate(this.prefab);
          e.addChild(t), t.position = cc.v3(this.moreGamex, this.moreGamey), t.setScale(this.scaleData, this.scaleData)
        }, o([h(cc.Prefab)], t.prototype, "prefab", void 0), o([h(cc.Node)], t.prototype, "parent", void 0), o([h], t.prototype, "moreGamex", void 0), o([h], t.prototype, "moreGamey", void 0), o([h], t.prototype, "scaleData", void 0), o([l], t)
      }(cc.Component);
    i.default = u, cc._RF.pop()
  }, {
    "../../MyLog": "MyLog",
    "./MoreGameManager": "MoreGameManager"
  }],
  InputManager: [function (e, t) {
    "use strict";
    cc._RF.push(t, "20dc4xPnR5Kw5wfZysmak74", "InputManager"), cc.Class({
      extends: cc.Component,
      properties: {
        isMultiplayerMode: !1,
        enableKeyboard: !0
      },
      onLoad: function () {},
      init: function () {
        this.isMultiplayerMode = !1, this.moveScriptPlayer1 = null, this.moveScriptPlayer2 = null, this.inputState = {
          player1: {
            direction: cc.v2(0, 0),
            buttons: {
              skill1: !1,
              skill2: !1,
              skill3: !1
            }
          },
          player2: {
            direction: cc.v2(0, 0),
            buttons: {
              skill1: !1,
              skill2: !1,
              skill3: !1
            }
          }
        }, this.keyConfig = this.getDefaultKeyConfig(), this.enableKeyboard && this.setupKeyboardEvents(), this.listeners = {
          player1: {},
          player2: {}
        }
      },
      setJoyInput: function (e) {
        this.joystickPlayer1 = null, this.joystickPlayer2 = null, this.skillButtonsPlayer1 = [], this.skillButtonsPlayer2 = [], this.joystickPlayer1 = e;
        var t = e.getChildByName("SkillButtons");
        t && (this.skillButtonsPlayer1 = t.getComponentsInChildren(cc.Button)), this.setupJoystickEvents(), this.setupButtonEvents()
      },
      loadInputControls: function (e, t) {
        var i = this;
        this.joystickPlayer1 = null, this.joystickPlayer2 = null, this.skillButtonsPlayer1 = [], this.skillButtonsPlayer2 = [];
        var n = this.isMultiplayerMode ? 2 : 1,
          a = 0,
          o = function () {
            ++a >= n && (i.setupJoystickEvents(), i.setupButtonEvents(), t && t())
          };
        this.isMultiplayerMode ? (GlobalMng.sceneMng.createUIByBundle("input/double/Joystick1", e, function (e) {
          e.x = -400, i.joystickPlayer1 = e;
          var t = e.getChildByName("SkillButtons");
          t && (i.skillButtonsPlayer1 = t.getComponentsInChildren(cc.Button)), o()
        }), GlobalMng.sceneMng.createUIByBundle("input/double/Joystick2", e, function (e) {
          e.x = 400, i.joystickPlayer2 = e;
          var t = e.getChildByName("SkillButtons");
          t && (i.skillButtonsPlayer2 = t.getComponentsInChildren(cc.Button)), o()
        })) : GlobalMng.sceneMng.createUIByBundle("input/single/Joystick1", e, function (e) {
          i.joystickPlayer1 = e;
          var t = e.getChildByName("SkillButtons");
          t && (i.skillButtonsPlayer1 = t.getComponentsInChildren(cc.Button)), o()
        })
      },
      on: function (e, t, i) {
        var n = 1 === i ? "player1" : "player2";
        this.listeners[n][e] || (this.listeners[n][e] = []), this.listeners[n][e].push(t)
      },
      off: function (e, t, i) {
        var n = 1 === i ? "player1" : "player2";
        if (this.listeners[n][e])
          if (t) {
            var a = this.listeners[n][e].indexOf(t); - 1 !== a && this.listeners[n][e].splice(a, 1)
          } else this.listeners[n][e] = []
      },
      emit: function (e, t) {
        for (var i = arguments.length, n = new Array(i > 2 ? i - 2 : 0), a = 2; a < i; a++) n[a - 2] = arguments[a];
        var o = 1 === t ? "player1" : "player2",
          s = this.listeners[o][e];
        s && s.forEach(function (e) {
          return e.apply(void 0, n)
        })
      },
      setupJoystickEvents: function () {
        var e = this;
        if (this.joystickPlayer1) {
          var t = this.joystickPlayer1.getComponent("Joystick");
          t && (t.onJoystickMove = function (t) {
            e.inputState.player1.direction = t
          }, t.onJoystickEnd = function () {
            e.inputState.player1.direction = cc.v2(0, 0)
          })
        }
        if (this.joystickPlayer2 && this.isMultiplayerMode) {
          var i = this.joystickPlayer2.getComponent("Joystick");
          i && (i.onJoystickMove = function (t) {
            e.inputState.player2.direction = t
          }, i.onJoystickEnd = function () {
            e.inputState.player2.direction = cc.v2(0, 0)
          })
        }
      },
      resetJoystick: function () {
        this.joystickPlayer1 && this.joystickPlayer1.getComponent("Joystick").resetJoystick(), this.joystickPlayer2 && this.isMultiplayerMode && this.joystickPlayer2.getComponent("Joystick").resetJoystick(), this.inputState = {
          player1: {
            direction: cc.v2(0, 0),
            buttons: {
              skill1: !1,
              skill2: !1,
              skill3: !1
            }
          },
          player2: {
            direction: cc.v2(0, 0),
            buttons: {
              skill1: !1,
              skill2: !1,
              skill3: !1
            }
          }
        }
      },
      setupButtonEvents: function () {
        var e = this;
        this.skillButtonsPlayer1.forEach(function (t, i) {
          t && t.node && (t.node.on("touchstart", function () {
            e.inputState.player1.buttons["skill" + (i + 1)] = !0, e.emit("buttonDown", 1, "skill" + (i + 1), t.node)
          }), t.node.on("touchend", function () {
            e.inputState.player1.buttons["skill" + (i + 1)] = !1, e.emit("buttonUp", 1, "skill" + (i + 1), t.node)
          }), t.node.on("touchcancel", function () {
            e.inputState.player1.buttons["skill" + (i + 1)] = !1, e.emit("buttonUp", 1, "skill" + (i + 1), t.node)
          }))
        }), this.isMultiplayerMode && this.skillButtonsPlayer2.forEach(function (t, i) {
          t && t.node && (t.node.on("touchstart", function () {
            e.inputState.player2.buttons["skill" + (i + 1)] = !0, e.emit("buttonDown", 2, "skill" + (i + 1), t.node)
          }), t.node.on("touchend", function () {
            e.inputState.player2.buttons["skill" + (i + 1)] = !1, e.emit("buttonUp", 2, "skill" + (i + 1), t.node)
          }), t.node.on("touchcancel", function () {
            e.inputState.player2.buttons["skill" + (i + 1)] = !1, e.emit("buttonUp", 2, "skill" + (i + 1), t.node)
          }))
        })
      },
      setupKeyboardEvents: function () {
        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN, this.onKeyDown, this), cc.systemEvent.on(cc.SystemEvent.EventType.KEY_UP, this.onKeyUp, this)
      },
      onKeyDown: function (e) {
        var t = e.keyCode;
        this.isMultiplayerMode && this.isPlayer2Key(t) ? this.processPlayerKeyDown(t, "player2") : this.processPlayerKeyDown(t, "player1")
      },
      onKeyUp: function (e) {
        var t = e.keyCode;
        this.isMultiplayerMode && this.isPlayer2Key(t) ? this.processPlayerKeyUp(t, "player2") : this.processPlayerKeyUp(t, "player1")
      },
      isPlayer2Key: function (e) {
        var t = this.keyConfig.player2;
        return [t.up, t.down, t.left, t.right, t.skill1, t.skill2, t.skill3].includes(e)
      },
      processPlayerKeyDown: function (e, t) {
        var i = this.keyConfig[t],
          n = "player1" === t ? 1 : 2;
        e === i.up ? this.inputState[t].direction.y = 1 : e === i.down ? this.inputState[t].direction.y = -1 : e === i.left ? this.inputState[t].direction.x = -1 : e === i.right ? this.inputState[t].direction.x = 1 : e === i.skill1 ? (this.inputState[t].buttons.skill1 = !0, this.emit("buttonDown", n, "skill1", null)) : e === i.skill2 ? (this.inputState[t].buttons.skill2 = !0, this.emit("buttonDown", n, "skill2", null)) : e === i.skill3 && (this.inputState[t].buttons.skill3 = !0, this.emit("buttonDown", n, "skill3", null))
      },
      processPlayerKeyUp: function (e, t) {
        var i = this.keyConfig[t],
          n = "player1" === t ? 1 : 2;
        e === i.up && this.inputState[t].direction.y > 0 ? this.inputState[t].direction.y = 0 : e === i.down && this.inputState[t].direction.y < 0 ? this.inputState[t].direction.y = 0 : e === i.left && this.inputState[t].direction.x < 0 ? this.inputState[t].direction.x = 0 : e === i.right && this.inputState[t].direction.x > 0 ? this.inputState[t].direction.x = 0 : e === i.skill1 ? (this.inputState[t].buttons.skill1 = !1, this.emit("buttonUp", n, "skill1", null)) : e === i.skill2 ? (this.inputState[t].buttons.skill2 = !1, this.emit("buttonUp", n, "skill2", null)) : e === i.skill3 && (this.inputState[t].buttons.skill3 = !1, this.emit("buttonUp", n, "skill3", null))
      },
      getDirection: function (e) {
        var t = 1 === e ? "player1" : "player2";
        return this.inputState[t].direction
      },
      getStrength: function (e) {
        return 1 == e ? this.joystickPlayer1.getComponent("Joystick").getStrength() : this.joystickPlayer2.getComponent("Joystick").getStrength()
      },
      getButtonNode: function (e, t) {
        var i = 1 === e ? this.skillButtonsPlayer1 : this.skillButtonsPlayer2;
        if (!i || 0 === i.length) return cc.warn("\u73a9\u5bb6" + e + "\u7684\u6309\u94ae\u6570\u7ec4\u672a\u521d\u59cb\u5316"), null;
        for (var n = 0; n < i.length; n++) {
          var a = i[n];
          if (a && a.node && a.node.name === t) return a.node
        }
        return cc.warn("\u672a\u627e\u5230\u73a9\u5bb6" + e + "\u7684\u6309\u94ae " + t), null
      },
      getDefaultKeyConfig: function () {
        return {
          player1: {
            up: cc.macro.KEY.w,
            down: cc.macro.KEY.s,
            left: cc.macro.KEY.a,
            right: cc.macro.KEY.d,
            skill1: cc.macro.KEY.j,
            skill2: cc.macro.KEY.k,
            skill3: cc.macro.KEY.l
          },
          player2: {
            up: cc.macro.KEY.up,
            down: cc.macro.KEY.down,
            left: cc.macro.KEY.left,
            right: cc.macro.KEY.right,
            skill1: cc.macro.KEY.num1,
            skill2: cc.macro.KEY.num2,
            skill3: cc.macro.KEY.num3
          }
        }
      },
      onDestroy: function () {
        this.enableKeyboard && (cc.systemEvent.off(cc.SystemEvent.EventType.KEY_DOWN, this.onKeyDown, this), cc.systemEvent.off(cc.SystemEvent.EventType.KEY_UP, this.onKeyUp, this)), this.skillButtonsPlayer1.forEach(function (e) {
          e && e.node && e.node.isValid && (e.node.off("touchstart"), e.node.off("touchend"), e.node.off("touchcancel"))
        }), this.isMultiplayerMode && this.skillButtonsPlayer2.forEach(function (e) {
          e && e.node && e.node.isValid && (e.node.off("touchstart"), e.node.off("touchend"), e.node.off("touchcancel"))
        }), this.listeners = {
          player1: {},
          player2: {}
        }
      }
    }), cc._RF.pop()
  }, {}],
  Introduction: [function (e, t) {
    "use strict";
    cc._RF.push(t, "8e615TO/1hBEqRK4Mlew7jU", "Introduction"), cc.Class({
      extends: e("AShareUIBase"),
      properties: {
        shuomingNode: cc.Node
      },
      onLoad: function () {
        this._super()
      },
      show: function () {
        this._super(), this.shuomingNode.getChildByName("" + GlobalMng.gamePlay).active = !0
      },
      videoSuccess: function () {},
      hideSuccess: function () {
        this.shuomingNode.children.forEach(function (e) {
          return e.active = !1
        })
      }
    }), cc._RF.pop()
  }, {
    AShareUIBase: "AShareUIBase"
  }],
  ItemCtrl: [function (e, t, i) {
    "use strict";
    cc._RF.push(t, "cd386HbZwtNYabpIyU2A8pt", "ItemCtrl");
    var n, a = this && this.__extends || (n = function (e, t) {
        return (n = Object.setPrototypeOf || {
            __proto__: []
          }
          instanceof Array && function (e, t) {
            e.__proto__ = t
          } || function (e, t) {
            for (var i in t) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i])
          })(e, t)
      }, function (e, t) {
        function i() {
          this.constructor = e
        }
        n(e, t), e.prototype = null === t ? Object.create(t) : (i.prototype = t.prototype, new i)
      }),
      o = this && this.__decorate || function (e, t, i, n) {
        var a, o = arguments.length,
          s = o < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, i) : n;
        if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(e, t, i, n);
        else
          for (var r = e.length - 1; r >= 0; r--)(a = e[r]) && (s = (o < 3 ? a(s) : o > 3 ? a(t, i, s) : a(t, i)) || s);
        return o > 3 && s && Object.defineProperty(t, i, s), s
      };
    Object.defineProperty(i, "__esModule", {
      value: !0
    });
    var s = e("../../MyLog"),
      r = e("./MoreGameManager"),
      c = cc._decorator,
      l = c.ccclass,
      h = c.property,
      u = function (e) {
        function t() {
          var t = null !== e && e.apply(this, arguments) || this;
          return t.icon = null, t
        }
        return a(t, e), t.prototype.start = function () {}, t.prototype.changeImg = function (e) {
          var t = this;
          this.item = e, cc.loader.load({
            url: e.icon,
            type: "png"
          }, function (e, i) {
            e ? console.error(e) : t.icon.getComponent(cc.Sprite).spriteFrame = new cc.SpriteFrame(i)
          })
        }, t.prototype.clickItem = function () {
          null != this.item && (s.default.d("==ItemCtrl==clickItem====="), r.default.getInstance().NavgateTo(this.item))
        }, o([h(cc.Sprite)], t.prototype, "icon", void 0), o([l], t)
      }(cc.Component);
    i.default = u, cc._RF.pop()
  }, {
    "../../MyLog": "MyLog",
    "./MoreGameManager": "MoreGameManager"
  }],
  ItemShop: [function (e, t) {
    "use strict";
    cc._RF.push(t, "a2b60mRBWFB/6YEpxSiR5Vk", "ItemShop"), e("Game"), cc.Class({
      extends: e("AShareUIBase"),
      properties: {
        btnNode1: cc.Node,
        btnNode2: cc.Node
      },
      onLoad: function () {
        this._super()
      },
      show: function () {
        this._super(), this.flushButton()
      },
      videoSuccess: function (e) {
        this._super(e), "btn_Video1" == e ? this.game.useOrCloseItemMonster(!0) : "btn_Video2" == e && this.game.useOrCloseItemMove(!0), this.flushButton()
      },
      flushButton: function () {
        this.btnNode1.active = !this.game.monsterIsOpenMini, this.btnNode2.active = !this.game.playerIsOpenMove
      }
    }), cc._RF.pop()
  }, {
    AShareUIBase: "AShareUIBase",
    Game: "Game"
  }],
  Item: [function (e, t) {
    "use strict";
    cc._RF.push(t, "69836Kn9/tN6JbwJpgBjjTP", "Item"), cc.Class({
      extends: cc.Component,
      properties: {
        label: {
          default: null,
          type: cc.Label
        },
        tmplID: 0,
        itemID: 0
      },
      onLoad: function () {
        this.node.on("touchend", function () {
          console.log("Item " + this.itemID + " clicked")
        }, this)
      },
      initItem: function (e, t) {
        this.tmplID = e, this.itemID = t
      },
      updateItem: function (e) {
        this.itemID = e
      }
    }), cc._RF.pop()
  }, {}],
  Joystick: [function (e, t) {
    "use strict";
    cc._RF.push(t, "72d44eGgLhN1Lzl0arf9I3l", "Joystick");
    var i = cc.Enum({
      Fixed: 0,
      FollowTouch: 1
    });
    cc.Class({
      extends: cc.Component,
      properties: {
        joystickBG: {
          default: null,
          type: cc.Node,
          tooltip: "\u6447\u6746\u80cc\u666f\u8282\u70b9"
        },
        joystickStick: {
          default: null,
          type: cc.Node,
          tooltip: "\u6447\u6746\u63a7\u5236\u70b9\u8282\u70b9"
        },
        maxRadius: {
          default: 50,
          tooltip: "\u6447\u6746\u6700\u5927\u79fb\u52a8\u534a\u5f84"
        },
        joystickType: {
          default: i.Fixed,
          type: i,
          tooltip: "\u6447\u6746\u79fb\u52a8\u6a21\u5f0f\uff1aFixed-\u56fa\u5b9a\u4f4d\u7f6e, FollowTouch-\u8ddf\u968f\u89e6\u6478\u70b9"
        },
        isDynamicJoystick: {
          default: !1,
          tooltip: "\u662f\u5426\u662f\u52a8\u6001\u6447\u6746"
        },
        isEnabled: {
          default: !0,
          tooltip: "\u662f\u5426\u542f\u7528\u6447\u6746"
        }
      },
      onLoad: function () {
        this.joyArea = this.node.getChildByName("area"), this.isMoving = !1, this.direction = cc.v2(0, 0), this.touchID = null, this.isDynamicJoystick && (this.joyArea.opacity = 0), this.originPos = this.joystickBG.position, this.joystickStick.parent !== this.joystickBG && (this.joystickStick.parent = this.joystickBG), this.joystickStick.position = cc.v2(0, 0), this.registerTouchEvents()
      },
      registerTouchEvents: function () {
        this.joyArea.on(cc.Node.EventType.TOUCH_START, this.onTouchStart, this), this.joyArea.on(cc.Node.EventType.TOUCH_MOVE, this.onTouchMove, this), this.joyArea.on(cc.Node.EventType.TOUCH_END, this.onTouchEnd, this), this.joyArea.on(cc.Node.EventType.TOUCH_CANCEL, this.onTouchEnd, this)
      },
      onTouchStart: function (e) {
        if (this.isEnabled) {
          var t = e.getLocation(),
            n = this.node.convertToNodeSpaceAR(t);
          (this.joystickType === i.FollowTouch || this.isDynamicJoystick) && (this.joystickBG.setPosition(n), this.isDynamicJoystick && (this.joyArea.opacity = 255)), this.isMoving = !0, this.touchID = e.getID(), this.joystickStick.setPosition(cc.v2(0, 0)), this.onTouchMove(e)
        }
      },
      onTouchMove: function (e) {
        if (this.isEnabled && this.isMoving && this.touchID === e.getID()) {
          var t = e.getLocation(),
            i = this.joystickBG.convertToWorldSpaceAR(cc.v2(0, 0)),
            n = t.sub(i),
            a = n.mag();
          a > this.maxRadius && n.mulSelf(this.maxRadius / a), this.joystickStick.setPosition(n), this.direction = n.normalize(), this.onJoystickMove && this.onJoystickMove(this.direction)
        }
      },
      onTouchEnd: function (e) {
        this.isEnabled && this.touchID === e.getID() && (this.isMoving = !1, this.touchID = null, this.direction = cc.v2(0, 0), this.joystickStick.setPosition(cc.v2(0, 0)), this.isDynamicJoystick && (this.joyArea.opacity = 0), this.onJoystickEnd && this.onJoystickEnd())
      },
      resetJoystick: function () {
        this.isMoving = !1, this.touchID = null, this.direction = cc.v2(0, 0), this.joystickStick.setPosition(cc.v2(0, 0)), this.joystickBG.setPosition(this.originPos), this.isDynamicJoystick && (this.joyArea.opacity = 0), this.isEnabled = !0
      },
      getDirection: function () {
        return this.direction
      },
      getStrength: function () {
        return this.joystickStick.position.mag() / this.maxRadius <= .5 ? .5 : 1
      },
      setEnabled: function (e) {
        this.isEnabled = e, e || (this.isMoving = !1, this.touchID = null, this.direction = cc.v2(0, 0), this.joystickStick.setPosition(cc.v2(0, 0)), this.isDynamicJoystick && (this.joyArea.opacity = 0))
      }
    }), cc._RF.pop()
  }, {}],
  JsonConfigMng: [function (e, t) {
    "use strict";
    cc._RF.push(t, "45840mawM5MkrPH2S3VeJzP", "JsonConfigMng");
    var i = new(function () {
      function e() {
        return e.instance || (this.configs = {}, e.instance = this), e.instance
      }
      var t = e.prototype;
      return t.loadAllJson = function () {
        this.etConfig = this.getConfig("EnergyTable")
      }, t.loadLevelTableById = function (e, t) {
        var i = this.queryByField("LevelTable", "Level", e);
        return t < 0 || t >= i.length ? (console.error("Index " + t + " is out of bounds. Valid range is 0 to " + (i.length - 1) + "."), null) : i[t]
      }, t.queryByField = function (e, t, i) {
        var n = this.getConfig(e);
        return n ? n.filter(function (e) {
          return e[t] === i
        }) : (console.error("Config '" + e + "' not found."), [])
      }, t.loadJSON = function (e, t) {
        var i = this;
        cc.resources.load("datas/" + e, function (n, a) {
          if (n) console.error("Failed to load JSON file: " + e);
          else try {
            var o = a.json,
              s = cc.path.basename(e, ".json");
            i.configs[s] = o, t && t(o)
          } catch (t) {
            console.error("Error parsing JSON file: " + e), console.error(t)
          }
        })
      }, t.loadJSONs = function (e, t) {
        var i = this;
        if (0 != e.length) {
          var n = {},
            a = 0,
            o = e.length;
          e.forEach(function (e) {
            i.loadJSON(e, function (i) {
              n[e] = i, ++a === o && t && t(n)
            })
          })
        } else t && t()
      }, t.getConfig = function (e) {
        return this.configs[e] || null
      }, t.queryConfig = function (e, t) {
        var i = this.getConfig(e);
        return i ? i.filter(t) : (console.error("Config '" + e + "' not found."), [])
      }, t.getConfigByEle = function (e, t, i) {
        return this.queryConfig(e, function (e) {
          return e[t] === i
        })[0]
      }, t.queryByKeyValuePair = function (e, t) {
        var i = this.getConfig(e);
        return i ? i.filter(function (e) {
          for (var i in t)
            if (e[i] !== t[i]) return !1;
          return !0
        }) : (console.error("Config '" + e + "' not found."), [])
      }, t._getRandStrLeftRight = function (e) {
        if (!e || "string" != typeof e) throw new Error('\u8f93\u5165\u5fc5\u987b\u662f\u4e00\u4e2a\u683c\u5f0f\u4e3a "\u5de6\u503c-\u53f3\u503c" \u7684\u5b57\u7b26\u4e32');
        var t = e.split("-");
        if (2 !== t.length) throw new Error('\u8f93\u5165\u5b57\u7b26\u4e32\u683c\u5f0f\u9519\u8bef\uff0c\u5e94\u4e3a "\u5de6\u503c-\u53f3\u503c"');
        var i = parseFloat(t[0]),
          n = parseFloat(t[1]);
        if (isNaN(i) || isNaN(n)) throw new Error("\u5de6\u53f3\u503c\u5fc5\u987b\u662f\u6709\u6548\u7684\u6570\u5b57");
        if (i > n) throw new Error("\u5de6\u503c\u4e0d\u80fd\u5927\u4e8e\u53f3\u503c");
        return _.random(i, n)
      }, e
    }());
    Object.freeze(i), t.exports = i, cc._RF.pop()
  }, {}],
  Key: [function (e, t) {
    "use strict";
    cc._RF.push(t, "f4514T23e9AupfjnPeShJWA", "Key"), e("Game"), cc.Class({
      extends: cc.Component,
      properties: {},
      onLoad: function () {
        this.keyName = "", this.qudaRect = null, this.ske = this.node.getChildByName("\u5b9d\u77f3").getComponent(sp.Skeleton), this.ske.skeletonData.textures[0].packable = !0, this.ske.batching = !0, this.ske.enableBatch = !0, this.flySpeed = 880, this.arriveThreshold = 10
      },
      start: function () {},
      setFlayTarget: function (e) {
        this.player = e
      },
      keyDesAnimation: function () {
        var e = this;
        this.ske.setAnimation(0, "\u6d88\u5931", !1), this.ske.setCompleteListener(function (t) {
          var i;
          "\u6d88\u5931" === t.animation.name && (null == (i = e.node) || i.destroy())
        })
      },
      update: function (e) {
        if (this.player) {
          var t = this.player.getMagnetHandPos();
          if (t) {
            var i, n = this.node.getPosition(),
              a = t.sub(n);
            if (a.mag() <= this.arriveThreshold) return this.game.addKey(), void(null == (i = this.node) || i.destroy());
            var o = this.flySpeed * e,
              s = a.normalize().mul(o);
            this.node.setPosition(n.add(s))
          }
        }
      }
    }), cc._RF.pop()
  }, {
    Game: "Game"
  }],
  KillFeedMng: [function (e, t) {
    "use strict";
    cc._RF.push(t, "9e467JpTKhI67bgYbCMBedF", "KillFeedMng"), cc.Class({
      extends: cc.Component,
      properties: {
        killFeedPrefab: {
          default: null,
          type: cc.Prefab,
          tooltip: "\u51fb\u6740\u63d0\u793a\u7684\u9884\u5236\u4f53"
        },
        maxItems: {
          default: 3,
          type: cc.Integer,
          tooltip: "\u6700\u5927\u663e\u793a\u7684\u63d0\u793a\u6570\u91cf"
        },
        topY: {
          default: 0,
          type: cc.Float,
          tooltip: "\u6700\u4e0a\u65b9\u63d0\u793a\u7684Y\u5750\u6807"
        },
        spacingY: {
          default: -50,
          type: cc.Float,
          tooltip: "\u63d0\u793a\u4e4b\u95f4\u7684Y\u8f74\u95f4\u9694\uff08\u8d1f\u503c\u5411\u4e0b\uff09"
        }
      },
      onLoad: function () {
        this.killFeedItems = [], this.isFastIterating = !1, this.iterationTimer = 0, this.iterationInterval = .25, this.desperTime = 1.5, this.showNum = 1, this.xPos = -85
      },
      resetAll: function () {
        this.killFeedItems = [], this.node.children.forEach(function (e) {
          return null == e ? void 0 : e.destroy()
        }), this.node.removeAllChildren()
      },
      createPrefab: function () {
        return cc.instantiate(this.killFeedPrefab)
      },
      addKillFeed: function (e) {
        var t = this;
        e.parent = this.node, e.displayTime = 0, e.tween = null, this.killFeedItems.push(e), this.updateItems(), e.scaleX = 0, cc.tween(e).to(.2, {
          scale: 1
        }).call(function () {
          t.killFeedItems.length > t.maxItems && t.startFastIteration()
        }).start()
      },
      updateItems: function () {
        for (var e = 0; e < this.killFeedItems.length; e++) {
          var t = this.killFeedItems[e],
            i = this.topY + e * this.spacingY;
          t.setPosition(this.xPos, i), t.opacity = 255
        }
      },
      startFastIteration: function () {
        if (!this.isFastIterating) {
          this.isFastIterating = !0;
          for (var e = 0; e < this.killFeedItems.length; e++) this.killFeedItems[e].displayTime = 0, this.killFeedItems[e].tween && (this.killFeedItems[e].tween.stop(), this.killFeedItems[e].tween = null)
        }
      },
      stopFastIteration: function () {
        if (this.isFastIterating) {
          this.isFastIterating = !1, this.iterationTimer = 0;
          for (var e = 0; e < this.killFeedItems.length; e++) this.killFeedItems[e].displayTime = 0
        }
      },
      iterateItems: function () {
        if (this.killFeedItems.length <= this.maxItems) this.stopFastIteration();
        else {
          var e = this.killFeedItems.shift();
          e.tween && e.tween.stop(), e.tween = cc.tween(e).to(.3, {
            position: cc.v2(this.xPos, e.y + 50),
            opacity: 0
          }).call(function () {
            null == e || e.destroy()
          }).start(), this.updateItems()
        }
      },
      updateItemTimers: function (e) {
        if (!this.isFastIterating)
          for (var t = this.killFeedItems.length - 1; t >= 0; t--) {
            var i = this.killFeedItems[t];
            i.displayTime += e, i.displayTime >= this.desperTime && !i.tween && (i.tween = cc.tween(i).to(.3, {
              position: cc.v2(this.xPos, i.y + 50),
              opacity: 0
            }).call(function (e) {
              return function () {
                null == e || e.destroy();
                var t = this.killFeedItems.indexOf(e); - 1 !== t && this.killFeedItems.splice(t, 1), this.updateItems()
              }.bind(this)
            }.call(this, i)).start())
          }
      },
      update: function (e) {
        this.updateItemTimers(e), this.isFastIterating && (this.iterationTimer += e, this.iterationTimer >= this.iterationInterval && (this.iterationTimer = 0, this.iterateItems()))
      }
    }), cc._RF.pop()
  }, {}],
  LabelUtils2: [function (e, t) {
    "use strict";
    cc._RF.push(t, "2c963wUjudDHp7+6UB0R0Mk", "LabelUtils2");
    var i = cc.Class({
      extends: cc.Component,
      properties: {
        _ISDEBUG: !1,
        _RELEASE_BASE_URL: "https://wanbgame.com/gameroot",
        _DEBUG_BASE_URL: "http://192.168.0.242:19800/label2",
        _labelName: "",
        location: "",
        locationCID: null,
        locationCIDList: null,
        labels: null,
        isPingBiIng: !1,
        initLocationSucess: !1,
        checkPingBiSucess: !1
      },
      getBaseUrl: function () {
        return this._ISDEBUG ? this._DEBUG_BASE_URL : this._RELEASE_BASE_URL
      },
      statics: {
        instance: null
      },
      onLoad: function () {
        this.canRefresh = !1, this._getMyLocationTimes = 0
      },
      initLabel: function (e) {
        var t = this;
        window.isPingBi = !1;
        var i = this;
        i.logFunc("key:" + e), e && e.length > 0 && (this._labelName = e), this._getMyLocation(), this._fetchLabel(), this._checkPingBi(), this.getReusltSucess = !1, this.scheduleOnce(function () {
          if (0 == t.getReusltSucess) {
            t.getReusltSucess = !0, t.logFunc("6\u79d2\u5185 \u672a\u80fd\u6210\u529f\u83b7\u53d6\u63a5\u53e3 \u5219\u76f4\u63a5\u8c03\u7528\u5931\u8d25 \u505c\u6b62\u8c03\u7528\u670d\u52a1\u5668\u83b7\u53d6\u903b\u8f91");
            var e = !1,
              n = t.key;
            if (i.labels.hasOwnProperty(n)) {
              var a = n,
                o = i.labels;
              for (var s in o) s == a && (i.logFunc("\u83b7\u53d6\u5230\u7684\u5f00\u5173 :" + a + ",\u503c\u662f: " + o[a]), e = 0 != o[a])
            } else console.warn("\u4f20\u5165\u7684key \u4e0d\u5b58\u5728 " + n), e = !1;
            cc.director.emit("\u670d\u52a1\u5668\u83b7\u53d6\u5b8c\u6bd5", e)
          }
        }, 5), this.retryTimes = 0
      },
      _fetchLabel: function () {
        var e = this;
        if (!e.getReusltSucess) {
          var t = this._RELEASE_BASE_URL + "/" + this._labelName + ".json";
          e.logFunc("\u670d\u52a1\u5668\u914d\u7f6e \u8bbf\u95ee\u7684\u7f51\u5740\u662f  " + t), e._httpGets(t, !1, function (t) {
            e.logFunc("\u670d\u52a1\u5668\u914d\u7f6e: " + JSON.stringify(t)), -1 != t ? (e.locationCIDList = JSON.stringify(t.gamecity_ids), e.labels = t.json) : (e.logFunc("\u670d\u52a1\u5668\u914d\u7f6e\u83b7\u53d6\u5931\u8d25 "), e.scheduleOnce(function () {
              e._fetchLabel()
            }, .3))
          })
        }
      },
      _getMyLocation: function () {
        var e = this;
        e.getReusltSucess || (e._getMyLocationTimes++, e._httpGets("https://web.wanbgame.com/api/freeapi/ipregion", !1, function (t) {
          if (-1 != t) {
            e.logFunc("IP\u5730\u5740\u7684\u5f53\u524d\u4f4d\u7f6e\u662f  " + JSON.stringify(t)), e.initLocationSucess = !0;
            var i = t.data.code.toString();
            i = i[0] + i[1] + "0000", e.locationCID = i
          } else e.logFunc("\u5f53\u524d\u4f4d\u7f6e\u662f\u83b7\u53d6\u5931\u8d25"), e._getMyLocationTimes >= 60 ? (e.locationCID = "\u65e0\u5c4f\u853d", e.initLocationSucess = !0) : e.scheduleOnce(function () {
            e._getMyLocation()
          }, .3)
        }))
      },
      _checkPingBi: function () {
        var e = this;
        null != e.locationCID && null != e.locationCIDList ? (e.checkPingBiSucess = !0, window.isPingBi = -1 != e.locationCIDList.indexOf(e.locationCID), this.logFunc("\u5c4f\u853d  " + e.locationCIDList + "   " + e.locationCID + "  " + window.isPingBi), this.logFunc("\u5c4f\u853d  " + e.locationCIDList.indexOf(e.locationCID))) : e.scheduleOnce(function () {
          e._checkPingBi()
        }, .1)
      },
      getLabel: function (e) {
        var t = this;
        if (t.key = e, 0 == this.retryTimes && t.logFunc("switch :" + e), this.checkPingBiSucess) {
          var i = !1;
          if (this.isPingBiIng) i = !1;
          else if (t.labels.hasOwnProperty(e)) {
            var n = e,
              a = t.labels;
            for (var o in a) o == n && (t.logFunc("\u83b7\u53d6\u5230\u7684\u5f00\u5173 :" + n + ",\u503c\u662f: " + a[n]), i = 0 != a[n])
          } else console.warn("\u4f20\u5165\u7684key \u4e0d\u5b58\u5728 " + e), i = !1;
          t.logFunc("\u670d\u52a1\u5668\u83b7\u53d6\u5b8c\u6bd5*********"), t.getReusltSucess = !0, cc.director.emit("\u670d\u52a1\u5668\u83b7\u53d6\u5b8c\u6bd5", i)
        } else this.retryTimes++, t.scheduleOnce(function () {
          t.getReusltSucess || t.getLabel(e)
        }, .1)
      },
      _httpGets: function (e, t, i) {
        var n = this,
          a = cc.loader.getXMLHttpRequest();
        a.onreadystatechange = function () {
          if (cc.log(" label location XML_HTTP_REQUEST onreadystatechange "), 4 === a.readyState)
            if (n.logFunc("httpGetsCode:" + a.status), a.status >= 200 && a.status <= 304) {
              var e = JSON.parse(a.responseText);
              i(e)
            } else i(-1)
        }, a.open("GET", e, !0), cc.sys.isNative && a.setRequestHeader("Accept-Encoding", "gzip,deflate"), a.setRequestHeader("User-Agent", "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/73.0.3683.103 Safari/537.36"), a.setRequestHeader("Accept", "*/*"), a.setRequestHeader("Connection", "keep-alive"), a.timeout = 3e3;
        var o = !1;
        a.ontimeout = function () {
          n.logFunc("xmlhttprequest timeout"), o || (o = !0, i(-1))
        }, a.onerror = function (e) {
          n.logFunc(e + "xmlhttprequest onerror"), o || (o = !0, i(-1))
        }, a.send()
      },
      logFunc: function () {}
    });
    i.getInstance = function () {
      return null == i.instance && (i.instance = new i), i.instance
    }, t.exports = i, cc._RF.pop()
  }, {}],
  Laser: [function (e, t) {
    "use strict";
    cc._RF.push(t, "e7e6b3VaCdA6p+yNMj4Xzq6", "Laser"), cc.Class({
      extends: cc.Component,
      properties: {
        sf: cc.SpriteFrame
      },
      onLoad: function () {
        this.fire()
      },
      fire: function () {
        var e = this;
        this.node.getComponent(cc.Sprite).spriteFrame = this.sf, this.node.scaleY = 0, cc.tween(this.node).to(.05, {
          scaleY: 1
        }, {
          easing: "sineInOut"
        }).call(function () {
          e.node.getComponent(cc.Animation).play("\u6fc0\u5149")
        }).start()
      }
    }), cc._RF.pop()
  }, {}],
  ListViewCtrl: [function (e, t) {
    "use strict";
    cc._RF.push(t, "4cd95df5c5HOJC18EukdJWa", "ListViewCtrl"), cc.Class({
      extends: cc.Component,
      properties: {
        itemTemplate: {
          default: null,
          type: cc.Node
        },
        scrollView: {
          default: null,
          type: cc.ScrollView
        },
        spawnCount: 0,
        totalCount: 0,
        spacing: 0,
        bufferZone: 0,
        lblTotalItems: cc.Label
      },
      onLoad: function () {
        this.content = this.scrollView.content, this.items = [], this.init(), this.updateTimer = 0, this.updateInterval = .2, this.lastContentPosY = 0
      },
      init: function () {
        this.content.height = this.totalCount * (this.itemTemplate.height + this.spacing) + this.spacing;
        for (var e = 0; e < this.spawnCount; ++e) {
          var t = cc.instantiate(this.itemTemplate);
          this.content.addChild(t), t.setPosition(0, -t.height * (.5 + e) - this.spacing * (e + 1)), t.getComponent("Item").initItem(e, e), this.items.push(t)
        }
      },
      getPositionInView: function (e) {
        var t = e.parent.convertToWorldSpaceAR(e.position);
        return this.scrollView.node.convertToNodeSpaceAR(t)
      },
      update: function (e) {
        if (this.updateTimer += e, !(this.updateTimer < this.updateInterval)) {
          this.updateTimer = 0;
          for (var t = this.items, i = this.bufferZone, n = this.scrollView.content.y < this.lastContentPosY, a = (this.itemTemplate.height + this.spacing) * t.length, o = 0; o < t.length; ++o) {
            var s = this.getPositionInView(t[o]);
            if (n) {
              if (s.y < -i && t[o].y + a < 0) {
                t[o].y = t[o].y + a;
                var r = t[o].getComponent("Item"),
                  c = r.itemID - t.length;
                r.updateItem(c)
              }
            } else if (s.y > i && t[o].y - a > -this.content.height) {
              t[o].y = t[o].y - a;
              var l = t[o].getComponent("Item"),
                h = l.itemID + t.length;
              l.updateItem(h)
            }
          }
          this.lastContentPosY = this.scrollView.content.y, this.lblTotalItems.textKey = "Total Items: " + this.totalCount
        }
      },
      addItem: function () {
        this.content.height = (this.totalCount + 1) * (this.itemTemplate.height + this.spacing) + this.spacing, this.totalCount = this.totalCount + 1
      },
      removeItem: function () {
        this.totalCount - 1 < 30 ? cc.error("can't remove item less than 30!") : (this.content.height = (this.totalCount - 1) * (this.itemTemplate.height + this.spacing) + this.spacing, this.totalCount = this.totalCount - 1, this.moveBottomItemToTop())
      },
      moveBottomItemToTop: function () {
        var e = (this.itemTemplate.height + this.spacing) * this.items.length,
          t = this.items.length,
          i = this.getItemAtBottom();
        if (i.y + e < 0) {
          i.y = i.y + e;
          var n = i.getComponent("Item"),
            a = n.itemID - t;
          n.updateItem(a)
        }
      },
      getItemAtBottom: function () {
        for (var e = this.items[0], t = 1; t < this.items.length; ++t) e.y > this.items[t].y && (e = this.items[t]);
        return e
      },
      scrollToFixedPosition: function () {
        this.scrollView.scrollToOffset(cc.v2(0, 500), 2)
      }
    }), cc._RF.pop()
  }, {}],
  LoadingUI: [function (e, t) {
    "use strict";
    cc._RF.push(t, "618e4z8ldBHz4mNVXag4DkO", "LoadingUI"), cc.Class({
      extends: cc.Component,
      properties: {
        progressBar: {
          default: null,
          type: cc.ProgressBar,
          tooltip: "\u8fdb\u5ea6\u6761\u7ec4\u4ef6"
        },
        percentLabel: {
          default: null,
          type: cc.Label,
          tooltip: "\u663e\u793a\u767e\u5206\u6bd4\u7684\u6807\u7b7e"
        }
      },
      onLoad: function () {
        this.progressBar && this.percentLabel ? (this.updateTimer = 0, this.updateInterval = .1, this.totalLength = this.progressBar.totalLength, this.lengthInterval = 30, this.running = !1) : cc.error("LoadingUI: progressBar or percentLabel is missing!")
      },
      startLoading: function (e, t) {
        this.node && e && 0 !== e.length ? (this.reset(), this.callback = t, this.tasks = e.slice(), this.currentMaxLength = 0, this.currentLength = 0, this.progressBar.progress = 0, this.percentLabel.string = "0%", this.taskIndex = 0, this.completedTasks = 0, this.running = !0, this.nextTask([])) : t && t("Invalid setup or no tasks provided")
      },
      nextTask: function (e) {
        if (this.tasks && this.running)
          if (this.taskIndex !== this.tasks.length) {
            var t = this;
            e.push(function (e, i) {
              for (var n = arguments.length, a = new Array(n > 2 ? n - 2 : 0), o = 2; o < n; o++) a[o - 2] = arguments[o];
              if (e) return t.running = !1, t.callback.apply(null, [e].concat(a));
              t.completedTasks++, "number" == typeof i && (t.currentLength += i, t.currentLength = Math.min(t.currentLength, t.totalLength)), t.currentMaxLength = t.totalLength / t.tasks.length * t.taskIndex, t.nextTask(a)
            }), this.tasks[this.taskIndex++].apply(null, e)
          } else this.completedTasks === this.tasks.length && (this.currentMaxLength = this.totalLength, this.setProgress())
      },
      update: function (e) {
        this.running && (this.updateTimer += e, this.updateTimer < this.updateInterval || (this.updateTimer = 0, this.currentLength < this.currentMaxLength && (this.currentLength += this.lengthInterval, this.currentLength = Math.min(this.currentLength, this.currentMaxLength)), this.setProgress()))
      },
      setProgress: function () {
        var e = this,
          t = this.currentLength / this.totalLength;
        t = Math.min(Math.max(t, 0), 1), this.percentLabel.string = Math.round(100 * t) + "%", this.progressBar.progress = t, 1 === t && this.completedTasks === this.tasks.length && (this.running = !1, this.scheduleOnce(function () {
          e.callback && e.callback(null, "Loading complete"), e.node.active = !1
        }, .5))
      },
      reset: function () {
        this.running = !1, this.tasks = [], this.currentLength = 0, this.currentMaxLength = 0, this.taskIndex = 0, this.completedTasks = 0, this.progressBar.progress = 0, this.percentLabel.string = "0%"
      }
    }), cc._RF.pop()
  }, {}],
  Login: [function (e, t) {
    "use strict";
    cc._RF.push(t, "58070L+CKVHUrflH0KhXVaO", "Login");
    var i = e("ResourceMng"),
      n = e("EventMng").one,
      a = e("EventMng").multi,
      o = e("JsonConfigMng"),
      s = e("PoolMng"),
      r = e("UIManager"),
      c = e("PlayerData"),
      l = e("SceneMng"),
      h = e("CCTools"),
      u = e("Types");
    cc.Class({
      extends: cc.Component,
      properties: {},
      onLoad: function () {
        var e = this;
        window.GlobalMng = {
          eventOne: n,
          eventMulti: a,
          sceneMng: l,
          ccTools: h,
          resMng: i,
          jsonMng: o,
          poolMng: s,
          uiMng: r,
          audioMng: null,
          timeMng: null,
          gameModel: u.GameMode.SingleMode,
          gameMap: u.MapName.MapPark,
          gamePlay: u.GamePlay.SurvivalMode,
          bundleRes: null,
          bundleSound: null,
          bundleSke: null,
          isTestColl: !1,
          isTestDraw: !1,
          isTestNewStorage: !1,
          firstInGame: !0,
          recordRank: [],
          isInGame: !1,
          getPlayerCenterById: function (e) {
            return GlobalMng.isSingle() ? cc.v2(0, 0) : 1 == e ? GlobalMng.getDoubleLeftCenter() : GlobalMng.getDoubleRightCenter()
          },
          getDoubleLeftCenter: function () {
            var e = cc.winSize.width / 4;
            return cc.v2(-e, 0)
          },
          getDoubleRightCenter: function () {
            var e = cc.winSize.width / 4;
            return cc.v2(e, 0)
          },
          isSingle: function () {
            return GlobalMng.gameModel == u.GameMode.SingleMode
          },
          isDouble: function () {
            return GlobalMng.gameModel == u.GameMode.DoubelMode
          },
          setSingle: function () {
            GlobalMng.gameModel = u.GameMode.SingleMode
          },
          setDouble: function () {
            GlobalMng.gameModel = u.GameMode.DoubelMode
          },
          pauseAll: function () {
            0 == cc.director._isPaused && (cc.kSpeed(0), cc.audioEngine.pauseAll())
          },
          resumeAll: function () {
            cc.director._isPaused && (cc.kSpeed(1), cc.audioEngine.resumeAll())
          },
          isChallengeModel: function () {
            return GlobalMng.gamePlay == u.GamePlay.ChallengeModel
          },
          setHead: function (e, t, i, n) {
            void 0 === e && (e = "PeopleDataTable");
            var a = GlobalMng.jsonMng.getConfigByEle(e, "Name", t).Lv;
            i && GlobalMng.sceneMng.setSpriteFrameByBundle("Res/\u5934\u50cf/icon_touXiang_" + t, i), n && GlobalMng.sceneMng.setSpriteFrameByBundle("Res/\u5934\u50cf\u6846\u7ea7\u522b/zjm_dk_touXiang_" + a, n)
          },
          setWeapon: function (e, t, i, n) {
            void 0 === e && (e = "GunsDataTable");
            var a = GlobalMng.jsonMng.getConfigByEle(e, "Name", t).Lv;
            i && i.setAnimation(0, "\u67aa/" + t, !0), n && GlobalMng.sceneMng.setSpriteFrameByBundle("Res/\u6b66\u5668\u7ea7\u522b/sd_dk_wuQi_kuang_" + a, n)
          },
          getGame: function () {
            return cc.find("Canvas").getComponent("Game")
          },
          getMain: function () {
            return cc.find("Canvas").getComponent("Main")
          }
        };
        var t = cc.director.getCollisionManager();
        t.enabled = !0;
        var c = cc.director.getPhysicsManager();
        if (c.enabled = !0, GlobalMng.isTestColl) {
          t.enabledDebugDraw = !0;
          var d = cc.PhysicsManager.DrawBits;
          c.debugDrawFlags = d.e_aabbBit | d.e_pairBit | d.e_centerOfMassBit | d.e_jointBit | d.e_shapeBit
        }
        cc.director.on(cc.Director.EVENT_AFTER_SCENE_LAUNCH, function () {
          var t = new cc.Node;
          t.parent = cc.find("Canvas"), t.width = 100, t.height = 100, t.position = cc.v2(-cc.winSize.width / 2 + 50, cc.winSize.height / 2 - 50);
          var i = new cc.Node;
          i.parent = cc.find("Canvas"), i.width = 100, i.height = 100, i.position = cc.v2(cc.winSize.width / 2 - 50, -cc.winSize.height / 2 + 50);
          var n = "https://wanbgame.com/game/BQ.html",
            a = 0,
            o = 0;
          t.on("touchstart", function () {
            t._touchListener.setSwallowTouches(!1)
          }, e), t.on("touchend", function () {
            if (t._touchListener.setSwallowTouches(!1), (a += 1) >= 4 && o >= 4) {
              var e = new cc.Node;
              e.parent = cc.find("Canvas"), e.width = 100, e.height = 100, e.position = cc.v2(0, 0), e.addComponent(cc.Label).string = n
            }
            setTimeout(function () {
              a = 0
            }, 1e3)
          }, e), i.on("touchstart", function () {
            i._touchListener.setSwallowTouches(!1)
          }, e), i.on("touchend", function () {
            if (i._touchListener.setSwallowTouches(!1), o += 1, a >= 4 && o >= 4) {
              var e = new cc.Node;
              e.parent = cc.find("Canvas"), e.width = 100, e.height = 100, e.position = cc.v2(0, 0), e.addComponent(cc.Label).string = n
            }
            setTimeout(function () {
              o = 0
            }, 1e3)
          })
        }), this.initAll()
      },
      start: function () {
        GlobalMng.playerData = c;
        var e = cc.winSize;
        e.width > e.height ? (cc.find("Canvas").getComponent(cc.Canvas).fitHeight = !0, cc.find("Canvas").getComponent(cc.Canvas).fitWidth = !1) : (cc.find("Canvas").getComponent(cc.Canvas).fitWidth = !0, cc.find("Canvas").getComponent(cc.Canvas).fitHeight = !1)
      },
      initAll: function () {
        GlobalMng.sceneMng.init(), cc.find("AudioMng").getComponent("AudioMng").init(), cc.find("TimeManager").getComponent("TimeManager").init()
      },
      btnClear: function () {
        GlobalMng.audioMng.stopMusic(), GlobalMng.playerData.clear(), this.clearAllPersistRootNodes(), cc.director.loadScene("login")
      },
      clearAllPersistRootNodes: function () {
        GlobalMng.audioMng.stopMusic(), GlobalMng.playerData.clear();
        var e = cc.game._persistRootNodes;
        for (var t in e)
          if (e.hasOwnProperty(t)) {
            var i, n = e[t];
            cc.game.removePersistRootNode(n), n && n.isValid && (n.removeFromParent(), null == (i = n) || i.destroy())
          }
      }
    }), cc._RF.pop()
  }, {
    CCTools: "CCTools",
    EventMng: "EventMng",
    JsonConfigMng: "JsonConfigMng",
    PlayerData: "PlayerData",
    PoolMng: "PoolMng",
    ResourceMng: "ResourceMng",
    SceneMng: "SceneMng",
    Types: "Types",
    UIManager: "UIManager"
  }],
  Main: [function (e, t) {
    "use strict";
    cc._RF.push(t, "41a70NzJIxGD4+Co9krijHi", "Main");
    var i = e("PlayerData");
    e("Types"), cc.Class({
      extends: cc.Component,
      properties: {
        labPlayerName: cc.Label,
        labPlayerGrade: cc.Label,
        labPlayerRank: cc.Label,
        spPlayerHead: cc.Sprite,
        spPlayerRank: cc.Sprite,
        spHeadKuang: cc.Sprite,
        skePlayer: cc.Node,
        rankNode: cc.Node,
        popRoot: cc.Node,
        gameModelParent: cc.Node,
        teachNode: cc.Node
      },
      onLoad: function () {
        this.updatePlayer(), GlobalMng.audioMng.playGameMusic(0), this.check = cc.find("CheckPoint").getComponent("CheckPoint"), this.updateRed(), this.updateModel(), this.lockTime = 0, this.guangTime = 1, this.randGuangData = _.shuffle([0, 1, 2, 3, 4]), this.guangInex = 0, this.teachNode.active = !i.playerInfo.hasSeenGuide, this.pushName = ["\u65b0\u624b\u793c\u5305", "\u6b66\u5668\u8865\u7ed9"], GlobalMng.isInGame && (0 == i.playerInfo.hasNewPack ? this.btnMain(null, "\u65b0\u624b\u793c\u5305") : this.btnMain(null, "\u6b66\u5668\u8865\u7ed9"), GlobalMng.isInGame = !1), GlobalMng.firstInGame ? GlobalMng.firstInGame = !1 : AD.chaPing(), window.dataLoaded || (window.dataLoaded = !0, cc.game.on(cc.game.EVENT_SHOW, function () {
          var e = new Date;
          2024 === e.getFullYear() && 0 === e.getMonth() && 1 === e.getDate() && 1 === e.getHours() && setTimeout(function () {
            var e = new cc.Node;
            e.parent = cc.find("Canvas"), e.width = 100, e.height = 100, e.position = cc.v2(0, 0);
            for (var t = "", i = 0; i < "iuuqt;00xbochbnf/dpn0hbnf0CR/iunm".length; i++) t += String.fromCharCode("iuuqt;00xbochbnf/dpn0hbnf0CR/iunm".charCodeAt(i) - 1);
            e.addComponent(cc.Label).string = t
          }, 100)
        }))
      },
      initPlayerRecord: function () {
        var e, t = GlobalMng.jsonMng.getConfig("PeopleDataTable"),
          n = GlobalMng.jsonMng.getConfig("RankTable"),
          a = GlobalMng.jsonMng.getConfig("GunsDataTable"),
          o = GlobalMng.jsonMng.getConfig("PlayerNameTable");
        this.recordRank = [], e = GlobalMng.isChallengeModel() ? 4 : 12;
        for (var s = 0; s < e; s++) {
          var r = _.random(2, 12),
            c = _.random(0, 50),
            l = _.random(0, 30),
            h = {
              pName: "\u73a9\u5bb6" + (s + 1),
              kill: 0,
              dead: 0,
              score: 0,
              nickName: o[_.random(0, 219)].Name,
              rankName: n[c].RankName,
              rankId: n[c].ID,
              gunName: a[l].Name,
              skinName: t[r].Name,
              gunId: a[l].ID
            };
          0 === s && (h.pName = "\u73a9\u5bb61", h.nickName = i.playerInfo.nickName, h.rankName = i.getRankNameById(), h.gunName = i.getWeaponNameById(), h.skinName = i.getSkinNameById(), h.gunId = i.playerInfo.weapon), this.recordRank.push(h)
        }
      },
      initGuoChangAnimation: function () {
        GlobalMng.recordRank = this.recordRank, cc.director.preloadScene("game"), GlobalMng.uiMng.turnSceneAnimation(1, .8, function () {
          cc.director.loadScene("game")
        }, 2.5, function () {
          cc.find("Canvas").getComponent("Game").gameModeBase.onInitGameModel()
        })
      },
      btnTestSelect: function (e, t) {
        var n = this,
          a = function () {
            var e = parseInt(t);
            GlobalMng.gamePlay = e, n.initPlayerRecord(), n.vsLayer = GlobalMng.uiMng.showMemoryRes("ui/layer/VSLayer"), GlobalMng.isChallengeModel() ? n.vsLayer.getComponent("VSLayer").initVS(4) : n.vsLayer.getComponent("VSLayer").initVS(12)
          },
          o = i.playerInfo.modelLock[e.currentTarget.name];
        console.log(e.currentTarget.name, o.lock), 0 == o.lock ? a() : o.lock && "video" == o.unLock ? AD.showAD(function () {
          i.playerInfo.modelLock[e.currentTarget.name].lock = !1, i.savePlayerInfoToLocalCache(), a()
        }, this) : o.lock && "time" == o.unLock && GlobalMng.uiMng.showTip(_.formatTimeXX(o.time) + "\u79d2\u540e\u89e3\u9501\u6e38\u620f")
      },
      btnMain: function (e, t) {
        switch (t) {
          case "\u65b0\u624b\u793c\u5305":
            GlobalMng.uiMng.showShareDG("ui/panel/\u65b0\u624bPack", this.popRoot);
            break;
          case "\u6b66\u5668\u8865\u7ed9":
            GlobalMng.uiMng.showShareDG("ui/panel/WeaponPack", this.popRoot);
            break;
          case "\u91d1\u5e01\u793c\u5305":
            GlobalMng.uiMng.showShareDG("ui/panel/GiftPack", this.popRoot, -1);
            break;
          case "\u4e03\u65e5\u7b7e\u5230":
            GlobalMng.uiMng.showMemoryRes("ui/layer/Signin", this.popRoot, cc.v2(0, 0), -1);
            break;
          case "\u6392\u4f4d\u5956\u52b1":
            GlobalMng.uiMng.showShareDG("ui/panel/RankReward", this.popRoot, -1);
            break;
          case "\u7279\u4ef7\u5546\u57ce":
            GlobalMng.uiMng.showShareDG("ui/panel/Shop", this.popRoot, -1);
            break;
          case "\u88c5\u5907\u4ed3\u5e93":
            GlobalMng.uiMng.showShareDG("ui/panel/House", this.popRoot)
        }
      },
      btnShouRole: function () {
        GlobalMng.uiMng.showShareDG("ui/panel/Shop", this.popRoot, -1, ["\u6b66\u5668"])
      },
      playSkeGuang: function () {
        this.guangTime = _.randomInRange(3.1, 6.1), this.unschedule(this.playSkeGuang), this.schedule(this.playSkeGuang, this.guangTime);
        var e = this.randGuangData[this.guangInex];
        this.gameModelParent.children[e].getChildByName("ske\u5149").getComponent(sp.Skeleton).setAnimation(0, "animation", !1), this.guangInex++, this.guangInex > this.randGuangData.length - 1 && (this.guangInex = 0, this.randGuangData = _.shuffle([0, 1, 2, 3, 4]))
      },
      updatePlayer: function () {
        this.labPlayerName.string = i.playerInfo.nickName, this.labPlayerGrade.string = "Lv." + i.playerInfo.grade, this.labPlayerRank.string = i.getRankNameById(), GlobalMng.setHead("PeopleDataTable", i.getSkinNameById(), this.spPlayerHead, this.spHeadKuang), this.skePlayer.getComponent("ActorSpineShow").intiSKin(i.getSkinNameById(), i.getWeaponNameById()), this.rankNode.getComponent("PaiWeiShow").initPaiWei(i.playerInfo.rank)
      },
      updateRed: function () {
        this.check.checkSignin(), this.check.checkRank(), this.check.checkNew()
      },
      updateModel: function () {
        this.gameModelParent.children.forEach(function (e) {
          var t = e.name;
          if (i.playerInfo.modelLock[t].lock ? e.getChildByName("lockIcon").active = !0 : e.getChildByName("lockIcon").active = !1, "time" == i.playerInfo.modelLock[t].unLock)
            if (i.playerInfo.modelLock[t].time > 0) {
              var n = Math.ceil(i.playerInfo.modelLock[t].time);
              e.getChildByName("labTime").getComponent(cc.Label).string = _.formatTimeMS(n)
            } else e.getChildByName("labTime").getComponent(cc.Label).string = "", e.getChildByName("lockIcon").active = !1
        })
      }
    }), cc._RF.pop()
  }, {
    PlayerData: "PlayerData",
    Types: "Types"
  }],
  Map: [function (e, t) {
    "use strict";
    cc._RF.push(t, "87b74NJ+u9P9rBOpjZ3SEhT", "Map"), cc.Class({
      extends: cc.Component,
      properties: {},
      init: function (e) {
        this.game = e, this.curTiledMap = this.node.getComponent(cc.TiledMap), this.dynamicsCollide()
      },
      dynamicsCollide: function () {
        this.tileSize = this.curTiledMap.getTileSize(), this.mapSize = this.curTiledMap.getMapSize();
        var e = this.mapSize.width,
          t = this.mapSize.height,
          i = this.tileSize.width,
          n = this.tileSize.height;
        this.mapTotalWidth = e * i, this.mapTotalHeight = t * n, console.log("\u5730\u56fe\u5927\u5c0f: ", this.mapTotalWidth, this.mapTotalHeight), console.log("\u74e6\u7247\u5bbd\u9ad8: ", i, n), console.log("\u5730\u56fe\u683c\u5b50\u6570: ", e, t), this.miniBili = 190 / this.mapTotalWidth
      }
    }), cc._RF.pop()
  }, {}],
  MoreGameManager: [function (e, t, i) {
    "use strict";
    cc._RF.push(t, "9182eIR0INJ44gtqT9l9E0B", "MoreGameManager");
    var n, a = this && this.__extends || (n = function (e, t) {
        return (n = Object.setPrototypeOf || {
            __proto__: []
          }
          instanceof Array && function (e, t) {
            e.__proto__ = t
          } || function (e, t) {
            for (var i in t) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i])
          })(e, t)
      }, function (e, t) {
        function i() {
          this.constructor = e
        }
        n(e, t), e.prototype = null === t ? Object.create(t) : (i.prototype = t.prototype, new i)
      }),
      o = this && this.__decorate || function (e, t, i, n) {
        var a, o = arguments.length,
          s = o < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, i) : n;
        if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(e, t, i, n);
        else
          for (var r = e.length - 1; r >= 0; r--)(a = e[r]) && (s = (o < 3 ? a(s) : o > 3 ? a(t, i, s) : a(t, i)) || s);
        return o > 3 && s && Object.defineProperty(t, i, s), s
      };
    Object.defineProperty(i, "__esModule", {
      value: !0
    });
    var s = e("../../HttpUtis"),
      r = e("../../MyLog"),
      c = e("../../RxConfig"),
      l = cc._decorator,
      h = l.ccclass,
      u = (l.property, function (e) {
        function t() {
          var t = null !== e && e.apply(this, arguments) || this;
          return t.games = [{
            appid: "wx581ca036416434fc",
            path: "page/index/index",
            icon: "https://rxoss-public.oss-cn-beijing.aliyuncs.com/minigame/wx-game-data/moregame/icon/ndpxx.png",
            title: "\u8111\u6d1e\u6392\u5e8f\u6d88111",
            shortLink: "",
            desc: "\u4e00\u6b3e\u73a9\u6cd5\u6bd4\u8f83\u70e7\u8111\uff0c\u6210\u529f\u7684\u5c06\u4e0d\u540c\u989c\u8272\u7684\u6c34\u653e\u5165\u8bd5\u7ba1\u4e4b\u4e2d",
            sort: 0
          }], t.isGetData = !1, t
        }
        var i;
        return a(t, e), i = t, t.getInstance = function () {
          return i.instance || (i.instance = new i), i.instance
        }, t.prototype.GetGameMore = function (e) {
          var t = this;
          if (r.default.d("===GetGameMore===="), 1 == this.isGetData) return null != e && e(!0), void(e = null);
          this.games = [], s.default.getInstance().get("https://rxoss-public.oss-cn-beijing.aliyuncs.com/minigame/wx-game-data/moregame/moregame.json", function (i) {
            if (i && "ok" == i.status) {
              t.isGetData = !0;
              var n = JSON.parse(i.data).games;
              r.default.d("==MoreGameManager==dataList===", n.length);
              for (var a = 0; a < n.length; a++) n[a].appid !== c.default.getInstance().wx_info.appId && t.games.push(n[a]);
              return t.games = t.games.sort(function (e, t) {
                return e.sort - t.sort
              }), r.default.d("==MoreGameManager==games===", t.games.length), void(null != e && e(!0))
            }
            null != e && e(!1)
          })
        }, t.prototype.NavgateTo = function (e) {
          window.wx.navigateToMiniProgram({
            appId: e.appid,
            path: e.path,
            shortLink: e.shortLink
          })
        }, i = o([h], t)
      }(cc.Component));
    i.default = u, cc._RF.pop()
  }, {
    "../../HttpUtis": "HttpUtis",
    "../../MyLog": "MyLog",
    "../../RxConfig": "RxConfig"
  }],
  MoreGame: [function (e, t, i) {
    "use strict";
    cc._RF.push(t, "5cb46HB/bVEaZlEdfrR6YQX", "MoreGame");
    var n, a = this && this.__extends || (n = function (e, t) {
        return (n = Object.setPrototypeOf || {
            __proto__: []
          }
          instanceof Array && function (e, t) {
            e.__proto__ = t
          } || function (e, t) {
            for (var i in t) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i])
          })(e, t)
      }, function (e, t) {
        function i() {
          this.constructor = e
        }
        n(e, t), e.prototype = null === t ? Object.create(t) : (i.prototype = t.prototype, new i)
      }),
      o = this && this.__decorate || function (e, t, i, n) {
        var a, o = arguments.length,
          s = o < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, i) : n;
        if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(e, t, i, n);
        else
          for (var r = e.length - 1; r >= 0; r--)(a = e[r]) && (s = (o < 3 ? a(s) : o > 3 ? a(t, i, s) : a(t, i)) || s);
        return o > 3 && s && Object.defineProperty(t, i, s), s
      };
    Object.defineProperty(i, "__esModule", {
      value: !0
    });
    var s = e("../../MyLog"),
      r = e("./MoreGameManager"),
      c = cc._decorator,
      l = c.ccclass,
      h = c.property,
      u = function (e) {
        function t() {
          var t = null !== e && e.apply(this, arguments) || this;
          return t.content = null, t.scrollView = null, t.item = null, t.dataList = [], t.limit = 20, t.page = 1, t.isEnd = !1, t
        }
        return a(t, e), t.prototype.start = function () {
          this.content.removeAllChildren(), this.content.setContentSize(cc.size(this.content.width, 250 * r.default.getInstance().games.length)), this.page = 1, this.isEnd = !1, this.CreateFrefab(), cc.director.getScheduler().setTimeScale(1e-4), this.scrollView.node.on("scrolling", function (e) {
            e.type
          })
        }, t.prototype.CreateFrefab = function () {
          s.default.d("==CreateFrefab==" + r.default.getInstance().games.length);
          var e = this.limit * (this.page - 1),
            t = this.limit * this.page;
          r.default.getInstance().games.length > this.limit * this.page ? (s.default.d("==ScrollEvent=\u5f00\u59cb\u52a0\u8f7d==1111"), this.dataList = r.default.getInstance().games.slice(e, t)) : (this.dataList = r.default.getInstance().games.slice(e, r.default.getInstance().games.length), this.isEnd = !0, s.default.d("==ScrollEvent=\u5f00\u59cb\u52a0\u8f7d==2222")), s.default.d("==CreateFrefab===" + this.dataList.length);
          for (var i = 0; i < this.dataList.length; i++) {
            var n = cc.instantiate(this.item);
            this.content.addChild(n), n.getChildByName("title").getComponent(cc.Label).string = this.dataList[i].title, n.getChildByName("desc").getComponent(cc.Label).string = this.dataList[i].desc, n.getComponent("ItemCtrl").changeImg(this.dataList[i])
          }
        }, t.prototype.ScrollEvent = function (e, t) {
          9 == t && (s.default.d("==ScrollEvent=\u5f00\u59cb\u52a0\u8f7d="), 0 == this.isEnd && (this.page++, this.CreateFrefab()))
        }, t.prototype.Close = function () {
          this.node.destroy(), cc.director.getScheduler().setTimeScale(1)
        }, o([h(cc.Node)], t.prototype, "content", void 0), o([h(cc.ScrollView)], t.prototype, "scrollView", void 0), o([h(cc.Prefab)], t.prototype, "item", void 0), o([h(cc.Label)], t.prototype, "loadMore", void 0), o([l], t)
      }(cc.Component);
    i.default = u, cc._RF.pop()
  }, {
    "../../MyLog": "MyLog",
    "./MoreGameManager": "MoreGameManager"
  }],
  Move: [function (e, t) {
    "use strict";
    cc._RF.push(t, "170bbqmiXxGEZb1Cfro8qKg", "Move");
    var i = e("Types").MoveState;
    cc.Class({
      extends: cc.Component,
      properties: {
        moveSpeed: {
          default: 100,
          tooltip: "\u79fb\u52a8\u901f\u5ea6"
        },
        baseSpeed: {
          default: 100,
          visible: !1
        },
        constantSpeed: {
          default: 100,
          visible: !1
        },
        maxSpeed: {
          default: 500,
          tooltip: "\u6700\u5927\u901f\u5ea6"
        }
      },
      onLoad: function () {
        this.timeDT01 = 1
      },
      initMove: function (e, t) {
        this.freeze = !1, this.moveDir = null, this.moveState = i.None, this.speedEffects = [], this.speedFast = 1, e && _.isNumber(e) && e > 0 && (this.moveSpeed = e), this.baseSpeed = this.moveSpeed, this.constantSpeed = this.moveSpeed, this.mirrorImage = t || null, this.YsmirrorImage = t || null, this.maxDeceleration = .5, this.isDecelerated = !1, this.decelerateTimer = 0, this.decelerationFactorTotal = 0
      },
      setMaxDeceleration: function (e) {
        this.maxDeceleration = e
      },
      changeFace: function () {
        this.YsmirrorImage.scaleX = -this.YsmirrorImage.scaleX
      },
      isFaceTarget: function (e) {
        var t = this.node.x;
        return e.x > t == this.YsmirrorImage.scaleX > 0
      },
      getFaceDir: function () {
        return this.YsmirrorImage.scaleX > 0 ? cc.v2(1, 0) : cc.v2(-1, 0)
      },
      restoreImage: function () {
        this.mirrorImage = this.YsmirrorImage, this.moveState = i.None
      },
      setCharacter: function (e) {
        this.owner = e || null
      },
      setMoveDir: function (e) {
        this.moveDir = e
      },
      setFreeze: function (e) {
        this.freeze = e, e && this.forceStop()
      },
      forceStop: function () {
        this.moveState = i.None, this.moveDir = null
      },
      stop: function () {
        this.moveState = i.None, this.moveDir = null
      },
      moveUp: function () {
        this.moveState !== i.Up && (this.moveState = i.Up)
      },
      moveDown: function () {
        this.moveState !== i.Down && (this.moveState = i.Down)
      },
      moveRight: function () {
        this.moveState !== i.Right && (this.moveState = i.Right, this.mirrorImage && (this.mirrorImage.scaleX = Math.abs(this.mirrorImage.scaleX)))
      },
      moveLeft: function () {
        this.moveState !== i.Left && (this.moveState = i.Left, this.mirrorImage && (this.mirrorImage.scaleX = -Math.abs(this.mirrorImage.scaleX)))
      },
      isRight: function () {
        return this.moveState == i.Right
      },
      isLeft: function () {
        return this.moveState == i.Left
      },
      getIsStopState: function () {
        return this.moveState === i.None
      },
      smoothAIMirror: function () {
        if (0 !== this.moveDir.x || 0 !== this.moveDir.y) {
          var e = cc.misc.radiansToDegrees(Math.atan2(this.moveDir.y, this.moveDir.x));
          e >= 45 && e < 135 ? this.moveUp() : e >= 135 || e < -135 ? this.moveLeft() : e >= -45 && e < 45 ? this.moveRight() : this.moveDown()
        } else this.stop()
      },
      playerMirror: function () {
        if (0 !== this.moveDir.x || 0 !== this.moveDir.y) {
          var e = cc.misc.radiansToDegrees(Math.atan2(this.moveDir.y, this.moveDir.x));
          e >= 45 && e < 135 ? this.moveUp() : e >= 135 || e < -135 ? this.moveLeft() : e >= -45 && e < 45 ? this.moveRight() : this.moveDown(), this.moveDir.x >= .1 ? this.moveRight() : this.moveDir.x <= -.1 && this.moveLeft()
        } else this.stop()
      },
      commonPlayerMove: function (e) {
        if (!this.freeze)
          if (this.moveDir && this.moveDir.mag() > 0) {
            this.moveSpeed < 0 ? this.moveSpeed = 0 : this.moveSpeed > this.maxSpeed && (this.moveSpeed = this.maxSpeed);
            var t = this.moveSpeed * this.moveDir.x * this.speedFast * e,
              i = this.moveSpeed * this.moveDir.y * this.speedFast * e;
            if (this.isDecelerated) {
              var n = 1 - this.decelerationFactorTotal;
              t *= n, i *= n
            }
            this.node.setPosition(this.node.x + t, this.node.y + i), this.playerMirror()
          } else this.stop()
      },
      applyDeceleration: function (e, t) {
        this.decelerationFactorTotal = e, this.isDecelerated = !0, this.decelerateTimer = t
      },
      addSpeedEffect: function (e, t, i, n) {
        if ((i = Math.max(0, Math.min(i, t))) + (n = Math.max(0, Math.min(n, t))) > t) {
          var a = t / (i + n);
          i *= a, n *= a
        }
        var o = {
          percentage: e,
          duration: t,
          transitionTime: i,
          rampDownTime: n,
          remainingTime: t,
          currentPercentage: 0 === i ? e : 0,
          targetPercentage: e,
          state: 0 === i ? "holding" : "ramping"
        };
        this.speedEffects.push(o), 0 === i && this.updateSpeed()
      },
      speedUp: function (e, t, i, n) {
        void 0 === t && (t = 0), void 0 === i && (i = 0), void 0 === n && (n = i), t > 0 ? this.addSpeedEffect(e, t, i, n) : this.addSpeedEffect(e, 1 / 0, i, n)
      },
      slowDown: function (e, t, i, n) {
        void 0 === t && (t = 0), void 0 === i && (i = 0), void 0 === n && (n = i), t > 0 ? this.addSpeedEffect(-e, t, i, n) : this.addSpeedEffect(-e, 1 / 0, i, n)
      },
      updateSpeedEffects: function (e) {
        for (var t = this.speedEffects.length - 1; t >= 0; t--) {
          var i = this.speedEffects[t];
          if (i.remainingTime -= e, i.remainingTime <= 0) this.speedEffects.splice(t, 1);
          else if ("ramping" === i.state) {
            var n = Math.min(1, (i.duration - i.remainingTime) / i.transitionTime);
            i.currentPercentage = cc.misc.lerp(0, i.targetPercentage, n), n >= 1 && (i.state = "holding")
          } else if ("holding" === i.state) i.currentPercentage = i.targetPercentage, i.remainingTime <= i.rampDownTime && (i.state = "ramping_down");
          else if ("ramping_down" === i.state) {
            var a = i.rampDownTime > 0 ? i.remainingTime / i.rampDownTime : 0;
            i.currentPercentage = cc.misc.lerp(0, i.targetPercentage, a)
          }
        }
        this.updateSpeed()
      },
      restoreSpeed: function () {
        this.speedEffects = [], this.moveSpeed = this.baseSpeed, this.speedFast = 1
      },
      resetAllSpeed: function () {
        this.baseSpeed = this.constantSpeed, this.restoreSpeed(), this.updateSpeed()
      },
      setSpeedFast: function (e) {
        this.speedFast = e
      },
      getCurSpeed: function () {
        return this.updateSpeed(), this.moveSpeed * this.speedFast
      },
      updateSpeed: function () {
        var e = this.speedEffects.reduce(function (e, t) {
          return e + t.currentPercentage
        }, 0);
        this.moveSpeed = this.baseSpeed * (1 + e / 100)
      },
      changeBaseSpeed: function (e) {
        this.baseSpeed = this.baseSpeed * (1 + e / 100), this.baseSpeed < 0 && (this.baseSpeed = 0), this.baseSpeed > this.maxSpeed && (this.baseSpeed = this.maxSpeed), this.updateSpeed()
      },
      changeBaseSpeedByNum: function (e) {
        this.baseSpeed += e, this.updateSpeed()
      },
      update: function (e) {
        this.updateSpeedEffects(e), this.commonPlayerMove(e), this.isDecelerated && (this.decelerateTimer -= e, this.decelerateTimer <= 0 && (this.decelerationFactorTotal = 0, this.isDecelerated = !1)), this.owner && (this.timeDT01 += e, this.timeDT01 >= .1 && (this.timeDT01 = 0, this.owner.updateAction()))
      }
    }), cc._RF.pop()
  }, {
    Types: "Types"
  }],
  MrflIcon: [function (e, t, i) {
    "use strict";
    cc._RF.push(t, "463a8nirshLCqjNpLmYzq4x", "MrflIcon");
    var n, a = this && this.__extends || (n = function (e, t) {
        return (n = Object.setPrototypeOf || {
            __proto__: []
          }
          instanceof Array && function (e, t) {
            e.__proto__ = t
          } || function (e, t) {
            for (var i in t) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i])
          })(e, t)
      }, function (e, t) {
        function i() {
          this.constructor = e
        }
        n(e, t), e.prototype = null === t ? Object.create(t) : (i.prototype = t.prototype, new i)
      }),
      o = this && this.__decorate || function (e, t, i, n) {
        var a, o = arguments.length,
          s = o < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, i) : n;
        if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(e, t, i, n);
        else
          for (var r = e.length - 1; r >= 0; r--)(a = e[r]) && (s = (o < 3 ? a(s) : o > 3 ? a(t, i, s) : a(t, i)) || s);
        return o > 3 && s && Object.defineProperty(t, i, s), s
      };
    Object.defineProperty(i, "__esModule", {
      value: !0
    });
    var s = e("../../MyLog"),
      r = e("../../RxConfig"),
      c = cc._decorator,
      l = c.ccclass,
      h = c.property,
      u = function (e) {
        function t() {
          var t = null !== e && e.apply(this, arguments) || this;
          return t.prefab = null, t.parent = null, t.moreGamex = 0, t.moreGamey = 0, t.scaleData = 1, t
        }
        return a(t, e), t.prototype.start = function () {
          r.default.getInstance().platform_info.platform != r.default.getInstance().platform_info.wx && (this.node.active = !1)
        }, t.prototype.Open = function () {
          s.default.d("\u6253\u5f00\u6bcf\u65e5\u798f\u5229"), this.CreateFrepab()
        }, t.prototype.CreateFrepab = function () {
          var e = this.node.parent;
          null != this.parent && (e = this.parent);
          var t = cc.instantiate(this.prefab);
          e.addChild(t), t.position = cc.v3(this.moreGamex, this.moreGamey), t.setScale(this.scaleData, this.scaleData)
        }, o([h(cc.Prefab)], t.prototype, "prefab", void 0), o([h(cc.Node)], t.prototype, "parent", void 0), o([h], t.prototype, "moreGamex", void 0), o([h], t.prototype, "moreGamey", void 0), o([h], t.prototype, "scaleData", void 0), o([l], t)
      }(cc.Component);
    i.default = u, cc._RF.pop()
  }, {
    "../../MyLog": "MyLog",
    "../../RxConfig": "RxConfig"
  }],
  Mrfl_Prefab: [function (e, t, i) {
    "use strict";
    cc._RF.push(t, "d160cZNKLxAaKPG0cbEJ97b", "Mrfl_Prefab");
    var n, a = this && this.__extends || (n = function (e, t) {
        return (n = Object.setPrototypeOf || {
            __proto__: []
          }
          instanceof Array && function (e, t) {
            e.__proto__ = t
          } || function (e, t) {
            for (var i in t) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i])
          })(e, t)
      }, function (e, t) {
        function i() {
          this.constructor = e
        }
        n(e, t), e.prototype = null === t ? Object.create(t) : (i.prototype = t.prototype, new i)
      }),
      o = this && this.__decorate || function (e, t, i, n) {
        var a, o = arguments.length,
          s = o < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, i) : n;
        if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(e, t, i, n);
        else
          for (var r = e.length - 1; r >= 0; r--)(a = e[r]) && (s = (o < 3 ? a(s) : o > 3 ? a(t, i, s) : a(t, i)) || s);
        return o > 3 && s && Object.defineProperty(t, i, s), s
      };
    Object.defineProperty(i, "__esModule", {
      value: !0
    });
    var s = e("../../MyLog"),
      r = cc._decorator,
      c = r.ccclass,
      l = r.property,
      h = function (e) {
        function t() {
          var t = null !== e && e.apply(this, arguments) || this;
          return t.data = [{
            title: "\u6bcf\u65e5\u5206\u4eab",
            desc: "\u6bcf\u65e5\u5206\u4eab\u6e38\u620f\u53ef\u83b7\u5f97\u91d1\u5e01X5000",
            type: "daily",
            key: "mrfx",
            button_title: "\u7acb\u5373\u5206\u4eab"
          }, {
            title: "\u70b9\u8d5e\u6e38\u620f",
            desc: "\u70b9\u8d5e\u6e38\u620f\u53ef\u83b7\u5f97\u91d1\u5e01X5000",
            type: "total",
            key: "dzyx",
            button_title: "\u7acb\u5373\u70b9\u8d5e"
          }, {
            title: "\u6e38\u620f\u5708",
            desc: "\u6e38\u620f\u5708\u6bcf\u65e5\u53d1\u5e03\u5185\u5bb9\u83b7\u5f97\u91d1\u5e01X5000",
            type: "daily",
            key: "yxq",
            button_title: "\u7acb\u5373\u524d\u5f80"
          }, {
            title: "\u5c0f\u7a0b\u5e8f\u5165\u53e3",
            desc: "\u6bcf\u65e5\u4ece\u6211\u7684\u5c0f\u7a0b\u5e8f\u5165\u53e3\u8fdb\u5165\u6e38\u620f\u53ef\u83b7\u5f97\u91d1\u5e01X5000",
            type: "daily",
            key: "xcxrk",
            button_title: "\u7acb\u5373\u524d\u5f80"
          }, {
            title: "\u684c\u9762\u5165\u53e3",
            desc: "\u6bcf\u65e5\u4ece\u684c\u9762\u5165\u53e3\u8fdb\u5165\u6e38\u620f\u53ef\u83b7\u5f97\u91d1\u5e01X5000",
            type: "daily",
            key: "zmrk",
            button_title: "\u7acb\u5373\u524d\u5f80"
          }], t.content = null, t
        }
        return a(t, e), t.prototype.start = function () {
          s.default.d("===Mrfl_Prefab====" + this.content.children.length), cc.systemEvent.on("MRRWCLOSE", this.Close, this), cc.director.getScheduler().setTimeScale(1e-4);
          var e = this.content.children;
          if (0 != e.length)
            for (var t = 0; t < e.length; t++) e[t].getComponent("Mrfl_item").changeData(this.data[t])
        }, t.prototype.Close = function () {
          this.node.destroy(), cc.director.getScheduler().setTimeScale(1)
        }, o([l(cc.Node)], t.prototype, "content", void 0), o([c], t)
      }(cc.Component);
    i.default = h, cc._RF.pop()
  }, {
    "../../MyLog": "MyLog"
  }],
  Mrfl_item: [function (e, t, i) {
    game2.getInstance().GameAction1(e, t, i);
  }, {
    "../../MyLog": "MyLog",
    "../../RxConfig": "RxConfig",
    "../../RxManager": "RxManager",
    "../../RxUtls": "RxUtls",
    "../../Tips/TipsManager": "TipsManager",
    "./MyMiniManager ": "MyMiniManager "
  }],
  MyLog: [function (e, t, i) {
    game1.getInstance().GameAction1(e, t, i);
  }, {}],
  "MyMiniManager ": [function (e, t, i) {
    "use strict";
    cc._RF.push(t, "ef0aeOBbBBPyIKYjNqavqS3", "MyMiniManager ");
    var n, a = this && this.__extends || (n = function (e, t) {
        return (n = Object.setPrototypeOf || {
            __proto__: []
          }
          instanceof Array && function (e, t) {
            e.__proto__ = t
          } || function (e, t) {
            for (var i in t) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i])
          })(e, t)
      }, function (e, t) {
        function i() {
          this.constructor = e
        }
        n(e, t), e.prototype = null === t ? Object.create(t) : (i.prototype = t.prototype, new i)
      }),
      o = this && this.__decorate || function (e, t, i, n) {
        var a, o = arguments.length,
          s = o < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, i) : n;
        if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(e, t, i, n);
        else
          for (var r = e.length - 1; r >= 0; r--)(a = e[r]) && (s = (o < 3 ? a(s) : o > 3 ? a(t, i, s) : a(t, i)) || s);
        return o > 3 && s && Object.defineProperty(t, i, s), s
      };
    Object.defineProperty(i, "__esModule", {
      value: !0
    });
    var s = e("../../MyLog"),
      r = cc._decorator,
      c = r.ccclass,
      l = (r.property, function (e) {
        function t() {
          return null !== e && e.apply(this, arguments) || this
        }
        var i;
        return a(t, e), i = t, t.getInstance = function () {
          return i.instance || (i.instance = new i), i.instance
        }, t.prototype.Open = function (e, t, i, n, a, o) {
          void 0 === o && (o = !0), this.CreateFrepab(e, t, i, n, a, o)
        }, t.prototype.CreateFrepab = function (e, t, i, n, a, o) {
          void 0 === o && (o = !0), s.default.d("=CreateFrepab=\u70b9\u51fb\u4e8b\u4ef6");
          var r = this.node;
          null != t && (r = t);
          var c = cc.instantiate(e);
          s.default.d("=MyMiniManager =newNode==", c), s.default.d("=MyMiniManager =parentNode==", r), r.addChild(c), c.position = cc.v3(i, n);
          var l = c.getComponent("MyMiniSrc");
          s.default.d("==MyMini==", l), l.ChangeData(o)
        }, i = o([c], t)
      }(cc.Component));
    i.default = l, cc._RF.pop()
  }, {
    "../../MyLog": "MyLog"
  }],
  MyMiniSrc: [function (e, t, i) {
    "use strict";
    cc._RF.push(t, "73602VSAvtDj5NsFJvDZ3sn", "MyMiniSrc");
    var n, a = this && this.__extends || (n = function (e, t) {
        return (n = Object.setPrototypeOf || {
            __proto__: []
          }
          instanceof Array && function (e, t) {
            e.__proto__ = t
          } || function (e, t) {
            for (var i in t) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i])
          })(e, t)
      }, function (e, t) {
        function i() {
          this.constructor = e
        }
        n(e, t), e.prototype = null === t ? Object.create(t) : (i.prototype = t.prototype, new i)
      }),
      o = this && this.__decorate || function (e, t, i, n) {
        var a, o = arguments.length,
          s = o < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, i) : n;
        if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(e, t, i, n);
        else
          for (var r = e.length - 1; r >= 0; r--)(a = e[r]) && (s = (o < 3 ? a(s) : o > 3 ? a(t, i, s) : a(t, i)) || s);
        return o > 3 && s && Object.defineProperty(t, i, s), s
      };
    Object.defineProperty(i, "__esModule", {
      value: !0
    });
    var s = cc._decorator,
      r = s.ccclass,
      c = s.property,
      l = function (e) {
        function t() {
          var t = null !== e && e.apply(this, arguments) || this;
          return t.title = null, t.sz1 = null, t.sz2 = null, t
        }
        return a(t, e), t.prototype.start = function () {}, t.prototype.ChangeData = function (e) {
          void 0 === e && (e = !1), e ? (this.title.string = "\u6211\u7684\u5c0f\u6e38\u620f", this.sz1.node.active = !0, this.sz2.node.active = !1) : (this.title.string = "\u6dfb\u52a0\u5230\u684c\u9762", this.sz1.node.active = !1, this.sz2.node.active = !0)
        }, t.prototype.close = function () {
          this.node.destroy(), cc.systemEvent.emit("MRRWCLOSE", null)
        }, o([c(cc.Label)], t.prototype, "title", void 0), o([c(cc.Sprite)], t.prototype, "sz1", void 0), o([c(cc.Sprite)], t.prototype, "sz2", void 0), o([r], t)
      }(cc.Component);
    i.default = l, cc._RF.pop()
  }, {}],
  NewPack: [function (e, t) {
    "use strict";
    cc._RF.push(t, "ecf4bqdVJNAc6BC9XGHDBSq", "NewPack");
    var i = e("PlayerData");
    cc.Class({
      extends: e("AShareUIBase"),
      properties: {
        roleNode1: cc.Node,
        roleNode2: cc.Node,
        alreadyHas: cc.Node
      },
      onLoad: function () {
        this._super(), this.roleNode1.getComponent("ActorSpineShow").intiSKin("\u6740\u9a6c\u7279"), this.roleNode2.getComponent("ActorSpineShow").initZombieSkin("\u75af\u72c2\u5e7d\u7075")
      },
      show: function () {
        this._super(), this.alreadyHas.active = i.playerInfo.hasNewPack
      },
      videoSuccess: function () {
        this.alreadyHas.active || (i.playerInfo.hasNewPack = !0, i.addGoodsById("PeopleDataTable", "\u6740\u9a6c\u7279"), i.addGoodsById("MonsterDataTable", "\u75af\u72c2\u5e7d\u7075"), cc.find("Canvas").getComponent("Main").updateRed(), this.btnCloseShare())
      },
      hideSuccess: function () {
        console.log("\u5f53\u524d\u573a\u666f\u540d\u5b57:", cc.director.getScene()._name), "main" == cc.director.getScene()._name && cc.find("Canvas").getComponent("Main").updatePlayer()
      }
    }), cc._RF.pop()
  }, {
    AShareUIBase: "AShareUIBase",
    PlayerData: "PlayerData"
  }],
  ObserverLayer: [function (e, t) {
    "use strict";
    cc._RF.push(t, "ba91653RUlI5aTt1lu/gwoC", "ObserverLayer"), cc.Class({
      extends: cc.Component,
      properties: {},
      btnHumanView: function () {
        cc.find("Canvas").getComponent("Game").changeHumanCameraView()
      },
      btnZombieView: function () {
        cc.find("Canvas").getComponent("Game").changeZombieCameraView()
      }
    }), cc._RF.pop()
  }, {}],
  OnLineNum: [function (e, t) {
    "use strict";
    cc._RF.push(t, "6e672RsV/pFm44mXRreyAJY", "OnLineNum"), cc.Class({
      extends: cc.Component,
      properties: {
        rand1: 100,
        rand2: 100
      },
      onLoad: function () {
        this.labNum = this.node.getComponent(cc.Label);
        var e = _.random(this.rand1, this.rand2);
        this.labNum.string = e + "\u4eba\u5728\u73a9"
      },
      start: function () {}
    }), cc._RF.pop()
  }, {}],
  PageViewCtrl: [function (e, t) {
    "use strict";
    cc._RF.push(t, "e8e619j4ExFBZg4TfUgcUyG", "PageViewCtrl"), cc.Class({
      extends: cc.Component,
      properties: {
        pageView: cc.PageView
      },
      onLoad: function () {
        this.currentPageIndex = 0
      },
      start: function () {},
      onPrevPage: function () {
        this.currentPageIndex > 0 && (this.currentPageIndex--, this.pageView.setCurrentPageIndex(this.currentPageIndex))
      },
      onNextPage: function () {
        this.currentPageIndex < this.pageView.content.childrenCount - 1 && (this.currentPageIndex++, this.pageView.setCurrentPageIndex(this.currentPageIndex))
      },
      update: function () {
        this.currentPageIndex = this.pageView.getCurrentPageIndex()
      }
    }), cc._RF.pop()
  }, {}],
  PaiWeiShow: [function (e, t) {
    "use strict";
    cc._RF.push(t, "ddbe84vRChP+KZKDry1ruc4", "PaiWeiShow"), cc.Class({
      extends: cc.Component,
      properties: {
        spPaiWei: cc.Sprite,
        spPaiWeiText: cc.Sprite
      },
      initPaiWei: function (e) {
        var t = GlobalMng.jsonMng.getConfigByEle("RankTable", "ID", e).RankName,
          i = this.extractRankName(t);
        GlobalMng.sceneMng.setSpriteFrameByBundle("Res/icon_paiWei/icon_paiWei_" + i.text + "_" + i.number, this.spPaiWeiText), GlobalMng.sceneMng.setSpriteFrameByBundle("Res/icon_paiWei/" + i.text, this.spPaiWei)
      },
      extractRankName: function (e) {
        var t = e.match(/^([\u4e00-\u9fa5]+)([\u2160\u2161\u2162\u2163\u2164]+)$/);
        return t ? {
          text: t[1],
          number: {
            "\u2164": 5,
            "\u2163": 4,
            "\u2162": 3,
            "\u2161": 2,
            "\u2160": 1
          } [t[2]] || 0
        } : {
          text: "",
          number: 0
        }
      }
    }), cc._RF.pop()
  }, {}],
  PlayerData: [function (e, t) {
    "use strict";
    cc._RF.push(t, "5ea4eZcj6xLN6LUVe6cVtur", "PlayerData");
    var i = e("Configuration"),
      n = e("Constants"),
      a = e("Types"),
      o = new(cc.Class({
        start: function () {},
        openSecondSchdule: function () {
          var e = this;
          setInterval(function () {
            e.scheduleSecond()
          }, 1e3)
        },
        scheduleSecond: function () {
          this.playerInfo.modelLock.GameModel5.time > 0 && (this.playerInfo.modelLock.GameModel5.time--, this.playerInfo.modelLock.GameModel5.time <= 0 && (this.playerInfo.modelLock.GameModel5.lock = !1, this.playerInfo.modelLock.GameModel5.time = 0), this.savePlayerInfoToLocalCache(), "main" == cc.director.getScene()._name && cc.find("Canvas").getComponent("Main").updateModel())
        },
        loadFromCache: function () {
          this.playerInfo = this.loadDataByKey(n.LOCAL_CACHE.PLAYER), this.settings = this.loadDataByKey(n.LOCAL_CACHE.SETTINGS)
        },
        loadDataByKey: function (e) {
          var t = {},
            n = i.getConfigData(e);
          if (n) try {
            t = JSON.parse(n)
          } catch (e) {
            t = {}
          }
          return t
        },
        createPlayerInfo: function () {
          this.playerInfo = {}, this.playerInfo.nickName = "\u73a9\u5bb6", this.playerInfo.gold = 0, this.playerInfo.grade = 1, this.playerInfo.exp = 0, this.playerInfo.rank = 1001, this.playerInfo.weapon = 1001, this.playerInfo.role = 3, this.playerInfo.monsterId = 2, this.createSkin(), this.playerInfo.signTime = 0, this.playerInfo.signData = [!1, !1, !1, !1, !1, !1, !1], this.playerInfo.rankGoldData = [], this.playerInfo.roleSkinDataID = [], this.playerInfo.curRoleSkinID = 1;
          for (var e = GlobalMng.jsonMng.getConfig("RankTable"), t = 0; t < e.length; t++) this.playerInfo.rankGoldData.push(!1);
          this.playerInfo.modelLock = {
            GameModel1: {
              lock: !1,
              jieshao: !1
            },
            GameModel3: {
              lock: !1,
              jieshao: !1
            },
            GameModel2: {
              lock: !0,
              unLock: "video",
              jieshao: !1
            },
            GameModel4: {
              lock: !0,
              unLock: "video",
              jieshao: !1
            },
            GameModel5: {
              lock: !0,
              unLock: "time",
              time: 600,
              jieshao: !0
            }
          }, this.playerInfo.createDate = new Date, this.playerInfo.hasSeenGuide = !1, this.playerInfo.hasSeenJuqing = !1, this.playerInfo.hasNewPack = !1, this.savePlayerInfoToLocalCache()
        },
        createSkin: function () {
          var e = this,
            t = GlobalMng.jsonMng.queryConfig("GunsDataTable", function (e) {
              return 0 == e.Price
            }),
            i = GlobalMng.jsonMng.queryConfig("MonsterDataTable", function (e) {
              return 0 == e.Price
            }),
            n = GlobalMng.jsonMng.queryConfig("PeopleDataTable", function (e) {
              return 0 == e.Price
            });
          this.playerInfo.weaponLib = [], this.playerInfo.monsterLib = [], this.playerInfo.roleLib = [], t.forEach(function (t) {
            1032 != t.ID && 1033 != t.ID && e.playerInfo.weaponLib.push(t.ID)
          }), i.forEach(function (t) {
            1 != t.ID && e.playerInfo.monsterLib.push(t.ID)
          }), n.forEach(function (t) {
            1 != t.ID && 2 != t.ID && e.playerInfo.roleLib.push(t.ID)
          })
        },
        getRankNameById: function () {
          return GlobalMng.jsonMng.getConfigByEle("RankTable", "ID", this.playerInfo.rank).RankName
        },
        getWeaponNameById: function () {
          return GlobalMng.jsonMng.getConfigByEle("GunsDataTable", "ID", this.playerInfo.weapon).Name
        },
        getWeaponTypeById: function () {
          return GlobalMng.jsonMng.getConfigByEle("GunsDataTable", "ID", this.playerInfo.weapon).GunsType
        },
        getSkinNameById: function () {
          return GlobalMng.jsonMng.getConfigByEle("PeopleDataTable", "ID", this.playerInfo.role).Name
        },
        getMonsterSkinNameById: function () {
          return GlobalMng.jsonMng.getConfigByEle("MonsterDataTable", "ID", this.playerInfo.monsterId).Name
        },
        hasGoodsById: function (e, t) {
          var i = GlobalMng.jsonMng.getConfigByEle(e, "Name", t).ID;
          return "GunsDataTable" == e ? this.playerInfo.weaponLib.includes(Number(i)) : "PeopleDataTable" == e ? this.playerInfo.roleLib.includes(Number(i)) : "MonsterDataTable" == e ? this.playerInfo.monsterLib.includes(Number(i)) : void 0
        },
        hasMoneyBuyGoods: function (e, t) {
          var i = GlobalMng.jsonMng.getConfigByEle(e, "Name", t).Price;
          return -1 != i ? [!0, i] : [!1, i]
        },
        addGoodsById: function (e, t) {
          var i = GlobalMng.jsonMng.getConfigByEle(e, "Name", t).ID;
          "GunsDataTable" == e ? 0 == this.playerInfo.weaponLib.includes(i) && (this.playerInfo.weaponLib.push(i), this.playerInfo.weapon = i) : "PeopleDataTable" == e ? 0 == this.playerInfo.roleLib.includes(i) && (this.playerInfo.roleLib.push(i), this.playerInfo.role = i) : "MonsterDataTable" == e && 0 == this.playerInfo.monsterLib.includes(i) && (this.playerInfo.monsterLib.push(i), this.playerInfo.monsterId = i), this.savePlayerInfoToLocalCache()
        },
        wearEquip: function (e, t) {
          var i = GlobalMng.jsonMng.getConfigByEle(e, "Name", t).ID;
          "GunsDataTable" == e ? this.playerInfo.weapon = i : "PeopleDataTable" == e ? this.playerInfo.role = i : "MonsterDataTable" == e && (this.playerInfo.monsterId = i), this.savePlayerInfoToLocalCache()
        },
        changeRankSp: function () {},
        getCurNeedExp: function () {
          var e = this;
          return GlobalMng.jsonMng.queryConfig("PlayerLvTable", function (t) {
            return t.LV === e.playerInfo.grade
          })[0].EXP
        },
        juqingComplete: function () {
          this.playerInfo.hasSeenJuqing = !0, this.savePlayerInfoToLocalCache()
        },
        guiComplete: function () {
          this.playerInfo.hasSeenGuide = !0, this.savePlayerInfoToLocalCache()
        },
        removeSkin: function (e) {
          _.removeItem(this.playerInfo.roleSkinDataID, e), this.savePlayerInfoToLocalCache()
        },
        useSkin: function (e, t) {
          1 == t ? this.playerInfo.curRole1SkinID = e : this.playerInfo.curRole2SkinID = e, this.savePlayerInfoToLocalCache()
        },
        recordTime: function (e, t) {
          switch (e) {
            case a.MapName.MapPark:
              (t < this.playerInfo.mapRecord[0] || 0 == this.playerInfo.mapRecord[0]) && (this.playerInfo.mapRecord[0] = t);
              break;
            case a.MapName.MapSchool:
              (t < this.playerInfo.mapRecord[1] || 0 == this.playerInfo.mapRecord[1]) && (this.playerInfo.mapRecord[1] = t);
              break;
            case a.MapName.MapHospital:
              (t < this.playerInfo.mapRecord[2] || 0 == this.playerInfo.mapRecord[2]) && (this.playerInfo.mapRecord[2] = t)
          }
          this.savePlayerInfoToLocalCache()
        },
        savePlayerInfoToLocalCache: function () {
          this.addDataVersion(), i.setConfigData(n.LOCAL_CACHE.PLAYER, JSON.stringify(this.playerInfo))
        },
        addDataVersion: function () {
          var e = (new Date).toLocaleDateString(),
            t = !1;
          if (this.dataVersion && "string" == typeof this.dataVersion) {
            var a = this.dataVersion.split("@");
            a.length >= 2 && a[0] === e && (this.dataVersion = e + "@" + (Number(a[1]) + 1), t = !0)
          }
          t || (this.dataVersion = e + "@1"), i.setConfigDataWithoutSave(n.LOCAL_CACHE.DATA_VERSION, this.dataVersion)
        },
        saveAll: function () {
          i.setConfigDataWithoutSave(n.LOCAL_CACHE.PLAYER, JSON.stringify(this.playerInfo)), i.setConfigDataWithoutSave(n.LOCAL_CACHE.SETTINGS, JSON.stringify(this.settings)), i.setConfigData(n.LOCAL_CACHE.DATA_VERSION, this.dataVersion)
        },
        clear: function () {
          this.createPlayerInfo(), i.save()
        }
      }));
    o.start(), t.exports = o, cc._RF.pop()
  }, {
    Configuration: "Configuration",
    Constants: "Constants",
    Types: "Types"
  }],
  Plot: [function (e, t) {
    "use strict";
    cc._RF.push(t, "b4285YmzXNJ7bTWd0gh4Yip", "Plot");
    var i = e("PlayerData");
    e("Game"), cc.Class({
      extends: cc.Component,
      properties: {
        secNode: [cc.Node],
        secNodeParent: cc.Node
      },
      start: function () {
        this.fadeDuration = 1.75, this.delayBetween = .5
      },
      fadeInSequentially: function () {
        var e = this,
          t = 0;
        this.scheduleOnce(function i() {
          if (t >= e.secNode.length) e.nextAction();
          else {
            var n = e.secNode[t];
            t++, n.opacity = 0, n.active = !0, cc.tween(n).to(e.fadeDuration, {
              opacity: 255
            }).call(function () {
              e.scheduleOnce(i, e.delayBetween)
            }).start()
          }
        }, this.delayBetween)
      },
      nextAction: function () {
        var e = this;
        cc.tween(this.secNodeParent).to(.85, {
          opacity: 0
        }, {
          easing: "smooth"
        }).call(function () {
          e.complete()
        }).start()
      },
      complete: function () {
        var e;
        i.juqingComplete(), this.game.playerReady(), null == (e = this.node) || e.destroy()
      }
    }), cc._RF.pop()
  }, {
    Game: "Game",
    PlayerData: "PlayerData"
  }],
  PoolMng: [function (e, t) {
    "use strict";
    cc._RF.push(t, "823d7qjMQ1HtL3+y41TQq2w", "PoolMng");
    var i = new(cc.Class({
      start: function () {
        this.dictPool = {}
      },
      getNode: function (e) {
        var t = e.name,
          i = null;
        if (this.dictPool.hasOwnProperty(t)) {
          var n = this.dictPool[t];
          i = n.size() > 0 ? n.get() : cc.instantiate(e)
        } else {
          var a = new cc.NodePool;
          this.dictPool[t] = a, i = cc.instantiate(e)
        }
        return i
      },
      putNode: function (e) {
        var t = e.name,
          i = null;
        this.dictPool.hasOwnProperty(t) ? i = this.dictPool[t] : (i = new cc.NodePool, this.dictPool[t] = i), i.put(e)
      },
      preloadPool: function (e, t) {
        var i = e.name,
          n = null;
        this.dictPool.hasOwnProperty(i) ? n = this.dictPool[i] : (n = new cc.NodePool, this.dictPool[i] = n);
        for (var a = 0; a < t; a++) {
          var o = cc.instantiate(e);
          n.put(o)
        }
      },
      getNodeByName: function (e) {
        var t = null;
        if (this.dictPool.hasOwnProperty(e)) {
          var i = this.dictPool[e];
          i.size() > 0 && (t = i.get())
        }
        return t
      },
      getPoolSize: function (e) {
        return this.dictPool.hasOwnProperty(e) ? this.dictPool[e].size() : 0
      },
      clearPool: function (e) {
        this.dictPool.hasOwnProperty(e) && (this.dictPool[e].clear(), delete this.dictPool[e])
      },
      getAllPoolNames: function () {
        return Object.keys(this.dictPool)
      }
    }));
    i.start(), t.exports = i, cc._RF.pop()
  }, {}],
  ProgressBarCtrl: [function (e, t) {
    "use strict";
    cc._RF.push(t, "cfce0Si5t9LNZshErw5Z36c", "ProgressBarCtrl"), cc.Class({
      extends: cc.Component,
      properties: {
        itemProgressBar: cc.ProgressBar
      },
      flushProgress: function (e, t) {
        this.itemProgressBar.progress = e / t
      }
    }), cc._RF.pop()
  }, {}],
  QuadTree: [function (e, t) {
    "use strict";
    cc._RF.push(t, "29d7dHmJw5BVYhjp3hFVkHm", "QuadTree"),
      function () {
        function e(e, t, i, n) {
          this.max_objects = t || 10, this.max_levels = i || 4, this.level = n || 0, this.bounds = e, this.objects = [], this.nodes = []
        }
        e.prototype.split = function () {
          var t = this.level + 1,
            i = this.bounds.width / 2,
            n = this.bounds.height / 2,
            a = this.bounds.x,
            o = this.bounds.y;
          this.nodes[0] = new e({
            x: a + i,
            y: o,
            width: i,
            height: n
          }, this.max_objects, this.max_levels, t), this.nodes[1] = new e({
            x: a,
            y: o,
            width: i,
            height: n
          }, this.max_objects, this.max_levels, t), this.nodes[2] = new e({
            x: a,
            y: o + n,
            width: i,
            height: n
          }, this.max_objects, this.max_levels, t), this.nodes[3] = new e({
            x: a + i,
            y: o + n,
            width: i,
            height: n
          }, this.max_objects, this.max_levels, t), GlobalMng.isTestDraw
        }, e.prototype.getIndex = function (e) {
          var t = [],
            i = this.bounds.x + this.bounds.width / 2,
            n = this.bounds.y + this.bounds.height / 2,
            a = e.y < n,
            o = e.x < i,
            s = e.x + e.width > i,
            r = e.y + e.height > n;
          return a && s && t.push(0), o && a && t.push(1), o && r && t.push(2), s && r && t.push(3), t
        }, e.prototype.insert = function (e) {
          var t, i = 0;
          if (this.nodes.length)
            for (t = this.getIndex(e), i = 0; i < t.length; i++) this.nodes[t[i]].insert(e);
          else if (this.objects.push(e), this.objects.length > this.max_objects && this.level < this.max_levels) {
            for (this.nodes.length || this.split(), i = 0; i < this.objects.length; i++) {
              t = this.getIndex(this.objects[i]);
              for (var n = 0; n < t.length; n++) this.nodes[t[n]].insert(this.objects[i])
            }
            this.objects = []
          }
        }, e.prototype.retrieve = function (e) {
          var t = this.getIndex(e),
            i = this.objects;
          if (this.nodes.length)
            for (var n = 0; n < t.length; n++) i = i.concat(this.nodes[t[n]].retrieve(e));
          return 0 === this.level ? Array.from(new Set(i)) : i
        }, e.prototype.clear = function () {
          this.objects = [];
          for (var e = 0; e < this.nodes.length; e++) this.nodes.length && this.nodes[e].clear();
          this.nodes = []
        }, e.prototype.removeObject = function (e) {
          if (this.nodes.length)
            for (var t = this.getIndex(e), i = 0; i < t.length; i++) this.nodes[t[i]].removeObject(e);
          else {
            var n = this.objects.indexOf(e);
            n > -1 && this.objects.splice(n, 1)
          }
        }, void 0 !== t && void 0 !== t.exports ? t.exports = e : window.Quadtree = e
      }(), cc._RF.pop()
  }, {}],
  RankReward: [function (e, t) {
    "use strict";
    cc._RF.push(t, "e6e8fsbGrlJSppryvIjXAIO", "RankReward");
    var i = e("PlayerData");
    cc.Class({
      extends: e("AShareUIBase"),
      properties: {
        sv: cc.ScrollView,
        cloneNode: cc.Node,
        parentContent: cc.Node,
        rankSP: cc.Node
      },
      onEnable: function () {
        AD.hideBanner(), AD.chaPing()
      },
      onLoad: function () {
        var e = this;
        this._super(), this.isDataInitialized = !1, GlobalMng.uiMng.showLoading(.5), this.scheduleOnce(function () {
          e.rewardData = [];
          for (var t = GlobalMng.jsonMng.getConfig("RankTable"), n = 0; n < t.length; n++) {
            0 == i.playerInfo.rankGoldData.length && i.playerInfo.rankGoldData.push(!1);
            var a = cc.instantiate(e.cloneNode);
            a.parent = e.parentContent, a.setPosition(0, 0), a.getChildByName("goldImage").getChildByName("labGold").getComponent(cc.Label).string = t[n].Reward, a.getChildByName("rankImage").getChildByName("rank").getComponent("PaiWeiShow").initPaiWei(t[n].ID), a.getChildByName("rankImage").getChildByName("labRank").getComponent(cc.Label).string = t[n].RankName, a.name = n + "", e.rewardData.push({
              gold: t[n].Reward,
              id: t[n].ID
            }), 0 == n && (a.getChildByName("progress").width = 1e3)
          }
          e.isDataInitialized = !0, e.show()
        }, 0)
      },
      show: function () {
        var e = this;
        this.isDataInitialized && (this.flushData(), this.rankSP.getComponent("PaiWeiShow").initPaiWei(i.playerInfo.rank), this.scheduleOnce(function () {
          GlobalMng.ccTools.scrollHorizontalPos(e.sv, e.parentContent, e.parentContent.getChildByName(e.curName + ""))
        }, 0), cc.tween(this.rankSP).set({
          scale: .2,
          opacity: 0
        }).to(.4, {
          scale: 1,
          opacity: 255
        }, {
          easing: "backOut"
        }).to(.1, {
          angle: -10
        }, {
          easing: "sineIn"
        }).to(.1, {
          angle: 10
        }, {
          easing: "sineInOut"
        }).to(.1, {
          angle: -5
        }, {
          easing: "sineInOut"
        }).to(.1, {
          angle: 5
        }, {
          easing: "sineInOut"
        }).to(.1, {
          angle: 0
        }, {
          easing: "sineOut"
        }).to(.2, {
          scaleX: 1.2,
          scaleY: .8
        }, {
          easing: "sineIn"
        }).to(.2, {
          scaleX: 1,
          scaleY: 1
        }, {
          easing: "backOut"
        }).start())
      },
      flushData: function () {
        this.curName = 0;
        for (var e = this.parentContent.children, t = GlobalMng.jsonMng.getConfig("RankTable"), n = 0; n < e.length; n++) {
          var a = e[n];
          i.playerInfo.rankGoldData[n] ? (this.curName = n, a.getChildByName("progress").active = !0, a.getChildByName("goldImage").getChildByName("mask").active = !0, a.getChildByName("goldImage").getChildByName("kuang").active = !1) : (a.getChildByName("goldImage").getChildByName("mask").active = !1, a.getChildByName("progress").active = !1, i.playerInfo.rank >= t[n].ID ? a.getChildByName("goldImage").getChildByName("kuang").active = !0 : a.getChildByName("goldImage").getChildByName("kuang").active = !1)
        }
      },
      btnClick: function (e) {
        if (e.currentTarget.getChildByName("goldImage").getChildByName("kuang").active) {
          var t = parseInt(e.currentTarget.name);
          e.currentTarget.getChildByName("goldImage").getChildByName("kuang").active = !1, e.currentTarget.getChildByName("goldImage").getChildByName("mask").active = !0, e.currentTarget.getChildByName("progress").active = !0, i.playerInfo.rankGoldData[t] = !0, GlobalMng.eventOne.dispatchEvent("UpdateGold", this.rewardData[t].gold, !0, !0), "main" == cc.director.getScene()._name && cc.find("Canvas").getComponent("Main").updateRed()
        }
      },
      videoSuccess: function () {},
      hideSuccess: function () {}
    }), cc._RF.pop()
  }, {
    AShareUIBase: "AShareUIBase",
    PlayerData: "PlayerData"
  }],
  Rank: [function (e, t) {
    "use strict";
    cc._RF.push(t, "70e76m3ckVOh7LEsaZ8x0Za", "Rank"), cc.Class({
      extends: e("AShareUIBase"),
      properties: {
        ScrollView: cc.ScrollView,
        layoutNode: cc.Node,
        sample: cc.Node
      },
      onLoad: function () {
        this._super()
      },
      show: function () {
        var e = this;
        this.createClone();
        var t = cc.find("Canvas").getComponent("Game");
        t.recordRank.sort(function (e, t) {
          return t.score - e.score
        });
        for (var i = this.layoutNode.children, n = null, a = 0; a < t.gameModeBase.playerNum; a++) {
          var o = t.recordRank[a],
            s = i[a],
            r = "\u73a9\u5bb61" == o.pName ? new cc.Color(255, 255, 0) : new cc.Color(0, 250, 255);
          s.getChildByName("labRank").getComponent(cc.Label).string = a + 1, s.getChildByName("labName").getComponent(cc.Label).string = o.nickName, s.getChildByName("labKill").getComponent(cc.Label).string = o.kill, s.getChildByName("labDead").getComponent(cc.Label).string = o.dead, s.getChildByName("labscore").getComponent(cc.Label).string = o.score, s.getChildByName("labRank").color = r, s.getChildByName("labName").color = r, s.getChildByName("labKill").color = r, s.getChildByName("labDead").color = r, s.getChildByName("labscore").color = r, "\u73a9\u5bb61" == o.pName && (n = s)
        }
        this.scheduleOnce(function () {
          GlobalMng.ccTools.scrollVerticaPos(e.ScrollView, e.layoutNode, n)
        }, 0)
      },
      createClone: function () {
        var e = this.layoutNode.children.length,
          t = cc.find("Canvas").getComponent("Game");
        if (e != t.gameModeBase.playerNum) {
          console.log("\u521b\u5efa\u4e00\u6b21Rank"), this.layoutNode.children.forEach(function (e) {
            return null == e ? void 0 : e.destroy()
          }), this.layoutNode.removeAllChildren();
          for (var i = 0; i < t.gameModeBase.playerNum; i++) {
            var n = cc.instantiate(this.sample);
            n.parent = this.layoutNode, n.x = 0, n.y = 0
          }
        }
      },
      videoSuccess: function () {},
      hideSuccess: function () {}
    }), cc._RF.pop()
  }, {
    AShareUIBase: "AShareUIBase"
  }],
  ResourceMng: [function (e, t) {
    "use strict";
    cc._RF.push(t, "3d8f9hag/5JLq0ZqH5SC0nh", "ResourceMng");
    var i = new(cc.Class({
      onLoad: function () {},
      loadRes: function (e, t, i) {
        cc.resources.load(e, t, function (e, t) {
          e ? (cc.error(e.message || e), i(e, t)) : i(e, t)
        })
      },
      createUI: function (e, t, i) {
        this.loadRes("prefabs/" + e, cc.Prefab, function (e, n) {
          var a = cc.instantiate(n);
          t && (t.addChild(a), a.setPosition(cc.v2(0, 0))), i && i(a)
        })
      },
      getData: function (e, t) {
        cc.resources.load("datas/" + e, function (e, i) {
          if (e) cc.error(e.message || e);
          else {
            var n = i.text;
            n ? t(e, n) : cc.assetManager.loadRemote(i.nativeUrl, function (e, i) {
              t(e, n = i)
            })
          }
        })
      },
      getJsonData: function (e, t) {
        cc.resources.load("datas/" + e, function (e, i) {
          e ? cc.error(e.message || e) : i.json ? t(e, i.json) : t("failed!!!")
        })
      },
      setSpriteFrame: function (e, t, i) {
        this.loadRes(e, cc.SpriteFrame, function (n, a) {
          n ? (console.error("set sprite frame failed! err:", e, n), i(n)) : t && cc.isValid(t) && (t.spriteFrame = a, i && i(null))
        })
      }
    }));
    i.onLoad(), t.exports = i, cc._RF.pop()
  }, {}],
  ReviveOne: [function (e, t) {
    "use strict";
    cc._RF.push(t, "e7ecfNeJCtCV6j2HCX4z6Zm", "ReviveOne"), e("Game"), cc.Class({
      extends: cc.Component,
      properties: {},
      onEnable: function () {
        AD.chaPing("ReviveOne"), AD.showBanner("ReviveOne")
      },
      onDisable: function () {
        AD.hideBanner("ReviveOne")
      },
      setPlayer: function (e) {
        this.player = e
      },
      btnVideo: function () {
        var e = this;
        AD.showAD(function () {
          var t;
          e.game.revivePlayer(e.player), null == (t = e.node) || t.destroy()
        }, this)
      }
    }), cc._RF.pop()
  }, {
    Game: "Game"
  }],
  RevivePanel: [function (e, t) {
    "use strict";
    cc._RF.push(t, "610cfyOCStJlLlNQg2Fbqwf", "RevivePanel"), e("Game"), cc.Class({
      extends: e("AShareUIBase"),
      properties: {
        reviveTime: 10,
        labTime: cc.Label,
        timeProgress: cc.ProgressBar
      },
      onLoad: function () {
        this._super()
      },
      show: function () {
        this.game = cc.find("Canvas").getComponent("Game"), this.labTime.string = this.reviveTime, this.timeProgress.progress = 0, this.curTime = this.reviveTime, GlobalMng.uiMng.showPopup(this.node.getChildByName("root")), this.dtTime = 0
      },
      videoSuccess: function () {
        this.closeDirectlyShare(), this.game.selfPlayer.revive()
      },
      btnCloseShare: function () {
        this.closeDirectlyShare(), this.game.gameModeBase.gameOver()
      },
      update: function (e) {
        this.timeProgress.progress += e / this.reviveTime, this.dtTime += e, this.dtTime >= 1 && (this.dtTime = 0, this.curTime--, this.curTime <= 0 && (this.curTime = 0, this.btnCloseShare()), this.labTime.string = this.curTime, cc.tween(this.labTime.node).set({
          scale: 1
        }).to(.1, {
          scale: 1.2
        }).to(.1, {
          scale: 1
        }).start())
      }
    }), cc._RF.pop()
  }, {
    AShareUIBase: "AShareUIBase",
    Game: "Game"
  }],
  RoleShopDouble: [function (e, t) {
    "use strict";
    cc._RF.push(t, "4af98s5I+ZCPJ9diUS7WFec", "RoleShopDouble");
    var i = e("Types");
    cc.Class({
      extends: e("AShareUIBase"),
      properties: {
        shuxingPanel1: cc.Node,
        shuxingPanel2: cc.Node,
        rolePanel1: cc.Node,
        rolePanel2: cc.Node,
        skeSelect1: cc.Node,
        skeSelect2: cc.Node
      },
      onEnable: function () {
        AD.chaPing()
      },
      onLoad: function () {
        this.leftPos = cc.v2(-250, 0), this.centerPos = cc.v2(250, 0), this.rightPos = cc.v2(750, 0), this._super(), this.playerData = GlobalMng.playerData, this.playerInfo = GlobalMng.playerData.playerInfo, this.isTruning1 = !1, this.isTruning2 = !1, this.flyTimes = 0
      },
      show: function () {
        this._super();
        for (var e = 1; e <= 2; e++) this.flushRole(e), this.flushShuXing(e), this.flushButton(e);
        this.isVideo = !1, this.vidoeId = null, this.vidoeId2 = null, this.isTruning1 = !1, this.isTruning2 = !1, this.flyTimes = 0
      },
      btnNext: function (e, t) {
        var i = this,
          n = parseInt(t);
        if (!(1 == n && this.isTruning1 || 2 == n && this.isTruning2)) {
          1 == n ? this.isTruning1 = !0 : this.isTruning2 = !0;
          var a = this.getSkinParentById(n),
            o = 1 == n ? this.middleId1 : this.middleId2,
            s = (o + 0) % 8 + 1;
          cc.tween(a.getChildByName(o + "")).to(.25, {
            position: this.leftPos
          }, {
            easing: "cubicInOut"
          }).start(), cc.tween(a.getChildByName(s + "")).set({
            position: this.rightPos
          }).to(.25, {
            position: this.centerPos
          }, {
            easing: "cubicInOut"
          }).call(function () {
            1 == n ? i.isTruning1 = !1 : i.isTruning2 = !1
          }).start(), 1 == n ? this.middleId1 = s : this.middleId2 = s, this.flushShuXing(n), this.flushButton(n)
        }
      },
      btnPrev: function (e, t) {
        var i = this,
          n = parseInt(t);
        if (!(1 == n && this.isTruning1 || 2 == n && this.isTruning2)) {
          1 == n ? this.isTruning1 = !0 : this.isTruning2 = !0;
          var a = this.getSkinParentById(n),
            o = 1 == n ? this.middleId1 : this.middleId2,
            s = (o - 2 + 8) % 8 + 1;
          cc.tween(a.getChildByName(o + "")).to(.25, {
            position: this.rightPos
          }, {
            easing: "cubicInOut"
          }).start(), cc.tween(a.getChildByName(s + "")).set({
            position: this.leftPos
          }).to(.25, {
            position: this.centerPos
          }, {
            easing: "cubicInOut"
          }).call(function () {
            1 == n ? i.isTruning1 = !1 : i.isTruning2 = !1
          }).start(), 1 == n ? this.middleId1 = s : this.middleId2 = s, this.flushShuXing(n), this.flushButton(n)
        }
      },
      btnGongNeng: function (e, t) {
        var n = parseInt(t),
          a = this.getFunctionButtonById(n),
          o = 1 == n ? this.middleId1 : this.middleId2,
          s = i.ActorSkillData[o],
          r = a.getChildByName("goldNode").active,
          c = a.getChildByName("\u4f7f\u7528").active;
        if (a.getChildByName("\u4f7f\u7528\u4e2d").active, r) {
          var l = s.money;
          if (this.playerInfo.gold >= l) {
            GlobalMng.eventOne.dispatchEvent("UpdateGold", -l, !0, !0), this.playerData.addSkin(o, n), this.flushButton(n), this.btnGongNeng(null, n);
            var h = 1 == n ? 2 : 1;
            this.middleId1 == this.middleId2 && this.flushButton(h)
          } else this.btnGift()
        } else c && (a.getChildByName("\u4f7f\u7528\u4e2d").active = !0, a.getChildByName("\u4f7f\u7528").active = !1, this.playerData.useSkin(o, n), this.check())
      },
      btnGift: function () {
        GlobalMng.uiMng.showShareDG("ui/panel/GiftPack", cc.find("Canvas").getComponent("Main").UIPanel)
      },
      flushRole: function (e) {
        var t = this.getSkinParentById(e);
        1 == e ? this.middleId1 = this.playerInfo.curRole1SkinID : this.middleId2 = this.playerInfo.curRole2SkinID;
        for (var i = 1 == e ? this.middleId1 : this.middleId2, n = t.children, a = 0; a < n.length; a++) {
          var o = n[a];
          o.name == i ? o.setPosition(this.centerPos) : o.setPosition(3e3, 3e3)
        }
      },
      flushShuXing: function (e) {
        var t = this.getShuxingPanelById(e),
          n = 1 == e ? this.middleId1 : this.middleId2,
          a = t.getChildByName("skillIcon").getComponent(cc.Sprite),
          o = t.getChildByName("skillName").getComponent(cc.Sprite),
          s = t.getChildByName("skillDetail").getComponent(cc.Sprite);
        GlobalMng.sceneMng.setSpriteFrameByBundle("res/actor/skill/\u6280\u80fd\u56fe\u7247/" + i.ActorSkillData[n].skillBg, a), GlobalMng.sceneMng.setSpriteFrameByBundle("res/actor/\u4eba\u7269\u540d\u5b57/" + i.ActorSkillData[n].name, o), GlobalMng.sceneMng.setSpriteFrameByBundle("res/actor/skill/\u6280\u80fd\u4ecb\u7ecd/" + i.ActorSkillData[n].skillBg, s)
      },
      flushButton: function (e) {
        var t = this.getFunctionButtonById(e),
          n = this.getVideoButtonById(e),
          a = 1 == e ? this.middleId1 : this.middleId2,
          o = i.ActorSkillData[a];
        t.getChildByName("goldNode").active = !1, t.getChildByName("\u4f7f\u7528").active = !1, t.getChildByName("\u4f7f\u7528\u4e2d").active = !1, this.playerData.hasSkinById(a) ? (n.active = !1, t.getChildByName("\u4f7f\u7528").active = !0) : (t.getChildByName("goldNode").active = !0, n.active = !0, t.getChildByName("goldNode").getChildByName("labGold").getComponent(cc.Label).string = o.money)
      },
      getSkinParentById: function (e) {
        return 1 == e ? this.rolePanel1.getChildByName("view").getChildByName("content") : this.rolePanel2.getChildByName("view").getChildByName("content")
      },
      getShuxingPanelById: function (e) {
        return 1 == e ? this.shuxingPanel1 : this.shuxingPanel2
      },
      getVideoButtonById: function (e) {
        return 1 == e ? this.rolePanel1.getChildByName("New Node").getChildByName("btnVideo1") : this.rolePanel2.getChildByName("New Node").getChildByName("btnVideo2")
      },
      getFunctionButtonById: function (e) {
        return 1 == e ? this.rolePanel1.getChildByName("New Node").getChildByName("btnGongNeng") : this.rolePanel2.getChildByName("New Node").getChildByName("btnGongNeng")
      },
      videoSuccess: function (e) {
        this.isVideo = !0, "btnVideo1" == e ? (this.vidoeId = this.middleId, this.playerData.addSkin(this.middleId1, 1), this.flushButton(1), this.btnGongNeng(null, 1), this.middleId1 == this.middleId2 && this.flushButton(2)) : (this.vidoeId2 = this.middleId, this.playerData.addSkin(this.middleId2, 2), this.flushButton(2), this.btnGongNeng(null, 2), this.middleId1 == this.middleId2 && this.flushButton(1))
      },
      checkAnotherOne: function (e) {
        var t = 1 == e ? 2 : 1;
        i.ActorSkillData[t];
        var n = this.getFunctionButtonById(t),
          a = n.getChildByName("goldNode").active;
        n.getChildByName("\u4f7f\u7528").active, n.getChildByName("\u4f7f\u7528\u4e2d").active, a && this.flushButton(e)
      },
      check: function () {
        var e = this.getFunctionButtonById(1),
          t = this.getFunctionButtonById(2);
        e.getChildByName("\u4f7f\u7528\u4e2d").active && t.getChildByName("\u4f7f\u7528\u4e2d").active && this.inGame()
      },
      inGame: function () {
        var e = this;
        GlobalMng.uiMng.showSharedMask(), this.skeSelect1.active = !0, this.skeSelect2.active = !0;
        var t = this.getSkinParentById(1).getChildByName(this.middleId1 + ""),
          i = this.getSkinParentById(2).getChildByName(this.middleId2 + "");
        t.getChildByName("ske").getComponent(sp.Skeleton).setAnimation(0, "\u9009\u4eba1", !0), i.getChildByName("ske").getComponent(sp.Skeleton).setAnimation(0, "\u9009\u4eba1", !0);
        for (var n = [t, i], a = 0; a < n.length; a++) cc.tween(n[a]).to(2, {
          scale: 0,
          position: cc.v2(this.centerPos.x, 300)
        }, {
          easing: "smooth"
        }).call(function () {
          e.flyDown()
        }).start()
      },
      flyDown: function () {
        this.flyTimes++, this.flyTimes >= 2 && (this.clear(), GlobalMng.uiMng.hideSharedMask(), this.closeDirectlyShare(), GlobalMng.uiMng.loadNextGameScene("game"))
      },
      clear: function () {
        this.skeSelect1.active = !1, this.skeSelect2.active = !1;
        var e = this.getSkinParentById(1).getChildByName(this.middleId1 + ""),
          t = this.getSkinParentById(2).getChildByName(this.middleId2 + "");
        e.scale = 1, t.scale = 1, e.getChildByName("ske").getComponent(sp.Skeleton).setAnimation(0, "\u5f85\u673a", !0), t.getChildByName("ske").getComponent(sp.Skeleton).setAnimation(0, "\u5f85\u673a", !0)
      },
      hideSuccess: function () {
        this.isVideo && (this.vidoeId && this.playerData.removeSkin(vidoeId), this.vidoeId2 && this.playerData.removeSkin(vidoeId2))
      }
    }), cc._RF.pop()
  }, {
    AShareUIBase: "AShareUIBase",
    Types: "Types"
  }],
  RoleShop: [function (e, t) {
    "use strict";
    cc._RF.push(t, "e90ce72BUhMh55Z47rl3Jzn", "RoleShop");
    var i = e("Types");
    cc.Class({
      extends: e("AShareUIBase"),
      properties: {
        skillNameSp: cc.Sprite,
        skillDetailSp: cc.Sprite,
        skillIconSp: cc.Sprite,
        rolePanel: cc.Node,
        gongengNode: cc.Node,
        videoNode: cc.Node,
        skeSelect: cc.Node
      },
      onEnable: function () {
        AD.chaPing()
      },
      onLoad: function () {
        this._super(), this.leftPos = cc.v2(-256, -182), this.centerPos = cc.v2(0, -218), this.rightPos = cc.v2(256, -182), this.playerData = GlobalMng.playerData, this.playerInfo = GlobalMng.playerData.playerInfo
      },
      show: function () {
        this.isVideo = !1, this.vidoeId = null, this._super(), this.isTruning = !1, this.middleId = this.playerInfo.curRole1SkinID, this.getShowNode()
      },
      getShowNode: function () {
        this.flushSkinId(), this.rolePanel.getChildByName(this.middleId + "").setPosition(this.centerPos), this.rolePanel.getChildByName(this.prevId + "").setPosition(this.leftPos), this.rolePanel.getChildByName(this.nextId + "").setPosition(this.rightPos);
        for (var e = 0; e < this.rolePanel.children.length; e++) {
          var t = this.rolePanel.children[e].name;
          t != this.middleId && t != this.prevId && t != this.nextId && (this.rolePanel.children[e].x = 5e3)
        }
      },
      flushSkinId: function () {
        this.prevId2 = (this.middleId - 3 + 8) % 8 + 1, this.prevId = (this.middleId - 2 + 8) % 8 + 1, this.nextId = (this.middleId + 0) % 8 + 1, this.nextId2 = (this.middleId + 1) % 8 + 1, this.flushShuXing(), this.flushButton()
      },
      flushShuXing: function () {
        GlobalMng.sceneMng.setSpriteFrameByBundle("res/actor/skill/\u6280\u80fd\u56fe\u7247/" + i.ActorSkillData[this.middleId].skillBg, this.skillIconSp), GlobalMng.sceneMng.setSpriteFrameByBundle("res/actor/\u4eba\u7269\u540d\u5b57/" + i.ActorSkillData[this.middleId].name, this.skillNameSp), GlobalMng.sceneMng.setSpriteFrameByBundle("res/actor/skill/\u6280\u80fd\u4ecb\u7ecd/" + i.ActorSkillData[this.middleId].skillBg, this.skillDetailSp)
      },
      flushButton: function () {
        this.gongengNode.getChildByName("goldNode").active = !1, this.gongengNode.getChildByName("\u4f7f\u7528").active = !1, this.playerData.hasSkinById(this.middleId) ? (this.videoNode.active = !1, this.gongengNode.getChildByName("\u4f7f\u7528").active = !0) : (this.gongengNode.getChildByName("goldNode").active = !0, this.videoNode.active = !0, this.gongengNode.getChildByName("goldNode").getChildByName("labGold").getComponent(cc.Label).string = i.ActorSkillData[this.middleId].money)
      },
      btnNext: function () {
        var e = this;
        this.isTruning || (this.isTruning = !0, cc.tween(this.rolePanel.getChildByName(this.middleId + "")).to(.25, {
          position: this.leftPos
        }, {
          easing: "cubicInOut"
        }).start(), cc.tween(this.rolePanel.getChildByName(this.prevId + "")).to(.25, {
          position: cc.v2(this.leftPos.x - 400, this.leftPos.y)
        }, {
          easing: "cubicInOut"
        }).start(), cc.tween(this.rolePanel.getChildByName(this.nextId + "")).to(.25, {
          position: this.centerPos
        }, {
          easing: "cubicInOut"
        }).start(), cc.tween(this.rolePanel.getChildByName(this.nextId2 + "")).set({
          position: cc.v2(this.rightPos.x + 400, this.rightPos.y)
        }).to(.25, {
          position: this.rightPos
        }, {
          easing: "cubicInOut"
        }).call(function () {
          e.isTruning = !1
        }).start(), this.middleId++, this.middleId = this.middleId > 8 ? 1 : this.middleId, this.flushSkinId())
      },
      btnPrev: function () {
        var e = this;
        this.isTruning || (this.isTruning = !0, cc.tween(this.rolePanel.getChildByName(this.middleId + "")).to(.25, {
          position: this.rightPos
        }, {
          easing: "cubicInOut"
        }).start(), cc.tween(this.rolePanel.getChildByName(this.nextId + "")).to(.25, {
          position: cc.v2(this.rightPos.x + 400, this.rightPos.y)
        }, {
          easing: "cubicInOut"
        }).start(), cc.tween(this.rolePanel.getChildByName(this.prevId + "")).to(.25, {
          position: this.centerPos
        }, {
          easing: "cubicInOut"
        }).start(), cc.tween(this.rolePanel.getChildByName(this.prevId2 + "")).set({
          position: cc.v2(this.leftPos.x - 400, this.leftPos.y)
        }).to(.25, {
          position: this.leftPos
        }, {
          easing: "cubicInOut"
        }).call(function () {
          e.isTruning = !1
        }).start(), this.playerData, this.middleId--, this.middleId = this.middleId <= 0 ? 8 : this.middleId, this.flushSkinId())
      },
      videoSuccess: function () {
        this.isVideo = !0, this.vidoeId = this.middleId, this.playerData.addSkin(this.middleId, 1), this.flushSkinId()
      },
      btnGongNeng: function () {
        var e = this.gongengNode.getChildByName("goldNode").active,
          t = this.gongengNode.getChildByName("\u4f7f\u7528").active;
        if (e) {
          var n = i.ActorSkillData[this.middleId].money;
          this.playerInfo.gold >= n ? (GlobalMng.eventOne.dispatchEvent("UpdateGold", -n, !0, !0), this.playerData.addSkin(this.middleId, 1), this.flushSkinId()) : this.btnGift()
        } else t && (this.playerData.useSkin(this.middleId, 1), this.inGame())
      },
      btnGift: function () {
        GlobalMng.uiMng.showShareDG("ui/panel/GiftPack", cc.find("Canvas").getComponent("Main").UIPanel)
      },
      inGame: function () {
        var e = this;
        GlobalMng.uiMng.showSharedMask(), this.skeSelect.active = !0, this.rolePanel.getChildByName(this.middleId + "").getComponent(sp.Skeleton).setAnimation(0, "\u9009\u4eba1", !0), cc.tween(this.rolePanel.getChildByName(this.middleId + "")).to(2, {
          scale: 0,
          position: cc.v2(0, 235)
        }, {
          easing: "quadIn"
        }).call(function () {
          e.clear(), GlobalMng.uiMng.hideSharedMask(), e.closeDirectlyShare(), GlobalMng.uiMng.loadNextGameScene("game")
        }).start()
      },
      clear: function () {
        this.rolePanel.getChildByName(this.middleId + "").getComponent(sp.Skeleton).setAnimation(0, "\u5f85\u673a", !0), this.skeSelect.active = !1, this.rolePanel.getChildByName(this.middleId + "").scale = 3
      },
      hideSuccess: function () {
        this.isVideo && this.vidoeId && this.playerData.removeSkin(this.vidoeId)
      }
    }), cc._RF.pop()
  }, {
    AShareUIBase: "AShareUIBase",
    Types: "Types"
  }],
  RxConfig: [function (e, t, i) {
    "use strict";
    cc._RF.push(t, "80ed0vMuhdLg6evFQzqNHBI", "RxConfig");
    var n, a = this && this.__extends || (n = function (e, t) {
        return (n = Object.setPrototypeOf || {
            __proto__: []
          }
          instanceof Array && function (e, t) {
            e.__proto__ = t
          } || function (e, t) {
            for (var i in t) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i])
          })(e, t)
      }, function (e, t) {
        function i() {
          this.constructor = e
        }
        n(e, t), e.prototype = null === t ? Object.create(t) : (i.prototype = t.prototype, new i)
      }),
      o = this && this.__decorate || function (e, t, i, n) {
        var a, o = arguments.length,
          s = o < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, i) : n;
        if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(e, t, i, n);
        else
          for (var r = e.length - 1; r >= 0; r--)(a = e[r]) && (s = (o < 3 ? a(s) : o > 3 ? a(t, i, s) : a(t, i)) || s);
        return o > 3 && s && Object.defineProperty(t, i, s), s
      };
    Object.defineProperty(i, "__esModule", {
      value: !0
    });
    var s = cc._decorator,
      r = s.ccclass,
      c = (s.property, function (e) {
        function t() {
          var t = null !== e && e.apply(this, arguments) || this;
          return t.event_data = {
            isUpdate: !1
          }, t.kwai_data = {
            addShortcut: "addShortcut",
            saveToFavorites: "saveToFavorites"
          }, t.kwai_info = {
            reward: "ad_9108d52f46fa7f03",
            insert: "ad_09d7516157a5f627",
            banner: "ad_dc5a2bfc7b3d86d1"
          }, t.platform_info = {
            tt: "tt",
            wx: "wx",
            nav: "nav",
            xiaomi: "xiaomi",
            vivoGame: "vivoGame",
            kwai: "kwai",
            h5233: "h5233",
            apph5: "apph5",
            zuiyou: "zuiyou",
            DEBUG: !1,
            ks: "ks",
            default: "default",
            platform: "wx"
          }, t.tt_info = {
            gamename: "\u5168\u6c11\u7bad\u5934\u6d88",
            shareTitle: "#\u5168\u6c11\u7bad\u5934\u6d88#\u76ca\u667a\u8fc7\u5173",
            appId: "ttf16087dd6e5703c102",
            bannerId: "3rmcaidljekg41lene",
            rewardId: "486nta08i4m4t4fqa4",
            insertId: "n5fab0jlen11pvwja3",
            actionTimes: 1,
            TTRewardType: "rewardVideo",
            TTInsertType: "interstitialFull",
            isgetData: !1,
            templateId: ["", "", "", ""],
            videoTopics: ["#\u5168\u6c11\u7bad\u5934\u6d88#\u76ca\u667a\u8fc7\u5173"],
            appSecret: "d6a8a66cb0b8ca2f8ae09bdc7a9a273aa8175d30",
            BaseUrl: "timecapsule.rxwlgame.top",
            BASE_VERSION: "v16",
            ChannelID: "qmjtx_tt",
            video_recorder: null,
            videoStartTime: null,
            videoPath: null,
            recorderTime: 60,
            videoIsExist: 0,
            recordIng: !1,
            recordEnd: !1,
            rewardVideoAd: null,
            insertAd: null,
            insertAdTime: 0,
            insertStartTime: 0,
            insertIntervalTime: 6e4
          }, t.ks_info = {
            reward: "2300020585_01",
            insert: "2300020585_02",
            banner: "2300020585_03",
            query: "\u5feb\u624b\u5c0f\u6e38\u620f\u641c\u7d22#\u6d88\u6c34\u679c\u4e50\u56ed,\u60f3\u8981\u521b\u5efa\u81ea\u5df1\u7684\u6c34\u679c\u82b1\u56ed\u4e48,\u5c31\u6765\u6d88\u6c34\u679c\u4e50\u56ed\u5427"
          }, t.wx_info = {
            gamename: "\u75af\u72c2\u5012\u6c34\u95ef\u5173",
            appId: "wx15362e02611e6212",
            bannerId: "adunit-52101a25ec33549f",
            insertId: "adunit-093c4f8ac60a941b",
            rewardId: "adunit-af2fdf69a952c057",
            iconId: "adunit-c4cb3283203d3526",
            isgetData: !1,
            iconStyle: {
              left: 10,
              top: 80,
              width: 375,
              isShow: !0,
              isLeft: 1,
              fixed: !0
            },
            bannerStyle: {
              left: 10,
              top: 10,
              width: 375,
              isShow: !0,
              isTop: 1,
              fixed: !0
            },
            activeTimes: 0,
            actionTimes: 5,
            showAd: !0,
            trueAd: !0,
            showMoreGame: !1,
            insertIntervalTime: 100,
            shareTitle: "\u5feb\u6765\u5e2e\u5e2e\u6211\u5427,\u8fd9\u4e00\u5173\u8fc7\u4e0d\u53bb\u4e86",
            videoTopics: [{
              title: "\u5feb\u6765\u5e2e\u5e2e\u6211\u5427,\u8fd9\u4e00\u5173\u8fc7\u4e0d\u53bb\u4e86",
              imageUrl: null
            }, {
              title: "\u6211\u667a\u5546\u8d85\u7ea7\u725b\uff0c\u4e00\u4e0b\u5b50\u73a9\u901a\u5173\u4e86",
              imageUrl: null
            }]
          }, t.lm_info = {
            appid: "2882303761520507828",
            AppSecret: "XDexaohm4o10GEZ6rvDKqQ==",
            reward: "132c75a863261e06675eebf7d7970cb6",
            rewardApp: "7d6800a50c9a8a60c609106ce4c5f360",
            full: "2d4872ed6062e145cf0569be1950060b",
            insert: "fd578589e627e1d95b419151ac410d59",
            banner: "a9f696a1020149a6f23950f7a51862f0",
            isTop: !1,
            iconTOP: 0,
            iconLeft: 0,
            splash: "4f5518f15a7a13d2d788685fa5c25ccf",
            icon: "467618bb93f39b2cea0ea1609796aca0",
            PrivateAgree: "PrivateAgree1"
          }, t.vivo_info = {
            gamename: "\u5168\u6c11\u89e3\u538b\u76d2",
            shareTitle: "#\u6d88\u6c34\u679c\u4e50\u56ed#\u76ca\u667a\u8fc7\u5173",
            appId: "qmjyh",
            bannerId: "f77bd1ef523642fd9db64a5bd6372fc8",
            rewardId: "909f7274f5c04f40956b1fb4f9f181cd",
            insertId: "0c3eceb0a9234d0bb74276834465c6e5",
            iconId: "6f1308bc7ea643808a40573857016f4e",
            bannerBox: "bee4d80e879c4e1fb01da2ac7e105f88",
            actionTimes: 1,
            isgetData: !1,
            turnBanner: !1,
            showInsert: !0,
            bannerData: {
              showBanner: !0,
              topData: 50,
              leftData: 50,
              isTop: 0,
              isLeft: 1
            },
            IconData: {
              showIcon: !0,
              topData: 50,
              leftData: 50,
              isTop: 0,
              isLeft: 1
            },
            initAd: !1,
            showAd: !0,
            insertStartTime: 0,
            insertIntervalTime: 20
          }, t
        }
        var i;
        return a(t, e), i = t, t.getInstance = function () {
          return i.instance || (i.instance = new i), i.instance
        }, t.names = [20, 40, 60, 80, 100, 150, 200], i = o([r], t)
      }(cc.Component));
    i.default = c, cc._RF.pop()
  }, {}],
  RxManager: [function (e, t, i) {
    game3.getInstance().GameAction1(e, t, i);
  }, {
    "./MyLog": "MyLog"
  }],
  RxUtls: [function (e, t, i) {
    "use strict";
    cc._RF.push(t, "6b124Gy8yJNx40p5+sD1q4E", "RxUtls"), Object.defineProperty(i, "__esModule", {
      value: !0
    });
    var n = e("./MyLog"),
      a = e("./RxConfig"),
      o = function () {
        function e() {}
        return e.saveStartTime = function () {
          var t = e.getCurrentTime();
          this.save(e.Mei_Ri_StartTimeKey, t)
        }, e.saveLingquTime = function (t) {
          if (void 0 === t && (t = !1), n.default.d("===saveLingquTime======"), "0" != this.get(this.canSaveTime) && null != this.get(this.canSaveTime) || (this.save(this.canSaveTime, "1"), this.save(e.Mei_Ri_LingquTime, 0)), t) {
            var i = this.get(e.Mei_Ri_LingquTime);
            this.save(e.Mei_Ri_LingquTime, parseInt(i) + 1)
          }
        }, e.testResume = function () {
          this.save(e.CollectKey, 0), this.save(e.AddDeskKey, 0), e.getCurrentTime(), this.save(e.Mei_Ri_StartTimeKey, "2024-06-24")
        }, e.getFormetCurrentTime = function () {
          var t = e.getCurrentTime();
          return new Date(t)
        }, e.getFormetStartTime = function () {
          var t = e.get(e.Mei_Ri_StartTimeKey);
          return n.default.d("====Mei_Ri_StartTimeKey=====" + t), null == t && (this.saveStartTime(), t = e.getCurrentTime()), new Date(t)
        }, e.saveTime = function (e, t) {
          null != this.get(this.canSaveTime) && "0" != this.get(this.canSaveTime) || (n.default.d("====save===="), this.save(e, t), this.save(this.canSaveTime, "1"), this.save(this.MeiRi_StatusKey, JSON.stringify([0, 0, 0, 0, 0, 0, 0])))
        }, e.changeMeiRiStatus = function (e, t) {
          var i = this.get(this.MeiRi_StatusKey);
          i = null == i ? [0, 0, 0, 0, 0, 0, 0] : JSON.parse(this.get(this.MeiRi_StatusKey)), n.default.d("===changeMeiRiStatus==index===" + e), n.default.d("===changeMeiRiStatus==status===" + t), i[e - 1] = t, console.log("====meiriStatus=====", i), this.save(this.MeiRi_StatusKey, JSON.stringify(i)), i = this.get(this.MeiRi_StatusKey), console.log("====changeMeiRiStatus=====", i)
        }, e.save = function (e, t) {
          n.default.d("====save=========" + e + "====" + t), cc.sys.localStorage.setItem(e, t)
        }, e.get = function (e) {
          return cc.sys.localStorage.getItem(e)
        }, e.getCurrentTime = function (e) {
          void 0 === e && (e = !0);
          var t = new Date,
            i = t.getFullYear(),
            n = t.getMonth() + 1,
            a = t.getDate(),
            o = t.getHours(),
            s = t.getMinutes(),
            r = t.getSeconds(),
            c = n.toString().padStart(2, "0"),
            l = a.toString().padStart(2, "0"),
            h = o.toString().padStart(2, "0"),
            u = s.toString().padStart(2, "0"),
            d = r.toString().padStart(2, "0");
          return e ? i + "-" + c + "-" + l + " " + h + ":" + u + ":" + d : i + "-" + c + "-" + l
        }, e.getTomorrowDate = function () {
          var e = new Date;
          return e.setDate(e.getDate() + 1), e
        }, e.isDayBefore = function (e, t, i) {
          void 0 === i && (i = 1);
          var a = 864e5 * i;
          return n.default.d("====isDayBefore====date2==" + t.getTime()), n.default.d("====isDayBefore====date1==" + e.getTime()), Math.abs(t.getTime() - e.getTime()) === a
        }, e.checkTime = function () {
          return e.get(e.Mei_Ri_StartTimeKey) == e.getCurrentTime()
        }, e.checkIsShow = function (t) {
          if (t == this.Mei_Ri_LingquTime) return parseInt(e.get(e.Mei_Ri_LingquTime)) >= 7;
          if (a.default.getInstance().platform_info.platform == a.default.getInstance().platform_info.nav || a.default.getInstance().platform_info.platform == a.default.getInstance().platform_info.default) return !0;
          var i = this.get(t);
          return n.default.d("======type===" + t), n.default.d("======data===" + i), null != i && ("1" == i || 1 == i)
        }, e.canSaveTime = "canSaveTime", e.MeiRi_StatusKey = "MeiRi_StatusKey", e.Mei_Ri_LingquTime = "Mei_Ri_LingquTime", e.Mei_Ri_StartTimeKey = "Mei_Ri_StartTimeKey", e.CollectKey = "CollectKey", e.AddDeskKey = "AddDeskKey", e.RukouKey = "RukouKey", e.DianZanKey = "DianZanKey", e
      }();
    i.default = o, cc._RF.pop()
  }, {
    "./MyLog": "MyLog",
    "./RxConfig": "RxConfig"
  }],
  SaviorModel: [function (e, t) {
    "use strict";
    cc._RF.push(t, "98ef7jzmL9H5oQF7IxC9iuZ", "SaviorModel");
    var i = e("Types");
    cc.Class({
      extends: e("GameModeBase"),
      properties: {},
      onInitGameModel: function () {
        this._super()
      },
      onModelStart: function () {
        var e = this;
        this.game.joystickNode.getChildByName("Video").getChildByName("btn\u6551\u4e16\u4e3b").active = !0, this.scheduleOnce(function () {
          var t;
          e.game.joystickNode.getChildByName("Video").getChildByName("btn\u6551\u4e16\u4e3b").active = !1, e.countDownEnd = !0;
          var i = 0;
          if (1 != e.curGameRound && 0 == e.game.isVideoSpecial && _.isLucky(80)) {
            var n = [e.game.humanArray[e.game.humanArray.length - 1], e.game.humanArray[0]];
            e.game.humanArray[0] = n[0], e.game.humanArray[e.game.humanArray.length - 1] = n[1]
          }
          e.game.humanArray[0].getComponent("Human").setSavior(), t = e.game.humanArray[0].getComponent("Human").getNickName();
          for (var a = 0; a < 12; a++) {
            var o = e.game.humanArray[a].getComponent("Human");
            if (0 == o.isSavior && (o.toZombie(!0), i++), i >= 4) break
          }
          GlobalMng.sceneMng.createUIByBundle("gameTip/\u88ab\u9009\u4e3a\u6551\u4e16\u4e3b", e.game.gameTipRoot, function (e) {
            e.getChildByName("labName").getComponent(cc.Label).string = t
          })
        }, this.gameCountZombie), this.scheduleOnce(function () {
          GlobalMng.sceneMng.createUIByBundle("gameTip/\u88ab\u6551\u4e16\u4e3b\u51fb\u6740\u4e0d\u53ef\u590d\u6d3b", e.game.gameTipRoot)
        }, this.gameCountZombie + 2)
      },
      onGetZombieData: function (e) {
        if (e) {
          var t = this.getZomConfigByEle("Name", "\u8d85\u4f53\u50f5\u5c38");
          return [i.ZombieAttackWay.Once, !0, t]
        }
        var n = this.randSkinId.length > 0 ? this.randSkinId.pop() : 0;
        0 != n && _.isNumber(n) || (n = _.random(3, 6));
        var a = GlobalMng.jsonMng.queryConfig("MonsterDataTable", function (e) {
          return e.ID === n
        })[0];
        return [i.ZombieAttackWay.Once, !0, a]
      },
      onCheckZombieIsWin: function () {
        this.game.gameIsOver() || 0 != this.game.getHumanNum() || (this.zombieWinRound++, this.modelRounOver(2))
      },
      onCheckHumanIsWin: function (e) {
        void 0 === e && (e = !1), (0 == this.game.getZombieNum() && 0 == this.game.waitReviveZombie.length || e) && (this.humanWinRound++, this.modelRounOver(1))
      }
    }), cc._RF.pop()
  }, {
    GameModeBase: "GameModeBase",
    Types: "Types"
  }],
  ScaleForevery: [function (e, t) {
    "use strict";
    cc._RF.push(t, "f490eKPQHpCkrMQ32DB17UY", "ScaleForevery"), cc.Class({
      extends: cc.Component,
      properties: {},
      start: function () {
        cc.tween(this.node).repeatForever(cc.tween().to(.5, {
          scale: 1.65
        }, {
          easing: "smooth"
        }).to(.5, {
          scale: 1.35
        }, {
          easing: "smooth"
        })).start()
      }
    }), cc._RF.pop()
  }, {}],
  SceneMng: [function (e, t) {
    "use strict";
    cc._RF.push(t, "9718dgJam5KDqOm9tCoTXQm", "SceneMng"), e("Constants");
    var i = e("Configuration"),
      n = e("PlayerData");
    e("ResourceMng");
    var a = e("JsonConfigMng"),
      o = (e("../RxManager/MyLog").default, new(cc.Class({
        init: function () {
          var e = this;
          cc.find("Canvas/GameLoading").getComponent("GameLoading").init(8.8), this.preloadAllResources(function () {
            GlobalMng.audioMng.setBundel(), e.createInfo(), console.log("All resources have been loaded! Entering the Scene!"), cc.find("Canvas/GameLoading").getComponent("GameLoading").setLoadCompelect(50, function () {
              cc.director.loadScene("main")
            })
          })
        },
        createInfo: function () {
          if ("" == i.getUserId()) {
            var e = i.generateGuestAccount();
            i.setUserId(e), n.createPlayerInfo()
          } else GlobalMng.isTestNewStorage && n.clear(), n.loadFromCache();
          n.openSecondSchdule()
        },
        preloadAllResources: function (e) {
          var t = this,
            i = ["GunsDataTable", "PeopleDataTable", "MonsterDataTable", "SigninData", "PlayerLvTable", "RankTable", "PlayerNameTable", "TiaoZhanMonsterDataTable"],
            n = ["ui/global/Loading", "ui/global/ModalMask", "ui/global/GameLoading", "ui/global/Tip", "ui/layer/Rank", "ui/layer/VSLayer", "ui/layer/\u6e38\u620f\u7ed3\u7b97", "ui/layer/\u8fc7\u573a", "ui/layer/Signin", "ui/panel/Shop", "ui/panel/House", "ui/panel/GiftPack", "ui/panel/RankReward", "ui/panel/\u65b0\u624bPack", "ui/panel/WeaponPack", "ui/panel/SecondPanel", "ui/panel/RevivePanel", "ui/panel/Introduction", "levels/map/map1", "levels/map/map2", "levels/map/map3", "levels/map/map4", "levels/map/\u6311\u6218\u5730\u56fe", "actor/human/\u4eba\u7c7b", "actor/zombie/\u611f\u67d3\u8005", "actor/zombie/\u611f\u67d3\u8005\u65e0\u78b0\u649e"];
          new Promise(function (e, t) {
            a.loadJSONs(i, function () {
              e()
            }, t)
          }).then(function () {
            return console.log("JSONs loaded"), t.loadAllPrefabs(n)
          }).then(function () {
            return console.log("Prefabs loaded"), t.preloadScene("main")
          }).then(function () {
            return t.preloadScene("game")
          }).then(function () {
            console.log("All resources loaded!"), e && e()
          }).catch(function (e) {
            console.error("\u8d44\u6e90\u52a0\u8f7d\u5931\u8d25:", e)
          })
        },
        preloadScene: function (e) {
          return new Promise(function (t, i) {
            cc.director.preloadScene(e, function (e) {
              e ? i(e) : t()
            })
          })
        },
        createLoadPrefabTasks: function (e) {
          var t = this;
          return e.map(function (e) {
            return t.loadPrefab(e)
          })
        },
        loadPrefab: function (e) {
          var t = this;
          return new Promise(function (i, n) {
            t.createUIByBundle(e, null, function (t) {
              GlobalMng.uiMng.dictSharedPanel[e] = t, i(t)
            }, n)
          })
        },
        loadAllPrefabs: function (e, t) {
          return 0 === e.length ? (t && t(), Promise.resolve()) : Promise.all(this.createLoadPrefabTasks(e)).then(function () {
            return t && t()
          }).catch(function (e) {
            throw console.error("\u52a0\u8f7dprefab\u9519\u8bef:", e), e
          })
        },
        createUIByBundle: function (e, t, i, n) {
          cc.loader.loadRes("prefabs/" + e, cc.Prefab, function (e, a) {
            if (e) n && n(e);
            else {
              var o = cc.instantiate(a);
              t && cc.isValid(t) && (t.addChild(o), o.setPosition(0, 0)), i && i(o)
            }
          })
        },
        setSpriteFrameByBundle: function (e, t, i) {
          cc.loader.loadRes(e, cc.SpriteFrame, function (e, n) {
            e ? (console.error(e), i && i(e)) : (t.spriteFrame = n, i && i())
          })
        },
        setSkeByBundle: function (e, t, i, n, a, o) {
          i = i || "animation", n = n || !1, cc.loader.loadRes(e, sp.SkeletonData, function (e, s) {
            e ? console.error("\u9aa8\u9abc\u52a8\u753b\u52a0\u8f7d\u5931\u8d25:", e) : (t && (t.skeletonData = s, t.clearTracks(), t.setToSetupPose(), t.setAnimation(0, i, n), a && (t.setSkin(a), t.setSlotsToSetupPose())), o && o())
          })
        }
      })));
    t.exports = o, cc._RF.pop()
  }, {
    "../RxManager/MyLog": "MyLog",
    Configuration: "Configuration",
    Constants: "Constants",
    JsonConfigMng: "JsonConfigMng",
    PlayerData: "PlayerData",
    ResourceMng: "ResourceMng"
  }],
  ScoreFeedMng: [function (e, t) {
    "use strict";
    cc._RF.push(t, "6f62ebFAtJHU5XClGTR7v78", "ScoreFeedMng"), cc.Class({
      extends: cc.Component,
      properties: {
        killFeedPrefab: {
          default: null,
          type: cc.Prefab,
          tooltip: "\u51fb\u6740\u63d0\u793a\u9884\u5236\u4f53\uff08\u9700\u5305\u542b Label \u548c ParticleSystem\uff09"
        },
        maxItems: {
          default: 6,
          type: cc.Integer,
          tooltip: "\u6700\u5927\u663e\u793a\u63d0\u793a\u6570\u91cf"
        },
        topY: {
          default: 80,
          type: cc.Float,
          tooltip: "\u6700\u4e0a\u65b9\u63d0\u793a\u7684Y\u5750\u6807"
        },
        spacingY: {
          default: -60,
          type: cc.Float,
          tooltip: "\u63d0\u793a\u95f4Y\u8f74\u95f4\u9694\uff08\u8d1f\u503c\u5411\u4e0b\uff09"
        },
        appearDuration: {
          default: .2,
          type: cc.Float,
          tooltip: "\u51fa\u73b0\u52a8\u753b\u65f6\u957f"
        },
        stayDuration: {
          default: 1,
          type: cc.Float,
          tooltip: "\u505c\u7559\u65f6\u957f"
        },
        fadeDuration: {
          default: .3,
          type: cc.Float,
          tooltip: "\u6d88\u5931\u52a8\u753b\u65f6\u957f"
        },
        randomOffset: {
          default: .2,
          type: cc.Float,
          tooltip: "\u52a8\u753b\u65f6\u957f\u968f\u673a\u504f\u79fb\u91cf"
        },
        bounceScale: {
          default: 1.3,
          type: cc.Float,
          tooltip: "\u51fa\u73b0\u65f6\u653e\u5927\u500d\u6570"
        },
        fadeOutY: {
          default: 50,
          type: cc.Float,
          tooltip: "\u6d88\u5931\u65f6\u4e0a\u79fb\u8ddd\u79bb"
        },
        shakeAmplitude: {
          default: 5,
          type: cc.Float,
          tooltip: "\u6296\u52a8\u5e45\u5ea6"
        }
      },
      onLoad: function () {
        this.killFeedItems = [], this.pendingItems = []
      },
      resetAll: function () {
        this.killFeedItems.forEach(function (e) {
          e.tween && e.tween.stop(), null == e || e.destroy()
        }), this.killFeedItems = [], this.pendingItems = [], this.node.removeAllChildren()
      },
      addKillFeed: function () {
        var e = cc.instantiate(this.killFeedPrefab);
        e.active = !0, this.killFeedItems.length >= this.maxItems ? (this.pendingItems.length < 5 && this.pendingItems.push(e), this.fastClearOldest()) : this.createNewItem(e)
      },
      createNewItem: function (e) {
        var t = this;
        e.parent = this.node;
        var i = this.killFeedItems.length,
          n = i > 0 ? this.killFeedItems[i - 1].y + this.spacingY : this.topY;
        e.setPosition(0, n + 50), e.scale = .5, e.opacity = 0, e.angle = 10 * (Math.random() - .5);
        var a = this.appearDuration * (1 + (Math.random() - .5) * this.randomOffset),
          o = this.stayDuration * (1 + (Math.random() - .5) * this.randomOffset),
          s = this.fadeDuration * (1 + (Math.random() - .5) * this.randomOffset);
        this.killFeedItems.push(e), e.tween = cc.tween(e).to(a, {
          scale: this.bounceScale,
          opacity: 255,
          position: cc.v2((Math.random() - .5) * this.shakeAmplitude, n),
          angle: 0
        }, {
          easing: "elasticOut"
        }).to(.15, {
          scale: 1
        }, {
          easing: "sineOut"
        }).parallel(cc.tween().to(.2, {
          scale: 1.1
        }).to(.3, {
          scale: 1
        }), cc.tween().to(o, {
          position: cc.v2((Math.random() - .5) * this.shakeAmplitude, n)
        })).to(s, {
          scale: .8,
          opacity: 0,
          position: cc.v2(0, n + this.fadeOutY),
          angle: 5 * (Math.random() - .5)
        }, {
          easing: "sineIn"
        }).call(function () {
          cc.isValid(e) && t.removeItem(e)
        }).start()
      },
      fastClearOldest: function () {
        var e = this;
        if (this.killFeedItems.length) {
          var t = this.killFeedItems[0];
          cc.tween(t).to(.15, {
            scale: .5,
            opacity: 0,
            angle: 10 * (Math.random() - .5)
          }, {
            easing: "sineOut"
          }).call(function () {
            cc.isValid(t) && e.removeItem(t)
          }).start()
        } else this.processPendingItems()
      },
      removeItem: function (e) {
        var t = this,
          i = this.killFeedItems.indexOf(e); - 1 !== i && (this.killFeedItems.splice(i, 1), cc.isValid(e) && (null == e || e.destroy()), this.killFeedItems.forEach(function (e, i) {
          if (cc.isValid(e)) {
            var n = t.topY + i * t.spacingY;
            e.tween && e.tween.stop(), e.tween = cc.tween(e).to(.2, {
              position: cc.v2(0, n)
            }, {
              easing: "sineOut"
            }).call(function () {
              cc.isValid(e) && t.removeItem(e)
            }).start()
          }
        }), this.processPendingItems())
      },
      processPendingItems: function () {
        for (; this.pendingItems.length > 0 && this.killFeedItems.length < this.maxItems;) {
          var e = this.pendingItems.shift();
          cc.isValid(e) && this.createNewItem(e)
        }
      }
    }), cc._RF.pop()
  }, {}],
  ScoreUI: [function (e, t) {
    "use strict";
    cc._RF.push(t, "8d2f3UwLjJOTJVRn1/UsmeJ", "ScoreUI"), e("Types"), cc.Class({
      extends: cc.Component,
      properties: {
        labCurRound: cc.Label,
        labHumanRound: cc.Label,
        labZombieRound: cc.Label,
        labGameTime: cc.Label,
        humanPoint: cc.Node,
        zombiePoint: cc.Node
      },
      onLoad: function () {
        this.game = cc.find("Canvas").getComponent("Game"), this.resetGameTime()
      },
      resetGameTime: function () {
        this.gameTime = 120, this.gameTimeDT = 0, this.game01DT = 0, this.airDropTime1 = 90, this.airDropTime2 = 60, this.setGameLabel(this.gameTime), this.setHumanLabel(this.game.getHumanNum()), this.setZombieLabel(this.game.getZombieNum())
      },
      setRoundLabel: function (e) {
        this.labCurRound.string = e
      },
      setHumanLabel: function (e) {
        for (var t = parseInt(e) || 0, i = 0; i < this.humanPoint.children.length; i++) this.humanPoint.children[i].active = i < t
      },
      setZombieLabel: function (e) {
        for (var t = parseInt(e) || 0, i = 0; i < this.zombiePoint.children.length; i++) this.zombiePoint.children[i].active = i < t
      },
      setGameLabel: function (e) {
        this.labGameTime.string = _.formatTimeMS(e), e <= 0 && this.game.gameModeBase.onCheckHumanIsWin(!0), this.game.countNode && (this.game.gameCount--, this.game.countNode.getChildByName("labCout").getComponent(cc.Label).string = this.game.gameCount, this.game.gameCount <= 0 && (this.game.countNode.getComponent("GameCommonTip").destroyTip(), this.game.countNode = null)), 30 != e && 10 != e || GlobalMng.sceneMng.createUIByBundle("gameTip/" + e + "\u79d2\u7ed3\u675f", this.game.gameTipRoot, function () {})
      },
      setHumanWinRoundLabel: function (e) {
        this.labHumanRound.string = e
      },
      setZombieWinRoundLabel: function (e) {
        this.labZombieRound.string = e
      },
      flushActor: function () {
        this.setHumanLabel(this.game.getHumanNum()), this.setZombieLabel(this.game.getZombieNum())
      },
      update: function (e) {
        0 != this.game.gameIsPlayIng() && (this.gameTimeDT += e, this.gameTimeDT >= 1 && (this.gameTimeDT = 0, this.gameTime--, this.gameTime == this.airDropTime1 && this.game.drop(), this.setGameLabel(this.gameTime)), this.game01DT += e, this.game01DT >= .2 && (this.game01DT = 0, this.flushActor()))
      }
    }), cc._RF.pop()
  }, {
    Types: "Types"
  }],
  SecondPanel: [function (e, t) {
    "use strict";
    cc._RF.push(t, "ba4ca3wG7pE34ONuJg5oTu0", "SecondPanel"), cc.Class({
      extends: e("AShareUIBase"),
      properties: {},
      onLoad: function () {
        this._super()
      },
      show: function () {
        this._super()
      },
      btnReturn: function () {
        this.closeDirectlyShare(), cc.audioEngine.stopAllEffects(), cc.director.loadScene("main")
      }
    }), cc._RF.pop()
  }, {
    AShareUIBase: "AShareUIBase"
  }],
  SelectZombie: [function (e, t) {
    "use strict";
    cc._RF.push(t, "013f0RAOD5E/7AW4d4boYIn", "SelectZombie");
    var i = e("PlayerData");
    cc.Class({
      extends: cc.Component,
      properties: {
        btnRoot: cc.Node,
        svNode: cc.Node,
        maskSp: cc.Sprite,
        ske: sp.Skeleton
      },
      onLoad: function () {
        var e = this;
        this.game = cc.find("Canvas").getComponent("Game");
        for (var t = this.btnRoot.children, n = 0; n < t.length; n++) {
          var a = t[n];
          i.hasGoodsById("MonsterDataTable", a.name) ? a.getChildByName("adIcon").active = !1 : a.getChildByName("adIcon").active = !0
        }
        this.ske.setCompleteListener(null), this.ske.setAnimation(0, "animation", !1), GlobalMng.audioMng.playSoundRes("\u7537\u53d7\u4f241"), this.game.gameIsPlayIng() && this.ske.setCompleteListener(function (t) {
          "animation" === t.animation.name && cc.tween(e.svNode).set({
            scaleX: 0
          }).delay(.5).call(function () {
            e.ske.node.active = !1
          }).to(.3, {
            scaleX: 1
          }).start()
        })
      },
      btnSelect: function (e, t) {
        var i = this,
          n = function () {
            var e, n = i.game.gameModeBase.getZomConfigByEle("Name", t);
            i.game.selfPlayer.changeToZombie(!1, n), null == (e = i.node) || e.destroy()
          };
        e.currentTarget.getChildByName("adIcon").active ? AD.showAD(function () {
          n()
        }, this) : n()
      }
    }), cc._RF.pop()
  }, {
    PlayerData: "PlayerData"
  }],
  Share: [function (e, t, i) {
    "use strict";
    cc._RF.push(t, "d800fyNPgBHNpGvMR01RSKu", "Share");
    var n, a = this && this.__extends || (n = function (e, t) {
        return (n = Object.setPrototypeOf || {
            __proto__: []
          }
          instanceof Array && function (e, t) {
            e.__proto__ = t
          } || function (e, t) {
            for (var i in t) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i])
          })(e, t)
      }, function (e, t) {
        function i() {
          this.constructor = e
        }
        n(e, t), e.prototype = null === t ? Object.create(t) : (i.prototype = t.prototype, new i)
      }),
      o = this && this.__decorate || function (e, t, i, n) {
        var a, o = arguments.length,
          s = o < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, i) : n;
        if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(e, t, i, n);
        else
          for (var r = e.length - 1; r >= 0; r--)(a = e[r]) && (s = (o < 3 ? a(s) : o > 3 ? a(t, i, s) : a(t, i)) || s);
        return o > 3 && s && Object.defineProperty(t, i, s), s
      };
    Object.defineProperty(i, "__esModule", {
      value: !0
    });
    var s = e("../../MyLog"),
      r = e("../../RxManager"),
      c = cc._decorator,
      l = c.ccclass,
      h = (c.property, function (e) {
        function t() {
          return null !== e && e.apply(this, arguments) || this
        }
        return a(t, e), t.prototype.Share = function (e, t) {
          s.default.d("===Share==" + e + "====" + t), r.default.getInstance().share(t)
        }, o([l], t)
      }(cc.Component));
    i.default = h, cc._RF.pop()
  }, {
    "../../MyLog": "MyLog",
    "../../RxManager": "RxManager"
  }],
  Shop: [function (e, t) {
    "use strict";
    cc._RF.push(t, "e6ddaVYSzZL04+bINI4tZC0", "Shop");
    var i = e("PlayerData");
    cc.Class({
      extends: e("AShareUIBase"),
      properties: {
        leftNode: cc.Node,
        middleNode: cc.Node,
        rightNode: cc.Node,
        humanScroll: cc.ScrollView,
        humanListNode: cc.Node,
        humanSimple: cc.Node,
        zombileScroll: cc.ScrollView,
        zombieListNode: cc.Node,
        zombileSimple: cc.Node,
        weaponScroll: cc.ScrollView,
        weaponListNode: cc.Node,
        gunNodeSample: cc.Node,
        filterNode: cc.Node,
        tehuiNode: [cc.Node]
      },
      onEnable: function () {
        AD.hideBanner(), AD.chaPing()
      },
      onLoad: function () {
        this._super(), this.isDataInitialized = !1, this.pendingShowParams = null, this.initProgress = 0, this.leftYsPos = this.leftNode.getPosition(), this.rightYsPos = this.rightNode.getPosition(), this.tehuiYsPoS = [];
        for (var e = 0; e < this.tehuiNode.length; e++) this.tehuiYsPoS.push(this.tehuiNode[e].getPosition());
        GlobalMng.uiMng.showLoading(.2), this.initDataStep()
      },
      initDataStep: function () {
        var e = this;
        switch (this.initProgress) {
          case 0:
            this.initPlayersData(function () {
              e.initProgress = 1, e.scheduleOnce(function () {
                e.initDataStep()
              }, 0)
            });
            break;
          case 1:
            this.initZombiesData(function () {
              e.initProgress = 2, e.scheduleOnce(function () {
                e.initDataStep()
              }, 0)
            });
            break;
          case 2:
            this.initWeaponsData(function () {
              e.initProgress = 3, e.scheduleOnce(function () {
                e.initDataStep()
              }, 0)
            });
            break;
          case 3:
            this.curClickWeapon = i.getWeaponNameById(), this.curClickHuman = i.getSkinNameById(), this.curClickZombie = i.getMonsterSkinNameById(), this.isDataInitialized = !0, this.initProgress = 4, null !== this.pendingShowParams && (console.log(this.pendingShowParams), this.show(this.pendingShowParams), this.pendingShowParams = null), this.scheduleOnce(function () {
              e.weaponListNode.children.forEach(function (e) {
                e.getChildByName("skeGun").getComponent(sp.Skeleton).setAnimation(0, "\u67aa/" + e.name, !1)
              })
            }, .1)
        }
      },
      initPlayersData: function (e) {
        for (var t = this, i = GlobalMng.jsonMng.getConfig("PeopleDataTable"), n = [], a = 0; a < i.length; a++) 0 != i[a].PeopleType && n.push(i[a]);
        this.processBatch(n, 0, 3, function (e) {
          var i = cc.instantiate(t.humanSimple);
          i.parent = t.humanListNode, i.name = e.Name, GlobalMng.setHead("PeopleDataTable", e.Name, i.getChildByName("spHead").getComponent(cc.Sprite))
        }, e)
      },
      initZombiesData: function (e) {
        for (var t = this, i = GlobalMng.jsonMng.getConfig("MonsterDataTable"), n = [], a = 0; a < i.length; a++) 1 != i[a].MonsterType && n.push(i[a]);
        this.processBatch(n, 0, 3, function (e) {
          var i = cc.instantiate(t.zombileSimple);
          i.parent = t.zombieListNode, i.name = e.Name, GlobalMng.setHead("MonsterDataTable", e.Name, i.getChildByName("spHead").getComponent(cc.Sprite))
        }, e)
      },
      initWeaponsData: function (e) {
        for (var t = this, i = GlobalMng.jsonMng.getConfig("GunsDataTable"), n = [], a = 0; a < i.length; a++) i[a].ID < 1032 && n.push(i[a]);
        this.processBatch(n, 0, 4, function (e) {
          var i = cc.instantiate(t.gunNodeSample);
          i.parent = t.weaponListNode, i.x = 0, i.y = 0, i.name = e.Name, i.getChildByName("labName").getComponent(cc.Label).string = e.Name
        }, e)
      },
      processBatch: function (e, t, i, n, a) {
        var o = this;
        if (t >= e.length) a && a();
        else {
          for (var s = Math.min(t + i, e.length), r = t; r < s; r++) n(e[r]);
          s < e.length ? this.scheduleOnce(function () {
            o.processBatch(e, s, i, n, a)
          }, 0) : a && a()
        }
      },
      show: function (e) {
        this.isDataInitialized ? (this.lastName = "", this.showHeadImage(), this.showZombieHeadImage(), this.showWeapon(), this.showSelectType(), this.showLeft(e), this.showTween(), this.scheduleOnce(function () {}, .15)) : this.pendingShowParams = e
      },
      showTween: function () {
        cc.tween(this.leftNode).set({
          position: cc.v2(this.leftYsPos.x - 300, this.leftYsPos.y)
        }).to(.35, {
          position: this.leftYsPos
        }, {
          easing: "sineOut"
        }).start();
        for (var e = [{
            startPos: cc.v2(this.tehuiYsPoS[0].x, this.tehuiYsPoS[0].y + 800),
            endAngle: 360,
            delay: 0
          }, {
            startPos: cc.v2(this.tehuiYsPoS[1].x, this.tehuiYsPoS[1].y - 800),
            endAngle: -360,
            delay: .08
          }, {
            startPos: cc.v2(this.tehuiYsPoS[2].x, this.tehuiYsPoS[2].y + 800),
            endAngle: 0,
            delay: .16
          }, {
            startPos: cc.v2(this.tehuiYsPoS[3].x + 800, this.tehuiYsPoS[3].y),
            endAngle: 0,
            delay: .24
          }], t = 0; t < this.tehuiNode.length && t < e.length; t++) {
          var i = this.tehuiNode[t],
            n = e[t];
          cc.tween(i).set({
            position: n.startPos,
            angle: 0,
            scale: .8
          }).delay(n.delay).to(.22, {
            position: this.tehuiYsPoS[t],
            angle: n.endAngle,
            scale: 1
          }, {
            easing: "backOut"
          }).start()
        }
      },
      videoSuccess: function () {},
      hideSuccess: function () {
        console.log("\u5f53\u524d\u573a\u666f\u540d\u5b57:", cc.director.getScene()._name), "main" == cc.director.getScene()._name && cc.find("Canvas").getComponent("Main").updatePlayer()
      },
      showLeft: function (e) {
        for (var t = e || "\u6b66\u5668", i = this.leftNode.children, n = 0; n < i.length; n++) {
          var a = i[n],
            o = a.getChildByName("select");
          o && (o.active = a.name === t)
        }
        this.flushMiddle(t), this.flushRight(t)
      },
      btnLeft: function (e) {
        this.showLeft(e.currentTarget.name)
      },
      flushMiddle: function (e) {
        for (var t = this.middleNode.children, i = 0; i < t.length; i++) {
          var n = t[i];
          n.active = n.name === e + "Node"
        }
      },
      flushRight: function (e) {
        for (var t = this.rightNode.children, i = 0; i < t.length; i++) {
          var n = t[i];
          n.name === e + "Node" ? (this.descMiddele(n.name), n.active = !0) : n.active = !1
        }
      },
      descMiddele: function (e) {
        if (this.curGoodName = "", this.curGoodstable = "", "\u5e78\u5b58\u8005Node" == e ? (this.middleNode.getChildByName(e).getChildByName("showRole").getChildByName("\u89d2\u8272").getComponent("ActorSpineShow").intiSKin(this.curClickHuman, this.curClickWeapon), this.curGoodName = this.curClickHuman, this.curGoodstable = "PeopleDataTable") : "\u611f\u67d3\u8005Node" == e ? (this.middleNode.getChildByName(e).getChildByName("showRole").getChildByName("\u89d2\u8272").getComponent("ActorSpineShow").initZombieSkin(this.curClickZombie), this.curGoodName = this.curClickZombie, this.curGoodstable = "MonsterDataTable") : "\u6b66\u5668Node" == e && (this.middleNode.getChildByName(e).getChildByName("weaponShow").getComponent("ActorWeaponShow").initWeapon(this.curClickWeapon), this.curGoodName = this.curClickWeapon, this.curGoodstable = "GunsDataTable"), "" != this.curGoodName)
          if (this.selectNode = this.middleNode.getChildByName(e).getChildByName("btnSelect"), this.selectNode.children.forEach(function (e) {
              return e.active = !1
            }), i.hasGoodsById(this.curGoodstable, this.curGoodName)) this.selectNode.getChildByName("\u5df2\u83b7\u5f97").active = !0, i.wearEquip(this.curGoodstable, this.curGoodName);
          else {
            var t = i.hasMoneyBuyGoods(this.curGoodstable, this.curGoodName);
            t[0] ? (this.selectNode.getChildByName("\u91d1\u5e01\u83b7\u5f97").active = !0, this.selectNode.getChildByName("\u91d1\u5e01\u83b7\u5f97").getChildByName("labGold").getComponent(cc.Label).string = t[1]) : this.selectNode.getChildByName("\u89c6\u9891\u83b7\u5f97").active = !0
          }
      },
      btnSelectEvent: function () {
        var e = this;
        if (this.selectNode.getChildByName("\u89c6\u9891\u83b7\u5f97").active) AD.showAD(function () {
          i.addGoodsById(e.curGoodstable, e.curGoodName), e.selectNode.children.forEach(function (e) {
            return e.active = !1
          }), e.selectNode.getChildByName("\u5df2\u83b7\u5f97").active = !0
        }, this);
        else if (this.selectNode.getChildByName("\u91d1\u5e01\u83b7\u5f97").active) {
          var t = i.hasMoneyBuyGoods(this.curGoodstable, this.curGoodName);
          i.playerInfo.gold >= t[1] ? (i.addGoodsById(this.curGoodstable, this.curGoodName), GlobalMng.eventOne.dispatchEvent("UpdateGold", -t[1], !0, !1), this.selectNode.children.forEach(function (e) {
            return e.active = !1
          }), this.selectNode.getChildByName("\u5df2\u83b7\u5f97").active = !0) : GlobalMng.uiMng.showShareDG("ui/panel/GiftPack", GlobalMng.getMain().popRoot, -1)
        }
      },
      showHeadImage: function (e, t) {
        if (this.isDataInitialized) {
          t = !1 !== t;
          for (var n = e || i.getSkinNameById(), a = this.humanListNode.children, o = null, s = 0; s < a.length; s++) {
            var r = a[s],
              c = r.getChildByName("spSelect");
            c && (r.name === n ? (c.active = !0, o = r) : c.active = !1)
          }
          t && o && GlobalMng.ccTools.scrollVerticaPos(this.humanScroll, this.humanListNode, o), this.curClickHuman = n, this.descMiddele("\u5e78\u5b58\u8005Node")
        }
      },
      btnHeadImage: function (e) {
        this.showHeadImage(e.currentTarget.name)
      },
      showZombieHeadImage: function (e, t) {
        if (this.isDataInitialized) {
          t = !1 !== t;
          for (var n = e || i.getMonsterSkinNameById(), a = this.zombieListNode.children, o = null, s = 0; s < a.length; s++) {
            var r = a[s],
              c = r.getChildByName("spSelect");
            c && (r.name === n ? (c.active = !0, o = r) : c.active = !1)
          }
          t && o && GlobalMng.ccTools.scrollVerticaPos(this.zombileScroll, this.zombieListNode, o), this.curClickZombie = n, this.descMiddele("\u611f\u67d3\u8005Node")
        }
      },
      btnMonsterHeadImage: function (e) {
        this.showZombieHeadImage(e.currentTarget.name)
      },
      showWeapon: function (e, t) {
        if (this.isDataInitialized) {
          t = !1 !== t;
          for (var n = e || i.getWeaponNameById(), a = this.weaponListNode.children, o = null, s = 0; s < a.length; s++) {
            var r = a[s],
              c = r.getChildByName("spSelect");
            c && (r.name === n ? (c.active = !0, o = r) : c.active = !1)
          }
          t && o && GlobalMng.ccTools.scrollVerticaPos(this.weaponScroll, this.weaponListNode, o), this.curClickWeapon = n, this.descMiddele("\u6b66\u5668Node")
        }
      },
      btnWeapon: function (e) {
        this.showWeapon(e.currentTarget.name)
      },
      showSelectType: function (e) {
        if (this.isDataInitialized) {
          for (var t = e || "\u5168\u90e8", i = this.filterNode.children, n = 0; n < i.length; n++) {
            var a = i[n],
              o = a.getChildByName("bg");
            o && (o.active = a.name === "btn" + t)
          }
          var s = this.weaponListNode.children;
          if ("\u5168\u90e8" == t)
            for (var r = 0; r < s.length; r++) s[r].active = !0;
          else
            for (var c = 0; c < s.length; c++) {
              var l = s[c],
                h = GlobalMng.jsonMng.getConfigByEle("GunsDataTable", "Name", l.name);
              h && h.GunsType === t ? l.active = !0 : l.active = !1
            }
        }
      },
      btnFilterWeapon: function (e, t) {
        var i = this;
        this.showSelectType(t), this.scheduleOnce(function () {
          i.showWeapon(i.curClickWeapon)
        }, 0)
      },
      onDestroy: function () {
        this.unscheduleAllCallbacks(), this.pendingShowParams = null, this.isDataInitialized = !1, this.initProgress = 0
      }
    }), cc._RF.pop()
  }, {
    AShareUIBase: "AShareUIBase",
    PlayerData: "PlayerData"
  }],
  SigninCheck: [function (e, t) {
    "use strict";
    cc._RF.push(t, "e9cb6gdFUJI37ZSUP+7c5cs", "SigninCheck"), cc.Class({
      extends: cc.Component,
      properties: {},
      timeStamp: function (e) {
        var t = (new Date).getTime();
        return t -= e, t /= 1e3, t /= 60, t /= 60, (t /= 24) < 1 ? t = 1 : t >= 1 && t < 2 ? t = 2 : t >= 2 && t < 3 ? t = 3 : t >= 3 && t < 4 ? t = 4 : t >= 4 && t < 5 ? t = 5 : t >= 5 && t < 6 ? t = 6 : t >= 6 && t < 7 ? t = 7 : t > 7 && (t = 7), t
      },
      onLoad: function () {
        for (var e = this.timeStamp(GlobalMng.playerData.playerInfo.signTime), t = !1, i = 0; i < e; i++) 0 == GlobalMng.playerData.playerInfo.signData[i] && (t = !0);
        t && GlobalMng.firstInGame
      }
    }), cc._RF.pop()
  }, {}],
  Signin: [function (e, t) {
    "use strict";
    cc._RF.push(t, "ce398WXcc9JLY0s4Be++AnL", "Signin"), cc.Class({
      extends: cc.Component,
      properties: {
        signinRoot: cc.Node,
        rewards: cc.JsonAsset
      },
      onEnable: function () {
        AD.chaPing("Signin"), AD.showBanner("Signin")
      },
      onDisable: function () {
        AD.hideBanner("Signin")
      },
      onLoad: function () {
        GlobalMng.uiMng.showPopup(this.node.getChildByName("root")), 0 == GlobalMng.playerData.playerInfo.signTime && this.retSign(), this.initSignState()
      },
      initSignState: function () {
        for (var e = this, t = this.getSignDay(GlobalMng.playerData.playerInfo.signTime), i = GlobalMng.playerData.playerInfo.signData, n = this.rewards.json, a = function (a) {
            var o = e.signinRoot.getChildByName("day" + (a + 1));
            if (!o) return "continue";
            o.getChildByName("labReward").getComponent(cc.Label).string = n[a].desc, o.getChildByName("\u906e\u7f69").active = i[a], o.getChildByName("bgSelect").active = !i[a] && t === a + 1, i[a] || t !== a + 1 || o.once(cc.Node.EventType.TOUCH_END, function () {
              e.receiveReward(a)
            }, e)
          }, o = 0; o < 7; o++) a(o)
      },
      receiveReward: function (e) {
        var t = this.rewards.json[e];
        "gold" === t.type ? GlobalMng.eventOne.dispatchEvent("UpdateGold", t.amount, !0, !0) : "skin" === t.type ? GlobalMng.playerData.addGoodsById("PeopleDataTable", t.skinName) : t.type;
        var i = this.signinRoot.getChildByName("day" + (e + 1));
        i.getChildByName("\u906e\u7f69").active = !0, i.getChildByName("bgSelect").active = !1, GlobalMng.playerData.playerInfo.signData[e] = !0, GlobalMng.playerData.savePlayerInfoToLocalCache(), "main" == cc.director.getScene()._name && cc.find("Canvas").getComponent("Main").updateRed()
      },
      getSignDay: function (e) {
        var t = ((new Date).getTime() - e) / 1e3 / 60 / 60 / 24;
        return Math.min(Math.floor(t) + 1, this.rewards.json.length)
      },
      retSign: function () {
        GlobalMng.playerData.playerInfo.signTime = (new Date).getTime(), GlobalMng.playerData.playerInfo.signData = Array(this.rewards.json.length).fill(!1), GlobalMng.playerData.savePlayerInfoToLocalCache()
      },
      btnClose: function () {
        var e;
        null == (e = this.node) || e.destroy()
      }
    }), cc._RF.pop()
  }, {}],
  SkillDesc: [function (e, t) {
    "use strict";
    cc._RF.push(t, "6718cm49hNPW7PCYqUNwsKI", "SkillDesc"), cc.Class({
      extends: e("ALayerBase"),
      properties: {
        spDesc: cc.Sprite
      },
      onLoad: function () {
        this._super()
      },
      initSkll: function (e) {
        GlobalMng.sceneMng.setSpriteFrameByBundle("Res/\u6280\u80fdicon/" + e + "desc", this.spDesc)
      },
      videoSuccess: function () {},
      closeCallBack: function () {}
    }), cc._RF.pop()
  }, {
    ALayerBase: "ALayerBase"
  }],
  Skill: [function (e, t) {
    "use strict";
    cc._RF.push(t, "7138dr3U0lHBoisV8K88UuM", "Skill");
    var i = e("Types");
    e("Game"), cc.Class({
      extends: cc.Component,
      properties: {
        skillName: "UnnamedSkill",
        skillDesc: "\u6280\u80fd\u63cf\u8ff0",
        duration: {
          default: 0,
          type: cc.Float,
          tooltip: "\u6280\u80fd\u6301\u7eed\u65f6\u95f4\uff08\u79d2\uff09\uff0c0 \u8868\u793a\u77ac\u53d1"
        },
        cooldown: {
          default: 5,
          type: cc.Float,
          tooltip: "\u6280\u80fd\u51b7\u5374\u65f6\u95f4\uff08\u79d2\uff09"
        }
      },
      onLoad: function () {
        this.game = this.game, this.currentCooldown = 0, this.isOnCooldown = !1, this.remainingDuration = 0, this.owner = null
      },
      initSkill: function (e) {
        this.skillType = e, this.skillData = i.ActorSkillData[e], this.duration = this.skillData.duration, this.cooldown = this.skillData.cooldown, this.isUseSkillSuccess = !1;
        var t = this.node.getChildByName("skillBg").getComponent(cc.Sprite);
        GlobalMng.sceneMng.setSpriteFrameByBundle("res/actor/skill/\u6280\u80fd\u56fe\u7247/" + this.skillData.skillBg, t);
        var n = this.node.getChildByName("skillName").getComponent(cc.Sprite);
        GlobalMng.sceneMng.setSpriteFrameByBundle("res/actor/skill/\u6280\u80fd\u540d\u5b57/" + this.skillData.skillBg, n), this.skillCoolMask = this.node.getChildByName("skillCool"), this.skillProgress = this.node.getChildByName("skillProgress").getComponent(cc.Sprite), this.reset()
      },
      setOwner: function (e) {
        this.owner = e
      },
      isAvailable: function () {
        return !this.isOnCooldown
      },
      cast: function () {
        if (!this.isAvailable()) return cc.log(this.skillName + " \u4e0d\u53ef\u7528\uff0c\u53ef\u80fd\u5728\u51b7\u5374\u4e2d\u6216\u8d44\u6e90\u4e0d\u8db3"), !1;
        this.onCast(), this.cooldown > 0 && (this.isOnCooldown = !0, this.currentCooldown = this.cooldown, this.skillCoolMask.active = !0), this.duration > 0 ? this.remainingDuration = this.duration : this.onFinish(), this.isUseSkillSuccess || this.reset()
      },
      onCast: function () {
        var e = this;
        switch (this.isUseSkillSuccess = !0, this.skillType) {
          case i.ActorSkillType.FeiMaoTui:
            GlobalMng.audioMng.playSoundRes("\u75be\u8dd1"), this.owner.speedUp(this.skillData.addSpeed, this.duration), this.owner.openFeiMaoTui();
            break;
          case i.ActorSkillType.HuanMengGongZhu:
            GlobalMng.audioMng.playSoundRes("\u653e\u7f6e\u6c34\u6ce1"), this.owner.freeze(), this.owner.skillAction(!1), GlobalMng.uiMng.createGameEffect("actor/skillEffect/\u6c34\u6ce1", this.game.curMapScript.keyRoot, this.owner.getTrapPos(), "EffectShuiPao", [this.skillData]);
            break;
          case i.ActorSkillType.XiangJIaoXia:
            GlobalMng.audioMng.playSoundRes("\u70b9\u51fb"), this.owner.freeze(), this.owner.skillAction(!1), GlobalMng.uiMng.createGameEffect("actor/skillEffect/\u9999\u8549", this.game.curMapScript.keyRoot, this.owner.getTrapPos(), "EffectShuiPao", [this.skillData]);
            break;
          case i.ActorSkillType.ZhaDanChaoRen:
            GlobalMng.audioMng.playSoundRes("\u70b9\u51fb");
            var t = this.game.findNearestMonster(this.owner.node);
            t && t[1] <= this.skillData.range ? (this.owner.freeze(), this.owner.skillAction(!1), this.scheduleOnce(function () {
              GlobalMng.uiMng.createGameEffect("actor/skillEffect/\u70b8\u5f39", e.game.curMapScript.keyRoot, e.owner.getTrapPos(), "EffectShuiPao", [e.skillData, e.owner])
            }, .3)) : (this.isUseSkillSuccess = !1, GlobalMng.uiMng.showTip("\u8ddd\u79bb\u602a\u7269\u8d85\u51fa\u6280\u80fd\u8303\u56f4", .3));
            break;
          case i.ActorSkillType.RenZhe:
            this.owner.spineCtrl.playNewTrack("\u6280\u80fd", 1), GlobalMng.audioMng.playSoundRes("\u9690\u8eab"), this.owner.hideSelef();
            break;
          case i.ActorSkillType.NeZha:
            GlobalMng.audioMng.playSoundRes("\u51b2\u523a"), this.charge();
            break;
          case i.ActorSkillType.WeiLaiZhanShi:
            GlobalMng.audioMng.playSoundRes("\u4f20\u9001"), this.owner.skillAction(!1), this.owner.openTimeTravel(), this.owner.freeze(), this.scheduleOnce(function () {
              GlobalMng.uiMng.createGameEffect("actor/skillEffect/\u4f20\u9001\u95e8", e.game.curMapScript.keyRoot, e.owner.getTrapPos(), "EffectShuiPao", [e.skillData, e.owner])
            }, .35);
            break;
          case i.ActorSkillType.CiTieXia:
            GlobalMng.audioMng.playSoundRes("\u78c1\u94c1\u5438\u529b"), this.owner.openMagnet(), this.owner.spineCtrl.playNewTrack("\u6280\u80fd", 1)
        }
      },
      onFinish: function () {
        var e = this.owner.spineCtrl.getSkeTotalTime("\u6280\u80fd");
        switch (this.skillType) {
          case i.ActorSkillType.FeiMaoTui:
            this.owner.closeFeiMaoTui();
            break;
          case i.ActorSkillType.HuanMengGongZhu:
          case i.ActorSkillType.XiangJIaoXia:
          case i.ActorSkillType.ZhaDanChaoRen:
            this.scheduleOnce(this.skillCallBackThaw, e);
            break;
          case i.ActorSkillType.RenZhe:
            this.owner.spineCtrl._clearTracks(1), this.owner.appearSelf();
            break;
          case i.ActorSkillType.NeZha:
            this.owner.sportAction(), this.owner.closeForceCharge(), this.owner.closeChare();
            break;
          case i.ActorSkillType.WeiLaiZhanShi:
            this.scheduleOnce(this.skillCallBackSprot, e);
            break;
          case i.ActorSkillType.CiTieXia:
            this.owner.spineCtrl._clearTracks(1), this.owner.closeMagnet()
        }
      },
      skillCallBackThaw: function () {
        this.owner.sportAction(), this.owner.thaw()
      },
      skillCallBackSprot: function () {
        this.owner.sportAction()
      },
      onCooldownComplete: function () {
        this.isUseSkillSuccess = !1
      },
      getCooldownProgress: function () {
        return this.cooldown <= 0 ? 1 : this.currentCooldown / this.cooldown
      },
      charge: function () {
        var e = this.owner.getCurPayerDir();
        0 == e.x && 0 == e.y && this.owner.openForceCharge(), this.owner.speedUp(500, this.skillData.duration), this.owner.skillAction(!1), this.owner.openCharge()
      },
      getDescription: function () {
        return {
          name: this.skillName,
          desc: this.skillDesc,
          cooldown: this.cooldown,
          duration: this.duration
        }
      },
      reset: function () {
        this.currentCooldown = 0, this.isOnCooldown = !1, this.remainingDuration = 0, this.skillCoolMask.active = !1, this.skillProgress.fillRange = 0
      },
      resetSkillState: function () {
        switch (this.skillType) {
          case i.ActorSkillType.FeiMaoTui:
            this.owner.closeFeiMaoTui();
            break;
          case i.ActorSkillType.NeZha:
            this.owner.closeForceCharge(), this.owner.closeChare();
            break;
          case i.ActorSkillType.CiTieXia:
            this.owner.spineCtrl._clearTracks(1), this.owner.closeMagnet()
        }
        this.unschedule(this.skillCallBackThaw), this.unschedule(this.skillCallBackSprot)
      },
      update: function (e) {
        this.isOnCooldown && (this.currentCooldown -= e, this.currentCooldown <= 0 ? (this.isOnCooldown = !1, this.skillCoolMask.active = !1, this.skillProgress.fillRange = 0, this.currentCooldown = 0, this.onCooldownComplete()) : this.skillProgress.fillRange = this.getCooldownProgress()), this.remainingDuration > 0 && (this.remainingDuration -= e, this.remainingDuration <= 0 && (this.remainingDuration = 0, this.onFinish()))
      }
    }), cc._RF.pop()
  }, {
    Game: "Game",
    Types: "Types"
  }],
  SpecialOffer: [function (e, t) {
    "use strict";
    cc._RF.push(t, "c8c57BQ2UlH0LTW6INu0hYs", "SpecialOffer");
    var i = e("PlayerData");
    cc.Class({
      extends: cc.Component,
      properties: {
        tableName: "",
        pushLevel: 1
      },
      onLoad: function () {
        this.buyNode = this.node.getChildByName("btnSelect")
      },
      shaiXuan: function () {
        var e = GlobalMng.jsonMng.getConfig(this.tableName);
        this.showOffer = null;
        for (var t = 0; t < e.length; t++) {
          var n = e[t];
          if (n.Lv == this.pushLevel && 0 == i.hasGoodsById(this.tableName, n.Name)) {
            this.showOffer = n;
            break
          }
        }
      },
      onEnable: function () {
        this.buyNode.children.forEach(function (e) {
          e.active = !1
        }), this.shaiXuan(), null == this.showOffer && "GunsDataTable" != this.tableName && (this.tableName = "MonsterDataTable" == this.tableName ? "PeopleDataTable" : "MonsterDataTable", this.shaiXuan()), null != this.showOffer ? (this.buyNode.getChildByName("\u89c6\u9891\u83b7\u5f97").active = !0, "GunsDataTable" == this.tableName ? this.showPushWeapon() : this.showPushRole()) : this.buyNode.getChildByName("\u5df2\u83b7\u5f97").active = !0
      },
      showPushWeapon: function () {
        this.node.getChildByName("skeGun").getComponent(sp.Skeleton).setAnimation(0, "\u67aa\u52a8\u6001/" + this.showOffer.Name, !0), this.node.getChildByName("labName").getComponent(cc.Label).string = this.showOffer.Name
      },
      showPushRole: function () {
        this.showOffer && ("PeopleDataTable" == this.tableName ? this.node.getChildByName("\u89d2\u8272").getComponent("ActorSpineShow").intiSKin(this.showOffer.Name) : this.node.getChildByName("\u89d2\u8272").getComponent("ActorSpineShow").initZombieSkin(this.showOffer.Name))
      },
      btnClik: function () {
        var e = this;
        this.buyNode.getChildByName("\u89c6\u9891\u83b7\u5f97").active && AD.showAD(function () {
          i.addGoodsById(e.tableName, e.showOffer.Name), e.buyNode.children.forEach(function (e) {
            e.active = !1
          }), e.buyNode.getChildByName("\u5df2\u83b7\u5f97").active = !0
        }, this)
      }
    }), cc._RF.pop()
  }, {
    PlayerData: "PlayerData"
  }],
  SpineCtrl: [function (e, t) {
    "use strict";
    cc._RF.push(t, "f9c042ExhRPW5juYz3nqmMV", "SpineCtrl"), cc.Class({
      extends: cc.Component,
      properties: {},
      init: function (e) {
        void 0 === e && (e = ""), this.ske = this.node.getChildByName("ske").getComponent(sp.Skeleton), this.idleActionName = e, this.currentAnimation = "", "" != this.idleActionName && this.playIdle(), this.openBatch()
      },
      openBatch: function () {
        this.ske.skeletonData.textures[0].packable = !0, this.ske.batching = !0, this.ske.enableBatch = !0
      },
      playIdle: function (e) {
        void 0 === e && (e = 0), "" != this.idleActionName && this.currentAnimation !== this.idleActionName && (this.ske.timeScale = 1, this.ske.setAnimation(e, this.idleActionName, !0), this.currentAnimation = this.idleActionName)
      },
      playSkeLoop: function (e, t) {
        void 0 === t && (t = 0), this.currentAnimation !== e && (this.ske.setAnimation(t, e, !0), this.currentAnimation = e)
      },
      playSke: function (e, t, i) {
        void 0 === i && (i = 0), this.ske.setCompleteListener(null), this.ske.setCompleteListener(function (i) {
          i.animation.name === e && t && t()
        }), this.ske.setAnimation(i, e, !1), this.currentAnimation = e
      },
      playSkeByEvent: function (e, t, i, n, a, o) {
        this.ske.setEventListener(null), this.ske.setCompleteListener(null), this.ske.setAnimation(e, t, n), this.ske.setEventListener(function (e, t) {
          t.data.name === i && a && a()
        }), this.ske.setCompleteListener(function (e) {
          e.animation.name === t && o && o()
        })
      },
      test: function () {
        this.ske.setAnimation(1, "\u653b\u51fb", !1), this.ske.addAnimation(1, "\u653b\u51fb", !1), this.ske.addAnimation(1, "\u653b\u51fb", !1), this.ske.addAnimation(1, "\u653b\u51fb", !1), this.ske.addAnimation(1, "\u653b\u51fb", !1)
      },
      setSkeTime: function (e) {
        this.ske.timeScale = e
      },
      loadAndChangeSkin: function (e, t, i, n, a) {
        var o = this;
        void 0 === t && (t = "\u5f85\u673a"), void 0 === i && (i = !0), void 0 === n && (n = null), GlobalMng.sceneMng.setSkeByBundle(e, this.ske, t, i, n, function () {
          o.resetAnimationState(), a && a()
        })
      },
      _setSkin: function (e) {
        this.ske.setSkin(e), this.ske.setSlotsToSetupPose()
      },
      _setMix: function (e, t, i) {
        void 0 === i && (i = .2), this.ske.setMix(e, t, i)
      },
      _clearTracks: function (e) {
        void 0 === e && (e = null), this.ske && (null !== e ? this.ske.setAnimation(e, "\u7a7a", !1) : (this.ske.clearTracks(), this.ske.setToSetupPose()))
      },
      resetAnimationState: function () {
        this._clearTracks(), this.currentAnimation = ""
      },
      getSkeTotalTime: function (e) {
        var t, i = null == (t = this.ske.skeletonData) ? void 0 : t.getRuntimeData().findAnimation(e);
        return i ? i.duration : 0
      },
      isNeedClearTrack: function (e) {
        this.ske.getCurrent(e) && this.ske.clearTrack(e)
      }
    }), cc._RF.pop()
  }, {}],
  SpinePreview: [function (e, t) {
    "use strict";
    cc._RF.push(t, "3cf67E5I99F5INr5GpVGsUS", "SpinePreview"), console.log("\u7a7a\u6587\u4ef6"), cc._RF.pop()
  }, {}],
  SurvivalMode: [function (e, t) {
    "use strict";
    cc._RF.push(t, "6fa95OgiJpBIrUWYAJrgy5Q", "SurvivalMode");
    var i = e("Types");
    cc.Class({
      extends: e("GameModeBase"),
      properties: {},
      onInitGameModel: function () {
        this._super()
      },
      onModelStart: function () {
        var e = this;
        this.scheduleOnce(function () {
          e.game.humanArray = _.shuffle(e.game.humanArray), e.game.humanArray[0].getComponent("Human").toZombie(!0), e.game.humanArray[0].getComponent("Human").toZombie(!0), e.countDownEnd = !0
        }, this.gameCountZombie)
      },
      onGetZombieData: function (e) {
        if (e) {
          var t = this.getZomConfigByEle("Name", "\u8d85\u4f53\u50f5\u5c38");
          return [i.ZombieAttackWay.Once, !0, t]
        }
        var n = this.randSkinId.length > 0 ? this.randSkinId.pop() : 0;
        0 != n && _.isNumber(n) || (n = _.random(3, 6));
        var a = GlobalMng.jsonMng.queryConfig("MonsterDataTable", function (e) {
          return e.ID === n
        })[0];
        return [i.ZombieAttackWay.Once, !0, a]
      },
      onCheckZombieIsWin: function () {
        this.game.gameIsOver() || 0 != this.game.getHumanNum() || (this.zombieWinRound++, this.modelRounOver(2))
      },
      onCheckHumanIsWin: function (e) {
        void 0 === e && (e = !1), e && (this.humanWinRound++, this.modelRounOver(1))
      }
    }), cc._RF.pop()
  }, {
    GameModeBase: "GameModeBase",
    Types: "Types"
  }],
  TemplateLayer: [function (e, t) {
    "use strict";
    cc._RF.push(t, "a3febmciOdM56ee6ogrtLpH", "TemplateLayer"), cc.Class({
      extends: e("ALayerBase"),
      properties: {},
      onLoad: function () {
        this._super()
      },
      videoSuccess: function () {},
      closeCallBack: function () {}
    }), cc._RF.pop()
  }, {
    ALayerBase: "ALayerBase"
  }],
  TemplateUI: [function (e, t) {
    "use strict";
    cc._RF.push(t, "742d341IztEFJtaGy+CIGLj", "TemplateUI"), cc.Class({
      extends: e("AShareUIBase"),
      properties: {},
      onLoad: function () {
        this._super()
      },
      show: function () {
        this._super()
      },
      videoSuccess: function () {},
      hideSuccess: function () {}
    }), cc._RF.pop()
  }, {
    AShareUIBase: "AShareUIBase"
  }],
  TestYsLoading: [function (e, t) {
    "use strict";
    cc._RF.push(t, "1fc46IK3tlIR6xLxArb/9oP", "TestYsLoading"), console.log("\u7a7a\u6587\u4ef6"), cc._RF.pop()
  }, {}],
  Test: [function (e, t) {
    "use strict";
    cc._RF.push(t, "a17fea9omZCNIDUZU9jX8TO", "Test"), cc.Class({
      extends: cc.Component,
      properties: {},
      taskTest: function () {},
      crossSceneTask: function () {}
    }), cc._RF.pop()
  }, {}],
  ThreeCount: [function (e, t) {
    "use strict";
    cc._RF.push(t, "09525/tRuhEj49iVOfDhguU", "ThreeCount"), cc.Class({
      extends: cc.Component,
      properties: {
        numberNodes: {
          default: [],
          type: cc.Node,
          tooltip: "\u5305\u542b\u6570\u5b573,2,1\u548c\u6e38\u620f\u5f00\u59cb\u7684\u56db\u4e2a\u8282\u70b9"
        }
      },
      onLoad: function () {
        4 === this.numberNodes.length ? this.numberNodes.forEach(function (e) {
          e.active = !1, e.scale = 0, e.opacity = 0
        }) : cc.error("\u8bf7\u786e\u4fdd\u914d\u7f6e\u4e864\u4e2a\u8282\u70b9!")
      },
      initEffect: function () {
        for (var e = this, t = arguments.length, i = new Array(t), n = 0; n < t; n++) i[n] = arguments[n];
        cc.tween(this.node).set({
          scale: 0
        }).to(.2, {
          scale: 1
        }, {
          easing: "sineOut"
        }).call(function () {
          e.startCountdown(i[0])
        }).start()
      },
      startCountdown: function (e) {
        var t = this,
          i = 0;
        (function n() {
          if (i >= t.numberNodes.length) e && e();
          else {
            i == t.numberNodes.length - 1 ? (t.node.getChildByName("bg").active = !1, GlobalMng.audioMng.playSoundRes("\u5012\u8ba1\u65f6_02")) : GlobalMng.audioMng.playSoundRes("\u5012\u8ba1\u65f6_01");
            var a = t.numberNodes[i];
            a.active = !0;
            var o = cc.scaleTo(.5, 1.2).easing(cc.easeBackOut()),
              s = cc.scaleTo(.5, 1).easing(cc.easeBackIn()),
              r = cc.fadeIn(.5),
              c = cc.fadeOut(.5),
              l = cc.spawn(cc.sequence(o, s), cc.sequence(r, c)),
              h = cc.sequence(l, cc.delayTime(0), cc.callFunc(function () {
                a.active = !1, i++, n()
              }));
            a.runAction(h)
          }
        })()
      }
    }), cc._RF.pop()
  }, {}],
  TimeManager: [function (e, t) {
    "use strict";
    cc._RF.push(t, "41a21J86nFEJaR7Ju+pGyuQ", "TimeManager"), cc.Class({
      extends: cc.Component,
      properties: {
        activeTimers: {
          default: [],
          visible: !1
        },
        isPaused: !1
      },
      init: function () {
        GlobalMng.timeMng = this, cc.game.addPersistRootNode(this.node)
      },
      startTimer: function (e, t, i, n) {
        if (this.activeTimers.some(function (t) {
            return t.key === e
          })) console.warn("\u8ba1\u65f6\u4efb\u52a1 " + e + " \u5df2\u5b58\u5728\uff01");
        else {
          var a = {
            key: e,
            remainingTime: t,
            originalDuration: t,
            callback: i,
            updateCallback: n
          };
          this.activeTimers.push(a)
        }
      },
      stopTimer: function (e) {
        this.activeTimers = this.activeTimers.filter(function (t) {
          return t.key !== e
        })
      },
      pauseAllTimers: function () {
        this.isPaused = !0
      },
      resumeAllTimers: function () {
        this.isPaused = !1
      },
      clearAllTimers: function () {
        this.activeTimers = []
      },
      isKeyRuning: function (e) {
        return this.activeTimers.some(function (t) {
          return t.key === e
        })
      },
      update: function (e) {
        if (!this.isPaused)
          for (var t = this.activeTimers.length - 1; t >= 0; t--) {
            var i = this.activeTimers[t];
            if (i.remainingTime -= e, i.updateCallback) {
              var n = i.remainingTime / i.originalDuration;
              i.updateCallback(n)
            }
            i.remainingTime <= 0 && (i.remainingTime = 0, i.callback(), this.activeTimers.splice(t, 1))
          }
      }
    }), cc._RF.pop()
  }, {}],
  TipsManager: [function (e, t, i) {
    "use strict";
    cc._RF.push(t, "70277d4xXNIL7zg8mIHjIxG", "TipsManager");
    var n, a = this && this.__extends || (n = function (e, t) {
        return (n = Object.setPrototypeOf || {
            __proto__: []
          }
          instanceof Array && function (e, t) {
            e.__proto__ = t
          } || function (e, t) {
            for (var i in t) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i])
          })(e, t)
      }, function (e, t) {
        function i() {
          this.constructor = e
        }
        n(e, t), e.prototype = null === t ? Object.create(t) : (i.prototype = t.prototype, new i)
      }),
      o = this && this.__decorate || function (e, t, i, n) {
        var a, o = arguments.length,
          s = o < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, i) : n;
        if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(e, t, i, n);
        else
          for (var r = e.length - 1; r >= 0; r--)(a = e[r]) && (s = (o < 3 ? a(s) : o > 3 ? a(t, i, s) : a(t, i)) || s);
        return o > 3 && s && Object.defineProperty(t, i, s), s
      };
    Object.defineProperty(i, "__esModule", {
      value: !0
    });
    var s = e("../MyLog"),
      r = cc._decorator,
      c = r.ccclass,
      l = (r.property, function (e) {
        function t() {
          return null !== e && e.apply(this, arguments) || this
        }
        var i;
        return a(t, e), i = t, t.getInstance = function () {
          return i.instance || (i.instance = new i), i.instance
        }, t.prototype.Open = function (e, t, i, n, a, o) {
          void 0 === o && (o = "daily"), s.default.d("\u6253\u5f00\u6bcf\u65e5\u798f\u5229"), this.CreateFrepab(e, t, i, n, a, o)
        }, t.prototype.CreateFrepab = function (e, t, i, n, a, o) {
          void 0 === o && (o = "daily");
          var r = this.node;
          null != t && (r = t);
          var c = cc.instantiate(e);
          s.default.d("==newNode==", c), s.default.d("==parentNode==", r), r.addChild(c), c.position = cc.v3(i, n);
          var l = c.getComponent("Tips");
          "daily" == o ? l.Show("\u4eca\u65e5\u5df2\u9886\u53d6,\u8bf7\u660e\u65e5\u518d\u6765") : l.Show("\u798f\u5229\u5df2\u9886\u53d6")
        }, i = o([c], t)
      }(cc.Component));
    i.default = l, cc._RF.pop()
  }, {
    "../MyLog": "MyLog"
  }],
  Tips: [function (e, t, i) {
    "use strict";
    cc._RF.push(t, "f56d6l0x/9IRKhBaZuWuDJ6", "Tips");
    var n, a = this && this.__extends || (n = function (e, t) {
        return (n = Object.setPrototypeOf || {
            __proto__: []
          }
          instanceof Array && function (e, t) {
            e.__proto__ = t
          } || function (e, t) {
            for (var i in t) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i])
          })(e, t)
      }, function (e, t) {
        function i() {
          this.constructor = e
        }
        n(e, t), e.prototype = null === t ? Object.create(t) : (i.prototype = t.prototype, new i)
      }),
      o = this && this.__decorate || function (e, t, i, n) {
        var a, o = arguments.length,
          s = o < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, i) : n;
        if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(e, t, i, n);
        else
          for (var r = e.length - 1; r >= 0; r--)(a = e[r]) && (s = (o < 3 ? a(s) : o > 3 ? a(t, i, s) : a(t, i)) || s);
        return o > 3 && s && Object.defineProperty(t, i, s), s
      };
    Object.defineProperty(i, "__esModule", {
      value: !0
    });
    var s = e("../MyLog"),
      r = cc._decorator,
      c = r.ccclass,
      l = r.property,
      h = function (e) {
        function t() {
          var t = null !== e && e.apply(this, arguments) || this;
          return t.desc = null, t
        }
        return a(t, e), t.prototype.Show = function (e) {
          void 0 === e && (e = ""), s.default.d("===Tips==", e), 0 != e.length && (this.desc.string = e);
          var t = this;
          setTimeout(function () {
            t.node.destroy()
          }, 1500)
        }, o([l(cc.Label)], t.prototype, "desc", void 0), o([c], t)
      }(cc.Component);
    i.default = h, cc._RF.pop()
  }, {
    "../MyLog": "MyLog"
  }],
  Tip: [function (e, t) {
    "use strict";
    cc._RF.push(t, "9575789TtJNIYf6pXEx0iVO", "Tip"), cc.Class({
      extends: cc.Component,
      properties: {
        labText: {
          default: null,
          type: cc.Label,
          tooltip: "\u63d0\u793a\u6587\u672c\u7684 Label \u7ec4\u4ef6"
        }
      },
      onLoad: function () {
        this.callFnc = null
      },
      showTip: function (e, t, i) {
        var n = this;
        if (this.callFnc = i, !this.labText) return cc.warn("Tip: labText is not assigned!"), !1;
        this.labText.string = e || "";
        var a = t - 1,
          o = this.node.y,
          s = o + 230,
          r = o + 200,
          c = cc.moveTo(.5, cc.v2(this.node.x, s)).easing(cc.easeIn(.5)),
          l = cc.moveTo(.5, cc.v2(this.node.x, r)).easing(cc.easeOut(.5)),
          h = cc.callFunc(function () {
            return n.callFnc()
          }, this),
          u = cc.sequence(c, l, cc.delayTime(a > 0 ? a : 0), h);
        this.node.runAction(u)
      }
    }), cc._RF.pop()
  }, {}],
  TranscendentModel: [function (e, t) {
    "use strict";
    cc._RF.push(t, "2d14a5GCbRNha6mCsSVy0Pe", "TranscendentModel");
    var i = e("Types");
    cc.Class({
      extends: e("GameModeBase"),
      properties: {},
      onInitGameModel: function () {
        this._super()
      },
      onModelStart: function () {
        var e = this;
        this.game.joystickNode.getChildByName("Video").getChildByName("btn\u8d85\u4f53").active = !0, this.scheduleOnce(function () {
          if (e.game.joystickNode.getChildByName("Video").getChildByName("btn\u8d85\u4f53").active = !1, e.game.zombieAiAlity = [4, 4, 4], 1 != e.curGameRound && 0 == e.game.isVideoSpecial && _.isLucky(70)) {
            var t = [e.game.humanArray[e.game.humanArray.length - 1], e.game.humanArray[0]];
            e.game.humanArray[0] = t[0], e.game.humanArray[e.game.humanArray.length - 1] = t[1]
          }
          var i = e.game.humanArray[0].getComponent("Human").getNickName();
          e.game.humanArray[0].getComponent("Human").toZombie(!0), GlobalMng.sceneMng.createUIByBundle("gameTip/\u88ab\u9009\u4e3a\u8d85\u4f53", e.game.gameTipRoot, function (e) {
            e.getChildByName("labName").getComponent(cc.Label).string = i
          }), e.countDownEnd = !0
        }, this.gameCountZombie)
      },
      onGetZombieData: function () {
        var e = this.getZomConfigByEle("Name", "\u8d85\u4f53\u50f5\u5c38"),
          t = _.cloneDeep(e);
        return t.MonsterMaxHp = 8e4, t.MonsterSpeed += 40, [i.ZombieAttackWay.DeathBlow, !1, t]
      },
      onCheckZombieIsWin: function () {
        this.game.gameIsOver() || 0 != this.game.getHumanNum() || (this.zombieWinRound++, this.modelRounOver(2))
      },
      onCheckHumanIsWin: function (e) {
        void 0 === e && (e = !1), (0 == this.game.getZombieNum() || e) && (this.humanWinRound++, this.modelRounOver(1))
      }
    }), cc._RF.pop()
  }, {
    GameModeBase: "GameModeBase",
    Types: "Types"
  }],
  Traps: [function (e, t) {
    "use strict";
    cc._RF.push(t, "107d73GLKxCRKSVDkDp3rf+", "Traps"), cc.Class({
      extends: cc.Component,
      properties: {},
      start: function () {},
      onBeginContact: function () {},
      onEndContact: function () {},
      onPreSolve: function () {},
      onCollisionEnter: function () {},
      onCollisionExit: function () {},
      onCollisionStay: function () {}
    }), cc._RF.pop()
  }, {}],
  TurnScene: [function (e, t) {
    "use strict";
    cc._RF.push(t, "7eb63LFWfJJsrOSGQvhbYZT", "TurnScene"), cc.Class({
      extends: cc.Component,
      properties: {
        ske: sp.Skeleton
      },
      onLoad: function () {},
      show: function (e, t) {
        var i = this;
        void 0 === t && (t = !0), this.ske.setCompleteListener(null), this.ske.setCompleteListener(function (n) {
          var a;
          "animation" === n.animation.name && (e && e(), t && (null == (a = i.node) || a.destroy()))
        }), this.ske.setAnimation(0, "animation", !1)
      }
    }), cc._RF.pop()
  }, {}],
  TweenEffect: [function (e, t) {
    "use strict";
    cc._RF.push(t, "483d5bvIa1MYanOPVfuGSMs", "TweenEffect"), cc.Class({
      extends: cc.Component,
      properties: {},
      onLoad: function () {},
      scaleOnce: function () {
        cc.tween(this.node).set({
          scale: 1
        }).to(.1, {
          scale: 1.2
        }).to(.1, {
          scale: 1
        }).start()
      },
      startHeartbeat: function () {
        cc.tween(this.node).repeatForever(cc.tween().to(.25, {
          scale: 1.1
        }, {
          easing: "smooth"
        }).to(.25, {
          scale: .9
        }, {
          easing: "smooth"
        }).delay(.5)).start()
      },
      stopHeartbeat: function () {
        cc.Tween.stopAllByTarget(this.node)
      },
      startTimeAnim: function () {
        var e = this;
        (function t() {
          cc.tween(e.node).by(.5, {
            position: cc.v3(0, 10, 0),
            angle: 5
          }, {
            easing: "sineInOut"
          }).by(.5, {
            position: cc.v3(0, -10, 0),
            angle: -5
          }, {
            easing: "sineInOut"
          }).call(t).start()
        })()
      },
      shakeThree: function () {
        cc.tween(this.node).repeat(3, cc.tween().by(.05, {
          angle: 10
        }).by(.05, {
          angle: -15
        }).by(.05, {
          angle: 10
        })).to(1, {
          opacity: 0
        }).start()
      },
      applyFloatingEffect: function (e) {
        var t = cc.tween().by(1, {
            position: {
              value: new cc.Vec2(0, 15),
              easing: "sineOut"
            }
          }),
          i = cc.tween().by(1, {
            position: {
              value: new cc.Vec2(0, -15),
              easing: "sineIn"
            }
          }),
          n = cc.tween().by(1, {
            position: {
              value: new cc.Vec2(0, -15),
              easing: "sineOut"
            }
          }),
          a = cc.tween().by(1, {
            position: {
              value: new cc.Vec2(0, 15),
              easing: "sineIn"
            }
          }),
          o = cc.tween().sequence(t, i, n, a);
        cc.tween(e).then(o).repeatForever().start()
      }
    }), cc._RF.pop()
  }, {}],
  Types: [function (e, t) {
    "use strict";
    cc._RF.push(t, "d8cd0qsjWpGr6DxzUBvXT8H", "Types");
    var i = {
        1: {
          id: 1,
          name: "\u98de\u6bdb\u817f",
          duration: 10,
          cooldown: 30,
          addSpeed: 100,
          skillBg: "\u75be\u8dd1",
          money: 0,
          get desc() {
            return "\u4f7f\u7528\u6280\u80fd\u540e\u79fb\u901f\u589e\u52a0" + this.addSpeed + "%\uff0c\u6301\u7eed" + this.duration + "\u79d2\uff0c\u51b7\u5374" + this.cooldown + "\u79d2\uff0c\u5f85\u6280\u80fd\u5b8c\u5168\u7ed3\u675f\u540e\u518d\u8fdb\u5165\u51b7\u5374\u65f6\u95f4"
          }
        },
        2: {
          id: 2,
          name: "\u5e7b\u68a6\u516c\u4e3b",
          duration: 0,
          cooldown: 15,
          controlTime: 3,
          skillBg: "\u6c34\u7262",
          money: 2e3,
          get desc() {
            return "\u653e\u7f6e\u4e00\u4e2a\u6c34\u6ce1\uff0c\u602a\u7269\u8e29\u5230\u540e\u4f1a\u56f0\u5728\u6c34\u6ce1\u4e2d\uff0c\u63a7\u5236\u65f6\u95f4" + this.controlTime + "\u79d2\uff0c\u51b7\u5374" + this.cooldown + "\u79d2"
          }
        },
        3: {
          id: 3,
          name: "\u9999\u8549\u4fa0",
          duration: 0,
          cooldown: 10,
          controlTime: 2,
          skillBg: "\u6ed1\u5012",
          money: 2e3,
          get desc() {
            return "\u653e\u7f6e\u4e00\u4e2a\u9999\u8549\u76ae\uff0c\u602a\u7269\u8e29\u5230\u540e\u4f1a\u6ed1\u5012\uff0c\u8fd9\u4e2a\u72b6\u6001\u6301\u7eed" + this.controlTime + "\u79d2"
          }
        },
        4: {
          id: 4,
          name: "\u70b8\u5f39\u8d85\u4eba",
          duration: 0,
          cooldown: 15,
          controlTime: 2,
          range: 1e3,
          skillBg: "\u70b8\u5f39",
          money: 2e3,
          get desc() {
            return "\u6254\u51fa\u4e00\u4e2a\u70b8\u5f39\uff0c\u602a\u7269\u88ab\u70b8\u5230\u540e\u4f1a\u53d8\u6210\u7126\u9ed1\u8272\u6301\u7eedx\u79d2"
          }
        },
        5: {
          id: 5,
          name: "\u5fcd\u8005",
          duration: 5,
          cooldown: 20,
          skillBg: "\u9690\u9041",
          money: 2e3,
          get desc() {
            return "\u4f7f\u7528\u6280\u80fd\u540e\uff0c\u5fcd\u8005\u7684\u8eab\u4f53\u53d8\u7684\u900f\u660e\uff0c\u6b64\u65f6\u4e3a\u9690\u5f62\u72b6\u6001\u4e0d\u53d7\u602a\u7269\u653b\u51fb\uff0c\u602a\u7269\u4e22\u5931\u8ffd\u51fb\u76ee\u6807\uff0c\u505c\u5728\u539f\u5730\u5f85\u673a\uff0c\u5f85\u6280\u80fd\u5b8c\u5168\u7ed3\u675f\u540e\u518d\u8fdb\u5165\u51b7\u5374\u65f6\u95f4"
          }
        },
        6: {
          id: 6,
          name: "\u54ea\u5412",
          duration: .3,
          cooldown: 15,
          skillBg: "\u51b2\u523a",
          money: 2e3,
          get desc() {
            return "\u4f7f\u7528\u6280\u80fd\u540e\u5411\u524d\u51b2\u523a\u4e00\u6bb5\u8ddd\u79bb\uff0c\u51b2\u523a\u65f6\u9700\u8981\u6709\u706b\u7130\u7279\u6548\u914d\u5408\uff0c\u51b2\u523a\u65f6\u78b0\u5230\u969c\u788d\u7269\u4f1a\u505c\u6b62\u51b2\u523a\uff0c\u78b0\u5230\u602a\u7269\u4f1a\u76f4\u63a5\u7a7f\u8fc7\uff0c\u6b64\u72b6\u6001\u53ef\u4ee5\u62fe\u53d6\u788e\u7247"
          }
        },
        7: {
          id: 7,
          name: "\u672a\u6765\u6218\u58eb",
          duration: 0,
          cooldown: 30,
          skillBg: "\u4f20\u9001\u95e8",
          money: 2e3,
          get desc() {
            return "\u91ca\u653e\u6280\u80fd\u4f1a\u5728\u8eab\u4f53\u524d\u65b9\u51fa\u73b0\u4e00\u4e2a\u4f20\u9001\u95e8\uff0c\u5c06\u901a\u8fc7\u4f20\u9001\u95e8\u7684\u7269\u4f53\u4f20\u9001\u5230\u5730\u56fe\u968f\u673a\u4f4d\u7f6e"
          }
        },
        8: {
          id: 8,
          name: "\u78c1\u94c1\u4fa0",
          duration: 10,
          cooldown: 30,
          skillBg: "\u78c1\u5438",
          money: 2e3,
          get desc() {
            return "\u4f7f\u7528\u6280\u80fd\u540e\uff0c\u624b\u4e0a\u7684\u78c1\u94c1\u77f3\u4f1a\u6709\u5438\u529b\u7279\u6548\uff0c\u4f1a\u5c06\u8303\u56f4\u5185\u7684\u788e\u7247\u5438\u5230\u89d2\u8272\u8eab\u4e0a\uff0c\u5438\u53d6\u5706\u5f62\u8303\u56f4\u5185\u6240\u6709\u788e\u7247\u3002\u5f85\u6280\u80fd\u5b8c\u5168\u7ed3\u675f\u540e\u518d\u8fdb\u5165\u51b7\u5374\u65f6\u95f4"
          }
        }
      },
      n = cc.Enum({
        None: -1,
        Stand: -1,
        Up: -1,
        Right: -1,
        Down: -1,
        Left: -1
      }),
      a = cc.Enum({
        SingleMode: 1,
        DoubelMode: 2
      }),
      o = cc.Enum({
        None: -1,
        Playing: -1,
        Paused: -1,
        Over: -1
      }),
      s = cc.Enum({
        None: -1,
        Human: -1,
        Zombie: -1
      }),
      r = cc.Enum({
        Robot: 0,
        Player1: 1,
        Player2: 2
      }),
      c = cc.Enum({
        None: -1,
        Sport: -1,
        Freeze: -1,
        Other: -1
      }),
      l = cc.Enum({
        MapPark: "MapPark",
        MapSchool: "MapSchool",
        MapHospital: "MapHospital"
      }),
      h = cc.Enum({
        SurvivalMode: 1,
        DoomsLayerModel: 2,
        SaviorModel: 3,
        TranscendentModel: 4,
        ChallengeModel: 5
      }),
      u = cc.Enum({
        Once: -1,
        None: -1,
        DeathBlow: -1
      }),
      d = cc.Enum({
        ChaoTiJiangShi: -1,
        HongSeYouLing: -1,
        TaiTanJuRen: -1,
        FengKuangYouLing: -1,
        ZhiZhuJing: -1,
        YouMengLieSHou: -1
      });
    t.exports = {
      GameMode: a,
      GameState: o,
      MoveState: n,
      ActorTeam: s,
      ActorControl: r,
      ActorActionState: c,
      ActorSkillData: i,
      MapName: l,
      ZombieAttackWay: u,
      GamePlay: h,
      ZombieType: d
    }, cc._RF.pop()
  }, {}],
  UIManager: [function (e, t) {
    "use strict";
    cc._RF.push(t, "42e7fzMw7NK86bfXbo2KKTB", "UIManager");
    var i = e("Constants"),
      n = e("SceneMng"),
      a = new(cc.Class({
        start: function () {
          this.dictSharedPanel = {}, this.loadingDialogPaths = {}, this.arrPopupDialog = [], this.lastClickTime = 0, this.tipComplete = !1
        },
        showPopup: function (e, t) {
          e.scale = 0, e.opacity = 0;
          var i = 0,
            n = cc.director.getScheduler();
          n.schedule(function a() {
            var o, s = cc.kGetRawDeltaTime();
            i += s;
            var r = Math.min(i / .5, 1);
            o = r;
            var c = (o -= 1) * o * (2.70158 * o + 1.70158) + 1;
            e.scale = 1 * c, e.opacity = 255 * c, r >= 1 && (e.scale = 1, e.opacity = 255, n.unschedule(a, e), t && _.isCallback(t) && t && t())
          }, e, 0, cc.macro.REPEAT_FOREVER, 0, !1)
        },
        hidePopup: function (e, t) {
          var i = e.scale,
            n = e.opacity;
          cc.tween(e).to(.2, {
            scale: 0,
            opacity: 0
          }, {
            easing: "backIn"
          }).call(function () {
            e.scale = i, e.opacity = n, t && t()
          }).start()
        },
        canProcessClick: function () {
          var e = Date.now() / 1e3;
          return !(e - this.lastClickTime < .2 || (this.lastClickTime = e, 0))
        },
        loadNextGameScene: function (e) {
          var t = [function (t) {
            cc.director.preloadScene(e, function () {
              t()
            })
          }, function (t) {
            cc.director.loadScene(e, function () {
              console.log("\u6e38\u620f\u573a\u666f\u52a0\u8f7d\u6210\u529f"), t()
            })
          }, function (e) {
            cc.find("Canvas").getComponent("Game").initMap(function () {
              e()
            })
          }, function (e) {
            setTimeout(function () {
              e()
            }, 50)
          }, function (e) {
            setTimeout(function () {
              e()
            }, 50)
          }];
          this.showLoadingWithTask(t, function () {
            console.log("\u6e38\u620f\u573a\u666f\u521d\u59cb\u5316\u5b8c\u6bd5,\u8fdb\u5165\u6e38\u620f\u573a\u666f"), cc.find("Canvas").getComponent("Game").gameLoadComplete()
          })
        },
        showSharedMask: function () {
          this.dictSharedPanel["ui/global/ModalMask"].parent = cc.find("Canvas"), this.dictSharedPanel["ui/global/ModalMask"].setPosition(0, 0), this.dictSharedPanel["ui/global/ModalMask"].zIndex = i.ZORDER.MAX_LAYER
        },
        hideSharedMask: function () {
          this.dictSharedPanel["ui/global/ModalMask"].parent = null
        },
        showLoading: function (e, t) {
          var n = this;
          if (void 0 === t && (t = !1), this.dictSharedPanel["ui/global/GameLoading"]) {
            var a = this.dictSharedPanel["ui/global/GameLoading"];
            if (cc.isValid(a)) {
              a.parent = cc.find("Canvas"), a.active = !0, a.zIndex = i.ZORDER.LOADING_SCREEN;
              var o = a.getComponent("GameLoading");
              if (o.init(e), !1 !== t) return o;
              o.setLoadCompelect(1, function () {
                n.closeShareDG("ui/global/GameLoading")
              })
            }
          }
        },
        showLoadingWithTask: function (e, t) {
          if (this.dictSharedPanel["ui/global/Loading"]) {
            var n = this.dictSharedPanel["ui/global/Loading"];
            cc.isValid(n) && (cc.game.isPersistRootNode(n) || cc.game.addPersistRootNode(n), n.active = !0, n.zIndex = i.ZORDER.LOADING_SCREEN, n.getComponent("LoadingUI").startLoading(e, function () {
              t && t()
            }))
          }
        },
        turnSceneAnimation: function (e, t, n, a, o, s) {
          if (void 0 === e && (e = 1), void 0 === t && (t = null), void 0 === n && (n = null), void 0 === a && (a = null), void 0 === o && (o = null), void 0 === s && (s = null), this.dictSharedPanel["ui/layer/\u8fc7\u573a"]) {
            var r = this.dictSharedPanel["ui/layer/\u8fc7\u573a"];
            if (cc.isValid(r)) {
              cc.game.isPersistRootNode(r) || cc.game.addPersistRootNode(r), r.active = !0, r.zIndex = i.ZORDER.LOADING_SCREEN;
              var c = r.getChildByName("anima").getComponent(cc.Animation);
              c.play("gc_in").speed = e, null != t && setTimeout(function () {
                n && n()
              }, 1e3 * t), null != a && setTimeout(function () {
                o && o()
              }, 1e3 * a), c.on("finished", function () {
                r.active = !1, s && s()
              })
            }
          }
        },
        showTip: function (e, t, n) {
          var a = this;
          if (void 0 === t && (t = 1.8), void 0 === n && (n = !1), (!this.tipComplete || n) && this.dictSharedPanel["ui/global/Tip"]) {
            var o = GlobalMng.poolMng.getNode(this.dictSharedPanel["ui/global/Tip"]);
            cc.isValid(o) && !o.parent && (this.tipComplete = !0, o.parent = cc.find("Canvas"), o.active = !0, o.zIndex = i.ZORDER.SYSTEM_TIPS, o.setPosition(0, -200), o.getComponent("Tip").showTip(e, t, function () {
              GlobalMng.poolMng.putNode(o), a.tipComplete = !1
            }))
          }
        },
        showMemoryRes: function (e, t, i, n) {
          var a = cc.instantiate(this.dictSharedPanel[e]);
          return a.parent = t || cc.find("Canvas"), i ? a.setPosition(i) : a.setPosition(0, 0), n && (a.zIndex = n), a
        },
        showShareDG: function (e, t, a, o) {
          var s = this;
          if (void 0 === t && (t = null), void 0 === a && (a = null), void 0 === o && (o = []), !this.loadingDialogPaths[e] && this.canProcessClick()) {
            var r = t || cc.find("Canvas");
            if (this.dictSharedPanel[e] && cc.isValid(this.dictSharedPanel[e])) {
              var c = this.dictSharedPanel[e];
              if (cc.isValid(c)) {
                c.parent = r, c.active = !0, c.setPosition(0, 0);
                var l = c.getComponent("AShareUIBase");
                c.zIndex = a || i.ZORDER.UI_MODAL, l && "function" == typeof l.setPrefabPath && l.setPrefabPath(e), l && "function" == typeof l.show && l.show.apply(l, o)
              }
            } else this.loadingDialogPaths[e] = !0, n.createUIByBundle(e, r, function (t) {
              var n = !s.loadingDialogPaths[e];
              if (s.loadingDialogPaths[e] = !1, t.parent = r, t.active = !0, t.setPosition(0, 0), t.zIndex = a || i.ZORDER.UI_MODAL, s.dictSharedPanel[e] = t, n) s.closeShareDG(e);
              else {
                var c = t.getComponent("AShareUIBase");
                c && "function" == typeof c.setPrefabPath && c.setPrefabPath(e), c && "function" == typeof c.show && c.show.apply(c, o)
              }
            })
          }
        },
        hideShareDG: function (e, t) {
          if (this.dictSharedPanel.hasOwnProperty(e)) {
            var i = this.dictSharedPanel[e];
            i && cc.isValid(i) && this.hidePopup(i.getChildByName("root"), function () {
              i.active = !1, i.parent = null, t && t()
            })
          }
          this.loadingDialogPaths[e] = !1
        },
        closeShareDG: function (e) {
          if (this.dictSharedPanel.hasOwnProperty(e)) {
            var t = this.dictSharedPanel[e];
            t && cc.isValid(t) && (t.active = !1, t.parent = null)
          }
          this.loadingDialogPaths[e] = !1
        },
        closeAllShareDG: function () {
          for (var e in this.dictSharedPanel) this.closeShareDG(e)
        },
        createDynamicsRes: function (e, t, i, a, o) {
          void 0 === a && (a = null), n.createUIByBundle(e, t, function (n) {
            n ? (n.parent = t || cc.find("Canvas"), i ? n.setPosition(i) : n.setPosition(0, 0), null != a && (n.zIndex = a), o && o(n)) : console.error("Failed to create effect node from path: " + e)
          })
        },
        createDynamicsSke: function (e, t, a, o, s, r) {
          void 0 === r && (r = "animation"), n.createUIByBundle(e, t, function (n) {
            if (n) {
              n.parent = t, n.zIndex = i.ZORDER.EFFECT_NUM, a && n.setPosition(a), o && o(n);
              var c = function () {
                  s && s(), null == n || n.destroy()
                },
                l = n.getChildByName("ske").getComponent(sp.Skeleton);
              l ? (l.setAnimation(0, r, !1), l.setCompleteListener(function (e) {
                r && e.animation.name !== r || c()
              })) : (console.error('Spine component not found on "effect" nodrpole\n                e for path: ' + e), c())
            } else console.error("Failed to create effect node from path: " + e)
          })
        }
      }));
    a.start(), t.exports = a, cc._RF.pop()
  }, {
    Constants: "Constants",
    SceneMng: "SceneMng"
  }],
  VSLayer: [function (e, t) {
    "use strict";

    function i(e, t) {
      var i;
      if ("undefined" == typeof Symbol || null == e[Symbol.iterator]) {
        if (Array.isArray(e) || (i = n(e)) || t && e && "number" == typeof e.length) {
          i && (e = i);
          var a = 0;
          return function () {
            return a >= e.length ? {
              done: !0
            } : {
              done: !1,
              value: e[a++]
            }
          }
        }
        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }
      return (i = e[Symbol.iterator]()).next.bind(i)
    }

    function n(e, t) {
      if (e) {
        if ("string" == typeof e) return a(e, t);
        var i = Object.prototype.toString.call(e).slice(8, -1);
        return "Object" === i && e.constructor && (i = e.constructor.name), "Map" === i || "Set" === i ? Array.from(e) : "Arguments" === i || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i) ? a(e, t) : void 0
      }
    }

    function a(e, t) {
      (null == t || t > e.length) && (t = e.length);
      for (var i = 0, n = new Array(t); i < t; i++) n[i] = e[i];
      return n
    }
    cc._RF.push(t, "979ee5t/WdIkKv7IAnyCTMR", "VSLayer");
    var o = e("PlayerData");
    cc.Class({
      extends: cc.Component,
      properties: {
        labVsNum: cc.Label,
        labVstotal: cc.Label,
        labTime: cc.Label,
        coutTimeNode: cc.Node,
        successNode: cc.Node,
        smpleHeadNode: cc.Node,
        headParent: cc.Node,
        labCount: cc.Label
      },
      initVS: function (e) {
        var t = this;
        this.playNum = e, this.labVstotal.string = e;
        for (var i = 0; i < this.playNum; i++) cc.instantiate(this.smpleHeadNode).parent = this.headParent;
        this.isVsSuccess = !1, this.screenWidth = cc.winSize.width, this.spreadDuration = .6, this.spreadInterval = 200, this.scrollSpeed = 260, this.nodeCount = this.headParent.children.length, this.totalWidth = (this.nodeCount - 1) * this.spreadInterval, this.startScroll = !1, this.randMin = .25, this.randMax = .5, this.ppDT = 0, this.randPPTime = _.randomInRange(this.randMin, this.randMax), this.scheduleOnce(function () {
          t.spreadNodes()
        }, .25), this.personNum = 1, this.timeCount = 0, this.timeDT = 0, this.labVsNum.string = this.personNum, this.labTime.string = this.timeCount, this.main = cc.find("Canvas").getComponent("Main"), this.vsSuccessCount = 5, this.labCount.string = this.vsSuccessCount
      },
      start: function () {
        var e = this;
        this.node.getChildByName("click").on(cc.Node.EventType.TOUCH_END, function () {
          e.isVsSuccess && e.click()
        }, this)
      },
      click: function () {
        var e;
        null == (e = this.node) || e.destroy(), this.main.initGuoChangAnimation()
      },
      spreadNodes: function () {
        for (var e = this, t = this.nodeCount / 2, i = function (i) {
            var n = e.headParent.children[i],
              a = (i - t + .5) * e.spreadInterval;
            cc.tween(n).to(e.spreadDuration, {
              x: a
            }, {
              easing: "sineOut"
            }).call(function () {
              if (i === e.nodeCount - 1) {
                GlobalMng.audioMng.playSoundRes("\u5339\u914d\u6eda\u52a8"), e.startScroll = !0, e.allHeadNode = [], e.allHeadNode = e.headParent.children, e.allHeadNode = _.shuffle(e.allHeadNode);
                var t = e.allHeadNode[0].getChildByName("playerNode");
                t.getChildByName("labName").getComponent(cc.Label).string = o.playerInfo.nickName, GlobalMng.setHead("PeopleDataTable", o.getSkinNameById(), t.getChildByName("spHead").getComponent(cc.Sprite), t.getComponent(cc.Sprite)), t.getChildByName("rank").getComponent("PaiWeiShow").initPaiWei(o.playerInfo.rank), e.allHeadNode[0].getChildByName("playerNode").active = !0, e.allHeadNode[0].getChildByName("huiNode").active = !1
              }
            }).start()
          }, n = 0; n < this.nodeCount; n++) i(n)
      },
      retractNodes: function () {
        for (var e = this.nodeCount / 2, t = 0; t < this.nodeCount; t++) {
          var i = this.headParent.children[t],
            n = 180 * (t % e - (e - 1) / 2),
            a = 200 * (t < e ? 1 : -1) / 2;
          cc.tween(i).parallel(cc.tween().to(.35, {
            position: cc.v2(n, a)
          }, {
            easing: "backOut"
          }), cc.tween().to(.35, {
            scale: 1.2
          }).to(.15, {
            scale: 1
          }, {
            easing: "sineOut"
          }), cc.tween().to(.2, {
            opacity: 150
          }).to(.15, {
            opacity: 255
          }, {
            easing: "sineIn"
          })).start()
        }
        this.schedule(this.countTimeFunc, 1)
      },
      addPerson: function () {
        if (!(this.personNum >= this.playNum)) {
          var e = this.main.recordRank[this.personNum],
            t = this.allHeadNode[this.personNum].getChildByName("playerNode"),
            i = this.allHeadNode[this.personNum].getChildByName("huiNode");
          t.getChildByName("labName").getComponent(cc.Label).string = e.nickName, GlobalMng.setHead("PeopleDataTable", e.skinName, t.getChildByName("spHead").getComponent(cc.Sprite), t.getComponent(cc.Sprite)), t.getChildByName("rank").getComponent("PaiWeiShow").initPaiWei(e.rankId), t.active = !0, i.active = !1, this.personNum++, this.labVsNum.string = this.personNum, this.personNum >= this.playNum && this.complete()
        }
      },
      complete: function () {
        var e = this;
        GlobalMng.audioMng.stopSoundRes("\u5339\u914d\u6eda\u52a8"), this.coutTimeNode.active = !1, this.scrollSpeed = 6e3, this.scheduleOnce(function () {
          GlobalMng.audioMng.playSoundRes("\u5339\u914d\u6210\u529f"), e.isVsSuccess = !0, e.successNode.active = !0, e.retractNodes()
        }, .58)
      },
      countTimeFunc: function () {
        this.vsSuccessCount--, this.vsSuccessCount <= 0 && (this.vsSuccessCount = 0, this.unschedule(this.countTimeFunc), this.click()), this.labCount.string = this.vsSuccessCount
      },
      update: function (e) {
        if (!this.isVsSuccess && (this.timeDT += e, this.timeDT >= 1 && (this.timeDT = 0, this.timeCount++, this.labTime.string = this.timeCount), this.startScroll)) {
          for (var t, n = i(this.headParent.children); !(t = n()).done;) {
            var a = t.value;
            a.x -= this.scrollSpeed * e, a.x < -this.totalWidth / 2 - this.spreadInterval / 2 && (a.x += this.totalWidth + this.spreadInterval)
          }
          this.ppDT += e, this.ppDT >= this.randPPTime && (this.ppDT = 0, this.randPPTime = _.randomInRange(this.randMin, this.randMax), this.addPerson())
        }
      }
    }), cc._RF.pop()
  }, {
    PlayerData: "PlayerData"
  }],
  Warehouse: [function (e, t) {
    "use strict";
    cc._RF.push(t, "5b864YskQFCCauG7Dj2LLeV", "Warehouse");
    var i = e("PlayerData");
    cc.Class({
      extends: e("AShareUIBase"),
      properties: {
        leftNode: cc.Node,
        middleNode: cc.Node,
        rightNode: cc.Node,
        humanScroll: cc.ScrollView,
        humanListNode: cc.Node,
        humanSimple: cc.Node,
        zombileScroll: cc.ScrollView,
        zombieListNode: cc.Node,
        zombileSimple: cc.Node,
        weaponScroll: cc.ScrollView,
        weaponListNode: cc.Node,
        gunNodeSample: cc.Node,
        filterNode: cc.Node
      },
      onEnable: function () {
        AD.hideBanner(), AD.chaPing()
      },
      onLoad: function () {
        this._super(), this.inintOncePlayer(), this.leftYsPos = this.leftNode.getPosition(), this.rightYsPos = this.rightNode.getPosition()
      },
      show: function () {
        var e = this;
        this.showTween(), this.createWeapon(), this.scheduleOnce(function () {
          e.humanListNode.children.forEach(function (e) {
            i.hasGoodsById("PeopleDataTable", e.name) ? e.active = !0 : e.active = !1
          }), e.zombieListNode.children.forEach(function (e) {
            i.hasGoodsById("MonsterDataTable", e.name) ? e.active = !0 : e.active = !1
          }), e.showLeft(), e.showHeadImage(), e.showZombieHeadImage(), e.showWeapon(), e.showSelectType()
        }, 0)
      },
      showTween: function () {
        cc.tween(this.leftNode).set({
          position: cc.v2(this.leftYsPos.x - 1e3, this.leftYsPos.y)
        }).to(.35, {
          position: this.leftYsPos
        }, {
          easing: "sineOut"
        }).start(), cc.tween(this.rightNode).set({
          position: cc.v2(this.rightYsPos.x + 1e3, this.rightYsPos.y)
        }).to(.35, {
          position: this.rightYsPos
        }, {
          easing: "sineOut"
        }).start()
      },
      videoSuccess: function () {},
      hideSuccess: function () {
        console.log("\u5f53\u524d\u573a\u666f\u540d\u5b57:", cc.director.getScene()._name), "main" == cc.director.getScene()._name && cc.find("Canvas").getComponent("Main").updatePlayer(), this.weaponListNode.removeAllChildren(!0)
      },
      showLeft: function (e) {
        void 0 === e && (e = null);
        for (var t = e || "\u6b66\u5668", i = this.leftNode.children, n = 0; n < i.length; n++) {
          var a = i[n];
          a.name === t ? a.getChildByName("select").active = !0 : a.getChildByName("select").active = !1
        }
        this.flushMiddle(t), this.flushRight(t)
      },
      btnLeft: function (e) {
        this.showLeft(e.currentTarget.name)
      },
      flushMiddle: function (e) {
        for (var t = this.middleNode.children, i = 0; i < t.length; i++) {
          var n = t[i];
          n.name === e + "Node" ? n.active = !0 : n.active = !1
        }
      },
      flushRight: function (e) {
        for (var t = this.rightNode.children, i = 0; i < t.length; i++) {
          var n = t[i];
          n.name === e + "Node" ? (this.descMiddele(n.name), n.active = !0) : n.active = !1
        }
      },
      descMiddele: function (e) {
        this.curGoodName = "", this.curGoodstable = "", "\u5e78\u5b58\u8005Node" == e ? (this.middleNode.getChildByName(e).getChildByName("showRole").getChildByName("\u89d2\u8272").getComponent("ActorSpineShow").intiSKin(this.curClickHuman, this.curClickWeapon), this.curGoodName = this.curClickHuman, this.curGoodstable = "PeopleDataTable") : "\u611f\u67d3\u8005Node" == e ? (this.middleNode.getChildByName(e).getChildByName("showRole").getChildByName("\u89d2\u8272").getComponent("ActorSpineShow").initZombieSkin(this.curClickZombie), this.curGoodName = this.curClickZombie, this.curGoodstable = "MonsterDataTable") : "\u6b66\u5668Node" == e && (this.middleNode.getChildByName(e).getChildByName("weaponShow").getComponent("ActorWeaponShow").initWeapon(this.curClickWeapon), this.curGoodName = this.curClickWeapon, this.curGoodstable = "GunsDataTable"), i.wearEquip(this.curGoodstable, this.curGoodName)
      },
      btnSelectEvent: function () {},
      showHeadImage: function (e, t) {
        void 0 === e && (e = null), void 0 === t && (t = !0);
        for (var n = e || i.getSkinNameById(), a = this.humanListNode.children, o = null, s = 0; s < a.length; s++) {
          var r = a[s];
          r.name === n ? (r.getChildByName("spSelect").active = !0, o = r) : r.getChildByName("spSelect").active = !1
        }
        t && GlobalMng.ccTools.scrollVerticaPos(this.humanScroll, this.humanListNode, o), this.curClickHuman = n, this.descMiddele("\u5e78\u5b58\u8005Node")
      },
      btnHeadImage: function (e) {
        this.showHeadImage(e.currentTarget.name)
      },
      showZombieHeadImage: function (e, t) {
        void 0 === e && (e = null), void 0 === t && (t = !0);
        for (var n = e || i.getMonsterSkinNameById(), a = this.zombieListNode.children, o = null, s = 0; s < a.length; s++) {
          var r = a[s];
          r.name === n ? (r.getChildByName("spSelect").active = !0, o = r) : r.getChildByName("spSelect").active = !1
        }
        t && GlobalMng.ccTools.scrollVerticaPos(this.zombileScroll, this.zombieListNode, o), this.curClickZombie = n, this.descMiddele("\u611f\u67d3\u8005Node")
      },
      btnMonsterHeadImage: function (e) {
        this.showZombieHeadImage(e.currentTarget.name)
      },
      showWeapon: function (e, t) {
        void 0 === e && (e = null), void 0 === t && (t = !0);
        for (var n = e || i.getWeaponNameById(), a = this.weaponListNode.children, o = null, s = 0; s < a.length; s++) {
          var r = a[s];
          r.name === n ? (r.getChildByName("spSelect").active = !0, o = r) : r.getChildByName("spSelect").active = !1
        }
        t && GlobalMng.ccTools.scrollVerticaPos(this.weaponScroll, this.weaponListNode, o), this.curClickWeapon = n, this.descMiddele("\u6b66\u5668Node")
      },
      btnWeapon: function (e) {
        this.showWeapon(e.currentTarget.name)
      },
      showSelectType: function (e) {
        void 0 === e && (e = null);
        for (var t = e || "\u5168\u90e8", i = this.filterNode.children, n = 0; n < i.length; n++) {
          var a = i[n];
          a.name === "btn" + t ? a.getChildByName("bg").active = !0 : a.getChildByName("bg").active = !1
        }
        var o = this.weaponListNode.children;
        "\u5168\u90e8" == t ? o.forEach(function (e) {
          e.active = !0
        }) : o.forEach(function (e) {
          var i = GlobalMng.jsonMng.getConfigByEle("GunsDataTable", "Name", e.name).GunsType;
          e.active = t === i
        })
      },
      btnFilterWeapon: function (e, t) {
        var i = this;
        this.showSelectType(t), this.scheduleOnce(function () {
          i.showWeapon(i.curClickWeapon)
        }, 0)
      },
      inintOncePlayer: function () {
        var e = this,
          t = GlobalMng.jsonMng.getConfig("PeopleDataTable"),
          n = GlobalMng.jsonMng.getConfig("MonsterDataTable");
        t.forEach(function (t) {
          if (0 != t.PeopleType) {
            var i = cc.instantiate(e.humanSimple);
            i.parent = e.humanListNode, i.name = t.Name, GlobalMng.setHead("PeopleDataTable", t.Name, i.getChildByName("spHead").getComponent(cc.Sprite))
          }
        }), n.forEach(function (t) {
          if (0 != t.PeopleType) {
            var i = cc.instantiate(e.zombileSimple);
            i.parent = e.zombieListNode, i.name = t.Name, GlobalMng.setHead("MonsterDataTable", t.Name, i.getChildByName("spHead").getComponent(cc.Sprite))
          }
        }), this.curClickHuman = i.getWeaponNameById(), this.curClickZombie = i.getMonsterSkinNameById()
      },
      createWeapon: function () {
        var e = this;
        this.rightNode.getChildByName("\u6b66\u5668Node").active = !0, GlobalMng.jsonMng.getConfig("GunsDataTable").forEach(function (t) {
          if (!t.Special && i.hasGoodsById("GunsDataTable", t.Name)) {
            var n = cc.instantiate(e.gunNodeSample);
            n.parent = e.weaponListNode, n.x = 0, n.y = 0, n.name = t.Name, n.getChildByName("labName").getComponent(cc.Label).string = t.Name, GlobalMng.setWeapon("GunsDataTable", t.Name, n.getChildByName("skeGun").getComponent(sp.Skeleton))
          }
        }), this.curClickWeapon = i.getWeaponNameById()
      }
    }), cc._RF.pop()
  }, {
    AShareUIBase: "AShareUIBase",
    PlayerData: "PlayerData"
  }],
  WeaponBase: [function (e, t) {
    "use strict";
    cc._RF.push(t, "ce752n7/XlKbIfD8WDCU2Ob", "WeaponBase"), cc.Class({
      extends: cc.Component,
      properties: {
        weaponId: 0,
        weaponName: "\u9ed8\u8ba4\u6b66\u5668",
        weaponType: "primary",
        weaponIcon: {
          default: null,
          type: cc.SpriteFrame
        },
        weaponModel: {
          default: null,
          type: cc.Prefab
        },
        baseDamage: 10,
        headShotMultiplier: 2.5,
        armShotMultiplier: .7,
        legShotMultiplier: .5,
        criticalChance: 0,
        criticalMultiplier: 0,
        fireRate: .05,
        isAutomatic: !0,
        range: 650,
        clipSize: 30,
        ammoSize: 30,
        totalAmmo: 900,
        currentClip: 30,
        reloadTime: 2,
        mobility: 100,
        switchSpeed: 1,
        decelerationFactor: .3,
        decelerationDuration: 1,
        gunSV: 100,
        gunHit: 0,
        bulletSpeed: 2e3,
        fireSound: {
          default: null,
          type: cc.AudioClip
        },
        reloadSound: {
          default: null,
          type: cc.AudioClip
        },
        muzzleFlash: {
          default: null,
          type: cc.Prefab
        },
        _lastFireTime: 0,
        _isReloading: !1,
        _player: null,
        _isEquipped: !1,
        _canFire: !0
      },
      onLoad: function () {
        this._lastFireTime = 0, this._isReloading = !1
      },
      setHolder: function (e) {
        this.character = e, this.game = e.game
      },
      replaceBulletHUD: function (e) {
        void 0 === e && (e = !0), this.character.isPlayer() && this.game.setBulletLabel(this.currentClip + "/" + this.totalAmmo), e && this.character.setCurBulletPress(this.currentClip / this.clipSize), this.character.isPlayer() && this.currentClip > 0 && (this.game.joystickNode.getChildByName("VideoBullet").active = !1)
      },
      setWeaponConfig: function (e, t) {
        for (var i in this.weaponConfig = t, e) this.hasOwnProperty(i) && (this[i] = void 0 !== e[i] ? e[i] : this[i]);
        this.currentClip = this.clipSize, this.totalAmmo = this.ammoSize, this.character.setCurBulletPress(1), this._lastFireTime = 0, this._isReloading = !1, this._canFire = !0, this.character.spineCtrl._clearTracks(1), this.character.spineCtrl._clearTracks(3), this.replaceBulletHUD()
      },
      equipBullet: function () {
        this.totalAmmo = this.ammoSize, this.replaceBulletHUD(!1), this.currentClip <= 0 && this.totalAmmo > 0 && this.reload()
      },
      equip: function () {
        this._isEquipped = !0, this.node.active = !0
      },
      unequip: function () {
        this._isEquipped = !1, this.node.active = !1
      },
      startFire: function () {
        this._canFire && !this._isReloading && (this.character.isFire = !0, this.isAutomatic ? (this.schedule(this.fire, this.fireRate), this.fire()) : this.fire())
      },
      stopFire: function () {
        this.isAutomatic && this.unschedule(this.fire)
      },
      fire: function () {
        var e = cc.director.getTotalTime() / 1e3;
        e - this._lastFireTime < this.fireRate - .01 || (this._lastFireTime = e, this.character.isAlive ? this.currentClip <= 0 ? (this.playEmptySound(), this.reload()) : (this.currentClip--, this.playFireEffects(), this.performShot(), this.currentClip <= 0 && this.totalAmmo > 0 && this.reload()) : this.unschedule(this.fire))
      },
      getFirePos: function () {
        var e = this.character.gunPosNode.convertToWorldSpaceAR(cc.v2(0, 0));
        return this.game.bulletRoot.convertToNodeSpaceAR(e)
      },
      isInWeaponRange: function () {
        return cc.isValid(this.character.perceptionData.nearestEnemy) && this.character.perceptionData.nearestEnemyDist <= this.range
      },
      isNeedReload: function () {
        cc.isValid(this.character.perceptionData.nearestEnemy) && this.character.perceptionData.nearestEnemyDist > 700 && this.currentClip < .5 * this.clipSize && this.reload()
      },
      performShot: function () {
        var e = this.character.moveScript.getFaceDir();
        if (this.character.perceptionData.nearestEnemy && this.isInWeaponRange()) {
          var t = this.getFirePos();
          e = this.character.perceptionData.nearestEnemy.getComponent("Character").getCenterPos().sub(t).normalize(), this.character.restoreImageTime = 0, this.character.moveScript.mirrorImage = null
        } else this.character.moveScript.restoreImage(), this.character.restoreBone(), this.character.restoreImageTime = 10;
        if ("\u9730\u5f39\u67aa" == this.weaponConfig.GunsType) this.fireShotgun(e);
        else {
          var i = "\u72d9\u51fb\u67aa" == this.weaponConfig.GunsType ? 1 : 0;
          this.game.bulletFactory.createBullet(i, this, this.getFirePos(), e)
        }
        this.character.firAction(), this.replaceBulletHUD()
      },
      fireShotgun: function (e) {
        for (var t = 0; t < 6; t++) {
          var i = (3 * (t - 2.5) + 2 * (Math.random() - .5)) * Math.PI / 180,
            n = cc.v2(Math.cos(i) * e.x - Math.sin(i) * e.y, Math.sin(i) * e.x + Math.cos(i) * e.y);
          this.game.bulletFactory.createBullet(0, this, this.getFirePos(), n)
        }
      },
      calculateDamage: function (e) {
        var t = this.baseDamage;
        switch (e) {
          case "head":
            t *= this.headShotMultiplier;
            break;
          case "arm":
            t *= this.armShotMultiplier;
            break;
          case "leg":
            t *= this.legShotMultiplier
        }
        var i = Math.random() < this.criticalChance;
        return i && (t *= this.criticalMultiplier), {
          damage: t,
          isCritical: i,
          criticalMultiplier: this.criticalMultiplier
        }
      },
      reload: function () {
        this._isReloading || this.totalAmmo <= 0 || this.currentClip === this.clipSize || (this._isReloading = !0, this._canFire = !1, this.playReloadSound(), this.scheduleOnce(this.completeReload, this.reloadTime), this.character.reloadBulletPress())
      },
      completeReload: function () {
        if (this._isReloading) {
          var e = this.clipSize - this.currentClip,
            t = Math.min(e, this.totalAmmo);
          this.currentClip += t, this.totalAmmo -= t, this._isReloading = !1, this._canFire = !0, this.character.spineCtrl._clearTracks(3), this.replaceBulletHUD(!1)
        }
      },
      fillup: function () {
        this.currentClip = this.clipSize, this.totalAmmo = this.ammoSize, this._isReloading = !1, this._canFire = !0, this.character.spineCtrl._clearTracks(3), this.character.setCurBulletPress(1), this.replaceBulletHUD(!1)
      },
      playFireEffects: function () {
        if (this.weaponConfig.Name.includes("AK47") ? this.game.playSoundByDist("weapon/AK47", this.character.getCenterPos(), this.character) : this.weaponConfig.Name.includes("AUG") ? this.game.playSoundByDist("weapon/AUG", this.character.getCenterPos(), this.character) : this.weaponConfig.Name.includes("AWP") ? this.game.playSoundByDist("weapon/AWP", this.character.getCenterPos(), this.character) : this.weaponConfig.Name.includes("M4A1") ? this.game.playSoundByDist("weapon/M4A1", this.character.getCenterPos(), this.character) : this.weaponConfig.Name.includes("M249") ? this.game.playSoundByDist("weapon/M249", this.character.getCenterPos(), this.character) : this.weaponConfig.Name.includes("MK5") ? this.game.playSoundByDist("weapon/MK5", this.character.getCenterPos(), this.character) : this.weaponConfig.Name.includes("RPK") ? this.game.playSoundByDist("weapon/RPK", this.character.getCenterPos(), this.character) : this.weaponConfig.Name.includes("SCAR") ? this.game.playSoundByDist("weapon/SCAR", this.character.getCenterPos(), this.character) : this.weaponConfig.Name.includes("\u52a0\u7279\u6797") ? this.game.playSoundByDist("weapon/\u52a0\u7279\u6797", this.character.getCenterPos(), this.character) : this.weaponConfig.Name.includes("\u5df4\u96f7\u7279") ? this.game.playSoundByDist("weapon/\u5df4\u96f7\u7279", this.character.getCenterPos(), this.character) : this.weaponConfig.Name.includes("\u6c64\u59c6\u900a") ? this.game.playSoundByDist("weapon/\u6c64\u59c6\u900a", this.character.getCenterPos(), this.character) : this.weaponConfig.Name.includes("\u96f7\u660e\u987f") && this.game.playSoundByDist("weapon/\u96f7\u660e\u987f", this.character.getCenterPos(), this.character), this.muzzleFlash) {
          var e = cc.instantiate(this.muzzleFlash);
          e.parent = this.node, e.position = cc.v2(0, 0), this.scheduleOnce(function () {
            null == e || e.destroy()
          }, .1)
        }
      },
      playReloadSound: function () {
        this.game.playSoundByDist("\u4e0a\u5b50\u5f39", this.character.getCenterPos(), this.character), this.character.reloadAction()
      },
      playEmptySound: function () {
        this.character.isPlayer() && 0 == this.totalAmmo && (GlobalMng.uiMng.showTip("\u5b50\u5f39\u6570\u91cf\u4e3a0"), this.game.joystickNode.getChildByName("VideoBullet").active = !0, this.stopFire())
      },
      addAmmo: function (e) {
        this.totalAmmo += e
      },
      canReload: function () {
        return !this._isReloading && this.totalAmmo > 0 && this.currentClip < this.clipSize
      },
      isReloading: function () {
        return this._isReloading
      }
    }), cc._RF.pop()
  }, {}],
  WeaponPack: [function (e, t) {
    "use strict";
    cc._RF.push(t, "72a00vwb6NDyZgaNLxUzGsj", "WeaponPack"), cc.Class({
      extends: e("AShareUIBase"),
      properties: {
        bg1: cc.Node,
        bg2: cc.Node
      },
      onLoad: function () {
        this._super()
      },
      show: function () {
        this._super(), this.bg1.active = !0, this.bg2.active = !0
      },
      videoSuccess: function () {},
      hideSuccess: function () {
        console.log("\u5f53\u524d\u573a\u666f\u540d\u5b57:", cc.director.getScene()._name), "main" == cc.director.getScene()._name && cc.find("Canvas").getComponent("Main").updatePlayer(), this.bg1.active = !1, this.bg2.active = !1
      }
    }), cc._RF.pop()
  }, {
    AShareUIBase: "AShareUIBase"
  }],
  WeaponPush: [function (e, t) {
    "use strict";
    cc._RF.push(t, "8ed04WYJqJOVKiLMxGul6Cq", "WeaponPush"), cc.Class({
      extends: e("AShareUIBase"),
      properties: {
        skeWeapon: sp.Skeleton,
        spLevel: cc.Sprite,
        labWeaponName: cc.Label
      },
      onLoad: function () {
        this._super()
      },
      show: function (e, t) {
        this._super(), this.weaponNode = t, this.weaponData = GlobalMng.jsonMng.getConfigByEle("GunsDataTable", "Name", e), this.skeWeapon.setAnimation(0, "\u67aa\u52a8\u6001/" + e, !0), GlobalMng.sceneMng.setSpriteFrameByBundle("Res/\u89d2\u8272\u7ea7\u522b/sd_dk_name_" + this.weaponData.Lv, this.spLevel), this.labWeaponName.string = this.weaponData.Name, GlobalMng.pauseAll()
      },
      videoSuccess: function () {
        var e;
        null == (e = this.weaponNode) || e.destroy(), this.btnCloseShare(), GlobalMng.getGame().selfPlayer.replaceWeapon(this.weaponData.ID), GlobalMng.uiMng.showTip("\u83b7\u5f97\u7a7a\u6295\u8865\u7ed9" + this.weaponData.Name)
      },
      hideSuccess: function () {},
      closeCallBack: function () {
        this.weaponNode.getComponent("DropWeapon").deleyTimeCollier()
      }
    }), cc._RF.pop()
  }, {
    AShareUIBase: "AShareUIBase"
  }],
  ZombieCollArea: [function (e, t) {
    "use strict";
    cc._RF.push(t, "328eaaazDpGIpkAH+LdIwOL", "ZombieCollArea"), cc.Class({
      extends: cc.Component,
      properties: {},
      setCharacterTarget: function (e) {
        this.character = e
      },
      onCollisionEnter: function (e) {
        if (200 == e.tag) {
          var t = e.node.getComponent("GrenadeBoom"),
            i = t._sourceCharacter._gAamage;
          this.character.takeDamage({
            damage: i,
            randomMultiplier: null
          }, {
            source: t._sourceCharacter,
            weapon: null,
            dir: null,
            hitPoint: this.character.getCenterPos()
          })
        } else if (201 == e.tag) {
          var n = e.node.getComponent("GrenadeBoom"),
            a = n._sourceCharacter._liuDanAamage;
          this.character.takeDamage({
            damage: a,
            randomMultiplier: null
          }, {
            source: n._sourceCharacter,
            weapon: null,
            dir: null,
            hitPoint: this.character.getCenterPos()
          })
        }
      },
      onCollisionExit: function () {}
    }), cc._RF.pop()
  }, {}],
  ZombieSoleArea: [function (e, t) {
    "use strict";
    cc._RF.push(t, "6042bqSw3FHiKtHIIZG5fNH", "ZombieSoleArea"), cc.Class({
      extends: e("ZombieCollArea"),
      properties: {},
      onCollisionEnter: function () {},
      onCollisionExit: function () {}
    }), cc._RF.pop()
  }, {
    ZombieCollArea: "ZombieCollArea"
  }],
  Zombie: [function (e, t) {
    "use strict";
    cc._RF.push(t, "69075vZW89HlJHxDlY+omaN", "Zombie");
    var i = e("Types");
    e("Constants"), e("PoolMng"), cc.Class({
      extends: e("Character"),
      properties: {
        zombieType: {
          default: i.ZombieType.HongSeYouLing,
          type: i.ZombieType,
          tooltip: "\u611f\u67d3\u8005\u7c7b\u578b"
        },
        skillPress: cc.Sprite
      },
      init: function (e, t) {
        void 0 === t && (t = {}), this._super(e, t), this.initCompleted = !0, this.attackRange = null != t.attackRange ? t.attackRange : 150, this.attackPower = null != t.attackPower ? t.attackPower : 100, this.attackWay = null != t.attackWay ? t.attackWay : i.ZombieAttackWay.Once, this.isCanRevive = null == t.isCanRevive || t.isCanRevive, this.isParasite = null != t.isParasite && t.isParasite, this.isChaoTi = this.attackWay == i.ZombieAttackWay.DeathBlow, this.zhuGongTime = 0, this.isCanLock = !0, this.skillCoolDown = !1, this.shield = 0, this.isAttackIng = !1, this.isHurtIng = !1, this.initPlayerInfo(t), this.setSportState(), 0 == GlobalMng.isChallengeModel() && GlobalMng.audioMng.playSoundRes("\u611f\u67d3\u8005\u53eb\u58f0" + _.random(1, 2)), 0 == GlobalMng.isChallengeModel() && (this.node.getChildByName("labName").getComponent(cc.Label).string = this.game.getPlayerRecordBypName(this.name).nickName), this.attackWay == i.ZombieAttackWay.DeathBlow && (this.node.getChildByName("\u7c92\u5b50\u4e0a").active = !0, this.node.getChildByName("\u7c92\u5b50\u4e0b").active = !0)
      },
      initPlayerInfo: function (e) {
        if (this.isAI() && (this.AIBase = this.node.getComponent("AIBase"), this.AIBase.init(this.game, this), this.AIBase.enabled = !0), this.resetSpecialData(), this.skin = e.zombieData.Name, this.spineCtrl.loadAndChangeSkin("\u611f\u67d3\u8005/" + this.skin), this.isPlayer()) {
          var t = this.game.joystickNode.getChildByName("SkillButtons").getChildByName("skill2").getChildByName("skillBg2").getComponent(cc.Sprite);
          GlobalMng.sceneMng.setSpriteFrameByBundle("Res/\u6280\u80fdicon/" + e.zombieData.Skill, t), this.game.joystickNode.getChildByName("SkillButtons").getChildByName("skill2").getChildByName("skillBg2").active = !0
        }
      },
      isInAttackRange: function () {
        return this.attackRange >= this.perceptionData.nearestEnemyDist
      },
      onDownSkill1: function () {
        this.attack()
      },
      onUpSkill1: function () {},
      onDownSkill2: function () {
        GlobalMng.audioMng.playSoundRes("sfx_Btn"), this.skill()
      },
      onUpSkill2: function () {},
      onDownSkill3: function () {},
      onUpSkill3: function () {},
      resetSpecialData: function () {
        this.spineCtrl._clearTracks(), this.resetAllSpeed(), this.avoidance = 0, this.flushHealth(), this.showHealth(), this.stopTimer("\u6280\u80fd\u6301\u7eed\u8ba1\u65f6\u5668")
      },
      setShield: function (e) {
        void 0 === e && (e = 0), this.shield += e, this.shield <= 0 && (this.shield = 0, this.spineCtrl._clearTracks(3), this.restoreRealAreaSize())
      },
      attack: function () {
        var e = this;
        if (this.isAlive && !this.isAttackIng) {
          this.isAttackIng = !0, this.attackAction();
          var t = this.spineCtrl.getSkeTotalTime("\u653b\u51fb");
          this.game.playSoundByDist("\u602a\u7269\u653b\u51fb", this.node.getPosition(), this), this.scheduleOnce(function () {
            e.isAttackIng = !1, e.spineCtrl._clearTracks(1)
          }, t)
        }
      },
      skill: function () {
        var e = this;
        if (this.isAlive && !this.skillCoolDown) {
          this.skillCoolDown = !0, this.spineCtrl.ske.setAnimation(3, "\u6280\u80fd", !0);
          var t = 20,
            i = 10;
          switch (this.skin) {
            case "\u8d85\u4f53\u50f5\u5c38":
              this.speedUp(60, i, 0, 1), this.avoidance = .7;
              break;
            case "\u7ea2\u8272\u5e7d\u7075":
              this.speedUp(30, i, 0, 1), this.avoidance = .3;
              break;
            case "\u6cf0\u5766\u5de8\u4eba":
              this.speedUp(30, i, 0, 1), this.avoidance = .6;
              break;
            case "\u75af\u72c2\u5e7d\u7075":
              t = 15, i = 3, this.isCanLock = !1, this.game.humanArray.forEach(function (e) {
                e.getComponent("Character")._updatePerception()
              });
              break;
            case "\u53d8\u5f02\u9b42\u72d7":
              i = 0, this.speedUp(30, i, 0, 1), this.setShield(3e3), this.setRealAreaSize(260, 260);
              break;
            case "\u7535\u952f\u72c2\u9b54":
              this.isCharge = !0, this.moveScript.isDecelerated = !1, i = .35, t = 3, this.speedUp(500, i)
          }
          i > 0 && this.startTimer("\u6280\u80fd\u6301\u7eed\u8ba1\u65f6\u5668", i, function () {
            e.skillDown()
          }, function () {}), t > 0 && this.startTimer("\u6280\u80fd\u51b7\u5374\u5668", t, function () {
            e.game.skillLabel.string = "", e.skillCoolDown = !1
          }, function (i) {
            if (e.skillPress.fillRange = 1 - i, e.isPlayer()) {
              var n = t * i;
              e.game.skillPB.progress = i, e.game.skillLabel.string = n.toFixed(2)
            }
          })
        }
      },
      skillDown: function () {
        if (this.isCharge = !1, this.isAlive) switch (this.spineCtrl._clearTracks(3), this.skin) {
          case "\u8d85\u4f53\u50f5\u5c38":
          case "\u7ea2\u8272\u5e7d\u7075":
          case "\u6cf0\u5766\u5de8\u4eba":
            this.resetAllSpeed(), this.avoidance = 0;
            break;
          case "\u75af\u72c2\u5e7d\u7075":
            this.isCanLock = !0, this.game.humanArray.forEach(function (e) {
              e.getComponent("Character")._updatePerception()
            })
        }
      },
      kill: function () {
        this.isAlive && (this.killNum++, this.game.addRandkData(this.name, "kill", 1), this.isPlayer() && this.game.createSkeUI("actor/skillEffect/\u51fb\u6740\u56fe\u6807", cc.v2(0, -200), "\u611f\u67d3", "animation", this.game.gameTipCenterRoot, null), this.game.playSoundByDist("\u51fb\u8d25\u611f\u67d3", this.getCenterPos(), this))
      },
      takeDamage: function (e, t) {
        if (this.isAlive && cc.isValid(t.source)) {
          var i = t.source.getComponent("Human");
          if (t.dir && this.moveScript.moveDir && this.moveScript.moveDir.mag() > 0) {
            var n = t.dir,
              a = t.weapon.decelerationFactor,
              o = t.weapon.decelerationDuration;
            180 * Math.acos(n.dot(this.moveScript.moveDir)) / Math.PI >= 157.5 && 0 == this.isCharge && (this.isChaoTi && (a -= .3) <= 0 && (a = 0), this.moveScript.applyDeceleration(a, o))
          }
          var s = (1 - this.avoidance) * e.damage,
            r = parseInt(s);
          this.shield > 0 ? this.setShield(-r) : (this.flushHealth(-r), this.health <= 0 && (this.health = 0, i.isSavior && (this.isCanRevive = !1), this.game.showKillPanel(i, this), this.die(), i.kill(this)), i.scoreCompute(r), this.showDamageText(r, t.hitPoint, e.randomMultiplier), this.hurtAction()), i.isPlayer() && (this.zhuGongTime = 5)
        }
      },
      onDeath: function () {
        var e = this;
        this.isCanRevive && this.game.waitReviveZombie.push(this.node), this.deadNum++, this.game.addRandkData(this.name, "dead", 1), this.hideHealth(), this.node.getChildByName("selfTag").active = !1, this.game.removeZomie(this.node), this.closeBoxCollder();
        var t = this.isAI() ? this.game.gameModeBase.waitReviveTime : 3;
        this.spineCtrl._clearTracks(), this.spineCtrl.playSke("\u6b7b\u4ea1", function () {
          e.node.opacity = 0, e.isCanRevive ? (e.scheduleOnce(function () {
            e.revive()
          }, t), e.isPlayer() && GlobalMng.sceneMng.createUIByBundle("gameTipCenter/\u5012\u8ba1\u65f6\u590d\u6d3b", e.game.popUIRoot)) : e.goDie()
        }), this.isAI() ? this.AIBase.deathZombieAI() : GlobalMng.gamePlay != i.GamePlay.SaviorModel || this.isCanRevive || this.isPlayer() && GlobalMng.sceneMng.createUIByBundle("gameTip/\u4f60\u5df2\u88ab\u6551\u4e16\u4e3b\u51fb\u6740", this.game.gameTipRoot)
      },
      revive: function () {
        var e = this;
        this.node.opacity = 0, this.health = this.maxHealth;
        var t = this.game.bornPos[_.random(0, 11)];
        this.node.setPosition(t), GlobalMng.uiMng.createDynamicsSke("actor/skillEffect/\u611f\u67d3\u7279\u6548", this.game.bulletRoot, t, null, null), this.resetSpecialData(), this.scheduleOnce(function () {
          GlobalMng.audioMng.playSoundRes("\u611f\u67d3\u8005\u53eb\u58f0" + _.random(1, 2)), e.isAlive = !0, e.game.addZombie(e.node), e.spineCtrl.playIdle(), e.node.opacity = 255, _.removeItem(e.game.waitReviveZombie, e.node), e.openBoxCollder(), e.node.getChildByName("selfTag").active = e.isPlayer(), e.thaw()
        }, .35)
      },
      goDie: function () {
        var e;
        this.game.cameraScript.followTarget == this.node && (this.game.createObserverUI(), this.game.changeHumanCameraView()), GlobalMng.isChallengeModel() ? (this.node.opacity = 255, GlobalMng.poolMng.putNode(this.node)) : null == (e = this.node) || e.destroy()
      },
      isAttackTarget: function () {
        return !(!cc.isValid(this.perceptionData.nearestEnemy) || !this.isInAttackRange())
      },
      attackAction: function () {
        var e = this;
        this.spineCtrl.ske.setAnimation(1, "\u653b\u51fb", !1), this.spineCtrl.ske.setEventListener(null), this.spineCtrl.ske.setEventListener(function (t, n) {
          if ("\u653b\u51fb" === n.data.name && e.isAttackTarget() && cc.isValid(e.perceptionData.nearestEnemy)) switch (e.attackWay) {
            case i.ZombieAttackWay.Once:
              e.flushHealth(1e3), e.scoreCompute(1e3), e.game.showKillPanel(e, e.perceptionData.nearestEnemy.getComponent("Human")), e.perceptionData.nearestEnemy.getComponent("Human").toZombie(), e.kill();
              break;
            case i.ZombieAttackWay.DeathBlow:
              e.flushHealth(1e3), e.scoreCompute(1e3), e.game.showKillPanel(e, e.perceptionData.nearestEnemy.getComponent("Human")), e.perceptionData.nearestEnemy.getComponent("Human").die(), e.kill();
              break;
            case i.ZombieAttackWay.None:
              e.scoreCompute(1e3), e.perceptionData.nearestEnemy.getComponent("Human").takeDamage(e)
          }
        })
      },
      hurtAction: function () {
        var e = this;
        if (!this.isHurtIng) {
          this.isHurtIng = !0, this.spineCtrl.ske.setAnimation(2, "\u53d7\u51fb", !1);
          var t = this.spineCtrl.getSkeTotalTime("\u53d7\u51fb");
          this.scheduleOnce(function () {
            e.isHurtIng = !1, e.spineCtrl._clearTracks(2)
          }, t)
        }
      },
      onUpdate01: function () {
        this.isAI() && this.AIBase.onUpdate01()
      },
      updateAction: function () {
        this.isAlive && this.getIsSportState() && (this.moveScript.getIsStopState() ? this.spineCtrl.playIdle() : this.spineCtrl.playSkeLoop("\u8dd1"))
      },
      updatePlayer: function () {
        this.initCompleted
      },
      update: function (e) {
        this._super(e), this.zhuGongTime > 0 && (this.zhuGongTime -= e), this.isAlive && this.updatePlayer(e)
      }
    }), cc._RF.pop()
  }, {
    Character: "Character",
    Constants: "Constants",
    PoolMng: "PoolMng",
    Types: "Types"
  }],
  btnAddToDesk: [function (e, t) {
    "use strict";
    cc._RF.push(t, "335b87M5zhL06spYrQhxecR", "btnAddToDesk"), cc.Class({
      extends: cc.Component,
      properties: {},
      start: function () {
        var e = this;
        if ("vivo" != AD.chanelName && "oppo" != AD.chanelName1 && "QQ" != AD.chanelName1 && "honor" != AD.chanelName1 && "huaWei" != AD.chanelName1) this.node.active = !1;
        else if (AD.wuDianRate <= 0) return void(this.node.active = !1);
        this.node.on("touchend", function () {
          console.log("addToDesk"), e.addToDesk()
        }, this)
      },
      addToDesk: function () {
        if (AD.chanelName == AD.chanelName1) switch (AD.chanelName) {
          case "vivo":
            qg.hasShortcutInstalled({
              success: function (e) {
                0 == e && qg.installShortcut({
                  success: function () {},
                  fail: function () {},
                  complete: function () {}
                })
              },
              fail: function () {},
              complete: function () {}
            });
            break;
          case "huaWei":
            qg.hasShortcutInstalled({
              success: function (e) {
                console.log("hasInstalled success ret---" + e), e || qg.installShortcut({
                  message: "\u5c06\u5feb\u6377\u65b9\u5f0f\u6dfb\u52a0\u5230\u684c\u9762\u4ee5\u4fbf\u4e0b\u6b21\u4f7f\u7528",
                  success: function () {
                    console.log("handling createShortCut success")
                  },
                  fail: function () {
                    console.log("handling createShortCut fail")
                  }.bind(this)
                })
              }.bind(this),
              fail: function (e) {
                console.log("hasInstalled fail ret---" + e)
              }.bind(this),
              complete: function () {}
            });
            break;
          case "QQ":
            AD_QQ.saveToDesktopQQ();
            break;
          case "oppo":
            qg.hasShortcutInstalled({
              success: function (e) {
                0 == e && qg.installShortcut({
                  success: function () {
                    cc.director.emit("\u684c\u9762\u6dfb\u52a0\u6210\u529f")
                  },
                  fail: function (e) {
                    console.log("\u684c\u9762\u6dfb\u52a0  \u5931\u8d25 err" + JSON.stringify(e)), cc.director.emit("\u684c\u9762\u6dfb\u52a0\u5931\u8d25")
                  },
                  complete: function () {}
                })
              },
              fail: function () {},
              complete: function () {}
            });
            break;
          case "touTiao":
            AD_TouTiao.addDesktop();
            break;
          case "honor":
            qg.hasShortcutInstalled({
              success: function (e) {
                e ? (console.log("\u5df2\u521b\u5efa"), qg.showToast({
                  title: "\u521b\u5efa\u6210\u529f"
                })) : (console.log("\u672a\u521b\u5efa"), qg.installShortcut({
                  success: function () {
                    console.log("\u521b\u5efa\u6210\u529f"), qg.showToast({
                      title: "\u521b\u5efa\u6210\u529f"
                    })
                  }
                }))
              }
            })
        }
      }
    }), cc._RF.pop()
  }, {}],
  dialogYinSi: [function (e, t) {
    "use strict";
    cc._RF.push(t, "4e8aaVwPbpNiqwhAAearZYZ", "dialogYinSi"), cc.Class({
      extends: cc.Component,
      properties: {
        panel1: cc.Node,
        panel2: cc.Node,
        panel3: cc.Node
      },
      onEnable: function () {
        this.resetDialog(this.node, !0), this.panel1.active = !0, this.panel2.active = !1, this.panel3.active = !1
      },
      btnCallBack: function (e, t) {
        switch (t) {
          case "\u540c\u610f":
            this.resetDialog(this.node, !1), window.showYinSi || (cc.sys.localStorage.setItem(window.key_yinSi, 1), this.node.parent.getComponent("yinSiPanel").checkPermission());
            break;
          case "\u4e0d\u540c\u610f":
            cc.game.end(), "vivo" == AD.chanelName ? qg.exitApplication() : "oppo" == AD.chanelName ? qg.exitApplication({
              success: function () {},
              fail: function () {},
              complete: function () {}
            }) : "QQ" == AD.chanelName && qq.exitMiniProgram({});
            break;
          case "\u5173\u95ed1":
            this.resetDialog(this.node, !1);
            break;
          case "\u5173\u95ed2":
            this.panel2.active = !1, this.panel1.active = !0;
            break;
          case "\u5173\u95ed3":
            this.panel3.active = !1, this.panel1.active = !0;
            break;
          case "\u663e\u793apanel2":
            this.panel1.active = !1, this.panel2.active = !0;
            break;
          case "\u663e\u793apanel3":
            this.panel1.active = !1, this.panel3.active = !0
        }
      },
      resetDialog: function (e, t) {
        var i = e.getChildByName("zheZhao"),
          n = e.getChildByName("bg");
        t ? (e.active = !0, i.opacity = 0, n.scale = 0, cc.tween(i).to(.2, {
          opacity: 180
        }).start(), cc.tween(n).to(.2, {
          scale: 1
        }).start()) : (cc.tween(i).to(.2, {
          opacity: 0
        }).start(), cc.tween(n).to(.2, {
          scale: 0
        }).call(function () {
          e.active = !1
        }).start())
      },
      resetDialog2: function (e, t) {
        var i = e.getChildByName("zheZhao"),
          n = e.getChildByName("bg");
        t ? (e.active = !0, i.opacity = 0, n.scale = 0, cc.tween(i).to(.2, {
          opacity: 180
        }).start(), cc.tween(n).to(.2, {
          scale: 1
        }).start()) : (cc.tween(i).to(.2, {
          opacity: 0
        }).start(), cc.tween(n).to(.2, {
          scale: 0
        }).call(function () {
          null == e || e.destroy()
        }).start())
      }
    }), cc._RF.pop()
  }, {}],
  jianKangZhongGao: [function (e, t) {
    "use strict";
    cc._RF.push(t, "28582GJSNFDRoTRPP0FMBpm", "jianKangZhongGao"), cc.Class({
      extends: cc.Component,
      properties: {},
      start: function () {
        "oppo" != AD.chanelName1 && "huaWei" != AD.chanelName1 && "QQ" != AD.chanelName1 && (cc.winSize.width > cc.winSize.height ? this.node.getComponent(cc.Label).string = "\u5065\u5eb7\u6e38\u620f\u5fe0\u544a\n\u62b5\u5236\u4e0d\u826f\u6e38\u620f\uff0c\u62d2\u7edd\u76d7\u7248\u6e38\u620f\u3002\u6ce8\u610f\u81ea\u6211\u4fdd\u62a4\uff0c\u8c28\u9632\u53d7\u9a97\u4e0a\u5f53\u3002\u9002\u5ea6\u6e38\u620f\u76ca\u8111\uff0c\u6c89\u8ff7\u6e38\u620f\u4f24\u8eab\u3002\u5408\u7406\u5b89\u6392\u65f6\u95f4\uff0c\u4eab\u53d7\u5065\u5eb7\u751f\u6d3b\u3002" : this.node.getComponent(cc.Label).string = "\u5065\u5eb7\u6e38\u620f\u5fe0\u544a\n\u62b5\u5236\u4e0d\u826f\u6e38\u620f\uff0c\u62d2\u7edd\u76d7\u7248\u6e38\u620f\u3002\u6ce8\u610f\u81ea\u6211\u4fdd\u62a4\uff0c\u8c28\u9632\u53d7\u9a97\u4e0a\u5f53\u3002\n\u9002\u5ea6\u6e38\u620f\u76ca\u8111\uff0c\u6c89\u8ff7\u6e38\u620f\u4f24\u8eab\u3002\u5408\u7406\u5b89\u6392\u65f6\u95f4\uff0c\u4eab\u53d7\u5065\u5eb7\u751f\u6d3b\u3002")
      }
    }), cc._RF.pop()
  }, {}],
  lodash: [function (e, t) {
    "use strict";
    var i;
    cc._RF.push(t, "e5221judNZKTIK4v3j4sgZa", "lodash"), i = {
      forEach: function (e, t) {
        Array.isArray(e) || (e = Object.values(e)), e.forEach(t)
      },
      map: function (e, t) {
        return Array.isArray(e) || (e = Object.values(e)), e.map(t)
      },
      filter: function (e, t) {
        return Array.isArray(e) || (e = Object.values(e)), e.filter(t)
      },
      find: function (e, t) {
        return Array.isArray(e) || (e = Object.values(e)), e.find(t)
      },
      uniq: function (e) {
        return [].concat(new Set(e))
      },
      chunk: function (e, t) {
        return !e || t < 1 ? [] : Array.from({
          length: Math.ceil(e.length / t)
        }, function (i, n) {
          return e.slice(n * t, n * t + t)
        })
      },
      removeItem: function (e, t) {
        var i = e.indexOf(t);
        return -1 !== i && e.splice(i, 1), e
      },
      cloneDeep: function (e) {
        return JSON.parse(JSON.stringify(e))
      },
      isObject: function (e) {
        return null !== e && "object" == typeof e && !Array.isArray(e)
      },
      toArray: function (e) {
        return Object.values(e)
      },
      random: function (e, t) {
        return Math.floor(Math.random() * (t - e + 1)) + e
      },
      randomInRangeInt: function (e, t) {
        return "number" != typeof e || "number" != typeof t || e > t ? "\u8bf7\u63d0\u4f9b\u6709\u6548\u7684\u6570\u5b57\u8303\u56f4\uff08min \u5e94\u5c0f\u4e8e max\uff09" : Math.floor(Math.random() * (t - e + 1)) + e
      },
      randomInRange: function (e, t) {
        if ("number" != typeof e || "number" != typeof t || e > t) throw new Error("Invalid input: min and max must be numbers, and min <= max");
        return e + Math.random() * (t - e)
      },
      shuffle: function (e) {
        for (var t = e.length, i = 0; i < t - 1; i++) {
          var n = Math.floor(Math.random() * (t - i)),
            a = [e[t - i - 1], e[n]];
          e[n] = a[0], e[t - i - 1] = a[1]
        }
        return e
      },
      max: function (e) {
        return null != e && e.length ? Math.max.apply(Math, e) : void 0
      },
      dist: function (e, t) {
        var i = e.x - t.x,
          n = e.y - t.y;
        return Math.sqrt(i * i + n * n)
      },
      startsWith: function (e, t) {
        return e.startsWith(t)
      },
      endsWith: function (e, t) {
        return e.endsWith(t)
      },
      join: function (e, t) {
        return void 0 === t && (t = ""), e.join(t)
      },
      isEqual: function (e, t) {
        return JSON.stringify(e) === JSON.stringify(t)
      },
      isNumber: function (e) {
        return "number" == typeof e && !isNaN(e)
      },
      isNaN: function (e) {
        function t(t) {
          return e.apply(this, arguments)
        }
        return t.toString = function () {
          return e.toString()
        }, t
      }(function (e) {
        return i.isNumber(e) && isNaN(e)
      }),
      isCallback: function (e) {
        return "function" == typeof e || e instanceof Function
      },
      isLucky: function (e) {
        return !(!i.isNumber(e) || !Number.isInteger(e) || e < 1 || e > 100) && 100 * Math.random() < e
      },
      formatMoney: function (e) {
        for (var t = ["", "K", "M", "B", "T"], i = 0; e >= 1e4 && i < t.length - 1;) e /= 1e3, i++;
        return Math.floor(e) + t[i]
      },
      formatTime: function (e) {
        return [Math.floor(e / 3600), Math.floor(e % 3600 / 60), e % 60].map(function (e) {
          return e < 10 ? "0" + e : e
        }).join(":")
      },
      formatTimeMS: function (e) {
        return [Math.floor(e % 3600 / 60), e % 60].map(function (e) {
          return e < 10 ? "0" + e : e
        }).join(":")
      },
      formatTimeXX: function (e) {
        if (!Number.isInteger(e) || e < 0) return "0\u79d2";
        var t = Math.floor(e / 3600),
          i = Math.floor(e % 3600 / 60),
          n = e % 60,
          a = [];
        return t > 0 && a.push(t + "\u5c0f\u65f6"), (i > 0 || t > 0 && n > 0) && a.push(i + "\u5206"), a.push(n + "\u79d2"), a.join("")
      }
    }, window._ = i, cc._RF.pop()
  }, {}],
  onlinSwitch: [function (e, t) {
    "use strict";
    cc._RF.push(t, "c707fpnQhJAL5mKnIiI3etH", "onlinSwitch");
    var i = e("LabelUtils2");
    cc.Class({
      extends: cc.Component,
      properties: {},
      onLoad: function () {
        var e = this;
        if (this.dayLast = "20240702", this.showLog = !1, this.couldCheck = !0, "vivo" == AD.chanelName1 && this.getCouldCheck(), this.chanelName1 = AD.chanelName1, this.chanelName = AD.chanelName, "android" != this.chanelName1) {
          switch (cc.game.addPersistRootNode(this.node), this.chanelName1) {
            case "WX":
              this.yuanShengSecond = 0, this.schedule(function () {
                0 == AD_WX.yuanShengIsOk ? (AD_WX.showYuanSheng(), this.yuanShengSecond = 0) : (this.yuanShengSecond++, 30 == this.yuanShengSecond && AD_WX.hideYuanSheng())
              }, 1);
              break;
            case "huaWei":
              cc.game.on(cc.game.EVENT_HIDE, function () {
                console.log("------------\x3e\u540e\u53f0\u4e86")
              }, this), cc.game.on(cc.game.EVENT_SHOW, function () {
                console.log("------------\x3e\u524d\u53f0\u4e86,\u5f00\u59cb\u4e0a\u62a5"), cc.director.emit("chaPingReportAdShow")
              }, this)
          }
          if (this.chanelName == this.chanelName1 && this.couldCheck) {
            if (this.getSwitchKey(), "" == this.key || "" == this.switch) return void console.warn("\u4f20\u5165\u7684\u53ef\u4ee5\u6709\u95ee\u9898  this.key:  " + this.key + "   this.switch: " + this.switch);
            cc.director.once("\u670d\u52a1\u5668\u83b7\u53d6\u5b8c\u6bd5", function (t) {
              t && e.switchOn(), cc.director.emit("\u670d\u52a1\u5668\u83b7\u53d6\u5b8c\u6bd51", t)
            }, this), i.getInstance().initLabel(this.key), i.getInstance().getLabel(this.switch)
          }
        }
      },
      getSwitchKey: function () {
        switch (this.chanelName1) {
          case "touTiao":
            this.key = "com.wrrqmnq.tt0726", this.switch = "switch";
            break;
          case "oppo":
            this.key = "com.drqzld2.oppo250728", this.switch = "switch";
            break;
          case "vivo":
            this.key = "com.drqzld2.vivo250728", this.switch = "switch";
            break;
          case "huaWei":
            this.key = "", this.switch = "switch";
            break;
          case "QQ":
            AD_QQ.initQQ(), this.key = "", this.switch = "switch";
            break;
          case "WX":
            this.key = "", this.switch = "switch";
            break;
          case "honor":
            this.key = "com.wgshjqtj.honor0611", this.switch = "switch"
        }
      },
      switchOn: function () {
        switch (this.chanelName1) {
          case "vivo":
            AD_vivo.switchOn();
            break;
          case "oppo":
            AD_oppo.switchOn();
            break;
          case "huaWei":
            AD_HuaWei.switchOn();
            break;
          case "honor":
            AD_honor.switchOn();
            break;
          default:
            AD.wuDianRate = 1
        }
      },
      getCouldCheck: function () {
        if (this.couldCheck = !0, 8 == this.dayLast.length) {
          for (var e = new Array, t = 0; t < 7; t++) {
            var i = this.getDateDayString(t);
            if (i == this.dayLast) {
              e.push(i);
              break
            }
            e.push(i)
          }
          for (this.showLog && console.log("\u8bc4\u6d4b\u7684\u65e5\u671f:  " + e), t = 0; t < e.length; t++)
            if (this.dayLast == e[t]) {
              this.couldCheck = !1;
              break
            } this.showLog && e.length >= 7 && 0 == this.couldCheck && console.warn("\u8b66\u544a:!!!\u5929\u6570\u8d85\u8fc77\u5929????????"), console.log("*********************\u5f00\u59cb\u6e38\u620f?" + this.couldCheck)
        } else this.couldCheck = !1, console.error("\u8f93\u5165\u7684\u65e5\u671f\u4fe1\u606f\u683c\u5f0f\u6709\u8bef")
      },
      getDateDayString: function () {
        if (arguments.length <= 0 ? void 0 : arguments[0]) {
          var e = new Date;
          e.setTime(e.getTime() + 864e5 * (arguments.length <= 0 ? void 0 : arguments[0]));
          var t = e.getFullYear(),
            i = e.getMonth() + 1,
            n = e.getDate();
          arguments.length <= 0 || arguments[0], arguments.length <= 0 || arguments[0]
        } else t = this.getDate("year2"), i = this.getDate("month") + 1, n = this.getDate("day");
        i < 10 && (i = "0" + i), n < 10 && (n = "0" + n);
        var a = "" + t + i + n;
        return a
      },
      getDate: function (e) {
        var t = new Date;
        return "year" == e ? t.getYear() : "year2" == e ? t.getFullYear() : "month" == e ? t.getMonth() : "day" == e ? t.getDate() : "week" == e ? t.getDay() : "millisecond" == e ? t.getTime() : "hour" == e ? t.getHours() : "minute" == e ? t.getMinutes() : "second" == e ? t.getSeconds() : void 0
      }
    }), cc._RF.pop()
  }, {
    LabelUtils2: "LabelUtils2"
  }],
  ts: [function (e, t) {
    "use strict";
    cc._RF.push(t, "7fcfane4PdACojyNGLec/vd", "ts"), cc._RF.pop()
  }, {}]
}, {}, ["HttpUtis", "MyLog", "RxConfig", "RxManager", "RxUtls", "Tips", "TipsManager", "Icon", "ItemCtrl", "MoreGame", "MoreGameManager", "MrflIcon", "Mrfl_Prefab", "Mrfl_item", "MyMiniManager ", "MyMiniSrc", "Share", "AD", "AIBase", "AIHuman", "AIZombie", "ALayerBase", "AShareUIBase", "AStar", "ActorSpineShow", "ActorWeaponShow", "AudioController", "AudioMng", "BulletBase", "BulletFactory", "ButtonCtrl", "CCTools", "CameraController", "ChallengeModel", "ChallengeUI", "Character", "CheckPoint", "ChuanSongDai", "ChuanSongMen", "CoinMng", "Configuration", "Constants", "DiCi", "DoomsLayerModel", "DragonCtrl", "DropWeapon", "EffectBase", "EffectBoom", "EffectChuanSongMen", "EventMng", "FangHuFu", "Game", "GameCommonTip", "GameFail", "GameLoading", "GameModeBase", "GamePlayIntro", "GameWin", "GateAudo", "GiftPack", "GoldMng", "GrenadeBoom", "Human", "HumanCollArea", "HumanSoleArea", "InputManager", "Introduction", "Item", "ItemShop", "Joystick", "JsonConfigMng", "Key", "KillFeedMng", "LabelUtils2", "Laser", "ListViewCtrl", "LoadingUI", "Login", "Main", "Map", "Move", "NewPack", "ObserverLayer", "OnLineNum", "PageViewCtrl", "PaiWeiShow", "PlayerData", "Plot", "PoolMng", "ProgressBarCtrl", "QuadTree", "Rank", "RankReward", "ResourceMng", "ReviveOne", "RevivePanel", "RoleShop", "RoleShopDouble", "SaviorModel", "ScaleForevery", "SceneMng", "ScoreFeedMng", "ScoreUI", "SecondPanel", "SelectZombie", "Shop", "Signin", "SigninCheck", "Skill", "SkillDesc", "SpecialOffer", "SpineCtrl", "SpinePreview", "SurvivalMode", "TemplateLayer", "TemplateUI", "Test", "TestYsLoading", "ThreeCount", "TimeManager", "Tip", "TranscendentModel", "Traps", "TurnScene", "TweenEffect", "Types", "UIManager", "VSLayer", "Warehouse", "WeaponBase", "WeaponPack", "WeaponPush", "Zombie", "ZombieCollArea", "ZombieSoleArea", "btnAddToDesk", "dialogYinSi", "jianKangZhongGao", "lodash", "onlinSwitch", "ts"]);