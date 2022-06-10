(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/Adminlogin/Adminlogin.component.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/Adminlogin/Adminlogin.component.html ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n\n\n\n<div class=\"row\">\n            <div class=\"col-md-4\"></div>\n            <div class=\"col-md-4\">\n              <div class=\"login\">\n          \n  <h1>Admin login</h1>\n\n         <div class=\"form-group\">\n          <label for=\"\">Username</label>\n          <input [(ngModel)]=\"email1\" type=\"text\" class=\"form-control\">    \n          </div>\n\n          <div class=\"form-group\">\n               <label for=\"\">Password</label>\n                <input [(ngModel)]=\"password1\" type=\"text\" class=\"form-control\">    \n                </div>\n            \n<!--   \n       <div class=\"form-group\">\n        Username\n        <input [(ngModel)]=\"email1\" type=\"text\" name=\"email1\"> \n        </div> -->\n<!-- \n        <div class=\"form-group\">\n        Password \n        <input [(ngModel)]=\"password1\" type=\"password\" name=\"password1\">      \n        </div> -->\n\n        <div class=\"form-group\">\n       <button (click)=\"onlogin()\" class=\"btn btn-default\">Login</button>     \n        </div>\n   </div>   \n   </div>\n   <div class=\"col-md-4\"></div>\n</div> \n\n\n        \n  \n\n ");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/AllOrderList/AllOrderList.component.html":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/AllOrderList/AllOrderList.component.html ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<br><br><br>\n\n<h1>All order history:- </h1>\n\n<table class=\"table table-striped table-bordered\">\n\n<thead>\n<tr>\n    <th>No</th>\n    <th>Image</th>\n    <th>MR ID</th>\n    <th>Product Name</th>\n    <th>Quantity</th>\n    <th>Discount</th>\n    <th>Amount</th>\n    <th>DR Name</th>\n    <th>Phone NO</th>\n    <th>Payment Mode</th>\n    <th>Oreder Date</th>\n    <th>Delivery Date</th>\n    <th>Full Address</th>\n    <th>Delivery Status</th>\n    <th>Action</th>\n   \n</tr>\n</thead>\n\n\n<tbody>\n    <tr *ngFor=\"let pr of products; let index=index\">\n        <td>{{index+1}}</td>\n        <td>\n            <img class=\"thumbnail\" src=\"http://localhost:4000/{{pr.image}}\" alt=\"\">\n        </td>\n        <td>{{pr.MRid}}</td>\n        <td>{{pr.name}}</td>\n        <td>{{pr.Quantity}}</td>\n        <td>{{pr.totalDiscount}}</td>\n        <td>{{pr.totalAmount}}</td>\n        <td>{{pr.drname}}</td>\n        <td>{{pr.drphoneno}}</td>\n        <td>{{pr.PaymentMode}}</td>\n        <td>{{pr.OrderDate}}</td>\n        <td>{{pr.deliveryDate}}</td>\n        <td>{{pr.addressOFdr}}</td>\n\n        <td *ngIf=\"isexpire(pr)\">  <font color=\"green\">  Done </font> </td> \n\n        <td *ngIf=\"!isexpire(pr)\">  <font color=\"red\"> In Progress  </font>  </td>  \n\n        <td ><button (click)=\"ondelete(pr.id)\" class=\"btn btn-danger\"> <i class=\"glyphicon glyphicon-trash\"></i></button>\n        </td>\n    </tr>\n\n\n</tbody>\n\n\n</table>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/Cart/Cart.component.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/Cart/Cart.component.html ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<br><br>\n\n<div class=\"color\">\n<h3 class=\"boxed\">{{msg}}:-</h3>\n\n<div class=\"row\" *ngFor=\"let product of Cart\">\n      \n<div class=\"boxed\">    \n\n        <div class=\"col-md-1\"></div> \n        <div class=\"row\">\n            <div class=\"col-md-2\">\n              \n                <img style=\"border:1px solid green\" src=\"http://localhost:4000/{{product.image}}\" width=\"150px;\" height=\"200px;\"/><br><br>\n            </div>\n\n        \n            <div class=\"row\">\n                <div class=\"col-md-3\"> \n                 <b>  {{product.name}}  </b> <br><br>\n                 <b> <td>Quantity:- <font color=\"blue\"> {{product.Quantity}}</font></td> </b> <br>\n                 <b> <td>You saved:- <font color=\"blue\"> ₹{{product.totalDiscount}}/-</font></td> </b> <br>\n                <b> <td>Amount:- <font color=\"blue\"> ₹{{product.totalAmount}}/-</font></td> </b>\n                  <br>\n                <button (click)=\"onEdit(product.ProductID,product.id,product.Quantity)\" type=\"button\" class=\"btn btn-info\">Edit</button>\n                </div>\n\n            </div>          \n\n        </div>\n              \n  </div>\n    \n</div>\n\n\n<div *ngIf = !empty>\n\n           <div class=\"hello\"> <b> <td >You Total saved:- <font color=\"blue\"> ₹{{TotalSaved}}/-</font></td> </b> </div> \n         <div class=\"hello\">   <b> <td>Your Total Amount:- <font color=\"blue\"> ₹{{TotalAmountOfProduct}}/-</font></td> </b> </div> \n     <div class=\"hello\">  <button style=\"margin-top: 7px;margin-left: 7px\" type=\"button\" class=\"btn btn-success\" (click)=\"onOrderPlace()\"><b>Place order</b></button> </div> <br><br>\n  \n       \n</div>\n       \n</div>\n\n\n\n\n      ");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/CartProductDetails/CartProductDetails.component.html":
/*!************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/CartProductDetails/CartProductDetails.component.html ***!
  \************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<br><br>\n\n<div class=\"color\">\n<h3 class=\"boxed\">Product Details:-</h3>\n\n\n<div class=\"row\" *ngIf=\"product != undefined\">\n\n        \n<div class=\"boxed\">    \n\n        <div class=\"col-md-1\"></div> \n        <div class=\"row\">\n            <div class=\"col-md-3\">\n              \n                <img style=\"border:1px solid green\" src=\"http://localhost:4000/{{product.image}}\" width=\"250px;\" height=\"300px;\"/>\n            </div>\n\n        \n            <div class=\"row\">\n\n                <div class=\"col-md-3\"> \n                 <b>  {{product.name}}  </b> <br>\n                 <td><font color=\"red\">MRP ₹<del>{{product.price}}</del></font> <font color=\"#3EA055\"> {{product.discount}}% off </font></td>\n                 <br><br>\n\n                 <span>   <button type=\"button\" class=\"btn btn-success\" (click)=\"OnDecrement()\"><b> - </b></button>  </span>\n                 <b class=\"stepper\"> {{count}} </b>\n                 <span>  <button type=\"button\" class=\"btn btn-success\" (click)=\"OnIncrement()\"><b>+</b></button> </span>\n                 <br>\n                 <h4 style=\"margin-top: 13px;margin-left: 25px\" class=\"stepper\">₹{{rate}}</h4>\n\n                </div>\n\n            </div>\n\n           \n\n        </div>\n            \n        \n        <div class=\"col-md-1\"></div>\n        <div class=\"row\">\n            <div class=\"col-md-3\"> \n             <b>  {{product.name}}  </b> \n            </div>\n\n        </div>\n          \n        \n        <div class=\"col-md-1\"></div>\n        <div class=\"row\">\n            <div class=\"col-md-8\">\n              \n             <td><font color=\"red\">MRP ₹<del>{{product.price}}</del></font> <font color=\"#3EA055\"> {{product.discount}}% off </font></td>    \n            </div>\n        </div>\n        \n        <div class=\"col-md-1\"></div>\n        <div class=\"row\">\n            <div class=\"col-md-3\">  \n              <b>  <td>₹{{product.priceWithDiscount}}</td> </b>\n            </div>\n        </div>\n    \n        <div class=\"col-md-1\"></div>\n        <div class=\"row\">\n            <div class=\"col-md-3\">\n                <button style=\"margin-top: 7px\" type=\"button\" class=\"btn btn-success\" (click)=\"onAddToCart()\"><b>Save</b></button>    <br><br>\n            </div>\n        </div>\n        \n        <div class=\"col-md-1\"></div>\n        <div class=\"row\">\n            <div class=\"col-md-5\">\n             <h3>Information about {{product.name}}:-</h3>\n             <td>{{product.description}}</td> \n            </div>\n        </div>\n\n        </div>\n    \n</div>\n\n</div>\n      ");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/MRRegister/MRRegister.component.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/MRRegister/MRRegister.component.html ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n\n<br><br><br>\n\n<h1>Register</h1>\n\n<div class=\"col-md-3\"></div>\n\n<div class=\"row\">\n\n\n              <div class=\"col-md-3\">\n                <div class=\"form-group\">\n                  <label for=\"\">Username</label>\n                  <input [(ngModel)]=\"username\" type=\"text\" class=\"form-control\">\n                </div>\n              </div>\n            \n            \n              <div class=\"col-md-3\">\n                <div class=\"form-group\">\n                  <label for=\"\">FirstName</label>\n                  <input [(ngModel)]=\"firstname\" type=\"text\" class=\"form-control\">        \n              </div>\n            </div>\n            \n</div>\n\n<div class=\"col-md-3\"></div>\n\n\n<div class=\"row\">\n\n              <div class=\"col-md-3\">\n                <div class=\"form-group\">\n                  <label for=\"\">LastName</label>\n                  <input [(ngModel)]=\"lastname\" type=\"text\" class=\"form-control\">\n                </div>\n              </div>\n             \n              <div class=\"col-md-3\">\n                  <div class=\"form-group\">\n                    <label for=\"\">Set Password</label>\n                    <input [(ngModel)]=\"password\" type=\"text\" class=\"form-control\">\n                  </div>\n                </div>\n             \n            </div>\n            \n<div class=\"col-md-3\"></div>\n            \n<div class=\"row\">\n\n              <div class=\"col-md-3\">\n                <div class=\"form-group\">\n                  <label for=\"\">PhoneNo</label>\n                  <input [(ngModel)]=\"phoneno\" type=\"text\" class=\"form-control\">\n                </div>\n              </div>\n            \n            \n              <div class=\"col-md-3\">\n                <div class=\"form-group\">\n                  <label for=\"\">Email</label>\n                  <input [(ngModel)]=\"email\" type=\"text\" class=\"form-control\">\n                </div>\n              </div>\n            \n            </div>\n            \n            <div class=\"col-md-3\"></div>\n            \n            <div class=\"row\">\n              <div class=\"col-md-3\">\n                <button (click)=\"onadd()\" class=\"btn btn-success\">Submit</button>\n                <a style=\"margin-left: 10px;\" routerLink=\"/MRlogin\" class=\"btn btn-success\">Login</a>\n              </div>\n            </div>\n\n<div class=\"col-md-4\">\n  <br>\n<b>If you want to become a Medical Representative(MR) then send your resume at prashantverma817381@gmail.com and contact us</b>\n</div>\n\n<!--             \n<div class=\"form-group\">\n       Username\n       <input [(ngModel)]=\"username\" type=\"text\" name=\"username\"> <br> <br>\n       FirstName\n       <input [(ngModel)]=\"firstname\" type=\"text\" name=\"firstname\"> <br> <br>\n       LastName\n       <input [(ngModel)]=\"lastname\" type=\"text\" name=\"lastname\"> <br> <br>\n       Joindate\n       <input [(ngModel)]=\"joindate\" type=\"text\" name=\"joindate\"> <br> <br>\n       Phone No\n       <input [(ngModel)]=\"phoneno\" type=\"text\" name=\"phoneno\"> <br> <br>\n       Email\n       <input [(ngModel)]=\"email\" type=\"email\" name=\"email\"> <br> <br>\n       Password\n       <input [(ngModel)]=\"password\" type=\"password\" name=\"password\">  <br>\n\n\n       <button (click) = \"onadd()\" class=\"btn btn-success\" style=\"margin-right: 5px;\" >Add</button>  <button (click)=\"back()\" class=\"btn btn-danger\" >Cancel</button>\n\n       \n       \n</div>   -->\n\n\n\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/MRlogin/MRlogin.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/MRlogin/MRlogin.component.html ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<div class=\"row\">\n            <div class=\"col-md-4\"></div>\n            <div class=\"col-md-4\">\n              <div class=\"login\">\n          \n  <h1>MR login</h1>\n       <div class=\"form-group\">\n       <label for=\"\">Email</label>\n       <input [(ngModel)]=\"email\" type=\"text\" class=\"form-control\">\n        </div>\n\n        <div class=\"form-group\">\n        <label for=\"\">Password</label>\n        <input [(ngModel)]=\"password\" type=\"text\" class=\"form-control\">    \n        </div>\n\n        <div class=\"form-group\">\n               <div class=\"checkbox\">\n                   <label>\n                     <input [(ngModel)]=\"rememberme\" type=\"checkbox\"> Remember me ?\n                   </label>\n                 </div>\n           </div>\n\n        <div class=\"form-group\">\n       <button (click)=\"onlogin()\" class=\"btn btn-default\">Submit</button>  <button style=\"margin-left: 265px;\" routerLink=\"/MRregister\" class=\"btn btn-default\">Register</button>     \n        </div>\n   </div>   \n    \n   \n   </div>\n   <div class=\"col-md-4\"></div>\n\n</div> \n\n\n        \n  \n\n ");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/MRorders/MRorders.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/MRorders/MRorders.component.html ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<br><br><br>\n\n<h1>Order History :- </h1>\n\n<table class=\"table table-striped table-bordered\">\n\n<thead>\n<tr>\n    <th>No</th>\n    <th>Image</th>\n    <th>Product Name</th>\n    <th>Quantity</th>\n    <th>Discount</th>\n    <th>Amount</th>\n    <th>DR Name</th>\n    <th>Phone NO</th>\n    <th>Payment Mode</th>\n    <th>Oreder Date</th>\n    <th>Delivery Date</th>\n    <th>Full Address</th>\n    <th>Delivery Status</th>\n    <th>Action</th>\n   \n</tr>\n</thead>\n\n\n<tbody>\n    <tr *ngFor=\"let pr of products; let index=index\">\n        <td>{{index+1}}</td>\n        <td>\n            <img class=\"thumbnail\" src=\"http://localhost:4000/{{pr.image}}\" alt=\"\">\n        </td>\n        <td>{{pr.name}}</td>\n        <td>{{pr.Quantity}}</td>\n        <td>{{pr.totalDiscount}}</td>\n        <td>{{pr.totalAmount}}</td>\n        <td>{{pr.drname}}</td>\n        <td>{{pr.drphoneno}}</td>\n        <td>{{pr.PaymentMode}}</td>\n        <td>{{pr.OrderDate}}</td>\n        <td>{{pr.deliveryDate}}</td>\n        <td>{{pr.addressOFdr}}</td>\n\n        <td *ngIf=\"isexpire(pr)\">  <font color=\"green\">  Done </font> </td> \n\n        <td *ngIf=\"!isexpire(pr)\">  <font color=\"red\"> In Progress  </font>  </td>  \n\n        <td ><button (click)=\"ondelete(pr.id)\" class=\"btn btn-danger\"> <i class=\"glyphicon glyphicon-trash\"></i></button>\n        </td>\n    </tr>\n\n\n</tbody>\n\n\n</table>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/SearchProduct/SearchProduct.component.html":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/SearchProduct/SearchProduct.component.html ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<br><br>\n<br>\n\n<h3 class=\"boxed\">{{msg}}:-</h3> \n<div class=\"col-md-12\" *ngFor=\"let product of SearchArray;let index = index\" >\n \n<div class=\"boxed\">    \n\n<div class=\"col-md-2\"></div> \n<div class=\"row\">\n    <div class=\"col-md-3\">\n      \n        <img style=\"border:1px solid green\" src=\"http://localhost:4000/{{product.image}}\" width=\"250px;\" height=\"300px;\"/>\n    </div>\n</div>\n    \n\n<div class=\"col-md-2\"></div>\n<div class=\"row\">\n    <div class=\"col-md-9\">\n      \n     <b>  {{product.name}}  </b> \n    </div>\n</div>\n  \n\n<div class=\"col-md-2\"></div>\n<div class=\"row\">\n    <div class=\"col-md-8\">\n      \n     <td><font color=\"red\">MRP ₹<del>{{product.price}}</del></font> <font color=\"#3EA055\"> {{product.discount}}% off </font></td>    \n    </div>\n</div>\n\n<div class=\"col-md-2\"></div>\n<div class=\"row\">\n    <div class=\"col-md-3\">\n      \n      <b>  <td>₹{{product.priceWithDiscount}}</td> </b>\n    </div>\n</div>\n\n<div class=\"col-md-2\"></div>\n<div class=\"row\">\n    <div class=\"col-md-3\">\n      \n        <td>\n            <button type=\"button\"   class=\"btn btn-danger\" (click)=\"OnSelectProduct(product.id)\"><b>Show Details</b></button><br><br>\n        </td>\n    </div>\n</div>\n\n</div>\n</div> \n\n\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/UserOrderList/UserOrderList.component.html":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/UserOrderList/UserOrderList.component.html ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<br><br><br>\n\n<h1>Your order history:- </h1>\n\n<table class=\"table table-striped table-bordered\">\n\n<thead>\n<tr>\n    <th>No</th>\n    <th>Image</th>\n    <th>Product Name</th>\n    <th>Quantity</th>\n    <th>Discount</th>\n    <th>Amount</th>\n    <th>DR Name</th>\n    <th>Phone NO</th>\n    <th>Payment Mode</th>\n    <th>Oreder Date</th>\n    <th>Delivery Date</th>\n    <th>Full Address</th>\n    <th>Delivery Status</th>\n    \n   \n</tr>\n</thead>\n\n\n<tbody>\n    <tr *ngFor=\"let pr of products; let index=index\">\n        <td>{{index+1}}</td>\n        <td>\n            <img class=\"thumbnail\" src=\"http://localhost:4000/{{pr.image}}\" alt=\"\">\n        </td>\n        <td>{{pr.name}}</td>\n        <td>{{pr.Quantity}}</td>\n        <td>{{pr.totalDiscount}}</td>\n        <td>{{pr.totalAmount}}</td>\n        <td>{{pr.drname}}</td>\n        <td>{{pr.drphoneno}}</td>\n        <td>{{pr.PaymentMode}}</td>\n        <td>{{pr.OrderDate}}</td>\n        <td>{{pr.deliveryDate}}</td>\n        <td>{{pr.addressOFdr}}</td>\n\n        <td *ngIf=\"isexpire(pr)\">  <font color=\"green\">  Done </font> </td> \n\n        <td *ngIf=\"!isexpire(pr)\">  <font color=\"red\"> In Progress  </font>  </td>  \n\n        <!-- <td ><button (click)=\"ondelete(pr.id)\" class=\"btn btn-danger\"> <i class=\"glyphicon glyphicon-trash\"></i></button>\n        </td> -->\n    </tr>\n\n\n</tbody>\n\n\n</table>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/UserOrders/UserOrders.component.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/UserOrders/UserOrders.component.html ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<br><br><br>\n\n<h1>Delivery Information </h1>\n\n<div class=\"col-md-3\"></div>\n<div class=\"row\">\n              <div class=\"col-md-3\">\n                <div class=\"form-group\">\n                  <label for=\"\">Dr Fullname</label>\n                  <input [(ngModel)]=\"fullname\" type=\"text\" class=\"form-control\">\n                </div>\n              </div>\n               \n              <div class=\"col-md-3\">\n                <div class=\"form-group\">\n                  <label for=\"\">PhoneNo</label>\n                  <input [(ngModel)]=\"phoneno\" type=\"number\" class=\"form-control\">\n                </div>\n              </div>\n                       \n</div>\n\n<div class=\"col-md-3\"></div>\n<div class=\"row\">\n\n              <div class=\"col-md-3\">\n                <div class=\"form-group\">\n                  <label for=\"\">Order Date</label>\n                  <input [(ngModel)]=\"OrderDate\" type=\"date\" class=\"form-control\">\n                </div>\n              </div>\n                       \n              <div class=\"col-md-3\">\n                <div class=\"form-group\">\n                  <label for=\"\">Delivery Date</label>\n                  <input [(ngModel)]=\"deliveryDate\" type=\"date\" class=\"form-control\">\n            \n                </div>\n              </div>\n                       \n </div>\n            \n<div class=\"col-md-3\"></div>\n<div class=\"row\">\n\n                <div class=\"col-md-3\">\n                  <div class=\"form-group\">\n                  <label for=\"\">Payment Mode</label>\n                    <select [(ngModel)]=\"PaymentMode\"  class=\"form-control\">\n                      <option  [value]= 1 >Cash</option>\n                        <option  [value]= 2 >Cheque</option>\n                      <option  [value]= 3 >Upi</option>\n                  </select>       \n                </div>\n                </div>\n            \n              <div class=\"col-md-3\">\n                <div class=\"form-group\">\n                  <label for=\"\">State</label>\n                  <input [(ngModel)]=\"state\" type=\"text\" class=\"form-control\">\n                </div>\n              </div>\n            \n  </div>\n            \n  <div class=\"col-md-3\"></div>   \n     <div class=\"row\">\n    \n              <div class=\"col-md-3\">\n                <div class=\"form-group\">\n                  <label for=\"\">City</label>\n                  <input [(ngModel)]=\"city\" type=\"text\" class=\"form-control\">\n                </div>\n              </div>\n\n\n              <div class=\"col-md-3\">\n                  <div class=\"form-group\">\n                    <label for=\"\">Pincode</label>\n                    <input [(ngModel)]=\"pincode\" type=\"number\" class=\"form-control\">\n                  </div>\n                </div>\n            \n    </div>\n            \n\n <div class=\"col-md-3\"></div>   \n    <div class=\"row\">\n   \n             <div class=\"col-md-3\">\n                 <div class=\"form-group\">\n                   <label for=\"\">Address</label>\n                   <textarea [(ngModel)]=\"address\" name=\"address\" rows=\"4\" class=\"form-control\"></textarea>\n                 </div>\n               </div>\n   \n   </div>\n           \n\n\n            <div class=\"col-md-3\"></div>\n            \n            <div class=\"row\">\n              <div class=\"col-md-3\">\n                <button (click)=\"onadd()\" class=\"btn btn-success\">Confirm Order</button>\n                <a style=\"margin-left: 10px;\" routerLink=\"/MRlogin/cart\" class=\"btn btn-danger\">Cancel</a>\n              </div>\n            </div>\n\n<!--             \n<div class=\"form-group\">\n       Username\n       <input [(ngModel)]=\"username\" type=\"text\" name=\"username\"> <br> <br>\n       FirstName\n       <input [(ngModel)]=\"firstname\" type=\"text\" name=\"firstname\"> <br> <br>\n       LastName\n       <input [(ngModel)]=\"lastname\" type=\"text\" name=\"lastname\"> <br> <br>\n       Joindate\n       <input [(ngModel)]=\"joindate\" type=\"text\" name=\"joindate\"> <br> <br>\n       Phone No\n       <input [(ngModel)]=\"phoneno\" type=\"text\" name=\"phoneno\"> <br> <br>\n       Email\n       <input [(ngModel)]=\"email\" type=\"email\" name=\"email\"> <br> <br>\n       Password\n       <input [(ngModel)]=\"password\" type=\"password\" name=\"password\">  <br>\n\n\n       <button (click) = \"onadd()\" class=\"btn btn-success\" style=\"margin-right: 5px;\" >Add</button>  <button (click)=\"back()\" class=\"btn btn-danger\" >Cancel</button>\n\n       \n       \n</div>   -->\n\n\n\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/add_dr/add_dr.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/add_dr/add_dr.component.html ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n\n<br><br><br>\n<h1>Add Doctor</h1>\n\n\n<div class=\"col-md-3\"></div>\n\n\n<div class=\"row\">\n\n\n  <div class=\"col-md-3\">\n    <div class=\"form-group\">\n      <label for=\"\">FirstName</label>\n      <input [(ngModel)]=\"firstname\" type=\"text\" class=\"form-control\">\n    </div>\n  </div>\n\n\n  <div class=\"col-md-3\">\n    <div class=\"form-group\">\n      <label for=\"\">Lastname</label>\n      <input [(ngModel)]=\"lastname\" type=\"text\" class=\"form-control\">        \n  </div>\n</div>\n\n</div>\n\n<div class=\"col-md-3\"></div>\n\n<div class=\"row\">\n\n  <div class=\"col-md-3\">\n    <div class=\"form-group\">\n      <label for=\"\">Phone no</label>\n      <input [(ngModel)]=\"phoneNo\" type=\"text\" class=\"form-control\">\n    </div>\n  </div>\n\n\n  <div class=\"col-md-3\">\n    <div class=\"form-group\">\n      <label for=\"\">Degree</label>\n      <input [(ngModel)]=\"degree\" type=\"text\" class=\"form-control\">\n\n    </div>\n  </div>\n\n</div>\n\n<div class=\"col-md-3\"></div>\n\n<div class=\"row\">\n  <div class=\"col-md-3\">\n    <button (click)=\"onadd()\" class=\"btn btn-success\">Add</button>\n    <a style=\"margin-left: 10px;\" routerLink=\"/login/dashboard/drs\" class=\"btn btn-danger\">Cancel</a>\n  </div>\n</div>\n\n\n\n\n\n\n\n\n<!-- \n\n\n<h1>Add Doctor</h1>\n\n<form >\n\n       FirstName\n       <input [(ngModel)]=\"firstname\" type=\"text\" name=\"firstname\"> <br> <br>\n       LastName\n       <input [(ngModel)]=\"lastname\" type=\"text\" name=\"lastname\"> <br> <br>\n       Phone No\n       <input [(ngModel)]=\"phoneNo\" type=\"text\" name=\"phoneNo\"> <br> <br>\n       Degree\n       <input [(ngModel)]=\"degree\" type=\"text\" name=\"degree\"> <br> <br>\n\n       \n\n\n       <button (click) = \"onadd()\">Add</button>  <button (click)=\"back()\">Cancel</button>\n\n       \n       \n</form>  \n -->\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/add_product/add_product.component.html":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/add_product/add_product.component.html ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n\n\n<br><br><br>\n<h1>Add Product</h1>\n\n\n<div class=\"col-md-3\"></div>\n\n\n<div class=\"row\">\n\n\n  <div class=\"col-md-3\">\n    <div class=\"form-group\">\n      <label for=\"\">Name</label>\n      <input [(ngModel)]=\"name\" type=\"text\" class=\"form-control\">\n    </div>\n  </div>\n\n\n  <div class=\"col-md-3\">\n    <div class=\"form-group\">\n      <label for=\"\">Price</label>\n      <input [(ngModel)]=\"price\" type=\"text\" class=\"form-control\">        \n  </div>\n</div>\n\n</div>\n\n<div class=\"col-md-3\"></div>\n\n<div class=\"row\">\n\n  <div class=\"col-md-3\">\n    <div class=\"form-group\">\n      <label for=\"\">Discount</label>\n      <input [(ngModel)]=\"discount\" type=\"text\" class=\"form-control\">\n    </div>\n  </div>\n\n\n  <div class=\"col-md-3\">\n    <div class=\"form-group\">\n      <label for=\"\">Price with Discount</label>\n      <input [(ngModel)]=\"priceWithDiscount\" type=\"text\" class=\"form-control\">\n\n    </div>\n  </div>\n\n</div>\n\n<div class=\"col-md-3\"></div>\n\n<div class=\"row\">\n\n  <div class=\"col-md-3\">\n    <div class=\"form-group\">\n      <label for=\"\">Does in MG</label>\n      <input [(ngModel)]=\"doseInMG\" type=\"text\" class=\"form-control\">\n    </div>\n  </div>\n\n\n  <div class=\"col-md-3\">\n    <div class=\"form-group\">\n      <label for=\"\">MGF Date</label>\n      <input [(ngModel)]=\"mgfdate\" type=\"date\" class=\"form-control\">\n    </div>\n  </div>\n\n</div>\n\n<div class=\"col-md-3\"></div>\n\n<div class=\"row\">\n\n  <div class=\"col-md-3\">\n    <div class=\"form-group\">\n      <label for=\"\">Expire Date</label>\n      <input [(ngModel)]=\"expiredate\" type=\"date\" class=\"form-control\">\n    </div>\n  </div>\n\n\n  \n  <div class=\"col-md-3\">\n      <div class=\"form-group\">\n        <label for=\"\">Add Image</label>\n        <input (change)=\"onSelectImage($event)\" type=\"file\" class=\"form-control\">\n      </div>\n    </div>\n\n</div>\n\n\n\n<div class=\"col-md-3\"></div>\n<div class=\"row\">\n  <div class=\"col-md-3\">\n\n    <div class=\"form-group\">\n      <label for=\"\">Category</label>\n      <select [(ngModel)]=\"categoryid\" class=\"form-control\">\n        <option *ngFor=\"let c of cat\" [value]=\"c.id\">{{c.title}}</option>\n\n      </select>\n    </div>\n  </div>\n</div>\n\n\n\n\n<div class=\"col-md-3\"></div>\n<div class=\"row\">\n \n    <div class=\"col-md-3\">\n        <div class=\"form-group\">\n          <label for=\"\">Description</label>\n          <textarea [(ngModel)]=\"description\" class=\"form-control\" rows=\"4\"></textarea>\n        </div>\n      </div>\n  \n</div>\n\n\n<div class=\"col-md-3\"></div>\n\n<div class=\"row\">\n  <div class=\"col-md-3\">\n    <button (click)=\"addProduct()\" class=\"btn btn-success\">Add</button>\n    <a style=\"margin-left: 10px;\" routerLink=\"/login/dashboard/product\" class=\"btn btn-danger\">Cancel</a>\n  </div>\n</div>\n\n<!-- \n\n\n<h1>Add Product</h1>\n\n<form >\n\n       ProductName\n       <input [(ngModel)]=\"name\" type=\"text\" name=\"name\"> <br> <br>\n       Price\n       <input [(ngModel)]=\"price\" type=\"text\" name=\"price\"> <br> <br>\n       Discount\n       <input [(ngModel)]=\"discount\" type=\"text\" name=\"discount\"> <br> <br>\n       PriceWithDiscount\n       <input [(ngModel)]=\"priceWithDiscount\" type=\"text\" name=\"priceWithDiscount\"> <br> <br>\n       DoseInMg\n       <input [(ngModel)]=\"doseInMG\" type=\"text\" name=\"doseInMG\"> <br> <br>\n       MfgDate\n       <input [(ngModel)]=\"mgfdate\" type=\"text\" name=\"mgfdate\"> <br> <br>\n       ExpireDate\n       <input [(ngModel)]=\"expiredate\" type=\"text\" name=\"expiredate\"> <br> <br>\n       Description\n       <input [(ngModel)]=\"description\" type=\"text\" name=\"description\"> <br> <br>\n\n       \n\n\n       <button (click)=\"addProduct()\">Add</button>  <button (click)=\"back()\">Cancel</button>\n\n       \n       \n</form>  \n -->\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/add_user/add_user.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/add_user/add_user.component.html ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<br><br><br>\n\n<h1>Add User</h1>\n\n<div class=\"col-md-3\"></div>\n\n\n\n<div class=\"row\">\n\n\n              <div class=\"col-md-3\">\n                <div class=\"form-group\">\n                  <label for=\"\">Username</label>\n                  <input [(ngModel)]=\"username\" type=\"text\" class=\"form-control\">\n                </div>\n              </div>\n            \n            \n              <div class=\"col-md-3\">\n                <div class=\"form-group\">\n                  <label for=\"\">FirstName</label>\n                  <input [(ngModel)]=\"firstname\" type=\"text\" class=\"form-control\">        \n              </div>\n            </div>\n            \n</div>\n\n<div class=\"col-md-3\"></div>\n\n\n<div class=\"row\">\n\n              <div class=\"col-md-3\">\n                <div class=\"form-group\">\n                  <label for=\"\">LastName</label>\n                  <input [(ngModel)]=\"lastname\" type=\"text\" class=\"form-control\">\n                </div>\n              </div>\n            \n            \n              <div class=\"col-md-3\">\n                <div class=\"form-group\">\n                  <label for=\"\">JoinDate</label>\n                  <input [(ngModel)]=\"joindate\" type=\"date\" class=\"form-control\">\n            \n                </div>\n              </div>\n            \n            \n            </div>\n            \n<div class=\"col-md-3\"></div>\n            \n\n\n<div class=\"row\">\n\n              <div class=\"col-md-3\">\n                <div class=\"form-group\">\n                  <label for=\"\">PhoneNo</label>\n                  <input [(ngModel)]=\"phoneno\" type=\"text\" class=\"form-control\">\n                </div>\n              </div>\n            \n            \n              <div class=\"col-md-3\">\n                <div class=\"form-group\">\n                  <label for=\"\">Email</label>\n                  <input [(ngModel)]=\"email\" type=\"text\" class=\"form-control\">\n                </div>\n              </div>\n            \n            </div>\n            \n            <div class=\"col-md-3\"></div>\n            \n            <div class=\"row\">\n            \n              <div class=\"col-md-3\">\n                <div class=\"form-group\">\n                  <label for=\"\">Password</label>\n                  <input [(ngModel)]=\"password\" type=\"text\" class=\"form-control\">\n                </div>\n              </div>\n            \n            </div>\n            \n            <div class=\"col-md-3\"></div>\n            \n            <div class=\"row\">\n              <div class=\"col-md-3\">\n                <button (click)=\"onadd()\" class=\"btn btn-success\">Add</button>\n                <a style=\"margin-left: 10px;\" routerLink=\"/login/dashboard/user\" class=\"btn btn-danger\">Cancel</a>\n              </div>\n            </div>\n\n<!--             \n<div class=\"form-group\">\n       Username\n       <input [(ngModel)]=\"username\" type=\"text\" name=\"username\"> <br> <br>\n       FirstName\n       <input [(ngModel)]=\"firstname\" type=\"text\" name=\"firstname\"> <br> <br>\n       LastName\n       <input [(ngModel)]=\"lastname\" type=\"text\" name=\"lastname\"> <br> <br>\n       Joindate\n       <input [(ngModel)]=\"joindate\" type=\"text\" name=\"joindate\"> <br> <br>\n       Phone No\n       <input [(ngModel)]=\"phoneno\" type=\"text\" name=\"phoneno\"> <br> <br>\n       Email\n       <input [(ngModel)]=\"email\" type=\"email\" name=\"email\"> <br> <br>\n       Password\n       <input [(ngModel)]=\"password\" type=\"password\" name=\"password\">  <br>\n\n\n       <button (click) = \"onadd()\" class=\"btn btn-success\" style=\"margin-right: 5px;\" >Add</button>  <button (click)=\"back()\" class=\"btn btn-danger\" >Cancel</button>\n\n       \n       \n</div>   -->\n\n\n\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/allopathic/allopathic.component.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/allopathic/allopathic.component.html ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<br><br>\n<br>\n<h2 class=\"boxed\">Allopathic Products:-</h2> \n<div class=\"col-md-4\" *ngFor=\"let product of allopathic;let index = index\" >\n \n<div class=\"boxed\">    \n\n<div class=\"col-md-2\"></div> \n<div class=\"row\">\n    <div class=\"col-md-3\">\n      \n        <img style=\"border:1px solid green\" src=\"http://localhost:4000/{{product.image}}\" width=\"250px;\" height=\"300px;\"/>\n    </div>\n</div>\n    \n\n<div class=\"col-md-2\"></div>\n<div class=\"row\">\n    <div class=\"col-md-9\">\n      \n     <b>  {{product.name}}  </b> \n    </div>\n</div>\n  \n\n<div class=\"col-md-2\"></div>\n<div class=\"row\">\n    <div class=\"col-md-8\">\n      \n     <td><font color=\"red\">MRP ₹<del>{{product.price}}</del></font> <font color=\"#3EA055\"> {{product.discount}}% off </font></td>    \n    </div>\n</div>\n\n<div class=\"col-md-2\"></div>\n<div class=\"row\">\n    <div class=\"col-md-3\">\n      \n      <b>  <td>₹{{product.priceWithDiscount}}</td> </b>\n    </div>\n</div>\n\n<div class=\"col-md-2\"></div>\n<div class=\"row\">\n    <div class=\"col-md-3\">\n      \n        <td>\n            <button type=\"button\"   class=\"btn btn-danger\" (click)=\"OnSelectProduct(product.id)\"><b>Show Details</b></button><br><br>\n        </td>\n    </div>\n</div>\n\n</div>\n</div> \n\n\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<div class=\"myclass\">\n\n <nav id=\"myid\" class=\"navbar navbar-dark bg-primary navbar-fixed-top\" style=\"background-color: #239bf1;height: 60px;\">\n\n \n  <form id=\"page\" class=\"form-inline\">\n\n      <ul class=\"nav navbar-nav\">\n          <li ><a class=\"hello\" routerLink=\"MRlogin/home\" href=\"\">Home</a></li>\n          <li class=\"dropdown\"><a class=\"dropdown-toggle\" data-toggle=\"dropdown\" href=\"#\">Category <span class=\"caret\"></span></a>\n            <ul class=\"dropdown-menu\">\n              <li><a routerLink=\"/MRlogin/allopathic\" href=\"#\">allopathic</a></li>\n              <li><a routerLink=\"/MRlogin/homoeopathy\" href=\"#\">homoeopathy</a></li>\n              <li><a routerLink=\"/MRlogin/ayurvedic\" href=\"#\">ayurvedic</a></li>\n            </ul>\n          </li>\n\n          \n          <li (click)=\"onLogin()\" *ngIf=\"!isLoggedIn\"><a routerLink=\"/MRlogin\" class=\"hello\" href=\"#\">Login & Signup</a></li>\n          \n          <li *ngIf=\"isLoggedIn\" class=\"dropdown\"><a class=\"dropdown-toggle\" data-toggle=\"dropdown\" href=\"#\">{{username}}<span class=\"caret\"></span></a>\n            <ul class=\"dropdown-menu\">\n              <li><a  href=\"#1\">Profile</a></li>\n              <li><a routerLink=\"/MRlogin/orders\" href=\"#2\">Orders</a></li>\n              <li><a (click)=\"onLogout()\" >Logout</a></li>\n            </ul>\n          </li>\n\n          <li class=\"dropdown\"><a class=\"dropdown-toggle\" data-toggle=\"dropdown\" href=\"#\">More <span class=\"caret\"></span></a>\n            <ul class=\"dropdown-menu\">\n              <li><a  >Contact Us</a></li>\n              <li><a  >Give Feedback</a></li>\n              <li><a  >Download App</a></li>\n            </ul>\n          </li>\n          <li ><a routerLink=\"/MRlogin/cart\" class=\"hello\" > Cart</a></li>\n          <li ><a routerLink=\"/login\" class=\"hello\" href=\"#\">Admin</a></li>\n        </ul>\n     \n    \n  <div> <a style=\"margin-left: 180px;margin-top:3px;font-size: medium\" class=\"navbar-brand\">@MRtracker</a> </div> \n\n\n  <input [(ngModel)]=\"search\" name=\"search\" size=\"40\" style=\"margin-top: 11px\" class=\"form-control mr-sm-2\" type=\"search\" placeholder=\"Search for product\" aria-label=\"search\" >\n   <button (click)=\"onSearch()\" style=\"margin-top: 11px\" class=\"btn btn-info\" type=\"submit\">  <a href=\"MRlogin/search\"> Search </a> </button>\n  </form>                                                            \n\n  \n</nav>   \n \n\n<router-outlet></router-outlet>  \n\n\n\n\n      \n<div class=\"row\">\n              <div class=\"col-md-12\">\n               \n<link href=\"//maxcdn.bootstrapcdn.com/font-awesome/4.1.0/css/font-awesome.min.css\" rel=\"stylesheet\">\n<link href=\"https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/css/bootstrap.min.css\" rel=\"stylesheet\" integrity=\"sha256-MfvZlkHCEqatNoGiOXveE8FIwMzZg4W85qfrfIFBfYc= sha512-dTfge/zgoMYpP7QbHy4gWMEGsbsdZeCXz7irItjcC3sPUFtf0kuFbDz/ixG7ArTxmDjLXDmezHubeNikyKGVyQ==\" crossorigin=\"anonymous\">\n\n\n<div class=\"container\">\n    <hr>\n        <div class=\"text-center center-block\">\n            <p class=\"txt-railway\">- Contact us -</p>\n            <br />\n                <a href=\"https://www.facebook.com/prashantverma.prashantverma.50\"><i id=\"social-fb\" class=\"fa fa-facebook-square fa-3x social\"></i></a>\n\t            <a href=\"https://twitter.com/Prashantvermas1\"><i id=\"social-tw\" class=\"fa fa-twitter-square fa-3x social\"></i></a>\n\t            <!-- <a href=\"https://plus.google.com/+Bootsnipp-page\"><i id=\"social-gp\" class=\"fa fa-google-plus-square fa-3x social\"></i></a> -->\n\t            <a href=\"mailto:prashantverma817381 @gmail.com\"><i id=\"social-em\" class=\"fa fa-envelope-square fa-3x social\"></i></a>\n</div>\n    <hr>\n</div>\n\n<br /> \n\n</div>\n \n              \n              </div>\n\n</div>\n\n\n\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/ayurvedic/ayurvedic.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ayurvedic/ayurvedic.component.html ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<br><br>\n<br>\n\n<h2 class=\"boxed\">Ayurvedic Products:-</h2> \n<div class=\"col-md-4\" *ngFor=\"let product of Ayurvedic;let index = index\" >\n \n<div class=\"boxed\">    \n\n<div class=\"col-md-2\"></div> \n<div class=\"row\">\n    <div class=\"col-md-3\">\n      \n        <img style=\"border:1px solid green\" src=\"http://localhost:4000/{{product.image}}\" width=\"250px;\" height=\"300px;\"/>\n    </div>\n</div>\n    \n\n<div class=\"col-md-2\"></div>\n<div class=\"row\">\n    <div class=\"col-md-9\">\n      \n     <b>  {{product.name}}  </b> \n    </div>\n</div>\n  \n\n<div class=\"col-md-2\"></div>\n<div class=\"row\">\n    <div class=\"col-md-8\">\n      \n     <td><font color=\"red\">MRP ₹<del>{{product.price}}</del></font> <font color=\"#3EA055\"> {{product.discount}}% off </font></td>    \n    </div>\n</div>\n\n<div class=\"col-md-2\"></div>\n<div class=\"row\">\n    <div class=\"col-md-3\">\n      \n      <b>  <td>₹{{product.priceWithDiscount}}</td> </b>\n    </div>\n</div>\n\n<div class=\"col-md-2\"></div>\n<div class=\"row\">\n    <div class=\"col-md-3\">\n      \n        <td>\n            <button type=\"button\"   class=\"btn btn-danger\" (click)=\"OnSelectProduct(product.id)\"><b>Show Details</b></button><br><br>\n        </td>\n    </div>\n</div>\n\n</div>\n</div> \n\n\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard/dashboard.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard/dashboard.component.html ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<br><br><br>\n<h1>Admin Dashboard</h1>\n\n<ul class=\"list-group-item\">\n       <a routerLink = \"/login/dashboard/user\" class=\"list-group-item\">List Of MRS</a>          \n       <a routerLink=\"/login/dashboard/drs\" class=\"list-group-item\">List Of Doctors </a>        \n       <a routerLink = \"/login/dashboard/product\" class=\"list-group-item\">Products</a>  \n       <a routerLink = \"/MRlogin/dashboard/orders\" class=\"list-group-item\">Orders</a> \n      <a routerLink=\"/login/dashboard/MRReport\" class=\"list-group-item\">MR's Reports</a>          \n      <a routerLink=\"/login/dashboard/Report\" class=\"list-group-item\">Company Reports</a>      \n</ul> \n\n<a> <button (click)=\"onlogout()\" class=\"btn btn-warning\">Logout</button> </a> \n\n\n\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/doctor_list/doctor_list.component.html":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/doctor_list/doctor_list.component.html ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<br><br><br>\n\n<button (click)= \"dashboard()\" class=\"btn\" style=\"margin-top: 10px;\">Dashboard</button>\n\n<h1>Doctors List</h1>\n\n\n<button (click)= \"onAddDR()\" class=\"btn btn-primary pull left\">Add DRs</button> <br><br>\n\n<table class=\"table table-striped table-bordered\">\n\n<thead>\n<tr>\n    <th>Id</th>\n    <th>Firstname</th>\n    <th>Lastname</th>\n    <th>PhoneNo</th>\n    <th>Action</th>\n</tr>\n</thead>\n\n<tbody>\n    <tr *ngFor=\"let dr of drs;let index = index\">\n        <td>{{index+1}}</td>\n        <td>{{dr.firstname}}</td>\n        <td>{{dr.lastname}}</td>\n        <td>{{dr.phoneNo}}</td>\n        <td ><button (click)=\"ondelete(dr.id)\" class=\"btn btn-danger\"> <i class=\"glyphicon glyphicon-trash\"></i></button>\n        <button class=\"btn btn-warning\" style=\"margin-left: 10px;\"> <i class=\"glyphicon glyphicon-pencil\"></i></button></td>\n    </tr>\n\n\n</tbody>\n\n\n</table>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/edit_product/edit_product.component.html":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/edit_product/edit_product.component.html ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<h1>Edit Product's Details</h1>\n\n\n<div class=\"col-md-3\"></div>\n\n\n<div class=\"row\">\n\n\n  <div class=\"col-md-3\">\n    <div class=\"form-group\">\n      <label for=\"\">Name</label>\n      <input [(ngModel)]=\"name\" type=\"text\" class=\"form-control\">\n    </div>\n  </div>\n\n\n  <div class=\"col-md-3\">\n    <div class=\"form-group\">\n      <label for=\"\">Price</label>\n      <input [(ngModel)]=\"price\" type=\"text\" class=\"form-control\">        \n  </div>\n</div>\n\n</div>\n\n<div class=\"col-md-3\"></div>\n\n<div class=\"row\">\n\n  <div class=\"col-md-3\">\n    <div class=\"form-group\">\n      <label for=\"\">Discount</label>\n      <input [(ngModel)]=\"discount\" type=\"text\" class=\"form-control\">\n    </div>\n  </div>\n\n\n  <div class=\"col-md-3\">\n    <div class=\"form-group\">\n      <label for=\"\">Price with Discount</label>\n      <input [(ngModel)]=\"priceWithDiscount\" type=\"text\" class=\"form-control\">\n\n    </div>\n  </div>\n\n\n</div>\n\n<div class=\"col-md-3\"></div>\n\n<div class=\"row\">\n\n  <div class=\"col-md-3\">\n    <div class=\"form-group\">\n      <label for=\"\">Does in MG</label>\n      <input [(ngModel)]=\"doseInMG\" type=\"text\" class=\"form-control\">\n    </div>\n  </div>\n\n\n  <div class=\"col-md-3\">\n    <div class=\"form-group\">\n      <label for=\"\">MGF Date</label>\n      <input [(ngModel)]=\"mgfdate\" type=\"date\" class=\"form-control\">\n    </div>\n  </div>\n\n</div>\n\n<div class=\"col-md-3\"></div>\n\n<div class=\"row\">\n\n  <div class=\"col-md-3\">\n    <div class=\"form-group\">\n      <label for=\"\">Expire Date</label>\n      <input [(ngModel)]=\"expiredate\" type=\"date\" class=\"form-control\">\n    </div>\n  </div>\n\n\n  <div class=\"col-md-3\">\n\n      <div class=\"form-group\">\n        <label for=\"\">Category</label>\n        <select [(ngModel)]=\"categoryid\" class=\"form-control\">\n          <option *ngFor=\"let c of cat\" [value]=\"c.id\">{{c.title}}</option>\n  \n        </select>\n      </div>\n    </div> \n\n</div>\n\n\n\n\n\n<div class=\"col-md-3\"></div>\n<div class=\"row\">\n\n    <div class=\"col-md-3\">\n        <div class=\"form-group\">\n          <label for=\"\">Description</label>\n          <textarea [(ngModel)]=\"description\" rows=\"4\" class=\"form-control\"></textarea>\n        </div>\n      </div>\n\n</div>\n\n\n\n<div class=\"col-md-3\"></div>\n\n<div class=\"row\">\n  <div class=\"col-md-3\">\n    <button (click)=\"onUpdate()\" class=\"btn btn-success\">Update</button>\n    <a style=\"margin-left: 10px;\" routerLink=\"/login/dashboard/product\" class=\"btn btn-danger\">Cancel</a>\n  </div>\n</div>\n\n\n\n\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/edit_user/edit_user.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/edit_user/edit_user.component.html ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<br><br>\n<h1>Edit MR's Details</h1>\n\n\n<div class=\"col-md-3\"></div>\n\n\n<div class=\"row\">\n\n\n  <div class=\"col-md-3\">\n    <div class=\"form-group\">\n      <label for=\"\">Username</label>\n      <input [(ngModel)]=\"username\" type=\"text\" class=\"form-control\">\n    </div>\n  </div>\n\n\n  <div class=\"col-md-3\">\n    <div class=\"form-group\">\n      <label for=\"\">FirstName</label>\n      <input [(ngModel)]=\"firstname\" type=\"text\" class=\"form-control\">        \n  </div>\n</div>\n\n</div>\n\n<div class=\"col-md-3\"></div>\n\n<div class=\"row\">\n\n  <div class=\"col-md-3\">\n    <div class=\"form-group\">\n      <label for=\"\">LastName</label>\n      <input [(ngModel)]=\"lastname\" type=\"text\" class=\"form-control\">\n    </div>\n  </div>\n\n\n  <div class=\"col-md-3\">\n    <div class=\"form-group\">\n      <label for=\"\">JoinDate</label>\n      <input [(ngModel)]=\"joindate\" type=\"date\" class=\"form-control\">\n\n    </div>\n  </div>\n\n\n</div>\n\n<div class=\"col-md-3\"></div>\n\n<div class=\"row\">\n\n  <div class=\"col-md-3\">\n    <div class=\"form-group\">\n      <label for=\"\">PhoneNo</label>\n      <input [(ngModel)]=\"phoneno\" type=\"text\" class=\"form-control\">\n    </div>\n  </div>\n\n\n  <div class=\"col-md-3\">\n    <div class=\"form-group\">\n      <label for=\"\">Email</label>\n      <input [(ngModel)]=\"email\" type=\"text\" class=\"form-control\">\n    </div>\n  </div>\n\n</div>\n\n<div class=\"col-md-3\"></div>\n\n<div class=\"row\">\n\n  <div class=\"col-md-3\">\n    <div class=\"form-group\">\n      <label for=\"\">Password</label>\n      <input [(ngModel)]=\"password\" type=\"text\" class=\"form-control\">\n    </div>\n  </div>\n\n\n  <div class=\"col-md-3\">\n      <div class=\"form-group\">\n          <label for=\"\">Status</label>\n          <select [(ngModel)]=\"exist\" class=\"form-control\">\n            <option  [value]=1>User</option>\n            <option  [value]=2>MR</option>\n            <option  [value]=0>Blocked</option>\n          </select>\n      </div>\n    </div>\n\n</div>\n\n<div class=\"col-md-3\"></div>\n\n<div class=\"row\">\n  <div class=\"col-md-3\">\n    <button (click)=\"onUpdate()\" class=\"btn btn-success\">Update</button>\n    <a style=\"margin-left: 10px;\" routerLink=\"/login/dashboard/user\" class=\"btn btn-danger\">Cancel</a>\n  </div>\n</div>\n\n\n\n\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/homoeopathy/homoeopathy.component.html":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/homoeopathy/homoeopathy.component.html ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<br><br>\n<br>\n\n<h2 class=\"boxed\">Homoeopathy Products:-</h2> \n<div class=\"col-md-4\" *ngFor=\"let product of Homoeopathy;let index = index\" >\n \n<div class=\"boxed\">    \n\n    \n<div class=\"col-md-2\"></div> \n<div class=\"row\">\n    <div class=\"col-md-3\">\n        <img style=\"border:1px solid green\" src=\"http://localhost:4000/{{product.image}}\" width=\"250px;\" height=\"300px;\"/>\n    </div>\n</div>\n \n\n\n<div class=\"col-md-2\"></div>\n<div class=\"row\">\n    <div class=\"col-md-9\">\n      \n     <b>  {{product.name}}  </b> \n    </div>\n</div>\n  \n\n<div class=\"col-md-2\"></div>\n<div class=\"row\">\n    <div class=\"col-md-8\">\n      \n     <td><font color=\"red\">MRP ₹<del>{{product.price}}</del></font> <font color=\"#3EA055\"> {{product.discount}}% off </font></td>    \n    </div>\n</div>\n\n<div class=\"col-md-2\"></div>\n<div class=\"row\">\n    <div class=\"col-md-3\">\n      \n      <b>  <td>₹{{product.priceWithDiscount}}</td> </b>\n    </div>\n</div>\n\n<div class=\"col-md-2\"></div>\n<div class=\"row\">\n    <div class=\"col-md-3\">\n      \n        <td>\n            <button type=\"button\"   class=\"btn btn-danger\" (click)=\"OnSelectProduct(product.id)\"><b>Show Details</b></button><br><br>\n        </td>\n    </div>\n</div>\n\n</div>\n\n\n</div> \n\n\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<br><br><br>\n<button (click)= \"dashboard()\" class=\"btn btn-default\" style=\"margin-top: 10px;\">Dashboard</button>\n\n<h1>List of MRs</h1>\n<button (click)= \"onAdduser()\" class=\"btn btn-primary\">Add MRs</button> <br><br>\n\n<table class=\"table table-striped table-bordered\">\n\n<thead>\n<tr>\n    <th>Id</th>\n    <th>Username</th>\n    <th>Firstname</th>\n    <th>Lastname</th>\n    <th>Joindate</th>\n    <th>PhoneNo</th>\n    <th>Email</th>\n    <th>Password</th>\n    <th>ExistStatus</th>\n    <th>Action</th>\n</tr>\n</thead>\n\n<tbody>\n    <tr *ngFor=\"let user of users;let index = index\">\n        <td>{{index+1}}</td>\n        <td>{{user.username}}</td>\n        <td>{{user.firstname}}</td>\n        <td>{{user.lastname}}</td>\n        <td>{{user.joindate}}</td>\n        <td>{{user.phoneno}}</td>\n        <td>{{user.email}}</td>\n        <td>{{user.password}}</td>\n        <td>{{user.exist}}</td>\n        <td ><button (click)=\"ondelete(user.id)\" class=\"btn btn-danger\">   <i class=\"glyphicon glyphicon-trash\"></i></button>\n        <button (click)=\"onUserSelect(user.id)\" class = \"btn btn-warning\" style=\"margin-left: 10px;\"><i class=\"glyphicon glyphicon-pencil\"></i></button>\n        <button (click)=\"onOrderList(user.id)\" class = \"btn btn-info\" style=\"margin-top: 10px;margin-left: 10px;\"> <a href=\"/MRlogin/dashboard/MRorders/{{user.id}}\"> ShowOrders </a> </button>\n        <button  class = \"btn btn-info\" style=\"margin-top: 10px;\">Track Location </button>\n    </td>\n    </tr>\n\n\n</tbody>\n\n\n</table>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/product_details/product_details.component.html":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/product_details/product_details.component.html ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<br><br>\n\n<div class=\"color\">\n<h3 class=\"boxed\">Product Details:-</h3>\n\n\n<div class=\"row\" *ngIf=\"product != undefined\">\n\n        \n<div class=\"boxed\">    \n\n        <div class=\"col-md-1\"></div> \n        <div class=\"row\">\n            <div class=\"col-md-3\">\n              \n                <img style=\"border:1px solid green\" src=\"http://localhost:4000/{{product.image}}\" width=\"250px;\" height=\"300px;\"/>\n            </div>\n\n        \n            <div class=\"row\">\n\n                <div class=\"col-md-3\"> \n                 <b>  {{product.name}}  </b> <br>\n                 <td><font color=\"red\">MRP ₹<del>{{product.price}}</del></font> <font color=\"#3EA055\"> {{product.discount}}% off </font></td>\n                 <br><br>\n\n                 <span>   <button type=\"button\" class=\"btn btn-success\" (click)=\"OnDecrement()\"><b> - </b></button>  </span>\n                 <b class=\"stepper\"> {{count}} </b>\n                 <span>  <button type=\"button\" class=\"btn btn-success\" (click)=\"OnIncrement()\"><b>+</b></button> </span>\n                 <br>\n                 <h4 style=\"margin-top: 13px;margin-left: 25px\" class=\"stepper\">₹{{rate}}</h4>\n\n                </div>\n\n            </div>\n\n           \n\n        </div>\n            \n        \n        <div class=\"col-md-1\"></div>\n        <div class=\"row\">\n            <div class=\"col-md-3\"> \n             <b>  {{product.name}}  </b> \n            </div>\n\n        </div>\n          \n        \n        <div class=\"col-md-1\"></div>\n        <div class=\"row\">\n            <div class=\"col-md-8\">\n              \n             <td><font color=\"red\">MRP ₹<del>{{product.price}}</del></font> <font color=\"#3EA055\"> {{product.discount}}% off </font></td>    \n            </div>\n        </div>\n        \n        <div class=\"col-md-1\"></div>\n        <div class=\"row\">\n            <div class=\"col-md-3\">  \n              <b>  <td>₹{{product.priceWithDiscount}}</td> </b>\n            </div>\n        </div>\n    \n        <div class=\"col-md-1\"></div>\n        <div class=\"row\">\n            <div class=\"col-md-3\">\n                <button style=\"margin-top: 7px\" type=\"button\" class=\"btn btn-success\" (click)=\"onAddToCart()\"><b>Add to Cart</b></button>     <button style=\"margin-top: 7px;margin-left: 7px\" type=\"button\" class=\"btn btn-danger\" (click)=\"OnBack(product.id)\"><b>Go Back</b></button>   <br><br>\n            </div>\n        </div>\n        \n        <div class=\"col-md-1\"></div>\n        <div class=\"row\">\n            <div class=\"col-md-5\">\n             <h3>Information about {{product.name}}:-</h3>\n             <td>{{product.description}}</td> \n            </div>\n        </div>\n\n        </div>\n    \n</div>\n\n</div>\n      ");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/product_list/product_list.component.html":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/product_list/product_list.component.html ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<br><br><br>\n\n<button (click)= \"dashboard()\" class=\"btn\" style=\"margin-top: 10px;\">Dashboard</button>\n\n\n<h1>Product List</h1>\n\n\n<button (click)= \"onAddProduct()\" class=\"btn btn-primary\">Add Product</button> <br><br>\n\n<table class=\"table table-striped table-bordered\">\n\n<thead>\n<tr>\n    <th>Id</th>\n    <th>Image</th>\n    <th>Name</th>\n    <th>price</th>\n    <th>discount</th>\n    <th>priceWithDiscount</th>\n    <th>DoesInMG</th>\n    <th>MgfDate</th>\n    <th>Expiredate</th>\n    <th>Description</th>\n    <th>Action</th>\n</tr>\n</thead>\n\n<tbody>\n    <tr *ngFor=\"let pr of products; let index=index\">\n        <td>{{index+1}}</td>\n        <td>\n            <img class=\"thumbnail\" src=\"http://localhost:4000/{{pr.image}}\" alt=\"\">\n        </td>\n        <td>{{pr.name}}</td>\n        <td>{{pr.price}}</td>\n        <td>{{pr.discount}}</td>\n        <td>{{pr.priceWithDiscount}}</td>\n        <td>{{pr.doseInMG}}</td>\n        <td>{{pr.mgfdate}}</td>\n        <td>{{pr.expiredate}}</td>\n        <td>{{pr.description}}</td>\n        <td ><button (click)=\"ondelete(pr.id)\" class=\"btn btn-danger\"> <i class=\"glyphicon glyphicon-trash\"></i></button>\n        <button (click)=\"onSelect(pr.id)\" class=\"btn btn-warning\" style=\"margin-left: 10px;\"> <i class=\"glyphicon glyphicon-pencil\"></i></button></td>\n    </tr>\n\n\n</tbody>\n\n\n</table>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/user_home/user_home.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/user_home/user_home.component.html ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<br><br>\n\n<div id=\"myCarousel\" class=\"carousel slide\" data-ride=\"carousel\">\n        <!-- Indicators -->\n        <ol class=\"carousel-indicators\">\n          <li data-target=\"#myCarousel\" data-slide-to=\"0\" class=\"active\"></li>\n          <li data-target=\"#myCarousel\" data-slide-to=\"1\"></li>\n          <li data-target=\"#myCarousel\" data-slide-to=\"2\"></li>\n        </ol>\n      \n        <!-- Wrapper for slides -->\n        <div class=\"carousel-inner\">\n          <div class=\"item active\">\n            <img src=\"/assets/images/15.jpg\"  width=\"100%\" alt=\"lab1\">\n          </div>\n      \n          <div class=\"item\">\n            <img src=\"/assets/images/16.jpg\"  width=\"100%\"  alt=\"lab2\">\n          </div>\n      \n         \n        <div class=\"item\">\n             <img src=\"/assets/images/17.jpeg\"   width=\"100%\"  alt=\"lab3\">\n         </div>\n\n        <div class=\"item\">\n               <img src=\"/assets/images/21.jpg\"   width=\"100%\"  alt=\"lab4\">\n        </div>\n\n        </div>\n       \n      \n        <!-- Left and right controls -->\n        <a class=\"left carousel-control\" href=\"#myCarousel\" data-slide=\"prev\">\n          <span class=\"glyphicon glyphicon-chevron-left\"></span>\n          <span class=\"sr-only\">Previous</span>\n        </a>\n        <a class=\"right carousel-control\" href=\"#myCarousel\" data-slide=\"next\">\n          <span class=\"glyphicon glyphicon-chevron-right\"></span>\n          <span class=\"sr-only\">Next</span>\n        </a>\n      </div>\n\n      <br>\n\n\n<h2 class=\"boxed\">All Products:-</h2> \n<div class=\"col-md-4\" *ngFor=\"let product of Allproducts;let index = index\" >\n \n<div class=\"boxed\">    \n\n<div class=\"col-md-2\"></div> \n<div class=\"row\">\n    <div class=\"col-md-3\">\n      \n        <img style=\"border:1px solid green\" src=\"http://localhost:4000/{{product.image}}\" width=\"250px;\" height=\"300px;\"/>\n    </div>\n</div>\n    \n\n<div class=\"col-md-2\"></div>\n<div class=\"row\">\n    <div class=\"col-md-8\">\n      \n     <b>  {{product.name}}  </b> \n    </div>\n</div>\n  \n\n<div class=\"col-md-2\"></div>\n<div class=\"row\">\n    <div class=\"col-md-8\">\n      \n     <td><font color=\"red\">MRP ₹<del>{{product.price}}</del></font> <font color=\"#3EA055\"> {{product.discount}}% off </font></td>    \n    </div>\n</div>\n\n<div class=\"col-md-2\"></div>\n<div class=\"row\">\n    <div class=\"col-md-3\">\n      \n      <b>  <td>₹{{product.priceWithDiscount}}</td> </b>\n    </div>\n</div>\n\n<div class=\"col-md-2\"></div>\n<div class=\"row\">\n    <div class=\"col-md-3\">\n      \n        <td>\n            <button type=\"button\"   class=\"btn btn-danger\" (click)=\"OnSelectProduct(product.id)\"><b>Show Details</b></button><br><br>\n        </td>\n    </div>\n</div>\n\n</div>\n</div> \n\n\n");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}


/***/ }),

