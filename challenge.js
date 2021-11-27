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
        const result = {}

        for(const[key,value] of Object.entries(input)){
            let newStructure= []
           
                newStructure.key ={
                    [key]:{
                        [
                        typeof(value) === 'string' ? 'stringValue': 
                        typeof(value) === 'number' ? 'integerValue': 
                        typeof(value) === 'false' ? 'booleanValue':  
                        typeof(value) === 'true' ? 'booleanValue':  
                        typeof(value) === 'object' ? [key] 
                        : 'nullValue'
                    ] : value 
                    }
                }

                console.log(newStructure)
        }

	//return structure
}

const formatingInside = (input) => { 

}

const output = formattingFunction(input)

console.log(output)