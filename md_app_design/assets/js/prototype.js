var settings = settings || {};
settings.appType = AppType.NATIVE;
settings.scalingType = ScalingType.RESIZING_CONSTRAINTS;
settings.homeId = "cTlpmuyERFazkGMXoSNzlg";
settings.deviceImage = {origin: {x: 30, y: 109}, screenSize: {width: 375, height: 667}};
settings.embeddedFonts = [
  {fontFamily: "Helvetica Neue", src: "assets/fonts/helvetica_neue"},
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

  // Tap: TAB 2 (B03我的账户@注册用户) -> B02订单@注册用户
  $("#iQMJmrtfTZG6QgSf3Ds_Kw_q-FuLLKShOeGRMIgEw9rA").on("tapone", function(event) {
    screenTransition.slideLeft("x9OXSSDHR-O7KEuUFgX6wg", "ml5BOIRYTZWuVq96lUzA3A");
    event.stopPropagation();
  });

  // Tap: TAB 1 (B03我的账户@注册用户) -> B01登录_Home@注册用户-none
  $("#iQMJmrtfTZG6QgSf3Ds_KwFXsKhPr9ShKMWd9_euw-Ow").on("tapone", function(event) {
    screenTransition.slideRight("x9OXSSDHR-O7KEuUFgX6wg", "a7GvDAMq5SbSH7x9jMH_2EQ");
    event.stopPropagation();
  });

  // Tap: RIGHT LOGO (B03我的账户@注册用户) -> P-G01-消息中心@空页
  $("#QBvSoj1tTo2aPXsWzLzpPwcg1wfgP8RvqBbtpKZD2oig").on("tapone", function(event) {
    screenTransition.slideLeft("x9OXSSDHR-O7KEuUFgX6wg", "k4Kwa8tdS6qqVrrG5MlAhQ");
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

  // Tap: TAB 2 (C03我的账户@注册用户) -> C02订单@注册用户
  $("#a_XCgbYAkTTanbO4DA9tmAgPbjN3JY3TvmAZNOnU--CsQ").on("tapone", function(event) {
    screenTransition.slideLeft("Almvivx2SFy8l5dWmlKUZw", "a4pPu8H6JRHugH4Wv1_i93A");
    event.stopPropagation();
  });

  // Tap: TAB 1 (C03我的账户@注册用户) -> C01登录_@注册用户-认证未完成
  $("#a_XCgbYAkTTanbO4DA9tmAgGUiyTwQgTB-Hpd7L6ouP0w").on("tapone", function(event) {
    screenTransition.slideRight("Almvivx2SFy8l5dWmlKUZw", "iulX1mmZRYG_ioIT_qiTcA");
    event.stopPropagation();
  });

  // Tap: RIGHT LOGO (C03我的账户@注册用户) -> P-G01-消息中心@空页
  $("#a_XGFMPctTYO26Nd7D1WEQwcg1wfgP8RvqBbtpKZD2oig").on("tapone", function(event) {
    screenTransition.slideLeft("Almvivx2SFy8l5dWmlKUZw", "k4Kwa8tdS6qqVrrG5MlAhQ");
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

  // Tap: TAB 3 (E01登录@注册+认证用户-审核通过) -> E03我的账户@注册用户
  $("#vocoapRQRz-6uDWeh6J4qQKHbr9Tg6SK-Ras1xQa4YLA").on("tapone", function(event) {
    screenTransition.slideLeft("dgUyIBSLQlWffV2FS8qNOg", "VN8W6Zy7QMuTulMDVIj7Fg");
    event.stopPropagation();
  });

  // Tap: TAB 2 (E01登录@注册+认证用户-审核通过) -> E02订单@注册用户
  $("#vocoapRQRz-6uDWeh6J4qQXQn4Q35SSC2H5bO1FqKZ2g").on("tapone", function(event) {
    screenTransition.slideLeft("dgUyIBSLQlWffV2FS8qNOg", "hO_EOdcETrO9bnKkkdKLrw");
    event.stopPropagation();
  });

  // Tap: RIGHT LOGO (E01登录@注册+认证用户-审核通过) -> P-G01-消息中心@空页
  $("#vElv6qqVSTyS0xlSBHdXPQcg1wfgP8RvqBbtpKZD2oig").on("tapone", function(event) {
    screenTransition.slideLeft("dgUyIBSLQlWffV2FS8qNOg", "k4Kwa8tdS6qqVrrG5MlAhQ");
    event.stopPropagation();
  });

  // Tap: LEFT LOGO (E01登录@注册+认证用户-审核通过) -> Previous screen
  $("#vElv6qqVSTyS0xlSBHdXPQnE-nY6HoTFOtieNHZoD_ng").on("tapone", function(event) {
    screenTransition.back($(this));
    event.stopPropagation();
  });

  // Tap: Group 3 (E01登录@注册+认证用户-审核通过) -> P-B01-我的银行卡@空页
  $("#uL0wFlh4TS2wTZHAdgBDdQ").on("tapone-iscroll", function(event) {
    screenTransition.slideLeft("dgUyIBSLQlWffV2FS8qNOg", "F-jhzxk1RT6Vgkema_IGUg");
    event.stopPropagation();
  });

  // Tap: TAB 2 (A03我的账户@游客) -> A02订单@新用户
  $("#EL_I6wdTTDW0Jj03lm-e9g6_jquNuiTCyFG1RWAloA7g").on("tapone", function(event) {
    screenTransition.slideLeft("QuWTup8VQhOy3JkaTTpUtg", "Uy_MauouTSSMt8_bgm6DnQ");
    event.stopPropagation();
  });

  // Tap: TAB 1 (A03我的账户@游客) -> A01登录_Home@新用户-none
  $("#EL_I6wdTTDW0Jj03lm-e9g0hd-KL68QJSdPKGD2Q1dUg").on("tapone", function(event) {
    screenTransition.slideRight("QuWTup8VQhOy3JkaTTpUtg", "F2LTMLcFT5aVOa41tiRfjQ");
    event.stopPropagation();
  });

  // Tap: RIGHT LOGO (A03我的账户@游客) -> P-G01-消息中心@空页
  $("#uKHTfnHjSjy69J6BMDFjcAcg1wfgP8RvqBbtpKZD2oig").on("tapone", function(event) {
    screenTransition.slideLeft("QuWTup8VQhOy3JkaTTpUtg", "k4Kwa8tdS6qqVrrG5MlAhQ");
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

  // Tap: 返回 (StyleGuide) -> StartUp
  $("#rX_mjLzdTAik676maqqGNw").on("tapone", function(event) {
    screenTransition.slideLeft("a_PgZYHeYQm6K3pBNvWRQeQ", "cTlpmuyERFazkGMXoSNzlg");
    event.stopPropagation();
  });

  // Tap: TAB 3 (C01登录_@注册用户-认证未完成) -> C03我的账户@注册用户
  $("#CzuBWuD7Q1miUZnBYESc6gsohdh5gVRyuiy7oghiBc9A").on("tapone", function(event) {
    screenTransition.slideLeft("iulX1mmZRYG_ioIT_qiTcA", "Almvivx2SFy8l5dWmlKUZw");
    event.stopPropagation();
  });

  // Tap: TAB 2 (C01登录_@注册用户-认证未完成) -> C02订单@注册用户
  $("#CzuBWuD7Q1miUZnBYESc6gPbjN3JY3TvmAZNOnU--CsQ").on("tapone", function(event) {
    screenTransition.slideLeft("iulX1mmZRYG_ioIT_qiTcA", "a4pPu8H6JRHugH4Wv1_i93A");
    event.stopPropagation();
  });

  // Tap: RIGHT LOGO (C01登录_@注册用户-认证未完成) -> P-G01-消息中心@空页
  $("#Y-6-x_GQSlW1GQhExpONFwcg1wfgP8RvqBbtpKZD2oig").on("tapone", function(event) {
    screenTransition.slideLeft("iulX1mmZRYG_ioIT_qiTcA", "k4Kwa8tdS6qqVrrG5MlAhQ");
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

  // Tap: Btn.a Basic/Meduim/ Regular  (C01登录_@注册用户-认证未完成) -> FlowB2-认证流程身份认证
  $("#mlLFxgL4T2SXagWF0ZAhCA").on("tapone-iscroll", function(event) {
    screenTransition.instant("iulX1mmZRYG_ioIT_qiTcA", "UzuLZZjORqSBH23Wol87nQ");
    event.stopPropagation();
  });

  // Tap: RIGHT LOGO (P-H01-用户协议) -> P-G01-消息中心@空页
  $("#UwLvigZAR-SaNKW_zEF8DAcg1wfgP8RvqBbtpKZD2oig").on("tapone", function(event) {
    screenTransition.slideLeft("euwkT_pnRFyaoJOikGidyA", "k4Kwa8tdS6qqVrrG5MlAhQ");
    event.stopPropagation();
  });

  // Tap: LEFT LOGO (P-H01-用户协议) -> Previous screen
  $("#UwLvigZAR-SaNKW_zEF8DAnE-nY6HoTFOtieNHZoD_ng").on("tapone", function(event) {
    screenTransition.back($(this));
    event.stopPropagation();
  });

  // Tap: TAB 3 (A02订单@新用户) -> A03我的账户@游客
  $("#AOOk-unaQACi2m574ruAvAisz0HySFRcW6OYq0b2Dkgw").on("tapone", function(event) {
    screenTransition.slideLeft("Uy_MauouTSSMt8_bgm6DnQ", "QuWTup8VQhOy3JkaTTpUtg");
    event.stopPropagation();
  });

  // Tap: TAB 1 (A02订单@新用户) -> A01登录_Home@新用户-none
  $("#AOOk-unaQACi2m574ruAvA0hd-KL68QJSdPKGD2Q1dUg").on("tapone", function(event) {
    screenTransition.slideRight("Uy_MauouTSSMt8_bgm6DnQ", "F2LTMLcFT5aVOa41tiRfjQ");
    event.stopPropagation();
  });

  // Tap: RIGHT LOGO (A02订单@新用户) -> P-G01-消息中心@空页
  $("#Z6Ue5ZmQT0CX2Sv10yHebQcg1wfgP8RvqBbtpKZD2oig").on("tapone", function(event) {
    screenTransition.slideLeft("Uy_MauouTSSMt8_bgm6DnQ", "k4Kwa8tdS6qqVrrG5MlAhQ");
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

  // Tap: RIGHT LOGO (P-A03-还款记录@空页) -> P-G01-消息中心@空页
  $("#ekQkZwiDTQ-DvRBy-hQkrAcg1wfgP8RvqBbtpKZD2oig").on("tapone", function(event) {
    screenTransition.slideLeft("WiJ82FgRRvyQBxmul-pM7Q", "k4Kwa8tdS6qqVrrG5MlAhQ");
    event.stopPropagation();
  });

  // Tap: LEFT LOGO (P-A03-还款记录@空页) -> Previous screen
  $("#ekQkZwiDTQ-DvRBy-hQkrAnE-nY6HoTFOtieNHZoD_ng").on("tapone", function(event) {
    screenTransition.back($(this));
    event.stopPropagation();
  });

  // Tap: TAB 3 (C02订单@注册用户) -> C03我的账户@注册用户
  $("#ObVY6YTvR7KBHlG7PVDAAgsohdh5gVRyuiy7oghiBc9A").on("tapone", function(event) {
    screenTransition.slideLeft("a4pPu8H6JRHugH4Wv1_i93A", "Almvivx2SFy8l5dWmlKUZw");
    event.stopPropagation();
  });

  // Tap: TAB 1 (C02订单@注册用户) -> C01登录_@注册用户-认证未完成
  $("#ObVY6YTvR7KBHlG7PVDAAgGUiyTwQgTB-Hpd7L6ouP0w").on("tapone", function(event) {
    screenTransition.slideRight("a4pPu8H6JRHugH4Wv1_i93A", "iulX1mmZRYG_ioIT_qiTcA");
    event.stopPropagation();
  });

  // Tap: RIGHT LOGO (C02订单@注册用户) -> P-G01-消息中心@空页
  $("#rdKWfJSeR2Gfd21DShRdHgcg1wfgP8RvqBbtpKZD2oig").on("tapone", function(event) {
    screenTransition.slideLeft("a4pPu8H6JRHugH4Wv1_i93A", "k4Kwa8tdS6qqVrrG5MlAhQ");
    event.stopPropagation();
  });

  // Tap: LEFT LOGO (C02订单@注册用户) -> Previous screen
  $("#rdKWfJSeR2Gfd21DShRdHgnE-nY6HoTFOtieNHZoD_ng").on("tapone", function(event) {
    screenTransition.back($(this));
    event.stopPropagation();
  });

  // Tap: TAB 3 (D01登录@注册认证用户-审核中_Checking) -> D03我的账户@注册用户
  $("#qyRd9bPXSdmGmaiCKj6DJQOu_1qlACQ4qvmR_9jWsIIQ").on("tapone", function(event) {
    screenTransition.slideLeft("a0JqWSPHfTeOkOKxGnHwMog", "G61atJxbTyGXPEWuV94rJw");
    event.stopPropagation();
  });

  // Tap: TAB 2 (D01登录@注册认证用户-审核中_Checking) -> D02订单@注册用户
  $("#qyRd9bPXSdmGmaiCKj6DJQaYR8PovRT7OCaD-dwK_hXA").on("tapone", function(event) {
    screenTransition.slideLeft("a0JqWSPHfTeOkOKxGnHwMog", "IwEgtisHSIS5nbbkeoQ1ZQ");
    event.stopPropagation();
  });

  // Tap: RIGHT LOGO (D01登录@注册认证用户-审核中_Checking) -> P-G01-消息中心@空页
  $("#S6uBBksQRlyhfG_0kavQIAcg1wfgP8RvqBbtpKZD2oig").on("tapone", function(event) {
    screenTransition.slideLeft("a0JqWSPHfTeOkOKxGnHwMog", "k4Kwa8tdS6qqVrrG5MlAhQ");
    event.stopPropagation();
  });

  // Tap: LEFT LOGO (D01登录@注册认证用户-审核中_Checking) -> Previous screen
  $("#S6uBBksQRlyhfG_0kavQIAnE-nY6HoTFOtieNHZoD_ng").on("tapone", function(event) {
    screenTransition.back($(this));
    event.stopPropagation();
  });

  // Tap: TAB 3 (B02订单@注册用户) -> B03我的账户@注册用户
  $("#z60NhDq5QtiMSR4ysiqPuAXHFmmQozTWSf5B_-5X_mPg").on("tapone", function(event) {
    screenTransition.slideLeft("ml5BOIRYTZWuVq96lUzA3A", "x9OXSSDHR-O7KEuUFgX6wg");
    event.stopPropagation();
  });

  // Tap: TAB 1 (B02订单@注册用户) -> B01登录_Home@注册用户-none
  $("#z60NhDq5QtiMSR4ysiqPuAFXsKhPr9ShKMWd9_euw-Ow").on("tapone", function(event) {
    screenTransition.slideRight("ml5BOIRYTZWuVq96lUzA3A", "a7GvDAMq5SbSH7x9jMH_2EQ");
    event.stopPropagation();
  });

  // Tap: RIGHT LOGO (B02订单@注册用户) -> P-G01-消息中心@空页
  $("#zbayfHuSSUOXKA6R15IVdgcg1wfgP8RvqBbtpKZD2oig").on("tapone", function(event) {
    screenTransition.slideLeft("ml5BOIRYTZWuVq96lUzA3A", "k4Kwa8tdS6qqVrrG5MlAhQ");
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

  // Tap: close (FlowA3-注册新用户) -> A01登录_Home@新用户-none
  $("#a0j1RzqKpQdyDmkQ8P91puAJrgTIcqzSBSJi0wymlw8nw").on("tapone", function(event) {
    screenTransition.slideDown("tSTV35uvTBWCyii2YMO3Ng", "F2LTMLcFT5aVOa41tiRfjQ");
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

  // Tap: RIGHT LOGO (F01登录_Home@注册用户) -> P-G01-消息中心@空页
  $("#RdmrXDkNQ02wQZNtWSXI3gcg1wfgP8RvqBbtpKZD2oig").on("tapone", function(event) {
    screenTransition.slideLeft("YMZFY2QgQJWYh8H2lqPXPA", "k4Kwa8tdS6qqVrrG5MlAhQ");
    event.stopPropagation();
  });

  // Tap: LEFT LOGO (F01登录_Home@注册用户) -> Previous screen
  $("#RdmrXDkNQ02wQZNtWSXI3gnE-nY6HoTFOtieNHZoD_ng").on("tapone", function(event) {
    screenTransition.back($(this));
    event.stopPropagation();
  });

  // Tap: TAB 3 (F01登录_Home@注册用户) -> F03我的账户@注册用户
  $("#hdok4IM7RJG2BR40G_jt4AAd5nZ90QR_CJMqzr9Infug").on("tapone", function(event) {
    screenTransition.slideLeft("YMZFY2QgQJWYh8H2lqPXPA", "JHWpAYsQQC6gJzeqgL6ByQ");
    event.stopPropagation();
  });

  // Tap: TAB 2 (F01登录_Home@注册用户) -> F02订单@注册用户
  $("#hdok4IM7RJG2BR40G_jt4AbSliEjSdSBCN8ZjbGAjwag").on("tapone", function(event) {
    screenTransition.slideLeft("YMZFY2QgQJWYh8H2lqPXPA", "Q4KZTjttTG-4woeMbtAG8w");
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

  // Tap: outlineBtn (F01登录_Home@注册用户) -> P-D01-还款信息@空页
  $("#BYlZfS_GT5u5WczOLszjpg").on("tapone-iscroll", function(event) {
    screenTransition.slideLeft("YMZFY2QgQJWYh8H2lqPXPA", "hdOCKO7-R2aBrl8k29NSUw");
    event.stopPropagation();
  });

  // Tap: close (FlowA2-注册新用户) -> A01登录_Home@新用户-none
  $("#SLACjdu_SSStwhnoIU-x4wJrgTIcqzSBSJi0wymlw8nw").on("tapone", function(event) {
    screenTransition.slideDown("N0eGDP46QgC_9-8Yc-QU6g", "F2LTMLcFT5aVOa41tiRfjQ");
    event.stopPropagation();
  });

  // Tap: Btn.a Basic/Normal/ Regular  (FlowA2-注册新用户) -> FlowA3-注册新用户
  $("#a-UPfvgJgTQecnFgf5kGgKw").on("tapone", function(event) {
    screenTransition.slideLeft("N0eGDP46QgC_9-8Yc-QU6g", "tSTV35uvTBWCyii2YMO3Ng");
    event.stopPropagation();
  });

  // Tap: TAB 3 (A01登录_Home@新用户-none) -> A03我的账户@游客
  $("#a9Vy29ueMT9-bVP9qy0z90gisz0HySFRcW6OYq0b2Dkgw").on("tapone", function(event) {
    screenTransition.slideLeft("F2LTMLcFT5aVOa41tiRfjQ", "QuWTup8VQhOy3JkaTTpUtg");
    event.stopPropagation();
  });

  // Tap: TAB 2 (A01登录_Home@新用户-none) -> A02订单@新用户
  $("#a9Vy29ueMT9-bVP9qy0z90g6_jquNuiTCyFG1RWAloA7g").on("tapone", function(event) {
    screenTransition.slideLeft("F2LTMLcFT5aVOa41tiRfjQ", "Uy_MauouTSSMt8_bgm6DnQ");
    event.stopPropagation();
  });

  // Tap: RIGHT LOGO (A01登录_Home@新用户-none) -> P-G01-消息中心@空页
  $("#EOgzIqdCRjOWSH10QBZ6vgcg1wfgP8RvqBbtpKZD2oig").on("tapone", function(event) {
    screenTransition.slideLeft("F2LTMLcFT5aVOa41tiRfjQ", "k4Kwa8tdS6qqVrrG5MlAhQ");
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

  // Tap: TAB 2 (D03我的账户@注册用户) -> D02订单@注册用户
  $("#iOz-np5ARVGuWlhuPjgerwaYR8PovRT7OCaD-dwK_hXA").on("tapone", function(event) {
    screenTransition.slideLeft("G61atJxbTyGXPEWuV94rJw", "IwEgtisHSIS5nbbkeoQ1ZQ");
    event.stopPropagation();
  });

  // Tap: TAB 1 (D03我的账户@注册用户) -> D01登录@注册认证用户-审核中_Checking
  $("#iOz-np5ARVGuWlhuPjgerwHLwuC8CkQOOF60UlrSW2oA").on("tapone", function(event) {
    screenTransition.slideRight("G61atJxbTyGXPEWuV94rJw", "a0JqWSPHfTeOkOKxGnHwMog");
    event.stopPropagation();
  });

  // Tap: RIGHT LOGO (D03我的账户@注册用户) -> P-G01-消息中心@空页
  $("#Q__4YZLPSGKOBcWsFyMg4wcg1wfgP8RvqBbtpKZD2oig").on("tapone", function(event) {
    screenTransition.slideLeft("G61atJxbTyGXPEWuV94rJw", "k4Kwa8tdS6qqVrrG5MlAhQ");
    event.stopPropagation();
  });

  // Tap: LEFT LOGO (D03我的账户@注册用户) -> Previous screen
  $("#Q__4YZLPSGKOBcWsFyMg4wnE-nY6HoTFOtieNHZoD_ng").on("tapone", function(event) {
    screenTransition.back($(this));
    event.stopPropagation();
  });

  // Tap: Pop-Cell (D03我的账户@注册用户) -> P-A02-还款@data
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

  // Tap: Pop-Cell (D03我的账户@注册用户) -> P-E01-设置
  $("#CJ_JyJ1YQ4C9B98r-1xfyQ").on("tapone-iscroll", function(event) {
    screenTransition.slideLeft("G61atJxbTyGXPEWuV94rJw", "LjdYkOB7R9auHq1Bjw39pg");
    event.stopPropagation();
  });

  // Tap: TAB 2 (E03我的账户@注册用户) -> E02订单@注册用户
  $("#a9DbfYjW5QWSVJ88m8JMyPgXQn4Q35SSC2H5bO1FqKZ2g").on("tapone", function(event) {
    screenTransition.slideLeft("VN8W6Zy7QMuTulMDVIj7Fg", "hO_EOdcETrO9bnKkkdKLrw");
    event.stopPropagation();
  });

  // Tap: TAB 1 (E03我的账户@注册用户) -> E01登录@注册+认证用户-审核通过
  $("#a9DbfYjW5QWSVJ88m8JMyPgDtfjovmEQZWuZgGEiG3qog").on("tapone", function(event) {
    screenTransition.slideRight("VN8W6Zy7QMuTulMDVIj7Fg", "dgUyIBSLQlWffV2FS8qNOg");
    event.stopPropagation();
  });

  // Tap: RIGHT LOGO (E03我的账户@注册用户) -> P-G01-消息中心@空页
  $("#b1djAU2_Tiy23jv8ShcYAgcg1wfgP8RvqBbtpKZD2oig").on("tapone", function(event) {
    screenTransition.slideLeft("VN8W6Zy7QMuTulMDVIj7Fg", "k4Kwa8tdS6qqVrrG5MlAhQ");
    event.stopPropagation();
  });

  // Tap: LEFT LOGO (E03我的账户@注册用户) -> Previous screen
  $("#b1djAU2_Tiy23jv8ShcYAgnE-nY6HoTFOtieNHZoD_ng").on("tapone", function(event) {
    screenTransition.back($(this));
    event.stopPropagation();
  });

  // Tap: Pop-Cell (E03我的账户@注册用户) -> P-A02-还款@data
  $("#a_EKLtyAxRwGnZlVw-z2LhA").on("tapone-iscroll", function(event) {
    screenTransition.slideLeft("VN8W6Zy7QMuTulMDVIj7Fg", "LeRX5jOKS6ejGXxhZOvGcg");
    event.stopPropagation();
  });

  // Tap: Pop-Cell (E03我的账户@注册用户) -> P-B01-我的银行卡@空页
  $("#ZYO_naM1QbGGt2zAd0bIaw").on("tapone-iscroll", function(event) {
    screenTransition.slideLeft("VN8W6Zy7QMuTulMDVIj7Fg", "F-jhzxk1RT6Vgkema_IGUg");
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

  // Tap: TAB 2 (F03我的账户@注册用户) -> F02订单@注册用户
  $("#IEXcjXygSKGv0lo4xee8zQbSliEjSdSBCN8ZjbGAjwag").on("tapone", function(event) {
    screenTransition.slideLeft("JHWpAYsQQC6gJzeqgL6ByQ", "Q4KZTjttTG-4woeMbtAG8w");
    event.stopPropagation();
  });

  // Tap: TAB 1 (F03我的账户@注册用户) -> F01登录_Home@注册用户
  $("#IEXcjXygSKGv0lo4xee8zQCouXwM8jS3eeEpaMxffZmA").on("tapone", function(event) {
    screenTransition.slideRight("JHWpAYsQQC6gJzeqgL6ByQ", "YMZFY2QgQJWYh8H2lqPXPA");
    event.stopPropagation();
  });

  // Tap: RIGHT LOGO (F03我的账户@注册用户) -> P-G01-消息中心@空页
  $("#UQfl2R9mSjOgSJtf9vqKIwcg1wfgP8RvqBbtpKZD2oig").on("tapone", function(event) {
    screenTransition.slideLeft("JHWpAYsQQC6gJzeqgL6ByQ", "k4Kwa8tdS6qqVrrG5MlAhQ");
    event.stopPropagation();
  });

  // Tap: LEFT LOGO (F03我的账户@注册用户) -> Previous screen
  $("#UQfl2R9mSjOgSJtf9vqKIwnE-nY6HoTFOtieNHZoD_ng").on("tapone", function(event) {
    screenTransition.back($(this));
    event.stopPropagation();
  });

  // Tap: Pop-Cell (F03我的账户@注册用户) -> P-A02-还款@data
  $("#GBqtoXrzQBG5BP83p4waWA").on("tapone-iscroll", function(event) {
    screenTransition.slideLeft("JHWpAYsQQC6gJzeqgL6ByQ", "LeRX5jOKS6ejGXxhZOvGcg");
    event.stopPropagation();
  });

  // Tap: Pop-Cell (F03我的账户@注册用户) -> P-B01-我的银行卡@空页
  $("#ZGA7b6KuR0e0I1pgyOXs1Q").on("tapone-iscroll", function(event) {
    screenTransition.slideLeft("JHWpAYsQQC6gJzeqgL6ByQ", "F-jhzxk1RT6Vgkema_IGUg");
    event.stopPropagation();
  });

  // Tap: Pop-Cell (F03我的账户@注册用户) -> P-D01-还款信息@空页
  $("#a3-0dLbEjTwi_z7rK_yBoAw").on("tapone-iscroll", function(event) {
    screenTransition.slideLeft("JHWpAYsQQC6gJzeqgL6ByQ", "hdOCKO7-R2aBrl8k29NSUw");
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

  // Tap: RIGHT LOGO (P-F01-帮助与反馈) -> P-G01-消息中心@空页
  $("#QKZEXkgXRIKbjp_-zlhWygcg1wfgP8RvqBbtpKZD2oig").on("tapone", function(event) {
    screenTransition.slideLeft("RUzgylu2TCSDFvA1e8U7TA", "k4Kwa8tdS6qqVrrG5MlAhQ");
    event.stopPropagation();
  });

  // Tap: LEFT LOGO (P-F01-帮助与反馈) -> Previous screen
  $("#QKZEXkgXRIKbjp_-zlhWygnE-nY6HoTFOtieNHZoD_ng").on("tapone", function(event) {
    screenTransition.back($(this));
    event.stopPropagation();
  });

  // Tap: RIGHT LOGO (P-A01-还款@空页) -> P-G01-消息中心@空页
  $("#t2uH5ru7Rlylp7nB-856AAcg1wfgP8RvqBbtpKZD2oig").on("tapone", function(event) {
    screenTransition.slideLeft("x6HEDs73QDC-3SL7x03KuQ", "k4Kwa8tdS6qqVrrG5MlAhQ");
    event.stopPropagation();
  });

  // Tap: LEFT LOGO (P-A01-还款@空页) -> Previous screen
  $("#t2uH5ru7Rlylp7nB-856AAnE-nY6HoTFOtieNHZoD_ng").on("tapone", function(event) {
    screenTransition.back($(this));
    event.stopPropagation();
  });

  // Tap: 还款记录 (P-A01-还款@空页) -> P-A03-还款记录@空页
  $("#QSU6NdvhTkqMQpbudHHgeQ").on("tapone", function(event) {
    screenTransition.slideLeft("x6HEDs73QDC-3SL7x03KuQ", "WiJ82FgRRvyQBxmul-pM7Q");
    event.stopPropagation();
  });

  // Tap: close (FlowA4-注册新用户) -> A01登录_Home@新用户-none
  $("#ZCZRmNpQSGCB-jc2iJ_pKAJrgTIcqzSBSJi0wymlw8nw").on("tapone", function(event) {
    screenTransition.slideDown("a3LJoo4buQb-BbdHSaRkGuw", "F2LTMLcFT5aVOa41tiRfjQ");
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

  // Tap: TAB 3 (E02订单@注册用户) -> E03我的账户@注册用户
  $("#nM1ksJLHTMieHs5SgeNLPAKHbr9Tg6SK-Ras1xQa4YLA").on("tapone", function(event) {
    screenTransition.slideLeft("hO_EOdcETrO9bnKkkdKLrw", "VN8W6Zy7QMuTulMDVIj7Fg");
    event.stopPropagation();
  });

  // Tap: TAB 1 (E02订单@注册用户) -> E01登录@注册+认证用户-审核通过
  $("#nM1ksJLHTMieHs5SgeNLPADtfjovmEQZWuZgGEiG3qog").on("tapone", function(event) {
    screenTransition.slideRight("hO_EOdcETrO9bnKkkdKLrw", "dgUyIBSLQlWffV2FS8qNOg");
    event.stopPropagation();
  });

  // Tap: RIGHT LOGO (E02订单@注册用户) -> P-G01-消息中心@空页
  $("#M_-4zTEDTtiim0QczEOJHQcg1wfgP8RvqBbtpKZD2oig").on("tapone", function(event) {
    screenTransition.slideLeft("hO_EOdcETrO9bnKkkdKLrw", "k4Kwa8tdS6qqVrrG5MlAhQ");
    event.stopPropagation();
  });

  // Tap: LEFT LOGO (E02订单@注册用户) -> Previous screen
  $("#M_-4zTEDTtiim0QczEOJHQnE-nY6HoTFOtieNHZoD_ng").on("tapone", function(event) {
    screenTransition.back($(this));
    event.stopPropagation();
  });

  // Tap: RIGHT LOGO (P-B01-我的银行卡@空页) -> P-G01-消息中心@空页
  $("#SpX3xbaVRWa6bma9-hoN5wcg1wfgP8RvqBbtpKZD2oig").on("tapone", function(event) {
    screenTransition.slideLeft("F-jhzxk1RT6Vgkema_IGUg", "k4Kwa8tdS6qqVrrG5MlAhQ");
    event.stopPropagation();
  });

  // Tap: LEFT LOGO (P-B01-我的银行卡@空页) -> Previous screen
  $("#SpX3xbaVRWa6bma9-hoN5wnE-nY6HoTFOtieNHZoD_ng").on("tapone", function(event) {
    screenTransition.back($(this));
    event.stopPropagation();
  });

  // Tap: RIGHT LOGO (FlowB3-认证流程认证完成) -> P-G01-消息中心@空页
  $("#a4_jgEjYSSJOp1dGy46U4OQcg1wfgP8RvqBbtpKZD2oig").on("tapone", function(event) {
    screenTransition.slideLeft("DIGdzYCGSTaeT8bI6o1uNw", "k4Kwa8tdS6qqVrrG5MlAhQ");
    event.stopPropagation();
  });

  // Tap: LEFT LOGO (FlowB3-认证流程认证完成) -> Previous screen
  $("#a4_jgEjYSSJOp1dGy46U4OQnE-nY6HoTFOtieNHZoD_ng").on("tapone", function(event) {
    screenTransition.back($(this));
    event.stopPropagation();
  });

  // Tap: Btn.a Basic/Meduim/ Regular  (FlowB3-认证流程认证完成) -> FlowB4-认证完成通知
  $("#a889XyNR6Q4i16z8Kh16K-g").on("tapone", function(event) {
    screenTransition.slideLeft("DIGdzYCGSTaeT8bI6o1uNw", "ZdeNVi2kRr2N5IsGB2BRzg");
    event.stopPropagation();
  });

  // Tap: RIGHT LOGO (FlowB2-认证流程身份认证) -> P-G01-消息中心@空页
  $("#KhcxjUssTSGCHZd8_0D0Pwcg1wfgP8RvqBbtpKZD2oig").on("tapone", function(event) {
    screenTransition.slideLeft("UzuLZZjORqSBH23Wol87nQ", "k4Kwa8tdS6qqVrrG5MlAhQ");
    event.stopPropagation();
  });

  // Tap: LEFT LOGO (FlowB2-认证流程身份认证) -> Previous screen
  $("#KhcxjUssTSGCHZd8_0D0PwnE-nY6HoTFOtieNHZoD_ng").on("tapone", function(event) {
    screenTransition.back($(this));
    event.stopPropagation();
  });

  // Tap: Btn.a Basic/Meduim/ Regular  (FlowB2-认证流程身份认证) -> FlowB3-认证流程认证完成
  $("#Wg22GGlfSWClEbm9sOWv8g").on("tapone", function(event) {
    screenTransition.instant("UzuLZZjORqSBH23Wol87nQ", "DIGdzYCGSTaeT8bI6o1uNw");
    event.stopPropagation();
  });

  // Tap: RIGHT LOGO (P-A04-还款记录@data) -> P-G01-消息中心@空页
  $("#THoHEl76TveGO-PK-imCFAcg1wfgP8RvqBbtpKZD2oig").on("tapone", function(event) {
    screenTransition.slideLeft("szvQgE4TSr-vD9gQeGGC4g", "k4Kwa8tdS6qqVrrG5MlAhQ");
    event.stopPropagation();
  });

  // Tap: LEFT LOGO (P-A04-还款记录@data) -> Previous screen
  $("#THoHEl76TveGO-PK-imCFAnE-nY6HoTFOtieNHZoD_ng").on("tapone", function(event) {
    screenTransition.back($(this));
    event.stopPropagation();
  });

  // Tap: LEFT LOGO (P-G01-消息中心@空页) -> Previous screen
  $("#PUJW9hT6QsiwZVwum0FIwgnE-nY6HoTFOtieNHZoD_ng").on("tapone", function(event) {
    screenTransition.back($(this));
    event.stopPropagation();
  });

  // Tap: RIGHT LOGO (FlowB1-认证流程确认) -> P-G01-消息中心@空页
  $("#HN0EWK7RSwaW_sgLqChGIgcg1wfgP8RvqBbtpKZD2oig").on("tapone", function(event) {
    screenTransition.slideLeft("Fyo7M_V1RQatoWE3ipzpCQ", "k4Kwa8tdS6qqVrrG5MlAhQ");
    event.stopPropagation();
  });

  // Tap: LEFT LOGO (FlowB1-认证流程确认) -> Previous screen
  $("#HN0EWK7RSwaW_sgLqChGIgnE-nY6HoTFOtieNHZoD_ng").on("tapone", function(event) {
    screenTransition.back($(this));
    event.stopPropagation();
  });

  // Tap: Btn.a Basic/Meduim/ Regular  (FlowB1-认证流程确认) -> FlowB2-认证流程身份认证
  $("#Ww34k3ccRhyY5YfhqDPVCA").on("tapone", function(event) {
    screenTransition.slideLeft("Fyo7M_V1RQatoWE3ipzpCQ", "UzuLZZjORqSBH23Wol87nQ");
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

  // Tap: TAB 3 (F02订单@注册用户) -> F03我的账户@注册用户
  $("#eZAAPsSvSNyFr2Kqh6r8kQAd5nZ90QR_CJMqzr9Infug").on("tapone", function(event) {
    screenTransition.slideLeft("Q4KZTjttTG-4woeMbtAG8w", "JHWpAYsQQC6gJzeqgL6ByQ");
    event.stopPropagation();
  });

  // Tap: TAB 1 (F02订单@注册用户) -> F01登录_Home@注册用户
  $("#eZAAPsSvSNyFr2Kqh6r8kQCouXwM8jS3eeEpaMxffZmA").on("tapone", function(event) {
    screenTransition.slideRight("Q4KZTjttTG-4woeMbtAG8w", "YMZFY2QgQJWYh8H2lqPXPA");
    event.stopPropagation();
  });

  // Tap: RIGHT LOGO (F02订单@注册用户) -> P-G01-消息中心@空页
  $("#zlk4iiuBTeuiXpK9j8MZ_gcg1wfgP8RvqBbtpKZD2oig").on("tapone", function(event) {
    screenTransition.slideLeft("Q4KZTjttTG-4woeMbtAG8w", "k4Kwa8tdS6qqVrrG5MlAhQ");
    event.stopPropagation();
  });

  // Tap: LEFT LOGO (F02订单@注册用户) -> Previous screen
  $("#zlk4iiuBTeuiXpK9j8MZ_gnE-nY6HoTFOtieNHZoD_ng").on("tapone", function(event) {
    screenTransition.back($(this));
    event.stopPropagation();
  });

  // Tap: RIGHT LOGO (B01登录_Home@注册用户-none) -> P-G01-消息中心@空页
  $("#a1Be4ddpvRSubAiQBzXEFdgcg1wfgP8RvqBbtpKZD2oig").on("tapone", function(event) {
    screenTransition.slideLeft("a7GvDAMq5SbSH7x9jMH_2EQ", "k4Kwa8tdS6qqVrrG5MlAhQ");
    event.stopPropagation();
  });

  // Tap: LEFT LOGO (B01登录_Home@注册用户-none) -> Previous screen
  $("#a1Be4ddpvRSubAiQBzXEFdgnE-nY6HoTFOtieNHZoD_ng").on("tapone", function(event) {
    screenTransition.back($(this));
    event.stopPropagation();
  });

  // Tap: TAB 3 (B01登录_Home@注册用户-none) -> B03我的账户@注册用户
  $("#a-OlrIHcITFKpdQAb7IWEWAXHFmmQozTWSf5B_-5X_mPg").on("tapone", function(event) {
    screenTransition.slideLeft("a7GvDAMq5SbSH7x9jMH_2EQ", "x9OXSSDHR-O7KEuUFgX6wg");
    event.stopPropagation();
  });

  // Tap: TAB 2 (B01登录_Home@注册用户-none) -> B02订单@注册用户
  $("#a-OlrIHcITFKpdQAb7IWEWA_q-FuLLKShOeGRMIgEw9rA").on("tapone", function(event) {
    screenTransition.slideLeft("a7GvDAMq5SbSH7x9jMH_2EQ", "ml5BOIRYTZWuVq96lUzA3A");
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

  // Tap: RIGHT LOGO (P-E01-设置) -> P-G01-消息中心@空页
  $("#tdPbp8mbSZuV0Oh3CLouFgcg1wfgP8RvqBbtpKZD2oig").on("tapone", function(event) {
    screenTransition.slideLeft("LjdYkOB7R9auHq1Bjw39pg", "k4Kwa8tdS6qqVrrG5MlAhQ");
    event.stopPropagation();
  });

  // Tap: LEFT LOGO (P-E01-设置) -> Previous screen
  $("#tdPbp8mbSZuV0Oh3CLouFgnE-nY6HoTFOtieNHZoD_ng").on("tapone", function(event) {
    screenTransition.back($(this));
    event.stopPropagation();
  });

  // Tap: Btn.a Basic/Meduim/ Regular  (P-E01-设置) -> FlowA1-注册新用户
  $("#k6DDObHyTDqS3wtzkJ4f4Q").on("tapone-iscroll", function(event) {
    screenTransition.instant("LjdYkOB7R9auHq1Bjw39pg", "esWRo_JaS620L0i_HL-Lsg");
    event.stopPropagation();
  });

  // Tap: TAB 3 (D02订单@注册用户) -> D03我的账户@注册用户
  $("#RJM_ZYYZQLmkGCxfNBQudgOu_1qlACQ4qvmR_9jWsIIQ").on("tapone", function(event) {
    screenTransition.slideLeft("IwEgtisHSIS5nbbkeoQ1ZQ", "G61atJxbTyGXPEWuV94rJw");
    event.stopPropagation();
  });

  // Tap: TAB 1 (D02订单@注册用户) -> D01登录@注册认证用户-审核中_Checking
  $("#RJM_ZYYZQLmkGCxfNBQudgHLwuC8CkQOOF60UlrSW2oA").on("tapone", function(event) {
    screenTransition.slideRight("IwEgtisHSIS5nbbkeoQ1ZQ", "a0JqWSPHfTeOkOKxGnHwMog");
    event.stopPropagation();
  });

  // Tap: RIGHT LOGO (D02订单@注册用户) -> P-G01-消息中心@空页
  $("#a5P8fgxpVTbWTMkf-3jGyOAcg1wfgP8RvqBbtpKZD2oig").on("tapone", function(event) {
    screenTransition.slideLeft("IwEgtisHSIS5nbbkeoQ1ZQ", "k4Kwa8tdS6qqVrrG5MlAhQ");
    event.stopPropagation();
  });

  // Tap: LEFT LOGO (D02订单@注册用户) -> Previous screen
  $("#a5P8fgxpVTbWTMkf-3jGyOAnE-nY6HoTFOtieNHZoD_ng").on("tapone", function(event) {
    screenTransition.back($(this));
    event.stopPropagation();
  });

  // Tap: RIGHT LOGO (P-A02-还款@data) -> P-G01-消息中心@空页
  $("#FooKjxaTSwukhnWvSiJTHwcg1wfgP8RvqBbtpKZD2oig").on("tapone", function(event) {
    screenTransition.slideLeft("LeRX5jOKS6ejGXxhZOvGcg", "k4Kwa8tdS6qqVrrG5MlAhQ");
    event.stopPropagation();
  });

  // Tap: LEFT LOGO (P-A02-还款@data) -> Previous screen
  $("#FooKjxaTSwukhnWvSiJTHwnE-nY6HoTFOtieNHZoD_ng").on("tapone", function(event) {
    screenTransition.back($(this));
    event.stopPropagation();
  });

  // Tap: 还款记录 (P-A02-还款@data) -> P-A04-还款记录@data
  $("#FDEVyzSiT2qNpauByxzk1A").on("tapone", function(event) {
    screenTransition.slideLeft("LeRX5jOKS6ejGXxhZOvGcg", "szvQgE4TSr-vD9gQeGGC4g");
    event.stopPropagation();
  });

  // Tap: close (FlowA1-注册新用户) -> A01登录_Home@新用户-none
  $("#sAIXRPRmR0q-7OSvZ56ALQJrgTIcqzSBSJi0wymlw8nw").on("tapone", function(event) {
    screenTransition.slideDown("esWRo_JaS620L0i_HL-Lsg", "F2LTMLcFT5aVOa41tiRfjQ");
    event.stopPropagation();
  });

  // Tap: Input/Basic/ Icon||Text (FlowA1-注册新用户) -> FlowA2-注册新用户
  $("#RDvAgRcWQC2v1-s4cJesNQ").on("tapone", function(event) {
    screenTransition.instant("esWRo_JaS620L0i_HL-Lsg", "N0eGDP46QgC_9-8Yc-QU6g");
    event.stopPropagation();
  });

  // Tap: RIGHT LOGO (P-D01-还款信息@空页) -> P-G01-消息中心@空页
  $("#sUd_3gECRM6ckSn4xC7lnAcg1wfgP8RvqBbtpKZD2oig").on("tapone", function(event) {
    screenTransition.slideLeft("hdOCKO7-R2aBrl8k29NSUw", "k4Kwa8tdS6qqVrrG5MlAhQ");
    event.stopPropagation();
  });

  // Tap: LEFT LOGO (P-D01-还款信息@空页) -> Previous screen
  $("#sUd_3gECRM6ckSn4xC7lnAnE-nY6HoTFOtieNHZoD_ng").on("tapone", function(event) {
    screenTransition.back($(this));
    event.stopPropagation();
  });

  // Tap: RIGHT LOGO (FlowB4-认证完成通知) -> P-G01-消息中心@空页
  $("#apRxaMZ8SDa_vhIYfu_kcAcg1wfgP8RvqBbtpKZD2oig").on("tapone", function(event) {
    screenTransition.slideLeft("ZdeNVi2kRr2N5IsGB2BRzg", "k4Kwa8tdS6qqVrrG5MlAhQ");
    event.stopPropagation();
  });

  // Tap: LEFT LOGO (FlowB4-认证完成通知) -> Previous screen
  $("#apRxaMZ8SDa_vhIYfu_kcAnE-nY6HoTFOtieNHZoD_ng").on("tapone", function(event) {
    screenTransition.back($(this));
    event.stopPropagation();
  });

  router.buildRouteHandlers(true);
  prototype = new Prototype();
});