/***/ "./src/app/Adminlogin/Adminlogin.component.css":
/*!*****************************************************!*\
  !*** ./src/app/Adminlogin/Adminlogin.component.css ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n.row{\n    background-color: bisque;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQWRtaW5sb2dpbi9BZG1pbmxvZ2luLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBO0lBQ0ksd0JBQXdCO0FBQzVCIiwiZmlsZSI6InNyYy9hcHAvQWRtaW5sb2dpbi9BZG1pbmxvZ2luLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbi5yb3d7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmlzcXVlO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/Adminlogin/Adminlogin.component.ts":
/*!****************************************************!*\
  !*** ./src/app/Adminlogin/Adminlogin.component.ts ***!
  \****************************************************/
/*! exports provided: AdminloginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminloginComponent", function() { return AdminloginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");



let AdminloginComponent = class AdminloginComponent {
    constructor(router) {
        this.router = router;
        this.email1 = '';
        this.password1 = '';
    }
    onlogin() {
        if (this.email1 == "prashant" && this.password1 == "1234") {
            this.router.navigate(['/login/dashboard']);
        }
        else {
            alert('enter the vaild password');
        }
    }
    ngOnInit() { }
};
AdminloginComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
AdminloginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'admin-login',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./Adminlogin.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/Adminlogin/Adminlogin.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./Adminlogin.component.css */ "./src/app/Adminlogin/Adminlogin.component.css")).default]
    })
], AdminloginComponent);



