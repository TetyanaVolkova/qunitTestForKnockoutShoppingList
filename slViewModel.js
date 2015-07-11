function ViewModel() {
		var self = this;

		self.shoppingList = ko.observableArray([]);
		self.productName = ko.observable();
		self.on = ko.observable(true);
		self.addProduct = function(){
			
				self.shoppingList.push(
				{
					bought: ko.observable(false),
					product: self.productName()

				});
				self.productName("");
		}
		self.deleteProduct = function(del) {
			//console.log(a1);
			self.shoppingList.remove(del);
		}
		self.deleteButton = function() {
			self.shoppingList.removeAll();
			this.productName("");
		}
	}