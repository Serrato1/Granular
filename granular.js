body{
  margin:auto;
  font-family: 'PT Sans Narrow';
  width:100%;
  height:100%;
  /* src: url(PT_Sans-Narrow-Web-Regular.woff); */
}






/*Hover Effects */
.cursor-pointer{
  cursor: pointer;
}

/*Properties */
/*--Overflow--*/
.overflow-hidden{
  overflow:hidden
}
.overflow-scroll{
  overflow: scroll;
}
.overflow-visible{
  overflow: visible
}


/* Form Structure */
/*Form*/
.form{
  max-height:100%;
}
.form > *{
  margin-top:25px;
  width:80%;
  display:block;
  transition:.25s;
  border:none;
  outline:none;
  box-sizing:border-box ;
}
.form input[type="text"]{
  background: #f2f2f2;
  height:50px;
}

.form input[type="text"]:focus{
  border-bottom:2px solid green;
  padding: 12px ;
}
.form textarea{
  background:#f2f2f2;
  max-height: inherit;
}
.form textarea:focus{
  padding: 5px;
}
.form input[type="submit"]{
  background:#f2f2f2;
  cursor:pointer;
  height:50px;
  width:80%;
  align-self: center;
  justify-self: center;
}
/* Grid Structure Classes*/
/*Quick Structures */
.nav-bar{
  position:relative;
  width:100%;
  height: 60px;
  background:#f2f2f2;
  display:grid;
  grid-template-columns: repeat(8, 1fr) ;
  grid-template-rows: 60px;
  justify-items: center;
  align-items: center;
}
.nav-bar div{
  color:inherit;
  cursor:pointer;
}

.fixed{
  position:fixed;
}
.height-full{
  height: calc(100vh);
}

/*Grid Area Templates */
/*Header-Side-Main-Footer */
.container{
  position:relative;
  display :grid;
  grid-template-columns: repeat(5,1fr);
  /* grid-template-rows: [row1-start] auto [row2-start] 500px [row3-start] auto [last] */
  grid-template-rows: 50px auto 50px;
  grid-template-areas:
  "header header header header header"
  "sidebar main main main main"
  "footer footer footer footer footer";
  height: calc(100vh);
}
.header{
  grid-area: header;
}
.sidebar{
  grid-area: sidebar;
}
.main{
  grid-area: main;
}
.footer{
  grid-area: footer;
}
/*Camera App*/
.main-container{
  position:relative;
  display :grid;
  grid-template-columns: repeat(8,1fr);
  /* grid-template-rows: [row1-start] auto [row2-start] 500px [row3-start] auto [last] */
  grid-template-rows: 50px auto 50px;
  grid-template-areas:
  "filler filler filler filler filler filler filler filler"
  "main main main main main sidebar sidebar sidebar"
  "footer footer footer footer footer footer footer footer";
  height: calc(100vh);
}
/*---*/
.checkout-container{
  width:100%;
  height: 300px;
}
.search-container{
  height:50px;
}
.filler{
  grid-area: filler;
}
.main{
  grid-area:  main;
}
.main .post-container{
  display:grid;
  grid-template-rows: 50px;
}




.center{
  width: 50vw;
  margin-left: 25vw;
}

.contain-fixed{
  position:relative;
  display :grid;
  grid-template-columns: repeat(5,1fr);
  /* grid-template-rows: [row1-start] auto [row2-start] 500px [row3-start] auto [last] */
  grid-template-rows: 50px auto 50px;
  grid-template-areas:
  "header header header header header"
  "sidebar main main main main"
  "footer footer footer footer footer";
  height: calc(100vh - 50px);
  width: 50vw;
}
/*Grid Template*/
.grid-items-center{
  justify-items: center;
  align-items: center;
}
.grid-col-8{
  display:grid;
  grid-template-columns: repeat(8,1fr);
}
.grid-col-7{
  display:grid;
  grid-template-columns: repeat(7,1fr);
}
.grid-col-6{
  display:grid;
  grid-template-columns: repeat(6,1fr);
}
.grid-col-5{
  display:grid;
  grid-template-columns: repeat(5,1fr);
}
.grid-col-4{
  display:grid;
  grid-template-columns: repeat(4,1fr);
}
.grid-col-3{
  display:grid;
  grid-template-columns: repeat(3,1fr);
}
.grid-col-2{
  display:grid;
  grid-template-columns: repeat(2,1fr);
}
.grid-col-1{
  display:grid;
  grid-template-columns: repeat(1,1fr);
}
/*Sub Grid*/
.sub-grid{
  display: subgrid;
}
/*Column Position*/
.col-1{
  grid-column:1;
}
.col-2{
  grid-column:2;
}
.col-3{
  grid-column:3;
}
.col-4{
  grid-column:4;
}
.col-5{
  grid-column:5;
}
/* Column Span Sizes*/
.col-sz-1{
  grid-column: span 1;
}
.col-sz-2{
  grid-column: span 2;
}
.col-sz-3{
  grid-column: span 3;
}
.col-sz-4{
  grid-column: span 4;
}
.col-sz-5{
  grid-column: span 5;
}
.col-sz-6{
  grid-column: span 6;
}
.col-sz-7{
  grid-column: span 7;
}
.col-sz-8{
  grid-column: span 8;
}