/***/ }),

/***/ "./src/app/AllOrderList/AllOrderList.component.css":
/*!*********************************************************!*\
  !*** ./src/app/AllOrderList/AllOrderList.component.css ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n.thumbnail {\n    width: 40px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQWxsT3JkZXJMaXN0L0FsbE9yZGVyTGlzdC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQTtJQUNJLFdBQVc7QUFDZiIsImZpbGUiOiJzcmMvYXBwL0FsbE9yZGVyTGlzdC9BbGxPcmRlckxpc3QuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuLnRodW1ibmFpbCB7XG4gICAgd2lkdGg6IDQwcHg7XG59Il19 */");

/***/ }),

/***/ "./src/app/AllOrderList/AllOrderList.component.ts":
/*!********************************************************!*\
  !*** ./src/app/AllOrderList/AllOrderList.component.ts ***!
  \********************************************************/
/*! exports provided: AllOrderListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AllOrderListComponent", function() { return AllOrderListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _AllOrderList_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./AllOrderList.service */ "./src/app/AllOrderList/AllOrderList.service.ts");




let AllOrderListComponent = class AllOrderListComponent {
    // status:String
    constructor(router, productservice, service) {
        this.router = router;
        this.service = service;
        this.loadAllProducts();
    }
    ondelete(id) {
        console.log(id);
        if (confirm('Are you sure to delete an item')) {
            this.service
                .deleteProduct(id)
                .subscribe(response => {
                if (response['status'] == 'success') {
                    window.location.reload();
                    //this.loadAllProducts()
                }
                else {
                    console.log(response['error']);
                }
            });
        }
    }
    loadAllProducts() {
        this.date = new Date();
        this.mrid = localStorage['id'];
        this.service
            .getAllProducts()
            .subscribe(response => {
            if (response['status'] == 'success') {
                this.products = response['data'];
            }
            else {
                alert('error');
            }
        });
    }
    isexpire(product) {
        const currentdate = new Date();
        return new Date(product.deliveryDate).valueOf() < new Date(currentdate).valueOf();
    }
};
AllOrderListComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _AllOrderList_service__WEBPACK_IMPORTED_MODULE_3__["AllOrderListService"] },
    { type: _AllOrderList_service__WEBPACK_IMPORTED_MODULE_3__["AllOrderListService"] }
];
AllOrderListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'All-order-list',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./AllOrderList.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/AllOrderList/AllOrderList.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./AllOrderList.component.css */ "./src/app/AllOrderList/AllOrderList.component.css")).default]
    })
], AllOrderListComponent);



