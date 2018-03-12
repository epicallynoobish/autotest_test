$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/Features/testDataExistence.feature");
formatter.feature({
  "name": "Test data existance",
  "description": "  I want to check if there is some data in all the tables",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@tag"
    }
  ]
});
formatter.scenarioOutline({
  "name": "Test data existance outline",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@tag2"
    }
  ]
});
formatter.step({
  "name": "I go to \u003ctable\u003e",
  "keyword": "When "
});
formatter.step({
  "name": "I check for the table",
  "keyword": "When "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "table"
      ]
    },
    {
      "cells": [
        "\"http://eaistan-dev.proitr.ru/index.php?show\u003drating\u0026menu_id\u003d21\""
      ]
    },
    {
      "cells": [
        "\"http://eaistan-dev.proitr.ru/index.php?show\u003dExpertNMC\u0026menu_id\u003d1500\u0026report_id\u003d56\""
      ]
    },
    {
      "cells": [
        "\"http://eaistan-dev.proitr.ru/index.php?show\u003dExpertNMC\u0026menu_id\u003d1500\u0026report_id\u003d1501\""
      ]
    },
    {
      "cells": [
        "\"http://eaistan-dev.proitr.ru/index.php?show\u003dExpertNMC\u0026menu_id\u003d1500\u0026report_id\u003d1505\""
      ]
    },
    {
      "cells": [
        "\"http://eaistan-dev.proitr.ru/index.php?show\u003dExpertNMC\u0026menu_id\u003d1500\u0026report_id\u003d1506\""
      ]
    },
    {
      "cells": [
        "\"http://eaistan-dev.proitr.ru/index.php?show\u003dKpgzSpgz\u0026menu_id\u003d1503\u0026report_id\u003d54\""
      ]
    },
    {
      "cells": [
        "\"http://eaistan-dev.proitr.ru/index.php?show\u003dKpgzSpgz\u0026menu_id\u003d1503\u0026report_id\u003d1504\""
      ]
    },
    {
      "cells": [
        "\"http://eaistan-dev.proitr.ru/index.php?show\u003dKpgzSpgz\u0026menu_id\u003d1503\u0026report_id\u003d1507\""
      ]
    },
    {
      "cells": [
        "\"http://eaistan-dev.proitr.ru/index.php?show\u003dKpgzSpgz\u0026menu_id\u003d1503\u0026report_id\u003d1509\""
      ]
    },
    {
      "cells": [
        "\"http://eaistan-dev.proitr.ru/index.php?show\u003dAdministration\u0026menu_id\u003d1700\u0026report_id\u003d1701\""
      ]
    },
    {
      "cells": [
        "\"http://eaistan-dev.proitr.ru/index.php?show\u003dAdministration\u0026menu_id\u003d1700\u0026report_id\u003d1702\""
      ]
    },
    {
      "cells": [
        "\"http://eaistan-dev.proitr.ru/index.php?show\u003dAdministration\u0026menu_id\u003d1700\u0026report_id\u003d1703\""
      ]
    },
    {
      "cells": [
        "\"http://eaistan-dev.proitr.ru/index.php?show\u003dAdministration\u0026menu_id\u003d1700\u0026report_id\u003d1704\""
      ]
    },
    {
      "cells": [
        "\"http://eaistan-dev.proitr.ru/index.php?show\u003dnew_reports\u0026menu_id\u003d1096\u0026report_id\u003d49\""
      ]
    },
    {
      "cells": [
        "\"http://eaistan-dev.proitr.ru/index.php?show\u003dnew_reports\u0026menu_id\u003d1096\u0026report_id\u003d47\""
      ]
    },
    {
      "cells": [
        "\"http://eaistan-dev.proitr.ru/index.php?show\u003dnew_reports\u0026menu_id\u003d1096\u0026report_id\u003d46\""
      ]
    },
    {
      "cells": [
        "\"http://eaistan-dev.proitr.ru/index.php?show\u003dnew_reports\u0026menu_id\u003d1096\u0026report_id\u003d57\""
      ]
    },
    {
      "cells": [
        "\"http://eaistan-dev.proitr.ru/index.php?show\u003dnew_reports\u0026menu_id\u003d1096\u0026report_id\u003d44\""
      ]
    },
    {
      "cells": [
        "\"http://eaistan-dev.proitr.ru/index.php?show\u003dnew_reports\u0026menu_id\u003d1096\u0026report_id\u003d48\""
      ]
    },
    {
      "cells": [
        "\"http://eaistan-dev.proitr.ru/index.php?show\u003dnew_reports\u0026menu_id\u003d1096\u0026report_id\u003d50\""
      ]
    },
    {
      "cells": [
        "\"http://eaistan-dev.proitr.ru/index.php?show\u003dnew_reports\u0026menu_id\u003d1096\u0026report_id\u003d51\""
      ]
    },
    {
      "cells": [
        "\"http://eaistan-dev.proitr.ru/index.php?show\u003dnew_reports\u0026menu_id\u003d1096\u0026report_id\u003d52\""
      ]
    },
    {
      "cells": [
        "\"http://eaistan-dev.proitr.ru/index.php?show\u003dnew_reports\u0026menu_id\u003d1096\u0026report_id\u003d53\""
      ]
    },
    {
      "cells": [
        "\"http://eaistan-dev.proitr.ru/index.php?show\u003dnew_reports\u0026menu_id\u003d1096\u0026report_id\u003d67\""
      ]
    },
    {
      "cells": [
        "\"http://eaistan-dev.proitr.ru/index.php?show\u003dMrg\u0026menu_id\u003d1800\u0026report_id\u003d1801\""
      ]
    },
    {
      "cells": [
        "\"http://eaistan-dev.proitr.ru/index.php?show\u003dMrg\u0026menu_id\u003d1800\u0026report_id\u003d1802\""
      ]
    },
    {
      "cells": [
        "\"http://eaistan-dev.proitr.ru/index.php?show\u003dMrg\u0026menu_id\u003d1800\u0026report_id\u003d1803\""
      ]
    },
    {
      "cells": [
        "\"http://eaistan-dev.proitr.ru/index.php?show\u003dMrg\u0026menu_id\u003d1800\u0026report_id\u003d1804\""
      ]
    },
    {
      "cells": [
        "\"http://eaistan-dev.proitr.ru/index.php?show\u003dMrg\u0026menu_id\u003d1800\u0026report_id\u003d1805\""
      ]
    },
    {
      "cells": [
        "\"http://eaistan-dev.proitr.ru/index.php?show\u003dTreeContract\u0026menu_id\u003d1600\""
      ]
    }
  ]
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "I log in as demo with password demo with name Иванов О.З.",
  "keyword": "Given "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.scenario({
  "name": "Test data existance outline",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@tag"
    },
    {
      "name": "@tag2"
    }
  ]
});
formatter.step({
  "name": "I go to \"http://eaistan-dev.proitr.ru/index.php?show\u003drating\u0026menu_id\u003d21\"",
  "keyword": "When "
});
formatter.match({
  "location": "stepDef_prom.i_go_to(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I check for the table",
  "keyword": "When "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "I log in as demo with password demo with name Иванов О.З.",
  "keyword": "Given "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.scenario({
  "name": "Test data existance outline",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@tag"
    },
    {
      "name": "@tag2"
    }
  ]
});
formatter.step({
  "name": "I go to \"http://eaistan-dev.proitr.ru/index.php?show\u003dExpertNMC\u0026menu_id\u003d1500\u0026report_id\u003d56\"",
  "keyword": "When "
});
formatter.match({
  "location": "stepDef_prom.i_go_to(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I check for the table",
  "keyword": "When "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "I log in as demo with password demo with name Иванов О.З.",
  "keyword": "Given "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.scenario({
  "name": "Test data existance outline",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@tag"
    },
    {
      "name": "@tag2"
    }
  ]
});
formatter.step({
  "name": "I go to \"http://eaistan-dev.proitr.ru/index.php?show\u003dExpertNMC\u0026menu_id\u003d1500\u0026report_id\u003d1501\"",
  "keyword": "When "
});
formatter.match({
  "location": "stepDef_prom.i_go_to(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I check for the table",
  "keyword": "When "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "I log in as demo with password demo with name Иванов О.З.",
  "keyword": "Given "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.scenario({
  "name": "Test data existance outline",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@tag"
    },
    {
      "name": "@tag2"
    }
  ]
});
formatter.step({
  "name": "I go to \"http://eaistan-dev.proitr.ru/index.php?show\u003dExpertNMC\u0026menu_id\u003d1500\u0026report_id\u003d1505\"",
  "keyword": "When "
});
formatter.match({
  "location": "stepDef_prom.i_go_to(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I check for the table",
  "keyword": "When "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "I log in as demo with password demo with name Иванов О.З.",
  "keyword": "Given "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.scenario({
  "name": "Test data existance outline",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@tag"
    },
    {
      "name": "@tag2"
    }
  ]
});
formatter.step({
  "name": "I go to \"http://eaistan-dev.proitr.ru/index.php?show\u003dExpertNMC\u0026menu_id\u003d1500\u0026report_id\u003d1506\"",
  "keyword": "When "
});
formatter.match({
  "location": "stepDef_prom.i_go_to(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I check for the table",
  "keyword": "When "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "I log in as demo with password demo with name Иванов О.З.",
  "keyword": "Given "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.scenario({
  "name": "Test data existance outline",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@tag"
    },
    {
      "name": "@tag2"
    }
  ]
});
formatter.step({
  "name": "I go to \"http://eaistan-dev.proitr.ru/index.php?show\u003dKpgzSpgz\u0026menu_id\u003d1503\u0026report_id\u003d54\"",
  "keyword": "When "
});
formatter.match({
  "location": "stepDef_prom.i_go_to(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I check for the table",
  "keyword": "When "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "I log in as demo with password demo with name Иванов О.З.",
  "keyword": "Given "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.scenario({
  "name": "Test data existance outline",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@tag"
    },
    {
      "name": "@tag2"
    }
  ]
});
formatter.step({
  "name": "I go to \"http://eaistan-dev.proitr.ru/index.php?show\u003dKpgzSpgz\u0026menu_id\u003d1503\u0026report_id\u003d1504\"",
  "keyword": "When "
});
formatter.match({
  "location": "stepDef_prom.i_go_to(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I check for the table",
  "keyword": "When "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "I log in as demo with password demo with name Иванов О.З.",
  "keyword": "Given "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.scenario({
  "name": "Test data existance outline",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@tag"
    },
    {
      "name": "@tag2"
    }
  ]
});
formatter.step({
  "name": "I go to \"http://eaistan-dev.proitr.ru/index.php?show\u003dKpgzSpgz\u0026menu_id\u003d1503\u0026report_id\u003d1507\"",
  "keyword": "When "
});
formatter.match({
  "location": "stepDef_prom.i_go_to(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I check for the table",
  "keyword": "When "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "I log in as demo with password demo with name Иванов О.З.",
  "keyword": "Given "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.scenario({
  "name": "Test data existance outline",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@tag"
    },
    {
      "name": "@tag2"
    }
  ]
});
formatter.step({
  "name": "I go to \"http://eaistan-dev.proitr.ru/index.php?show\u003dKpgzSpgz\u0026menu_id\u003d1503\u0026report_id\u003d1509\"",
  "keyword": "When "
});
formatter.match({
  "location": "stepDef_prom.i_go_to(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I check for the table",
  "keyword": "When "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "I log in as demo with password demo with name Иванов О.З.",
  "keyword": "Given "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.scenario({
  "name": "Test data existance outline",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@tag"
    },
    {
      "name": "@tag2"
    }
  ]
});
formatter.step({
  "name": "I go to \"http://eaistan-dev.proitr.ru/index.php?show\u003dAdministration\u0026menu_id\u003d1700\u0026report_id\u003d1701\"",
  "keyword": "When "
});
formatter.match({
  "location": "stepDef_prom.i_go_to(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I check for the table",
  "keyword": "When "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "I log in as demo with password demo with name Иванов О.З.",
  "keyword": "Given "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.scenario({
  "name": "Test data existance outline",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@tag"
    },
    {
      "name": "@tag2"
    }
  ]
});
formatter.step({
  "name": "I go to \"http://eaistan-dev.proitr.ru/index.php?show\u003dAdministration\u0026menu_id\u003d1700\u0026report_id\u003d1702\"",
  "keyword": "When "
});
formatter.match({
  "location": "stepDef_prom.i_go_to(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I check for the table",
  "keyword": "When "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "I log in as demo with password demo with name Иванов О.З.",
  "keyword": "Given "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.scenario({
  "name": "Test data existance outline",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@tag"
    },
    {
      "name": "@tag2"
    }
  ]
});
formatter.step({
  "name": "I go to \"http://eaistan-dev.proitr.ru/index.php?show\u003dAdministration\u0026menu_id\u003d1700\u0026report_id\u003d1703\"",
  "keyword": "When "
});
formatter.match({
  "location": "stepDef_prom.i_go_to(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I check for the table",
  "keyword": "When "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "I log in as demo with password demo with name Иванов О.З.",
  "keyword": "Given "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.scenario({
  "name": "Test data existance outline",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@tag"
    },
    {
      "name": "@tag2"
    }
  ]
});
formatter.step({
  "name": "I go to \"http://eaistan-dev.proitr.ru/index.php?show\u003dAdministration\u0026menu_id\u003d1700\u0026report_id\u003d1704\"",
  "keyword": "When "
});
formatter.match({
  "location": "stepDef_prom.i_go_to(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I check for the table",
  "keyword": "When "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "I log in as demo with password demo with name Иванов О.З.",
  "keyword": "Given "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.scenario({
  "name": "Test data existance outline",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@tag"
    },
    {
      "name": "@tag2"
    }
  ]
});
formatter.step({
  "name": "I go to \"http://eaistan-dev.proitr.ru/index.php?show\u003dnew_reports\u0026menu_id\u003d1096\u0026report_id\u003d49\"",
  "keyword": "When "
});
formatter.match({
  "location": "stepDef_prom.i_go_to(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I check for the table",
  "keyword": "When "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "I log in as demo with password demo with name Иванов О.З.",
  "keyword": "Given "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.scenario({
  "name": "Test data existance outline",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@tag"
    },
    {
      "name": "@tag2"
    }
  ]
});
formatter.step({
  "name": "I go to \"http://eaistan-dev.proitr.ru/index.php?show\u003dnew_reports\u0026menu_id\u003d1096\u0026report_id\u003d47\"",
  "keyword": "When "
});
formatter.match({
  "location": "stepDef_prom.i_go_to(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I check for the table",
  "keyword": "When "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "I log in as demo with password demo with name Иванов О.З.",
  "keyword": "Given "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.scenario({
  "name": "Test data existance outline",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@tag"
    },
    {
      "name": "@tag2"
    }
  ]
});
formatter.step({
  "name": "I go to \"http://eaistan-dev.proitr.ru/index.php?show\u003dnew_reports\u0026menu_id\u003d1096\u0026report_id\u003d46\"",
  "keyword": "When "
});
formatter.match({
  "location": "stepDef_prom.i_go_to(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I check for the table",
  "keyword": "When "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "I log in as demo with password demo with name Иванов О.З.",
  "keyword": "Given "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.scenario({
  "name": "Test data existance outline",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@tag"
    },
    {
      "name": "@tag2"
    }
  ]
});
formatter.step({
  "name": "I go to \"http://eaistan-dev.proitr.ru/index.php?show\u003dnew_reports\u0026menu_id\u003d1096\u0026report_id\u003d57\"",
  "keyword": "When "
});
formatter.match({
  "location": "stepDef_prom.i_go_to(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I check for the table",
  "keyword": "When "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "I log in as demo with password demo with name Иванов О.З.",
  "keyword": "Given "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.scenario({
  "name": "Test data existance outline",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@tag"
    },
    {
      "name": "@tag2"
    }
  ]
});
formatter.step({
  "name": "I go to \"http://eaistan-dev.proitr.ru/index.php?show\u003dnew_reports\u0026menu_id\u003d1096\u0026report_id\u003d44\"",
  "keyword": "When "
});
formatter.match({
  "location": "stepDef_prom.i_go_to(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I check for the table",
  "keyword": "When "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "I log in as demo with password demo with name Иванов О.З.",
  "keyword": "Given "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.scenario({
  "name": "Test data existance outline",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@tag"
    },
    {
      "name": "@tag2"
    }
  ]
});
formatter.step({
  "name": "I go to \"http://eaistan-dev.proitr.ru/index.php?show\u003dnew_reports\u0026menu_id\u003d1096\u0026report_id\u003d48\"",
  "keyword": "When "
});
formatter.match({
  "location": "stepDef_prom.i_go_to(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I check for the table",
  "keyword": "When "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "I log in as demo with password demo with name Иванов О.З.",
  "keyword": "Given "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.scenario({
  "name": "Test data existance outline",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@tag"
    },
    {
      "name": "@tag2"
    }
  ]
});
formatter.step({
  "name": "I go to \"http://eaistan-dev.proitr.ru/index.php?show\u003dnew_reports\u0026menu_id\u003d1096\u0026report_id\u003d50\"",
  "keyword": "When "
});
formatter.match({
  "location": "stepDef_prom.i_go_to(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I check for the table",
  "keyword": "When "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "I log in as demo with password demo with name Иванов О.З.",
  "keyword": "Given "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.scenario({
  "name": "Test data existance outline",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@tag"
    },
    {
      "name": "@tag2"
    }
  ]
});
formatter.step({
  "name": "I go to \"http://eaistan-dev.proitr.ru/index.php?show\u003dnew_reports\u0026menu_id\u003d1096\u0026report_id\u003d51\"",
  "keyword": "When "
});
formatter.match({
  "location": "stepDef_prom.i_go_to(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I check for the table",
  "keyword": "When "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "I log in as demo with password demo with name Иванов О.З.",
  "keyword": "Given "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.scenario({
  "name": "Test data existance outline",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@tag"
    },
    {
      "name": "@tag2"
    }
  ]
});
formatter.step({
  "name": "I go to \"http://eaistan-dev.proitr.ru/index.php?show\u003dnew_reports\u0026menu_id\u003d1096\u0026report_id\u003d52\"",
  "keyword": "When "
});
formatter.match({
  "location": "stepDef_prom.i_go_to(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I check for the table",
  "keyword": "When "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "I log in as demo with password demo with name Иванов О.З.",
  "keyword": "Given "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.scenario({
  "name": "Test data existance outline",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@tag"
    },
    {
      "name": "@tag2"
    }
  ]
});
formatter.step({
  "name": "I go to \"http://eaistan-dev.proitr.ru/index.php?show\u003dnew_reports\u0026menu_id\u003d1096\u0026report_id\u003d53\"",
  "keyword": "When "
});
formatter.match({
  "location": "stepDef_prom.i_go_to(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I check for the table",
  "keyword": "When "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "I log in as demo with password demo with name Иванов О.З.",
  "keyword": "Given "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.scenario({
  "name": "Test data existance outline",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@tag"
    },
    {
      "name": "@tag2"
    }
  ]
});
formatter.step({
  "name": "I go to \"http://eaistan-dev.proitr.ru/index.php?show\u003dnew_reports\u0026menu_id\u003d1096\u0026report_id\u003d67\"",
  "keyword": "When "
});
formatter.match({
  "location": "stepDef_prom.i_go_to(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I check for the table",
  "keyword": "When "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "I log in as demo with password demo with name Иванов О.З.",
  "keyword": "Given "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.scenario({
  "name": "Test data existance outline",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@tag"
    },
    {
      "name": "@tag2"
    }
  ]
});
formatter.step({
  "name": "I go to \"http://eaistan-dev.proitr.ru/index.php?show\u003dMrg\u0026menu_id\u003d1800\u0026report_id\u003d1801\"",
  "keyword": "When "
});
formatter.match({
  "location": "stepDef_prom.i_go_to(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I check for the table",
  "keyword": "When "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "I log in as demo with password demo with name Иванов О.З.",
  "keyword": "Given "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.scenario({
  "name": "Test data existance outline",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@tag"
    },
    {
      "name": "@tag2"
    }
  ]
});
formatter.step({
  "name": "I go to \"http://eaistan-dev.proitr.ru/index.php?show\u003dMrg\u0026menu_id\u003d1800\u0026report_id\u003d1802\"",
  "keyword": "When "
});
formatter.match({
  "location": "stepDef_prom.i_go_to(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I check for the table",
  "keyword": "When "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "I log in as demo with password demo with name Иванов О.З.",
  "keyword": "Given "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.scenario({
  "name": "Test data existance outline",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@tag"
    },
    {
      "name": "@tag2"
    }
  ]
});
formatter.step({
  "name": "I go to \"http://eaistan-dev.proitr.ru/index.php?show\u003dMrg\u0026menu_id\u003d1800\u0026report_id\u003d1803\"",
  "keyword": "When "
});
formatter.match({
  "location": "stepDef_prom.i_go_to(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I check for the table",
  "keyword": "When "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "I log in as demo with password demo with name Иванов О.З.",
  "keyword": "Given "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.scenario({
  "name": "Test data existance outline",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@tag"
    },
    {
      "name": "@tag2"
    }
  ]
});
formatter.step({
  "name": "I go to \"http://eaistan-dev.proitr.ru/index.php?show\u003dMrg\u0026menu_id\u003d1800\u0026report_id\u003d1804\"",
  "keyword": "When "
});
formatter.match({
  "location": "stepDef_prom.i_go_to(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I check for the table",
  "keyword": "When "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "I log in as demo with password demo with name Иванов О.З.",
  "keyword": "Given "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.scenario({
  "name": "Test data existance outline",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@tag"
    },
    {
      "name": "@tag2"
    }
  ]
});
formatter.step({
  "name": "I go to \"http://eaistan-dev.proitr.ru/index.php?show\u003dMrg\u0026menu_id\u003d1800\u0026report_id\u003d1805\"",
  "keyword": "When "
});
formatter.match({
  "location": "stepDef_prom.i_go_to(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I check for the table",
  "keyword": "When "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "I log in as demo with password demo with name Иванов О.З.",
  "keyword": "Given "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.scenario({
  "name": "Test data existance outline",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@tag"
    },
    {
      "name": "@tag2"
    }
  ]
});
formatter.step({
  "name": "I go to \"http://eaistan-dev.proitr.ru/index.php?show\u003dTreeContract\u0026menu_id\u003d1600\"",
  "keyword": "When "
});
formatter.match({
  "location": "stepDef_prom.i_go_to(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I check for the table",
  "keyword": "When "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.uri("src/Features/testDataExistence_prom.feature");
formatter.feature({
  "name": "Test data existance_prom",
  "description": "  I want to check if there is some data in all the tables",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@tag"
    }
  ]
});
formatter.scenarioOutline({
  "name": "Test data existance outline",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@tag2"
    }
  ]
});
formatter.step({
  "name": "I go to \u003ctable\u003e",
  "keyword": "When "
});
formatter.step({
  "name": "I checking the table",
  "keyword": "When "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "table"
      ]
    },
    {
      "cells": [
        "\"http://eaist.mos.ru/analytics/index.php?show\u003drating\u0026menu_id\u003d21\""
      ]
    },
    {
      "cells": [
        "\"http://eaist.mos.ru/analytics/index.php?show\u003dExpertNMC\u0026menu_id\u003d1500\u0026report_id\u003d56\""
      ]
    },
    {
      "cells": [
        "\"http://eaist.mos.ru/analytics/index.php?show\u003dExpertNMC\u0026menu_id\u003d1500\u0026report_id\u003d1501\""
      ]
    },
    {
      "cells": [
        "\"http://eaist.mos.ru/analytics/index.php?show\u003dExpertNMC\u0026menu_id\u003d1500\u0026report_id\u003d1505\""
      ]
    },
    {
      "cells": [
        "\"http://eaist.mos.ru/analytics/index.php?show\u003dExpertNMC\u0026menu_id\u003d1500\u0026report_id\u003d1506\""
      ]
    },
    {
      "cells": [
        "\"http://eaist.mos.ru/analytics/index.php?show\u003dKpgzSpgz\u0026menu_id\u003d1503\u0026report_id\u003d54\""
      ]
    },
    {
      "cells": [
        "\"http://eaist.mos.ru/analytics/index.php?show\u003dKpgzSpgz\u0026menu_id\u003d1503\u0026report_id\u003d1504\""
      ]
    },
    {
      "cells": [
        "\"http://eaist.mos.ru/analytics/index.php?show\u003dKpgzSpgz\u0026menu_id\u003d1503\u0026report_id\u003d1507\""
      ]
    },
    {
      "cells": [
        "\"http://eaist.mos.ru/analytics/index.php?show\u003dKpgzSpgz\u0026menu_id\u003d1503\u0026report_id\u003d1509\""
      ]
    },
    {
      "cells": [
        "\"http://eaist.mos.ru/analytics/index.php?show\u003dAdministration\u0026menu_id\u003d1700\u0026report_id\u003d1701\""
      ]
    },
    {
      "cells": [
        "\"http://eaist.mos.ru/analytics/index.php?show\u003dAdministration\u0026menu_id\u003d1700\u0026report_id\u003d1702\""
      ]
    },
    {
      "cells": [
        "\"http://eaist.mos.ru/analytics/index.php?show\u003dAdministration\u0026menu_id\u003d1700\u0026report_id\u003d1703\""
      ]
    },
    {
      "cells": [
        "\"http://eaist.mos.ru/analytics/index.php?show\u003dAdministration\u0026menu_id\u003d1700\u0026report_id\u003d1704\""
      ]
    },
    {
      "cells": [
        "\"http://eaist.mos.ru/analytics/index.php?show\u003dnew_reports\u0026menu_id\u003d1096\u0026report_id\u003d49\""
      ]
    },
    {
      "cells": [
        "\"http://eaist.mos.ru/analytics/index.php?show\u003dnew_reports\u0026menu_id\u003d1096\u0026report_id\u003d47\""
      ]
    },
    {
      "cells": [
        "\"http://eaist.mos.ru/analytics/index.php?show\u003dnew_reports\u0026menu_id\u003d1096\u0026report_id\u003d46\""
      ]
    },
    {
      "cells": [
        "\"http://eaist.mos.ru/analytics/index.php?show\u003dnew_reports\u0026menu_id\u003d1096\u0026report_id\u003d57\""
      ]
    },
    {
      "cells": [
        "\"http://eaist.mos.ru/analytics/index.php?show\u003dnew_reports\u0026menu_id\u003d1096\u0026report_id\u003d44\""
      ]
    },
    {
      "cells": [
        "\"http://eaist.mos.ru/analytics/index.php?show\u003dnew_reports\u0026menu_id\u003d1096\u0026report_id\u003d48\""
      ]
    },
    {
      "cells": [
        "\"http://eaist.mos.ru/analytics/index.php?show\u003dnew_reports\u0026menu_id\u003d1096\u0026report_id\u003d50\""
      ]
    },
    {
      "cells": [
        "\"http://eaist.mos.ru/analytics/index.php?show\u003dnew_reports\u0026menu_id\u003d1096\u0026report_id\u003d51\""
      ]
    },
    {
      "cells": [
        "\"http://eaist.mos.ru/analytics/index.php?show\u003dnew_reports\u0026menu_id\u003d1096\u0026report_id\u003d52\""
      ]
    },
    {
      "cells": [
        "\"http://eaist.mos.ru/analytics/index.php?show\u003dnew_reports\u0026menu_id\u003d1096\u0026report_id\u003d53\""
      ]
    },
    {
      "cells": [
        "\"http://eaist.mos.ru/analytics/index.php?show\u003dnew_reports\u0026menu_id\u003d1096\u0026report_id\u003d67\""
      ]
    },
    {
      "cells": [
        "\"http://eaist.mos.ru/analytics/index.php?show\u003dMrg\u0026menu_id\u003d1800\u0026report_id\u003d1801\""
      ]
    },
    {
      "cells": [
        "\"http://eaist.mos.ru/analytics/index.php?show\u003dMrg\u0026menu_id\u003d1800\u0026report_id\u003d1802\""
      ]
    },
    {
      "cells": [
        "\"http://eaist.mos.ru/analytics/index.php?show\u003dMrg\u0026menu_id\u003d1800\u0026report_id\u003d1803\""
      ]
    },
    {
      "cells": [
        "\"http://eaist.mos.ru/analytics/index.php?show\u003dMrg\u0026menu_id\u003d1800\u0026report_id\u003d1804\""
      ]
    },
    {
      "cells": [
        "\"http://eaist.mos.ru/analytics/index.php?show\u003dMrg\u0026menu_id\u003d1800\u0026report_id\u003d1805\""
      ]
    },
    {
      "cells": [
        "\"http://eaist.mos.ru/analytics/index.php?show\u003dTreeContract\u0026menu_id\u003d1600\""
      ]
    }
  ]
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "I login as demo with password reptilian with name Иванов О.З.",
  "keyword": "Given "
});
formatter.match({
  "location": "stepDef_prom.i_login_as_demo_with_password_reptilian_with_name_Иванов_О_З()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Test data existance outline",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@tag"
    },
    {
      "name": "@tag2"
    }
  ]
});
formatter.step({
  "name": "I go to \"http://eaist.mos.ru/analytics/index.php?show\u003drating\u0026menu_id\u003d21\"",
  "keyword": "When "
});
formatter.match({
  "location": "stepDef_prom.i_go_to(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I checking the table",
  "keyword": "When "
});
formatter.match({
  "location": "stepDef_prom.i_checking_the_table()"
});
formatter.result({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "I login as demo with password reptilian with name Иванов О.З.",
  "keyword": "Given "
});
formatter.match({
  "location": "stepDef_prom.i_login_as_demo_with_password_reptilian_with_name_Иванов_О_З()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Test data existance outline",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@tag"
    },
    {
      "name": "@tag2"
    }
  ]
});
formatter.step({
  "name": "I go to \"http://eaist.mos.ru/analytics/index.php?show\u003dExpertNMC\u0026menu_id\u003d1500\u0026report_id\u003d56\"",
  "keyword": "When "
});
formatter.match({
  "location": "stepDef_prom.i_go_to(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I checking the table",
  "keyword": "When "
});
formatter.match({
  "location": "stepDef_prom.i_checking_the_table()"
});
formatter.result({
  "error_message": "Element not found {#creport-grid \u003e div.grid-table-wrap \u003e table}\nExpected: visible\nScreenshot: file:/D:/eclipse_workspace/Cucumber_EAIST/build/reports/tests/1520835753427.0.png\nPage source: file:/D:/eclipse_workspace/Cucumber_EAIST/build/reports/tests/1520835753427.0.html\nTimeout: 90 s.\nCaused by: NoSuchElementException: no such element: Unable to locate element: {\"method\":\"css selector\",\"selector\":\"#creport-grid \u003e div.grid-table-wrap \u003e table\"}\r\n\tat com.codeborne.selenide.impl.WebElementSource.createElementNotFoundError(WebElementSource.java:31)\r\n\tat com.codeborne.selenide.impl.ElementFinder.createElementNotFoundError(ElementFinder.java:82)\r\n\tat com.codeborne.selenide.impl.WebElementSource.checkCondition(WebElementSource.java:59)\r\n\tat com.codeborne.selenide.commands.Should.should(Should.java:35)\r\n\tat com.codeborne.selenide.commands.Should.execute(Should.java:29)\r\n\tat com.codeborne.selenide.commands.Should.execute(Should.java:12)\r\n\tat com.codeborne.selenide.commands.Commands.execute(Commands.java:143)\r\n\tat com.codeborne.selenide.impl.SelenideElementProxy.dispatchAndRetry(SelenideElementProxy.java:87)\r\n\tat com.codeborne.selenide.impl.SelenideElementProxy.invoke(SelenideElementProxy.java:63)\r\n\tat com.sun.proxy.$Proxy12.shouldBe(Unknown Source)\r\n\tat stepDefinition_prom.stepDef_prom.i_checking_the_table(stepDef_prom.java:38)\r\n\tat ✽.I checking the table(src/Features/testDataExistence_prom.feature:10)\r\nCaused by: org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"css selector\",\"selector\":\"#creport-grid \u003e div.grid-table-wrap \u003e table\"}\n  (Session info: chrome\u003d64.0.3282.186)\n  (Driver info: chromedriver\u003d2.35.528161 (5b82f2d2aae0ca24b877009200ced9065a772e73),platform\u003dWindows NT 6.3.9600 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 0 milliseconds\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.8.1\u0027, revision: \u00276e95a6684b\u0027, time: \u00272017-12-01T19:05:32.194Z\u0027\nSystem info: host: \u0027PRM-WS-0159\u0027, ip: \u002710.242.4.214\u0027, os.name: \u0027Windows 8.1\u0027, os.arch: \u0027x86\u0027, os.version: \u00276.3\u0027, java.version: \u00271.8.0_151\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, acceptSslCerts: false, applicationCacheEnabled: false, browserConnectionEnabled: false, browserName: chrome, chrome: {chromedriverVersion: 2.35.528161 (5b82f2d2aae0ca..., userDataDir: C:\\Users\\starikov\\AppData\\L...}, cssSelectorsEnabled: true, databaseEnabled: false, handlesAlerts: true, hasTouchScreen: false, javascriptEnabled: true, locationContextEnabled: true, mobileEmulationEnabled: false, nativeEvents: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: XP, platformName: XP, rotatable: false, setWindowRect: true, takesHeapSnapshot: true, takesScreenshot: true, unexpectedAlertBehaviour: , unhandledPromptBehavior: , version: 64.0.3282.186, webStorageEnabled: true}\nSession ID: c1a9406fc64887061d51bc21c7f826e0\n*** Element info: {Using\u003dcss selector, value\u003d#creport-grid \u003e div.grid-table-wrap \u003e table}\r\n\tat sun.reflect.GeneratedConstructorAccessor9.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:214)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:166)\r\n\tat org.openqa.selenium.remote.http.JsonHttpResponseCodec.reconstructValue(JsonHttpResponseCodec.java:40)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:80)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:44)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:164)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:601)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:371)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByCssSelector(RemoteWebDriver.java:465)\r\n\tat org.openqa.selenium.By$ByCssSelector.findElement(By.java:430)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:363)\r\n\tat com.codeborne.selenide.impl.WebElementSelector.findElement(WebElementSelector.java:28)\r\n\tat com.codeborne.selenide.impl.ElementFinder.getWebElement(ElementFinder.java:56)\r\n\tat com.codeborne.selenide.impl.WebElementSource.checkCondition(WebElementSource.java:44)\r\n\tat com.codeborne.selenide.commands.Should.should(Should.java:35)\r\n\tat com.codeborne.selenide.commands.Should.execute(Should.java:29)\r\n\tat com.codeborne.selenide.commands.Should.execute(Should.java:12)\r\n\tat com.codeborne.selenide.commands.Commands.execute(Commands.java:143)\r\n\tat com.codeborne.selenide.impl.SelenideElementProxy.dispatchAndRetry(SelenideElementProxy.java:87)\r\n\tat com.codeborne.selenide.impl.SelenideElementProxy.invoke(SelenideElementProxy.java:63)\r\n\tat com.sun.proxy.$Proxy12.shouldBe(Unknown Source)\r\n\tat stepDefinition_prom.stepDef_prom.i_checking_the_table(stepDef_prom.java:38)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:32)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:26)\r\n\tat cucumber.runtime.java.JavaStepDefinition.execute(JavaStepDefinition.java:37)\r\n\tat cucumber.runtime.StepDefinitionMatch.runStep(StepDefinitionMatch.java:40)\r\n\tat cucumber.api.TestStep.executeStep(TestStep.java:102)\r\n\tat cucumber.api.TestStep.run(TestStep.java:83)\r\n\tat cucumber.api.TestCase.run(TestCase.java:58)\r\n\tat cucumber.runner.Runner.runPickle(Runner.java:80)\r\n\tat cucumber.runtime.junit.PickleRunners$NoStepDescriptions.run(PickleRunners.java:140)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:68)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:23)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:73)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:117)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:55)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat cucumber.api.junit.Cucumber$1.evaluate(Cucumber.java:126)\r\n\tat org.junit.internal.runners.statements.RunBefores.evaluate(RunBefores.java:26)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat org.eclipse.jdt.internal.junit4.runner.JUnit4TestReference.run(JUnit4TestReference.java:86)\r\n\tat org.eclipse.jdt.internal.junit.runner.TestExecution.run(TestExecution.java:38)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:459)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:675)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.run(RemoteTestRunner.java:382)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.main(RemoteTestRunner.java:192)\r\n",
  "status": "failed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "I login as demo with password reptilian with name Иванов О.З.",
  "keyword": "Given "
});
formatter.match({
  "location": "stepDef_prom.i_login_as_demo_with_password_reptilian_with_name_Иванов_О_З()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Test data existance outline",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@tag"
    },
    {
      "name": "@tag2"
    }
  ]
});
formatter.step({
  "name": "I go to \"http://eaist.mos.ru/analytics/index.php?show\u003dExpertNMC\u0026menu_id\u003d1500\u0026report_id\u003d1501\"",
  "keyword": "When "
});
formatter.match({
  "location": "stepDef_prom.i_go_to(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I checking the table",
  "keyword": "When "
});
formatter.match({
  "location": "stepDef_prom.i_checking_the_table()"
});
formatter.result({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "I login as demo with password reptilian with name Иванов О.З.",
  "keyword": "Given "
});
formatter.match({
  "location": "stepDef_prom.i_login_as_demo_with_password_reptilian_with_name_Иванов_О_З()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Test data existance outline",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@tag"
    },
    {
      "name": "@tag2"
    }
  ]
});
formatter.step({
  "name": "I go to \"http://eaist.mos.ru/analytics/index.php?show\u003dExpertNMC\u0026menu_id\u003d1500\u0026report_id\u003d1505\"",
  "keyword": "When "
});
formatter.match({
  "location": "stepDef_prom.i_go_to(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I checking the table",
  "keyword": "When "
});
formatter.match({
  "location": "stepDef_prom.i_checking_the_table()"
});
formatter.result({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "I login as demo with password reptilian with name Иванов О.З.",
  "keyword": "Given "
});
formatter.match({
  "location": "stepDef_prom.i_login_as_demo_with_password_reptilian_with_name_Иванов_О_З()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Test data existance outline",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@tag"
    },
    {
      "name": "@tag2"
    }
  ]
});
formatter.step({
  "name": "I go to \"http://eaist.mos.ru/analytics/index.php?show\u003dExpertNMC\u0026menu_id\u003d1500\u0026report_id\u003d1506\"",
  "keyword": "When "
});
formatter.match({
  "location": "stepDef_prom.i_go_to(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I checking the table",
  "keyword": "When "
});
formatter.match({
  "location": "stepDef_prom.i_checking_the_table()"
});
formatter.result({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "I login as demo with password reptilian with name Иванов О.З.",
  "keyword": "Given "
});
formatter.match({
  "location": "stepDef_prom.i_login_as_demo_with_password_reptilian_with_name_Иванов_О_З()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Test data existance outline",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@tag"
    },
    {
      "name": "@tag2"
    }
  ]
});
formatter.step({
  "name": "I go to \"http://eaist.mos.ru/analytics/index.php?show\u003dKpgzSpgz\u0026menu_id\u003d1503\u0026report_id\u003d54\"",
  "keyword": "When "
});
formatter.match({
  "location": "stepDef_prom.i_go_to(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I checking the table",
  "keyword": "When "
});
formatter.match({
  "location": "stepDef_prom.i_checking_the_table()"
});
formatter.result({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "I login as demo with password reptilian with name Иванов О.З.",
  "keyword": "Given "
});
formatter.match({
  "location": "stepDef_prom.i_login_as_demo_with_password_reptilian_with_name_Иванов_О_З()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Test data existance outline",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@tag"
    },
    {
      "name": "@tag2"
    }
  ]
});
formatter.step({
  "name": "I go to \"http://eaist.mos.ru/analytics/index.php?show\u003dKpgzSpgz\u0026menu_id\u003d1503\u0026report_id\u003d1504\"",
  "keyword": "When "
});
formatter.match({
  "location": "stepDef_prom.i_go_to(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I checking the table",
  "keyword": "When "
});
formatter.match({
  "location": "stepDef_prom.i_checking_the_table()"
});
formatter.result({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "I login as demo with password reptilian with name Иванов О.З.",
  "keyword": "Given "
});
formatter.match({
  "location": "stepDef_prom.i_login_as_demo_with_password_reptilian_with_name_Иванов_О_З()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Test data existance outline",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@tag"
    },
    {
      "name": "@tag2"
    }
  ]
});
formatter.step({
  "name": "I go to \"http://eaist.mos.ru/analytics/index.php?show\u003dKpgzSpgz\u0026menu_id\u003d1503\u0026report_id\u003d1507\"",
  "keyword": "When "
});
formatter.match({
  "location": "stepDef_prom.i_go_to(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I checking the table",
  "keyword": "When "
});
formatter.match({
  "location": "stepDef_prom.i_checking_the_table()"
});
formatter.result({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "I login as demo with password reptilian with name Иванов О.З.",
  "keyword": "Given "
});
formatter.match({
  "location": "stepDef_prom.i_login_as_demo_with_password_reptilian_with_name_Иванов_О_З()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Test data existance outline",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@tag"
    },
    {
      "name": "@tag2"
    }
  ]
});
formatter.step({
  "name": "I go to \"http://eaist.mos.ru/analytics/index.php?show\u003dKpgzSpgz\u0026menu_id\u003d1503\u0026report_id\u003d1509\"",
  "keyword": "When "
});
formatter.match({
  "location": "stepDef_prom.i_go_to(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I checking the table",
  "keyword": "When "
});
formatter.match({
  "location": "stepDef_prom.i_checking_the_table()"
});
formatter.result({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "I login as demo with password reptilian with name Иванов О.З.",
  "keyword": "Given "
});
formatter.match({
  "location": "stepDef_prom.i_login_as_demo_with_password_reptilian_with_name_Иванов_О_З()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Test data existance outline",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@tag"
    },
    {
      "name": "@tag2"
    }
  ]
});
formatter.step({
  "name": "I go to \"http://eaist.mos.ru/analytics/index.php?show\u003dAdministration\u0026menu_id\u003d1700\u0026report_id\u003d1701\"",
  "keyword": "When "
});
formatter.match({
  "location": "stepDef_prom.i_go_to(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I checking the table",
  "keyword": "When "
});
formatter.match({
  "location": "stepDef_prom.i_checking_the_table()"
});
formatter.result({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "I login as demo with password reptilian with name Иванов О.З.",
  "keyword": "Given "
});
formatter.match({
  "location": "stepDef_prom.i_login_as_demo_with_password_reptilian_with_name_Иванов_О_З()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Test data existance outline",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@tag"
    },
    {
      "name": "@tag2"
    }
  ]
});
formatter.step({
  "name": "I go to \"http://eaist.mos.ru/analytics/index.php?show\u003dAdministration\u0026menu_id\u003d1700\u0026report_id\u003d1702\"",
  "keyword": "When "
});
formatter.match({
  "location": "stepDef_prom.i_go_to(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I checking the table",
  "keyword": "When "
});
formatter.match({
  "location": "stepDef_prom.i_checking_the_table()"
});
formatter.result({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "I login as demo with password reptilian with name Иванов О.З.",
  "keyword": "Given "
});
formatter.match({
  "location": "stepDef_prom.i_login_as_demo_with_password_reptilian_with_name_Иванов_О_З()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Test data existance outline",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@tag"
    },
    {
      "name": "@tag2"
    }
  ]
});
formatter.step({
  "name": "I go to \"http://eaist.mos.ru/analytics/index.php?show\u003dAdministration\u0026menu_id\u003d1700\u0026report_id\u003d1703\"",
  "keyword": "When "
});
formatter.match({
  "location": "stepDef_prom.i_go_to(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I checking the table",
  "keyword": "When "
});
formatter.match({
  "location": "stepDef_prom.i_checking_the_table()"
});
formatter.result({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "I login as demo with password reptilian with name Иванов О.З.",
  "keyword": "Given "
});
formatter.match({
  "location": "stepDef_prom.i_login_as_demo_with_password_reptilian_with_name_Иванов_О_З()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Test data existance outline",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@tag"
    },
    {
      "name": "@tag2"
    }
  ]
});
formatter.step({
  "name": "I go to \"http://eaist.mos.ru/analytics/index.php?show\u003dAdministration\u0026menu_id\u003d1700\u0026report_id\u003d1704\"",
  "keyword": "When "
});
formatter.match({
  "location": "stepDef_prom.i_go_to(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I checking the table",
  "keyword": "When "
});
formatter.match({
  "location": "stepDef_prom.i_checking_the_table()"
});
formatter.result({
  "error_message": "Element not found {#creport-grid \u003e div.grid-table-wrap \u003e table}\nExpected: visible\nScreenshot: file:/D:/eclipse_workspace/Cucumber_EAIST/build/reports/tests/1520836179337.1.png\nPage source: file:/D:/eclipse_workspace/Cucumber_EAIST/build/reports/tests/1520836179337.1.html\nTimeout: 90 s.\nCaused by: NoSuchElementException: no such element: Unable to locate element: {\"method\":\"css selector\",\"selector\":\"#creport-grid \u003e div.grid-table-wrap \u003e table\"}\r\n\tat com.codeborne.selenide.impl.WebElementSource.createElementNotFoundError(WebElementSource.java:31)\r\n\tat com.codeborne.selenide.impl.ElementFinder.createElementNotFoundError(ElementFinder.java:82)\r\n\tat com.codeborne.selenide.impl.WebElementSource.checkCondition(WebElementSource.java:59)\r\n\tat com.codeborne.selenide.commands.Should.should(Should.java:35)\r\n\tat com.codeborne.selenide.commands.Should.execute(Should.java:29)\r\n\tat com.codeborne.selenide.commands.Should.execute(Should.java:12)\r\n\tat com.codeborne.selenide.commands.Commands.execute(Commands.java:143)\r\n\tat com.codeborne.selenide.impl.SelenideElementProxy.dispatchAndRetry(SelenideElementProxy.java:87)\r\n\tat com.codeborne.selenide.impl.SelenideElementProxy.invoke(SelenideElementProxy.java:63)\r\n\tat com.sun.proxy.$Proxy12.shouldBe(Unknown Source)\r\n\tat stepDefinition_prom.stepDef_prom.i_checking_the_table(stepDef_prom.java:38)\r\n\tat ✽.I checking the table(src/Features/testDataExistence_prom.feature:10)\r\nCaused by: org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"css selector\",\"selector\":\"#creport-grid \u003e div.grid-table-wrap \u003e table\"}\n  (Session info: chrome\u003d64.0.3282.186)\n  (Driver info: chromedriver\u003d2.35.528161 (5b82f2d2aae0ca24b877009200ced9065a772e73),platform\u003dWindows NT 6.3.9600 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 0 milliseconds\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.8.1\u0027, revision: \u00276e95a6684b\u0027, time: \u00272017-12-01T19:05:32.194Z\u0027\nSystem info: host: \u0027PRM-WS-0159\u0027, ip: \u002710.242.4.214\u0027, os.name: \u0027Windows 8.1\u0027, os.arch: \u0027x86\u0027, os.version: \u00276.3\u0027, java.version: \u00271.8.0_151\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, acceptSslCerts: false, applicationCacheEnabled: false, browserConnectionEnabled: false, browserName: chrome, chrome: {chromedriverVersion: 2.35.528161 (5b82f2d2aae0ca..., userDataDir: C:\\Users\\starikov\\AppData\\L...}, cssSelectorsEnabled: true, databaseEnabled: false, handlesAlerts: true, hasTouchScreen: false, javascriptEnabled: true, locationContextEnabled: true, mobileEmulationEnabled: false, nativeEvents: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: XP, platformName: XP, rotatable: false, setWindowRect: true, takesHeapSnapshot: true, takesScreenshot: true, unexpectedAlertBehaviour: , unhandledPromptBehavior: , version: 64.0.3282.186, webStorageEnabled: true}\nSession ID: c1a9406fc64887061d51bc21c7f826e0\n*** Element info: {Using\u003dcss selector, value\u003d#creport-grid \u003e div.grid-table-wrap \u003e table}\r\n\tat sun.reflect.GeneratedConstructorAccessor9.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:214)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:166)\r\n\tat org.openqa.selenium.remote.http.JsonHttpResponseCodec.reconstructValue(JsonHttpResponseCodec.java:40)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:80)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:44)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:164)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:601)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:371)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByCssSelector(RemoteWebDriver.java:465)\r\n\tat org.openqa.selenium.By$ByCssSelector.findElement(By.java:430)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:363)\r\n\tat com.codeborne.selenide.impl.WebElementSelector.findElement(WebElementSelector.java:28)\r\n\tat com.codeborne.selenide.impl.ElementFinder.getWebElement(ElementFinder.java:56)\r\n\tat com.codeborne.selenide.impl.WebElementSource.checkCondition(WebElementSource.java:44)\r\n\tat com.codeborne.selenide.commands.Should.should(Should.java:35)\r\n\tat com.codeborne.selenide.commands.Should.execute(Should.java:29)\r\n\tat com.codeborne.selenide.commands.Should.execute(Should.java:12)\r\n\tat com.codeborne.selenide.commands.Commands.execute(Commands.java:143)\r\n\tat com.codeborne.selenide.impl.SelenideElementProxy.dispatchAndRetry(SelenideElementProxy.java:87)\r\n\tat com.codeborne.selenide.impl.SelenideElementProxy.invoke(SelenideElementProxy.java:63)\r\n\tat com.sun.proxy.$Proxy12.shouldBe(Unknown Source)\r\n\tat stepDefinition_prom.stepDef_prom.i_checking_the_table(stepDef_prom.java:38)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:32)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:26)\r\n\tat cucumber.runtime.java.JavaStepDefinition.execute(JavaStepDefinition.java:37)\r\n\tat cucumber.runtime.StepDefinitionMatch.runStep(StepDefinitionMatch.java:40)\r\n\tat cucumber.api.TestStep.executeStep(TestStep.java:102)\r\n\tat cucumber.api.TestStep.run(TestStep.java:83)\r\n\tat cucumber.api.TestCase.run(TestCase.java:58)\r\n\tat cucumber.runner.Runner.runPickle(Runner.java:80)\r\n\tat cucumber.runtime.junit.PickleRunners$NoStepDescriptions.run(PickleRunners.java:140)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:68)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:23)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:73)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:117)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:55)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat cucumber.api.junit.Cucumber$1.evaluate(Cucumber.java:126)\r\n\tat org.junit.internal.runners.statements.RunBefores.evaluate(RunBefores.java:26)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat org.eclipse.jdt.internal.junit4.runner.JUnit4TestReference.run(JUnit4TestReference.java:86)\r\n\tat org.eclipse.jdt.internal.junit.runner.TestExecution.run(TestExecution.java:38)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:459)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:675)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.run(RemoteTestRunner.java:382)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.main(RemoteTestRunner.java:192)\r\n",
  "status": "failed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "I login as demo with password reptilian with name Иванов О.З.",
  "keyword": "Given "
});
formatter.match({
  "location": "stepDef_prom.i_login_as_demo_with_password_reptilian_with_name_Иванов_О_З()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Test data existance outline",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@tag"
    },
    {
      "name": "@tag2"
    }
  ]
});
formatter.step({
  "name": "I go to \"http://eaist.mos.ru/analytics/index.php?show\u003dnew_reports\u0026menu_id\u003d1096\u0026report_id\u003d49\"",
  "keyword": "When "
});
formatter.match({
  "location": "stepDef_prom.i_go_to(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I checking the table",
  "keyword": "When "
});
formatter.match({
  "location": "stepDef_prom.i_checking_the_table()"
});
formatter.result({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "I login as demo with password reptilian with name Иванов О.З.",
  "keyword": "Given "
});
formatter.match({
  "location": "stepDef_prom.i_login_as_demo_with_password_reptilian_with_name_Иванов_О_З()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Test data existance outline",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@tag"
    },
    {
      "name": "@tag2"
    }
  ]
});
formatter.step({
  "name": "I go to \"http://eaist.mos.ru/analytics/index.php?show\u003dnew_reports\u0026menu_id\u003d1096\u0026report_id\u003d47\"",
  "keyword": "When "
});
formatter.match({
  "location": "stepDef_prom.i_go_to(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I checking the table",
  "keyword": "When "
});
formatter.match({
  "location": "stepDef_prom.i_checking_the_table()"
});
formatter.result({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "I login as demo with password reptilian with name Иванов О.З.",
  "keyword": "Given "
});
formatter.match({
  "location": "stepDef_prom.i_login_as_demo_with_password_reptilian_with_name_Иванов_О_З()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Test data existance outline",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@tag"
    },
    {
      "name": "@tag2"
    }
  ]
});
formatter.step({
  "name": "I go to \"http://eaist.mos.ru/analytics/index.php?show\u003dnew_reports\u0026menu_id\u003d1096\u0026report_id\u003d46\"",
  "keyword": "When "
});
formatter.match({
  "location": "stepDef_prom.i_go_to(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I checking the table",
  "keyword": "When "
});
formatter.match({
  "location": "stepDef_prom.i_checking_the_table()"
});
formatter.result({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "I login as demo with password reptilian with name Иванов О.З.",
  "keyword": "Given "
});
formatter.match({
  "location": "stepDef_prom.i_login_as_demo_with_password_reptilian_with_name_Иванов_О_З()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Test data existance outline",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@tag"
    },
    {
      "name": "@tag2"
    }
  ]
});
formatter.step({
  "name": "I go to \"http://eaist.mos.ru/analytics/index.php?show\u003dnew_reports\u0026menu_id\u003d1096\u0026report_id\u003d57\"",
  "keyword": "When "
});
formatter.match({
  "location": "stepDef_prom.i_go_to(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I checking the table",
  "keyword": "When "
});
formatter.match({
  "location": "stepDef_prom.i_checking_the_table()"
});
formatter.result({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "I login as demo with password reptilian with name Иванов О.З.",
  "keyword": "Given "
});
formatter.match({
  "location": "stepDef_prom.i_login_as_demo_with_password_reptilian_with_name_Иванов_О_З()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Test data existance outline",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@tag"
    },
    {
      "name": "@tag2"
    }
  ]
});
formatter.step({
  "name": "I go to \"http://eaist.mos.ru/analytics/index.php?show\u003dnew_reports\u0026menu_id\u003d1096\u0026report_id\u003d44\"",
  "keyword": "When "
});
formatter.match({
  "location": "stepDef_prom.i_go_to(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I checking the table",
  "keyword": "When "
});
formatter.match({
  "location": "stepDef_prom.i_checking_the_table()"
});
formatter.result({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "I login as demo with password reptilian with name Иванов О.З.",
  "keyword": "Given "
});
formatter.match({
  "location": "stepDef_prom.i_login_as_demo_with_password_reptilian_with_name_Иванов_О_З()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Test data existance outline",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@tag"
    },
    {
      "name": "@tag2"
    }
  ]
});
formatter.step({
  "name": "I go to \"http://eaist.mos.ru/analytics/index.php?show\u003dnew_reports\u0026menu_id\u003d1096\u0026report_id\u003d48\"",
  "keyword": "When "
});
formatter.match({
  "location": "stepDef_prom.i_go_to(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I checking the table",
  "keyword": "When "
});
formatter.match({
  "location": "stepDef_prom.i_checking_the_table()"
});
formatter.result({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "I login as demo with password reptilian with name Иванов О.З.",
  "keyword": "Given "
});
formatter.match({
  "location": "stepDef_prom.i_login_as_demo_with_password_reptilian_with_name_Иванов_О_З()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Test data existance outline",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@tag"
    },
    {
      "name": "@tag2"
    }
  ]
});
formatter.step({
  "name": "I go to \"http://eaist.mos.ru/analytics/index.php?show\u003dnew_reports\u0026menu_id\u003d1096\u0026report_id\u003d50\"",
  "keyword": "When "
});
formatter.match({
  "location": "stepDef_prom.i_go_to(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I checking the table",
  "keyword": "When "
});
formatter.match({
  "location": "stepDef_prom.i_checking_the_table()"
});
formatter.result({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "I login as demo with password reptilian with name Иванов О.З.",
  "keyword": "Given "
});
formatter.match({
  "location": "stepDef_prom.i_login_as_demo_with_password_reptilian_with_name_Иванов_О_З()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Test data existance outline",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@tag"
    },
    {
      "name": "@tag2"
    }
  ]
});
formatter.step({
  "name": "I go to \"http://eaist.mos.ru/analytics/index.php?show\u003dnew_reports\u0026menu_id\u003d1096\u0026report_id\u003d51\"",
  "keyword": "When "
});
formatter.match({
  "location": "stepDef_prom.i_go_to(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I checking the table",
  "keyword": "When "
});
formatter.match({
  "location": "stepDef_prom.i_checking_the_table()"
});
formatter.result({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "I login as demo with password reptilian with name Иванов О.З.",
  "keyword": "Given "
});
formatter.match({
  "location": "stepDef_prom.i_login_as_demo_with_password_reptilian_with_name_Иванов_О_З()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Test data existance outline",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@tag"
    },
    {
      "name": "@tag2"
    }
  ]
});
formatter.step({
  "name": "I go to \"http://eaist.mos.ru/analytics/index.php?show\u003dnew_reports\u0026menu_id\u003d1096\u0026report_id\u003d52\"",
  "keyword": "When "
});
formatter.match({
  "location": "stepDef_prom.i_go_to(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I checking the table",
  "keyword": "When "
});
formatter.match({
  "location": "stepDef_prom.i_checking_the_table()"
});
formatter.result({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "I login as demo with password reptilian with name Иванов О.З.",
  "keyword": "Given "
});
formatter.match({
  "location": "stepDef_prom.i_login_as_demo_with_password_reptilian_with_name_Иванов_О_З()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Test data existance outline",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@tag"
    },
    {
      "name": "@tag2"
    }
  ]
});
formatter.step({
  "name": "I go to \"http://eaist.mos.ru/analytics/index.php?show\u003dnew_reports\u0026menu_id\u003d1096\u0026report_id\u003d53\"",
  "keyword": "When "
});
formatter.match({
  "location": "stepDef_prom.i_go_to(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I checking the table",
  "keyword": "When "
});
formatter.match({
  "location": "stepDef_prom.i_checking_the_table()"
});
formatter.result({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "I login as demo with password reptilian with name Иванов О.З.",
  "keyword": "Given "
});
formatter.match({
  "location": "stepDef_prom.i_login_as_demo_with_password_reptilian_with_name_Иванов_О_З()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Test data existance outline",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@tag"
    },
    {
      "name": "@tag2"
    }
  ]
});
formatter.step({
  "name": "I go to \"http://eaist.mos.ru/analytics/index.php?show\u003dnew_reports\u0026menu_id\u003d1096\u0026report_id\u003d67\"",
  "keyword": "When "
});
formatter.match({
  "location": "stepDef_prom.i_go_to(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I checking the table",
  "keyword": "When "
});
formatter.match({
  "location": "stepDef_prom.i_checking_the_table()"
});
formatter.result({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "I login as demo with password reptilian with name Иванов О.З.",
  "keyword": "Given "
});
formatter.match({
  "location": "stepDef_prom.i_login_as_demo_with_password_reptilian_with_name_Иванов_О_З()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Test data existance outline",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@tag"
    },
    {
      "name": "@tag2"
    }
  ]
});
formatter.step({
  "name": "I go to \"http://eaist.mos.ru/analytics/index.php?show\u003dMrg\u0026menu_id\u003d1800\u0026report_id\u003d1801\"",
  "keyword": "When "
});
formatter.match({
  "location": "stepDef_prom.i_go_to(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I checking the table",
  "keyword": "When "
});
formatter.match({
  "location": "stepDef_prom.i_checking_the_table()"
});
formatter.result({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "I login as demo with password reptilian with name Иванов О.З.",
  "keyword": "Given "
});
formatter.match({
  "location": "stepDef_prom.i_login_as_demo_with_password_reptilian_with_name_Иванов_О_З()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Test data existance outline",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@tag"
    },
    {
      "name": "@tag2"
    }
  ]
});
formatter.step({
  "name": "I go to \"http://eaist.mos.ru/analytics/index.php?show\u003dMrg\u0026menu_id\u003d1800\u0026report_id\u003d1802\"",
  "keyword": "When "
});
formatter.match({
  "location": "stepDef_prom.i_go_to(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I checking the table",
  "keyword": "When "
});
formatter.match({
  "location": "stepDef_prom.i_checking_the_table()"
});
formatter.result({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "I login as demo with password reptilian with name Иванов О.З.",
  "keyword": "Given "
});
formatter.match({
  "location": "stepDef_prom.i_login_as_demo_with_password_reptilian_with_name_Иванов_О_З()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Test data existance outline",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@tag"
    },
    {
      "name": "@tag2"
    }
  ]
});
formatter.step({
  "name": "I go to \"http://eaist.mos.ru/analytics/index.php?show\u003dMrg\u0026menu_id\u003d1800\u0026report_id\u003d1803\"",
  "keyword": "When "
});
formatter.match({
  "location": "stepDef_prom.i_go_to(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I checking the table",
  "keyword": "When "
});
formatter.match({
  "location": "stepDef_prom.i_checking_the_table()"
});
formatter.result({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "I login as demo with password reptilian with name Иванов О.З.",
  "keyword": "Given "
});
formatter.match({
  "location": "stepDef_prom.i_login_as_demo_with_password_reptilian_with_name_Иванов_О_З()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Test data existance outline",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@tag"
    },
    {
      "name": "@tag2"
    }
  ]
});
formatter.step({
  "name": "I go to \"http://eaist.mos.ru/analytics/index.php?show\u003dMrg\u0026menu_id\u003d1800\u0026report_id\u003d1804\"",
  "keyword": "When "
});
formatter.match({
  "location": "stepDef_prom.i_go_to(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I checking the table",
  "keyword": "When "
});
formatter.match({
  "location": "stepDef_prom.i_checking_the_table()"
});
formatter.result({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "I login as demo with password reptilian with name Иванов О.З.",
  "keyword": "Given "
});
formatter.match({
  "location": "stepDef_prom.i_login_as_demo_with_password_reptilian_with_name_Иванов_О_З()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Test data existance outline",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@tag"
    },
    {
      "name": "@tag2"
    }
  ]
});
formatter.step({
  "name": "I go to \"http://eaist.mos.ru/analytics/index.php?show\u003dMrg\u0026menu_id\u003d1800\u0026report_id\u003d1805\"",
  "keyword": "When "
});
formatter.match({
  "location": "stepDef_prom.i_go_to(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I checking the table",
  "keyword": "When "
});
formatter.match({
  "location": "stepDef_prom.i_checking_the_table()"
});
formatter.result({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "I login as demo with password reptilian with name Иванов О.З.",
  "keyword": "Given "
});
formatter.match({
  "location": "stepDef_prom.i_login_as_demo_with_password_reptilian_with_name_Иванов_О_З()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Test data existance outline",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@tag"
    },
    {
      "name": "@tag2"
    }
  ]
});
formatter.step({
  "name": "I go to \"http://eaist.mos.ru/analytics/index.php?show\u003dTreeContract\u0026menu_id\u003d1600\"",
  "keyword": "When "
});
formatter.match({
  "location": "stepDef_prom.i_go_to(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I checking the table",
  "keyword": "When "
});
formatter.match({
  "location": "stepDef_prom.i_checking_the_table()"
});
formatter.result({
  "error_message": "Element not found {#creport-grid \u003e div.grid-table-wrap \u003e table}\nExpected: visible\nScreenshot: file:/D:/eclipse_workspace/Cucumber_EAIST/build/reports/tests/1520836983864.2.png\nPage source: file:/D:/eclipse_workspace/Cucumber_EAIST/build/reports/tests/1520836983864.2.html\nTimeout: 90 s.\nCaused by: NoSuchElementException: no such element: Unable to locate element: {\"method\":\"css selector\",\"selector\":\"#creport-grid \u003e div.grid-table-wrap \u003e table\"}\r\n\tat com.codeborne.selenide.impl.WebElementSource.createElementNotFoundError(WebElementSource.java:31)\r\n\tat com.codeborne.selenide.impl.ElementFinder.createElementNotFoundError(ElementFinder.java:82)\r\n\tat com.codeborne.selenide.impl.WebElementSource.checkCondition(WebElementSource.java:59)\r\n\tat com.codeborne.selenide.commands.Should.should(Should.java:35)\r\n\tat com.codeborne.selenide.commands.Should.execute(Should.java:29)\r\n\tat com.codeborne.selenide.commands.Should.execute(Should.java:12)\r\n\tat com.codeborne.selenide.commands.Commands.execute(Commands.java:143)\r\n\tat com.codeborne.selenide.impl.SelenideElementProxy.dispatchAndRetry(SelenideElementProxy.java:87)\r\n\tat com.codeborne.selenide.impl.SelenideElementProxy.invoke(SelenideElementProxy.java:63)\r\n\tat com.sun.proxy.$Proxy12.shouldBe(Unknown Source)\r\n\tat stepDefinition_prom.stepDef_prom.i_checking_the_table(stepDef_prom.java:38)\r\n\tat ✽.I checking the table(src/Features/testDataExistence_prom.feature:10)\r\nCaused by: org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"css selector\",\"selector\":\"#creport-grid \u003e div.grid-table-wrap \u003e table\"}\n  (Session info: chrome\u003d64.0.3282.186)\n  (Driver info: chromedriver\u003d2.35.528161 (5b82f2d2aae0ca24b877009200ced9065a772e73),platform\u003dWindows NT 6.3.9600 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 0 milliseconds\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.8.1\u0027, revision: \u00276e95a6684b\u0027, time: \u00272017-12-01T19:05:32.194Z\u0027\nSystem info: host: \u0027PRM-WS-0159\u0027, ip: \u002710.242.4.214\u0027, os.name: \u0027Windows 8.1\u0027, os.arch: \u0027x86\u0027, os.version: \u00276.3\u0027, java.version: \u00271.8.0_151\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, acceptSslCerts: false, applicationCacheEnabled: false, browserConnectionEnabled: false, browserName: chrome, chrome: {chromedriverVersion: 2.35.528161 (5b82f2d2aae0ca..., userDataDir: C:\\Users\\starikov\\AppData\\L...}, cssSelectorsEnabled: true, databaseEnabled: false, handlesAlerts: true, hasTouchScreen: false, javascriptEnabled: true, locationContextEnabled: true, mobileEmulationEnabled: false, nativeEvents: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: XP, platformName: XP, rotatable: false, setWindowRect: true, takesHeapSnapshot: true, takesScreenshot: true, unexpectedAlertBehaviour: , unhandledPromptBehavior: , version: 64.0.3282.186, webStorageEnabled: true}\nSession ID: c1a9406fc64887061d51bc21c7f826e0\n*** Element info: {Using\u003dcss selector, value\u003d#creport-grid \u003e div.grid-table-wrap \u003e table}\r\n\tat sun.reflect.GeneratedConstructorAccessor9.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:214)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:166)\r\n\tat org.openqa.selenium.remote.http.JsonHttpResponseCodec.reconstructValue(JsonHttpResponseCodec.java:40)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:80)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:44)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:164)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:601)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:371)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByCssSelector(RemoteWebDriver.java:465)\r\n\tat org.openqa.selenium.By$ByCssSelector.findElement(By.java:430)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:363)\r\n\tat com.codeborne.selenide.impl.WebElementSelector.findElement(WebElementSelector.java:28)\r\n\tat com.codeborne.selenide.impl.ElementFinder.getWebElement(ElementFinder.java:56)\r\n\tat com.codeborne.selenide.impl.WebElementSource.checkCondition(WebElementSource.java:44)\r\n\tat com.codeborne.selenide.commands.Should.should(Should.java:35)\r\n\tat com.codeborne.selenide.commands.Should.execute(Should.java:29)\r\n\tat com.codeborne.selenide.commands.Should.execute(Should.java:12)\r\n\tat com.codeborne.selenide.commands.Commands.execute(Commands.java:143)\r\n\tat com.codeborne.selenide.impl.SelenideElementProxy.dispatchAndRetry(SelenideElementProxy.java:87)\r\n\tat com.codeborne.selenide.impl.SelenideElementProxy.invoke(SelenideElementProxy.java:63)\r\n\tat com.sun.proxy.$Proxy12.shouldBe(Unknown Source)\r\n\tat stepDefinition_prom.stepDef_prom.i_checking_the_table(stepDef_prom.java:38)\r\n\tat sun.reflect.GeneratedMethodAccessor3.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:32)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:26)\r\n\tat cucumber.runtime.java.JavaStepDefinition.execute(JavaStepDefinition.java:37)\r\n\tat cucumber.runtime.StepDefinitionMatch.runStep(StepDefinitionMatch.java:40)\r\n\tat cucumber.api.TestStep.executeStep(TestStep.java:102)\r\n\tat cucumber.api.TestStep.run(TestStep.java:83)\r\n\tat cucumber.api.TestCase.run(TestCase.java:58)\r\n\tat cucumber.runner.Runner.runPickle(Runner.java:80)\r\n\tat cucumber.runtime.junit.PickleRunners$NoStepDescriptions.run(PickleRunners.java:140)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:68)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:23)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:73)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:117)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:55)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat cucumber.api.junit.Cucumber$1.evaluate(Cucumber.java:126)\r\n\tat org.junit.internal.runners.statements.RunBefores.evaluate(RunBefores.java:26)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat org.eclipse.jdt.internal.junit4.runner.JUnit4TestReference.run(JUnit4TestReference.java:86)\r\n\tat org.eclipse.jdt.internal.junit.runner.TestExecution.run(TestExecution.java:38)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:459)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:675)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.run(RemoteTestRunner.java:382)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.main(RemoteTestRunner.java:192)\r\n",
  "status": "failed"
});
formatter.uri("src/Features/testExport.feature");
formatter.feature({
  "name": "Test export",
  "description": "  I want to check if export work well",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@tag"
    }
  ]
});
formatter.scenarioOutline({
  "name": "Title of your scenario outline",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@tag1"
    }
  ]
});
formatter.step({
  "name": "I go throught \u003ctable\u003e",
  "keyword": "Given "
});
formatter.step({
  "name": "I click on exportBtn",
  "keyword": "When "
});
formatter.step({
  "name": "choose \u003cfileFormat\u003e from comboBox",
  "keyword": "And "
});
formatter.step({
  "name": "I see ok message",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "table",
        "fileFormat"
      ]
    },
    {
      "cells": [
        "\"http://eaistan-dev.proitr.ru/index.php?show\u003drating\u0026menu_id\u003d21\"",
        "\"#lt_print_1\""
      ]
    },
    {
      "cells": [
        "\"http://eaistan-dev.proitr.ru/index.php?show\u003dExpertNMC\u0026menu_id\u003d1500\u0026report_id\u003d56\"",
        "\"#lt_print_2\""
      ]
    },
    {
      "cells": [
        "\"http://eaistan-dev.proitr.ru/index.php?show\u003dExpertNMC\u0026menu_id\u003d1500\u0026report_id\u003d1501\"",
        "\"#lt_print_3\""
      ]
    },
    {
      "cells": [
        "\"http://eaistan-dev.proitr.ru/index.php?show\u003dExpertNMC\u0026menu_id\u003d1500\u0026report_id\u003d1505\"",
        "\"#lt_print_4\""
      ]
    },
    {
      "cells": [
        "\"http://eaistan-dev.proitr.ru/index.php?show\u003dExpertNMC\u0026menu_id\u003d1500\u0026report_id\u003d1506\"",
        ""
      ]
    },
    {
      "cells": [
        "\"http://eaistan-dev.proitr.ru/index.php?show\u003dKpgzSpgz\u0026menu_id\u003d1503\u0026report_id\u003d54\"",
        ""
      ]
    },
    {
      "cells": [
        "\"http://eaistan-dev.proitr.ru/index.php?show\u003dKpgzSpgz\u0026menu_id\u003d1503\u0026report_id\u003d1504\"",
        ""
      ]
    },
    {
      "cells": [
        "\"http://eaistan-dev.proitr.ru/index.php?show\u003dKpgzSpgz\u0026menu_id\u003d1503\u0026report_id\u003d1507\"",
        ""
      ]
    },
    {
      "cells": [
        "\"http://eaistan-dev.proitr.ru/index.php?show\u003dKpgzSpgz\u0026menu_id\u003d1503\u0026report_id\u003d1509\"",
        ""
      ]
    },
    {
      "cells": [
        "\"http://eaistan-dev.proitr.ru/index.php?show\u003dAdministration\u0026menu_id\u003d1700\u0026report_id\u003d1701\"",
        ""
      ]
    },
    {
      "cells": [
        "\"http://eaistan-dev.proitr.ru/index.php?show\u003dAdministration\u0026menu_id\u003d1700\u0026report_id\u003d1702\"",
        ""
      ]
    },
    {
      "cells": [
        "\"http://eaistan-dev.proitr.ru/index.php?show\u003dAdministration\u0026menu_id\u003d1700\u0026report_id\u003d1703\"",
        ""
      ]
    },
    {
      "cells": [
        "\"http://eaistan-dev.proitr.ru/index.php?show\u003dAdministration\u0026menu_id\u003d1700\u0026report_id\u003d1704\"",
        ""
      ]
    },
    {
      "cells": [
        "\"http://eaistan-dev.proitr.ru/index.php?show\u003dnew_reports\u0026menu_id\u003d1096\u0026report_id\u003d49\"",
        ""
      ]
    },
    {
      "cells": [
        "\"http://eaistan-dev.proitr.ru/index.php?show\u003dnew_reports\u0026menu_id\u003d1096\u0026report_id\u003d47\"",
        ""
      ]
    },
    {
      "cells": [
        "\"http://eaistan-dev.proitr.ru/index.php?show\u003dnew_reports\u0026menu_id\u003d1096\u0026report_id\u003d46\"",
        ""
      ]
    },
    {
      "cells": [
        "\"http://eaistan-dev.proitr.ru/index.php?show\u003dnew_reports\u0026menu_id\u003d1096\u0026report_id\u003d57\"",
        ""
      ]
    },
    {
      "cells": [
        "\"http://eaistan-dev.proitr.ru/index.php?show\u003dnew_reports\u0026menu_id\u003d1096\u0026report_id\u003d44\"",
        ""
      ]
    },
    {
      "cells": [
        "\"http://eaistan-dev.proitr.ru/index.php?show\u003dnew_reports\u0026menu_id\u003d1096\u0026report_id\u003d48\"",
        ""
      ]
    },
    {
      "cells": [
        "\"http://eaistan-dev.proitr.ru/index.php?show\u003dnew_reports\u0026menu_id\u003d1096\u0026report_id\u003d50\"",
        ""
      ]
    },
    {
      "cells": [
        "\"http://eaistan-dev.proitr.ru/index.php?show\u003dnew_reports\u0026menu_id\u003d1096\u0026report_id\u003d51\"",
        ""
      ]
    },
    {
      "cells": [
        "\"http://eaistan-dev.proitr.ru/index.php?show\u003dnew_reports\u0026menu_id\u003d1096\u0026report_id\u003d52\"",
        ""
      ]
    },
    {
      "cells": [
        "\"http://eaistan-dev.proitr.ru/index.php?show\u003dnew_reports\u0026menu_id\u003d1096\u0026report_id\u003d53\"",
        ""
      ]
    },
    {
      "cells": [
        "\"http://eaistan-dev.proitr.ru/index.php?show\u003dnew_reports\u0026menu_id\u003d1096\u0026report_id\u003d67\"",
        ""
      ]
    },
    {
      "cells": [
        "\"http://eaistan-dev.proitr.ru/index.php?show\u003dMrg\u0026menu_id\u003d1800\u0026report_id\u003d1801\"",
        ""
      ]
    },
    {
      "cells": [
        "\"http://eaistan-dev.proitr.ru/index.php?show\u003dMrg\u0026menu_id\u003d1800\u0026report_id\u003d1802\"",
        ""
      ]
    },
    {
      "cells": [
        "\"http://eaistan-dev.proitr.ru/index.php?show\u003dMrg\u0026menu_id\u003d1800\u0026report_id\u003d1803\"",
        ""
      ]
    },
    {
      "cells": [
        "\"http://eaistan-dev.proitr.ru/index.php?show\u003dMrg\u0026menu_id\u003d1800\u0026report_id\u003d1804\"",
        ""
      ]
    },
    {
      "cells": [
        "\"http://eaistan-dev.proitr.ru/index.php?show\u003dMrg\u0026menu_id\u003d1800\u0026report_id\u003d1805\"",
        ""
      ]
    },
    {
      "cells": [
        "\"http://eaistan-dev.proitr.ru/index.php?show\u003dTreeContract\u0026menu_id\u003d1600\"",
        ""
      ]
    }
  ]
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "I login as demo with password demo",
  "keyword": "Given "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.scenario({
  "name": "Title of your scenario outline",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@tag"
    },
    {
      "name": "@tag1"
    }
  ]
});
formatter.step({
  "name": "I go throught \"http://eaistan-dev.proitr.ru/index.php?show\u003drating\u0026menu_id\u003d21\"",
  "keyword": "Given "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "I click on exportBtn",
  "keyword": "When "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "choose \"#lt_print_1\" from comboBox",
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "I see ok message",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "I login as demo with password demo",
  "keyword": "Given "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.scenario({
  "name": "Title of your scenario outline",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@tag"
    },
    {
      "name": "@tag1"
    }
  ]
});
formatter.step({
  "name": "I go throught \"http://eaistan-dev.proitr.ru/index.php?show\u003dExpertNMC\u0026menu_id\u003d1500\u0026report_id\u003d56\"",
  "keyword": "Given "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "I click on exportBtn",
  "keyword": "When "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "choose \"#lt_print_2\" from comboBox",
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "I see ok message",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "I login as demo with password demo",
  "keyword": "Given "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.scenario({
  "name": "Title of your scenario outline",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@tag"
    },
    {
      "name": "@tag1"
    }
  ]
});
formatter.step({
  "name": "I go throught \"http://eaistan-dev.proitr.ru/index.php?show\u003dExpertNMC\u0026menu_id\u003d1500\u0026report_id\u003d1501\"",
  "keyword": "Given "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "I click on exportBtn",
  "keyword": "When "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "choose \"#lt_print_3\" from comboBox",
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "I see ok message",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "I login as demo with password demo",
  "keyword": "Given "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.scenario({
  "name": "Title of your scenario outline",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@tag"
    },
    {
      "name": "@tag1"
    }
  ]
});
formatter.step({
  "name": "I go throught \"http://eaistan-dev.proitr.ru/index.php?show\u003dExpertNMC\u0026menu_id\u003d1500\u0026report_id\u003d1505\"",
  "keyword": "Given "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "I click on exportBtn",
  "keyword": "When "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "choose \"#lt_print_4\" from comboBox",
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "I see ok message",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "I login as demo with password demo",
  "keyword": "Given "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.scenario({
  "name": "Title of your scenario outline",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@tag"
    },
    {
      "name": "@tag1"
    }
  ]
});
formatter.step({
  "name": "I go throught \"http://eaistan-dev.proitr.ru/index.php?show\u003dExpertNMC\u0026menu_id\u003d1500\u0026report_id\u003d1506\"",
  "keyword": "Given "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "I click on exportBtn",
  "keyword": "When "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "choose  from comboBox",
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "I see ok message",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "I login as demo with password demo",
  "keyword": "Given "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.scenario({
  "name": "Title of your scenario outline",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@tag"
    },
    {
      "name": "@tag1"
    }
  ]
});
formatter.step({
  "name": "I go throught \"http://eaistan-dev.proitr.ru/index.php?show\u003dKpgzSpgz\u0026menu_id\u003d1503\u0026report_id\u003d54\"",
  "keyword": "Given "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "I click on exportBtn",
  "keyword": "When "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "choose  from comboBox",
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "I see ok message",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "I login as demo with password demo",
  "keyword": "Given "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.scenario({
  "name": "Title of your scenario outline",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@tag"
    },
    {
      "name": "@tag1"
    }
  ]
});
formatter.step({
  "name": "I go throught \"http://eaistan-dev.proitr.ru/index.php?show\u003dKpgzSpgz\u0026menu_id\u003d1503\u0026report_id\u003d1504\"",
  "keyword": "Given "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "I click on exportBtn",
  "keyword": "When "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "choose  from comboBox",
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "I see ok message",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "I login as demo with password demo",
  "keyword": "Given "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.scenario({
  "name": "Title of your scenario outline",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@tag"
    },
    {
      "name": "@tag1"
    }
  ]
});
formatter.step({
  "name": "I go throught \"http://eaistan-dev.proitr.ru/index.php?show\u003dKpgzSpgz\u0026menu_id\u003d1503\u0026report_id\u003d1507\"",
  "keyword": "Given "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "I click on exportBtn",
  "keyword": "When "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "choose  from comboBox",
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "I see ok message",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "I login as demo with password demo",
  "keyword": "Given "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.scenario({
  "name": "Title of your scenario outline",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@tag"
    },
    {
      "name": "@tag1"
    }
  ]
});
formatter.step({
  "name": "I go throught \"http://eaistan-dev.proitr.ru/index.php?show\u003dKpgzSpgz\u0026menu_id\u003d1503\u0026report_id\u003d1509\"",
  "keyword": "Given "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "I click on exportBtn",
  "keyword": "When "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "choose  from comboBox",
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "I see ok message",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "I login as demo with password demo",
  "keyword": "Given "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.scenario({
  "name": "Title of your scenario outline",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@tag"
    },
    {
      "name": "@tag1"
    }
  ]
});
formatter.step({
  "name": "I go throught \"http://eaistan-dev.proitr.ru/index.php?show\u003dAdministration\u0026menu_id\u003d1700\u0026report_id\u003d1701\"",
  "keyword": "Given "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "I click on exportBtn",
  "keyword": "When "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "choose  from comboBox",
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "I see ok message",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "I login as demo with password demo",
  "keyword": "Given "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.scenario({
  "name": "Title of your scenario outline",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@tag"
    },
    {
      "name": "@tag1"
    }
  ]
});
formatter.step({
  "name": "I go throught \"http://eaistan-dev.proitr.ru/index.php?show\u003dAdministration\u0026menu_id\u003d1700\u0026report_id\u003d1702\"",
  "keyword": "Given "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "I click on exportBtn",
  "keyword": "When "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "choose  from comboBox",
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "I see ok message",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "I login as demo with password demo",
  "keyword": "Given "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.scenario({
  "name": "Title of your scenario outline",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@tag"
    },
    {
      "name": "@tag1"
    }
  ]
});
formatter.step({
  "name": "I go throught \"http://eaistan-dev.proitr.ru/index.php?show\u003dAdministration\u0026menu_id\u003d1700\u0026report_id\u003d1703\"",
  "keyword": "Given "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "I click on exportBtn",
  "keyword": "When "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "choose  from comboBox",
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "I see ok message",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "I login as demo with password demo",
  "keyword": "Given "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.scenario({
  "name": "Title of your scenario outline",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@tag"
    },
    {
      "name": "@tag1"
    }
  ]
});
formatter.step({
  "name": "I go throught \"http://eaistan-dev.proitr.ru/index.php?show\u003dAdministration\u0026menu_id\u003d1700\u0026report_id\u003d1704\"",
  "keyword": "Given "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "I click on exportBtn",
  "keyword": "When "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "choose  from comboBox",
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "I see ok message",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "I login as demo with password demo",
  "keyword": "Given "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.scenario({
  "name": "Title of your scenario outline",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@tag"
    },
    {
      "name": "@tag1"
    }
  ]
});
formatter.step({
  "name": "I go throught \"http://eaistan-dev.proitr.ru/index.php?show\u003dnew_reports\u0026menu_id\u003d1096\u0026report_id\u003d49\"",
  "keyword": "Given "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "I click on exportBtn",
  "keyword": "When "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "choose  from comboBox",
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "I see ok message",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "I login as demo with password demo",
  "keyword": "Given "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.scenario({
  "name": "Title of your scenario outline",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@tag"
    },
    {
      "name": "@tag1"
    }
  ]
});
formatter.step({
  "name": "I go throught \"http://eaistan-dev.proitr.ru/index.php?show\u003dnew_reports\u0026menu_id\u003d1096\u0026report_id\u003d47\"",
  "keyword": "Given "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "I click on exportBtn",
  "keyword": "When "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "choose  from comboBox",
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "I see ok message",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "I login as demo with password demo",
  "keyword": "Given "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.scenario({
  "name": "Title of your scenario outline",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@tag"
    },
    {
      "name": "@tag1"
    }
  ]
});
formatter.step({
  "name": "I go throught \"http://eaistan-dev.proitr.ru/index.php?show\u003dnew_reports\u0026menu_id\u003d1096\u0026report_id\u003d46\"",
  "keyword": "Given "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "I click on exportBtn",
  "keyword": "When "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "choose  from comboBox",
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "I see ok message",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "I login as demo with password demo",
  "keyword": "Given "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.scenario({
  "name": "Title of your scenario outline",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@tag"
    },
    {
      "name": "@tag1"
    }
  ]
});
formatter.step({
  "name": "I go throught \"http://eaistan-dev.proitr.ru/index.php?show\u003dnew_reports\u0026menu_id\u003d1096\u0026report_id\u003d57\"",
  "keyword": "Given "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "I click on exportBtn",
  "keyword": "When "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "choose  from comboBox",
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "I see ok message",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "I login as demo with password demo",
  "keyword": "Given "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.scenario({
  "name": "Title of your scenario outline",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@tag"
    },
    {
      "name": "@tag1"
    }
  ]
});
formatter.step({
  "name": "I go throught \"http://eaistan-dev.proitr.ru/index.php?show\u003dnew_reports\u0026menu_id\u003d1096\u0026report_id\u003d44\"",
  "keyword": "Given "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "I click on exportBtn",
  "keyword": "When "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "choose  from comboBox",
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "I see ok message",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "I login as demo with password demo",
  "keyword": "Given "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.scenario({
  "name": "Title of your scenario outline",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@tag"
    },
    {
      "name": "@tag1"
    }
  ]
});
formatter.step({
  "name": "I go throught \"http://eaistan-dev.proitr.ru/index.php?show\u003dnew_reports\u0026menu_id\u003d1096\u0026report_id\u003d48\"",
  "keyword": "Given "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "I click on exportBtn",
  "keyword": "When "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "choose  from comboBox",
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "I see ok message",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "I login as demo with password demo",
  "keyword": "Given "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.scenario({
  "name": "Title of your scenario outline",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@tag"
    },
    {
      "name": "@tag1"
    }
  ]
});
formatter.step({
  "name": "I go throught \"http://eaistan-dev.proitr.ru/index.php?show\u003dnew_reports\u0026menu_id\u003d1096\u0026report_id\u003d50\"",
  "keyword": "Given "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "I click on exportBtn",
  "keyword": "When "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "choose  from comboBox",
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "I see ok message",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "I login as demo with password demo",
  "keyword": "Given "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.scenario({
  "name": "Title of your scenario outline",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@tag"
    },
    {
      "name": "@tag1"
    }
  ]
});
formatter.step({
  "name": "I go throught \"http://eaistan-dev.proitr.ru/index.php?show\u003dnew_reports\u0026menu_id\u003d1096\u0026report_id\u003d51\"",
  "keyword": "Given "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "I click on exportBtn",
  "keyword": "When "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "choose  from comboBox",
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "I see ok message",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "I login as demo with password demo",
  "keyword": "Given "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.scenario({
  "name": "Title of your scenario outline",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@tag"
    },
    {
      "name": "@tag1"
    }
  ]
});
formatter.step({
  "name": "I go throught \"http://eaistan-dev.proitr.ru/index.php?show\u003dnew_reports\u0026menu_id\u003d1096\u0026report_id\u003d52\"",
  "keyword": "Given "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "I click on exportBtn",
  "keyword": "When "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "choose  from comboBox",
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "I see ok message",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "I login as demo with password demo",
  "keyword": "Given "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.scenario({
  "name": "Title of your scenario outline",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@tag"
    },
    {
      "name": "@tag1"
    }
  ]
});
formatter.step({
  "name": "I go throught \"http://eaistan-dev.proitr.ru/index.php?show\u003dnew_reports\u0026menu_id\u003d1096\u0026report_id\u003d53\"",
  "keyword": "Given "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "I click on exportBtn",
  "keyword": "When "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "choose  from comboBox",
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "I see ok message",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "I login as demo with password demo",
  "keyword": "Given "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.scenario({
  "name": "Title of your scenario outline",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@tag"
    },
    {
      "name": "@tag1"
    }
  ]
});
formatter.step({
  "name": "I go throught \"http://eaistan-dev.proitr.ru/index.php?show\u003dnew_reports\u0026menu_id\u003d1096\u0026report_id\u003d67\"",
  "keyword": "Given "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "I click on exportBtn",
  "keyword": "When "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "choose  from comboBox",
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "I see ok message",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "I login as demo with password demo",
  "keyword": "Given "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.scenario({
  "name": "Title of your scenario outline",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@tag"
    },
    {
      "name": "@tag1"
    }
  ]
});
formatter.step({
  "name": "I go throught \"http://eaistan-dev.proitr.ru/index.php?show\u003dMrg\u0026menu_id\u003d1800\u0026report_id\u003d1801\"",
  "keyword": "Given "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "I click on exportBtn",
  "keyword": "When "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "choose  from comboBox",
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "I see ok message",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "I login as demo with password demo",
  "keyword": "Given "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.scenario({
  "name": "Title of your scenario outline",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@tag"
    },
    {
      "name": "@tag1"
    }
  ]
});
formatter.step({
  "name": "I go throught \"http://eaistan-dev.proitr.ru/index.php?show\u003dMrg\u0026menu_id\u003d1800\u0026report_id\u003d1802\"",
  "keyword": "Given "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "I click on exportBtn",
  "keyword": "When "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "choose  from comboBox",
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "I see ok message",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "I login as demo with password demo",
  "keyword": "Given "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.scenario({
  "name": "Title of your scenario outline",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@tag"
    },
    {
      "name": "@tag1"
    }
  ]
});
formatter.step({
  "name": "I go throught \"http://eaistan-dev.proitr.ru/index.php?show\u003dMrg\u0026menu_id\u003d1800\u0026report_id\u003d1803\"",
  "keyword": "Given "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "I click on exportBtn",
  "keyword": "When "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "choose  from comboBox",
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "I see ok message",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "I login as demo with password demo",
  "keyword": "Given "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.scenario({
  "name": "Title of your scenario outline",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@tag"
    },
    {
      "name": "@tag1"
    }
  ]
});
formatter.step({
  "name": "I go throught \"http://eaistan-dev.proitr.ru/index.php?show\u003dMrg\u0026menu_id\u003d1800\u0026report_id\u003d1804\"",
  "keyword": "Given "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "I click on exportBtn",
  "keyword": "When "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "choose  from comboBox",
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "I see ok message",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "I login as demo with password demo",
  "keyword": "Given "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.scenario({
  "name": "Title of your scenario outline",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@tag"
    },
    {
      "name": "@tag1"
    }
  ]
});
formatter.step({
  "name": "I go throught \"http://eaistan-dev.proitr.ru/index.php?show\u003dMrg\u0026menu_id\u003d1800\u0026report_id\u003d1805\"",
  "keyword": "Given "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "I click on exportBtn",
  "keyword": "When "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "choose  from comboBox",
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "I see ok message",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "I login as demo with password demo",
  "keyword": "Given "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.scenario({
  "name": "Title of your scenario outline",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@tag"
    },
    {
      "name": "@tag1"
    }
  ]
});
formatter.step({
  "name": "I go throught \"http://eaistan-dev.proitr.ru/index.php?show\u003dTreeContract\u0026menu_id\u003d1600\"",
  "keyword": "Given "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "I click on exportBtn",
  "keyword": "When "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "choose  from comboBox",
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "I see ok message",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
});