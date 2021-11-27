//github
//https://github.com/cinder-studio/quick-firestore/blob/master/src/FirestoreOverRest/typedValues.ts

const input = {
    name: "Chris Tester",
    defaultAddress: {
      address1: "123 Main Street",
      address2: null,
      city: "Los Angeles",
      region: "CA",
      postalCode: "90045",
      country: "USA",
    },
    badges: ["big-spender","happy-customer","company-advocate"],
    averageMonthlyRevenue: 224.10,
    counts: {
      activeSubscriptions: 2,
      pastPurchases: 323,
    },
    requiresNewCardInformation: false,
  }

//Access certain attribute
//console.log(input.badges)
//console.log(input['badges'])

//hasOwnProperty
//Validate if exist the attribute inside object
//console.log(input.hasOwnProperty('name'))

//delete
//console.log(delete input.requiresNewCardInformation)
//console.log(input)

//Loop object
//for(let attribute in input){
//  console.log(attribute)
//};
  /*
const expectedOutput = {
  name: {
    stringValue: "Chris Tester"
  },
  defaultAddress: {
    address1: {
      stringValue: "123 Main Street"
    },
    address2: {
      nullValue: null
    },
    city: {
      stringValue: "Los Angeles"
    },
    region: {
      stringValue: "CA"
    },
    postalCode: {
      stringValue: "90045"
    },
    country: {
      stringValue: "USA"
    },
  },
  badges: { arrayValue: [
    { stringValue: "big-spender" }, 
    { stringValue: "happy-customer" }, 
    { stringValue: "company-advocate" }, 
  ] }, 
  averageMonthlyRevenue: {
    doubleValue: 224.10
  },
  counts: {
    activeSubscriptions: {
      integerValue: 2
    },
    pastPurchases: {
      integerValue: 323
    },
  },
  requiresNewCardInformation: {
    booleanValue: false
  },
}
*/
  
  //console.log(input)
  const formattingFunction = (input) => {
        let result = {}
          for(const[key,value] of Object.entries(input)){
            let newStructure = []
            if(getTypeofValue(value) === 'object') {
              let m2 = {
                [key]:value
              }
              /*result = {
                ...m2
              };*/
            }
            else {
              let m = {
                [key]:{
                  [getTypeofValue(value)]:value
                }
              }

              result[key]={
               m
              }
            }
  
          }
        return result;

  }

  const getTypeofValue = (value) => {
    //const typeF = Object.prototype.toString.call(value)
    let typeF = typeof(value);
    switch (typeF) {
      case 'string':
        return typeF = 'stringValue';
      case 'number':
       return typeF = 'integerValue';
       case 'boolean':
        return typeF = 'booleanValue';
      default:
        return typeF;
    }
  }

const output = formattingFunction(input)
console.log(output)