var settings = settings || {};
settings.appType = AppType.NATIVE;
settings.scalingType = ScalingType.RESIZING_CONSTRAINTS;
settings.homeId = "cTlpmuyERFazkGMXoSNzlg";
settings.deviceImage = {origin: {x: 30, y: 109}, screenSize: {width: 375, height: 667}};
settings.embeddedFonts = [
  {fontFamily: "Helvetica Neue", src: "assets/fonts/helvetica_neue"},
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

  // Tap: Group 2 (A01登录_Home) -> A01登录_Home#active
  $("#a02GybMsJSe6iosBQ-0SlIQ").on("tapone", function(event) {
    screenTransition.instant("F2LTMLcFT5aVOa41tiRfjQ", "SdKlqHk1TJCUj4I8LSUTEg");
    event.stopPropagation();
  });

  // Tap: Btn.a Basic/Meduim/ Regular  (A01登录_Home) -> B01注册新用户-Step1
  $("#iapg9B4PRfWO5a95W2CJAg").on("tapone", function(event) {
    screenTransition.instant("F2LTMLcFT5aVOa41tiRfjQ", "esWRo_JaS620L0i_HL-Lsg");
    event.stopPropagation();
  });

  // Tap: TAB 3 (A01登录_Home) -> A01我的
  $("#a9Vy29ueMT9-bVP9qy0z90gisz0HySFRcW6OYq0b2Dkgw").on("tapone", function(event) {
    screenTransition.instant("F2LTMLcFT5aVOa41tiRfjQ", "QuWTup8VQhOy3JkaTTpUtg");
    event.stopPropagation();
  });

  // Tap: TAB 2 (A01登录_Home) -> A01订单
  $("#a9Vy29ueMT9-bVP9qy0z90g6_jquNuiTCyFG1RWAloA7g").on("tapone", function(event) {
    screenTransition.instant("F2LTMLcFT5aVOa41tiRfjQ", "Uy_MauouTSSMt8_bgm6DnQ");
    event.stopPropagation();
  });

  // Tap: Btn.b Default/1 Normal isSuccess (A00 StartUp) -> A01登录_Home
  $("#RiG6fuHhTWiY-7b4Om2Cag").on("tapone", function(event) {
    screenTransition.instant("cTlpmuyERFazkGMXoSNzlg", "F2LTMLcFT5aVOa41tiRfjQ");
    event.stopPropagation();
  });

  // Tap: close (B01注册新用户-Step3) -> A01登录_Home
  $("#a0j1RzqKpQdyDmkQ8P91puAJrgTIcqzSBSJi0wymlw8nw").on("tapone", function(event) {
    screenTransition.slideRight("tSTV35uvTBWCyii2YMO3Ng", "F2LTMLcFT5aVOa41tiRfjQ");
    event.stopPropagation();
  });

  // Tap: Input/Basic/ Icon||Text (B01注册新用户-Step3) -> B01注册新用户-Step4
  $("#a8jaCuXK7S6CjgRxQcWW_0w").on("tapone", function(event) {
    screenTransition.instant("tSTV35uvTBWCyii2YMO3Ng", "a3LJoo4buQb-BbdHSaRkGuw");
    event.stopPropagation();
  });

  // Tap: Input/Basic/ Icon||Text (B01注册新用户-Step3) -> B01注册新用户-Step4
  $("#rRcEdiWNRE6Ob7zG8Zy1eA").on("tapone", function(event) {
    screenTransition.instant("tSTV35uvTBWCyii2YMO3Ng", "a3LJoo4buQb-BbdHSaRkGuw");
    event.stopPropagation();
  });

  // Tap: TAB 3 (A01订单) -> A01我的
  $("#AOOk-unaQACi2m574ruAvAisz0HySFRcW6OYq0b2Dkgw").on("tapone", function(event) {
    screenTransition.instant("Uy_MauouTSSMt8_bgm6DnQ", "QuWTup8VQhOy3JkaTTpUtg");
    event.stopPropagation();
  });

  // Tap: TAB 1 (A01订单) -> A01登录_Home
  $("#AOOk-unaQACi2m574ruAvA0hd-KL68QJSdPKGD2Q1dUg").on("tapone", function(event) {
    screenTransition.instant("Uy_MauouTSSMt8_bgm6DnQ", "F2LTMLcFT5aVOa41tiRfjQ");
    event.stopPropagation();
  });

  // Tap: close (B01注册新用户-Step1) -> A01登录_Home
  $("#sAIXRPRmR0q-7OSvZ56ALQJrgTIcqzSBSJi0wymlw8nw").on("tapone", function(event) {
    screenTransition.slideRight("esWRo_JaS620L0i_HL-Lsg", "F2LTMLcFT5aVOa41tiRfjQ");
    event.stopPropagation();
  });

  // Tap: Input/Basic/ Icon||Text (B01注册新用户-Step1) -> B01注册新用户-Step2
  $("#RDvAgRcWQC2v1-s4cJesNQ").on("tapone", function(event) {
    screenTransition.instant("esWRo_JaS620L0i_HL-Lsg", "N0eGDP46QgC_9-8Yc-QU6g");
    event.stopPropagation();
  });

  // Tap: close (B01注册新用户-Step4) -> A01登录_Home
  $("#ZCZRmNpQSGCB-jc2iJ_pKAJrgTIcqzSBSJi0wymlw8nw").on("tapone", function(event) {
    screenTransition.slideRight("a3LJoo4buQb-BbdHSaRkGuw", "F2LTMLcFT5aVOa41tiRfjQ");
    event.stopPropagation();
  });

  // Tap: Btn.a Basic/Normal/ Regular  (B01注册新用户-Step4) -> A01登录_Home
  $("#qw7NXBO5Sne2ClSnGwH9QQ").on("tapone", function(event) {
    screenTransition.instant("a3LJoo4buQb-BbdHSaRkGuw", "F2LTMLcFT5aVOa41tiRfjQ");
    event.stopPropagation();
  });

  // Tap: TAB 3 (A01登录_Home#active) -> A01我的
  $("#NSFRDhHMTC27d6VGmGJycQisz0HySFRcW6OYq0b2Dkgw").on("tapone", function(event) {
    screenTransition.instant("SdKlqHk1TJCUj4I8LSUTEg", "QuWTup8VQhOy3JkaTTpUtg");
    event.stopPropagation();
  });

  // Tap: TAB 2 (A01登录_Home#active) -> A01订单
  $("#NSFRDhHMTC27d6VGmGJycQ6_jquNuiTCyFG1RWAloA7g").on("tapone", function(event) {
    screenTransition.instant("SdKlqHk1TJCUj4I8LSUTEg", "Uy_MauouTSSMt8_bgm6DnQ");
    event.stopPropagation();
  });

  // Tap: TAB 1 (A01登录_Home#active) -> A01登录_Home
  $("#NSFRDhHMTC27d6VGmGJycQ0hd-KL68QJSdPKGD2Q1dUg").on("tapone", function(event) {
    screenTransition.instant("SdKlqHk1TJCUj4I8LSUTEg", "F2LTMLcFT5aVOa41tiRfjQ");
    event.stopPropagation();
  });

  // Tap: Pop-Cell (A01登录_Home#active) -> A01登录_Home
  $("#OI0xVuB7Q-q0MSdxs2w4zg").on("tapone", function(event) {
    screenTransition.instant("SdKlqHk1TJCUj4I8LSUTEg", "F2LTMLcFT5aVOa41tiRfjQ");
    event.stopPropagation();
  });

  // Tap: Pop-Cell (A01登录_Home#active) -> A01登录_Home
  $("#a1Bu62mBgRQSidXN3uQJTvQ").on("tapone", function(event) {
    screenTransition.instant("SdKlqHk1TJCUj4I8LSUTEg", "F2LTMLcFT5aVOa41tiRfjQ");
    event.stopPropagation();
  });

  // Tap: Pop-Cell (A01登录_Home#active) -> A01登录_Home
  $("#Il7moMpsQpmB6jdUrRglCQ").on("tapone", function(event) {
    screenTransition.instant("SdKlqHk1TJCUj4I8LSUTEg", "F2LTMLcFT5aVOa41tiRfjQ");
    event.stopPropagation();
  });

  // Tap: TAB 2 (A01我的) -> A01订单
  $("#EL_I6wdTTDW0Jj03lm-e9g6_jquNuiTCyFG1RWAloA7g").on("tapone", function(event) {
    screenTransition.instant("QuWTup8VQhOy3JkaTTpUtg", "Uy_MauouTSSMt8_bgm6DnQ");
    event.stopPropagation();
  });

  // Tap: TAB 1 (A01我的) -> A01登录_Home
  $("#EL_I6wdTTDW0Jj03lm-e9g0hd-KL68QJSdPKGD2Q1dUg").on("tapone", function(event) {
    screenTransition.instant("QuWTup8VQhOy3JkaTTpUtg", "F2LTMLcFT5aVOa41tiRfjQ");
    event.stopPropagation();
  });

  // Tap: close (B01注册新用户-Step2) -> A01登录_Home
  $("#SLACjdu_SSStwhnoIU-x4wJrgTIcqzSBSJi0wymlw8nw").on("tapone", function(event) {
    screenTransition.slideRight("N0eGDP46QgC_9-8Yc-QU6g", "F2LTMLcFT5aVOa41tiRfjQ");
    event.stopPropagation();
  });

  // Tap: Btn.a Basic/Normal/ Regular  (B01注册新用户-Step2) -> B01注册新用户-Step3
  $("#a-UPfvgJgTQecnFgf5kGgKw").on("tapone", function(event) {
    screenTransition.slideLeft("N0eGDP46QgC_9-8Yc-QU6g", "tSTV35uvTBWCyii2YMO3Ng");
    event.stopPropagation();
  });

  router.buildRouteHandlers(true);
  prototype = new Prototype();
});