/*Template Rows */
.grid-row-auto{
  grid-auto-rows: 300px;
}
.grid-row-12{
  grid-template-rows: repeat(12,1fr);
}
.grid-row-11{
  grid-template-rows: repeat(11,1fr);
}
.grid-row-10{
  grid-template-rows: repeat(10,1fr);
}
.grid-row-8{
  grid-template-rows: repeat(8,1fr);
}
.grid-row-7{
  grid-template-rows: repeat(7,1fr);
}
.grid-row-6{
  grid-template-rows: repeat(6,1fr);
}
.grid-row-5{
  grid-template-rows: repeat(5,1fr);
}
.grid-row-4{
  grid-template-rows: repeat(4,1fr);
}
.grid-row-3{
  grid-template-rows: repeat(3,1fr);
}
.grid-row-2{
  grid-template-rows: repeat(2,1fr);
}
.grid-row-1{
  grid-template-rows: repeat(1,1fr);
}
/* Row Sizes */
/* Row Auto Sizes */
.rw-sz-auto{
  grid-row: auto;
}

/* Row Span Sizes */
.rw-sz-10{
  grid-row: span 9;
}
.rw-sz-9{
  grid-row: span 9;
}
.rw-sz-8{
  grid-row: span 8;
}
.rw-sz-7{
  grid-row: span 7;
}
.rw-sz-6{
  grid-row: span 6;
}
.rw-sz-5{
  grid-row: span 5;
}
.rw-sz-4{
  grid-row: span 4;
}
.rw-sz-3{
  grid-row: span 3;
}
.rw-sz-2{
  grid-row:span 2;
}
.rw-sz-1{
  grid-row: span 1;
}

/* Font Size Classes*/
.font-small{
  font-size:10px;
}
.font-mild{
  font-size:20px
}
.font-large{
  font-size:40px
}

/* Font Color Classes*/
.color-white{
  color:white;
}
.color-black{
  color:#374047;
}
.color-light{
  color:#17B090 ;
}
.color-green{
  color: #64D98A;
}
.color-yellow{
  color:#FFCA0C
}
.color-pink{
  color:#FF6766;
}
.color-blue{
  color:#3D8EB9;
}
.color-gray{
  color:#25373D;
}
.color-orange{
  color:#FF7416;
}

/* Positioning */
.text-center{
  text-align:center;
  line-height:60px;
  vertical-align:   center;
  text-align: center;
}
.position-fix{
  position:fixed;
}
.position-abs{
  position:absolute;
}
.position-top{
  top:0;
}
.position-center-half{
  width:50%;
  margin-left:25%;
}

/*Grid Item Positioning */
.item-center{
  justify-self: center;
  align-self:center;
}
.item-left{
  justify-self: start;
  align-self: center;
}
.item-right{
  justify-self: end;
  align-self: end;
}
.item-top{
  justify-self: center;
  align-self:start;
}
.item-bottom{
  justify-self: center;
  align-self:end;
}

/*Size Adjust*/
.height-relative{
  height:100px;
}
.height-strong{
  height:200px;
}
.height-medium{
  height:100px;
}
.height-weak{
  height:50px;
}

.width-strong{
  width: 200px;
}
.width-medium{
  width: 100px;
}
.width-weak{
  width: 50px;
}


/*Margins */
.margin-right-strong{
  margin-right:50px;
}
.margin-right-mild{
  margin-right:20px;
}
.margin-right-weak{
  margin-right:10px;
}

.margin-left-strong{
  margin-left:50px;
}
.margin-left-mild{
  margin-left:20px;
}
.margin-left-weak{
  margin-left:10px;
}

.margin-bottom-strong{
  margin-bottom:50px;
}
.margin-bottom-mild{
  margin-bottom:20px;
}
.margin-bottom-weak{
  margin-bottom:10px;
}

.margin-top-strong{
  margin-bottom:50px;
}
.margin-top-mild{
  margin-bottom:20px;
}
.margin-top-weak{
  margin-bottom:10px;
}

/*Background Color */
.bg-light{
  background:#f2f2f2;
}
.bg-dark{
  background:#494D4B;
}
.bg-black{
  background:black;
}
.bg-green{
  background: #25A278;
}
.bg-white{
  background:white;
}
/*BORDERS*/
/*Border Full*/
.border-strong{
  border:5px black solid;
}
.border-mild{
  border:3px black solid;
}
.border-weak{
  border:1px black solid;
}

/*Border Color */
.border-color-green{
  border-color:#25A278;
}
.border-color-black{
  border-color:black;
}
.border-color-white{
  border-color:white;
}
.border-color-none{
  border-color: none;
}
/*Border Radius*/
.edges-strong{
  border-radius: 20px;
}
.edges-mild{
  border-radius: 10px;
}
.edges-weak{
  border-radius: 5px;
}
.edges-circle{
  border-radius: 50%;
}
/*Border Section*/
.border-bottom{
  border-bottom: 5px black solid;
}
.border-right{
  border-right: 5px black solid;
}
.border-left{
  border-left: 5px black solid;
}

.border-top{
  border-top: 5px black solid;
}

/* No Style Classes*/
.no-style-link{
  text-decoration:none;
}
.no-style-list{
  list-style:none;
}
.no-style{
  text-decoration:none;
  list-style:none;
  border:none;
  outline:none;
  appearance:none;
  -webkit-appearance:none;
}



/*Forms*/
.input-container input{
  text-decoration:none;
  list-style:none;
  border:none;
  outline:none;
  appearance:none;
  -webkit-appearance:none;
  border-bottom:solid;
  border-bottom-color:green;
  border-bottom-width:2px;
  color:black;
  height:20px;
  width:100%;
}
