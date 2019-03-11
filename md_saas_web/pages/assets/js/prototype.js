var settings = settings || {};
settings.appType = AppType.WEB;
settings.scalingType = ScalingType.RESIZING_CONSTRAINTS;
settings.homeId = "a-dFCYgkFTvm4SVUPcttZaA";
settings.deviceImage = {origin: {x: 55, y: 112}, screenSize: {width: 768, height: 1024}};
settings.embeddedFonts = [
  {fontFamily: "PingFang SC", src: "assets/fonts/ping_fang_sc_medium", fontWeight: "500"},
  {fontFamily: "PingFang SC", src: "assets/fonts/ping_fang_sc_regular"},
  {fontFamily: "PingFang SC", src: "assets/fonts/ping_fang_sc_semibold", fontWeight: "600"}
];

$(function() {
  var router = Router.getInstance();
  var screenTransition = ScreenTransition.getInstance();
  var overlayTransition = OverlayTransition.getInstance();
  var layoutManager = LayoutManager.getInstance();
  var animationManager = AnimationManager.getInstance();
  var interactionManager = InteractionManager.getInstance();

  // Tap: 昨日摘要 (index-2) -> index
  $("#wmdihkv5QwKt7QGVnmjHbw").on("tapone", function(event) {
    screenTransition.instant("Nh1E-hV3Tau8oESIBfo4Pw", "a-dFCYgkFTvm4SVUPcttZaA");
    event.stopPropagation();
  });

  // Tap: 历史摘要 (index) -> index-2
  $("#a8mDxT6vWQwqcK-OFQ3WEYA").on("tapone", function(event) {
    screenTransition.instant("a-dFCYgkFTvm4SVUPcttZaA", "Nh1E-hV3Tau8oESIBfo4Pw");
    event.stopPropagation();
  });

  router.buildRouteHandlers(true);
  prototype = new Prototype();
});
