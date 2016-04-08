  app.service('mealDataService', [function () {
    var meals = [];
    var totals = {};
      return {
        getMeals: function() {
          return meals;
          },
        getTotals: function() {
          var add = 0;
          for (i=0; i<meals.length; i++) {
            add += meals[i].tip * meals[i].price;
            }
          return {add:add, meals:meals};
          },
        addMeal: function(mealsobj) {
          mealsobj.tax = mealsobj.tax * .01;
          mealsobj.tip = mealsobj.tip * .01;
          var tax = mealsobj.price * mealsobj.tax;
          mealsobj.subtotal =  tax + mealsobj.price;
          mealsobj.tipamount = mealsobj.price * mealsobj.tip;
          mealsobj.total = mealsobj.subtotal + mealsobj.tipamount;
          meals.push(mealsobj);
          return meals;
          },
        resetAll: function() {
          }   
        }
    }]);
