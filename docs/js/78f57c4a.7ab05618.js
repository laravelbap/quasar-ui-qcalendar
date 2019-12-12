(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["78f57c4a"],{3173:function(a,t,n){"use strict";n.r(t),t["default"]="<template>\n  <q-calendar\n    v-model=\"selectedDate\"\n    view=\"week-agenda\"\n    :weekdays=\"[1,2,3,4,5]\"\n    locale=\"en-us\"\n    style=\"height: 400px;\"\n  >\n    <template #day-body=\"day\">\n      <template v-for=\"(agenda) in getAgenda(day)\">\n        <div\n          :key=\"day.date + agenda.time\"\n          :label=\"agenda.time\"\n          class=\"justify-start q-ma-sm shadow-5 bg-grey-6\"\n        >\n          <div v-if=\"agenda.avatar\" class=\"row justify-center\" style=\"margin-top: 30px; width: 100%;\">\n            <q-avatar style=\"margin-top: -25px; margin-bottom: 10px; font-size: 60px; max-height: 50px;\">\n              <img :src=\"agenda.avatar\" style=\"border: #9e9e9e solid 5px;\">\n            </q-avatar>\n          </div>\n          <div class=\"col-12 q-px-sm\">\n            <strong>{{ agenda.time }}</strong>\n          </div>\n          <div v-if=\"agenda.desc\" class=\"col-12 q-px-sm\" style=\"font-size: 10px;\">\n            {{ agenda.desc }}\n          </div>\n        </div>\n      </template>\n    </template>\n  </q-calendar>\n</template>\n\n<script>\nexport default {\n  data () {\n    return {\n      selectedDate: '',\n      agenda: {\n        // value represents day of the week\n        1: [\n          {\n            time: '08:00',\n            avatar: 'https://cdn.quasar.dev/img/boy-avatar.png',\n            desc: 'Meeting with CEO'\n          },\n          {\n            time: '08:30',\n            avatar: 'https://cdn.quasar.dev/img/avatar.png',\n            desc: 'Meeting with HR'\n          },\n          {\n            time: '10:00',\n            avatar: 'https://cdn.quasar.dev/img/avatar1.jpg',\n            desc: 'Meeting with Karen'\n          }\n        ],\n        2: [\n          {\n            time: '11:30',\n            avatar: 'https://cdn.quasar.dev/img/avatar2.jpg',\n            desc: 'Meeting with Alisha'\n          },\n          {\n            time: '17:00',\n            avatar: 'https://cdn.quasar.dev/img/avatar3.jpg',\n            desc: 'Meeting with Sarah'\n          }\n        ],\n        3: [\n          {\n            time: '08:00',\n            desc: 'Stand-up SCRUM',\n            avatar: 'https://cdn.quasar.dev/img/material.png'\n          },\n          {\n            time: '09:00',\n            avatar: 'https://cdn.quasar.dev/img/boy-avatar.png'\n          },\n          {\n            time: '10:00',\n            desc: 'Sprint planning',\n            avatar: 'https://cdn.quasar.dev/img/material.png'\n          },\n          {\n            time: '13:00',\n            avatar: 'https://cdn.quasar.dev/img/avatar1.jpg'\n          }\n        ],\n        4: [\n          {\n            time: '09:00',\n            avatar: 'https://cdn.quasar.dev/img/avatar3.jpg'\n          },\n          {\n            time: '10:00',\n            avatar: 'https://cdn.quasar.dev/img/avatar2.jpg'\n          },\n          {\n            time: '13:00',\n            avatar: 'https://cdn.quasar.dev/img/material.png'\n          }\n        ],\n        5: [\n          {\n            time: '08:00',\n            avatar: 'https://cdn.quasar.dev/img/boy-avatar.png'\n          },\n          {\n            time: '09:00',\n            avatar: 'https://cdn.quasar.dev/img/avatar2.jpg'\n          },\n          {\n            time: '09:30',\n            avatar: 'https://cdn.quasar.dev/img/avatar4.jpg'\n          },\n          {\n            time: '10:00',\n            avatar: 'https://cdn.quasar.dev/img/avatar5.jpg'\n          },\n          {\n            time: '11:30',\n            avatar: 'https://cdn.quasar.dev/img/material.png'\n          },\n          {\n            time: '13:00',\n            avatar: 'https://cdn.quasar.dev/img/avatar6.jpg'\n          },\n          {\n            time: '13:30',\n            avatar: 'https://cdn.quasar.dev/img/avatar3.jpg'\n          },\n          {\n            time: '14:00',\n            avatar: 'https://cdn.quasar.dev/img/linux-avatar.png'\n          },\n          {\n            time: '14:30',\n            avatar: 'https://cdn.quasar.dev/img/avatar.png'\n          },\n          {\n            time: '15:00',\n            avatar: 'https://cdn.quasar.dev/img/boy-avatar.png'\n          },\n          {\n            time: '15:30',\n            avatar: 'https://cdn.quasar.dev/img/avatar2.jpg'\n          },\n          {\n            time: '16:00',\n            avatar: 'https://cdn.quasar.dev/img/avatar6.jpg'\n          }\n        ]\n      }\n    }\n  },\n\n  methods: {\n    getAgenda (day) {\n      return this.agenda[parseInt(day.weekday, 10)]\n    }\n  }\n}\n<\/script>\n"},"5a6d":function(a,t,n){"use strict";n.r(t);var e=function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("div",{staticClass:"q-markdown"},[e("example-title",{attrs:{title:"Agenda View"}}),e("q-markdown",[a._v("\nThe `agenda` views by themselves are rather boring. It's up to the developer to fill the content via the `day-body` slot (more about this below).\n    ")]),e("example-card",{attrs:{title:"Basic",name:"AgendaViewBasic","tag-parts":a.getTagParts(n("fac8").default)}}),e("example-card",{attrs:{title:"Agenda View (week) - Basic",name:"AgendaViewWeekBasic","tag-parts":a.getTagParts(n("94c0").default)}}),e("example-card",{attrs:{title:"Slots",name:"AgendaViewWeekSlots","tag-parts":a.getTagParts(n("a843").default)}},[e("q-markdown",[a._v("\nWe are going to jump right into slot usage so that for the rest of the examples we have content that can be displayed.\n\nFor slots that return `day` or `timestamp`, it looks like this:\n```js\n{\n  date: '',       // YYYY-mm-dd\n  time: '',       // 00:00:00 (optional)\n  year: 0,        // YYYY\n  month: 0,       // mm (Jan = 1, etc)\n  day: 0,         // day of the month\n  weekday: 0,     // week day\n  hour: 0,        // 24-hr\n  minute: 0,      // mm\n  doy: 0,         // day of year\n  workweek: 0,    // workweek number\n  hasDay: false,  // if this timestamp is supposed to have a date\n  hasTime: false, // if this timestamp is supposed to have a time\n  past: false,    // if timestamp is in the past (based on `now` property)\n  current: false, // if timestamp is current date (based on `now` property)\n  future: false   // if timestamp is in the future (based on `now` property)\n}\n```\n      ")])],1),e("example-card",{attrs:{title:"First Day Monday",name:"AgendaViewWeekFirstDayMonday","tag-parts":a.getTagParts(n("7b28").default)}}),e("example-card",{attrs:{title:"Five Day Workweek",name:"AgendaViewWeekFiveDayWorkweek","tag-parts":a.getTagParts(n("3173").default)}})],1)},r=[],s=n("fe7d"),i=n("74ba"),d=n("8669"),p=n("ad53"),m={name:"AgendaView",components:{ExampleTitle:s["a"],ExampleCard:i["a"]},data:function(){return{tempToc:[]}},mounted:function(){this.toc=[],this.tempToc=[],this.addToToc("Agenda View"),this.addToToc("Basic",2),this.addToToc("Agenda View (week) - Basic",2),this.addToToc("Slots",2),this.addToToc("First Day Monday",2),this.addToToc("Five Day Workweek",2),this.toc=this.tempToc},computed:{toc:{get:function(){return this.$store.state.common.toc},set:function(a){this.$store.commit("common/toc",a)}}},methods:{getTagParts:p["c"],addToToc:function(a){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,n=Object(d["b"])(a);this.tempToc.push({children:[],id:n,label:a,level:t})}}},c=m,o=(n("963d"),n("2877")),l=Object(o["a"])(c,e,r,!1,null,null,null);t["default"]=l.exports},"74ba":function(a,t,n){"use strict";var e=function(){var a=this,t=a.$createElement,n=a._self._c||t;return n("section",{staticClass:"q-pa-md overflow-auto",attrs:{id:a.slugifiedTitle}},[n("q-card",{staticClass:"no-shadow",attrs:{flat:"",bordered:""}},[n("q-toolbar",[n("q-ribbon",{attrs:{position:"left",color:"rgba(0,0,0,.58)","background-color":"#c0c0c0","leaf-color":"#a0a0a0","leaf-position":"bottom",decoration:"rounded-out"}},[n("q-toolbar-title",{staticClass:"example-title",on:{click:function(t){return a.copyHeading(a.slugifiedTitle)}}},[n("span",{staticClass:"ellipsis"},[a._v(a._s(a.title))])])],1)],1),this.$slots.default?n("q-separator"):a._e(),this.$slots.default?n("q-card-section",[a._t("default")],2):a._e(),n("q-separator"),n("q-expansion-item",{attrs:{group:"someGroup",caption:"Code"}},[n("q-card",[n("q-tabs",{staticClass:"text-grey",attrs:{dense:"","active-color":"primary","indicator-color":"primary",align:"left","narrow-indicator":""},model:{value:a.tab,callback:function(t){a.tab=t},expression:"tab"}},[a.parts.template?n("q-tab",{attrs:{name:"template",label:"Template"}}):a._e(),a.parts.script?n("q-tab",{attrs:{name:"script",label:"Script"}}):a._e(),a.parts.style?n("q-tab",{attrs:{name:"style",label:"Style"}}):a._e()],1),n("q-separator"),n("q-tab-panels",{attrs:{animated:""},model:{value:a.tab,callback:function(t){a.tab=t},expression:"tab"}},[a.parts.template?n("q-tab-panel",{attrs:{name:"template"}},[n("q-markdown",{attrs:{src:a.parts.template}})],1):a._e(),a.parts.script?n("q-tab-panel",{attrs:{name:"script"}},[n("q-markdown",{attrs:{src:a.parts.script}})],1):a._e(),a.parts.style?n("q-tab-panel",{attrs:{name:"style"}},[n("q-markdown",{attrs:{src:a.parts.style}})],1):a._e()],1)],1)],1),n("q-separator"),n(a.name,{tag:"component",staticStyle:{overflow:"hidden"}})],1)],1)},r=[],s=(n("ac6a"),n("cadf"),n("06db"),n("456d"),n("8669")),i={name:"ExampleCard",props:{title:{type:String,required:!0},name:{type:String,required:!0},tagParts:{type:Object,default:function(){}}},data:function(){return{tab:"template",parts:{}}},mounted:function(){this.updateParts()},computed:{slugifiedTitle:function(){return Object(s["b"])(this.title)}},methods:{copyHeading:s["a"],updateParts:function(){var a=this;this.parts={},Object.keys(this.tagParts).forEach((function(t){""!==a.tagParts[t]&&(a.parts[t]="```\n"+a.tagParts[t]+"\n```")}))}}},d=i,p=n("2877"),m=Object(p["a"])(d,e,r,!1,null,null,null);t["a"]=m.exports},"7b28":function(a,t,n){"use strict";n.r(t),t["default"]="<template>\n  <q-calendar\n    v-model=\"selectedDate\"\n    view=\"week-agenda\"\n    :weekdays=\"[1,2,3,4,5,6,0]\"\n    locale=\"en-us\"\n    style=\"height: 400px;\"\n  >\n    <template #day-body=\"day\">\n      <template v-for=\"(agenda) in getAgenda(day)\">\n        <div\n          :key=\"day.date + agenda.time\"\n          :label=\"agenda.time\"\n          class=\"justify-start q-ma-sm shadow-5 bg-grey-6\"\n        >\n          <div v-if=\"agenda.avatar\" class=\"row justify-center\" style=\"margin-top: 30px; width: 100%;\">\n            <q-avatar style=\"margin-top: -25px; margin-bottom: 10px; font-size: 60px; max-height: 50px;\">\n              <img :src=\"agenda.avatar\" style=\"border: #9e9e9e solid 5px;\">\n            </q-avatar>\n          </div>\n          <div class=\"col-12 q-px-sm\">\n            <strong>{{ agenda.time }}</strong>\n          </div>\n          <div v-if=\"agenda.desc\" class=\"col-12 q-px-sm\" style=\"font-size: 10px;\">\n            {{ agenda.desc }}\n          </div>\n        </div>\n      </template>\n    </template>\n  </q-calendar>\n</template>\n\n<script>\nexport default {\n  data () {\n    return {\n      selectedDate: '',\n      agenda: {\n        // value represents day of the week\n        1: [\n          {\n            time: '08:00',\n            avatar: 'https://cdn.quasar.dev/img/boy-avatar.png',\n            desc: 'Meeting with CEO'\n          },\n          {\n            time: '08:30',\n            avatar: 'https://cdn.quasar.dev/img/avatar.png',\n            desc: 'Meeting with HR'\n          },\n          {\n            time: '10:00',\n            avatar: 'https://cdn.quasar.dev/img/avatar1.jpg',\n            desc: 'Meeting with Karen'\n          }\n        ],\n        2: [\n          {\n            time: '11:30',\n            avatar: 'https://cdn.quasar.dev/img/avatar2.jpg',\n            desc: 'Meeting with Alisha'\n          },\n          {\n            time: '17:00',\n            avatar: 'https://cdn.quasar.dev/img/avatar3.jpg',\n            desc: 'Meeting with Sarah'\n          }\n        ],\n        3: [\n          {\n            time: '08:00',\n            desc: 'Stand-up SCRUM',\n            avatar: 'https://cdn.quasar.dev/img/material.png'\n          },\n          {\n            time: '09:00',\n            avatar: 'https://cdn.quasar.dev/img/boy-avatar.png'\n          },\n          {\n            time: '10:00',\n            desc: 'Sprint planning',\n            avatar: 'https://cdn.quasar.dev/img/material.png'\n          },\n          {\n            time: '13:00',\n            avatar: 'https://cdn.quasar.dev/img/avatar1.jpg'\n          }\n        ],\n        4: [\n          {\n            time: '09:00',\n            avatar: 'https://cdn.quasar.dev/img/avatar3.jpg'\n          },\n          {\n            time: '10:00',\n            avatar: 'https://cdn.quasar.dev/img/avatar2.jpg'\n          },\n          {\n            time: '13:00',\n            avatar: 'https://cdn.quasar.dev/img/material.png'\n          }\n        ],\n        5: [\n          {\n            time: '08:00',\n            avatar: 'https://cdn.quasar.dev/img/boy-avatar.png'\n          },\n          {\n            time: '09:00',\n            avatar: 'https://cdn.quasar.dev/img/avatar2.jpg'\n          },\n          {\n            time: '09:30',\n            avatar: 'https://cdn.quasar.dev/img/avatar4.jpg'\n          },\n          {\n            time: '10:00',\n            avatar: 'https://cdn.quasar.dev/img/avatar5.jpg'\n          },\n          {\n            time: '11:30',\n            avatar: 'https://cdn.quasar.dev/img/material.png'\n          },\n          {\n            time: '13:00',\n            avatar: 'https://cdn.quasar.dev/img/avatar6.jpg'\n          },\n          {\n            time: '13:30',\n            avatar: 'https://cdn.quasar.dev/img/avatar3.jpg'\n          },\n          {\n            time: '14:00',\n            avatar: 'https://cdn.quasar.dev/img/linux-avatar.png'\n          },\n          {\n            time: '14:30',\n            avatar: 'https://cdn.quasar.dev/img/avatar.png'\n          },\n          {\n            time: '15:00',\n            avatar: 'https://cdn.quasar.dev/img/boy-avatar.png'\n          },\n          {\n            time: '15:30',\n            avatar: 'https://cdn.quasar.dev/img/avatar2.jpg'\n          },\n          {\n            time: '16:00',\n            avatar: 'https://cdn.quasar.dev/img/avatar6.jpg'\n          }\n        ]\n      }\n    }\n  },\n\n  methods: {\n    getAgenda (day) {\n      return this.agenda[parseInt(day.weekday, 10)]\n    }\n  }\n}\n<\/script>\n"},8669:function(a,t,n){"use strict";n.d(t,"a",(function(){return e})),n.d(t,"b",(function(){return r}));n("a481");function e(a){var t=window.location.origin+window.location.pathname+"#"+a,n=document.createElement("textarea");n.className="fixed-top",n.value=t,document.body.appendChild(n),n.focus(),n.select(),document.execCommand("copy"),document.body.removeChild(n),this.$q.notify({message:"Anchor has been copied to clipboard.",color:"white",textColor:"primary",icon:"done",position:"top",timeout:2e3})}function r(a){return encodeURIComponent(String(a).trim().replace(/\s+/g,"-"))}},"94c0":function(a,t,n){"use strict";n.r(t),t["default"]='<template>\n  <q-calendar\n    v-model="selectedDate"\n    view="week-agenda"\n    locale="en-us"\n    style="height: 400px;"\n  />\n</template>\n\n<script>\nexport default {\n  data () {\n    return {\n      selectedDate: \'\'\n    }\n  }\n}\n<\/script>\n'},"963d":function(a,t,n){"use strict";var e=n("b8e8"),r=n.n(e);r.a},a843:function(a,t,n){"use strict";n.r(t),t["default"]="<template>\n  <q-calendar\n    v-model=\"selectedDate\"\n    view=\"week-agenda\"\n    locale=\"en-us\"\n    style=\"height: 400px;\"\n  >\n    <template #day-body=\"day\">\n      <template v-for=\"(agenda) in getAgenda(day)\">\n        <div\n          :key=\"day.date + agenda.time\"\n          :label=\"agenda.time\"\n          class=\"justify-start q-ma-sm shadow-5 bg-grey-6\"\n        >\n          <div v-if=\"agenda.avatar\" class=\"row justify-center\" style=\"margin-top: 30px; width: 100%;\">\n            <q-avatar style=\"margin-top: -25px; margin-bottom: 10px; font-size: 60px; max-height: 50px;\">\n              <img :src=\"agenda.avatar\" style=\"border: #9e9e9e solid 5px;\">\n            </q-avatar>\n          </div>\n          <div class=\"col-12 q-px-sm\">\n            <strong>{{ agenda.time }}</strong>\n          </div>\n          <div v-if=\"agenda.desc\" class=\"col-12 q-px-sm\" style=\"font-size: 10px;\">\n            {{ agenda.desc }}\n          </div>\n        </div>\n      </template>\n    </template>\n  </q-calendar>\n</template>\n\n<script>\nexport default {\n  data () {\n    return {\n      selectedDate: '',\n      agenda: {\n        // value represents day of the week\n        1: [\n          {\n            time: '08:00',\n            avatar: 'https://cdn.quasar.dev/img/boy-avatar.png',\n            desc: 'Meeting with CEO'\n          },\n          {\n            time: '08:30',\n            avatar: 'https://cdn.quasar.dev/img/avatar.png',\n            desc: 'Meeting with HR'\n          },\n          {\n            time: '10:00',\n            avatar: 'https://cdn.quasar.dev/img/avatar1.jpg',\n            desc: 'Meeting with Karen'\n          }\n        ],\n        2: [\n          {\n            time: '11:30',\n            avatar: 'https://cdn.quasar.dev/img/avatar2.jpg',\n            desc: 'Meeting with Alisha'\n          },\n          {\n            time: '17:00',\n            avatar: 'https://cdn.quasar.dev/img/avatar3.jpg',\n            desc: 'Meeting with Sarah'\n          }\n        ],\n        3: [\n          {\n            time: '08:00',\n            desc: 'Stand-up SCRUM',\n            avatar: 'https://cdn.quasar.dev/img/material.png'\n          },\n          {\n            time: '09:00',\n            avatar: 'https://cdn.quasar.dev/img/boy-avatar.png'\n          },\n          {\n            time: '10:00',\n            desc: 'Sprint planning',\n            avatar: 'https://cdn.quasar.dev/img/material.png'\n          },\n          {\n            time: '13:00',\n            avatar: 'https://cdn.quasar.dev/img/avatar1.jpg'\n          }\n        ],\n        4: [\n          {\n            time: '09:00',\n            avatar: 'https://cdn.quasar.dev/img/avatar3.jpg'\n          },\n          {\n            time: '10:00',\n            avatar: 'https://cdn.quasar.dev/img/avatar2.jpg'\n          },\n          {\n            time: '13:00',\n            avatar: 'https://cdn.quasar.dev/img/material.png'\n          }\n        ],\n        5: [\n          {\n            time: '08:00',\n            avatar: 'https://cdn.quasar.dev/img/boy-avatar.png'\n          },\n          {\n            time: '09:00',\n            avatar: 'https://cdn.quasar.dev/img/avatar2.jpg'\n          },\n          {\n            time: '09:30',\n            avatar: 'https://cdn.quasar.dev/img/avatar4.jpg'\n          },\n          {\n            time: '10:00',\n            avatar: 'https://cdn.quasar.dev/img/avatar5.jpg'\n          },\n          {\n            time: '11:30',\n            avatar: 'https://cdn.quasar.dev/img/material.png'\n          },\n          {\n            time: '13:00',\n            avatar: 'https://cdn.quasar.dev/img/avatar6.jpg'\n          },\n          {\n            time: '13:30',\n            avatar: 'https://cdn.quasar.dev/img/avatar3.jpg'\n          },\n          {\n            time: '14:00',\n            avatar: 'https://cdn.quasar.dev/img/linux-avatar.png'\n          },\n          {\n            time: '14:30',\n            avatar: 'https://cdn.quasar.dev/img/avatar.png'\n          },\n          {\n            time: '15:00',\n            avatar: 'https://cdn.quasar.dev/img/boy-avatar.png'\n          },\n          {\n            time: '15:30',\n            avatar: 'https://cdn.quasar.dev/img/avatar2.jpg'\n          },\n          {\n            time: '16:00',\n            avatar: 'https://cdn.quasar.dev/img/avatar6.jpg'\n          }\n        ]\n      }\n    }\n  },\n\n  methods: {\n    getAgenda (day) {\n      return this.agenda[parseInt(day.weekday, 10)]\n    }\n  }\n}\n<\/script>\n"},b8e8:function(a,t,n){},fac8:function(a,t,n){"use strict";n.r(t),t["default"]='<template>\n  <q-calendar\n    v-model="selectedDate"\n    view="day-agenda"\n    locale="en-us"\n    style="height: 400px;"\n  />\n</template>\n\n<script>\nexport default {\n  data () {\n    return {\n      selectedDate: \'\'\n    }\n  }\n}\n<\/script>\n'},fe7d:function(a,t,n){"use strict";var e=function(){var a=this,t=a.$createElement,n=a._self._c||t;return n("h1",{staticClass:"q-markdown--heading-h1 q-markdown--title-heavy example-title",attrs:{id:a.slugifiedTitle},on:{click:function(t){return a.copyHeading(a.slugifiedTitle)}}},[a._v(a._s(a.title))])},r=[],s=n("8669"),i={name:"ExampleTitle",props:{title:{type:String,required:!0}},computed:{slugifiedTitle:function(){return Object(s["b"])(this.title)}},methods:{copyHeading:s["a"]}},d=i,p=n("2877"),m=Object(p["a"])(d,e,r,!1,null,null,null);t["a"]=m.exports}}]);