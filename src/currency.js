const data = [
  { value: "AED", label: "AED", symbol: "\u062f.\u0625;", name: "UAE dirham" },
  { value: "AFN", label: "AFN", symbol: "Afs", name: "Afghan afghani" },
  { value: "ALL", label: "ALL", symbol: "L", name: "Albanian lek" },
  { value: "AMD", label: "AMD", symbol: "AMD", name: "Armenian dram" },
  { value: "ANG", label: "ANG", symbol: "NA\u0192", name: "Netherlands Antillean gulden" },
  { value: "AOA", label: "AOA", symbol: "Kz", name: "Angolan kwanza" },
  { value: "ARS", label: "ARS", symbol: "$", name: "Argentine peso" },
  { value: "AUD", label: "AUD", symbol: "$", name: "Australian dollar" },
  { value: "AWG", label: "AWG", symbol: "\u0192", name: "Aruban florin" },
  { value: "AZN", label: "AZN", symbol: "AZN", name: "Azerbaijani manat" },
  { value: "BAM", label: "BAM", symbol: "KM", name: "Bosnia and Herzegovina konvertibilna marka" },
  { value: "BBD", label: "BBD", symbol: "Bds$", name: "Barbadian dollar" },
  { value: "BDT", label: "BDT", symbol: "\u09f3", name: "Bangladeshi taka" },
  { value: "BGN", label: "BGN", symbol: "BGN", name: "Bulgarian lev" },
  { value: "BHD", label: "BHD", symbol: ".\u062f.\u0628", name: "Bahraini dinar" },
  { value: "BIF", label: "BIF", symbol: "FBu", name: "Burundi franc" },
  { value: "BMD", label: "BMD", symbol: "BD$", name: "Bermudian dollar" },
  { value: "BND", label: "BND", symbol: "B$", name: "Brunei dollar" },
  { value: "BOB", label: "BOB", symbol: "Bs.", name: "Bolivian boliviano" },
  { value: "BRL", label: "BRL", symbol: "R$", name: "Brazilian real" },
  { value: "BSD", label: "BSD", symbol: "B$", name: "Bahamian dollar" },
  { value: "BTN", label: "BTN", symbol: "Nu.", name: "Bhutanese ngultrum" },
  { value: "BWP", label: "BWP", symbol: "P", name: "Botswana pula" },
  { value: "BYR", label: "BYR", symbol: "Br", name: "Belarusian ruble" },
  { value: "BZD", label: "BZD", symbol: "BZ$", name: "Belize dollar" },
  { value: "CAD", label: "CAD", symbol: "$", name: "Canadian dollar" },
  { value: "CDF", label: "CDF", symbol: "F", name: "Congolese franc" },
  { value: "CHF", label: "CHF", symbol: "Fr.", name: "Swiss franc" },
  { value: "CLP", label: "CLP", symbol: "$", name: "Chilean peso" },
  { value: "CNY", label: "CNY", symbol: "\u00a5", name: "Chinese/Yuan renminbi" },
  { value: "COP", label: "COP", symbol: "Col$", name: "Colombian peso" },
  { value: "CRC", label: "CRC", symbol: "\u20a1", name: "Costa Rican colon" },
  { value: "CUC", label: "CUC", symbol: "$", name: "Cuban peso" },
  { value: "CVE", label: "CVE", symbol: "Esc", name: "Cape Verdean escudo" },
  { value: "CZK", label: "CZK", symbol: "K\u010d", name: "Czech koruna" },
  { value: "DJF", label: "DJF", symbol: "Fdj", name: "Djiboutian franc" },
  { value: "DKK", label: "DKK", symbol: "Kr", name: "Danish krone" },
  { value: "DOP", label: "DOP", symbol: "RD$", name: "Dominican peso" },
  { value: "DZD", label: "DZD", symbol: "\u062f.\u062c", name: "Algerian dinar" },
  { value: "EEK", label: "EEK", symbol: "KR", name: "Estonian kroon" },
  { value: "EGP", label: "EGP", symbol: "\u00a3", name: "Egyptian pound" },
  { value: "ERN", label: "ERN", symbol: "Nfa", name: "Eritrean nakfa" },
  { value: "ETB", label: "ETB", symbol: "Br", name: "Ethiopian birr" },
  { value: "EUR", label: "EUR", symbol: "\u20ac", name: "European Euro" },
  { value: "FJD", label: "FJD", symbol: "FJ$", name: "Fijian dollar" },
  { value: "FKP", label: "FKP", symbol: "\u00a3", name: "Falkland Islands pound" },
  { value: "GBP", label: "GBP", symbol: "\u00a3", name: "British pound" },
  { value: "GEL", label: "GEL", symbol: "GEL", name: "Georgian lari" },
  { value: "GHS", label: "GHS", symbol: "GH\u20b5", name: "Ghanaian cedi" },
  { value: "GIP", label: "GIP", symbol: "\u00a3", name: "Gibraltar pound" },
  { value: "GMD", label: "GMD", symbol: "D", name: "Gambian dalasi" },
  { value: "GNF", label: "GNF", symbol: "FG", name: "Guinean franc" },
  { value: "GQE", label: "GQE", symbol: "CFA", name: "Central African CFA franc" },
  { value: "GTQ", label: "GTQ", symbol: "Q", name: "Guatemalan quetzal" },
  { value: "GYD", label: "GYD", symbol: "GY$", name: "Guyanese dollar" },
  { value: "HKD", label: "HKD", symbol: "HK$", name: "Hong Kong dollar" },
  { value: "HNL", label: "HNL", symbol: "L", name: "Honduran lempira" },
  { value: "HRK", label: "HRK", symbol: "kn", name: "Croatian kuna" },
  { value: "HTG", label: "HTG", symbol: "G", name: "Haitian gourde" },
  { value: "HUF", label: "HUF", symbol: "Ft", name: "Hungarian forint" },
  { value: "IDR", label: "IDR", symbol: "Rp", name: "Indonesian rupiah" },
  { value: "ILS", label: "ILS", symbol: "\u20aa", name: "Israeli new sheqel" },
  { value: "INR", label: "INR", symbol: "\u20B9", name: "Indian rupee" },
  { value: "IQD", label: "IQD", symbol: "\u062f.\u0639", name: "Iraqi dinar" },
  { value: "IRR", label: "IRR", symbol: "IRR", name: "Iranian rial" },
  { value: "ISK", label: "ISK", symbol: "kr", name: "Icelandic kr\u00f3na" },
  { value: "JMD", label: "JMD", symbol: "J$", name: "Jamaican dollar" },
  { value: "JOD", label: "JOD", symbol: "JOD", name: "Jordanian dinar" },
  { value: "JPY", label: "JPY", symbol: "\u00a5", name: "Japanese yen" },
  { value: "KES", label: "KES", symbol: "KSh", name: "Kenyan shilling" },
  { value: "KGS", label: "KGS", symbol: "\u0441\u043e\u043c", name: "Kyrgyzstani som" },
  { value: "KHR", label: "KHR", symbol: "\u17db", name: "Cambodian riel" },
  { value: "KMF", label: "KMF", symbol: "KMF", name: "Comorian franc" },
  { value: "KPW", label: "KPW", symbol: "W", name: "North Korean won" },
  { value: "KRW", label: "KRW", symbol: "W", name: "South Korean won" },
  { value: "KWD", label: "KWD", symbol: "KWD", name: "Kuwaiti dinar" },
  { value: "KYD", label: "KYD", symbol: "KY$", name: "Cayman Islands dollar" },
  { value: "KZT", label: "KZT", symbol: "T", name: "Kazakhstani tenge" },
  { value: "LAK", label: "LAK", symbol: "KN", name: "Lao kip" },
  { value: "LBP", label: "LBP", symbol: "\u00a3", name: "Lebanese lira" },
  { value: "LKR", label: "LKR", symbol: "Rs", name: "Sri Lankan rupee" },
  { value: "LRD", label: "LRD", symbol: "L$", name: "Liberian dollar" },
  { value: "LSL", label: "LSL", symbol: "M", name: "Lesotho loti" },
  { value: "LTL", label: "LTL", symbol: "Lt", name: "Lithuanian litas" },
  { value: "LVL", label: "LVL", symbol: "Ls", name: "Latvian lats" },
  { value: "LYD", label: "LYD", symbol: "LD", name: "Libyan dinar" },
  { value: "MAD", label: "MAD", symbol: "MAD", name: "Morolabelan dirham" },
  { value: "MDL", label: "MDL", symbol: "MDL", name: "Moldovan leu" },
  { value: "MGA", label: "MGA", symbol: "FMG", name: "Malagasy ariary" },
  { value: "MKD", label: "MKD", symbol: "MKD", name: "Macedonian denar" },
  { value: "MMK", label: "MMK", symbol: "K", name: "Myanma kyat" },
  { value: "MNT", label: "MNT", symbol: "\u20ae", name: "Mongolian tugrik" },
  { value: "MOP", label: "MOP", symbol: "P", name: "Macanese pataca" },
  { value: "MRO", label: "MRO", symbol: "UM", name: "Mauritanian ouguiya" },
  { value: "MUR", label: "MUR", symbol: "Rs", name: "Mauritian rupee" },
  { value: "MVR", label: "MVR", symbol: "Rf", name: "Maldivian rufiyaa" },
  { value: "MWK", label: "MWK", symbol: "MK", name: "Malawian kwacha" },
  { value: "MXN", label: "MXN", symbol: "$", name: "Mexican peso" },
  { value: "MYR", label: "MYR", symbol: "RM", name: "Malaysian ringgit" },
  { value: "MZM", label: "MZM", symbol: "MTn", name: "Mozambican metical" },
  { value: "NAD", label: "NAD", symbol: "N$", name: "Namibian dollar" },
  { value: "NGN", label: "NGN", symbol: "\u20a6", name: "Nigerian naira" },
  { value: "NIO", label: "NIO", symbol: "C$", name: "Nicaraguan c\u00f3rdoba" },
  { value: "NOK", label: "NOK", symbol: "kr", name: "Norwegian krone" },
  { value: "NPR", label: "NPR", symbol: "NRs", name: "Nepalese rupee" },
  { value: "NZD", label: "NZD", symbol: "NZ$", name: "New Zealand dollar" },
  { value: "OMR", label: "OMR", symbol: "OMR", name: "Omani rial" },
  { value: "PAB", label: "PAB", symbol: "B./", name: "Panamanian balboa" },
  { value: "PEN", label: "PEN", symbol: "S/.", name: "Peruvian nuevo sol" },
  { value: "PGK", label: "PGK", symbol: "K", name: "Papua New Guinean kina" },
  { value: "PHP", label: "PHP", symbol: "\u20b1", name: "Philippine peso" },
  { value: "PKR", label: "PKR", symbol: "Rs.", name: "Pakistani rupee" },
  { value: "PLN", label: "PLN", symbol: "z\u0142", name: "Polish zloty" },
  { value: "PYG", label: "PYG", symbol: "\u20b2", name: "Paraguayan guarani" },
  { value: "QAR", label: "QAR", symbol: "QR", name: "Qatari riyal" },
  { value: "RON", label: "RON", symbol: "L", name: "Romanian leu" },
  { value: "RSD", label: "RSD", symbol: "din.", name: "Serbian dinar" },
  { value: "RUB", label: "RUB", symbol: "R", name: "Russian ruble" },
  { value: "SAR", label: "SAR", symbol: "SR", name: "Saudi riyal" },
  { value: "SBD", label: "SBD", symbol: "SI$", name: "Solomon Islands dollar" },
  { value: "SCR", label: "SCR", symbol: "SR", name: "Seychellois rupee" },
  { value: "SDG", label: "SDG", symbol: "SDG", name: "Sudanese pound" },
  { value: "SEK", label: "SEK", symbol: "kr", name: "Swedish krona" },
  { value: "SGD", label: "SGD", symbol: "S$", name: "Singapore dollar" },
  { value: "SHP", label: "SHP", symbol: "\u00a3", name: "Saint Helena pound" },
  { value: "SLL", label: "SLL", symbol: "Le", name: "Sierra Leonean leone" },
  { value: "SOS", label: "SOS", symbol: "Sh.", name: "Somali shilling" },
  { value: "SRD", label: "SRD", symbol: "$", name: "Surinamese dollar" },
  { value: "SYP", label: "SYP", symbol: "LS", name: "Syrian pound" },
  { value: "SZL", label: "SZL", symbol: "E", name: "Swazi lilangeni" },
  { value: "THB", label: "THB", symbol: "\u0e3f", name: "Thai baht" },
  { value: "TJS", label: "TJS", symbol: "TJS", name: "Tajikistani somoni" },
  { value: "TMT", label: "TMT", symbol: "m", name: "Turkmen manat" },
  { value: "TND", label: "TND", symbol: "DT", name: "Tunisian dinar" },
  { value: "TRY", label: "TRY", symbol: "TRY", name: "Turkish new lira" },
  { value: "TTD", label: "TTD", symbol: "TT$", name: "Trinidad and Tobago dollar" },
  { value: "TWD", label: "TWD", symbol: "NT$", name: "New Taiwan dollar" },
  { value: "TZS", label: "TZS", symbol: "TZS", name: "Tanzanian shilling" },
  { value: "UAH", label: "UAH", symbol: "UAH", name: "Ukrainian hryvnia" },
  { value: "UGX", label: "UGX", symbol: "USh", name: "Ugandan shilling" },
  { value: "USD", label: "USD", symbol: "US$", name: "United States dollar" },
  { value: "UYU", label: "UYU", symbol: "$U", name: "Uruguayan peso" },
  { value: "UZS", label: "UZS", symbol: "UZS", name: "Uzbekistani som" },
  { value: "VEB", label: "VEB", symbol: "Bs", name: "Venezuelan bolivar" },
  { value: "VND", label: "VND", symbol: "\u20ab", name: "Vietnamese dong" },
  { value: "VUV", label: "VUV", symbol: "VT", name: "Vanuatu vatu" },
  { value: "WST", label: "WST", symbol: "WS$", name: "Samoan tala" },
  { value: "XAF", label: "XAF", symbol: "CFA", name: "Central African CFA franc" },
  { value: "XCD", label: "XCD", symbol: "EC$", name: "East Caribbean dollar" },
  { value: "XDR", label: "XDR", symbol: "SDR", name: "Special Drawing Rights" },
  { value: "XOF", label: "XOF", symbol: "CFA", name: "West African CFA franc" },
  { value: "XPF", label: "XPF", symbol: "F", name: "CFP franc" },
  { value: "YER", label: "YER", symbol: "YER", name: "Yemeni rial" },
  { value: "ZAR", label: "ZAR", symbol: "R", name: "South African rand" },
  { value: "ZMK", label: "ZMK", symbol: "ZK", name: "Zambian kwacha" },
  { value: "ZWR", label: "ZWR", symbol: "Z$", name: "Zimbabwean dollar" },
];

export default data;