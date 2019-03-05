var settings = settings || {};
settings.appType = AppType.NATIVE;
settings.scalingType = ScalingType.RESIZING_CONSTRAINTS;
settings.homeId = "cTlpmuyERFazkGMXoSNzlg";
settings.deviceImage = {origin: {x: 30, y: 109}, screenSize: {width: 375, height: 667}};
settings.embeddedFonts = [
  {fontFamily: "Lucida Grande", src: "assets/fonts/lucida_grande"},
  {fontFamily: "PingFang SC", src: "assets/fonts/ping_fang_sc_medium", fontWeight: "500"},
  {fontFamily: "PingFang SC", src: "assets/fonts/ping_fang_sc_regular"},
  {fontFamily: "PingFang SC", src: "assets/fonts/ping_fang_sc_semibold", fontWeight: "600"},
  {fontFamily: "SF Pro Text", src: "assets/fonts/sfpro_text_regular"},
  {fontFamily: "SF Pro Text", src: "assets/fonts/sfpro_text_semibold", fontWeight: "600"}
];

$(function() {
  var router = Router.getInstance();
  var screenTransition = ScreenTransition.getInstance();
  var overlayTransition = OverlayTransition.getInstance();
  var layoutManager = LayoutManager.getInstance();
  var animationManager = AnimationManager.getInstance();
  var interactionManager = InteractionManager.getInstance();

  // Tap: hotspot (F02订单@注册用户) -> P-G01-消息中心@空页
  $("#zlk4iiuBTeuiXpK9j8MZ_gs1k61M1GQU6Jm5WgdU0Pzw").on("tapone", function(event) {
    screenTransition.slideLeft("Q4KZTjttTG-4woeMbtAG8w", "k4Kwa8tdS6qqVrrG5MlAhQ");
    event.stopPropagation();
  });

  // Tap: hotspot (F02订单@注册用户) -> StartUp
  $("#zlk4iiuBTeuiXpK9j8MZ_gzXnNyuqNQZe7TIyq4ronEw").on("tapone", function(event) {
    screenTransition.instant("Q4KZTjttTG-4woeMbtAG8w", "cTlpmuyERFazkGMXoSNzlg");
    event.stopPropagation();
  });

  // Tap: TAB 3 (F02订单@注册用户) -> F03我的账户@注册用户
  $("#eZAAPsSvSNyFr2Kqh6r8kQAd5nZ90QR_CJMqzr9Infug").on("tapone", function(event) {
    screenTransition.instant("Q4KZTjttTG-4woeMbtAG8w", "JHWpAYsQQC6gJzeqgL6ByQ");
    event.stopPropagation();
  });

  // Tap: TAB 1 (F02订单@注册用户) -> F01登录_Home@注册用户
  $("#eZAAPsSvSNyFr2Kqh6r8kQCouXwM8jS3eeEpaMxffZmA").on("tapone", function(event) {
    screenTransition.instant("Q4KZTjttTG-4woeMbtAG8w", "YMZFY2QgQJWYh8H2lqPXPA");
    event.stopPropagation();
  });

  // Tap: LEFT LOGO (F02订单@注册用户) -> Previous screen
  $("#zlk4iiuBTeuiXpK9j8MZ_gnE-nY6HoTFOtieNHZoD_ng").on("tapone", function(event) {
    screenTransition.back($(this));
    event.stopPropagation();
  });

  // Tap: outlineBtn (F02订单@注册用户) -> P-D02-还款信息@data
  $("#a7hgHXWwhQrqjMIkGZr01Mg").on("tapone-iscroll", function(event) {
    screenTransition.instant("Q4KZTjttTG-4woeMbtAG8w", "a1Ta66ckR5SX134d24FkDw");
    event.stopPropagation();
  });

  // Tap: hotspot (P-G02-消息中心@data) -> StartUp
  $("#dGM39eHBThO60cbWQamhxQ-yiDxJbQRm2NNy9Dl_Ts1Q").on("tapone", function(event) {
    screenTransition.instant("YXHSqPQIRm6iJgdzll5wPg", "cTlpmuyERFazkGMXoSNzlg");
    event.stopPropagation();
  });

  // Tap: LEFT LOGO (P-G02-消息中心@data) -> Previous screen
  $("#dGM39eHBThO60cbWQamhxQdMifj8wRTOaTbv6SrzYmhA").on("tapone", function(event) {
    screenTransition.back($(this));
    event.stopPropagation();
  });

  // Tap: hotspot (D03我的账户@注册用户) -> P-G01-消息中心@空页
  $("#Q__4YZLPSGKOBcWsFyMg4ws1k61M1GQU6Jm5WgdU0Pzw").on("tapone", function(event) {
    screenTransition.slideLeft("G61atJxbTyGXPEWuV94rJw", "k4Kwa8tdS6qqVrrG5MlAhQ");
    event.stopPropagation();
  });

  // Tap: hotspot (D03我的账户@注册用户) -> StartUp
  $("#Q__4YZLPSGKOBcWsFyMg4wzXnNyuqNQZe7TIyq4ronEw").on("tapone", function(event) {
    screenTransition.instant("G61atJxbTyGXPEWuV94rJw", "cTlpmuyERFazkGMXoSNzlg");
    event.stopPropagation();
  });

  // Tap: TAB 2 (D03我的账户@注册用户) -> D02订单@注册用户
  $("#iOz-np5ARVGuWlhuPjgerwaYR8PovRT7OCaD-dwK_hXA").on("tapone", function(event) {
    screenTransition.instant("G61atJxbTyGXPEWuV94rJw", "IwEgtisHSIS5nbbkeoQ1ZQ");
    event.stopPropagation();
  });

  // Tap: TAB 1 (D03我的账户@注册用户) -> D01登录@注册认证用户-审核中_Checking
  $("#iOz-np5ARVGuWlhuPjgerwHLwuC8CkQOOF60UlrSW2oA").on("tapone", function(event) {
    screenTransition.instant("G61atJxbTyGXPEWuV94rJw", "a0JqWSPHfTeOkOKxGnHwMog");
    event.stopPropagation();
  });

  // Tap: LEFT LOGO (D03我的账户@注册用户) -> Previous screen
  $("#Q__4YZLPSGKOBcWsFyMg4wnE-nY6HoTFOtieNHZoD_ng").on("tapone", function(event) {
    screenTransition.back($(this));
    event.stopPropagation();
  });

  // Tap: Pop-Cell (D03我的账户@注册用户) -> P-A02-还款@data-审批中
  $("#losA95sLRzSLKE4krcGa8Q").on("tapone-iscroll", function(event) {
    screenTransition.slideLeft("G61atJxbTyGXPEWuV94rJw", "LeRX5jOKS6ejGXxhZOvGcg");
    event.stopPropagation();
  });

  // Tap: Pop-Cell (D03我的账户@注册用户) -> P-B01-我的银行卡@空页
  $("#AfL944yPRbKp_fmnHs8blA").on("tapone-iscroll", function(event) {
    screenTransition.slideLeft("G61atJxbTyGXPEWuV94rJw", "F-jhzxk1RT6Vgkema_IGUg");
    event.stopPropagation();
  });

  // Tap: Pop-Cell (D03我的账户@注册用户) -> P-D01-还款信息@空页
  $("#a8xpnYuk-RvqNOdaaIRxeoA").on("tapone-iscroll", function(event) {
    screenTransition.slideLeft("G61atJxbTyGXPEWuV94rJw", "hdOCKO7-R2aBrl8k29NSUw");
    event.stopPropagation();
  });

  // Tap: Pop-Cell (D03我的账户@注册用户) -> P-F01-帮助与反馈
  $("#rW-5nHuZQWiJZfkouUqiHA").on("tapone-iscroll", function(event) {
    screenTransition.slideLeft("G61atJxbTyGXPEWuV94rJw", "RUzgylu2TCSDFvA1e8U7TA");
    event.stopPropagation();
  });

  // Tap: Pop-Cell (D03我的账户@注册用户) -> P-E01-补充资料
  $("#SdgaY-zZR1uFalPb95plrg").on("tapone-iscroll", function(event) {
    screenTransition.instant("G61atJxbTyGXPEWuV94rJw", "bxocb_ifREK3gVcDV1ADag");
    event.stopPropagation();
  });

  // Tap: Pop-Cell (D03我的账户@注册用户) -> P-E01-设置
  $("#CJ_JyJ1YQ4C9B98r-1xfyQ").on("tapone-iscroll", function(event) {
    screenTransition.slideLeft("G61atJxbTyGXPEWuV94rJw", "LjdYkOB7R9auHq1Bjw39pg");
    event.stopPropagation();
  });

  // Tap: hotspot (P-E01-补充资料) -> StartUp
  $("#mnT61S3GSQe_gAQri4DPkg-yiDxJbQRm2NNy9Dl_Ts1Q").on("tapone", function(event) {
    screenTransition.instant("bxocb_ifREK3gVcDV1ADag", "cTlpmuyERFazkGMXoSNzlg");
    event.stopPropagation();
  });

  // Tap: LEFT LOGO (P-E01-补充资料) -> Previous screen
  $("#mnT61S3GSQe_gAQri4DPkgdMifj8wRTOaTbv6SrzYmhA").on("tapone", function(event) {
    screenTransition.back($(this));
    event.stopPropagation();
  });

  // Tap: hotspot (FlowG3-电子签章) -> StartUp
  $("#s1_KS_EAT26wEngasflpcA-yiDxJbQRm2NNy9Dl_Ts1Q").on("tapone", function(event) {
    screenTransition.instant("aKPGrTFRSFSBPiI_UwUDnQ", "cTlpmuyERFazkGMXoSNzlg");
    event.stopPropagation();
  });

  // Tap: LEFT LOGO (FlowG3-电子签章) -> Previous screen
  $("#s1_KS_EAT26wEngasflpcAdMifj8wRTOaTbv6SrzYmhA").on("tapone", function(event) {
    screenTransition.back($(this));
    event.stopPropagation();
  });

  // Tap: hotspot (P-H01-用户协议) -> StartUp
  $("#UwLvigZAR-SaNKW_zEF8DA-yiDxJbQRm2NNy9Dl_Ts1Q").on("tapone", function(event) {
    screenTransition.instant("euwkT_pnRFyaoJOikGidyA", "cTlpmuyERFazkGMXoSNzlg");
    event.stopPropagation();
  });

  // Tap: LEFT LOGO (P-H01-用户协议) -> Previous screen
  $("#UwLvigZAR-SaNKW_zEF8DAdMifj8wRTOaTbv6SrzYmhA").on("tapone", function(event) {
    screenTransition.back($(this));
    event.stopPropagation();
  });

  // Tap: hotspot (FlowC1-绑定银行卡) -> StartUp
  $("#a3-PaFcdZSYGeneCFeRvpVA-yiDxJbQRm2NNy9Dl_Ts1Q").on("tapone", function(event) {
    screenTransition.instant("Pe5-xSGLTmiAGcf6_TPa6w", "cTlpmuyERFazkGMXoSNzlg");
    event.stopPropagation();
  });

  // Tap: LEFT LOGO (FlowC1-绑定银行卡) -> Previous screen
  $("#a3-PaFcdZSYGeneCFeRvpVAdMifj8wRTOaTbv6SrzYmhA").on("tapone", function(event) {
    screenTransition.back($(this));
    event.stopPropagation();
  });

  // Tap: Input/Item-input (FlowC1-绑定银行卡) -> FlowC2-选择银行
  $("#qAygUHYbQTGBP0FX672ATQ").on("tapone-iscroll", function(event) {
    screenTransition.slideLeft("Pe5-xSGLTmiAGcf6_TPa6w", "xpozwDEnT9GGttZZ2GSkBw");
    event.stopPropagation();
  });

  // Tap: 《催收宝用户服务协议》 (FlowC1-绑定银行卡) -> P-H01-用户协议
  $("#DEA3KBRWTDSqincJSmbVNA").on("tapone-iscroll", function(event) {
    screenTransition.slideLeft("Pe5-xSGLTmiAGcf6_TPa6w", "euwkT_pnRFyaoJOikGidyA");
    event.stopPropagation();
  });

  // Tap: Btn.a Basic/Meduim/ Regular  (FlowC1-绑定银行卡) -> FlowC3-绑定银行卡-成功
  $("#a0tLGxww-SGyr_x0fzpGvxA").on("tapone-iscroll", function(event) {
    screenTransition.instant("Pe5-xSGLTmiAGcf6_TPa6w", "a4R6L8QdTTUWgvhp2afVY5Q");
    event.stopPropagation();
  });

  // Tap: hotspot (P-D01-还款信息@空页) -> StartUp
  $("#sUd_3gECRM6ckSn4xC7lnA-yiDxJbQRm2NNy9Dl_Ts1Q").on("tapone", function(event) {
    screenTransition.instant("hdOCKO7-R2aBrl8k29NSUw", "cTlpmuyERFazkGMXoSNzlg");
    event.stopPropagation();
  });

  // Tap: LEFT LOGO (P-D01-还款信息@空页) -> Previous screen
  $("#sUd_3gECRM6ckSn4xC7lnAdMifj8wRTOaTbv6SrzYmhA").on("tapone", function(event) {
    screenTransition.back($(this));
    event.stopPropagation();
  });

  // Tap: hotspot (P-A02-还款@data-审批中) -> StartUp
  $("#FooKjxaTSwukhnWvSiJTHw-yiDxJbQRm2NNy9Dl_Ts1Q").on("tapone", function(event) {
    screenTransition.instant("LeRX5jOKS6ejGXxhZOvGcg", "cTlpmuyERFazkGMXoSNzlg");
    event.stopPropagation();
  });

  // Tap: LEFT LOGO (P-A02-还款@data-审批中) -> Previous screen
  $("#FooKjxaTSwukhnWvSiJTHwdMifj8wRTOaTbv6SrzYmhA").on("tapone", function(event) {
    screenTransition.back($(this));
    event.stopPropagation();
  });

  // Tap: 还款记录 (P-A02-还款@data-审批中) -> P-A04-还款记录@data
  $("#FDEVyzSiT2qNpauByxzk1A").on("tapone", function(event) {
    screenTransition.slideLeft("LeRX5jOKS6ejGXxhZOvGcg", "szvQgE4TSr-vD9gQeGGC4g");
    event.stopPropagation();
  });

  // Tap: hotspot (P-A04-还款记录@data) -> StartUp
  $("#THoHEl76TveGO-PK-imCFA-yiDxJbQRm2NNy9Dl_Ts1Q").on("tapone", function(event) {
    screenTransition.instant("szvQgE4TSr-vD9gQeGGC4g", "cTlpmuyERFazkGMXoSNzlg");
    event.stopPropagation();
  });

  // Tap: LEFT LOGO (P-A04-还款记录@data) -> Previous screen
  $("#THoHEl76TveGO-PK-imCFAdMifj8wRTOaTbv6SrzYmhA").on("tapone", function(event) {
    screenTransition.back($(this));
    event.stopPropagation();
  });

  // Tap: hotspot (P-F01-帮助与反馈) -> StartUp
  $("#QKZEXkgXRIKbjp_-zlhWyg-yiDxJbQRm2NNy9Dl_Ts1Q").on("tapone", function(event) {
    screenTransition.instant("RUzgylu2TCSDFvA1e8U7TA", "cTlpmuyERFazkGMXoSNzlg");
    event.stopPropagation();
  });

  // Tap: LEFT LOGO (P-F01-帮助与反馈) -> Previous screen
  $("#QKZEXkgXRIKbjp_-zlhWygdMifj8wRTOaTbv6SrzYmhA").on("tapone", function(event) {
    screenTransition.back($(this));
    event.stopPropagation();
  });

  // Tap: TableCell (P-F01-帮助与反馈) -> P-F02-帮助中心
  $("#azXs7ceXQsyV8fqpLUGW7g").on("tapone-iscroll", function(event) {
    screenTransition.slideLeft("RUzgylu2TCSDFvA1e8U7TA", "NuwvdM0wSiiacLasoOvt5Q");
    event.stopPropagation();
  });

  // Tap: TableCell (P-F01-帮助与反馈) -> P-F03-意见反馈
  $("#vFC4TeDDQK-Vy9Smiz6Kxg").on("tapone-iscroll", function(event) {
    screenTransition.slideLeft("RUzgylu2TCSDFvA1e8U7TA", "SqZqNzEiQ56lHCZi48YXVw");
    event.stopPropagation();
  });

  // Tap: TableCell (P-F01-帮助与反馈) -> P-F04-常见问题
  $("#emPKYuQTSQW37lw-H6Px7g").on("tapone-iscroll", function(event) {
    screenTransition.slideLeft("RUzgylu2TCSDFvA1e8U7TA", "XY0cJ_N9TeW8uebDQ5w_og");
    event.stopPropagation();
  });

  // Tap: TableCell (P-F01-帮助与反馈) -> P-F05-关于我们
  $("#mA5STdl-TIKO_inHCozFVw").on("tapone-iscroll", function(event) {
    screenTransition.slideLeft("RUzgylu2TCSDFvA1e8U7TA", "a4zsgTv3zTZ2SppxpBPmGRw");
    event.stopPropagation();
  });

  // Tap: LEFT LOGO (FlowB3-step2-认证流程) -> Previous screen
  $("#VMwCGVVxRaKlDecG_fkG-gdMifj8wRTOaTbv6SrzYmhA").on("tapone", function(event) {
    screenTransition.back($(this));
    event.stopPropagation();
  });

  // Tap: iconBtn (FlowB3-step2-认证流程) -> FlowF1-手机认证
  $("#eqbXCU-aS6OF5xWheGs-dQ").on("tapone", function(event) {
    screenTransition.instant("SkzqwokRThKMRjsE1i2Ntw", "fav0sm7sRlSEe8R-sVJw5Q");
    event.stopPropagation();
  });

  // Tap: hotspot (FlowC2-选择银行) -> StartUp
  $("#bfizJjaLSISh-egZyz_pIQ-yiDxJbQRm2NNy9Dl_Ts1Q").on("tapone", function(event) {
    screenTransition.instant("xpozwDEnT9GGttZZ2GSkBw", "cTlpmuyERFazkGMXoSNzlg");
    event.stopPropagation();
  });

  // Tap: LEFT LOGO (FlowC2-选择银行) -> Previous screen
  $("#bfizJjaLSISh-egZyz_pIQdMifj8wRTOaTbv6SrzYmhA").on("tapone", function(event) {
    screenTransition.back($(this));
    event.stopPropagation();
  });

  // Tap: hotspot (P-B02-我的银行卡@data) -> StartUp
  $("#EuWRUCG4RumDf1qeAP8UQQ-yiDxJbQRm2NNy9Dl_Ts1Q").on("tapone", function(event) {
    screenTransition.instant("rtSy8sQFS4ygxyZSYfObzw", "cTlpmuyERFazkGMXoSNzlg");
    event.stopPropagation();
  });

  // Tap: LEFT LOGO (P-B02-我的银行卡@data) -> Previous screen
  $("#EuWRUCG4RumDf1qeAP8UQQdMifj8wRTOaTbv6SrzYmhA").on("tapone", function(event) {
    screenTransition.back($(this));
    event.stopPropagation();
  });

  // Tap: RIGHT TEXT = (P-B02-我的银行卡@data) -> FlowC1-绑定银行卡
  $("#TEt7dUcwRsKFt1VkXh46eg").on("tapone-iscroll", function(event) {
    screenTransition.instant("rtSy8sQFS4ygxyZSYfObzw", "Pe5-xSGLTmiAGcf6_TPa6w");
    event.stopPropagation();
  });

  // Tap: hotspot (P-F05-关于我们) -> StartUp
  $("#mJPHWrugSLuCwsmdBlmE7Q-yiDxJbQRm2NNy9Dl_Ts1Q").on("tapone", function(event) {
    screenTransition.instant("a4zsgTv3zTZ2SppxpBPmGRw", "cTlpmuyERFazkGMXoSNzlg");
    event.stopPropagation();
  });

  // Tap: LEFT LOGO (P-F05-关于我们) -> Previous screen
  $("#mJPHWrugSLuCwsmdBlmE7QdMifj8wRTOaTbv6SrzYmhA").on("tapone", function(event) {
    screenTransition.back($(this));
    event.stopPropagation();
  });

  // Tap: hotspot (FlowD1-基本信息) -> StartUp
  $("#ENIN2UH0TRmk4wSBuSyycw-yiDxJbQRm2NNy9Dl_Ts1Q").on("tapone", function(event) {
    screenTransition.instant("a60UgllHbQj2K5noA6KVg8Q", "cTlpmuyERFazkGMXoSNzlg");
    event.stopPropagation();
  });

  // Tap: LEFT LOGO (FlowD1-基本信息) -> Previous screen
  $("#ENIN2UH0TRmk4wSBuSyycwdMifj8wRTOaTbv6SrzYmhA").on("tapone", function(event) {
    screenTransition.back($(this));
    event.stopPropagation();
  });

  // Tap: Group 2 (FlowD1-基本信息) -> FlowD2-基本信息填写完成
  $("#ImhjqQ2XQP-HqTzHAObSPw").on("tapone-iscroll", function(event) {
    screenTransition.instant("a60UgllHbQj2K5noA6KVg8Q", "HT7teQ8JRdCLhj38UlrAYA");
    event.stopPropagation();
  });

  // Tap: hotspot (E02订单@注册用户) -> P-G01-消息中心@空页
  $("#M_-4zTEDTtiim0QczEOJHQs1k61M1GQU6Jm5WgdU0Pzw").on("tapone", function(event) {
    screenTransition.slideLeft("hO_EOdcETrO9bnKkkdKLrw", "k4Kwa8tdS6qqVrrG5MlAhQ");
    event.stopPropagation();
  });

  // Tap: hotspot (E02订单@注册用户) -> StartUp
  $("#M_-4zTEDTtiim0QczEOJHQzXnNyuqNQZe7TIyq4ronEw").on("tapone", function(event) {
    screenTransition.instant("hO_EOdcETrO9bnKkkdKLrw", "cTlpmuyERFazkGMXoSNzlg");
    event.stopPropagation();
  });

  // Tap: TAB 3 (E02订单@注册用户) -> E03我的账户@注册用户
  $("#nM1ksJLHTMieHs5SgeNLPAKHbr9Tg6SK-Ras1xQa4YLA").on("tapone", function(event) {
    screenTransition.instant("hO_EOdcETrO9bnKkkdKLrw", "VN8W6Zy7QMuTulMDVIj7Fg");
    event.stopPropagation();
  });

  // Tap: TAB 1 (E02订单@注册用户) -> E01登录@注册+认证用户-审核通过
  $("#nM1ksJLHTMieHs5SgeNLPADtfjovmEQZWuZgGEiG3qog").on("tapone", function(event) {
    screenTransition.instant("hO_EOdcETrO9bnKkkdKLrw", "dgUyIBSLQlWffV2FS8qNOg");
    event.stopPropagation();
  });

  // Tap: LEFT LOGO (E02订单@注册用户) -> Previous screen
  $("#M_-4zTEDTtiim0QczEOJHQnE-nY6HoTFOtieNHZoD_ng").on("tapone", function(event) {
    screenTransition.back($(this));
    event.stopPropagation();
  });

  // Tap: hotspot (FlowG1-签章&绑卡) -> StartUp
  $("#oIZQt5O0RdSw0GH_Xthfjg-yiDxJbQRm2NNy9Dl_Ts1Q").on("tapone", function(event) {
    screenTransition.instant("V5383fv9Tq-OdqIhJOnsbg", "cTlpmuyERFazkGMXoSNzlg");
    event.stopPropagation();
  });

  // Tap: LEFT LOGO (FlowG1-签章&绑卡) -> Previous screen
  $("#oIZQt5O0RdSw0GH_XthfjgdMifj8wRTOaTbv6SrzYmhA").on("tapone", function(event) {
    screenTransition.back($(this));
    event.stopPropagation();
  });

  // Tap: Input/Item-input (FlowG1-签章&绑卡) -> FlowG3-电子签章
  $("#kPIoqGdcSeyD_csKKaYuGA").on("tapone-iscroll", function(event) {
    screenTransition.instant("V5383fv9Tq-OdqIhJOnsbg", "aKPGrTFRSFSBPiI_UwUDnQ");
    event.stopPropagation();
  });

  // Tap: Input/Item-input (FlowG1-签章&绑卡) -> FlowG2-绑定银行卡-成功
  $("#ToMj39OzRbOi6_f8FAU_Ag").on("tapone-iscroll", function(event) {
    screenTransition.instant("V5383fv9Tq-OdqIhJOnsbg", "yvI-hATqR4Ob-n2YcQVw_Q");
    event.stopPropagation();
  });

  // Tap: hotspot (FlowE2-紧急联系人-选择关系) -> StartUp
  $("#lc20eusjR7uxF04jyy0Mog-yiDxJbQRm2NNy9Dl_Ts1Q").on("tapone", function(event) {
    screenTransition.instant("eibwqK8cTxWY3mrY5Y_vBQ", "cTlpmuyERFazkGMXoSNzlg");
    event.stopPropagation();
  });

  // Tap: LEFT LOGO (FlowE2-紧急联系人-选择关系) -> Previous screen
  $("#lc20eusjR7uxF04jyy0MogdMifj8wRTOaTbv6SrzYmhA").on("tapone", function(event) {
    screenTransition.back($(this));
    event.stopPropagation();
  });

  // Tap: Group[0v] (FlowE2-紧急联系人-选择关系) -> FlowE3-紧急联系人
  $("#a20zfF709TtCXbfaQH2J3aQ").on("tapone-iscroll", function(event) {
    screenTransition.instant("eibwqK8cTxWY3mrY5Y_vBQ", "wFla0Ol6Soy95aBizN-xRQ");
    event.stopPropagation();
  });

  // Tap: hotspot (A02订单@新用户) -> P-G01-消息中心@空页
  $("#Z6Ue5ZmQT0CX2Sv10yHebQs1k61M1GQU6Jm5WgdU0Pzw").on("tapone", function(event) {
    screenTransition.slideLeft("Uy_MauouTSSMt8_bgm6DnQ", "k4Kwa8tdS6qqVrrG5MlAhQ");
    event.stopPropagation();
  });

  // Tap: hotspot (A02订单@新用户) -> StartUp
  $("#Z6Ue5ZmQT0CX2Sv10yHebQzXnNyuqNQZe7TIyq4ronEw").on("tapone", function(event) {
    screenTransition.instant("Uy_MauouTSSMt8_bgm6DnQ", "cTlpmuyERFazkGMXoSNzlg");
    event.stopPropagation();
  });

  // Tap: TAB 3 (A02订单@新用户) -> A03我的账户@游客
  $("#AOOk-unaQACi2m574ruAvAisz0HySFRcW6OYq0b2Dkgw").on("tapone", function(event) {
    screenTransition.instant("Uy_MauouTSSMt8_bgm6DnQ", "QuWTup8VQhOy3JkaTTpUtg");
    event.stopPropagation();
  });

  // Tap: TAB 1 (A02订单@新用户) -> A01登录_Home@新用户-none
  $("#AOOk-unaQACi2m574ruAvA0hd-KL68QJSdPKGD2Q1dUg").on("tapone", function(event) {
    screenTransition.instant("Uy_MauouTSSMt8_bgm6DnQ", "F2LTMLcFT5aVOa41tiRfjQ");
    event.stopPropagation();
  });

  // Tap: LEFT LOGO (A02订单@新用户) -> Previous screen
  $("#Z6Ue5ZmQT0CX2Sv10yHebQnE-nY6HoTFOtieNHZoD_ng").on("tapone", function(event) {
    screenTransition.back($(this));
    event.stopPropagation();
  });

  // Tap: Group 3 (A02订单@新用户) -> A01登录_Home@新用户-none
  $("#a4rWKJ7ZqRFSzyYAOfNsRew").on("tapone-iscroll", function(event) {
    screenTransition.slideRight("Uy_MauouTSSMt8_bgm6DnQ", "F2LTMLcFT5aVOa41tiRfjQ");
    event.stopPropagation();
  });

  // Tap: LEFT LOGO (FlowB3-step1-认证流程) -> Previous screen
  $("#a4_jgEjYSSJOp1dGy46U4OQdMifj8wRTOaTbv6SrzYmhA").on("tapone", function(event) {
    screenTransition.back($(this));
    event.stopPropagation();
  });

  // Tap: iconBtn (FlowB3-step1-认证流程) -> FlowE1-紧急联系人
  $("#lenf4WEyT0qLP4YNjbDpnQ").on("tapone", function(event) {
    screenTransition.instant("DIGdzYCGSTaeT8bI6o1uNw", "tm6Q8oHRQzKWpWFswLrOww");
    event.stopPropagation();
  });

  // Tap: hotspot (P-E01-设置) -> StartUp
  $("#tdPbp8mbSZuV0Oh3CLouFg-yiDxJbQRm2NNy9Dl_Ts1Q").on("tapone", function(event) {
    screenTransition.instant("LjdYkOB7R9auHq1Bjw39pg", "cTlpmuyERFazkGMXoSNzlg");
    event.stopPropagation();
  });

  // Tap: LEFT LOGO (P-E01-设置) -> Previous screen
  $("#tdPbp8mbSZuV0Oh3CLouFgdMifj8wRTOaTbv6SrzYmhA").on("tapone", function(event) {
    screenTransition.back($(this));
    event.stopPropagation();
  });

  // Tap: Btn.a Basic/Meduim/ Regular  (P-E01-设置) -> FlowA1-注册新用户
  $("#k6DDObHyTDqS3wtzkJ4f4Q").on("tapone-iscroll", function(event) {
    screenTransition.instant("LjdYkOB7R9auHq1Bjw39pg", "esWRo_JaS620L0i_HL-Lsg");
    event.stopPropagation();
  });

  // Tap: hotspot (F01登录_Home@注册用户) -> P-G01-消息中心@空页
  $("#IqmeTu2VQ9iPPoGPFZOagQs1k61M1GQU6Jm5WgdU0Pzw").on("tapone", function(event) {
    screenTransition.slideLeft("YMZFY2QgQJWYh8H2lqPXPA", "k4Kwa8tdS6qqVrrG5MlAhQ");
    event.stopPropagation();
  });

  // Tap: hotspot (F01登录_Home@注册用户) -> StartUp
  $("#IqmeTu2VQ9iPPoGPFZOagQzXnNyuqNQZe7TIyq4ronEw").on("tapone", function(event) {
    screenTransition.instant("YMZFY2QgQJWYh8H2lqPXPA", "cTlpmuyERFazkGMXoSNzlg");
    event.stopPropagation();
  });

  // Tap: hotspot (F01登录_Home@注册用户) -> P-G02-消息中心@data
  $("#RdmrXDkNQ02wQZNtWSXI3gRjEVYkNJS0SP0KjS35VYdA").on("tapone", function(event) {
    screenTransition.slideLeft("YMZFY2QgQJWYh8H2lqPXPA", "YXHSqPQIRm6iJgdzll5wPg");
    event.stopPropagation();
  });

  // Tap: hotspot (F01登录_Home@注册用户) -> StartUp
  $("#RdmrXDkNQ02wQZNtWSXI3gokD6j2plTQuyxcQs3oWnhQ").on("tapone", function(event) {
    screenTransition.instant("YMZFY2QgQJWYh8H2lqPXPA", "cTlpmuyERFazkGMXoSNzlg");
    event.stopPropagation();
  });

  // Tap: LEFT LOGO (F01登录_Home@注册用户) -> Previous screen
  $("#RdmrXDkNQ02wQZNtWSXI3gZhb2SJuwR7SkqyVpZT14xQ").on("tapone", function(event) {
    screenTransition.back($(this));
    event.stopPropagation();
  });

  // Tap: TAB 3 (F01登录_Home@注册用户) -> F03我的账户@注册用户
  $("#hdok4IM7RJG2BR40G_jt4AAd5nZ90QR_CJMqzr9Infug").on("tapone", function(event) {
    screenTransition.instant("YMZFY2QgQJWYh8H2lqPXPA", "JHWpAYsQQC6gJzeqgL6ByQ");
    event.stopPropagation();
  });

  // Tap: TAB 2 (F01登录_Home@注册用户) -> F02订单@注册用户
  $("#hdok4IM7RJG2BR40G_jt4AbSliEjSdSBCN8ZjbGAjwag").on("tapone", function(event) {
    screenTransition.instant("YMZFY2QgQJWYh8H2lqPXPA", "Q4KZTjttTG-4woeMbtAG8w");
    event.stopPropagation();
  });

  // Tap: hotspot (F01登录_Home@注册用户) -> Previous screen
  $("#m82sjV5AQ0GT4tgWdda1fw").on("tapone-iscroll", function(event) {
    screenTransition.back($(this));
    event.stopPropagation();
  });

  // Tap: Group 3 (F01登录_Home@注册用户) -> P-B01-我的银行卡@空页
  $("#T0fSRRW8TpWSwiv7bfxNGw").on("tapone-iscroll", function(event) {
    screenTransition.slideLeft("YMZFY2QgQJWYh8H2lqPXPA", "F-jhzxk1RT6Vgkema_IGUg");
    event.stopPropagation();
  });

  // Tap: outlineBtn (F01登录_Home@注册用户) -> P-D02-还款信息@data
  $("#BYlZfS_GT5u5WczOLszjpg").on("tapone-iscroll", function(event) {
    screenTransition.instant("YMZFY2QgQJWYh8H2lqPXPA", "a1Ta66ckR5SX134d24FkDw");
    event.stopPropagation();
  });

  // Tap: 返回 (StyleGuide) -> StartUp
  $("#rX_mjLzdTAik676maqqGNw").on("tapone", function(event) {
    screenTransition.slideLeft("a_PgZYHeYQm6K3pBNvWRQeQ", "cTlpmuyERFazkGMXoSNzlg");
    event.stopPropagation();
  });

  // Tap: hotspot (FlowC3-绑定银行卡-成功) -> StartUp
  $("#UNue0hSsRvOco05h1ImtsA-yiDxJbQRm2NNy9Dl_Ts1Q").on("tapone", function(event) {
    screenTransition.instant("a4R6L8QdTTUWgvhp2afVY5Q", "cTlpmuyERFazkGMXoSNzlg");
    event.stopPropagation();
  });

  // Tap: LEFT LOGO (FlowC3-绑定银行卡-成功) -> Previous screen
  $("#UNue0hSsRvOco05h1ImtsAdMifj8wRTOaTbv6SrzYmhA").on("tapone", function(event) {
    screenTransition.back($(this));
    event.stopPropagation();
  });

  // Tap: Input/Item-input (FlowC3-绑定银行卡-成功) -> FlowC2-选择银行
  $("#HxuNXzqqRRCtAhJsmQw2aA").on("tapone-iscroll", function(event) {
    screenTransition.slideLeft("a4R6L8QdTTUWgvhp2afVY5Q", "xpozwDEnT9GGttZZ2GSkBw");
    event.stopPropagation();
  });

  // Tap: 《催收宝用户服务协议》 (FlowC3-绑定银行卡-成功) -> P-H01-用户协议
  $("#a12PqSnsHQuu32PohJ8YQ4Q").on("tapone-iscroll", function(event) {
    screenTransition.slideLeft("a4R6L8QdTTUWgvhp2afVY5Q", "euwkT_pnRFyaoJOikGidyA");
    event.stopPropagation();
  });

  // Tap: Btn.a Basic/Meduim/ Regular  (FlowC3-绑定银行卡-成功) -> P-B02-我的银行卡@data
  $("#iRQxbF3IQA-sr1FXGs1YvA").on("tapone-iscroll", function(event) {
    screenTransition.instant("a4R6L8QdTTUWgvhp2afVY5Q", "rtSy8sQFS4ygxyZSYfObzw");
    event.stopPropagation();
  });

  // Tap: hotspot (FlowF1-手机认证) -> StartUp
  $("#a0q6rLEsxQ4SftlHA5GwmXw-yiDxJbQRm2NNy9Dl_Ts1Q").on("tapone", function(event) {
    screenTransition.instant("fav0sm7sRlSEe8R-sVJw5Q", "cTlpmuyERFazkGMXoSNzlg");
    event.stopPropagation();
  });

  // Tap: LEFT LOGO (FlowF1-手机认证) -> Previous screen
  $("#a0q6rLEsxQ4SftlHA5GwmXwdMifj8wRTOaTbv6SrzYmhA").on("tapone", function(event) {
    screenTransition.back($(this));
    event.stopPropagation();
  });

  // Tap: 提交 (FlowF1-手机认证) -> FlowF2-手机认证结果
  $("#CwL63JmSRN66vo_PuTJaeg").on("tapone", function(event) {
    screenTransition.instant("fav0sm7sRlSEe8R-sVJw5Q", "QjEVy58jQdSyJlcqPvgQEg");
    event.stopPropagation();
  });

  // Tap: hotspot (FlowB2-认证流程身份认证) -> StartUp
  $("#KhcxjUssTSGCHZd8_0D0Pw-yiDxJbQRm2NNy9Dl_Ts1Q").on("tapone", function(event) {
    screenTransition.instant("UzuLZZjORqSBH23Wol87nQ", "cTlpmuyERFazkGMXoSNzlg");
    event.stopPropagation();
  });

  // Tap: LEFT LOGO (FlowB2-认证流程身份认证) -> Previous screen
  $("#KhcxjUssTSGCHZd8_0D0PwdMifj8wRTOaTbv6SrzYmhA").on("tapone", function(event) {
    screenTransition.back($(this));
    event.stopPropagation();
  });

  // Tap: Btn.a Basic/Meduim/ Regular  (FlowB2-认证流程身份认证) -> FlowB3-step1-认证流程
  $("#Wg22GGlfSWClEbm9sOWv8g").on("tapone", function(event) {
    screenTransition.slideLeft("UzuLZZjORqSBH23Wol87nQ", "DIGdzYCGSTaeT8bI6o1uNw");
    event.stopPropagation();
  });

  // Tap: iconBtn (FlowB2-认证流程身份认证) -> FlowD1-基本信息
  $("#qCwGyZpjS6C8_PQYj5Bg2Q").on("tapone", function(event) {
    screenTransition.slideLeft("UzuLZZjORqSBH23Wol87nQ", "a60UgllHbQj2K5noA6KVg8Q");
    event.stopPropagation();
  });

  // Tap: hotspot (C03我的账户@注册用户) -> P-G01-消息中心@空页
  $("#a_XGFMPctTYO26Nd7D1WEQws1k61M1GQU6Jm5WgdU0Pzw").on("tapone", function(event) {
    screenTransition.slideLeft("Almvivx2SFy8l5dWmlKUZw", "k4Kwa8tdS6qqVrrG5MlAhQ");
    event.stopPropagation();
  });

  // Tap: hotspot (C03我的账户@注册用户) -> StartUp
  $("#a_XGFMPctTYO26Nd7D1WEQwzXnNyuqNQZe7TIyq4ronEw").on("tapone", function(event) {
    screenTransition.instant("Almvivx2SFy8l5dWmlKUZw", "cTlpmuyERFazkGMXoSNzlg");
    event.stopPropagation();
  });

  // Tap: TAB 2 (C03我的账户@注册用户) -> C02订单@注册用户
  $("#a_XCgbYAkTTanbO4DA9tmAgPbjN3JY3TvmAZNOnU--CsQ").on("tapone", function(event) {
    screenTransition.instant("Almvivx2SFy8l5dWmlKUZw", "a4pPu8H6JRHugH4Wv1_i93A");
    event.stopPropagation();
  });

  // Tap: TAB 1 (C03我的账户@注册用户) -> C01登录_@注册用户-认证未完成
  $("#a_XCgbYAkTTanbO4DA9tmAgGUiyTwQgTB-Hpd7L6ouP0w").on("tapone", function(event) {
    screenTransition.instant("Almvivx2SFy8l5dWmlKUZw", "iulX1mmZRYG_ioIT_qiTcA");
    event.stopPropagation();
  });

  // Tap: LEFT LOGO (C03我的账户@注册用户) -> Previous screen
  $("#a_XGFMPctTYO26Nd7D1WEQwnE-nY6HoTFOtieNHZoD_ng").on("tapone", function(event) {
    screenTransition.back($(this));
    event.stopPropagation();
  });

  // Tap: Pop-Cell (C03我的账户@注册用户) -> P-A01-还款@空页
  $("#wAzdLi9tReepsanyA1Vlrg").on("tapone-iscroll", function(event) {
    screenTransition.slideLeft("Almvivx2SFy8l5dWmlKUZw", "x6HEDs73QDC-3SL7x03KuQ");
    event.stopPropagation();
  });

  // Tap: Pop-Cell (C03我的账户@注册用户) -> P-B01-我的银行卡@空页
  $("#HX4iGb6USqWtB185zX7mwQ").on("tapone-iscroll", function(event) {
    screenTransition.slideLeft("Almvivx2SFy8l5dWmlKUZw", "F-jhzxk1RT6Vgkema_IGUg");
    event.stopPropagation();
  });

  // Tap: Pop-Cell (C03我的账户@注册用户) -> P-D01-还款信息@空页
  $("#um7jq5mNQWWEXB1xH5wk_g").on("tapone-iscroll", function(event) {
    screenTransition.slideLeft("Almvivx2SFy8l5dWmlKUZw", "hdOCKO7-R2aBrl8k29NSUw");
    event.stopPropagation();
  });

  // Tap: Pop-Cell (C03我的账户@注册用户) -> P-F01-帮助与反馈
  $("#t5KikiYySX-qTwKG_t1RAg").on("tapone-iscroll", function(event) {
    screenTransition.slideLeft("Almvivx2SFy8l5dWmlKUZw", "RUzgylu2TCSDFvA1e8U7TA");
    event.stopPropagation();
  });

  // Tap: Pop-Cell (C03我的账户@注册用户) -> P-E01-设置
  $("#rX9_63D3THaqJjJzSy2PDQ").on("tapone-iscroll", function(event) {
    screenTransition.slideLeft("Almvivx2SFy8l5dWmlKUZw", "LjdYkOB7R9auHq1Bjw39pg");
    event.stopPropagation();
  });

  // Tap: LEFT LOGO (FlowB3-step3-认证流程) -> Previous screen
  $("#z2cbtvmrRtaQSRb1Fa9ZUgdMifj8wRTOaTbv6SrzYmhA").on("tapone", function(event) {
    screenTransition.back($(this));
    event.stopPropagation();
  });

  // Tap: iconBtn (FlowB3-step3-认证流程) -> FlowG1-签章&绑卡
  $("#zxR8nJpbRoSFF_xlBbyrTw").on("tapone", function(event) {
    screenTransition.instant("stCPGpyQSNimNCkRiLCuFw", "V5383fv9Tq-OdqIhJOnsbg");
    event.stopPropagation();
  });

  // Tap: hotspot (P-A01-还款@空页) -> StartUp
  $("#t2uH5ru7Rlylp7nB-856AA-yiDxJbQRm2NNy9Dl_Ts1Q").on("tapone", function(event) {
    screenTransition.instant("x6HEDs73QDC-3SL7x03KuQ", "cTlpmuyERFazkGMXoSNzlg");
    event.stopPropagation();
  });

  // Tap: LEFT LOGO (P-A01-还款@空页) -> Previous screen
  $("#t2uH5ru7Rlylp7nB-856AAdMifj8wRTOaTbv6SrzYmhA").on("tapone", function(event) {
    screenTransition.back($(this));
    event.stopPropagation();
  });

  // Tap: 还款记录 (P-A01-还款@空页) -> P-A03-还款记录@空页
  $("#QSU6NdvhTkqMQpbudHHgeQ").on("tapone", function(event) {
    screenTransition.slideLeft("x6HEDs73QDC-3SL7x03KuQ", "WiJ82FgRRvyQBxmul-pM7Q");
    event.stopPropagation();
  });

  // Tap: hotspot (FlowE3-紧急联系人) -> StartUp
  $("#LaZeBZb4TLqOB1Xu1TBWHQ-yiDxJbQRm2NNy9Dl_Ts1Q").on("tapone", function(event) {
    screenTransition.instant("wFla0Ol6Soy95aBizN-xRQ", "cTlpmuyERFazkGMXoSNzlg");
    event.stopPropagation();
  });

  // Tap: LEFT LOGO (FlowE3-紧急联系人) -> Previous screen
  $("#LaZeBZb4TLqOB1Xu1TBWHQdMifj8wRTOaTbv6SrzYmhA").on("tapone", function(event) {
    screenTransition.back($(this));
    event.stopPropagation();
  });

  // Tap: 保存 (FlowE3-紧急联系人) -> FlowB3-step2-认证流程
  $("#a5NUQxuXVQOuXF9N-7gXvcw").on("tapone", function(event) {
    screenTransition.instant("wFla0Ol6Soy95aBizN-xRQ", "SkzqwokRThKMRjsE1i2Ntw");
    event.stopPropagation();
  });

  // Tap: Input/Item-input (FlowE3-紧急联系人) -> FlowE2-紧急联系人-选择关系
  $("#POAJpvI-QDu-beHHgysuhA").on("tapone-iscroll", function(event) {
    screenTransition.slideLeft("wFla0Ol6Soy95aBizN-xRQ", "eibwqK8cTxWY3mrY5Y_vBQ");
    event.stopPropagation();
  });

  // Tap: Input/Item-input (FlowE3-紧急联系人) -> FlowE2-紧急联系人-选择关系
  $("#FJTBvhlnTS-uC3t6B7zFjA").on("tapone-iscroll", function(event) {
    screenTransition.slideLeft("wFla0Ol6Soy95aBizN-xRQ", "eibwqK8cTxWY3mrY5Y_vBQ");
    event.stopPropagation();
  });

  // Tap: close (FlowA4-注册新用户) -> A01登录_Home@新用户-none
  $("#ZCZRmNpQSGCB-jc2iJ_pKAJrgTIcqzSBSJi0wymlw8nw").on("tapone", function(event) {
    screenTransition.slideRight("a3LJoo4buQb-BbdHSaRkGuw", "F2LTMLcFT5aVOa41tiRfjQ");
    event.stopPropagation();
  });

  // Tap: Btn.a Basic/Normal/ Regular  (FlowA4-注册新用户) -> B03我的账户@注册用户
  $("#qw7NXBO5Sne2ClSnGwH9QQ").on("tapone", function(event) {
    screenTransition.slideRight("a3LJoo4buQb-BbdHSaRkGuw", "x9OXSSDHR-O7KEuUFgX6wg");
    event.stopPropagation();
  });

  // Tap: 《小蓝钱包服务协议》 (FlowA4-注册新用户) -> P-H01-用户协议
  $("#BPN4yrJ4Qla07WjD8zMI6w").on("tapone", function(event) {
    screenTransition.slideLeft("a3LJoo4buQb-BbdHSaRkGuw", "euwkT_pnRFyaoJOikGidyA");
    event.stopPropagation();
  });

  // Tap: hotspot (FlowF2-手机认证结果) -> StartUp
  $("#a9s9kCMjvQJ-nx_yHKTKe6w-yiDxJbQRm2NNy9Dl_Ts1Q").on("tapone", function(event) {
    screenTransition.instant("QjEVy58jQdSyJlcqPvgQEg", "cTlpmuyERFazkGMXoSNzlg");
    event.stopPropagation();
  });

  // Tap: NavBar (FlowF2-手机认证结果) -> FlowB3-step3-认证流程
  $("#a9s9kCMjvQJ-nx_yHKTKe6w").on("tapone", function(event) {
    screenTransition.instant("QjEVy58jQdSyJlcqPvgQEg", "stCPGpyQSNimNCkRiLCuFw");
    event.stopPropagation();
  });

  // Tap: LEFT LOGO (FlowF2-手机认证结果) -> Previous screen
  $("#a9s9kCMjvQJ-nx_yHKTKe6wdMifj8wRTOaTbv6SrzYmhA").on("tapone", function(event) {
    screenTransition.back($(this));
    event.stopPropagation();
  });

  // Tap: hotspot (E03我的账户@注册用户) -> P-G01-消息中心@空页
  $("#b1djAU2_Tiy23jv8ShcYAgs1k61M1GQU6Jm5WgdU0Pzw").on("tapone", function(event) {
    screenTransition.slideLeft("VN8W6Zy7QMuTulMDVIj7Fg", "k4Kwa8tdS6qqVrrG5MlAhQ");
    event.stopPropagation();
  });

  // Tap: hotspot (E03我的账户@注册用户) -> StartUp
  $("#b1djAU2_Tiy23jv8ShcYAgzXnNyuqNQZe7TIyq4ronEw").on("tapone", function(event) {
    screenTransition.instant("VN8W6Zy7QMuTulMDVIj7Fg", "cTlpmuyERFazkGMXoSNzlg");
    event.stopPropagation();
  });

  // Tap: TAB 2 (E03我的账户@注册用户) -> E02订单@注册用户
  $("#a9DbfYjW5QWSVJ88m8JMyPgXQn4Q35SSC2H5bO1FqKZ2g").on("tapone", function(event) {
    screenTransition.instant("VN8W6Zy7QMuTulMDVIj7Fg", "hO_EOdcETrO9bnKkkdKLrw");
    event.stopPropagation();
  });

  // Tap: TAB 1 (E03我的账户@注册用户) -> E01登录@注册+认证用户-审核通过
  $("#a9DbfYjW5QWSVJ88m8JMyPgDtfjovmEQZWuZgGEiG3qog").on("tapone", function(event) {
    screenTransition.instant("VN8W6Zy7QMuTulMDVIj7Fg", "dgUyIBSLQlWffV2FS8qNOg");
    event.stopPropagation();
  });

  // Tap: LEFT LOGO (E03我的账户@注册用户) -> Previous screen
  $("#b1djAU2_Tiy23jv8ShcYAgnE-nY6HoTFOtieNHZoD_ng").on("tapone", function(event) {
    screenTransition.back($(this));
    event.stopPropagation();
  });

  // Tap: Pop-Cell (E03我的账户@注册用户) -> P-A02-还款@data-审批中
  $("#a_EKLtyAxRwGnZlVw-z2LhA").on("tapone-iscroll", function(event) {
    screenTransition.slideLeft("VN8W6Zy7QMuTulMDVIj7Fg", "LeRX5jOKS6ejGXxhZOvGcg");
    event.stopPropagation();
  });

  // Tap: Pop-Cell (E03我的账户@注册用户) -> P-B02-我的银行卡@data
  $("#ZYO_naM1QbGGt2zAd0bIaw").on("tapone-iscroll", function(event) {
    screenTransition.slideLeft("VN8W6Zy7QMuTulMDVIj7Fg", "rtSy8sQFS4ygxyZSYfObzw");
    event.stopPropagation();
  });

  // Tap: Pop-Cell (E03我的账户@注册用户) -> P-D01-还款信息@空页
  $("#Y34R5VFnTluMW6NavBG-dQ").on("tapone-iscroll", function(event) {
    screenTransition.slideLeft("VN8W6Zy7QMuTulMDVIj7Fg", "hdOCKO7-R2aBrl8k29NSUw");
    event.stopPropagation();
  });

  // Tap: Pop-Cell (E03我的账户@注册用户) -> P-F01-帮助与反馈
  $("#QPqH5bTUSEGoNytFEM1liA").on("tapone-iscroll", function(event) {
    screenTransition.slideLeft("VN8W6Zy7QMuTulMDVIj7Fg", "RUzgylu2TCSDFvA1e8U7TA");
    event.stopPropagation();
  });

  // Tap: Pop-Cell (E03我的账户@注册用户) -> P-E01-设置
  $("#bW_VGODVS3-KG4Q14z0K9g").on("tapone-iscroll", function(event) {
    screenTransition.slideLeft("VN8W6Zy7QMuTulMDVIj7Fg", "LjdYkOB7R9auHq1Bjw39pg");
    event.stopPropagation();
  });

  // Tap: close (FlowA1-注册新用户) -> A01登录_Home@新用户-none
  $("#sAIXRPRmR0q-7OSvZ56ALQJrgTIcqzSBSJi0wymlw8nw").on("tapone", function(event) {
    screenTransition.slideRight("esWRo_JaS620L0i_HL-Lsg", "F2LTMLcFT5aVOa41tiRfjQ");
    event.stopPropagation();
  });

  // Tap: Input/Basic/ Icon||Text (FlowA1-注册新用户) -> FlowA2-注册新用户
  $("#RDvAgRcWQC2v1-s4cJesNQ").on("tapone", function(event) {
    screenTransition.instant("esWRo_JaS620L0i_HL-Lsg", "N0eGDP46QgC_9-8Yc-QU6g");
    event.stopPropagation();
  });

  // Tap: hotspot (B03我的账户@注册用户) -> P-G01-消息中心@空页
  $("#QBvSoj1tTo2aPXsWzLzpPws1k61M1GQU6Jm5WgdU0Pzw").on("tapone", function(event) {
    screenTransition.slideLeft("x9OXSSDHR-O7KEuUFgX6wg", "k4Kwa8tdS6qqVrrG5MlAhQ");
    event.stopPropagation();
  });

  // Tap: hotspot (B03我的账户@注册用户) -> StartUp
  $("#QBvSoj1tTo2aPXsWzLzpPwzXnNyuqNQZe7TIyq4ronEw").on("tapone", function(event) {
    screenTransition.instant("x9OXSSDHR-O7KEuUFgX6wg", "cTlpmuyERFazkGMXoSNzlg");
    event.stopPropagation();
  });

  // Tap: TAB 2 (B03我的账户@注册用户) -> B02订单@注册用户
  $("#iQMJmrtfTZG6QgSf3Ds_Kw_q-FuLLKShOeGRMIgEw9rA").on("tapone", function(event) {
    screenTransition.instant("x9OXSSDHR-O7KEuUFgX6wg", "ml5BOIRYTZWuVq96lUzA3A");
    event.stopPropagation();
  });

  // Tap: TAB 1 (B03我的账户@注册用户) -> B01登录_Home@注册用户-none
  $("#iQMJmrtfTZG6QgSf3Ds_KwFXsKhPr9ShKMWd9_euw-Ow").on("tapone", function(event) {
    screenTransition.instant("x9OXSSDHR-O7KEuUFgX6wg", "a7GvDAMq5SbSH7x9jMH_2EQ");
    event.stopPropagation();
  });

  // Tap: LEFT LOGO (B03我的账户@注册用户) -> Previous screen
  $("#QBvSoj1tTo2aPXsWzLzpPwnE-nY6HoTFOtieNHZoD_ng").on("tapone", function(event) {
    screenTransition.back($(this));
    event.stopPropagation();
  });

  // Tap: Pop-Cell (B03我的账户@注册用户) -> P-A01-还款@空页
  $("#a34BdpQT0T0OMGvyITfQE-w").on("tapone-iscroll", function(event) {
    screenTransition.slideLeft("x9OXSSDHR-O7KEuUFgX6wg", "x6HEDs73QDC-3SL7x03KuQ");
    event.stopPropagation();
  });

  // Tap: Pop-Cell (B03我的账户@注册用户) -> P-B01-我的银行卡@空页
  $("#nn4extX7RAuvI_jdPTbnhQ").on("tapone-iscroll", function(event) {
    screenTransition.slideLeft("x9OXSSDHR-O7KEuUFgX6wg", "F-jhzxk1RT6Vgkema_IGUg");
    event.stopPropagation();
  });

  // Tap: Pop-Cell (B03我的账户@注册用户) -> P-D01-还款信息@空页
  $("#poDnoMjtSrOuK4hiSKW6Sw").on("tapone-iscroll", function(event) {
    screenTransition.slideLeft("x9OXSSDHR-O7KEuUFgX6wg", "hdOCKO7-R2aBrl8k29NSUw");
    event.stopPropagation();
  });

  // Tap: Pop-Cell (B03我的账户@注册用户) -> P-F01-帮助与反馈
  $("#GVftFoTCQwaIEI-rgo7TvQ").on("tapone-iscroll", function(event) {
    screenTransition.slideLeft("x9OXSSDHR-O7KEuUFgX6wg", "RUzgylu2TCSDFvA1e8U7TA");
    event.stopPropagation();
  });

  // Tap: Pop-Cell (B03我的账户@注册用户) -> P-E01-设置
  $("#iKKA4b5FTu28f0WzFSvpDw").on("tapone-iscroll", function(event) {
    screenTransition.slideLeft("x9OXSSDHR-O7KEuUFgX6wg", "LjdYkOB7R9auHq1Bjw39pg");
    event.stopPropagation();
  });

  // Tap: hotspot (A03我的账户@游客) -> P-G01-消息中心@空页
  $("#uKHTfnHjSjy69J6BMDFjcAs1k61M1GQU6Jm5WgdU0Pzw").on("tapone", function(event) {
    screenTransition.slideLeft("QuWTup8VQhOy3JkaTTpUtg", "k4Kwa8tdS6qqVrrG5MlAhQ");
    event.stopPropagation();
  });

  // Tap: hotspot (A03我的账户@游客) -> StartUp
  $("#uKHTfnHjSjy69J6BMDFjcAzXnNyuqNQZe7TIyq4ronEw").on("tapone", function(event) {
    screenTransition.instant("QuWTup8VQhOy3JkaTTpUtg", "cTlpmuyERFazkGMXoSNzlg");
    event.stopPropagation();
  });

  // Tap: TAB 2 (A03我的账户@游客) -> A02订单@新用户
  $("#EL_I6wdTTDW0Jj03lm-e9g6_jquNuiTCyFG1RWAloA7g").on("tapone", function(event) {
    screenTransition.instant("QuWTup8VQhOy3JkaTTpUtg", "Uy_MauouTSSMt8_bgm6DnQ");
    event.stopPropagation();
  });

  // Tap: TAB 1 (A03我的账户@游客) -> A01登录_Home@新用户-none
  $("#EL_I6wdTTDW0Jj03lm-e9g0hd-KL68QJSdPKGD2Q1dUg").on("tapone", function(event) {
    screenTransition.instant("QuWTup8VQhOy3JkaTTpUtg", "F2LTMLcFT5aVOa41tiRfjQ");
    event.stopPropagation();
  });

  // Tap: LEFT LOGO (A03我的账户@游客) -> Previous screen
  $("#uKHTfnHjSjy69J6BMDFjcAnE-nY6HoTFOtieNHZoD_ng").on("tapone", function(event) {
    screenTransition.back($(this));
    event.stopPropagation();
  });

  // Tap: Pop-Cell (A03我的账户@游客) -> P-A01-还款@空页
  $("#yJvtcAC6QqmAcV62KvNovA").on("tapone-iscroll", function(event) {
    screenTransition.slideLeft("QuWTup8VQhOy3JkaTTpUtg", "x6HEDs73QDC-3SL7x03KuQ");
    event.stopPropagation();
  });

  // Tap: Pop-Cell (A03我的账户@游客) -> P-B01-我的银行卡@空页
  $("#d_vZWsoqTg6eK89_Qo_3_g").on("tapone-iscroll", function(event) {
    screenTransition.slideLeft("QuWTup8VQhOy3JkaTTpUtg", "F-jhzxk1RT6Vgkema_IGUg");
    event.stopPropagation();
  });

  // Tap: Pop-Cell (A03我的账户@游客) -> P-D01-还款信息@空页
  $("#Yu4Wf6FbTziB9YNBkUE_oQ").on("tapone-iscroll", function(event) {
    screenTransition.slideLeft("QuWTup8VQhOy3JkaTTpUtg", "hdOCKO7-R2aBrl8k29NSUw");
    event.stopPropagation();
  });

  // Tap: Pop-Cell (A03我的账户@游客) -> P-F01-帮助与反馈
  $("#a2wTLPycRQuK8eHlN4D0SFg").on("tapone-iscroll", function(event) {
    screenTransition.slideLeft("QuWTup8VQhOy3JkaTTpUtg", "RUzgylu2TCSDFvA1e8U7TA");
    event.stopPropagation();
  });

  // Tap: Pop-Cell (A03我的账户@游客) -> P-E01-设置
  $("#a93OgPvujR-u-dHN-RrUulA").on("tapone-iscroll", function(event) {
    screenTransition.slideLeft("QuWTup8VQhOy3JkaTTpUtg", "LjdYkOB7R9auHq1Bjw39pg");
    event.stopPropagation();
  });

  // Tap: 立即登录 (A03我的账户@游客) -> FlowA1-注册新用户
  $("#ySVrJUUoSd2BAcdMedub1Q0-6AFbDXQ0uM7c2zdEQOZA").on("tapone-iscroll", function(event) {
    screenTransition.slideLeft("QuWTup8VQhOy3JkaTTpUtg", "esWRo_JaS620L0i_HL-Lsg");
    event.stopPropagation();
  });

  // Tap: hotspot (C01登录_@注册用户-认证未完成) -> P-G01-消息中心@空页
  $("#Y-6-x_GQSlW1GQhExpONFws1k61M1GQU6Jm5WgdU0Pzw").on("tapone", function(event) {
    screenTransition.slideLeft("iulX1mmZRYG_ioIT_qiTcA", "k4Kwa8tdS6qqVrrG5MlAhQ");
    event.stopPropagation();
  });

  // Tap: hotspot (C01登录_@注册用户-认证未完成) -> StartUp
  $("#Y-6-x_GQSlW1GQhExpONFwzXnNyuqNQZe7TIyq4ronEw").on("tapone", function(event) {
    screenTransition.instant("iulX1mmZRYG_ioIT_qiTcA", "cTlpmuyERFazkGMXoSNzlg");
    event.stopPropagation();
  });

  // Tap: TAB 3 (C01登录_@注册用户-认证未完成) -> C03我的账户@注册用户
  $("#CzuBWuD7Q1miUZnBYESc6gsohdh5gVRyuiy7oghiBc9A").on("tapone", function(event) {
    screenTransition.instant("iulX1mmZRYG_ioIT_qiTcA", "Almvivx2SFy8l5dWmlKUZw");
    event.stopPropagation();
  });

  // Tap: TAB 2 (C01登录_@注册用户-认证未完成) -> C02订单@注册用户
  $("#CzuBWuD7Q1miUZnBYESc6gPbjN3JY3TvmAZNOnU--CsQ").on("tapone", function(event) {
    screenTransition.instant("iulX1mmZRYG_ioIT_qiTcA", "a4pPu8H6JRHugH4Wv1_i93A");
    event.stopPropagation();
  });

  // Tap: LEFT LOGO (C01登录_@注册用户-认证未完成) -> Previous screen
  $("#Y-6-x_GQSlW1GQhExpONFwnE-nY6HoTFOtieNHZoD_ng").on("tapone", function(event) {
    screenTransition.back($(this));
    event.stopPropagation();
  });

  // Tap: 放弃 (C01登录_@注册用户-认证未完成) -> B01登录_Home@注册用户-none
  $("#sH0VwbC8RMKHZdXw5OkabA").on("tapone-iscroll", function(event) {
    screenTransition.instant("iulX1mmZRYG_ioIT_qiTcA", "a7GvDAMq5SbSH7x9jMH_2EQ");
    event.stopPropagation();
  });

  // Tap: Btn.a Basic/Meduim/ Regular  (C01登录_@注册用户-认证未完成) -> FlowB3-step1-认证流程
  $("#mlLFxgL4T2SXagWF0ZAhCA").on("tapone-iscroll", function(event) {
    screenTransition.instant("iulX1mmZRYG_ioIT_qiTcA", "DIGdzYCGSTaeT8bI6o1uNw");
    event.stopPropagation();
  });

  // Tap: hotspot (B01登录_Home@注册用户-none) -> P-G01-消息中心@空页
  $("#GHbWjRdwTj6nTMbPn7FWZws1k61M1GQU6Jm5WgdU0Pzw").on("tapone", function(event) {
    screenTransition.slideLeft("a7GvDAMq5SbSH7x9jMH_2EQ", "k4Kwa8tdS6qqVrrG5MlAhQ");
    event.stopPropagation();
  });

  // Tap: hotspot (B01登录_Home@注册用户-none) -> StartUp
  $("#GHbWjRdwTj6nTMbPn7FWZwzXnNyuqNQZe7TIyq4ronEw").on("tapone", function(event) {
    screenTransition.instant("a7GvDAMq5SbSH7x9jMH_2EQ", "cTlpmuyERFazkGMXoSNzlg");
    event.stopPropagation();
  });

  // Tap: TAB 3 (B01登录_Home@注册用户-none) -> B03我的账户@注册用户
  $("#a-OlrIHcITFKpdQAb7IWEWAXHFmmQozTWSf5B_-5X_mPg").on("tapone", function(event) {
    screenTransition.instant("a7GvDAMq5SbSH7x9jMH_2EQ", "x9OXSSDHR-O7KEuUFgX6wg");
    event.stopPropagation();
  });

  // Tap: TAB 2 (B01登录_Home@注册用户-none) -> B02订单@注册用户
  $("#a-OlrIHcITFKpdQAb7IWEWA_q-FuLLKShOeGRMIgEw9rA").on("tapone", function(event) {
    screenTransition.instant("a7GvDAMq5SbSH7x9jMH_2EQ", "ml5BOIRYTZWuVq96lUzA3A");
    event.stopPropagation();
  });

  // Tap: LEFT LOGO (B01登录_Home@注册用户-none) -> Previous screen
  $("#GHbWjRdwTj6nTMbPn7FWZwnE-nY6HoTFOtieNHZoD_ng").on("tapone", function(event) {
    screenTransition.back($(this));
    event.stopPropagation();
  });

  // Tap: Group 2 (B01登录_Home@注册用户-none) -> Overlay: A01登录_Home@popup
  $("#skuCeX8ORfCT2vdZpRomCA").on("tapone-iscroll", function(event) {
    if (!interactionManager.getStateIndex("a7GvDAMq5SbSH7x9jMH_2EQ4oczA6BESEGNjN9NJnVXtg")) {
      overlayTransition.instantIn("a7GvDAMq5SbSH7x9jMH_2EQ4oczA6BESEGNjN9NJnVXtg", 4, 0, 0.25, function() {
        interactionManager.setStateIndex("a7GvDAMq5SbSH7x9jMH_2EQ4oczA6BESEGNjN9NJnVXtg", 1);
      });
    }
    event.stopPropagation();
  });

  // Tap: Btn.a Basic/Meduim/ Regular  (B01登录_Home@注册用户-none) -> FlowB1-认证流程确认
  $("#a3LTzFBvsRjqaE7bqSux9xQ").on("tapone-iscroll", function(event) {
    screenTransition.slideLeft("a7GvDAMq5SbSH7x9jMH_2EQ", "Fyo7M_V1RQatoWE3ipzpCQ");
    event.stopPropagation();
  });

  // Tap: popup (B01登录_Home@注册用户-none) -> Close overlay A01登录_Home@popup
  $("#a7GvDAMq5SbSH7x9jMH_2EQV9IwPeVZQ6aQeq8a94tC_Q").on("tapone", function(event) {
    overlayTransition.close("a7GvDAMq5SbSH7x9jMH_2EQ4oczA6BESEGNjN9NJnVXtg", function(overlayElemIdOrIds) {
      interactionManager.setStateIndex(overlayElemIdOrIds, 0);
    });
    event.stopPropagation();
  });

  // Tap: hotspot (P-F02-帮助中心) -> StartUp
  $("#oL0qrwVsQuiC_qXsbMCJTA-yiDxJbQRm2NNy9Dl_Ts1Q").on("tapone", function(event) {
    screenTransition.instant("NuwvdM0wSiiacLasoOvt5Q", "cTlpmuyERFazkGMXoSNzlg");
    event.stopPropagation();
  });

  // Tap: LEFT LOGO (P-F02-帮助中心) -> Previous screen
  $("#oL0qrwVsQuiC_qXsbMCJTAdMifj8wRTOaTbv6SrzYmhA").on("tapone", function(event) {
    screenTransition.back($(this));
    event.stopPropagation();
  });

  // Tap: hotspot (D02订单@注册用户) -> P-G01-消息中心@空页
  $("#a5P8fgxpVTbWTMkf-3jGyOAs1k61M1GQU6Jm5WgdU0Pzw").on("tapone", function(event) {
    screenTransition.slideLeft("IwEgtisHSIS5nbbkeoQ1ZQ", "k4Kwa8tdS6qqVrrG5MlAhQ");
    event.stopPropagation();
  });

  // Tap: hotspot (D02订单@注册用户) -> StartUp
  $("#a5P8fgxpVTbWTMkf-3jGyOAzXnNyuqNQZe7TIyq4ronEw").on("tapone", function(event) {
    screenTransition.instant("IwEgtisHSIS5nbbkeoQ1ZQ", "cTlpmuyERFazkGMXoSNzlg");
    event.stopPropagation();
  });

  // Tap: TAB 3 (D02订单@注册用户) -> D03我的账户@注册用户
  $("#RJM_ZYYZQLmkGCxfNBQudgOu_1qlACQ4qvmR_9jWsIIQ").on("tapone", function(event) {
    screenTransition.instant("IwEgtisHSIS5nbbkeoQ1ZQ", "G61atJxbTyGXPEWuV94rJw");
    event.stopPropagation();
  });

  // Tap: TAB 1 (D02订单@注册用户) -> D01登录@注册认证用户-审核中_Checking
  $("#RJM_ZYYZQLmkGCxfNBQudgHLwuC8CkQOOF60UlrSW2oA").on("tapone", function(event) {
    screenTransition.instant("IwEgtisHSIS5nbbkeoQ1ZQ", "a0JqWSPHfTeOkOKxGnHwMog");
    event.stopPropagation();
  });

  // Tap: LEFT LOGO (D02订单@注册用户) -> Previous screen
  $("#a5P8fgxpVTbWTMkf-3jGyOAnE-nY6HoTFOtieNHZoD_ng").on("tapone", function(event) {
    screenTransition.back($(this));
    event.stopPropagation();
  });

  // Tap: hotspot (F03我的账户@注册用户) -> P-G01-消息中心@空页
  $("#UQfl2R9mSjOgSJtf9vqKIws1k61M1GQU6Jm5WgdU0Pzw").on("tapone", function(event) {
    screenTransition.slideLeft("JHWpAYsQQC6gJzeqgL6ByQ", "k4Kwa8tdS6qqVrrG5MlAhQ");
    event.stopPropagation();
  });

  // Tap: hotspot (F03我的账户@注册用户) -> StartUp
  $("#UQfl2R9mSjOgSJtf9vqKIwzXnNyuqNQZe7TIyq4ronEw").on("tapone", function(event) {
    screenTransition.instant("JHWpAYsQQC6gJzeqgL6ByQ", "cTlpmuyERFazkGMXoSNzlg");
    event.stopPropagation();
  });

  // Tap: TAB 2 (F03我的账户@注册用户) -> F02订单@注册用户
  $("#IEXcjXygSKGv0lo4xee8zQbSliEjSdSBCN8ZjbGAjwag").on("tapone", function(event) {
    screenTransition.instant("JHWpAYsQQC6gJzeqgL6ByQ", "Q4KZTjttTG-4woeMbtAG8w");
    event.stopPropagation();
  });

  // Tap: TAB 1 (F03我的账户@注册用户) -> F01登录_Home@注册用户
  $("#IEXcjXygSKGv0lo4xee8zQCouXwM8jS3eeEpaMxffZmA").on("tapone", function(event) {
    screenTransition.instant("JHWpAYsQQC6gJzeqgL6ByQ", "YMZFY2QgQJWYh8H2lqPXPA");
    event.stopPropagation();
  });

  // Tap: LEFT LOGO (F03我的账户@注册用户) -> Previous screen
  $("#UQfl2R9mSjOgSJtf9vqKIwnE-nY6HoTFOtieNHZoD_ng").on("tapone", function(event) {
    screenTransition.back($(this));
    event.stopPropagation();
  });

  // Tap: Pop-Cell (F03我的账户@注册用户) -> P-A03-还款@data-已放款
  $("#GBqtoXrzQBG5BP83p4waWA").on("tapone-iscroll", function(event) {
    screenTransition.slideRight("JHWpAYsQQC6gJzeqgL6ByQ", "AJ4wmKffQZawq-mAHdSgfA");
    event.stopPropagation();
  });

  // Tap: Pop-Cell (F03我的账户@注册用户) -> P-B02-我的银行卡@data
  $("#ZGA7b6KuR0e0I1pgyOXs1Q").on("tapone-iscroll", function(event) {
    screenTransition.slideLeft("JHWpAYsQQC6gJzeqgL6ByQ", "rtSy8sQFS4ygxyZSYfObzw");
    event.stopPropagation();
  });

  // Tap: Pop-Cell (F03我的账户@注册用户) -> P-D02-还款信息@data
  $("#a3-0dLbEjTwi_z7rK_yBoAw").on("tapone-iscroll", function(event) {
    screenTransition.slideLeft("JHWpAYsQQC6gJzeqgL6ByQ", "a1Ta66ckR5SX134d24FkDw");
    event.stopPropagation();
  });

  // Tap: Pop-Cell (F03我的账户@注册用户) -> P-F01-帮助与反馈
  $("#daGEReSGTBeVwTXqcbVKmA").on("tapone-iscroll", function(event) {
    screenTransition.slideLeft("JHWpAYsQQC6gJzeqgL6ByQ", "RUzgylu2TCSDFvA1e8U7TA");
    event.stopPropagation();
  });

  // Tap: Pop-Cell (F03我的账户@注册用户) -> P-E01-设置
  $("#a5kumlcOcQBeaf4Lmz96PYQ").on("tapone-iscroll", function(event) {
    screenTransition.slideLeft("JHWpAYsQQC6gJzeqgL6ByQ", "LjdYkOB7R9auHq1Bjw39pg");
    event.stopPropagation();
  });

  // Tap: close (FlowA3-注册新用户) -> A01登录_Home@新用户-none
  $("#a0j1RzqKpQdyDmkQ8P91puAJrgTIcqzSBSJi0wymlw8nw").on("tapone", function(event) {
    screenTransition.slideRight("tSTV35uvTBWCyii2YMO3Ng", "F2LTMLcFT5aVOa41tiRfjQ");
    event.stopPropagation();
  });

  // Tap: Input/Basic/ Icon||Text (FlowA3-注册新用户) -> FlowA4-注册新用户
  $("#a8jaCuXK7S6CjgRxQcWW_0w").on("tapone", function(event) {
    screenTransition.instant("tSTV35uvTBWCyii2YMO3Ng", "a3LJoo4buQb-BbdHSaRkGuw");
    event.stopPropagation();
  });

  // Tap: Input/Basic/ Icon||Text (FlowA3-注册新用户) -> FlowA4-注册新用户
  $("#rRcEdiWNRE6Ob7zG8Zy1eA").on("tapone", function(event) {
    screenTransition.instant("tSTV35uvTBWCyii2YMO3Ng", "a3LJoo4buQb-BbdHSaRkGuw");
    event.stopPropagation();
  });

  // Tap: 《小蓝钱包服务协议》 (FlowA3-注册新用户) -> P-H01-用户协议
  $("#d4L1C5baQf2gx0Y93YtyFw").on("tapone", function(event) {
    screenTransition.slideLeft("tSTV35uvTBWCyii2YMO3Ng", "euwkT_pnRFyaoJOikGidyA");
    event.stopPropagation();
  });

  // Tap: hotspot (D01登录@注册认证用户-审核中_Checking) -> P-G01-消息中心@空页
  $("#S6uBBksQRlyhfG_0kavQIAs1k61M1GQU6Jm5WgdU0Pzw").on("tapone", function(event) {
    screenTransition.slideLeft("a0JqWSPHfTeOkOKxGnHwMog", "k4Kwa8tdS6qqVrrG5MlAhQ");
    event.stopPropagation();
  });

  // Tap: hotspot (D01登录@注册认证用户-审核中_Checking) -> StartUp
  $("#S6uBBksQRlyhfG_0kavQIAzXnNyuqNQZe7TIyq4ronEw").on("tapone", function(event) {
    screenTransition.instant("a0JqWSPHfTeOkOKxGnHwMog", "cTlpmuyERFazkGMXoSNzlg");
    event.stopPropagation();
  });

  // Tap: TAB 3 (D01登录@注册认证用户-审核中_Checking) -> D03我的账户@注册用户
  $("#qyRd9bPXSdmGmaiCKj6DJQOu_1qlACQ4qvmR_9jWsIIQ").on("tapone", function(event) {
    screenTransition.instant("a0JqWSPHfTeOkOKxGnHwMog", "G61atJxbTyGXPEWuV94rJw");
    event.stopPropagation();
  });

  // Tap: TAB 2 (D01登录@注册认证用户-审核中_Checking) -> D02订单@注册用户
  $("#qyRd9bPXSdmGmaiCKj6DJQaYR8PovRT7OCaD-dwK_hXA").on("tapone", function(event) {
    screenTransition.instant("a0JqWSPHfTeOkOKxGnHwMog", "IwEgtisHSIS5nbbkeoQ1ZQ");
    event.stopPropagation();
  });

  // Tap: LEFT LOGO (D01登录@注册认证用户-审核中_Checking) -> Previous screen
  $("#S6uBBksQRlyhfG_0kavQIAnE-nY6HoTFOtieNHZoD_ng").on("tapone", function(event) {
    screenTransition.back($(this));
    event.stopPropagation();
  });

  // Tap: LEFT LOGO (FlowB3-step4-认证流程) -> Previous screen
  $("#exHOaqj4Q0ScB8Zcb8Ja2AdMifj8wRTOaTbv6SrzYmhA").on("tapone", function(event) {
    screenTransition.back($(this));
    event.stopPropagation();
  });

  // Tap: Btn.a Basic/Meduim/ Regular  (FlowB3-step4-认证流程) -> Overlay: FlowB4-认证完成通知
  $("#E4YjJPFgQp-yj_SLjkckdA").on("tapone", function(event) {
    if (!interactionManager.getStateIndex("iJLQzdxXRZi3wa4ccUNMuAZdeNVi2kRr2N5IsGB2BRzg")) {
      overlayTransition.instantIn("iJLQzdxXRZi3wa4ccUNMuAZdeNVi2kRr2N5IsGB2BRzg", 4, 0, 0.25, function() {
        interactionManager.setStateIndex("iJLQzdxXRZi3wa4ccUNMuAZdeNVi2kRr2N5IsGB2BRzg", 1);
      });
    }
    event.stopPropagation();
  });

  // Tap: close (FlowB3-step4-认证流程) -> D01登录@注册认证用户-审核中_Checking
  $("#iJLQzdxXRZi3wa4ccUNMuA9QICSR_DSuiA872-jtjecg").on("tapone", function(event) {
    screenTransition.slideRight("iJLQzdxXRZi3wa4ccUNMuA", "a0JqWSPHfTeOkOKxGnHwMog");
    event.stopPropagation();
  });

  // Tap: hotspot (P-G01-消息中心@空页) -> StartUp
  $("#PUJW9hT6QsiwZVwum0FIwg-yiDxJbQRm2NNy9Dl_Ts1Q").on("tapone", function(event) {
    screenTransition.instant("k4Kwa8tdS6qqVrrG5MlAhQ", "cTlpmuyERFazkGMXoSNzlg");
    event.stopPropagation();
  });

  // Tap: LEFT LOGO (P-G01-消息中心@空页) -> Previous screen
  $("#PUJW9hT6QsiwZVwum0FIwgdMifj8wRTOaTbv6SrzYmhA").on("tapone", function(event) {
    screenTransition.back($(this));
    event.stopPropagation();
  });

  // Tap: hotspot (C02订单@注册用户) -> P-G01-消息中心@空页
  $("#rdKWfJSeR2Gfd21DShRdHgs1k61M1GQU6Jm5WgdU0Pzw").on("tapone", function(event) {
    screenTransition.slideLeft("a4pPu8H6JRHugH4Wv1_i93A", "k4Kwa8tdS6qqVrrG5MlAhQ");
    event.stopPropagation();
  });

  // Tap: hotspot (C02订单@注册用户) -> StartUp
  $("#rdKWfJSeR2Gfd21DShRdHgzXnNyuqNQZe7TIyq4ronEw").on("tapone", function(event) {
    screenTransition.instant("a4pPu8H6JRHugH4Wv1_i93A", "cTlpmuyERFazkGMXoSNzlg");
    event.stopPropagation();
  });

  // Tap: TAB 3 (C02订单@注册用户) -> C03我的账户@注册用户
  $("#ObVY6YTvR7KBHlG7PVDAAgsohdh5gVRyuiy7oghiBc9A").on("tapone", function(event) {
    screenTransition.instant("a4pPu8H6JRHugH4Wv1_i93A", "Almvivx2SFy8l5dWmlKUZw");
    event.stopPropagation();
  });

  // Tap: TAB 1 (C02订单@注册用户) -> C01登录_@注册用户-认证未完成
  $("#ObVY6YTvR7KBHlG7PVDAAgGUiyTwQgTB-Hpd7L6ouP0w").on("tapone", function(event) {
    screenTransition.instant("a4pPu8H6JRHugH4Wv1_i93A", "iulX1mmZRYG_ioIT_qiTcA");
    event.stopPropagation();
  });

  // Tap: LEFT LOGO (C02订单@注册用户) -> Previous screen
  $("#rdKWfJSeR2Gfd21DShRdHgnE-nY6HoTFOtieNHZoD_ng").on("tapone", function(event) {
    screenTransition.back($(this));
    event.stopPropagation();
  });

  // Tap: hotspot (E01登录@注册+认证用户-审核通过) -> P-G02-消息中心@data
  $("#vElv6qqVSTyS0xlSBHdXPQRjEVYkNJS0SP0KjS35VYdA").on("tapone", function(event) {
    screenTransition.slideLeft("dgUyIBSLQlWffV2FS8qNOg", "YXHSqPQIRm6iJgdzll5wPg");
    event.stopPropagation();
  });

  // Tap: hotspot (E01登录@注册+认证用户-审核通过) -> StartUp
  $("#vElv6qqVSTyS0xlSBHdXPQokD6j2plTQuyxcQs3oWnhQ").on("tapone", function(event) {
    screenTransition.instant("dgUyIBSLQlWffV2FS8qNOg", "cTlpmuyERFazkGMXoSNzlg");
    event.stopPropagation();
  });

  // Tap: TAB 3 (E01登录@注册+认证用户-审核通过) -> E03我的账户@注册用户
  $("#vocoapRQRz-6uDWeh6J4qQKHbr9Tg6SK-Ras1xQa4YLA").on("tapone", function(event) {
    screenTransition.instant("dgUyIBSLQlWffV2FS8qNOg", "VN8W6Zy7QMuTulMDVIj7Fg");
    event.stopPropagation();
  });

  // Tap: TAB 2 (E01登录@注册+认证用户-审核通过) -> E02订单@注册用户
  $("#vocoapRQRz-6uDWeh6J4qQXQn4Q35SSC2H5bO1FqKZ2g").on("tapone", function(event) {
    screenTransition.instant("dgUyIBSLQlWffV2FS8qNOg", "hO_EOdcETrO9bnKkkdKLrw");
    event.stopPropagation();
  });

  // Tap: LEFT LOGO (E01登录@注册+认证用户-审核通过) -> Previous screen
  $("#vElv6qqVSTyS0xlSBHdXPQZhb2SJuwR7SkqyVpZT14xQ").on("tapone", function(event) {
    screenTransition.back($(this));
    event.stopPropagation();
  });

  // Tap: hotspot (FlowG2-绑定银行卡-成功) -> StartUp
  $("#kPRiq1L9R_2430e4VL7SgQ-yiDxJbQRm2NNy9Dl_Ts1Q").on("tapone", function(event) {
    screenTransition.instant("yvI-hATqR4Ob-n2YcQVw_Q", "cTlpmuyERFazkGMXoSNzlg");
    event.stopPropagation();
  });

  // Tap: LEFT LOGO (FlowG2-绑定银行卡-成功) -> Previous screen
  $("#kPRiq1L9R_2430e4VL7SgQdMifj8wRTOaTbv6SrzYmhA").on("tapone", function(event) {
    screenTransition.back($(this));
    event.stopPropagation();
  });

  // Tap: Input/Item-input (FlowG2-绑定银行卡-成功) -> FlowC2-选择银行
  $("#XQ8tcswVSmSHENZiOGIuBQ").on("tapone-iscroll", function(event) {
    screenTransition.slideLeft("yvI-hATqR4Ob-n2YcQVw_Q", "xpozwDEnT9GGttZZ2GSkBw");
    event.stopPropagation();
  });

  // Tap: 《催收宝用户服务协议》 (FlowG2-绑定银行卡-成功) -> P-H01-用户协议
  $("#ZhAwQ_RASpC-56sI624_Sw").on("tapone-iscroll", function(event) {
    screenTransition.slideLeft("yvI-hATqR4Ob-n2YcQVw_Q", "euwkT_pnRFyaoJOikGidyA");
    event.stopPropagation();
  });

  // Tap: Btn.a Basic/Meduim/ Regular  (FlowG2-绑定银行卡-成功) -> FlowB3-step4-认证流程
  $("#z1FKnCAATzOOIlPvZSSCuA").on("tapone-iscroll", function(event) {
    screenTransition.instant("yvI-hATqR4Ob-n2YcQVw_Q", "iJLQzdxXRZi3wa4ccUNMuA");
    event.stopPropagation();
  });

  // Tap: hotspot (P-F03-意见反馈) -> StartUp
  $("#ieenbN7LS8mgvOaNJKEV-g-yiDxJbQRm2NNy9Dl_Ts1Q").on("tapone", function(event) {
    screenTransition.instant("SqZqNzEiQ56lHCZi48YXVw", "cTlpmuyERFazkGMXoSNzlg");
    event.stopPropagation();
  });

  // Tap: LEFT LOGO (P-F03-意见反馈) -> Previous screen
  $("#ieenbN7LS8mgvOaNJKEV-gdMifj8wRTOaTbv6SrzYmhA").on("tapone", function(event) {
    screenTransition.back($(this));
    event.stopPropagation();
  });

  // Tap: hotspot (P-D02-还款信息@data) -> StartUp
  $("#kyLsCXMiTVmkgxhikroyhw-yiDxJbQRm2NNy9Dl_Ts1Q").on("tapone", function(event) {
    screenTransition.instant("a1Ta66ckR5SX134d24FkDw", "cTlpmuyERFazkGMXoSNzlg");
    event.stopPropagation();
  });

  // Tap: LEFT LOGO (P-D02-还款信息@data) -> Previous screen
  $("#kyLsCXMiTVmkgxhikroyhwdMifj8wRTOaTbv6SrzYmhA").on("tapone", function(event) {
    screenTransition.back($(this));
    event.stopPropagation();
  });

  // Tap: hotspot (A01登录_Home@新用户-none) -> P-G01-消息中心@空页
  $("#EOgzIqdCRjOWSH10QBZ6vgs1k61M1GQU6Jm5WgdU0Pzw").on("tapone", function(event) {
    screenTransition.slideLeft("F2LTMLcFT5aVOa41tiRfjQ", "k4Kwa8tdS6qqVrrG5MlAhQ");
    event.stopPropagation();
  });

  // Tap: hotspot (A01登录_Home@新用户-none) -> StartUp
  $("#EOgzIqdCRjOWSH10QBZ6vgzXnNyuqNQZe7TIyq4ronEw").on("tapone", function(event) {
    screenTransition.instant("F2LTMLcFT5aVOa41tiRfjQ", "cTlpmuyERFazkGMXoSNzlg");
    event.stopPropagation();
  });

  // Tap: TAB 3 (A01登录_Home@新用户-none) -> A03我的账户@游客
  $("#a9Vy29ueMT9-bVP9qy0z90gisz0HySFRcW6OYq0b2Dkgw").on("tapone", function(event) {
    screenTransition.instant("F2LTMLcFT5aVOa41tiRfjQ", "QuWTup8VQhOy3JkaTTpUtg");
    event.stopPropagation();
  });

  // Tap: TAB 2 (A01登录_Home@新用户-none) -> A02订单@新用户
  $("#a9Vy29ueMT9-bVP9qy0z90g6_jquNuiTCyFG1RWAloA7g").on("tapone", function(event) {
    screenTransition.instant("F2LTMLcFT5aVOa41tiRfjQ", "Uy_MauouTSSMt8_bgm6DnQ");
    event.stopPropagation();
  });

  // Tap: LEFT LOGO (A01登录_Home@新用户-none) -> Previous screen
  $("#EOgzIqdCRjOWSH10QBZ6vgnE-nY6HoTFOtieNHZoD_ng").on("tapone", function(event) {
    screenTransition.back($(this));
    event.stopPropagation();
  });

  // Tap: Group 2 (A01登录_Home@新用户-none) -> Overlay: A01登录_Home@popup
  $("#a02GybMsJSe6iosBQ-0SlIQ").on("tapone-iscroll", function(event) {
    if (!interactionManager.getStateIndex("F2LTMLcFT5aVOa41tiRfjQ4oczA6BESEGNjN9NJnVXtg")) {
      overlayTransition.instantIn("F2LTMLcFT5aVOa41tiRfjQ4oczA6BESEGNjN9NJnVXtg", 4, 0, 0.25, function() {
        interactionManager.setStateIndex("F2LTMLcFT5aVOa41tiRfjQ4oczA6BESEGNjN9NJnVXtg", 1);
      });
    }
    event.stopPropagation();
  });

  // Tap: Btn.a Basic/Meduim/ Regular  (A01登录_Home@新用户-none) -> FlowA1-注册新用户
  $("#iapg9B4PRfWO5a95W2CJAg").on("tapone-iscroll", function(event) {
    screenTransition.instant("F2LTMLcFT5aVOa41tiRfjQ", "esWRo_JaS620L0i_HL-Lsg");
    event.stopPropagation();
  });

  // Tap: popup (A01登录_Home@新用户-none) -> Close overlay A01登录_Home@popup
  $("#F2LTMLcFT5aVOa41tiRfjQV9IwPeVZQ6aQeq8a94tC_Q").on("tapone", function(event) {
    overlayTransition.close("F2LTMLcFT5aVOa41tiRfjQ4oczA6BESEGNjN9NJnVXtg", function(overlayElemIdOrIds) {
      interactionManager.setStateIndex(overlayElemIdOrIds, 0);
    });
    event.stopPropagation();
  });

  // Tap: hotspot (FlowB1-认证流程确认) -> StartUp
  $("#HN0EWK7RSwaW_sgLqChGIg-yiDxJbQRm2NNy9Dl_Ts1Q").on("tapone", function(event) {
    screenTransition.instant("Fyo7M_V1RQatoWE3ipzpCQ", "cTlpmuyERFazkGMXoSNzlg");
    event.stopPropagation();
  });

  // Tap: LEFT LOGO (FlowB1-认证流程确认) -> Previous screen
  $("#HN0EWK7RSwaW_sgLqChGIgdMifj8wRTOaTbv6SrzYmhA").on("tapone", function(event) {
    screenTransition.back($(this));
    event.stopPropagation();
  });

  // Tap: Btn.a Basic/Meduim/ Regular  (FlowB1-认证流程确认) -> FlowB2-认证流程身份认证
  $("#Ww34k3ccRhyY5YfhqDPVCA").on("tapone", function(event) {
    screenTransition.slideLeft("Fyo7M_V1RQatoWE3ipzpCQ", "UzuLZZjORqSBH23Wol87nQ");
    event.stopPropagation();
  });

  // Tap: + ICON (FlowB1-认证流程确认) -> Overlay: FlowB1-popup
  $("#YZZ0uooxSUqKRxxIDgwF5A").on("tapone", function(event) {
    if (!interactionManager.getStateIndex("Fyo7M_V1RQatoWE3ipzpCQYkZLf2GYQMau59zMoetl8A")) {
      overlayTransition.fadeIn("Fyo7M_V1RQatoWE3ipzpCQYkZLf2GYQMau59zMoetl8A", 4, 1, 0.25, function() {
        interactionManager.setStateIndex("Fyo7M_V1RQatoWE3ipzpCQYkZLf2GYQMau59zMoetl8A", 1);
      });
    }
    event.stopPropagation();
  });

  // Tap: Views / Alerts / Default 1 Line Title (FlowB1-认证流程确认) -> FlowB1-认证流程确认
  $("#Fyo7M_V1RQatoWE3ipzpCQn26l2WQoSli6Ig37wcIZxg").on("tapone", function(event) {
    screenTransition.instant("Fyo7M_V1RQatoWE3ipzpCQ", "Fyo7M_V1RQatoWE3ipzpCQ");
    event.stopPropagation();
  });

  // Tap: hotspot (P-F04-常见问题) -> StartUp
  $("#gwHoIC1cR8eJSIaUH6h0bQ-yiDxJbQRm2NNy9Dl_Ts1Q").on("tapone", function(event) {
    screenTransition.instant("XY0cJ_N9TeW8uebDQ5w_og", "cTlpmuyERFazkGMXoSNzlg");
    event.stopPropagation();
  });

  // Tap: LEFT LOGO (P-F04-常见问题) -> Previous screen
  $("#gwHoIC1cR8eJSIaUH6h0bQdMifj8wRTOaTbv6SrzYmhA").on("tapone", function(event) {
    screenTransition.back($(this));
    event.stopPropagation();
  });

  // Tap: hotspot (P-A03-还款记录@空页) -> StartUp
  $("#ekQkZwiDTQ-DvRBy-hQkrA-yiDxJbQRm2NNy9Dl_Ts1Q").on("tapone", function(event) {
    screenTransition.instant("WiJ82FgRRvyQBxmul-pM7Q", "cTlpmuyERFazkGMXoSNzlg");
    event.stopPropagation();
  });

  // Tap: LEFT LOGO (P-A03-还款记录@空页) -> Previous screen
  $("#ekQkZwiDTQ-DvRBy-hQkrAdMifj8wRTOaTbv6SrzYmhA").on("tapone", function(event) {
    screenTransition.back($(this));
    event.stopPropagation();
  });

  // Tap: Btn.b Default/1 Normal isSuccess (StartUp) -> A01登录_Home@新用户-none
  $("#RiG6fuHhTWiY-7b4Om2Cag").on("tapone", function(event) {
    screenTransition.instant("cTlpmuyERFazkGMXoSNzlg", "F2LTMLcFT5aVOa41tiRfjQ");
    event.stopPropagation();
  });

  // Tap: Btn.b Default/1 Normal isSuccess (StartUp) -> B01登录_Home@注册用户-none
  $("#DapwhD16RmWr1PxKJAmndA").on("tapone", function(event) {
    screenTransition.slideLeft("cTlpmuyERFazkGMXoSNzlg", "a7GvDAMq5SbSH7x9jMH_2EQ");
    event.stopPropagation();
  });

  // Tap: Btn.b Default/1 Normal isSuccess (StartUp) -> C01登录_@注册用户-认证未完成
  $("#kqjXYO-9TvyVN6jF4ld5Hg").on("tapone", function(event) {
    screenTransition.slideLeft("cTlpmuyERFazkGMXoSNzlg", "iulX1mmZRYG_ioIT_qiTcA");
    event.stopPropagation();
  });

  // Tap: Btn.b Default/1 Normal isSuccess (StartUp) -> D01登录@注册认证用户-审核中_Checking
  $("#AnvduzYhSaOXL-K6blYs0Q").on("tapone", function(event) {
    screenTransition.slideLeft("cTlpmuyERFazkGMXoSNzlg", "a0JqWSPHfTeOkOKxGnHwMog");
    event.stopPropagation();
  });

  // Tap: Btn.b Default/1 Normal isSuccess (StartUp) -> E01登录@注册+认证用户-审核通过
  $("#kVgtM-jSRVKFVAHtD8tOTw").on("tapone", function(event) {
    screenTransition.slideLeft("cTlpmuyERFazkGMXoSNzlg", "dgUyIBSLQlWffV2FS8qNOg");
    event.stopPropagation();
  });

  // Tap: Btn.b Default/1 Normal isSuccess (StartUp) -> F01登录_Home@注册用户
  $("#h4jIRzjeQA26Ta82POhXEg").on("tapone", function(event) {
    screenTransition.slideLeft("cTlpmuyERFazkGMXoSNzlg", "YMZFY2QgQJWYh8H2lqPXPA");
    event.stopPropagation();
  });

  // Tap: Btn.b Default/1 Normal isSuccess (StartUp) -> StyleGuide
  $("#DMsjj1R2RJKey6ShP_AQGA").on("tapone", function(event) {
    screenTransition.slideLeft("cTlpmuyERFazkGMXoSNzlg", "a_PgZYHeYQm6K3pBNvWRQeQ");
    event.stopPropagation();
  });

  // Tap: hotspot (P-A03-还款@data-已放款) -> StartUp
  $("#T01TJkklTBKxDM6DRicuWg-yiDxJbQRm2NNy9Dl_Ts1Q").on("tapone", function(event) {
    screenTransition.instant("AJ4wmKffQZawq-mAHdSgfA", "cTlpmuyERFazkGMXoSNzlg");
    event.stopPropagation();
  });

  // Tap: LEFT LOGO (P-A03-还款@data-已放款) -> Previous screen
  $("#T01TJkklTBKxDM6DRicuWgdMifj8wRTOaTbv6SrzYmhA").on("tapone", function(event) {
    screenTransition.back($(this));
    event.stopPropagation();
  });

  // Tap: 还款记录 (P-A03-还款@data-已放款) -> P-A04-还款记录@data
  $("#a9UGTuIpReK7oE9t8kVjIQ").on("tapone", function(event) {
    screenTransition.slideLeft("AJ4wmKffQZawq-mAHdSgfA", "szvQgE4TSr-vD9gQeGGC4g");
    event.stopPropagation();
  });

  // Tap: hotspot (B02订单@注册用户) -> P-G01-消息中心@空页
  $("#zbayfHuSSUOXKA6R15IVdgs1k61M1GQU6Jm5WgdU0Pzw").on("tapone", function(event) {
    screenTransition.slideLeft("ml5BOIRYTZWuVq96lUzA3A", "k4Kwa8tdS6qqVrrG5MlAhQ");
    event.stopPropagation();
  });

  // Tap: hotspot (B02订单@注册用户) -> StartUp
  $("#zbayfHuSSUOXKA6R15IVdgzXnNyuqNQZe7TIyq4ronEw").on("tapone", function(event) {
    screenTransition.instant("ml5BOIRYTZWuVq96lUzA3A", "cTlpmuyERFazkGMXoSNzlg");
    event.stopPropagation();
  });

  // Tap: TAB 3 (B02订单@注册用户) -> B03我的账户@注册用户
  $("#z60NhDq5QtiMSR4ysiqPuAXHFmmQozTWSf5B_-5X_mPg").on("tapone", function(event) {
    screenTransition.instant("ml5BOIRYTZWuVq96lUzA3A", "x9OXSSDHR-O7KEuUFgX6wg");
    event.stopPropagation();
  });

  // Tap: TAB 1 (B02订单@注册用户) -> B01登录_Home@注册用户-none
  $("#z60NhDq5QtiMSR4ysiqPuAFXsKhPr9ShKMWd9_euw-Ow").on("tapone", function(event) {
    screenTransition.instant("ml5BOIRYTZWuVq96lUzA3A", "a7GvDAMq5SbSH7x9jMH_2EQ");
    event.stopPropagation();
  });

  // Tap: LEFT LOGO (B02订单@注册用户) -> Previous screen
  $("#zbayfHuSSUOXKA6R15IVdgnE-nY6HoTFOtieNHZoD_ng").on("tapone", function(event) {
    screenTransition.back($(this));
    event.stopPropagation();
  });

  // Tap: Group 3 (B02订单@注册用户) -> B01登录_Home@注册用户-none
  $("#DCDxIBz3QhW2z1OQ-3GB5w").on("tapone-iscroll", function(event) {
    screenTransition.instant("ml5BOIRYTZWuVq96lUzA3A", "a7GvDAMq5SbSH7x9jMH_2EQ");
    event.stopPropagation();
  });

  // Tap: hotspot (FlowD2-基本信息填写完成) -> StartUp
  $("#Ndly1syISLyv479mGiCAXQ-yiDxJbQRm2NNy9Dl_Ts1Q").on("tapone", function(event) {
    screenTransition.instant("HT7teQ8JRdCLhj38UlrAYA", "cTlpmuyERFazkGMXoSNzlg");
    event.stopPropagation();
  });

  // Tap: LEFT LOGO (FlowD2-基本信息填写完成) -> Previous screen
  $("#Ndly1syISLyv479mGiCAXQdMifj8wRTOaTbv6SrzYmhA").on("tapone", function(event) {
    screenTransition.back($(this));
    event.stopPropagation();
  });

  // Tap: 保存 (FlowD2-基本信息填写完成) -> FlowB3-step1-认证流程
  $("#jZca3xfiRCGDdBP5Mm4EMQ").on("tapone", function(event) {
    screenTransition.slideRight("HT7teQ8JRdCLhj38UlrAYA", "DIGdzYCGSTaeT8bI6o1uNw");
    event.stopPropagation();
  });

  // Tap: hotspot (P-B01-我的银行卡@空页) -> StartUp
  $("#SpX3xbaVRWa6bma9-hoN5w-yiDxJbQRm2NNy9Dl_Ts1Q").on("tapone", function(event) {
    screenTransition.instant("F-jhzxk1RT6Vgkema_IGUg", "cTlpmuyERFazkGMXoSNzlg");
    event.stopPropagation();
  });

  // Tap: LEFT LOGO (P-B01-我的银行卡@空页) -> Previous screen
  $("#SpX3xbaVRWa6bma9-hoN5wdMifj8wRTOaTbv6SrzYmhA").on("tapone", function(event) {
    screenTransition.back($(this));
    event.stopPropagation();
  });

  // Tap: Btn.a Basic/Meduim/ Regular  (P-B01-我的银行卡@空页) -> FlowC1-绑定银行卡
  $("#lmLyE8M3Rie6U37ao3CRjQ").on("tapone-iscroll", function(event) {
    screenTransition.slideLeft("F-jhzxk1RT6Vgkema_IGUg", "Pe5-xSGLTmiAGcf6_TPa6w");
    event.stopPropagation();
  });

  // Tap: hotspot (FlowE1-紧急联系人) -> StartUp
  $("#a-rfiiifNSXq-g2PHzeGhOw-yiDxJbQRm2NNy9Dl_Ts1Q").on("tapone", function(event) {
    screenTransition.instant("tm6Q8oHRQzKWpWFswLrOww", "cTlpmuyERFazkGMXoSNzlg");
    event.stopPropagation();
  });

  // Tap: LEFT LOGO (FlowE1-紧急联系人) -> Previous screen
  $("#a-rfiiifNSXq-g2PHzeGhOwdMifj8wRTOaTbv6SrzYmhA").on("tapone", function(event) {
    screenTransition.back($(this));
    event.stopPropagation();
  });

  // Tap: Input/Item-input (FlowE1-紧急联系人) -> Overlay: FlowE4-通讯录权限申请
  $("#RvwJ5TB0SMm1ytGRHVI_rg").on("tapone-iscroll", function(event) {
    if (!interactionManager.getStateIndex("tm6Q8oHRQzKWpWFswLrOwwg0rs93e8R9y3U3-27mlUKg")) {
      overlayTransition.fadeIn("tm6Q8oHRQzKWpWFswLrOwwg0rs93e8R9y3U3-27mlUKg", 4, 1, 0.25, function() {
        interactionManager.setStateIndex("tm6Q8oHRQzKWpWFswLrOwwg0rs93e8R9y3U3-27mlUKg", 1);
      });
    }
    event.stopPropagation();
  });

  // Tap: Input/Item-input (FlowE1-紧急联系人) -> Overlay: FlowE4-通讯录权限申请
  $("#oY_BEcgyTjiC-qYEVWlq6w").on("tapone-iscroll", function(event) {
    if (!interactionManager.getStateIndex("tm6Q8oHRQzKWpWFswLrOwwg0rs93e8R9y3U3-27mlUKg")) {
      overlayTransition.fadeIn("tm6Q8oHRQzKWpWFswLrOwwg0rs93e8R9y3U3-27mlUKg", 4, 1, 0.25, function() {
        interactionManager.setStateIndex("tm6Q8oHRQzKWpWFswLrOwwg0rs93e8R9y3U3-27mlUKg", 1);
      });
    }
    event.stopPropagation();
  });

  // Tap: 允许 (FlowE1-紧急联系人) -> FlowE3-紧急联系人
  $("#tm6Q8oHRQzKWpWFswLrOwwHRaBYMM0QFO6CtsShsnAFw").on("tapone", function(event) {
    screenTransition.instant("tm6Q8oHRQzKWpWFswLrOww", "wFla0Ol6Soy95aBizN-xRQ");
    event.stopPropagation();
  });

  // Tap: 不允许 (FlowE1-紧急联系人) -> FlowE3-紧急联系人
  $("#tm6Q8oHRQzKWpWFswLrOwwGWMyE4fpTTaFORoR1KH68w").on("tapone", function(event) {
    screenTransition.instant("tm6Q8oHRQzKWpWFswLrOww", "wFla0Ol6Soy95aBizN-xRQ");
    event.stopPropagation();
  });

  // Tap: close (FlowA2-注册新用户) -> A01登录_Home@新用户-none
  $("#SLACjdu_SSStwhnoIU-x4wJrgTIcqzSBSJi0wymlw8nw").on("tapone", function(event) {
    screenTransition.slideRight("N0eGDP46QgC_9-8Yc-QU6g", "F2LTMLcFT5aVOa41tiRfjQ");
    event.stopPropagation();
  });

  // Tap: Btn.a Basic/Normal/ Regular  (FlowA2-注册新用户) -> FlowA3-注册新用户
  $("#a-UPfvgJgTQecnFgf5kGgKw").on("tapone", function(event) {
    screenTransition.slideLeft("N0eGDP46QgC_9-8Yc-QU6g", "tSTV35uvTBWCyii2YMO3Ng");
    event.stopPropagation();
  });

  router.buildRouteHandlers(true);
  prototype = new Prototype();
});