/***/ }),

/***/ "./src/app/AllOrderList/AllOrderList.service.ts":
/*!******************************************************!*\
  !*** ./src/app/AllOrderList/AllOrderList.service.ts ***!
  \******************************************************/
/*! exports provided: AllOrderListService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AllOrderListService", function() { return AllOrderListService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");



let AllOrderListService = class AllOrderListService {
    constructor(httpClient) {
        this.url = 'http://localhost:4000/MRlogin/dashboard/orders'; //express port 4000
        this.url1 = 'http://localhost:4000/MRlogin/orders';
        this.http = httpClient;
    }
    getAllProducts() {
        return this.http.get(this.url);
    }
    deleteProduct(id) {
        this.url1 = this.url1 + '/' + id;
        return this.http.delete(this.url1);
    }
};
AllOrderListService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
AllOrderListService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], AllOrderListService);



/***/ }),

/***/ "./src/app/Cart/Cart.component.css":
/*!*****************************************!*\
  !*** ./src/app/Cart/Cart.component.css ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n.color{\n    background-color:moccasin;\n}\n.boxed {\n    \n    font-family: 'Courier New', Courier, monospace;\n\n }\n.stepper{\n     font-size: 20px;\n }\n.hello{\n     text-align: center;\n }\n\n \n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQ2FydC9DYXJ0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBO0lBQ0kseUJBQXlCO0FBQzdCO0FBQ0E7O0lBRUksOENBQThDOztDQUVqRDtBQUVBO0tBQ0ksZUFBZTtDQUNuQjtBQUNEO0tBQ0ssa0JBQWtCO0NBQ3RCIiwiZmlsZSI6InNyYy9hcHAvQ2FydC9DYXJ0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbi5jb2xvcntcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOm1vY2Nhc2luO1xufVxuLmJveGVkIHtcbiAgICBcbiAgICBmb250LWZhbWlseTogJ0NvdXJpZXIgTmV3JywgQ291cmllciwgbW9ub3NwYWNlO1xuXG4gfSBcbiBcbiAuc3RlcHBlcntcbiAgICAgZm9udC1zaXplOiAyMHB4O1xuIH1cbi5oZWxsb3tcbiAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuIH1cblxuICJdfQ== */");

/***/ }),

/***/ "./src/app/Cart/Cart.component.service.ts":
/*!************************************************!*\
  !*** ./src/app/Cart/Cart.component.service.ts ***!
  \************************************************/
/*! exports provided: CartService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartService", function() { return CartService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");



let CartService = class CartService {
    constructor(httpClient) {
        this.httpClient = httpClient;
        this.url = 'http://localhost:4000/MRlogin/addcart';
    }
    getCart(mrid) {
        const body = {
            mrid: mrid
        };
        return this.httpClient.post(this.url, body);
    }
};
CartService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
CartService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], CartService);



/***/ }),

/***/ "./src/app/Cart/Cart.component.ts":
/*!****************************************!*\
  !*** ./src/app/Cart/Cart.component.ts ***!
  \****************************************/
/*! exports provided: CartComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartComponent", function() { return CartComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _Cart_component_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Cart.component.service */ "./src/app/Cart/Cart.component.service.ts");




let CartComponent = class CartComponent {
    constructor(service, activateRoute, route) {
        this.service = service;
        this.activateRoute = activateRoute;
        this.route = route;
        this.TotalAmountOfProduct = 0;
        this.TotalSaved = 0;
        this.id = localStorage['id'];
        this.loadProduct();
    }
    loadProduct() {
        this.service.getCart(this.id).subscribe(response => {
            if (response['status'] == 'success') {
                this.Cart = response['data'];
                //TO GET TOTAL MONEY AND SAVING
                if (this.Cart.length == 0) {
                    this.msg = 'your cart is empty';
                    this.empty = true;
                }
                else {
                    this.msg = 'your items list';
                    this.empty = false;
                }
                for (let i = 0; i < this.Cart.length; i++) {
                    this.TotalAmountOfProduct = this.TotalAmountOfProduct + this.Cart[i].totalAmount;
                    this.TotalSaved = this.TotalSaved + this.Cart[i].totalDiscount;
                }
            }
            else {
                console.log(response['error']);
            }
        });
    }
    onEdit(id, tableid, quantity) {
        localStorage['orderDetailsTableID'] = tableid;
        localStorage['Quantity'] = quantity;
        this.route.navigate(['/MRlogin/cartEdit/' + id]);
    }
    onOrderPlace() {
        this.route.navigate(['/MRlogin/cart/placeorder']);
    }
    ngOnInit() {
        if (localStorage['login_status'] != '1') {
            alert('you are not logged in');
            this.route.navigate(['/MRlogin']);
        }
    }
};
CartComponent.ctorParameters = () => [
    { type: _Cart_component_service__WEBPACK_IMPORTED_MODULE_3__["CartService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
CartComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'product_details',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./Cart.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/Cart/Cart.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./Cart.component.css */ "./src/app/Cart/Cart.component.css")).default]
    })
], CartComponent);



/***/ }),

/***/ "./src/app/CartProductDetails/CartProductDetails.component.css":
/*!*********************************************************************!*\
  !*** ./src/app/CartProductDetails/CartProductDetails.component.css ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n.color{\n    background-color:moccasin;\n}\n.boxed {\n    \n    font-family: 'Courier New', Courier, monospace;\n\n }\n.stepper{\n     font-size: 20px;\n }\n\n \n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQ2FydFByb2R1Y3REZXRhaWxzL0NhcnRQcm9kdWN0RGV0YWlscy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQTtJQUNJLHlCQUF5QjtBQUM3QjtBQUNBOztJQUVJLDhDQUE4Qzs7Q0FFakQ7QUFFQTtLQUNJLGVBQWU7Q0FDbkIiLCJmaWxlIjoic3JjL2FwcC9DYXJ0UHJvZHVjdERldGFpbHMvQ2FydFByb2R1Y3REZXRhaWxzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbi5jb2xvcntcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOm1vY2Nhc2luO1xufVxuLmJveGVkIHtcbiAgICBcbiAgICBmb250LWZhbWlseTogJ0NvdXJpZXIgTmV3JywgQ291cmllciwgbW9ub3NwYWNlO1xuXG4gfSBcbiBcbiAuc3RlcHBlcntcbiAgICAgZm9udC1zaXplOiAyMHB4O1xuIH1cblxuICJdfQ== */");

/***/ }),

/***/ "./src/app/CartProductDetails/CartProductDetails.component.service.ts":
/*!****************************************************************************!*\
  !*** ./src/app/CartProductDetails/CartProductDetails.component.service.ts ***!
  \****************************************************************************/
/*! exports provided: CartProductDetailsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartProductDetailsService", function() { return CartProductDetailsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");



let CartProductDetailsService = class CartProductDetailsService {
    constructor(httpClient) {
        this.httpClient = httpClient;
        this.url = 'http://localhost:4000/login/dashboard/product/';
        this.url1 = 'http://localhost:4000/MRlogin/cartEdit';
        this.url2 = 'http://localhost:4000/MRlogin/cartDelete';
    }
    getProduct(id) {
        return this.httpClient.get(this.url + id);
    }
    postInCart(Quantity, totalAmount, totalDiscount, MRid, productID, orderDetailsTableID) {
        const body = {
            Quantity: Quantity,
            totalAmount: totalAmount,
            totalDiscount: totalDiscount,
            MRid: MRid,
            productID: productID,
            orderDetailsTableID: orderDetailsTableID
        };
        return this.httpClient.put(this.url1, body);
    }
    DeleteFromCart(id) {
        const body = {
            id: id
        };
        return this.httpClient.post(this.url2, body);
    }
};
CartProductDetailsService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
CartProductDetailsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], CartProductDetailsService);



/***/ }),

/***/ "./src/app/CartProductDetails/CartProductDetails.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/CartProductDetails/CartProductDetails.component.ts ***!
  \********************************************************************/
/*! exports provided: CartProductDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartProductDetailsComponent", function() { return CartProductDetailsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _CartProductDetails_component_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./CartProductDetails.component.service */ "./src/app/CartProductDetails/CartProductDetails.component.service.ts");




let CartProductDetailsComponent = class CartProductDetailsComponent {
    constructor(service, activateRoute, cartService, route) {
        this.service = service;
        this.activateRoute = activateRoute;
        this.cartService = cartService;
        this.route = route;
        this.count = 1;
        this.id = this.activateRoute.snapshot.params['id'];
        if (this.id) {
            this.service.getProduct(this.id).subscribe(response => {
                if (response['status'] == 'success') {
                    this.product = response['data'][0];
                    this.rate = this.product.priceWithDiscount;
                    this.temp = this.rate;
                }
            });
        }
        this.count = Number(localStorage['Quantity']);
    }
    OnIncrement() {
        this.count = this.count + 1;
        this.rate = this.temp * this.count;
    }
    OnDecrement() {
        if (this.count == 0) {
            alert('Can not decrement');
        }
        else {
            this.count = this.count - 1;
            this.rate = this.temp * this.count;
        }
    }
    onAddToCart() {
        if (localStorage['login_status'] == '0') {
            alert('You need to login first');
            this.route.navigate(['/MRlogin']);
        }
        else {
            this.MRid = localStorage['id'];
            this.orderDetailsTableID = localStorage['orderDetailsTableID'];
            this.totalDiscount = (this.product.price * this.count) - this.rate;
            if (this.count != 0) {
                this.cartService.postInCart(this.count, this.rate, this.totalDiscount, this.MRid, this.id, this.orderDetailsTableID)
                    .subscribe(response => {
                    if (response['status'] == 'success') {
                        alert('item updated');
                        this.route.navigate(['MRlogin/cart']);
                    }
                });
            }
            else {
                this.cartService.DeleteFromCart(this.orderDetailsTableID)
                    .subscribe(response => {
                    if (response['status'] == 'success') {
                        alert('item updated');
                        this.route.navigate(['MRlogin/cart']);
                    }
                });
            }
        }
    }
    OnOrderNow() {
    }
    ngOnInit() { }
};
CartProductDetailsComponent.ctorParameters = () => [
    { type: _CartProductDetails_component_service__WEBPACK_IMPORTED_MODULE_3__["CartProductDetailsService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _CartProductDetails_component_service__WEBPACK_IMPORTED_MODULE_3__["CartProductDetailsService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
CartProductDetailsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'Cartproduct_details',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./CartProductDetails.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/CartProductDetails/CartProductDetails.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./CartProductDetails.component.css */ "./src/app/CartProductDetails/CartProductDetails.component.css")).default]
    })
], CartProductDetailsComponent);



/***/ }),

/***/ "./src/app/MRRegister/MRRegister.component.css":
/*!*****************************************************!*\
  !*** ./src/app/MRRegister/MRRegister.component.css ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n.row{\n    background-color: bisque;\n}\nh1{\n    text-align: center\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvTVJSZWdpc3Rlci9NUlJlZ2lzdGVyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBO0lBQ0ksd0JBQXdCO0FBQzVCO0FBQ0E7SUFDSTtBQUNKIiwiZmlsZSI6InNyYy9hcHAvTVJSZWdpc3Rlci9NUlJlZ2lzdGVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbi5yb3d7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmlzcXVlO1xufVxuaDF7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyXG59Il19 */");

/***/ }),

/***/ "./src/app/MRRegister/MRRegister.component.ts":
/*!****************************************************!*\
  !*** ./src/app/MRRegister/MRRegister.component.ts ***!
  \****************************************************/
/*! exports provided: MRRegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MRRegisterComponent", function() { return MRRegisterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _MRRegister_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./MRRegister.service */ "./src/app/MRRegister/MRRegister.service.ts");




let MRRegisterComponent = class MRRegisterComponent {
    constructor(router, userservice) {
        this.router = router;
        this.username = '';
        this.firstname = '';
        this.lastname = '';
        this.joindate = '1990/01/01';
        this.phoneno = '';
        this.email = '';
        this.password = '';
        this.service = userservice;
    }
    onadd() {
        if (this.username.length == 0) {
            alert('username is required');
        }
        else if (this.firstname.length == 0) {
            alert('firstname is required');
        }
        else if (this.lastname.length == 0) {
            alert('lastname is required');
        }
        else if (this.phoneno.length == 0) {
            alert('phone number is required');
        }
        else if (this.email.length == 0) {
            alert('email is required');
        }
        else if (this.password.length == 0) {
            alert('password is required');
        }
        else {
            this.service.addUsers(this.username, this.firstname, this.lastname, this.joindate, this.phoneno, this.email, this.password).subscribe((response) => {
                if (response['status'] == 'success') {
                    alert('you have successfully register');
                    this.router.navigate(['/MRlogin']);
                }
                else {
                    console.log(response['error']);
                    alert('error');
                }
            });
        }
    }
    ngOnInit() { }
};
MRRegisterComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _MRRegister_service__WEBPACK_IMPORTED_MODULE_3__["MRRegisterService"] }
];
MRRegisterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'MRregister',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./MRRegister.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/MRRegister/MRRegister.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./MRRegister.component.css */ "./src/app/MRRegister/MRRegister.component.css")).default]
    })
], MRRegisterComponent);



/***/ }),

/***/ "./src/app/MRRegister/MRRegister.service.ts":
/*!**************************************************!*\
  !*** ./src/app/MRRegister/MRRegister.service.ts ***!
  \**************************************************/
/*! exports provided: MRRegisterService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MRRegisterService", function() { return MRRegisterService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");



let MRRegisterService = class MRRegisterService {
    constructor(httpClient) {
        this.url = 'http://localhost:4000/login/dashboard/user'; //express port 4000
        this.http = httpClient;
    }
    addUsers(username, firstname, lastname, joindate, phoneno, email, password) {
        const body = {
            username: username,
            firstname: firstname,
            lastname: lastname,
            joindate: joindate,
            phoneno: phoneno,
            email: email,
            password: password
        };
        return this.http.post(this.url, body);
    }
};
MRRegisterService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
MRRegisterService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], MRRegisterService);



/***/ }),

/***/ "./src/app/MRlogin/MRlogin.component.css":
/*!***********************************************!*\
  !*** ./src/app/MRlogin/MRlogin.component.css ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n.row{\n    background-color: bisque;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvTVJsb2dpbi9NUmxvZ2luLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBO0lBQ0ksd0JBQXdCO0FBQzVCIiwiZmlsZSI6InNyYy9hcHAvTVJsb2dpbi9NUmxvZ2luLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbi5yb3d7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmlzcXVlO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/MRlogin/MRlogin.component.ts":
/*!**********************************************!*\
  !*** ./src/app/MRlogin/MRlogin.component.ts ***!
  \**********************************************/
/*! exports provided: MRloginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MRloginComponent", function() { return MRloginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _MRlogin_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./MRlogin.service */ "./src/app/MRlogin/MRlogin.service.ts");




let MRloginComponent = class MRloginComponent {
    // isLoggedIn = false
    constructor(router, service) {
        this.router = router;
        this.service = service;
        this.email = '';
        this.password = '';
        this.rememberme = false;
    }
    onlogin() {
        if (this.email.length == 0) {
            alert('email field can not be empty');
        }
        else if (this.password.length == 0) {
            alert('password can not be empty');
        }
        else {
            this.service.login(this.email, this.password).subscribe((response) => {
                console.log(response);
                if (response['status'] == 'success') {
                    localStorage['login_status'] = '1';
                    localStorage['username'] = response['data'][0].username;
                    localStorage['id'] = response['data'][0].id;
                    localStorage['flag'] = '0';
                    this.router.navigate(['/MRlogin/home']);
                }
                else if (response['status'] == 'error') {
                    alert('invaild email or password');
                }
            });
        }
    }
};
MRloginComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _MRlogin_service__WEBPACK_IMPORTED_MODULE_3__["MRloginService"] }
];
MRloginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'MR-login',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./MRlogin.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/MRlogin/MRlogin.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./MRlogin.component.css */ "./src/app/MRlogin/MRlogin.component.css")).default]
    })
], MRloginComponent);



