(function(){"use strict";try{if(typeof document<"u"){var i=document.createElement("style");i.appendChild(document.createTextNode('@charset "UTF-8";/*! normalize.css v8.0.0 | MIT License | github.com/necolas/normalize.css */html{line-height:1.15;-webkit-text-size-adjust:100%}body{margin:0}h1{font-size:2em;margin:.67em 0}hr{box-sizing:content-box;height:0;overflow:visible}pre{font-family:monospace,monospace;font-size:1em}a{background-color:transparent}abbr[title]{border-bottom:none;text-decoration:underline;text-decoration:underline dotted}b,strong{font-weight:bolder}code,kbd,samp{font-family:monospace,monospace;font-size:1em}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-.25em}sup{top:-.5em}img{border-style:none}button,input,optgroup,select,textarea{font-family:inherit;font-size:100%;line-height:1.15;margin:0}button,input{overflow:visible}button,select{text-transform:none}button,[type=button],[type=reset],[type=submit]{-webkit-appearance:button}button::-moz-focus-inner,[type=button]::-moz-focus-inner,[type=reset]::-moz-focus-inner,[type=submit]::-moz-focus-inner{border-style:none;padding:0}button:-moz-focusring,[type=button]:-moz-focusring,[type=reset]:-moz-focusring,[type=submit]:-moz-focusring{outline:1px dotted ButtonText}fieldset{padding:.35em .75em .625em}legend{box-sizing:border-box;color:inherit;display:table;max-width:100%;padding:0;white-space:normal}progress{vertical-align:baseline}textarea{overflow:auto}[type=checkbox],[type=radio]{box-sizing:border-box;padding:0}[type=number]::-webkit-inner-spin-button,[type=number]::-webkit-outer-spin-button{height:auto}[type=search]{-webkit-appearance:textfield;outline-offset:-2px}[type=search]::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}details{display:block}summary{display:list-item}template{display:none}[hidden]{display:none}html{height:100%}body{font-family:Helvetica Neue,Helvetica,Arial,sans-serif;background:#f6f6f3;color:#444;font-size:87.5%;line-height:1.5}a{color:#467b96;text-decoration:none}a:hover{color:#499bc3;text-decoration:underline}code,pre,.mono{font-family:Menlo,Monaco,Consolas,Courier New,monospace}.p{margin:1em 0}.body-100{height:100%}a.balloon-button{display:inline-block;padding:0 6px;min-width:12px;height:18px;line-height:18px;background:#d8e7ee;font-size:.85714em;text-align:center;text-decoration:none;zoom:1;-moz-border-radius:30px;-webkit-border-radius:30px;border-radius:30px;white-space:nowrap}a.button:hover,a.balloon-button:hover{background-color:#a5cadc;color:#fff;text-decoration:none}input[type=text],input[type=password],input[type=email],textarea{background:#fff;border:1px solid #d9d9d6;padding:7px;border-radius:2px;-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box}textarea{resize:vertical;line-height:1.5}input[type=radio],input[type=checkbox]{margin-right:3px}input.text-s,textarea.text-s{padding:5px}input.text-l,textarea.text-l{padding:10px;font-size:1.14286em}.w-10{width:10%}.w-20{width:20%}.w-30{width:30%}.w-40{width:40%}.w-50{width:50%}.w-60{width:60%}.w-70{width:70%}.w-80{width:80%}.w-90{width:90%}.w-100{width:100%}select{border:1px solid #ccc;height:28px}.btn,#ui-datepicker-div .ui-datepicker-current,#ui-datepicker-div .ui-datepicker-close{border:none;background-color:#e9e9e6;cursor:pointer;border-radius:2px;display:inline-block;padding:0 12px;height:32px;color:#666;vertical-align:middle;zoom:1}.btn:hover,#ui-datepicker-div .ui-datepicker-current:hover,#ui-datepicker-div .ui-datepicker-close:hover{transition-duration:.4s;background-color:#dbdbd6}.btn:active,#ui-datepicker-div .ui-datepicker-current:active,#ui-datepicker-div .ui-datepicker-close:active,.btn.active,#ui-datepicker-div .active.ui-datepicker-current,#ui-datepicker-div .active.ui-datepicker-close{background-color:#d6d6d0}.btn:disabled,#ui-datepicker-div .ui-datepicker-current:disabled,#ui-datepicker-div .ui-datepicker-close:disabled{background-color:#f7f7f6;cursor:default}.btn:disabled,#ui-datepicker-div .ui-datepicker-current:disabled,#ui-datepicker-div .ui-datepicker-close:disabled{color:#999}.btn-xs,#ui-datepicker-div .ui-datepicker-current,#ui-datepicker-div .ui-datepicker-close{padding:0 10px;height:25px;font-size:13px}.btn-s{height:28px}.btn-l{height:40px;font-size:1.14286em;font-weight:700}.primary{border:none;background-color:#467b96;cursor:pointer;border-radius:2px;color:#fff}.primary:hover{transition-duration:.4s;background-color:#3c6a81}.primary:active,.primary.active{background-color:#39647a}.primary:disabled{background-color:#508cab;cursor:default}.btn-group{display:inline-block}.btn-warn{border:none;background-color:#b94a48;cursor:pointer;border-radius:2px;color:#fff}.btn-warn:hover{transition-duration:.4s;background-color:#a4403f}.btn-warn:active,.btn-warn.active{background-color:#9c3e3c}.btn-warn:disabled{background-color:#c1605e;cursor:default}.btn-link,.btn-link:hover,.btn-link:focus,.btn-link:active,.btn-link.active{background-color:transparent}.btn-drop{position:relative}.dropdown-toggle{padding-right:8px}.dropdown-menu{list-style:none;position:absolute;z-index:2;left:0;margin:0;padding:0;border:1px solid #d9d9d6;background:#fff;text-align:left;min-width:108px;display:none}.dropdown-menu li{white-space:nowrap}.dropdown-menu li.multiline{padding:5px 12px 12px}.dropdown-menu a{display:block;padding:5px 12px;color:#666}.dropdown-menu a:hover{background:#f6f6f3;text-decoration:none!important}.message{padding:8px 10px;border-radius:2px}.message a{font-weight:700;text-decoration:underline}.error{background:#fbe3e4;color:#8a1f11}.error a{color:#8a1f11}.notice{background:#fff6bf;color:#8a6d3b}.notice a{color:#8a6d3b}.success{background:#e6efc2;color:#264409}.success a{color:#264409}.balloon{display:inline-block;padding:0 4px;min-width:10px;height:14px;line-height:14px;background:#b9b9b6;vertical-align:text-top;text-align:center;font-size:12px;color:#fff;border-radius:20px}.typecho-pager{list-style:none;float:right;margin:0;padding:0;line-height:1;text-align:center;zoom:1}.typecho-pager li{display:inline-block;margin:0 3px;height:28px;line-height:28px}.typecho-pager a{display:block;padding:0 10px;border-radius:2px}.typecho-pager a:hover{text-decoration:none;background:#e9e9e6}.typecho-pager li.current a{background:#e9e9e6;color:#444}.typecho-head-nav{padding:0 10px;background:#292d33}.typecho-head-nav a{color:#bbb}.typecho-head-nav a:hover,.typecho-head-nav a:focus{color:#fff;text-decoration:none}#typecho-nav-list{float:left}#typecho-nav-list ul{list-style:none;margin:0;padding:0}#typecho-nav-list ul:first-child{border-left:1px solid #383d45}#typecho-nav-list .root{position:relative;float:left}#typecho-nav-list .parent a{display:block;float:left;padding:0 20px;border-right:1px solid #383d45;height:36px;line-height:36px;color:#bbb}#typecho-nav-list .parent a:hover,#typecho-nav-list .focus .parent a,#typecho-nav-list .root:hover .parent a{background:#202328;color:#fff;text-decoration:none}#typecho-nav-list .focus .parent a{font-weight:700}#typecho-nav-list .child{position:absolute;top:36px;display:none;margin:0;min-width:160px;max-width:240px;background:#202328;z-index:250}#typecho-nav-list .root:hover .child{display:block}#typecho-nav-list .child li a{color:#bbb;display:block;padding:0 20px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;height:36px;line-height:36px}#typecho-nav-list .child li a:hover,#typecho-nav-list .child li a:focus{background:#292d33;color:#fff}#typecho-nav-list .child li.focus a{color:#6da1bb;font-weight:700}.typecho-head-nav .operate{float:right}.typecho-head-nav .operate a{display:inline-block;margin-left:-1px;padding:0 20px;border:1px solid #383d45;border-width:0 1px;line-height:36px;color:#bbb}.typecho-head-nav .operate a:hover{background-color:#202328;color:#fff}.typecho-head-nav .operate .language-select{display:inline-block;margin-left:-1px;padding:0 20px;border:1px solid #383d45;border-width:0 1px;line-height:36px}.typecho-foot{padding:4em 0 3em;color:#999;line-height:1.8;text-align:center}.typecho-foot .copyright p{margin:10px 0 0}.typecho-foot .resource{color:#ccc}.typecho-foot .resource a{margin:0 3px;color:#999}.browsehappy{border:none;text-align:center}.popup{display:none;position:absolute;top:0;left:0;margin:0;padding:8px 0;border:none;width:100%;z-index:10;text-align:center;-moz-border-radius:0;-webkit-border-radius:0;border-radius:0}.popup ul{list-style:none;margin:0;padding:0;text-align:center}.popup ul li{display:inline-block;margin-right:10px}.loading{padding-left:20px!important;background:transparent url(data:image/gif;base64,R0lGODlhEAAQAPQAAPn595mZmfb29K2trcrKyZqamqenpunp6NfX1qCgoMTEw76+vu7u7NLS0OPj4bOzs7m5uAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAAFUCAgjmRpnqUwFGwhKoRgqq2YFMaRGjWA8AbZiIBbjQQ8AmmFUJEQhQGJhaKOrCksgEla+KIkYvC6SJKQOISoNSYdeIk1ayA8ExTyeR3F749CACH5BAkKAAAALAAAAAAQABAAAAVoICCKR9KMaCoaxeCoqEAkRX3AwMHWxQIIjJSAZWgUEgzBwCBAEQpMwIDwY1FHgwJCtOW2UDWYIDyqNVVkUbYr6CK+o2eUMKgWrqKhj0FrEM8jQQALPFA3MAc8CQSAMA5ZBjgqDQmHIyEAIfkECQoAAAAsAAAAABAAEAAABWAgII4j85Ao2hRIKgrEUBQJLaSHMe8zgQo6Q8sxS7RIhILhBkgumCTZsXkACBC+0cwF2GoLLoFXREDcDlkAojBICRaFLDCOQtQKjmsQSubtDFU/NXcDBHwkaw1cKQ8MiyEAIfkECQoAAAAsAAAAABAAEAAABVIgII5kaZ6AIJQCMRTFQKiDQx4GrBfGa4uCnAEhQuRgPwCBtwK+kCNFgjh6QlFYgGO7baJ2CxIioSDpwqNggWCGDVVGphly3BkOpXDrKfNm/4AhACH5BAkKAAAALAAAAAAQABAAAAVgICCOZGmeqEAMRTEQwskYbV0Yx7kYSIzQhtgoBxCKBDQCIOcoLBimRiFhSABYU5gIgW01pLUBYkRItAYAqrlhYiwKjiWAcDMWY8QjsCf4DewiBzQ2N1AmKlgvgCiMjSQhACH5BAkKAAAALAAAAAAQABAAAAVfICCOZGmeqEgUxUAIpkA0AMKyxkEiSZEIsJqhYAg+boUFSTAkiBiNHks3sg1ILAfBiS10gyqCg0UaFBCkwy3RYKiIYMAC+RAxiQgYsJdAjw5DN2gILzEEZgVcKYuMJiEAOwAAAAAAAAAAAA==) no-repeat left center}.typecho-option{list-style:none;margin:1em 0;padding:0}.typecho-option-submit li{border-bottom:none}.typecho-option label.typecho-label{display:block;margin-bottom:.5em;font-weight:700}.typecho-option label.required:after{content:" *";color:#b94a48}.typecho-option span{margin-right:15px}.typecho-option .description{margin:.5em 0 0;color:#999;font-size:.92857em}.typecho-option input.file{width:100%;margin:.7em 0}.front-archive{padding-left:1.5em}.profile-avatar{border:1px dashed #d9d9d6;max-width:100%}.typecho-install{padding-bottom:2em}.typecho-install-patch{margin-bottom:2em;padding:2em 0;background-color:#292d33;color:#fff;text-align:center}.typecho-install-patch ol{list-style:none;margin:3em 0 1em;padding:0;color:#999}.typecho-install-patch li{display:inline-block;margin:0 .8em}.typecho-install-patch span{display:inline-block;margin-right:5px;width:20px;height:20px;line-height:20px;border:2px solid #999;text-align:center;border-radius:2em}.typecho-install-patch li.current{color:#fff;font-weight:700}.typecho-install-patch li.current span{border-color:#fff}.typecho-install .typecho-install-body input{width:100%}.typecho-install-body .typecho-option li{margin:1em 0}#typecho-welcome{margin:1em 0;padding:1em 2em;background-color:#e9e9e6}.welcome-board{color:#999;font-size:1.15em}.welcome-board em{color:#444;font-size:2em;font-style:normal;font-family:Georgia,serif}#start-link{margin-bottom:25px;padding:0 0 35px;border-bottom:1px solid #ececec}#start-link li{float:left;margin-right:1.5em}#start-link .balloon{margin-top:2px}.latest-link li{white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.latest-link span{display:inline-block;margin-right:4px;padding-right:8px;border-right:1px solid #ececec;width:37px;text-align:right;color:#999}.update-check{font-size:14px}.typecho-login-wrap{display:table;margin:0 auto;height:100%}.typecho-login{display:table-cell;padding:30px 0 100px;text-align:center;vertical-align:middle}.typecho-login h1{margin:0 0 1em}.typecho-login .more-link{margin-top:2em;color:#ccc}.typecho-login .more-link a{margin:0 3px}.typecho-page-title h2{margin:25px 0 10px;font-size:1.28571em}.typecho-page-title h2 a{margin-left:10px;padding:3px 8px;background:#e9e9e6;font-size:.8em;border-radius:2px}.typecho-page-title h2 a:hover{text-decoration:none}.typecho-dashboard ul{list-style:none;padding:0}.typecho-dashboard li{margin-bottom:5px}.typecho-option-tabs{list-style:none;margin:1em 0 0;padding:0;font-size:13px;text-align:center}.typecho-option-tabs.fix-tabs{margin-bottom:1em}.typecho-option-tabs a{display:block;margin-right:-1px;border:1px solid #d9d9d6;padding:0 15px;height:26px;line-height:26px;color:#666;box-sizing:border-box}.typecho-option-tabs a:hover{background-color:#e9e9e6;color:#666;text-decoration:none}.typecho-option-tabs li{float:left}.typecho-option-tabs li:first-child a{border-radius:2px 0 0 2px}.typecho-option-tabs li:last-child a{border-radius:0 2px 2px 0}.typecho-option-tabs.right{float:right}.typecho-option-tabs li.current a,.typecho-option-tabs li.active a{background-color:#e9e9e6}.typecho-list-operate{margin:1em 0}.typecho-list-operate input,.typecho-list-operate button,.typecho-list-operate select{vertical-align:bottom}.typecho-list-operate input[type=checkbox]{vertical-align:text-top}.typecho-list-operate .operate{float:left}.typecho-list-operate .search{float:right}.typecho-list-operate span.operate-delete,a.operate-delete,.typecho-list-operate span.operate-button-delete,a.operate-button-delete{color:#b94a48}a.operate-edit{color:#070}a.operate-reply{color:#545c30}.typecho-list-operate a:hover{text-decoration:none}.typecho-list-table-title{margin:1em 0;color:#999;text-align:center}.typecho-table-wrap{padding:30px;background:#fff}.typecho-list-table{width:100%;border-collapse:collapse;table-layout:fixed}.typecho-list-table.deactivate{color:#999}.typecho-list-table .right{text-align:right}.typecho-list-table th{padding:0 10px 10px;border-bottom:2px solid #f0f0ec;text-align:left}.typecho-list-table td{padding:10px;border-top:1px solid #f0f0ec;word-break:break-all}.typecho-list-table td pre{overflow:auto}.typecho-list-table .status{margin-left:5px;color:#999;font-size:.92857em;font-style:normal}.typecho-list-table tbody tr:hover td{background-color:#f6f6f3}.typecho-list-table tbody tr.checked td{background-color:#fff9e8}.typecho-list-table tr td .hidden-by-mouse{opacity:0}.typecho-list-table tr:hover td .hidden-by-mouse{opacity:1}.warning{color:#b94a48}.comment-reply-content{position:relative;margin:1em 0;padding:0 1em;border:1px solid transparent;background-color:#f0f0ec}.comment-reply-content:after{position:absolute;right:1em;border:8px solid #f0f0ec;border-color:#f0f0ec #f0f0ec transparent transparent;content:" "}.comment-meta span,.comment-date{font-size:.92857em;color:#999}.comment-action a,.comment-action span{margin-right:4px}.comment-edit label{display:block}.comment-content img{max-width:100%}#typecho-respond{padding:10px;display:none}.typecho-theme-list img{margin:1em 0;max-width:100%;max-height:240px}.typecho-theme-list cite{font-style:normal;color:#999}.typecho-theme-list tbody tr.current td{background-color:#fff9e8}.typecho-page-main .typecho-option input.text{width:100%}.typecho-page-main .typecho-option input.num{width:40px}.typecho-page-main .typecho-option textarea{width:100%;height:100px}.typecho-page-main .typecho-option .multiline{display:block;margin:.3em 0}.typecho-page-main .typecho-option .multiline.hidden{display:none}.typecho-select-theme{height:25px;line-height:25px;margin:15px 0}.typecho-select-theme h5{color:#e47e00;font-weight:700;float:left;font-size:14px;width:120px;margin-right:10px}.typecho-select-theme select{width:150px}.typecho-edit-theme ul{list-style:none;margin:0;padding:0}.typecho-edit-theme li{padding:3px 10px}.typecho-edit-theme .current{background-color:#e6e6e3}.typecho-edit-theme .current a{color:#444}.typecho-edit-theme textarea{font-size:.92857em;line-height:1.2;height:500px}.typecho-post-area .edit-draft-notice{color:#999;font-size:.92857em}.typecho-post-area .edit-draft-notice a{color:#b94a48}.typecho-post-area .typecho-label{display:block;margin:1em 0 -.5em;font-weight:700}.typecho-post-area #auto-save-message{display:block;margin-top:.5em;color:#999;font-size:.92857em}.typecho-post-area .submit .right button{margin-left:5px}.typecho-post-area .right{float:right;padding-left:24px}.typecho-post-area .left{float:left}.typecho-post-area .out-date{border:1px solid #d3dbb3;padding:3px;background:#fff}.typecho-post-area input.title{font-size:1.17em;font-weight:700}.typecho-post-area .url-slug{margin-top:-.5em;color:#aaa;font-size:.92857em;word-break:break-word}.typecho-post-area #slug{padding:2px;border:none;background:#fffbcc;color:#666}.typecho-post-area #text{resize:none}#advance-panel{display:none}#custom-field{margin:1em 0;padding:10px 15px;background:#fff}#custom-field.fold table,#custom-field.fold .description{display:none}#custom-field .description{margin-top:10px;text-align:right}#custom-field .description button{float:left}#custom-field p.description{text-align:left}#custom-field .typecho-label{margin:0}#custom-field .typecho-label a{display:block;color:#444}#custom-field .typecho-label a:hover{color:#467b96;text-decoration:none}#custom-field table{margin-top:10px}#custom-field td{padding:10px 5px;font-size:.92857em;border-bottom:1px solid #f0f0ec;vertical-align:top}#custom-field td label{font-size:1em;font-weight:400}#custom-field select{height:27px}.typecho-post-area .is-draft{background:#fff1a8}.typecho-post-option .description{margin-top:-.5em;color:#999;font-size:.92857em}.category-option ul{list-style:none;border:1px solid #d9d9d6;padding:6px 12px;max-height:240px;overflow:auto;background-color:#fff;border-radius:2px}.category-option li{margin:3px 0}.visibility-option ul,.allow-option ul{list-style:none;padding:0}.typecho-page-main ul.tag-list{list-style:none;margin:0;padding:20px;background-color:#fff}.typecho-page-main ul.tag-list li{display:inline-block;margin:0 0 5px;padding:5px 5px 5px 10px;cursor:pointer}.typecho-page-main ul.tag-list li:hover{background-color:#e9e9e6}.typecho-page-main ul.tag-list li input{display:none}.typecho-page-main ul.tag-list li.checked{background-color:#fffbcc}.typecho-page-main ul.tag-list li.size-5{font-size:1em}.typecho-page-main ul.tag-list li.size-10{font-size:1.2em}.typecho-page-main ul.tag-list li.size-20{font-size:1.4em}.typecho-page-main ul.tag-list li.size-30{font-size:1.6em}.typecho-page-main ul.tag-list li.size-0{font-size:1.8em}.typecho-page-main .tag-edit-link{visibility:hidden}.typecho-page-main li:hover .tag-edit-link{visibility:visible}.typecho-attachment-photo{border:1px solid #e6e6e3;max-width:100%}#upload-panel{border:1px dashed #d9d9d6;background-color:#fff;color:#999;font-size:.92857em}#upload-panel.drag{background-color:#fffbcc}.upload-area{padding:15px;text-align:center}#file-list{list-style:none;margin:0 10px;padding:0;max-height:450px;overflow:auto;word-break:break-all}#file-list li,#file-list .insert{overflow:hidden;white-space:nowrap;text-overflow:ellipsis}#file-list li{padding:8px 0;border-top:1px dashed #d9d9d6}#file-list .insert{display:block;max-width:100%}#file-list .file{margin-left:5px}#file-list .info{text-transform:uppercase}#btn-fullscreen-upload{visibility:hidden}.edit-media button{margin-right:6px}.resize{display:block;margin:2px auto 0;padding:2px 0;border:1px solid #d9d9d6;border-width:1px 0;width:60px;cursor:row-resize}.resize i{display:block;height:1px;background-color:#d9d9d6}.tDnD_whileDrag{background-color:#fffbcc}.icons-sprite,.icons-icon-delete,.icons-icon-edit,.icons-icon-exlink,.icons-icon-upload-active,.icons-icon-upload,.icons-mime-application,.icons-mime-archive,.icons-mime-audio,.icons-mime-html,.icons-mime-image,.icons-mime-office,.icons-mime-script,.icons-mime-text,.icons-mime-unknow,.icons-mime-video,.i-edit,.i-delete,.i-upload,.i-upload-active,.i-exlink,.mime-office,.mime-text,.mime-image,.mime-html,.mime-archive,.mime-application,.mime-audio,.mime-script,.mime-video,.mime-unknow{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAEACAYAAACphba6AAAAAklEQVR4AewaftIAAAzmSURBVLXBbYxddZ3A8e/vd/4wnQEaGtsNrsZVI7Y+BZFVKAaEdaZ/y84aDQiboC+6L5g5AxQUV2k5oW08MIIQWWvnzDRq0YjIElGyDfXfGbfQxKSti1UQrE/7wqxrYjeBJez0ae757TWehsPJvcO9d+75fMTMWAoRYTFKzRwFn2RGF0IaCx1wlIQ0Fjrgk8zokFIzRxs+yYyKkMZClxyLCGksFHySGT1QaqbUzFHhk8wo8UlmLIFSM0dFSGOhJKSxsARKzRwlPsmMPnMUQhoLNVBqptRMqZlSM6VmSgt7vb9oz1WXr6Kw56rLV+31/iJ6oFTs9f4iIvmRMrRvz1WXr9pz1eWrlKF9RPKjvd5fRJccFY3o2O+Vof8SkXdFDO03QJA1ZvZcHh37PV1SKtY/sf9ozvyVYEdA1giyxrAjOfNXrn9i/1G6pLRhvELonVKx56rLVylD+wRZY9gRsCMga5ShfXuuunwVXXJURI3BNxHxRjN7Lmf+yuONQRmK+HeBN0aNwTcBR+mCUrEuhKdp2Idz5q9c/8T+ox8P4U8581fSsA+vC+FpuuRoYV0IT1Oy/on9R4Gj9ECpmVIzpWZKzZSaKTVzdGDv3r1bVXULheHhYaFDjpIQwvuiKNoFvAeQ4eFhoWndunVb5+bm3gRsoEtKSRRFu/I8/5eRkZFoeHhYKMzOzn7IzEaBXXRJebX3eO93WROF2dnZDwGPAp8YHh7+pzzPt9EF5dXEmijMzs5+CHgU+MTIyMhTNK1bt24rXVDa2L179xuAfwU+MTIy8hQ9UtoYHR39w4kTJ943MjLyFIW5uTmjS8qrmTRRGB0d/QMFaQKMLimv9mwIYYM0USJNIYQNwLN0yVHSaDQ2RFG0a3Z29mtzc3NCYXZ21oBnG43GBrrkKPHe/xS4gD5SaqbUTKmZUjNHwSeZ0YWQxkIHHCUhjYUO+CQzOqTUTGnDJ5lR8Elm9EhpwSeZ0eSTzHySGU0+yYweKC2ENBaaQhpLSGOhKaSx0AOlZkoLPsmMJp9k5pPMaPJJZvRAaSGksdAU0lhCGgtNIY2FHihthDQWCiGNhR4pNXOU+CQz+sxRCGks1ECpmVIzpWaOgk8yowshjYUOOEpCGgsd8ElmdMhR4ZPMaCGksdADR0VIY6GPHBU+yYxFhDQWuuCoCGks9JGjwieZ0UZIY6FLjoqQxkIfOSp8khkthDQWeuCoCGks9JFSM0eJTzKjzxyFkMZCDZSaKTVTauYo+CQzuhDSWOiAoySksdABn2RGh5SaKV3wSWZ0yVHhk8xCGotPMqMkpLGENBa6pFSENBba8ElmdEmp8ElmtBHSWOiSUhHSWGjDJ5nRJUeFTzILaSwhjYWKkMZCl5SKkMZCHyk1c5T4JDP6zFEIaSzUQKmZUjOlZo6CTzKjCyGNhQ44SkIaCyU+ySyksVDhk8zokLKIkMbik8xYAmURPskspLGwBMoiQhqLTzJjCZRF+CSzkMbCEiiLCGksLJGyCJ9k5pPMWAKlZo5FhDQWlkipmaPEJ5nRZ45CSGOhBkrNlJopNVNqpnTAb/rq352/cfsAPVBew/CmqevQaO9bznHfP3/j9gG6pCxieNPUdZHKQwiRCOvfco77/vkbtw/QBaUNf8eOf4xUHkKIKAis+5tzokvpgtLC8Kap60C/jRBxmtFo5Hb93F0T++iCUjG8aeq6SOUhhIjTjEYjt+vnJiceoUtKhSgXI0ScZjQauV0/NznxCD1QSvwdU1tn75r4jOX2Ff7MaDRyu35ucuIReqSUiWzxd0xt3Xv3xC252ZcbuV0/NznxCEvgqBLZ4u+YYvauic/QB46SkMZCnyk1U2qm1EypmaPgk8zoQkhjoQOOkpDGQgd8khkdUip8khlNPsmMgk8y80lmPsmMLikt+CQzSkIaC00hjYUuKS2ENBb6RKkIaSw0hTQWSkIaCz1QaqZU+CQzn2Tmk8wo+CQzeqS0ENJY6BOlQz7JzCeZ0SVHRUhjoSmksVAIaSz0yFHik8zoM0chpLFQA6VmSs2UmjkKPsmMLoQ0FjrgKAlpLHTAJ5nRIUeFTzJjESGNhS4oLVie/31ujNIHSgsmKvSJowUVdtMnymLMfmonT70ds5/SI2UReZ7ftvfejb/J8/w2eqS0YWZPzU7e9CRNs5M3PWlmT9EDpQ3L862UWJ5vpQeOipDGQguzkzc9CQhdcpT4JDP6zFEIaSzUQKmZUjOlZo6CTzKjCyGNhQ44SkIaCx3wSWZ0yFHhk8xYREhjoQtKC7kxSp8oLaiwm1fMG1wLzNMD5TWY2Y170/hRM7uRHjgqQhoLLey9a+JB4EG65KjwSWYsIqSx0AVHRUhjoY8cFT7JjBZCGgs9cFSENBb6yFHik8zoM0chpLFQA6VmSs2UmjkKPsmMLoQ0FjrgKAlpLHTAJ5nRIaUFn2Tmk8x8khkFn2RGD5Q2QhoLfaC04ZPM6ANHCyGNhYqQxkIPlJopLfgkMwo+ycwnmfkkM3qgdCCksdAjpQM+yYweOVoIaSwUQhoLS+Ao8Ulm9JmjENJYqIFSM6VmSs0cBZ9kRhdCGgsdcJSENBY64JPM6JBSM6UNn2T/NrIpeytLpLQ3KhHPjdwxteXKDduW0SNlEQLLVGTrGX/9V88Nb94xSg+UmjkWYXBczO459d9Hv7hv15bj9MDR3m5rcMveyYn/ZAkcbYQ0/gf6QKmZo8QnmdFnjkJIY6EGSs3EzKiTUjOlZkrNlJo5OrRt27YzzzvvvJuAT4rIajP7k4g8vbCwcM/ExMRPaEPpwPbt21e9/vWvPygi94vIhcCQiLwZuDqKogMzMzPbaMPRxs6dOy82sy8AF5x55plnACuA35rZnSJyKM/z5SJyHXCbiNw5MzPzu7GxsW9R4Whhenr6QhHZJyKDvOK5hYWFSyYmJl7mFYenp6efFZFvi8j9O3fufPiGG244RYlSMTU1dbaq3isig2a228zeb2YfXVhYuGFiYuJlKsbHxx8ysx8DK/M891Q4SmZmZkacc98BVprZsZMnT15z8803n+C17Qc+qKq7ZmZmPjU2NvZDCkphamrqHcDjwEozexy48+abbz5ByQMPPHDuzMzMZ6kws0fN7DFgpYh8b8eOHe+ioBScc4mIDAL3jo2NfWxsbOw+Su67776zBgcHnxCRL01PT99Fyfj4+OGxsbGrzWwLMOSc20RBKZjZZTTleX4/Fdu3bx9Yvnz5D0RkLU2qunl6evpzVIjIFH9xBQWlICLLgYaqvkDJtddeGw0MDHwXGKZEVe+Znp4eo+SPf/zjS2aWA0MUlIKZPQNEZvYRKubn5zfMz8+voGR+fn7FqVOnHqbkvPPOWy8iCvycgqNgZg+KyGUi8vXp6emNeZ4/efLkyeOXXnopt95664s07dy5k9NuvfXWF2l64IEHzhWRgWXLll0hIl+lSUQepOAojI+Pf2NmZmZURD6uqg+rKs45mgxQ2hgaGnqBEjN7bGxs7JsUlJLx8fGrzWwjcNDMTtC5k2Z2CLhlfHz8GkrEzKiTUjOlZkrNlJopNVNqptRMqZlSM0eH3n3t82ee8zZ3E8YnTWw1xp+Ap3PknkOTb/8JbSgdeN/Gw6vOfps7CNyPcKEgQyLyZhG5WoUDl2w+so02HG2s3fz8xYb7ghgXDJw1dAawAuO3OfmdjcbCIYl0uRJdp8JtoHdefPsvf3fwi+/4FhWOFt6/6fkLHW6fCIMITYIZz7380sIlv9jxzpd5xeEPbPrVs5HwbRG9/2/Hnn74P2YuOkWJUvHuG58/2+HuRRjE2J037P2NPP9obvkNv9jxzpepODS5+iGwH4vIyuh1Z3kqHCWXfP6XI2cvj76DsBLj2P/83++u+c1X1p/gNZjJfhE+KCa7PrDpV586NLn6hxSUwtrP/+IdotHjIrLSzB43ye/8zVfWn6Dkwk//7NxLNh/5LBUNFh41eExEVqrwvQ/c/vy7KCinRWckCINg9x6YXP2xA3evuY+SC/75mbMGlg0+IeiX1m7+9V2U/GTynYcP3P32qy1niyBDkUSbKCgFQy6jaf7UifupOH/jnoEht+wHIrKWv9h88e2/+hwVCwtM8WciV1BQTjOWYzTOeOnUC5TItY9Grzv7rd9FGKZEVe65+PYjY5Qc//3CSwY5ZkMUlNOEZxAiXXHWR6g4cezYhuPH5ldQcvzY/AqZ/9+HKTn7rdF6ATX4OQXHaWYPInJZpPr1S27/5cY8tydPnTp5/L1vOJ/DX37vizSt3fxrTjv85fe+SNOFn/7ZuQPmBmTwzCsQvkqTiT1IwVE4MLn6G2s3/XoU4eOi0cORQuQcZhigtLFscOgFCoJg8NjBu9d8k4JScuCLq6/O83yjGQcxTtAhw04Ch8BuOTi5+hpKxMyok1IzpWZKzZSa/T/9x7y6ojN1QAAAAABJRU5ErkJggg==);background-repeat:no-repeat}.icons-icon-delete{background-position:0 -16px;width:16px;height:16px}.icons-icon-edit{background-position:0 -112px;width:16px;height:16px}.icons-icon-exlink{background-position:0 -32px;width:16px;height:16px}.icons-icon-upload-active{background-position:0 -232px;width:24px;height:24px}.icons-icon-upload{background-position:0 -208px;width:24px;height:24px}.icons-icon-upload:active,.icons-icon-upload.icon-upload-active{background-position:0 -232px}.icons-mime-application{background-position:0 -80px;width:16px;height:16px}.icons-mime-archive{background-position:0 -96px;width:16px;height:16px}.icons-mime-audio{background-position:0 0;width:16px;height:16px}.icons-mime-html{background-position:0 -128px;width:16px;height:16px}.icons-mime-image{background-position:0 -144px;width:16px;height:16px}.icons-mime-office{background-position:0 -160px;width:16px;height:16px}.icons-mime-script{background-position:0 -176px;width:16px;height:16px}.icons-mime-text{background-position:0 -64px;width:16px;height:16px}.icons-mime-unknow{background-position:0 -48px;width:16px;height:16px}.icons-mime-video{background-position:0 -192px;width:16px;height:16px}@media (-webkit-min-device-pixel-ratio: 2),(min-resolution: 192dpi){.icons-sprite,.icons-icon-delete,.icons-icon-edit,.icons-icon-exlink,.icons-icon-upload-active,.icons-icon-upload,.icons-mime-application,.icons-mime-archive,.icons-mime-audio,.icons-mime-html,.icons-mime-image,.icons-mime-office,.icons-mime-script,.icons-mime-text,.icons-mime-unknow,.icons-mime-video,.i-edit,.i-delete,.i-upload,.i-upload-active,.i-exlink,.mime-office,.mime-text,.mime-image,.mime-html,.mime-archive,.mime-application,.mime-audio,.mime-script,.mime-video,.mime-unknow{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAIACAYAAADE5+8DAAAAAklEQVR4AewaftIAABkXSURBVNXBC5ScdX3w8e/vN/9ckDTBC3kJIjfFRKhilbC5WI6BZB4TsadiIB7S81qONbtPLnpaFcgyPbN7zuOG21vOScg+u9tWKhhtisW+xSY+k5QEWwMbBVsKEbwEWqmHi741mEIuu8/vnR4GMww7OzObndn9fz5iZkwkEeFkKJ5TPKd4zlEhyMVGEyVRKIwjxXOOKpIoFMZRkIuNJlA8p3hO8ZyjQUEuNuqQRKHQAornHGOURKEwgiAXGy2keE7xnOI5xXOK5xw1BLnYGEWQi40JpHhO8ZziOUcNSRQKo0iiUJhAiucUzymec1QR5GLDA4rnHBWSKBQ8onhO8ZziOcVziucUzymeUzyneE7xnOI5pQFSRA1SRAspdbp3yZIZ314ePFBYEayiisKKYNW3lwcP3LtkyQxaRKnDvUuWzJh5yvSdIvJhE91WWBGsokJhRbDKRLeJyIdnnjJ9571LlsygBZQapGjmKdPuF+FDFAlkTHRbYUWwipLCimCViW4TyFAkwodmnjLtfimiyTJdXV2Mpquri4Pb7jliIh8XUIoE1EQ+fnDbPU/9dNtXf9tEtwlkKDEYFqzznh//5HFq6O7u5mQodcjuSLaLpasNhikRyJjo10z0awIZSgyGxdLV2R3JdlpAqVN2R7JdLF1tMEyJgAooJQbDYunq7I5kOy2iNCC7I9kulq42SKlgkIqlq7M7ku20kOI5pQGFFcEqE90moFQQUBPdVlgRrKKFlDoVVgSrTHSbQIYSg9QgpUQgY6LbCiuCVbSIUofCimCViW4TyFBiMCyWXiuWXmswTIlAxkS3FVYEq2gBpQYpMqRDIEOJwbBYujq7I9me3ZFsF0tXGwxTIpAxpEOKaDKlBit66ZWjHzPjnykyGBZLV2d3JNspye5Itoulqw2GKTLjn1965ejHrIgmU+pw9Z49h1965chyM9srlq7O7ki2UyG7I9kulq42s70vvXJk+dV79hymBZQ6Xb1nz+GP7Ewuz+5ItlNFdkey/SM7k8uv3rPnMC0iZsZEEhFOhuI5xXOK5xTPKZ5TPKd4TvGc4jnFc4rnFM8pnnOMk0Kh0KWqeapYunSp0ATKOMlms11pmnbTYo5RdHd3u8WLF3/BzFYC7xWRqZQsXbpUqJDNZrsKhQKqmqdFHFV0d3e7RYsW/SNwmYjQgF4gBGbTAo4qFi9e/AXgMjN7HLhu3759j+bz+ZRRFAqF2SLyADAbeAGYTZM5qjCzlSJC0XXLli37/rJlyxhNoVCYLSIPiMhFZvaEmV0OrFXVPE2kVPdeivbt2/coNRQKhdki8oCIXGRmT5jZ5dls9oVsNtuVpmk3TaRUISJTKcrn8ymj2Llz5+ki8oCIXGRmT5jZ5dls9gVKstlsV5qm3TSJchJ27tx5unNuj4hcZGZPmNnl2Wz2BSpks9kumkQZo507d57unNsjIheZ2RNDQ0NLstnsC7SYMgY7d+483Tm3R0QuMrMnhoaGlixfvvxFJoAyBplM5goRudDMnhgaGlqyfPnyF5kgjjHIZrN/XSgUGB4e/sfly5e/yAh2795tFC1dulRoIscYZbPZv2YSUDynVGFmxyjq7u5WGtTd3a0Umdkxmkyp7t8oWrRo0QdoUFtb2wd51b/RZEoVIvINXnXXrl27Lunu7lZq6O7u1m9/+9vzM5nMlykSkW/QZI4qvvvd796+aNGi5SJyGfC9xYsXs3v3bkazePFiXmNm39m3b9/tS5cupZmUKvL5/NC+ffuuADaa2SNmdowazOyYmT0CbNy3b98V+Xx+iCZzjCKfzw8BNwM306ClS5fSCornFM8pnlM8p3hO8ZziOcVziuccFYJcbDRREoXCOFI856giiUJhHAW52GgCxXOK5xTPKQ0KcrEFudioEORiC3Kx0WKK5xx1CnKxUSbIxcYIglxsFCVRKLSA4jlHnZIoFIqCXGwUJVEolAlysVGURKHQQornFM8pnnPUKcjFRpkgFxsjCHKxUZREodACiuccdUqiUCgKcrFRlEShUCbIxUZREoVCCymeczQoiUJhBEkUChNA8ZziOcVzjiqCXGx4QPGco0IShYJHFM8pnlM8p3hO8ZziOcVzjgpBLjaaKIlCYRwpnnNUkUShMI6CXGw0geI5Rw1BLjYakESh0EKK5xw1JFEoTGKK5xw1BLnYOAlJFApNpHjOUUMShcIkpnjOUUOQi40xSKJQaAHFc44akigUJjHFc44aglxsNCCJQqGFFM85akiiUJjEFM8pnlM856giyMWGBxTPOSokUSh4RPGc4jnFc4rnFM8pnlM856gQ5GKjiZIoFMaR4jlHFUkUCuMoyMVGEyieUzyneE5pkiAXW5CLjSZTPOeoIcjFRlEShUJRkIuNUSRRKBQlUSi0gOI5Rw1JFApjEORioyiJQqGJFM85aghysVGURKHQgCQKhRZQPOeoIYlCYQyCXGwUJVEoNJHiOUcNQS42ipIoFIqSKBTqkESh0AKK5xw1JFEoTGKK5xTPKZ5zVBHkYsMDiuccFZIoFDyieE7xnOI5xXOK5xTPKZ5zVAhysdFESRQK40jxnKOKJAqFUQS52ChKolCoQ5CLjSZQPOcYoyQKhaIgFxtFSRQKE0DxnGOMglxsFCVRKEwgxXOOMUqiUCgKcrFRlEShMAEUzznGKMjFRlEShcIEUjznGKMkCoVJQPGcY4yCXGyUSaJQmACK5xTPKZ5zjFEShcIkoHhO8ZziOUcVQS42PKB4zlEhiULBI4rnFM8pnlM8p3hO8ZziOcVziueUcSRFtJgyToLOrW3LOrc+uuzGzWfTQso4CDq3tploIiLvF+f2Lrtx89m0iHKSgs6tbSaaiDCLIkHOE+f2Lrtx89m0gHISgs6tbSaaiDCLMoKcJ87tXXbj5rNpMmWMgs6tbSaaiDCLEQhynji3d9mNm8+miZQxCDq3tploIsIsRiHIeZJx/1eKaBKlQUHn1jYTTUSYRQ1mHBKzDiuiSZQGBJ1b20w0EWEWNZhxSCwNkp51gzSRUqegc2ubiSYizKIGMw6JpUHSs26QJlPqEHRubTPRRIRZ1GDGIbE0SHrWDdICSg1B59Y2E01EmEUNZhwSS4OkZ90gLaLUkIr8bxFmUYMZh8TSIOlZN0gLKTXs7nlxA2Z3MwozDomlQdKzbpAWU6oIburtosgsnxZ6XrwOs7sZgRmHxNIg6Vk3yARQqhHJBzf1dlFklk8LPS9eh9ndlDHjkFgaJD3rBpkgymhE8sFNvV0UmeXTQs+L12F2N0VmHBJLg6Rn3SATSKlFJB/c1NtFkVk+LfS8eF1q1iuWBknPukEmmKMeIvngpl6SL63tMsunwDomCaVeIvngpt4uJhlHFUkUCh5QPKd4TvGc4jnFc4rnFM8pnlM856gQ5GKjiZIoFMaR4jlHFUkUCuMoyMVGEyiec9QQ5GKjKIlCoSjIxUZREoVCmSAXGyNIolBoIsVzjjoFudgYRRKFQlGQi42iJAqFFlA8p9QpiUJJolCYZBTPOWpIolAok0ShMIokCoUWUjyneE7xnKOGIBcbI0iiUCgT5GKjKIlCoYUUzyl1SqJQkigUJhnFc45xFuRio0wShUITKZ5z1JBEoVAmiUJhBEkUChNA8ZyjiiAXGx5QPOeokESh4BHFc4rnFM8pnlM8p3hO8ZyjQpCLjSZKolAYR4rnHFUkUSiMoyAXG02geM5RQ5CLjZOQRKHQRIrnHHUyY+fxoaE1FE1xbkCE5UwCSp2ODw2t2XPLhmf33LLh2eNDQ2uYJBTPOeo0xbmBJTdsWUPRFOcGmCQcdRJh+dQp7mdMMornHCfD7MUUuY4ixe5C5HRaTDkJZvaHu74U/sOuL4X/YGZ/yARQxsjMHiz0rNtBSaFn3Q4ze5AWU8bI0rSLCpamXbSYMgZm9uCuTev3UmHXpvV7zexBWkgZA0vTLqqwNO2ihZQGmdmDuzat30sVuzat32tmD9IiSoMsTbuowdK0ixZx1JBEodCgXZvW7wWEFlA856giyMWGBxTPOSokUSh4RPGc4jnFc4rnFM8pnlM856gQ5GKjiZIoFMaR4jlHFUkUCuMoyMVGEyiec9QQ5GLjJCRRKDSR4jmlTpamH02NK5lklDqZqDAJOeqkwrcYhcFXKBL4FC3kGAdmHPh/v3hhLUVvedvs+SJcSIsoJ+/l1Iau/n5//uXv9+dfTm3oauBlWkQ5SWa2bnfPhgOU7O7ZcMDM1tEijhqSKBQaVPjS2r8C/ooWUDznqCHIxcZJSKJQaCLFc44akigUJjHFc44aglxsNCCJQqGFFM85akiiUJjEFM85qghyseEBxXOOCkkUCh5RPKd4TvGc4jnFc4rnFM85KgS52GiiJAqFcaR4zlFFEoXCOApysdEEiuccdQpysTGCJAqFMkEuNoqSKBRaQPGc0qAkCiWJQmGSUDznaFCQi41JRPGco05JFAp1SKJQaCHFc4rnFM856hTkYqMoiUKhTJCLjREkUSi0gOI5ZZwkUShJFAotpnjOMU6CXGxMAMVzjjolUSiMIIlCYQIpnnNUEeRiwwOK5xwVkigUPKJ4TvGc4jnFc4rnFM8pnnNUCHKx0URJFArjSPGco4okCoVxFORiowkUzymeUzynNCjIxfcv2xifzyShNO5KyfDEspt680uu657OBFPGQGC6inRNOXP2E0s7t17JBFJOggjnZ1TvD3Lx/cs2xuczAZTxcaVkeGLZTb35Jdd1T6eFlHEiMF1FuqacOfuJpZ1br6RFFM85xonBETG75fjPX7x5z135I7SIY3x8y4b5XGHT2oO0mOMkmHEwtfRzu3vWfYsJ4hgDgyNidsvxn79485678keYQI7GfcuG+Vxh09qDTAKOBiVR+DEmEcVziucUzzmqCHKx4QHFc44KSRQKHlE8p3hO8ZyYGT5TPKd4TvGc4jnFc4rnFM8pnlM852iivr6+c1X1WjNbJiLnmNmZIvJrM/tP4Dtpmv59GIa7OQmOJhgYGJhjZptV9ROAFPE/RISiaSLyNuDiTCazob+//wdpml4fhuFuxkAZZ/39/VcBB0RkJSDUICK/k8lkCv39/bdec801GRqkjKP+/v6VwHbgNBojRV9cunTpX0oRDXCMwcDAwBTgWmCVmb0PmAIcBC4REcfrPWpm29I0fSSTyTyfpulM4GJVXQlkeb1P9fX1/Qz4U+rkaNDWrVvf6py7X0QWUiQilMymjJkdBXLPPffcn+Xz+ZTX2w/8eRzHv6uqXxeRt1MiIhv7+vru7+jo2E8dlAYMDAyc7Zz7rogsZHQvp2m6uL29/fZ8Pp9SRRiG/3T8+PFLgWc5ISMit1EnpQFmdpeIzKWGNE07wjB8hDqsX7/+58BKwCgRkct6e3vnUwelTv39/ZeJyOWUMbPH0zT9NLDAzD4J/IuZ7ero6LiHBqxZs2bQzP6WMplM5mrq4KhDb2/v+51zt/J6hWPHjv3ehg0bjvKqwS1btux0zp3LGJjZX4jISk7IAtdTg2MUvb2973DO3eGcuwoQTrChoaE/2rBhw1HKbNiw4SXgMcbg+eeff3DOnDlHgOkUicjFAwMD3wQ+s2bNml9QhVLFli1bzspkMnuBTwDC6/107dq1P2Mc5fP5I8AzvN7vA4/FcTyXKpQRbNmy5fSpU6c+ICLnU8bMUjN7xsx+RZ36+vouveaaazLU5z94ozmZTObvbr311t9iBMoIpk2blhORCygxs9TMbjl27NgZ7e3t57W3t8+nDn19fZeLyHeuuOKKL0sRNbS3t39keHh4HnAHYJwwb9asWZsZgZgZ5QYGBuYAB4HplJjZuvb29l4aMDAw0GZmu0VkBq+6c82aNRuoU19f38dV9T5OOD40NHT22rVrn6OMUiFN0/XAdE4otLe399KAgYGB95rZThGZwQnrBwYGIurU0dHxTTP7G06Y4pz7DBWUCqp6BWXMrIsG9Pb2vsvMCiLyZt7opv7+/i9QpzRN76SMmS2iglLBzN7FCcefe+65Qeq0ZcuWs5xzu0XkDKoQkdsGBgbWUIc0TQ9QRkTOp4JSQURmUmJmh/P5fEodtmzZcvrUqVN3A+dQg5nFfX19n6SGdevW/RJ4mRIzO5MKSgUz+yUlIvLmvr6+2dQwMDAwa+rUqYmIzKUOIqJFd/f19V3JKPr6+t4OvIkT/osKjgoichA4gxIR+RBwH6MYGhoaVtWrzIzXqOrTjCBN0/MoUdWjjG4xZUTkIBUcFcwsEZFFnHBzd3f3jnw+f4Qq1q5dexg4TJmBgQFG0tHR8Qx1uOOOO0459dRTeyhjZgkVlArDw8NfM7MhSkTkgjPOOOOeLVu2zKRFtmzZMvPUU0+9B3gnJxw3s69TwVFh7dq1P+nv7/8K8GlKRGTltGnT5vf399+Zpun3ROTfqdDR0fEMY9DX13cuJap6FtA2bdq0dcB5vN6XOzo6nqGCYwQi8nkzu0xELuCEc0TktkwmQyUzS4EMY6CqT1ODmT116NChLzICZQRr1qw5BHwUeJoJZmYHh4eHr7z++ut/zQiUKtrb23+cpukCM/sGE8TM7jOzhWvXrv0JVThG0dHR8QJwdV9f36Ui8gfAFcBZIjKTJjCzwyLyrJk9AHy1vb39IWpw1KGjo2M/sJ8SKaJCe3s75drb25URrFmzhnLt7e1KiRXRIDEzfKZ4TvGc4jnFc4rnFM8pnlM8p3hO8ZziOcVziucUzymeUzyneE7xnKOJFm588tzUuFZEliGcIyZnGvZrkP8U4TvDNvz3+ze9ZzcnwdEEl/zxD+e4U3Qz6CdUEV4jIMg04G3AxRnJbFi48Uc/GGb4+v2b3rObMVDG2cIbnrzKnZI5IMhKEYRahN9RMoUFG5+6Va65N0ODlHG04IanVpKR7QKn0QARpOiLC9558V9KEQ1wjMEl7Y9Mybz11GvFZJWIvA9jisFByXAJiON17FGQbcND6SNpqs9LZmimE73YRFaKSJZywqfaNj75M+BPqZOjQW2dT77VvWXG/YIsRHiVgMBsEH7DOGqS5gY3bf8zs3zK6+0H/rzt+gO/q859HXg7JWKycf4NB+7/3i0X7qcOSgMuufHA2WLyXRFZyCgMe9lIFz/cM+92s3xKFYO3XvhPR4ftUjOe5TVCJqPuNuqkNMBJ5i4RmUtN0vHwpnmPUIdHb5n7c5GhlWYYJSJcdunGH82nDkqdLr3xh5eJyOW8jj1uZp+GoQUYnzT4F4NdD/e8+x4a8FDPhYOI/S1lFLuaOjjqcOn1B96vGXcrZcys8Mv/Pvh7P968/CivGlzw2cGdTDvtXMbAUvsLUVnJb0gWuJ4aHKO49POPv0OnTrlDM+4qEYQSMyw9dvyPfrx5+VHKPLy57SXgMcbgheefe/CMOWceAaZTJMLFCzqf+ubQMfnM929/9y+oQqliwQ2PnaVTp+4VkU+IIJQR+On+//PbP2McPX3Xh4+APUMZQX7fTbXH5t/w1FyqUEbwgc/+4HR02gMinE8Zg9TMnjGxX1Gn+TccuFSuuTdDHcz4DyoIMsdl+Lt5Nzz1W4xAGcHUU9+UE5ELKDFIU7Nbjh3+7zMe3jT3vId75s6nDm0bn7rcqftO2zsv/rIUUcPgzfM+MjRs87D0DjOM35B5p6lsZgRiZpS75I9/OGfKKZmDwHRKzFj38KZ399KAhZ0H2iCzG2QG/8O486FN795Ando2/vDjKpn7KDGz4+nw8Nn7b73wOcooFaacklkPTKfEzAoPb3p3Lw245MYn34tldoLM4DXC+raNT0XUaXDTe74J9jeUiMgUzWQ+QwWlghlXUMbEumjABzceeJcTKSDyZiqoyE0LOp/8AnVKh4bvpIzAIioob2DvosTMju/ftH2QOi244bGzpkpmt4icQRWC3rZg45NrqIfTA5QxOJ8KyhvNpETgsFk+pQ4f+OwPTken7QY5h1pE4wU3/vCT1DDYM++Xhr1MiQhnUkF5o1/yGpE3X/zFx2ZTwyU3PjJr2qmnJiIylzoIKKJ3t3U+eSWjeP+f/OvbBXkTJYb8FxUcFQQOAmdQ8iad+iHgPkZx5NenDE+ZmV6FcYLo04zE0vMoEmDoFTvKKKZOnb6YMoIdpIKjgpkkIiyixFRuPu+6vTuevuvDR6ji8a0XHgYOU2Zh548YyUOb5j1DHd7xJw+dctb0t/ZQxswSKigVjsvQ18CGKBGRC/7XnDn3LPjs4ExaZMFnB2e+fdpb7gHeSYmZHRf4OhUcFR7ZdOFPFnY+9RXg05QIspIZp81f0PnknekQ38tk+HcqPLRp3jOMwcKNT55LiZmehaRtzDhtnSDnUU748kM9856hgmMEx9PDn3cy4zIRuYDfkHMEuS3jeAODFMgwFqJPUyJCkVLJzJ76VcoXGYEygu/f/MFDDKcfNexpJpgZB48zfOWTt8z9NSNQqnj41vf8+JXjRxcY9g0miMF9rwwdWfjIpgt/QhWOUfzrbe97Abh6/g0HLnUZ9wcGVwBnCcykKeww8KwZD5jYVwd75j1EDY46fO+WC/cD+ymRIir1GOUe3jRXGUmPUe7hTXOVEiuiQWJm+EzxnOI5xXOK5xTPKZ5TPKd47v8DSLDjbNI9np0AAAAASUVORK5CYII=);background-repeat:no-repeat;background-size:24px 256px}.icons-icon-delete{background-position:0 -16px}.icons-icon-edit{background-position:0 -112px}.icons-icon-exlink{background-position:0 -32px}.icons-icon-upload-active{background-position:0 -232px}.icons-icon-upload{background-position:0 -208px}.icons-icon-upload:active,.icons-icon-upload.icon-upload-active{background-position:0 -232px}.icons-mime-application{background-position:0 -80px}.icons-mime-archive{background-position:0 -96px}.icons-mime-audio{background-position:0 0}.icons-mime-html{background-position:0 -128px}.icons-mime-image{background-position:0 -144px}.icons-mime-office{background-position:0 -160px}.icons-mime-script{background-position:0 -176px}.icons-mime-text{background-position:0 -64px}.icons-mime-unknow{background-position:0 -48px}.icons-mime-video{background-position:0 -192px}.i-edit{background-position:0 -112px}.i-delete{background-position:0 -16px}.i-upload{background-position:0 -208px}.i-upload:active,.i-upload.icon-upload-active,.i-upload-active{background-position:0 -232px}.i-exlink{background-position:0 -32px}.mime-office{background-position:0 -160px}.mime-text{background-position:0 -64px}.mime-image{background-position:0 -144px}.mime-html{background-position:0 -128px}.mime-archive{background-position:0 -96px}.mime-application{background-position:0 -80px}.mime-audio{background-position:0 0}.mime-script{background-position:0 -176px}.mime-video{background-position:0 -192px}.mime-unknow{background-position:0 -48px}}.i-edit,.i-delete,.i-exlink,.mime-office,.mime-text,.mime-image,.mime-html,.mime-archive,.mime-application,.mime-audio,.mime-script,.mime-video,.mime-unknow,.i-upload,.i-upload-active{display:inline-block;vertical-align:text-bottom;text-indent:-9999em}.i-edit:hover,.i-delete:hover,.i-exlink:hover,.mime-office:hover,.mime-text:hover,.mime-image:hover,.mime-html:hover,.mime-archive:hover,.mime-application:hover,.mime-audio:hover,.mime-script:hover,.mime-video:hover,.mime-unknow:hover,.i-upload:hover,.i-upload-active:hover{opacity:.75}.i-edit,.i-delete,.i-exlink,.mime-office,.mime-text,.mime-image,.mime-html,.mime-archive,.mime-application,.mime-audio,.mime-script,.mime-video,.mime-unknow{width:16px;height:16px}.i-upload,.i-upload-active{width:24px;height:24px}.i-edit{background-position:0 -112px}.i-delete{background-position:0 -16px}.i-upload{background-position:0 -208px}.i-upload:active,.i-upload.icon-upload-active,.i-upload-active{background-position:0 -232px}.i-caret-up,.i-caret-down,.i-caret-left,.i-caret-right{display:inline-block;border-style:solid;border-color:transparent transparent #bbb transparent;border-width:3px 4px 5px}.i-caret-down{border-color:#bbb transparent transparent transparent;border-width:5px 4px 3px}.i-caret-left{border-color:transparent #bbb transparent transparent;border-width:4px 5px 4px 3px}.i-caret-right{border-color:transparent transparent transparent #bbb;border-width:4px 3px 4px 5px}.i-exlink{background-position:0 -32px}.mime-office{background-position:0 -160px}.mime-text{background-position:0 -64px}.mime-image{background-position:0 -144px}.mime-html{background-position:0 -128px}.mime-archive{background-position:0 -96px}.mime-application{background-position:0 -80px}.mime-audio{background-position:0 0}.mime-script{background-position:0 -176px}.mime-video{background-position:0 -192px}.mime-unknow{background-position:0 -48px}.i-logo:hover,.i-logo-s:hover{opacity:.2}.i-logo-s{width:26px;height:26px;background-size:auto 26px}.editor{margin-bottom:-.5em}.editor-editor-bold{background-position:0 -20px;width:20px;height:20px}.editor-editor-code{background-position:0 -140px;width:20px;height:20px}.editor-editor-exit-fullscreen{background-position:0 -40px;width:20px;height:20px}.editor-editor-fullscreen{background-position:0 -60px;width:20px;height:20px}.editor-editor-heading{background-position:0 -80px;width:20px;height:20px}.editor-editor-hr{background-position:0 -100px;width:20px;height:20px}.editor-editor-image{background-position:0 -120px;width:20px;height:20px}.editor-editor-italic{background-position:0 0;width:20px;height:20px}.editor-editor-link{background-position:0 -160px;width:20px;height:20px}.editor-editor-more{background-position:0 -180px;width:20px;height:20px}.editor-editor-olist{background-position:0 -200px;width:20px;height:20px}.editor-editor-quote{background-position:0 -220px;width:20px;height:20px}.editor-editor-redo{background-position:0 -240px;width:20px;height:20px}.editor-editor-ulist{background-position:0 -260px;width:20px;height:20px}.editor-editor-undo{background-position:0 -280px;width:20px;height:20px}.wmd-button-row{list-style:none;margin:0;padding:0;height:26px;line-height:1}.wmd-button-row li{display:inline-block;margin-right:4px;padding:3px;cursor:pointer;vertical-align:middle;border-radius:2px}.wmd-button-row li:hover{background-color:#e9e9e6}.wmd-button-row li.wmd-spacer{height:20px;margin:0 10px 0 6px;padding:0;width:1px;background:#e9e9e6;cursor:default}.wmd-button-row li span{display:block;width:20px;height:20px}.wmd-button-row li#wmd-bold-button span{background-position:0 -20px}.wmd-button-row li#wmd-italic-button span{background-position:0 0}.wmd-button-row li#wmd-link-button span{background-position:0 -160px}.wmd-button-row li#wmd-quote-button span{background-position:0 -220px}.wmd-button-row li#wmd-code-button span{background-position:0 -140px}.wmd-button-row li#wmd-image-button span{background-position:0 -120px}.wmd-button-row li#wmd-olist-button span{background-position:0 -200px}.wmd-button-row li#wmd-ulist-button span{background-position:0 -260px}.wmd-button-row li#wmd-heading-button span{background-position:0 -80px}.wmd-button-row li#wmd-hr-button span{background-position:0 -100px}.wmd-button-row li#wmd-more-button span{background-position:0 -180px}.wmd-button-row li#wmd-undo-button span{background-position:0 -280px}.wmd-button-row li#wmd-redo-button span{background-position:0 -240px}.wmd-button-row li#wmd-fullscreen-button span{background-position:0 -60px}.wmd-button-row li#wmd-exit-fullscreen-button span{background-position:0 -40px}#btn-cancel-preview{display:none}.wmd-edittab{float:right;margin-top:3px;font-size:.92857em}.wmd-edittab a{display:inline-block;padding:0 8px;margin-left:5px;height:20px;line-height:20px}.wmd-edittab a:hover{text-decoration:none}.wmd-edittab a.active{background:#e9e9e6;color:#999}.wmd-hidetab{display:none}.wmd-visualhide{visibility:hidden}.wmd-prompt-background{background-color:#000}.wmd-prompt-dialog{position:fixed;z-index:1001;top:50%;left:50%;margin-top:-95px;margin-left:-200px;padding:20px;width:360px;background:#f6f6f3}.wmd-prompt-dialog p{margin:0 0 5px}.wmd-prompt-dialog form{margin-top:10px}.wmd-prompt-dialog input[type=text]{margin-bottom:10px;width:100%}.wmd-prompt-dialog button{margin-right:10px}#wmd-preview{background:#fff;margin:1em 0;padding:0 15px;word-wrap:break-word;overflow:auto;border-radius:2px}#wmd-preview img{max-width:100%}#wmd-preview code,#wmd-preview pre{padding:2px 4px;background:#ddd;font-size:14px}#wmd-preview code{color:#c13}#wmd-preview pre{padding:1em}#wmd-preview pre code{padding:0;color:#444}#wmd-preview blockquote{margin:1em 1.5em;padding-left:1.5em;border-left:4px solid #e9e9e6;color:#777}#wmd-preview hr{margin:2em auto;width:100px;border:1px solid #e9e9e6;border-width:2px 0 0 0}#wmd-preview .summary:after{display:block;margin:2em 0;background:#fff9e8;color:#cf9900;font-size:.85714em;text-align:center;content:"- more -"}#wmd-preview table{width:100%}#wmd-preview table th,#wmd-preview table td{border:1px solid #ddd;padding:5px 8px;word-break:break-all}#wmd-preview table th{background:#eee}#wmd-preview span.line{display:inline;height:1px;line-height:1px;position:absolute}#wmd-preview .focus,#wmd-preview .focus *{background-color:#ffe60080!important}@keyframes fullscreen-upload{0%{opacity:0}to{opacity:1}}.fullscreen #wmd-button-bar,.fullscreen #text,.fullscreen #wmd-preview,.fullscreen .submit{position:absolute;top:0;width:50%;background:#fff;z-index:999;box-sizing:border-box;border-radius:0}.fullscreen #wmd-button-bar{left:0;padding:13px 20px;border-bottom:1px solid #f3f3f0;z-index:1000}.fullscreen #text{top:53px;left:0;padding:20px;border:none;outline:none}.fullscreen #wmd-preview{top:53px;right:0;margin:0;padding:5px 20px;border:none;border-left:1px solid #f3f3f0;background:#f6f6f3;overflow:auto}.fullscreen .submit{right:0;margin:0;padding:10px 20px;border-bottom:1px solid #f3f3f0}.fullscreen #upload-panel{-webkit-box-shadow:0 4px 16px rgba(0,0,0,.225);box-shadow:0 4px 16px #00000039;border-style:solid}.fullscreen #tab-files{position:absolute;top:52px;right:0;width:280px;z-index:1001;animation:fullscreen-upload .5s}.fullscreen .wmd-edittab,.fullscreen .typecho-post-option,.fullscreen .title,.fullscreen .url-slug,.fullscreen .typecho-page-title,.fullscreen .typecho-head-nav,.fullscreen .message{display:none}.fullscreen .wmd-hidetab{display:block}.fullscreen .wmd-visualhide,.fullscreen #btn-fullscreen-upload{visibility:visible}.preview .submit{width:100%;background:#ffd}.preview #wmd-button-bar,.preview #wmd-preview,.preview #text,.preview #upload-panel,.preview #tab-files,.preview #btn-preview,.preview #btn-fullscreen-upload,.preview #auto-save-message{display:none}.preview .preview-frame{width:100%;border:0;padding:0;margin:0;background:#fff;z-index:999;position:absolute;top:53px;left:0}.preview .preview-loading{background-image:url(data:image/gif;base64,R0lGODlhEAAQAPQAAPn595mZmfb29K2trcrKyZqamqenpunp6NfX1qCgoMTEw76+vu7u7NLS0OPj4bOzs7m5uAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAAFUCAgjmRpnqUwFGwhKoRgqq2YFMaRGjWA8AbZiIBbjQQ8AmmFUJEQhQGJhaKOrCksgEla+KIkYvC6SJKQOISoNSYdeIk1ayA8ExTyeR3F749CACH5BAkKAAAALAAAAAAQABAAAAVoICCKR9KMaCoaxeCoqEAkRX3AwMHWxQIIjJSAZWgUEgzBwCBAEQpMwIDwY1FHgwJCtOW2UDWYIDyqNVVkUbYr6CK+o2eUMKgWrqKhj0FrEM8jQQALPFA3MAc8CQSAMA5ZBjgqDQmHIyEAIfkECQoAAAAsAAAAABAAEAAABWAgII4j85Ao2hRIKgrEUBQJLaSHMe8zgQo6Q8sxS7RIhILhBkgumCTZsXkACBC+0cwF2GoLLoFXREDcDlkAojBICRaFLDCOQtQKjmsQSubtDFU/NXcDBHwkaw1cKQ8MiyEAIfkECQoAAAAsAAAAABAAEAAABVIgII5kaZ6AIJQCMRTFQKiDQx4GrBfGa4uCnAEhQuRgPwCBtwK+kCNFgjh6QlFYgGO7baJ2CxIioSDpwqNggWCGDVVGphly3BkOpXDrKfNm/4AhACH5BAkKAAAALAAAAAAQABAAAAVgICCOZGmeqEAMRTEQwskYbV0Yx7kYSIzQhtgoBxCKBDQCIOcoLBimRiFhSABYU5gIgW01pLUBYkRItAYAqrlhYiwKjiWAcDMWY8QjsCf4DewiBzQ2N1AmKlgvgCiMjSQhACH5BAkKAAAALAAAAAAQABAAAAVfICCOZGmeqEgUxUAIpkA0AMKyxkEiSZEIsJqhYAg+boUFSTAkiBiNHks3sg1ILAfBiS10gyqCg0UaFBCkwy3RYKiIYMAC+RAxiQgYsJdAjw5DN2gILzEEZgVcKYuMJiEAOwAAAAAAAAAAAA==);background-position:center;background-repeat:no-repeat}.preview #btn-cancel-preview{display:inline-block}#ui-datepicker-div{display:none;margin-top:-1px;padding:10px;border:1px solid #d9d9d6;background:#fff}.ui-timepicker-div .ui-widget-header{margin-bottom:8px}.ui-timepicker-div dl{text-align:left}.ui-timepicker-div dl dt{float:left;clear:left}.ui-timepicker-div dl dd{margin:0 0 10px 40%}.ui-tpicker-grid-label{background:none;border:none;margin:0;padding:0}#ui-datepicker-div .ui-datepicker-header{margin-bottom:10px;padding-bottom:10px;border-bottom:1px solid #eee}#ui-datepicker-div .ui-datepicker-prev{float:left;cursor:pointer}#ui-datepicker-div .ui-datepicker-next{float:right;cursor:pointer}#ui-datepicker-div .ui-datepicker-title{font-weight:700;text-align:center}#ui-datepicker-div .ui-datepicker-calendar th{line-height:24px}#ui-datepicker-div .ui-datepicker-calendar a{display:block;width:30px;background-color:#f3f3f0;line-height:24px;text-align:center}#ui-datepicker-div .ui-datepicker-calendar a:hover{background-color:#e9e9e6;text-decoration:none}#ui-datepicker-div .ui-datepicker-today a{background-color:#e9e9e6;color:#444}#ui-datepicker-div .ui-datepicker-current-day a{background-color:#467b96!important;color:#fff}#ui-datepicker-div .ui-timepicker-div{margin-top:20px;border-top:1px solid #eee}#ui-datepicker-div .ui-slider{position:relative;margin-top:18px;border:1px solid #e9e9e6;background-color:#f6f6f3;height:4px}#ui-datepicker-div .ui-slider .ui-slider-handle{position:absolute;top:-7px;margin-left:-5px;z-index:2;width:10px;height:16px;background-color:#467b96}#ui-datepicker-div .ui-datepicker-buttonpane{padding-top:10px;border-top:1px solid #eee}#ui-datepicker-div .ui-datepicker-current,#ui-datepicker-div .ui-datepicker-close{float:left}#ui-datepicker-div .ui-datepicker-close{float:right}.ui-effects-transfer{border:2px dotted #ccc}ul.token-input-list{list-style:none;margin:0;padding:0 4px;min-height:32px;border:1px solid #d9d9d6;cursor:text;z-index:999;background-color:#fff;clear:left;border-radius:2px;-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box}ul.token-input-list li{margin:4px 0}ul.token-input-list li input{padding:0;border:0;width:100%;-webkit-appearance:caret}li.token-input-token{padding:0 6px;height:27px;line-height:27px;background-color:#f3f3f0;cursor:default;font-size:.92857em;text-align:right;white-space:nowrap}li.token-input-token p{float:left;display:inline;margin:0}li.token-input-token span{color:#bbb;font-weight:700;cursor:pointer}li.token-input-selected-token{background-color:#e9e9e6}li.token-input-input-token{padding:0 4px}div.token-input-dropdown{position:absolute;background-color:#fff;overflow:hidden;border:1px solid #d9d9d6;border-top-width:0;cursor:default;z-index:1;font-size:.92857em}div.token-input-dropdown p{margin:0;padding:5px 10px;color:#777;font-weight:700}div.token-input-dropdown ul{list-style:none;margin:0;padding:0}div.token-input-dropdown ul li{padding:4px 10px;background-color:#fff}div.token-input-dropdown ul li.token-input-dropdown-item{background-color:#fff}div.token-input-dropdown ul li em{font-style:normal}div.token-input-dropdown ul li.token-input-selected-dropdown-item{background-color:#467b96;color:#fff}.hidden{display:none}.sr-only{border:0;height:1px;margin:-1px;overflow:hidden;padding:0;position:absolute;width:1px}.sr-only.focusable:active,.sr-only.focusable:focus{clip:auto;height:auto;margin:0;overflow:visible;position:static;width:auto}.invisible{visibility:hidden}.container,.row [class*=col-]{-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box}.container{margin-left:auto;margin-right:auto;padding-left:10px;padding-right:10px}.row{margin-right:-10px;margin-left:-10px}.row [class*=col-]{float:left;min-height:1px;padding-right:10px;padding-left:10px}.row [class*=-push-],.row [class*=-pull-]{position:relative}.col-mb-1{width:8.33333%}.col-mb-2{width:16.66667%}.col-mb-3{width:25%}.col-mb-4{width:33.33333%}.col-mb-5{width:41.66667%}.col-mb-6{width:50%}.col-mb-7{width:58.33333%}.col-mb-8{width:66.66667%}.col-mb-9{width:75%}.col-mb-10{width:83.33333%}.col-mb-11{width:91.66667%}.col-mb-12{width:100%}@media (min-width: 768px){.container{max-width:728px}.col-tb-1{width:8.33333%}.col-tb-2{width:16.66667%}.col-tb-3{width:25%}.col-tb-4{width:33.33333%}.col-tb-5{width:41.66667%}.col-tb-6{width:50%}.col-tb-7{width:58.33333%}.col-tb-8{width:66.66667%}.col-tb-9{width:75%}.col-tb-10{width:83.33333%}.col-tb-11{width:91.66667%}.col-tb-12{width:100%}.col-tb-offset-0{margin-left:0%}.col-tb-offset-1{margin-left:8.33333%}.col-tb-offset-2{margin-left:16.66667%}.col-tb-offset-3{margin-left:25%}.col-tb-offset-4{margin-left:33.33333%}.col-tb-offset-5{margin-left:41.66667%}.col-tb-offset-6{margin-left:50%}.col-tb-offset-7{margin-left:58.33333%}.col-tb-offset-8{margin-left:66.66667%}.col-tb-offset-9{margin-left:75%}.col-tb-offset-10{margin-left:83.33333%}.col-tb-offset-11{margin-left:91.66667%}.col-tb-offset-12{margin-left:100%}.col-tb-pull-0{right:0%}.col-tb-pull-1{right:8.33333%}.col-tb-pull-2{right:16.66667%}.col-tb-pull-3{right:25%}.col-tb-pull-4{right:33.33333%}.col-tb-pull-5{right:41.66667%}.col-tb-pull-6{right:50%}.col-tb-pull-7{right:58.33333%}.col-tb-pull-8{right:66.66667%}.col-tb-pull-9{right:75%}.col-tb-pull-10{right:83.33333%}.col-tb-pull-11{right:91.66667%}.col-tb-pull-12{right:100%}.col-tb-push-0{left:0%}.col-tb-push-1{left:8.33333%}.col-tb-push-2{left:16.66667%}.col-tb-push-3{left:25%}.col-tb-push-4{left:33.33333%}.col-tb-push-5{left:41.66667%}.col-tb-push-6{left:50%}.col-tb-push-7{left:58.33333%}.col-tb-push-8{left:66.66667%}.col-tb-push-9{left:75%}.col-tb-push-10{left:83.33333%}.col-tb-push-11{left:91.66667%}.col-tb-push-12{left:100%}}@media (min-width: 992px){.container{max-width:952px}.col-1{width:8.33333%}.col-2{width:16.66667%}.col-3{width:25%}.col-4{width:33.33333%}.col-5{width:41.66667%}.col-6{width:50%}.col-7{width:58.33333%}.col-8{width:66.66667%}.col-9{width:75%}.col-10{width:83.33333%}.col-11{width:91.66667%}.col-12{width:100%}.col-offset-0{margin-left:0%}.col-offset-1{margin-left:8.33333%}.col-offset-2{margin-left:16.66667%}.col-offset-3{margin-left:25%}.col-offset-4{margin-left:33.33333%}.col-offset-5{margin-left:41.66667%}.col-offset-6{margin-left:50%}.col-offset-7{margin-left:58.33333%}.col-offset-8{margin-left:66.66667%}.col-offset-9{margin-left:75%}.col-offset-10{margin-left:83.33333%}.col-offset-11{margin-left:91.66667%}.col-offset-12{margin-left:100%}.col-pull-0{right:0%}.col-pull-1{right:8.33333%}.col-pull-2{right:16.66667%}.col-pull-3{right:25%}.col-pull-4{right:33.33333%}.col-pull-5{right:41.66667%}.col-pull-6{right:50%}.col-pull-7{right:58.33333%}.col-pull-8{right:66.66667%}.col-pull-9{right:75%}.col-pull-10{right:83.33333%}.col-pull-11{right:91.66667%}.col-pull-12{right:100%}.col-push-0{left:0%}.col-push-1{left:8.33333%}.col-push-2{left:16.66667%}.col-push-3{left:25%}.col-push-4{left:33.33333%}.col-push-5{left:41.66667%}.col-push-6{left:50%}.col-push-7{left:58.33333%}.col-push-8{left:66.66667%}.col-push-9{left:75%}.col-push-10{left:83.33333%}.col-push-11{left:91.66667%}.col-push-12{left:100%}}@media (min-width: 1200px){.container{max-width:1160px}.col-wd-1{width:8.33333%}.col-wd-2{width:16.66667%}.col-wd-3{width:25%}.col-wd-4{width:33.33333%}.col-wd-5{width:41.66667%}.col-wd-6{width:50%}.col-wd-7{width:58.33333%}.col-wd-8{width:66.66667%}.col-wd-9{width:75%}.col-wd-10{width:83.33333%}.col-wd-11{width:91.66667%}.col-wd-12{width:100%}.col-wd-offset-0{margin-left:0%}.col-wd-offset-1{margin-left:8.33333%}.col-wd-offset-2{margin-left:16.66667%}.col-wd-offset-3{margin-left:25%}.col-wd-offset-4{margin-left:33.33333%}.col-wd-offset-5{margin-left:41.66667%}.col-wd-offset-6{margin-left:50%}.col-wd-offset-7{margin-left:58.33333%}.col-wd-offset-8{margin-left:66.66667%}.col-wd-offset-9{margin-left:75%}.col-wd-offset-10{margin-left:83.33333%}.col-wd-offset-11{margin-left:91.66667%}.col-wd-offset-12{margin-left:100%}.col-wd-pull-0{right:0%}.col-wd-pull-1{right:8.33333%}.col-wd-pull-2{right:16.66667%}.col-wd-pull-3{right:25%}.col-wd-pull-4{right:33.33333%}.col-wd-pull-5{right:41.66667%}.col-wd-pull-6{right:50%}.col-wd-pull-7{right:58.33333%}.col-wd-pull-8{right:66.66667%}.col-wd-pull-9{right:75%}.col-wd-pull-10{right:83.33333%}.col-wd-pull-11{right:91.66667%}.col-wd-pull-12{right:100%}.col-wd-push-0{left:0%}.col-wd-push-1{left:8.33333%}.col-wd-push-2{left:16.66667%}.col-wd-push-3{left:25%}.col-wd-push-4{left:33.33333%}.col-wd-push-5{left:41.66667%}.col-wd-push-6{left:50%}.col-wd-push-7{left:58.33333%}.col-wd-push-8{left:66.66667%}.col-wd-push-9{left:75%}.col-wd-push-10{left:83.33333%}.col-wd-push-11{left:91.66667%}.col-wd-push-12{left:100%}}@media (max-width: 767px){.kit-hidden-mb{display:none}}@media (max-width: 991px){.kit-hidden-tb{display:none}}@media (max-width: 1199px){.kit-hidden{display:none}}.clear-fix,.row{zoom:1}.clear-fix:before,.row:before,.clear-fix:after,.row:after{content:" ";display:table}.clear-fix:after,.row:after{clear:both}html,body,div[tabindex="-1"]{height:100%}.account-item{position:relative;display:inline-block;margin-right:16px}.account-item .account-unbind svg{position:absolute;top:-3px;right:-3px;display:none;border:1px solid #999;border-radius:50%;background:#fff;cursor:pointer}.account-item:hover .account-unbind svg{display:block}.account-item.github a path,.account-item.twitter circle,.account-item.facebook a path,.account-item.weibo circle,.account-item.qq a path{fill:gray}.account-item.github:hover a path,.account-item.github.bind a path{fill:#1b1f23}.account-item.twitter:hover circle,.account-item.twitter.bind circle{fill:#2daae1}.account-item.facebook:hover a path,.account-item.facebook.bind a path{fill:#1877f2}.account-item.weibo:hover circle,.account-item.weibo.bind circle{fill:#d34237}.account-item.qq:hover a path,.account-item.qq.bind a path{fill:#259be0}.vemoji,.wl-emoji{display:inline-block;vertical-align:middle;width:1.3rem;margin:.25rem}.social-accounts a+a{margin-left:16px}.upgrade-tips{padding:0 10px;border-bottom:1px solid rgba(212,167,44,.4);background:#fff8c5;color:#24292f;line-height:36px}')),document.head.appendChild(i)}}catch(e){console.error("vite-plugin-css-injected-by-js",e)}})();
function v1(e, t) {
  for (var n = 0; n < t.length; n++) {
    const r = t[n];
    if (typeof r != "string" && !Array.isArray(r)) {
      for (const i in r)
        if (i !== "default" && !(i in e)) {
          const o = Object.getOwnPropertyDescriptor(r, i);
          o && Object.defineProperty(e, i, o.get ? o : {
            enumerable: !0,
            get: () => r[i]
          });
        }
    }
  }
  return Object.freeze(Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }));
}
function io(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var ic = { exports: {} }, oo = {}, oc = { exports: {} }, M = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ar = Symbol.for("react.element"), y1 = Symbol.for("react.portal"), w1 = Symbol.for("react.fragment"), x1 = Symbol.for("react.strict_mode"), C1 = Symbol.for("react.profiler"), S1 = Symbol.for("react.provider"), E1 = Symbol.for("react.context"), k1 = Symbol.for("react.forward_ref"), N1 = Symbol.for("react.suspense"), j1 = Symbol.for("react.memo"), L1 = Symbol.for("react.lazy"), aa = Symbol.iterator;
function P1(e) {
  return e === null || typeof e != "object" ? null : (e = aa && e[aa] || e["@@iterator"], typeof e == "function" ? e : null);
}
var sc = { isMounted: function() {
  return !1;
}, enqueueForceUpdate: function() {
}, enqueueReplaceState: function() {
}, enqueueSetState: function() {
} }, lc = Object.assign, ac = {};
function An(e, t, n) {
  this.props = e, this.context = t, this.refs = ac, this.updater = n || sc;
}
An.prototype.isReactComponent = {};
An.prototype.setState = function(e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
  this.updater.enqueueSetState(this, e, t, "setState");
};
An.prototype.forceUpdate = function(e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function uc() {
}
uc.prototype = An.prototype;
function sl(e, t, n) {
  this.props = e, this.context = t, this.refs = ac, this.updater = n || sc;
}
var ll = sl.prototype = new uc();
ll.constructor = sl;
lc(ll, An.prototype);
ll.isPureReactComponent = !0;
var ua = Array.isArray, cc = Object.prototype.hasOwnProperty, al = { current: null }, fc = { key: !0, ref: !0, __self: !0, __source: !0 };
function dc(e, t, n) {
  var r, i = {}, o = null, s = null;
  if (t != null) for (r in t.ref !== void 0 && (s = t.ref), t.key !== void 0 && (o = "" + t.key), t) cc.call(t, r) && !fc.hasOwnProperty(r) && (i[r] = t[r]);
  var a = arguments.length - 2;
  if (a === 1) i.children = n;
  else if (1 < a) {
    for (var l = Array(a), u = 0; u < a; u++) l[u] = arguments[u + 2];
    i.children = l;
  }
  if (e && e.defaultProps) for (r in a = e.defaultProps, a) i[r] === void 0 && (i[r] = a[r]);
  return { $$typeof: Ar, type: e, key: o, ref: s, props: i, _owner: al.current };
}
function R1(e, t) {
  return { $$typeof: Ar, type: e.type, key: t, ref: e.ref, props: e.props, _owner: e._owner };
}
function ul(e) {
  return typeof e == "object" && e !== null && e.$$typeof === Ar;
}
function O1(e) {
  var t = { "=": "=0", ":": "=2" };
  return "$" + e.replace(/[=:]/g, function(n) {
    return t[n];
  });
}
var ca = /\/+/g;
function Ro(e, t) {
  return typeof e == "object" && e !== null && e.key != null ? O1("" + e.key) : t.toString(36);
}
function di(e, t, n, r, i) {
  var o = typeof e;
  (o === "undefined" || o === "boolean") && (e = null);
  var s = !1;
  if (e === null) s = !0;
  else switch (o) {
    case "string":
    case "number":
      s = !0;
      break;
    case "object":
      switch (e.$$typeof) {
        case Ar:
        case y1:
          s = !0;
      }
  }
  if (s) return s = e, i = i(s), e = r === "" ? "." + Ro(s, 0) : r, ua(i) ? (n = "", e != null && (n = e.replace(ca, "$&/") + "/"), di(i, t, n, "", function(u) {
    return u;
  })) : i != null && (ul(i) && (i = R1(i, n + (!i.key || s && s.key === i.key ? "" : ("" + i.key).replace(ca, "$&/") + "/") + e)), t.push(i)), 1;
  if (s = 0, r = r === "" ? "." : r + ":", ua(e)) for (var a = 0; a < e.length; a++) {
    o = e[a];
    var l = r + Ro(o, a);
    s += di(o, t, n, l, i);
  }
  else if (l = P1(e), typeof l == "function") for (e = l.call(e), a = 0; !(o = e.next()).done; ) o = o.value, l = r + Ro(o, a++), s += di(o, t, n, l, i);
  else if (o === "object") throw t = String(e), Error("Objects are not valid as a React child (found: " + (t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t) + "). If you meant to render a collection of children, use an array instead.");
  return s;
}
function Kr(e, t, n) {
  if (e == null) return e;
  var r = [], i = 0;
  return di(e, r, "", "", function(o) {
    return t.call(n, o, i++);
  }), r;
}
function T1(e) {
  if (e._status === -1) {
    var t = e._result;
    t = t(), t.then(function(n) {
      (e._status === 0 || e._status === -1) && (e._status = 1, e._result = n);
    }, function(n) {
      (e._status === 0 || e._status === -1) && (e._status = 2, e._result = n);
    }), e._status === -1 && (e._status = 0, e._result = t);
  }
  if (e._status === 1) return e._result.default;
  throw e._result;
}
var ye = { current: null }, pi = { transition: null }, _1 = { ReactCurrentDispatcher: ye, ReactCurrentBatchConfig: pi, ReactCurrentOwner: al };
function pc() {
  throw Error("act(...) is not supported in production builds of React.");
}
M.Children = { map: Kr, forEach: function(e, t, n) {
  Kr(e, function() {
    t.apply(this, arguments);
  }, n);
}, count: function(e) {
  var t = 0;
  return Kr(e, function() {
    t++;
  }), t;
}, toArray: function(e) {
  return Kr(e, function(t) {
    return t;
  }) || [];
}, only: function(e) {
  if (!ul(e)) throw Error("React.Children.only expected to receive a single React element child.");
  return e;
} };
M.Component = An;
M.Fragment = w1;
M.Profiler = C1;
M.PureComponent = sl;
M.StrictMode = x1;
M.Suspense = N1;
M.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = _1;
M.act = pc;
M.cloneElement = function(e, t, n) {
  if (e == null) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + ".");
  var r = lc({}, e.props), i = e.key, o = e.ref, s = e._owner;
  if (t != null) {
    if (t.ref !== void 0 && (o = t.ref, s = al.current), t.key !== void 0 && (i = "" + t.key), e.type && e.type.defaultProps) var a = e.type.defaultProps;
    for (l in t) cc.call(t, l) && !fc.hasOwnProperty(l) && (r[l] = t[l] === void 0 && a !== void 0 ? a[l] : t[l]);
  }
  var l = arguments.length - 2;
  if (l === 1) r.children = n;
  else if (1 < l) {
    a = Array(l);
    for (var u = 0; u < l; u++) a[u] = arguments[u + 2];
    r.children = a;
  }
  return { $$typeof: Ar, type: e.type, key: i, ref: o, props: r, _owner: s };
};
M.createContext = function(e) {
  return e = { $$typeof: E1, _currentValue: e, _currentValue2: e, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, e.Provider = { $$typeof: S1, _context: e }, e.Consumer = e;
};
M.createElement = dc;
M.createFactory = function(e) {
  var t = dc.bind(null, e);
  return t.type = e, t;
};
M.createRef = function() {
  return { current: null };
};
M.forwardRef = function(e) {
  return { $$typeof: k1, render: e };
};
M.isValidElement = ul;
M.lazy = function(e) {
  return { $$typeof: L1, _payload: { _status: -1, _result: e }, _init: T1 };
};
M.memo = function(e, t) {
  return { $$typeof: j1, type: e, compare: t === void 0 ? null : t };
};
M.startTransition = function(e) {
  var t = pi.transition;
  pi.transition = {};
  try {
    e();
  } finally {
    pi.transition = t;
  }
};
M.unstable_act = pc;
M.useCallback = function(e, t) {
  return ye.current.useCallback(e, t);
};
M.useContext = function(e) {
  return ye.current.useContext(e);
};
M.useDebugValue = function() {
};
M.useDeferredValue = function(e) {
  return ye.current.useDeferredValue(e);
};
M.useEffect = function(e, t) {
  return ye.current.useEffect(e, t);
};
M.useId = function() {
  return ye.current.useId();
};
M.useImperativeHandle = function(e, t, n) {
  return ye.current.useImperativeHandle(e, t, n);
};
M.useInsertionEffect = function(e, t) {
  return ye.current.useInsertionEffect(e, t);
};
M.useLayoutEffect = function(e, t) {
  return ye.current.useLayoutEffect(e, t);
};
M.useMemo = function(e, t) {
  return ye.current.useMemo(e, t);
};
M.useReducer = function(e, t, n) {
  return ye.current.useReducer(e, t, n);
};
M.useRef = function(e) {
  return ye.current.useRef(e);
};
M.useState = function(e) {
  return ye.current.useState(e);
};
M.useSyncExternalStore = function(e, t, n) {
  return ye.current.useSyncExternalStore(e, t, n);
};
M.useTransition = function() {
  return ye.current.useTransition();
};
M.version = "18.3.1";
oc.exports = M;
var k = oc.exports;
const he = /* @__PURE__ */ io(k), ls = /* @__PURE__ */ v1({
  __proto__: null,
  default: he
}, [k]);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var $1 = k, M1 = Symbol.for("react.element"), I1 = Symbol.for("react.fragment"), F1 = Object.prototype.hasOwnProperty, A1 = $1.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, z1 = { key: !0, ref: !0, __self: !0, __source: !0 };
function hc(e, t, n) {
  var r, i = {}, o = null, s = null;
  n !== void 0 && (o = "" + n), t.key !== void 0 && (o = "" + t.key), t.ref !== void 0 && (s = t.ref);
  for (r in t) F1.call(t, r) && !z1.hasOwnProperty(r) && (i[r] = t[r]);
  if (e && e.defaultProps) for (r in t = e.defaultProps, t) i[r] === void 0 && (i[r] = t[r]);
  return { $$typeof: M1, type: e, key: o, ref: s, props: i, _owner: A1.current };
}
oo.Fragment = I1;
oo.jsx = hc;
oo.jsxs = hc;
ic.exports = oo;
var p = ic.exports, mc = { exports: {} }, Oe = {}, gc = { exports: {} }, vc = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
(function(e) {
  function t(P, $) {
    var T = P.length;
    P.push($);
    e: for (; 0 < T; ) {
      var b = T - 1 >>> 1, Y = P[b];
      if (0 < i(Y, $)) P[b] = $, P[T] = Y, T = b;
      else break e;
    }
  }
  function n(P) {
    return P.length === 0 ? null : P[0];
  }
  function r(P) {
    if (P.length === 0) return null;
    var $ = P[0], T = P.pop();
    if (T !== $) {
      P[0] = T;
      e: for (var b = 0, Y = P.length, sn = Y >>> 1; b < sn; ) {
        var zt = 2 * (b + 1) - 1, Po = P[zt], bt = zt + 1, Hr = P[bt];
        if (0 > i(Po, T)) bt < Y && 0 > i(Hr, Po) ? (P[b] = Hr, P[bt] = T, b = bt) : (P[b] = Po, P[zt] = T, b = zt);
        else if (bt < Y && 0 > i(Hr, T)) P[b] = Hr, P[bt] = T, b = bt;
        else break e;
      }
    }
    return $;
  }
  function i(P, $) {
    var T = P.sortIndex - $.sortIndex;
    return T !== 0 ? T : P.id - $.id;
  }
  if (typeof performance == "object" && typeof performance.now == "function") {
    var o = performance;
    e.unstable_now = function() {
      return o.now();
    };
  } else {
    var s = Date, a = s.now();
    e.unstable_now = function() {
      return s.now() - a;
    };
  }
  var l = [], u = [], c = 1, f = null, d = 3, h = !1, v = !1, x = !1, C = typeof setTimeout == "function" ? setTimeout : null, g = typeof clearTimeout == "function" ? clearTimeout : null, m = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function w(P) {
    for (var $ = n(u); $ !== null; ) {
      if ($.callback === null) r(u);
      else if ($.startTime <= P) r(u), $.sortIndex = $.expirationTime, t(l, $);
      else break;
      $ = n(u);
    }
  }
  function y(P) {
    if (x = !1, w(P), !v) if (n(l) !== null) v = !0, Ke(S);
    else {
      var $ = n(u);
      $ !== null && ft(y, $.startTime - P);
    }
  }
  function S(P, $) {
    v = !1, x && (x = !1, g(L), L = -1), h = !0;
    var T = d;
    try {
      for (w($), f = n(l); f !== null && (!(f.expirationTime > $) || P && !F()); ) {
        var b = f.callback;
        if (typeof b == "function") {
          f.callback = null, d = f.priorityLevel;
          var Y = b(f.expirationTime <= $);
          $ = e.unstable_now(), typeof Y == "function" ? f.callback = Y : f === n(l) && r(l), w($);
        } else r(l);
        f = n(l);
      }
      if (f !== null) var sn = !0;
      else {
        var zt = n(u);
        zt !== null && ft(y, zt.startTime - $), sn = !1;
      }
      return sn;
    } finally {
      f = null, d = T, h = !1;
    }
  }
  var E = !1, N = null, L = -1, _ = 5, R = -1;
  function F() {
    return !(e.unstable_now() - R < _);
  }
  function Z() {
    if (N !== null) {
      var P = e.unstable_now();
      R = P;
      var $ = !0;
      try {
        $ = N(!0, P);
      } finally {
        $ ? te() : (E = !1, N = null);
      }
    } else E = !1;
  }
  var te;
  if (typeof m == "function") te = function() {
    m(Z);
  };
  else if (typeof MessageChannel < "u") {
    var se = new MessageChannel(), z = se.port2;
    se.port1.onmessage = Z, te = function() {
      z.postMessage(null);
    };
  } else te = function() {
    C(Z, 0);
  };
  function Ke(P) {
    N = P, E || (E = !0, te());
  }
  function ft(P, $) {
    L = C(function() {
      P(e.unstable_now());
    }, $);
  }
  e.unstable_IdlePriority = 5, e.unstable_ImmediatePriority = 1, e.unstable_LowPriority = 4, e.unstable_NormalPriority = 3, e.unstable_Profiling = null, e.unstable_UserBlockingPriority = 2, e.unstable_cancelCallback = function(P) {
    P.callback = null;
  }, e.unstable_continueExecution = function() {
    v || h || (v = !0, Ke(S));
  }, e.unstable_forceFrameRate = function(P) {
    0 > P || 125 < P ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : _ = 0 < P ? Math.floor(1e3 / P) : 5;
  }, e.unstable_getCurrentPriorityLevel = function() {
    return d;
  }, e.unstable_getFirstCallbackNode = function() {
    return n(l);
  }, e.unstable_next = function(P) {
    switch (d) {
      case 1:
      case 2:
      case 3:
        var $ = 3;
        break;
      default:
        $ = d;
    }
    var T = d;
    d = $;
    try {
      return P();
    } finally {
      d = T;
    }
  }, e.unstable_pauseExecution = function() {
  }, e.unstable_requestPaint = function() {
  }, e.unstable_runWithPriority = function(P, $) {
    switch (P) {
      case 1:
      case 2:
      case 3:
      case 4:
      case 5:
        break;
      default:
        P = 3;
    }
    var T = d;
    d = P;
    try {
      return $();
    } finally {
      d = T;
    }
  }, e.unstable_scheduleCallback = function(P, $, T) {
    var b = e.unstable_now();
    switch (typeof T == "object" && T !== null ? (T = T.delay, T = typeof T == "number" && 0 < T ? b + T : b) : T = b, P) {
      case 1:
        var Y = -1;
        break;
      case 2:
        Y = 250;
        break;
      case 5:
        Y = 1073741823;
        break;
      case 4:
        Y = 1e4;
        break;
      default:
        Y = 5e3;
    }
    return Y = T + Y, P = { id: c++, callback: $, priorityLevel: P, startTime: T, expirationTime: Y, sortIndex: -1 }, T > b ? (P.sortIndex = T, t(u, P), n(l) === null && P === n(u) && (x ? (g(L), L = -1) : x = !0, ft(y, T - b))) : (P.sortIndex = Y, t(l, P), v || h || (v = !0, Ke(S))), P;
  }, e.unstable_shouldYield = F, e.unstable_wrapCallback = function(P) {
    var $ = d;
    return function() {
      var T = d;
      d = $;
      try {
        return P.apply(this, arguments);
      } finally {
        d = T;
      }
    };
  };
})(vc);
gc.exports = vc;
var b1 = gc.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var U1 = k, Re = b1;
function j(e) {
  for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++) t += "&args[]=" + encodeURIComponent(arguments[n]);
  return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
}
var yc = /* @__PURE__ */ new Set(), hr = {};
function en(e, t) {
  On(e, t), On(e + "Capture", t);
}
function On(e, t) {
  for (hr[e] = t, e = 0; e < t.length; e++) yc.add(t[e]);
}
var ot = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), as = Object.prototype.hasOwnProperty, D1 = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, fa = {}, da = {};
function V1(e) {
  return as.call(da, e) ? !0 : as.call(fa, e) ? !1 : D1.test(e) ? da[e] = !0 : (fa[e] = !0, !1);
}
function B1(e, t, n, r) {
  if (n !== null && n.type === 0) return !1;
  switch (typeof t) {
    case "function":
    case "symbol":
      return !0;
    case "boolean":
      return r ? !1 : n !== null ? !n.acceptsBooleans : (e = e.toLowerCase().slice(0, 5), e !== "data-" && e !== "aria-");
    default:
      return !1;
  }
}
function H1(e, t, n, r) {
  if (t === null || typeof t > "u" || B1(e, t, n, r)) return !0;
  if (r) return !1;
  if (n !== null) switch (n.type) {
    case 3:
      return !t;
    case 4:
      return t === !1;
    case 5:
      return isNaN(t);
    case 6:
      return isNaN(t) || 1 > t;
  }
  return !1;
}
function we(e, t, n, r, i, o, s) {
  this.acceptsBooleans = t === 2 || t === 3 || t === 4, this.attributeName = r, this.attributeNamespace = i, this.mustUseProperty = n, this.propertyName = e, this.type = t, this.sanitizeURL = o, this.removeEmptyString = s;
}
var ue = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e) {
  ue[e] = new we(e, 0, !1, e, null, !1, !1);
});
[["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(e) {
  var t = e[0];
  ue[t] = new we(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
  ue[e] = new we(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
  ue[e] = new we(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e) {
  ue[e] = new we(e, 3, !1, e.toLowerCase(), null, !1, !1);
});
["checked", "multiple", "muted", "selected"].forEach(function(e) {
  ue[e] = new we(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function(e) {
  ue[e] = new we(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function(e) {
  ue[e] = new we(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function(e) {
  ue[e] = new we(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var cl = /[\-:]([a-z])/g;
function fl(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e) {
  var t = e.replace(
    cl,
    fl
  );
  ue[t] = new we(t, 1, !1, e, null, !1, !1);
});
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) {
  var t = e.replace(cl, fl);
  ue[t] = new we(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
});
["xml:base", "xml:lang", "xml:space"].forEach(function(e) {
  var t = e.replace(cl, fl);
  ue[t] = new we(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function(e) {
  ue[e] = new we(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
ue.xlinkHref = new we("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1);
["src", "href", "action", "formAction"].forEach(function(e) {
  ue[e] = new we(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function dl(e, t, n, r) {
  var i = ue.hasOwnProperty(t) ? ue[t] : null;
  (i !== null ? i.type !== 0 : r || !(2 < t.length) || t[0] !== "o" && t[0] !== "O" || t[1] !== "n" && t[1] !== "N") && (H1(t, n, i, r) && (n = null), r || i === null ? V1(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n)) : i.mustUseProperty ? e[i.propertyName] = n === null ? i.type === 3 ? !1 : "" : n : (t = i.attributeName, r = i.attributeNamespace, n === null ? e.removeAttribute(t) : (i = i.type, n = i === 3 || i === 4 && n === !0 ? "" : "" + n, r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var ut = U1.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, Wr = Symbol.for("react.element"), cn = Symbol.for("react.portal"), fn = Symbol.for("react.fragment"), pl = Symbol.for("react.strict_mode"), us = Symbol.for("react.profiler"), wc = Symbol.for("react.provider"), xc = Symbol.for("react.context"), hl = Symbol.for("react.forward_ref"), cs = Symbol.for("react.suspense"), fs = Symbol.for("react.suspense_list"), ml = Symbol.for("react.memo"), mt = Symbol.for("react.lazy"), Cc = Symbol.for("react.offscreen"), pa = Symbol.iterator;
function Dn(e) {
  return e === null || typeof e != "object" ? null : (e = pa && e[pa] || e["@@iterator"], typeof e == "function" ? e : null);
}
var W = Object.assign, Oo;
function qn(e) {
  if (Oo === void 0) try {
    throw Error();
  } catch (n) {
    var t = n.stack.trim().match(/\n( *(at )?)/);
    Oo = t && t[1] || "";
  }
  return `
` + Oo + e;
}
var To = !1;
function _o(e, t) {
  if (!e || To) return "";
  To = !0;
  var n = Error.prepareStackTrace;
  Error.prepareStackTrace = void 0;
  try {
    if (t) if (t = function() {
      throw Error();
    }, Object.defineProperty(t.prototype, "props", { set: function() {
      throw Error();
    } }), typeof Reflect == "object" && Reflect.construct) {
      try {
        Reflect.construct(t, []);
      } catch (u) {
        var r = u;
      }
      Reflect.construct(e, [], t);
    } else {
      try {
        t.call();
      } catch (u) {
        r = u;
      }
      e.call(t.prototype);
    }
    else {
      try {
        throw Error();
      } catch (u) {
        r = u;
      }
      e();
    }
  } catch (u) {
    if (u && r && typeof u.stack == "string") {
      for (var i = u.stack.split(`
`), o = r.stack.split(`
`), s = i.length - 1, a = o.length - 1; 1 <= s && 0 <= a && i[s] !== o[a]; ) a--;
      for (; 1 <= s && 0 <= a; s--, a--) if (i[s] !== o[a]) {
        if (s !== 1 || a !== 1)
          do
            if (s--, a--, 0 > a || i[s] !== o[a]) {
              var l = `
` + i[s].replace(" at new ", " at ");
              return e.displayName && l.includes("<anonymous>") && (l = l.replace("<anonymous>", e.displayName)), l;
            }
          while (1 <= s && 0 <= a);
        break;
      }
    }
  } finally {
    To = !1, Error.prepareStackTrace = n;
  }
  return (e = e ? e.displayName || e.name : "") ? qn(e) : "";
}
function K1(e) {
  switch (e.tag) {
    case 5:
      return qn(e.type);
    case 16:
      return qn("Lazy");
    case 13:
      return qn("Suspense");
    case 19:
      return qn("SuspenseList");
    case 0:
    case 2:
    case 15:
      return e = _o(e.type, !1), e;
    case 11:
      return e = _o(e.type.render, !1), e;
    case 1:
      return e = _o(e.type, !0), e;
    default:
      return "";
  }
}
function ds(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case fn:
      return "Fragment";
    case cn:
      return "Portal";
    case us:
      return "Profiler";
    case pl:
      return "StrictMode";
    case cs:
      return "Suspense";
    case fs:
      return "SuspenseList";
  }
  if (typeof e == "object") switch (e.$$typeof) {
    case xc:
      return (e.displayName || "Context") + ".Consumer";
    case wc:
      return (e._context.displayName || "Context") + ".Provider";
    case hl:
      var t = e.render;
      return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
    case ml:
      return t = e.displayName || null, t !== null ? t : ds(e.type) || "Memo";
    case mt:
      t = e._payload, e = e._init;
      try {
        return ds(e(t));
      } catch {
      }
  }
  return null;
}
function W1(e) {
  var t = e.type;
  switch (e.tag) {
    case 24:
      return "Cache";
    case 9:
      return (t.displayName || "Context") + ".Consumer";
    case 10:
      return (t._context.displayName || "Context") + ".Provider";
    case 18:
      return "DehydratedFragment";
    case 11:
      return e = t.render, e = e.displayName || e.name || "", t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef");
    case 7:
      return "Fragment";
    case 5:
      return t;
    case 4:
      return "Portal";
    case 3:
      return "Root";
    case 6:
      return "Text";
    case 16:
      return ds(t);
    case 8:
      return t === pl ? "StrictMode" : "Mode";
    case 22:
      return "Offscreen";
    case 12:
      return "Profiler";
    case 21:
      return "Scope";
    case 13:
      return "Suspense";
    case 19:
      return "SuspenseList";
    case 25:
      return "TracingMarker";
    case 1:
    case 0:
    case 17:
    case 2:
    case 14:
    case 15:
      if (typeof t == "function") return t.displayName || t.name || null;
      if (typeof t == "string") return t;
  }
  return null;
}
function Tt(e) {
  switch (typeof e) {
    case "boolean":
    case "number":
    case "string":
    case "undefined":
      return e;
    case "object":
      return e;
    default:
      return "";
  }
}
function Sc(e) {
  var t = e.type;
  return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
}
function Q1(e) {
  var t = Sc(e) ? "checked" : "value", n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t), r = "" + e[t];
  if (!e.hasOwnProperty(t) && typeof n < "u" && typeof n.get == "function" && typeof n.set == "function") {
    var i = n.get, o = n.set;
    return Object.defineProperty(e, t, { configurable: !0, get: function() {
      return i.call(this);
    }, set: function(s) {
      r = "" + s, o.call(this, s);
    } }), Object.defineProperty(e, t, { enumerable: n.enumerable }), { getValue: function() {
      return r;
    }, setValue: function(s) {
      r = "" + s;
    }, stopTracking: function() {
      e._valueTracker = null, delete e[t];
    } };
  }
}
function Qr(e) {
  e._valueTracker || (e._valueTracker = Q1(e));
}
function Ec(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(), r = "";
  return e && (r = Sc(e) ? e.checked ? "true" : "false" : e.value), e = r, e !== n ? (t.setValue(e), !0) : !1;
}
function ji(e) {
  if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u") return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function ps(e, t) {
  var n = t.checked;
  return W({}, t, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: n ?? e._wrapperState.initialChecked });
}
function ha(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue, r = t.checked != null ? t.checked : t.defaultChecked;
  n = Tt(t.value != null ? t.value : n), e._wrapperState = { initialChecked: r, initialValue: n, controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null };
}
function kc(e, t) {
  t = t.checked, t != null && dl(e, "checked", t, !1);
}
function hs(e, t) {
  kc(e, t);
  var n = Tt(t.value), r = t.type;
  if (n != null) r === "number" ? (n === 0 && e.value === "" || e.value != n) && (e.value = "" + n) : e.value !== "" + n && (e.value = "" + n);
  else if (r === "submit" || r === "reset") {
    e.removeAttribute("value");
    return;
  }
  t.hasOwnProperty("value") ? ms(e, t.type, n) : t.hasOwnProperty("defaultValue") && ms(e, t.type, Tt(t.defaultValue)), t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked);
}
function ma(e, t, n) {
  if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
    var r = t.type;
    if (!(r !== "submit" && r !== "reset" || t.value !== void 0 && t.value !== null)) return;
    t = "" + e._wrapperState.initialValue, n || t === e.value || (e.value = t), e.defaultValue = t;
  }
  n = e.name, n !== "" && (e.name = ""), e.defaultChecked = !!e._wrapperState.initialChecked, n !== "" && (e.name = n);
}
function ms(e, t, n) {
  (t !== "number" || ji(e.ownerDocument) !== e) && (n == null ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var er = Array.isArray;
function kn(e, t, n, r) {
  if (e = e.options, t) {
    t = {};
    for (var i = 0; i < n.length; i++) t["$" + n[i]] = !0;
    for (n = 0; n < e.length; n++) i = t.hasOwnProperty("$" + e[n].value), e[n].selected !== i && (e[n].selected = i), i && r && (e[n].defaultSelected = !0);
  } else {
    for (n = "" + Tt(n), t = null, i = 0; i < e.length; i++) {
      if (e[i].value === n) {
        e[i].selected = !0, r && (e[i].defaultSelected = !0);
        return;
      }
      t !== null || e[i].disabled || (t = e[i]);
    }
    t !== null && (t.selected = !0);
  }
}
function gs(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(j(91));
  return W({}, t, { value: void 0, defaultValue: void 0, children: "" + e._wrapperState.initialValue });
}
function ga(e, t) {
  var n = t.value;
  if (n == null) {
    if (n = t.children, t = t.defaultValue, n != null) {
      if (t != null) throw Error(j(92));
      if (er(n)) {
        if (1 < n.length) throw Error(j(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ""), n = t;
  }
  e._wrapperState = { initialValue: Tt(n) };
}
function Nc(e, t) {
  var n = Tt(t.value), r = Tt(t.defaultValue);
  n != null && (n = "" + n, n !== e.value && (e.value = n), t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)), r != null && (e.defaultValue = "" + r);
}
function va(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function jc(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function vs(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml" ? jc(t) : e === "http://www.w3.org/2000/svg" && t === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e;
}
var Zr, Lc = function(e) {
  return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, n, r, i) {
    MSApp.execUnsafeLocalFunction(function() {
      return e(t, n, r, i);
    });
  } : e;
}(function(e, t) {
  if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e) e.innerHTML = t;
  else {
    for (Zr = Zr || document.createElement("div"), Zr.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>", t = Zr.firstChild; e.firstChild; ) e.removeChild(e.firstChild);
    for (; t.firstChild; ) e.appendChild(t.firstChild);
  }
});
function mr(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var rr = {
  animationIterationCount: !0,
  aspectRatio: !0,
  borderImageOutset: !0,
  borderImageSlice: !0,
  borderImageWidth: !0,
  boxFlex: !0,
  boxFlexGroup: !0,
  boxOrdinalGroup: !0,
  columnCount: !0,
  columns: !0,
  flex: !0,
  flexGrow: !0,
  flexPositive: !0,
  flexShrink: !0,
  flexNegative: !0,
  flexOrder: !0,
  gridArea: !0,
  gridRow: !0,
  gridRowEnd: !0,
  gridRowSpan: !0,
  gridRowStart: !0,
  gridColumn: !0,
  gridColumnEnd: !0,
  gridColumnSpan: !0,
  gridColumnStart: !0,
  fontWeight: !0,
  lineClamp: !0,
  lineHeight: !0,
  opacity: !0,
  order: !0,
  orphans: !0,
  tabSize: !0,
  widows: !0,
  zIndex: !0,
  zoom: !0,
  fillOpacity: !0,
  floodOpacity: !0,
  stopOpacity: !0,
  strokeDasharray: !0,
  strokeDashoffset: !0,
  strokeMiterlimit: !0,
  strokeOpacity: !0,
  strokeWidth: !0
}, Z1 = ["Webkit", "ms", "Moz", "O"];
Object.keys(rr).forEach(function(e) {
  Z1.forEach(function(t) {
    t = t + e.charAt(0).toUpperCase() + e.substring(1), rr[t] = rr[e];
  });
});
function Pc(e, t, n) {
  return t == null || typeof t == "boolean" || t === "" ? "" : n || typeof t != "number" || t === 0 || rr.hasOwnProperty(e) && rr[e] ? ("" + t).trim() : t + "px";
}
function Rc(e, t) {
  e = e.style;
  for (var n in t) if (t.hasOwnProperty(n)) {
    var r = n.indexOf("--") === 0, i = Pc(n, t[n], r);
    n === "float" && (n = "cssFloat"), r ? e.setProperty(n, i) : e[n] = i;
  }
}
var Y1 = W({ menuitem: !0 }, { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 });
function ys(e, t) {
  if (t) {
    if (Y1[e] && (t.children != null || t.dangerouslySetInnerHTML != null)) throw Error(j(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(j(60));
      if (typeof t.dangerouslySetInnerHTML != "object" || !("__html" in t.dangerouslySetInnerHTML)) throw Error(j(61));
    }
    if (t.style != null && typeof t.style != "object") throw Error(j(62));
  }
}
function ws(e, t) {
  if (e.indexOf("-") === -1) return typeof t.is == "string";
  switch (e) {
    case "annotation-xml":
    case "color-profile":
    case "font-face":
    case "font-face-src":
    case "font-face-uri":
    case "font-face-format":
    case "font-face-name":
    case "missing-glyph":
      return !1;
    default:
      return !0;
  }
}
var xs = null;
function gl(e) {
  return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
}
var Cs = null, Nn = null, jn = null;
function ya(e) {
  if (e = Ur(e)) {
    if (typeof Cs != "function") throw Error(j(280));
    var t = e.stateNode;
    t && (t = co(t), Cs(e.stateNode, e.type, t));
  }
}
function Oc(e) {
  Nn ? jn ? jn.push(e) : jn = [e] : Nn = e;
}
function Tc() {
  if (Nn) {
    var e = Nn, t = jn;
    if (jn = Nn = null, ya(e), t) for (e = 0; e < t.length; e++) ya(t[e]);
  }
}
function _c(e, t) {
  return e(t);
}
function $c() {
}
var $o = !1;
function Mc(e, t, n) {
  if ($o) return e(t, n);
  $o = !0;
  try {
    return _c(e, t, n);
  } finally {
    $o = !1, (Nn !== null || jn !== null) && ($c(), Tc());
  }
}
function gr(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var r = co(n);
  if (r === null) return null;
  n = r[t];
  e: switch (t) {
    case "onClick":
    case "onClickCapture":
    case "onDoubleClick":
    case "onDoubleClickCapture":
    case "onMouseDown":
    case "onMouseDownCapture":
    case "onMouseMove":
    case "onMouseMoveCapture":
    case "onMouseUp":
    case "onMouseUpCapture":
    case "onMouseEnter":
      (r = !r.disabled) || (e = e.type, r = !(e === "button" || e === "input" || e === "select" || e === "textarea")), e = !r;
      break e;
    default:
      e = !1;
  }
  if (e) return null;
  if (n && typeof n != "function") throw Error(j(231, t, typeof n));
  return n;
}
var Ss = !1;
if (ot) try {
  var Vn = {};
  Object.defineProperty(Vn, "passive", { get: function() {
    Ss = !0;
  } }), window.addEventListener("test", Vn, Vn), window.removeEventListener("test", Vn, Vn);
} catch {
  Ss = !1;
}
function G1(e, t, n, r, i, o, s, a, l) {
  var u = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, u);
  } catch (c) {
    this.onError(c);
  }
}
var ir = !1, Li = null, Pi = !1, Es = null, J1 = { onError: function(e) {
  ir = !0, Li = e;
} };
function X1(e, t, n, r, i, o, s, a, l) {
  ir = !1, Li = null, G1.apply(J1, arguments);
}
function q1(e, t, n, r, i, o, s, a, l) {
  if (X1.apply(this, arguments), ir) {
    if (ir) {
      var u = Li;
      ir = !1, Li = null;
    } else throw Error(j(198));
    Pi || (Pi = !0, Es = u);
  }
}
function tn(e) {
  var t = e, n = e;
  if (e.alternate) for (; t.return; ) t = t.return;
  else {
    e = t;
    do
      t = e, t.flags & 4098 && (n = t.return), e = t.return;
    while (e);
  }
  return t.tag === 3 ? n : null;
}
function Ic(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null) return t.dehydrated;
  }
  return null;
}
function wa(e) {
  if (tn(e) !== e) throw Error(j(188));
}
function ep(e) {
  var t = e.alternate;
  if (!t) {
    if (t = tn(e), t === null) throw Error(j(188));
    return t !== e ? null : e;
  }
  for (var n = e, r = t; ; ) {
    var i = n.return;
    if (i === null) break;
    var o = i.alternate;
    if (o === null) {
      if (r = i.return, r !== null) {
        n = r;
        continue;
      }
      break;
    }
    if (i.child === o.child) {
      for (o = i.child; o; ) {
        if (o === n) return wa(i), e;
        if (o === r) return wa(i), t;
        o = o.sibling;
      }
      throw Error(j(188));
    }
    if (n.return !== r.return) n = i, r = o;
    else {
      for (var s = !1, a = i.child; a; ) {
        if (a === n) {
          s = !0, n = i, r = o;
          break;
        }
        if (a === r) {
          s = !0, r = i, n = o;
          break;
        }
        a = a.sibling;
      }
      if (!s) {
        for (a = o.child; a; ) {
          if (a === n) {
            s = !0, n = o, r = i;
            break;
          }
          if (a === r) {
            s = !0, r = o, n = i;
            break;
          }
          a = a.sibling;
        }
        if (!s) throw Error(j(189));
      }
    }
    if (n.alternate !== r) throw Error(j(190));
  }
  if (n.tag !== 3) throw Error(j(188));
  return n.stateNode.current === n ? e : t;
}
function Fc(e) {
  return e = ep(e), e !== null ? Ac(e) : null;
}
function Ac(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = Ac(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var zc = Re.unstable_scheduleCallback, xa = Re.unstable_cancelCallback, tp = Re.unstable_shouldYield, np = Re.unstable_requestPaint, G = Re.unstable_now, rp = Re.unstable_getCurrentPriorityLevel, vl = Re.unstable_ImmediatePriority, bc = Re.unstable_UserBlockingPriority, Ri = Re.unstable_NormalPriority, ip = Re.unstable_LowPriority, Uc = Re.unstable_IdlePriority, so = null, Ge = null;
function op(e) {
  if (Ge && typeof Ge.onCommitFiberRoot == "function") try {
    Ge.onCommitFiberRoot(so, e, void 0, (e.current.flags & 128) === 128);
  } catch {
  }
}
var Ve = Math.clz32 ? Math.clz32 : ap, sp = Math.log, lp = Math.LN2;
function ap(e) {
  return e >>>= 0, e === 0 ? 32 : 31 - (sp(e) / lp | 0) | 0;
}
var Yr = 64, Gr = 4194304;
function tr(e) {
  switch (e & -e) {
    case 1:
      return 1;
    case 2:
      return 2;
    case 4:
      return 4;
    case 8:
      return 8;
    case 16:
      return 16;
    case 32:
      return 32;
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return e & 4194240;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return e & 130023424;
    case 134217728:
      return 134217728;
    case 268435456:
      return 268435456;
    case 536870912:
      return 536870912;
    case 1073741824:
      return 1073741824;
    default:
      return e;
  }
}
function Oi(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return 0;
  var r = 0, i = e.suspendedLanes, o = e.pingedLanes, s = n & 268435455;
  if (s !== 0) {
    var a = s & ~i;
    a !== 0 ? r = tr(a) : (o &= s, o !== 0 && (r = tr(o)));
  } else s = n & ~i, s !== 0 ? r = tr(s) : o !== 0 && (r = tr(o));
  if (r === 0) return 0;
  if (t !== 0 && t !== r && !(t & i) && (i = r & -r, o = t & -t, i >= o || i === 16 && (o & 4194240) !== 0)) return t;
  if (r & 4 && (r |= n & 16), t = e.entangledLanes, t !== 0) for (e = e.entanglements, t &= r; 0 < t; ) n = 31 - Ve(t), i = 1 << n, r |= e[n], t &= ~i;
  return r;
}
function up(e, t) {
  switch (e) {
    case 1:
    case 2:
    case 4:
      return t + 250;
    case 8:
    case 16:
    case 32:
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return t + 5e3;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return -1;
    case 134217728:
    case 268435456:
    case 536870912:
    case 1073741824:
      return -1;
    default:
      return -1;
  }
}
function cp(e, t) {
  for (var n = e.suspendedLanes, r = e.pingedLanes, i = e.expirationTimes, o = e.pendingLanes; 0 < o; ) {
    var s = 31 - Ve(o), a = 1 << s, l = i[s];
    l === -1 ? (!(a & n) || a & r) && (i[s] = up(a, t)) : l <= t && (e.expiredLanes |= a), o &= ~a;
  }
}
function ks(e) {
  return e = e.pendingLanes & -1073741825, e !== 0 ? e : e & 1073741824 ? 1073741824 : 0;
}
function Dc() {
  var e = Yr;
  return Yr <<= 1, !(Yr & 4194240) && (Yr = 64), e;
}
function Mo(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function zr(e, t, n) {
  e.pendingLanes |= t, t !== 536870912 && (e.suspendedLanes = 0, e.pingedLanes = 0), e = e.eventTimes, t = 31 - Ve(t), e[t] = n;
}
function fp(e, t) {
  var n = e.pendingLanes & ~t;
  e.pendingLanes = t, e.suspendedLanes = 0, e.pingedLanes = 0, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t, t = e.entanglements;
  var r = e.eventTimes;
  for (e = e.expirationTimes; 0 < n; ) {
    var i = 31 - Ve(n), o = 1 << i;
    t[i] = 0, r[i] = -1, e[i] = -1, n &= ~o;
  }
}
function yl(e, t) {
  var n = e.entangledLanes |= t;
  for (e = e.entanglements; n; ) {
    var r = 31 - Ve(n), i = 1 << r;
    i & t | e[r] & t && (e[r] |= t), n &= ~i;
  }
}
var A = 0;
function Vc(e) {
  return e &= -e, 1 < e ? 4 < e ? e & 268435455 ? 16 : 536870912 : 4 : 1;
}
var Bc, wl, Hc, Kc, Wc, Ns = !1, Jr = [], St = null, Et = null, kt = null, vr = /* @__PURE__ */ new Map(), yr = /* @__PURE__ */ new Map(), vt = [], dp = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
function Ca(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      St = null;
      break;
    case "dragenter":
    case "dragleave":
      Et = null;
      break;
    case "mouseover":
    case "mouseout":
      kt = null;
      break;
    case "pointerover":
    case "pointerout":
      vr.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      yr.delete(t.pointerId);
  }
}
function Bn(e, t, n, r, i, o) {
  return e === null || e.nativeEvent !== o ? (e = { blockedOn: t, domEventName: n, eventSystemFlags: r, nativeEvent: o, targetContainers: [i] }, t !== null && (t = Ur(t), t !== null && wl(t)), e) : (e.eventSystemFlags |= r, t = e.targetContainers, i !== null && t.indexOf(i) === -1 && t.push(i), e);
}
function pp(e, t, n, r, i) {
  switch (t) {
    case "focusin":
      return St = Bn(St, e, t, n, r, i), !0;
    case "dragenter":
      return Et = Bn(Et, e, t, n, r, i), !0;
    case "mouseover":
      return kt = Bn(kt, e, t, n, r, i), !0;
    case "pointerover":
      var o = i.pointerId;
      return vr.set(o, Bn(vr.get(o) || null, e, t, n, r, i)), !0;
    case "gotpointercapture":
      return o = i.pointerId, yr.set(o, Bn(yr.get(o) || null, e, t, n, r, i)), !0;
  }
  return !1;
}
function Qc(e) {
  var t = Vt(e.target);
  if (t !== null) {
    var n = tn(t);
    if (n !== null) {
      if (t = n.tag, t === 13) {
        if (t = Ic(n), t !== null) {
          e.blockedOn = t, Wc(e.priority, function() {
            Hc(n);
          });
          return;
        }
      } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
        e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
        return;
      }
    }
  }
  e.blockedOn = null;
}
function hi(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = js(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      xs = r, n.target.dispatchEvent(r), xs = null;
    } else return t = Ur(n), t !== null && wl(t), e.blockedOn = n, !1;
    t.shift();
  }
  return !0;
}
function Sa(e, t, n) {
  hi(e) && n.delete(t);
}
function hp() {
  Ns = !1, St !== null && hi(St) && (St = null), Et !== null && hi(Et) && (Et = null), kt !== null && hi(kt) && (kt = null), vr.forEach(Sa), yr.forEach(Sa);
}
function Hn(e, t) {
  e.blockedOn === t && (e.blockedOn = null, Ns || (Ns = !0, Re.unstable_scheduleCallback(Re.unstable_NormalPriority, hp)));
}
function wr(e) {
  function t(i) {
    return Hn(i, e);
  }
  if (0 < Jr.length) {
    Hn(Jr[0], e);
    for (var n = 1; n < Jr.length; n++) {
      var r = Jr[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (St !== null && Hn(St, e), Et !== null && Hn(Et, e), kt !== null && Hn(kt, e), vr.forEach(t), yr.forEach(t), n = 0; n < vt.length; n++) r = vt[n], r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < vt.length && (n = vt[0], n.blockedOn === null); ) Qc(n), n.blockedOn === null && vt.shift();
}
var Ln = ut.ReactCurrentBatchConfig, Ti = !0;
function mp(e, t, n, r) {
  var i = A, o = Ln.transition;
  Ln.transition = null;
  try {
    A = 1, xl(e, t, n, r);
  } finally {
    A = i, Ln.transition = o;
  }
}
function gp(e, t, n, r) {
  var i = A, o = Ln.transition;
  Ln.transition = null;
  try {
    A = 4, xl(e, t, n, r);
  } finally {
    A = i, Ln.transition = o;
  }
}
function xl(e, t, n, r) {
  if (Ti) {
    var i = js(e, t, n, r);
    if (i === null) Ho(e, t, r, _i, n), Ca(e, r);
    else if (pp(i, e, t, n, r)) r.stopPropagation();
    else if (Ca(e, r), t & 4 && -1 < dp.indexOf(e)) {
      for (; i !== null; ) {
        var o = Ur(i);
        if (o !== null && Bc(o), o = js(e, t, n, r), o === null && Ho(e, t, r, _i, n), o === i) break;
        i = o;
      }
      i !== null && r.stopPropagation();
    } else Ho(e, t, r, null, n);
  }
}
var _i = null;
function js(e, t, n, r) {
  if (_i = null, e = gl(r), e = Vt(e), e !== null) if (t = tn(e), t === null) e = null;
  else if (n = t.tag, n === 13) {
    if (e = Ic(t), e !== null) return e;
    e = null;
  } else if (n === 3) {
    if (t.stateNode.current.memoizedState.isDehydrated) return t.tag === 3 ? t.stateNode.containerInfo : null;
    e = null;
  } else t !== e && (e = null);
  return _i = e, null;
}
function Zc(e) {
  switch (e) {
    case "cancel":
    case "click":
    case "close":
    case "contextmenu":
    case "copy":
    case "cut":
    case "auxclick":
    case "dblclick":
    case "dragend":
    case "dragstart":
    case "drop":
    case "focusin":
    case "focusout":
    case "input":
    case "invalid":
    case "keydown":
    case "keypress":
    case "keyup":
    case "mousedown":
    case "mouseup":
    case "paste":
    case "pause":
    case "play":
    case "pointercancel":
    case "pointerdown":
    case "pointerup":
    case "ratechange":
    case "reset":
    case "resize":
    case "seeked":
    case "submit":
    case "touchcancel":
    case "touchend":
    case "touchstart":
    case "volumechange":
    case "change":
    case "selectionchange":
    case "textInput":
    case "compositionstart":
    case "compositionend":
    case "compositionupdate":
    case "beforeblur":
    case "afterblur":
    case "beforeinput":
    case "blur":
    case "fullscreenchange":
    case "focus":
    case "hashchange":
    case "popstate":
    case "select":
    case "selectstart":
      return 1;
    case "drag":
    case "dragenter":
    case "dragexit":
    case "dragleave":
    case "dragover":
    case "mousemove":
    case "mouseout":
    case "mouseover":
    case "pointermove":
    case "pointerout":
    case "pointerover":
    case "scroll":
    case "toggle":
    case "touchmove":
    case "wheel":
    case "mouseenter":
    case "mouseleave":
    case "pointerenter":
    case "pointerleave":
      return 4;
    case "message":
      switch (rp()) {
        case vl:
          return 1;
        case bc:
          return 4;
        case Ri:
        case ip:
          return 16;
        case Uc:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var wt = null, Cl = null, mi = null;
function Yc() {
  if (mi) return mi;
  var e, t = Cl, n = t.length, r, i = "value" in wt ? wt.value : wt.textContent, o = i.length;
  for (e = 0; e < n && t[e] === i[e]; e++) ;
  var s = n - e;
  for (r = 1; r <= s && t[n - r] === i[o - r]; r++) ;
  return mi = i.slice(e, 1 < r ? 1 - r : void 0);
}
function gi(e) {
  var t = e.keyCode;
  return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
}
function Xr() {
  return !0;
}
function Ea() {
  return !1;
}
function Te(e) {
  function t(n, r, i, o, s) {
    this._reactName = n, this._targetInst = i, this.type = r, this.nativeEvent = o, this.target = s, this.currentTarget = null;
    for (var a in e) e.hasOwnProperty(a) && (n = e[a], this[a] = n ? n(o) : o[a]);
    return this.isDefaultPrevented = (o.defaultPrevented != null ? o.defaultPrevented : o.returnValue === !1) ? Xr : Ea, this.isPropagationStopped = Ea, this;
  }
  return W(t.prototype, { preventDefault: function() {
    this.defaultPrevented = !0;
    var n = this.nativeEvent;
    n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = !1), this.isDefaultPrevented = Xr);
  }, stopPropagation: function() {
    var n = this.nativeEvent;
    n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0), this.isPropagationStopped = Xr);
  }, persist: function() {
  }, isPersistent: Xr }), t;
}
var zn = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(e) {
  return e.timeStamp || Date.now();
}, defaultPrevented: 0, isTrusted: 0 }, Sl = Te(zn), br = W({}, zn, { view: 0, detail: 0 }), vp = Te(br), Io, Fo, Kn, lo = W({}, br, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: El, button: 0, buttons: 0, relatedTarget: function(e) {
  return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
}, movementX: function(e) {
  return "movementX" in e ? e.movementX : (e !== Kn && (Kn && e.type === "mousemove" ? (Io = e.screenX - Kn.screenX, Fo = e.screenY - Kn.screenY) : Fo = Io = 0, Kn = e), Io);
}, movementY: function(e) {
  return "movementY" in e ? e.movementY : Fo;
} }), ka = Te(lo), yp = W({}, lo, { dataTransfer: 0 }), wp = Te(yp), xp = W({}, br, { relatedTarget: 0 }), Ao = Te(xp), Cp = W({}, zn, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), Sp = Te(Cp), Ep = W({}, zn, { clipboardData: function(e) {
  return "clipboardData" in e ? e.clipboardData : window.clipboardData;
} }), kp = Te(Ep), Np = W({}, zn, { data: 0 }), Na = Te(Np), jp = {
  Esc: "Escape",
  Spacebar: " ",
  Left: "ArrowLeft",
  Up: "ArrowUp",
  Right: "ArrowRight",
  Down: "ArrowDown",
  Del: "Delete",
  Win: "OS",
  Menu: "ContextMenu",
  Apps: "ContextMenu",
  Scroll: "ScrollLock",
  MozPrintableKey: "Unidentified"
}, Lp = {
  8: "Backspace",
  9: "Tab",
  12: "Clear",
  13: "Enter",
  16: "Shift",
  17: "Control",
  18: "Alt",
  19: "Pause",
  20: "CapsLock",
  27: "Escape",
  32: " ",
  33: "PageUp",
  34: "PageDown",
  35: "End",
  36: "Home",
  37: "ArrowLeft",
  38: "ArrowUp",
  39: "ArrowRight",
  40: "ArrowDown",
  45: "Insert",
  46: "Delete",
  112: "F1",
  113: "F2",
  114: "F3",
  115: "F4",
  116: "F5",
  117: "F6",
  118: "F7",
  119: "F8",
  120: "F9",
  121: "F10",
  122: "F11",
  123: "F12",
  144: "NumLock",
  145: "ScrollLock",
  224: "Meta"
}, Pp = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
function Rp(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = Pp[e]) ? !!t[e] : !1;
}
function El() {
  return Rp;
}
var Op = W({}, br, { key: function(e) {
  if (e.key) {
    var t = jp[e.key] || e.key;
    if (t !== "Unidentified") return t;
  }
  return e.type === "keypress" ? (e = gi(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? Lp[e.keyCode] || "Unidentified" : "";
}, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: El, charCode: function(e) {
  return e.type === "keypress" ? gi(e) : 0;
}, keyCode: function(e) {
  return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
}, which: function(e) {
  return e.type === "keypress" ? gi(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
} }), Tp = Te(Op), _p = W({}, lo, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), ja = Te(_p), $p = W({}, br, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: El }), Mp = Te($p), Ip = W({}, zn, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), Fp = Te(Ip), Ap = W({}, lo, {
  deltaX: function(e) {
    return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
  },
  deltaY: function(e) {
    return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
  },
  deltaZ: 0,
  deltaMode: 0
}), zp = Te(Ap), bp = [9, 13, 27, 32], kl = ot && "CompositionEvent" in window, or = null;
ot && "documentMode" in document && (or = document.documentMode);
var Up = ot && "TextEvent" in window && !or, Gc = ot && (!kl || or && 8 < or && 11 >= or), La = " ", Pa = !1;
function Jc(e, t) {
  switch (e) {
    case "keyup":
      return bp.indexOf(t.keyCode) !== -1;
    case "keydown":
      return t.keyCode !== 229;
    case "keypress":
    case "mousedown":
    case "focusout":
      return !0;
    default:
      return !1;
  }
}
function Xc(e) {
  return e = e.detail, typeof e == "object" && "data" in e ? e.data : null;
}
var dn = !1;
function Dp(e, t) {
  switch (e) {
    case "compositionend":
      return Xc(t);
    case "keypress":
      return t.which !== 32 ? null : (Pa = !0, La);
    case "textInput":
      return e = t.data, e === La && Pa ? null : e;
    default:
      return null;
  }
}
function Vp(e, t) {
  if (dn) return e === "compositionend" || !kl && Jc(e, t) ? (e = Yc(), mi = Cl = wt = null, dn = !1, e) : null;
  switch (e) {
    case "paste":
      return null;
    case "keypress":
      if (!(t.ctrlKey || t.altKey || t.metaKey) || t.ctrlKey && t.altKey) {
        if (t.char && 1 < t.char.length) return t.char;
        if (t.which) return String.fromCharCode(t.which);
      }
      return null;
    case "compositionend":
      return Gc && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var Bp = { color: !0, date: !0, datetime: !0, "datetime-local": !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 };
function Ra(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!Bp[e.type] : t === "textarea";
}
function qc(e, t, n, r) {
  Oc(r), t = $i(t, "onChange"), 0 < t.length && (n = new Sl("onChange", "change", null, n, r), e.push({ event: n, listeners: t }));
}
var sr = null, xr = null;
function Hp(e) {
  ff(e, 0);
}
function ao(e) {
  var t = mn(e);
  if (Ec(t)) return e;
}
function Kp(e, t) {
  if (e === "change") return t;
}
var ef = !1;
if (ot) {
  var zo;
  if (ot) {
    var bo = "oninput" in document;
    if (!bo) {
      var Oa = document.createElement("div");
      Oa.setAttribute("oninput", "return;"), bo = typeof Oa.oninput == "function";
    }
    zo = bo;
  } else zo = !1;
  ef = zo && (!document.documentMode || 9 < document.documentMode);
}
function Ta() {
  sr && (sr.detachEvent("onpropertychange", tf), xr = sr = null);
}
function tf(e) {
  if (e.propertyName === "value" && ao(xr)) {
    var t = [];
    qc(t, xr, e, gl(e)), Mc(Hp, t);
  }
}
function Wp(e, t, n) {
  e === "focusin" ? (Ta(), sr = t, xr = n, sr.attachEvent("onpropertychange", tf)) : e === "focusout" && Ta();
}
function Qp(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown") return ao(xr);
}
function Zp(e, t) {
  if (e === "click") return ao(t);
}
function Yp(e, t) {
  if (e === "input" || e === "change") return ao(t);
}
function Gp(e, t) {
  return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
}
var He = typeof Object.is == "function" ? Object.is : Gp;
function Cr(e, t) {
  if (He(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null) return !1;
  var n = Object.keys(e), r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var i = n[r];
    if (!as.call(t, i) || !He(e[i], t[i])) return !1;
  }
  return !0;
}
function _a(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function $a(e, t) {
  var n = _a(e);
  e = 0;
  for (var r; n; ) {
    if (n.nodeType === 3) {
      if (r = e + n.textContent.length, e <= t && r >= t) return { node: n, offset: t - e };
      e = r;
    }
    e: {
      for (; n; ) {
        if (n.nextSibling) {
          n = n.nextSibling;
          break e;
        }
        n = n.parentNode;
      }
      n = void 0;
    }
    n = _a(n);
  }
}
function nf(e, t) {
  return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? nf(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1;
}
function rf() {
  for (var e = window, t = ji(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n) e = t.contentWindow;
    else break;
    t = ji(e.document);
  }
  return t;
}
function Nl(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
}
function Jp(e) {
  var t = rf(), n = e.focusedElem, r = e.selectionRange;
  if (t !== n && n && n.ownerDocument && nf(n.ownerDocument.documentElement, n)) {
    if (r !== null && Nl(n)) {
      if (t = r.start, e = r.end, e === void 0 && (e = t), "selectionStart" in n) n.selectionStart = t, n.selectionEnd = Math.min(e, n.value.length);
      else if (e = (t = n.ownerDocument || document) && t.defaultView || window, e.getSelection) {
        e = e.getSelection();
        var i = n.textContent.length, o = Math.min(r.start, i);
        r = r.end === void 0 ? o : Math.min(r.end, i), !e.extend && o > r && (i = r, r = o, o = i), i = $a(n, o);
        var s = $a(
          n,
          r
        );
        i && s && (e.rangeCount !== 1 || e.anchorNode !== i.node || e.anchorOffset !== i.offset || e.focusNode !== s.node || e.focusOffset !== s.offset) && (t = t.createRange(), t.setStart(i.node, i.offset), e.removeAllRanges(), o > r ? (e.addRange(t), e.extend(s.node, s.offset)) : (t.setEnd(s.node, s.offset), e.addRange(t)));
      }
    }
    for (t = [], e = n; e = e.parentNode; ) e.nodeType === 1 && t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
    for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++) e = t[n], e.element.scrollLeft = e.left, e.element.scrollTop = e.top;
  }
}
var Xp = ot && "documentMode" in document && 11 >= document.documentMode, pn = null, Ls = null, lr = null, Ps = !1;
function Ma(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  Ps || pn == null || pn !== ji(r) || (r = pn, "selectionStart" in r && Nl(r) ? r = { start: r.selectionStart, end: r.selectionEnd } : (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection(), r = { anchorNode: r.anchorNode, anchorOffset: r.anchorOffset, focusNode: r.focusNode, focusOffset: r.focusOffset }), lr && Cr(lr, r) || (lr = r, r = $i(Ls, "onSelect"), 0 < r.length && (t = new Sl("onSelect", "select", null, t, n), e.push({ event: t, listeners: r }), t.target = pn)));
}
function qr(e, t) {
  var n = {};
  return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit" + e] = "webkit" + t, n["Moz" + e] = "moz" + t, n;
}
var hn = { animationend: qr("Animation", "AnimationEnd"), animationiteration: qr("Animation", "AnimationIteration"), animationstart: qr("Animation", "AnimationStart"), transitionend: qr("Transition", "TransitionEnd") }, Uo = {}, of = {};
ot && (of = document.createElement("div").style, "AnimationEvent" in window || (delete hn.animationend.animation, delete hn.animationiteration.animation, delete hn.animationstart.animation), "TransitionEvent" in window || delete hn.transitionend.transition);
function uo(e) {
  if (Uo[e]) return Uo[e];
  if (!hn[e]) return e;
  var t = hn[e], n;
  for (n in t) if (t.hasOwnProperty(n) && n in of) return Uo[e] = t[n];
  return e;
}
var sf = uo("animationend"), lf = uo("animationiteration"), af = uo("animationstart"), uf = uo("transitionend"), cf = /* @__PURE__ */ new Map(), Ia = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
function Mt(e, t) {
  cf.set(e, t), en(t, [e]);
}
for (var Do = 0; Do < Ia.length; Do++) {
  var Vo = Ia[Do], qp = Vo.toLowerCase(), eh = Vo[0].toUpperCase() + Vo.slice(1);
  Mt(qp, "on" + eh);
}
Mt(sf, "onAnimationEnd");
Mt(lf, "onAnimationIteration");
Mt(af, "onAnimationStart");
Mt("dblclick", "onDoubleClick");
Mt("focusin", "onFocus");
Mt("focusout", "onBlur");
Mt(uf, "onTransitionEnd");
On("onMouseEnter", ["mouseout", "mouseover"]);
On("onMouseLeave", ["mouseout", "mouseover"]);
On("onPointerEnter", ["pointerout", "pointerover"]);
On("onPointerLeave", ["pointerout", "pointerover"]);
en("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
en("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
en("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
en("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
en("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
en("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
var nr = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), th = new Set("cancel close invalid load scroll toggle".split(" ").concat(nr));
function Fa(e, t, n) {
  var r = e.type || "unknown-event";
  e.currentTarget = n, q1(r, t, void 0, e), e.currentTarget = null;
}
function ff(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n], i = r.event;
    r = r.listeners;
    e: {
      var o = void 0;
      if (t) for (var s = r.length - 1; 0 <= s; s--) {
        var a = r[s], l = a.instance, u = a.currentTarget;
        if (a = a.listener, l !== o && i.isPropagationStopped()) break e;
        Fa(i, a, u), o = l;
      }
      else for (s = 0; s < r.length; s++) {
        if (a = r[s], l = a.instance, u = a.currentTarget, a = a.listener, l !== o && i.isPropagationStopped()) break e;
        Fa(i, a, u), o = l;
      }
    }
  }
  if (Pi) throw e = Es, Pi = !1, Es = null, e;
}
function D(e, t) {
  var n = t[$s];
  n === void 0 && (n = t[$s] = /* @__PURE__ */ new Set());
  var r = e + "__bubble";
  n.has(r) || (df(t, e, 2, !1), n.add(r));
}
function Bo(e, t, n) {
  var r = 0;
  t && (r |= 4), df(n, e, r, t);
}
var ei = "_reactListening" + Math.random().toString(36).slice(2);
function Sr(e) {
  if (!e[ei]) {
    e[ei] = !0, yc.forEach(function(n) {
      n !== "selectionchange" && (th.has(n) || Bo(n, !1, e), Bo(n, !0, e));
    });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[ei] || (t[ei] = !0, Bo("selectionchange", !1, t));
  }
}
function df(e, t, n, r) {
  switch (Zc(t)) {
    case 1:
      var i = mp;
      break;
    case 4:
      i = gp;
      break;
    default:
      i = xl;
  }
  n = i.bind(null, t, n, e), i = void 0, !Ss || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (i = !0), r ? i !== void 0 ? e.addEventListener(t, n, { capture: !0, passive: i }) : e.addEventListener(t, n, !0) : i !== void 0 ? e.addEventListener(t, n, { passive: i }) : e.addEventListener(t, n, !1);
}
function Ho(e, t, n, r, i) {
  var o = r;
  if (!(t & 1) && !(t & 2) && r !== null) e: for (; ; ) {
    if (r === null) return;
    var s = r.tag;
    if (s === 3 || s === 4) {
      var a = r.stateNode.containerInfo;
      if (a === i || a.nodeType === 8 && a.parentNode === i) break;
      if (s === 4) for (s = r.return; s !== null; ) {
        var l = s.tag;
        if ((l === 3 || l === 4) && (l = s.stateNode.containerInfo, l === i || l.nodeType === 8 && l.parentNode === i)) return;
        s = s.return;
      }
      for (; a !== null; ) {
        if (s = Vt(a), s === null) return;
        if (l = s.tag, l === 5 || l === 6) {
          r = o = s;
          continue e;
        }
        a = a.parentNode;
      }
    }
    r = r.return;
  }
  Mc(function() {
    var u = o, c = gl(n), f = [];
    e: {
      var d = cf.get(e);
      if (d !== void 0) {
        var h = Sl, v = e;
        switch (e) {
          case "keypress":
            if (gi(n) === 0) break e;
          case "keydown":
          case "keyup":
            h = Tp;
            break;
          case "focusin":
            v = "focus", h = Ao;
            break;
          case "focusout":
            v = "blur", h = Ao;
            break;
          case "beforeblur":
          case "afterblur":
            h = Ao;
            break;
          case "click":
            if (n.button === 2) break e;
          case "auxclick":
          case "dblclick":
          case "mousedown":
          case "mousemove":
          case "mouseup":
          case "mouseout":
          case "mouseover":
          case "contextmenu":
            h = ka;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            h = wp;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            h = Mp;
            break;
          case sf:
          case lf:
          case af:
            h = Sp;
            break;
          case uf:
            h = Fp;
            break;
          case "scroll":
            h = vp;
            break;
          case "wheel":
            h = zp;
            break;
          case "copy":
          case "cut":
          case "paste":
            h = kp;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            h = ja;
        }
        var x = (t & 4) !== 0, C = !x && e === "scroll", g = x ? d !== null ? d + "Capture" : null : d;
        x = [];
        for (var m = u, w; m !== null; ) {
          w = m;
          var y = w.stateNode;
          if (w.tag === 5 && y !== null && (w = y, g !== null && (y = gr(m, g), y != null && x.push(Er(m, y, w)))), C) break;
          m = m.return;
        }
        0 < x.length && (d = new h(d, v, null, n, c), f.push({ event: d, listeners: x }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (d = e === "mouseover" || e === "pointerover", h = e === "mouseout" || e === "pointerout", d && n !== xs && (v = n.relatedTarget || n.fromElement) && (Vt(v) || v[st])) break e;
        if ((h || d) && (d = c.window === c ? c : (d = c.ownerDocument) ? d.defaultView || d.parentWindow : window, h ? (v = n.relatedTarget || n.toElement, h = u, v = v ? Vt(v) : null, v !== null && (C = tn(v), v !== C || v.tag !== 5 && v.tag !== 6) && (v = null)) : (h = null, v = u), h !== v)) {
          if (x = ka, y = "onMouseLeave", g = "onMouseEnter", m = "mouse", (e === "pointerout" || e === "pointerover") && (x = ja, y = "onPointerLeave", g = "onPointerEnter", m = "pointer"), C = h == null ? d : mn(h), w = v == null ? d : mn(v), d = new x(y, m + "leave", h, n, c), d.target = C, d.relatedTarget = w, y = null, Vt(c) === u && (x = new x(g, m + "enter", v, n, c), x.target = w, x.relatedTarget = C, y = x), C = y, h && v) t: {
            for (x = h, g = v, m = 0, w = x; w; w = ln(w)) m++;
            for (w = 0, y = g; y; y = ln(y)) w++;
            for (; 0 < m - w; ) x = ln(x), m--;
            for (; 0 < w - m; ) g = ln(g), w--;
            for (; m--; ) {
              if (x === g || g !== null && x === g.alternate) break t;
              x = ln(x), g = ln(g);
            }
            x = null;
          }
          else x = null;
          h !== null && Aa(f, d, h, x, !1), v !== null && C !== null && Aa(f, C, v, x, !0);
        }
      }
      e: {
        if (d = u ? mn(u) : window, h = d.nodeName && d.nodeName.toLowerCase(), h === "select" || h === "input" && d.type === "file") var S = Kp;
        else if (Ra(d)) if (ef) S = Yp;
        else {
          S = Qp;
          var E = Wp;
        }
        else (h = d.nodeName) && h.toLowerCase() === "input" && (d.type === "checkbox" || d.type === "radio") && (S = Zp);
        if (S && (S = S(e, u))) {
          qc(f, S, n, c);
          break e;
        }
        E && E(e, d, u), e === "focusout" && (E = d._wrapperState) && E.controlled && d.type === "number" && ms(d, "number", d.value);
      }
      switch (E = u ? mn(u) : window, e) {
        case "focusin":
          (Ra(E) || E.contentEditable === "true") && (pn = E, Ls = u, lr = null);
          break;
        case "focusout":
          lr = Ls = pn = null;
          break;
        case "mousedown":
          Ps = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          Ps = !1, Ma(f, n, c);
          break;
        case "selectionchange":
          if (Xp) break;
        case "keydown":
        case "keyup":
          Ma(f, n, c);
      }
      var N;
      if (kl) e: {
        switch (e) {
          case "compositionstart":
            var L = "onCompositionStart";
            break e;
          case "compositionend":
            L = "onCompositionEnd";
            break e;
          case "compositionupdate":
            L = "onCompositionUpdate";
            break e;
        }
        L = void 0;
      }
      else dn ? Jc(e, n) && (L = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (L = "onCompositionStart");
      L && (Gc && n.locale !== "ko" && (dn || L !== "onCompositionStart" ? L === "onCompositionEnd" && dn && (N = Yc()) : (wt = c, Cl = "value" in wt ? wt.value : wt.textContent, dn = !0)), E = $i(u, L), 0 < E.length && (L = new Na(L, e, null, n, c), f.push({ event: L, listeners: E }), N ? L.data = N : (N = Xc(n), N !== null && (L.data = N)))), (N = Up ? Dp(e, n) : Vp(e, n)) && (u = $i(u, "onBeforeInput"), 0 < u.length && (c = new Na("onBeforeInput", "beforeinput", null, n, c), f.push({ event: c, listeners: u }), c.data = N));
    }
    ff(f, t);
  });
}
function Er(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function $i(e, t) {
  for (var n = t + "Capture", r = []; e !== null; ) {
    var i = e, o = i.stateNode;
    i.tag === 5 && o !== null && (i = o, o = gr(e, n), o != null && r.unshift(Er(e, o, i)), o = gr(e, t), o != null && r.push(Er(e, o, i))), e = e.return;
  }
  return r;
}
function ln(e) {
  if (e === null) return null;
  do
    e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function Aa(e, t, n, r, i) {
  for (var o = t._reactName, s = []; n !== null && n !== r; ) {
    var a = n, l = a.alternate, u = a.stateNode;
    if (l !== null && l === r) break;
    a.tag === 5 && u !== null && (a = u, i ? (l = gr(n, o), l != null && s.unshift(Er(n, l, a))) : i || (l = gr(n, o), l != null && s.push(Er(n, l, a)))), n = n.return;
  }
  s.length !== 0 && e.push({ event: t, listeners: s });
}
var nh = /\r\n?/g, rh = /\u0000|\uFFFD/g;
function za(e) {
  return (typeof e == "string" ? e : "" + e).replace(nh, `
`).replace(rh, "");
}
function ti(e, t, n) {
  if (t = za(t), za(e) !== t && n) throw Error(j(425));
}
function Mi() {
}
var Rs = null, Os = null;
function Ts(e, t) {
  return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
}
var _s = typeof setTimeout == "function" ? setTimeout : void 0, ih = typeof clearTimeout == "function" ? clearTimeout : void 0, ba = typeof Promise == "function" ? Promise : void 0, oh = typeof queueMicrotask == "function" ? queueMicrotask : typeof ba < "u" ? function(e) {
  return ba.resolve(null).then(e).catch(sh);
} : _s;
function sh(e) {
  setTimeout(function() {
    throw e;
  });
}
function Ko(e, t) {
  var n = t, r = 0;
  do {
    var i = n.nextSibling;
    if (e.removeChild(n), i && i.nodeType === 8) if (n = i.data, n === "/$") {
      if (r === 0) {
        e.removeChild(i), wr(t);
        return;
      }
      r--;
    } else n !== "$" && n !== "$?" && n !== "$!" || r++;
    n = i;
  } while (n);
  wr(t);
}
function Nt(e) {
  for (; e != null; e = e.nextSibling) {
    var t = e.nodeType;
    if (t === 1 || t === 3) break;
    if (t === 8) {
      if (t = e.data, t === "$" || t === "$!" || t === "$?") break;
      if (t === "/$") return null;
    }
  }
  return e;
}
function Ua(e) {
  e = e.previousSibling;
  for (var t = 0; e; ) {
    if (e.nodeType === 8) {
      var n = e.data;
      if (n === "$" || n === "$!" || n === "$?") {
        if (t === 0) return e;
        t--;
      } else n === "/$" && t++;
    }
    e = e.previousSibling;
  }
  return null;
}
var bn = Math.random().toString(36).slice(2), Ze = "__reactFiber$" + bn, kr = "__reactProps$" + bn, st = "__reactContainer$" + bn, $s = "__reactEvents$" + bn, lh = "__reactListeners$" + bn, ah = "__reactHandles$" + bn;
function Vt(e) {
  var t = e[Ze];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if (t = n[st] || n[Ze]) {
      if (n = t.alternate, t.child !== null || n !== null && n.child !== null) for (e = Ua(e); e !== null; ) {
        if (n = e[Ze]) return n;
        e = Ua(e);
      }
      return t;
    }
    e = n, n = e.parentNode;
  }
  return null;
}
function Ur(e) {
  return e = e[Ze] || e[st], !e || e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3 ? null : e;
}
function mn(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(j(33));
}
function co(e) {
  return e[kr] || null;
}
var Ms = [], gn = -1;
function It(e) {
  return { current: e };
}
function V(e) {
  0 > gn || (e.current = Ms[gn], Ms[gn] = null, gn--);
}
function U(e, t) {
  gn++, Ms[gn] = e.current, e.current = t;
}
var _t = {}, me = It(_t), Se = It(!1), Qt = _t;
function Tn(e, t) {
  var n = e.type.contextTypes;
  if (!n) return _t;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t) return r.__reactInternalMemoizedMaskedChildContext;
  var i = {}, o;
  for (o in n) i[o] = t[o];
  return r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = t, e.__reactInternalMemoizedMaskedChildContext = i), i;
}
function Ee(e) {
  return e = e.childContextTypes, e != null;
}
function Ii() {
  V(Se), V(me);
}
function Da(e, t, n) {
  if (me.current !== _t) throw Error(j(168));
  U(me, t), U(Se, n);
}
function pf(e, t, n) {
  var r = e.stateNode;
  if (t = t.childContextTypes, typeof r.getChildContext != "function") return n;
  r = r.getChildContext();
  for (var i in r) if (!(i in t)) throw Error(j(108, W1(e) || "Unknown", i));
  return W({}, n, r);
}
function Fi(e) {
  return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || _t, Qt = me.current, U(me, e), U(Se, Se.current), !0;
}
function Va(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(j(169));
  n ? (e = pf(e, t, Qt), r.__reactInternalMemoizedMergedChildContext = e, V(Se), V(me), U(me, e)) : V(Se), U(Se, n);
}
var qe = null, fo = !1, Wo = !1;
function hf(e) {
  qe === null ? qe = [e] : qe.push(e);
}
function uh(e) {
  fo = !0, hf(e);
}
function Ft() {
  if (!Wo && qe !== null) {
    Wo = !0;
    var e = 0, t = A;
    try {
      var n = qe;
      for (A = 1; e < n.length; e++) {
        var r = n[e];
        do
          r = r(!0);
        while (r !== null);
      }
      qe = null, fo = !1;
    } catch (i) {
      throw qe !== null && (qe = qe.slice(e + 1)), zc(vl, Ft), i;
    } finally {
      A = t, Wo = !1;
    }
  }
  return null;
}
var vn = [], yn = 0, Ai = null, zi = 0, _e = [], $e = 0, Zt = null, nt = 1, rt = "";
function Ut(e, t) {
  vn[yn++] = zi, vn[yn++] = Ai, Ai = e, zi = t;
}
function mf(e, t, n) {
  _e[$e++] = nt, _e[$e++] = rt, _e[$e++] = Zt, Zt = e;
  var r = nt;
  e = rt;
  var i = 32 - Ve(r) - 1;
  r &= ~(1 << i), n += 1;
  var o = 32 - Ve(t) + i;
  if (30 < o) {
    var s = i - i % 5;
    o = (r & (1 << s) - 1).toString(32), r >>= s, i -= s, nt = 1 << 32 - Ve(t) + i | n << i | r, rt = o + e;
  } else nt = 1 << o | n << i | r, rt = e;
}
function jl(e) {
  e.return !== null && (Ut(e, 1), mf(e, 1, 0));
}
function Ll(e) {
  for (; e === Ai; ) Ai = vn[--yn], vn[yn] = null, zi = vn[--yn], vn[yn] = null;
  for (; e === Zt; ) Zt = _e[--$e], _e[$e] = null, rt = _e[--$e], _e[$e] = null, nt = _e[--$e], _e[$e] = null;
}
var Pe = null, je = null, B = !1, De = null;
function gf(e, t) {
  var n = Me(5, null, null, 0);
  n.elementType = "DELETED", n.stateNode = t, n.return = e, t = e.deletions, t === null ? (e.deletions = [n], e.flags |= 16) : t.push(n);
}
function Ba(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return t = t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t, t !== null ? (e.stateNode = t, Pe = e, je = Nt(t.firstChild), !0) : !1;
    case 6:
      return t = e.pendingProps === "" || t.nodeType !== 3 ? null : t, t !== null ? (e.stateNode = t, Pe = e, je = null, !0) : !1;
    case 13:
      return t = t.nodeType !== 8 ? null : t, t !== null ? (n = Zt !== null ? { id: nt, overflow: rt } : null, e.memoizedState = { dehydrated: t, treeContext: n, retryLane: 1073741824 }, n = Me(18, null, null, 0), n.stateNode = t, n.return = e, e.child = n, Pe = e, je = null, !0) : !1;
    default:
      return !1;
  }
}
function Is(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function Fs(e) {
  if (B) {
    var t = je;
    if (t) {
      var n = t;
      if (!Ba(e, t)) {
        if (Is(e)) throw Error(j(418));
        t = Nt(n.nextSibling);
        var r = Pe;
        t && Ba(e, t) ? gf(r, n) : (e.flags = e.flags & -4097 | 2, B = !1, Pe = e);
      }
    } else {
      if (Is(e)) throw Error(j(418));
      e.flags = e.flags & -4097 | 2, B = !1, Pe = e;
    }
  }
}
function Ha(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; ) e = e.return;
  Pe = e;
}
function ni(e) {
  if (e !== Pe) return !1;
  if (!B) return Ha(e), B = !0, !1;
  var t;
  if ((t = e.tag !== 3) && !(t = e.tag !== 5) && (t = e.type, t = t !== "head" && t !== "body" && !Ts(e.type, e.memoizedProps)), t && (t = je)) {
    if (Is(e)) throw vf(), Error(j(418));
    for (; t; ) gf(e, t), t = Nt(t.nextSibling);
  }
  if (Ha(e), e.tag === 13) {
    if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(j(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === "/$") {
            if (t === 0) {
              je = Nt(e.nextSibling);
              break e;
            }
            t--;
          } else n !== "$" && n !== "$!" && n !== "$?" || t++;
        }
        e = e.nextSibling;
      }
      je = null;
    }
  } else je = Pe ? Nt(e.stateNode.nextSibling) : null;
  return !0;
}
function vf() {
  for (var e = je; e; ) e = Nt(e.nextSibling);
}
function _n() {
  je = Pe = null, B = !1;
}
function Pl(e) {
  De === null ? De = [e] : De.push(e);
}
var ch = ut.ReactCurrentBatchConfig;
function Wn(e, t, n) {
  if (e = n.ref, e !== null && typeof e != "function" && typeof e != "object") {
    if (n._owner) {
      if (n = n._owner, n) {
        if (n.tag !== 1) throw Error(j(309));
        var r = n.stateNode;
      }
      if (!r) throw Error(j(147, e));
      var i = r, o = "" + e;
      return t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === o ? t.ref : (t = function(s) {
        var a = i.refs;
        s === null ? delete a[o] : a[o] = s;
      }, t._stringRef = o, t);
    }
    if (typeof e != "string") throw Error(j(284));
    if (!n._owner) throw Error(j(290, e));
  }
  return e;
}
function ri(e, t) {
  throw e = Object.prototype.toString.call(t), Error(j(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e));
}
function Ka(e) {
  var t = e._init;
  return t(e._payload);
}
function yf(e) {
  function t(g, m) {
    if (e) {
      var w = g.deletions;
      w === null ? (g.deletions = [m], g.flags |= 16) : w.push(m);
    }
  }
  function n(g, m) {
    if (!e) return null;
    for (; m !== null; ) t(g, m), m = m.sibling;
    return null;
  }
  function r(g, m) {
    for (g = /* @__PURE__ */ new Map(); m !== null; ) m.key !== null ? g.set(m.key, m) : g.set(m.index, m), m = m.sibling;
    return g;
  }
  function i(g, m) {
    return g = Rt(g, m), g.index = 0, g.sibling = null, g;
  }
  function o(g, m, w) {
    return g.index = w, e ? (w = g.alternate, w !== null ? (w = w.index, w < m ? (g.flags |= 2, m) : w) : (g.flags |= 2, m)) : (g.flags |= 1048576, m);
  }
  function s(g) {
    return e && g.alternate === null && (g.flags |= 2), g;
  }
  function a(g, m, w, y) {
    return m === null || m.tag !== 6 ? (m = qo(w, g.mode, y), m.return = g, m) : (m = i(m, w), m.return = g, m);
  }
  function l(g, m, w, y) {
    var S = w.type;
    return S === fn ? c(g, m, w.props.children, y, w.key) : m !== null && (m.elementType === S || typeof S == "object" && S !== null && S.$$typeof === mt && Ka(S) === m.type) ? (y = i(m, w.props), y.ref = Wn(g, m, w), y.return = g, y) : (y = Ei(w.type, w.key, w.props, null, g.mode, y), y.ref = Wn(g, m, w), y.return = g, y);
  }
  function u(g, m, w, y) {
    return m === null || m.tag !== 4 || m.stateNode.containerInfo !== w.containerInfo || m.stateNode.implementation !== w.implementation ? (m = es(w, g.mode, y), m.return = g, m) : (m = i(m, w.children || []), m.return = g, m);
  }
  function c(g, m, w, y, S) {
    return m === null || m.tag !== 7 ? (m = Wt(w, g.mode, y, S), m.return = g, m) : (m = i(m, w), m.return = g, m);
  }
  function f(g, m, w) {
    if (typeof m == "string" && m !== "" || typeof m == "number") return m = qo("" + m, g.mode, w), m.return = g, m;
    if (typeof m == "object" && m !== null) {
      switch (m.$$typeof) {
        case Wr:
          return w = Ei(m.type, m.key, m.props, null, g.mode, w), w.ref = Wn(g, null, m), w.return = g, w;
        case cn:
          return m = es(m, g.mode, w), m.return = g, m;
        case mt:
          var y = m._init;
          return f(g, y(m._payload), w);
      }
      if (er(m) || Dn(m)) return m = Wt(m, g.mode, w, null), m.return = g, m;
      ri(g, m);
    }
    return null;
  }
  function d(g, m, w, y) {
    var S = m !== null ? m.key : null;
    if (typeof w == "string" && w !== "" || typeof w == "number") return S !== null ? null : a(g, m, "" + w, y);
    if (typeof w == "object" && w !== null) {
      switch (w.$$typeof) {
        case Wr:
          return w.key === S ? l(g, m, w, y) : null;
        case cn:
          return w.key === S ? u(g, m, w, y) : null;
        case mt:
          return S = w._init, d(
            g,
            m,
            S(w._payload),
            y
          );
      }
      if (er(w) || Dn(w)) return S !== null ? null : c(g, m, w, y, null);
      ri(g, w);
    }
    return null;
  }
  function h(g, m, w, y, S) {
    if (typeof y == "string" && y !== "" || typeof y == "number") return g = g.get(w) || null, a(m, g, "" + y, S);
    if (typeof y == "object" && y !== null) {
      switch (y.$$typeof) {
        case Wr:
          return g = g.get(y.key === null ? w : y.key) || null, l(m, g, y, S);
        case cn:
          return g = g.get(y.key === null ? w : y.key) || null, u(m, g, y, S);
        case mt:
          var E = y._init;
          return h(g, m, w, E(y._payload), S);
      }
      if (er(y) || Dn(y)) return g = g.get(w) || null, c(m, g, y, S, null);
      ri(m, y);
    }
    return null;
  }
  function v(g, m, w, y) {
    for (var S = null, E = null, N = m, L = m = 0, _ = null; N !== null && L < w.length; L++) {
      N.index > L ? (_ = N, N = null) : _ = N.sibling;
      var R = d(g, N, w[L], y);
      if (R === null) {
        N === null && (N = _);
        break;
      }
      e && N && R.alternate === null && t(g, N), m = o(R, m, L), E === null ? S = R : E.sibling = R, E = R, N = _;
    }
    if (L === w.length) return n(g, N), B && Ut(g, L), S;
    if (N === null) {
      for (; L < w.length; L++) N = f(g, w[L], y), N !== null && (m = o(N, m, L), E === null ? S = N : E.sibling = N, E = N);
      return B && Ut(g, L), S;
    }
    for (N = r(g, N); L < w.length; L++) _ = h(N, g, L, w[L], y), _ !== null && (e && _.alternate !== null && N.delete(_.key === null ? L : _.key), m = o(_, m, L), E === null ? S = _ : E.sibling = _, E = _);
    return e && N.forEach(function(F) {
      return t(g, F);
    }), B && Ut(g, L), S;
  }
  function x(g, m, w, y) {
    var S = Dn(w);
    if (typeof S != "function") throw Error(j(150));
    if (w = S.call(w), w == null) throw Error(j(151));
    for (var E = S = null, N = m, L = m = 0, _ = null, R = w.next(); N !== null && !R.done; L++, R = w.next()) {
      N.index > L ? (_ = N, N = null) : _ = N.sibling;
      var F = d(g, N, R.value, y);
      if (F === null) {
        N === null && (N = _);
        break;
      }
      e && N && F.alternate === null && t(g, N), m = o(F, m, L), E === null ? S = F : E.sibling = F, E = F, N = _;
    }
    if (R.done) return n(
      g,
      N
    ), B && Ut(g, L), S;
    if (N === null) {
      for (; !R.done; L++, R = w.next()) R = f(g, R.value, y), R !== null && (m = o(R, m, L), E === null ? S = R : E.sibling = R, E = R);
      return B && Ut(g, L), S;
    }
    for (N = r(g, N); !R.done; L++, R = w.next()) R = h(N, g, L, R.value, y), R !== null && (e && R.alternate !== null && N.delete(R.key === null ? L : R.key), m = o(R, m, L), E === null ? S = R : E.sibling = R, E = R);
    return e && N.forEach(function(Z) {
      return t(g, Z);
    }), B && Ut(g, L), S;
  }
  function C(g, m, w, y) {
    if (typeof w == "object" && w !== null && w.type === fn && w.key === null && (w = w.props.children), typeof w == "object" && w !== null) {
      switch (w.$$typeof) {
        case Wr:
          e: {
            for (var S = w.key, E = m; E !== null; ) {
              if (E.key === S) {
                if (S = w.type, S === fn) {
                  if (E.tag === 7) {
                    n(g, E.sibling), m = i(E, w.props.children), m.return = g, g = m;
                    break e;
                  }
                } else if (E.elementType === S || typeof S == "object" && S !== null && S.$$typeof === mt && Ka(S) === E.type) {
                  n(g, E.sibling), m = i(E, w.props), m.ref = Wn(g, E, w), m.return = g, g = m;
                  break e;
                }
                n(g, E);
                break;
              } else t(g, E);
              E = E.sibling;
            }
            w.type === fn ? (m = Wt(w.props.children, g.mode, y, w.key), m.return = g, g = m) : (y = Ei(w.type, w.key, w.props, null, g.mode, y), y.ref = Wn(g, m, w), y.return = g, g = y);
          }
          return s(g);
        case cn:
          e: {
            for (E = w.key; m !== null; ) {
              if (m.key === E) if (m.tag === 4 && m.stateNode.containerInfo === w.containerInfo && m.stateNode.implementation === w.implementation) {
                n(g, m.sibling), m = i(m, w.children || []), m.return = g, g = m;
                break e;
              } else {
                n(g, m);
                break;
              }
              else t(g, m);
              m = m.sibling;
            }
            m = es(w, g.mode, y), m.return = g, g = m;
          }
          return s(g);
        case mt:
          return E = w._init, C(g, m, E(w._payload), y);
      }
      if (er(w)) return v(g, m, w, y);
      if (Dn(w)) return x(g, m, w, y);
      ri(g, w);
    }
    return typeof w == "string" && w !== "" || typeof w == "number" ? (w = "" + w, m !== null && m.tag === 6 ? (n(g, m.sibling), m = i(m, w), m.return = g, g = m) : (n(g, m), m = qo(w, g.mode, y), m.return = g, g = m), s(g)) : n(g, m);
  }
  return C;
}
var $n = yf(!0), wf = yf(!1), bi = It(null), Ui = null, wn = null, Rl = null;
function Ol() {
  Rl = wn = Ui = null;
}
function Tl(e) {
  var t = bi.current;
  V(bi), e._currentValue = t;
}
function As(e, t, n) {
  for (; e !== null; ) {
    var r = e.alternate;
    if ((e.childLanes & t) !== t ? (e.childLanes |= t, r !== null && (r.childLanes |= t)) : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t), e === n) break;
    e = e.return;
  }
}
function Pn(e, t) {
  Ui = e, Rl = wn = null, e = e.dependencies, e !== null && e.firstContext !== null && (e.lanes & t && (Ce = !0), e.firstContext = null);
}
function Fe(e) {
  var t = e._currentValue;
  if (Rl !== e) if (e = { context: e, memoizedValue: t, next: null }, wn === null) {
    if (Ui === null) throw Error(j(308));
    wn = e, Ui.dependencies = { lanes: 0, firstContext: e };
  } else wn = wn.next = e;
  return t;
}
var Bt = null;
function _l(e) {
  Bt === null ? Bt = [e] : Bt.push(e);
}
function xf(e, t, n, r) {
  var i = t.interleaved;
  return i === null ? (n.next = n, _l(t)) : (n.next = i.next, i.next = n), t.interleaved = n, lt(e, r);
}
function lt(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; ) e.childLanes |= t, n = e.alternate, n !== null && (n.childLanes |= t), n = e, e = e.return;
  return n.tag === 3 ? n.stateNode : null;
}
var gt = !1;
function $l(e) {
  e.updateQueue = { baseState: e.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
}
function Cf(e, t) {
  e = e.updateQueue, t.updateQueue === e && (t.updateQueue = { baseState: e.baseState, firstBaseUpdate: e.firstBaseUpdate, lastBaseUpdate: e.lastBaseUpdate, shared: e.shared, effects: e.effects });
}
function it(e, t) {
  return { eventTime: e, lane: t, tag: 0, payload: null, callback: null, next: null };
}
function jt(e, t, n) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (r = r.shared, I & 2) {
    var i = r.pending;
    return i === null ? t.next = t : (t.next = i.next, i.next = t), r.pending = t, lt(e, n);
  }
  return i = r.interleaved, i === null ? (t.next = t, _l(r)) : (t.next = i.next, i.next = t), r.interleaved = t, lt(e, n);
}
function vi(e, t, n) {
  if (t = t.updateQueue, t !== null && (t = t.shared, (n & 4194240) !== 0)) {
    var r = t.lanes;
    r &= e.pendingLanes, n |= r, t.lanes = n, yl(e, n);
  }
}
function Wa(e, t) {
  var n = e.updateQueue, r = e.alternate;
  if (r !== null && (r = r.updateQueue, n === r)) {
    var i = null, o = null;
    if (n = n.firstBaseUpdate, n !== null) {
      do {
        var s = { eventTime: n.eventTime, lane: n.lane, tag: n.tag, payload: n.payload, callback: n.callback, next: null };
        o === null ? i = o = s : o = o.next = s, n = n.next;
      } while (n !== null);
      o === null ? i = o = t : o = o.next = t;
    } else i = o = t;
    n = { baseState: r.baseState, firstBaseUpdate: i, lastBaseUpdate: o, shared: r.shared, effects: r.effects }, e.updateQueue = n;
    return;
  }
  e = n.lastBaseUpdate, e === null ? n.firstBaseUpdate = t : e.next = t, n.lastBaseUpdate = t;
}
function Di(e, t, n, r) {
  var i = e.updateQueue;
  gt = !1;
  var o = i.firstBaseUpdate, s = i.lastBaseUpdate, a = i.shared.pending;
  if (a !== null) {
    i.shared.pending = null;
    var l = a, u = l.next;
    l.next = null, s === null ? o = u : s.next = u, s = l;
    var c = e.alternate;
    c !== null && (c = c.updateQueue, a = c.lastBaseUpdate, a !== s && (a === null ? c.firstBaseUpdate = u : a.next = u, c.lastBaseUpdate = l));
  }
  if (o !== null) {
    var f = i.baseState;
    s = 0, c = u = l = null, a = o;
    do {
      var d = a.lane, h = a.eventTime;
      if ((r & d) === d) {
        c !== null && (c = c.next = {
          eventTime: h,
          lane: 0,
          tag: a.tag,
          payload: a.payload,
          callback: a.callback,
          next: null
        });
        e: {
          var v = e, x = a;
          switch (d = t, h = n, x.tag) {
            case 1:
              if (v = x.payload, typeof v == "function") {
                f = v.call(h, f, d);
                break e;
              }
              f = v;
              break e;
            case 3:
              v.flags = v.flags & -65537 | 128;
            case 0:
              if (v = x.payload, d = typeof v == "function" ? v.call(h, f, d) : v, d == null) break e;
              f = W({}, f, d);
              break e;
            case 2:
              gt = !0;
          }
        }
        a.callback !== null && a.lane !== 0 && (e.flags |= 64, d = i.effects, d === null ? i.effects = [a] : d.push(a));
      } else h = { eventTime: h, lane: d, tag: a.tag, payload: a.payload, callback: a.callback, next: null }, c === null ? (u = c = h, l = f) : c = c.next = h, s |= d;
      if (a = a.next, a === null) {
        if (a = i.shared.pending, a === null) break;
        d = a, a = d.next, d.next = null, i.lastBaseUpdate = d, i.shared.pending = null;
      }
    } while (!0);
    if (c === null && (l = f), i.baseState = l, i.firstBaseUpdate = u, i.lastBaseUpdate = c, t = i.shared.interleaved, t !== null) {
      i = t;
      do
        s |= i.lane, i = i.next;
      while (i !== t);
    } else o === null && (i.shared.lanes = 0);
    Gt |= s, e.lanes = s, e.memoizedState = f;
  }
}
function Qa(e, t, n) {
  if (e = t.effects, t.effects = null, e !== null) for (t = 0; t < e.length; t++) {
    var r = e[t], i = r.callback;
    if (i !== null) {
      if (r.callback = null, r = n, typeof i != "function") throw Error(j(191, i));
      i.call(r);
    }
  }
}
var Dr = {}, Je = It(Dr), Nr = It(Dr), jr = It(Dr);
function Ht(e) {
  if (e === Dr) throw Error(j(174));
  return e;
}
function Ml(e, t) {
  switch (U(jr, t), U(Nr, e), U(Je, Dr), e = t.nodeType, e) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : vs(null, "");
      break;
    default:
      e = e === 8 ? t.parentNode : t, t = e.namespaceURI || null, e = e.tagName, t = vs(t, e);
  }
  V(Je), U(Je, t);
}
function Mn() {
  V(Je), V(Nr), V(jr);
}
function Sf(e) {
  Ht(jr.current);
  var t = Ht(Je.current), n = vs(t, e.type);
  t !== n && (U(Nr, e), U(Je, n));
}
function Il(e) {
  Nr.current === e && (V(Je), V(Nr));
}
var H = It(0);
function Vi(e) {
  for (var t = e; t !== null; ) {
    if (t.tag === 13) {
      var n = t.memoizedState;
      if (n !== null && (n = n.dehydrated, n === null || n.data === "$?" || n.data === "$!")) return t;
    } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
      if (t.flags & 128) return t;
    } else if (t.child !== null) {
      t.child.return = t, t = t.child;
      continue;
    }
    if (t === e) break;
    for (; t.sibling === null; ) {
      if (t.return === null || t.return === e) return null;
      t = t.return;
    }
    t.sibling.return = t.return, t = t.sibling;
  }
  return null;
}
var Qo = [];
function Fl() {
  for (var e = 0; e < Qo.length; e++) Qo[e]._workInProgressVersionPrimary = null;
  Qo.length = 0;
}
var yi = ut.ReactCurrentDispatcher, Zo = ut.ReactCurrentBatchConfig, Yt = 0, K = null, q = null, re = null, Bi = !1, ar = !1, Lr = 0, fh = 0;
function fe() {
  throw Error(j(321));
}
function Al(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++) if (!He(e[n], t[n])) return !1;
  return !0;
}
function zl(e, t, n, r, i, o) {
  if (Yt = o, K = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, yi.current = e === null || e.memoizedState === null ? mh : gh, e = n(r, i), ar) {
    o = 0;
    do {
      if (ar = !1, Lr = 0, 25 <= o) throw Error(j(301));
      o += 1, re = q = null, t.updateQueue = null, yi.current = vh, e = n(r, i);
    } while (ar);
  }
  if (yi.current = Hi, t = q !== null && q.next !== null, Yt = 0, re = q = K = null, Bi = !1, t) throw Error(j(300));
  return e;
}
function bl() {
  var e = Lr !== 0;
  return Lr = 0, e;
}
function Qe() {
  var e = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
  return re === null ? K.memoizedState = re = e : re = re.next = e, re;
}
function Ae() {
  if (q === null) {
    var e = K.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = q.next;
  var t = re === null ? K.memoizedState : re.next;
  if (t !== null) re = t, q = e;
  else {
    if (e === null) throw Error(j(310));
    q = e, e = { memoizedState: q.memoizedState, baseState: q.baseState, baseQueue: q.baseQueue, queue: q.queue, next: null }, re === null ? K.memoizedState = re = e : re = re.next = e;
  }
  return re;
}
function Pr(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function Yo(e) {
  var t = Ae(), n = t.queue;
  if (n === null) throw Error(j(311));
  n.lastRenderedReducer = e;
  var r = q, i = r.baseQueue, o = n.pending;
  if (o !== null) {
    if (i !== null) {
      var s = i.next;
      i.next = o.next, o.next = s;
    }
    r.baseQueue = i = o, n.pending = null;
  }
  if (i !== null) {
    o = i.next, r = r.baseState;
    var a = s = null, l = null, u = o;
    do {
      var c = u.lane;
      if ((Yt & c) === c) l !== null && (l = l.next = { lane: 0, action: u.action, hasEagerState: u.hasEagerState, eagerState: u.eagerState, next: null }), r = u.hasEagerState ? u.eagerState : e(r, u.action);
      else {
        var f = {
          lane: c,
          action: u.action,
          hasEagerState: u.hasEagerState,
          eagerState: u.eagerState,
          next: null
        };
        l === null ? (a = l = f, s = r) : l = l.next = f, K.lanes |= c, Gt |= c;
      }
      u = u.next;
    } while (u !== null && u !== o);
    l === null ? s = r : l.next = a, He(r, t.memoizedState) || (Ce = !0), t.memoizedState = r, t.baseState = s, t.baseQueue = l, n.lastRenderedState = r;
  }
  if (e = n.interleaved, e !== null) {
    i = e;
    do
      o = i.lane, K.lanes |= o, Gt |= o, i = i.next;
    while (i !== e);
  } else i === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function Go(e) {
  var t = Ae(), n = t.queue;
  if (n === null) throw Error(j(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch, i = n.pending, o = t.memoizedState;
  if (i !== null) {
    n.pending = null;
    var s = i = i.next;
    do
      o = e(o, s.action), s = s.next;
    while (s !== i);
    He(o, t.memoizedState) || (Ce = !0), t.memoizedState = o, t.baseQueue === null && (t.baseState = o), n.lastRenderedState = o;
  }
  return [o, r];
}
function Ef() {
}
function kf(e, t) {
  var n = K, r = Ae(), i = t(), o = !He(r.memoizedState, i);
  if (o && (r.memoizedState = i, Ce = !0), r = r.queue, Ul(Lf.bind(null, n, r, e), [e]), r.getSnapshot !== t || o || re !== null && re.memoizedState.tag & 1) {
    if (n.flags |= 2048, Rr(9, jf.bind(null, n, r, i, t), void 0, null), oe === null) throw Error(j(349));
    Yt & 30 || Nf(n, t, i);
  }
  return i;
}
function Nf(e, t, n) {
  e.flags |= 16384, e = { getSnapshot: t, value: n }, t = K.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, K.updateQueue = t, t.stores = [e]) : (n = t.stores, n === null ? t.stores = [e] : n.push(e));
}
function jf(e, t, n, r) {
  t.value = n, t.getSnapshot = r, Pf(t) && Rf(e);
}
function Lf(e, t, n) {
  return n(function() {
    Pf(t) && Rf(e);
  });
}
function Pf(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !He(e, n);
  } catch {
    return !0;
  }
}
function Rf(e) {
  var t = lt(e, 1);
  t !== null && Be(t, e, 1, -1);
}
function Za(e) {
  var t = Qe();
  return typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: Pr, lastRenderedState: e }, t.queue = e, e = e.dispatch = hh.bind(null, K, e), [t.memoizedState, e];
}
function Rr(e, t, n, r) {
  return e = { tag: e, create: t, destroy: n, deps: r, next: null }, t = K.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, K.updateQueue = t, t.lastEffect = e.next = e) : (n = t.lastEffect, n === null ? t.lastEffect = e.next = e : (r = n.next, n.next = e, e.next = r, t.lastEffect = e)), e;
}
function Of() {
  return Ae().memoizedState;
}
function wi(e, t, n, r) {
  var i = Qe();
  K.flags |= e, i.memoizedState = Rr(1 | t, n, void 0, r === void 0 ? null : r);
}
function po(e, t, n, r) {
  var i = Ae();
  r = r === void 0 ? null : r;
  var o = void 0;
  if (q !== null) {
    var s = q.memoizedState;
    if (o = s.destroy, r !== null && Al(r, s.deps)) {
      i.memoizedState = Rr(t, n, o, r);
      return;
    }
  }
  K.flags |= e, i.memoizedState = Rr(1 | t, n, o, r);
}
function Ya(e, t) {
  return wi(8390656, 8, e, t);
}
function Ul(e, t) {
  return po(2048, 8, e, t);
}
function Tf(e, t) {
  return po(4, 2, e, t);
}
function _f(e, t) {
  return po(4, 4, e, t);
}
function $f(e, t) {
  if (typeof t == "function") return e = e(), t(e), function() {
    t(null);
  };
  if (t != null) return e = e(), t.current = e, function() {
    t.current = null;
  };
}
function Mf(e, t, n) {
  return n = n != null ? n.concat([e]) : null, po(4, 4, $f.bind(null, t, e), n);
}
function Dl() {
}
function If(e, t) {
  var n = Ae();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Al(t, r[1]) ? r[0] : (n.memoizedState = [e, t], e);
}
function Ff(e, t) {
  var n = Ae();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Al(t, r[1]) ? r[0] : (e = e(), n.memoizedState = [e, t], e);
}
function Af(e, t, n) {
  return Yt & 21 ? (He(n, t) || (n = Dc(), K.lanes |= n, Gt |= n, e.baseState = !0), t) : (e.baseState && (e.baseState = !1, Ce = !0), e.memoizedState = n);
}
function dh(e, t) {
  var n = A;
  A = n !== 0 && 4 > n ? n : 4, e(!0);
  var r = Zo.transition;
  Zo.transition = {};
  try {
    e(!1), t();
  } finally {
    A = n, Zo.transition = r;
  }
}
function zf() {
  return Ae().memoizedState;
}
function ph(e, t, n) {
  var r = Pt(e);
  if (n = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null }, bf(e)) Uf(t, n);
  else if (n = xf(e, t, n, r), n !== null) {
    var i = ve();
    Be(n, e, r, i), Df(n, t, r);
  }
}
function hh(e, t, n) {
  var r = Pt(e), i = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (bf(e)) Uf(t, i);
  else {
    var o = e.alternate;
    if (e.lanes === 0 && (o === null || o.lanes === 0) && (o = t.lastRenderedReducer, o !== null)) try {
      var s = t.lastRenderedState, a = o(s, n);
      if (i.hasEagerState = !0, i.eagerState = a, He(a, s)) {
        var l = t.interleaved;
        l === null ? (i.next = i, _l(t)) : (i.next = l.next, l.next = i), t.interleaved = i;
        return;
      }
    } catch {
    } finally {
    }
    n = xf(e, t, i, r), n !== null && (i = ve(), Be(n, e, r, i), Df(n, t, r));
  }
}
function bf(e) {
  var t = e.alternate;
  return e === K || t !== null && t === K;
}
function Uf(e, t) {
  ar = Bi = !0;
  var n = e.pending;
  n === null ? t.next = t : (t.next = n.next, n.next = t), e.pending = t;
}
function Df(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    r &= e.pendingLanes, n |= r, t.lanes = n, yl(e, n);
  }
}
var Hi = { readContext: Fe, useCallback: fe, useContext: fe, useEffect: fe, useImperativeHandle: fe, useInsertionEffect: fe, useLayoutEffect: fe, useMemo: fe, useReducer: fe, useRef: fe, useState: fe, useDebugValue: fe, useDeferredValue: fe, useTransition: fe, useMutableSource: fe, useSyncExternalStore: fe, useId: fe, unstable_isNewReconciler: !1 }, mh = { readContext: Fe, useCallback: function(e, t) {
  return Qe().memoizedState = [e, t === void 0 ? null : t], e;
}, useContext: Fe, useEffect: Ya, useImperativeHandle: function(e, t, n) {
  return n = n != null ? n.concat([e]) : null, wi(
    4194308,
    4,
    $f.bind(null, t, e),
    n
  );
}, useLayoutEffect: function(e, t) {
  return wi(4194308, 4, e, t);
}, useInsertionEffect: function(e, t) {
  return wi(4, 2, e, t);
}, useMemo: function(e, t) {
  var n = Qe();
  return t = t === void 0 ? null : t, e = e(), n.memoizedState = [e, t], e;
}, useReducer: function(e, t, n) {
  var r = Qe();
  return t = n !== void 0 ? n(t) : t, r.memoizedState = r.baseState = t, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: e, lastRenderedState: t }, r.queue = e, e = e.dispatch = ph.bind(null, K, e), [r.memoizedState, e];
}, useRef: function(e) {
  var t = Qe();
  return e = { current: e }, t.memoizedState = e;
}, useState: Za, useDebugValue: Dl, useDeferredValue: function(e) {
  return Qe().memoizedState = e;
}, useTransition: function() {
  var e = Za(!1), t = e[0];
  return e = dh.bind(null, e[1]), Qe().memoizedState = e, [t, e];
}, useMutableSource: function() {
}, useSyncExternalStore: function(e, t, n) {
  var r = K, i = Qe();
  if (B) {
    if (n === void 0) throw Error(j(407));
    n = n();
  } else {
    if (n = t(), oe === null) throw Error(j(349));
    Yt & 30 || Nf(r, t, n);
  }
  i.memoizedState = n;
  var o = { value: n, getSnapshot: t };
  return i.queue = o, Ya(Lf.bind(
    null,
    r,
    o,
    e
  ), [e]), r.flags |= 2048, Rr(9, jf.bind(null, r, o, n, t), void 0, null), n;
}, useId: function() {
  var e = Qe(), t = oe.identifierPrefix;
  if (B) {
    var n = rt, r = nt;
    n = (r & ~(1 << 32 - Ve(r) - 1)).toString(32) + n, t = ":" + t + "R" + n, n = Lr++, 0 < n && (t += "H" + n.toString(32)), t += ":";
  } else n = fh++, t = ":" + t + "r" + n.toString(32) + ":";
  return e.memoizedState = t;
}, unstable_isNewReconciler: !1 }, gh = {
  readContext: Fe,
  useCallback: If,
  useContext: Fe,
  useEffect: Ul,
  useImperativeHandle: Mf,
  useInsertionEffect: Tf,
  useLayoutEffect: _f,
  useMemo: Ff,
  useReducer: Yo,
  useRef: Of,
  useState: function() {
    return Yo(Pr);
  },
  useDebugValue: Dl,
  useDeferredValue: function(e) {
    var t = Ae();
    return Af(t, q.memoizedState, e);
  },
  useTransition: function() {
    var e = Yo(Pr)[0], t = Ae().memoizedState;
    return [e, t];
  },
  useMutableSource: Ef,
  useSyncExternalStore: kf,
  useId: zf,
  unstable_isNewReconciler: !1
}, vh = { readContext: Fe, useCallback: If, useContext: Fe, useEffect: Ul, useImperativeHandle: Mf, useInsertionEffect: Tf, useLayoutEffect: _f, useMemo: Ff, useReducer: Go, useRef: Of, useState: function() {
  return Go(Pr);
}, useDebugValue: Dl, useDeferredValue: function(e) {
  var t = Ae();
  return q === null ? t.memoizedState = e : Af(t, q.memoizedState, e);
}, useTransition: function() {
  var e = Go(Pr)[0], t = Ae().memoizedState;
  return [e, t];
}, useMutableSource: Ef, useSyncExternalStore: kf, useId: zf, unstable_isNewReconciler: !1 };
function be(e, t) {
  if (e && e.defaultProps) {
    t = W({}, t), e = e.defaultProps;
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
function zs(e, t, n, r) {
  t = e.memoizedState, n = n(r, t), n = n == null ? t : W({}, t, n), e.memoizedState = n, e.lanes === 0 && (e.updateQueue.baseState = n);
}
var ho = { isMounted: function(e) {
  return (e = e._reactInternals) ? tn(e) === e : !1;
}, enqueueSetState: function(e, t, n) {
  e = e._reactInternals;
  var r = ve(), i = Pt(e), o = it(r, i);
  o.payload = t, n != null && (o.callback = n), t = jt(e, o, i), t !== null && (Be(t, e, i, r), vi(t, e, i));
}, enqueueReplaceState: function(e, t, n) {
  e = e._reactInternals;
  var r = ve(), i = Pt(e), o = it(r, i);
  o.tag = 1, o.payload = t, n != null && (o.callback = n), t = jt(e, o, i), t !== null && (Be(t, e, i, r), vi(t, e, i));
}, enqueueForceUpdate: function(e, t) {
  e = e._reactInternals;
  var n = ve(), r = Pt(e), i = it(n, r);
  i.tag = 2, t != null && (i.callback = t), t = jt(e, i, r), t !== null && (Be(t, e, r, n), vi(t, e, r));
} };
function Ga(e, t, n, r, i, o, s) {
  return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(r, o, s) : t.prototype && t.prototype.isPureReactComponent ? !Cr(n, r) || !Cr(i, o) : !0;
}
function Vf(e, t, n) {
  var r = !1, i = _t, o = t.contextType;
  return typeof o == "object" && o !== null ? o = Fe(o) : (i = Ee(t) ? Qt : me.current, r = t.contextTypes, o = (r = r != null) ? Tn(e, i) : _t), t = new t(n, o), e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null, t.updater = ho, e.stateNode = t, t._reactInternals = e, r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = i, e.__reactInternalMemoizedMaskedChildContext = o), t;
}
function Ja(e, t, n, r) {
  e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, r), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, r), t.state !== e && ho.enqueueReplaceState(t, t.state, null);
}
function bs(e, t, n, r) {
  var i = e.stateNode;
  i.props = n, i.state = e.memoizedState, i.refs = {}, $l(e);
  var o = t.contextType;
  typeof o == "object" && o !== null ? i.context = Fe(o) : (o = Ee(t) ? Qt : me.current, i.context = Tn(e, o)), i.state = e.memoizedState, o = t.getDerivedStateFromProps, typeof o == "function" && (zs(e, t, o, n), i.state = e.memoizedState), typeof t.getDerivedStateFromProps == "function" || typeof i.getSnapshotBeforeUpdate == "function" || typeof i.UNSAFE_componentWillMount != "function" && typeof i.componentWillMount != "function" || (t = i.state, typeof i.componentWillMount == "function" && i.componentWillMount(), typeof i.UNSAFE_componentWillMount == "function" && i.UNSAFE_componentWillMount(), t !== i.state && ho.enqueueReplaceState(i, i.state, null), Di(e, n, i, r), i.state = e.memoizedState), typeof i.componentDidMount == "function" && (e.flags |= 4194308);
}
function In(e, t) {
  try {
    var n = "", r = t;
    do
      n += K1(r), r = r.return;
    while (r);
    var i = n;
  } catch (o) {
    i = `
Error generating stack: ` + o.message + `
` + o.stack;
  }
  return { value: e, source: t, stack: i, digest: null };
}
function Jo(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function Us(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function() {
      throw n;
    });
  }
}
var yh = typeof WeakMap == "function" ? WeakMap : Map;
function Bf(e, t, n) {
  n = it(-1, n), n.tag = 3, n.payload = { element: null };
  var r = t.value;
  return n.callback = function() {
    Wi || (Wi = !0, Gs = r), Us(e, t);
  }, n;
}
function Hf(e, t, n) {
  n = it(-1, n), n.tag = 3;
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var i = t.value;
    n.payload = function() {
      return r(i);
    }, n.callback = function() {
      Us(e, t);
    };
  }
  var o = e.stateNode;
  return o !== null && typeof o.componentDidCatch == "function" && (n.callback = function() {
    Us(e, t), typeof r != "function" && (Lt === null ? Lt = /* @__PURE__ */ new Set([this]) : Lt.add(this));
    var s = t.stack;
    this.componentDidCatch(t.value, { componentStack: s !== null ? s : "" });
  }), n;
}
function Xa(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new yh();
    var i = /* @__PURE__ */ new Set();
    r.set(t, i);
  } else i = r.get(t), i === void 0 && (i = /* @__PURE__ */ new Set(), r.set(t, i));
  i.has(n) || (i.add(n), e = _h.bind(null, e, t, n), t.then(e, e));
}
function qa(e) {
  do {
    var t;
    if ((t = e.tag === 13) && (t = e.memoizedState, t = t !== null ? t.dehydrated !== null : !0), t) return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function eu(e, t, n, r, i) {
  return e.mode & 1 ? (e.flags |= 65536, e.lanes = i, e) : (e === t ? e.flags |= 65536 : (e.flags |= 128, n.flags |= 131072, n.flags &= -52805, n.tag === 1 && (n.alternate === null ? n.tag = 17 : (t = it(-1, 1), t.tag = 2, jt(n, t, 1))), n.lanes |= 1), e);
}
var wh = ut.ReactCurrentOwner, Ce = !1;
function ge(e, t, n, r) {
  t.child = e === null ? wf(t, null, n, r) : $n(t, e.child, n, r);
}
function tu(e, t, n, r, i) {
  n = n.render;
  var o = t.ref;
  return Pn(t, i), r = zl(e, t, n, r, o, i), n = bl(), e !== null && !Ce ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~i, at(e, t, i)) : (B && n && jl(t), t.flags |= 1, ge(e, t, r, i), t.child);
}
function nu(e, t, n, r, i) {
  if (e === null) {
    var o = n.type;
    return typeof o == "function" && !Yl(o) && o.defaultProps === void 0 && n.compare === null && n.defaultProps === void 0 ? (t.tag = 15, t.type = o, Kf(e, t, o, r, i)) : (e = Ei(n.type, null, r, t, t.mode, i), e.ref = t.ref, e.return = t, t.child = e);
  }
  if (o = e.child, !(e.lanes & i)) {
    var s = o.memoizedProps;
    if (n = n.compare, n = n !== null ? n : Cr, n(s, r) && e.ref === t.ref) return at(e, t, i);
  }
  return t.flags |= 1, e = Rt(o, r), e.ref = t.ref, e.return = t, t.child = e;
}
function Kf(e, t, n, r, i) {
  if (e !== null) {
    var o = e.memoizedProps;
    if (Cr(o, r) && e.ref === t.ref) if (Ce = !1, t.pendingProps = r = o, (e.lanes & i) !== 0) e.flags & 131072 && (Ce = !0);
    else return t.lanes = e.lanes, at(e, t, i);
  }
  return Ds(e, t, n, r, i);
}
function Wf(e, t, n) {
  var r = t.pendingProps, i = r.children, o = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden") if (!(t.mode & 1)) t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, U(Cn, Ne), Ne |= n;
  else {
    if (!(n & 1073741824)) return e = o !== null ? o.baseLanes | n : n, t.lanes = t.childLanes = 1073741824, t.memoizedState = { baseLanes: e, cachePool: null, transitions: null }, t.updateQueue = null, U(Cn, Ne), Ne |= e, null;
    t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, r = o !== null ? o.baseLanes : n, U(Cn, Ne), Ne |= r;
  }
  else o !== null ? (r = o.baseLanes | n, t.memoizedState = null) : r = n, U(Cn, Ne), Ne |= r;
  return ge(e, t, i, n), t.child;
}
function Qf(e, t) {
  var n = t.ref;
  (e === null && n !== null || e !== null && e.ref !== n) && (t.flags |= 512, t.flags |= 2097152);
}
function Ds(e, t, n, r, i) {
  var o = Ee(n) ? Qt : me.current;
  return o = Tn(t, o), Pn(t, i), n = zl(e, t, n, r, o, i), r = bl(), e !== null && !Ce ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~i, at(e, t, i)) : (B && r && jl(t), t.flags |= 1, ge(e, t, n, i), t.child);
}
function ru(e, t, n, r, i) {
  if (Ee(n)) {
    var o = !0;
    Fi(t);
  } else o = !1;
  if (Pn(t, i), t.stateNode === null) xi(e, t), Vf(t, n, r), bs(t, n, r, i), r = !0;
  else if (e === null) {
    var s = t.stateNode, a = t.memoizedProps;
    s.props = a;
    var l = s.context, u = n.contextType;
    typeof u == "object" && u !== null ? u = Fe(u) : (u = Ee(n) ? Qt : me.current, u = Tn(t, u));
    var c = n.getDerivedStateFromProps, f = typeof c == "function" || typeof s.getSnapshotBeforeUpdate == "function";
    f || typeof s.UNSAFE_componentWillReceiveProps != "function" && typeof s.componentWillReceiveProps != "function" || (a !== r || l !== u) && Ja(t, s, r, u), gt = !1;
    var d = t.memoizedState;
    s.state = d, Di(t, r, s, i), l = t.memoizedState, a !== r || d !== l || Se.current || gt ? (typeof c == "function" && (zs(t, n, c, r), l = t.memoizedState), (a = gt || Ga(t, n, a, r, d, l, u)) ? (f || typeof s.UNSAFE_componentWillMount != "function" && typeof s.componentWillMount != "function" || (typeof s.componentWillMount == "function" && s.componentWillMount(), typeof s.UNSAFE_componentWillMount == "function" && s.UNSAFE_componentWillMount()), typeof s.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof s.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = r, t.memoizedState = l), s.props = r, s.state = l, s.context = u, r = a) : (typeof s.componentDidMount == "function" && (t.flags |= 4194308), r = !1);
  } else {
    s = t.stateNode, Cf(e, t), a = t.memoizedProps, u = t.type === t.elementType ? a : be(t.type, a), s.props = u, f = t.pendingProps, d = s.context, l = n.contextType, typeof l == "object" && l !== null ? l = Fe(l) : (l = Ee(n) ? Qt : me.current, l = Tn(t, l));
    var h = n.getDerivedStateFromProps;
    (c = typeof h == "function" || typeof s.getSnapshotBeforeUpdate == "function") || typeof s.UNSAFE_componentWillReceiveProps != "function" && typeof s.componentWillReceiveProps != "function" || (a !== f || d !== l) && Ja(t, s, r, l), gt = !1, d = t.memoizedState, s.state = d, Di(t, r, s, i);
    var v = t.memoizedState;
    a !== f || d !== v || Se.current || gt ? (typeof h == "function" && (zs(t, n, h, r), v = t.memoizedState), (u = gt || Ga(t, n, u, r, d, v, l) || !1) ? (c || typeof s.UNSAFE_componentWillUpdate != "function" && typeof s.componentWillUpdate != "function" || (typeof s.componentWillUpdate == "function" && s.componentWillUpdate(r, v, l), typeof s.UNSAFE_componentWillUpdate == "function" && s.UNSAFE_componentWillUpdate(r, v, l)), typeof s.componentDidUpdate == "function" && (t.flags |= 4), typeof s.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof s.componentDidUpdate != "function" || a === e.memoizedProps && d === e.memoizedState || (t.flags |= 4), typeof s.getSnapshotBeforeUpdate != "function" || a === e.memoizedProps && d === e.memoizedState || (t.flags |= 1024), t.memoizedProps = r, t.memoizedState = v), s.props = r, s.state = v, s.context = l, r = u) : (typeof s.componentDidUpdate != "function" || a === e.memoizedProps && d === e.memoizedState || (t.flags |= 4), typeof s.getSnapshotBeforeUpdate != "function" || a === e.memoizedProps && d === e.memoizedState || (t.flags |= 1024), r = !1);
  }
  return Vs(e, t, n, r, o, i);
}
function Vs(e, t, n, r, i, o) {
  Qf(e, t);
  var s = (t.flags & 128) !== 0;
  if (!r && !s) return i && Va(t, n, !1), at(e, t, o);
  r = t.stateNode, wh.current = t;
  var a = s && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return t.flags |= 1, e !== null && s ? (t.child = $n(t, e.child, null, o), t.child = $n(t, null, a, o)) : ge(e, t, a, o), t.memoizedState = r.state, i && Va(t, n, !0), t.child;
}
function Zf(e) {
  var t = e.stateNode;
  t.pendingContext ? Da(e, t.pendingContext, t.pendingContext !== t.context) : t.context && Da(e, t.context, !1), Ml(e, t.containerInfo);
}
function iu(e, t, n, r, i) {
  return _n(), Pl(i), t.flags |= 256, ge(e, t, n, r), t.child;
}
var Bs = { dehydrated: null, treeContext: null, retryLane: 0 };
function Hs(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function Yf(e, t, n) {
  var r = t.pendingProps, i = H.current, o = !1, s = (t.flags & 128) !== 0, a;
  if ((a = s) || (a = e !== null && e.memoizedState === null ? !1 : (i & 2) !== 0), a ? (o = !0, t.flags &= -129) : (e === null || e.memoizedState !== null) && (i |= 1), U(H, i & 1), e === null)
    return Fs(t), e = t.memoizedState, e !== null && (e = e.dehydrated, e !== null) ? (t.mode & 1 ? e.data === "$!" ? t.lanes = 8 : t.lanes = 1073741824 : t.lanes = 1, null) : (s = r.children, e = r.fallback, o ? (r = t.mode, o = t.child, s = { mode: "hidden", children: s }, !(r & 1) && o !== null ? (o.childLanes = 0, o.pendingProps = s) : o = vo(s, r, 0, null), e = Wt(e, r, n, null), o.return = t, e.return = t, o.sibling = e, t.child = o, t.child.memoizedState = Hs(n), t.memoizedState = Bs, e) : Vl(t, s));
  if (i = e.memoizedState, i !== null && (a = i.dehydrated, a !== null)) return xh(e, t, s, r, a, i, n);
  if (o) {
    o = r.fallback, s = t.mode, i = e.child, a = i.sibling;
    var l = { mode: "hidden", children: r.children };
    return !(s & 1) && t.child !== i ? (r = t.child, r.childLanes = 0, r.pendingProps = l, t.deletions = null) : (r = Rt(i, l), r.subtreeFlags = i.subtreeFlags & 14680064), a !== null ? o = Rt(a, o) : (o = Wt(o, s, n, null), o.flags |= 2), o.return = t, r.return = t, r.sibling = o, t.child = r, r = o, o = t.child, s = e.child.memoizedState, s = s === null ? Hs(n) : { baseLanes: s.baseLanes | n, cachePool: null, transitions: s.transitions }, o.memoizedState = s, o.childLanes = e.childLanes & ~n, t.memoizedState = Bs, r;
  }
  return o = e.child, e = o.sibling, r = Rt(o, { mode: "visible", children: r.children }), !(t.mode & 1) && (r.lanes = n), r.return = t, r.sibling = null, e !== null && (n = t.deletions, n === null ? (t.deletions = [e], t.flags |= 16) : n.push(e)), t.child = r, t.memoizedState = null, r;
}
function Vl(e, t) {
  return t = vo({ mode: "visible", children: t }, e.mode, 0, null), t.return = e, e.child = t;
}
function ii(e, t, n, r) {
  return r !== null && Pl(r), $n(t, e.child, null, n), e = Vl(t, t.pendingProps.children), e.flags |= 2, t.memoizedState = null, e;
}
function xh(e, t, n, r, i, o, s) {
  if (n)
    return t.flags & 256 ? (t.flags &= -257, r = Jo(Error(j(422))), ii(e, t, s, r)) : t.memoizedState !== null ? (t.child = e.child, t.flags |= 128, null) : (o = r.fallback, i = t.mode, r = vo({ mode: "visible", children: r.children }, i, 0, null), o = Wt(o, i, s, null), o.flags |= 2, r.return = t, o.return = t, r.sibling = o, t.child = r, t.mode & 1 && $n(t, e.child, null, s), t.child.memoizedState = Hs(s), t.memoizedState = Bs, o);
  if (!(t.mode & 1)) return ii(e, t, s, null);
  if (i.data === "$!") {
    if (r = i.nextSibling && i.nextSibling.dataset, r) var a = r.dgst;
    return r = a, o = Error(j(419)), r = Jo(o, r, void 0), ii(e, t, s, r);
  }
  if (a = (s & e.childLanes) !== 0, Ce || a) {
    if (r = oe, r !== null) {
      switch (s & -s) {
        case 4:
          i = 2;
          break;
        case 16:
          i = 8;
          break;
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
          i = 32;
          break;
        case 536870912:
          i = 268435456;
          break;
        default:
          i = 0;
      }
      i = i & (r.suspendedLanes | s) ? 0 : i, i !== 0 && i !== o.retryLane && (o.retryLane = i, lt(e, i), Be(r, e, i, -1));
    }
    return Zl(), r = Jo(Error(j(421))), ii(e, t, s, r);
  }
  return i.data === "$?" ? (t.flags |= 128, t.child = e.child, t = $h.bind(null, e), i._reactRetry = t, null) : (e = o.treeContext, je = Nt(i.nextSibling), Pe = t, B = !0, De = null, e !== null && (_e[$e++] = nt, _e[$e++] = rt, _e[$e++] = Zt, nt = e.id, rt = e.overflow, Zt = t), t = Vl(t, r.children), t.flags |= 4096, t);
}
function ou(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), As(e.return, t, n);
}
function Xo(e, t, n, r, i) {
  var o = e.memoizedState;
  o === null ? e.memoizedState = { isBackwards: t, rendering: null, renderingStartTime: 0, last: r, tail: n, tailMode: i } : (o.isBackwards = t, o.rendering = null, o.renderingStartTime = 0, o.last = r, o.tail = n, o.tailMode = i);
}
function Gf(e, t, n) {
  var r = t.pendingProps, i = r.revealOrder, o = r.tail;
  if (ge(e, t, r.children, n), r = H.current, r & 2) r = r & 1 | 2, t.flags |= 128;
  else {
    if (e !== null && e.flags & 128) e: for (e = t.child; e !== null; ) {
      if (e.tag === 13) e.memoizedState !== null && ou(e, n, t);
      else if (e.tag === 19) ou(e, n, t);
      else if (e.child !== null) {
        e.child.return = e, e = e.child;
        continue;
      }
      if (e === t) break e;
      for (; e.sibling === null; ) {
        if (e.return === null || e.return === t) break e;
        e = e.return;
      }
      e.sibling.return = e.return, e = e.sibling;
    }
    r &= 1;
  }
  if (U(H, r), !(t.mode & 1)) t.memoizedState = null;
  else switch (i) {
    case "forwards":
      for (n = t.child, i = null; n !== null; ) e = n.alternate, e !== null && Vi(e) === null && (i = n), n = n.sibling;
      n = i, n === null ? (i = t.child, t.child = null) : (i = n.sibling, n.sibling = null), Xo(t, !1, i, n, o);
      break;
    case "backwards":
      for (n = null, i = t.child, t.child = null; i !== null; ) {
        if (e = i.alternate, e !== null && Vi(e) === null) {
          t.child = i;
          break;
        }
        e = i.sibling, i.sibling = n, n = i, i = e;
      }
      Xo(t, !0, n, null, o);
      break;
    case "together":
      Xo(t, !1, null, null, void 0);
      break;
    default:
      t.memoizedState = null;
  }
  return t.child;
}
function xi(e, t) {
  !(t.mode & 1) && e !== null && (e.alternate = null, t.alternate = null, t.flags |= 2);
}
function at(e, t, n) {
  if (e !== null && (t.dependencies = e.dependencies), Gt |= t.lanes, !(n & t.childLanes)) return null;
  if (e !== null && t.child !== e.child) throw Error(j(153));
  if (t.child !== null) {
    for (e = t.child, n = Rt(e, e.pendingProps), t.child = n, n.return = t; e.sibling !== null; ) e = e.sibling, n = n.sibling = Rt(e, e.pendingProps), n.return = t;
    n.sibling = null;
  }
  return t.child;
}
function Ch(e, t, n) {
  switch (t.tag) {
    case 3:
      Zf(t), _n();
      break;
    case 5:
      Sf(t);
      break;
    case 1:
      Ee(t.type) && Fi(t);
      break;
    case 4:
      Ml(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context, i = t.memoizedProps.value;
      U(bi, r._currentValue), r._currentValue = i;
      break;
    case 13:
      if (r = t.memoizedState, r !== null)
        return r.dehydrated !== null ? (U(H, H.current & 1), t.flags |= 128, null) : n & t.child.childLanes ? Yf(e, t, n) : (U(H, H.current & 1), e = at(e, t, n), e !== null ? e.sibling : null);
      U(H, H.current & 1);
      break;
    case 19:
      if (r = (n & t.childLanes) !== 0, e.flags & 128) {
        if (r) return Gf(e, t, n);
        t.flags |= 128;
      }
      if (i = t.memoizedState, i !== null && (i.rendering = null, i.tail = null, i.lastEffect = null), U(H, H.current), r) break;
      return null;
    case 22:
    case 23:
      return t.lanes = 0, Wf(e, t, n);
  }
  return at(e, t, n);
}
var Jf, Ks, Xf, qf;
Jf = function(e, t) {
  for (var n = t.child; n !== null; ) {
    if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
    else if (n.tag !== 4 && n.child !== null) {
      n.child.return = n, n = n.child;
      continue;
    }
    if (n === t) break;
    for (; n.sibling === null; ) {
      if (n.return === null || n.return === t) return;
      n = n.return;
    }
    n.sibling.return = n.return, n = n.sibling;
  }
};
Ks = function() {
};
Xf = function(e, t, n, r) {
  var i = e.memoizedProps;
  if (i !== r) {
    e = t.stateNode, Ht(Je.current);
    var o = null;
    switch (n) {
      case "input":
        i = ps(e, i), r = ps(e, r), o = [];
        break;
      case "select":
        i = W({}, i, { value: void 0 }), r = W({}, r, { value: void 0 }), o = [];
        break;
      case "textarea":
        i = gs(e, i), r = gs(e, r), o = [];
        break;
      default:
        typeof i.onClick != "function" && typeof r.onClick == "function" && (e.onclick = Mi);
    }
    ys(n, r);
    var s;
    n = null;
    for (u in i) if (!r.hasOwnProperty(u) && i.hasOwnProperty(u) && i[u] != null) if (u === "style") {
      var a = i[u];
      for (s in a) a.hasOwnProperty(s) && (n || (n = {}), n[s] = "");
    } else u !== "dangerouslySetInnerHTML" && u !== "children" && u !== "suppressContentEditableWarning" && u !== "suppressHydrationWarning" && u !== "autoFocus" && (hr.hasOwnProperty(u) ? o || (o = []) : (o = o || []).push(u, null));
    for (u in r) {
      var l = r[u];
      if (a = i != null ? i[u] : void 0, r.hasOwnProperty(u) && l !== a && (l != null || a != null)) if (u === "style") if (a) {
        for (s in a) !a.hasOwnProperty(s) || l && l.hasOwnProperty(s) || (n || (n = {}), n[s] = "");
        for (s in l) l.hasOwnProperty(s) && a[s] !== l[s] && (n || (n = {}), n[s] = l[s]);
      } else n || (o || (o = []), o.push(
        u,
        n
      )), n = l;
      else u === "dangerouslySetInnerHTML" ? (l = l ? l.__html : void 0, a = a ? a.__html : void 0, l != null && a !== l && (o = o || []).push(u, l)) : u === "children" ? typeof l != "string" && typeof l != "number" || (o = o || []).push(u, "" + l) : u !== "suppressContentEditableWarning" && u !== "suppressHydrationWarning" && (hr.hasOwnProperty(u) ? (l != null && u === "onScroll" && D("scroll", e), o || a === l || (o = [])) : (o = o || []).push(u, l));
    }
    n && (o = o || []).push("style", n);
    var u = o;
    (t.updateQueue = u) && (t.flags |= 4);
  }
};
qf = function(e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function Qn(e, t) {
  if (!B) switch (e.tailMode) {
    case "hidden":
      t = e.tail;
      for (var n = null; t !== null; ) t.alternate !== null && (n = t), t = t.sibling;
      n === null ? e.tail = null : n.sibling = null;
      break;
    case "collapsed":
      n = e.tail;
      for (var r = null; n !== null; ) n.alternate !== null && (r = n), n = n.sibling;
      r === null ? t || e.tail === null ? e.tail = null : e.tail.sibling = null : r.sibling = null;
  }
}
function de(e) {
  var t = e.alternate !== null && e.alternate.child === e.child, n = 0, r = 0;
  if (t) for (var i = e.child; i !== null; ) n |= i.lanes | i.childLanes, r |= i.subtreeFlags & 14680064, r |= i.flags & 14680064, i.return = e, i = i.sibling;
  else for (i = e.child; i !== null; ) n |= i.lanes | i.childLanes, r |= i.subtreeFlags, r |= i.flags, i.return = e, i = i.sibling;
  return e.subtreeFlags |= r, e.childLanes = n, t;
}
function Sh(e, t, n) {
  var r = t.pendingProps;
  switch (Ll(t), t.tag) {
    case 2:
    case 16:
    case 15:
    case 0:
    case 11:
    case 7:
    case 8:
    case 12:
    case 9:
    case 14:
      return de(t), null;
    case 1:
      return Ee(t.type) && Ii(), de(t), null;
    case 3:
      return r = t.stateNode, Mn(), V(Se), V(me), Fl(), r.pendingContext && (r.context = r.pendingContext, r.pendingContext = null), (e === null || e.child === null) && (ni(t) ? t.flags |= 4 : e === null || e.memoizedState.isDehydrated && !(t.flags & 256) || (t.flags |= 1024, De !== null && (qs(De), De = null))), Ks(e, t), de(t), null;
    case 5:
      Il(t);
      var i = Ht(jr.current);
      if (n = t.type, e !== null && t.stateNode != null) Xf(e, t, n, r, i), e.ref !== t.ref && (t.flags |= 512, t.flags |= 2097152);
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(j(166));
          return de(t), null;
        }
        if (e = Ht(Je.current), ni(t)) {
          r = t.stateNode, n = t.type;
          var o = t.memoizedProps;
          switch (r[Ze] = t, r[kr] = o, e = (t.mode & 1) !== 0, n) {
            case "dialog":
              D("cancel", r), D("close", r);
              break;
            case "iframe":
            case "object":
            case "embed":
              D("load", r);
              break;
            case "video":
            case "audio":
              for (i = 0; i < nr.length; i++) D(nr[i], r);
              break;
            case "source":
              D("error", r);
              break;
            case "img":
            case "image":
            case "link":
              D(
                "error",
                r
              ), D("load", r);
              break;
            case "details":
              D("toggle", r);
              break;
            case "input":
              ha(r, o), D("invalid", r);
              break;
            case "select":
              r._wrapperState = { wasMultiple: !!o.multiple }, D("invalid", r);
              break;
            case "textarea":
              ga(r, o), D("invalid", r);
          }
          ys(n, o), i = null;
          for (var s in o) if (o.hasOwnProperty(s)) {
            var a = o[s];
            s === "children" ? typeof a == "string" ? r.textContent !== a && (o.suppressHydrationWarning !== !0 && ti(r.textContent, a, e), i = ["children", a]) : typeof a == "number" && r.textContent !== "" + a && (o.suppressHydrationWarning !== !0 && ti(
              r.textContent,
              a,
              e
            ), i = ["children", "" + a]) : hr.hasOwnProperty(s) && a != null && s === "onScroll" && D("scroll", r);
          }
          switch (n) {
            case "input":
              Qr(r), ma(r, o, !0);
              break;
            case "textarea":
              Qr(r), va(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof o.onClick == "function" && (r.onclick = Mi);
          }
          r = i, t.updateQueue = r, r !== null && (t.flags |= 4);
        } else {
          s = i.nodeType === 9 ? i : i.ownerDocument, e === "http://www.w3.org/1999/xhtml" && (e = jc(n)), e === "http://www.w3.org/1999/xhtml" ? n === "script" ? (e = s.createElement("div"), e.innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild)) : typeof r.is == "string" ? e = s.createElement(n, { is: r.is }) : (e = s.createElement(n), n === "select" && (s = e, r.multiple ? s.multiple = !0 : r.size && (s.size = r.size))) : e = s.createElementNS(e, n), e[Ze] = t, e[kr] = r, Jf(e, t, !1, !1), t.stateNode = e;
          e: {
            switch (s = ws(n, r), n) {
              case "dialog":
                D("cancel", e), D("close", e), i = r;
                break;
              case "iframe":
              case "object":
              case "embed":
                D("load", e), i = r;
                break;
              case "video":
              case "audio":
                for (i = 0; i < nr.length; i++) D(nr[i], e);
                i = r;
                break;
              case "source":
                D("error", e), i = r;
                break;
              case "img":
              case "image":
              case "link":
                D(
                  "error",
                  e
                ), D("load", e), i = r;
                break;
              case "details":
                D("toggle", e), i = r;
                break;
              case "input":
                ha(e, r), i = ps(e, r), D("invalid", e);
                break;
              case "option":
                i = r;
                break;
              case "select":
                e._wrapperState = { wasMultiple: !!r.multiple }, i = W({}, r, { value: void 0 }), D("invalid", e);
                break;
              case "textarea":
                ga(e, r), i = gs(e, r), D("invalid", e);
                break;
              default:
                i = r;
            }
            ys(n, i), a = i;
            for (o in a) if (a.hasOwnProperty(o)) {
              var l = a[o];
              o === "style" ? Rc(e, l) : o === "dangerouslySetInnerHTML" ? (l = l ? l.__html : void 0, l != null && Lc(e, l)) : o === "children" ? typeof l == "string" ? (n !== "textarea" || l !== "") && mr(e, l) : typeof l == "number" && mr(e, "" + l) : o !== "suppressContentEditableWarning" && o !== "suppressHydrationWarning" && o !== "autoFocus" && (hr.hasOwnProperty(o) ? l != null && o === "onScroll" && D("scroll", e) : l != null && dl(e, o, l, s));
            }
            switch (n) {
              case "input":
                Qr(e), ma(e, r, !1);
                break;
              case "textarea":
                Qr(e), va(e);
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + Tt(r.value));
                break;
              case "select":
                e.multiple = !!r.multiple, o = r.value, o != null ? kn(e, !!r.multiple, o, !1) : r.defaultValue != null && kn(
                  e,
                  !!r.multiple,
                  r.defaultValue,
                  !0
                );
                break;
              default:
                typeof i.onClick == "function" && (e.onclick = Mi);
            }
            switch (n) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                r = !!r.autoFocus;
                break e;
              case "img":
                r = !0;
                break e;
              default:
                r = !1;
            }
          }
          r && (t.flags |= 4);
        }
        t.ref !== null && (t.flags |= 512, t.flags |= 2097152);
      }
      return de(t), null;
    case 6:
      if (e && t.stateNode != null) qf(e, t, e.memoizedProps, r);
      else {
        if (typeof r != "string" && t.stateNode === null) throw Error(j(166));
        if (n = Ht(jr.current), Ht(Je.current), ni(t)) {
          if (r = t.stateNode, n = t.memoizedProps, r[Ze] = t, (o = r.nodeValue !== n) && (e = Pe, e !== null)) switch (e.tag) {
            case 3:
              ti(r.nodeValue, n, (e.mode & 1) !== 0);
              break;
            case 5:
              e.memoizedProps.suppressHydrationWarning !== !0 && ti(r.nodeValue, n, (e.mode & 1) !== 0);
          }
          o && (t.flags |= 4);
        } else r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r), r[Ze] = t, t.stateNode = r;
      }
      return de(t), null;
    case 13:
      if (V(H), r = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
        if (B && je !== null && t.mode & 1 && !(t.flags & 128)) vf(), _n(), t.flags |= 98560, o = !1;
        else if (o = ni(t), r !== null && r.dehydrated !== null) {
          if (e === null) {
            if (!o) throw Error(j(318));
            if (o = t.memoizedState, o = o !== null ? o.dehydrated : null, !o) throw Error(j(317));
            o[Ze] = t;
          } else _n(), !(t.flags & 128) && (t.memoizedState = null), t.flags |= 4;
          de(t), o = !1;
        } else De !== null && (qs(De), De = null), o = !0;
        if (!o) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128 ? (t.lanes = n, t) : (r = r !== null, r !== (e !== null && e.memoizedState !== null) && r && (t.child.flags |= 8192, t.mode & 1 && (e === null || H.current & 1 ? ee === 0 && (ee = 3) : Zl())), t.updateQueue !== null && (t.flags |= 4), de(t), null);
    case 4:
      return Mn(), Ks(e, t), e === null && Sr(t.stateNode.containerInfo), de(t), null;
    case 10:
      return Tl(t.type._context), de(t), null;
    case 17:
      return Ee(t.type) && Ii(), de(t), null;
    case 19:
      if (V(H), o = t.memoizedState, o === null) return de(t), null;
      if (r = (t.flags & 128) !== 0, s = o.rendering, s === null) if (r) Qn(o, !1);
      else {
        if (ee !== 0 || e !== null && e.flags & 128) for (e = t.child; e !== null; ) {
          if (s = Vi(e), s !== null) {
            for (t.flags |= 128, Qn(o, !1), r = s.updateQueue, r !== null && (t.updateQueue = r, t.flags |= 4), t.subtreeFlags = 0, r = n, n = t.child; n !== null; ) o = n, e = r, o.flags &= 14680066, s = o.alternate, s === null ? (o.childLanes = 0, o.lanes = e, o.child = null, o.subtreeFlags = 0, o.memoizedProps = null, o.memoizedState = null, o.updateQueue = null, o.dependencies = null, o.stateNode = null) : (o.childLanes = s.childLanes, o.lanes = s.lanes, o.child = s.child, o.subtreeFlags = 0, o.deletions = null, o.memoizedProps = s.memoizedProps, o.memoizedState = s.memoizedState, o.updateQueue = s.updateQueue, o.type = s.type, e = s.dependencies, o.dependencies = e === null ? null : { lanes: e.lanes, firstContext: e.firstContext }), n = n.sibling;
            return U(H, H.current & 1 | 2), t.child;
          }
          e = e.sibling;
        }
        o.tail !== null && G() > Fn && (t.flags |= 128, r = !0, Qn(o, !1), t.lanes = 4194304);
      }
      else {
        if (!r) if (e = Vi(s), e !== null) {
          if (t.flags |= 128, r = !0, n = e.updateQueue, n !== null && (t.updateQueue = n, t.flags |= 4), Qn(o, !0), o.tail === null && o.tailMode === "hidden" && !s.alternate && !B) return de(t), null;
        } else 2 * G() - o.renderingStartTime > Fn && n !== 1073741824 && (t.flags |= 128, r = !0, Qn(o, !1), t.lanes = 4194304);
        o.isBackwards ? (s.sibling = t.child, t.child = s) : (n = o.last, n !== null ? n.sibling = s : t.child = s, o.last = s);
      }
      return o.tail !== null ? (t = o.tail, o.rendering = t, o.tail = t.sibling, o.renderingStartTime = G(), t.sibling = null, n = H.current, U(H, r ? n & 1 | 2 : n & 1), t) : (de(t), null);
    case 22:
    case 23:
      return Ql(), r = t.memoizedState !== null, e !== null && e.memoizedState !== null !== r && (t.flags |= 8192), r && t.mode & 1 ? Ne & 1073741824 && (de(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : de(t), null;
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(j(156, t.tag));
}
function Eh(e, t) {
  switch (Ll(t), t.tag) {
    case 1:
      return Ee(t.type) && Ii(), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
    case 3:
      return Mn(), V(Se), V(me), Fl(), e = t.flags, e & 65536 && !(e & 128) ? (t.flags = e & -65537 | 128, t) : null;
    case 5:
      return Il(t), null;
    case 13:
      if (V(H), e = t.memoizedState, e !== null && e.dehydrated !== null) {
        if (t.alternate === null) throw Error(j(340));
        _n();
      }
      return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
    case 19:
      return V(H), null;
    case 4:
      return Mn(), null;
    case 10:
      return Tl(t.type._context), null;
    case 22:
    case 23:
      return Ql(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var oi = !1, pe = !1, kh = typeof WeakSet == "function" ? WeakSet : Set, O = null;
function xn(e, t) {
  var n = e.ref;
  if (n !== null) if (typeof n == "function") try {
    n(null);
  } catch (r) {
    Q(e, t, r);
  }
  else n.current = null;
}
function Ws(e, t, n) {
  try {
    n();
  } catch (r) {
    Q(e, t, r);
  }
}
var su = !1;
function Nh(e, t) {
  if (Rs = Ti, e = rf(), Nl(e)) {
    if ("selectionStart" in e) var n = { start: e.selectionStart, end: e.selectionEnd };
    else e: {
      n = (n = e.ownerDocument) && n.defaultView || window;
      var r = n.getSelection && n.getSelection();
      if (r && r.rangeCount !== 0) {
        n = r.anchorNode;
        var i = r.anchorOffset, o = r.focusNode;
        r = r.focusOffset;
        try {
          n.nodeType, o.nodeType;
        } catch {
          n = null;
          break e;
        }
        var s = 0, a = -1, l = -1, u = 0, c = 0, f = e, d = null;
        t: for (; ; ) {
          for (var h; f !== n || i !== 0 && f.nodeType !== 3 || (a = s + i), f !== o || r !== 0 && f.nodeType !== 3 || (l = s + r), f.nodeType === 3 && (s += f.nodeValue.length), (h = f.firstChild) !== null; )
            d = f, f = h;
          for (; ; ) {
            if (f === e) break t;
            if (d === n && ++u === i && (a = s), d === o && ++c === r && (l = s), (h = f.nextSibling) !== null) break;
            f = d, d = f.parentNode;
          }
          f = h;
        }
        n = a === -1 || l === -1 ? null : { start: a, end: l };
      } else n = null;
    }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (Os = { focusedElem: e, selectionRange: n }, Ti = !1, O = t; O !== null; ) if (t = O, e = t.child, (t.subtreeFlags & 1028) !== 0 && e !== null) e.return = t, O = e;
  else for (; O !== null; ) {
    t = O;
    try {
      var v = t.alternate;
      if (t.flags & 1024) switch (t.tag) {
        case 0:
        case 11:
        case 15:
          break;
        case 1:
          if (v !== null) {
            var x = v.memoizedProps, C = v.memoizedState, g = t.stateNode, m = g.getSnapshotBeforeUpdate(t.elementType === t.type ? x : be(t.type, x), C);
            g.__reactInternalSnapshotBeforeUpdate = m;
          }
          break;
        case 3:
          var w = t.stateNode.containerInfo;
          w.nodeType === 1 ? w.textContent = "" : w.nodeType === 9 && w.documentElement && w.removeChild(w.documentElement);
          break;
        case 5:
        case 6:
        case 4:
        case 17:
          break;
        default:
          throw Error(j(163));
      }
    } catch (y) {
      Q(t, t.return, y);
    }
    if (e = t.sibling, e !== null) {
      e.return = t.return, O = e;
      break;
    }
    O = t.return;
  }
  return v = su, su = !1, v;
}
function ur(e, t, n) {
  var r = t.updateQueue;
  if (r = r !== null ? r.lastEffect : null, r !== null) {
    var i = r = r.next;
    do {
      if ((i.tag & e) === e) {
        var o = i.destroy;
        i.destroy = void 0, o !== void 0 && Ws(t, n, o);
      }
      i = i.next;
    } while (i !== r);
  }
}
function mo(e, t) {
  if (t = t.updateQueue, t = t !== null ? t.lastEffect : null, t !== null) {
    var n = t = t.next;
    do {
      if ((n.tag & e) === e) {
        var r = n.create;
        n.destroy = r();
      }
      n = n.next;
    } while (n !== t);
  }
}
function Qs(e) {
  var t = e.ref;
  if (t !== null) {
    var n = e.stateNode;
    switch (e.tag) {
      case 5:
        e = n;
        break;
      default:
        e = n;
    }
    typeof t == "function" ? t(e) : t.current = e;
  }
}
function ed(e) {
  var t = e.alternate;
  t !== null && (e.alternate = null, ed(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && (delete t[Ze], delete t[kr], delete t[$s], delete t[lh], delete t[ah])), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
}
function td(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function lu(e) {
  e: for (; ; ) {
    for (; e.sibling === null; ) {
      if (e.return === null || td(e.return)) return null;
      e = e.return;
    }
    for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
      if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
      e.child.return = e, e = e.child;
    }
    if (!(e.flags & 2)) return e.stateNode;
  }
}
function Zs(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6) e = e.stateNode, t ? n.nodeType === 8 ? n.parentNode.insertBefore(e, t) : n.insertBefore(e, t) : (n.nodeType === 8 ? (t = n.parentNode, t.insertBefore(e, n)) : (t = n, t.appendChild(e)), n = n._reactRootContainer, n != null || t.onclick !== null || (t.onclick = Mi));
  else if (r !== 4 && (e = e.child, e !== null)) for (Zs(e, t, n), e = e.sibling; e !== null; ) Zs(e, t, n), e = e.sibling;
}
function Ys(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6) e = e.stateNode, t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && (e = e.child, e !== null)) for (Ys(e, t, n), e = e.sibling; e !== null; ) Ys(e, t, n), e = e.sibling;
}
var le = null, Ue = !1;
function dt(e, t, n) {
  for (n = n.child; n !== null; ) nd(e, t, n), n = n.sibling;
}
function nd(e, t, n) {
  if (Ge && typeof Ge.onCommitFiberUnmount == "function") try {
    Ge.onCommitFiberUnmount(so, n);
  } catch {
  }
  switch (n.tag) {
    case 5:
      pe || xn(n, t);
    case 6:
      var r = le, i = Ue;
      le = null, dt(e, t, n), le = r, Ue = i, le !== null && (Ue ? (e = le, n = n.stateNode, e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n)) : le.removeChild(n.stateNode));
      break;
    case 18:
      le !== null && (Ue ? (e = le, n = n.stateNode, e.nodeType === 8 ? Ko(e.parentNode, n) : e.nodeType === 1 && Ko(e, n), wr(e)) : Ko(le, n.stateNode));
      break;
    case 4:
      r = le, i = Ue, le = n.stateNode.containerInfo, Ue = !0, dt(e, t, n), le = r, Ue = i;
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (!pe && (r = n.updateQueue, r !== null && (r = r.lastEffect, r !== null))) {
        i = r = r.next;
        do {
          var o = i, s = o.destroy;
          o = o.tag, s !== void 0 && (o & 2 || o & 4) && Ws(n, t, s), i = i.next;
        } while (i !== r);
      }
      dt(e, t, n);
      break;
    case 1:
      if (!pe && (xn(n, t), r = n.stateNode, typeof r.componentWillUnmount == "function")) try {
        r.props = n.memoizedProps, r.state = n.memoizedState, r.componentWillUnmount();
      } catch (a) {
        Q(n, t, a);
      }
      dt(e, t, n);
      break;
    case 21:
      dt(e, t, n);
      break;
    case 22:
      n.mode & 1 ? (pe = (r = pe) || n.memoizedState !== null, dt(e, t, n), pe = r) : dt(e, t, n);
      break;
    default:
      dt(e, t, n);
  }
}
function au(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new kh()), t.forEach(function(r) {
      var i = Mh.bind(null, e, r);
      n.has(r) || (n.add(r), r.then(i, i));
    });
  }
}
function ze(e, t) {
  var n = t.deletions;
  if (n !== null) for (var r = 0; r < n.length; r++) {
    var i = n[r];
    try {
      var o = e, s = t, a = s;
      e: for (; a !== null; ) {
        switch (a.tag) {
          case 5:
            le = a.stateNode, Ue = !1;
            break e;
          case 3:
            le = a.stateNode.containerInfo, Ue = !0;
            break e;
          case 4:
            le = a.stateNode.containerInfo, Ue = !0;
            break e;
        }
        a = a.return;
      }
      if (le === null) throw Error(j(160));
      nd(o, s, i), le = null, Ue = !1;
      var l = i.alternate;
      l !== null && (l.return = null), i.return = null;
    } catch (u) {
      Q(i, t, u);
    }
  }
  if (t.subtreeFlags & 12854) for (t = t.child; t !== null; ) rd(t, e), t = t.sibling;
}
function rd(e, t) {
  var n = e.alternate, r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if (ze(t, e), We(e), r & 4) {
        try {
          ur(3, e, e.return), mo(3, e);
        } catch (x) {
          Q(e, e.return, x);
        }
        try {
          ur(5, e, e.return);
        } catch (x) {
          Q(e, e.return, x);
        }
      }
      break;
    case 1:
      ze(t, e), We(e), r & 512 && n !== null && xn(n, n.return);
      break;
    case 5:
      if (ze(t, e), We(e), r & 512 && n !== null && xn(n, n.return), e.flags & 32) {
        var i = e.stateNode;
        try {
          mr(i, "");
        } catch (x) {
          Q(e, e.return, x);
        }
      }
      if (r & 4 && (i = e.stateNode, i != null)) {
        var o = e.memoizedProps, s = n !== null ? n.memoizedProps : o, a = e.type, l = e.updateQueue;
        if (e.updateQueue = null, l !== null) try {
          a === "input" && o.type === "radio" && o.name != null && kc(i, o), ws(a, s);
          var u = ws(a, o);
          for (s = 0; s < l.length; s += 2) {
            var c = l[s], f = l[s + 1];
            c === "style" ? Rc(i, f) : c === "dangerouslySetInnerHTML" ? Lc(i, f) : c === "children" ? mr(i, f) : dl(i, c, f, u);
          }
          switch (a) {
            case "input":
              hs(i, o);
              break;
            case "textarea":
              Nc(i, o);
              break;
            case "select":
              var d = i._wrapperState.wasMultiple;
              i._wrapperState.wasMultiple = !!o.multiple;
              var h = o.value;
              h != null ? kn(i, !!o.multiple, h, !1) : d !== !!o.multiple && (o.defaultValue != null ? kn(
                i,
                !!o.multiple,
                o.defaultValue,
                !0
              ) : kn(i, !!o.multiple, o.multiple ? [] : "", !1));
          }
          i[kr] = o;
        } catch (x) {
          Q(e, e.return, x);
        }
      }
      break;
    case 6:
      if (ze(t, e), We(e), r & 4) {
        if (e.stateNode === null) throw Error(j(162));
        i = e.stateNode, o = e.memoizedProps;
        try {
          i.nodeValue = o;
        } catch (x) {
          Q(e, e.return, x);
        }
      }
      break;
    case 3:
      if (ze(t, e), We(e), r & 4 && n !== null && n.memoizedState.isDehydrated) try {
        wr(t.containerInfo);
      } catch (x) {
        Q(e, e.return, x);
      }
      break;
    case 4:
      ze(t, e), We(e);
      break;
    case 13:
      ze(t, e), We(e), i = e.child, i.flags & 8192 && (o = i.memoizedState !== null, i.stateNode.isHidden = o, !o || i.alternate !== null && i.alternate.memoizedState !== null || (Kl = G())), r & 4 && au(e);
      break;
    case 22:
      if (c = n !== null && n.memoizedState !== null, e.mode & 1 ? (pe = (u = pe) || c, ze(t, e), pe = u) : ze(t, e), We(e), r & 8192) {
        if (u = e.memoizedState !== null, (e.stateNode.isHidden = u) && !c && e.mode & 1) for (O = e, c = e.child; c !== null; ) {
          for (f = O = c; O !== null; ) {
            switch (d = O, h = d.child, d.tag) {
              case 0:
              case 11:
              case 14:
              case 15:
                ur(4, d, d.return);
                break;
              case 1:
                xn(d, d.return);
                var v = d.stateNode;
                if (typeof v.componentWillUnmount == "function") {
                  r = d, n = d.return;
                  try {
                    t = r, v.props = t.memoizedProps, v.state = t.memoizedState, v.componentWillUnmount();
                  } catch (x) {
                    Q(r, n, x);
                  }
                }
                break;
              case 5:
                xn(d, d.return);
                break;
              case 22:
                if (d.memoizedState !== null) {
                  cu(f);
                  continue;
                }
            }
            h !== null ? (h.return = d, O = h) : cu(f);
          }
          c = c.sibling;
        }
        e: for (c = null, f = e; ; ) {
          if (f.tag === 5) {
            if (c === null) {
              c = f;
              try {
                i = f.stateNode, u ? (o = i.style, typeof o.setProperty == "function" ? o.setProperty("display", "none", "important") : o.display = "none") : (a = f.stateNode, l = f.memoizedProps.style, s = l != null && l.hasOwnProperty("display") ? l.display : null, a.style.display = Pc("display", s));
              } catch (x) {
                Q(e, e.return, x);
              }
            }
          } else if (f.tag === 6) {
            if (c === null) try {
              f.stateNode.nodeValue = u ? "" : f.memoizedProps;
            } catch (x) {
              Q(e, e.return, x);
            }
          } else if ((f.tag !== 22 && f.tag !== 23 || f.memoizedState === null || f === e) && f.child !== null) {
            f.child.return = f, f = f.child;
            continue;
          }
          if (f === e) break e;
          for (; f.sibling === null; ) {
            if (f.return === null || f.return === e) break e;
            c === f && (c = null), f = f.return;
          }
          c === f && (c = null), f.sibling.return = f.return, f = f.sibling;
        }
      }
      break;
    case 19:
      ze(t, e), We(e), r & 4 && au(e);
      break;
    case 21:
      break;
    default:
      ze(
        t,
        e
      ), We(e);
  }
}
function We(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (td(n)) {
            var r = n;
            break e;
          }
          n = n.return;
        }
        throw Error(j(160));
      }
      switch (r.tag) {
        case 5:
          var i = r.stateNode;
          r.flags & 32 && (mr(i, ""), r.flags &= -33);
          var o = lu(e);
          Ys(e, o, i);
          break;
        case 3:
        case 4:
          var s = r.stateNode.containerInfo, a = lu(e);
          Zs(e, a, s);
          break;
        default:
          throw Error(j(161));
      }
    } catch (l) {
      Q(e, e.return, l);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function jh(e, t, n) {
  O = e, id(e);
}
function id(e, t, n) {
  for (var r = (e.mode & 1) !== 0; O !== null; ) {
    var i = O, o = i.child;
    if (i.tag === 22 && r) {
      var s = i.memoizedState !== null || oi;
      if (!s) {
        var a = i.alternate, l = a !== null && a.memoizedState !== null || pe;
        a = oi;
        var u = pe;
        if (oi = s, (pe = l) && !u) for (O = i; O !== null; ) s = O, l = s.child, s.tag === 22 && s.memoizedState !== null ? fu(i) : l !== null ? (l.return = s, O = l) : fu(i);
        for (; o !== null; ) O = o, id(o), o = o.sibling;
        O = i, oi = a, pe = u;
      }
      uu(e);
    } else i.subtreeFlags & 8772 && o !== null ? (o.return = i, O = o) : uu(e);
  }
}
function uu(e) {
  for (; O !== null; ) {
    var t = O;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772) switch (t.tag) {
          case 0:
          case 11:
          case 15:
            pe || mo(5, t);
            break;
          case 1:
            var r = t.stateNode;
            if (t.flags & 4 && !pe) if (n === null) r.componentDidMount();
            else {
              var i = t.elementType === t.type ? n.memoizedProps : be(t.type, n.memoizedProps);
              r.componentDidUpdate(i, n.memoizedState, r.__reactInternalSnapshotBeforeUpdate);
            }
            var o = t.updateQueue;
            o !== null && Qa(t, o, r);
            break;
          case 3:
            var s = t.updateQueue;
            if (s !== null) {
              if (n = null, t.child !== null) switch (t.child.tag) {
                case 5:
                  n = t.child.stateNode;
                  break;
                case 1:
                  n = t.child.stateNode;
              }
              Qa(t, s, n);
            }
            break;
          case 5:
            var a = t.stateNode;
            if (n === null && t.flags & 4) {
              n = a;
              var l = t.memoizedProps;
              switch (t.type) {
                case "button":
                case "input":
                case "select":
                case "textarea":
                  l.autoFocus && n.focus();
                  break;
                case "img":
                  l.src && (n.src = l.src);
              }
            }
            break;
          case 6:
            break;
          case 4:
            break;
          case 12:
            break;
          case 13:
            if (t.memoizedState === null) {
              var u = t.alternate;
              if (u !== null) {
                var c = u.memoizedState;
                if (c !== null) {
                  var f = c.dehydrated;
                  f !== null && wr(f);
                }
              }
            }
            break;
          case 19:
          case 17:
          case 21:
          case 22:
          case 23:
          case 25:
            break;
          default:
            throw Error(j(163));
        }
        pe || t.flags & 512 && Qs(t);
      } catch (d) {
        Q(t, t.return, d);
      }
    }
    if (t === e) {
      O = null;
      break;
    }
    if (n = t.sibling, n !== null) {
      n.return = t.return, O = n;
      break;
    }
    O = t.return;
  }
}
function cu(e) {
  for (; O !== null; ) {
    var t = O;
    if (t === e) {
      O = null;
      break;
    }
    var n = t.sibling;
    if (n !== null) {
      n.return = t.return, O = n;
      break;
    }
    O = t.return;
  }
}
function fu(e) {
  for (; O !== null; ) {
    var t = O;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            mo(4, t);
          } catch (l) {
            Q(t, n, l);
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == "function") {
            var i = t.return;
            try {
              r.componentDidMount();
            } catch (l) {
              Q(t, i, l);
            }
          }
          var o = t.return;
          try {
            Qs(t);
          } catch (l) {
            Q(t, o, l);
          }
          break;
        case 5:
          var s = t.return;
          try {
            Qs(t);
          } catch (l) {
            Q(t, s, l);
          }
      }
    } catch (l) {
      Q(t, t.return, l);
    }
    if (t === e) {
      O = null;
      break;
    }
    var a = t.sibling;
    if (a !== null) {
      a.return = t.return, O = a;
      break;
    }
    O = t.return;
  }
}
var Lh = Math.ceil, Ki = ut.ReactCurrentDispatcher, Bl = ut.ReactCurrentOwner, Ie = ut.ReactCurrentBatchConfig, I = 0, oe = null, J = null, ae = 0, Ne = 0, Cn = It(0), ee = 0, Or = null, Gt = 0, go = 0, Hl = 0, cr = null, xe = null, Kl = 0, Fn = 1 / 0, Xe = null, Wi = !1, Gs = null, Lt = null, si = !1, xt = null, Qi = 0, fr = 0, Js = null, Ci = -1, Si = 0;
function ve() {
  return I & 6 ? G() : Ci !== -1 ? Ci : Ci = G();
}
function Pt(e) {
  return e.mode & 1 ? I & 2 && ae !== 0 ? ae & -ae : ch.transition !== null ? (Si === 0 && (Si = Dc()), Si) : (e = A, e !== 0 || (e = window.event, e = e === void 0 ? 16 : Zc(e.type)), e) : 1;
}
function Be(e, t, n, r) {
  if (50 < fr) throw fr = 0, Js = null, Error(j(185));
  zr(e, n, r), (!(I & 2) || e !== oe) && (e === oe && (!(I & 2) && (go |= n), ee === 4 && yt(e, ae)), ke(e, r), n === 1 && I === 0 && !(t.mode & 1) && (Fn = G() + 500, fo && Ft()));
}
function ke(e, t) {
  var n = e.callbackNode;
  cp(e, t);
  var r = Oi(e, e === oe ? ae : 0);
  if (r === 0) n !== null && xa(n), e.callbackNode = null, e.callbackPriority = 0;
  else if (t = r & -r, e.callbackPriority !== t) {
    if (n != null && xa(n), t === 1) e.tag === 0 ? uh(du.bind(null, e)) : hf(du.bind(null, e)), oh(function() {
      !(I & 6) && Ft();
    }), n = null;
    else {
      switch (Vc(r)) {
        case 1:
          n = vl;
          break;
        case 4:
          n = bc;
          break;
        case 16:
          n = Ri;
          break;
        case 536870912:
          n = Uc;
          break;
        default:
          n = Ri;
      }
      n = dd(n, od.bind(null, e));
    }
    e.callbackPriority = t, e.callbackNode = n;
  }
}
function od(e, t) {
  if (Ci = -1, Si = 0, I & 6) throw Error(j(327));
  var n = e.callbackNode;
  if (Rn() && e.callbackNode !== n) return null;
  var r = Oi(e, e === oe ? ae : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || t) t = Zi(e, r);
  else {
    t = r;
    var i = I;
    I |= 2;
    var o = ld();
    (oe !== e || ae !== t) && (Xe = null, Fn = G() + 500, Kt(e, t));
    do
      try {
        Oh();
        break;
      } catch (a) {
        sd(e, a);
      }
    while (!0);
    Ol(), Ki.current = o, I = i, J !== null ? t = 0 : (oe = null, ae = 0, t = ee);
  }
  if (t !== 0) {
    if (t === 2 && (i = ks(e), i !== 0 && (r = i, t = Xs(e, i))), t === 1) throw n = Or, Kt(e, 0), yt(e, r), ke(e, G()), n;
    if (t === 6) yt(e, r);
    else {
      if (i = e.current.alternate, !(r & 30) && !Ph(i) && (t = Zi(e, r), t === 2 && (o = ks(e), o !== 0 && (r = o, t = Xs(e, o))), t === 1)) throw n = Or, Kt(e, 0), yt(e, r), ke(e, G()), n;
      switch (e.finishedWork = i, e.finishedLanes = r, t) {
        case 0:
        case 1:
          throw Error(j(345));
        case 2:
          Dt(e, xe, Xe);
          break;
        case 3:
          if (yt(e, r), (r & 130023424) === r && (t = Kl + 500 - G(), 10 < t)) {
            if (Oi(e, 0) !== 0) break;
            if (i = e.suspendedLanes, (i & r) !== r) {
              ve(), e.pingedLanes |= e.suspendedLanes & i;
              break;
            }
            e.timeoutHandle = _s(Dt.bind(null, e, xe, Xe), t);
            break;
          }
          Dt(e, xe, Xe);
          break;
        case 4:
          if (yt(e, r), (r & 4194240) === r) break;
          for (t = e.eventTimes, i = -1; 0 < r; ) {
            var s = 31 - Ve(r);
            o = 1 << s, s = t[s], s > i && (i = s), r &= ~o;
          }
          if (r = i, r = G() - r, r = (120 > r ? 120 : 480 > r ? 480 : 1080 > r ? 1080 : 1920 > r ? 1920 : 3e3 > r ? 3e3 : 4320 > r ? 4320 : 1960 * Lh(r / 1960)) - r, 10 < r) {
            e.timeoutHandle = _s(Dt.bind(null, e, xe, Xe), r);
            break;
          }
          Dt(e, xe, Xe);
          break;
        case 5:
          Dt(e, xe, Xe);
          break;
        default:
          throw Error(j(329));
      }
    }
  }
  return ke(e, G()), e.callbackNode === n ? od.bind(null, e) : null;
}
function Xs(e, t) {
  var n = cr;
  return e.current.memoizedState.isDehydrated && (Kt(e, t).flags |= 256), e = Zi(e, t), e !== 2 && (t = xe, xe = n, t !== null && qs(t)), e;
}
function qs(e) {
  xe === null ? xe = e : xe.push.apply(xe, e);
}
function Ph(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && (n = n.stores, n !== null)) for (var r = 0; r < n.length; r++) {
        var i = n[r], o = i.getSnapshot;
        i = i.value;
        try {
          if (!He(o(), i)) return !1;
        } catch {
          return !1;
        }
      }
    }
    if (n = t.child, t.subtreeFlags & 16384 && n !== null) n.return = t, t = n;
    else {
      if (t === e) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return !0;
        t = t.return;
      }
      t.sibling.return = t.return, t = t.sibling;
    }
  }
  return !0;
}
function yt(e, t) {
  for (t &= ~Hl, t &= ~go, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes; 0 < t; ) {
    var n = 31 - Ve(t), r = 1 << n;
    e[n] = -1, t &= ~r;
  }
}
function du(e) {
  if (I & 6) throw Error(j(327));
  Rn();
  var t = Oi(e, 0);
  if (!(t & 1)) return ke(e, G()), null;
  var n = Zi(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = ks(e);
    r !== 0 && (t = r, n = Xs(e, r));
  }
  if (n === 1) throw n = Or, Kt(e, 0), yt(e, t), ke(e, G()), n;
  if (n === 6) throw Error(j(345));
  return e.finishedWork = e.current.alternate, e.finishedLanes = t, Dt(e, xe, Xe), ke(e, G()), null;
}
function Wl(e, t) {
  var n = I;
  I |= 1;
  try {
    return e(t);
  } finally {
    I = n, I === 0 && (Fn = G() + 500, fo && Ft());
  }
}
function Jt(e) {
  xt !== null && xt.tag === 0 && !(I & 6) && Rn();
  var t = I;
  I |= 1;
  var n = Ie.transition, r = A;
  try {
    if (Ie.transition = null, A = 1, e) return e();
  } finally {
    A = r, Ie.transition = n, I = t, !(I & 6) && Ft();
  }
}
function Ql() {
  Ne = Cn.current, V(Cn);
}
function Kt(e, t) {
  e.finishedWork = null, e.finishedLanes = 0;
  var n = e.timeoutHandle;
  if (n !== -1 && (e.timeoutHandle = -1, ih(n)), J !== null) for (n = J.return; n !== null; ) {
    var r = n;
    switch (Ll(r), r.tag) {
      case 1:
        r = r.type.childContextTypes, r != null && Ii();
        break;
      case 3:
        Mn(), V(Se), V(me), Fl();
        break;
      case 5:
        Il(r);
        break;
      case 4:
        Mn();
        break;
      case 13:
        V(H);
        break;
      case 19:
        V(H);
        break;
      case 10:
        Tl(r.type._context);
        break;
      case 22:
      case 23:
        Ql();
    }
    n = n.return;
  }
  if (oe = e, J = e = Rt(e.current, null), ae = Ne = t, ee = 0, Or = null, Hl = go = Gt = 0, xe = cr = null, Bt !== null) {
    for (t = 0; t < Bt.length; t++) if (n = Bt[t], r = n.interleaved, r !== null) {
      n.interleaved = null;
      var i = r.next, o = n.pending;
      if (o !== null) {
        var s = o.next;
        o.next = i, r.next = s;
      }
      n.pending = r;
    }
    Bt = null;
  }
  return e;
}
function sd(e, t) {
  do {
    var n = J;
    try {
      if (Ol(), yi.current = Hi, Bi) {
        for (var r = K.memoizedState; r !== null; ) {
          var i = r.queue;
          i !== null && (i.pending = null), r = r.next;
        }
        Bi = !1;
      }
      if (Yt = 0, re = q = K = null, ar = !1, Lr = 0, Bl.current = null, n === null || n.return === null) {
        ee = 1, Or = t, J = null;
        break;
      }
      e: {
        var o = e, s = n.return, a = n, l = t;
        if (t = ae, a.flags |= 32768, l !== null && typeof l == "object" && typeof l.then == "function") {
          var u = l, c = a, f = c.tag;
          if (!(c.mode & 1) && (f === 0 || f === 11 || f === 15)) {
            var d = c.alternate;
            d ? (c.updateQueue = d.updateQueue, c.memoizedState = d.memoizedState, c.lanes = d.lanes) : (c.updateQueue = null, c.memoizedState = null);
          }
          var h = qa(s);
          if (h !== null) {
            h.flags &= -257, eu(h, s, a, o, t), h.mode & 1 && Xa(o, u, t), t = h, l = u;
            var v = t.updateQueue;
            if (v === null) {
              var x = /* @__PURE__ */ new Set();
              x.add(l), t.updateQueue = x;
            } else v.add(l);
            break e;
          } else {
            if (!(t & 1)) {
              Xa(o, u, t), Zl();
              break e;
            }
            l = Error(j(426));
          }
        } else if (B && a.mode & 1) {
          var C = qa(s);
          if (C !== null) {
            !(C.flags & 65536) && (C.flags |= 256), eu(C, s, a, o, t), Pl(In(l, a));
            break e;
          }
        }
        o = l = In(l, a), ee !== 4 && (ee = 2), cr === null ? cr = [o] : cr.push(o), o = s;
        do {
          switch (o.tag) {
            case 3:
              o.flags |= 65536, t &= -t, o.lanes |= t;
              var g = Bf(o, l, t);
              Wa(o, g);
              break e;
            case 1:
              a = l;
              var m = o.type, w = o.stateNode;
              if (!(o.flags & 128) && (typeof m.getDerivedStateFromError == "function" || w !== null && typeof w.componentDidCatch == "function" && (Lt === null || !Lt.has(w)))) {
                o.flags |= 65536, t &= -t, o.lanes |= t;
                var y = Hf(o, a, t);
                Wa(o, y);
                break e;
              }
          }
          o = o.return;
        } while (o !== null);
      }
      ud(n);
    } catch (S) {
      t = S, J === n && n !== null && (J = n = n.return);
      continue;
    }
    break;
  } while (!0);
}
function ld() {
  var e = Ki.current;
  return Ki.current = Hi, e === null ? Hi : e;
}
function Zl() {
  (ee === 0 || ee === 3 || ee === 2) && (ee = 4), oe === null || !(Gt & 268435455) && !(go & 268435455) || yt(oe, ae);
}
function Zi(e, t) {
  var n = I;
  I |= 2;
  var r = ld();
  (oe !== e || ae !== t) && (Xe = null, Kt(e, t));
  do
    try {
      Rh();
      break;
    } catch (i) {
      sd(e, i);
    }
  while (!0);
  if (Ol(), I = n, Ki.current = r, J !== null) throw Error(j(261));
  return oe = null, ae = 0, ee;
}
function Rh() {
  for (; J !== null; ) ad(J);
}
function Oh() {
  for (; J !== null && !tp(); ) ad(J);
}
function ad(e) {
  var t = fd(e.alternate, e, Ne);
  e.memoizedProps = e.pendingProps, t === null ? ud(e) : J = t, Bl.current = null;
}
function ud(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (e = t.return, t.flags & 32768) {
      if (n = Eh(n, t), n !== null) {
        n.flags &= 32767, J = n;
        return;
      }
      if (e !== null) e.flags |= 32768, e.subtreeFlags = 0, e.deletions = null;
      else {
        ee = 6, J = null;
        return;
      }
    } else if (n = Sh(n, t, Ne), n !== null) {
      J = n;
      return;
    }
    if (t = t.sibling, t !== null) {
      J = t;
      return;
    }
    J = t = e;
  } while (t !== null);
  ee === 0 && (ee = 5);
}
function Dt(e, t, n) {
  var r = A, i = Ie.transition;
  try {
    Ie.transition = null, A = 1, Th(e, t, n, r);
  } finally {
    Ie.transition = i, A = r;
  }
  return null;
}
function Th(e, t, n, r) {
  do
    Rn();
  while (xt !== null);
  if (I & 6) throw Error(j(327));
  n = e.finishedWork;
  var i = e.finishedLanes;
  if (n === null) return null;
  if (e.finishedWork = null, e.finishedLanes = 0, n === e.current) throw Error(j(177));
  e.callbackNode = null, e.callbackPriority = 0;
  var o = n.lanes | n.childLanes;
  if (fp(e, o), e === oe && (J = oe = null, ae = 0), !(n.subtreeFlags & 2064) && !(n.flags & 2064) || si || (si = !0, dd(Ri, function() {
    return Rn(), null;
  })), o = (n.flags & 15990) !== 0, n.subtreeFlags & 15990 || o) {
    o = Ie.transition, Ie.transition = null;
    var s = A;
    A = 1;
    var a = I;
    I |= 4, Bl.current = null, Nh(e, n), rd(n, e), Jp(Os), Ti = !!Rs, Os = Rs = null, e.current = n, jh(n), np(), I = a, A = s, Ie.transition = o;
  } else e.current = n;
  if (si && (si = !1, xt = e, Qi = i), o = e.pendingLanes, o === 0 && (Lt = null), op(n.stateNode), ke(e, G()), t !== null) for (r = e.onRecoverableError, n = 0; n < t.length; n++) i = t[n], r(i.value, { componentStack: i.stack, digest: i.digest });
  if (Wi) throw Wi = !1, e = Gs, Gs = null, e;
  return Qi & 1 && e.tag !== 0 && Rn(), o = e.pendingLanes, o & 1 ? e === Js ? fr++ : (fr = 0, Js = e) : fr = 0, Ft(), null;
}
function Rn() {
  if (xt !== null) {
    var e = Vc(Qi), t = Ie.transition, n = A;
    try {
      if (Ie.transition = null, A = 16 > e ? 16 : e, xt === null) var r = !1;
      else {
        if (e = xt, xt = null, Qi = 0, I & 6) throw Error(j(331));
        var i = I;
        for (I |= 4, O = e.current; O !== null; ) {
          var o = O, s = o.child;
          if (O.flags & 16) {
            var a = o.deletions;
            if (a !== null) {
              for (var l = 0; l < a.length; l++) {
                var u = a[l];
                for (O = u; O !== null; ) {
                  var c = O;
                  switch (c.tag) {
                    case 0:
                    case 11:
                    case 15:
                      ur(8, c, o);
                  }
                  var f = c.child;
                  if (f !== null) f.return = c, O = f;
                  else for (; O !== null; ) {
                    c = O;
                    var d = c.sibling, h = c.return;
                    if (ed(c), c === u) {
                      O = null;
                      break;
                    }
                    if (d !== null) {
                      d.return = h, O = d;
                      break;
                    }
                    O = h;
                  }
                }
              }
              var v = o.alternate;
              if (v !== null) {
                var x = v.child;
                if (x !== null) {
                  v.child = null;
                  do {
                    var C = x.sibling;
                    x.sibling = null, x = C;
                  } while (x !== null);
                }
              }
              O = o;
            }
          }
          if (o.subtreeFlags & 2064 && s !== null) s.return = o, O = s;
          else e: for (; O !== null; ) {
            if (o = O, o.flags & 2048) switch (o.tag) {
              case 0:
              case 11:
              case 15:
                ur(9, o, o.return);
            }
            var g = o.sibling;
            if (g !== null) {
              g.return = o.return, O = g;
              break e;
            }
            O = o.return;
          }
        }
        var m = e.current;
        for (O = m; O !== null; ) {
          s = O;
          var w = s.child;
          if (s.subtreeFlags & 2064 && w !== null) w.return = s, O = w;
          else e: for (s = m; O !== null; ) {
            if (a = O, a.flags & 2048) try {
              switch (a.tag) {
                case 0:
                case 11:
                case 15:
                  mo(9, a);
              }
            } catch (S) {
              Q(a, a.return, S);
            }
            if (a === s) {
              O = null;
              break e;
            }
            var y = a.sibling;
            if (y !== null) {
              y.return = a.return, O = y;
              break e;
            }
            O = a.return;
          }
        }
        if (I = i, Ft(), Ge && typeof Ge.onPostCommitFiberRoot == "function") try {
          Ge.onPostCommitFiberRoot(so, e);
        } catch {
        }
        r = !0;
      }
      return r;
    } finally {
      A = n, Ie.transition = t;
    }
  }
  return !1;
}
function pu(e, t, n) {
  t = In(n, t), t = Bf(e, t, 1), e = jt(e, t, 1), t = ve(), e !== null && (zr(e, 1, t), ke(e, t));
}
function Q(e, t, n) {
  if (e.tag === 3) pu(e, e, n);
  else for (; t !== null; ) {
    if (t.tag === 3) {
      pu(t, e, n);
      break;
    } else if (t.tag === 1) {
      var r = t.stateNode;
      if (typeof t.type.getDerivedStateFromError == "function" || typeof r.componentDidCatch == "function" && (Lt === null || !Lt.has(r))) {
        e = In(n, e), e = Hf(t, e, 1), t = jt(t, e, 1), e = ve(), t !== null && (zr(t, 1, e), ke(t, e));
        break;
      }
    }
    t = t.return;
  }
}
function _h(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t), t = ve(), e.pingedLanes |= e.suspendedLanes & n, oe === e && (ae & n) === n && (ee === 4 || ee === 3 && (ae & 130023424) === ae && 500 > G() - Kl ? Kt(e, 0) : Hl |= n), ke(e, t);
}
function cd(e, t) {
  t === 0 && (e.mode & 1 ? (t = Gr, Gr <<= 1, !(Gr & 130023424) && (Gr = 4194304)) : t = 1);
  var n = ve();
  e = lt(e, t), e !== null && (zr(e, t, n), ke(e, n));
}
function $h(e) {
  var t = e.memoizedState, n = 0;
  t !== null && (n = t.retryLane), cd(e, n);
}
function Mh(e, t) {
  var n = 0;
  switch (e.tag) {
    case 13:
      var r = e.stateNode, i = e.memoizedState;
      i !== null && (n = i.retryLane);
      break;
    case 19:
      r = e.stateNode;
      break;
    default:
      throw Error(j(314));
  }
  r !== null && r.delete(t), cd(e, n);
}
var fd;
fd = function(e, t, n) {
  if (e !== null) if (e.memoizedProps !== t.pendingProps || Se.current) Ce = !0;
  else {
    if (!(e.lanes & n) && !(t.flags & 128)) return Ce = !1, Ch(e, t, n);
    Ce = !!(e.flags & 131072);
  }
  else Ce = !1, B && t.flags & 1048576 && mf(t, zi, t.index);
  switch (t.lanes = 0, t.tag) {
    case 2:
      var r = t.type;
      xi(e, t), e = t.pendingProps;
      var i = Tn(t, me.current);
      Pn(t, n), i = zl(null, t, r, e, i, n);
      var o = bl();
      return t.flags |= 1, typeof i == "object" && i !== null && typeof i.render == "function" && i.$$typeof === void 0 ? (t.tag = 1, t.memoizedState = null, t.updateQueue = null, Ee(r) ? (o = !0, Fi(t)) : o = !1, t.memoizedState = i.state !== null && i.state !== void 0 ? i.state : null, $l(t), i.updater = ho, t.stateNode = i, i._reactInternals = t, bs(t, r, e, n), t = Vs(null, t, r, !0, o, n)) : (t.tag = 0, B && o && jl(t), ge(null, t, i, n), t = t.child), t;
    case 16:
      r = t.elementType;
      e: {
        switch (xi(e, t), e = t.pendingProps, i = r._init, r = i(r._payload), t.type = r, i = t.tag = Fh(r), e = be(r, e), i) {
          case 0:
            t = Ds(null, t, r, e, n);
            break e;
          case 1:
            t = ru(null, t, r, e, n);
            break e;
          case 11:
            t = tu(null, t, r, e, n);
            break e;
          case 14:
            t = nu(null, t, r, be(r.type, e), n);
            break e;
        }
        throw Error(j(
          306,
          r,
          ""
        ));
      }
      return t;
    case 0:
      return r = t.type, i = t.pendingProps, i = t.elementType === r ? i : be(r, i), Ds(e, t, r, i, n);
    case 1:
      return r = t.type, i = t.pendingProps, i = t.elementType === r ? i : be(r, i), ru(e, t, r, i, n);
    case 3:
      e: {
        if (Zf(t), e === null) throw Error(j(387));
        r = t.pendingProps, o = t.memoizedState, i = o.element, Cf(e, t), Di(t, r, null, n);
        var s = t.memoizedState;
        if (r = s.element, o.isDehydrated) if (o = { element: r, isDehydrated: !1, cache: s.cache, pendingSuspenseBoundaries: s.pendingSuspenseBoundaries, transitions: s.transitions }, t.updateQueue.baseState = o, t.memoizedState = o, t.flags & 256) {
          i = In(Error(j(423)), t), t = iu(e, t, r, n, i);
          break e;
        } else if (r !== i) {
          i = In(Error(j(424)), t), t = iu(e, t, r, n, i);
          break e;
        } else for (je = Nt(t.stateNode.containerInfo.firstChild), Pe = t, B = !0, De = null, n = wf(t, null, r, n), t.child = n; n; ) n.flags = n.flags & -3 | 4096, n = n.sibling;
        else {
          if (_n(), r === i) {
            t = at(e, t, n);
            break e;
          }
          ge(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return Sf(t), e === null && Fs(t), r = t.type, i = t.pendingProps, o = e !== null ? e.memoizedProps : null, s = i.children, Ts(r, i) ? s = null : o !== null && Ts(r, o) && (t.flags |= 32), Qf(e, t), ge(e, t, s, n), t.child;
    case 6:
      return e === null && Fs(t), null;
    case 13:
      return Yf(e, t, n);
    case 4:
      return Ml(t, t.stateNode.containerInfo), r = t.pendingProps, e === null ? t.child = $n(t, null, r, n) : ge(e, t, r, n), t.child;
    case 11:
      return r = t.type, i = t.pendingProps, i = t.elementType === r ? i : be(r, i), tu(e, t, r, i, n);
    case 7:
      return ge(e, t, t.pendingProps, n), t.child;
    case 8:
      return ge(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return ge(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (r = t.type._context, i = t.pendingProps, o = t.memoizedProps, s = i.value, U(bi, r._currentValue), r._currentValue = s, o !== null) if (He(o.value, s)) {
          if (o.children === i.children && !Se.current) {
            t = at(e, t, n);
            break e;
          }
        } else for (o = t.child, o !== null && (o.return = t); o !== null; ) {
          var a = o.dependencies;
          if (a !== null) {
            s = o.child;
            for (var l = a.firstContext; l !== null; ) {
              if (l.context === r) {
                if (o.tag === 1) {
                  l = it(-1, n & -n), l.tag = 2;
                  var u = o.updateQueue;
                  if (u !== null) {
                    u = u.shared;
                    var c = u.pending;
                    c === null ? l.next = l : (l.next = c.next, c.next = l), u.pending = l;
                  }
                }
                o.lanes |= n, l = o.alternate, l !== null && (l.lanes |= n), As(
                  o.return,
                  n,
                  t
                ), a.lanes |= n;
                break;
              }
              l = l.next;
            }
          } else if (o.tag === 10) s = o.type === t.type ? null : o.child;
          else if (o.tag === 18) {
            if (s = o.return, s === null) throw Error(j(341));
            s.lanes |= n, a = s.alternate, a !== null && (a.lanes |= n), As(s, n, t), s = o.sibling;
          } else s = o.child;
          if (s !== null) s.return = o;
          else for (s = o; s !== null; ) {
            if (s === t) {
              s = null;
              break;
            }
            if (o = s.sibling, o !== null) {
              o.return = s.return, s = o;
              break;
            }
            s = s.return;
          }
          o = s;
        }
        ge(e, t, i.children, n), t = t.child;
      }
      return t;
    case 9:
      return i = t.type, r = t.pendingProps.children, Pn(t, n), i = Fe(i), r = r(i), t.flags |= 1, ge(e, t, r, n), t.child;
    case 14:
      return r = t.type, i = be(r, t.pendingProps), i = be(r.type, i), nu(e, t, r, i, n);
    case 15:
      return Kf(e, t, t.type, t.pendingProps, n);
    case 17:
      return r = t.type, i = t.pendingProps, i = t.elementType === r ? i : be(r, i), xi(e, t), t.tag = 1, Ee(r) ? (e = !0, Fi(t)) : e = !1, Pn(t, n), Vf(t, r, i), bs(t, r, i, n), Vs(null, t, r, !0, e, n);
    case 19:
      return Gf(e, t, n);
    case 22:
      return Wf(e, t, n);
  }
  throw Error(j(156, t.tag));
};
function dd(e, t) {
  return zc(e, t);
}
function Ih(e, t, n, r) {
  this.tag = e, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = r, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
}
function Me(e, t, n, r) {
  return new Ih(e, t, n, r);
}
function Yl(e) {
  return e = e.prototype, !(!e || !e.isReactComponent);
}
function Fh(e) {
  if (typeof e == "function") return Yl(e) ? 1 : 0;
  if (e != null) {
    if (e = e.$$typeof, e === hl) return 11;
    if (e === ml) return 14;
  }
  return 2;
}
function Rt(e, t) {
  var n = e.alternate;
  return n === null ? (n = Me(e.tag, t, e.key, e.mode), n.elementType = e.elementType, n.type = e.type, n.stateNode = e.stateNode, n.alternate = e, e.alternate = n) : (n.pendingProps = t, n.type = e.type, n.flags = 0, n.subtreeFlags = 0, n.deletions = null), n.flags = e.flags & 14680064, n.childLanes = e.childLanes, n.lanes = e.lanes, n.child = e.child, n.memoizedProps = e.memoizedProps, n.memoizedState = e.memoizedState, n.updateQueue = e.updateQueue, t = e.dependencies, n.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }, n.sibling = e.sibling, n.index = e.index, n.ref = e.ref, n;
}
function Ei(e, t, n, r, i, o) {
  var s = 2;
  if (r = e, typeof e == "function") Yl(e) && (s = 1);
  else if (typeof e == "string") s = 5;
  else e: switch (e) {
    case fn:
      return Wt(n.children, i, o, t);
    case pl:
      s = 8, i |= 8;
      break;
    case us:
      return e = Me(12, n, t, i | 2), e.elementType = us, e.lanes = o, e;
    case cs:
      return e = Me(13, n, t, i), e.elementType = cs, e.lanes = o, e;
    case fs:
      return e = Me(19, n, t, i), e.elementType = fs, e.lanes = o, e;
    case Cc:
      return vo(n, i, o, t);
    default:
      if (typeof e == "object" && e !== null) switch (e.$$typeof) {
        case wc:
          s = 10;
          break e;
        case xc:
          s = 9;
          break e;
        case hl:
          s = 11;
          break e;
        case ml:
          s = 14;
          break e;
        case mt:
          s = 16, r = null;
          break e;
      }
      throw Error(j(130, e == null ? e : typeof e, ""));
  }
  return t = Me(s, n, t, i), t.elementType = e, t.type = r, t.lanes = o, t;
}
function Wt(e, t, n, r) {
  return e = Me(7, e, r, t), e.lanes = n, e;
}
function vo(e, t, n, r) {
  return e = Me(22, e, r, t), e.elementType = Cc, e.lanes = n, e.stateNode = { isHidden: !1 }, e;
}
function qo(e, t, n) {
  return e = Me(6, e, null, t), e.lanes = n, e;
}
function es(e, t, n) {
  return t = Me(4, e.children !== null ? e.children : [], e.key, t), t.lanes = n, t.stateNode = { containerInfo: e.containerInfo, pendingChildren: null, implementation: e.implementation }, t;
}
function Ah(e, t, n, r, i) {
  this.tag = t, this.containerInfo = e, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = Mo(0), this.expirationTimes = Mo(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Mo(0), this.identifierPrefix = r, this.onRecoverableError = i, this.mutableSourceEagerHydrationData = null;
}
function Gl(e, t, n, r, i, o, s, a, l) {
  return e = new Ah(e, t, n, a, l), t === 1 ? (t = 1, o === !0 && (t |= 8)) : t = 0, o = Me(3, null, null, t), e.current = o, o.stateNode = e, o.memoizedState = { element: r, isDehydrated: n, cache: null, transitions: null, pendingSuspenseBoundaries: null }, $l(o), e;
}
function zh(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return { $$typeof: cn, key: r == null ? null : "" + r, children: e, containerInfo: t, implementation: n };
}
function pd(e) {
  if (!e) return _t;
  e = e._reactInternals;
  e: {
    if (tn(e) !== e || e.tag !== 1) throw Error(j(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (Ee(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      t = t.return;
    } while (t !== null);
    throw Error(j(171));
  }
  if (e.tag === 1) {
    var n = e.type;
    if (Ee(n)) return pf(e, n, t);
  }
  return t;
}
function hd(e, t, n, r, i, o, s, a, l) {
  return e = Gl(n, r, !0, e, i, o, s, a, l), e.context = pd(null), n = e.current, r = ve(), i = Pt(n), o = it(r, i), o.callback = t ?? null, jt(n, o, i), e.current.lanes = i, zr(e, i, r), ke(e, r), e;
}
function yo(e, t, n, r) {
  var i = t.current, o = ve(), s = Pt(i);
  return n = pd(n), t.context === null ? t.context = n : t.pendingContext = n, t = it(o, s), t.payload = { element: e }, r = r === void 0 ? null : r, r !== null && (t.callback = r), e = jt(i, t, s), e !== null && (Be(e, i, s, o), vi(e, i, s)), s;
}
function Yi(e) {
  if (e = e.current, !e.child) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function hu(e, t) {
  if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function Jl(e, t) {
  hu(e, t), (e = e.alternate) && hu(e, t);
}
function bh() {
  return null;
}
var md = typeof reportError == "function" ? reportError : function(e) {
  console.error(e);
};
function Xl(e) {
  this._internalRoot = e;
}
wo.prototype.render = Xl.prototype.render = function(e) {
  var t = this._internalRoot;
  if (t === null) throw Error(j(409));
  yo(e, t, null, null);
};
wo.prototype.unmount = Xl.prototype.unmount = function() {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    Jt(function() {
      yo(null, e, null, null);
    }), t[st] = null;
  }
};
function wo(e) {
  this._internalRoot = e;
}
wo.prototype.unstable_scheduleHydration = function(e) {
  if (e) {
    var t = Kc();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < vt.length && t !== 0 && t < vt[n].priority; n++) ;
    vt.splice(n, 0, e), n === 0 && Qc(e);
  }
};
function ql(e) {
  return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11);
}
function xo(e) {
  return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "));
}
function mu() {
}
function Uh(e, t, n, r, i) {
  if (i) {
    if (typeof r == "function") {
      var o = r;
      r = function() {
        var u = Yi(s);
        o.call(u);
      };
    }
    var s = hd(t, r, e, 0, null, !1, !1, "", mu);
    return e._reactRootContainer = s, e[st] = s.current, Sr(e.nodeType === 8 ? e.parentNode : e), Jt(), s;
  }
  for (; i = e.lastChild; ) e.removeChild(i);
  if (typeof r == "function") {
    var a = r;
    r = function() {
      var u = Yi(l);
      a.call(u);
    };
  }
  var l = Gl(e, 0, !1, null, null, !1, !1, "", mu);
  return e._reactRootContainer = l, e[st] = l.current, Sr(e.nodeType === 8 ? e.parentNode : e), Jt(function() {
    yo(t, l, n, r);
  }), l;
}
function Co(e, t, n, r, i) {
  var o = n._reactRootContainer;
  if (o) {
    var s = o;
    if (typeof i == "function") {
      var a = i;
      i = function() {
        var l = Yi(s);
        a.call(l);
      };
    }
    yo(t, s, e, i);
  } else s = Uh(n, t, e, i, r);
  return Yi(s);
}
Bc = function(e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = tr(t.pendingLanes);
        n !== 0 && (yl(t, n | 1), ke(t, G()), !(I & 6) && (Fn = G() + 500, Ft()));
      }
      break;
    case 13:
      Jt(function() {
        var r = lt(e, 1);
        if (r !== null) {
          var i = ve();
          Be(r, e, 1, i);
        }
      }), Jl(e, 1);
  }
};
wl = function(e) {
  if (e.tag === 13) {
    var t = lt(e, 134217728);
    if (t !== null) {
      var n = ve();
      Be(t, e, 134217728, n);
    }
    Jl(e, 134217728);
  }
};
Hc = function(e) {
  if (e.tag === 13) {
    var t = Pt(e), n = lt(e, t);
    if (n !== null) {
      var r = ve();
      Be(n, e, t, r);
    }
    Jl(e, t);
  }
};
Kc = function() {
  return A;
};
Wc = function(e, t) {
  var n = A;
  try {
    return A = e, t();
  } finally {
    A = n;
  }
};
Cs = function(e, t, n) {
  switch (t) {
    case "input":
      if (hs(e, n), t = n.name, n.type === "radio" && t != null) {
        for (n = e; n.parentNode; ) n = n.parentNode;
        for (n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'), t = 0; t < n.length; t++) {
          var r = n[t];
          if (r !== e && r.form === e.form) {
            var i = co(r);
            if (!i) throw Error(j(90));
            Ec(r), hs(r, i);
          }
        }
      }
      break;
    case "textarea":
      Nc(e, n);
      break;
    case "select":
      t = n.value, t != null && kn(e, !!n.multiple, t, !1);
  }
};
_c = Wl;
$c = Jt;
var Dh = { usingClientEntryPoint: !1, Events: [Ur, mn, co, Oc, Tc, Wl] }, Zn = { findFiberByHostInstance: Vt, bundleType: 0, version: "18.3.1", rendererPackageName: "react-dom" }, Vh = { bundleType: Zn.bundleType, version: Zn.version, rendererPackageName: Zn.rendererPackageName, rendererConfig: Zn.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: ut.ReactCurrentDispatcher, findHostInstanceByFiber: function(e) {
  return e = Fc(e), e === null ? null : e.stateNode;
}, findFiberByHostInstance: Zn.findFiberByHostInstance || bh, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.3.1-next-f1338f8080-20240426" };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var li = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!li.isDisabled && li.supportsFiber) try {
    so = li.inject(Vh), Ge = li;
  } catch {
  }
}
Oe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Dh;
Oe.createPortal = function(e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!ql(t)) throw Error(j(200));
  return zh(e, t, null, n);
};
Oe.createRoot = function(e, t) {
  if (!ql(e)) throw Error(j(299));
  var n = !1, r = "", i = md;
  return t != null && (t.unstable_strictMode === !0 && (n = !0), t.identifierPrefix !== void 0 && (r = t.identifierPrefix), t.onRecoverableError !== void 0 && (i = t.onRecoverableError)), t = Gl(e, 1, !1, null, null, n, !1, r, i), e[st] = t.current, Sr(e.nodeType === 8 ? e.parentNode : e), new Xl(t);
};
Oe.findDOMNode = function(e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function" ? Error(j(188)) : (e = Object.keys(e).join(","), Error(j(268, e)));
  return e = Fc(t), e = e === null ? null : e.stateNode, e;
};
Oe.flushSync = function(e) {
  return Jt(e);
};
Oe.hydrate = function(e, t, n) {
  if (!xo(t)) throw Error(j(200));
  return Co(null, e, t, !0, n);
};
Oe.hydrateRoot = function(e, t, n) {
  if (!ql(e)) throw Error(j(405));
  var r = n != null && n.hydratedSources || null, i = !1, o = "", s = md;
  if (n != null && (n.unstable_strictMode === !0 && (i = !0), n.identifierPrefix !== void 0 && (o = n.identifierPrefix), n.onRecoverableError !== void 0 && (s = n.onRecoverableError)), t = hd(t, null, e, 1, n ?? null, i, !1, o, s), e[st] = t.current, Sr(e), r) for (e = 0; e < r.length; e++) n = r[e], i = n._getVersion, i = i(n._source), t.mutableSourceEagerHydrationData == null ? t.mutableSourceEagerHydrationData = [n, i] : t.mutableSourceEagerHydrationData.push(
    n,
    i
  );
  return new wo(t);
};
Oe.render = function(e, t, n) {
  if (!xo(t)) throw Error(j(200));
  return Co(null, e, t, !1, n);
};
Oe.unmountComponentAtNode = function(e) {
  if (!xo(e)) throw Error(j(40));
  return e._reactRootContainer ? (Jt(function() {
    Co(null, null, e, !1, function() {
      e._reactRootContainer = null, e[st] = null;
    });
  }), !0) : !1;
};
Oe.unstable_batchedUpdates = Wl;
Oe.unstable_renderSubtreeIntoContainer = function(e, t, n, r) {
  if (!xo(n)) throw Error(j(200));
  if (e == null || e._reactInternals === void 0) throw Error(j(38));
  return Co(e, t, n, !1, r);
};
Oe.version = "18.3.1-next-f1338f8080-20240426";
function gd() {
  if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(gd);
    } catch (e) {
      console.error(e);
    }
}
gd(), mc.exports = Oe;
var Bh = mc.exports, vd, gu = Bh;
vd = gu.createRoot, gu.hydrateRoot;
var yd = { exports: {} }, wd = {};
/**
 * @license React
 * use-sync-external-store-with-selector.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Vr = k;
function Hh(e, t) {
  return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
}
var Kh = typeof Object.is == "function" ? Object.is : Hh, Wh = Vr.useSyncExternalStore, Qh = Vr.useRef, Zh = Vr.useEffect, Yh = Vr.useMemo, Gh = Vr.useDebugValue;
wd.useSyncExternalStoreWithSelector = function(e, t, n, r, i) {
  var o = Qh(null);
  if (o.current === null) {
    var s = { hasValue: !1, value: null };
    o.current = s;
  } else s = o.current;
  o = Yh(function() {
    function l(h) {
      if (!u) {
        if (u = !0, c = h, h = r(h), i !== void 0 && s.hasValue) {
          var v = s.value;
          if (i(v, h)) return f = v;
        }
        return f = h;
      }
      if (v = f, Kh(c, h)) return v;
      var x = r(h);
      return i !== void 0 && i(v, x) ? v : (c = h, f = x);
    }
    var u = !1, c, f, d = n === void 0 ? null : n;
    return [function() {
      return l(t());
    }, d === null ? void 0 : function() {
      return l(d());
    }];
  }, [t, n, r, i]);
  var a = Wh(e, o[0], o[1]);
  return Zh(function() {
    s.hasValue = !0, s.value = a;
  }, [a]), Gh(a), a;
};
yd.exports = wd;
var Jh = yd.exports, Le = (
  // prettier-ignore
  // @ts-ignore
  "default" in ls ? he : ls
), vu = Symbol.for("react-redux-context"), yu = typeof globalThis < "u" ? globalThis : (
  /* fall back to a per-module scope (pre-8.1 behaviour) if `globalThis` is not available */
  {}
);
function Xh() {
  if (!Le.createContext)
    return {};
  const e = yu[vu] ?? (yu[vu] = /* @__PURE__ */ new Map());
  let t = e.get(Le.createContext);
  return t || (t = Le.createContext(
    null
  ), e.set(Le.createContext, t)), t;
}
var $t = /* @__PURE__ */ Xh(), qh = () => {
  throw new Error("uSES not initialized!");
};
function ea(e = $t) {
  return function() {
    return Le.useContext(e);
  };
}
var xd = /* @__PURE__ */ ea(), Cd = qh, e2 = (e) => {
  Cd = e;
}, t2 = (e, t) => e === t;
function n2(e = $t) {
  const t = e === $t ? xd : ea(e), n = (r, i = {}) => {
    const { equalityFn: o = t2, devModeChecks: s = {} } = typeof i == "function" ? { equalityFn: i } : i, {
      store: a,
      subscription: l,
      getServerState: u,
      stabilityCheck: c,
      identityFunctionCheck: f
    } = t();
    Le.useRef(!0);
    const d = Le.useCallback(
      {
        [r.name](v) {
          return r(v);
        }
      }[r.name],
      [r, c, s.stabilityCheck]
    ), h = Cd(
      l.addNestedSub,
      a.getState,
      u || a.getState,
      d,
      o
    );
    return Le.useDebugValue(h), h;
  };
  return Object.assign(n, {
    withTypes: () => n
  }), n;
}
var At = /* @__PURE__ */ n2();
function r2(e) {
  e();
}
function i2() {
  let e = null, t = null;
  return {
    clear() {
      e = null, t = null;
    },
    notify() {
      r2(() => {
        let n = e;
        for (; n; )
          n.callback(), n = n.next;
      });
    },
    get() {
      const n = [];
      let r = e;
      for (; r; )
        n.push(r), r = r.next;
      return n;
    },
    subscribe(n) {
      let r = !0;
      const i = t = {
        callback: n,
        next: null,
        prev: t
      };
      return i.prev ? i.prev.next = i : e = i, function() {
        !r || e === null || (r = !1, i.next ? i.next.prev = i.prev : t = i.prev, i.prev ? i.prev.next = i.next : e = i.next);
      };
    }
  };
}
var wu = {
  notify() {
  },
  get: () => []
};
function o2(e, t) {
  let n, r = wu, i = 0, o = !1;
  function s(x) {
    c();
    const C = r.subscribe(x);
    let g = !1;
    return () => {
      g || (g = !0, C(), f());
    };
  }
  function a() {
    r.notify();
  }
  function l() {
    v.onStateChange && v.onStateChange();
  }
  function u() {
    return o;
  }
  function c() {
    i++, n || (n = e.subscribe(l), r = i2());
  }
  function f() {
    i--, n && i === 0 && (n(), n = void 0, r.clear(), r = wu);
  }
  function d() {
    o || (o = !0, c());
  }
  function h() {
    o && (o = !1, f());
  }
  const v = {
    addNestedSub: s,
    notifyNestedSubs: a,
    handleChangeWrapper: l,
    isSubscribed: u,
    trySubscribe: d,
    tryUnsubscribe: h,
    getListeners: () => r
  };
  return v;
}
var s2 = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u", l2 = typeof navigator < "u" && navigator.product === "ReactNative", a2 = s2 || l2 ? Le.useLayoutEffect : Le.useEffect;
function u2({
  store: e,
  context: t,
  children: n,
  serverState: r,
  stabilityCheck: i = "once",
  identityFunctionCheck: o = "once"
}) {
  const s = Le.useMemo(() => {
    const u = o2(e);
    return {
      store: e,
      subscription: u,
      getServerState: r ? () => r : void 0,
      stabilityCheck: i,
      identityFunctionCheck: o
    };
  }, [e, r, i, o]), a = Le.useMemo(() => e.getState(), [e]);
  a2(() => {
    const { subscription: u } = s;
    return u.onStateChange = u.notifyNestedSubs, u.trySubscribe(), a !== e.getState() && u.notifyNestedSubs(), () => {
      u.tryUnsubscribe(), u.onStateChange = void 0;
    };
  }, [s, a]);
  const l = t || $t;
  return /* @__PURE__ */ Le.createElement(l.Provider, { value: s }, n);
}
var c2 = u2;
function Sd(e = $t) {
  const t = e === $t ? xd : (
    // @ts-ignore
    ea(e)
  ), n = () => {
    const { store: r } = t();
    return r;
  };
  return Object.assign(n, {
    withTypes: () => n
  }), n;
}
var f2 = /* @__PURE__ */ Sd();
function d2(e = $t) {
  const t = e === $t ? f2 : Sd(e), n = () => t().dispatch;
  return Object.assign(n, {
    withTypes: () => n
  }), n;
}
var So = /* @__PURE__ */ d2();
e2(Jh.useSyncExternalStoreWithSelector);
/**
 * @remix-run/router v1.17.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
function Tr() {
  return Tr = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, Tr.apply(this, arguments);
}
var Ct;
(function(e) {
  e.Pop = "POP", e.Push = "PUSH", e.Replace = "REPLACE";
})(Ct || (Ct = {}));
const xu = "popstate";
function p2(e) {
  e === void 0 && (e = {});
  function t(r, i) {
    let {
      pathname: o,
      search: s,
      hash: a
    } = r.location;
    return el(
      "",
      {
        pathname: o,
        search: s,
        hash: a
      },
      // state defaults to `null` because `window.history.state` does
      i.state && i.state.usr || null,
      i.state && i.state.key || "default"
    );
  }
  function n(r, i) {
    return typeof i == "string" ? i : Gi(i);
  }
  return m2(t, n, null, e);
}
function X(e, t) {
  if (e === !1 || e === null || typeof e > "u")
    throw new Error(t);
}
function Ed(e, t) {
  if (!e) {
    typeof console < "u" && console.warn(t);
    try {
      throw new Error(t);
    } catch {
    }
  }
}
function h2() {
  return Math.random().toString(36).substr(2, 8);
}
function Cu(e, t) {
  return {
    usr: e.state,
    key: e.key,
    idx: t
  };
}
function el(e, t, n, r) {
  return n === void 0 && (n = null), Tr({
    pathname: typeof e == "string" ? e : e.pathname,
    search: "",
    hash: ""
  }, typeof t == "string" ? Un(t) : t, {
    state: n,
    // TODO: This could be cleaned up.  push/replace should probably just take
    // full Locations now and avoid the need to run through this flow at all
    // But that's a pretty big refactor to the current test suite so going to
    // keep as is for the time being and just let any incoming keys take precedence
    key: t && t.key || r || h2()
  });
}
function Gi(e) {
  let {
    pathname: t = "/",
    search: n = "",
    hash: r = ""
  } = e;
  return n && n !== "?" && (t += n.charAt(0) === "?" ? n : "?" + n), r && r !== "#" && (t += r.charAt(0) === "#" ? r : "#" + r), t;
}
function Un(e) {
  let t = {};
  if (e) {
    let n = e.indexOf("#");
    n >= 0 && (t.hash = e.substr(n), e = e.substr(0, n));
    let r = e.indexOf("?");
    r >= 0 && (t.search = e.substr(r), e = e.substr(0, r)), e && (t.pathname = e);
  }
  return t;
}
function m2(e, t, n, r) {
  r === void 0 && (r = {});
  let {
    window: i = document.defaultView,
    v5Compat: o = !1
  } = r, s = i.history, a = Ct.Pop, l = null, u = c();
  u == null && (u = 0, s.replaceState(Tr({}, s.state, {
    idx: u
  }), ""));
  function c() {
    return (s.state || {
      idx: null
    }).idx;
  }
  function f() {
    a = Ct.Pop;
    let C = c(), g = C == null ? null : C - u;
    u = C, l && l({
      action: a,
      location: x.location,
      delta: g
    });
  }
  function d(C, g) {
    a = Ct.Push;
    let m = el(x.location, C, g);
    u = c() + 1;
    let w = Cu(m, u), y = x.createHref(m);
    try {
      s.pushState(w, "", y);
    } catch (S) {
      if (S instanceof DOMException && S.name === "DataCloneError")
        throw S;
      i.location.assign(y);
    }
    o && l && l({
      action: a,
      location: x.location,
      delta: 1
    });
  }
  function h(C, g) {
    a = Ct.Replace;
    let m = el(x.location, C, g);
    u = c();
    let w = Cu(m, u), y = x.createHref(m);
    s.replaceState(w, "", y), o && l && l({
      action: a,
      location: x.location,
      delta: 0
    });
  }
  function v(C) {
    let g = i.location.origin !== "null" ? i.location.origin : i.location.href, m = typeof C == "string" ? C : Gi(C);
    return m = m.replace(/ $/, "%20"), X(g, "No window.location.(origin|href) available to create URL for href: " + m), new URL(m, g);
  }
  let x = {
    get action() {
      return a;
    },
    get location() {
      return e(i, s);
    },
    listen(C) {
      if (l)
        throw new Error("A history only accepts one active listener");
      return i.addEventListener(xu, f), l = C, () => {
        i.removeEventListener(xu, f), l = null;
      };
    },
    createHref(C) {
      return t(i, C);
    },
    createURL: v,
    encodeLocation(C) {
      let g = v(C);
      return {
        pathname: g.pathname,
        search: g.search,
        hash: g.hash
      };
    },
    push: d,
    replace: h,
    go(C) {
      return s.go(C);
    }
  };
  return x;
}
var Su;
(function(e) {
  e.data = "data", e.deferred = "deferred", e.redirect = "redirect", e.error = "error";
})(Su || (Su = {}));
function g2(e, t, n) {
  return n === void 0 && (n = "/"), v2(e, t, n, !1);
}
function v2(e, t, n, r) {
  let i = typeof t == "string" ? Un(t) : t, o = ta(i.pathname || "/", n);
  if (o == null)
    return null;
  let s = kd(e);
  y2(s);
  let a = null;
  for (let l = 0; a == null && l < s.length; ++l) {
    let u = R2(o);
    a = L2(s[l], u, r);
  }
  return a;
}
function kd(e, t, n, r) {
  t === void 0 && (t = []), n === void 0 && (n = []), r === void 0 && (r = "");
  let i = (o, s, a) => {
    let l = {
      relativePath: a === void 0 ? o.path || "" : a,
      caseSensitive: o.caseSensitive === !0,
      childrenIndex: s,
      route: o
    };
    l.relativePath.startsWith("/") && (X(l.relativePath.startsWith(r), 'Absolute route path "' + l.relativePath + '" nested under path ' + ('"' + r + '" is not valid. An absolute child route path ') + "must start with the combined path of all its parent routes."), l.relativePath = l.relativePath.slice(r.length));
    let u = Ot([r, l.relativePath]), c = n.concat(l);
    o.children && o.children.length > 0 && (X(
      // Our types know better, but runtime JS may not!
      // @ts-expect-error
      o.index !== !0,
      "Index routes must not have child routes. Please remove " + ('all child routes from route path "' + u + '".')
    ), kd(o.children, t, c, u)), !(o.path == null && !o.index) && t.push({
      path: u,
      score: N2(u, o.index),
      routesMeta: c
    });
  };
  return e.forEach((o, s) => {
    var a;
    if (o.path === "" || !((a = o.path) != null && a.includes("?")))
      i(o, s);
    else
      for (let l of Nd(o.path))
        i(o, s, l);
  }), t;
}
function Nd(e) {
  let t = e.split("/");
  if (t.length === 0) return [];
  let [n, ...r] = t, i = n.endsWith("?"), o = n.replace(/\?$/, "");
  if (r.length === 0)
    return i ? [o, ""] : [o];
  let s = Nd(r.join("/")), a = [];
  return a.push(...s.map((l) => l === "" ? o : [o, l].join("/"))), i && a.push(...s), a.map((l) => e.startsWith("/") && l === "" ? "/" : l);
}
function y2(e) {
  e.sort((t, n) => t.score !== n.score ? n.score - t.score : j2(t.routesMeta.map((r) => r.childrenIndex), n.routesMeta.map((r) => r.childrenIndex)));
}
const w2 = /^:[\w-]+$/, x2 = 3, C2 = 2, S2 = 1, E2 = 10, k2 = -2, Eu = (e) => e === "*";
function N2(e, t) {
  let n = e.split("/"), r = n.length;
  return n.some(Eu) && (r += k2), t && (r += C2), n.filter((i) => !Eu(i)).reduce((i, o) => i + (w2.test(o) ? x2 : o === "" ? S2 : E2), r);
}
function j2(e, t) {
  return e.length === t.length && e.slice(0, -1).every((r, i) => r === t[i]) ? (
    // If two routes are siblings, we should try to match the earlier sibling
    // first. This allows people to have fine-grained control over the matching
    // behavior by simply putting routes with identical paths in the order they
    // want them tried.
    e[e.length - 1] - t[t.length - 1]
  ) : (
    // Otherwise, it doesn't really make sense to rank non-siblings by index,
    // so they sort equally.
    0
  );
}
function L2(e, t, n) {
  let {
    routesMeta: r
  } = e, i = {}, o = "/", s = [];
  for (let a = 0; a < r.length; ++a) {
    let l = r[a], u = a === r.length - 1, c = o === "/" ? t : t.slice(o.length) || "/", f = ku({
      path: l.relativePath,
      caseSensitive: l.caseSensitive,
      end: u
    }, c), d = l.route;
    if (!f && u && n && !r[r.length - 1].route.index && (f = ku({
      path: l.relativePath,
      caseSensitive: l.caseSensitive,
      end: !1
    }, c)), !f)
      return null;
    Object.assign(i, f.params), s.push({
      // TODO: Can this as be avoided?
      params: i,
      pathname: Ot([o, f.pathname]),
      pathnameBase: $2(Ot([o, f.pathnameBase])),
      route: d
    }), f.pathnameBase !== "/" && (o = Ot([o, f.pathnameBase]));
  }
  return s;
}
function ku(e, t) {
  typeof e == "string" && (e = {
    path: e,
    caseSensitive: !1,
    end: !0
  });
  let [n, r] = P2(e.path, e.caseSensitive, e.end), i = t.match(n);
  if (!i) return null;
  let o = i[0], s = o.replace(/(.)\/+$/, "$1"), a = i.slice(1);
  return {
    params: r.reduce((u, c, f) => {
      let {
        paramName: d,
        isOptional: h
      } = c;
      if (d === "*") {
        let x = a[f] || "";
        s = o.slice(0, o.length - x.length).replace(/(.)\/+$/, "$1");
      }
      const v = a[f];
      return h && !v ? u[d] = void 0 : u[d] = (v || "").replace(/%2F/g, "/"), u;
    }, {}),
    pathname: o,
    pathnameBase: s,
    pattern: e
  };
}
function P2(e, t, n) {
  t === void 0 && (t = !1), n === void 0 && (n = !0), Ed(e === "*" || !e.endsWith("*") || e.endsWith("/*"), 'Route path "' + e + '" will be treated as if it were ' + ('"' + e.replace(/\*$/, "/*") + '" because the `*` character must ') + "always follow a `/` in the pattern. To get rid of this warning, " + ('please change the route path to "' + e.replace(/\*$/, "/*") + '".'));
  let r = [], i = "^" + e.replace(/\/*\*?$/, "").replace(/^\/*/, "/").replace(/[\\.*+^${}|()[\]]/g, "\\$&").replace(/\/:([\w-]+)(\?)?/g, (s, a, l) => (r.push({
    paramName: a,
    isOptional: l != null
  }), l ? "/?([^\\/]+)?" : "/([^\\/]+)"));
  return e.endsWith("*") ? (r.push({
    paramName: "*"
  }), i += e === "*" || e === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$") : n ? i += "\\/*$" : e !== "" && e !== "/" && (i += "(?:(?=\\/|$))"), [new RegExp(i, t ? void 0 : "i"), r];
}
function R2(e) {
  try {
    return e.split("/").map((t) => decodeURIComponent(t).replace(/\//g, "%2F")).join("/");
  } catch (t) {
    return Ed(!1, 'The URL path "' + e + '" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent ' + ("encoding (" + t + ").")), e;
  }
}
function ta(e, t) {
  if (t === "/") return e;
  if (!e.toLowerCase().startsWith(t.toLowerCase()))
    return null;
  let n = t.endsWith("/") ? t.length - 1 : t.length, r = e.charAt(n);
  return r && r !== "/" ? null : e.slice(n) || "/";
}
function O2(e, t) {
  t === void 0 && (t = "/");
  let {
    pathname: n,
    search: r = "",
    hash: i = ""
  } = typeof e == "string" ? Un(e) : e;
  return {
    pathname: n ? n.startsWith("/") ? n : T2(n, t) : t,
    search: M2(r),
    hash: I2(i)
  };
}
function T2(e, t) {
  let n = t.replace(/\/+$/, "").split("/");
  return e.split("/").forEach((i) => {
    i === ".." ? n.length > 1 && n.pop() : i !== "." && n.push(i);
  }), n.length > 1 ? n.join("/") : "/";
}
function ts(e, t, n, r) {
  return "Cannot include a '" + e + "' character in a manually specified " + ("`to." + t + "` field [" + JSON.stringify(r) + "].  Please separate it out to the ") + ("`to." + n + "` field. Alternatively you may provide the full path as ") + 'a string in <Link to="..."> and the router will parse it for you.';
}
function _2(e) {
  return e.filter((t, n) => n === 0 || t.route.path && t.route.path.length > 0);
}
function jd(e, t) {
  let n = _2(e);
  return t ? n.map((r, i) => i === n.length - 1 ? r.pathname : r.pathnameBase) : n.map((r) => r.pathnameBase);
}
function Ld(e, t, n, r) {
  r === void 0 && (r = !1);
  let i;
  typeof e == "string" ? i = Un(e) : (i = Tr({}, e), X(!i.pathname || !i.pathname.includes("?"), ts("?", "pathname", "search", i)), X(!i.pathname || !i.pathname.includes("#"), ts("#", "pathname", "hash", i)), X(!i.search || !i.search.includes("#"), ts("#", "search", "hash", i)));
  let o = e === "" || i.pathname === "", s = o ? "/" : i.pathname, a;
  if (s == null)
    a = n;
  else {
    let f = t.length - 1;
    if (!r && s.startsWith("..")) {
      let d = s.split("/");
      for (; d[0] === ".."; )
        d.shift(), f -= 1;
      i.pathname = d.join("/");
    }
    a = f >= 0 ? t[f] : "/";
  }
  let l = O2(i, a), u = s && s !== "/" && s.endsWith("/"), c = (o || s === ".") && n.endsWith("/");
  return !l.pathname.endsWith("/") && (u || c) && (l.pathname += "/"), l;
}
const Ot = (e) => e.join("/").replace(/\/\/+/g, "/"), $2 = (e) => e.replace(/\/+$/, "").replace(/^\/*/, "/"), M2 = (e) => !e || e === "?" ? "" : e.startsWith("?") ? e : "?" + e, I2 = (e) => !e || e === "#" ? "" : e.startsWith("#") ? e : "#" + e;
function F2(e) {
  return e != null && typeof e.status == "number" && typeof e.statusText == "string" && typeof e.internal == "boolean" && "data" in e;
}
const Pd = ["post", "put", "patch", "delete"];
new Set(Pd);
const A2 = ["get", ...Pd];
new Set(A2);
/**
 * React Router v6.24.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
function _r() {
  return _r = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, _r.apply(this, arguments);
}
const na = /* @__PURE__ */ k.createContext(null), z2 = /* @__PURE__ */ k.createContext(null), nn = /* @__PURE__ */ k.createContext(null), Eo = /* @__PURE__ */ k.createContext(null), rn = /* @__PURE__ */ k.createContext({
  outlet: null,
  matches: [],
  isDataRoute: !1
}), Rd = /* @__PURE__ */ k.createContext(null);
function b2(e, t) {
  let {
    relative: n
  } = t === void 0 ? {} : t;
  Br() || X(!1);
  let {
    basename: r,
    navigator: i
  } = k.useContext(nn), {
    hash: o,
    pathname: s,
    search: a
  } = Td(e, {
    relative: n
  }), l = s;
  return r !== "/" && (l = s === "/" ? r : Ot([r, s])), i.createHref({
    pathname: l,
    search: a,
    hash: o
  });
}
function Br() {
  return k.useContext(Eo) != null;
}
function ko() {
  return Br() || X(!1), k.useContext(Eo).location;
}
function Od(e) {
  k.useContext(nn).static || k.useLayoutEffect(e);
}
function No() {
  let {
    isDataRoute: e
  } = k.useContext(rn);
  return e ? X2() : U2();
}
function U2() {
  Br() || X(!1);
  let e = k.useContext(na), {
    basename: t,
    future: n,
    navigator: r
  } = k.useContext(nn), {
    matches: i
  } = k.useContext(rn), {
    pathname: o
  } = ko(), s = JSON.stringify(jd(i, n.v7_relativeSplatPath)), a = k.useRef(!1);
  return Od(() => {
    a.current = !0;
  }), k.useCallback(function(u, c) {
    if (c === void 0 && (c = {}), !a.current) return;
    if (typeof u == "number") {
      r.go(u);
      return;
    }
    let f = Ld(u, JSON.parse(s), o, c.relative === "path");
    e == null && t !== "/" && (f.pathname = f.pathname === "/" ? t : Ot([t, f.pathname])), (c.replace ? r.replace : r.push)(f, c.state, c);
  }, [t, r, s, o, e]);
}
function Td(e, t) {
  let {
    relative: n
  } = t === void 0 ? {} : t, {
    future: r
  } = k.useContext(nn), {
    matches: i
  } = k.useContext(rn), {
    pathname: o
  } = ko(), s = JSON.stringify(jd(i, r.v7_relativeSplatPath));
  return k.useMemo(() => Ld(e, JSON.parse(s), o, n === "path"), [e, s, o, n]);
}
function D2(e, t) {
  return V2(e, t);
}
function V2(e, t, n, r) {
  Br() || X(!1);
  let {
    navigator: i
  } = k.useContext(nn), {
    matches: o
  } = k.useContext(rn), s = o[o.length - 1], a = s ? s.params : {};
  s && s.pathname;
  let l = s ? s.pathnameBase : "/";
  s && s.route;
  let u = ko(), c;
  if (t) {
    var f;
    let C = typeof t == "string" ? Un(t) : t;
    l === "/" || (f = C.pathname) != null && f.startsWith(l) || X(!1), c = C;
  } else
    c = u;
  let d = c.pathname || "/", h = d;
  if (l !== "/") {
    let C = l.replace(/^\//, "").split("/");
    h = "/" + d.replace(/^\//, "").split("/").slice(C.length).join("/");
  }
  let v = g2(e, {
    pathname: h
  }), x = Q2(v && v.map((C) => Object.assign({}, C, {
    params: Object.assign({}, a, C.params),
    pathname: Ot([
      l,
      // Re-encode pathnames that were decoded inside matchRoutes
      i.encodeLocation ? i.encodeLocation(C.pathname).pathname : C.pathname
    ]),
    pathnameBase: C.pathnameBase === "/" ? l : Ot([
      l,
      // Re-encode pathnames that were decoded inside matchRoutes
      i.encodeLocation ? i.encodeLocation(C.pathnameBase).pathname : C.pathnameBase
    ])
  })), o, n, r);
  return t && x ? /* @__PURE__ */ k.createElement(Eo.Provider, {
    value: {
      location: _r({
        pathname: "/",
        search: "",
        hash: "",
        state: null,
        key: "default"
      }, c),
      navigationType: Ct.Pop
    }
  }, x) : x;
}
function B2() {
  let e = J2(), t = F2(e) ? e.status + " " + e.statusText : e instanceof Error ? e.message : JSON.stringify(e), n = e instanceof Error ? e.stack : null, i = {
    padding: "0.5rem",
    backgroundColor: "rgba(200,200,200, 0.5)"
  };
  return /* @__PURE__ */ k.createElement(k.Fragment, null, /* @__PURE__ */ k.createElement("h2", null, "Unexpected Application Error!"), /* @__PURE__ */ k.createElement("h3", {
    style: {
      fontStyle: "italic"
    }
  }, t), n ? /* @__PURE__ */ k.createElement("pre", {
    style: i
  }, n) : null, null);
}
const H2 = /* @__PURE__ */ k.createElement(B2, null);
class K2 extends k.Component {
  constructor(t) {
    super(t), this.state = {
      location: t.location,
      revalidation: t.revalidation,
      error: t.error
    };
  }
  static getDerivedStateFromError(t) {
    return {
      error: t
    };
  }
  static getDerivedStateFromProps(t, n) {
    return n.location !== t.location || n.revalidation !== "idle" && t.revalidation === "idle" ? {
      error: t.error,
      location: t.location,
      revalidation: t.revalidation
    } : {
      error: t.error !== void 0 ? t.error : n.error,
      location: n.location,
      revalidation: t.revalidation || n.revalidation
    };
  }
  componentDidCatch(t, n) {
    console.error("React Router caught the following error during render", t, n);
  }
  render() {
    return this.state.error !== void 0 ? /* @__PURE__ */ k.createElement(rn.Provider, {
      value: this.props.routeContext
    }, /* @__PURE__ */ k.createElement(Rd.Provider, {
      value: this.state.error,
      children: this.props.component
    })) : this.props.children;
  }
}
function W2(e) {
  let {
    routeContext: t,
    match: n,
    children: r
  } = e, i = k.useContext(na);
  return i && i.static && i.staticContext && (n.route.errorElement || n.route.ErrorBoundary) && (i.staticContext._deepestRenderedBoundaryId = n.route.id), /* @__PURE__ */ k.createElement(rn.Provider, {
    value: t
  }, r);
}
function Q2(e, t, n, r) {
  var i;
  if (t === void 0 && (t = []), n === void 0 && (n = null), r === void 0 && (r = null), e == null) {
    var o;
    if ((o = n) != null && o.errors)
      e = n.matches;
    else
      return null;
  }
  let s = e, a = (i = n) == null ? void 0 : i.errors;
  if (a != null) {
    let c = s.findIndex((f) => f.route.id && (a == null ? void 0 : a[f.route.id]) !== void 0);
    c >= 0 || X(!1), s = s.slice(0, Math.min(s.length, c + 1));
  }
  let l = !1, u = -1;
  if (n && r && r.v7_partialHydration)
    for (let c = 0; c < s.length; c++) {
      let f = s[c];
      if ((f.route.HydrateFallback || f.route.hydrateFallbackElement) && (u = c), f.route.id) {
        let {
          loaderData: d,
          errors: h
        } = n, v = f.route.loader && d[f.route.id] === void 0 && (!h || h[f.route.id] === void 0);
        if (f.route.lazy || v) {
          l = !0, u >= 0 ? s = s.slice(0, u + 1) : s = [s[0]];
          break;
        }
      }
    }
  return s.reduceRight((c, f, d) => {
    let h, v = !1, x = null, C = null;
    n && (h = a && f.route.id ? a[f.route.id] : void 0, x = f.route.errorElement || H2, l && (u < 0 && d === 0 ? (v = !0, C = null) : u === d && (v = !0, C = f.route.hydrateFallbackElement || null)));
    let g = t.concat(s.slice(0, d + 1)), m = () => {
      let w;
      return h ? w = x : v ? w = C : f.route.Component ? w = /* @__PURE__ */ k.createElement(f.route.Component, null) : f.route.element ? w = f.route.element : w = c, /* @__PURE__ */ k.createElement(W2, {
        match: f,
        routeContext: {
          outlet: c,
          matches: g,
          isDataRoute: n != null
        },
        children: w
      });
    };
    return n && (f.route.ErrorBoundary || f.route.errorElement || d === 0) ? /* @__PURE__ */ k.createElement(K2, {
      location: n.location,
      revalidation: n.revalidation,
      component: x,
      error: h,
      children: m(),
      routeContext: {
        outlet: null,
        matches: g,
        isDataRoute: !0
      }
    }) : m();
  }, null);
}
var _d = /* @__PURE__ */ function(e) {
  return e.UseBlocker = "useBlocker", e.UseRevalidator = "useRevalidator", e.UseNavigateStable = "useNavigate", e;
}(_d || {}), Ji = /* @__PURE__ */ function(e) {
  return e.UseBlocker = "useBlocker", e.UseLoaderData = "useLoaderData", e.UseActionData = "useActionData", e.UseRouteError = "useRouteError", e.UseNavigation = "useNavigation", e.UseRouteLoaderData = "useRouteLoaderData", e.UseMatches = "useMatches", e.UseRevalidator = "useRevalidator", e.UseNavigateStable = "useNavigate", e.UseRouteId = "useRouteId", e;
}(Ji || {});
function Z2(e) {
  let t = k.useContext(na);
  return t || X(!1), t;
}
function Y2(e) {
  let t = k.useContext(z2);
  return t || X(!1), t;
}
function G2(e) {
  let t = k.useContext(rn);
  return t || X(!1), t;
}
function $d(e) {
  let t = G2(), n = t.matches[t.matches.length - 1];
  return n.route.id || X(!1), n.route.id;
}
function J2() {
  var e;
  let t = k.useContext(Rd), n = Y2(Ji.UseRouteError), r = $d(Ji.UseRouteError);
  return t !== void 0 ? t : (e = n.errors) == null ? void 0 : e[r];
}
function X2() {
  let {
    router: e
  } = Z2(_d.UseNavigateStable), t = $d(Ji.UseNavigateStable), n = k.useRef(!1);
  return Od(() => {
    n.current = !0;
  }), k.useCallback(function(i, o) {
    o === void 0 && (o = {}), n.current && (typeof i == "number" ? e.navigate(i) : e.navigate(i, _r({
      fromRouteId: t
    }, o)));
  }, [e, t]);
}
function ht(e) {
  X(!1);
}
function q2(e) {
  let {
    basename: t = "/",
    children: n = null,
    location: r,
    navigationType: i = Ct.Pop,
    navigator: o,
    static: s = !1,
    future: a
  } = e;
  Br() && X(!1);
  let l = t.replace(/^\/*/, "/"), u = k.useMemo(() => ({
    basename: l,
    navigator: o,
    static: s,
    future: _r({
      v7_relativeSplatPath: !1
    }, a)
  }), [l, a, o, s]);
  typeof r == "string" && (r = Un(r));
  let {
    pathname: c = "/",
    search: f = "",
    hash: d = "",
    state: h = null,
    key: v = "default"
  } = r, x = k.useMemo(() => {
    let C = ta(c, l);
    return C == null ? null : {
      location: {
        pathname: C,
        search: f,
        hash: d,
        state: h,
        key: v
      },
      navigationType: i
    };
  }, [l, c, f, d, h, v, i]);
  return x == null ? null : /* @__PURE__ */ k.createElement(nn.Provider, {
    value: u
  }, /* @__PURE__ */ k.createElement(Eo.Provider, {
    children: n,
    value: x
  }));
}
function e0(e) {
  let {
    children: t,
    location: n
  } = e;
  return D2(tl(t), n);
}
new Promise(() => {
});
function tl(e, t) {
  t === void 0 && (t = []);
  let n = [];
  return k.Children.forEach(e, (r, i) => {
    if (!/* @__PURE__ */ k.isValidElement(r))
      return;
    let o = [...t, i];
    if (r.type === k.Fragment) {
      n.push.apply(n, tl(r.props.children, o));
      return;
    }
    r.type !== ht && X(!1), !r.props.index || !r.props.children || X(!1);
    let s = {
      id: r.props.id || o.join("-"),
      caseSensitive: r.props.caseSensitive,
      element: r.props.element,
      Component: r.props.Component,
      index: r.props.index,
      path: r.props.path,
      loader: r.props.loader,
      action: r.props.action,
      errorElement: r.props.errorElement,
      ErrorBoundary: r.props.ErrorBoundary,
      hasErrorBoundary: r.props.ErrorBoundary != null || r.props.errorElement != null,
      shouldRevalidate: r.props.shouldRevalidate,
      handle: r.props.handle,
      lazy: r.props.lazy
    };
    r.props.children && (s.children = tl(r.props.children, o)), n.push(s);
  }), n;
}
/**
 * React Router DOM v6.24.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
function nl() {
  return nl = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, nl.apply(this, arguments);
}
function t0(e, t) {
  if (e == null) return {};
  var n = {}, r = Object.keys(e), i, o;
  for (o = 0; o < r.length; o++)
    i = r[o], !(t.indexOf(i) >= 0) && (n[i] = e[i]);
  return n;
}
function n0(e) {
  return !!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey);
}
function r0(e, t) {
  return e.button === 0 && // Ignore everything but left clicks
  (!t || t === "_self") && // Let browser handle "target=_blank" etc.
  !n0(e);
}
const i0 = ["onClick", "relative", "reloadDocument", "replace", "state", "target", "to", "preventScrollReset", "unstable_viewTransition"], o0 = "6";
try {
  window.__reactRouterVersion = o0;
} catch {
}
const s0 = "startTransition", Nu = ls[s0];
function l0(e) {
  let {
    basename: t,
    children: n,
    future: r,
    window: i
  } = e, o = k.useRef();
  o.current == null && (o.current = p2({
    window: i,
    v5Compat: !0
  }));
  let s = o.current, [a, l] = k.useState({
    action: s.action,
    location: s.location
  }), {
    v7_startTransition: u
  } = r || {}, c = k.useCallback((f) => {
    u && Nu ? Nu(() => l(f)) : l(f);
  }, [l, u]);
  return k.useLayoutEffect(() => s.listen(c), [s, c]), /* @__PURE__ */ k.createElement(q2, {
    basename: t,
    children: n,
    location: a.location,
    navigationType: a.action,
    navigator: s,
    future: r
  });
}
const a0 = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u", u0 = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i, et = /* @__PURE__ */ k.forwardRef(function(t, n) {
  let {
    onClick: r,
    relative: i,
    reloadDocument: o,
    replace: s,
    state: a,
    target: l,
    to: u,
    preventScrollReset: c,
    unstable_viewTransition: f
  } = t, d = t0(t, i0), {
    basename: h
  } = k.useContext(nn), v, x = !1;
  if (typeof u == "string" && u0.test(u) && (v = u, a0))
    try {
      let w = new URL(window.location.href), y = u.startsWith("//") ? new URL(w.protocol + u) : new URL(u), S = ta(y.pathname, h);
      y.origin === w.origin && S != null ? u = S + y.search + y.hash : x = !0;
    } catch {
    }
  let C = b2(u, {
    relative: i
  }), g = c0(u, {
    replace: s,
    state: a,
    target: l,
    preventScrollReset: c,
    relative: i,
    unstable_viewTransition: f
  });
  function m(w) {
    r && r(w), w.defaultPrevented || g(w);
  }
  return (
    // eslint-disable-next-line jsx-a11y/anchor-has-content
    /* @__PURE__ */ k.createElement("a", nl({}, d, {
      href: v || C,
      onClick: x || o ? r : m,
      ref: n,
      target: l
    }))
  );
});
var ju;
(function(e) {
  e.UseScrollRestoration = "useScrollRestoration", e.UseSubmit = "useSubmit", e.UseSubmitFetcher = "useSubmitFetcher", e.UseFetcher = "useFetcher", e.useViewTransitionState = "useViewTransitionState";
})(ju || (ju = {}));
var Lu;
(function(e) {
  e.UseFetcher = "useFetcher", e.UseFetchers = "useFetchers", e.UseScrollRestoration = "useScrollRestoration";
})(Lu || (Lu = {}));
function c0(e, t) {
  let {
    target: n,
    replace: r,
    state: i,
    preventScrollReset: o,
    relative: s,
    unstable_viewTransition: a
  } = t === void 0 ? {} : t, l = No(), u = ko(), c = Td(e, {
    relative: s
  });
  return k.useCallback((f) => {
    if (r0(f, n)) {
      f.preventDefault();
      let d = r !== void 0 ? r : Gi(u) === Gi(c);
      l(e, {
        replace: d,
        state: i,
        preventScrollReset: o,
        relative: s,
        unstable_viewTransition: a
      });
    }
  }, [u, l, c, r, i, n, e, o, s, a]);
}
var f0 = {
  area: !0,
  base: !0,
  br: !0,
  col: !0,
  embed: !0,
  hr: !0,
  img: !0,
  input: !0,
  link: !0,
  meta: !0,
  param: !0,
  source: !0,
  track: !0,
  wbr: !0
};
const d0 = /* @__PURE__ */ io(f0);
var p0 = /\s([^'"/\s><]+?)[\s/>]|([^\s=]+)=\s?(".*?"|'.*?')/g;
function Pu(e) {
  var t = { type: "tag", name: "", voidElement: !1, attrs: {}, children: [] }, n = e.match(/<\/?([^\s]+?)[/\s>]/);
  if (n && (t.name = n[1], (d0[n[1]] || e.charAt(e.length - 2) === "/") && (t.voidElement = !0), t.name.startsWith("!--"))) {
    var r = e.indexOf("-->");
    return { type: "comment", comment: r !== -1 ? e.slice(4, r) : "" };
  }
  for (var i = new RegExp(p0), o = null; (o = i.exec(e)) !== null; ) if (o[0].trim()) if (o[1]) {
    var s = o[1].trim(), a = [s, ""];
    s.indexOf("=") > -1 && (a = s.split("=")), t.attrs[a[0]] = a[1], i.lastIndex--;
  } else o[2] && (t.attrs[o[2]] = o[3].trim().substring(1, o[3].length - 1));
  return t;
}
var h0 = /<[a-zA-Z0-9\-\!\/](?:"[^"]*"|'[^']*'|[^'">])*>/g, m0 = /^\s*$/, g0 = /* @__PURE__ */ Object.create(null);
function Md(e, t) {
  switch (t.type) {
    case "text":
      return e + t.content;
    case "tag":
      return e += "<" + t.name + (t.attrs ? function(n) {
        var r = [];
        for (var i in n) r.push(i + '="' + n[i] + '"');
        return r.length ? " " + r.join(" ") : "";
      }(t.attrs) : "") + (t.voidElement ? "/>" : ">"), t.voidElement ? e : e + t.children.reduce(Md, "") + "</" + t.name + ">";
    case "comment":
      return e + "<!--" + t.comment + "-->";
  }
}
var v0 = { parse: function(e, t) {
  t || (t = {}), t.components || (t.components = g0);
  var n, r = [], i = [], o = -1, s = !1;
  if (e.indexOf("<") !== 0) {
    var a = e.indexOf("<");
    r.push({ type: "text", content: a === -1 ? e : e.substring(0, a) });
  }
  return e.replace(h0, function(l, u) {
    if (s) {
      if (l !== "</" + n.name + ">") return;
      s = !1;
    }
    var c, f = l.charAt(1) !== "/", d = l.startsWith("<!--"), h = u + l.length, v = e.charAt(h);
    if (d) {
      var x = Pu(l);
      return o < 0 ? (r.push(x), r) : ((c = i[o]).children.push(x), r);
    }
    if (f && (o++, (n = Pu(l)).type === "tag" && t.components[n.name] && (n.type = "component", s = !0), n.voidElement || s || !v || v === "<" || n.children.push({ type: "text", content: e.slice(h, e.indexOf("<", h)) }), o === 0 && r.push(n), (c = i[o - 1]) && c.children.push(n), i[o] = n), (!f || n.voidElement) && (o > -1 && (n.voidElement || n.name === l.slice(2, -1)) && (o--, n = o === -1 ? r : i[o]), !s && v !== "<" && v)) {
      c = o === -1 ? r : i[o].children;
      var C = e.indexOf("<", h), g = e.slice(h, C === -1 ? void 0 : C);
      m0.test(g) && (g = " "), (C > -1 && o + c.length >= 0 || g !== " ") && c.push({ type: "text", content: g });
    }
  }), r;
}, stringify: function(e) {
  return e.reduce(function(t, n) {
    return t + Md("", n);
  }, "");
} };
function ki() {
  if (console && console.warn) {
    for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
      t[n] = arguments[n];
    typeof t[0] == "string" && (t[0] = `react-i18next:: ${t[0]}`), console.warn(...t);
  }
}
const Ru = {};
function Xi() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  typeof t[0] == "string" && Ru[t[0]] || (typeof t[0] == "string" && (Ru[t[0]] = /* @__PURE__ */ new Date()), ki(...t));
}
const Id = (e, t) => () => {
  if (e.isInitialized)
    t();
  else {
    const n = () => {
      setTimeout(() => {
        e.off("initialized", n);
      }, 0), t();
    };
    e.on("initialized", n);
  }
};
function Ou(e, t, n) {
  e.loadNamespaces(t, Id(e, n));
}
function Tu(e, t, n, r) {
  typeof n == "string" && (n = [n]), n.forEach((i) => {
    e.options.ns.indexOf(i) < 0 && e.options.ns.push(i);
  }), e.loadLanguages(t, Id(e, r));
}
function y0(e, t) {
  let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
  const r = t.languages[0], i = t.options ? t.options.fallbackLng : !1, o = t.languages[t.languages.length - 1];
  if (r.toLowerCase() === "cimode") return !0;
  const s = (a, l) => {
    const u = t.services.backendConnector.state[`${a}|${l}`];
    return u === -1 || u === 2;
  };
  return n.bindI18n && n.bindI18n.indexOf("languageChanging") > -1 && t.services.backendConnector.backend && t.isLanguageChangingTo && !s(t.isLanguageChangingTo, e) ? !1 : !!(t.hasResourceBundle(r, e) || !t.services.backendConnector.backend || t.options.resources && !t.options.partialBundledLanguages || s(r, e) && (!i || s(o, e)));
}
function w0(e, t) {
  let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
  return !t.languages || !t.languages.length ? (Xi("i18n.languages were undefined or empty", t.languages), !0) : t.options.ignoreJSONStructure !== void 0 ? t.hasLoadedNamespace(e, {
    lng: n.lng,
    precheck: (i, o) => {
      if (n.bindI18n && n.bindI18n.indexOf("languageChanging") > -1 && i.services.backendConnector.backend && i.isLanguageChangingTo && !o(i.isLanguageChangingTo, e)) return !1;
    }
  }) : y0(e, t, n);
}
const x0 = /&(?:amp|#38|lt|#60|gt|#62|apos|#39|quot|#34|nbsp|#160|copy|#169|reg|#174|hellip|#8230|#x2F|#47);/g, C0 = {
  "&amp;": "&",
  "&#38;": "&",
  "&lt;": "<",
  "&#60;": "<",
  "&gt;": ">",
  "&#62;": ">",
  "&apos;": "'",
  "&#39;": "'",
  "&quot;": '"',
  "&#34;": '"',
  "&nbsp;": " ",
  "&#160;": " ",
  "&copy;": "©",
  "&#169;": "©",
  "&reg;": "®",
  "&#174;": "®",
  "&hellip;": "…",
  "&#8230;": "…",
  "&#x2F;": "/",
  "&#47;": "/"
}, S0 = (e) => C0[e], E0 = (e) => e.replace(x0, S0);
let rl = {
  bindI18n: "languageChanged",
  bindI18nStore: "",
  transEmptyNodeValue: "",
  transSupportBasicHtmlNodes: !0,
  transWrapTextNodes: "",
  transKeepBasicHtmlNodesFor: ["br", "strong", "i", "p"],
  useSuspense: !0,
  unescape: E0
};
function k0() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
  rl = {
    ...rl,
    ...e
  };
}
function Fd() {
  return rl;
}
let Ad;
function N0(e) {
  Ad = e;
}
function ra() {
  return Ad;
}
function ns(e, t) {
  if (!e) return !1;
  const n = e.props ? e.props.children : e.children;
  return t ? n.length > 0 : !!n;
}
function rs(e) {
  if (!e) return [];
  const t = e.props ? e.props.children : e.children;
  return e.props && e.props.i18nIsDynamicList ? Sn(t) : t;
}
function j0(e) {
  return Object.prototype.toString.call(e) !== "[object Array]" ? !1 : e.every((t) => k.isValidElement(t));
}
function Sn(e) {
  return Array.isArray(e) ? e : [e];
}
function L0(e, t) {
  const n = {
    ...t
  };
  return n.props = Object.assign(e.props, t.props), n;
}
function zd(e, t) {
  if (!e) return "";
  let n = "";
  const r = Sn(e), i = t.transSupportBasicHtmlNodes && t.transKeepBasicHtmlNodesFor ? t.transKeepBasicHtmlNodesFor : [];
  return r.forEach((o, s) => {
    if (typeof o == "string")
      n += `${o}`;
    else if (k.isValidElement(o)) {
      const a = Object.keys(o.props).length, l = i.indexOf(o.type) > -1, u = o.props.children;
      if (!u && l && a === 0)
        n += `<${o.type}/>`;
      else if (!u && (!l || a !== 0))
        n += `<${s}></${s}>`;
      else if (o.props.i18nIsDynamicList)
        n += `<${s}></${s}>`;
      else if (l && a === 1 && typeof u == "string")
        n += `<${o.type}>${u}</${o.type}>`;
      else {
        const c = zd(u, t);
        n += `<${s}>${c}</${s}>`;
      }
    } else if (o === null)
      ki("Trans: the passed in value is invalid - seems you passed in a null child.");
    else if (typeof o == "object") {
      const {
        format: a,
        ...l
      } = o, u = Object.keys(l);
      if (u.length === 1) {
        const c = a ? `${u[0]}, ${a}` : u[0];
        n += `{{${c}}}`;
      } else
        ki("react-i18next: the passed in object contained more than one variable - the object should look like {{ value, format }} where format is optional.", o);
    } else
      ki("Trans: the passed in value is invalid - seems you passed in a variable like {number} - please pass in variables for interpolation as full objects like {{number}}.", o);
  }), n;
}
function P0(e, t, n, r, i, o) {
  if (t === "") return [];
  const s = r.transKeepBasicHtmlNodesFor || [], a = t && new RegExp(s.map((C) => `<${C}`).join("|")).test(t);
  if (!e && !a && !o) return [t];
  const l = {};
  function u(C) {
    Sn(C).forEach((m) => {
      typeof m != "string" && (ns(m) ? u(rs(m)) : typeof m == "object" && !k.isValidElement(m) && Object.assign(l, m));
    });
  }
  u(e);
  const c = v0.parse(`<0>${t}</0>`), f = {
    ...l,
    ...i
  };
  function d(C, g, m) {
    const w = rs(C), y = v(w, g.children, m);
    return j0(w) && y.length === 0 || C.props && C.props.i18nIsDynamicList ? w : y;
  }
  function h(C, g, m, w, y) {
    C.dummy ? (C.children = g, m.push(k.cloneElement(C, {
      key: w
    }, y ? void 0 : g))) : m.push(...k.Children.map([C], (S) => {
      const E = {
        ...S.props
      };
      return delete E.i18nIsDynamicList, k.createElement(S.type, {
        ...E,
        key: w,
        ref: S.ref
      }, y ? null : g);
    }));
  }
  function v(C, g, m) {
    const w = Sn(C);
    return Sn(g).reduce((S, E, N) => {
      const L = E.children && E.children[0] && E.children[0].content && n.services.interpolator.interpolate(E.children[0].content, f, n.language);
      if (E.type === "tag") {
        let _ = w[parseInt(E.name, 10)];
        m.length === 1 && !_ && (_ = m[0][E.name]), _ || (_ = {});
        const R = Object.keys(E.attrs).length !== 0 ? L0({
          props: E.attrs
        }, _) : _, F = k.isValidElement(R), Z = F && ns(E, !0) && !E.voidElement, te = a && typeof R == "object" && R.dummy && !F, se = typeof e == "object" && e !== null && Object.hasOwnProperty.call(e, E.name);
        if (typeof R == "string") {
          const z = n.services.interpolator.interpolate(R, f, n.language);
          S.push(z);
        } else if (ns(R) || Z) {
          const z = d(R, E, m);
          h(R, z, S, N);
        } else if (te) {
          const z = v(w, E.children, m);
          h(R, z, S, N);
        } else if (Number.isNaN(parseFloat(E.name)))
          if (se) {
            const z = d(R, E, m);
            h(R, z, S, N, E.voidElement);
          } else if (r.transSupportBasicHtmlNodes && s.indexOf(E.name) > -1)
            if (E.voidElement)
              S.push(k.createElement(E.name, {
                key: `${E.name}-${N}`
              }));
            else {
              const z = v(w, E.children, m);
              S.push(k.createElement(E.name, {
                key: `${E.name}-${N}`
              }, z));
            }
          else if (E.voidElement)
            S.push(`<${E.name} />`);
          else {
            const z = v(w, E.children, m);
            S.push(`<${E.name}>${z}</${E.name}>`);
          }
        else if (typeof R == "object" && !F) {
          const z = E.children[0] ? L : null;
          z && S.push(z);
        } else
          h(R, L, S, N, E.children.length !== 1 || !L);
      } else if (E.type === "text") {
        const _ = r.transWrapTextNodes, R = o ? r.unescape(n.services.interpolator.interpolate(E.content, f, n.language)) : n.services.interpolator.interpolate(E.content, f, n.language);
        _ ? S.push(k.createElement(_, {
          key: `${E.name}-${N}`
        }, R)) : S.push(R);
      }
      return S;
    }, []);
  }
  const x = v([{
    dummy: !0,
    children: e || []
  }], c, Sn(e || []));
  return rs(x[0]);
}
function R0(e) {
  let {
    children: t,
    count: n,
    parent: r,
    i18nKey: i,
    context: o,
    tOptions: s = {},
    values: a,
    defaults: l,
    components: u,
    ns: c,
    i18n: f,
    t: d,
    shouldUnescape: h,
    ...v
  } = e;
  const x = f || ra();
  if (!x)
    return Xi("You will need to pass in an i18next instance by using i18nextReactModule"), t;
  const C = d || x.t.bind(x) || ((Z) => Z), g = {
    ...Fd(),
    ...x.options && x.options.react
  };
  let m = c || C.ns || x.options && x.options.defaultNS;
  m = typeof m == "string" ? [m] : m || ["translation"];
  const w = zd(t, g), y = l || w || g.transEmptyNodeValue || i, {
    hashTransKey: S
  } = g, E = i || (S ? S(w || y) : w || y);
  x.options && x.options.interpolation && x.options.interpolation.defaultVariables && (a = a && Object.keys(a).length > 0 ? {
    ...a,
    ...x.options.interpolation.defaultVariables
  } : {
    ...x.options.interpolation.defaultVariables
  });
  const N = a || n !== void 0 || !t ? s.interpolation : {
    interpolation: {
      ...s.interpolation,
      prefix: "#$?",
      suffix: "?$#"
    }
  }, L = {
    ...s,
    context: o || s.context,
    count: n,
    ...a,
    ...N,
    defaultValue: y,
    ns: m
  }, _ = E ? C(E, L) : y;
  u && Object.keys(u).forEach((Z) => {
    const te = u[Z];
    if (typeof te.type == "function" || !te.props || !te.props.children || _.indexOf(`${Z}/>`) < 0 && _.indexOf(`${Z} />`) < 0) return;
    function se() {
      return k.createElement(k.Fragment, null, te);
    }
    u[Z] = k.createElement(se);
  });
  const R = P0(u || t, _, x, g, L, h), F = r !== void 0 ? r : g.defaultTransParent;
  return F ? k.createElement(F, v, R) : R;
}
const O0 = {
  type: "3rdParty",
  init(e) {
    k0(e.options.react), N0(e);
  }
}, bd = k.createContext();
class T0 {
  constructor() {
    this.usedNamespaces = {};
  }
  addUsedNamespaces(t) {
    t.forEach((n) => {
      this.usedNamespaces[n] || (this.usedNamespaces[n] = !0);
    });
  }
  getUsedNamespaces() {
    return Object.keys(this.usedNamespaces);
  }
}
function tt(e) {
  let {
    children: t,
    count: n,
    parent: r,
    i18nKey: i,
    context: o,
    tOptions: s = {},
    values: a,
    defaults: l,
    components: u,
    ns: c,
    i18n: f,
    t: d,
    shouldUnescape: h,
    ...v
  } = e;
  const {
    i18n: x,
    defaultNS: C
  } = k.useContext(bd) || {}, g = f || x || ra(), m = d || g && g.t.bind(g);
  return R0({
    children: t,
    count: n,
    parent: r,
    i18nKey: i,
    context: o,
    tOptions: s,
    values: a,
    defaults: l,
    components: u,
    ns: c || m && m.ns || C || g && g.options && g.options.defaultNS,
    i18n: g,
    t: d,
    shouldUnescape: h,
    ...v
  });
}
const _0 = (e, t) => {
  const n = k.useRef();
  return k.useEffect(() => {
    n.current = e;
  }, [e, t]), n.current;
};
function Ud(e, t, n, r) {
  return e.getFixedT(t, n, r);
}
function $0(e, t, n, r) {
  return k.useCallback(Ud(e, t, n, r), [e, t, n, r]);
}
function ct(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  const {
    i18n: n
  } = t, {
    i18n: r,
    defaultNS: i
  } = k.useContext(bd) || {}, o = n || r || ra();
  if (o && !o.reportNamespaces && (o.reportNamespaces = new T0()), !o) {
    Xi("You will need to pass in an i18next instance by using initReactI18next");
    const y = (E, N) => typeof N == "string" ? N : N && typeof N == "object" && typeof N.defaultValue == "string" ? N.defaultValue : Array.isArray(E) ? E[E.length - 1] : E, S = [y, {}, !1];
    return S.t = y, S.i18n = {}, S.ready = !1, S;
  }
  o.options.react && o.options.react.wait !== void 0 && Xi("It seems you are still using the old wait option, you may migrate to the new useSuspense behaviour.");
  const s = {
    ...Fd(),
    ...o.options.react,
    ...t
  }, {
    useSuspense: a,
    keyPrefix: l
  } = s;
  let u = i || o.options && o.options.defaultNS;
  u = typeof u == "string" ? [u] : u || ["translation"], o.reportNamespaces.addUsedNamespaces && o.reportNamespaces.addUsedNamespaces(u);
  const c = (o.isInitialized || o.initializedStoreOnce) && u.every((y) => w0(y, o, s)), f = $0(o, t.lng || null, s.nsMode === "fallback" ? u : u[0], l), d = () => f, h = () => Ud(o, t.lng || null, s.nsMode === "fallback" ? u : u[0], l), [v, x] = k.useState(d);
  let C = u.join();
  t.lng && (C = `${t.lng}${C}`);
  const g = _0(C), m = k.useRef(!0);
  k.useEffect(() => {
    const {
      bindI18n: y,
      bindI18nStore: S
    } = s;
    m.current = !0, !c && !a && (t.lng ? Tu(o, t.lng, u, () => {
      m.current && x(h);
    }) : Ou(o, u, () => {
      m.current && x(h);
    })), c && g && g !== C && m.current && x(h);
    function E() {
      m.current && x(h);
    }
    return y && o && o.on(y, E), S && o && o.store.on(S, E), () => {
      m.current = !1, y && o && y.split(" ").forEach((N) => o.off(N, E)), S && o && S.split(" ").forEach((N) => o.store.off(N, E));
    };
  }, [o, C]), k.useEffect(() => {
    m.current && c && x(d);
  }, [o, l, c]);
  const w = [v, o, c];
  if (w.t = v, w.i18n = o, w.ready = c, c || !c && !a) return w;
  throw new Promise((y) => {
    t.lng ? Tu(o, t.lng, u, () => y()) : Ou(o, u, () => y());
  });
}
const M0 = "Management", I0 = "Comment", F0 = "Login", A0 = "Logout", z0 = "Register", b0 = "Email", U0 = "Password", D0 = "Nickname", V0 = "Personal Website", B0 = "Setting", H0 = "Profile", K0 = "Homepage", W0 = "All", Q0 = "Mine", Z0 = "Approved", Y0 = "Waiting", G0 = "Spam", J0 = "Sticky", X0 = "Edit", q0 = "Reply", em = "Action", tm = "Filter", nm = "Author", rm = "Content", im = "Username", om = "Submit", sm = "Cancel", lm = "At", am = "Migration", um = "Exporting…", cm = "Under verification", fm = "Administrator", dm = "Guest", pm = "User", hm = "Role", ai = {
  management: M0,
  comment: I0,
  login: F0,
  logout: A0,
  register: z0,
  email: b0,
  password: U0,
  "remember me": "Remember me",
  "back to home": "Back to Home",
  "please input email": "Please input email!",
  "please input password": "Please input password!",
  "email or password error": "Email or Password error!",
  nickname: D0,
  website: V0,
  "password again": "Password Again",
  "register.login": "Login",
  "nickname illegal": "Nickname Illegal!",
  "passwords don't match": "Passwords don't match",
  setting: B0,
  profile: H0,
  "go to gravatar to change avatar": "Go to Gravatar to change avatar",
  homepage: K0,
  "homepage tips": "Current users' homepage. It must be start with <1>http://</1> or <1>https://</1>.",
  "update my profile": "Update my profile",
  "connect to social account": "Connect to Social Account",
  "change password": "Change Password",
  "update password": "Update password",
  "password tips": "It's recommended to use a mixed style of special characters, letters and numbers to increase system security.",
  "password again tips": "Please confirm your password, consistent with the password entered above.",
  "nickname and homepage are required": "Both nickname and personal homepage are required fields.",
  all: W0,
  mine: Q0,
  approved: Z0,
  "approved button": "Approved",
  waiting: Y0,
  spam: G0,
  "mark as spam": "Mark as Spam",
  "disable sticky": "Disable sticky",
  sticky: J0,
  edit: X0,
  reply: q0,
  delete: "Delete",
  "delete one confirm": "Are you sure you want to delete {{nick}}'s comment?",
  "delete multiple confirm": "Are you sure you want to delete these comments?",
  "manage comments": "Manage Comments",
  "select all": "Select All",
  action: em,
  "selected items": "Selected Action",
  "please input keywords": "Please input keywords",
  filter: tm,
  author: nm,
  content: rm,
  username: im,
  submit: om,
  cancel: sm,
  at: lm,
  "get userinfo failed": "Get userinfo failed!",
  "register success! please go to your mailbox to verify it!": "Register success! Please go to your mailbox to verify it!",
  migration: am,
  exporting: um,
  export: "Export",
  import: "Import",
  "import success": "Import Success",
  "import clear data confirm": "Notice! All current data will be overwrited by importing data, do you really want to continue?",
  "importing {{importedLength}}/{{maxLength}}": "Importing {{importedLength}}/{{maxLength}}",
  "comment data index relationship reconstruction": "Comment data index relationship reconstruction",
  "index updating {{importedLength}}/{{maxLength}}": "Index updating {{importedLength}}/{{maxLength}}",
  "please input avatar url": "Please input avatar URL",
  "change avatar": "Change avatar",
  "minimum 6 characters required": "Minimum 6 characters required!",
  "close 2fa confirm": "Two-step verification can greatly improve the security of your account. Are you sure to turn it off?",
  "two factor auth": "Two-step verification",
  "enable 2fa": "Enable Two-step verification",
  "disable 2fa": "Disable Two-step verification",
  "2fa description 1": 'Two-step verification, as can be seen from the name, "two-step" is the focus of 2FA, and 2FA in a broad sense refers to providing a variety of solutions to complete user authorization authentication.',
  "2fa description 2": "After enabling two-step verification, to log in to the background of the system, in addition to the user name and password, additional tokens must be provided, which can greatly improve the security of the system.",
  "next step": "Next Step",
  "download 2fa app": "Download Two-step verification app",
  "open app and scan qrcode": "Open the Two-step verification app and scan the QR code below",
  "input 2fa code": "Input Two-step verification code",
  "2fa code": "Two-step verification code",
  "forgot password": "Forgot Password",
  "get new password": "Get a new password",
  "you will receive an email which contains a link to create new password": "You'll receive an email which contains a link to create new password.",
  "find password success! please go to your mailbox to reset it!": "The reset password email has been sent successfully, please check it in your mailbox!",
  "find password error! try again later": "Failed to send reset password email, please try again later!",
  "set administrator": "Set Admin",
  "set guest": "Set Guest",
  "set label": "Set Label",
  verify: cm,
  administrator: fm,
  guest: dm,
  user: pm,
  "manage users": "Manage Users",
  role: hm,
  "exclusive label": "Exclusive Label",
  "You can't set yourself to be guest!": "You can't set yourself to be guest!",
  "please enter an exclusive label": "Please enter an exclusive label",
  "new version tips": "New version @waline/vercel@{{version}} published, please upgrade it! Goto <a href='https://waline.js.org/en/advanced/faq.html#server' target='_blank'>FAQ</a> to find How to upgrade it."
}, mm = "管理", gm = "评论", vm = "登录", ym = "登出", wm = "用户注册", xm = "邮箱", Cm = "密码", Sm = "昵称", Em = "个人网站", km = "个人设置", Nm = "个人资料", jm = "个人主页地址", Lm = "所有", Pm = "我的", Rm = "已通过", Om = "待审核", Tm = "垃圾", _m = "置顶评论", $m = "编辑", Mm = "回复", Im = "操作", Fm = "筛选", Am = "作者", zm = "内容", bm = "用户名", Um = "提交", Dm = "取消", Vm = "于", Bm = "导入导出", Hm = "导出中...", Km = "待认证", Wm = "管理员", Qm = "普通用户", Zm = "用户", Ym = "角色", _u = {
  management: mm,
  comment: gm,
  login: vm,
  logout: ym,
  register: wm,
  email: xm,
  password: Cm,
  "remember me": "下次自动登录",
  "back to home": "返回首页",
  "please input email": "请输入邮箱",
  "please input password": "请输入密码",
  "email or password error": "账号密码错误",
  nickname: Sm,
  website: Em,
  "password again": "再次输入密码",
  "register.login": "用户登录",
  "nickname illegal": "请输入正确的昵称",
  "passwords don't match": "两次密码不一致",
  setting: km,
  profile: Nm,
  "go to gravatar to change avatar": "在 Gravatar 上修改头像",
  homepage: jm,
  "homepage tips": "此用户的个人主页地址, 请用 <1>http://</1> 或 <1>https://</1> 开头.",
  "update my profile": "更新我的档案",
  "connect to social account": "账号绑定",
  "change password": "密码修改",
  "update password": "更新密码",
  "password tips": "为此用户分配一个密码.<br />建议使用特殊字符与字母、数字的混编样式,以增加系统安全性.",
  "password again tips": "请确认你的密码, 与上面输入的密码保持一致.",
  "nickname and homepage are required": "昵称和个人主页都是必填字段",
  all: Lm,
  mine: Pm,
  approved: Rm,
  "approved button": "通过",
  waiting: Om,
  spam: Tm,
  "mark as spam": "标记垃圾",
  "disable sticky": "取消置顶",
  sticky: _m,
  edit: $m,
  reply: Mm,
  delete: "删除",
  "delete one confirm": "你确认要删除{{nick}}的评论吗？",
  "delete multiple confirm": "你确认要删除这些评论吗？",
  "manage comments": "管理评论",
  "select all": "全选",
  action: Im,
  "selected items": "选中项",
  "please input keywords": "请输入关键字",
  filter: Fm,
  author: Am,
  content: zm,
  username: bm,
  submit: Um,
  cancel: Dm,
  at: Vm,
  "get userinfo failed": "获取用户信息失败",
  "register success! please go to your mailbox to verify it!": "注册成功！请到你的个人邮箱中确认注册！",
  migration: Bm,
  exporting: Hm,
  export: "导出",
  import: "导入",
  "import success": "导入成功",
  "import clear data confirm": "注意！导入数据会覆盖当前所有数据，请确认是否继续操作？",
  "importing {{importedLength}}/{{maxLength}}": "开始导入 {{importedLength}}/{{maxLength}}",
  "comment data index relationship reconstruction": "评论数据索引重建中",
  "index updating {{importedLength}}/{{maxLength}}": "索引更新 {{importedLength}}/{{maxLength}}",
  "please input avatar url": "请输入 URL",
  "change avatar": "修改头像",
  "minimum 6 characters required": "请输入 6 位验证码",
  "close 2fa confirm": "两步验证可以大大提升账户的安全性，确定关闭吗？",
  "two factor auth": "两步验证",
  "enable 2fa": "开启两步验证",
  "disable 2fa": "关闭两步验证",
  "2fa description 1": "两步验证，对应的英文是 Two-factor Authentication(2FA)，或者 Two-step Verification。从名字可以看出， 「两步」是 2FA 的重点，广义的 2FA 是指提供多种方案完成用户权限鉴定。",
  "2fa description 2": "开启两步验证后，登录系统后台，除了要提供用户名和密码外，还要提供额外的 Token，这样可以大大提高系统的安全性。",
  "next step": "下一步",
  "download 2fa app": "下载对应的应用",
  "open app and scan qrcode": "打开两步验证的应用，扫描下面的二维码",
  "input 2fa code": "填写 6 位验证码",
  "2fa code": "两步验证码",
  "forgot password": "忘记密码",
  "get new password": "获取新密码",
  "you will receive an email which contains a link to create new password": "您会收到一封包含创建新密码链接的电子邮件。",
  "find password success! please go to your mailbox to reset it!": "重置密码邮件发送成功，请去邮箱中查收！",
  "find password error! try again later": "重置密码邮件发送失败，请稍后再试！",
  "set administrator": "成为管理员",
  "set guest": "成为普通用户",
  "set label": "设置专属标签",
  verify: Km,
  administrator: Wm,
  guest: Qm,
  user: Zm,
  "manage users": "管理用户",
  role: Ym,
  "exclusive label": "专属标签",
  "You can't set yourself to be guest!": "你不能将自己设置为普通用户！",
  "please enter an exclusive label": "请输入专属标签",
  "new version tips": '新版本 @waline/vercel@{{version}} 已发布，请尽快升级！查看 <a href="https://waline.js.org/advanced/faq.html#server" target="_blank">FAQ</a> 了解如何升级。'
}, Gm = "管理", Jm = "留言", Xm = "登入", qm = "登出", eg = "使用者註冊", tg = "信箱", ng = "密碼", rg = "暱稱", ig = "個人網站", og = "個人設定", sg = "個人資料", lg = "個人首頁網址", ag = "所有", ug = "我的", cg = "已通過", fg = "待審核", dg = "垃圾", pg = "置頂留言", hg = "編輯", mg = "回覆", gg = "動作", vg = "篩選", yg = "作者", wg = "內容", xg = "使用者名稱", Cg = "送出", Sg = "取消", Eg = "於", kg = "匯入匯出", Ng = "匯出中...", jg = "待認證", Lg = "管理員", Pg = "使用者", Rg = "使用者", Og = "角色", Tg = {
  management: Gm,
  comment: Jm,
  login: Xm,
  logout: qm,
  register: eg,
  email: tg,
  password: ng,
  "remember me": "下次自動登入",
  "back to home": "回到首頁",
  "please input email": "請輸入信箱",
  "please input password": "請輸入密碼",
  "email or password error": "帳號密碼錯誤",
  nickname: rg,
  website: ig,
  "password again": "再次輸入密碼",
  "register.login": "使用者登入",
  "nickname illegal": "請輸入正確的暱稱",
  "passwords don't match": "兩次密碼不一致",
  setting: og,
  profile: sg,
  "go to gravatar to change avatar": "在 Gravatar 上修改頭像",
  homepage: lg,
  "homepage tips": "此使用者的個人首頁網址, 請用 <1>http://</1> 或 <1>https://</1> 開頭.",
  "update my profile": "更新我的檔案",
  "connect to social account": "帳號綁定",
  "change password": "密碼修改",
  "update password": "更新密碼",
  "password tips": "為此使用者指定一個密碼.<br />建議使用特殊符號與字母、數字的混合格式,以增加系統安全性.",
  "password again tips": "請確認你的密碼, 與上面輸入的密碼保持一致.",
  "nickname and homepage are required": "暱稱和個人首頁都是必填欄位",
  all: ag,
  mine: ug,
  approved: cg,
  "approved button": "通過",
  waiting: fg,
  spam: dg,
  "mark as spam": "標記垃圾",
  "disable sticky": "取消置頂",
  sticky: pg,
  edit: hg,
  reply: mg,
  delete: "刪除",
  "delete one confirm": "你確認要刪除{{nick}}的留言嗎？",
  "delete multiple confirm": "你確認要刪除這些留言嗎？",
  "manage comments": "留言管理",
  "select all": "全選",
  action: gg,
  "selected items": "批次管理",
  "please input keywords": "請輸入關鍵字",
  filter: vg,
  author: yg,
  content: wg,
  username: xg,
  submit: Cg,
  cancel: Sg,
  at: Eg,
  "get userinfo failed": "取得使用者資料失敗",
  "register success! please go to your mailbox to verify it!": "註冊成功！請到你的個人信箱中確認註冊資訊！",
  migration: kg,
  exporting: Ng,
  export: "匯出",
  import: "匯入",
  "import success": "匯入成功",
  "import clear data confirm": "注意！匯入資料會覆蓋目前所有資料，請確認是否繼續？",
  "importing {{importedLength}}/{{maxLength}}": "開始導入 {{importedLength}}/{{maxLength}}",
  "comment data index relationship reconstruction": "留言資料索引重建中",
  "index updating {{importedLength}}/{{maxLength}}": "索引更新 {{importedLength}}/{{maxLength}}",
  "please input avatar url": "請輸入頭像 URL",
  "change avatar": "修改頭像",
  "minimum 6 characters required": "請輸入 6 位驗證碼",
  "close 2fa confirm": "兩步驟驗證可以大大提升帳戶的安全性，確定關閉嗎？",
  "two factor auth": "兩步驟驗證",
  "enable 2fa": "開啟兩步驟驗證",
  "disable 2fa": "關閉兩步驟驗證",
  "2fa description 1": "兩步驟驗證，對應的英文是 Two-factor Authentication(2FA)，或者 Two-step Verification。從名字可以看出， 「兩步驟」是 2FA 的重點，廣義的 2FA 是指提供多種方法完成使用者身分識別。",
  "2fa description 2": "開啟兩步驟驗證後，登入系統後台時，除了要提供使用者名稱和密碼外，還要提供額外的 Token，這樣可以大大提高系統的安全性。",
  "next step": "下一步",
  "download 2fa app": "下載對應的應用",
  "open app and scan qrcode": "打開兩步驟驗證的應用程式，掃描下面的QR Code",
  "input 2fa code": "填寫 6 位驗證碼",
  "2fa code": "兩步驟驗證碼",
  "forgot password": "忘記密碼",
  "get new password": "取得新密碼",
  "you will receive an email which contains a link to create new password": "您會收到一封包含建立新密碼連結的電子郵件。",
  "find password success! please go to your mailbox to reset it!": "重設密碼郵件發送成功，請到信箱中確認！",
  "find password error! try again later": "重設密碼郵件發送失敗，請稍後再試！",
  "set administrator": "成為管理員",
  "set guest": "成為使用者",
  "set label": "設定專屬標籤",
  verify: jg,
  administrator: Lg,
  guest: Pg,
  user: Rg,
  "manage users": "使用者管理",
  role: Og,
  "exclusive label": "專屬標籤",
  "You can't set yourself to be guest!": "你不能將自己設定為使用者！",
  "please enter an exclusive label": "請輸入專屬標籤",
  "new version tips": '新版本 @waline/vercel@{{version}} 已發佈，請盡快升級！檢視 <a href="https://waline.js.org/en/advanced/faq.html#server" target="_blank">FAQ</a> 了解如何升級。'
}, $u = [
  {
    label: "中文简体",
    value: "zh-CN",
    alias: ["zh-CN", "zh-cn"]
  },
  {
    label: "中文繁體",
    value: "zh-TW",
    alias: ["zh-TW"]
  },
  {
    label: "English",
    value: "en-US",
    alias: ["en", "en-US", "jp", "jp-JP"]
  }
], _g = {
  "zh-cn": { translations: _u },
  "zh-CN": { translations: _u },
  en: { translations: ai },
  "en-US": { translations: ai },
  "zh-TW": { translations: Tg },
  jp: { translations: ai },
  "jp-JP": { translations: ai }
};
function on() {
  const e = So(), t = No(), n = At((c) => c.user), { t: r, i18n: i } = ct(), [o, s] = k.useState(null), a = k.useMemo(() => {
    const c = $u.find(
      (f) => f.alias.includes(i.language)
    );
    return (c == null ? void 0 : c.value) ?? "";
  }, [i.language]);
  k.useEffect(() => {
    !(n != null && n.email) || !(n != null && n.__version) || fetch("https://registry.npmjs.org/@waline/vercel/latest").then((c) => c.json()).then((c) => {
      n.__version !== c.version && s(c.version);
    });
  }, [n == null ? void 0 : n.email]);
  const l = function(c) {
    i.changeLanguage(c.target.value);
  }, u = function(c) {
    c.preventDefault(), e.user.logout(), t("/ui/login");
  };
  return [
    /* @__PURE__ */ p.jsxs("div", { className: "typecho-head-nav clear-fix", role: "navigation", children: [
      (n == null ? void 0 : n.type) === "administrator" ? /* @__PURE__ */ p.jsx("nav", { id: "typecho-nav-list", children: /* @__PURE__ */ p.jsxs("ul", { className: "root", children: [
        /* @__PURE__ */ p.jsx("li", { className: "parent", children: /* @__PURE__ */ p.jsx(et, { to: "/ui", children: r("management") }) }),
        /* @__PURE__ */ p.jsxs("ul", { className: "child", children: [
          /* @__PURE__ */ p.jsx("li", { className: "last", children: /* @__PURE__ */ p.jsx(et, { to: "/ui", children: r("comment") }) }),
          /* @__PURE__ */ p.jsx("li", { className: "last", children: /* @__PURE__ */ p.jsx(et, { to: "/ui/user", children: r("user") }) }),
          /* @__PURE__ */ p.jsx("li", { className: "last", children: /* @__PURE__ */ p.jsx(et, { to: "/ui/migration", children: r("migration") }) })
        ] })
      ] }) }) : null,
      /* @__PURE__ */ p.jsxs("div", { className: "operate", children: [
        /* @__PURE__ */ p.jsx("div", { className: "language-select", children: /* @__PURE__ */ p.jsx(
          "select",
          {
            defaultValue: a,
            onChange: l,
            style: { width: 120 },
            children: $u.map((c) => /* @__PURE__ */ p.jsx("option", { value: c.value, children: c.label }, c.value))
          }
        ) }),
        n != null && n.type ? /* @__PURE__ */ p.jsx(et, { to: "/ui/profile", className: "author", children: n.display_name }) : null,
        n != null && n.type ? /* @__PURE__ */ p.jsx("a", { className: "exit", href: "#", onClick: u, children: r("logout") }) : null
      ] })
    ] }, "header"),
    o ? /* @__PURE__ */ p.jsx("div", { className: "upgrade-tips clear-fix", children: /* @__PURE__ */ p.jsx(
      tt,
      {
        i18nKey: "new version tips",
        defaults: "New version @waline/vercel@{{version}} published, please upgrade it! Goto <a href='https://waline.js.org/en/advanced/faq.html#server' target='_blank'>FAQ</a> to find How to upgrade it.",
        components: {
          a: /* @__PURE__ */ p.jsx("a", {})
        },
        values: {
          version: o
        },
        transKeepBasicHtmlNodesFor: ["a"]
      }
    ) }, "upgrade") : null
  ];
}
function $g() {
  const { t: e } = ct(), t = So(), n = No(), r = At((u) => u.user), [i, o] = k.useState(!1), [s, a] = k.useState(!1);
  k.useEffect(() => {
    r && r.email && n("/ui", { replace: !0 });
  }, [n]);
  const l = async function(u) {
    u.preventDefault(), o(!1);
    const c = u.target.email.value;
    if (!c)
      return o(e("please input email"));
    try {
      a(!0), await t.user.forgot({
        email: c
      }), alert(e("find password success! please go to your mailbox to reset it!")), n("/ui/login");
    } catch {
      o(e("find password error! try again later"));
    } finally {
      a(!1);
    }
  };
  return /* @__PURE__ */ p.jsxs(p.Fragment, { children: [
    /* @__PURE__ */ p.jsx(on, {}),
    /* @__PURE__ */ p.jsx(
      "div",
      {
        className: "message popup notice",
        style: {
          position: "fixed",
          top: 0,
          display: i ? "block" : "none"
        },
        children: /* @__PURE__ */ p.jsx("ul", { children: i ? /* @__PURE__ */ p.jsx("li", { children: i }) : null })
      }
    ),
    /* @__PURE__ */ p.jsx("div", { className: "typecho-login-wrap", children: /* @__PURE__ */ p.jsxs("div", { className: "typecho-login", children: [
      /* @__PURE__ */ p.jsxs("form", { method: "post", name: "login", role: "form", onSubmit: l, children: [
        /* @__PURE__ */ p.jsx("ul", { className: "typecho-option", children: /* @__PURE__ */ p.jsxs("li", { children: [
          /* @__PURE__ */ p.jsx("label", { htmlFor: "email", className: "sr-only", children: e("email") }),
          /* @__PURE__ */ p.jsx(
            "input",
            {
              type: "text",
              id: "email",
              name: "email",
              placeholder: e("email"),
              className: "text-l w-100"
            }
          ),
          /* @__PURE__ */ p.jsx("p", { className: "description", style: { textAlign: "left" }, children: e(
            "you will receive an email which contains a link to create new password"
          ) })
        ] }) }),
        /* @__PURE__ */ p.jsx("p", { className: "submit", children: /* @__PURE__ */ p.jsx(
          "button",
          {
            type: "submit",
            disabled: s,
            className: "btn btn-l w-100 primary",
            children: e("get new password")
          }
        ) })
      ] }),
      /* @__PURE__ */ p.jsxs("p", { className: "more-link", children: [
        /* @__PURE__ */ p.jsx(et, { to: "/ui", children: e("back to home") }),
        " •",
        " ",
        /* @__PURE__ */ p.jsx(et, { to: "/ui/login", children: e("register.login") })
      ] })
    ] }) })
  ] });
}
const Dd = (e) => /* @__PURE__ */ k.createElement("svg", { width: 48, height: 48, viewBox: "0 0 1024 1024", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...e }, /* @__PURE__ */ k.createElement("path", { d: "M512 0C229.12 0 0 229.12 0 512c0 226.56 146.56 417.92 350.08 485.76 25.6 4.48 35.2-10.88 35.2-24.32 0-12.16-.64-52.48-.64-95.36-128.64 23.68-161.92-31.36-172.16-60.16-5.76-14.72-30.72-60.16-52.48-72.32-17.92-9.6-43.52-33.28-.64-33.92 40.32-.64 69.12 37.12 78.72 52.48 46.08 77.44 119.68 55.68 149.12 42.24 4.48-33.28 17.92-55.68 32.64-68.48-113.92-12.8-232.96-56.96-232.96-252.8 0-55.68 19.84-101.76 52.48-137.6-5.12-12.8-23.04-65.28 5.12-135.68 0 0 42.88-13.44 140.8 52.48 40.96-11.52 84.48-17.28 128-17.28 43.52 0 87.04 5.76 128 17.28 97.92-66.56 140.8-52.48 140.8-52.48 28.16 70.4 10.24 122.88 5.12 135.68 32.64 35.84 52.48 81.28 52.48 137.6 0 196.48-119.68 240-233.6 252.8 18.56 16 34.56 46.72 34.56 94.72 0 68.48-.64 123.52-.64 140.8 0 13.44 9.6 29.44 35.2 24.32C877.44 929.92 1024 737.92 1024 512 1024 229.12 794.88 0 512 0z", fill: "#1B1F23" })), Mg = (e) => /* @__PURE__ */ k.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: 48, height: 48, viewBox: "126.444 2.281 589 589", ...e }, /* @__PURE__ */ k.createElement("circle", { cx: 420.944, cy: 296.781, r: 294.5, fill: "#2daae1" }), /* @__PURE__ */ k.createElement("path", { d: "M609.773 179.634c-13.891 6.164-28.811 10.331-44.498 12.204 16.01-9.587 28.275-24.779 34.066-42.86a154.78 154.78 0 0 1-49.209 18.801c-14.125-15.056-34.267-24.456-56.551-24.456-42.773 0-77.462 34.675-77.462 77.473 0 6.064.683 11.98 1.996 17.66-64.389-3.236-121.474-34.079-159.684-80.945-6.672 11.446-10.491 24.754-10.491 38.953 0 26.875 13.679 50.587 34.464 64.477a77.122 77.122 0 0 1-35.097-9.686v.979c0 37.54 26.701 68.842 62.145 75.961-6.511 1.784-13.344 2.716-20.413 2.716-4.998 0-9.847-.473-14.584-1.364 9.859 30.769 38.471 53.166 72.363 53.799-26.515 20.785-59.925 33.175-96.212 33.175-6.25 0-12.427-.373-18.491-1.104 34.291 21.988 75.006 34.824 118.759 34.824 142.496 0 220.428-118.052 220.428-220.428 0-3.361-.074-6.697-.236-10.021a157.855 157.855 0 0 0 38.707-40.158z", fill: "#f6f6f3" })), Ig = (e) => /* @__PURE__ */ k.createElement("svg", { width: 48, height: 48, viewBox: "0 0 32 32", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...e }, /* @__PURE__ */ k.createElement("path", { d: "M32 16C32 7.16344 24.8366 0 16 0C7.16344 0 0 7.16344 0 16C0 23.9861 5.85096 30.6053 13.5 31.8056V20.625H9.43751V16H13.5V12.475C13.5 8.465 15.8887 6.25001 19.5434 6.25001C21.294 6.25001 23.125 6.5625 23.125 6.5625V10.5H21.1074C19.1198 10.5 18.5 11.7334 18.5 12.9987V16H22.9375L22.2281 20.625H18.5V31.8056C26.149 30.6053 32 23.9861 32 16", fill: "#1877F2" })), Fg = (e) => /* @__PURE__ */ k.createElement("svg", { height: 48, width: 48, viewBox: "0 0 24 24", ...e }, /* @__PURE__ */ k.createElement("circle", { cx: 12, cy: 12, fill: "#D34237", r: 12 }), /* @__PURE__ */ k.createElement("path", { d: "M19.3945,9.4904c0.0639,0.8284,-0.0762,1.821,-0.6232,1.8696c-0.8928,0.0798,-0.4271,-0.9037,-0.4154,-1.4957c0.0327,-1.7159,-1.4321,-2.9081,-2.8669,-2.9081c-0.4065,0,-1.3506,0.2755,-1.2052,-0.5817c0.0654,-0.378,0.3856,-0.3727,0.7062,-0.4154C17.4031,5.6373,19.225,7.2973,19.3945,9.4904L19.3945,9.4904zM15.4475,11.4848c1.0374,0.5676,2.2838,0.8502,2.0771,2.5346c-0.0495,0.4036,-0.2938,0.9429,-0.5399,1.2873c-1.7536,2.4548,-7.0427,3.4866,-10.3456,1.6208c-1.1077,-0.6261,-2.254,-1.5417,-2.0771,-3.3659c0.1522,-1.5699,1.2078,-2.786,2.2437,-3.8219c0.9882,-0.9888,2.0303,-1.7624,3.4483,-2.1189c1.5384,-0.3868,1.9932,0.8958,1.5787,2.1604c0.8911,-0.0598,2.7795,-1.0545,3.6147,-0.083C15.8155,10.1263,15.6745,10.8929,15.4475,11.4848L15.4475,11.4848zM14.3256,15.4731c0.3324,-0.3768,0.6665,-0.9511,0.6644,-1.62c-0.0044,-2.0648,-2.6055,-2.8275,-4.6529,-2.6591c-1.1198,0.0918,-1.8731,0.3282,-2.6591,0.7895c-0.6414,0.3765,-1.3921,0.9891,-1.5787,1.9108c-0.4201,2.0727,1.8343,3.0468,3.4898,3.1575C11.502,17.1805,13.4166,16.5052,14.3256,15.4731zM17.3583,9.4904c0.0871,0.6326,-0.0939,1.1807,-0.4569,1.2049c-0.6052,0.0403,-0.3789,-0.4145,-0.4157,-0.9555c-0.023,-0.3332,-0.2991,-0.718,-0.5402,-0.831c-0.4728,-0.2214,-1.2049,0.1613,-1.2049,-0.4984c0,-0.4898,0.4248,-0.4389,0.665,-0.4572C16.4578,7.8731,17.2356,8.5982,17.3583,9.4904zM12.4976,13.6453c0.8852,2.6753,-3.7268,3.9193,-4.5702,1.6202c-0.5643,-1.5375,0.7907,-2.7604,2.2019,-2.9081C11.3342,12.2311,12.2323,12.8455,12.4976,13.6453zM10.3786,14.1024c0.1878,0.325,0.6197,0.0916,0.5817,-0.166C10.915,13.6382,10.3748,13.6824,10.3786,14.1024zM9.6306,15.5152c0.7754,-0.1846,0.8796,-1.645,-0.2908,-1.3712C8.3566,14.3736,8.5467,15.7727,9.6306,15.5152z", fill: "#FFFFFF" })), Ag = (e) => /* @__PURE__ */ k.createElement("svg", { width: 48, height: 48, viewBox: "0 0 1024 1024", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...e }, /* @__PURE__ */ k.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M512 1024C794.77 1024 1024 794.77 1024 512C1024 229.23 794.77 0 512 0C229.23 0 0 229.23 0 512C0 794.77 229.23 1024 512 1024ZM718.383 488.193C734.622 528.473 746.254 557.323 756.601 590.562C783.163 676.031 774.57 711.422 767.929 712.281C753.867 714 713.163 647.906 713.163 647.906C713.163 686.109 693.476 736.031 650.82 772.125C671.367 778.453 717.773 795.562 706.757 814.156C697.851 829.234 553.476 823.766 511.835 819.078C470.195 823.766 325.82 829.234 316.913 814.156C305.898 795.484 352.226 778.453 372.851 772.125C330.195 736.109 310.507 686.188 310.507 647.906C310.507 647.906 269.804 714 255.742 712.281C249.179 711.5 240.585 676.109 267.148 590.562C277.556 556.997 289.209 528.143 305.627 487.496C308.926 479.326 312.419 470.679 316.132 461.422C312.382 318.688 371.367 199 511.835 199C650.742 199 711.054 316.344 707.617 461.422C711.425 470.936 715.003 479.812 718.383 488.193Z", fill: "#259BE0" })), Vd = (e) => /* @__PURE__ */ k.createElement("svg", { width: 189, height: 40, viewBox: "0 0 189 40", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...e }, /* @__PURE__ */ k.createElement("rect", { x: 0.5, y: 0.5, width: 188, height: 39, rx: 3.5, fill: "white" }), /* @__PURE__ */ k.createElement("g", { clipPath: "url(#clip0_760_7197)" }, /* @__PURE__ */ k.createElement("path", { d: "M31.6 20.2273C31.6 19.5182 31.5364 18.8364 31.4182 18.1818H22V22.05H27.3818C27.15 23.3 26.4455 24.3591 25.3864 25.0682V27.5773H28.6182C30.5091 25.8364 31.6 23.2727 31.6 20.2273V20.2273Z", fill: "#4285F4" }), /* @__PURE__ */ k.createElement("path", { d: "M22 30C24.7 30 26.9636 29.1045 28.6181 27.5773L25.3863 25.0682C24.4909 25.6682 23.3454 26.0227 22 26.0227C19.3954 26.0227 17.1909 24.2636 16.4045 21.9H13.0636V24.4909C14.7091 27.7591 18.0909 30 22 30Z", fill: "#34A853" }), /* @__PURE__ */ k.createElement("path", { d: "M16.4045 21.9C16.2045 21.3 16.0909 20.6591 16.0909 20C16.0909 19.3409 16.2045 18.7 16.4045 18.1V15.5091H13.0636C12.3864 16.8591 12 18.3864 12 20C12 21.6136 12.3864 23.1409 13.0636 24.4909L16.4045 21.9V21.9Z", fill: "#FBBC04" }), /* @__PURE__ */ k.createElement("path", { d: "M22 13.9773C23.4681 13.9773 24.7863 14.4818 25.8227 15.4727L28.6909 12.6045C26.9591 10.9909 24.6954 10 22 10C18.0909 10 14.7091 12.2409 13.0636 15.5091L16.4045 18.1C17.1909 15.7364 19.3954 13.9773 22 13.9773Z", fill: "#E94235" })), /* @__PURE__ */ k.createElement("path", { d: "M48.8906 21.7598H50.5996C50.5449 22.4115 50.3626 22.9925 50.0527 23.5029C49.7428 24.0088 49.3076 24.4076 48.7471 24.6992C48.1865 24.9909 47.5052 25.1367 46.7031 25.1367C46.0879 25.1367 45.5342 25.0273 45.042 24.8086C44.5498 24.5853 44.1283 24.2708 43.7773 23.8652C43.4264 23.4551 43.1576 22.9606 42.9707 22.3818C42.7884 21.8031 42.6973 21.1559 42.6973 20.4404V19.6133C42.6973 18.8978 42.7907 18.2507 42.9775 17.6719C43.1689 17.0931 43.4424 16.5986 43.7979 16.1885C44.1533 15.7738 44.5794 15.457 45.0762 15.2383C45.5775 15.0195 46.1403 14.9102 46.7646 14.9102C47.5576 14.9102 48.2275 15.056 48.7744 15.3477C49.3213 15.6393 49.7451 16.0426 50.0459 16.5576C50.3512 17.0726 50.5381 17.6628 50.6064 18.3281H48.8975C48.8519 17.8997 48.7516 17.5329 48.5967 17.2275C48.4463 16.9222 48.223 16.6898 47.9268 16.5303C47.6305 16.3662 47.2432 16.2842 46.7646 16.2842C46.3727 16.2842 46.0309 16.3571 45.7393 16.5029C45.4476 16.6488 45.2038 16.863 45.0078 17.1455C44.8118 17.4281 44.6637 17.7767 44.5635 18.1914C44.4678 18.6016 44.4199 19.071 44.4199 19.5996V20.4404C44.4199 20.9417 44.4632 21.3975 44.5498 21.8076C44.641 22.2132 44.7777 22.5618 44.96 22.8535C45.1468 23.1452 45.3838 23.3708 45.6709 23.5303C45.958 23.6898 46.3021 23.7695 46.7031 23.7695C47.1908 23.7695 47.585 23.6921 47.8857 23.5371C48.1911 23.3822 48.4212 23.1566 48.5762 22.8604C48.7357 22.5596 48.8405 22.1927 48.8906 21.7598ZM51.6797 21.3838V21.2266C51.6797 20.6934 51.7572 20.1989 51.9121 19.7432C52.0671 19.2829 52.2904 18.8841 52.582 18.5469C52.8783 18.2051 53.2383 17.9408 53.6621 17.7539C54.0905 17.5625 54.5736 17.4668 55.1113 17.4668C55.6536 17.4668 56.1367 17.5625 56.5605 17.7539C56.9889 17.9408 57.3512 18.2051 57.6475 18.5469C57.9437 18.8841 58.1693 19.2829 58.3242 19.7432C58.4792 20.1989 58.5566 20.6934 58.5566 21.2266V21.3838C58.5566 21.917 58.4792 22.4115 58.3242 22.8672C58.1693 23.3229 57.9437 23.7217 57.6475 24.0635C57.3512 24.4007 56.9912 24.665 56.5674 24.8564C56.1436 25.0433 55.6628 25.1367 55.125 25.1367C54.5827 25.1367 54.0973 25.0433 53.6689 24.8564C53.2451 24.665 52.8851 24.4007 52.5889 24.0635C52.2926 23.7217 52.0671 23.3229 51.9121 22.8672C51.7572 22.4115 51.6797 21.917 51.6797 21.3838ZM53.3271 21.2266V21.3838C53.3271 21.7165 53.3613 22.0309 53.4297 22.3271C53.498 22.6234 53.6051 22.8831 53.751 23.1064C53.8968 23.3298 54.0837 23.5052 54.3115 23.6328C54.5394 23.7604 54.8105 23.8242 55.125 23.8242C55.4303 23.8242 55.6947 23.7604 55.918 23.6328C56.1458 23.5052 56.3327 23.3298 56.4785 23.1064C56.6243 22.8831 56.7314 22.6234 56.7998 22.3271C56.8727 22.0309 56.9092 21.7165 56.9092 21.3838V21.2266C56.9092 20.8984 56.8727 20.5885 56.7998 20.2969C56.7314 20.0007 56.6221 19.7386 56.4717 19.5107C56.3258 19.2829 56.139 19.1051 55.9111 18.9775C55.6878 18.8454 55.4212 18.7793 55.1113 18.7793C54.8014 18.7793 54.5326 18.8454 54.3047 18.9775C54.0814 19.1051 53.8968 19.2829 53.751 19.5107C53.6051 19.7386 53.498 20.0007 53.4297 20.2969C53.3613 20.5885 53.3271 20.8984 53.3271 21.2266ZM61.5713 19.1826V25H59.9238V17.6035H61.4756L61.5713 19.1826ZM61.2773 21.0283L60.7441 21.0215C60.7487 20.4974 60.8216 20.0166 60.9629 19.5791C61.1087 19.1416 61.3092 18.7656 61.5645 18.4512C61.8242 18.1367 62.1341 17.8952 62.4941 17.7266C62.8542 17.5534 63.2552 17.4668 63.6973 17.4668C64.0527 17.4668 64.374 17.5169 64.6611 17.6172C64.9528 17.7129 65.2012 17.8701 65.4062 18.0889C65.6159 18.3076 65.7754 18.5924 65.8848 18.9434C65.9941 19.2897 66.0488 19.7158 66.0488 20.2217V25H64.3945V20.2148C64.3945 19.8594 64.3421 19.5791 64.2373 19.374C64.137 19.1644 63.9889 19.0163 63.793 18.9297C63.6016 18.8385 63.3623 18.793 63.0752 18.793C62.7926 18.793 62.5397 18.8522 62.3164 18.9707C62.0931 19.0892 61.904 19.251 61.749 19.4561C61.5986 19.6611 61.4824 19.8981 61.4004 20.167C61.3184 20.4359 61.2773 20.723 61.2773 21.0283ZM71.1211 17.6035V18.8066H66.9512V17.6035H71.1211ZM68.1543 15.792H69.8018V22.9561C69.8018 23.1839 69.8337 23.3594 69.8975 23.4824C69.9658 23.6009 70.0592 23.6807 70.1777 23.7217C70.2962 23.7627 70.4352 23.7832 70.5947 23.7832C70.7087 23.7832 70.818 23.7764 70.9229 23.7627C71.0277 23.749 71.112 23.7354 71.1758 23.7217L71.1826 24.9795C71.0459 25.0205 70.8864 25.057 70.7041 25.0889C70.5264 25.1208 70.3213 25.1367 70.0889 25.1367C69.7106 25.1367 69.3757 25.0706 69.084 24.9385C68.7923 24.8018 68.5645 24.5807 68.4004 24.2754C68.2363 23.9701 68.1543 23.5645 68.1543 23.0586V15.792ZM74.1562 17.6035V25H72.502V17.6035H74.1562ZM72.3926 15.6621C72.3926 15.4115 72.4746 15.2041 72.6387 15.04C72.8073 14.8714 73.0397 14.7871 73.3359 14.7871C73.6276 14.7871 73.8577 14.8714 74.0264 15.04C74.195 15.2041 74.2793 15.4115 74.2793 15.6621C74.2793 15.9082 74.195 16.1133 74.0264 16.2773C73.8577 16.4414 73.6276 16.5234 73.3359 16.5234C73.0397 16.5234 72.8073 16.4414 72.6387 16.2773C72.4746 16.1133 72.3926 15.9082 72.3926 15.6621ZM77.5947 19.1826V25H75.9473V17.6035H77.499L77.5947 19.1826ZM77.3008 21.0283L76.7676 21.0215C76.7721 20.4974 76.8451 20.0166 76.9863 19.5791C77.1322 19.1416 77.3327 18.7656 77.5879 18.4512C77.8477 18.1367 78.1576 17.8952 78.5176 17.7266C78.8776 17.5534 79.2786 17.4668 79.7207 17.4668C80.0762 17.4668 80.3975 17.5169 80.6846 17.6172C80.9762 17.7129 81.2246 17.8701 81.4297 18.0889C81.6393 18.3076 81.7988 18.5924 81.9082 18.9434C82.0176 19.2897 82.0723 19.7158 82.0723 20.2217V25H80.418V20.2148C80.418 19.8594 80.3656 19.5791 80.2607 19.374C80.1605 19.1644 80.0124 19.0163 79.8164 18.9297C79.625 18.8385 79.3857 18.793 79.0986 18.793C78.8161 18.793 78.5632 18.8522 78.3398 18.9707C78.1165 19.0892 77.9274 19.251 77.7725 19.4561C77.6221 19.6611 77.5059 19.8981 77.4238 20.167C77.3418 20.4359 77.3008 20.723 77.3008 21.0283ZM88.2041 23.2568V17.6035H89.8584V25H88.2998L88.2041 23.2568ZM88.4365 21.7188L88.9902 21.7051C88.9902 22.2018 88.9355 22.6598 88.8262 23.0791C88.7168 23.4938 88.5482 23.8561 88.3203 24.166C88.0924 24.4714 87.8008 24.7106 87.4453 24.8838C87.0898 25.0524 86.6637 25.1367 86.167 25.1367C85.807 25.1367 85.4766 25.0843 85.1758 24.9795C84.875 24.8747 84.6152 24.7129 84.3965 24.4941C84.1823 24.2754 84.016 23.9906 83.8975 23.6396C83.779 23.2887 83.7197 22.8695 83.7197 22.3818V17.6035H85.3672V22.3955C85.3672 22.6644 85.3991 22.89 85.4629 23.0723C85.5267 23.25 85.6133 23.3936 85.7227 23.5029C85.832 23.6123 85.9596 23.6898 86.1055 23.7354C86.2513 23.7809 86.4062 23.8037 86.5703 23.8037C87.0397 23.8037 87.4089 23.7126 87.6777 23.5303C87.9512 23.3434 88.1449 23.0928 88.2588 22.7783C88.3773 22.4639 88.4365 22.1107 88.4365 21.7188ZM94.8076 25.1367C94.2607 25.1367 93.7663 25.0479 93.3242 24.8701C92.8867 24.6878 92.513 24.4349 92.2031 24.1113C91.8978 23.7878 91.6631 23.4072 91.499 22.9697C91.335 22.5322 91.2529 22.0605 91.2529 21.5547V21.2812C91.2529 20.7025 91.3372 20.1784 91.5059 19.709C91.6745 19.2396 91.9092 18.8385 92.21 18.5059C92.5107 18.1686 92.8662 17.9111 93.2764 17.7334C93.6865 17.5557 94.1309 17.4668 94.6094 17.4668C95.138 17.4668 95.6006 17.5557 95.9971 17.7334C96.3936 17.9111 96.7217 18.1618 96.9814 18.4854C97.2458 18.8044 97.4417 19.1849 97.5693 19.627C97.7015 20.069 97.7676 20.5566 97.7676 21.0898V21.7939H92.0527V20.6113H96.1406V20.4814C96.1315 20.1852 96.0723 19.9072 95.9629 19.6475C95.8581 19.3877 95.6963 19.1781 95.4775 19.0186C95.2588 18.859 94.9671 18.7793 94.6025 18.7793C94.3291 18.7793 94.0853 18.8385 93.8711 18.957C93.6615 19.071 93.486 19.2373 93.3447 19.4561C93.2035 19.6748 93.0941 19.9391 93.0166 20.249C92.9437 20.5544 92.9072 20.8984 92.9072 21.2812V21.5547C92.9072 21.8783 92.9505 22.179 93.0371 22.457C93.1283 22.7305 93.2604 22.9697 93.4336 23.1748C93.6068 23.3799 93.8164 23.5417 94.0625 23.6602C94.3086 23.7741 94.5889 23.8311 94.9033 23.8311C95.2998 23.8311 95.653 23.7513 95.9629 23.5918C96.2728 23.4323 96.5417 23.2067 96.7695 22.915L97.6377 23.7559C97.4782 23.9883 97.2708 24.2116 97.0156 24.4258C96.7604 24.6354 96.4482 24.8063 96.0791 24.9385C95.7145 25.0706 95.2907 25.1367 94.8076 25.1367ZM104.549 23.3594L106.258 17.6035H107.311L107.023 19.3262L105.301 25H104.357L104.549 23.3594ZM103.544 17.6035L104.877 23.3867L104.986 25H103.934L101.931 17.6035H103.544ZM108.91 23.3184L110.202 17.6035H111.809L109.812 25H108.76L108.91 23.3184ZM107.488 17.6035L109.177 23.291L109.389 25H108.445L106.702 19.3193L106.415 17.6035H107.488ZM114.693 17.6035V25H113.039V17.6035H114.693ZM112.93 15.6621C112.93 15.4115 113.012 15.2041 113.176 15.04C113.344 14.8714 113.577 14.7871 113.873 14.7871C114.165 14.7871 114.395 14.8714 114.563 15.04C114.732 15.2041 114.816 15.4115 114.816 15.6621C114.816 15.9082 114.732 16.1133 114.563 16.2773C114.395 16.4414 114.165 16.5234 113.873 16.5234C113.577 16.5234 113.344 16.4414 113.176 16.2773C113.012 16.1133 112.93 15.9082 112.93 15.6621ZM119.889 17.6035V18.8066H115.719V17.6035H119.889ZM116.922 15.792H118.569V22.9561C118.569 23.1839 118.601 23.3594 118.665 23.4824C118.733 23.6009 118.827 23.6807 118.945 23.7217C119.064 23.7627 119.203 23.7832 119.362 23.7832C119.476 23.7832 119.586 23.7764 119.69 23.7627C119.795 23.749 119.88 23.7354 119.943 23.7217L119.95 24.9795C119.813 25.0205 119.654 25.057 119.472 25.0889C119.294 25.1208 119.089 25.1367 118.856 25.1367C118.478 25.1367 118.143 25.0706 117.852 24.9385C117.56 24.8018 117.332 24.5807 117.168 24.2754C117.004 23.9701 116.922 23.5645 116.922 23.0586V15.792ZM122.787 14.5V25H121.146V14.5H122.787ZM122.5 21.0283L121.967 21.0215C121.971 20.5111 122.042 20.0394 122.179 19.6064C122.32 19.1735 122.516 18.7975 122.767 18.4785C123.022 18.1549 123.327 17.9066 123.683 17.7334C124.038 17.5557 124.432 17.4668 124.865 17.4668C125.23 17.4668 125.558 17.5169 125.85 17.6172C126.146 17.7174 126.401 17.8792 126.615 18.1025C126.829 18.3213 126.991 18.6084 127.101 18.9639C127.215 19.3148 127.271 19.7432 127.271 20.249V25H125.617V20.2354C125.617 19.8799 125.565 19.5973 125.46 19.3877C125.36 19.1781 125.212 19.0277 125.016 18.9365C124.82 18.8408 124.58 18.793 124.298 18.793C124.002 18.793 123.74 18.8522 123.512 18.9707C123.288 19.0892 123.102 19.251 122.951 19.4561C122.801 19.6611 122.687 19.8981 122.609 20.167C122.536 20.4359 122.5 20.723 122.5 21.0283ZM140.232 19.9141V23.7148C140.091 23.9017 139.87 24.1068 139.569 24.3301C139.273 24.5488 138.879 24.738 138.387 24.8975C137.895 25.057 137.282 25.1367 136.548 25.1367C135.924 25.1367 135.352 25.0319 134.832 24.8223C134.312 24.6081 133.864 24.2959 133.485 23.8857C133.112 23.4756 132.822 22.9766 132.617 22.3887C132.412 21.7962 132.31 21.1217 132.31 20.3652V19.6748C132.31 18.9229 132.403 18.2529 132.59 17.665C132.781 17.0726 133.055 16.5713 133.41 16.1611C133.766 15.751 134.194 15.4411 134.695 15.2314C135.201 15.0173 135.773 14.9102 136.411 14.9102C137.227 14.9102 137.901 15.0469 138.435 15.3203C138.972 15.5892 139.387 15.9629 139.679 16.4414C139.97 16.9199 140.155 17.4668 140.232 18.082H138.551C138.496 17.7357 138.389 17.4258 138.229 17.1523C138.075 16.8789 137.851 16.6647 137.56 16.5098C137.272 16.3503 136.899 16.2705 136.438 16.2705C136.042 16.2705 135.693 16.3457 135.393 16.4961C135.092 16.6465 134.841 16.8675 134.641 17.1592C134.445 17.4508 134.297 17.8063 134.196 18.2256C134.096 18.6449 134.046 19.1234 134.046 19.6611V20.3652C134.046 20.9121 134.103 21.3975 134.217 21.8213C134.335 22.2451 134.504 22.6029 134.723 22.8945C134.946 23.1862 135.217 23.4072 135.536 23.5576C135.855 23.7035 136.215 23.7764 136.616 23.7764C137.008 23.7764 137.329 23.7445 137.58 23.6807C137.831 23.6123 138.029 23.5326 138.175 23.4414C138.325 23.3457 138.441 23.2546 138.523 23.168V21.1924H136.452V19.9141H140.232ZM141.654 21.3838V21.2266C141.654 20.6934 141.732 20.1989 141.887 19.7432C142.042 19.2829 142.265 18.8841 142.557 18.5469C142.853 18.2051 143.213 17.9408 143.637 17.7539C144.065 17.5625 144.548 17.4668 145.086 17.4668C145.628 17.4668 146.111 17.5625 146.535 17.7539C146.964 17.9408 147.326 18.2051 147.622 18.5469C147.918 18.8841 148.144 19.2829 148.299 19.7432C148.454 20.1989 148.531 20.6934 148.531 21.2266V21.3838C148.531 21.917 148.454 22.4115 148.299 22.8672C148.144 23.3229 147.918 23.7217 147.622 24.0635C147.326 24.4007 146.966 24.665 146.542 24.8564C146.118 25.0433 145.637 25.1367 145.1 25.1367C144.557 25.1367 144.072 25.0433 143.644 24.8564C143.22 24.665 142.86 24.4007 142.563 24.0635C142.267 23.7217 142.042 23.3229 141.887 22.8672C141.732 22.4115 141.654 21.917 141.654 21.3838ZM143.302 21.2266V21.3838C143.302 21.7165 143.336 22.0309 143.404 22.3271C143.473 22.6234 143.58 22.8831 143.726 23.1064C143.871 23.3298 144.058 23.5052 144.286 23.6328C144.514 23.7604 144.785 23.8242 145.1 23.8242C145.405 23.8242 145.669 23.7604 145.893 23.6328C146.12 23.5052 146.307 23.3298 146.453 23.1064C146.599 22.8831 146.706 22.6234 146.774 22.3271C146.847 22.0309 146.884 21.7165 146.884 21.3838V21.2266C146.884 20.8984 146.847 20.5885 146.774 20.2969C146.706 20.0007 146.597 19.7386 146.446 19.5107C146.3 19.2829 146.114 19.1051 145.886 18.9775C145.662 18.8454 145.396 18.7793 145.086 18.7793C144.776 18.7793 144.507 18.8454 144.279 18.9775C144.056 19.1051 143.871 19.2829 143.726 19.5107C143.58 19.7386 143.473 20.0007 143.404 20.2969C143.336 20.5885 143.302 20.8984 143.302 21.2266ZM149.598 21.3838V21.2266C149.598 20.6934 149.675 20.1989 149.83 19.7432C149.985 19.2829 150.208 18.8841 150.5 18.5469C150.796 18.2051 151.156 17.9408 151.58 17.7539C152.008 17.5625 152.492 17.4668 153.029 17.4668C153.572 17.4668 154.055 17.5625 154.479 17.7539C154.907 17.9408 155.269 18.2051 155.565 18.5469C155.862 18.8841 156.087 19.2829 156.242 19.7432C156.397 20.1989 156.475 20.6934 156.475 21.2266V21.3838C156.475 21.917 156.397 22.4115 156.242 22.8672C156.087 23.3229 155.862 23.7217 155.565 24.0635C155.269 24.4007 154.909 24.665 154.485 24.8564C154.062 25.0433 153.581 25.1367 153.043 25.1367C152.501 25.1367 152.015 25.0433 151.587 24.8564C151.163 24.665 150.803 24.4007 150.507 24.0635C150.211 23.7217 149.985 23.3229 149.83 22.8672C149.675 22.4115 149.598 21.917 149.598 21.3838ZM151.245 21.2266V21.3838C151.245 21.7165 151.279 22.0309 151.348 22.3271C151.416 22.6234 151.523 22.8831 151.669 23.1064C151.815 23.3298 152.002 23.5052 152.229 23.6328C152.457 23.7604 152.729 23.8242 153.043 23.8242C153.348 23.8242 153.613 23.7604 153.836 23.6328C154.064 23.5052 154.251 23.3298 154.396 23.1064C154.542 22.8831 154.649 22.6234 154.718 22.3271C154.791 22.0309 154.827 21.7165 154.827 21.3838V21.2266C154.827 20.8984 154.791 20.5885 154.718 20.2969C154.649 20.0007 154.54 19.7386 154.39 19.5107C154.244 19.2829 154.057 19.1051 153.829 18.9775C153.606 18.8454 153.339 18.7793 153.029 18.7793C152.719 18.7793 152.451 18.8454 152.223 18.9775C151.999 19.1051 151.815 19.2829 151.669 19.5107C151.523 19.7386 151.416 20.0007 151.348 20.2969C151.279 20.5885 151.245 20.8984 151.245 21.2266ZM162.593 17.6035H164.09V24.7949C164.09 25.4603 163.949 26.0254 163.666 26.4902C163.383 26.9551 162.989 27.3083 162.483 27.5498C161.978 27.7959 161.392 27.9189 160.727 27.9189C160.444 27.9189 160.13 27.8779 159.783 27.7959C159.441 27.7139 159.109 27.5817 158.785 27.3994C158.466 27.2217 158.2 26.987 157.985 26.6953L158.758 25.7246C159.022 26.0391 159.314 26.2692 159.633 26.415C159.952 26.5609 160.287 26.6338 160.638 26.6338C161.016 26.6338 161.337 26.5632 161.602 26.4219C161.87 26.2852 162.078 26.0824 162.224 25.8135C162.369 25.5446 162.442 25.2165 162.442 24.8291V19.2783L162.593 17.6035ZM157.568 21.3838V21.2402C157.568 20.6797 157.637 20.1693 157.773 19.709C157.91 19.2441 158.106 18.8454 158.361 18.5127C158.617 18.1755 158.926 17.918 159.291 17.7402C159.656 17.5579 160.068 17.4668 160.528 17.4668C161.007 17.4668 161.415 17.5534 161.752 17.7266C162.094 17.8997 162.379 18.1481 162.606 18.4717C162.834 18.7907 163.012 19.1735 163.14 19.6201C163.272 20.0622 163.37 20.5544 163.434 21.0967V21.5547C163.374 22.0833 163.274 22.5664 163.133 23.0039C162.992 23.4414 162.805 23.8197 162.572 24.1387C162.34 24.4577 162.053 24.7038 161.711 24.877C161.374 25.0501 160.975 25.1367 160.515 25.1367C160.063 25.1367 159.656 25.0433 159.291 24.8564C158.931 24.6696 158.621 24.4076 158.361 24.0703C158.106 23.7331 157.91 23.3366 157.773 22.8809C157.637 22.4206 157.568 21.9215 157.568 21.3838ZM159.216 21.2402V21.3838C159.216 21.721 159.248 22.0355 159.312 22.3271C159.38 22.6188 159.482 22.8763 159.619 23.0996C159.76 23.3184 159.938 23.4915 160.152 23.6191C160.371 23.7422 160.629 23.8037 160.925 23.8037C161.312 23.8037 161.629 23.7217 161.875 23.5576C162.126 23.3936 162.317 23.1725 162.449 22.8945C162.586 22.612 162.682 22.2975 162.736 21.9512V20.7139C162.709 20.445 162.652 20.1943 162.565 19.9619C162.483 19.7295 162.372 19.5267 162.23 19.3535C162.089 19.1758 161.911 19.0391 161.697 18.9434C161.483 18.8431 161.23 18.793 160.938 18.793C160.642 18.793 160.385 18.8568 160.166 18.9844C159.947 19.112 159.767 19.2874 159.626 19.5107C159.489 19.734 159.387 19.9938 159.318 20.29C159.25 20.5863 159.216 20.903 159.216 21.2402ZM167.562 14.5V25H165.908V14.5H167.562ZM172.628 25.1367C172.081 25.1367 171.587 25.0479 171.145 24.8701C170.707 24.6878 170.333 24.4349 170.023 24.1113C169.718 23.7878 169.483 23.4072 169.319 22.9697C169.155 22.5322 169.073 22.0605 169.073 21.5547V21.2812C169.073 20.7025 169.158 20.1784 169.326 19.709C169.495 19.2396 169.729 18.8385 170.03 18.5059C170.331 18.1686 170.687 17.9111 171.097 17.7334C171.507 17.5557 171.951 17.4668 172.43 17.4668C172.958 17.4668 173.421 17.5557 173.817 17.7334C174.214 17.9111 174.542 18.1618 174.802 18.4854C175.066 18.8044 175.262 19.1849 175.39 19.627C175.522 20.069 175.588 20.5566 175.588 21.0898V21.7939H169.873V20.6113H173.961V20.4814C173.952 20.1852 173.893 19.9072 173.783 19.6475C173.678 19.3877 173.517 19.1781 173.298 19.0186C173.079 18.859 172.787 18.7793 172.423 18.7793C172.149 18.7793 171.906 18.8385 171.691 18.957C171.482 19.071 171.306 19.2373 171.165 19.4561C171.024 19.6748 170.914 19.9391 170.837 20.249C170.764 20.5544 170.728 20.8984 170.728 21.2812V21.5547C170.728 21.8783 170.771 22.179 170.857 22.457C170.949 22.7305 171.081 22.9697 171.254 23.1748C171.427 23.3799 171.637 23.5417 171.883 23.6602C172.129 23.7741 172.409 23.8311 172.724 23.8311C173.12 23.8311 173.473 23.7513 173.783 23.5918C174.093 23.4323 174.362 23.2067 174.59 22.915L175.458 23.7559C175.299 23.9883 175.091 24.2116 174.836 24.4258C174.581 24.6354 174.269 24.8063 173.899 24.9385C173.535 25.0706 173.111 25.1367 172.628 25.1367Z", fill: "#1F1F1F" }), /* @__PURE__ */ k.createElement("rect", { x: 0.5, y: 0.5, width: 188, height: 39, rx: 3.5, stroke: "#747775" }), /* @__PURE__ */ k.createElement("defs", null, /* @__PURE__ */ k.createElement("clipPath", { id: "clip0_760_7197" }, /* @__PURE__ */ k.createElement("rect", { width: 20, height: 20, fill: "white", transform: "translate(12 10)" })))), zg = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  facebook: Ig,
  github: Dd,
  google: Vd,
  qq: Ag,
  twitter: Mg,
  weibo: Fg
}, Symbol.toStringTag, { value: "Module" }));
function bg() {
  const { t: e } = ct(), t = location.pathname.match(/(.*?\/)ui/), n = t && t[1] ? t[1] : "/";
  let r = window.serverURL;
  if (!r) {
    const i = location.pathname.match(/(.*?\/)ui/);
    r = i ? i[1] : "/";
  }
  return /* @__PURE__ */ p.jsxs(p.Fragment, { children: [
    /* @__PURE__ */ p.jsx(on, {}),
    /* @__PURE__ */ p.jsx("div", { className: "typecho-login-wrap", children: /* @__PURE__ */ p.jsxs("div", { className: "typecho-login", children: [
      /* @__PURE__ */ p.jsx("h2", { children: e("Login With") }),
      /* @__PURE__ */ p.jsx("div", { className: "social-accounts", children: /* @__PURE__ */ p.jsx("a", { href: `${r}oauth?type=google&redirect=${n}ui/profile`, children: he.createElement(Vd) }) })
    ] }) })
  ] });
}
var Bd = { exports: {} };
/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/
(function(e) {
  (function() {
    var t = {}.hasOwnProperty;
    function n() {
      for (var o = "", s = 0; s < arguments.length; s++) {
        var a = arguments[s];
        a && (o = i(o, r(a)));
      }
      return o;
    }
    function r(o) {
      if (typeof o == "string" || typeof o == "number")
        return o;
      if (typeof o != "object")
        return "";
      if (Array.isArray(o))
        return n.apply(null, o);
      if (o.toString !== Object.prototype.toString && !o.toString.toString().includes("[native code]"))
        return o.toString();
      var s = "";
      for (var a in o)
        t.call(o, a) && o[a] && (s = i(s, a));
      return s;
    }
    function i(o, s) {
      return s ? o ? o + " " + s : o + s : o;
    }
    e.exports ? (n.default = n, e.exports = n) : window.classNames = n;
  })();
})(Bd);
var Ug = Bd.exports;
const $r = /* @__PURE__ */ io(Ug);
var Hd = { exports: {} }, Kd = { exports: {} };
(function() {
  var e = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", t = {
    // Bit-wise rotation left
    rotl: function(n, r) {
      return n << r | n >>> 32 - r;
    },
    // Bit-wise rotation right
    rotr: function(n, r) {
      return n << 32 - r | n >>> r;
    },
    // Swap big-endian to little-endian and vice versa
    endian: function(n) {
      if (n.constructor == Number)
        return t.rotl(n, 8) & 16711935 | t.rotl(n, 24) & 4278255360;
      for (var r = 0; r < n.length; r++)
        n[r] = t.endian(n[r]);
      return n;
    },
    // Generate an array of any length of random bytes
    randomBytes: function(n) {
      for (var r = []; n > 0; n--)
        r.push(Math.floor(Math.random() * 256));
      return r;
    },
    // Convert a byte array to big-endian 32-bit words
    bytesToWords: function(n) {
      for (var r = [], i = 0, o = 0; i < n.length; i++, o += 8)
        r[o >>> 5] |= n[i] << 24 - o % 32;
      return r;
    },
    // Convert big-endian 32-bit words to a byte array
    wordsToBytes: function(n) {
      for (var r = [], i = 0; i < n.length * 32; i += 8)
        r.push(n[i >>> 5] >>> 24 - i % 32 & 255);
      return r;
    },
    // Convert a byte array to a hex string
    bytesToHex: function(n) {
      for (var r = [], i = 0; i < n.length; i++)
        r.push((n[i] >>> 4).toString(16)), r.push((n[i] & 15).toString(16));
      return r.join("");
    },
    // Convert a hex string to a byte array
    hexToBytes: function(n) {
      for (var r = [], i = 0; i < n.length; i += 2)
        r.push(parseInt(n.substr(i, 2), 16));
      return r;
    },
    // Convert a byte array to a base-64 string
    bytesToBase64: function(n) {
      for (var r = [], i = 0; i < n.length; i += 3)
        for (var o = n[i] << 16 | n[i + 1] << 8 | n[i + 2], s = 0; s < 4; s++)
          i * 8 + s * 6 <= n.length * 8 ? r.push(e.charAt(o >>> 6 * (3 - s) & 63)) : r.push("=");
      return r.join("");
    },
    // Convert a base-64 string to a byte array
    base64ToBytes: function(n) {
      n = n.replace(/[^A-Z0-9+\/]/ig, "");
      for (var r = [], i = 0, o = 0; i < n.length; o = ++i % 4)
        o != 0 && r.push((e.indexOf(n.charAt(i - 1)) & Math.pow(2, -2 * o + 8) - 1) << o * 2 | e.indexOf(n.charAt(i)) >>> 6 - o * 2);
      return r;
    }
  };
  Kd.exports = t;
})();
var Dg = Kd.exports, il = {
  // UTF-8 encoding
  utf8: {
    // Convert a string to a byte array
    stringToBytes: function(e) {
      return il.bin.stringToBytes(unescape(encodeURIComponent(e)));
    },
    // Convert a byte array to a string
    bytesToString: function(e) {
      return decodeURIComponent(escape(il.bin.bytesToString(e)));
    }
  },
  // Binary encoding
  bin: {
    // Convert a string to a byte array
    stringToBytes: function(e) {
      for (var t = [], n = 0; n < e.length; n++)
        t.push(e.charCodeAt(n) & 255);
      return t;
    },
    // Convert a byte array to a string
    bytesToString: function(e) {
      for (var t = [], n = 0; n < e.length; n++)
        t.push(String.fromCharCode(e[n]));
      return t.join("");
    }
  }
}, Mu = il;
/*!
 * Determine if an object is a Buffer
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */
var Vg = function(e) {
  return e != null && (Wd(e) || Bg(e) || !!e._isBuffer);
};
function Wd(e) {
  return !!e.constructor && typeof e.constructor.isBuffer == "function" && e.constructor.isBuffer(e);
}
function Bg(e) {
  return typeof e.readFloatLE == "function" && typeof e.slice == "function" && Wd(e.slice(0, 0));
}
(function() {
  var e = Dg, t = Mu.utf8, n = Vg, r = Mu.bin, i = function(o, s) {
    o.constructor == String ? s && s.encoding === "binary" ? o = r.stringToBytes(o) : o = t.stringToBytes(o) : n(o) ? o = Array.prototype.slice.call(o, 0) : !Array.isArray(o) && o.constructor !== Uint8Array && (o = o.toString());
    for (var a = e.bytesToWords(o), l = o.length * 8, u = 1732584193, c = -271733879, f = -1732584194, d = 271733878, h = 0; h < a.length; h++)
      a[h] = (a[h] << 8 | a[h] >>> 24) & 16711935 | (a[h] << 24 | a[h] >>> 8) & 4278255360;
    a[l >>> 5] |= 128 << l % 32, a[(l + 64 >>> 9 << 4) + 14] = l;
    for (var v = i._ff, x = i._gg, C = i._hh, g = i._ii, h = 0; h < a.length; h += 16) {
      var m = u, w = c, y = f, S = d;
      u = v(u, c, f, d, a[h + 0], 7, -680876936), d = v(d, u, c, f, a[h + 1], 12, -389564586), f = v(f, d, u, c, a[h + 2], 17, 606105819), c = v(c, f, d, u, a[h + 3], 22, -1044525330), u = v(u, c, f, d, a[h + 4], 7, -176418897), d = v(d, u, c, f, a[h + 5], 12, 1200080426), f = v(f, d, u, c, a[h + 6], 17, -1473231341), c = v(c, f, d, u, a[h + 7], 22, -45705983), u = v(u, c, f, d, a[h + 8], 7, 1770035416), d = v(d, u, c, f, a[h + 9], 12, -1958414417), f = v(f, d, u, c, a[h + 10], 17, -42063), c = v(c, f, d, u, a[h + 11], 22, -1990404162), u = v(u, c, f, d, a[h + 12], 7, 1804603682), d = v(d, u, c, f, a[h + 13], 12, -40341101), f = v(f, d, u, c, a[h + 14], 17, -1502002290), c = v(c, f, d, u, a[h + 15], 22, 1236535329), u = x(u, c, f, d, a[h + 1], 5, -165796510), d = x(d, u, c, f, a[h + 6], 9, -1069501632), f = x(f, d, u, c, a[h + 11], 14, 643717713), c = x(c, f, d, u, a[h + 0], 20, -373897302), u = x(u, c, f, d, a[h + 5], 5, -701558691), d = x(d, u, c, f, a[h + 10], 9, 38016083), f = x(f, d, u, c, a[h + 15], 14, -660478335), c = x(c, f, d, u, a[h + 4], 20, -405537848), u = x(u, c, f, d, a[h + 9], 5, 568446438), d = x(d, u, c, f, a[h + 14], 9, -1019803690), f = x(f, d, u, c, a[h + 3], 14, -187363961), c = x(c, f, d, u, a[h + 8], 20, 1163531501), u = x(u, c, f, d, a[h + 13], 5, -1444681467), d = x(d, u, c, f, a[h + 2], 9, -51403784), f = x(f, d, u, c, a[h + 7], 14, 1735328473), c = x(c, f, d, u, a[h + 12], 20, -1926607734), u = C(u, c, f, d, a[h + 5], 4, -378558), d = C(d, u, c, f, a[h + 8], 11, -2022574463), f = C(f, d, u, c, a[h + 11], 16, 1839030562), c = C(c, f, d, u, a[h + 14], 23, -35309556), u = C(u, c, f, d, a[h + 1], 4, -1530992060), d = C(d, u, c, f, a[h + 4], 11, 1272893353), f = C(f, d, u, c, a[h + 7], 16, -155497632), c = C(c, f, d, u, a[h + 10], 23, -1094730640), u = C(u, c, f, d, a[h + 13], 4, 681279174), d = C(d, u, c, f, a[h + 0], 11, -358537222), f = C(f, d, u, c, a[h + 3], 16, -722521979), c = C(c, f, d, u, a[h + 6], 23, 76029189), u = C(u, c, f, d, a[h + 9], 4, -640364487), d = C(d, u, c, f, a[h + 12], 11, -421815835), f = C(f, d, u, c, a[h + 15], 16, 530742520), c = C(c, f, d, u, a[h + 2], 23, -995338651), u = g(u, c, f, d, a[h + 0], 6, -198630844), d = g(d, u, c, f, a[h + 7], 10, 1126891415), f = g(f, d, u, c, a[h + 14], 15, -1416354905), c = g(c, f, d, u, a[h + 5], 21, -57434055), u = g(u, c, f, d, a[h + 12], 6, 1700485571), d = g(d, u, c, f, a[h + 3], 10, -1894986606), f = g(f, d, u, c, a[h + 10], 15, -1051523), c = g(c, f, d, u, a[h + 1], 21, -2054922799), u = g(u, c, f, d, a[h + 8], 6, 1873313359), d = g(d, u, c, f, a[h + 15], 10, -30611744), f = g(f, d, u, c, a[h + 6], 15, -1560198380), c = g(c, f, d, u, a[h + 13], 21, 1309151649), u = g(u, c, f, d, a[h + 4], 6, -145523070), d = g(d, u, c, f, a[h + 11], 10, -1120210379), f = g(f, d, u, c, a[h + 2], 15, 718787259), c = g(c, f, d, u, a[h + 9], 21, -343485551), u = u + m >>> 0, c = c + w >>> 0, f = f + y >>> 0, d = d + S >>> 0;
    }
    return e.endian([u, c, f, d]);
  };
  i._ff = function(o, s, a, l, u, c, f) {
    var d = o + (s & a | ~s & l) + (u >>> 0) + f;
    return (d << c | d >>> 32 - c) + s;
  }, i._gg = function(o, s, a, l, u, c, f) {
    var d = o + (s & l | a & ~l) + (u >>> 0) + f;
    return (d << c | d >>> 32 - c) + s;
  }, i._hh = function(o, s, a, l, u, c, f) {
    var d = o + (s ^ a ^ l) + (u >>> 0) + f;
    return (d << c | d >>> 32 - c) + s;
  }, i._ii = function(o, s, a, l, u, c, f) {
    var d = o + (a ^ (s | ~l)) + (u >>> 0) + f;
    return (d << c | d >>> 32 - c) + s;
  }, i._blocksize = 16, i._digestsize = 16, Hd.exports = function(o, s) {
    if (o == null)
      throw new Error("Illegal argument " + o);
    var a = e.wordsToBytes(i(o, s));
    return s && s.asBytes ? a : s && s.asString ? r.bytesToString(a) : e.bytesToHex(a);
  };
})();
var Hg = Hd.exports;
const Kg = /* @__PURE__ */ io(Hg);
function Qd(e = "", t = "") {
  return t || (typeof e != "string" && (e = ""), `https://sdn.geekzu.org/avatar/${Kg(e)}?s=40&r=G&d=`);
}
function Wg(e) {
  return window.SITE_URL ? window.SITE_URL + e : e;
}
function Qg(e) {
  let t;
  typeof e == "number" ? t = new Date(e) : t = new Date(
    /\d+-\d+-\d+\s\d+:\d+:\d+/.test(e) ? e.replace(/-/g, "/") : e
  );
  const n = (o) => o < 10 ? "0" + o : o, r = [t.getFullYear(), t.getMonth() + 1, t.getDate()].map(n).join("-"), i = [t.getHours(), t.getMinutes(), t.getSeconds()].map(n).join(":");
  return r + " " + i;
}
function Zd({ current: e, total: t, onChange: n }) {
  return t < 1 ? null : /* @__PURE__ */ p.jsxs("ul", { className: "typecho-pager", children: [
    e > 1 ? /* @__PURE__ */ p.jsx("li", { className: "prev", children: /* @__PURE__ */ p.jsx("a", { href: "#", onClick: () => n(e - 1), children: "«" }) }) : null,
    e > 4 ? /* @__PURE__ */ p.jsxs(p.Fragment, { children: [
      /* @__PURE__ */ p.jsx("li", { children: /* @__PURE__ */ p.jsx("a", { href: "#", onClick: () => n(1), children: "1" }) }),
      /* @__PURE__ */ p.jsx("li", { children: /* @__PURE__ */ p.jsx("span", { children: "..." }) })
    ] }) : null,
    [
      e - 3,
      e - 2,
      e - 1,
      e,
      e + 1,
      e + 2,
      e + 3
    ].filter((r) => r > 0 && r <= t).map((r) => /* @__PURE__ */ p.jsx("li", { className: $r({ current: r === e }), children: /* @__PURE__ */ p.jsx("a", { href: "#", onClick: () => n(r), children: r }) }, r)),
    e < t - 3 ? /* @__PURE__ */ p.jsxs(p.Fragment, { children: [
      /* @__PURE__ */ p.jsx("li", { children: /* @__PURE__ */ p.jsx("span", { children: "..." }) }),
      /* @__PURE__ */ p.jsx("li", { children: /* @__PURE__ */ p.jsx("a", { href: "#", onClick: () => n(t), children: t }) })
    ] }) : null,
    e < t ? /* @__PURE__ */ p.jsx("li", { className: "next", children: /* @__PURE__ */ p.jsx("a", { href: "#", onClick: () => n(e + 1), children: "»" }) }) : null
  ] });
}
const Zg = {
  type: "logger",
  log(e) {
    this.output("log", e);
  },
  warn(e) {
    this.output("warn", e);
  },
  error(e) {
    this.output("error", e);
  },
  output(e, t) {
    console && console[e] && console[e].apply(console, t);
  }
};
class qi {
  constructor(t) {
    let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    this.init(t, n);
  }
  init(t) {
    let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    this.prefix = n.prefix || "i18next:", this.logger = t || Zg, this.options = n, this.debug = n.debug;
  }
  log() {
    for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++)
      n[r] = arguments[r];
    return this.forward(n, "log", "", !0);
  }
  warn() {
    for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++)
      n[r] = arguments[r];
    return this.forward(n, "warn", "", !0);
  }
  error() {
    for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++)
      n[r] = arguments[r];
    return this.forward(n, "error", "");
  }
  deprecate() {
    for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++)
      n[r] = arguments[r];
    return this.forward(n, "warn", "WARNING DEPRECATED: ", !0);
  }
  forward(t, n, r, i) {
    return i && !this.debug ? null : (typeof t[0] == "string" && (t[0] = `${r}${this.prefix} ${t[0]}`), this.logger[n](t));
  }
  create(t) {
    return new qi(this.logger, {
      prefix: `${this.prefix}:${t}:`,
      ...this.options
    });
  }
  clone(t) {
    return t = t || this.options, t.prefix = t.prefix || this.prefix, new qi(this.logger, t);
  }
}
var Ye = new qi();
class jo {
  constructor() {
    this.observers = {};
  }
  on(t, n) {
    return t.split(" ").forEach((r) => {
      this.observers[r] || (this.observers[r] = /* @__PURE__ */ new Map());
      const i = this.observers[r].get(n) || 0;
      this.observers[r].set(n, i + 1);
    }), this;
  }
  off(t, n) {
    if (this.observers[t]) {
      if (!n) {
        delete this.observers[t];
        return;
      }
      this.observers[t].delete(n);
    }
  }
  emit(t) {
    for (var n = arguments.length, r = new Array(n > 1 ? n - 1 : 0), i = 1; i < n; i++)
      r[i - 1] = arguments[i];
    this.observers[t] && Array.from(this.observers[t].entries()).forEach((s) => {
      let [a, l] = s;
      for (let u = 0; u < l; u++)
        a(...r);
    }), this.observers["*"] && Array.from(this.observers["*"].entries()).forEach((s) => {
      let [a, l] = s;
      for (let u = 0; u < l; u++)
        a.apply(a, [t, ...r]);
    });
  }
}
function Yn() {
  let e, t;
  const n = new Promise((r, i) => {
    e = r, t = i;
  });
  return n.resolve = e, n.reject = t, n;
}
function Iu(e) {
  return e == null ? "" : "" + e;
}
function Yg(e, t, n) {
  e.forEach((r) => {
    t[r] && (n[r] = t[r]);
  });
}
const Gg = /###/g;
function dr(e, t, n) {
  function r(a) {
    return a && a.indexOf("###") > -1 ? a.replace(Gg, ".") : a;
  }
  function i() {
    return !e || typeof e == "string";
  }
  const o = typeof t != "string" ? t : t.split(".");
  let s = 0;
  for (; s < o.length - 1; ) {
    if (i()) return {};
    const a = r(o[s]);
    !e[a] && n && (e[a] = new n()), Object.prototype.hasOwnProperty.call(e, a) ? e = e[a] : e = {}, ++s;
  }
  return i() ? {} : {
    obj: e,
    k: r(o[s])
  };
}
function Fu(e, t, n) {
  const {
    obj: r,
    k: i
  } = dr(e, t, Object);
  if (r !== void 0 || t.length === 1) {
    r[i] = n;
    return;
  }
  let o = t[t.length - 1], s = t.slice(0, t.length - 1), a = dr(e, s, Object);
  for (; a.obj === void 0 && s.length; )
    o = `${s[s.length - 1]}.${o}`, s = s.slice(0, s.length - 1), a = dr(e, s, Object), a && a.obj && typeof a.obj[`${a.k}.${o}`] < "u" && (a.obj = void 0);
  a.obj[`${a.k}.${o}`] = n;
}
function Jg(e, t, n, r) {
  const {
    obj: i,
    k: o
  } = dr(e, t, Object);
  i[o] = i[o] || [], i[o].push(n);
}
function eo(e, t) {
  const {
    obj: n,
    k: r
  } = dr(e, t);
  if (n)
    return n[r];
}
function Xg(e, t, n) {
  const r = eo(e, n);
  return r !== void 0 ? r : eo(t, n);
}
function Yd(e, t, n) {
  for (const r in t)
    r !== "__proto__" && r !== "constructor" && (r in e ? typeof e[r] == "string" || e[r] instanceof String || typeof t[r] == "string" || t[r] instanceof String ? n && (e[r] = t[r]) : Yd(e[r], t[r], n) : e[r] = t[r]);
  return e;
}
function an(e) {
  return e.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&");
}
var qg = {
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  '"': "&quot;",
  "'": "&#39;",
  "/": "&#x2F;"
};
function e3(e) {
  return typeof e == "string" ? e.replace(/[&<>"'\/]/g, (t) => qg[t]) : e;
}
class t3 {
  constructor(t) {
    this.capacity = t, this.regExpMap = /* @__PURE__ */ new Map(), this.regExpQueue = [];
  }
  getRegExp(t) {
    const n = this.regExpMap.get(t);
    if (n !== void 0)
      return n;
    const r = new RegExp(t);
    return this.regExpQueue.length === this.capacity && this.regExpMap.delete(this.regExpQueue.shift()), this.regExpMap.set(t, r), this.regExpQueue.push(t), r;
  }
}
const n3 = [" ", ",", "?", "!", ";"], r3 = new t3(20);
function i3(e, t, n) {
  t = t || "", n = n || "";
  const r = n3.filter((s) => t.indexOf(s) < 0 && n.indexOf(s) < 0);
  if (r.length === 0) return !0;
  const i = r3.getRegExp(`(${r.map((s) => s === "?" ? "\\?" : s).join("|")})`);
  let o = !i.test(e);
  if (!o) {
    const s = e.indexOf(n);
    s > 0 && !i.test(e.substring(0, s)) && (o = !0);
  }
  return o;
}
function ol(e, t) {
  let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : ".";
  if (!e) return;
  if (e[t]) return e[t];
  const r = t.split(n);
  let i = e;
  for (let o = 0; o < r.length; ) {
    if (!i || typeof i != "object")
      return;
    let s, a = "";
    for (let l = o; l < r.length; ++l)
      if (l !== o && (a += n), a += r[l], s = i[a], s !== void 0) {
        if (["string", "number", "boolean"].indexOf(typeof s) > -1 && l < r.length - 1)
          continue;
        o += l - o + 1;
        break;
      }
    i = s;
  }
  return i;
}
function to(e) {
  return e && e.indexOf("_") > 0 ? e.replace("_", "-") : e;
}
class Au extends jo {
  constructor(t) {
    let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {
      ns: ["translation"],
      defaultNS: "translation"
    };
    super(), this.data = t || {}, this.options = n, this.options.keySeparator === void 0 && (this.options.keySeparator = "."), this.options.ignoreJSONStructure === void 0 && (this.options.ignoreJSONStructure = !0);
  }
  addNamespaces(t) {
    this.options.ns.indexOf(t) < 0 && this.options.ns.push(t);
  }
  removeNamespaces(t) {
    const n = this.options.ns.indexOf(t);
    n > -1 && this.options.ns.splice(n, 1);
  }
  getResource(t, n, r) {
    let i = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};
    const o = i.keySeparator !== void 0 ? i.keySeparator : this.options.keySeparator, s = i.ignoreJSONStructure !== void 0 ? i.ignoreJSONStructure : this.options.ignoreJSONStructure;
    let a;
    t.indexOf(".") > -1 ? a = t.split(".") : (a = [t, n], r && (Array.isArray(r) ? a.push(...r) : typeof r == "string" && o ? a.push(...r.split(o)) : a.push(r)));
    const l = eo(this.data, a);
    return !l && !n && !r && t.indexOf(".") > -1 && (t = a[0], n = a[1], r = a.slice(2).join(".")), l || !s || typeof r != "string" ? l : ol(this.data && this.data[t] && this.data[t][n], r, o);
  }
  addResource(t, n, r, i) {
    let o = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : {
      silent: !1
    };
    const s = o.keySeparator !== void 0 ? o.keySeparator : this.options.keySeparator;
    let a = [t, n];
    r && (a = a.concat(s ? r.split(s) : r)), t.indexOf(".") > -1 && (a = t.split("."), i = n, n = a[1]), this.addNamespaces(n), Fu(this.data, a, i), o.silent || this.emit("added", t, n, r, i);
  }
  addResources(t, n, r) {
    let i = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {
      silent: !1
    };
    for (const o in r)
      (typeof r[o] == "string" || Array.isArray(r[o])) && this.addResource(t, n, o, r[o], {
        silent: !0
      });
    i.silent || this.emit("added", t, n, r);
  }
  addResourceBundle(t, n, r, i, o) {
    let s = arguments.length > 5 && arguments[5] !== void 0 ? arguments[5] : {
      silent: !1,
      skipCopy: !1
    }, a = [t, n];
    t.indexOf(".") > -1 && (a = t.split("."), i = r, r = n, n = a[1]), this.addNamespaces(n);
    let l = eo(this.data, a) || {};
    s.skipCopy || (r = JSON.parse(JSON.stringify(r))), i ? Yd(l, r, o) : l = {
      ...l,
      ...r
    }, Fu(this.data, a, l), s.silent || this.emit("added", t, n, r);
  }
  removeResourceBundle(t, n) {
    this.hasResourceBundle(t, n) && delete this.data[t][n], this.removeNamespaces(n), this.emit("removed", t, n);
  }
  hasResourceBundle(t, n) {
    return this.getResource(t, n) !== void 0;
  }
  getResourceBundle(t, n) {
    return n || (n = this.options.defaultNS), this.options.compatibilityAPI === "v1" ? {
      ...this.getResource(t, n)
    } : this.getResource(t, n);
  }
  getDataByLanguage(t) {
    return this.data[t];
  }
  hasLanguageSomeTranslations(t) {
    const n = this.getDataByLanguage(t);
    return !!(n && Object.keys(n) || []).find((i) => n[i] && Object.keys(n[i]).length > 0);
  }
  toJSON() {
    return this.data;
  }
}
var Gd = {
  processors: {},
  addPostProcessor(e) {
    this.processors[e.name] = e;
  },
  handle(e, t, n, r, i) {
    return e.forEach((o) => {
      this.processors[o] && (t = this.processors[o].process(t, n, r, i));
    }), t;
  }
};
const zu = {};
class no extends jo {
  constructor(t) {
    let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    super(), Yg(["resourceStore", "languageUtils", "pluralResolver", "interpolator", "backendConnector", "i18nFormat", "utils"], t, this), this.options = n, this.options.keySeparator === void 0 && (this.options.keySeparator = "."), this.logger = Ye.create("translator");
  }
  changeLanguage(t) {
    t && (this.language = t);
  }
  exists(t) {
    let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {
      interpolation: {}
    };
    if (t == null)
      return !1;
    const r = this.resolve(t, n);
    return r && r.res !== void 0;
  }
  extractFromKey(t, n) {
    let r = n.nsSeparator !== void 0 ? n.nsSeparator : this.options.nsSeparator;
    r === void 0 && (r = ":");
    const i = n.keySeparator !== void 0 ? n.keySeparator : this.options.keySeparator;
    let o = n.ns || this.options.defaultNS || [];
    const s = r && t.indexOf(r) > -1, a = !this.options.userDefinedKeySeparator && !n.keySeparator && !this.options.userDefinedNsSeparator && !n.nsSeparator && !i3(t, r, i);
    if (s && !a) {
      const l = t.match(this.interpolator.nestingRegexp);
      if (l && l.length > 0)
        return {
          key: t,
          namespaces: o
        };
      const u = t.split(r);
      (r !== i || r === i && this.options.ns.indexOf(u[0]) > -1) && (o = u.shift()), t = u.join(i);
    }
    return typeof o == "string" && (o = [o]), {
      key: t,
      namespaces: o
    };
  }
  translate(t, n, r) {
    if (typeof n != "object" && this.options.overloadTranslationOptionHandler && (n = this.options.overloadTranslationOptionHandler(arguments)), typeof n == "object" && (n = {
      ...n
    }), n || (n = {}), t == null) return "";
    Array.isArray(t) || (t = [String(t)]);
    const i = n.returnDetails !== void 0 ? n.returnDetails : this.options.returnDetails, o = n.keySeparator !== void 0 ? n.keySeparator : this.options.keySeparator, {
      key: s,
      namespaces: a
    } = this.extractFromKey(t[t.length - 1], n), l = a[a.length - 1], u = n.lng || this.language, c = n.appendNamespaceToCIMode || this.options.appendNamespaceToCIMode;
    if (u && u.toLowerCase() === "cimode") {
      if (c) {
        const y = n.nsSeparator || this.options.nsSeparator;
        return i ? {
          res: `${l}${y}${s}`,
          usedKey: s,
          exactUsedKey: s,
          usedLng: u,
          usedNS: l,
          usedParams: this.getUsedParamsDetails(n)
        } : `${l}${y}${s}`;
      }
      return i ? {
        res: s,
        usedKey: s,
        exactUsedKey: s,
        usedLng: u,
        usedNS: l,
        usedParams: this.getUsedParamsDetails(n)
      } : s;
    }
    const f = this.resolve(t, n);
    let d = f && f.res;
    const h = f && f.usedKey || s, v = f && f.exactUsedKey || s, x = Object.prototype.toString.apply(d), C = ["[object Number]", "[object Function]", "[object RegExp]"], g = n.joinArrays !== void 0 ? n.joinArrays : this.options.joinArrays, m = !this.i18nFormat || this.i18nFormat.handleAsObject;
    if (m && d && (typeof d != "string" && typeof d != "boolean" && typeof d != "number") && C.indexOf(x) < 0 && !(typeof g == "string" && Array.isArray(d))) {
      if (!n.returnObjects && !this.options.returnObjects) {
        this.options.returnedObjectHandler || this.logger.warn("accessing an object - but returnObjects options is not enabled!");
        const y = this.options.returnedObjectHandler ? this.options.returnedObjectHandler(h, d, {
          ...n,
          ns: a
        }) : `key '${s} (${this.language})' returned an object instead of string.`;
        return i ? (f.res = y, f.usedParams = this.getUsedParamsDetails(n), f) : y;
      }
      if (o) {
        const y = Array.isArray(d), S = y ? [] : {}, E = y ? v : h;
        for (const N in d)
          if (Object.prototype.hasOwnProperty.call(d, N)) {
            const L = `${E}${o}${N}`;
            S[N] = this.translate(L, {
              ...n,
              joinArrays: !1,
              ns: a
            }), S[N] === L && (S[N] = d[N]);
          }
        d = S;
      }
    } else if (m && typeof g == "string" && Array.isArray(d))
      d = d.join(g), d && (d = this.extendTranslation(d, t, n, r));
    else {
      let y = !1, S = !1;
      const E = n.count !== void 0 && typeof n.count != "string", N = no.hasDefaultValue(n), L = E ? this.pluralResolver.getSuffix(u, n.count, n) : "", _ = n.ordinal && E ? this.pluralResolver.getSuffix(u, n.count, {
        ordinal: !1
      }) : "", R = E && !n.ordinal && n.count === 0 && this.pluralResolver.shouldUseIntlApi(), F = R && n[`defaultValue${this.options.pluralSeparator}zero`] || n[`defaultValue${L}`] || n[`defaultValue${_}`] || n.defaultValue;
      !this.isValidLookup(d) && N && (y = !0, d = F), this.isValidLookup(d) || (S = !0, d = s);
      const te = (n.missingKeyNoValueFallbackToKey || this.options.missingKeyNoValueFallbackToKey) && S ? void 0 : d, se = N && F !== d && this.options.updateMissing;
      if (S || y || se) {
        if (this.logger.log(se ? "updateKey" : "missingKey", u, l, s, se ? F : d), o) {
          const P = this.resolve(s, {
            ...n,
            keySeparator: !1
          });
          P && P.res && this.logger.warn("Seems the loaded translations were in flat JSON format instead of nested. Either set keySeparator: false on init or make sure your translations are published in nested format.");
        }
        let z = [];
        const Ke = this.languageUtils.getFallbackCodes(this.options.fallbackLng, n.lng || this.language);
        if (this.options.saveMissingTo === "fallback" && Ke && Ke[0])
          for (let P = 0; P < Ke.length; P++)
            z.push(Ke[P]);
        else this.options.saveMissingTo === "all" ? z = this.languageUtils.toResolveHierarchy(n.lng || this.language) : z.push(n.lng || this.language);
        const ft = (P, $, T) => {
          const b = N && T !== d ? T : te;
          this.options.missingKeyHandler ? this.options.missingKeyHandler(P, l, $, b, se, n) : this.backendConnector && this.backendConnector.saveMissing && this.backendConnector.saveMissing(P, l, $, b, se, n), this.emit("missingKey", P, l, $, d);
        };
        this.options.saveMissing && (this.options.saveMissingPlurals && E ? z.forEach((P) => {
          const $ = this.pluralResolver.getSuffixes(P, n);
          R && n[`defaultValue${this.options.pluralSeparator}zero`] && $.indexOf(`${this.options.pluralSeparator}zero`) < 0 && $.push(`${this.options.pluralSeparator}zero`), $.forEach((T) => {
            ft([P], s + T, n[`defaultValue${T}`] || F);
          });
        }) : ft(z, s, F));
      }
      d = this.extendTranslation(d, t, n, f, r), S && d === s && this.options.appendNamespaceToMissingKey && (d = `${l}:${s}`), (S || y) && this.options.parseMissingKeyHandler && (this.options.compatibilityAPI !== "v1" ? d = this.options.parseMissingKeyHandler(this.options.appendNamespaceToMissingKey ? `${l}:${s}` : s, y ? d : void 0) : d = this.options.parseMissingKeyHandler(d));
    }
    return i ? (f.res = d, f.usedParams = this.getUsedParamsDetails(n), f) : d;
  }
  extendTranslation(t, n, r, i, o) {
    var s = this;
    if (this.i18nFormat && this.i18nFormat.parse)
      t = this.i18nFormat.parse(t, {
        ...this.options.interpolation.defaultVariables,
        ...r
      }, r.lng || this.language || i.usedLng, i.usedNS, i.usedKey, {
        resolved: i
      });
    else if (!r.skipInterpolation) {
      r.interpolation && this.interpolator.init({
        ...r,
        interpolation: {
          ...this.options.interpolation,
          ...r.interpolation
        }
      });
      const u = typeof t == "string" && (r && r.interpolation && r.interpolation.skipOnVariables !== void 0 ? r.interpolation.skipOnVariables : this.options.interpolation.skipOnVariables);
      let c;
      if (u) {
        const d = t.match(this.interpolator.nestingRegexp);
        c = d && d.length;
      }
      let f = r.replace && typeof r.replace != "string" ? r.replace : r;
      if (this.options.interpolation.defaultVariables && (f = {
        ...this.options.interpolation.defaultVariables,
        ...f
      }), t = this.interpolator.interpolate(t, f, r.lng || this.language, r), u) {
        const d = t.match(this.interpolator.nestingRegexp), h = d && d.length;
        c < h && (r.nest = !1);
      }
      !r.lng && this.options.compatibilityAPI !== "v1" && i && i.res && (r.lng = i.usedLng), r.nest !== !1 && (t = this.interpolator.nest(t, function() {
        for (var d = arguments.length, h = new Array(d), v = 0; v < d; v++)
          h[v] = arguments[v];
        return o && o[0] === h[0] && !r.context ? (s.logger.warn(`It seems you are nesting recursively key: ${h[0]} in key: ${n[0]}`), null) : s.translate(...h, n);
      }, r)), r.interpolation && this.interpolator.reset();
    }
    const a = r.postProcess || this.options.postProcess, l = typeof a == "string" ? [a] : a;
    return t != null && l && l.length && r.applyPostProcessor !== !1 && (t = Gd.handle(l, t, n, this.options && this.options.postProcessPassResolved ? {
      i18nResolved: {
        ...i,
        usedParams: this.getUsedParamsDetails(r)
      },
      ...r
    } : r, this)), t;
  }
  resolve(t) {
    let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r, i, o, s, a;
    return typeof t == "string" && (t = [t]), t.forEach((l) => {
      if (this.isValidLookup(r)) return;
      const u = this.extractFromKey(l, n), c = u.key;
      i = c;
      let f = u.namespaces;
      this.options.fallbackNS && (f = f.concat(this.options.fallbackNS));
      const d = n.count !== void 0 && typeof n.count != "string", h = d && !n.ordinal && n.count === 0 && this.pluralResolver.shouldUseIntlApi(), v = n.context !== void 0 && (typeof n.context == "string" || typeof n.context == "number") && n.context !== "", x = n.lngs ? n.lngs : this.languageUtils.toResolveHierarchy(n.lng || this.language, n.fallbackLng);
      f.forEach((C) => {
        this.isValidLookup(r) || (a = C, !zu[`${x[0]}-${C}`] && this.utils && this.utils.hasLoadedNamespace && !this.utils.hasLoadedNamespace(a) && (zu[`${x[0]}-${C}`] = !0, this.logger.warn(`key "${i}" for languages "${x.join(", ")}" won't get resolved as namespace "${a}" was not yet loaded`, "This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!")), x.forEach((g) => {
          if (this.isValidLookup(r)) return;
          s = g;
          const m = [c];
          if (this.i18nFormat && this.i18nFormat.addLookupKeys)
            this.i18nFormat.addLookupKeys(m, c, g, C, n);
          else {
            let y;
            d && (y = this.pluralResolver.getSuffix(g, n.count, n));
            const S = `${this.options.pluralSeparator}zero`, E = `${this.options.pluralSeparator}ordinal${this.options.pluralSeparator}`;
            if (d && (m.push(c + y), n.ordinal && y.indexOf(E) === 0 && m.push(c + y.replace(E, this.options.pluralSeparator)), h && m.push(c + S)), v) {
              const N = `${c}${this.options.contextSeparator}${n.context}`;
              m.push(N), d && (m.push(N + y), n.ordinal && y.indexOf(E) === 0 && m.push(N + y.replace(E, this.options.pluralSeparator)), h && m.push(N + S));
            }
          }
          let w;
          for (; w = m.pop(); )
            this.isValidLookup(r) || (o = w, r = this.getResource(g, C, w, n));
        }));
      });
    }), {
      res: r,
      usedKey: i,
      exactUsedKey: o,
      usedLng: s,
      usedNS: a
    };
  }
  isValidLookup(t) {
    return t !== void 0 && !(!this.options.returnNull && t === null) && !(!this.options.returnEmptyString && t === "");
  }
  getResource(t, n, r) {
    let i = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};
    return this.i18nFormat && this.i18nFormat.getResource ? this.i18nFormat.getResource(t, n, r, i) : this.resourceStore.getResource(t, n, r, i);
  }
  getUsedParamsDetails() {
    let t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    const n = ["defaultValue", "ordinal", "context", "replace", "lng", "lngs", "fallbackLng", "ns", "keySeparator", "nsSeparator", "returnObjects", "returnDetails", "joinArrays", "postProcess", "interpolation"], r = t.replace && typeof t.replace != "string";
    let i = r ? t.replace : t;
    if (r && typeof t.count < "u" && (i.count = t.count), this.options.interpolation.defaultVariables && (i = {
      ...this.options.interpolation.defaultVariables,
      ...i
    }), !r) {
      i = {
        ...i
      };
      for (const o of n)
        delete i[o];
    }
    return i;
  }
  static hasDefaultValue(t) {
    const n = "defaultValue";
    for (const r in t)
      if (Object.prototype.hasOwnProperty.call(t, r) && n === r.substring(0, n.length) && t[r] !== void 0)
        return !0;
    return !1;
  }
}
function is(e) {
  return e.charAt(0).toUpperCase() + e.slice(1);
}
class bu {
  constructor(t) {
    this.options = t, this.supportedLngs = this.options.supportedLngs || !1, this.logger = Ye.create("languageUtils");
  }
  getScriptPartFromCode(t) {
    if (t = to(t), !t || t.indexOf("-") < 0) return null;
    const n = t.split("-");
    return n.length === 2 || (n.pop(), n[n.length - 1].toLowerCase() === "x") ? null : this.formatLanguageCode(n.join("-"));
  }
  getLanguagePartFromCode(t) {
    if (t = to(t), !t || t.indexOf("-") < 0) return t;
    const n = t.split("-");
    return this.formatLanguageCode(n[0]);
  }
  formatLanguageCode(t) {
    if (typeof t == "string" && t.indexOf("-") > -1) {
      const n = ["hans", "hant", "latn", "cyrl", "cans", "mong", "arab"];
      let r = t.split("-");
      return this.options.lowerCaseLng ? r = r.map((i) => i.toLowerCase()) : r.length === 2 ? (r[0] = r[0].toLowerCase(), r[1] = r[1].toUpperCase(), n.indexOf(r[1].toLowerCase()) > -1 && (r[1] = is(r[1].toLowerCase()))) : r.length === 3 && (r[0] = r[0].toLowerCase(), r[1].length === 2 && (r[1] = r[1].toUpperCase()), r[0] !== "sgn" && r[2].length === 2 && (r[2] = r[2].toUpperCase()), n.indexOf(r[1].toLowerCase()) > -1 && (r[1] = is(r[1].toLowerCase())), n.indexOf(r[2].toLowerCase()) > -1 && (r[2] = is(r[2].toLowerCase()))), r.join("-");
    }
    return this.options.cleanCode || this.options.lowerCaseLng ? t.toLowerCase() : t;
  }
  isSupportedCode(t) {
    return (this.options.load === "languageOnly" || this.options.nonExplicitSupportedLngs) && (t = this.getLanguagePartFromCode(t)), !this.supportedLngs || !this.supportedLngs.length || this.supportedLngs.indexOf(t) > -1;
  }
  getBestMatchFromCodes(t) {
    if (!t) return null;
    let n;
    return t.forEach((r) => {
      if (n) return;
      const i = this.formatLanguageCode(r);
      (!this.options.supportedLngs || this.isSupportedCode(i)) && (n = i);
    }), !n && this.options.supportedLngs && t.forEach((r) => {
      if (n) return;
      const i = this.getLanguagePartFromCode(r);
      if (this.isSupportedCode(i)) return n = i;
      n = this.options.supportedLngs.find((o) => {
        if (o === i) return o;
        if (!(o.indexOf("-") < 0 && i.indexOf("-") < 0) && (o.indexOf("-") > 0 && i.indexOf("-") < 0 && o.substring(0, o.indexOf("-")) === i || o.indexOf(i) === 0 && i.length > 1))
          return o;
      });
    }), n || (n = this.getFallbackCodes(this.options.fallbackLng)[0]), n;
  }
  getFallbackCodes(t, n) {
    if (!t) return [];
    if (typeof t == "function" && (t = t(n)), typeof t == "string" && (t = [t]), Array.isArray(t)) return t;
    if (!n) return t.default || [];
    let r = t[n];
    return r || (r = t[this.getScriptPartFromCode(n)]), r || (r = t[this.formatLanguageCode(n)]), r || (r = t[this.getLanguagePartFromCode(n)]), r || (r = t.default), r || [];
  }
  toResolveHierarchy(t, n) {
    const r = this.getFallbackCodes(n || this.options.fallbackLng || [], t), i = [], o = (s) => {
      s && (this.isSupportedCode(s) ? i.push(s) : this.logger.warn(`rejecting language code not found in supportedLngs: ${s}`));
    };
    return typeof t == "string" && (t.indexOf("-") > -1 || t.indexOf("_") > -1) ? (this.options.load !== "languageOnly" && o(this.formatLanguageCode(t)), this.options.load !== "languageOnly" && this.options.load !== "currentOnly" && o(this.getScriptPartFromCode(t)), this.options.load !== "currentOnly" && o(this.getLanguagePartFromCode(t))) : typeof t == "string" && o(this.formatLanguageCode(t)), r.forEach((s) => {
      i.indexOf(s) < 0 && o(this.formatLanguageCode(s));
    }), i;
  }
}
let o3 = [{
  lngs: ["ach", "ak", "am", "arn", "br", "fil", "gun", "ln", "mfe", "mg", "mi", "oc", "pt", "pt-BR", "tg", "tl", "ti", "tr", "uz", "wa"],
  nr: [1, 2],
  fc: 1
}, {
  lngs: ["af", "an", "ast", "az", "bg", "bn", "ca", "da", "de", "dev", "el", "en", "eo", "es", "et", "eu", "fi", "fo", "fur", "fy", "gl", "gu", "ha", "hi", "hu", "hy", "ia", "it", "kk", "kn", "ku", "lb", "mai", "ml", "mn", "mr", "nah", "nap", "nb", "ne", "nl", "nn", "no", "nso", "pa", "pap", "pms", "ps", "pt-PT", "rm", "sco", "se", "si", "so", "son", "sq", "sv", "sw", "ta", "te", "tk", "ur", "yo"],
  nr: [1, 2],
  fc: 2
}, {
  lngs: ["ay", "bo", "cgg", "fa", "ht", "id", "ja", "jbo", "ka", "km", "ko", "ky", "lo", "ms", "sah", "su", "th", "tt", "ug", "vi", "wo", "zh"],
  nr: [1],
  fc: 3
}, {
  lngs: ["be", "bs", "cnr", "dz", "hr", "ru", "sr", "uk"],
  nr: [1, 2, 5],
  fc: 4
}, {
  lngs: ["ar"],
  nr: [0, 1, 2, 3, 11, 100],
  fc: 5
}, {
  lngs: ["cs", "sk"],
  nr: [1, 2, 5],
  fc: 6
}, {
  lngs: ["csb", "pl"],
  nr: [1, 2, 5],
  fc: 7
}, {
  lngs: ["cy"],
  nr: [1, 2, 3, 8],
  fc: 8
}, {
  lngs: ["fr"],
  nr: [1, 2],
  fc: 9
}, {
  lngs: ["ga"],
  nr: [1, 2, 3, 7, 11],
  fc: 10
}, {
  lngs: ["gd"],
  nr: [1, 2, 3, 20],
  fc: 11
}, {
  lngs: ["is"],
  nr: [1, 2],
  fc: 12
}, {
  lngs: ["jv"],
  nr: [0, 1],
  fc: 13
}, {
  lngs: ["kw"],
  nr: [1, 2, 3, 4],
  fc: 14
}, {
  lngs: ["lt"],
  nr: [1, 2, 10],
  fc: 15
}, {
  lngs: ["lv"],
  nr: [1, 2, 0],
  fc: 16
}, {
  lngs: ["mk"],
  nr: [1, 2],
  fc: 17
}, {
  lngs: ["mnk"],
  nr: [0, 1, 2],
  fc: 18
}, {
  lngs: ["mt"],
  nr: [1, 2, 11, 20],
  fc: 19
}, {
  lngs: ["or"],
  nr: [2, 1],
  fc: 2
}, {
  lngs: ["ro"],
  nr: [1, 2, 20],
  fc: 20
}, {
  lngs: ["sl"],
  nr: [5, 1, 2, 3],
  fc: 21
}, {
  lngs: ["he", "iw"],
  nr: [1, 2, 20, 21],
  fc: 22
}], s3 = {
  1: function(e) {
    return +(e > 1);
  },
  2: function(e) {
    return +(e != 1);
  },
  3: function(e) {
    return 0;
  },
  4: function(e) {
    return e % 10 == 1 && e % 100 != 11 ? 0 : e % 10 >= 2 && e % 10 <= 4 && (e % 100 < 10 || e % 100 >= 20) ? 1 : 2;
  },
  5: function(e) {
    return e == 0 ? 0 : e == 1 ? 1 : e == 2 ? 2 : e % 100 >= 3 && e % 100 <= 10 ? 3 : e % 100 >= 11 ? 4 : 5;
  },
  6: function(e) {
    return e == 1 ? 0 : e >= 2 && e <= 4 ? 1 : 2;
  },
  7: function(e) {
    return e == 1 ? 0 : e % 10 >= 2 && e % 10 <= 4 && (e % 100 < 10 || e % 100 >= 20) ? 1 : 2;
  },
  8: function(e) {
    return e == 1 ? 0 : e == 2 ? 1 : e != 8 && e != 11 ? 2 : 3;
  },
  9: function(e) {
    return +(e >= 2);
  },
  10: function(e) {
    return e == 1 ? 0 : e == 2 ? 1 : e < 7 ? 2 : e < 11 ? 3 : 4;
  },
  11: function(e) {
    return e == 1 || e == 11 ? 0 : e == 2 || e == 12 ? 1 : e > 2 && e < 20 ? 2 : 3;
  },
  12: function(e) {
    return +(e % 10 != 1 || e % 100 == 11);
  },
  13: function(e) {
    return +(e !== 0);
  },
  14: function(e) {
    return e == 1 ? 0 : e == 2 ? 1 : e == 3 ? 2 : 3;
  },
  15: function(e) {
    return e % 10 == 1 && e % 100 != 11 ? 0 : e % 10 >= 2 && (e % 100 < 10 || e % 100 >= 20) ? 1 : 2;
  },
  16: function(e) {
    return e % 10 == 1 && e % 100 != 11 ? 0 : e !== 0 ? 1 : 2;
  },
  17: function(e) {
    return e == 1 || e % 10 == 1 && e % 100 != 11 ? 0 : 1;
  },
  18: function(e) {
    return e == 0 ? 0 : e == 1 ? 1 : 2;
  },
  19: function(e) {
    return e == 1 ? 0 : e == 0 || e % 100 > 1 && e % 100 < 11 ? 1 : e % 100 > 10 && e % 100 < 20 ? 2 : 3;
  },
  20: function(e) {
    return e == 1 ? 0 : e == 0 || e % 100 > 0 && e % 100 < 20 ? 1 : 2;
  },
  21: function(e) {
    return e % 100 == 1 ? 1 : e % 100 == 2 ? 2 : e % 100 == 3 || e % 100 == 4 ? 3 : 0;
  },
  22: function(e) {
    return e == 1 ? 0 : e == 2 ? 1 : (e < 0 || e > 10) && e % 10 == 0 ? 2 : 3;
  }
};
const l3 = ["v1", "v2", "v3"], a3 = ["v4"], Uu = {
  zero: 0,
  one: 1,
  two: 2,
  few: 3,
  many: 4,
  other: 5
};
function u3() {
  const e = {};
  return o3.forEach((t) => {
    t.lngs.forEach((n) => {
      e[n] = {
        numbers: t.nr,
        plurals: s3[t.fc]
      };
    });
  }), e;
}
class c3 {
  constructor(t) {
    let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    this.languageUtils = t, this.options = n, this.logger = Ye.create("pluralResolver"), (!this.options.compatibilityJSON || a3.includes(this.options.compatibilityJSON)) && (typeof Intl > "u" || !Intl.PluralRules) && (this.options.compatibilityJSON = "v3", this.logger.error("Your environment seems not to be Intl API compatible, use an Intl.PluralRules polyfill. Will fallback to the compatibilityJSON v3 format handling.")), this.rules = u3();
  }
  addRule(t, n) {
    this.rules[t] = n;
  }
  getRule(t) {
    let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    if (this.shouldUseIntlApi())
      try {
        return new Intl.PluralRules(to(t === "dev" ? "en" : t), {
          type: n.ordinal ? "ordinal" : "cardinal"
        });
      } catch {
        return;
      }
    return this.rules[t] || this.rules[this.languageUtils.getLanguagePartFromCode(t)];
  }
  needsPlural(t) {
    let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    const r = this.getRule(t, n);
    return this.shouldUseIntlApi() ? r && r.resolvedOptions().pluralCategories.length > 1 : r && r.numbers.length > 1;
  }
  getPluralFormsOfKey(t, n) {
    let r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    return this.getSuffixes(t, r).map((i) => `${n}${i}`);
  }
  getSuffixes(t) {
    let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    const r = this.getRule(t, n);
    return r ? this.shouldUseIntlApi() ? r.resolvedOptions().pluralCategories.sort((i, o) => Uu[i] - Uu[o]).map((i) => `${this.options.prepend}${n.ordinal ? `ordinal${this.options.prepend}` : ""}${i}`) : r.numbers.map((i) => this.getSuffix(t, i, n)) : [];
  }
  getSuffix(t, n) {
    let r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    const i = this.getRule(t, r);
    return i ? this.shouldUseIntlApi() ? `${this.options.prepend}${r.ordinal ? `ordinal${this.options.prepend}` : ""}${i.select(n)}` : this.getSuffixRetroCompatible(i, n) : (this.logger.warn(`no plural rule found for: ${t}`), "");
  }
  getSuffixRetroCompatible(t, n) {
    const r = t.noAbs ? t.plurals(n) : t.plurals(Math.abs(n));
    let i = t.numbers[r];
    this.options.simplifyPluralSuffix && t.numbers.length === 2 && t.numbers[0] === 1 && (i === 2 ? i = "plural" : i === 1 && (i = ""));
    const o = () => this.options.prepend && i.toString() ? this.options.prepend + i.toString() : i.toString();
    return this.options.compatibilityJSON === "v1" ? i === 1 ? "" : typeof i == "number" ? `_plural_${i.toString()}` : o() : this.options.compatibilityJSON === "v2" || this.options.simplifyPluralSuffix && t.numbers.length === 2 && t.numbers[0] === 1 ? o() : this.options.prepend && r.toString() ? this.options.prepend + r.toString() : r.toString();
  }
  shouldUseIntlApi() {
    return !l3.includes(this.options.compatibilityJSON);
  }
}
function Du(e, t, n) {
  let r = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : ".", i = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : !0, o = Xg(e, t, n);
  return !o && i && typeof n == "string" && (o = ol(e, n, r), o === void 0 && (o = ol(t, n, r))), o;
}
class f3 {
  constructor() {
    let t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    this.logger = Ye.create("interpolator"), this.options = t, this.format = t.interpolation && t.interpolation.format || ((n) => n), this.init(t);
  }
  init() {
    let t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    t.interpolation || (t.interpolation = {
      escapeValue: !0
    });
    const {
      escape: n,
      escapeValue: r,
      useRawValueToEscape: i,
      prefix: o,
      prefixEscaped: s,
      suffix: a,
      suffixEscaped: l,
      formatSeparator: u,
      unescapeSuffix: c,
      unescapePrefix: f,
      nestingPrefix: d,
      nestingPrefixEscaped: h,
      nestingSuffix: v,
      nestingSuffixEscaped: x,
      nestingOptionsSeparator: C,
      maxReplaces: g,
      alwaysFormat: m
    } = t.interpolation;
    this.escape = n !== void 0 ? n : e3, this.escapeValue = r !== void 0 ? r : !0, this.useRawValueToEscape = i !== void 0 ? i : !1, this.prefix = o ? an(o) : s || "{{", this.suffix = a ? an(a) : l || "}}", this.formatSeparator = u || ",", this.unescapePrefix = c ? "" : f || "-", this.unescapeSuffix = this.unescapePrefix ? "" : c || "", this.nestingPrefix = d ? an(d) : h || an("$t("), this.nestingSuffix = v ? an(v) : x || an(")"), this.nestingOptionsSeparator = C || ",", this.maxReplaces = g || 1e3, this.alwaysFormat = m !== void 0 ? m : !1, this.resetRegExp();
  }
  reset() {
    this.options && this.init(this.options);
  }
  resetRegExp() {
    const t = (n, r) => n && n.source === r ? (n.lastIndex = 0, n) : new RegExp(r, "g");
    this.regexp = t(this.regexp, `${this.prefix}(.+?)${this.suffix}`), this.regexpUnescape = t(this.regexpUnescape, `${this.prefix}${this.unescapePrefix}(.+?)${this.unescapeSuffix}${this.suffix}`), this.nestingRegexp = t(this.nestingRegexp, `${this.nestingPrefix}(.+?)${this.nestingSuffix}`);
  }
  interpolate(t, n, r, i) {
    let o, s, a;
    const l = this.options && this.options.interpolation && this.options.interpolation.defaultVariables || {};
    function u(v) {
      return v.replace(/\$/g, "$$$$");
    }
    const c = (v) => {
      if (v.indexOf(this.formatSeparator) < 0) {
        const m = Du(n, l, v, this.options.keySeparator, this.options.ignoreJSONStructure);
        return this.alwaysFormat ? this.format(m, void 0, r, {
          ...i,
          ...n,
          interpolationkey: v
        }) : m;
      }
      const x = v.split(this.formatSeparator), C = x.shift().trim(), g = x.join(this.formatSeparator).trim();
      return this.format(Du(n, l, C, this.options.keySeparator, this.options.ignoreJSONStructure), g, r, {
        ...i,
        ...n,
        interpolationkey: C
      });
    };
    this.resetRegExp();
    const f = i && i.missingInterpolationHandler || this.options.missingInterpolationHandler, d = i && i.interpolation && i.interpolation.skipOnVariables !== void 0 ? i.interpolation.skipOnVariables : this.options.interpolation.skipOnVariables;
    return [{
      regex: this.regexpUnescape,
      safeValue: (v) => u(v)
    }, {
      regex: this.regexp,
      safeValue: (v) => this.escapeValue ? u(this.escape(v)) : u(v)
    }].forEach((v) => {
      for (a = 0; o = v.regex.exec(t); ) {
        const x = o[1].trim();
        if (s = c(x), s === void 0)
          if (typeof f == "function") {
            const g = f(t, o, i);
            s = typeof g == "string" ? g : "";
          } else if (i && Object.prototype.hasOwnProperty.call(i, x))
            s = "";
          else if (d) {
            s = o[0];
            continue;
          } else
            this.logger.warn(`missed to pass in variable ${x} for interpolating ${t}`), s = "";
        else typeof s != "string" && !this.useRawValueToEscape && (s = Iu(s));
        const C = v.safeValue(s);
        if (t = t.replace(o[0], C), d ? (v.regex.lastIndex += s.length, v.regex.lastIndex -= o[0].length) : v.regex.lastIndex = 0, a++, a >= this.maxReplaces)
          break;
      }
    }), t;
  }
  nest(t, n) {
    let r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, i, o, s;
    function a(l, u) {
      const c = this.nestingOptionsSeparator;
      if (l.indexOf(c) < 0) return l;
      const f = l.split(new RegExp(`${c}[ ]*{`));
      let d = `{${f[1]}`;
      l = f[0], d = this.interpolate(d, s);
      const h = d.match(/'/g), v = d.match(/"/g);
      (h && h.length % 2 === 0 && !v || v.length % 2 !== 0) && (d = d.replace(/'/g, '"'));
      try {
        s = JSON.parse(d), u && (s = {
          ...u,
          ...s
        });
      } catch (x) {
        return this.logger.warn(`failed parsing options string in nesting for key ${l}`, x), `${l}${c}${d}`;
      }
      return s.defaultValue && s.defaultValue.indexOf(this.prefix) > -1 && delete s.defaultValue, l;
    }
    for (; i = this.nestingRegexp.exec(t); ) {
      let l = [];
      s = {
        ...r
      }, s = s.replace && typeof s.replace != "string" ? s.replace : s, s.applyPostProcessor = !1, delete s.defaultValue;
      let u = !1;
      if (i[0].indexOf(this.formatSeparator) !== -1 && !/{.*}/.test(i[1])) {
        const c = i[1].split(this.formatSeparator).map((f) => f.trim());
        i[1] = c.shift(), l = c, u = !0;
      }
      if (o = n(a.call(this, i[1].trim(), s), s), o && i[0] === t && typeof o != "string") return o;
      typeof o != "string" && (o = Iu(o)), o || (this.logger.warn(`missed to resolve ${i[1]} for nesting ${t}`), o = ""), u && (o = l.reduce((c, f) => this.format(c, f, r.lng, {
        ...r,
        interpolationkey: i[1].trim()
      }), o.trim())), t = t.replace(i[0], o), this.regexp.lastIndex = 0;
    }
    return t;
  }
}
function d3(e) {
  let t = e.toLowerCase().trim();
  const n = {};
  if (e.indexOf("(") > -1) {
    const r = e.split("(");
    t = r[0].toLowerCase().trim();
    const i = r[1].substring(0, r[1].length - 1);
    t === "currency" && i.indexOf(":") < 0 ? n.currency || (n.currency = i.trim()) : t === "relativetime" && i.indexOf(":") < 0 ? n.range || (n.range = i.trim()) : i.split(";").forEach((s) => {
      if (s) {
        const [a, ...l] = s.split(":"), u = l.join(":").trim().replace(/^'+|'+$/g, ""), c = a.trim();
        n[c] || (n[c] = u), u === "false" && (n[c] = !1), u === "true" && (n[c] = !0), isNaN(u) || (n[c] = parseInt(u, 10));
      }
    });
  }
  return {
    formatName: t,
    formatOptions: n
  };
}
function un(e) {
  const t = {};
  return function(r, i, o) {
    const s = i + JSON.stringify(o);
    let a = t[s];
    return a || (a = e(to(i), o), t[s] = a), a(r);
  };
}
class p3 {
  constructor() {
    let t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    this.logger = Ye.create("formatter"), this.options = t, this.formats = {
      number: un((n, r) => {
        const i = new Intl.NumberFormat(n, {
          ...r
        });
        return (o) => i.format(o);
      }),
      currency: un((n, r) => {
        const i = new Intl.NumberFormat(n, {
          ...r,
          style: "currency"
        });
        return (o) => i.format(o);
      }),
      datetime: un((n, r) => {
        const i = new Intl.DateTimeFormat(n, {
          ...r
        });
        return (o) => i.format(o);
      }),
      relativetime: un((n, r) => {
        const i = new Intl.RelativeTimeFormat(n, {
          ...r
        });
        return (o) => i.format(o, r.range || "day");
      }),
      list: un((n, r) => {
        const i = new Intl.ListFormat(n, {
          ...r
        });
        return (o) => i.format(o);
      })
    }, this.init(t);
  }
  init(t) {
    const r = (arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {
      interpolation: {}
    }).interpolation;
    this.formatSeparator = r.formatSeparator ? r.formatSeparator : r.formatSeparator || ",";
  }
  add(t, n) {
    this.formats[t.toLowerCase().trim()] = n;
  }
  addCached(t, n) {
    this.formats[t.toLowerCase().trim()] = un(n);
  }
  format(t, n, r) {
    let i = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};
    return n.split(this.formatSeparator).reduce((a, l) => {
      const {
        formatName: u,
        formatOptions: c
      } = d3(l);
      if (this.formats[u]) {
        let f = a;
        try {
          const d = i && i.formatParams && i.formatParams[i.interpolationkey] || {}, h = d.locale || d.lng || i.locale || i.lng || r;
          f = this.formats[u](a, h, {
            ...c,
            ...i,
            ...d
          });
        } catch (d) {
          this.logger.warn(d);
        }
        return f;
      } else
        this.logger.warn(`there was no format function for ${u}`);
      return a;
    }, t);
  }
}
function h3(e, t) {
  e.pending[t] !== void 0 && (delete e.pending[t], e.pendingCount--);
}
class m3 extends jo {
  constructor(t, n, r) {
    let i = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};
    super(), this.backend = t, this.store = n, this.services = r, this.languageUtils = r.languageUtils, this.options = i, this.logger = Ye.create("backendConnector"), this.waitingReads = [], this.maxParallelReads = i.maxParallelReads || 10, this.readingCalls = 0, this.maxRetries = i.maxRetries >= 0 ? i.maxRetries : 5, this.retryTimeout = i.retryTimeout >= 1 ? i.retryTimeout : 350, this.state = {}, this.queue = [], this.backend && this.backend.init && this.backend.init(r, i.backend, i);
  }
  queueLoad(t, n, r, i) {
    const o = {}, s = {}, a = {}, l = {};
    return t.forEach((u) => {
      let c = !0;
      n.forEach((f) => {
        const d = `${u}|${f}`;
        !r.reload && this.store.hasResourceBundle(u, f) ? this.state[d] = 2 : this.state[d] < 0 || (this.state[d] === 1 ? s[d] === void 0 && (s[d] = !0) : (this.state[d] = 1, c = !1, s[d] === void 0 && (s[d] = !0), o[d] === void 0 && (o[d] = !0), l[f] === void 0 && (l[f] = !0)));
      }), c || (a[u] = !0);
    }), (Object.keys(o).length || Object.keys(s).length) && this.queue.push({
      pending: s,
      pendingCount: Object.keys(s).length,
      loaded: {},
      errors: [],
      callback: i
    }), {
      toLoad: Object.keys(o),
      pending: Object.keys(s),
      toLoadLanguages: Object.keys(a),
      toLoadNamespaces: Object.keys(l)
    };
  }
  loaded(t, n, r) {
    const i = t.split("|"), o = i[0], s = i[1];
    n && this.emit("failedLoading", o, s, n), r && this.store.addResourceBundle(o, s, r, void 0, void 0, {
      skipCopy: !0
    }), this.state[t] = n ? -1 : 2;
    const a = {};
    this.queue.forEach((l) => {
      Jg(l.loaded, [o], s), h3(l, t), n && l.errors.push(n), l.pendingCount === 0 && !l.done && (Object.keys(l.loaded).forEach((u) => {
        a[u] || (a[u] = {});
        const c = l.loaded[u];
        c.length && c.forEach((f) => {
          a[u][f] === void 0 && (a[u][f] = !0);
        });
      }), l.done = !0, l.errors.length ? l.callback(l.errors) : l.callback());
    }), this.emit("loaded", a), this.queue = this.queue.filter((l) => !l.done);
  }
  read(t, n, r) {
    let i = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : 0, o = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : this.retryTimeout, s = arguments.length > 5 ? arguments[5] : void 0;
    if (!t.length) return s(null, {});
    if (this.readingCalls >= this.maxParallelReads) {
      this.waitingReads.push({
        lng: t,
        ns: n,
        fcName: r,
        tried: i,
        wait: o,
        callback: s
      });
      return;
    }
    this.readingCalls++;
    const a = (u, c) => {
      if (this.readingCalls--, this.waitingReads.length > 0) {
        const f = this.waitingReads.shift();
        this.read(f.lng, f.ns, f.fcName, f.tried, f.wait, f.callback);
      }
      if (u && c && i < this.maxRetries) {
        setTimeout(() => {
          this.read.call(this, t, n, r, i + 1, o * 2, s);
        }, o);
        return;
      }
      s(u, c);
    }, l = this.backend[r].bind(this.backend);
    if (l.length === 2) {
      try {
        const u = l(t, n);
        u && typeof u.then == "function" ? u.then((c) => a(null, c)).catch(a) : a(null, u);
      } catch (u) {
        a(u);
      }
      return;
    }
    return l(t, n, a);
  }
  prepareLoading(t, n) {
    let r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, i = arguments.length > 3 ? arguments[3] : void 0;
    if (!this.backend)
      return this.logger.warn("No backend was added via i18next.use. Will not load resources."), i && i();
    typeof t == "string" && (t = this.languageUtils.toResolveHierarchy(t)), typeof n == "string" && (n = [n]);
    const o = this.queueLoad(t, n, r, i);
    if (!o.toLoad.length)
      return o.pending.length || i(), null;
    o.toLoad.forEach((s) => {
      this.loadOne(s);
    });
  }
  load(t, n, r) {
    this.prepareLoading(t, n, {}, r);
  }
  reload(t, n, r) {
    this.prepareLoading(t, n, {
      reload: !0
    }, r);
  }
  loadOne(t) {
    let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "";
    const r = t.split("|"), i = r[0], o = r[1];
    this.read(i, o, "read", void 0, void 0, (s, a) => {
      s && this.logger.warn(`${n}loading namespace ${o} for language ${i} failed`, s), !s && a && this.logger.log(`${n}loaded namespace ${o} for language ${i}`, a), this.loaded(t, s, a);
    });
  }
  saveMissing(t, n, r, i, o) {
    let s = arguments.length > 5 && arguments[5] !== void 0 ? arguments[5] : {}, a = arguments.length > 6 && arguments[6] !== void 0 ? arguments[6] : () => {
    };
    if (this.services.utils && this.services.utils.hasLoadedNamespace && !this.services.utils.hasLoadedNamespace(n)) {
      this.logger.warn(`did not save key "${r}" as the namespace "${n}" was not yet loaded`, "This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!");
      return;
    }
    if (!(r == null || r === "")) {
      if (this.backend && this.backend.create) {
        const l = {
          ...s,
          isUpdate: o
        }, u = this.backend.create.bind(this.backend);
        if (u.length < 6)
          try {
            let c;
            u.length === 5 ? c = u(t, n, r, i, l) : c = u(t, n, r, i), c && typeof c.then == "function" ? c.then((f) => a(null, f)).catch(a) : a(null, c);
          } catch (c) {
            a(c);
          }
        else
          u(t, n, r, i, a, l);
      }
      !t || !t[0] || this.store.addResource(t[0], n, r, i);
    }
  }
}
function Vu() {
  return {
    debug: !1,
    initImmediate: !0,
    ns: ["translation"],
    defaultNS: ["translation"],
    fallbackLng: ["dev"],
    fallbackNS: !1,
    supportedLngs: !1,
    nonExplicitSupportedLngs: !1,
    load: "all",
    preload: !1,
    simplifyPluralSuffix: !0,
    keySeparator: ".",
    nsSeparator: ":",
    pluralSeparator: "_",
    contextSeparator: "_",
    partialBundledLanguages: !1,
    saveMissing: !1,
    updateMissing: !1,
    saveMissingTo: "fallback",
    saveMissingPlurals: !0,
    missingKeyHandler: !1,
    missingInterpolationHandler: !1,
    postProcess: !1,
    postProcessPassResolved: !1,
    returnNull: !1,
    returnEmptyString: !0,
    returnObjects: !1,
    joinArrays: !1,
    returnedObjectHandler: !1,
    parseMissingKeyHandler: !1,
    appendNamespaceToMissingKey: !1,
    appendNamespaceToCIMode: !1,
    overloadTranslationOptionHandler: function(t) {
      let n = {};
      if (typeof t[1] == "object" && (n = t[1]), typeof t[1] == "string" && (n.defaultValue = t[1]), typeof t[2] == "string" && (n.tDescription = t[2]), typeof t[2] == "object" || typeof t[3] == "object") {
        const r = t[3] || t[2];
        Object.keys(r).forEach((i) => {
          n[i] = r[i];
        });
      }
      return n;
    },
    interpolation: {
      escapeValue: !0,
      format: (e) => e,
      prefix: "{{",
      suffix: "}}",
      formatSeparator: ",",
      unescapePrefix: "-",
      nestingPrefix: "$t(",
      nestingSuffix: ")",
      nestingOptionsSeparator: ",",
      maxReplaces: 1e3,
      skipOnVariables: !0
    }
  };
}
function Bu(e) {
  return typeof e.ns == "string" && (e.ns = [e.ns]), typeof e.fallbackLng == "string" && (e.fallbackLng = [e.fallbackLng]), typeof e.fallbackNS == "string" && (e.fallbackNS = [e.fallbackNS]), e.supportedLngs && e.supportedLngs.indexOf("cimode") < 0 && (e.supportedLngs = e.supportedLngs.concat(["cimode"])), e;
}
function ui() {
}
function g3(e) {
  Object.getOwnPropertyNames(Object.getPrototypeOf(e)).forEach((n) => {
    typeof e[n] == "function" && (e[n] = e[n].bind(e));
  });
}
class Mr extends jo {
  constructor() {
    let t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, n = arguments.length > 1 ? arguments[1] : void 0;
    if (super(), this.options = Bu(t), this.services = {}, this.logger = Ye, this.modules = {
      external: []
    }, g3(this), n && !this.isInitialized && !t.isClone) {
      if (!this.options.initImmediate)
        return this.init(t, n), this;
      setTimeout(() => {
        this.init(t, n);
      }, 0);
    }
  }
  init() {
    var t = this;
    let n = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, r = arguments.length > 1 ? arguments[1] : void 0;
    this.isInitializing = !0, typeof n == "function" && (r = n, n = {}), !n.defaultNS && n.defaultNS !== !1 && n.ns && (typeof n.ns == "string" ? n.defaultNS = n.ns : n.ns.indexOf("translation") < 0 && (n.defaultNS = n.ns[0]));
    const i = Vu();
    this.options = {
      ...i,
      ...this.options,
      ...Bu(n)
    }, this.options.compatibilityAPI !== "v1" && (this.options.interpolation = {
      ...i.interpolation,
      ...this.options.interpolation
    }), n.keySeparator !== void 0 && (this.options.userDefinedKeySeparator = n.keySeparator), n.nsSeparator !== void 0 && (this.options.userDefinedNsSeparator = n.nsSeparator);
    function o(c) {
      return c ? typeof c == "function" ? new c() : c : null;
    }
    if (!this.options.isClone) {
      this.modules.logger ? Ye.init(o(this.modules.logger), this.options) : Ye.init(null, this.options);
      let c;
      this.modules.formatter ? c = this.modules.formatter : typeof Intl < "u" && (c = p3);
      const f = new bu(this.options);
      this.store = new Au(this.options.resources, this.options);
      const d = this.services;
      d.logger = Ye, d.resourceStore = this.store, d.languageUtils = f, d.pluralResolver = new c3(f, {
        prepend: this.options.pluralSeparator,
        compatibilityJSON: this.options.compatibilityJSON,
        simplifyPluralSuffix: this.options.simplifyPluralSuffix
      }), c && (!this.options.interpolation.format || this.options.interpolation.format === i.interpolation.format) && (d.formatter = o(c), d.formatter.init(d, this.options), this.options.interpolation.format = d.formatter.format.bind(d.formatter)), d.interpolator = new f3(this.options), d.utils = {
        hasLoadedNamespace: this.hasLoadedNamespace.bind(this)
      }, d.backendConnector = new m3(o(this.modules.backend), d.resourceStore, d, this.options), d.backendConnector.on("*", function(h) {
        for (var v = arguments.length, x = new Array(v > 1 ? v - 1 : 0), C = 1; C < v; C++)
          x[C - 1] = arguments[C];
        t.emit(h, ...x);
      }), this.modules.languageDetector && (d.languageDetector = o(this.modules.languageDetector), d.languageDetector.init && d.languageDetector.init(d, this.options.detection, this.options)), this.modules.i18nFormat && (d.i18nFormat = o(this.modules.i18nFormat), d.i18nFormat.init && d.i18nFormat.init(this)), this.translator = new no(this.services, this.options), this.translator.on("*", function(h) {
        for (var v = arguments.length, x = new Array(v > 1 ? v - 1 : 0), C = 1; C < v; C++)
          x[C - 1] = arguments[C];
        t.emit(h, ...x);
      }), this.modules.external.forEach((h) => {
        h.init && h.init(this);
      });
    }
    if (this.format = this.options.interpolation.format, r || (r = ui), this.options.fallbackLng && !this.services.languageDetector && !this.options.lng) {
      const c = this.services.languageUtils.getFallbackCodes(this.options.fallbackLng);
      c.length > 0 && c[0] !== "dev" && (this.options.lng = c[0]);
    }
    !this.services.languageDetector && !this.options.lng && this.logger.warn("init: no languageDetector is used and no lng is defined"), ["getResource", "hasResourceBundle", "getResourceBundle", "getDataByLanguage"].forEach((c) => {
      this[c] = function() {
        return t.store[c](...arguments);
      };
    }), ["addResource", "addResources", "addResourceBundle", "removeResourceBundle"].forEach((c) => {
      this[c] = function() {
        return t.store[c](...arguments), t;
      };
    });
    const l = Yn(), u = () => {
      const c = (f, d) => {
        this.isInitializing = !1, this.isInitialized && !this.initializedStoreOnce && this.logger.warn("init: i18next is already initialized. You should call init just once!"), this.isInitialized = !0, this.options.isClone || this.logger.log("initialized", this.options), this.emit("initialized", this.options), l.resolve(d), r(f, d);
      };
      if (this.languages && this.options.compatibilityAPI !== "v1" && !this.isInitialized) return c(null, this.t.bind(this));
      this.changeLanguage(this.options.lng, c);
    };
    return this.options.resources || !this.options.initImmediate ? u() : setTimeout(u, 0), l;
  }
  loadResources(t) {
    let r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : ui;
    const i = typeof t == "string" ? t : this.language;
    if (typeof t == "function" && (r = t), !this.options.resources || this.options.partialBundledLanguages) {
      if (i && i.toLowerCase() === "cimode" && (!this.options.preload || this.options.preload.length === 0)) return r();
      const o = [], s = (a) => {
        if (!a || a === "cimode") return;
        this.services.languageUtils.toResolveHierarchy(a).forEach((u) => {
          u !== "cimode" && o.indexOf(u) < 0 && o.push(u);
        });
      };
      i ? s(i) : this.services.languageUtils.getFallbackCodes(this.options.fallbackLng).forEach((l) => s(l)), this.options.preload && this.options.preload.forEach((a) => s(a)), this.services.backendConnector.load(o, this.options.ns, (a) => {
        !a && !this.resolvedLanguage && this.language && this.setResolvedLanguage(this.language), r(a);
      });
    } else
      r(null);
  }
  reloadResources(t, n, r) {
    const i = Yn();
    return t || (t = this.languages), n || (n = this.options.ns), r || (r = ui), this.services.backendConnector.reload(t, n, (o) => {
      i.resolve(), r(o);
    }), i;
  }
  use(t) {
    if (!t) throw new Error("You are passing an undefined module! Please check the object you are passing to i18next.use()");
    if (!t.type) throw new Error("You are passing a wrong module! Please check the object you are passing to i18next.use()");
    return t.type === "backend" && (this.modules.backend = t), (t.type === "logger" || t.log && t.warn && t.error) && (this.modules.logger = t), t.type === "languageDetector" && (this.modules.languageDetector = t), t.type === "i18nFormat" && (this.modules.i18nFormat = t), t.type === "postProcessor" && Gd.addPostProcessor(t), t.type === "formatter" && (this.modules.formatter = t), t.type === "3rdParty" && this.modules.external.push(t), this;
  }
  setResolvedLanguage(t) {
    if (!(!t || !this.languages) && !(["cimode", "dev"].indexOf(t) > -1))
      for (let n = 0; n < this.languages.length; n++) {
        const r = this.languages[n];
        if (!(["cimode", "dev"].indexOf(r) > -1) && this.store.hasLanguageSomeTranslations(r)) {
          this.resolvedLanguage = r;
          break;
        }
      }
  }
  changeLanguage(t, n) {
    var r = this;
    this.isLanguageChangingTo = t;
    const i = Yn();
    this.emit("languageChanging", t);
    const o = (l) => {
      this.language = l, this.languages = this.services.languageUtils.toResolveHierarchy(l), this.resolvedLanguage = void 0, this.setResolvedLanguage(l);
    }, s = (l, u) => {
      u ? (o(u), this.translator.changeLanguage(u), this.isLanguageChangingTo = void 0, this.emit("languageChanged", u), this.logger.log("languageChanged", u)) : this.isLanguageChangingTo = void 0, i.resolve(function() {
        return r.t(...arguments);
      }), n && n(l, function() {
        return r.t(...arguments);
      });
    }, a = (l) => {
      !t && !l && this.services.languageDetector && (l = []);
      const u = typeof l == "string" ? l : this.services.languageUtils.getBestMatchFromCodes(l);
      u && (this.language || o(u), this.translator.language || this.translator.changeLanguage(u), this.services.languageDetector && this.services.languageDetector.cacheUserLanguage && this.services.languageDetector.cacheUserLanguage(u)), this.loadResources(u, (c) => {
        s(c, u);
      });
    };
    return !t && this.services.languageDetector && !this.services.languageDetector.async ? a(this.services.languageDetector.detect()) : !t && this.services.languageDetector && this.services.languageDetector.async ? this.services.languageDetector.detect.length === 0 ? this.services.languageDetector.detect().then(a) : this.services.languageDetector.detect(a) : a(t), i;
  }
  getFixedT(t, n, r) {
    var i = this;
    const o = function(s, a) {
      let l;
      if (typeof a != "object") {
        for (var u = arguments.length, c = new Array(u > 2 ? u - 2 : 0), f = 2; f < u; f++)
          c[f - 2] = arguments[f];
        l = i.options.overloadTranslationOptionHandler([s, a].concat(c));
      } else
        l = {
          ...a
        };
      l.lng = l.lng || o.lng, l.lngs = l.lngs || o.lngs, l.ns = l.ns || o.ns, l.keyPrefix !== "" && (l.keyPrefix = l.keyPrefix || r || o.keyPrefix);
      const d = i.options.keySeparator || ".";
      let h;
      return l.keyPrefix && Array.isArray(s) ? h = s.map((v) => `${l.keyPrefix}${d}${v}`) : h = l.keyPrefix ? `${l.keyPrefix}${d}${s}` : s, i.t(h, l);
    };
    return typeof t == "string" ? o.lng = t : o.lngs = t, o.ns = n, o.keyPrefix = r, o;
  }
  t() {
    return this.translator && this.translator.translate(...arguments);
  }
  exists() {
    return this.translator && this.translator.exists(...arguments);
  }
  setDefaultNamespace(t) {
    this.options.defaultNS = t;
  }
  hasLoadedNamespace(t) {
    let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    if (!this.isInitialized)
      return this.logger.warn("hasLoadedNamespace: i18next was not initialized", this.languages), !1;
    if (!this.languages || !this.languages.length)
      return this.logger.warn("hasLoadedNamespace: i18n.languages were undefined or empty", this.languages), !1;
    const r = n.lng || this.resolvedLanguage || this.languages[0], i = this.options ? this.options.fallbackLng : !1, o = this.languages[this.languages.length - 1];
    if (r.toLowerCase() === "cimode") return !0;
    const s = (a, l) => {
      const u = this.services.backendConnector.state[`${a}|${l}`];
      return u === -1 || u === 2;
    };
    if (n.precheck) {
      const a = n.precheck(this, s);
      if (a !== void 0) return a;
    }
    return !!(this.hasResourceBundle(r, t) || !this.services.backendConnector.backend || this.options.resources && !this.options.partialBundledLanguages || s(r, t) && (!i || s(o, t)));
  }
  loadNamespaces(t, n) {
    const r = Yn();
    return this.options.ns ? (typeof t == "string" && (t = [t]), t.forEach((i) => {
      this.options.ns.indexOf(i) < 0 && this.options.ns.push(i);
    }), this.loadResources((i) => {
      r.resolve(), n && n(i);
    }), r) : (n && n(), Promise.resolve());
  }
  loadLanguages(t, n) {
    const r = Yn();
    typeof t == "string" && (t = [t]);
    const i = this.options.preload || [], o = t.filter((s) => i.indexOf(s) < 0 && this.services.languageUtils.isSupportedCode(s));
    return o.length ? (this.options.preload = i.concat(o), this.loadResources((s) => {
      r.resolve(), n && n(s);
    }), r) : (n && n(), Promise.resolve());
  }
  dir(t) {
    if (t || (t = this.resolvedLanguage || (this.languages && this.languages.length > 0 ? this.languages[0] : this.language)), !t) return "rtl";
    const n = ["ar", "shu", "sqr", "ssh", "xaa", "yhd", "yud", "aao", "abh", "abv", "acm", "acq", "acw", "acx", "acy", "adf", "ads", "aeb", "aec", "afb", "ajp", "apc", "apd", "arb", "arq", "ars", "ary", "arz", "auz", "avl", "ayh", "ayl", "ayn", "ayp", "bbz", "pga", "he", "iw", "ps", "pbt", "pbu", "pst", "prp", "prd", "ug", "ur", "ydd", "yds", "yih", "ji", "yi", "hbo", "men", "xmn", "fa", "jpr", "peo", "pes", "prs", "dv", "sam", "ckb"], r = this.services && this.services.languageUtils || new bu(Vu());
    return n.indexOf(r.getLanguagePartFromCode(t)) > -1 || t.toLowerCase().indexOf("-arab") > 1 ? "rtl" : "ltr";
  }
  static createInstance() {
    let t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, n = arguments.length > 1 ? arguments[1] : void 0;
    return new Mr(t, n);
  }
  cloneInstance() {
    let t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : ui;
    const r = t.forkResourceStore;
    r && delete t.forkResourceStore;
    const i = {
      ...this.options,
      ...t,
      isClone: !0
    }, o = new Mr(i);
    return (t.debug !== void 0 || t.prefix !== void 0) && (o.logger = o.logger.clone(t)), ["store", "services", "language"].forEach((a) => {
      o[a] = this[a];
    }), o.services = {
      ...this.services
    }, o.services.utils = {
      hasLoadedNamespace: o.hasLoadedNamespace.bind(o)
    }, r && (o.store = new Au(this.store.data, i), o.services.resourceStore = o.store), o.translator = new no(o.services, i), o.translator.on("*", function(a) {
      for (var l = arguments.length, u = new Array(l > 1 ? l - 1 : 0), c = 1; c < l; c++)
        u[c - 1] = arguments[c];
      o.emit(a, ...u);
    }), o.init(i, n), o.translator.options = i, o.translator.backendConnector.services.utils = {
      hasLoadedNamespace: o.hasLoadedNamespace.bind(o)
    }, o;
  }
  toJSON() {
    return {
      options: this.options,
      store: this.store,
      language: this.language,
      languages: this.languages,
      resolvedLanguage: this.resolvedLanguage
    };
  }
}
const ce = Mr.createInstance();
ce.createInstance = Mr.createInstance;
ce.createInstance;
ce.dir;
ce.init;
ce.loadResources;
ce.reloadResources;
ce.use;
ce.changeLanguage;
ce.getFixedT;
ce.t;
ce.exists;
ce.setDefaultNamespace;
ce.hasLoadedNamespace;
ce.loadNamespaces;
ce.loadLanguages;
async function ie(e, t = {}) {
  typeof e == "object" ? t = e : typeof e == "string" && (t.url = e), t.headers || (t.headers = {}), t.body && !(t.body instanceof FormData) && (t.headers["Content-Type"] = "application/json", t.body = JSON.stringify(t.body));
  let n = window.TOKEN || sessionStorage.getItem("TOKEN");
  n || (n = localStorage.getItem("TOKEN")), n && (t.headers.Authorization = `Bearer ${n}`);
  let r = window.serverURL;
  if (!r) {
    const l = location.pathname.match(/(.*?\/)ui/);
    r = l ? l[1] : "/";
  }
  const i = t.url.includes("?") ? "&" : "?", o = await fetch(
    `${r}${t.url}${i}lang=${ce.language}`,
    t
  );
  if (!o.ok) {
    if (o.status === 401)
      throw new Error(401);
    let l;
    try {
      l = await o.json();
    } catch {
    }
    throw new Error(`${o.status}: ${(l == null ? void 0 : l.errmsg) || o.statusText}`);
  }
  const s = await o.json();
  if (s.errno !== 0)
    throw new Error(s.errmsg);
  return { __version: o.headers.get("x-waline-version"), ...s.data };
}
async function Gn({ page: e = 1, filter: t }) {
  return ie({
    url: `comment?type=list&owner=${t.owner}&status=${t.status}&keyword=${t.keyword}&page=${e}`,
    method: "GET"
  });
}
async function pt(e, t) {
  return ie({
    url: `comment/${e}`,
    method: "PUT",
    body: t
  });
}
async function v3(e) {
  return ie({
    url: "comment",
    method: "POST",
    body: e
  });
}
async function Hu(e) {
  return ie({
    url: `comment/${e}`,
    method: "DELETE"
  });
}
function y3() {
  const { t: e } = ct(), t = k.useRef(null), n = k.useRef(null), r = k.useRef({}), i = At((y) => y.user), [o, s] = k.useState({
    page: 1,
    totalPages: 0,
    spamCount: 0,
    waitingCount: 0,
    data: []
  }), [a, l] = k.useReducer(
    function(y, S) {
      return { ...y, ...S };
    },
    { owner: "all", status: "approved", keyword: "" }
  ), [u, c] = k.useState({}), [f, d] = k.useState(!1), [h, v] = k.useState([]), x = [
    [
      "owner",
      [
        { type: "all", name: /* @__PURE__ */ p.jsx(tt, { i18nKey: "all" }) },
        { type: "mine", name: /* @__PURE__ */ p.jsx(tt, { i18nKey: "mine" }) }
      ]
    ],
    [
      "status",
      [
        { type: "approved", name: /* @__PURE__ */ p.jsx(tt, { i18nKey: "approved" }) },
        { type: "waiting", name: /* @__PURE__ */ p.jsx(tt, { i18nKey: "waiting" }) },
        { type: "spam", name: /* @__PURE__ */ p.jsx(tt, { i18nKey: "spam" }) }
      ]
    ]
  ];
  k.useEffect(() => {
    Gn({ page: o.page, filter: a }).then((y) => {
      s({ ...o, ...y }), v([]);
    });
  }, [a, o.page]);
  const C = (y) => [
    {
      key: "approved",
      name: e("approved button"),
      show: !0,
      disable: y && y.status === "approved",
      async action() {
        if (y) {
          switch (await pt(y.objectId, { status: "approved" }), o.data = o.data.filter(
            ({ objectId: S }) => S !== y.objectId
          ), y.status) {
            case "waiting":
              o.waitingCount -= 1;
              break;
            case "spam":
              o.spamCount -= 1;
              break;
          }
          s({ ...o });
        } else
          await Promise.all(
            h.map(
              (S) => pt(S, { status: "approved" })
            )
          ), Gn({ page: o.page, filter: a }).then((S) => {
            s({ ...o, ...S }), v([]);
          });
      }
    },
    {
      key: "waiting",
      name: e("waiting"),
      show: !0,
      disable: y && y.status === "waiting",
      async action() {
        y ? (await pt(y.objectId, { status: "waiting" }), o.data = o.data.filter(
          ({ objectId: S }) => S !== y.objectId
        ), y.status === "spam" && (o.spamCount -= 1), o.waitingCount += 1, s({ ...o })) : (await Promise.all(
          h.map(
            (S) => pt(S, { status: "waiting" })
          )
        ), Gn({ page: o.page, filter: a }).then((S) => {
          s({ ...o, ...S }), v([]);
        }));
      }
    },
    {
      key: "spam",
      show: !0,
      name: e(y ? "spam" : "mark as spam"),
      disable: y && y.status === "spam",
      async action() {
        y ? (await pt(y.objectId, { status: "spam" }), o.data = o.data.filter(
          ({ objectId: S }) => S !== y.objectId
        ), o.spamCount += 1, s({ ...o })) : (await Promise.all(
          h.map(
            (S) => pt(S, { status: "spam" })
          )
        ), Gn({ page: o.page, filter: a }).then((S) => {
          s({ ...o, ...S }), v([]);
        }));
      }
    },
    {
      key: "sticky",
      show: y && !y.rid && y.status === "approved",
      name: y && y.sticky ? e("disable sticky") : e("sticky"),
      async action(S) {
        S.preventDefault();
        const E = !y.sticky;
        o.data.forEach((N) => {
          N.objectId === y.objectId && (N.sticky = E);
        }), await pt(y.objectId, { sticky: E ? 1 : 0 }), s({ ...o });
      }
    },
    {
      key: "edit",
      show: y,
      name: e("edit"),
      action() {
        const S = {};
        u.id !== y.objectId && u.action !== "edit" && (S.id = y.objectId, S.action = "edit"), c(S);
      }
    },
    {
      key: "reply",
      show: y && y.status === "approved",
      name: e("reply"),
      action() {
        const S = {};
        u.id !== y.objectId && u.action !== "reply" && (S.id = y.objectId, S.action = "reply"), c(S);
      }
    },
    {
      key: "delete",
      name: e("delete"),
      show: !0,
      async action() {
        const S = y ? e("delete one confirm", { nick: y.nick }) : e("delete multiple confirm");
        confirm(S) && (y ? (await Hu(y.objectId), o.data = o.data.filter(
          ({ objectId: E }) => E !== y.objectId
        ), s({ ...o })) : (await Promise.all(h.map(Hu)), Gn({ page: o.page, filter: a }).then((E) => {
          s({ ...o, ...E }), v([]);
        })));
      }
    }
  ].filter(({ show: S }) => S), g = async ({ pid: y, rid: S, url: E, at: N }) => {
    const L = n.current.value;
    if (!L)
      return null;
    const { display_name: _, email: R, url: F } = i;
    await v3({
      nick: _,
      mail: R,
      ua: navigator.userAgent,
      link: F,
      url: E,
      comment: L,
      pid: y,
      rid: S || y,
      at: N
    }), location.reload();
  }, m = async (y) => {
    const S = o.data[y];
    await pt(S.objectId, r.current), o.data[y] = { ...S, ...r.current }, s({ ...o }), c({});
  }, w = o.data.length && o.data.every(({ objectId: y }) => h.includes(y));
  return /* @__PURE__ */ p.jsxs(p.Fragment, { children: [
    /* @__PURE__ */ p.jsx(on, {}),
    /* @__PURE__ */ p.jsx("div", { className: "main", children: /* @__PURE__ */ p.jsxs("div", { className: "body container", children: [
      /* @__PURE__ */ p.jsx("div", { className: "typecho-page-title", children: /* @__PURE__ */ p.jsx("h2", { children: e("manage comments") }) }),
      /* @__PURE__ */ p.jsx("div", { className: "row typecho-page-main", role: "main", children: /* @__PURE__ */ p.jsxs("div", { className: "col-mb-12 typecho-list", children: [
        /* @__PURE__ */ p.jsx("div", { className: "clear-fix", children: x.map(([y, S]) => /* @__PURE__ */ p.jsx(
          "ul",
          {
            className: $r("typecho-option-tabs", {
              right: y === "owner"
            }),
            children: S.map(({ type: E, name: N }) => /* @__PURE__ */ p.jsx(
              "li",
              {
                className: $r({ current: E === a[y] }),
                children: /* @__PURE__ */ p.jsxs(
                  "a",
                  {
                    href: "javascript:void(0)",
                    onClick: () => l({ [y]: E }),
                    children: [
                      N,
                      y === "status" && E !== "approved" && o[`${E}Count`] > 0 ? /* @__PURE__ */ p.jsx("span", { className: "balloon", children: o[`${E}Count`] }) : null
                    ]
                  }
                )
              },
              E
            ))
          },
          y
        )) }),
        /* @__PURE__ */ p.jsx("div", { className: "typecho-list-operate clear-fix", children: /* @__PURE__ */ p.jsxs("form", { method: "get", children: [
          /* @__PURE__ */ p.jsxs("div", { className: "operate", children: [
            /* @__PURE__ */ p.jsxs("label", { children: [
              /* @__PURE__ */ p.jsx("i", { className: "sr-only", children: e("select all") }),
              /* @__PURE__ */ p.jsx(
                "input",
                {
                  type: "checkbox",
                  className: "typecho-table-select-all",
                  checked: w,
                  onChange: () => v(
                    w ? [] : o.data.map(({ objectId: y }) => y)
                  )
                }
              )
            ] }),
            /* @__PURE__ */ p.jsxs("div", { className: "btn-group btn-drop", children: [
              /* @__PURE__ */ p.jsxs(
                "button",
                {
                  className: "btn dropdown-toggle btn-s",
                  type: "button",
                  onClick: () => d(!f),
                  children: [
                    /* @__PURE__ */ p.jsx("i", { className: "sr-only", children: e("action") }),
                    e("selected items"),
                    " ",
                    /* @__PURE__ */ p.jsx("i", { className: "i-caret-down" })
                  ]
                }
              ),
              /* @__PURE__ */ p.jsx(
                "ul",
                {
                  className: "dropdown-menu",
                  style: { display: f ? "block" : "none" },
                  onClick: () => d(!1),
                  children: C().map(({ key: y, name: S, action: E }) => /* @__PURE__ */ p.jsx("li", { children: /* @__PURE__ */ p.jsx("a", { href: "javascript:void(0)", onClick: E, children: S }) }, y))
                }
              ),
              " "
            ] })
          ] }),
          /* @__PURE__ */ p.jsxs("div", { className: "search", role: "search", children: [
            /* @__PURE__ */ p.jsx(
              "input",
              {
                type: "text",
                ref: t,
                className: "text-s",
                placeholder: e("please input keywords")
              }
            ),
            " ",
            /* @__PURE__ */ p.jsx(
              "button",
              {
                type: "submit",
                className: "btn btn-s",
                onClick: (y) => {
                  y.preventDefault(), l({ keyword: t.current.value });
                },
                children: e("filter")
              }
            )
          ] })
        ] }) }),
        /* @__PURE__ */ p.jsx(
          "form",
          {
            method: "post",
            name: "manage_comments",
            className: "operate-form",
            children: /* @__PURE__ */ p.jsx("div", { className: "typecho-table-wrap", children: /* @__PURE__ */ p.jsxs("table", { className: "typecho-list-table", children: [
              /* @__PURE__ */ p.jsxs("colgroup", { children: [
                /* @__PURE__ */ p.jsx("col", { width: "3%" }),
                /* @__PURE__ */ p.jsx("col", { width: "6%" }),
                /* @__PURE__ */ p.jsx("col", { width: "20%" }),
                /* @__PURE__ */ p.jsx("col", { width: "71%" })
              ] }),
              /* @__PURE__ */ p.jsx("thead", { children: /* @__PURE__ */ p.jsxs("tr", { children: [
                /* @__PURE__ */ p.jsx("th", { children: " " }),
                /* @__PURE__ */ p.jsx("th", { children: " " }),
                /* @__PURE__ */ p.jsx("th", { children: e("author") }),
                /* @__PURE__ */ p.jsx("th", { children: e("content") })
              ] }) }),
              /* @__PURE__ */ p.jsx("tbody", { children: o.data.map(
                ({
                  objectId: y,
                  nick: S,
                  mail: E,
                  avatar: N,
                  link: L,
                  comment: _,
                  ip: R,
                  addr: F,
                  url: Z,
                  status: te,
                  rid: se,
                  pid: z,
                  sticky: Ke,
                  time: ft,
                  insertedAt: P
                }, $) => u.id === y && u.action === "edit" ? /* @__PURE__ */ p.jsxs("tr", { className: "comment-edit", children: [
                  /* @__PURE__ */ p.jsx("td", { children: " " }),
                  /* @__PURE__ */ p.jsx("td", { colSpan: "2", style: { verticalAlign: "top" }, children: /* @__PURE__ */ p.jsxs("div", { className: "comment-edit-info", children: [
                    /* @__PURE__ */ p.jsxs("p", { children: [
                      /* @__PURE__ */ p.jsx(
                        "label",
                        {
                          htmlFor: `comment-${y}-author`,
                          children: e("username")
                        }
                      ),
                      /* @__PURE__ */ p.jsx(
                        "input",
                        {
                          className: "text-s w-100",
                          id: `comment-${y}-author`,
                          name: "author",
                          type: "text",
                          defaultValue: S,
                          onChange: (T) => r.current.nick = T.target.value
                        }
                      )
                    ] }),
                    /* @__PURE__ */ p.jsxs("p", { children: [
                      /* @__PURE__ */ p.jsx("label", { htmlFor: `comment-${y}-mail`, children: e("email") }),
                      /* @__PURE__ */ p.jsx(
                        "input",
                        {
                          className: "text-s w-100",
                          type: "email",
                          name: "mail",
                          id: `comment-${y}-mail`,
                          defaultValue: E,
                          onChange: (T) => r.current.mail = T.target.value
                        }
                      )
                    ] }),
                    /* @__PURE__ */ p.jsxs("p", { children: [
                      /* @__PURE__ */ p.jsx("label", { htmlFor: `comment-${y}-url`, children: e("homepage") }),
                      /* @__PURE__ */ p.jsx(
                        "input",
                        {
                          className: "text-s w-100",
                          type: "text",
                          name: "url",
                          id: `comment-${y}-author`,
                          defaultValue: L,
                          onChange: (T) => r.current.link = T.target.value
                        }
                      )
                    ] })
                  ] }) }),
                  /* @__PURE__ */ p.jsx("td", { style: { verticalAlign: "top" }, children: /* @__PURE__ */ p.jsxs("div", { className: "comment-edit-content", children: [
                    /* @__PURE__ */ p.jsxs("p", { children: [
                      /* @__PURE__ */ p.jsx("label", { htmlFor: `comment-${y}-text`, children: e("content") }),
                      /* @__PURE__ */ p.jsx(
                        "textarea",
                        {
                          name: "text",
                          id: `comment-${y}-text`,
                          rows: "6",
                          className: "w-90 mono",
                          defaultValue: _,
                          onChange: (T) => r.current.comment = T.target.value
                        }
                      )
                    ] }),
                    /* @__PURE__ */ p.jsxs("p", { children: [
                      /* @__PURE__ */ p.jsx(
                        "button",
                        {
                          type: "button",
                          className: "btn btn-s primary",
                          onClick: () => m($),
                          children: e("submit")
                        }
                      ),
                      /* @__PURE__ */ p.jsx(
                        "button",
                        {
                          type: "button",
                          className: "btn btn-s cancel",
                          onClick: () => c({}),
                          children: e("cancel")
                        }
                      )
                    ] })
                  ] }) })
                ] }, y) : /* @__PURE__ */ p.jsxs("tr", { id: `comment-${y}`, children: [
                  /* @__PURE__ */ p.jsx("td", { style: { verticalalign: "top" }, children: /* @__PURE__ */ p.jsx(
                    "input",
                    {
                      type: "checkbox",
                      value: y,
                      checked: h.includes(y),
                      onChange: () => v(
                        h.includes(y) ? h.filter(
                          (T) => T !== y
                        ) : [...h, y]
                      )
                    }
                  ) }),
                  /* @__PURE__ */ p.jsx("td", { style: { verticalalign: "top" }, children: /* @__PURE__ */ p.jsx("div", { className: "comment-avatar", children: /* @__PURE__ */ p.jsx(
                    "img",
                    {
                      className: "avatar",
                      src: Qd(E, N),
                      alt: S,
                      width: "40",
                      height: "40"
                    }
                  ) }) }),
                  /* @__PURE__ */ p.jsx(
                    "td",
                    {
                      style: { verticalalign: "top" },
                      className: "comment-head",
                      children: /* @__PURE__ */ p.jsxs("div", { className: "comment-meta", children: [
                        /* @__PURE__ */ p.jsx("strong", { className: "comment-author", children: L ? /* @__PURE__ */ p.jsx(
                          "a",
                          {
                            href: /^https:\/\//.test(L) ? L : "https://" + L,
                            rel: "external nofollow noreferrer",
                            target: "_blank",
                            children: S
                          }
                        ) : S }),
                        /* @__PURE__ */ p.jsx("br", {}),
                        /* @__PURE__ */ p.jsx("span", { children: /* @__PURE__ */ p.jsx(
                          "a",
                          {
                            href: `mailto:${E}`,
                            target: "_blank",
                            rel: "noreferrer",
                            children: E
                          }
                        ) }),
                        E && /* @__PURE__ */ p.jsx("br", {}),
                        /* @__PURE__ */ p.jsx("span", { children: R }),
                        R && /* @__PURE__ */ p.jsx("br", {}),
                        /* @__PURE__ */ p.jsx("span", { children: F })
                      ] })
                    }
                  ),
                  /* @__PURE__ */ p.jsxs(
                    "td",
                    {
                      style: { verticalalign: "top" },
                      className: "comment-body",
                      children: [
                        /* @__PURE__ */ p.jsxs("div", { className: "comment-date", children: [
                          Qg(P || ft),
                          " ",
                          e("at"),
                          " ",
                          /* @__PURE__ */ p.jsx(
                            "a",
                            {
                              href: Wg(Z),
                              target: "_blank",
                              rel: "noreferrer",
                              children: Z
                            }
                          )
                        ] }),
                        /* @__PURE__ */ p.jsx(
                          "div",
                          {
                            className: "comment-content",
                            dangerouslySetInnerHTML: { __html: _ }
                          }
                        ),
                        u.id === y && u.action === "reply" ? /* @__PURE__ */ p.jsxs("form", { className: "comment-reply", children: [
                          /* @__PURE__ */ p.jsxs("p", { children: [
                            /* @__PURE__ */ p.jsx("label", { htmlFor: "text", className: "sr-only", children: e("content") }),
                            /* @__PURE__ */ p.jsx(
                              "textarea",
                              {
                                id: "text",
                                name: "text",
                                className: "w-90 mono",
                                rows: "3",
                                ref: n
                              }
                            )
                          ] }),
                          /* @__PURE__ */ p.jsxs("p", { children: [
                            /* @__PURE__ */ p.jsx(
                              "button",
                              {
                                type: "button",
                                className: "btn btn-s primary",
                                onClick: (T) => {
                                  T.preventDefault(), g({
                                    rid: se,
                                    pid: y,
                                    url: Z,
                                    at: S
                                  });
                                },
                                children: e("reply")
                              }
                            ),
                            " ",
                            " ",
                            /* @__PURE__ */ p.jsx(
                              "button",
                              {
                                type: "button",
                                className: "btn btn-s cancel",
                                onClick: () => c({}),
                                children: e("cancel")
                              }
                            )
                          ] })
                        ] }) : null,
                        /* @__PURE__ */ p.jsx("div", { className: "comment-action hidden-by-mouse", children: C({
                          objectId: y,
                          nick: S,
                          status: te,
                          rid: se,
                          pid: z,
                          sticky: Ke
                        }).map(
                          ({ key: T, disable: b, name: Y, action: sn }) => b ? /* @__PURE__ */ p.jsx("span", { className: "weak", children: Y }, T) : /* @__PURE__ */ p.jsx(
                            "a",
                            {
                              href: "javascript:void(0)",
                              className: `operate-${T}`,
                              onClick: sn,
                              children: Y
                            },
                            T
                          )
                        ) })
                      ]
                    }
                  )
                ] }, y)
              ) })
            ] }) })
          }
        ),
        /* @__PURE__ */ p.jsx("div", { className: "typecho-list-operate clear-fix", children: /* @__PURE__ */ p.jsx("form", { method: "get", children: /* @__PURE__ */ p.jsx(
          Zd,
          {
            current: o.page,
            total: o.totalPages,
            onChange: (y) => s({ ...o, page: y })
          }
        ) }) })
      ] }) })
    ] }) })
  ] });
}
function w3(e, t, n) {
  const r = new Blob([e], { type: n }), i = document.createElement("a"), o = URL.createObjectURL(r);
  i.href = o, i.download = t, document.body.appendChild(i), i.click(), setTimeout(() => {
    document.body.removeChild(i), window.URL.revokeObjectURL(o);
  }, 0);
}
function x3(e) {
  return new Promise((t, n) => {
    const r = new FileReader();
    r.onload = (i) => t(i.target.result), r.onerror = n, r.readAsText(e);
  });
}
function C3() {
  const [e, t] = k.useState(!1), [n, r] = k.useState(!1), { t: i } = ct(), o = k.useRef(null), s = () => {
    confirm(i("import clear data confirm")) && o.current.click();
  }, a = async (u) => {
    try {
      const c = await x3(u.target.files[0]), f = JSON.parse(c);
      if (!f || f.type !== "waline")
        return alert("import data format not support!");
      const d = f.tables.reduce(
        (g, m) => {
          var w;
          return g + (((w = f.data[m]) == null ? void 0 : w.length) || 0);
        },
        0
      );
      let h = 0;
      t([
        "importing {{importedLength}}/{{maxLength}}",
        { importedLength: h, maxLength: d }
      ]);
      const v = {};
      for (const g of f.tables) {
        const m = f.data[g];
        if (g !== "Users" && await ie({
          url: "db?table=" + g,
          method: "DELETE"
        }), v[g] || (v[g] = {}), !!Array.isArray(m))
          for (const w of m) {
            let y = !1;
            if (g === "Users") {
              const _ = await ie("user?email=" + w.email);
              _.objectId && (y = _.objectId);
            }
            const E = g == "Users" && y ? "PUT" : "POST", N = g === "Comment" ? Object.assign({}, w, {
              rid: void 0,
              pid: void 0,
              user_id: void 0
            }) : w;
            for (const _ in N)
              (N[_] === null || N[_] === void 0) && delete N[_];
            const L = await ie({
              url: `db?table=${g}${E === "PUT" ? `&objectId=${y}` : ""}`,
              method: E,
              body: N
            });
            v[g][w.objectId] = L.objectId, h += 1, t([
              "importing {{importedLength}}/{{maxLength}}",
              { importedLength: h, maxLength: d }
            ]);
          }
      }
      t(["comment data index relationship reconstruction"]);
      const x = f.data.Comment, C = [];
      for (const g of x) {
        const m = {};
        [
          { tableName: "Comment", field: "pid" },
          { tableName: "Comment", field: "rid" },
          { tableName: "Users", field: "user_id" }
        ].forEach(({ tableName: w, field: y }) => {
          if (!g[y])
            return;
          const S = g[y], E = v[w][g[y]];
          S && E && S !== E && (m[y] = E);
        }), Object.keys(m).length && C.push([
          m,
          { objectId: v.Comment[g.objectId] }
        ]);
      }
      h = 0;
      for (const [g, m] of C)
        await ie({
          url: `db?table=Comment&objectId=${m.objectId}`,
          method: "PUT",
          body: g
        }), h += 1, t([
          "index updating {{importedLength}}/{{maxLength}}",
          { importedLength: h, maxLength: C.length }
        ]);
      alert(i("import success")), location.reload();
    } catch (c) {
      throw console.log(c), alert(c.message), c;
    } finally {
      t(!1), u.target.value = null;
    }
  }, l = async () => {
    r(!0);
    try {
      const u = await ie("db");
      w3(
        JSON.stringify(u, null, "	"),
        "waline.json",
        "application/javascript"
      );
    } finally {
      r(!1);
    }
  };
  return /* @__PURE__ */ p.jsxs(p.Fragment, { children: [
    /* @__PURE__ */ p.jsx(on, {}),
    /* @__PURE__ */ p.jsx("div", { className: "main", children: /* @__PURE__ */ p.jsxs("div", { className: "body container", children: [
      /* @__PURE__ */ p.jsx("div", { className: "typecho-page-title", children: /* @__PURE__ */ p.jsx("h2", { children: i("migration") }) }),
      /* @__PURE__ */ p.jsxs("div", { className: "row typecho-page-main", children: [
        /* @__PURE__ */ p.jsx("div", { className: "col-mb-12 col-tb-6", style: { textAlign: "center" }, children: /* @__PURE__ */ p.jsx(
          "button",
          {
            className: "btn",
            style: { height: 80, fontSize: 30, padding: "0 40px" },
            onClick: l,
            disabled: n,
            children: i(n ? "exporting" : "export")
          }
        ) }),
        /* @__PURE__ */ p.jsxs("div", { className: "col-mb-12 col-tb-6", style: { textAlign: "center" }, children: [
          /* @__PURE__ */ p.jsx(
            "button",
            {
              className: "btn error",
              style: { height: 80, fontSize: 30, padding: "0 40px" },
              onClick: s,
              disabled: e,
              children: Array.isArray(e) ? i(...e) : i("import")
            }
          ),
          /* @__PURE__ */ p.jsx(
            "input",
            {
              ref: o,
              onChange: a,
              type: "file",
              style: { display: "none" }
            }
          )
        ] })
      ] })
    ] }) })
  ] });
}
var S3 = Object.defineProperty, ro = Object.getOwnPropertySymbols, Jd = Object.prototype.hasOwnProperty, Xd = Object.prototype.propertyIsEnumerable, Ku = (e, t, n) => t in e ? S3(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n, Ir = (e, t) => {
  for (var n in t || (t = {}))
    Jd.call(t, n) && Ku(e, n, t[n]);
  if (ro)
    for (var n of ro(t))
      Xd.call(t, n) && Ku(e, n, t[n]);
  return e;
}, ia = (e, t) => {
  var n = {};
  for (var r in e)
    Jd.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && ro)
    for (var r of ro(e))
      t.indexOf(r) < 0 && Xd.call(e, r) && (n[r] = e[r]);
  return n;
};
/**
 * @license QR Code generator library (TypeScript)
 * Copyright (c) Project Nayuki.
 * SPDX-License-Identifier: MIT
 */
var Xt;
((e) => {
  const t = class {
    constructor(l, u, c, f) {
      if (this.version = l, this.errorCorrectionLevel = u, this.modules = [], this.isFunction = [], l < t.MIN_VERSION || l > t.MAX_VERSION)
        throw new RangeError("Version value out of range");
      if (f < -1 || f > 7)
        throw new RangeError("Mask value out of range");
      this.size = l * 4 + 17;
      let d = [];
      for (let v = 0; v < this.size; v++)
        d.push(!1);
      for (let v = 0; v < this.size; v++)
        this.modules.push(d.slice()), this.isFunction.push(d.slice());
      this.drawFunctionPatterns();
      const h = this.addEccAndInterleave(c);
      if (this.drawCodewords(h), f == -1) {
        let v = 1e9;
        for (let x = 0; x < 8; x++) {
          this.applyMask(x), this.drawFormatBits(x);
          const C = this.getPenaltyScore();
          C < v && (f = x, v = C), this.applyMask(x);
        }
      }
      o(0 <= f && f <= 7), this.mask = f, this.applyMask(f), this.drawFormatBits(f), this.isFunction = [];
    }
    static encodeText(l, u) {
      const c = e.QrSegment.makeSegments(l);
      return t.encodeSegments(c, u);
    }
    static encodeBinary(l, u) {
      const c = e.QrSegment.makeBytes(l);
      return t.encodeSegments([c], u);
    }
    static encodeSegments(l, u, c = 1, f = 40, d = -1, h = !0) {
      if (!(t.MIN_VERSION <= c && c <= f && f <= t.MAX_VERSION) || d < -1 || d > 7)
        throw new RangeError("Invalid value");
      let v, x;
      for (v = c; ; v++) {
        const w = t.getNumDataCodewords(v, u) * 8, y = a.getTotalBits(l, v);
        if (y <= w) {
          x = y;
          break;
        }
        if (v >= f)
          throw new RangeError("Data too long");
      }
      for (const w of [t.Ecc.MEDIUM, t.Ecc.QUARTILE, t.Ecc.HIGH])
        h && x <= t.getNumDataCodewords(v, w) * 8 && (u = w);
      let C = [];
      for (const w of l) {
        r(w.mode.modeBits, 4, C), r(w.numChars, w.mode.numCharCountBits(v), C);
        for (const y of w.getData())
          C.push(y);
      }
      o(C.length == x);
      const g = t.getNumDataCodewords(v, u) * 8;
      o(C.length <= g), r(0, Math.min(4, g - C.length), C), r(0, (8 - C.length % 8) % 8, C), o(C.length % 8 == 0);
      for (let w = 236; C.length < g; w ^= 253)
        r(w, 8, C);
      let m = [];
      for (; m.length * 8 < C.length; )
        m.push(0);
      return C.forEach((w, y) => m[y >>> 3] |= w << 7 - (y & 7)), new t(v, u, m, d);
    }
    getModule(l, u) {
      return 0 <= l && l < this.size && 0 <= u && u < this.size && this.modules[u][l];
    }
    getModules() {
      return this.modules;
    }
    drawFunctionPatterns() {
      for (let c = 0; c < this.size; c++)
        this.setFunctionModule(6, c, c % 2 == 0), this.setFunctionModule(c, 6, c % 2 == 0);
      this.drawFinderPattern(3, 3), this.drawFinderPattern(this.size - 4, 3), this.drawFinderPattern(3, this.size - 4);
      const l = this.getAlignmentPatternPositions(), u = l.length;
      for (let c = 0; c < u; c++)
        for (let f = 0; f < u; f++)
          c == 0 && f == 0 || c == 0 && f == u - 1 || c == u - 1 && f == 0 || this.drawAlignmentPattern(l[c], l[f]);
      this.drawFormatBits(0), this.drawVersion();
    }
    drawFormatBits(l) {
      const u = this.errorCorrectionLevel.formatBits << 3 | l;
      let c = u;
      for (let d = 0; d < 10; d++)
        c = c << 1 ^ (c >>> 9) * 1335;
      const f = (u << 10 | c) ^ 21522;
      o(f >>> 15 == 0);
      for (let d = 0; d <= 5; d++)
        this.setFunctionModule(8, d, i(f, d));
      this.setFunctionModule(8, 7, i(f, 6)), this.setFunctionModule(8, 8, i(f, 7)), this.setFunctionModule(7, 8, i(f, 8));
      for (let d = 9; d < 15; d++)
        this.setFunctionModule(14 - d, 8, i(f, d));
      for (let d = 0; d < 8; d++)
        this.setFunctionModule(this.size - 1 - d, 8, i(f, d));
      for (let d = 8; d < 15; d++)
        this.setFunctionModule(8, this.size - 15 + d, i(f, d));
      this.setFunctionModule(8, this.size - 8, !0);
    }
    drawVersion() {
      if (this.version < 7)
        return;
      let l = this.version;
      for (let c = 0; c < 12; c++)
        l = l << 1 ^ (l >>> 11) * 7973;
      const u = this.version << 12 | l;
      o(u >>> 18 == 0);
      for (let c = 0; c < 18; c++) {
        const f = i(u, c), d = this.size - 11 + c % 3, h = Math.floor(c / 3);
        this.setFunctionModule(d, h, f), this.setFunctionModule(h, d, f);
      }
    }
    drawFinderPattern(l, u) {
      for (let c = -4; c <= 4; c++)
        for (let f = -4; f <= 4; f++) {
          const d = Math.max(Math.abs(f), Math.abs(c)), h = l + f, v = u + c;
          0 <= h && h < this.size && 0 <= v && v < this.size && this.setFunctionModule(h, v, d != 2 && d != 4);
        }
    }
    drawAlignmentPattern(l, u) {
      for (let c = -2; c <= 2; c++)
        for (let f = -2; f <= 2; f++)
          this.setFunctionModule(l + f, u + c, Math.max(Math.abs(f), Math.abs(c)) != 1);
    }
    setFunctionModule(l, u, c) {
      this.modules[u][l] = c, this.isFunction[u][l] = !0;
    }
    addEccAndInterleave(l) {
      const u = this.version, c = this.errorCorrectionLevel;
      if (l.length != t.getNumDataCodewords(u, c))
        throw new RangeError("Invalid argument");
      const f = t.NUM_ERROR_CORRECTION_BLOCKS[c.ordinal][u], d = t.ECC_CODEWORDS_PER_BLOCK[c.ordinal][u], h = Math.floor(t.getNumRawDataModules(u) / 8), v = f - h % f, x = Math.floor(h / f);
      let C = [];
      const g = t.reedSolomonComputeDivisor(d);
      for (let w = 0, y = 0; w < f; w++) {
        let S = l.slice(y, y + x - d + (w < v ? 0 : 1));
        y += S.length;
        const E = t.reedSolomonComputeRemainder(S, g);
        w < v && S.push(0), C.push(S.concat(E));
      }
      let m = [];
      for (let w = 0; w < C[0].length; w++)
        C.forEach((y, S) => {
          (w != x - d || S >= v) && m.push(y[w]);
        });
      return o(m.length == h), m;
    }
    drawCodewords(l) {
      if (l.length != Math.floor(t.getNumRawDataModules(this.version) / 8))
        throw new RangeError("Invalid argument");
      let u = 0;
      for (let c = this.size - 1; c >= 1; c -= 2) {
        c == 6 && (c = 5);
        for (let f = 0; f < this.size; f++)
          for (let d = 0; d < 2; d++) {
            const h = c - d, x = (c + 1 & 2) == 0 ? this.size - 1 - f : f;
            !this.isFunction[x][h] && u < l.length * 8 && (this.modules[x][h] = i(l[u >>> 3], 7 - (u & 7)), u++);
          }
      }
      o(u == l.length * 8);
    }
    applyMask(l) {
      if (l < 0 || l > 7)
        throw new RangeError("Mask value out of range");
      for (let u = 0; u < this.size; u++)
        for (let c = 0; c < this.size; c++) {
          let f;
          switch (l) {
            case 0:
              f = (c + u) % 2 == 0;
              break;
            case 1:
              f = u % 2 == 0;
              break;
            case 2:
              f = c % 3 == 0;
              break;
            case 3:
              f = (c + u) % 3 == 0;
              break;
            case 4:
              f = (Math.floor(c / 3) + Math.floor(u / 2)) % 2 == 0;
              break;
            case 5:
              f = c * u % 2 + c * u % 3 == 0;
              break;
            case 6:
              f = (c * u % 2 + c * u % 3) % 2 == 0;
              break;
            case 7:
              f = ((c + u) % 2 + c * u % 3) % 2 == 0;
              break;
            default:
              throw new Error("Unreachable");
          }
          !this.isFunction[u][c] && f && (this.modules[u][c] = !this.modules[u][c]);
        }
    }
    getPenaltyScore() {
      let l = 0;
      for (let d = 0; d < this.size; d++) {
        let h = !1, v = 0, x = [0, 0, 0, 0, 0, 0, 0];
        for (let C = 0; C < this.size; C++)
          this.modules[d][C] == h ? (v++, v == 5 ? l += t.PENALTY_N1 : v > 5 && l++) : (this.finderPenaltyAddHistory(v, x), h || (l += this.finderPenaltyCountPatterns(x) * t.PENALTY_N3), h = this.modules[d][C], v = 1);
        l += this.finderPenaltyTerminateAndCount(h, v, x) * t.PENALTY_N3;
      }
      for (let d = 0; d < this.size; d++) {
        let h = !1, v = 0, x = [0, 0, 0, 0, 0, 0, 0];
        for (let C = 0; C < this.size; C++)
          this.modules[C][d] == h ? (v++, v == 5 ? l += t.PENALTY_N1 : v > 5 && l++) : (this.finderPenaltyAddHistory(v, x), h || (l += this.finderPenaltyCountPatterns(x) * t.PENALTY_N3), h = this.modules[C][d], v = 1);
        l += this.finderPenaltyTerminateAndCount(h, v, x) * t.PENALTY_N3;
      }
      for (let d = 0; d < this.size - 1; d++)
        for (let h = 0; h < this.size - 1; h++) {
          const v = this.modules[d][h];
          v == this.modules[d][h + 1] && v == this.modules[d + 1][h] && v == this.modules[d + 1][h + 1] && (l += t.PENALTY_N2);
        }
      let u = 0;
      for (const d of this.modules)
        u = d.reduce((h, v) => h + (v ? 1 : 0), u);
      const c = this.size * this.size, f = Math.ceil(Math.abs(u * 20 - c * 10) / c) - 1;
      return o(0 <= f && f <= 9), l += f * t.PENALTY_N4, o(0 <= l && l <= 2568888), l;
    }
    getAlignmentPatternPositions() {
      if (this.version == 1)
        return [];
      {
        const l = Math.floor(this.version / 7) + 2, u = this.version == 32 ? 26 : Math.ceil((this.version * 4 + 4) / (l * 2 - 2)) * 2;
        let c = [6];
        for (let f = this.size - 7; c.length < l; f -= u)
          c.splice(1, 0, f);
        return c;
      }
    }
    static getNumRawDataModules(l) {
      if (l < t.MIN_VERSION || l > t.MAX_VERSION)
        throw new RangeError("Version number out of range");
      let u = (16 * l + 128) * l + 64;
      if (l >= 2) {
        const c = Math.floor(l / 7) + 2;
        u -= (25 * c - 10) * c - 55, l >= 7 && (u -= 36);
      }
      return o(208 <= u && u <= 29648), u;
    }
    static getNumDataCodewords(l, u) {
      return Math.floor(t.getNumRawDataModules(l) / 8) - t.ECC_CODEWORDS_PER_BLOCK[u.ordinal][l] * t.NUM_ERROR_CORRECTION_BLOCKS[u.ordinal][l];
    }
    static reedSolomonComputeDivisor(l) {
      if (l < 1 || l > 255)
        throw new RangeError("Degree out of range");
      let u = [];
      for (let f = 0; f < l - 1; f++)
        u.push(0);
      u.push(1);
      let c = 1;
      for (let f = 0; f < l; f++) {
        for (let d = 0; d < u.length; d++)
          u[d] = t.reedSolomonMultiply(u[d], c), d + 1 < u.length && (u[d] ^= u[d + 1]);
        c = t.reedSolomonMultiply(c, 2);
      }
      return u;
    }
    static reedSolomonComputeRemainder(l, u) {
      let c = u.map((f) => 0);
      for (const f of l) {
        const d = f ^ c.shift();
        c.push(0), u.forEach((h, v) => c[v] ^= t.reedSolomonMultiply(h, d));
      }
      return c;
    }
    static reedSolomonMultiply(l, u) {
      if (l >>> 8 || u >>> 8)
        throw new RangeError("Byte out of range");
      let c = 0;
      for (let f = 7; f >= 0; f--)
        c = c << 1 ^ (c >>> 7) * 285, c ^= (u >>> f & 1) * l;
      return o(c >>> 8 == 0), c;
    }
    finderPenaltyCountPatterns(l) {
      const u = l[1];
      o(u <= this.size * 3);
      const c = u > 0 && l[2] == u && l[3] == u * 3 && l[4] == u && l[5] == u;
      return (c && l[0] >= u * 4 && l[6] >= u ? 1 : 0) + (c && l[6] >= u * 4 && l[0] >= u ? 1 : 0);
    }
    finderPenaltyTerminateAndCount(l, u, c) {
      return l && (this.finderPenaltyAddHistory(u, c), u = 0), u += this.size, this.finderPenaltyAddHistory(u, c), this.finderPenaltyCountPatterns(c);
    }
    finderPenaltyAddHistory(l, u) {
      u[0] == 0 && (l += this.size), u.pop(), u.unshift(l);
    }
  };
  let n = t;
  n.MIN_VERSION = 1, n.MAX_VERSION = 40, n.PENALTY_N1 = 3, n.PENALTY_N2 = 3, n.PENALTY_N3 = 40, n.PENALTY_N4 = 10, n.ECC_CODEWORDS_PER_BLOCK = [
    [-1, 7, 10, 15, 20, 26, 18, 20, 24, 30, 18, 20, 24, 26, 30, 22, 24, 28, 30, 28, 28, 28, 28, 30, 30, 26, 28, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30],
    [-1, 10, 16, 26, 18, 24, 16, 18, 22, 22, 26, 30, 22, 22, 24, 24, 28, 28, 26, 26, 26, 26, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28],
    [-1, 13, 22, 18, 26, 18, 24, 18, 22, 20, 24, 28, 26, 24, 20, 30, 24, 28, 28, 26, 30, 28, 30, 30, 30, 30, 28, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30],
    [-1, 17, 28, 22, 16, 22, 28, 26, 26, 24, 28, 24, 28, 22, 24, 24, 30, 28, 28, 26, 28, 30, 24, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30]
  ], n.NUM_ERROR_CORRECTION_BLOCKS = [
    [-1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 4, 4, 4, 4, 4, 6, 6, 6, 6, 7, 8, 8, 9, 9, 10, 12, 12, 12, 13, 14, 15, 16, 17, 18, 19, 19, 20, 21, 22, 24, 25],
    [-1, 1, 1, 1, 2, 2, 4, 4, 4, 5, 5, 5, 8, 9, 9, 10, 10, 11, 13, 14, 16, 17, 17, 18, 20, 21, 23, 25, 26, 28, 29, 31, 33, 35, 37, 38, 40, 43, 45, 47, 49],
    [-1, 1, 1, 2, 2, 4, 4, 6, 6, 8, 8, 8, 10, 12, 16, 12, 17, 16, 18, 21, 20, 23, 23, 25, 27, 29, 34, 34, 35, 38, 40, 43, 45, 48, 51, 53, 56, 59, 62, 65, 68],
    [-1, 1, 1, 2, 4, 4, 4, 5, 6, 8, 8, 11, 11, 16, 16, 18, 16, 19, 21, 25, 25, 25, 34, 30, 32, 35, 37, 40, 42, 45, 48, 51, 54, 57, 60, 63, 66, 70, 74, 77, 81]
  ], e.QrCode = n;
  function r(l, u, c) {
    if (u < 0 || u > 31 || l >>> u)
      throw new RangeError("Value out of range");
    for (let f = u - 1; f >= 0; f--)
      c.push(l >>> f & 1);
  }
  function i(l, u) {
    return (l >>> u & 1) != 0;
  }
  function o(l) {
    if (!l)
      throw new Error("Assertion error");
  }
  const s = class {
    constructor(l, u, c) {
      if (this.mode = l, this.numChars = u, this.bitData = c, u < 0)
        throw new RangeError("Invalid argument");
      this.bitData = c.slice();
    }
    static makeBytes(l) {
      let u = [];
      for (const c of l)
        r(c, 8, u);
      return new s(s.Mode.BYTE, l.length, u);
    }
    static makeNumeric(l) {
      if (!s.isNumeric(l))
        throw new RangeError("String contains non-numeric characters");
      let u = [];
      for (let c = 0; c < l.length; ) {
        const f = Math.min(l.length - c, 3);
        r(parseInt(l.substr(c, f), 10), f * 3 + 1, u), c += f;
      }
      return new s(s.Mode.NUMERIC, l.length, u);
    }
    static makeAlphanumeric(l) {
      if (!s.isAlphanumeric(l))
        throw new RangeError("String contains unencodable characters in alphanumeric mode");
      let u = [], c;
      for (c = 0; c + 2 <= l.length; c += 2) {
        let f = s.ALPHANUMERIC_CHARSET.indexOf(l.charAt(c)) * 45;
        f += s.ALPHANUMERIC_CHARSET.indexOf(l.charAt(c + 1)), r(f, 11, u);
      }
      return c < l.length && r(s.ALPHANUMERIC_CHARSET.indexOf(l.charAt(c)), 6, u), new s(s.Mode.ALPHANUMERIC, l.length, u);
    }
    static makeSegments(l) {
      return l == "" ? [] : s.isNumeric(l) ? [s.makeNumeric(l)] : s.isAlphanumeric(l) ? [s.makeAlphanumeric(l)] : [s.makeBytes(s.toUtf8ByteArray(l))];
    }
    static makeEci(l) {
      let u = [];
      if (l < 0)
        throw new RangeError("ECI assignment value out of range");
      if (l < 128)
        r(l, 8, u);
      else if (l < 16384)
        r(2, 2, u), r(l, 14, u);
      else if (l < 1e6)
        r(6, 3, u), r(l, 21, u);
      else
        throw new RangeError("ECI assignment value out of range");
      return new s(s.Mode.ECI, 0, u);
    }
    static isNumeric(l) {
      return s.NUMERIC_REGEX.test(l);
    }
    static isAlphanumeric(l) {
      return s.ALPHANUMERIC_REGEX.test(l);
    }
    getData() {
      return this.bitData.slice();
    }
    static getTotalBits(l, u) {
      let c = 0;
      for (const f of l) {
        const d = f.mode.numCharCountBits(u);
        if (f.numChars >= 1 << d)
          return 1 / 0;
        c += 4 + d + f.bitData.length;
      }
      return c;
    }
    static toUtf8ByteArray(l) {
      l = encodeURI(l);
      let u = [];
      for (let c = 0; c < l.length; c++)
        l.charAt(c) != "%" ? u.push(l.charCodeAt(c)) : (u.push(parseInt(l.substr(c + 1, 2), 16)), c += 2);
      return u;
    }
  };
  let a = s;
  a.NUMERIC_REGEX = /^[0-9]*$/, a.ALPHANUMERIC_REGEX = /^[A-Z0-9 $%*+.\/:-]*$/, a.ALPHANUMERIC_CHARSET = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ $%*+-./:", e.QrSegment = a;
})(Xt || (Xt = {}));
((e) => {
  ((t) => {
    const n = class {
      constructor(i, o) {
        this.ordinal = i, this.formatBits = o;
      }
    };
    let r = n;
    r.LOW = new n(0, 1), r.MEDIUM = new n(1, 0), r.QUARTILE = new n(2, 3), r.HIGH = new n(3, 2), t.Ecc = r;
  })(e.QrCode || (e.QrCode = {}));
})(Xt || (Xt = {}));
((e) => {
  ((t) => {
    const n = class {
      constructor(i, o) {
        this.modeBits = i, this.numBitsCharCount = o;
      }
      numCharCountBits(i) {
        return this.numBitsCharCount[Math.floor((i + 7) / 17)];
      }
    };
    let r = n;
    r.NUMERIC = new n(1, [10, 12, 14]), r.ALPHANUMERIC = new n(2, [9, 11, 13]), r.BYTE = new n(4, [8, 16, 16]), r.KANJI = new n(8, [8, 10, 12]), r.ECI = new n(7, [0, 0, 0]), t.Mode = r;
  })(e.QrSegment || (e.QrSegment = {}));
})(Xt || (Xt = {}));
var En = Xt;
/**
 * @license qrcode.react
 * Copyright (c) Paul O'Shannessy
 * SPDX-License-Identifier: ISC
 */
var qd = {
  L: En.QrCode.Ecc.LOW,
  M: En.QrCode.Ecc.MEDIUM,
  Q: En.QrCode.Ecc.QUARTILE,
  H: En.QrCode.Ecc.HIGH
}, e1 = 128, t1 = "L", n1 = "#FFFFFF", r1 = "#000000", i1 = !1, oa = 4, E3 = 0.1;
function o1(e, t = 0) {
  const n = [];
  return e.forEach(function(r, i) {
    let o = null;
    r.forEach(function(s, a) {
      if (!s && o !== null) {
        n.push(`M${o + t} ${i + t}h${a - o}v1H${o + t}z`), o = null;
        return;
      }
      if (a === r.length - 1) {
        if (!s)
          return;
        o === null ? n.push(`M${a + t},${i + t} h1v1H${a + t}z`) : n.push(`M${o + t},${i + t} h${a + 1 - o}v1H${o + t}z`);
        return;
      }
      s && o === null && (o = a);
    });
  }), n.join("");
}
function s1(e, t) {
  return e.slice().map((n, r) => r < t.y || r >= t.y + t.h ? n : n.map((i, o) => o < t.x || o >= t.x + t.w ? i : !1));
}
function l1(e, t, n, r) {
  if (r == null)
    return null;
  const i = n ? oa : 0, o = e.length + i * 2, s = Math.floor(t * E3), a = o / t, l = (r.width || s) * a, u = (r.height || s) * a, c = r.x == null ? e.length / 2 - l / 2 : r.x * a, f = r.y == null ? e.length / 2 - u / 2 : r.y * a;
  let d = null;
  if (r.excavate) {
    let h = Math.floor(c), v = Math.floor(f), x = Math.ceil(l + c - h), C = Math.ceil(u + f - v);
    d = { x: h, y: v, w: x, h: C };
  }
  return { x: c, y: f, h: u, w: l, excavation: d };
}
var k3 = function() {
  try {
    new Path2D().addPath(new Path2D());
  } catch {
    return !1;
  }
  return !0;
}();
function N3(e) {
  const t = e, {
    value: n,
    size: r = e1,
    level: i = t1,
    bgColor: o = n1,
    fgColor: s = r1,
    includeMargin: a = i1,
    style: l,
    imageSettings: u
  } = t, c = ia(t, [
    "value",
    "size",
    "level",
    "bgColor",
    "fgColor",
    "includeMargin",
    "style",
    "imageSettings"
  ]), f = u == null ? void 0 : u.src, d = k.useRef(null), h = k.useRef(null), [v, x] = k.useState(!1);
  k.useEffect(() => {
    if (d.current != null) {
      const m = d.current, w = m.getContext("2d");
      if (!w)
        return;
      let y = En.QrCode.encodeText(n, qd[i]).getModules();
      const S = a ? oa : 0, E = y.length + S * 2, N = l1(y, r, a, u), L = h.current, _ = N != null && L !== null && L.complete && L.naturalHeight !== 0 && L.naturalWidth !== 0;
      _ && N.excavation != null && (y = s1(y, N.excavation));
      const R = window.devicePixelRatio || 1;
      m.height = m.width = r * R;
      const F = r / E * R;
      w.scale(F, F), w.fillStyle = o, w.fillRect(0, 0, E, E), w.fillStyle = s, k3 ? w.fill(new Path2D(o1(y, S))) : y.forEach(function(Z, te) {
        Z.forEach(function(se, z) {
          se && w.fillRect(z + S, te + S, 1, 1);
        });
      }), _ && w.drawImage(L, N.x + S, N.y + S, N.w, N.h);
    }
  }), k.useEffect(() => {
    x(!1);
  }, [f]);
  const C = Ir({ height: r, width: r }, l);
  let g = null;
  return f != null && (g = /* @__PURE__ */ he.createElement("img", {
    src: f,
    key: f,
    style: { display: "none" },
    onLoad: () => {
      x(!0);
    },
    ref: h
  })), /* @__PURE__ */ he.createElement(he.Fragment, null, /* @__PURE__ */ he.createElement("canvas", Ir({
    style: C,
    height: r,
    width: r,
    ref: d
  }, c)), g);
}
function j3(e) {
  const t = e, {
    value: n,
    size: r = e1,
    level: i = t1,
    bgColor: o = n1,
    fgColor: s = r1,
    includeMargin: a = i1,
    imageSettings: l
  } = t, u = ia(t, [
    "value",
    "size",
    "level",
    "bgColor",
    "fgColor",
    "includeMargin",
    "imageSettings"
  ]);
  let c = En.QrCode.encodeText(n, qd[i]).getModules();
  const f = a ? oa : 0, d = c.length + f * 2, h = l1(c, r, a, l);
  let v = null;
  l != null && h != null && (h.excavation != null && (c = s1(c, h.excavation)), v = /* @__PURE__ */ he.createElement("image", {
    xlinkHref: l.src,
    height: h.h,
    width: h.w,
    x: h.x + f,
    y: h.y + f,
    preserveAspectRatio: "none"
  }));
  const x = o1(c, f);
  return /* @__PURE__ */ he.createElement("svg", Ir({
    height: r,
    width: r,
    viewBox: `0 0 ${d} ${d}`
  }, u), /* @__PURE__ */ he.createElement("path", {
    fill: o,
    d: `M0,0 h${d}v${d}H0z`,
    shapeRendering: "crispEdges"
  }), /* @__PURE__ */ he.createElement("path", {
    fill: s,
    d: x,
    shapeRendering: "crispEdges"
  }), v);
}
var Wu = (e) => {
  const t = e, { renderAs: n } = t, r = ia(t, ["renderAs"]);
  return n === "svg" ? /* @__PURE__ */ he.createElement(j3, Ir({}, r)) : /* @__PURE__ */ he.createElement(N3, Ir({}, r));
};
function L3(e) {
  return ie({ url: "token/2fa" + "", method: "GET" });
}
function P3(e) {
  return ie({ url: "token/2fa", method: "POST", body: e });
}
function pr(e) {
  return ie({ url: "user", method: "PUT", body: e });
}
function R3({ page: e }) {
  return ie({
    url: `user?page=${e}`,
    method: "GET"
  });
}
function os({ id: e, ...t }) {
  return ie({ url: `user/${e}`, method: "PUT", body: t });
}
function O3() {
  const { t: e } = ct(), [t, n] = k.useState(1), [r, i] = k.useState(!1), [o, s] = k.useState({ otpauth_url: "", secret: "" }), a = At((c) => c.user);
  k.useEffect(() => {
    L3().then(s);
  }, []);
  const l = async (c) => {
    c.preventDefault();
    const f = c.target.code.value;
    if (!f || f.length < 6 || f.length > 6)
      return alert(e("minimum 6 characters required"));
    try {
      i(!0), await P3({ code: f, secret: o.secret });
    } catch (d) {
      alert(d);
    } finally {
      i(!1), location.reload();
    }
  }, u = async () => {
    confirm(e("close 2fa confirm")) && (i(!0), await pr({ "2fa": "" }).catch((c) => {
      alert(c), console.error(c);
    }), i(!1), location.reload());
  };
  return /* @__PURE__ */ p.jsxs("section", { id: "two-factor-auth", children: [
    /* @__PURE__ */ p.jsx("h3", { children: e("two factor auth") }),
    a["2fa"] ? /* @__PURE__ */ p.jsxs("div", { children: [
      /* @__PURE__ */ p.jsx("p", { children: e("enable 2fa") }),
      /* @__PURE__ */ p.jsx(Wu, { value: o.otpauth_url, size: 256 }),
      /* @__PURE__ */ p.jsx("br", {}),
      /* @__PURE__ */ p.jsx("br", {}),
      /* @__PURE__ */ p.jsx(
        "button",
        {
          className: "btn primary",
          type: "submit",
          onClick: u,
          disabled: r,
          children: e("disable 2fa")
        }
      )
    ] }) : null,
    !a["2fa"] && t === 1 && /* @__PURE__ */ p.jsxs("div", { children: [
      /* @__PURE__ */ p.jsx("p", { children: e("2fa description 1") }),
      /* @__PURE__ */ p.jsx("p", { children: e("2fa description 2") }),
      /* @__PURE__ */ p.jsx("button", { className: "btn primary", onClick: () => n(2), children: e("next step") })
    ] }),
    !a["2fa"] && t === 2 && /* @__PURE__ */ p.jsxs("div", { children: [
      /* @__PURE__ */ p.jsx("h4", { children: e("download 2fa app") }),
      /* @__PURE__ */ p.jsxs("ul", { className: "step2-apps", children: [
        /* @__PURE__ */ p.jsxs("li", { children: [
          "For Android, iOS:",
          /* @__PURE__ */ p.jsxs("a", { href: "https://support.google.com/accounts/answer/1066447?hl=en", children: [
            " ",
            "Google Authenticator"
          ] })
        ] }),
        /* @__PURE__ */ p.jsxs("li", { children: [
          "For Android and iOS:",
          /* @__PURE__ */ p.jsxs("a", { href: "http://guide.duosecurity.com/third-party-accounts", children: [
            " ",
            "Duo Mobile"
          ] })
        ] }),
        /* @__PURE__ */ p.jsxs("li", { children: [
          "For Windows Phone:",
          /* @__PURE__ */ p.jsxs("a", { href: "https://www.microsoft.com/en-US/store/apps/Authenticator/9WZDNCRFJ3RJ", children: [
            " ",
            "Authenticator"
          ] })
        ] })
      ] }),
      /* @__PURE__ */ p.jsx(
        "button",
        {
          className: "btn primary",
          type: "submit",
          onClick: () => n(3),
          children: e("next step")
        }
      )
    ] }),
    !a["2fa"] && t === 3 && /* @__PURE__ */ p.jsxs("div", { children: [
      /* @__PURE__ */ p.jsx("p", { children: e("open app and scan qrcode") }),
      /* @__PURE__ */ p.jsx(Wu, { value: o.otpauth_url, size: 256 }),
      /* @__PURE__ */ p.jsxs("form", { method: "post", onSubmit: l, children: [
        /* @__PURE__ */ p.jsx("ul", { className: "typecho-option", children: /* @__PURE__ */ p.jsxs("li", { children: [
          /* @__PURE__ */ p.jsx("label", { className: "typecho-label", htmlFor: "code-0-1", children: e("input 2fa code") }),
          /* @__PURE__ */ p.jsx("input", { id: "code-0-1", name: "code", type: "text", className: "text" }),
          /* @__PURE__ */ p.jsx("p", { className: "description" })
        ] }) }),
        /* @__PURE__ */ p.jsx("ul", { className: "typecho-option typecho-option-submit", children: /* @__PURE__ */ p.jsx("li", { children: /* @__PURE__ */ p.jsx(
          "button",
          {
            type: "submit",
            className: "btn primary",
            disabled: r,
            children: e("enable 2fa")
          }
        ) }) })
      ] })
    ] })
  ] });
}
function T3() {
  const [e, t] = k.useState(!1), [n, r] = k.useState(!1), i = So(), o = At((v) => v.user), { t: s } = ct(), a = async function(v) {
    v.preventDefault();
    const x = v.target.screenName.value, C = v.target.url.value, g = v.target.label.value;
    if (!x || !C)
      return alert(s("nickname and homepage are required"));
    r(!0);
    try {
      await i.user.updateProfile({ display_name: x, url: C, label: g });
    } catch (m) {
      alert(m);
    } finally {
      r(!1);
    }
  }, l = async function(v) {
    v.preventDefault();
    const x = v.target.password.value, C = v.target.confirm.value;
    if (!x || !C)
      return alert(s("please input password"));
    if (x !== C)
      return alert(s("passwords don't match"));
    t(!0), await pr({ password: x }), t(!1);
  }, u = async function(v) {
    await pr({ [v]: "" }), location.reload();
  }, c = async function(v) {
    v.preventDefault();
    const x = prompt(s("please input avatar url"));
    x && (await pr({ avatar: x }), location.reload());
  };
  let f = window.serverURL;
  if (!f) {
    const v = location.pathname.match(/(.*?\/)ui/);
    f = v ? v[1] : "/";
  }
  const d = new URLSearchParams(location.search);
  let h = window.TOKEN || sessionStorage.getItem("TOKEN") || d.get("token");
  return h || (h = localStorage.getItem("TOKEN")), /* @__PURE__ */ p.jsxs(p.Fragment, { children: [
    /* @__PURE__ */ p.jsx(on, {}),
    /* @__PURE__ */ p.jsx("div", { className: "main", children: /* @__PURE__ */ p.jsxs("div", { className: "body container", children: [
      /* @__PURE__ */ p.jsx("div", { className: "typecho-page-title", children: /* @__PURE__ */ p.jsx("h2", { children: s("setting") }) }),
      /* @__PURE__ */ p.jsxs("div", { className: "row typecho-page-main", children: [
        /* @__PURE__ */ p.jsxs("div", { className: "col-mb-12 col-tb-3", children: [
          /* @__PURE__ */ p.jsx("p", { children: /* @__PURE__ */ p.jsx(
            "a",
            {
              href: "javascript:void(0)",
              title: s("change avatar"),
              target: "_blank",
              rel: "noreferrer",
              onClick: c,
              children: /* @__PURE__ */ p.jsx(
                "img",
                {
                  className: "profile-avatar",
                  src: o.avatar || `https://seccdn.libravatar.org/avatar/${o.mailMd5}?s=220&amp;r=X&amp;d=mm`
                }
              )
            }
          ) }),
          /* @__PURE__ */ p.jsx("h2", { children: o.display_name }),
          /* @__PURE__ */ p.jsx("p", { children: o.email })
        ] }),
        /* @__PURE__ */ p.jsxs(
          "div",
          {
            className: "col-mb-12 col-tb-6 col-tb-offset-1 typecho-content-panel",
            role: "form",
            children: [
              /* @__PURE__ */ p.jsxs("section", { children: [
                /* @__PURE__ */ p.jsx("h3", { children: s("profile") }),
                /* @__PURE__ */ p.jsxs("form", { method: "post", onSubmit: a, children: [
                  /* @__PURE__ */ p.jsx("ul", { className: "typecho-option", children: /* @__PURE__ */ p.jsxs("li", { children: [
                    /* @__PURE__ */ p.jsx("label", { className: "typecho-label", htmlFor: "screenName-0-1", children: s("nickname") }),
                    /* @__PURE__ */ p.jsx(
                      "input",
                      {
                        id: "screenName-0-1",
                        name: "screenName",
                        type: "text",
                        className: "text",
                        defaultValue: o.display_name
                      }
                    ),
                    /* @__PURE__ */ p.jsx("p", { className: "description" })
                  ] }) }),
                  /* @__PURE__ */ p.jsx("ul", { className: "typecho-option", children: /* @__PURE__ */ p.jsxs("li", { children: [
                    /* @__PURE__ */ p.jsx("label", { className: "typecho-label", htmlFor: "url-0-2", children: s("homepage") }),
                    /* @__PURE__ */ p.jsx(
                      "input",
                      {
                        id: "url-0-2",
                        name: "url",
                        type: "text",
                        className: "text",
                        defaultValue: o.url
                      }
                    ),
                    /* @__PURE__ */ p.jsx("p", { className: "description", children: /* @__PURE__ */ p.jsx(
                      tt,
                      {
                        i18nKey: "homepage tips",
                        defaults: "Current users' homepage. It must be start with <code>http://</code> or <code>https://</code>.",
                        components: { code: /* @__PURE__ */ p.jsx("code", {}) }
                      }
                    ) })
                  ] }) }),
                  /* @__PURE__ */ p.jsx("ul", { className: "typecho-option", children: /* @__PURE__ */ p.jsxs("li", { children: [
                    /* @__PURE__ */ p.jsx("label", { className: "typecho-label", htmlFor: "url-0-2", children: s("exclusive label") }),
                    /* @__PURE__ */ p.jsx(
                      "input",
                      {
                        id: "url-0-2",
                        name: "label",
                        type: "text",
                        className: "text",
                        defaultValue: o.label
                      }
                    ),
                    /* @__PURE__ */ p.jsx("p", { className: "description" })
                  ] }) }),
                  /* @__PURE__ */ p.jsx("ul", { className: "typecho-option typecho-option-submit", children: /* @__PURE__ */ p.jsx("li", { children: /* @__PURE__ */ p.jsx(
                    "button",
                    {
                      type: "submit",
                      className: "btn primary",
                      disabled: n,
                      children: s("update my profile")
                    }
                  ) }) })
                ] })
              ] }),
              /* @__PURE__ */ p.jsx("br", {}),
              /* @__PURE__ */ p.jsxs("section", { id: "social-account", children: [
                /* @__PURE__ */ p.jsx("h3", { children: s("connect to social account") }),
                /* @__PURE__ */ p.jsxs("div", { className: "account-list", children: [
                  window.ALLOW_SOCIALS && /* @__PURE__ */ p.jsx(
                    "div",
                    {
                      className: $r("account-item github", {
                        bind: o.github
                      }),
                      children: /* @__PURE__ */ p.jsx(
                        "a",
                        {
                          href: o.github ? `https://github.com/${o.github}` : `${f}oauth/github?state=${h}`,
                          target: o.github ? "_blank" : "_self",
                          rel: "noreferrer",
                          children: he.createElement(Dd)
                        }
                      )
                    }
                  ),
                  !window.ALLOW_SOCIALS && ["qq", "weibo", "github", "twitter", "facebook"].map(
                    (v) => /* @__PURE__ */ p.jsxs(
                      "div",
                      {
                        className: $r("account-item", v, {
                          bind: o[v]
                        }),
                        children: [
                          /* @__PURE__ */ p.jsx(
                            "a",
                            {
                              href: o[v] ? `https://${v}.com/${o[v]}` : `${f}oauth/?type=${v}&state=${h}`,
                              target: o[v] ? "_blank" : "_self",
                              rel: "noreferrer",
                              children: he.createElement(zg[v])
                            }
                          ),
                          /* @__PURE__ */ p.jsx(
                            "div",
                            {
                              className: "account-unbind",
                              onClick: () => u(v),
                              children: /* @__PURE__ */ p.jsx(
                                "svg",
                                {
                                  className: "close-icon",
                                  viewBox: "0 0 1024 1024",
                                  xmlns: "http://www.w3.org/2000/svg",
                                  width: "14",
                                  height: "14",
                                  children: /* @__PURE__ */ p.jsx("path", { d: "m568.569 512 170.267-170.267c15.556-15.556 15.556-41.012 0-56.569s-41.012-15.556-56.569 0L512 455.431 341.733 285.165c-15.556-15.556-41.012-15.556-56.569 0s-15.556 41.012 0 56.569L455.431 512 285.165 682.267c-15.556 15.556-15.556 41.012 0 56.569 15.556 15.556 41.012 15.556 56.569 0L512 568.569l170.267 170.267c15.556 15.556 41.012 15.556 56.569 0 15.556-15.556 15.556-41.012 0-56.569L568.569 512z" })
                                }
                              )
                            }
                          )
                        ]
                      },
                      v
                    )
                  )
                ] })
              ] }),
              /* @__PURE__ */ p.jsx("br", {}),
              /* @__PURE__ */ p.jsxs("section", { id: "change-password", children: [
                /* @__PURE__ */ p.jsx("h3", { children: s("change password") }),
                /* @__PURE__ */ p.jsxs("form", { method: "post", onSubmit: l, children: [
                  /* @__PURE__ */ p.jsx("ul", { className: "typecho-option", children: /* @__PURE__ */ p.jsxs("li", { children: [
                    /* @__PURE__ */ p.jsx("label", { className: "typecho-label", htmlFor: "password-0-11", children: s("password") }),
                    /* @__PURE__ */ p.jsx(
                      "input",
                      {
                        id: "password-0-11",
                        name: "password",
                        type: "password",
                        className: "w-60",
                        autoComplete: "new-password"
                      }
                    ),
                    /* @__PURE__ */ p.jsx("p", { className: "description", children: /* @__PURE__ */ p.jsx(tt, { i18nKey: "password tips" }) })
                  ] }) }),
                  /* @__PURE__ */ p.jsx("ul", { className: "typecho-option", children: /* @__PURE__ */ p.jsxs("li", { children: [
                    /* @__PURE__ */ p.jsx("label", { className: "typecho-label", htmlFor: "confirm-0-12", children: s("password again") }),
                    /* @__PURE__ */ p.jsx(
                      "input",
                      {
                        id: "confirm-0-12",
                        name: "confirm",
                        type: "password",
                        className: "w-60",
                        autoComplete: "new-password"
                      }
                    ),
                    /* @__PURE__ */ p.jsx("p", { className: "description", children: /* @__PURE__ */ p.jsx(tt, { i18nKey: "password again tips" }) })
                  ] }) }),
                  /* @__PURE__ */ p.jsx("ul", { className: "typecho-option typecho-option-submit", children: /* @__PURE__ */ p.jsx("li", { children: /* @__PURE__ */ p.jsx(
                    "button",
                    {
                      type: "submit",
                      className: "btn primary",
                      disabled: e,
                      children: s("update password")
                    }
                  ) }) })
                ] })
              ] }),
              /* @__PURE__ */ p.jsx("br", {}),
              /* @__PURE__ */ p.jsx(O3, {}),
              /* @__PURE__ */ p.jsx("br", {})
            ]
          }
        )
      ] })
    ] }) })
  ] });
}
const Ni = {}, Qu = (e) => {
  const t = document.querySelector(`script[src="${e}"]`);
  if (t)
    return Ni[e] = {
      loading: !1,
      error: null,
      scriptEl: t
    };
};
function a1({
  src: e,
  checkForExisting: t = !1,
  ...n
}) {
  let r = e ? Ni[e] : void 0;
  !r && t && e && Zu && (r = Qu(e));
  const [i, o] = k.useState(
    r ? r.loading : !!e
  ), [s, a] = k.useState(r ? r.error : null), [l, u] = k.useState(!1);
  return k.useEffect(() => {
    if (!Zu || !e || l || s) return;
    r = Ni[e], !r && t && (r = Qu(e));
    let c;
    r ? c = r.scriptEl : (c = document.createElement("script"), c.src = e, Object.keys(n).forEach((h) => {
      c[h] === void 0 ? c.setAttribute(h, n[h]) : c[h] = n[h];
    }), r = Ni[e] = {
      loading: !0,
      error: null,
      scriptEl: c
    });
    const f = () => {
      r && (r.loading = !1), o(!1), u(!0);
    }, d = (h) => {
      r && (r.error = h), a(h);
    };
    return c.addEventListener("load", f), c.addEventListener("error", d), document.body.appendChild(c), () => {
      c.removeEventListener("load", f), c.removeEventListener("error", d);
    };
  }, [e]), [i, s];
}
const Zu = typeof window < "u" && typeof window.document < "u";
function _3({
  sitekey: e,
  hideDefaultBadge: t = !1,
  checkForExisting: n = !0
}) {
  const [r, i] = k.useState();
  return k.useEffect(() => {
    $3 && t && M3(".grecaptcha-badge { visibility: hidden; }");
  }, [t]), a1({
    src: window.recaptchaV3Key ? `https://recaptcha.net/recaptcha/api.js?render=${e}` : void 0,
    onload: () => window.grecaptcha.ready(() => {
      i(window.grecaptcha);
    }),
    checkForExisting: n
  }), k.useEffect(() => {
    window.grecaptcha && window.recaptchaV3Key && window.grecaptcha.ready(() => {
      i(window.grecaptcha);
    });
  }, []), (o) => new Promise((s, a) => {
    r ? s(r.execute(e, { action: o })) : a(new Error("Recaptcha script not available"));
  });
}
const $3 = typeof window < "u" && typeof window.document < "u", M3 = (e) => {
  const t = document.createElement("style");
  document.head.appendChild(t);
  const n = t.sheet;
  n && n.insertRule(e, n.cssRules.length);
};
function I3({ sitekey: e, checkForExisting: t = !0 }) {
  const [n, r] = k.useState();
  return a1({
    src: window.turnstileKey ? "https://challenges.cloudflare.com/turnstile/v0/api.js" : void 0,
    onload: () => window.turnstile.ready(() => {
      r(window.turnstile);
    }),
    async: !1,
    checkForExisting: t
  }), k.useEffect(() => {
    window.turnstile && window.turnstile.ready(() => {
      r(window.turnstile);
    });
  }, []), (i) => new Promise((o, s) => {
    if (!n)
      return s(new Error("Turnstile script not available"));
    n.render(".captcha-container", {
      sitekey: e,
      action: i,
      callback: o
    });
  });
}
function F3(e) {
  const t = _3(e), n = I3(e);
  return window.turnstileKey ? n : window.recaptchaV3Key ? t : () => {
  };
}
function A3() {
  const { t: e } = ct(), t = So(), n = No(), r = At((c) => c.user), [i, o] = k.useState(!1), [s, a] = k.useState(!1), l = F3({
    sitekey: window.turnstileKey || window.recaptchaV3Key,
    hideDefaultBadge: !0
  });
  k.useEffect(() => {
    r && r.email && n("/ui", { replace: !0 });
  }, [n]);
  const u = async function(c) {
    c.preventDefault(), o(!1);
    const f = c.target.nick.value;
    if (!f || f.length < 2)
      return o(e("nickname illegal"));
    const d = c.target.email.value;
    if (!d)
      return o(e("please input email"));
    const h = c.target.link.value, v = c.target.password.value, x = c.target["password-again"].value;
    if (!v || !x || x !== v)
      return o(e("passwords don't match"));
    try {
      a(!0);
      const C = await l("login"), g = await t.user.register({
        display_name: f,
        email: d,
        url: h,
        password: v,
        recaptchaV3: window.recaptchaV3Key ? C : void 0,
        turnstile: window.turnstileKey ? C : void 0
      });
      g && g.verify && alert(e("register success! please go to your mailbox to verify it!")), n("/ui/login");
    } catch (C) {
      o(C.message);
    } finally {
      a(!1);
    }
  };
  return /* @__PURE__ */ p.jsxs(p.Fragment, { children: [
    /* @__PURE__ */ p.jsx(on, {}),
    /* @__PURE__ */ p.jsx(
      "div",
      {
        className: "message popup notice",
        style: {
          position: "fixed",
          top: 0,
          display: i ? "block" : "none"
        },
        children: /* @__PURE__ */ p.jsx("ul", { children: i ? /* @__PURE__ */ p.jsx("li", { children: i }) : null })
      }
    ),
    /* @__PURE__ */ p.jsx("div", { className: "typecho-login-wrap", children: /* @__PURE__ */ p.jsxs("div", { className: "typecho-login", children: [
      /* @__PURE__ */ p.jsxs("form", { method: "post", name: "login", role: "form", onSubmit: u, children: [
        /* @__PURE__ */ p.jsxs("p", { children: [
          /* @__PURE__ */ p.jsx("label", { htmlFor: "nick", className: "sr-only", children: e("nickname") }),
          /* @__PURE__ */ p.jsx(
            "input",
            {
              type: "text",
              id: "nick",
              name: "nick",
              placeholder: e("nickname"),
              className: "text-l w-100"
            }
          )
        ] }),
        /* @__PURE__ */ p.jsxs("p", { children: [
          /* @__PURE__ */ p.jsx("label", { htmlFor: "email", className: "sr-only", children: e("email") }),
          /* @__PURE__ */ p.jsx(
            "input",
            {
              type: "text",
              id: "email",
              name: "email",
              placeholder: e("email"),
              className: "text-l w-100"
            }
          )
        ] }),
        /* @__PURE__ */ p.jsxs("p", { children: [
          /* @__PURE__ */ p.jsx("label", { htmlFor: "link", className: "sr-only", children: e("website") }),
          /* @__PURE__ */ p.jsx(
            "input",
            {
              type: "text",
              id: "link",
              name: "link",
              placeholder: e("website"),
              className: "text-l w-100"
            }
          )
        ] }),
        /* @__PURE__ */ p.jsxs("p", { children: [
          /* @__PURE__ */ p.jsx("label", { htmlFor: "password", className: "sr-only", children: e("password") }),
          /* @__PURE__ */ p.jsx(
            "input",
            {
              type: "password",
              id: "password",
              name: "password",
              className: "text-l w-100",
              placeholder: e("password")
            }
          )
        ] }),
        /* @__PURE__ */ p.jsxs("p", { children: [
          /* @__PURE__ */ p.jsx("label", { htmlFor: "password-again", className: "sr-only", children: e("password again") }),
          /* @__PURE__ */ p.jsx(
            "input",
            {
              type: "password",
              id: "password-again",
              name: "password-again",
              className: "text-l w-100",
              placeholder: e("password again")
            }
          )
        ] }),
        /* @__PURE__ */ p.jsx("p", { className: "captcha-container" }),
        /* @__PURE__ */ p.jsx("p", { className: "submit", children: /* @__PURE__ */ p.jsx(
          "button",
          {
            type: "submit",
            disabled: s,
            className: "btn btn-l w-100 primary",
            children: e("register")
          }
        ) })
      ] }),
      /* @__PURE__ */ p.jsxs("p", { className: "more-link", children: [
        /* @__PURE__ */ p.jsx(et, { to: "/ui", children: e("back to home") }),
        " •",
        " ",
        /* @__PURE__ */ p.jsx(et, { to: "/ui/login", children: e("register.login") })
      ] })
    ] }) })
  ] });
}
function z3() {
  const e = At((s) => s.user), { t } = ct(), [n, r] = k.useState({
    page: 1,
    totalPages: 0,
    spamCount: 0,
    waitingCount: 0,
    data: []
  });
  k.useEffect(() => {
    R3({ page: n.page }).then((s) => {
      console.log(s), r({ ...n, ...s });
    });
  }, [n.page]);
  const i = (s) => [
    {
      key: "administrator",
      name: t("set administrator"),
      show: s.type === "guest",
      async action(a) {
        a.preventDefault(), await os({
          id: s.objectId,
          type: "administrator"
        }), s.type = "administrator", r({ ...n });
      }
    },
    {
      key: "guest",
      name: t("set guest"),
      show: s.type === "administrator",
      async action(a) {
        if (a.preventDefault(), s.objectId === e.objectId)
          return alert(t("You can't set yourself to be guest!"));
        await os({
          id: s.objectId,
          type: "guest"
        }), s.type = "guest", r({ ...n });
      }
    },
    {
      key: "label",
      name: t("set label"),
      show: !0,
      async action(a) {
        a.preventDefault();
        const l = prompt(t("please enter an exclusive label"));
        await os({
          id: s.objectId,
          label: l
        }), s.label = l, r({ ...n });
      }
    }
    // todo
    // {
    //   key: 'delete',
    //   name: t('delete'),
    //   show: true,
    //   async action() {},
    // },
  ].filter(({ show: a }) => a), o = (s) => /^verify/.test(s) ? t("verify") : t(s);
  return /* @__PURE__ */ p.jsxs(p.Fragment, { children: [
    /* @__PURE__ */ p.jsx(on, {}),
    /* @__PURE__ */ p.jsx("div", { className: "main", children: /* @__PURE__ */ p.jsxs("div", { className: "body container", children: [
      /* @__PURE__ */ p.jsx("div", { className: "typecho-page-title", children: /* @__PURE__ */ p.jsx("h2", { children: t("manage users") }) }),
      /* @__PURE__ */ p.jsx("div", { className: "row typecho-page-main", role: "main", children: /* @__PURE__ */ p.jsxs("div", { className: "col-mb-12 typecho-list", children: [
        /* @__PURE__ */ p.jsx(
          "form",
          {
            method: "post",
            name: "manage_comments",
            className: "operate-form",
            children: /* @__PURE__ */ p.jsx("div", { className: "typecho-table-wrap", children: /* @__PURE__ */ p.jsxs("table", { className: "typecho-list-table", children: [
              /* @__PURE__ */ p.jsxs("colgroup", { children: [
                /* @__PURE__ */ p.jsx("col", { width: "6%" }),
                /* @__PURE__ */ p.jsx("col", { width: "15%" }),
                /* @__PURE__ */ p.jsx("col", { width: "20%" }),
                /* @__PURE__ */ p.jsx("col", { width: "15%" }),
                /* @__PURE__ */ p.jsx("col", { width: "20%" })
              ] }),
              /* @__PURE__ */ p.jsx("thead", { children: /* @__PURE__ */ p.jsxs("tr", { children: [
                /* @__PURE__ */ p.jsx("th", { children: " " }),
                /* @__PURE__ */ p.jsx("th", { children: t("nickname") }),
                /* @__PURE__ */ p.jsx("th", { children: t("email") }),
                /* @__PURE__ */ p.jsx("th", { children: t("role") }),
                /* @__PURE__ */ p.jsx("th", { children: t("exclusive label") }),
                /* @__PURE__ */ p.jsx("th", { children: t("action") })
              ] }) }),
              /* @__PURE__ */ p.jsx("tbody", { children: n.data.map((s) => /* @__PURE__ */ p.jsxs("tr", { id: `user-${s.objectId}`, children: [
                /* @__PURE__ */ p.jsx("td", { style: { verticalAlign: "top" }, children: /* @__PURE__ */ p.jsx("div", { className: "user-avatar", children: /* @__PURE__ */ p.jsx(
                  "img",
                  {
                    className: "avatar",
                    src: Qd(s.email, s.avatar),
                    alt: s.display_name,
                    width: "40",
                    height: "40"
                  }
                ) }) }),
                /* @__PURE__ */ p.jsx("td", { children: /* @__PURE__ */ p.jsx(
                  "a",
                  {
                    href: /^https:\/\//.test(s.url) ? s.url : "https://" + s.url,
                    rel: "external nofollow noreferrer",
                    target: "_blank",
                    children: s.display_name
                  }
                ) }),
                /* @__PURE__ */ p.jsx("td", { children: /* @__PURE__ */ p.jsx(
                  "a",
                  {
                    href: `mailto:${s.email}`,
                    target: "_blank",
                    rel: "noreferrer",
                    children: s.email
                  }
                ) }),
                /* @__PURE__ */ p.jsx("td", { children: o(s.type) }),
                /* @__PURE__ */ p.jsx("td", { children: s.label }),
                /* @__PURE__ */ p.jsx("td", { className: "comment-action", children: i(s).map(
                  ({ key: a, disable: l, name: u, action: c }) => l ? /* @__PURE__ */ p.jsx("span", { className: "weak", children: u }, a) : /* @__PURE__ */ p.jsx(
                    "a",
                    {
                      href: "javascript:void(0)",
                      className: `operate-${a}`,
                      onClick: c,
                      children: u
                    },
                    a
                  )
                ) })
              ] }, s.objectId)) })
            ] }) })
          }
        ),
        /* @__PURE__ */ p.jsx("div", { className: "typecho-list-operate clear-fix", children: /* @__PURE__ */ p.jsx("form", { method: "get", children: /* @__PURE__ */ p.jsx(
          Zd,
          {
            current: n.page,
            total: n.totalPages,
            onChange: (s) => r({ ...n, page: s })
          }
        ) }) })
      ] }) })
    ] }) })
  ] });
}
function ne(e) {
  return `Minified Redux error #${e}; visit https://redux.js.org/Errors?code=${e} for the full message or use the non-minified dev environment for full errors. `;
}
var b3 = typeof Symbol == "function" && Symbol.observable || "@@observable", Yu = b3, ss = () => Math.random().toString(36).substring(7).split("").join("."), U3 = {
  INIT: `@@redux/INIT${/* @__PURE__ */ ss()}`,
  REPLACE: `@@redux/REPLACE${/* @__PURE__ */ ss()}`,
  PROBE_UNKNOWN_ACTION: () => `@@redux/PROBE_UNKNOWN_ACTION${ss()}`
}, Fr = U3;
function sa(e) {
  if (typeof e != "object" || e === null)
    return !1;
  let t = e;
  for (; Object.getPrototypeOf(t) !== null; )
    t = Object.getPrototypeOf(t);
  return Object.getPrototypeOf(e) === t || Object.getPrototypeOf(e) === null;
}
function Lo(e, t, n) {
  if (typeof e != "function")
    throw new Error(ne(2));
  if (typeof t == "function" && typeof n == "function" || typeof n == "function" && typeof arguments[3] == "function")
    throw new Error(ne(0));
  if (typeof t == "function" && typeof n > "u" && (n = t, t = void 0), typeof n < "u") {
    if (typeof n != "function")
      throw new Error(ne(1));
    return n(Lo)(e, t);
  }
  let r = e, i = t, o = /* @__PURE__ */ new Map(), s = o, a = 0, l = !1;
  function u() {
    s === o && (s = /* @__PURE__ */ new Map(), o.forEach((C, g) => {
      s.set(g, C);
    }));
  }
  function c() {
    if (l)
      throw new Error(ne(3));
    return i;
  }
  function f(C) {
    if (typeof C != "function")
      throw new Error(ne(4));
    if (l)
      throw new Error(ne(5));
    let g = !0;
    u();
    const m = a++;
    return s.set(m, C), function() {
      if (g) {
        if (l)
          throw new Error(ne(6));
        g = !1, u(), s.delete(m), o = null;
      }
    };
  }
  function d(C) {
    if (!sa(C))
      throw new Error(ne(7));
    if (typeof C.type > "u")
      throw new Error(ne(8));
    if (typeof C.type != "string")
      throw new Error(ne(17));
    if (l)
      throw new Error(ne(9));
    try {
      l = !0, i = r(i, C);
    } finally {
      l = !1;
    }
    return (o = s).forEach((m) => {
      m();
    }), C;
  }
  function h(C) {
    if (typeof C != "function")
      throw new Error(ne(10));
    r = C, d({
      type: Fr.REPLACE
    });
  }
  function v() {
    const C = f;
    return {
      /**
       * The minimal observable subscription method.
       * @param observer Any object that can be used as an observer.
       * The observer object should have a `next` method.
       * @returns An object with an `unsubscribe` method that can
       * be used to unsubscribe the observable from the store, and prevent further
       * emission of values from the observable.
       */
      subscribe(g) {
        if (typeof g != "object" || g === null)
          throw new Error(ne(11));
        function m() {
          const y = g;
          y.next && y.next(c());
        }
        return m(), {
          unsubscribe: C(m)
        };
      },
      [Yu]() {
        return this;
      }
    };
  }
  return d({
    type: Fr.INIT
  }), {
    dispatch: d,
    subscribe: f,
    getState: c,
    replaceReducer: h,
    [Yu]: v
  };
}
function D3(e, t, n) {
  return Lo(e, t, n);
}
function V3(e) {
  Object.keys(e).forEach((t) => {
    const n = e[t];
    if (typeof n(void 0, {
      type: Fr.INIT
    }) > "u")
      throw new Error(ne(12));
    if (typeof n(void 0, {
      type: Fr.PROBE_UNKNOWN_ACTION()
    }) > "u")
      throw new Error(ne(13));
  });
}
function u1(e) {
  const t = Object.keys(e), n = {};
  for (let o = 0; o < t.length; o++) {
    const s = t[o];
    typeof e[s] == "function" && (n[s] = e[s]);
  }
  const r = Object.keys(n);
  let i;
  try {
    V3(n);
  } catch (o) {
    i = o;
  }
  return function(s = {}, a) {
    if (i)
      throw i;
    let l = !1;
    const u = {};
    for (let c = 0; c < r.length; c++) {
      const f = r[c], d = n[f], h = s[f], v = d(h, a);
      if (typeof v > "u")
        throw a && a.type, new Error(ne(14));
      u[f] = v, l = l || v !== h;
    }
    return l = l || r.length !== Object.keys(s).length, l ? u : s;
  };
}
function Gu(e, t) {
  return function(...n) {
    return t(e.apply(this, n));
  };
}
function B3(e, t) {
  if (typeof e == "function")
    return Gu(e, t);
  if (typeof e != "object" || e === null)
    throw new Error(ne(16));
  const n = {};
  for (const r in e) {
    const i = e[r];
    typeof i == "function" && (n[r] = Gu(i, t));
  }
  return n;
}
function la(...e) {
  return e.length === 0 ? (t) => t : e.length === 1 ? e[0] : e.reduce((t, n) => (...r) => t(n(...r)));
}
function c1(...e) {
  return (t) => (n, r) => {
    const i = t(n, r);
    let o = () => {
      throw new Error(ne(15));
    };
    const s = {
      getState: i.getState,
      dispatch: (l, ...u) => o(l, ...u)
    }, a = e.map((l) => l(s));
    return o = la(...a)(i.dispatch), {
      ...i,
      dispatch: o
    };
  };
}
function H3(e) {
  return sa(e) && "type" in e && typeof e.type == "string";
}
const K3 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  __DO_NOT_USE__ActionTypes: Fr,
  applyMiddleware: c1,
  bindActionCreators: B3,
  combineReducers: u1,
  compose: la,
  createStore: Lo,
  isAction: H3,
  isPlainObject: sa,
  legacy_createStore: D3
}, Symbol.toStringTag, { value: "Module" }));
function qt() {
  return qt = Object.assign || function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, qt.apply(this, arguments);
}
function W3(e) {
  var t;
  e.models.forEach(function(l) {
    return f1(e, l);
  });
  var n = d1(e), r = c1.apply(K3, e.reduxConfig.middlewares), i = e.reduxConfig.devtoolComposer ? (t = e.reduxConfig).devtoolComposer.apply(t, e.reduxConfig.enhancers.concat([r])) : Z3(e.reduxConfig.devtoolOptions).apply(void 0, e.reduxConfig.enhancers.concat([r])), o = e.reduxConfig.createStore || Lo, s = e.reduxConfig.initialState, a = s === void 0 ? {} : s;
  return o(n, a, i);
}
function f1(e, t) {
  var n = {}, r = Object.keys(t.reducers);
  r.forEach(function(a) {
    var l = Y3(a) ? a : t.name + "/" + a;
    n[l] = t.reducers[a];
  });
  var i = function(l, u) {
    return l === void 0 && (l = t.state), u.type in n ? n[u.type](l, u.payload, u.meta) : l;
  }, o = t.baseReducer, s = o ? function(a, l) {
    return a === void 0 && (a = t.state), i(o(a, l), l);
  } : i;
  e.forEachPlugin("onReducer", function(a) {
    s = a(s, t.name, e) || s;
  }), e.reduxConfig.reducers[t.name] = s;
}
function d1(e) {
  var t = e.reduxConfig.rootReducers, n = Q3(e.reduxConfig), r = n;
  return t && Object.keys(t).length && (r = function(o, s) {
    var a = t[s.type];
    return n(a ? a(o, s) : o, s);
  }), e.forEachPlugin("onRootReducer", function(i) {
    r = i(r, e) || r;
  }), r;
}
function Q3(e) {
  var t = e.combineReducers || u1;
  return Object.keys(e.reducers).length ? t(e.reducers) : function(n) {
    return n;
  };
}
function Z3(e) {
  return e === void 0 && (e = {}), !e.disabled && typeof window == "object" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__(e) : la;
}
function Y3(e) {
  return e.indexOf("/") > -1;
}
var G3 = function(t, n, r) {
}, J3 = function(t, n, r) {
}, p1 = function(t, n, r, i) {
  return Object.assign(function(o, s) {
    var a = {
      type: n + "/" + r
    };
    return typeof o < "u" && (a.payload = o), typeof s < "u" && (a.meta = s), t.dispatch(a);
  }, {
    isEffect: i
  });
}, X3 = function(t, n) {
  var r = t.dispatch[n.name], i = Object.keys(n.reducers);
  i.forEach(function(o) {
    G3(n.name, n.reducers), r[o] = p1(t, n.name, o, !1);
  });
}, q3 = function(t, n, r) {
  var i = t.dispatch[r.name], o = {};
  r.effects && (o = typeof r.effects == "function" ? r.effects(t.dispatch) : r.effects);
  var s = Object.keys(o);
  s.forEach(function(a) {
    J3(r.name), n.effects[r.name + "/" + a] = o[a].bind(i), i[a] = p1(t, r.name, a, !0);
  });
};
function e4(e) {
  return {
    models: t4(e.models),
    reduxConfig: e.redux,
    forEachPlugin: function(n, r) {
      e.plugins.forEach(function(i) {
        i[n] && r(i[n]);
      });
    },
    effects: {}
  };
}
function t4(e) {
  return Object.keys(e).map(function(t) {
    var n = n4(t, e[t]);
    return n;
  });
}
function n4(e, t) {
  return qt({
    name: e,
    reducers: {}
  }, t);
}
function r4(e) {
  var t = e4(e);
  t.reduxConfig.middlewares.push(i4(t)), t.forEachPlugin("createMiddleware", function(i) {
    t.reduxConfig.middlewares.push(i(t));
  });
  var n = W3(t), r = qt({}, n, {
    name: e.name,
    addModel: function(o) {
      f1(t, o), Ju(r, o), Xu(r, t, o), n.replaceReducer(d1(t)), n.dispatch({
        type: "@@redux/REPLACE"
      });
    }
  });
  return o4(r, e.plugins), t.models.forEach(function(i) {
    return Ju(r, i);
  }), t.models.forEach(function(i) {
    return Xu(r, t, i);
  }), t.forEachPlugin("onStoreCreated", function(i) {
    r = i(r, t) || r;
  }), r;
}
function i4(e) {
  return function(t) {
    return function(n) {
      return function(r) {
        return r.type in e.effects ? (n(r), e.effects[r.type](r.payload, t.getState(), r.meta)) : n(r);
      };
    };
  };
}
function Ju(e, t) {
  var n = {};
  e.dispatch["" + t.name] = n, X3(e, t);
}
function Xu(e, t, n) {
  q3(e, t, n), t.forEachPlugin("onModel", function(r) {
    r(n, e);
  });
}
function o4(e, t) {
  t.forEach(function(n) {
    if (n.exposed) {
      var r = Object.keys(n.exposed);
      r.forEach(function(i) {
        if (n.exposed) {
          var o = n.exposed[i], s = typeof o == "function";
          e[i] = s ? function() {
            for (var a = arguments.length, l = new Array(a), u = 0; u < a; u++)
              l[u] = arguments[u];
            return o.apply(void 0, [e].concat(l));
          } : Object.create(n.exposed[i]);
        }
      });
    }
  });
}
var qu = 0;
function s4(e) {
  var t, n, r, i = (t = e.name) != null ? t : "Rematch Store " + qu;
  qu += 1;
  var o = {
    name: i,
    models: e.models || {},
    plugins: e.plugins || [],
    redux: qt({
      reducers: {},
      rootReducers: {},
      enhancers: [],
      middlewares: []
    }, e.redux, {
      devtoolOptions: qt({
        name: i
      }, (n = (r = e.redux) == null ? void 0 : r.devtoolOptions) != null ? n : {})
    })
  };
  return o.plugins.forEach(function(s) {
    s.config && (o.models = ci(o.models, s.config.models), s.config.redux && (o.redux.initialState = ci(o.redux.initialState, s.config.redux.initialState), o.redux.reducers = ci(o.redux.reducers, s.config.redux.reducers), o.redux.rootReducers = ci(o.redux.rootReducers, s.config.redux.reducers), o.redux.enhancers = [].concat(o.redux.enhancers, s.config.redux.enhancers || []), o.redux.middlewares = [].concat(o.redux.middlewares, s.config.redux.middlewares || []), o.redux.combineReducers = o.redux.combineReducers || s.config.redux.combineReducers, o.redux.createStore = o.redux.createStore || s.config.redux.createStore));
  }), o;
}
function ci(e, t) {
  return t ? qt({}, t, e) : e;
}
var l4 = function(t) {
  var n = s4(t || {});
  return r4(n);
};
async function a4() {
  return ie("token").catch(() => {
    h1(), Promise.reject(new Error("get userinfo failed"));
  });
}
async function u4({ email: e, password: t, code: n, recaptchaV3: r, turnstile: i }) {
  return ie({
    url: "token",
    method: "POST",
    body: { email: e, password: t, code: n, recaptchaV3: r, turnstile: i }
  });
}
async function h1() {
  window.TOKEN = null, sessionStorage.removeItem("TOKEN"), localStorage.removeItem("TOKEN");
}
async function c4(e) {
  return ie({ url: "user", method: "POST", body: e });
}
async function f4({ email: e }) {
  return ie({
    url: "user/password",
    method: "PUT",
    body: { email: e }
  });
}
const d4 = {
  state: null,
  reducers: {
    setUser(e, t) {
      return t;
    },
    updateUser(e, t) {
      return { ...e, ...t };
    }
  },
  effects: (e) => ({
    async loadUserInfo() {
      const t = await a4();
      if (t != null && t.email) {
        if (window.opener) {
          const n = localStorage.getItem("TOKEN"), r = !!n, i = n || window.TOKEN || sessionStorage.getItem("token");
          window.opener.postMessage(
            { type: "userInfo", data: { token: i, remember: r, ...t } },
            "*"
          );
        }
        return e.user.setUser(t);
      }
    },
    async login({ email: t, password: n, code: r, remember: i, recaptchaV3: o, turnstile: s }) {
      const { token: a, ...l } = await u4({
        email: t,
        password: n,
        code: r,
        recaptchaV3: o,
        turnstile: s
      });
      return a && (window.TOKEN = a, sessionStorage.setItem("TOKEN", a), i && localStorage.setItem("TOKEN", a), window.opener && window.opener.postMessage(
        { type: "userInfo", data: { token: a, remember: i, ...l } },
        "*"
      )), e.user.setUser(l);
    },
    logout() {
      h1(), e.user.setUser(null);
    },
    register(t) {
      return c4(t);
    },
    forgot(t) {
      return f4(t);
    },
    async updateProfile(t) {
      return await pr(t), window.opener && window.opener.postMessage({ type: "profile", data: t }, "*"), e.user.updateUser(t);
    }
  })
}, m1 = l4({ models: { user: d4 } });
function fi(e) {
  const t = At((n) => n.user);
  return k.useEffect(() => {
    const n = e.meta || {}, r = e.basename || "";
    if (!(t != null && t.email))
      return location.href = r + "/ui/login?redirect=" + location.pathname.replace(r, "");
    if (n.auth ? e.meta.auth !== t.type : !1)
      return location.href = r + "/ui/profile";
  }, [t, e.meta]), t ? e.children : null;
}
function p4() {
  const e = location.pathname.match(/(.*?)\/ui/), t = e ? e[1] : "/";
  return /* @__PURE__ */ p.jsx(c2, { store: m1, children: /* @__PURE__ */ p.jsx(l0, { basename: t, children: /* @__PURE__ */ p.jsxs(e0, { children: [
    /* @__PURE__ */ p.jsx(
      ht,
      {
        path: "/ui",
        exact: !0,
        element: /* @__PURE__ */ p.jsx(fi, { meta: { auth: "administrator" }, basename: t, children: /* @__PURE__ */ p.jsx(y3, {}) })
      }
    ),
    /* @__PURE__ */ p.jsx(
      ht,
      {
        path: "/ui/user",
        exact: !0,
        element: /* @__PURE__ */ p.jsx(fi, { meta: { auth: "administrator" }, basename: t, children: /* @__PURE__ */ p.jsx(z3, {}) })
      }
    ),
    /* @__PURE__ */ p.jsx(
      ht,
      {
        path: "/ui/migration",
        exact: !0,
        element: /* @__PURE__ */ p.jsx(fi, { meta: { auth: "administrator" }, basename: t, children: /* @__PURE__ */ p.jsx(C3, {}) })
      }
    ),
    /* @__PURE__ */ p.jsx(ht, { path: "/ui/login", exact: !0, element: /* @__PURE__ */ p.jsx(bg, {}) }),
    /* @__PURE__ */ p.jsx(ht, { path: "/ui/register", exact: !0, element: /* @__PURE__ */ p.jsx(A3, {}) }),
    /* @__PURE__ */ p.jsx(ht, { path: "/ui/forgot", exact: !0, element: /* @__PURE__ */ p.jsx($g, {}) }),
    /* @__PURE__ */ p.jsx(
      ht,
      {
        path: "/ui/profile",
        exact: !0,
        element: /* @__PURE__ */ p.jsx(fi, { children: /* @__PURE__ */ p.jsx(T3, {}) })
      }
    )
  ] }) }) });
}
const {
  slice: h4,
  forEach: m4
} = [];
function g4(e) {
  return m4.call(h4.call(arguments, 1), (t) => {
    if (t)
      for (const n in t)
        e[n] === void 0 && (e[n] = t[n]);
  }), e;
}
const ec = /^[\u0009\u0020-\u007e\u0080-\u00ff]+$/, v4 = (e, t, n) => {
  const r = n || {};
  r.path = r.path || "/";
  const i = encodeURIComponent(t);
  let o = `${e}=${i}`;
  if (r.maxAge > 0) {
    const s = r.maxAge - 0;
    if (Number.isNaN(s)) throw new Error("maxAge should be a Number");
    o += `; Max-Age=${Math.floor(s)}`;
  }
  if (r.domain) {
    if (!ec.test(r.domain))
      throw new TypeError("option domain is invalid");
    o += `; Domain=${r.domain}`;
  }
  if (r.path) {
    if (!ec.test(r.path))
      throw new TypeError("option path is invalid");
    o += `; Path=${r.path}`;
  }
  if (r.expires) {
    if (typeof r.expires.toUTCString != "function")
      throw new TypeError("option expires is invalid");
    o += `; Expires=${r.expires.toUTCString()}`;
  }
  if (r.httpOnly && (o += "; HttpOnly"), r.secure && (o += "; Secure"), r.sameSite)
    switch (typeof r.sameSite == "string" ? r.sameSite.toLowerCase() : r.sameSite) {
      case !0:
        o += "; SameSite=Strict";
        break;
      case "lax":
        o += "; SameSite=Lax";
        break;
      case "strict":
        o += "; SameSite=Strict";
        break;
      case "none":
        o += "; SameSite=None";
        break;
      default:
        throw new TypeError("option sameSite is invalid");
    }
  return o;
}, tc = {
  create(e, t, n, r) {
    let i = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : {
      path: "/",
      sameSite: "strict"
    };
    n && (i.expires = /* @__PURE__ */ new Date(), i.expires.setTime(i.expires.getTime() + n * 60 * 1e3)), r && (i.domain = r), document.cookie = v4(e, encodeURIComponent(t), i);
  },
  read(e) {
    const t = `${e}=`, n = document.cookie.split(";");
    for (let r = 0; r < n.length; r++) {
      let i = n[r];
      for (; i.charAt(0) === " "; ) i = i.substring(1, i.length);
      if (i.indexOf(t) === 0) return i.substring(t.length, i.length);
    }
    return null;
  },
  remove(e) {
    this.create(e, "", -1);
  }
};
var y4 = {
  name: "cookie",
  // Deconstruct the options object and extract the lookupCookie property
  lookup(e) {
    let {
      lookupCookie: t
    } = e;
    if (t && typeof document < "u")
      return tc.read(t) || void 0;
  },
  // Deconstruct the options object and extract the lookupCookie, cookieMinutes, cookieDomain, and cookieOptions properties
  cacheUserLanguage(e, t) {
    let {
      lookupCookie: n,
      cookieMinutes: r,
      cookieDomain: i,
      cookieOptions: o
    } = t;
    n && typeof document < "u" && tc.create(n, e, r, i, o);
  }
}, w4 = {
  name: "querystring",
  // Deconstruct the options object and extract the lookupQuerystring property
  lookup(e) {
    var r;
    let {
      lookupQuerystring: t
    } = e, n;
    if (typeof window < "u") {
      let {
        search: i
      } = window.location;
      !window.location.search && ((r = window.location.hash) == null ? void 0 : r.indexOf("?")) > -1 && (i = window.location.hash.substring(window.location.hash.indexOf("?")));
      const s = i.substring(1).split("&");
      for (let a = 0; a < s.length; a++) {
        const l = s[a].indexOf("=");
        l > 0 && s[a].substring(0, l) === t && (n = s[a].substring(l + 1));
      }
    }
    return n;
  }
};
let Jn = null;
const nc = () => {
  if (Jn !== null) return Jn;
  try {
    Jn = window !== "undefined" && window.localStorage !== null;
    const e = "i18next.translate.boo";
    window.localStorage.setItem(e, "foo"), window.localStorage.removeItem(e);
  } catch {
    Jn = !1;
  }
  return Jn;
};
var x4 = {
  name: "localStorage",
  // Deconstruct the options object and extract the lookupLocalStorage property
  lookup(e) {
    let {
      lookupLocalStorage: t
    } = e;
    if (t && nc())
      return window.localStorage.getItem(t) || void 0;
  },
  // Deconstruct the options object and extract the lookupLocalStorage property
  cacheUserLanguage(e, t) {
    let {
      lookupLocalStorage: n
    } = t;
    n && nc() && window.localStorage.setItem(n, e);
  }
};
let Xn = null;
const rc = () => {
  if (Xn !== null) return Xn;
  try {
    Xn = window !== "undefined" && window.sessionStorage !== null;
    const e = "i18next.translate.boo";
    window.sessionStorage.setItem(e, "foo"), window.sessionStorage.removeItem(e);
  } catch {
    Xn = !1;
  }
  return Xn;
};
var C4 = {
  name: "sessionStorage",
  lookup(e) {
    let {
      lookupSessionStorage: t
    } = e;
    if (t && rc())
      return window.sessionStorage.getItem(t) || void 0;
  },
  cacheUserLanguage(e, t) {
    let {
      lookupSessionStorage: n
    } = t;
    n && rc() && window.sessionStorage.setItem(n, e);
  }
}, S4 = {
  name: "navigator",
  lookup(e) {
    const t = [];
    if (typeof navigator < "u") {
      const {
        languages: n,
        userLanguage: r,
        language: i
      } = navigator;
      if (n)
        for (let o = 0; o < n.length; o++)
          t.push(n[o]);
      r && t.push(r), i && t.push(i);
    }
    return t.length > 0 ? t : void 0;
  }
}, E4 = {
  name: "htmlTag",
  // Deconstruct the options object and extract the htmlTag property
  lookup(e) {
    let {
      htmlTag: t
    } = e, n;
    const r = t || (typeof document < "u" ? document.documentElement : null);
    return r && typeof r.getAttribute == "function" && (n = r.getAttribute("lang")), n;
  }
}, k4 = {
  name: "path",
  // Deconstruct the options object and extract the lookupFromPathIndex property
  lookup(e) {
    var i;
    let {
      lookupFromPathIndex: t
    } = e;
    if (typeof window > "u") return;
    const n = window.location.pathname.match(/\/([a-zA-Z-]*)/g);
    return Array.isArray(n) ? (i = n[typeof t == "number" ? t : 0]) == null ? void 0 : i.replace("/", "") : void 0;
  }
}, N4 = {
  name: "subdomain",
  lookup(e) {
    var i, o;
    let {
      lookupFromSubdomainIndex: t
    } = e;
    const n = typeof t == "number" ? t + 1 : 1, r = typeof window < "u" && ((o = (i = window.location) == null ? void 0 : i.hostname) == null ? void 0 : o.match(/^(\w{2,5})\.(([a-z0-9-]{1,63}\.[a-z]{2,6})|localhost)/i));
    if (r)
      return r[n];
  }
};
function j4() {
  return {
    order: ["querystring", "cookie", "localStorage", "sessionStorage", "navigator", "htmlTag"],
    lookupQuerystring: "lng",
    lookupCookie: "i18next",
    lookupLocalStorage: "i18nextLng",
    lookupSessionStorage: "i18nextLng",
    // cache user language
    caches: ["localStorage"],
    excludeCacheFor: ["cimode"],
    // cookieMinutes: 10,
    // cookieDomain: 'myDomain'
    convertDetectedLanguage: (e) => e
  };
}
class g1 {
  constructor(t) {
    let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    this.type = "languageDetector", this.detectors = {}, this.init(t, n);
  }
  init(t) {
    let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    this.services = t || {
      languageUtils: {}
    }, this.options = g4(n, this.options || {}, j4()), typeof this.options.convertDetectedLanguage == "string" && this.options.convertDetectedLanguage.indexOf("15897") > -1 && (this.options.convertDetectedLanguage = (i) => i.replace("-", "_")), this.options.lookupFromUrlIndex && (this.options.lookupFromPathIndex = this.options.lookupFromUrlIndex), this.i18nOptions = r, this.addDetector(y4), this.addDetector(w4), this.addDetector(x4), this.addDetector(C4), this.addDetector(S4), this.addDetector(E4), this.addDetector(k4), this.addDetector(N4);
  }
  addDetector(t) {
    return this.detectors[t.name] = t, this;
  }
  detect(t) {
    t || (t = this.options.order);
    let n = [];
    return t.forEach((r) => {
      if (this.detectors[r]) {
        let i = this.detectors[r].lookup(this.options);
        i && typeof i == "string" && (i = [i]), i && (n = n.concat(i));
      }
    }), n = n.map((r) => this.options.convertDetectedLanguage(r)), this.services.languageUtils.getBestMatchFromCodes ? n : n.length > 0 ? n[0] : null;
  }
  cacheUserLanguage(t, n) {
    n || (n = this.options.caches), n && (this.options.excludeCacheFor && this.options.excludeCacheFor.indexOf(t) > -1 || n.forEach((r) => {
      this.detectors[r] && this.detectors[r].cacheUserLanguage(t, this.options);
    }));
  }
}
g1.type = "languageDetector";
ce.use(g1).use(O0).init({
  // we init with resources
  resources: _g,
  fallbackLng: "zh-CN",
  debug: !0,
  // have a common namespace used around the full app
  ns: ["translations"],
  defaultNS: "translations",
  keySeparator: !1,
  // we use content as keys
  interpolation: {
    escapeValue: !1
  }
});
async function L4() {
  await Promise.race([
    new Promise((n) => setTimeout(n, 50)),
    new Promise((n) => {
      window.addEventListener("message", (r) => {
        r && r.type === "TOKEN" && r.data && n(r);
      });
    }),
    new Promise((n) => {
      const i = new URLSearchParams(location.search).get("token");
      i && n(i);
    })
  ]).then((n) => {
    n && (window.TOKEN = n, sessionStorage.setItem("TOKEN", n));
  }), await Promise.all([m1.dispatch({ type: "user/loadUserInfo" })]).catch(
    (n) => {
      console.error(n);
    }
  );
  const e = document.createElement("div");
  e.style.height = "100%", document.body.appendChild(e), vd(e).render(
    /* @__PURE__ */ p.jsx(he.StrictMode, { children: /* @__PURE__ */ p.jsx(p4, {}) })
  );
}
console.log(
  "%c @waline/admin %c v0.25.3 ",
  "color: white; background: #0078E7; padding:5px 0;",
  "padding:4px;border:1px solid #0078E7;"
);
L4();
