var settings = settings || {};
settings.appType = AppType.NATIVE;
settings.scalingType = ScalingType.RESIZING_CONSTRAINTS;
settings.homeId = "a4qX7BSAURleYlBARYhPgfQ";
settings.deviceImage = {origin: {x: 30, y: 109}, screenSize: {width: 375, height: 667}};
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

  // Tap: Input/Basic (00_login1) -> 00_login2-error
  $("#xz2ASF2BQ2i9l8qKSE4wiQ").on("tapone", function(event) {
    screenTransition.instant("uc4F1uNoRCy-u5f5ECKJRA", "RzQQp74YT5mhP27U3oeXUQ");
    event.stopPropagation();
  });

  // Tap: Input/Basic (00_login1) -> 00_login2-error
  $("#jLssowDkQXuBeyNxMdZcsg").on("tapone", function(event) {
    screenTransition.instant("uc4F1uNoRCy-u5f5ECKJRA", "RzQQp74YT5mhP27U3oeXUQ");
    event.stopPropagation();
  });

  // Tap: TAB4 = (02_reports) -> 04_user
  $("#a5tYlk2J4TuKe6EHCOvIl5AUSbVbuQZRO6qzgvuX6H7Rg").on("tapone", function(event) {
    screenTransition.instant("rE4O2K50QK67RO2DJE-vMg", "vlDkHpSvRiGrjMFu8QQtkw");
    event.stopPropagation();
  });

  // Tap: TAB3 = (02_reports) -> 03_infos
  $("#a5tYlk2J4TuKe6EHCOvIl5AOfSjvqQdTQWbjv-IDm4Srg").on("tapone", function(event) {
    screenTransition.instant("rE4O2K50QK67RO2DJE-vMg", "a6HGzhhY6RDGey9U0Uvf3TA");
    event.stopPropagation();
  });

  // Tap: TAB1 = (02_reports) -> 01_home
  $("#a5tYlk2J4TuKe6EHCOvIl5AF03PSBQ2Rq6ju9YHk8x5hA").on("tapone", function(event) {
    screenTransition.instant("rE4O2K50QK67RO2DJE-vMg", "a9CJsojXISkOH9uzNTLgS3A");
    event.stopPropagation();
  });

  // Tap: Input/Basic (00_login2-error) -> 00_login3-complete
  $("#V_tEPk8vQZeVlcXD-6qRLg").on("tapone", function(event) {
    screenTransition.instant("RzQQp74YT5mhP27U3oeXUQ", "H1QB_ah8RgGmsbaJa7F--g");
    event.stopPropagation();
  });

  // Tap: Input/Basic (00_login2-error) -> 00_login3-complete
  $("#AKGFqXbVRyiW_nDgEDzTUg").on("tapone", function(event) {
    screenTransition.instant("RzQQp74YT5mhP27U3oeXUQ", "H1QB_ah8RgGmsbaJa7F--g");
    event.stopPropagation();
  });

  // Tap: Btn/Default/Info (00_login3-complete) -> 01_home
  $("#JR-9iDakTN-AxApnVNKqvQ").on("tapone", function(event) {
    screenTransition.instant("H1QB_ah8RgGmsbaJa7F--g", "a9CJsojXISkOH9uzNTLgS3A");
    event.stopPropagation();
  });

  // Tap: arrow-circle-left-fill (06_person_info_check) -> Previous screen
  $("#aJLyi80nQA6zMjGjY5PQdw7iWb-mciQlO_441E2JB9QQ").on("tapone", function(event) {
    screenTransition.back($(this));
    event.stopPropagation();
  });

  // Tap: Btn/Default/Info (06_person_info_check) -> 07_report_simple
  $("#a00ThAsuMSjKvbBdlQ1datg").on("tapone-iscroll", function(event) {
    screenTransition.instant("dgLucaVxS4absxV6xRIcZg", "wvA2Rk1iQdetGln4skGyDQ");
    event.stopPropagation();
  });

  // Tap: arrow-circle-left-fill (07_report_simple) -> Previous screen
  $("#OBQ3y99MRLKwSz3VEZ0fDA7iWb-mciQlO_441E2JB9QQ").on("tapone", function(event) {
    screenTransition.back($(this));
    event.stopPropagation();
  });

  // Tap: TAB4 = (01_home) -> 04_user
  $("#PJiI3fHxS8eRIV8FYK2m6QUSbVbuQZRO6qzgvuX6H7Rg").on("tapone", function(event) {
    screenTransition.instant("a9CJsojXISkOH9uzNTLgS3A", "vlDkHpSvRiGrjMFu8QQtkw");
    event.stopPropagation();
  });

  // Tap: TAB3 = (01_home) -> 03_infos
  $("#PJiI3fHxS8eRIV8FYK2m6QOfSjvqQdTQWbjv-IDm4Srg").on("tapone", function(event) {
    screenTransition.instant("a9CJsojXISkOH9uzNTLgS3A", "a6HGzhhY6RDGey9U0Uvf3TA");
    event.stopPropagation();
  });

  // Tap: TAB2 = (01_home) -> 02_reports
  $("#PJiI3fHxS8eRIV8FYK2m6Q82cBTA5LRE2G_Ytj1XKYDg").on("tapone", function(event) {
    screenTransition.instant("a9CJsojXISkOH9uzNTLgS3A", "rE4O2K50QK67RO2DJE-vMg");
    event.stopPropagation();
  });

  // Tap: Group (01_home) -> 06_person_info_check
  $("#ijeifyZXSNi-NHwcSiLdJw").on("tapone-iscroll", function(event) {
    screenTransition.instant("a9CJsojXISkOH9uzNTLgS3A", "dgLucaVxS4absxV6xRIcZg");
    event.stopPropagation();
  });

  // Tap: Group (01_home) -> 06_person_info_check
  $("#GWYQbS_uRkuWf_AET7F0cA").on("tapone-iscroll", function(event) {
    screenTransition.instant("a9CJsojXISkOH9uzNTLgS3A", "dgLucaVxS4absxV6xRIcZg");
    event.stopPropagation();
  });

  // Tap: Group (01_home) -> 06_person_info_check
  $("#a3oMl9VwwRO6VaB1hWjKEsw").on("tapone-iscroll", function(event) {
    screenTransition.instant("a9CJsojXISkOH9uzNTLgS3A", "dgLucaVxS4absxV6xRIcZg");
    event.stopPropagation();
  });

  // Tap: TAB3 = (04_user) -> 03_infos
  $("#a_6_KLEmLQaOVMKsBz1dWHQOfSjvqQdTQWbjv-IDm4Srg").on("tapone", function(event) {
    screenTransition.instant("vlDkHpSvRiGrjMFu8QQtkw", "a6HGzhhY6RDGey9U0Uvf3TA");
    event.stopPropagation();
  });

  // Tap: TAB2 = (04_user) -> 02_reports
  $("#a_6_KLEmLQaOVMKsBz1dWHQ82cBTA5LRE2G_Ytj1XKYDg").on("tapone", function(event) {
    screenTransition.instant("vlDkHpSvRiGrjMFu8QQtkw", "rE4O2K50QK67RO2DJE-vMg");
    event.stopPropagation();
  });

  // Tap: TAB1 = (04_user) -> 01_home
  $("#a_6_KLEmLQaOVMKsBz1dWHQF03PSBQ2Rq6ju9YHk8x5hA").on("tapone", function(event) {
    screenTransition.instant("vlDkHpSvRiGrjMFu8QQtkw", "a9CJsojXISkOH9uzNTLgS3A");
    event.stopPropagation();
  });

  // Tap: TAB4 = (03_infos) -> 04_user
  $("#q771wNbaQkyJd0B0RLCwcgUSbVbuQZRO6qzgvuX6H7Rg").on("tapone", function(event) {
    screenTransition.instant("a6HGzhhY6RDGey9U0Uvf3TA", "vlDkHpSvRiGrjMFu8QQtkw");
    event.stopPropagation();
  });

  // Tap: TAB2 = (03_infos) -> 02_reports
  $("#q771wNbaQkyJd0B0RLCwcg82cBTA5LRE2G_Ytj1XKYDg").on("tapone", function(event) {
    screenTransition.instant("a6HGzhhY6RDGey9U0Uvf3TA", "rE4O2K50QK67RO2DJE-vMg");
    event.stopPropagation();
  });

  // Tap: TAB1 = (03_infos) -> 01_home
  $("#q771wNbaQkyJd0B0RLCwcgF03PSBQ2Rq6ju9YHk8x5hA").on("tapone", function(event) {
    screenTransition.instant("a6HGzhhY6RDGey9U0Uvf3TA", "a9CJsojXISkOH9uzNTLgS3A");
    event.stopPropagation();
  });

  // Tap: Btn/Default/Success (00_start) -> 00_login1
  $("#XXYlRa94QeiVhVFSImp9qA").on("tapone", function(event) {
    screenTransition.instant("a4qX7BSAURleYlBARYhPgfQ", "uc4F1uNoRCy-u5f5ECKJRA");
    event.stopPropagation();
  });

  // Tap: Btn/Default/Success (00_start) -> 01_home
  $("#a0t7Sh_YQT2mRla3-My0Fcg").on("tapone", function(event) {
    screenTransition.instant("a4qX7BSAURleYlBARYhPgfQ", "a9CJsojXISkOH9uzNTLgS3A");
    event.stopPropagation();
  });

  router.buildRouteHandlers(true);
  prototype = new Prototype();
});
