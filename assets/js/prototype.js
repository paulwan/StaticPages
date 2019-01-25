var settings = settings || {};
settings.appType = AppType.WEB;
settings.scalingType = ScalingType.UNIFORM;
settings.homeId = "oLZpls-qSAe7pmmiO5rL6A";
settings.deviceImage = {origin: {x: 55, y: 112}, screenSize: {width: 768, height: 1024}};
settings.embeddedFonts = [
  {fontFamily: "PingFang SC", src: "assets/fonts/ping_fang_sc_medium", fontWeight: "500"},
  {fontFamily: "PingFang SC", src: "assets/fonts/ping_fang_sc_regular"}
];

$(function() {
  var router = Router.getInstance();
  var screenTransition = ScreenTransition.getInstance();
  var overlayTransition = OverlayTransition.getInstance();
  var layoutManager = LayoutManager.getInstance();
  var animationManager = AnimationManager.getInstance();
  var interactionManager = InteractionManager.getInstance();

  // Tap: tab1 (ReportPage3) -> ReportPage1
  $("#vOkfBJPQT9qHIw3L2ouu5QUoefUl6sRVidj2qUH7Axvw").on("tapone", function(event) {
    screenTransition.instant("nvM6vltkQkmHoCnAOaylxQ", "oLZpls-qSAe7pmmiO5rL6A");
    event.stopPropagation();
  });

  // Tap: tab2 (ReportPage3) -> ReportPage2
  $("#vOkfBJPQT9qHIw3L2ouu5QbWj87MrwT7u5HoxBCc1HUQ").on("tapone", function(event) {
    screenTransition.instant("nvM6vltkQkmHoCnAOaylxQ", "JuNqbz6nTxuGDeopww2bBw");
    event.stopPropagation();
  });

  // Tap: tab4 (ReportPage3) -> ReportPage4
  $("#vOkfBJPQT9qHIw3L2ouu5QcTlIhuxJQsepq3ojfrAdEA").on("tapone", function(event) {
    screenTransition.instant("nvM6vltkQkmHoCnAOaylxQ", "s06C3WTBQeyrHRr9eCgNKg");
    event.stopPropagation();
  });

  // Tap: tab5 (ReportPage3) -> ReportPage5
  $("#vOkfBJPQT9qHIw3L2ouu5QShCXRzu8TQuJefOkeFez7g").on("tapone", function(event) {
    screenTransition.instant("nvM6vltkQkmHoCnAOaylxQ", "a-UANUlKgSQeXzdRuFPUDHA");
    event.stopPropagation();
  });

  // Tap: tab6 (ReportPage3) -> ReportPage6
  $("#vOkfBJPQT9qHIw3L2ouu5QGmn_QaFrRUmePs3qyWcRAA").on("tapone", function(event) {
    screenTransition.instant("nvM6vltkQkmHoCnAOaylxQ", "DyZaX5EURteXQhRo6ECZEA");
    event.stopPropagation();
  });

  // Tap: tab7 (ReportPage3) -> ReportPage7
  $("#vOkfBJPQT9qHIw3L2ouu5QhYR6DU0oT9C4gaLm8NhHcw").on("tapone", function(event) {
    screenTransition.instant("nvM6vltkQkmHoCnAOaylxQ", "Ih4NEeUSTROm2DEV06IDmA");
    event.stopPropagation();
  });

  // Tap: tab8 (ReportPage3) -> ReportPage8
  $("#vOkfBJPQT9qHIw3L2ouu5QsCOjSuOpRrG05pwArvJYDQ").on("tapone", function(event) {
    screenTransition.instant("nvM6vltkQkmHoCnAOaylxQ", "a0T9PklJ2RW-ZSSEVBDw8rg");
    event.stopPropagation();
  });

  // Tap: tab9 (ReportPage3) -> ReportPage9
  $("#vOkfBJPQT9qHIw3L2ouu5Q6zqL57VFTeKQ81hcdR81kg").on("tapone", function(event) {
    screenTransition.instant("nvM6vltkQkmHoCnAOaylxQ", "a7t_wGR-pR1GByhyPWGb7Cw");
    event.stopPropagation();
  });

  // Tap: tab10 (ReportPage3) -> ReportPage10
  $("#vOkfBJPQT9qHIw3L2ouu5Qu3JzF_pCRYu_tJqjDwc4ng").on("tapone", function(event) {
    screenTransition.instant("nvM6vltkQkmHoCnAOaylxQ", "a-ZMD_KA9Q8OkdP2eGR40Kw");
    event.stopPropagation();
  });

  // Tap: tab1 (ReportPage2) -> ReportPage1
  $("#EMTRpm7SR6WcML5n3Mq45gUoefUl6sRVidj2qUH7Axvw").on("tapone", function(event) {
    screenTransition.instant("JuNqbz6nTxuGDeopww2bBw", "oLZpls-qSAe7pmmiO5rL6A");
    event.stopPropagation();
  });

  // Tap: tab3 (ReportPage2) -> ReportPage3
  $("#EMTRpm7SR6WcML5n3Mq45gaqeqXdEtSyO37o_tqQ0SAA").on("tapone", function(event) {
    screenTransition.instant("JuNqbz6nTxuGDeopww2bBw", "nvM6vltkQkmHoCnAOaylxQ");
    event.stopPropagation();
  });

  // Tap: tab4 (ReportPage2) -> ReportPage4
  $("#EMTRpm7SR6WcML5n3Mq45gcTlIhuxJQsepq3ojfrAdEA").on("tapone", function(event) {
    screenTransition.instant("JuNqbz6nTxuGDeopww2bBw", "s06C3WTBQeyrHRr9eCgNKg");
    event.stopPropagation();
  });

  // Tap: tab5 (ReportPage2) -> ReportPage5
  $("#EMTRpm7SR6WcML5n3Mq45gShCXRzu8TQuJefOkeFez7g").on("tapone", function(event) {
    screenTransition.instant("JuNqbz6nTxuGDeopww2bBw", "a-UANUlKgSQeXzdRuFPUDHA");
    event.stopPropagation();
  });

  // Tap: tab6 (ReportPage2) -> ReportPage6
  $("#EMTRpm7SR6WcML5n3Mq45gGmn_QaFrRUmePs3qyWcRAA").on("tapone", function(event) {
    screenTransition.instant("JuNqbz6nTxuGDeopww2bBw", "DyZaX5EURteXQhRo6ECZEA");
    event.stopPropagation();
  });

  // Tap: tab7 (ReportPage2) -> ReportPage7
  $("#EMTRpm7SR6WcML5n3Mq45ghYR6DU0oT9C4gaLm8NhHcw").on("tapone", function(event) {
    screenTransition.instant("JuNqbz6nTxuGDeopww2bBw", "Ih4NEeUSTROm2DEV06IDmA");
    event.stopPropagation();
  });

  // Tap: tab8 (ReportPage2) -> ReportPage8
  $("#EMTRpm7SR6WcML5n3Mq45gsCOjSuOpRrG05pwArvJYDQ").on("tapone", function(event) {
    screenTransition.instant("JuNqbz6nTxuGDeopww2bBw", "a0T9PklJ2RW-ZSSEVBDw8rg");
    event.stopPropagation();
  });

  // Tap: tab9 (ReportPage2) -> ReportPage9
  $("#EMTRpm7SR6WcML5n3Mq45g6zqL57VFTeKQ81hcdR81kg").on("tapone", function(event) {
    screenTransition.instant("JuNqbz6nTxuGDeopww2bBw", "a7t_wGR-pR1GByhyPWGb7Cw");
    event.stopPropagation();
  });

  // Tap: tab10 (ReportPage2) -> ReportPage10
  $("#EMTRpm7SR6WcML5n3Mq45gu3JzF_pCRYu_tJqjDwc4ng").on("tapone", function(event) {
    screenTransition.instant("JuNqbz6nTxuGDeopww2bBw", "a-ZMD_KA9Q8OkdP2eGR40Kw");
    event.stopPropagation();
  });

  // Tap: tab1 (ReportPage7) -> ReportPage1
  $("#a7QdvnMrCRS2RB9SXLhkJgwUoefUl6sRVidj2qUH7Axvw").on("tapone", function(event) {
    screenTransition.instant("Ih4NEeUSTROm2DEV06IDmA", "oLZpls-qSAe7pmmiO5rL6A");
    event.stopPropagation();
  });

  // Tap: tab2 (ReportPage7) -> ReportPage2
  $("#a7QdvnMrCRS2RB9SXLhkJgwbWj87MrwT7u5HoxBCc1HUQ").on("tapone", function(event) {
    screenTransition.instant("Ih4NEeUSTROm2DEV06IDmA", "JuNqbz6nTxuGDeopww2bBw");
    event.stopPropagation();
  });

  // Tap: tab3 (ReportPage7) -> ReportPage3
  $("#a7QdvnMrCRS2RB9SXLhkJgwaqeqXdEtSyO37o_tqQ0SAA").on("tapone", function(event) {
    screenTransition.instant("Ih4NEeUSTROm2DEV06IDmA", "nvM6vltkQkmHoCnAOaylxQ");
    event.stopPropagation();
  });

  // Tap: tab4 (ReportPage7) -> ReportPage4
  $("#a7QdvnMrCRS2RB9SXLhkJgwcTlIhuxJQsepq3ojfrAdEA").on("tapone", function(event) {
    screenTransition.instant("Ih4NEeUSTROm2DEV06IDmA", "s06C3WTBQeyrHRr9eCgNKg");
    event.stopPropagation();
  });

  // Tap: tab5 (ReportPage7) -> ReportPage5
  $("#a7QdvnMrCRS2RB9SXLhkJgwShCXRzu8TQuJefOkeFez7g").on("tapone", function(event) {
    screenTransition.instant("Ih4NEeUSTROm2DEV06IDmA", "a-UANUlKgSQeXzdRuFPUDHA");
    event.stopPropagation();
  });

  // Tap: tab6 (ReportPage7) -> ReportPage6
  $("#a7QdvnMrCRS2RB9SXLhkJgwGmn_QaFrRUmePs3qyWcRAA").on("tapone", function(event) {
    screenTransition.instant("Ih4NEeUSTROm2DEV06IDmA", "DyZaX5EURteXQhRo6ECZEA");
    event.stopPropagation();
  });

  // Tap: tab8 (ReportPage7) -> ReportPage8
  $("#a7QdvnMrCRS2RB9SXLhkJgwsCOjSuOpRrG05pwArvJYDQ").on("tapone", function(event) {
    screenTransition.instant("Ih4NEeUSTROm2DEV06IDmA", "a0T9PklJ2RW-ZSSEVBDw8rg");
    event.stopPropagation();
  });

  // Tap: tab9 (ReportPage7) -> ReportPage9
  $("#a7QdvnMrCRS2RB9SXLhkJgw6zqL57VFTeKQ81hcdR81kg").on("tapone", function(event) {
    screenTransition.instant("Ih4NEeUSTROm2DEV06IDmA", "a7t_wGR-pR1GByhyPWGb7Cw");
    event.stopPropagation();
  });

  // Tap: tab10 (ReportPage7) -> ReportPage10
  $("#a7QdvnMrCRS2RB9SXLhkJgwu3JzF_pCRYu_tJqjDwc4ng").on("tapone", function(event) {
    screenTransition.instant("Ih4NEeUSTROm2DEV06IDmA", "a-ZMD_KA9Q8OkdP2eGR40Kw");
    event.stopPropagation();
  });

  // Tap: tab1 (ReportPage9) -> ReportPage1
  $("#Dgbr526lTxyomWbp3JpktwUoefUl6sRVidj2qUH7Axvw").on("tapone", function(event) {
    screenTransition.instant("a7t_wGR-pR1GByhyPWGb7Cw", "oLZpls-qSAe7pmmiO5rL6A");
    event.stopPropagation();
  });

  // Tap: tab2 (ReportPage9) -> ReportPage2
  $("#Dgbr526lTxyomWbp3JpktwbWj87MrwT7u5HoxBCc1HUQ").on("tapone", function(event) {
    screenTransition.instant("a7t_wGR-pR1GByhyPWGb7Cw", "JuNqbz6nTxuGDeopww2bBw");
    event.stopPropagation();
  });

  // Tap: tab3 (ReportPage9) -> ReportPage3
  $("#Dgbr526lTxyomWbp3JpktwaqeqXdEtSyO37o_tqQ0SAA").on("tapone", function(event) {
    screenTransition.instant("a7t_wGR-pR1GByhyPWGb7Cw", "nvM6vltkQkmHoCnAOaylxQ");
    event.stopPropagation();
  });

  // Tap: tab4 (ReportPage9) -> ReportPage4
  $("#Dgbr526lTxyomWbp3JpktwcTlIhuxJQsepq3ojfrAdEA").on("tapone", function(event) {
    screenTransition.instant("a7t_wGR-pR1GByhyPWGb7Cw", "s06C3WTBQeyrHRr9eCgNKg");
    event.stopPropagation();
  });

  // Tap: tab5 (ReportPage9) -> ReportPage5
  $("#Dgbr526lTxyomWbp3JpktwShCXRzu8TQuJefOkeFez7g").on("tapone", function(event) {
    screenTransition.instant("a7t_wGR-pR1GByhyPWGb7Cw", "a-UANUlKgSQeXzdRuFPUDHA");
    event.stopPropagation();
  });

  // Tap: tab6 (ReportPage9) -> ReportPage6
  $("#Dgbr526lTxyomWbp3JpktwGmn_QaFrRUmePs3qyWcRAA").on("tapone", function(event) {
    screenTransition.instant("a7t_wGR-pR1GByhyPWGb7Cw", "DyZaX5EURteXQhRo6ECZEA");
    event.stopPropagation();
  });

  // Tap: tab7 (ReportPage9) -> ReportPage7
  $("#Dgbr526lTxyomWbp3JpktwhYR6DU0oT9C4gaLm8NhHcw").on("tapone", function(event) {
    screenTransition.instant("a7t_wGR-pR1GByhyPWGb7Cw", "Ih4NEeUSTROm2DEV06IDmA");
    event.stopPropagation();
  });

  // Tap: tab8 (ReportPage9) -> ReportPage8
  $("#Dgbr526lTxyomWbp3JpktwsCOjSuOpRrG05pwArvJYDQ").on("tapone", function(event) {
    screenTransition.instant("a7t_wGR-pR1GByhyPWGb7Cw", "a0T9PklJ2RW-ZSSEVBDw8rg");
    event.stopPropagation();
  });

  // Tap: tab10 (ReportPage9) -> ReportPage10
  $("#Dgbr526lTxyomWbp3Jpktwu3JzF_pCRYu_tJqjDwc4ng").on("tapone", function(event) {
    screenTransition.instant("a7t_wGR-pR1GByhyPWGb7Cw", "a-ZMD_KA9Q8OkdP2eGR40Kw");
    event.stopPropagation();
  });

  // Tap: tab1 (ReportPage10) -> ReportPage1
  $("#a_MtzVNQ-THSPVd-A46vcYAUoefUl6sRVidj2qUH7Axvw").on("tapone", function(event) {
    screenTransition.instant("a-ZMD_KA9Q8OkdP2eGR40Kw", "oLZpls-qSAe7pmmiO5rL6A");
    event.stopPropagation();
  });

  // Tap: tab2 (ReportPage10) -> ReportPage2
  $("#a_MtzVNQ-THSPVd-A46vcYAbWj87MrwT7u5HoxBCc1HUQ").on("tapone", function(event) {
    screenTransition.instant("a-ZMD_KA9Q8OkdP2eGR40Kw", "JuNqbz6nTxuGDeopww2bBw");
    event.stopPropagation();
  });

  // Tap: tab3 (ReportPage10) -> ReportPage3
  $("#a_MtzVNQ-THSPVd-A46vcYAaqeqXdEtSyO37o_tqQ0SAA").on("tapone", function(event) {
    screenTransition.instant("a-ZMD_KA9Q8OkdP2eGR40Kw", "nvM6vltkQkmHoCnAOaylxQ");
    event.stopPropagation();
  });

  // Tap: tab4 (ReportPage10) -> ReportPage4
  $("#a_MtzVNQ-THSPVd-A46vcYAcTlIhuxJQsepq3ojfrAdEA").on("tapone", function(event) {
    screenTransition.instant("a-ZMD_KA9Q8OkdP2eGR40Kw", "s06C3WTBQeyrHRr9eCgNKg");
    event.stopPropagation();
  });

  // Tap: tab5 (ReportPage10) -> ReportPage5
  $("#a_MtzVNQ-THSPVd-A46vcYAShCXRzu8TQuJefOkeFez7g").on("tapone", function(event) {
    screenTransition.instant("a-ZMD_KA9Q8OkdP2eGR40Kw", "a-UANUlKgSQeXzdRuFPUDHA");
    event.stopPropagation();
  });

  // Tap: tab6 (ReportPage10) -> ReportPage6
  $("#a_MtzVNQ-THSPVd-A46vcYAGmn_QaFrRUmePs3qyWcRAA").on("tapone", function(event) {
    screenTransition.instant("a-ZMD_KA9Q8OkdP2eGR40Kw", "DyZaX5EURteXQhRo6ECZEA");
    event.stopPropagation();
  });

  // Tap: tab7 (ReportPage10) -> ReportPage7
  $("#a_MtzVNQ-THSPVd-A46vcYAhYR6DU0oT9C4gaLm8NhHcw").on("tapone", function(event) {
    screenTransition.instant("a-ZMD_KA9Q8OkdP2eGR40Kw", "Ih4NEeUSTROm2DEV06IDmA");
    event.stopPropagation();
  });

  // Tap: tab8 (ReportPage10) -> ReportPage8
  $("#a_MtzVNQ-THSPVd-A46vcYAsCOjSuOpRrG05pwArvJYDQ").on("tapone", function(event) {
    screenTransition.instant("a-ZMD_KA9Q8OkdP2eGR40Kw", "a0T9PklJ2RW-ZSSEVBDw8rg");
    event.stopPropagation();
  });

  // Tap: tab9 (ReportPage10) -> ReportPage9
  $("#a_MtzVNQ-THSPVd-A46vcYA6zqL57VFTeKQ81hcdR81kg").on("tapone", function(event) {
    screenTransition.instant("a-ZMD_KA9Q8OkdP2eGR40Kw", "a7t_wGR-pR1GByhyPWGb7Cw");
    event.stopPropagation();
  });

  // Tap: tab1 (ReportPage5) -> ReportPage1
  $("#a53iuZfaeR5GQ5oDRQkcxUwUoefUl6sRVidj2qUH7Axvw").on("tapone", function(event) {
    screenTransition.instant("a-UANUlKgSQeXzdRuFPUDHA", "oLZpls-qSAe7pmmiO5rL6A");
    event.stopPropagation();
  });

  // Tap: tab2 (ReportPage5) -> ReportPage2
  $("#a53iuZfaeR5GQ5oDRQkcxUwbWj87MrwT7u5HoxBCc1HUQ").on("tapone", function(event) {
    screenTransition.instant("a-UANUlKgSQeXzdRuFPUDHA", "JuNqbz6nTxuGDeopww2bBw");
    event.stopPropagation();
  });

  // Tap: tab3 (ReportPage5) -> ReportPage3
  $("#a53iuZfaeR5GQ5oDRQkcxUwaqeqXdEtSyO37o_tqQ0SAA").on("tapone", function(event) {
    screenTransition.instant("a-UANUlKgSQeXzdRuFPUDHA", "nvM6vltkQkmHoCnAOaylxQ");
    event.stopPropagation();
  });

  // Tap: tab4 (ReportPage5) -> ReportPage4
  $("#a53iuZfaeR5GQ5oDRQkcxUwcTlIhuxJQsepq3ojfrAdEA").on("tapone", function(event) {
    screenTransition.instant("a-UANUlKgSQeXzdRuFPUDHA", "s06C3WTBQeyrHRr9eCgNKg");
    event.stopPropagation();
  });

  // Tap: tab6 (ReportPage5) -> ReportPage6
  $("#a53iuZfaeR5GQ5oDRQkcxUwGmn_QaFrRUmePs3qyWcRAA").on("tapone", function(event) {
    screenTransition.instant("a-UANUlKgSQeXzdRuFPUDHA", "DyZaX5EURteXQhRo6ECZEA");
    event.stopPropagation();
  });

  // Tap: tab7 (ReportPage5) -> ReportPage7
  $("#a53iuZfaeR5GQ5oDRQkcxUwhYR6DU0oT9C4gaLm8NhHcw").on("tapone", function(event) {
    screenTransition.instant("a-UANUlKgSQeXzdRuFPUDHA", "Ih4NEeUSTROm2DEV06IDmA");
    event.stopPropagation();
  });

  // Tap: tab8 (ReportPage5) -> ReportPage8
  $("#a53iuZfaeR5GQ5oDRQkcxUwsCOjSuOpRrG05pwArvJYDQ").on("tapone", function(event) {
    screenTransition.instant("a-UANUlKgSQeXzdRuFPUDHA", "a0T9PklJ2RW-ZSSEVBDw8rg");
    event.stopPropagation();
  });

  // Tap: tab9 (ReportPage5) -> ReportPage9
  $("#a53iuZfaeR5GQ5oDRQkcxUw6zqL57VFTeKQ81hcdR81kg").on("tapone", function(event) {
    screenTransition.instant("a-UANUlKgSQeXzdRuFPUDHA", "a7t_wGR-pR1GByhyPWGb7Cw");
    event.stopPropagation();
  });

  // Tap: tab10 (ReportPage5) -> ReportPage10
  $("#a53iuZfaeR5GQ5oDRQkcxUwu3JzF_pCRYu_tJqjDwc4ng").on("tapone", function(event) {
    screenTransition.instant("a-UANUlKgSQeXzdRuFPUDHA", "a-ZMD_KA9Q8OkdP2eGR40Kw");
    event.stopPropagation();
  });

  // Tap: tab2 (ReportPage1) -> ReportPage2
  $("#uqEmXLF6Q4mfW6Gz80PMOwbWj87MrwT7u5HoxBCc1HUQ").on("tapone", function(event) {
    screenTransition.instant("oLZpls-qSAe7pmmiO5rL6A", "JuNqbz6nTxuGDeopww2bBw");
    event.stopPropagation();
  });

  // Tap: tab3 (ReportPage1) -> ReportPage3
  $("#uqEmXLF6Q4mfW6Gz80PMOwaqeqXdEtSyO37o_tqQ0SAA").on("tapone", function(event) {
    screenTransition.instant("oLZpls-qSAe7pmmiO5rL6A", "nvM6vltkQkmHoCnAOaylxQ");
    event.stopPropagation();
  });

  // Tap: tab4 (ReportPage1) -> ReportPage4
  $("#uqEmXLF6Q4mfW6Gz80PMOwcTlIhuxJQsepq3ojfrAdEA").on("tapone", function(event) {
    screenTransition.instant("oLZpls-qSAe7pmmiO5rL6A", "s06C3WTBQeyrHRr9eCgNKg");
    event.stopPropagation();
  });

  // Tap: tab5 (ReportPage1) -> ReportPage5
  $("#uqEmXLF6Q4mfW6Gz80PMOwShCXRzu8TQuJefOkeFez7g").on("tapone", function(event) {
    screenTransition.instant("oLZpls-qSAe7pmmiO5rL6A", "a-UANUlKgSQeXzdRuFPUDHA");
    event.stopPropagation();
  });

  // Tap: tab6 (ReportPage1) -> ReportPage6
  $("#uqEmXLF6Q4mfW6Gz80PMOwGmn_QaFrRUmePs3qyWcRAA").on("tapone", function(event) {
    screenTransition.instant("oLZpls-qSAe7pmmiO5rL6A", "DyZaX5EURteXQhRo6ECZEA");
    event.stopPropagation();
  });

  // Tap: tab7 (ReportPage1) -> ReportPage7
  $("#uqEmXLF6Q4mfW6Gz80PMOwhYR6DU0oT9C4gaLm8NhHcw").on("tapone", function(event) {
    screenTransition.instant("oLZpls-qSAe7pmmiO5rL6A", "Ih4NEeUSTROm2DEV06IDmA");
    event.stopPropagation();
  });

  // Tap: tab8 (ReportPage1) -> ReportPage8
  $("#uqEmXLF6Q4mfW6Gz80PMOwsCOjSuOpRrG05pwArvJYDQ").on("tapone", function(event) {
    screenTransition.instant("oLZpls-qSAe7pmmiO5rL6A", "a0T9PklJ2RW-ZSSEVBDw8rg");
    event.stopPropagation();
  });

  // Tap: tab9 (ReportPage1) -> ReportPage9
  $("#uqEmXLF6Q4mfW6Gz80PMOw6zqL57VFTeKQ81hcdR81kg").on("tapone", function(event) {
    screenTransition.instant("oLZpls-qSAe7pmmiO5rL6A", "a7t_wGR-pR1GByhyPWGb7Cw");
    event.stopPropagation();
  });

  // Tap: tab10 (ReportPage1) -> ReportPage10
  $("#uqEmXLF6Q4mfW6Gz80PMOwu3JzF_pCRYu_tJqjDwc4ng").on("tapone", function(event) {
    screenTransition.instant("oLZpls-qSAe7pmmiO5rL6A", "a-ZMD_KA9Q8OkdP2eGR40Kw");
    event.stopPropagation();
  });

  // Tap: tab1 (ReportPage8) -> ReportPage1
  $("#srbiFWR1RfyYs8_qhHSmCgUoefUl6sRVidj2qUH7Axvw").on("tapone", function(event) {
    screenTransition.instant("a0T9PklJ2RW-ZSSEVBDw8rg", "oLZpls-qSAe7pmmiO5rL6A");
    event.stopPropagation();
  });

  // Tap: tab2 (ReportPage8) -> ReportPage2
  $("#srbiFWR1RfyYs8_qhHSmCgbWj87MrwT7u5HoxBCc1HUQ").on("tapone", function(event) {
    screenTransition.instant("a0T9PklJ2RW-ZSSEVBDw8rg", "JuNqbz6nTxuGDeopww2bBw");
    event.stopPropagation();
  });

  // Tap: tab3 (ReportPage8) -> ReportPage3
  $("#srbiFWR1RfyYs8_qhHSmCgaqeqXdEtSyO37o_tqQ0SAA").on("tapone", function(event) {
    screenTransition.instant("a0T9PklJ2RW-ZSSEVBDw8rg", "nvM6vltkQkmHoCnAOaylxQ");
    event.stopPropagation();
  });

  // Tap: tab4 (ReportPage8) -> ReportPage4
  $("#srbiFWR1RfyYs8_qhHSmCgcTlIhuxJQsepq3ojfrAdEA").on("tapone", function(event) {
    screenTransition.instant("a0T9PklJ2RW-ZSSEVBDw8rg", "s06C3WTBQeyrHRr9eCgNKg");
    event.stopPropagation();
  });

  // Tap: tab5 (ReportPage8) -> ReportPage5
  $("#srbiFWR1RfyYs8_qhHSmCgShCXRzu8TQuJefOkeFez7g").on("tapone", function(event) {
    screenTransition.instant("a0T9PklJ2RW-ZSSEVBDw8rg", "a-UANUlKgSQeXzdRuFPUDHA");
    event.stopPropagation();
  });

  // Tap: tab6 (ReportPage8) -> ReportPage6
  $("#srbiFWR1RfyYs8_qhHSmCgGmn_QaFrRUmePs3qyWcRAA").on("tapone", function(event) {
    screenTransition.instant("a0T9PklJ2RW-ZSSEVBDw8rg", "DyZaX5EURteXQhRo6ECZEA");
    event.stopPropagation();
  });

  // Tap: tab7 (ReportPage8) -> ReportPage7
  $("#srbiFWR1RfyYs8_qhHSmCghYR6DU0oT9C4gaLm8NhHcw").on("tapone", function(event) {
    screenTransition.instant("a0T9PklJ2RW-ZSSEVBDw8rg", "Ih4NEeUSTROm2DEV06IDmA");
    event.stopPropagation();
  });

  // Tap: tab9 (ReportPage8) -> ReportPage9
  $("#srbiFWR1RfyYs8_qhHSmCg6zqL57VFTeKQ81hcdR81kg").on("tapone", function(event) {
    screenTransition.instant("a0T9PklJ2RW-ZSSEVBDw8rg", "a7t_wGR-pR1GByhyPWGb7Cw");
    event.stopPropagation();
  });

  // Tap: tab10 (ReportPage8) -> ReportPage10
  $("#srbiFWR1RfyYs8_qhHSmCgu3JzF_pCRYu_tJqjDwc4ng").on("tapone", function(event) {
    screenTransition.instant("a0T9PklJ2RW-ZSSEVBDw8rg", "a-ZMD_KA9Q8OkdP2eGR40Kw");
    event.stopPropagation();
  });

  // Tap: tab1 (ReportPage4) -> ReportPage1
  $("#XjTMeD-aQ2KLjy1OAYIojAUoefUl6sRVidj2qUH7Axvw").on("tapone", function(event) {
    screenTransition.instant("s06C3WTBQeyrHRr9eCgNKg", "oLZpls-qSAe7pmmiO5rL6A");
    event.stopPropagation();
  });

  // Tap: tab2 (ReportPage4) -> ReportPage2
  $("#XjTMeD-aQ2KLjy1OAYIojAbWj87MrwT7u5HoxBCc1HUQ").on("tapone", function(event) {
    screenTransition.instant("s06C3WTBQeyrHRr9eCgNKg", "JuNqbz6nTxuGDeopww2bBw");
    event.stopPropagation();
  });

  // Tap: tab3 (ReportPage4) -> ReportPage3
  $("#XjTMeD-aQ2KLjy1OAYIojAaqeqXdEtSyO37o_tqQ0SAA").on("tapone", function(event) {
    screenTransition.instant("s06C3WTBQeyrHRr9eCgNKg", "nvM6vltkQkmHoCnAOaylxQ");
    event.stopPropagation();
  });

  // Tap: tab5 (ReportPage4) -> ReportPage5
  $("#XjTMeD-aQ2KLjy1OAYIojAShCXRzu8TQuJefOkeFez7g").on("tapone", function(event) {
    screenTransition.instant("s06C3WTBQeyrHRr9eCgNKg", "a-UANUlKgSQeXzdRuFPUDHA");
    event.stopPropagation();
  });

  // Tap: tab6 (ReportPage4) -> ReportPage6
  $("#XjTMeD-aQ2KLjy1OAYIojAGmn_QaFrRUmePs3qyWcRAA").on("tapone", function(event) {
    screenTransition.instant("s06C3WTBQeyrHRr9eCgNKg", "DyZaX5EURteXQhRo6ECZEA");
    event.stopPropagation();
  });

  // Tap: tab7 (ReportPage4) -> ReportPage7
  $("#XjTMeD-aQ2KLjy1OAYIojAhYR6DU0oT9C4gaLm8NhHcw").on("tapone", function(event) {
    screenTransition.instant("s06C3WTBQeyrHRr9eCgNKg", "Ih4NEeUSTROm2DEV06IDmA");
    event.stopPropagation();
  });

  // Tap: tab8 (ReportPage4) -> ReportPage8
  $("#XjTMeD-aQ2KLjy1OAYIojAsCOjSuOpRrG05pwArvJYDQ").on("tapone", function(event) {
    screenTransition.instant("s06C3WTBQeyrHRr9eCgNKg", "a0T9PklJ2RW-ZSSEVBDw8rg");
    event.stopPropagation();
  });

  // Tap: tab9 (ReportPage4) -> ReportPage9
  $("#XjTMeD-aQ2KLjy1OAYIojA6zqL57VFTeKQ81hcdR81kg").on("tapone", function(event) {
    screenTransition.instant("s06C3WTBQeyrHRr9eCgNKg", "a7t_wGR-pR1GByhyPWGb7Cw");
    event.stopPropagation();
  });

  // Tap: tab10 (ReportPage4) -> ReportPage10
  $("#XjTMeD-aQ2KLjy1OAYIojAu3JzF_pCRYu_tJqjDwc4ng").on("tapone", function(event) {
    screenTransition.instant("s06C3WTBQeyrHRr9eCgNKg", "a-ZMD_KA9Q8OkdP2eGR40Kw");
    event.stopPropagation();
  });

  // Tap: tab1 (ReportPage6) -> ReportPage1
  $("#a9NDm_YI4QsmSej6hs-tqiAUoefUl6sRVidj2qUH7Axvw").on("tapone", function(event) {
    screenTransition.instant("DyZaX5EURteXQhRo6ECZEA", "oLZpls-qSAe7pmmiO5rL6A");
    event.stopPropagation();
  });

  // Tap: tab2 (ReportPage6) -> ReportPage2
  $("#a9NDm_YI4QsmSej6hs-tqiAbWj87MrwT7u5HoxBCc1HUQ").on("tapone", function(event) {
    screenTransition.instant("DyZaX5EURteXQhRo6ECZEA", "JuNqbz6nTxuGDeopww2bBw");
    event.stopPropagation();
  });

  // Tap: tab3 (ReportPage6) -> ReportPage3
  $("#a9NDm_YI4QsmSej6hs-tqiAaqeqXdEtSyO37o_tqQ0SAA").on("tapone", function(event) {
    screenTransition.instant("DyZaX5EURteXQhRo6ECZEA", "nvM6vltkQkmHoCnAOaylxQ");
    event.stopPropagation();
  });

  // Tap: tab4 (ReportPage6) -> ReportPage4
  $("#a9NDm_YI4QsmSej6hs-tqiAcTlIhuxJQsepq3ojfrAdEA").on("tapone", function(event) {
    screenTransition.instant("DyZaX5EURteXQhRo6ECZEA", "s06C3WTBQeyrHRr9eCgNKg");
    event.stopPropagation();
  });

  // Tap: tab5 (ReportPage6) -> ReportPage5
  $("#a9NDm_YI4QsmSej6hs-tqiAShCXRzu8TQuJefOkeFez7g").on("tapone", function(event) {
    screenTransition.instant("DyZaX5EURteXQhRo6ECZEA", "a-UANUlKgSQeXzdRuFPUDHA");
    event.stopPropagation();
  });

  // Tap: tab7 (ReportPage6) -> ReportPage7
  $("#a9NDm_YI4QsmSej6hs-tqiAhYR6DU0oT9C4gaLm8NhHcw").on("tapone", function(event) {
    screenTransition.instant("DyZaX5EURteXQhRo6ECZEA", "Ih4NEeUSTROm2DEV06IDmA");
    event.stopPropagation();
  });

  // Tap: tab8 (ReportPage6) -> ReportPage8
  $("#a9NDm_YI4QsmSej6hs-tqiAsCOjSuOpRrG05pwArvJYDQ").on("tapone", function(event) {
    screenTransition.instant("DyZaX5EURteXQhRo6ECZEA", "a0T9PklJ2RW-ZSSEVBDw8rg");
    event.stopPropagation();
  });

  // Tap: tab9 (ReportPage6) -> ReportPage9
  $("#a9NDm_YI4QsmSej6hs-tqiA6zqL57VFTeKQ81hcdR81kg").on("tapone", function(event) {
    screenTransition.instant("DyZaX5EURteXQhRo6ECZEA", "a7t_wGR-pR1GByhyPWGb7Cw");
    event.stopPropagation();
  });

  // Tap: tab10 (ReportPage6) -> ReportPage10
  $("#a9NDm_YI4QsmSej6hs-tqiAu3JzF_pCRYu_tJqjDwc4ng").on("tapone", function(event) {
    screenTransition.instant("DyZaX5EURteXQhRo6ECZEA", "a-ZMD_KA9Q8OkdP2eGR40Kw");
    event.stopPropagation();
  });

  router.buildRouteHandlers(true);
  prototype = new Prototype();
});
