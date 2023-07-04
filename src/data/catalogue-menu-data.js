const catalogueData = [
  {
    accountID: "M00001",
    categoryid: "bd1a2d3a-9a51-11e5-80bc-000c295e18a3",
    parentFolder: "",
    code: "00-00000001",
    name: "სასუსნავები",
  },
  {
    accountID: "M00001",
    categoryid: "c40298f3-9a51-11e5-80bc-000c295e18a3",
    parentFolder: "",
    code: "00-00000002",
    name: "სასმელები",
  },
  {
    accountID: "M00001",
    categoryid: "dffcc211-9a51-11e5-80bc-000c295e18a3",
    parentFolder: "",
    code: "00-00000004",
    name: "დაკონსერვებული საქონელი",
  },
  {
    accountID: "M00001",
    categoryid: "f060523b-9a51-11e5-80bc-000c295e18a3",
    parentFolder: "",
    code: "00-00000005",
    name: "თავის მოვლა",
  },
  {
    accountID: "M00001",
    categoryid: "91b296e8-9a52-11e5-80bc-000c295e18a3",
    parentFolder: "",
    code: "00-00000006",
    name: "უალკოჰოლო სასმელები",
  },
  {
    accountID: "M00001",
    categoryid: "91b296e9-9a52-11e5-80bc-000c295e18a3",
    parentFolder: "",
    code: "00-00000007",
    name: "ყავა და ჩაი",
  },
  {
    accountID: "M00001",
    categoryid: "9a28a7e1-9a52-11e5-80bc-000c295e18a3",
    parentFolder: "",
    code: "00-00000008",
    name: "ტკბილეული",
  },
  {
    accountID: "M00001",
    categoryid: "b15112cd-9a52-11e5-80bc-000c295e18a3",
    parentFolder: "",
    code: "00-00000010",
    name: "საოჯახო ქიმია",
  },
  {
    accountID: "M00001",
    categoryid: "1bc7cf7a-9a6d-11e5-80bc-000c295e18a3",
    parentFolder: "",
    code: "00-00000018",
    name: "საყოფაცხოვრებო ნივთები",
  },
  {
    accountID: "M00001",
    categoryid: "b148f6e6-8328-11e6-80c1-005056b569bf",
    parentFolder: "",
    code: "00-00000240",
    name: "პურეული",
  },
  {
    accountID: "M00001",
    categoryid: "29cee4e4-83b3-11e6-80c1-005056b569bf",
    parentFolder: "",
    code: "00-00000244",
    name: "ბაკალეა",
  },
  {
    accountID: "M00001",
    categoryid: "362dfd4b-83b4-11e6-80c1-005056b569bf",
    parentFolder: "",
    code: "00-00000246",
    name: "გაყინული პროდუქცია",
  },
  {
    accountID: "M00001",
    categoryid: "3ccf9951-83b4-11e6-80c1-005056b569bf",
    parentFolder: "",
    code: "00-00000247",
    name: "რძის პროდუქტები & კვერცხი",
  },
  {
    accountID: "M00001",
    categoryid: "44cfb27a-83b4-11e6-80c1-005056b569bf",
    parentFolder: "",
    code: "00-00000248",
    name: "თამბაქო",
  },
  {
    accountID: "M00001",
    categoryid: "f8bff3df-83b7-11e6-80c1-005056b569bf",
    parentFolder: "",
    code: "00-00000297",
    name: "ალკოჰოლური სასმელები",
  },
  {
    accountID: "M00001",
    categoryid: "2c55f690-6e2b-11e8-80ed-8b275c3a4661",
    parentFolder: "",
    code: "00-00000456",
    name: "საკონდიტრო ნაწარმი წონით",
  },
  {
    accountID: "M00001",
    categoryid: "2cf492b7-5481-11e9-80fd-005056b569bf",
    parentFolder: "c40298f3-9a51-11e5-80bc-000c295e18a3",
    code: "00-00000479",
    name: "გაზიანი სასმელები",
  },
  {
    accountID: "M00001",
    categoryid: "5e0f8b88-f2fb-11ed-8120-005056b5a0aa",
    parentFolder: "",
    code: "00-00003512",
    name: "ხილ-ბოსტანი",
  },
  {
    accountID: "M00001",
    categoryid: "4eca0fc3-f307-11ed-8120-005056b5a0aa",
    parentFolder: "5e0f8b88-f2fb-11ed-8120-005056b5a0aa",
    code: "00-00003514",
    name: "იმპორტული ხილი",
  },
  {
    accountID: "M00001",
    categoryid: "4eca0fc4-f307-11ed-8120-005056b5a0aa",
    parentFolder: "5e0f8b88-f2fb-11ed-8120-005056b5a0aa",
    code: "00-00003515",
    name: "ქართული ხილი",
  },
  {
    accountID: "M00001",
    categoryid: "598975a0-f307-11ed-8120-005056b5a0aa",
    parentFolder: "5e0f8b88-f2fb-11ed-8120-005056b5a0aa",
    code: "00-00003516",
    name: "იმპორტული ბოსტნეული",
  },
  {
    accountID: "M00001",
    categoryid: "598975a1-f307-11ed-8120-005056b5a0aa",
    parentFolder: "5e0f8b88-f2fb-11ed-8120-005056b5a0aa",
    code: "00-00003517",
    name: "ქართული ბოსტნეული",
  },
  {
    accountID: "M00001",
    categoryid: "63dd8fc0-f307-11ed-8120-005056b5a0aa",
    parentFolder: "5e0f8b88-f2fb-11ed-8120-005056b5a0aa",
    code: "00-00003518",
    name: "დაფასოებული ხილი",
  },
  {
    accountID: "M00001",
    categoryid: "63dd8fc1-f307-11ed-8120-005056b5a0aa",
    parentFolder: "5e0f8b88-f2fb-11ed-8120-005056b5a0aa",
    code: "00-00003519",
    name: "დაფასოებული ბოსტნეული",
  },
  {
    accountID: "M00001",
    categoryid: "6df86f6d-f307-11ed-8120-005056b5a0aa",
    parentFolder: "5e0f8b88-f2fb-11ed-8120-005056b5a0aa",
    code: "00-00003520",
    name: "ასაწონი თხილეული",
  },
  {
    accountID: "M00001",
    categoryid: "6df86f6e-f307-11ed-8120-005056b5a0aa",
    parentFolder: "5e0f8b88-f2fb-11ed-8120-005056b5a0aa",
    code: "00-00003521",
    name: "ასაწონი ჩირი",
  },
  {
    accountID: "M00001",
    categoryid: "76ee103c-f307-11ed-8120-005056b5a0aa",
    parentFolder: "5e0f8b88-f2fb-11ed-8120-005056b5a0aa",
    code: "00-00003522",
    name: "ოთახის ყვავილები",
  },
  {
    accountID: "M00001",
    categoryid: "8165ec2e-f307-11ed-8120-005056b5a0aa",
    parentFolder: "29cee4e4-83b3-11e6-80c1-005056b569bf",
    code: "00-00003523",
    name: "ჯემები და მურაბები",
  },
  {
    accountID: "M00001",
    categoryid: "888d0281-f307-11ed-8120-005056b5a0aa",
    parentFolder: "29cee4e4-83b3-11e6-80c1-005056b569bf",
    code: "00-00003524",
    name: "ფქვილი",
  },
  {
    accountID: "M00001",
    categoryid: "888d0282-f307-11ed-8120-005056b5a0aa",
    parentFolder: "29cee4e4-83b3-11e6-80c1-005056b569bf",
    code: "00-00003525",
    name: "ბურღულეული",
  },
  {
    accountID: "M00001",
    categoryid: "903012fb-f307-11ed-8120-005056b5a0aa",
    parentFolder: "29cee4e4-83b3-11e6-80c1-005056b569bf",
    code: "00-00003526",
    name: "შაქარი",
  },
  {
    accountID: "M00001",
    categoryid: "903012fc-f307-11ed-8120-005056b5a0aa",
    parentFolder: "29cee4e4-83b3-11e6-80c1-005056b569bf",
    code: "00-00003527",
    name: "მარილი",
  },
  {
    accountID: "M00001",
    categoryid: "9979083a-f307-11ed-8120-005056b5a0aa",
    parentFolder: "29cee4e4-83b3-11e6-80c1-005056b569bf",
    code: "00-00003528",
    name: "ზეთი",
  },
  {
    accountID: "M00001",
    categoryid: "9979083b-f307-11ed-8120-005056b5a0aa",
    parentFolder: "29cee4e4-83b3-11e6-80c1-005056b569bf",
    code: "00-00003529",
    name: "მაკარონი",
  },
  {
    accountID: "M00001",
    categoryid: "a0b0cda8-f307-11ed-8120-005056b5a0aa",
    parentFolder: "29cee4e4-83b3-11e6-80c1-005056b569bf",
    code: "00-00003530",
    name: "ბრინჯი",
  },
  {
    accountID: "M00001",
    categoryid: "a0b0cda9-f307-11ed-8120-005056b5a0aa",
    parentFolder: "29cee4e4-83b3-11e6-80c1-005056b569bf",
    code: "00-00003531",
    name: "წიწიბურა",
  },
  {
    accountID: "M00001",
    categoryid: "a9c3093a-f307-11ed-8120-005056b5a0aa",
    parentFolder: "29cee4e4-83b3-11e6-80c1-005056b569bf",
    code: "00-00003532",
    name: "საწებლები, სოუსები",
  },
  {
    accountID: "M00001",
    categoryid: "a9c3093b-f307-11ed-8120-005056b5a0aa",
    parentFolder: "29cee4e4-83b3-11e6-80c1-005056b569bf",
    code: "00-00003533",
    name: "მაიონეზი",
  },
  {
    accountID: "M00001",
    categoryid: "b340908a-f307-11ed-8120-005056b5a0aa",
    parentFolder: "29cee4e4-83b3-11e6-80c1-005056b569bf",
    code: "00-00003534",
    name: "საცხობი დანამატები",
  },
  {
    accountID: "M00001",
    categoryid: "b340908b-f307-11ed-8120-005056b5a0aa",
    parentFolder: "29cee4e4-83b3-11e6-80c1-005056b569bf",
    code: "00-00003535",
    name: "სუნელები",
  },
  {
    accountID: "M00001",
    categoryid: "c4cc703f-f307-11ed-8120-005056b5a0aa",
    parentFolder: "362dfd4b-83b4-11e6-80c1-005056b569bf",
    code: "00-00003536",
    name: "ძროხის ხორცი",
  },
  {
    accountID: "M00001",
    categoryid: "cbe5371b-f307-11ed-8120-005056b5a0aa",
    parentFolder: "362dfd4b-83b4-11e6-80c1-005056b569bf",
    code: "00-00003537",
    name: "ღორის ხორცი",
  },
  {
    accountID: "M00001",
    categoryid: "cbe5371c-f307-11ed-8120-005056b5a0aa",
    parentFolder: "362dfd4b-83b4-11e6-80c1-005056b569bf",
    code: "00-00003538",
    name: "ძროხის ფარში",
  },
  {
    accountID: "M00001",
    categoryid: "d4128e79-f307-11ed-8120-005056b5a0aa",
    parentFolder: "362dfd4b-83b4-11e6-80c1-005056b569bf",
    code: "00-00003539",
    name: "ღორის ფარში",
  },
  {
    accountID: "M00001",
    categoryid: "d4128e7a-f307-11ed-8120-005056b5a0aa",
    parentFolder: "362dfd4b-83b4-11e6-80c1-005056b569bf",
    code: "00-00003540",
    name: "ხინკალი, პილმენი, ვარენიკი",
  },
  {
    accountID: "M00001",
    categoryid: "db09f40b-f307-11ed-8120-005056b5a0aa",
    parentFolder: "362dfd4b-83b4-11e6-80c1-005056b569bf",
    code: "00-00003541",
    name: "სოსისი",
  },
  {
    accountID: "M00001",
    categoryid: "e1155085-f307-11ed-8120-005056b5a0aa",
    parentFolder: "362dfd4b-83b4-11e6-80c1-005056b569bf",
    code: "00-00003542",
    name: "თევზი",
  },
  {
    accountID: "M00001",
    categoryid: "e1155086-f307-11ed-8120-005056b5a0aa",
    parentFolder: "362dfd4b-83b4-11e6-80c1-005056b569bf",
    code: "00-00003543",
    name: "სხვადასხვა ზღვის პროდუქტი",
  },
  {
    accountID: "M00001",
    categoryid: "e1155087-f307-11ed-8120-005056b5a0aa",
    parentFolder: "362dfd4b-83b4-11e6-80c1-005056b569bf",
    code: "00-00003544",
    name: "ქათმის ფილე",
  },
  {
    accountID: "M00001",
    categoryid: "ea3a9eb7-f307-11ed-8120-005056b5a0aa",
    parentFolder: "362dfd4b-83b4-11e6-80c1-005056b569bf",
    code: "00-00003545",
    name: "ქათმის ფრთები, ბარკლები",
  },
  {
    accountID: "M00001",
    categoryid: "022206ed-f308-11ed-8120-005056b5a0aa",
    parentFolder: "3ccf9951-83b4-11e6-80c1-005056b569bf",
    code: "00-00003546",
    name: "ქართული ყველი",
  },
  {
    accountID: "M00001",
    categoryid: "022206ee-f308-11ed-8120-005056b5a0aa",
    parentFolder: "3ccf9951-83b4-11e6-80c1-005056b569bf",
    code: "00-00003547",
    name: "იმპორტული ყველი",
  },
  {
    accountID: "M00001",
    categoryid: "085388e4-f308-11ed-8120-005056b5a0aa",
    parentFolder: "3ccf9951-83b4-11e6-80c1-005056b569bf",
    code: "00-00003548",
    name: "ქართული მდნარი ყველი",
  },
  {
    accountID: "M00001",
    categoryid: "085388e5-f308-11ed-8120-005056b5a0aa",
    parentFolder: "3ccf9951-83b4-11e6-80c1-005056b569bf",
    code: "00-00003549",
    name: "იმპორტული მდნარი ყველი",
  },
  {
    accountID: "M00001",
    categoryid: "0f010732-f308-11ed-8120-005056b5a0aa",
    parentFolder: "3ccf9951-83b4-11e6-80c1-005056b569bf",
    code: "00-00003550",
    name: "კარაქი, მარგარინი",
  },
  {
    accountID: "M00001",
    categoryid: "0f010733-f308-11ed-8120-005056b5a0aa",
    parentFolder: "3ccf9951-83b4-11e6-80c1-005056b569bf",
    code: "00-00003551",
    name: "ხაჭო",
  },
  {
    accountID: "M00001",
    categoryid: "199f08e1-f308-11ed-8120-005056b5a0aa",
    parentFolder: "3ccf9951-83b4-11e6-80c1-005056b569bf",
    code: "00-00003552",
    name: "იოგურტი",
  },
  {
    accountID: "M00001",
    categoryid: "199f08e2-f308-11ed-8120-005056b5a0aa",
    parentFolder: "3ccf9951-83b4-11e6-80c1-005056b569bf",
    code: "00-00003553",
    name: "რძე",
  },
  {
    accountID: "M00001",
    categoryid: "21fc10dd-f308-11ed-8120-005056b5a0aa",
    parentFolder: "3ccf9951-83b4-11e6-80c1-005056b569bf",
    code: "00-00003554",
    name: "აირანი",
  },
  {
    accountID: "M00001",
    categoryid: "21fc10de-f308-11ed-8120-005056b5a0aa",
    parentFolder: "3ccf9951-83b4-11e6-80c1-005056b569bf",
    code: "00-00003555",
    name: "კეფირი",
  },
  {
    accountID: "M00001",
    categoryid: "28ae540c-f308-11ed-8120-005056b5a0aa",
    parentFolder: "3ccf9951-83b4-11e6-80c1-005056b569bf",
    code: "00-00003556",
    name: "ნაღები",
  },
  {
    accountID: "M00001",
    categoryid: "28ae540d-f308-11ed-8120-005056b5a0aa",
    parentFolder: "3ccf9951-83b4-11e6-80c1-005056b569bf",
    code: "00-00003557",
    name: "ნაყინი ჭიქის",
  },
  {
    accountID: "M00001",
    categoryid: "2f374038-f308-11ed-8120-005056b5a0aa",
    parentFolder: "3ccf9951-83b4-11e6-80c1-005056b569bf",
    code: "00-00003558",
    name: "ნაყინი ბატონი",
  },
  {
    accountID: "M00001",
    categoryid: "2f374039-f308-11ed-8120-005056b5a0aa",
    parentFolder: "3ccf9951-83b4-11e6-80c1-005056b569bf",
    code: "00-00003559",
    name: "ნაყინი საოჯახო",
  },
  {
    accountID: "M00001",
    categoryid: "371d140e-f308-11ed-8120-005056b5a0aa",
    parentFolder: "3ccf9951-83b4-11e6-80c1-005056b569bf",
    code: "00-00003560",
    name: "კვერცხი დაფასოებული",
  },
  {
    accountID: "M00001",
    categoryid: "371d140f-f308-11ed-8120-005056b5a0aa",
    parentFolder: "3ccf9951-83b4-11e6-80c1-005056b569bf",
    code: "00-00003561",
    name: "კვერცხი ცალობით",
  },
  {
    accountID: "M00001",
    categoryid: "4aeeb3e4-f308-11ed-8120-005056b5a0aa",
    parentFolder: "dffcc211-9a51-11e5-80bc-000c295e18a3",
    code: "00-00003562",
    name: "ზეთისხილი",
  },
  {
    accountID: "M00001",
    categoryid: "4aeeb3e5-f308-11ed-8120-005056b5a0aa",
    parentFolder: "dffcc211-9a51-11e5-80bc-000c295e18a3",
    code: "00-00003563",
    name: "ტომატპასტა",
  },
  {
    accountID: "M00001",
    categoryid: "53318033-f308-11ed-8120-005056b5a0aa",
    parentFolder: "dffcc211-9a51-11e5-80bc-000c295e18a3",
    code: "00-00003564",
    name: "ბოსტნეულის კონსერვი",
  },
  {
    accountID: "M00001",
    categoryid: "53318034-f308-11ed-8120-005056b5a0aa",
    parentFolder: "dffcc211-9a51-11e5-80bc-000c295e18a3",
    code: "00-00003565",
    name: "თევზის კონსერვი",
  },
  {
    accountID: "M00001",
    categoryid: "53318035-f308-11ed-8120-005056b5a0aa",
    parentFolder: "dffcc211-9a51-11e5-80bc-000c295e18a3",
    code: "00-00003566",
    name: "ხორცის კონსერვი",
  },
  {
    accountID: "M00001",
    categoryid: "5efbed11-f308-11ed-8120-005056b5a0aa",
    parentFolder: "dffcc211-9a51-11e5-80bc-000c295e18a3",
    code: "00-00003567",
    name: "სოკოს კონსერვი",
  },
  {
    accountID: "M00001",
    categoryid: "5efbed12-f308-11ed-8120-005056b5a0aa",
    parentFolder: "dffcc211-9a51-11e5-80bc-000c295e18a3",
    code: "00-00003568",
    name: "მწნილეული",
  },
  {
    accountID: "M00001",
    categoryid: "6623fcab-f308-11ed-8120-005056b5a0aa",
    parentFolder: "dffcc211-9a51-11e5-80bc-000c295e18a3",
    code: "00-00003569",
    name: "ბარდის კონსერვი",
  },
  {
    accountID: "M00001",
    categoryid: "6623fcac-f308-11ed-8120-005056b5a0aa",
    parentFolder: "dffcc211-9a51-11e5-80bc-000c295e18a3",
    code: "00-00003570",
    name: "სიმინდის კონსერვი",
  },
  {
    accountID: "M00001",
    categoryid: "77b700f9-f308-11ed-8120-005056b5a0aa",
    parentFolder: "91b296e9-9a52-11e5-80bc-000c295e18a3",
    code: "00-00003571",
    name: "ყავა ერთჯერადი",
  },
  {
    accountID: "M00001",
    categoryid: "7e753013-f308-11ed-8120-005056b5a0aa",
    parentFolder: "91b296e9-9a52-11e5-80bc-000c295e18a3",
    code: "00-00003572",
    name: "ჩაი ერთჯერადი",
  },
  {
    accountID: "M00001",
    categoryid: "85630c9c-f308-11ed-8120-005056b5a0aa",
    parentFolder: "91b296e9-9a52-11e5-80bc-000c295e18a3",
    code: "00-00003573",
    name: "ყავა ხსნადი",
  },
  {
    accountID: "M00001",
    categoryid: "85630c9d-f308-11ed-8120-005056b5a0aa",
    parentFolder: "91b296e9-9a52-11e5-80bc-000c295e18a3",
    code: "00-00003574",
    name: "ყავა ნალექიანი",
  },
  {
    accountID: "M00001",
    categoryid: "8d8477cc-f308-11ed-8120-005056b5a0aa",
    parentFolder: "91b296e9-9a52-11e5-80bc-000c295e18a3",
    code: "00-00003575",
    name: "ყავა ასაწონი",
  },
  {
    accountID: "M00001",
    categoryid: "8d8477cd-f308-11ed-8120-005056b5a0aa",
    parentFolder: "91b296e9-9a52-11e5-80bc-000c295e18a3",
    code: "00-00003576",
    name: "შავი ჩაი",
  },
  {
    accountID: "M00001",
    categoryid: "8d8477ce-f308-11ed-8120-005056b5a0aa",
    parentFolder: "91b296e9-9a52-11e5-80bc-000c295e18a3",
    code: "00-00003577",
    name: "მცენარეული ჩაი",
  },
  {
    accountID: "M00001",
    categoryid: "9686028e-f308-11ed-8120-005056b5a0aa",
    parentFolder: "91b296e9-9a52-11e5-80bc-000c295e18a3",
    code: "00-00003578",
    name: "ხილის და კენკრის ჩაი",
  },
  {
    accountID: "M00001",
    categoryid: "9686028f-f308-11ed-8120-005056b5a0aa",
    parentFolder: "91b296e9-9a52-11e5-80bc-000c295e18a3",
    code: "00-00003579",
    name: "ჩაი ასაწონი",
  },
  {
    accountID: "M00001",
    categoryid: "9d3aa841-f308-11ed-8120-005056b5a0aa",
    parentFolder: "91b296e9-9a52-11e5-80bc-000c295e18a3",
    code: "00-00003580",
    name: "კაკაო",
  },
  {
    accountID: "M00001",
    categoryid: "a61fac44-f308-11ed-8120-005056b5a0aa",
    parentFolder: "9a28a7e1-9a52-11e5-80bc-000c295e18a3",
    code: "00-00003581",
    name: "შოკოლადის ფილა",
  },
  {
    accountID: "M00001",
    categoryid: "ae70b151-f308-11ed-8120-005056b5a0aa",
    parentFolder: "9a28a7e1-9a52-11e5-80bc-000c295e18a3",
    code: "00-00003582",
    name: "შოკოლადის ნაკრები",
  },
  {
    accountID: "M00001",
    categoryid: "ae70b152-f308-11ed-8120-005056b5a0aa",
    parentFolder: "9a28a7e1-9a52-11e5-80bc-000c295e18a3",
    code: "00-00003583",
    name: "შოკოლადის ბატონი",
  },
  {
    accountID: "M00001",
    categoryid: "b52c7cc0-f308-11ed-8120-005056b5a0aa",
    parentFolder: "9a28a7e1-9a52-11e5-80bc-000c295e18a3",
    code: "00-00003584",
    name: "ვაფლი, ორცხობილა",
  },
  {
    accountID: "M00001",
    categoryid: "b52c7cc1-f308-11ed-8120-005056b5a0aa",
    parentFolder: "9a28a7e1-9a52-11e5-80bc-000c295e18a3",
    code: "00-00003585",
    name: "ბისკვიტი, ზეფირი",
  },
  {
    accountID: "M00001",
    categoryid: "b52c7cc2-f308-11ed-8120-005056b5a0aa",
    parentFolder: "9a28a7e1-9a52-11e5-80bc-000c295e18a3",
    code: "00-00003586",
    name: "ტორტი, ნამცხვარი",
  },
  {
    accountID: "M00001",
    categoryid: "be379258-f308-11ed-8120-005056b5a0aa",
    parentFolder: "9a28a7e1-9a52-11e5-80bc-000c295e18a3",
    code: "00-00003587",
    name: "კექსი, რულეტი, ქაფქეიქი",
  },
  {
    accountID: "M00001",
    categoryid: "be379259-f308-11ed-8120-005056b5a0aa",
    parentFolder: "9a28a7e1-9a52-11e5-80bc-000c295e18a3",
    code: "00-00003588",
    name: "დაფასოებული კანფეტი",
  },
  {
    accountID: "M00001",
    categoryid: "c4cd3770-f308-11ed-8120-005056b5a0aa",
    parentFolder: "9a28a7e1-9a52-11e5-80bc-000c295e18a3",
    code: "00-00003589",
    name: "საბავშვო",
  },
  {
    accountID: "M00001",
    categoryid: "c4cd3771-f308-11ed-8120-005056b5a0aa",
    parentFolder: "9a28a7e1-9a52-11e5-80bc-000c295e18a3",
    code: "00-00003590",
    name: "დიაბეტური",
  },
  {
    accountID: "M00001",
    categoryid: "e1307628-f308-11ed-8120-005056b5a0aa",
    parentFolder: "bd1a2d3a-9a51-11e5-80bc-000c295e18a3",
    code: "00-00003591",
    name: "ჩიფსი",
  },
  {
    accountID: "M00001",
    categoryid: "ed3da6e0-f308-11ed-8120-005056b5a0aa",
    parentFolder: "bd1a2d3a-9a51-11e5-80bc-000c295e18a3",
    code: "00-00003592",
    name: "სუხარიკები",
  },
  {
    accountID: "M00001",
    categoryid: "ed3da6e1-f308-11ed-8120-005056b5a0aa",
    parentFolder: "bd1a2d3a-9a51-11e5-80bc-000c295e18a3",
    code: "00-00003593",
    name: "მარილიანი ჩხირები",
  },
  {
    accountID: "M00001",
    categoryid: "f42920dd-f308-11ed-8120-005056b5a0aa",
    parentFolder: "bd1a2d3a-9a51-11e5-80bc-000c295e18a3",
    code: "00-00003594",
    name: "მარილიანი ორცხობილები",
  },
  {
    accountID: "M00001",
    categoryid: "f42920de-f308-11ed-8120-005056b5a0aa",
    parentFolder: "bd1a2d3a-9a51-11e5-80bc-000c295e18a3",
    code: "00-00003595",
    name: "კრეკერები",
  },
  {
    accountID: "M00001",
    categoryid: "fa98bc25-f308-11ed-8120-005056b5a0aa",
    parentFolder: "bd1a2d3a-9a51-11e5-80bc-000c295e18a3",
    code: "00-00003596",
    name: "პოპკორნი",
  },
  {
    accountID: "M00001",
    categoryid: "fa98bc26-f308-11ed-8120-005056b5a0aa",
    parentFolder: "bd1a2d3a-9a51-11e5-80bc-000c295e18a3",
    code: "00-00003597",
    name: "მზესუმზირა",
  },
  {
    accountID: "M00001",
    categoryid: "031d78e7-f309-11ed-8120-005056b5a0aa",
    parentFolder: "bd1a2d3a-9a51-11e5-80bc-000c295e18a3",
    code: "00-00003598",
    name: "დაფასოებული ჩირი",
  },
  {
    accountID: "M00001",
    categoryid: "031d78e8-f309-11ed-8120-005056b5a0aa",
    parentFolder: "bd1a2d3a-9a51-11e5-80bc-000c295e18a3",
    code: "00-00003599",
    name: "დაფასოებული თხილეული",
  },
  {
    accountID: "M00001",
    categoryid: "1a38bb66-f309-11ed-8120-005056b5a0aa",
    parentFolder: "2c55f690-6e2b-11e8-80ed-8b275c3a4661",
    code: "00-00003600",
    name: "დიაბეტური წონით",
  },
  {
    accountID: "M00001",
    categoryid: "20631667-f309-11ed-8120-005056b5a0aa",
    parentFolder: "2c55f690-6e2b-11e8-80ed-8b275c3a4661",
    code: "00-00003601",
    name: "წონის ორცხობილა, ვაფლი",
  },
  {
    accountID: "M00001",
    categoryid: "20631668-f309-11ed-8120-005056b5a0aa",
    parentFolder: "2c55f690-6e2b-11e8-80ed-8b275c3a4661",
    code: "00-00003602",
    name: "ბისკვიტი, ზეფირი წონით",
  },
  {
    accountID: "M00001",
    categoryid: "2a23ada5-f309-11ed-8120-005056b5a0aa",
    parentFolder: "2c55f690-6e2b-11e8-80ed-8b275c3a4661",
    code: "00-00003603",
    name: "კექსი/რულეტი",
  },
  {
    accountID: "M00001",
    categoryid: "2a23ada6-f309-11ed-8120-005056b5a0aa",
    parentFolder: "2c55f690-6e2b-11e8-80ed-8b275c3a4661",
    code: "00-00003604",
    name: "ნამცხვარი წონით",
  },
  {
    accountID: "M00001",
    categoryid: "343505d7-f309-11ed-8120-005056b5a0aa",
    parentFolder: "2c55f690-6e2b-11e8-80ed-8b275c3a4661",
    code: "00-00003605",
    name: "კანფეტი წონით",
  },
  {
    accountID: "M00001",
    categoryid: "343505d8-f309-11ed-8120-005056b5a0aa",
    parentFolder: "b148f6e6-8328-11e6-80c1-005056b569bf",
    code: "00-00003606",
    name: "პური დაჭრილი თეთრი ბატონი",
  },
  {
    accountID: "M00001",
    categoryid: "5105ce42-f309-11ed-8120-005056b5a0aa",
    parentFolder: "b148f6e6-8328-11e6-80c1-005056b569bf",
    code: "00-00003607",
    name: "პური დაჭრილი რუხი ბატონი",
  },
  {
    accountID: "M00001",
    categoryid: "39cca0bc-f30a-11ed-8120-005056b5a0aa",
    parentFolder: "b148f6e6-8328-11e6-80c1-005056b569bf",
    code: "00-00003608",
    name: "პური დაუჭრილი თეთრი ბატონი",
  },
  {
    accountID: "M00001",
    categoryid: "39cca0bd-f30a-11ed-8120-005056b5a0aa",
    parentFolder: "b148f6e6-8328-11e6-80c1-005056b569bf",
    code: "00-00003609",
    name: "პური დაუჭრილი რუხი ბატონი",
  },
  {
    accountID: "M00001",
    categoryid: "411c3c6f-f30a-11ed-8120-005056b5a0aa",
    parentFolder: "b148f6e6-8328-11e6-80c1-005056b569bf",
    code: "00-00003610",
    name: "პური ლავაში",
  },
  {
    accountID: "M00001",
    categoryid: "411c3c70-f30a-11ed-8120-005056b5a0aa",
    parentFolder: "b148f6e6-8328-11e6-80c1-005056b569bf",
    code: "00-00003611",
    name: "პური შოთის",
  },
  {
    accountID: "M00001",
    categoryid: "411c3c71-f30a-11ed-8120-005056b5a0aa",
    parentFolder: "b148f6e6-8328-11e6-80c1-005056b569bf",
    code: "00-00003612",
    name: "პურის ჩხირები",
  },
  {
    accountID: "M00001",
    categoryid: "49f2dcd7-f30a-11ed-8120-005056b5a0aa",
    parentFolder: "b148f6e6-8328-11e6-80c1-005056b569bf",
    code: "00-00003613",
    name: "სუხარი ტკბილი",
  },
  {
    accountID: "M00001",
    categoryid: "49f2dcd8-f30a-11ed-8120-005056b5a0aa",
    parentFolder: "49f2dcd7-f30a-11ed-8120-005056b5a0aa",
    code: "00-00003614",
    name: "სუხარი მარილიანი",
  },
  {
    accountID: "M00001",
    categoryid: "5de83fb7-f30a-11ed-8120-005056b5a0aa",
    parentFolder: "f8bff3df-83b7-11e6-80c1-005056b569bf",
    code: "00-00003615",
    name: "ლუდი ქართული",
  },
  {
    accountID: "M00001",
    categoryid: "6490f99a-f30a-11ed-8120-005056b5a0aa",
    parentFolder: "f8bff3df-83b7-11e6-80c1-005056b569bf",
    code: "00-00003616",
    name: "ლუდი იმპორტული",
  },
  {
    accountID: "M00001",
    categoryid: "6490f99b-f30a-11ed-8120-005056b5a0aa",
    parentFolder: "f8bff3df-83b7-11e6-80c1-005056b569bf",
    code: "00-00003617",
    name: "ლიქიორი",
  },
  {
    accountID: "M00001",
    categoryid: "6bf60c0a-f30a-11ed-8120-005056b5a0aa",
    parentFolder: "f8bff3df-83b7-11e6-80c1-005056b569bf",
    code: "00-00003618",
    name: "ჭაჭა",
  },
  {
    accountID: "M00001",
    categoryid: "6bf60c0b-f30a-11ed-8120-005056b5a0aa",
    parentFolder: "f8bff3df-83b7-11e6-80c1-005056b569bf",
    code: "00-00003619",
    name: "არაყი",
  },
  {
    accountID: "M00001",
    categoryid: "72b699d3-f30a-11ed-8120-005056b5a0aa",
    parentFolder: "f8bff3df-83b7-11e6-80c1-005056b569bf",
    code: "00-00003620",
    name: "ღვინო",
  },
  {
    accountID: "M00001",
    categoryid: "72b699d4-f30a-11ed-8120-005056b5a0aa",
    parentFolder: "f8bff3df-83b7-11e6-80c1-005056b569bf",
    code: "00-00003621",
    name: "კოქტეილები",
  },
  {
    accountID: "M00001",
    categoryid: "7ac29356-f30a-11ed-8120-005056b5a0aa",
    parentFolder: "f8bff3df-83b7-11e6-80c1-005056b569bf",
    code: "00-00003622",
    name: "ტეკილა და სხვა",
  },
  {
    accountID: "M00001",
    categoryid: "7ac29357-f30a-11ed-8120-005056b5a0aa",
    parentFolder: "f8bff3df-83b7-11e6-80c1-005056b569bf",
    code: "00-00003623",
    name: "ლუდი ჩამოსასხმელი",
  },
  {
    accountID: "M00001",
    categoryid: "c7d2e00b-f30a-11ed-8120-005056b5a0aa",
    parentFolder: "44cfb27a-83b4-11e6-80c1-005056b569bf",
    code: "00-00003624",
    name: "სიგარეტი",
  },
  {
    accountID: "M00001",
    categoryid: "c7d2e00c-f30a-11ed-8120-005056b5a0aa",
    parentFolder: "44cfb27a-83b4-11e6-80c1-005056b569bf",
    code: "00-00003625",
    name: "ელექტროსიგარეტის აპარატი",
  },
  {
    accountID: "M00001",
    categoryid: "5c6880aa-f30b-11ed-8120-005056b5a0aa",
    parentFolder: "44cfb27a-83b4-11e6-80c1-005056b569bf",
    code: "00-00003626",
    name: "ელექტროსიგარეტის არომატები",
  },
  {
    accountID: "M00001",
    categoryid: "5c6880ab-f30b-11ed-8120-005056b5a0aa",
    parentFolder: "44cfb27a-83b4-11e6-80c1-005056b569bf",
    code: "00-00003627",
    name: "ელექტროსიგარეტის აქსესუარები",
  },
  {
    accountID: "M00001",
    categoryid: "5c6880ac-f30b-11ed-8120-005056b5a0aa",
    parentFolder: "44cfb27a-83b4-11e6-80c1-005056b569bf",
    code: "00-00003628",
    name: "სანთებელა",
  },
  {
    accountID: "M00001",
    categoryid: "3202801d-f315-11ed-8120-005056b5a0aa",
    parentFolder: "91b296e8-9a52-11e5-80bc-000c295e18a3",
    code: "00-00003629",
    name: "წვენი",
  },
  {
    accountID: "M00001",
    categoryid: "3962ce03-f315-11ed-8120-005056b5a0aa",
    parentFolder: "91b296e8-9a52-11e5-80bc-000c295e18a3",
    code: "00-00003630",
    name: "გაზიანი ტკბილი სასმელები",
  },
  {
    accountID: "M00001",
    categoryid: "3962ce04-f315-11ed-8120-005056b5a0aa",
    parentFolder: "91b296e8-9a52-11e5-80bc-000c295e18a3",
    code: "00-00003631",
    name: "ცივი ჩაი",
  },
  {
    accountID: "M00001",
    categoryid: "41dce79c-f315-11ed-8120-005056b5a0aa",
    parentFolder: "91b296e8-9a52-11e5-80bc-000c295e18a3",
    code: "00-00003632",
    name: "მინერალური წყალი",
  },
  {
    accountID: "M00001",
    categoryid: "41dce79d-f315-11ed-8120-005056b5a0aa",
    parentFolder: "91b296e8-9a52-11e5-80bc-000c295e18a3",
    code: "00-00003633",
    name: "ნატურალური წყალი",
  },
  {
    accountID: "M00001",
    categoryid: "49cc4487-f315-11ed-8120-005056b5a0aa",
    parentFolder: "91b296e8-9a52-11e5-80bc-000c295e18a3",
    code: "00-00003634",
    name: "ენერგეტიკული სასმელები",
  },
  {
    accountID: "M00001",
    categoryid: "5abd2ad9-f315-11ed-8120-005056b5a0aa",
    parentFolder: "f060523b-9a51-11e5-80bc-000c295e18a3",
    code: "00-00003635",
    name: "საპონი თხევადი",
  },
  {
    accountID: "M00001",
    categoryid: "5abd2ada-f315-11ed-8120-005056b5a0aa",
    parentFolder: "f060523b-9a51-11e5-80bc-000c295e18a3",
    code: "00-00003636",
    name: "საპონი მყარი",
  },
  {
    accountID: "M00001",
    categoryid: "62b60dc9-f315-11ed-8120-005056b5a0aa",
    parentFolder: "f060523b-9a51-11e5-80bc-000c295e18a3",
    code: "00-00003637",
    name: "საპარსი საშუალებები",
  },
  {
    accountID: "M00001",
    categoryid: "62b60dca-f315-11ed-8120-005056b5a0aa",
    parentFolder: "f060523b-9a51-11e5-80bc-000c295e18a3",
    code: "00-00003638",
    name: "შხაპის გელი, ბალზამი",
  },
  {
    accountID: "M00001",
    categoryid: "69b49b39-f315-11ed-8120-005056b5a0aa",
    parentFolder: "f060523b-9a51-11e5-80bc-000c295e18a3",
    code: "00-00003639",
    name: "ყურის ჩხირი",
  },
  {
    accountID: "M00001",
    categoryid: "69b49b3a-f315-11ed-8120-005056b5a0aa",
    parentFolder: "f060523b-9a51-11e5-80bc-000c295e18a3",
    code: "00-00003640",
    name: "შამპუნი, ბალზამი, კონდიციონერი",
  },
  {
    accountID: "M00001",
    categoryid: "700ea6b5-f315-11ed-8120-005056b5a0aa",
    parentFolder: "f060523b-9a51-11e5-80bc-000c295e18a3",
    code: "00-00003641",
    name: "ჰიგიენური საფენი",
  },
  {
    accountID: "M00001",
    categoryid: "700ea6b6-f315-11ed-8120-005056b5a0aa",
    parentFolder: "f060523b-9a51-11e5-80bc-000c295e18a3",
    code: "00-00003642",
    name: "პამპერსი",
  },
  {
    accountID: "M00001",
    categoryid: "769d2378-f315-11ed-8120-005056b5a0aa",
    parentFolder: "f060523b-9a51-11e5-80bc-000c295e18a3",
    code: "00-00003643",
    name: "კბილის პასტა",
  },
  {
    accountID: "M00001",
    categoryid: "769d2379-f315-11ed-8120-005056b5a0aa",
    parentFolder: "f060523b-9a51-11e5-80bc-000c295e18a3",
    code: "00-00003644",
    name: "კბილის ჯაგრისი",
  },
  {
    accountID: "M00001",
    categoryid: "7d8d6379-f315-11ed-8120-005056b5a0aa",
    parentFolder: "f060523b-9a51-11e5-80bc-000c295e18a3",
    code: "00-00003645",
    name: "დეოდორანტი",
  },
  {
    accountID: "M00001",
    categoryid: "8471b533-f315-11ed-8120-005056b5a0aa",
    parentFolder: "f060523b-9a51-11e5-80bc-000c295e18a3",
    code: "00-00003646",
    name: "პრეზერვატივი",
  },
  {
    accountID: "M00001",
    categoryid: "8471b534-f315-11ed-8120-005056b5a0aa",
    parentFolder: "f060523b-9a51-11e5-80bc-000c295e18a3",
    code: "00-00003647",
    name: "ტანის ღრუბელი",
  },
  {
    accountID: "M00001",
    categoryid: "8aaf2281-f315-11ed-8120-005056b5a0aa",
    parentFolder: "f060523b-9a51-11e5-80bc-000c295e18a3",
    code: "00-00003648",
    name: "ბამბის დისკები",
  },
  {
    accountID: "M00001",
    categoryid: "8aaf2282-f315-11ed-8120-005056b5a0aa",
    parentFolder: "f060523b-9a51-11e5-80bc-000c295e18a3",
    code: "00-00003649",
    name: "ბამბა",
  },
  {
    accountID: "M00001",
    categoryid: "a4c09440-f315-11ed-8120-005056b5a0aa",
    parentFolder: "1bc7cf7a-9a6d-11e5-80bc-000c295e18a3",
    code: "00-00003650",
    name: "ჟურნალ-გაზეთები",
  },
  {
    accountID: "M00001",
    categoryid: "a4c09441-f315-11ed-8120-005056b5a0aa",
    parentFolder: "1bc7cf7a-9a6d-11e5-80bc-000c295e18a3",
    code: "00-00003651",
    name: "ელემენტები",
  },
  {
    accountID: "M00001",
    categoryid: "b16d7faa-f315-11ed-8120-005056b5a0aa",
    parentFolder: "1bc7cf7a-9a6d-11e5-80bc-000c295e18a3",
    code: "00-00003652",
    name: "სათამაშოები",
  },
  {
    accountID: "M00001",
    categoryid: "c4852905-f315-11ed-8120-005056b5a0aa",
    parentFolder: "1bc7cf7a-9a6d-11e5-80bc-000c295e18a3",
    code: "00-00003653",
    name: "საკანცელარიო საქონელი",
  },
  {
    accountID: "M00001",
    categoryid: "c4852906-f315-11ed-8120-005056b5a0aa",
    parentFolder: "1bc7cf7a-9a6d-11e5-80bc-000c295e18a3",
    code: "00-00003654",
    name: "ფოლგა, პერგამენტი",
  },
  {
    accountID: "M00001",
    categoryid: "ca954839-f315-11ed-8120-005056b5a0aa",
    parentFolder: "1bc7cf7a-9a6d-11e5-80bc-000c295e18a3",
    code: "00-00003655",
    name: "ელექტრო საქონელი",
  },
  {
    accountID: "M00001",
    categoryid: "ca95483a-f315-11ed-8120-005056b5a0aa",
    parentFolder: "1bc7cf7a-9a6d-11e5-80bc-000c295e18a3",
    code: "00-00003656",
    name: "წებო",
  },
  {
    accountID: "M00001",
    categoryid: "d0cbf7f2-f315-11ed-8120-005056b5a0aa",
    parentFolder: "1bc7cf7a-9a6d-11e5-80bc-000c295e18a3",
    code: "00-00003657",
    name: "ასანთი",
  },
  {
    accountID: "M00001",
    categoryid: "d0cbf7f3-f315-11ed-8120-005056b5a0aa",
    parentFolder: "1bc7cf7a-9a6d-11e5-80bc-000c295e18a3",
    code: "00-00003658",
    name: "სანთელი",
  },
  {
    accountID: "M00001",
    categoryid: "d91f74da-f315-11ed-8120-005056b5a0aa",
    parentFolder: "1bc7cf7a-9a6d-11e5-80bc-000c295e18a3",
    code: "00-00003659",
    name: "ერთჯერადი ჭურჭელი",
  },
  {
    accountID: "M00001",
    categoryid: "d91f74db-f315-11ed-8120-005056b5a0aa",
    parentFolder: "1bc7cf7a-9a6d-11e5-80bc-000c295e18a3",
    code: "00-00003660",
    name: "ჭურჭლის ღრუბელი",
  },
  {
    accountID: "M00001",
    categoryid: "df3de59d-f315-11ed-8120-005056b5a0aa",
    parentFolder: "1bc7cf7a-9a6d-11e5-80bc-000c295e18a3",
    code: "00-00003661",
    name: "ნათურები",
  },
  {
    accountID: "M00001",
    categoryid: "df3de59e-f315-11ed-8120-005056b5a0aa",
    parentFolder: "1bc7cf7a-9a6d-11e5-80bc-000c295e18a3",
    code: "00-00003662",
    name: "ცხოველთა კვება",
  },
  {
    accountID: "M00001",
    categoryid: "e6d50976-f315-11ed-8120-005056b5a0aa",
    parentFolder: "1bc7cf7a-9a6d-11e5-80bc-000c295e18a3",
    code: "00-00003663",
    name: "სხვადასხვა",
  },
  {
    accountID: "M00001",
    categoryid: "17673bf4-f316-11ed-8120-005056b5a0aa",
    parentFolder: "b15112cd-9a52-11e5-80bc-000c295e18a3",
    code: "00-00003664",
    name: "ჭურჭლის სარეცხი საშუალებები",
  },
  {
    accountID: "M00001",
    categoryid: "17673bf5-f316-11ed-8120-005056b5a0aa",
    parentFolder: "b15112cd-9a52-11e5-80bc-000c295e18a3",
    code: "00-00003665",
    name: "სარეცხი ფხვნილი",
  },
  {
    accountID: "M00001",
    categoryid: "1ebb9f5c-f316-11ed-8120-005056b5a0aa",
    parentFolder: "b15112cd-9a52-11e5-80bc-000c295e18a3",
    code: "00-00003666",
    name: "სარეცხი სითხე",
  },
  {
    accountID: "M00001",
    categoryid: "1ebb9f5d-f316-11ed-8120-005056b5a0aa",
    parentFolder: "b15112cd-9a52-11e5-80bc-000c295e18a3",
    code: "00-00003667",
    name: "ლაქის ამომყვანი",
  },
  {
    accountID: "M00001",
    categoryid: "1ebb9f5e-f316-11ed-8120-005056b5a0aa",
    parentFolder: "b15112cd-9a52-11e5-80bc-000c295e18a3",
    code: "00-00003668",
    name: "უნიტაზის საწმენდი სითხე",
  },
  {
    accountID: "M00001",
    categoryid: "2718a6bf-f316-11ed-8120-005056b5a0aa",
    parentFolder: "b15112cd-9a52-11e5-80bc-000c295e18a3",
    code: "00-00003669",
    name: "მინის საწმენდი სითხე",
  },
  {
    accountID: "M00001",
    categoryid: "2e3af7c6-f316-11ed-8120-005056b5a0aa",
    parentFolder: "b15112cd-9a52-11e5-80bc-000c295e18a3",
    code: "00-00003670",
    name: "ავეჯის საწმენდი სითხე",
  },
  {
    accountID: "M00001",
    categoryid: "2e3af7c7-f316-11ed-8120-005056b5a0aa",
    parentFolder: "b15112cd-9a52-11e5-80bc-000c295e18a3",
    code: "00-00003671",
    name: "იატაკის საწმენდი სითხე",
  },
  {
    accountID: "M00001",
    categoryid: "2e3af7c8-f316-11ed-8120-005056b5a0aa",
    parentFolder: "b15112cd-9a52-11e5-80bc-000c295e18a3",
    code: "00-00003672",
    name: "ტუალეტის აეროზოლი",
  },
  {
    accountID: "M00001",
    categoryid: "36f4f9cd-f316-11ed-8120-005056b5a0aa",
    parentFolder: "b15112cd-9a52-11e5-80bc-000c295e18a3",
    code: "00-00003673",
    name: "ჰაერის არომატიზატორი",
  },
  {
    accountID: "M00001",
    categoryid: "36f4f9ce-f316-11ed-8120-005056b5a0aa",
    parentFolder: "b15112cd-9a52-11e5-80bc-000c295e18a3",
    code: "00-00003674",
    name: "მილების საწმენდი",
  },
  {
    accountID: "M00001",
    categoryid: "3d693e31-f316-11ed-8120-005056b5a0aa",
    parentFolder: "b15112cd-9a52-11e5-80bc-000c295e18a3",
    code: "00-00003675",
    name: "საწმენდი საშუალებები",
  },
  {
    accountID: "M00001",
    categoryid: "33b5f0e3-f573-11ed-8120-005056b5a0aa",
    parentFolder: "1bc7cf7a-9a6d-11e5-80bc-000c295e18a3",
    code: "00-00003676",
    name: "ბავშვთა ჰიგიენა",
  },
  {
    accountID: "M00001",
    categoryid: "84faab67-f573-11ed-8120-005056b5a0aa",
    parentFolder: "3ccf9951-83b4-11e6-80c1-005056b569bf",
    code: "00-00003677",
    name: "მაწონი, არაჟანი",
  },
];


export default catalogueData