/***/ }),

/***/ "./src/app/MRlogin/MRlogin.service.ts":
/*!********************************************!*\
  !*** ./src/app/MRlogin/MRlogin.service.ts ***!
  \********************************************/
/*! exports provided: MRloginService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MRloginService", function() { return MRloginService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");



let MRloginService = class MRloginService {
    constructor(httpClient) {
        this.httpClient = httpClient;
        this.url = 'http://localhost:4000/MRlogin'; //express port 4000
        this.http = httpClient;
    }
    login(email, password) {
        const body = {
            email: email,
            password: password
        };
        return this.http.post(this.url, body);
    }
};
MRloginService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
MRloginService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], MRloginService);



/***/ }),

/***/ "./src/app/MRorders/MRorders.component.css":
/*!*************************************************!*\
  !*** ./src/app/MRorders/MRorders.component.css ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n.thumbnail {\n    width: 40px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvTVJvcmRlcnMvTVJvcmRlcnMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0E7SUFDSSxXQUFXO0FBQ2YiLCJmaWxlIjoic3JjL2FwcC9NUm9yZGVycy9NUm9yZGVycy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG4udGh1bWJuYWlsIHtcbiAgICB3aWR0aDogNDBweDtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/MRorders/MRorders.component.ts":
/*!************************************************!*\
  !*** ./src/app/MRorders/MRorders.component.ts ***!
  \************************************************/
/*! exports provided: MROrderListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MROrderListComponent", function() { return MROrderListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _MRorders_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./MRorders.service */ "./src/app/MRorders/MRorders.service.ts");




let MROrderListComponent = class MROrderListComponent {
    // status:String
    constructor(router, productservice, service, activeRoute) {
        this.router = router;
        this.service = service;
        this.activeRoute = activeRoute;
        this.id = this.activeRoute.snapshot.params['id'];
        this.loadAllProducts();
    }
    ondelete(id) {
        console.log(id);
        if (confirm('Are you sure to delete an item')) {
            this.service
                .deleteProduct(id)
                .subscribe(response => {
                if (response['status'] == 'success') {
                    window.location.reload();
                    //this.loadAllProducts()
                }
                else {
                    console.log(response['error']);
                }
            });
        }
    }
    loadAllProducts() {
        this.date = new Date();
        this.service
            .getAllProducts(this.id)
            .subscribe(response => {
            if (response['status'] == 'success') {
                this.products = response['data'];
            }
            else {
                alert('error');
            }
        });
    }
    isexpire(product) {
        const currentdate = new Date();
        return new Date(product.deliveryDate).valueOf() < new Date(currentdate).valueOf();
    }
};
MROrderListComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _MRorders_service__WEBPACK_IMPORTED_MODULE_3__["MRordersListService"] },
    { type: _MRorders_service__WEBPACK_IMPORTED_MODULE_3__["MRordersListService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }
];
MROrderListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'OrderlistOFMR',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./MRorders.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/MRorders/MRorders.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./MRorders.component.css */ "./src/app/MRorders/MRorders.component.css")).default]
    })
], MROrderListComponent);



/***/ }),

/***/ "./src/app/MRorders/MRorders.service.ts":
/*!**********************************************!*\
  !*** ./src/app/MRorders/MRorders.service.ts ***!
  \**********************************************/
/*! exports provided: MRordersListService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MRordersListService", function() { return MRordersListService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");



let MRordersListService = class MRordersListService {
    constructor(httpClient) {
        this.url = 'http://localhost:4000/MRlogin/dashboard/MRorders'; //express port 4000
        this.url1 = 'http://localhost:4000/MRlogin/orders';
        this.http = httpClient;
    }
    getAllProducts(id) {
        this.url = this.url + '/' + id;
        console.log(this.url);
        return this.http.get(this.url);
    }
    deleteProduct(id) {
        this.url1 = this.url1 + '/' + id;
        return this.http.delete(this.url1);
    }
};
MRordersListService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
MRordersListService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], MRordersListService);



/***/ }),

/***/ "./src/app/SearchProduct/SearchProduct.component.css":
/*!***********************************************************!*\
  !*** ./src/app/SearchProduct/SearchProduct.component.css ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n\n.boxed {\n    \n    font-family: 'Courier New', Courier, monospace;\n\n } \n\n/* \n.col-md-4{\n \n  background-color: gainsboro;\n}  */ \n\n/* \nh4{\n  background-color: aqua;\n} */\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvU2VhcmNoUHJvZHVjdC9TZWFyY2hQcm9kdWN0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFFQTs7SUFFSSw4Q0FBOEM7O0NBRWpEOztBQUVEOzs7O0lBSUk7O0FBSUo7OztHQUdHIiwiZmlsZSI6InNyYy9hcHAvU2VhcmNoUHJvZHVjdC9TZWFyY2hQcm9kdWN0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcblxuLmJveGVkIHtcbiAgICBcbiAgICBmb250LWZhbWlseTogJ0NvdXJpZXIgTmV3JywgQ291cmllciwgbW9ub3NwYWNlO1xuXG4gfSBcblxuLyogXG4uY29sLW1kLTR7XG4gXG4gIGJhY2tncm91bmQtY29sb3I6IGdhaW5zYm9ybztcbn0gICovXG5cblxuXG4vKiBcbmg0e1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBhcXVhO1xufSAqLyJdfQ== */");

/***/ }),

/***/ "./src/app/SearchProduct/SearchProduct.component.service.ts":
/*!******************************************************************!*\
  !*** ./src/app/SearchProduct/SearchProduct.component.service.ts ***!
  \******************************************************************/
/*! exports provided: SearchProductService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchProductService", function() { return SearchProductService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");



let SearchProductService = class SearchProductService {
    constructor(httpClient) {
        this.httpClient = httpClient;
        this.url = 'http://localhost:4000/MRlogin/search';
    }
    getSearch(ProductName) {
        const body = {
            ProductName: ProductName
        };
        return this.httpClient.post(this.url, body);
    }
};
SearchProductService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
SearchProductService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], SearchProductService);



/***/ }),

/***/ "./src/app/SearchProduct/SearchProduct.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/SearchProduct/SearchProduct.component.ts ***!
  \**********************************************************/
/*! exports provided: SearchProductComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchProductComponent", function() { return SearchProductComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _SearchProduct_component_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./SearchProduct.component.service */ "./src/app/SearchProduct/SearchProduct.component.service.ts");




let SearchProductComponent = class SearchProductComponent {
    //  username: any
    constructor(router, productservice, service) {
        this.router = router;
        this.productservice = productservice;
        this.service = service;
        this.loadflag();
        this.loadAllProducts();
    }
    loadAllProducts() {
        this.ProductName = localStorage['searchValue'];
        this.service
            .getSearch(this.ProductName)
            .subscribe(response => {
            if (response['status'] == 'success') {
                this.SearchArray = response['data'];
                if (this.SearchArray.length == 0) {
                    this.msg = 'we did not find your matching result';
                }
                else {
                    this.msg = 'we found these results';
                }
            }
            else {
                alert('error');
            }
        });
        localStorage['onBack'] = 'searchProduct';
    }
    loadflag() {
        if (localStorage['flag'] == '0') {
            window.location.reload();
            localStorage['flag'] = '1';
        }
    }
    ngOnInit() {
    }
    OnSelectProduct(id) {
        this.router.navigate(['/MRlogin/product_details/' + id]);
    }
};
SearchProductComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _SearchProduct_component_service__WEBPACK_IMPORTED_MODULE_3__["SearchProductService"] },
    { type: _SearchProduct_component_service__WEBPACK_IMPORTED_MODULE_3__["SearchProductService"] }
];
SearchProductComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'SearchProduct',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./SearchProduct.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/SearchProduct/SearchProduct.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./SearchProduct.component.css */ "./src/app/SearchProduct/SearchProduct.component.css")).default]
    })
], SearchProductComponent);



/***/ }),

/***/ "./src/app/UserOrderList/UserOrderList.component.css":
/*!***********************************************************!*\
  !*** ./src/app/UserOrderList/UserOrderList.component.css ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n.thumbnail {\n    width: 40px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvVXNlck9yZGVyTGlzdC9Vc2VyT3JkZXJMaXN0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBO0lBQ0ksV0FBVztBQUNmIiwiZmlsZSI6InNyYy9hcHAvVXNlck9yZGVyTGlzdC9Vc2VyT3JkZXJMaXN0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbi50aHVtYm5haWwge1xuICAgIHdpZHRoOiA0MHB4O1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/UserOrderList/UserOrderList.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/UserOrderList/UserOrderList.component.ts ***!
  \**********************************************************/
/*! exports provided: UserOrderListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserOrderListComponent", function() { return UserOrderListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _UserOrderList_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./UserOrderList.service */ "./src/app/UserOrderList/UserOrderList.service.ts");




let UserOrderListComponent = class UserOrderListComponent {
    // status:String
    constructor(router, productservice, service) {
        this.router = router;
        this.service = service;
        this.loadAllProducts();
    }
    ondelete(id) {
        console.log(id);
        if (confirm('Are you sure to delete an item')) {
            this.service
                .deleteProduct(id)
                .subscribe(response => {
                if (response['status'] == 'success') {
                    window.location.reload();
                    //this.loadAllProducts()
                }
                else {
                    console.log(response['error']);
                }
            });
        }
    }
    loadAllProducts() {
        this.date = new Date();
        this.mrid = localStorage['id'];
        this.service
            .getAllProducts(this.mrid)
            .subscribe(response => {
            if (response['status'] == 'success') {
                this.products = response['data'];
            }
            else {
                alert('error');
            }
        });
    }
    isexpire(product) {
        const currentdate = new Date();
        // your date logic here, recommend moment.js;
        // return moment(product.experationDate).isBefore(moment(currentdate));
        // or without using moment.js:
        // return product.experationDate.getTime() < currentdate.getTime();
        // or using Date
        return new Date(product.deliveryDate).valueOf() < new Date(currentdate).valueOf();
    }
};
UserOrderListComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _UserOrderList_service__WEBPACK_IMPORTED_MODULE_3__["UserOrderListService"] },
    { type: _UserOrderList_service__WEBPACK_IMPORTED_MODULE_3__["UserOrderListService"] }
];
UserOrderListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'doctor-list',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./UserOrderList.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/UserOrderList/UserOrderList.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./UserOrderList.component.css */ "./src/app/UserOrderList/UserOrderList.component.css")).default]
    })
], UserOrderListComponent);



/***/ }),

/***/ "./src/app/UserOrderList/UserOrderList.service.ts":
/*!********************************************************!*\
  !*** ./src/app/UserOrderList/UserOrderList.service.ts ***!
  \********************************************************/
/*! exports provided: UserOrderListService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserOrderListService", function() { return UserOrderListService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");



let UserOrderListService = class UserOrderListService {
    constructor(httpClient) {
        this.url = 'http://localhost:4000/MRlogin/orders'; //express port 4000
        this.http = httpClient;
    }
    getAllProducts(mrid) {
        const body = {
            mrid: mrid
        };
        return this.http.post(this.url, body);
    }
    deleteProduct(id) {
        this.url = this.url + '/' + id;
        return this.http.delete(this.url);
    }
};
UserOrderListService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
UserOrderListService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], UserOrderListService);



/***/ }),

/***/ "./src/app/UserOrders/UserOrders.component.css":
/*!*****************************************************!*\
  !*** ./src/app/UserOrders/UserOrders.component.css ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\nh1{\n    text-align: center\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvVXNlck9yZGVycy9Vc2VyT3JkZXJzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBO0lBQ0k7QUFDSiIsImZpbGUiOiJzcmMvYXBwL1VzZXJPcmRlcnMvVXNlck9yZGVycy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG5oMXtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXJcbn0iXX0= */");

/***/ }),

/***/ "./src/app/UserOrders/UserOrders.component.service.ts":
/*!************************************************************!*\
  !*** ./src/app/UserOrders/UserOrders.component.service.ts ***!
  \************************************************************/
/*! exports provided: UserOrdersService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserOrdersService", function() { return UserOrdersService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");



let UserOrdersService = class UserOrdersService {
    constructor(httpClient) {
        this.url1 = 'http://localhost:4000/MRlogin/cart/confirmorder'; //express port 4000
        this.http = httpClient;
        console.log(this.url1);
    }
    UpdateOrders(OrderDate, deliveryDate, PaymentMode, mrid, drname, addressOFdr, drphoneno) {
        const body = {
            OrderDate: OrderDate,
            deliveryDate: deliveryDate,
            PaymentMode: PaymentMode,
            mrid: mrid,
            drname: drname,
            addressOFdr: addressOFdr,
            drphoneno: drphoneno
        };
        return this.http.put(this.url1, body);
    }
    InsertLocation(fullname, phoneno, state, city, pincode, address, mrid) {
        const body = {
            fullname: fullname,
            phoneno: phoneno,
            state: state,
            city: city,
            pincode: pincode,
            address: address,
            mrid: mrid
        };
        return this.http.post(this.url1, body);
    }
};
UserOrdersService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
UserOrdersService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], UserOrdersService);



/***/ }),

/***/ "./src/app/UserOrders/UserOrders.component.ts":
/*!****************************************************!*\
  !*** ./src/app/UserOrders/UserOrders.component.ts ***!
  \****************************************************/
/*! exports provided: UserOrdersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserOrdersComponent", function() { return UserOrdersComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _UserOrders_component_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./UserOrders.component.service */ "./src/app/UserOrders/UserOrders.component.service.ts");




let UserOrdersComponent = class UserOrdersComponent {
    constructor(router, service, service1, service2) {
        this.router = router;
        this.service = service;
        this.service1 = service1;
        this.service2 = service2;
        this.fullname = '';
        this.phoneno = '';
        this.OrderDate = '';
        this.deliveryDate = '';
        this.PaymentMode = 1;
        this.state = '';
        this.city = '';
        this.pincode = '';
        this.address = '';
    }
    onadd() {
        const phoneno1 = String(this.phoneno);
        const pincode1 = String(this.pincode);
        if (this.fullname.length == 0) {
            alert('fullname can not be empty');
        }
        else if (phoneno1.length == 0 || phoneno1.length != 10) {
            alert('phone no is empty or not a 10 digits');
        }
        else if (this.OrderDate.length == 0) {
            alert('OrderDate is invaild');
        }
        else if (this.deliveryDate.length == 0) {
            alert('DeliveryDate is invaild');
        }
        else if (this.state.length == 0) {
            alert('state can not be empty');
        }
        else if (this.city.length == 0) {
            alert('city can not be empty');
        }
        else if (pincode1.length == 0 || pincode1.length != 6) {
            alert('invaid pincode');
        }
        else if (this.address.length == 0) {
            alert('Adress can not be empty');
        }
        else {
            if (confirm('Are you sure ? Once Ordered can not be canceled')) {
                const mrid = localStorage['id'];
                const addressOFdr = this.address + ', ' + this.city + ', ' + this.state + ', ' + this.pincode;
                const drname = this.fullname;
                const drphoneno = this.phoneno;
                this.service1.InsertLocation(this.fullname, this.phoneno, this.state, this.city, this.pincode, this.address, mrid)
                    .subscribe((response1) => {
                    if (response1['status'] == 'success') {
                        console.log('');
                    }
                    else {
                        console.log(response1['error']);
                    }
                });
                // //to get id of locationofdr table;
                // this.service2.getFullAddress().subscribe.((response2) =>{
                //     if(response2['status'] == 'success'){
                //         this.locationofdr = response2['data']
                //         console.log(this.locationofdr)
                //     }else{
                //         console.log(response2['error'])
                //     }
                // })
                this.service.UpdateOrders(this.OrderDate, this.deliveryDate, this.PaymentMode, mrid, drname, addressOFdr, drphoneno)
                    .subscribe((response) => {
                    if (response['status'] == 'success') {
                        alert('success');
                        this.router.navigate(['/MRlogin/cart']);
                    }
                    else {
                        console.log(response['error']);
                        alert('error');
                    }
                });
            }
        }
    }
    ngOnInit() { }
};
UserOrdersComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _UserOrders_component_service__WEBPACK_IMPORTED_MODULE_3__["UserOrdersService"] },
    { type: _UserOrders_component_service__WEBPACK_IMPORTED_MODULE_3__["UserOrdersService"] },
    { type: _UserOrders_component_service__WEBPACK_IMPORTED_MODULE_3__["UserOrdersService"] }
];
UserOrdersComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'add-user',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./UserOrders.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/UserOrders/UserOrders.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./UserOrders.component.css */ "./src/app/UserOrders/UserOrders.component.css")).default]
    })
], UserOrdersComponent);



/***/ }),

/***/ "./src/app/add_dr/add_dr.component.css":
/*!*********************************************!*\
  !*** ./src/app/add_dr/add_dr.component.css ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("h1{\n    text-align: center\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRkX2RyL2FkZF9kci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0k7QUFDSiIsImZpbGUiOiJzcmMvYXBwL2FkZF9kci9hZGRfZHIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImgxe1xuICAgIHRleHQtYWxpZ246IGNlbnRlclxufSJdfQ== */");

/***/ }),

/***/ "./src/app/add_dr/add_dr.component.ts":
/*!********************************************!*\
  !*** ./src/app/add_dr/add_dr.component.ts ***!
  \********************************************/
/*! exports provided: Add_drComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Add_drComponent", function() { return Add_drComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _adddr_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./adddr.service */ "./src/app/add_dr/adddr.service.ts");



//import { AddUserService } from '../add_user/adduser.service';

let Add_drComponent = class Add_drComponent {
    constructor(router, userservice) {
        this.router = router;
        this.service = userservice;
    }
    back() {
        this.router.navigate(['/login/dashboard/drs']);
    }
    onadd() {
        this.service.addDR(this.firstname, this.lastname, this.phoneNo, this.degree).subscribe((response) => {
            if (response['status'] == 'success') {
                alert('added DR');
            }
            else {
                console.log(response['error']);
                alert('error');
            }
        });
    }
    ngOnInit() { }
};
Add_drComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _adddr_service__WEBPACK_IMPORTED_MODULE_3__["AddDRService"] }
];
Add_drComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'add-dr',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./add_dr.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/add_dr/add_dr.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./add_dr.component.css */ "./src/app/add_dr/add_dr.component.css")).default]
    })
], Add_drComponent);



/***/ }),

/***/ "./src/app/add_dr/adddr.service.ts":
/*!*****************************************!*\
  !*** ./src/app/add_dr/adddr.service.ts ***!
  \*****************************************/
/*! exports provided: AddDRService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddDRService", function() { return AddDRService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");



let AddDRService = class AddDRService {
    constructor(httpClient) {
        this.url = 'http://localhost:4000/login/dashboard/dr'; //express port 4000
        this.http = httpClient;
    }
    addDR(firstname, lastname, phoneNo, degree) {
        const body = {
            firstname: firstname,
            lastname: lastname,
            phoneNo: phoneNo,
            degree: degree
        };
        return this.http.post(this.url, body);
    }
    deleteProduct(id) {
        return this.http.delete(this.url + '/' + id);
    }
    getAllProducts() {
        return this.http.get(this.url);
    }
};
AddDRService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
AddDRService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], AddDRService);



/***/ }),

/***/ "./src/app/add_product/add_product.component.css":
/*!*******************************************************!*\
  !*** ./src/app/add_product/add_product.component.css ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\nh1{\n    text-align: center\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRkX3Byb2R1Y3QvYWRkX3Byb2R1Y3QuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0E7SUFDSTtBQUNKIiwiZmlsZSI6InNyYy9hcHAvYWRkX3Byb2R1Y3QvYWRkX3Byb2R1Y3QuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuaDF7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyXG59Il19 */");

/***/ }),

/***/ "./src/app/add_product/add_product.component.ts":
/*!******************************************************!*\
  !*** ./src/app/add_product/add_product.component.ts ***!
  \******************************************************/
/*! exports provided: Add_productComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Add_productComponent", function() { return Add_productComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _add_product_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./add_product.service */ "./src/app/add_product/add_product.service.ts");




let Add_productComponent = class Add_productComponent {
    constructor(router, productservice, catservice) {
        this.router = router;
        this.catservice = catservice;
        this.cat = [];
        this.categoryid = '';
        this.service = productservice;
    }
    back() {
        this.router.navigate(['/login/dashboard/product']);
    }
    addProduct() {
        this.service.addService(this.name, this.price, this.discount, this.priceWithDiscount, this.doseInMG, this.mgfdate, this.expiredate, this.description, this.image, this.categoryid).subscribe((response) => {
            if (response['status'] == 'success') {
                alert('added product');
            }
            else {
                console.log(response['error']);
                alert('error');
            }
        });
    }
    ngOnInit() {
        this.loadCategories();
    }
    loadCategories() {
        this.catservice.getCategories().subscribe(response => {
            if (response['status'] == 'success') {
                this.cat = response['data'];
                if (this.cat.length > 0)
                    this.categoryid = this.cat[0].id;
            }
        });
    }
    onSelectImage(event) {
        this.image = event.target.files[0];
    }
};
Add_productComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _add_product_service__WEBPACK_IMPORTED_MODULE_3__["AddProductService"] },
    { type: _add_product_service__WEBPACK_IMPORTED_MODULE_3__["AddProductService"] }
];
Add_productComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'add-product',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./add_product.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/add_product/add_product.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./add_product.component.css */ "./src/app/add_product/add_product.component.css")).default]
    })
], Add_productComponent);



