webpackJsonp([1],{"1/oy":function(e,t){},"5AqT":function(e,t){},"5O8B":function(e,t){},"9M+g":function(e,t){},D4uH:function(e,t,i){"use strict";var n={},s={name:"icon",props:{name:{type:String,validator:function(e){return e?e in n||(console.warn('Invalid prop: prop "name" is referring to an unregistered icon "'+e+'".\nPlease make sure you have imported this icon before using it.'),!1):(console.warn('Invalid prop: prop "name" is required.'),!1)}},scale:[Number,String],spin:Boolean,inverse:Boolean,pulse:Boolean,flip:{validator:function(e){return"horizontal"===e||"vertical"===e}},label:String},data:function(){return{x:!1,y:!1,childrenWidth:0,childrenHeight:0,outerScale:1}},computed:{normalizedScale:function(){var e=this.scale;return e=void 0===e?1:Number(e),isNaN(e)||e<=0?(console.warn('Invalid prop: prop "scale" should be a number over 0.',this),this.outerScale):e*this.outerScale},klass:function(){return{"fa-icon":!0,"fa-spin":this.spin,"fa-flip-horizontal":"horizontal"===this.flip,"fa-flip-vertical":"vertical"===this.flip,"fa-inverse":this.inverse,"fa-pulse":this.pulse}},icon:function(){return this.name?n[this.name]:null},box:function(){return this.icon?"0 0 "+this.icon.width+" "+this.icon.height:"0 0 "+this.width+" "+this.height},ratio:function(){if(!this.icon)return 1;var e=this.icon,t=e.width,i=e.height;return Math.max(t,i)/16},width:function(){return this.childrenWidth||this.icon&&this.icon.width/this.ratio*this.normalizedScale||0},height:function(){return this.childrenHeight||this.icon&&this.icon.height/this.ratio*this.normalizedScale||0},style:function(){return 1!==this.normalizedScale&&{fontSize:this.normalizedScale+"em"}},raw:function(){if(!this.icon||!this.icon.raw)return null;var e=this.icon.raw,t={};return e=e.replace(/\s(?:xml:)?id=(["']?)([^"')\s]+)\1/g,function(e,i,n){var s="fa-"+(l++).toString(16);return t[n]=s,' id="'+s+'"'}),e=e.replace(/#(?:([^'")\s]+)|xpointer\(id\((['"]?)([^')]+)\2\)\))/g,function(e,i,n,s){var l=i||s;return l&&t[l]?"#"+t[l]:e}),e}},mounted:function(){var e=this;if(!this.icon){this.$children.forEach(function(t){t.outerScale=e.normalizedScale});var t=0,i=0;this.$children.forEach(function(e){t=Math.max(t,e.width),i=Math.max(i,e.height)}),this.childrenWidth=t,this.childrenHeight=i,this.$children.forEach(function(e){e.x=(t-e.width)/2,e.y=(i-e.height)/2})}},register:function(e){for(var t in e){var i=e[t];i.paths||(i.paths=[]),i.d&&i.paths.push({d:i.d}),i.polygons||(i.polygons=[]),i.points&&i.polygons.push({points:i.points}),n[t]=i}},icons:n},l=870711;var a={render:function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("svg",{class:e.klass,style:e.style,attrs:{version:"1.1",role:e.label?"img":"presentation","aria-label":e.label,x:e.x,y:e.y,width:e.width,height:e.height,viewBox:e.box}},[e._t("default",[e.icon&&e.icon.paths?e._l(e.icon.paths,function(t,n){return i("path",e._b({key:"path-"+n},"path",t,!1))}):e._e(),e._v(" "),e.icon&&e.icon.polygons?e._l(e.icon.polygons,function(t,n){return i("polygon",e._b({key:"polygon-"+n},"polygon",t,!1))}):e._e(),e._v(" "),e.icon&&e.icon.raw?[i("g",{domProps:{innerHTML:e._s(e.raw)}})]:e._e()])],2)},staticRenderFns:[]};var o=i("VU/8")(s,a,!1,function(e){i("5AqT")},null,null);t.a=o.exports},Id91:function(e,t){},Jmt5:function(e,t){},NHnr:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=i("7+uW"),s=i("D4uH"),l=i("Dd8w"),a=i.n(l),o=i("NYxO"),r={name:"FieldTypeCard",props:["type"],components:{Icon:s.a},computed:a()({},Object(o.b)(["indexOfSelectedField"])),methods:a()({},Object(o.c)(["addInputField","selectField"]),{selectField:function(e){this.$store.commit("selectField",e),this.addFieldType(e)},addFieldType:function(e){this.$store.commit("addInputField",e)}})},d={render:function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("b-card",{staticClass:"field-type",class:{"active-card":e.type.id===e.indexOfSelectedField},on:{click:function(t){e.selectField(e.type.id)}}},[i("p",{staticClass:"card-text"},[i("icon",{staticClass:"colored",attrs:{name:e.type.icon,label:e.type.definition}}),e._v(" "),i("b",[e._v(e._s(e.type.name))]),e._v(" "),i("br"),e._v(" "),i("b",{staticClass:"colored"},[e._v("Definition")]),e._v(" "),i("br"),e._v(" "),i("span",[e._v(e._s(e.type.definition))]),e._v(" "),i("br"),e._v(" "),i("b",{staticClass:"colored"},[e._v("Default Display")]),e._v(" "),i("br"),e._v(" "),i("span",[e._v(e._s(e.type.defaultDisplay))])],1)])},staticRenderFns:[]};var c={name:"FieldTypes",data:function(){return{keyword:"",searchResults:[]}},props:["types"],components:{"field-type-card":i("VU/8")(r,d,!1,function(e){i("cDql")},"data-v-279bf12d",null).exports},methods:{doFilter:function(){var e=this;this.searchResults=this.types.filter(function(t){return t.name.toLowerCase().indexOf(e.keyword.toLowerCase())>-1})}}},u={render:function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("b-card",{staticClass:"field-types",attrs:{title:"Field Types","sub-title":""}},[i("p",{staticClass:"card-text"}),i("div",[i("div",{staticClass:"form-group"},[i("label",{attrs:{for:"filter"}},[e._v("Filter Types")]),e._v(" "),i("input",{directives:[{name:"model",rawName:"v-model",value:e.keyword,expression:"keyword"}],staticClass:"form-control",attrs:{type:"text",id:"filter"},domProps:{value:e.keyword},on:{keyup:e.doFilter,input:function(t){t.target.composing||(e.keyword=t.target.value)}}})])]),e._v(" "),e._l(e.types,function(t){return 0===e.searchResults.length?i("field-type-card",{key:t.id,attrs:{type:t}}):e._e()}),e._v(" "),e._l(e.searchResults,function(t){return e.searchResults.length>0?i("field-type-card",{key:t.id,attrs:{type:t}}):e._e()}),e._v(" "),i("p")],2)},staticRenderFns:[]};var p=i("VU/8")(c,u,!1,function(e){i("5O8B")},"data-v-7d6dfff8",null).exports,f={name:"FieldGroups",data:function(){return{fieldGroupName:""}},computed:a()({},Object(o.b)(["indexOfSelectedFieldGroup"])),props:["fieldGroups"],methods:a()({},Object(o.c)(["selectFieldGroup"]),{addFieldGroup:function(){var e=this,t=this.fieldGroups.find(function(t){return t.name===e.fieldGroupName});this.fieldGroupName&&!t&&(this.$store.commit("addFieldGroup",this.fieldGroupName),this.fieldGroupName=null,this.hideModal()),t&&alert('Another field group with the name "'+this.fieldGroupName+'" exists')},selectFieldGroup:function(e){this.$store.commit("selectFieldGroup",e)},showModal:function(){this.$refs.myModalRef.show()},hideModal:function(){this.$refs.myModalRef.hide()}})},h={render:function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("section",[i("b-modal",{ref:"myModalRef",attrs:{"hide-footer":"",title:"Add Field Group"}},[i("div",{staticClass:"d-block text-left"},[i("h4",[e._v("New Field Group")]),e._v(" "),i("div",[i("b-form",{on:{submit:e.addFieldGroup}},[i("b-form-group",{attrs:{id:"exampleInputGroup1",label:"Enter Name Of Field Group:","label-for":"textInput",description:"Enter the name/category you want to be displayed for your field group."}},[i("b-form-input",{attrs:{id:"textInput",type:"text",required:"",placeholder:"Enter text"},model:{value:e.fieldGroupName,callback:function(t){e.fieldGroupName=t},expression:"fieldGroupName"}})],1),e._v(" "),i("b-row",[i("b-col",{staticClass:"text-center"},[i("b-btn",{staticClass:"mt-3",attrs:{variant:"outline-success","text-center":"",type:"submit"}},[e._v("Add Field Group")])],1)],1)],1)],1)])]),e._v(" "),i("div",[i("b-card",{staticClass:"field-groups",attrs:{title:"Field Groups","sub-title":"Choose a group for this input"}},[e._l(e.fieldGroups,function(t){return i("p",{staticClass:"card-text"},[i("b-card",{class:{"active-card":t.id===e.indexOfSelectedFieldGroup},attrs:{title:t.name},on:{click:function(i){e.selectFieldGroup(t.id)}}},[i("span",[e._v(e._s(t.groups.length+" other inputs"))])])],1)}),e._v(" "),i("b-button",{staticClass:"bottom text-center",attrs:{block:"",variant:"outline-success"},on:{click:e.showModal}},[e._v("Add A New Group")])],2)],1)],1)},staticRenderFns:[]};var m=i("VU/8")(f,h,!1,function(e){i("YWLr")},"data-v-78838445",null).exports,v={name:"FieldDetails",data:function(){return{selectedTagGroup:[],customValidation:null}},props:["fields","fieldGroups"],components:{Icon:s.a,"field-group":m},computed:{checkRegex:function(){if(null===this.customValidation||0===this.customValidation.length)return null;try{return new RegExp(this.customValidation).test("123"),this.setFieldCustomValidation(),!0}catch(e){return!1}},checkDisplayLabel:function(){return null===this.fields.displayLabel?null:this.fields.displayLabel.length>0}},methods:{setFieldCustomValidation:function(){this.fields.customValidation=this.customValidation},toggleFieldTag:function(e){var t=this.fields.selectedTags.indexOf(e);t>-1?this.fields.selectedTags.splice(t,1):this.fields.selectedTags.push(e)},showTags:function(e){this.selectedTagGroup=e},generateReferenceName:function(){this.fields.referenceName=this.fields.displayLabel.replace(/\s/g,"").toLowerCase()},generateOptionValue:function(e){if(this.fields.options){var t=this.fields.options[0],i=this.fields.options.indexOf(t);this.fields.options[i].value=this.fields.options[i].name.replace(/\s/g,"").toLowerCase()}},addSelectOption:function(e){var t=this.fields.options.indexOf(e);this.fields.options.splice(t+1,0,{id:this.fields.options.length,value:""})},removeSelectOption:function(e){if(this.fields.options.length>1){var t=this.fields.options.indexOf(e);this.fields.options.splice(t,1)}}}},g={render:function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("section",[i("div",[i("b-card",{staticClass:"field-details",attrs:{title:"Field Details","sub-title":""}},[i("p",{staticClass:"card-text"},[i("table",{staticClass:"field-details-table"},[i("tr",[i("td",{staticClass:"input-fields"},[e.fields?i("span",[i("h5",[e._v("Input Fields")]),e._v(" "),i("div",[i("b-form",{staticClass:"flex-wrap"},[i("b-form-group",{staticClass:"form-single-input",attrs:{id:"label1",label:"Display Label","label-for":"input1",description:"For display purposes, spaces allowed"}},[i("b-form-input",{staticClass:"form-control",attrs:{state:e.checkDisplayLabel,required:"",type:"text",id:"input1"},nativeOn:{keyup:function(t){return e.generateReferenceName(t)}},model:{value:e.fields.displayLabel,callback:function(t){e.$set(e.fields,"displayLabel",t)},expression:"fields.displayLabel"}})],1),e._v(" "),i("b-form-group",{staticClass:"form-single-input",attrs:{id:"label2",label:"Default Value","label-for":"input2",description:""}},[i("b-form-input",{staticClass:"form-control",attrs:{type:e.fields.inputType,id:"input2"},nativeOn:{keyup:function(t){e.generateOptionValue(e.fields)}},model:{value:e.fields.defaultValue,callback:function(t){e.$set(e.fields,"defaultValue",t)},expression:"fields.defaultValue"}})],1),e._v(" "),e._l(e.fields.options,function(t){return"select"===e.fields.fieldType?i("div",{key:t.id,staticClass:"flex-wrap"},[i("b-form-group",{staticClass:"form-single-input-option",attrs:{id:"label-"+t.id,label:"Option Name","label-for":"input"+t.id,description:"Enter a option the user can select"}},[i("b-form-input",{staticClass:"form-control",attrs:{type:"text",id:"input"+t.id},nativeOn:{keyup:function(i){e.generateOptionValue(t)}},model:{value:t.name,callback:function(i){e.$set(t,"name",i)},expression:"option.name"}})],1),e._v(" "),i("b-form-group",{staticClass:"form-single-input",attrs:{label:"Option Value","label-for":"inputvalue"+t.id,description:"Modify or leave as it is"}},[t===e.fields.options[0]?i("b-form-input",{staticClass:"form-control",attrs:{disabled:"",type:"text",id:"input"+t.id},model:{value:e.fields.defaultValue,callback:function(t){e.$set(e.fields,"defaultValue",t)},expression:"fields.defaultValue"}}):i("b-form-input",{staticClass:"form-control",attrs:{type:"text",id:"inputvalue"+t.id},model:{value:t.value,callback:function(i){e.$set(t,"value",i)},expression:"option.value"}})],1),e._v(" "),i("button",{staticClass:"close no-outline",attrs:{type:"button","aria-label":"Add Option"},on:{click:function(i){e.addSelectOption(t)}}},[i("span",{attrs:{"aria-hidden":"true"}},[e._v("+")]),e._v("  \n                      ")]),e._v(" "),e.fields.options.length>1?i("button",{staticClass:"close no-outline",attrs:{type:"button","aria-label":"Remove Option"},on:{click:function(i){e.removeSelectOption(t)}}},[i("span",{attrs:{"aria-hidden":"true"}},[e._v("×")])]):e._e()],1):e._e()}),e._v(" "),"select"!==e.fields.fieldType?i("b-form-group",{staticClass:"form-single-input",attrs:{id:"label3",label:"Custom Validation","label-for":"input3",description:"Any regex pattern can be used for custom input validation"}},[i("b-form-input",{staticClass:"form-control",attrs:{state:e.checkRegex,type:"text",id:"input3"},model:{value:e.customValidation,callback:function(t){e.customValidation=t},expression:"customValidation"}})],1):e._e(),e._v(" "),i("b-form-group",{staticClass:"form-single-input",attrs:{id:"label4",label:"Reference Name","label-for":"input4",description:"Used to reference in calculations, no spaces allowed"}},[i("b-form-input",{attrs:{id:"input4",type:"text",required:"",placeholder:""},model:{value:e.fields.referenceName,callback:function(t){e.$set(e.fields,"referenceName",t)},expression:"fields.referenceName"}})],1),e._v(" "),i("section",{staticClass:"tag-section"},[i("h4",[e._v("Tags")]),e._v(" "),i("table",{attrs:{width:"100%"}},[i("tr",[i("td",{attrs:{align:"left",width:"50%"}},[i("h5",[e._v("Tag Group")]),e._v(" "),e._l(e.fields.tagGroups,function(t){return i("b-badge",{key:t.id,staticClass:"pointer tag-spacing tag",class:{"active-tag":t===e.selectedTagGroup},on:{click:function(i){e.showTags(t)}}},[e._v(e._s(t.name)+"\n                              ")])})],2),e._v(" "),i("td",{attrs:{align:"left"}},[i("h5",[e._v("Tags")]),e._v(" "),e._l(e.selectedTagGroup.tags,function(t){return e.selectedTagGroup?i("b-badge",{key:t,staticClass:"pointer tag-spacing tag",class:{"active-tag":e.fields.selectedTags.indexOf(t)>-1},on:{click:function(i){e.toggleFieldTag(t)}}},[e._v(e._s(t)+"\n                              ")]):e._e()})],2)])])])],2)],1)]):e._e()]),e._v(" "),i("td",{staticClass:"field-group"},[i("field-group",{attrs:{fieldGroups:e.fieldGroups}})],1)])])])])],1)])},staticRenderFns:[]};var b={name:"Container",components:{"field-types":p,"field-details":i("VU/8")(v,g,!1,function(e){i("eURI")},"data-v-19b45c4f",null).exports},computed:a()({},Object(o.b)(["types","fields","fieldGroups","indexOfSelectedFieldGroup"])),methods:a()({},Object(o.c)(["removeInputField","saveInputToGroup"]),{removeInput:function(){this.$store.commit("removeInputField")},saveInputToGroup:function(){this.$store.commit("saveInputToGroup")}})},y={render:function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("b-container",{attrs:{fluid:""}},[i("section",{staticClass:"main"},[i("h3",{staticClass:"text-left"},[e._v("Commercial Property - Add Field")]),e._v(" "),i("b-card",[i("table",[i("tr",[i("td",{staticClass:"field-types-section"},[i("field-types",{key:e.types.length,attrs:{types:e.types}})],1),e._v(" "),i("td",{staticClass:"field-details-section"},[i("field-details",{attrs:{fields:e.fields,fieldGroups:e.fieldGroups}})],1)])])]),e._v(" "),i("div",{staticClass:"row bottom-buttons"},[i("div",{staticClass:"col-sm-6 text-left"},[i("b-button",{staticClass:"text-right theme-button",attrs:{disabled:null===e.indexOfSelectedFieldGroup||null===e.fields},on:{click:e.saveInputToGroup}},[e._v("Save Changes")])],1),e._v(" "),i("div",{staticClass:"col-sm-6 text-right"},[i("b-button",{staticClass:"text-right light-button",attrs:{disabled:""}},[e._v("Cancel Changes")]),e._v(" "),i("b-button",{attrs:{disabled:null===e.fields,variant:"danger"},on:{click:e.removeInput}},[e._v("Delete Input")])],1)])],1)])},staticRenderFns:[]};var _=i("VU/8")(b,y,!1,function(e){i("OtJC")},"data-v-143531fc",null).exports,x={name:"App",components:{Icon:s.a,container:_}},F={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{attrs:{id:"app"}},[t("header",[t("b-navbar",{attrs:{type:"dark",variant:"light",toggleable:""}},[t("b-navbar-toggle",{attrs:{target:"nav_dropdown_collapse"}}),this._v(" "),t("b-collapse",{attrs:{"is-nav":"",id:"nav_dropdown_collapse"}},[t("b-navbar-nav",[t("b-nav-item",{staticClass:"active",attrs:{href:"#"}},[this._v("Sample App")])],1)],1)],1)],1),this._v(" "),t("b-container",{attrs:{fluid:""}},[t("container")],1)],1)},staticRenderFns:[]};var G=i("VU/8")(x,F,!1,function(e){i("nI9l")},null,null).exports,C=i("e6fC");i("Jmt5"),i("9M+g"),i("D/PP");n.a.use(o.a);var w=new o.a.Store({state:{types:[{id:0,icon:"heading",name:"Text",definition:"String of text",defaultDisplay:"Free-form text input"},{id:1,icon:"calendar-alt",name:"Date",definition:"Standard ISO format date",defaultDisplay:"Datepicker, with configurable format"},{id:2,icon:"car",name:"VIN",definition:"Vehicle Identification Number",defaultDisplay:"Free-form text input"},{id:3,icon:"filter",name:"Select",definition:"Single Option Chooser",defaultDisplay:"Multiple options for user to select"}],fields:null,indexOfSelectedField:null,indexOfSelectedFieldGroup:null,fieldGroups:[{id:0,name:"Sample Group",groups:[]}]},getters:{types:function(e){return e.types},fields:function(e){return e.fields},fieldGroups:function(e){return e.fieldGroups},indexOfSelectedFieldGroup:function(e){return e.indexOfSelectedFieldGroup},indexOfSelectedField:function(e){return e.indexOfSelectedField}},mutations:{addFieldGroup:function(e,t){e.fieldGroups.push({id:e.fieldGroups.length,name:t,groups:[]})},removeInputField:function(e){e.fields=null,e.indexOfSelectedField=null},selectFieldGroup:function(e,t){var i=e.fieldGroups.find(function(e){return e.id===t}),n=e.fieldGroups.indexOf(i);e.indexOfSelectedFieldGroup=n},selectField:function(e,t){e.indexOfSelectedField=t},saveInputToGroup:function(e){null===e.fields.displayLabel||0===e.fields.displayLabel.length?alert("Display Label cannot be empty"):"select"!==e.fields.fieldType||0!==e.fields.options[0].name.length&&0!==e.fields.options[0].value.length?e.fieldGroups[e.indexOfSelectedFieldGroup].groups.push(e.fields):alert("At least 1 option name and value is required to add this input field to the group"),console.log("Added the input Field",e.fields)},addInputField:function(e,t){switch(t){case 0:e.fields={id:0,fieldType:"text",inputType:"text",displayLabel:null,defaultValue:null,customValidation:null,referenceName:null,tagGroups:[{id:0,name:"Vinmaster",tags:["1","2"]},{id:1,name:"ISO",tags:["1","2","3","4"]},{id:2,name:"Tag 3",tags:["1"]}],selectedTags:[]};break;case 1:e.fields={id:1,fieldType:"date",inputType:"date",displayLabel:null,defaultValue:null,customValidation:null,referenceName:null,tagGroups:[{id:0,name:"Test 1",tags:["A","B"]},{id:1,name:"Test 2",tags:["C","D","E","F"]},{id:2,name:"Test 3",tags:["G"]}],selectedTags:[]};break;case 2:e.fields={id:2,fieldType:"vin",inputType:"number",displayLabel:null,defaultValue:null,customValidation:null,referenceName:null,tagGroups:[{id:0,name:"Up",tags:["H","I"]},{id:1,name:"Middle",tags:["J","K","L","M"]},{id:2,name:"Down",tags:["N"]}],selectedTags:[]};break;case 3:e.fields={id:2,fieldType:"select",inputType:"text",displayLabel:null,defaultValue:null,options:[{id:0,name:"",value:""}],referenceName:null,tagGroups:[{id:0,name:"Vinmaster",tags:["1","2"]},{id:1,name:"ISO",tags:["1","2","3","4"]},{id:2,name:"Tag 3",tags:["1"]}],selectedTags:[]}}}}});n.a.config.productionTip=!1,n.a.use(C.a),new n.a({store:w,el:"#app",components:{App:G},template:"<App/>"})},OtJC:function(e,t){},YWLr:function(e,t){},cDql:function(e,t){},eURI:function(e,t){},nI9l:function(e,t){},zj2Q:function(e,t){}},["NHnr"]);
//# sourceMappingURL=app.2d8802edfec3e6bbb717.js.map