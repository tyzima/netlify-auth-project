
var Airtable = require('airtable');
var base = new Airtable({apiKey: '${AIRTABLE_API_KEY}'}).base('appRB6D5YhUGSE9QA');

base('ProductRequests').create([
  {
    "fields": {
      "1": "1",
      "SalesRep": "NL",
      "Date": "2021-06-23",
      "Does this item exist on Lax.com?": "Yes",
      "Gender": "Male",
      "Is this a sku modification?": "No",
      "Accessories ": "Shoulder pads",
      "Vendor": "Maverik ",
      "Brand": "Maverik ",
      "Vendor Item Code/Sku": "Mav-MxEKGSP",
      "Vendor Item Name": "Maverik MX EKG Shoulder Pad",
      "Sizes - (XS-XL)": "S-XL",
      "Colors - (White-100)": "Grey",
      "Wholesale Price": 42.5,
      "Retail Price": 84.99,
      "Netsuite / Salesforce Item Code": "Mav-MxEKGSP-GY"
    }
  }
 
], function(err, records) {
  if (err) {
    console.error(err);
    return;
  }
  records.forEach(function (record) {
    console.log(record.getId());
  });
});