/***/ }),

/***/ "./src/app/add_product/add_product.service.ts":
/*!****************************************************!*\
  !*** ./src/app/add_product/add_product.service.ts ***!
  \****************************************************/
/*! exports provided: AddProductService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddProductService", function() { return AddProductService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");



let AddProductService = class AddProductService {
    constructor(httpClient, http1) {
        this.http1 = http1;
        this.url = 'http://localhost:4000/login/dashboard/product'; //express port 4000
        this.url1 = 'http://localhost:4000/category';
        this.http = httpClient;
    }
    addService(name, price, discount, priceWithDiscount, doseInMG, mgfdate, expiredate, description, image, categoryid) {
        const body = new FormData();
        body.append('name', name);
        body.append('price', price);
        body.append('discount', discount);
        body.append('priceWithDiscount', priceWithDiscount);
        body.append('doseInMG', doseInMG);
        body.append('mgfdate', mgfdate);
        body.append('expiredate', expiredate);
        body.append('description', description);
        body.append('image', image);
        body.append('categoryid', categoryid);
        return this.http.post(this.url, body);
    } //end of addservive
    getCategories() {
        return this.http1.get(this.url1);
    }
};
AddProductService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
AddProductService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], AddProductService);



/***/ }),

/***/ "./src/app/add_user/add_user.component.css":
/*!*************************************************!*\
  !*** ./src/app/add_user/add_user.component.css ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\nh1{\n    text-align: center\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRkX3VzZXIvYWRkX3VzZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0E7SUFDSTtBQUNKIiwiZmlsZSI6InNyYy9hcHAvYWRkX3VzZXIvYWRkX3VzZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuaDF7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyXG59Il19 */");

/***/ }),

/***/ "./src/app/add_user/add_user.component.ts":
/*!************************************************!*\
  !*** ./src/app/add_user/add_user.component.ts ***!
  \************************************************/
/*! exports provided: Add_userComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Add_userComponent", function() { return Add_userComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _adduser_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./adduser.service */ "./src/app/add_user/adduser.service.ts");




let Add_userComponent = class Add_userComponent {
    constructor(router, userservice) {
        this.router = router;
        this.service = userservice;
    }
    back() {
        this.router.navigate(['/login/dashboard/user']);
    }
    onadd() {
        this.service.addUsers(this.username, this.firstname, this.lastname, this.joindate, this.phoneno, this.email, this.password).subscribe((response) => {
            if (response['status'] == 'success') {
                alert('added user');
            }
            else {
                console.log(response['error']);
                alert('error');
            }
        });
    }
    ngOnInit() { }
};
Add_userComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _adduser_service__WEBPACK_IMPORTED_MODULE_3__["AddUserService"] }
];
Add_userComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'add-user',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./add_user.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/add_user/add_user.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./add_user.component.css */ "./src/app/add_user/add_user.component.css")).default]
    })
], Add_userComponent);



/***/ }),

/***/ "./src/app/add_user/adduser.service.ts":
/*!*********************************************!*\
  !*** ./src/app/add_user/adduser.service.ts ***!
  \*********************************************/
/*! exports provided: AddUserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddUserService", function() { return AddUserService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");



let AddUserService = class AddUserService {
    constructor(httpClient) {
        this.url = 'http://localhost:4000/login/dashboard/user'; //express port 4000
        this.http = httpClient;
    }
    addUsers(username, firstname, lastname, joindate, phoneno, email, password) {
        const body = {
            username: username,
            firstname: firstname,
            lastname: lastname,
            joindate: joindate,
            phoneno: phoneno,
            email: email,
            password: password
        };
        return this.http.post(this.url, body);
    }
};
AddUserService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
AddUserService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], AddUserService);



/***/ }),

/***/ "./src/app/allopathic/allopathic.component.css":
/*!*****************************************************!*\
  !*** ./src/app/allopathic/allopathic.component.css ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n\n.boxed {\n    \n    font-family: 'Courier New', Courier, monospace;\n\n } \n\n/* \n.col-md-4{\n \n  background-color: gainsboro;\n}  */ \n\n/* \nh4{\n  background-color: aqua;\n} */\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWxsb3BhdGhpYy9hbGxvcGF0aGljLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFFQTs7SUFFSSw4Q0FBOEM7O0NBRWpEOztBQUVEOzs7O0lBSUk7O0FBSUo7OztHQUdHIiwiZmlsZSI6InNyYy9hcHAvYWxsb3BhdGhpYy9hbGxvcGF0aGljLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcblxuLmJveGVkIHtcbiAgICBcbiAgICBmb250LWZhbWlseTogJ0NvdXJpZXIgTmV3JywgQ291cmllciwgbW9ub3NwYWNlO1xuXG4gfSBcblxuLyogXG4uY29sLW1kLTR7XG4gXG4gIGJhY2tncm91bmQtY29sb3I6IGdhaW5zYm9ybztcbn0gICovXG5cblxuXG4vKiBcbmg0e1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBhcXVhO1xufSAqLyJdfQ== */");

/***/ }),

/***/ "./src/app/allopathic/allopathic.component.service.ts":
/*!************************************************************!*\
  !*** ./src/app/allopathic/allopathic.component.service.ts ***!
  \************************************************************/
/*! exports provided: AllopathicService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AllopathicService", function() { return AllopathicService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");



let AllopathicService = class AllopathicService {
    constructor(httpClient) {
        this.httpClient = httpClient;
        this.url = 'http://localhost:4000/MRlogin/allopathic';
    }
    getAllopathic() {
        return this.httpClient.get(this.url);
    }
};
AllopathicService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
AllopathicService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], AllopathicService);



/***/ }),

/***/ "./src/app/allopathic/allopathic.component.ts":
/*!****************************************************!*\
  !*** ./src/app/allopathic/allopathic.component.ts ***!
  \****************************************************/
/*! exports provided: AllopathicComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AllopathicComponent", function() { return AllopathicComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _allopathic_component_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./allopathic.component.service */ "./src/app/allopathic/allopathic.component.service.ts");




let AllopathicComponent = class AllopathicComponent {
    constructor(router, productservice, service) {
        this.router = router;
        this.productservice = productservice;
        this.service = service;
        this.loadflag();
        this.loadAllProducts();
    }
    loadAllProducts() {
        this.service
            .getAllopathic()
            .subscribe(response => {
            if (response['status'] == 'success') {
                this.allopathic = response['data'];
            }
            else {
                alert('error');
            }
        });
        localStorage['onBack'] = 'allopathic';
    }
    loadflag() {
        if (localStorage['flag'] == '0') {
            window.location.reload();
            localStorage['flag'] = '1';
        }
    }
    ngOnInit() {
    }
    OnSelectProduct(id) {
        this.router.navigate(['/MRlogin/product_details/' + id]);
    }
};
AllopathicComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _allopathic_component_service__WEBPACK_IMPORTED_MODULE_3__["AllopathicService"] },
    { type: _allopathic_component_service__WEBPACK_IMPORTED_MODULE_3__["AllopathicService"] }
];
AllopathicComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'allopathic',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./allopathic.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/allopathic/allopathic.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./allopathic.component.css */ "./src/app/allopathic/allopathic.component.css")).default]
    })
], AllopathicComponent);



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".navbar-brand{\n    color:white\n}\n\n.hello{\n    color:white\n}\n\n.dropdown-toggle{\n    color:white;\n}\n\na:hover{\n    color:black;\n}\n\n.myclass{\n\n      background-color: antiquewhite;  \n     /* background-color:whitesmoke;  */\n}\n\n.social:hover {\n    -webkit-transform: scale(1.1);\n    -moz-transform: scale(1.1);\n    -o-transform: scale(1.1);\n}\n\n.social {\n    -webkit-transform: scale(0.8);\n    /* Browser Variations: */\n    \n    -moz-transform: scale(0.8);\n    -o-transform: scale(0.8);\n    -webkit-transition-duration: 0.5s;\n    -moz-transition-duration: 0.5s;\n    -o-transition-duration: 0.5s;\n}\n\n/*\n   Multicoloured Hover Variations\n*/\n\n#social-fb:hover {\n    color: #3B5998;\n}\n\n#social-tw:hover {\n    color: #4099FF;\n}\n\n#social-gp:hover {\n    color: #d34836;\n}\n\n#social-em:hover {\n    color: #f39c12;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSTtBQUNKOztBQUVBO0lBQ0k7QUFDSjs7QUFHQTtJQUNJLFdBQVc7QUFDZjs7QUFHQTtJQUNJLFdBQVc7QUFDZjs7QUFHQTs7TUFFTSw4QkFBOEI7S0FDL0Isa0NBQWtDO0FBQ3ZDOztBQUtBO0lBQ0ksNkJBQTZCO0lBQzdCLDBCQUEwQjtJQUMxQix3QkFBd0I7QUFDNUI7O0FBQ0E7SUFDSSw2QkFBNkI7SUFDN0Isd0JBQXdCOztJQUV4QiwwQkFBMEI7SUFDMUIsd0JBQXdCO0lBQ3hCLGlDQUFpQztJQUNqQyw4QkFBOEI7SUFDOUIsNEJBQTRCO0FBQ2hDOztBQUVBOztDQUVDOztBQUVEO0lBQ0ksY0FBYztBQUNsQjs7QUFDQTtJQUNJLGNBQWM7QUFDbEI7O0FBQ0E7SUFDSSxjQUFjO0FBQ2xCOztBQUNBO0lBQ0ksY0FBYztBQUNsQiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm5hdmJhci1icmFuZHtcbiAgICBjb2xvcjp3aGl0ZVxufVxuXG4uaGVsbG97XG4gICAgY29sb3I6d2hpdGVcbn1cblxuXG4uZHJvcGRvd24tdG9nZ2xle1xuICAgIGNvbG9yOndoaXRlO1xufVxuXG5cbmE6aG92ZXJ7XG4gICAgY29sb3I6YmxhY2s7XG59XG5cblxuLm15Y2xhc3N7XG5cbiAgICAgIGJhY2tncm91bmQtY29sb3I6IGFudGlxdWV3aGl0ZTsgIFxuICAgICAvKiBiYWNrZ3JvdW5kLWNvbG9yOndoaXRlc21va2U7ICAqL1xufSBcblxuXG5cblxuLnNvY2lhbDpob3ZlciB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEuMSk7XG4gICAgLW1vei10cmFuc2Zvcm06IHNjYWxlKDEuMSk7XG4gICAgLW8tdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xufVxuLnNvY2lhbCB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDAuOCk7XG4gICAgLyogQnJvd3NlciBWYXJpYXRpb25zOiAqL1xuICAgIFxuICAgIC1tb3otdHJhbnNmb3JtOiBzY2FsZSgwLjgpO1xuICAgIC1vLXRyYW5zZm9ybTogc2NhbGUoMC44KTtcbiAgICAtd2Via2l0LXRyYW5zaXRpb24tZHVyYXRpb246IDAuNXM7XG4gICAgLW1vei10cmFuc2l0aW9uLWR1cmF0aW9uOiAwLjVzO1xuICAgIC1vLXRyYW5zaXRpb24tZHVyYXRpb246IDAuNXM7XG59XG5cbi8qXG4gICBNdWx0aWNvbG91cmVkIEhvdmVyIFZhcmlhdGlvbnNcbiovXG5cbiNzb2NpYWwtZmI6aG92ZXIge1xuICAgIGNvbG9yOiAjM0I1OTk4O1xufVxuI3NvY2lhbC10dzpob3ZlciB7XG4gICAgY29sb3I6ICM0MDk5RkY7XG59XG4jc29jaWFsLWdwOmhvdmVyIHtcbiAgICBjb2xvcjogI2QzNDgzNjtcbn1cbiNzb2NpYWwtZW06aG92ZXIge1xuICAgIGNvbG9yOiAjZjM5YzEyO1xufVxuIl19 */");

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");



let AppComponent = class AppComponent {
    constructor(router) {
        this.router = router;
        this.title = 'MRTracker';
        this.isLoggedIn = false;
        this.status = localStorage['login_status'];
        this.loadStatus();
    }
    canActivate() {
        this.loadStatus();
        return true;
    }
    loadStatus() {
        if (this.status == '1') {
            this.isLoggedIn = true;
            this.username = localStorage['username'];
        }
    }
    onLogout() {
        if (confirm('Are you sure to log out')) {
            this.isLoggedIn = false;
            localStorage['login_status'] = '0';
            localStorage['username'] = null;
            localStorage['id'] = null;
            this.router.navigate(['/MRlogin']);
        }
    }
    onSearch() {
        localStorage['searchValue'] = this.search;
        this.router.navigate(['/MRlogin/search']);
    }
};
AppComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")).default]
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _Adminlogin_Adminlogin_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Adminlogin/Adminlogin.component */ "./src/app/Adminlogin/Adminlogin.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _add_user_add_user_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./add_user/add_user.component */ "./src/app/add_user/add_user.component.ts");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/dashboard/dashboard.component.ts");
/* harmony import */ var _login_user_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./login/user.service */ "./src/app/login/user.service.ts");
/* harmony import */ var _doctor_list_doctor_list_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./doctor_list/doctor_list.component */ "./src/app/doctor_list/doctor_list.component.ts");
/* harmony import */ var _doctor_list_dr_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./doctor_list/dr.service */ "./src/app/doctor_list/dr.service.ts");
/* harmony import */ var _add_dr_add_dr_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./add_dr/add_dr.component */ "./src/app/add_dr/add_dr.component.ts");
/* harmony import */ var _product_list_product_list_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./product_list/product_list.component */ "./src/app/product_list/product_list.component.ts");
/* harmony import */ var _product_list_product_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./product_list/product.service */ "./src/app/product_list/product.service.ts");
/* harmony import */ var _add_product_add_product_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./add_product/add_product.component */ "./src/app/add_product/add_product.component.ts");
/* harmony import */ var _add_user_adduser_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./add_user/adduser.service */ "./src/app/add_user/adduser.service.ts");
/* harmony import */ var _add_dr_adddr_service__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./add_dr/adddr.service */ "./src/app/add_dr/adddr.service.ts");
/* harmony import */ var _add_product_add_product_service__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./add_product/add_product.service */ "./src/app/add_product/add_product.service.ts");
/* harmony import */ var _edit_user_edit_user_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./edit_user/edit_user.component */ "./src/app/edit_user/edit_user.component.ts");
/* harmony import */ var _edit_user_edit_user_service__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./edit_user/edit_user.service */ "./src/app/edit_user/edit_user.service.ts");
/* harmony import */ var _edit_product_edit_product_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./edit_product/edit_product.component */ "./src/app/edit_product/edit_product.component.ts");
/* harmony import */ var _edit_product_edit_product_service__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./edit_product/edit_product.service */ "./src/app/edit_product/edit_product.service.ts");
/* harmony import */ var _MRlogin_MRlogin_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./MRlogin/MRlogin.component */ "./src/app/MRlogin/MRlogin.component.ts");
/* harmony import */ var _MRlogin_MRlogin_service__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./MRlogin/MRlogin.service */ "./src/app/MRlogin/MRlogin.service.ts");
/* harmony import */ var _user_home_user_home_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./user_home/user_home.component */ "./src/app/user_home/user_home.component.ts");
/* harmony import */ var _user_home_user_home_component_service__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./user_home/user_home.component.service */ "./src/app/user_home/user_home.component.service.ts");
/* harmony import */ var _product_details_product_details_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./product_details/product_details.component */ "./src/app/product_details/product_details.component.ts");
/* harmony import */ var _product_details_product_details_component_service__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./product_details/product_details.component.service */ "./src/app/product_details/product_details.component.service.ts");
/* harmony import */ var _allopathic_allopathic_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./allopathic/allopathic.component */ "./src/app/allopathic/allopathic.component.ts");
/* harmony import */ var _allopathic_allopathic_component_service__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./allopathic/allopathic.component.service */ "./src/app/allopathic/allopathic.component.service.ts");
/* harmony import */ var _homoeopathy_homoeopathy_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./homoeopathy/homoeopathy.component */ "./src/app/homoeopathy/homoeopathy.component.ts");
/* harmony import */ var _homoeopathy_homoeopathy_component_service__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./homoeopathy/homoeopathy.component.service */ "./src/app/homoeopathy/homoeopathy.component.service.ts");
/* harmony import */ var _ayurvedic_ayurvedic_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./ayurvedic/ayurvedic.component */ "./src/app/ayurvedic/ayurvedic.component.ts");
/* harmony import */ var _ayurvedic_ayurvedic_component_service__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./ayurvedic/ayurvedic.component.service */ "./src/app/ayurvedic/ayurvedic.component.service.ts");
/* harmony import */ var _SearchProduct_SearchProduct_component_service__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./SearchProduct/SearchProduct.component.service */ "./src/app/SearchProduct/SearchProduct.component.service.ts");
/* harmony import */ var _SearchProduct_SearchProduct_component__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./SearchProduct/SearchProduct.component */ "./src/app/SearchProduct/SearchProduct.component.ts");
/* harmony import */ var _Cart_Cart_component__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ./Cart/Cart.component */ "./src/app/Cart/Cart.component.ts");
/* harmony import */ var _Cart_Cart_component_service__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ./Cart/Cart.component.service */ "./src/app/Cart/Cart.component.service.ts");
/* harmony import */ var _MRRegister_MRRegister_component__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ./MRRegister/MRRegister.component */ "./src/app/MRRegister/MRRegister.component.ts");
/* harmony import */ var _MRRegister_MRRegister_service__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ./MRRegister/MRRegister.service */ "./src/app/MRRegister/MRRegister.service.ts");
/* harmony import */ var _CartProductDetails_CartProductDetails_component__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! ./CartProductDetails/CartProductDetails.component */ "./src/app/CartProductDetails/CartProductDetails.component.ts");
/* harmony import */ var _CartProductDetails_CartProductDetails_component_service__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! ./CartProductDetails/CartProductDetails.component.service */ "./src/app/CartProductDetails/CartProductDetails.component.service.ts");
/* harmony import */ var _UserOrders_UserOrders_component__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! ./UserOrders/UserOrders.component */ "./src/app/UserOrders/UserOrders.component.ts");
/* harmony import */ var _UserOrders_UserOrders_component_service__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! ./UserOrders/UserOrders.component.service */ "./src/app/UserOrders/UserOrders.component.service.ts");
/* harmony import */ var _UserOrderList_UserOrderList_component__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! ./UserOrderList/UserOrderList.component */ "./src/app/UserOrderList/UserOrderList.component.ts");
/* harmony import */ var _UserOrderList_UserOrderList_service__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(/*! ./UserOrderList/UserOrderList.service */ "./src/app/UserOrderList/UserOrderList.service.ts");
/* harmony import */ var _AllOrderList_AllOrderList_service__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(/*! ./AllOrderList/AllOrderList.service */ "./src/app/AllOrderList/AllOrderList.service.ts");
/* harmony import */ var _AllOrderList_AllOrderList_component__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(/*! ./AllOrderList/AllOrderList.component */ "./src/app/AllOrderList/AllOrderList.component.ts");
/* harmony import */ var _MRorders_MRorders_component__WEBPACK_IMPORTED_MODULE_51__ = __webpack_require__(/*! ./MRorders/MRorders.component */ "./src/app/MRorders/MRorders.component.ts");
/* harmony import */ var _MRorders_MRorders_service__WEBPACK_IMPORTED_MODULE_52__ = __webpack_require__(/*! ./MRorders/MRorders.service */ "./src/app/MRorders/MRorders.service.ts");





















































