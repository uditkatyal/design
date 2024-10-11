// OCP - Open Closed Principle stand by two disciplines 
// 1) Open to extension
// 2) Closed to modification

// this approach of giving discounts based on customerType is inefficent 
// as if we feel like adding a new GOLD cutomerType we have to modify already existing code 
// and hence it is not closed to modification and also diffcult for extension because changing existing code
// by adding another if check for GOLD might affect already test code (possibly)
// class Discount {
//     getDiscount(customerType : 'premium' | 'regular'): number{
//         if(customerType === 'regular'){
//           return 10;
//         }
//         else if(customerType === 'premium'){
//             return 20;
//         }
//         else return 10;
//     }
// }

// APPROACH which followes OCP
interface Customer {
    giveDiscount():number;
}
class RegularCustomer implements Customer {
    giveDiscount():number {
        return 10;
    }
}

class PremiumCustomer implements Customer{
    giveDiscount():number {
     return 20;    
    }

}

class Discount {
    
    giveDiscount(customer: Customer){
        return customer.giveDiscount()
    }
}

// now incase i want to add GOLD cutomerType
class GoldCustomer implements Customer{
    giveDiscount(): number {
        return 30;
    }
}

let premiumCustomer : PremiumCustomer = new PremiumCustomer();
let discount: Discount = new Discount();
console.log(discount.giveDiscount(premiumCustomer))