const routes = [
    { path: '', redirectTo: '/MRlogin/home', pathMatch: 'full' },
    // the default component
    // { path: '', component: AdminloginComponent },
    { path: 'login', component: _Adminlogin_Adminlogin_component__WEBPACK_IMPORTED_MODULE_5__["AdminloginComponent"] },
    { path: 'login/dashboard', component: _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_10__["DashboardComponent"] },
    { path: 'login/dashboard/user', component: _login_login_component__WEBPACK_IMPORTED_MODULE_6__["LoginComponent"] },
    { path: 'login/dashboard/drs', component: _doctor_list_doctor_list_component__WEBPACK_IMPORTED_MODULE_12__["DoctorComponent"] },
    { path: 'login/dashboard/product', component: _product_list_product_list_component__WEBPACK_IMPORTED_MODULE_15__["ProductComponent"] },
    { path: 'login/dashboard/user/add_user', component: _add_user_add_user_component__WEBPACK_IMPORTED_MODULE_9__["Add_userComponent"] },
    { path: 'login/dashboard/drs/add_dr', component: _add_dr_add_dr_component__WEBPACK_IMPORTED_MODULE_14__["Add_drComponent"] },
    { path: 'login/dashboard/product/add_product', component: _add_product_add_product_component__WEBPACK_IMPORTED_MODULE_17__["Add_productComponent"] },
    { path: 'login/dashboard/user/edit_user/:id', component: _edit_user_edit_user_component__WEBPACK_IMPORTED_MODULE_21__["Edit_userComponent"] },
    { path: 'login/dashboard/product/edit_product/:id', component: _edit_product_edit_product_component__WEBPACK_IMPORTED_MODULE_23__["Edit_productComponent"] },
    { path: 'MRlogin/home', component: _user_home_user_home_component__WEBPACK_IMPORTED_MODULE_27__["UserHomeComponent"], canActivate: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]] },
    { path: 'MRlogin', component: _MRlogin_MRlogin_component__WEBPACK_IMPORTED_MODULE_25__["MRloginComponent"] },
    { path: 'MRlogin/product_details/:id', component: _product_details_product_details_component__WEBPACK_IMPORTED_MODULE_29__["ProductDetailsComponent"] },
    { path: 'MRlogin/allopathic', component: _allopathic_allopathic_component__WEBPACK_IMPORTED_MODULE_31__["AllopathicComponent"] },
    { path: 'MRlogin/homoeopathy', component: _homoeopathy_homoeopathy_component__WEBPACK_IMPORTED_MODULE_33__["HomoeopathyComponent"] },
    { path: 'MRlogin/ayurvedic', component: _ayurvedic_ayurvedic_component__WEBPACK_IMPORTED_MODULE_35__["AyurvedicComponent"] },
    { path: 'MRlogin/search', component: _SearchProduct_SearchProduct_component__WEBPACK_IMPORTED_MODULE_38__["SearchProductComponent"] },
    { path: 'MRlogin/cart', component: _Cart_Cart_component__WEBPACK_IMPORTED_MODULE_39__["CartComponent"] },
    { path: 'MRregister', component: _MRRegister_MRRegister_component__WEBPACK_IMPORTED_MODULE_41__["MRRegisterComponent"] },
    { path: 'MRlogin/cartEdit/:id', component: _CartProductDetails_CartProductDetails_component__WEBPACK_IMPORTED_MODULE_43__["CartProductDetailsComponent"] },
    { path: 'MRlogin/cart/placeorder', component: _UserOrders_UserOrders_component__WEBPACK_IMPORTED_MODULE_45__["UserOrdersComponent"] },
    { path: 'MRlogin/orders', component: _UserOrderList_UserOrderList_component__WEBPACK_IMPORTED_MODULE_47__["UserOrderListComponent"] },
    { path: 'MRlogin/dashboard/orders', component: _AllOrderList_AllOrderList_component__WEBPACK_IMPORTED_MODULE_50__["AllOrderListComponent"] },
    { path: 'MRlogin/dashboard/MRorders/:id', component: _MRorders_MRorders_component__WEBPACK_IMPORTED_MODULE_51__["MROrderListComponent"] }
];
let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
            _login_login_component__WEBPACK_IMPORTED_MODULE_6__["LoginComponent"],
            _Adminlogin_Adminlogin_component__WEBPACK_IMPORTED_MODULE_5__["AdminloginComponent"],
            _add_user_add_user_component__WEBPACK_IMPORTED_MODULE_9__["Add_userComponent"],
            _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_10__["DashboardComponent"],
            _doctor_list_doctor_list_component__WEBPACK_IMPORTED_MODULE_12__["DoctorComponent"],
            _add_dr_add_dr_component__WEBPACK_IMPORTED_MODULE_14__["Add_drComponent"],
            _product_list_product_list_component__WEBPACK_IMPORTED_MODULE_15__["ProductComponent"],
            _add_product_add_product_component__WEBPACK_IMPORTED_MODULE_17__["Add_productComponent"],
            _add_dr_add_dr_component__WEBPACK_IMPORTED_MODULE_14__["Add_drComponent"],
            _edit_user_edit_user_component__WEBPACK_IMPORTED_MODULE_21__["Edit_userComponent"],
            _edit_product_edit_product_component__WEBPACK_IMPORTED_MODULE_23__["Edit_productComponent"],
            _MRlogin_MRlogin_component__WEBPACK_IMPORTED_MODULE_25__["MRloginComponent"],
            _user_home_user_home_component__WEBPACK_IMPORTED_MODULE_27__["UserHomeComponent"],
            _product_details_product_details_component__WEBPACK_IMPORTED_MODULE_29__["ProductDetailsComponent"],
            _allopathic_allopathic_component__WEBPACK_IMPORTED_MODULE_31__["AllopathicComponent"],
            _homoeopathy_homoeopathy_component__WEBPACK_IMPORTED_MODULE_33__["HomoeopathyComponent"],
            _ayurvedic_ayurvedic_component__WEBPACK_IMPORTED_MODULE_35__["AyurvedicComponent"],
            _SearchProduct_SearchProduct_component__WEBPACK_IMPORTED_MODULE_38__["SearchProductComponent"],
            _Cart_Cart_component__WEBPACK_IMPORTED_MODULE_39__["CartComponent"],
            _MRRegister_MRRegister_component__WEBPACK_IMPORTED_MODULE_41__["MRRegisterComponent"],
            _CartProductDetails_CartProductDetails_component__WEBPACK_IMPORTED_MODULE_43__["CartProductDetailsComponent"],
            _UserOrders_UserOrders_component__WEBPACK_IMPORTED_MODULE_45__["UserOrdersComponent"],
            _UserOrderList_UserOrderList_component__WEBPACK_IMPORTED_MODULE_47__["UserOrderListComponent"],
            _AllOrderList_AllOrderList_component__WEBPACK_IMPORTED_MODULE_50__["AllOrderListComponent"],
            _MRorders_MRorders_component__WEBPACK_IMPORTED_MODULE_51__["MROrderListComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClientModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterModule"].forRoot(routes)
        ],
        providers: [
            _login_user_service__WEBPACK_IMPORTED_MODULE_11__["UserService"],
            _doctor_list_dr_service__WEBPACK_IMPORTED_MODULE_13__["DrService"],
            _product_list_product_service__WEBPACK_IMPORTED_MODULE_16__["ProductService"],
            _add_user_adduser_service__WEBPACK_IMPORTED_MODULE_18__["AddUserService"],
            _add_dr_adddr_service__WEBPACK_IMPORTED_MODULE_19__["AddDRService"],
            _add_product_add_product_service__WEBPACK_IMPORTED_MODULE_20__["AddProductService"],
            _edit_user_edit_user_service__WEBPACK_IMPORTED_MODULE_22__["EditUserService"],
            _edit_product_edit_product_service__WEBPACK_IMPORTED_MODULE_24__["EditProductService"],
            _MRlogin_MRlogin_service__WEBPACK_IMPORTED_MODULE_26__["MRloginService"],
            _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
            _user_home_user_home_component_service__WEBPACK_IMPORTED_MODULE_28__["GetProductService"],
            _product_details_product_details_component_service__WEBPACK_IMPORTED_MODULE_30__["ProductDetailsService"],
            _allopathic_allopathic_component_service__WEBPACK_IMPORTED_MODULE_32__["AllopathicService"],
            _homoeopathy_homoeopathy_component_service__WEBPACK_IMPORTED_MODULE_34__["HomoeopathyService"],
            _ayurvedic_ayurvedic_component_service__WEBPACK_IMPORTED_MODULE_36__["AyurvedicService"],
            _SearchProduct_SearchProduct_component_service__WEBPACK_IMPORTED_MODULE_37__["SearchProductService"],
            _Cart_Cart_component_service__WEBPACK_IMPORTED_MODULE_40__["CartService"],
            _MRRegister_MRRegister_service__WEBPACK_IMPORTED_MODULE_42__["MRRegisterService"],
            _CartProductDetails_CartProductDetails_component_service__WEBPACK_IMPORTED_MODULE_44__["CartProductDetailsService"],
            _UserOrders_UserOrders_component_service__WEBPACK_IMPORTED_MODULE_46__["UserOrdersService"],
            _UserOrderList_UserOrderList_service__WEBPACK_IMPORTED_MODULE_48__["UserOrderListService"],
            _AllOrderList_AllOrderList_service__WEBPACK_IMPORTED_MODULE_49__["AllOrderListService"],
            _MRorders_MRorders_service__WEBPACK_IMPORTED_MODULE_52__["MRordersListService"]
        ],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/ayurvedic/ayurvedic.component.css":
/*!***************************************************!*\
  !*** ./src/app/ayurvedic/ayurvedic.component.css ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n\n.boxed {\n    \n    font-family: 'Courier New', Courier, monospace;\n\n } \n\n/* \n.col-md-4{\n \n  background-color: gainsboro;\n}  */ \n\n/* \nh4{\n  background-color: aqua;\n} */\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXl1cnZlZGljL2F5dXJ2ZWRpYy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBRUE7O0lBRUksOENBQThDOztDQUVqRDs7QUFFRDs7OztJQUlJOztBQUlKOzs7R0FHRyIsImZpbGUiOiJzcmMvYXBwL2F5dXJ2ZWRpYy9heXVydmVkaWMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuXG4uYm94ZWQge1xuICAgIFxuICAgIGZvbnQtZmFtaWx5OiAnQ291cmllciBOZXcnLCBDb3VyaWVyLCBtb25vc3BhY2U7XG5cbiB9IFxuXG4vKiBcbi5jb2wtbWQtNHtcbiBcbiAgYmFja2dyb3VuZC1jb2xvcjogZ2FpbnNib3JvO1xufSAgKi9cblxuXG5cbi8qIFxuaDR7XG4gIGJhY2tncm91bmQtY29sb3I6IGFxdWE7XG59ICovIl19 */");

/***/ }),

/***/ "./src/app/ayurvedic/ayurvedic.component.service.ts":
/*!**********************************************************!*\
  !*** ./src/app/ayurvedic/ayurvedic.component.service.ts ***!
  \**********************************************************/
/*! exports provided: AyurvedicService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AyurvedicService", function() { return AyurvedicService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");



let AyurvedicService = class AyurvedicService {
    constructor(httpClient) {
        this.httpClient = httpClient;
        this.url = 'http://localhost:4000/MRlogin/ayurvedic';
    }
    getAyurvedic() {
        return this.httpClient.get(this.url);
    }
};
AyurvedicService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
AyurvedicService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], AyurvedicService);



/***/ }),

/***/ "./src/app/ayurvedic/ayurvedic.component.ts":
/*!**************************************************!*\
  !*** ./src/app/ayurvedic/ayurvedic.component.ts ***!
  \**************************************************/
/*! exports provided: AyurvedicComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AyurvedicComponent", function() { return AyurvedicComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ayurvedic_component_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ayurvedic.component.service */ "./src/app/ayurvedic/ayurvedic.component.service.ts");




let AyurvedicComponent = class AyurvedicComponent {
    constructor(router, productservice, service) {
        this.router = router;
        this.productservice = productservice;
        this.service = service;
        this.loadflag();
        this.loadAllProducts();
    }
    loadAllProducts() {
        this.service
            .getAyurvedic()
            .subscribe(response => {
            if (response['status'] == 'success') {
                this.Ayurvedic = response['data'];
            }
            else {
                alert('error');
            }
        });
        localStorage['onBack'] = 'ayurvedic';
    }
    loadflag() {
        if (localStorage['flag'] == '0') {
            window.location.reload();
            localStorage['flag'] = '1';
        }
    }
    ngOnInit() {
    }
    OnSelectProduct(id) {
        this.router.navigate(['/MRlogin/product_details/' + id]);
    }
};
AyurvedicComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _ayurvedic_component_service__WEBPACK_IMPORTED_MODULE_3__["AyurvedicService"] },
    { type: _ayurvedic_component_service__WEBPACK_IMPORTED_MODULE_3__["AyurvedicService"] }
];
AyurvedicComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'ayurvedic',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./ayurvedic.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/ayurvedic/ayurvedic.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./ayurvedic.component.css */ "./src/app/ayurvedic/ayurvedic.component.css")).default]
    })
], AyurvedicComponent);



/***/ }),

/***/ "./src/app/dashboard/dashboard.component.css":
/*!***************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.css ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Rhc2hib2FyZC9kYXNoYm9hcmQuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/dashboard/dashboard.component.ts":
/*!**************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.ts ***!
  \**************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");



let DashboardComponent = class DashboardComponent {
    constructor(router) {
        this.router = router;
    }
    onlogout() {
        this.router.navigate(['/login']);
    }
    ngOnInit() { }
};
DashboardComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
DashboardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'dashboard',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./dashboard.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard/dashboard.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./dashboard.component.css */ "./src/app/dashboard/dashboard.component.css")).default]
    })
], DashboardComponent);



/***/ }),

/***/ "./src/app/doctor_list/doctor_list.component.css":
/*!*******************************************************!*\
  !*** ./src/app/doctor_list/doctor_list.component.css ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2RvY3Rvcl9saXN0L2RvY3Rvcl9saXN0LmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/doctor_list/doctor_list.component.ts":
/*!******************************************************!*\
  !*** ./src/app/doctor_list/doctor_list.component.ts ***!
  \******************************************************/
/*! exports provided: DoctorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DoctorComponent", function() { return DoctorComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _dr_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dr.service */ "./src/app/doctor_list/dr.service.ts");




let DoctorComponent = class DoctorComponent {
    constructor(router, drservice, service) {
        this.router = router;
        this.service = service;
        drservice.getdr().subscribe((response) => {
            if (response['status'] == 'success') {
                this.drs = response['data'];
            }
            else {
                alert('error');
                console.log(response['error']);
            }
        });
    }
    loadAllProducts() {
        this.service
            .getAllProducts()
            .subscribe(response => {
            if (response['status'] == 'success') {
                this.drs = response['data'];
            }
            else {
                alert('error');
            }
        });
    }
    ondelete(productId) {
        this.service
            .deleteProduct(productId)
            .subscribe(response => {
            if (response['status'] == 'success') {
                this.loadAllProducts();
            }
            else {
                console.log(response['error']);
            }
        });
    }
    onAddDR() {
        this.router.navigate(['/login/dashboard/drs/add_dr']);
    }
    dashboard() {
        this.router.navigate(['/login/dashboard']);
    }
};
DoctorComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _dr_service__WEBPACK_IMPORTED_MODULE_3__["DrService"] },
    { type: _dr_service__WEBPACK_IMPORTED_MODULE_3__["DrService"] }
];
DoctorComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'doctor-list',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./doctor_list.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/doctor_list/doctor_list.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./doctor_list.component.css */ "./src/app/doctor_list/doctor_list.component.css")).default]
    })
], DoctorComponent);



/***/ }),

/***/ "./src/app/doctor_list/dr.service.ts":
/*!*******************************************!*\
  !*** ./src/app/doctor_list/dr.service.ts ***!
  \*******************************************/
/*! exports provided: DrService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DrService", function() { return DrService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");



let DrService = class DrService {
    constructor(httpClient) {
        this.url = 'http://localhost:4000/login/dashboard/dr'; //express port 4000
        this.http = httpClient;
    }
    getdr() {
        return this.http.get(this.url);
    }
    getAllProducts() {
        return this.http.get(this.url);
    }
    deleteProduct(id) {
        return this.http.delete(this.url + '/' + id);
    }
};
DrService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
DrService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], DrService);



/***/ }),

/***/ "./src/app/edit_product/edit_product.component.css":
/*!*********************************************************!*\
  !*** ./src/app/edit_product/edit_product.component.css ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\nh1{\n    text-align: center\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZWRpdF9wcm9kdWN0L2VkaXRfcHJvZHVjdC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQTtJQUNJO0FBQ0oiLCJmaWxlIjoic3JjL2FwcC9lZGl0X3Byb2R1Y3QvZWRpdF9wcm9kdWN0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbmgxe1xuICAgIHRleHQtYWxpZ246IGNlbnRlclxufSJdfQ== */");

/***/ }),

/***/ "./src/app/edit_product/edit_product.component.ts":
/*!********************************************************!*\
  !*** ./src/app/edit_product/edit_product.component.ts ***!
  \********************************************************/
/*! exports provided: Edit_productComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Edit_productComponent", function() { return Edit_productComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _edit_product_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./edit_product.service */ "./src/app/edit_product/edit_product.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");




let Edit_productComponent = class Edit_productComponent {
    constructor(service, router, activatedRoute, catservice) {
        this.service = service;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.catservice = catservice;
        this.cat = [];
        this.categoryid = 0;
        this.name = '';
        this.price = 0;
        this.discount = 0;
        this.priceWithDiscount = 0;
        this.doseInMG = 0;
        this.mgfdate = null;
        this.expiredate = null;
        this.description = '';
        this.id = 0;
        this.id = this.activatedRoute.snapshot.params['id'];
        if (this.id) {
            this.service.getUserDetails(this.id).subscribe(response => {
                if (response['status'] == 'success') {
                    const user = response['data'];
                    this.name = user[0].name;
                    this.price = user[0].price;
                    this.discount = user[0].discount;
                    this.priceWithDiscount = user[0].priceWithDiscount;
                    this.doseInMG = user[0].doseInMG;
                    this.mgfdate = user[0].mgfdate;
                    this.expiredate = user[0].expiredate;
                    this.description = user[0].description;
                }
                else {
                    console.log(response['error']);
                }
            });
        }
    }
    ngOnInit() {
        this.loadCategories();
    }
    loadCategories() {
        this.catservice.getCategories().subscribe(response => {
            if (response['status'] == 'success') {
                this.cat = response['data'];
                if (this.cat.length > 0)
                    this.categoryid = this.cat[0].id;
            }
        });
    }
    onUpdate() {
        this.service
            .edit_Product(this.name, this.price, this.discount, this.priceWithDiscount, this.doseInMG, this.mgfdate, this.expiredate, this.description, this.categoryid, this.id)
            .subscribe(response => {
            if (response['status'] == 'success') {
                alert('product-updated');
                this.router.navigate(['/login/dashboard/product']);
            }
            else {
                console.log(response['error']);
                alert("error");
                //toastr.error(response['error'])
            }
        });
    }
};
Edit_productComponent.ctorParameters = () => [
    { type: _edit_product_service__WEBPACK_IMPORTED_MODULE_2__["EditProductService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _edit_product_service__WEBPACK_IMPORTED_MODULE_2__["EditProductService"] }
];
Edit_productComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'edit_product-app',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./edit_product.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/edit_product/edit_product.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./edit_product.component.css */ "./src/app/edit_product/edit_product.component.css")).default]
    })
], Edit_productComponent);



/***/ }),

/***/ "./src/app/edit_product/edit_product.service.ts":
/*!******************************************************!*\
  !*** ./src/app/edit_product/edit_product.service.ts ***!
  \******************************************************/
/*! exports provided: EditProductService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditProductService", function() { return EditProductService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");



let EditProductService = class EditProductService {
    constructor(http, http1) {
        this.http = http;
        this.http1 = http1;
        this.url = 'http://localhost:4000/login/dashboard/product/edit_product';
        this.url1 = 'http://localhost:4000/category';
    }
    edit_Product(name, price, discount, priceWithDiscount, doseInMG, mgfdate, expiredate, description, categoryid, id) {
        const body = {
            name: name,
            price: price,
            discount: discount,
            priceWithDiscount: priceWithDiscount,
            doseInMG: doseInMG,
            mgfdate: mgfdate,
            expiredate: expiredate,
            description: description,
            categoryid: categoryid,
            id: id
        };
        return this.http.put(this.url + '/' + id, body);
    }
    getUserDetails(id) {
        return this.http.get(this.url + '/' + id);
    }
    getCategories() {
        return this.http1.get(this.url1);
    }
};
EditProductService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
EditProductService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], EditProductService);



/***/ }),

/***/ "./src/app/edit_user/edit_user.component.css":
/*!***************************************************!*\
  !*** ./src/app/edit_user/edit_user.component.css ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\nh1{\n    text-align: center\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZWRpdF91c2VyL2VkaXRfdXNlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQTtJQUNJO0FBQ0oiLCJmaWxlIjoic3JjL2FwcC9lZGl0X3VzZXIvZWRpdF91c2VyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbmgxe1xuICAgIHRleHQtYWxpZ246IGNlbnRlclxufSJdfQ== */");

/***/ }),

/***/ "./src/app/edit_user/edit_user.component.ts":
/*!**************************************************!*\
  !*** ./src/app/edit_user/edit_user.component.ts ***!
  \**************************************************/
/*! exports provided: Edit_userComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Edit_userComponent", function() { return Edit_userComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _edit_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./edit_user.service */ "./src/app/edit_user/edit_user.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");




let Edit_userComponent = class Edit_userComponent {
    constructor(movieService, service, router, activatedRoute) {
        this.movieService = movieService;
        this.service = service;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.username = '';
        this.firstname = '';
        this.lastname = '';
        this.joindate = '';
        this.phoneno = '';
        this.email = '';
        this.password = '';
        this.id = 0;
        this.exist = 0;
        this.id = this.activatedRoute.snapshot.params['id'];
        if (this.id) {
            this.service.getUserDetails(this.id).subscribe(response => {
                if (response['status'] == 'success') {
                    const user = response['data'];
                    this.username = user[0].username;
                    this.firstname = user[0].firstname;
                    this.lastname = user[0].lastname;
                    this.joindate = user[0].joindate;
                    this.phoneno = user[0].phoneno;
                    this.email = user[0].email;
                    this.password = user[0].password;
                }
                else {
                    console.log(response['error']);
                }
            });
        }
    }
    ngOnInit() { }
    onUpdate() {
        this.movieService
            .edit_movie(this.username, this.firstname, this.lastname, this.joindate, this.phoneno, this.email, this.password, this.id, this.exist)
            .subscribe(response => {
            if (response['status'] == 'success') {
                alert('user-updated');
                this.router.navigate(['/login/dashboard/user']);
            }
            else {
                console.log(response['error']);
                alert("error");
                //toastr.error(response['error'])
            }
        });
    }
};
Edit_userComponent.ctorParameters = () => [
    { type: _edit_user_service__WEBPACK_IMPORTED_MODULE_2__["EditUserService"] },
    { type: _edit_user_service__WEBPACK_IMPORTED_MODULE_2__["EditUserService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }
];
Edit_userComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'edit_user-app',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./edit_user.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/edit_user/edit_user.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./edit_user.component.css */ "./src/app/edit_user/edit_user.component.css")).default]
    })
], Edit_userComponent);



/***/ }),

/***/ "./src/app/edit_user/edit_user.service.ts":
/*!************************************************!*\
  !*** ./src/app/edit_user/edit_user.service.ts ***!
  \************************************************/
/*! exports provided: EditUserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditUserService", function() { return EditUserService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");



let EditUserService = class EditUserService {
    constructor(http) {
        this.http = http;
        this.url = 'http://localhost:4000/login/dashboard/user/edit_user';
    }
    edit_movie(username, firstname, lastname, joindate, phoneno, email, password, id, exist) {
        const body = {
            username: username,
            firstname: firstname,
            lastname: lastname,
            joindate: joindate,
            phoneno: phoneno,
            email: email,
            password: password,
            id: id,
            exist: exist
        };
        return this.http.put(this.url + '/' + id, body);
    }
    getUserDetails(id) {
        return this.http.get(this.url + '/' + id);
    }
};
EditUserService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
EditUserService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], EditUserService);



/***/ }),

/***/ "./src/app/homoeopathy/homoeopathy.component.css":
/*!*******************************************************!*\
  !*** ./src/app/homoeopathy/homoeopathy.component.css ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n\n.boxed {\n    \n    font-family: 'Courier New', Courier, monospace;\n\n } \n\n/* \n.col-md-4{\n \n  background-color: gainsboro;\n}  */ \n\n/* \nh4{\n  background-color: aqua;\n} */\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tb2VvcGF0aHkvaG9tb2VvcGF0aHkuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUVBOztJQUVJLDhDQUE4Qzs7Q0FFakQ7O0FBRUQ7Ozs7SUFJSTs7QUFJSjs7O0dBR0ciLCJmaWxlIjoic3JjL2FwcC9ob21vZW9wYXRoeS9ob21vZW9wYXRoeS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG5cbi5ib3hlZCB7XG4gICAgXG4gICAgZm9udC1mYW1pbHk6ICdDb3VyaWVyIE5ldycsIENvdXJpZXIsIG1vbm9zcGFjZTtcblxuIH0gXG5cbi8qIFxuLmNvbC1tZC00e1xuIFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBnYWluc2Jvcm87XG59ICAqL1xuXG5cblxuLyogXG5oNHtcbiAgYmFja2dyb3VuZC1jb2xvcjogYXF1YTtcbn0gKi8iXX0= */");

/***/ }),

/***/ "./src/app/homoeopathy/homoeopathy.component.service.ts":
/*!**************************************************************!*\
  !*** ./src/app/homoeopathy/homoeopathy.component.service.ts ***!
  \**************************************************************/
/*! exports provided: HomoeopathyService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomoeopathyService", function() { return HomoeopathyService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");



let HomoeopathyService = class HomoeopathyService {
    constructor(httpClient) {
        this.httpClient = httpClient;
        this.url = 'http://localhost:4000/MRlogin/homoeopathy';
    }
    getHomoeopathy() {
        return this.httpClient.get(this.url);
    }
};
HomoeopathyService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
HomoeopathyService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], HomoeopathyService);



/***/ }),

/***/ "./src/app/homoeopathy/homoeopathy.component.ts":
/*!******************************************************!*\
  !*** ./src/app/homoeopathy/homoeopathy.component.ts ***!
  \******************************************************/
/*! exports provided: HomoeopathyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomoeopathyComponent", function() { return HomoeopathyComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _homoeopathy_component_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./homoeopathy.component.service */ "./src/app/homoeopathy/homoeopathy.component.service.ts");




let HomoeopathyComponent = class HomoeopathyComponent {
    constructor(router, productservice, service) {
        this.router = router;
        this.productservice = productservice;
        this.service = service;
        this.loadflag();
        this.loadAllProducts();
    }
    loadAllProducts() {
        this.service
            .getHomoeopathy()
            .subscribe(response => {
            if (response['status'] == 'success') {
                this.Homoeopathy = response['data'];
            }
            else {
                alert('error');
            }
        });
        localStorage['onBack'] = 'homo';
    }
    loadflag() {
        if (localStorage['flag'] == '0') {
            window.location.reload();
            localStorage['flag'] = '1';
        }
    }
    ngOnInit() {
    }
    OnSelectProduct(id) {
        this.router.navigate(['/MRlogin/product_details/' + id]);
    }
};
HomoeopathyComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _homoeopathy_component_service__WEBPACK_IMPORTED_MODULE_3__["HomoeopathyService"] },
    { type: _homoeopathy_component_service__WEBPACK_IMPORTED_MODULE_3__["HomoeopathyService"] }
];
HomoeopathyComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'Homoeopathy',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./homoeopathy.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/homoeopathy/homoeopathy.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./homoeopathy.component.css */ "./src/app/homoeopathy/homoeopathy.component.css")).default]
    })
], HomoeopathyComponent);



/***/ }),

/***/ "./src/app/login/login.component.css":
/*!*******************************************!*\
  !*** ./src/app/login/login.component.css ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./user.service */ "./src/app/login/user.service.ts");




let LoginComponent = class LoginComponent {
    constructor(router, userService, service) {
        this.router = router;
        this.service = service;
        userService.getUsers().subscribe((response) => {
            if (response['status'] == 'success') {
                this.users = response['data'];
            }
            else {
                alert('error');
                console.log(response['error']);
            }
        });
    }
    loadAllProducts() {
        this.service
            .getAllProducts()
            .subscribe(response => {
            if (response['status'] == 'success') {
                this.users = response['data'];
            }
            else {
                alert('error');
            }
        });
    }
    onUserSelect(id) {
        this.router.navigate(['/login/dashboard/user/edit_user/' + id]);
    }
    ondelete(productId) {
        this.service
            .deleteProduct(productId)
            .subscribe(response => {
            if (response['status'] == 'success') {
                this.loadAllProducts();
            }
            else {
                console.log(response['error']);
            }
        });
    }
    onAdduser() {
        this.router.navigate(['/login/dashboard/user/add_user']);
    }
    dashboard() {
        this.router.navigate(['/login/dashboard']);
    }
    onOrderList(id) {
        this.router.navigate(['/MRlogin/dashboard/MRorders' + '/' + id]);
    }
    ngOnInit() { }
};
LoginComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"] },
    { type: _user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"] }
];
LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'login-page',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./login.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./login.component.css */ "./src/app/login/login.component.css")).default]
    })
], LoginComponent);



/***/ }),

/***/ "./src/app/login/user.service.ts":
/*!***************************************!*\
  !*** ./src/app/login/user.service.ts ***!
  \***************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");



let UserService = class UserService {
    constructor(httpClient) {
        this.url = 'http://localhost:4000/login/dashboard/user'; //express port 4000
        this.http = httpClient;
    }
    getAllProducts() {
        return this.http.get(this.url);
    }
    getUsers() {
        return this.http.get(this.url);
    }
    deleteProduct(id) {
        return this.http.delete(this.url + '/' + id);
    }
};
UserService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
UserService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], UserService);



/***/ }),

/***/ "./src/app/product_details/product_details.component.css":
/*!***************************************************************!*\
  !*** ./src/app/product_details/product_details.component.css ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n.color{\n     background-color:moccasin; \n    /* background-color:whitesmoke;  */\n}\n.boxed {\n    \n    font-family: 'Courier New', Courier, monospace;\n\n }\n.stepper{\n     font-size: 20px;\n }\n\n \n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvZHVjdF9kZXRhaWxzL3Byb2R1Y3RfZGV0YWlscy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQTtLQUNLLHlCQUF5QjtJQUMxQixrQ0FBa0M7QUFDdEM7QUFDQTs7SUFFSSw4Q0FBOEM7O0NBRWpEO0FBRUE7S0FDSSxlQUFlO0NBQ25CIiwiZmlsZSI6InNyYy9hcHAvcHJvZHVjdF9kZXRhaWxzL3Byb2R1Y3RfZGV0YWlscy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG4uY29sb3J7XG4gICAgIGJhY2tncm91bmQtY29sb3I6bW9jY2FzaW47IFxuICAgIC8qIGJhY2tncm91bmQtY29sb3I6d2hpdGVzbW9rZTsgICovXG59XG4uYm94ZWQge1xuICAgIFxuICAgIGZvbnQtZmFtaWx5OiAnQ291cmllciBOZXcnLCBDb3VyaWVyLCBtb25vc3BhY2U7XG5cbiB9IFxuIFxuIC5zdGVwcGVye1xuICAgICBmb250LXNpemU6IDIwcHg7XG4gfVxuXG4gIl19 */");

/***/ }),

/***/ "./src/app/product_details/product_details.component.service.ts":
/*!**********************************************************************!*\
  !*** ./src/app/product_details/product_details.component.service.ts ***!
  \**********************************************************************/
/*! exports provided: ProductDetailsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductDetailsService", function() { return ProductDetailsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");



let ProductDetailsService = class ProductDetailsService {
    constructor(httpClient) {
        this.httpClient = httpClient;
        this.url = 'http://localhost:4000/login/dashboard/product/';
        this.url1 = 'http://localhost:4000/MRlogin/cart';
    }
    getProduct(id) {
        return this.httpClient.get(this.url + id);
    }
    postInCart(Quantity, totalAmount, totalDiscount, MRid, productID) {
        const body = {
            Quantity: Quantity,
            totalAmount: totalAmount,
            totalDiscount: totalDiscount,
            MRid: MRid,
            productID: productID
        };
        return this.httpClient.post(this.url1, body);
    }
};
ProductDetailsService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
ProductDetailsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], ProductDetailsService);



/***/ }),

/***/ "./src/app/product_details/product_details.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/product_details/product_details.component.ts ***!
  \**************************************************************/
/*! exports provided: ProductDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductDetailsComponent", function() { return ProductDetailsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _product_details_component_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./product_details.component.service */ "./src/app/product_details/product_details.component.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");




let ProductDetailsComponent = class ProductDetailsComponent {
    constructor(service, activateRoute, cartService, route) {
        this.service = service;
        this.activateRoute = activateRoute;
        this.cartService = cartService;
        this.route = route;
        this.count = 1;
        this.id = this.activateRoute.snapshot.params['id'];
        if (this.id) {
            this.service.getProduct(this.id).subscribe(response => {
                if (response['status'] == 'success') {
                    this.product = response['data'][0];
                    this.rate = this.product.priceWithDiscount;
                    this.temp = this.rate;
                }
            });
        }
    }
    OnIncrement() {
        this.count = this.count + 1;
        this.rate = this.temp * this.count;
    }
    OnDecrement() {
        if (this.count == 1) {
            alert('Can not decrement');
        }
        else {
            this.count = this.count - 1;
            this.rate = this.temp * this.count;
        }
    }
    onAddToCart() {
        if (localStorage['login_status'] == '0') {
            alert('You need to login first');
            this.route.navigate(['/MRlogin']);
        }
        else {
            if (confirm('Do You want to add itmes')) {
                this.MRid = localStorage['id'];
                this.totalDiscount = (this.product.price * this.count) - this.rate;
                this.cartService.postInCart(this.count, this.rate, this.totalDiscount, this.MRid, this.id)
                    .subscribe(response => {
                    if (response['status'] == 'success') {
                        alert('items added in your cart');
                    }
                });
            }
        }
    }
    OnOrderNow() {
    }
    OnBack() {
        if (localStorage['onBack'] == 'allopathic') {
            this.route.navigate(['/MRlogin/allopathic']);
        }
        else if (localStorage['onBack'] == 'ayurvedic') {
            this.route.navigate(['/MRlogin/ayurvedic']);
        }
        else if (localStorage['onBack'] == 'homo') {
            this.route.navigate(['/MRlogin/homoeopathy']);
        }
        else if (localStorage['onBack'] == 'searchProduct') {
            this.route.navigate(['/MRlogin/search']);
        }
        else {
            this.route.navigate(['/MRlogin/home']);
        }
    }
    ngOnInit() { }
};
ProductDetailsComponent.ctorParameters = () => [
    { type: _product_details_component_service__WEBPACK_IMPORTED_MODULE_2__["ProductDetailsService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _product_details_component_service__WEBPACK_IMPORTED_MODULE_2__["ProductDetailsService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
ProductDetailsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'product_details',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./product_details.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/product_details/product_details.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./product_details.component.css */ "./src/app/product_details/product_details.component.css")).default]
    })
], ProductDetailsComponent);



/***/ }),

/***/ "./src/app/product_list/product.service.ts":
/*!*************************************************!*\
  !*** ./src/app/product_list/product.service.ts ***!
  \*************************************************/
/*! exports provided: ProductService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductService", function() { return ProductService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");



let ProductService = class ProductService {
    constructor(httpClient) {
        this.url = 'http://localhost:4000/login/dashboard/product'; //express port 4000
        this.http = httpClient;
    }
    getAllProducts() {
        return this.http.get(this.url);
    }
    getproduct() {
        return this.http.get(this.url);
    }
    deleteProduct(id) {
        return this.http.delete(this.url + '/' + id);
    }
};
ProductService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
ProductService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], ProductService);



/***/ }),

/***/ "./src/app/product_list/product_list.component.css":
/*!*********************************************************!*\
  !*** ./src/app/product_list/product_list.component.css ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n.thumbnail {\n    width: 40px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvZHVjdF9saXN0L3Byb2R1Y3RfbGlzdC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQTtJQUNJLFdBQVc7QUFDZiIsImZpbGUiOiJzcmMvYXBwL3Byb2R1Y3RfbGlzdC9wcm9kdWN0X2xpc3QuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuLnRodW1ibmFpbCB7XG4gICAgd2lkdGg6IDQwcHg7XG59Il19 */");

/***/ }),

/***/ "./src/app/product_list/product_list.component.ts":
/*!********************************************************!*\
  !*** ./src/app/product_list/product_list.component.ts ***!
  \********************************************************/
/*! exports provided: ProductComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductComponent", function() { return ProductComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _product_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./product.service */ "./src/app/product_list/product.service.ts");




let ProductComponent = class ProductComponent {
    constructor(router, productservice, service) {
        this.router = router;
        this.service = service;
        productservice.getproduct().subscribe((response) => {
            if (response['status'] == 'success') {
                this.products = response['data'];
            }
            else {
                alert('error');
                console.log(response['error']);
            }
        });
        this.loadAllProducts();
    }
    onAddProduct() {
        this.router.navigate(['/login/dashboard/product/add_product']);
    }
    dashboard() {
        this.router.navigate(['/login/dashboard']);
    }
    loadAllProducts() {
        this.service
            .getAllProducts()
            .subscribe(response => {
            if (response['status'] == 'success') {
                this.products = response['data'];
            }
            else {
                alert('error');
            }
        });
    }
    ondelete(productId) {
        this.service
            .deleteProduct(productId)
            .subscribe(response => {
            if (response['status'] == 'success') {
                this.loadAllProducts();
            }
            else {
                console.log(response['error']);
            }
        });
    }
    onSelect(id) {
        this.router.navigate(['/login/dashboard/product/edit_product/' + id]);
    }
};
ProductComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _product_service__WEBPACK_IMPORTED_MODULE_3__["ProductService"] },
    { type: _product_service__WEBPACK_IMPORTED_MODULE_3__["ProductService"] }
];
ProductComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'doctor-list',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./product_list.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/product_list/product_list.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./product_list.component.css */ "./src/app/product_list/product_list.component.css")).default]
    })
], ProductComponent);



/***/ }),

/***/ "./src/app/user_home/user_home.component.css":
/*!***************************************************!*\
  !*** ./src/app/user_home/user_home.component.css ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n\n.boxed {\n    \n    font-family: 'Courier New', Courier, monospace;\n\n } \n\n/* \n.col-md-4{\n \n  background-color: gainsboro;\n}  */ \n\n/* \nh4{\n  background-color: aqua;\n} */\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXNlcl9ob21lL3VzZXJfaG9tZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBRUE7O0lBRUksOENBQThDOztDQUVqRDs7QUFFRDs7OztJQUlJOztBQUlKOzs7R0FHRyIsImZpbGUiOiJzcmMvYXBwL3VzZXJfaG9tZS91c2VyX2hvbWUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuXG4uYm94ZWQge1xuICAgIFxuICAgIGZvbnQtZmFtaWx5OiAnQ291cmllciBOZXcnLCBDb3VyaWVyLCBtb25vc3BhY2U7XG5cbiB9IFxuXG4vKiBcbi5jb2wtbWQtNHtcbiBcbiAgYmFja2dyb3VuZC1jb2xvcjogZ2FpbnNib3JvO1xufSAgKi9cblxuXG5cbi8qIFxuaDR7XG4gIGJhY2tncm91bmQtY29sb3I6IGFxdWE7XG59ICovIl19 */");

/***/ }),

/***/ "./src/app/user_home/user_home.component.service.ts":
/*!**********************************************************!*\
  !*** ./src/app/user_home/user_home.component.service.ts ***!
  \**********************************************************/
/*! exports provided: GetProductService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetProductService", function() { return GetProductService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");



let GetProductService = class GetProductService {
    constructor(httpClient) {
        this.httpClient = httpClient;
        this.url = 'http://localhost:4000/login/dashboard/product';
    }
    getAllProducts() {
        return this.httpClient.get(this.url);
    }
    getproduct() {
        return this.httpClient.get(this.url);
    }
};
GetProductService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
GetProductService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], GetProductService);



/***/ }),

/***/ "./src/app/user_home/user_home.component.ts":
/*!**************************************************!*\
  !*** ./src/app/user_home/user_home.component.ts ***!
  \**************************************************/
/*! exports provided: UserHomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserHomeComponent", function() { return UserHomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _user_home_component_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./user_home.component.service */ "./src/app/user_home/user_home.component.service.ts");




let UserHomeComponent = class UserHomeComponent {
    constructor(router, productservice, service) {
        this.router = router;
        this.productservice = productservice;
        this.service = service;
        this.loadflag();
        if (localStorage['login_status'] != '0') {
            this.username = localStorage['username'];
        }
        productservice.getproduct().subscribe((response) => {
            if (response['status'] == 'success') {
                this.Allproducts = response['data'];
            }
            else {
                alert('error');
                console.log(response['error']);
            }
        });
        this.loadAllProducts();
    }
    loadAllProducts() {
        this.service
            .getAllProducts()
            .subscribe(response => {
            if (response['status'] == 'success') {
                this.Allproducts = response['data'];
            }
            else {
                alert('error');
            }
        });
        localStorage['onBack'] = 'user';
    }
    loadflag() {
        if (localStorage['flag'] == '0') {
            window.location.reload();
            localStorage['flag'] = '1';
        }
    }
    ngOnInit() {
    }
    OnSelectProduct(id) {
        this.router.navigate(['/MRlogin/product_details/' + id]);
    }
};
UserHomeComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _user_home_component_service__WEBPACK_IMPORTED_MODULE_3__["GetProductService"] },
    { type: _user_home_component_service__WEBPACK_IMPORTED_MODULE_3__["GetProductService"] }
];
UserHomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'userHome',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./user_home.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/user_home/user_home.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./user_home.component.css */ "./src/app/user_home/user_home.component.css")).default]
    })
], UserHomeComponent);



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\B.V NAIDU\Downloads\MRs_Tracker-master\MRs_Tracker-master\frontSide\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map