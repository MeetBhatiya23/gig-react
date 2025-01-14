import Select from "react-select";
import { useLoginContext } from "../context/userDetailsContext/userContext";
import Flag from 'react-world-flags'

function SearchableSelector() {
  const options = [
    { value: "afghanistan", label: "Afghanistan", flag: "AF" },
    { value: "albania", label: "Albania", flag: "AL" },
    { value: "algeria", label: "Algeria", flag: "DZ" },
    { value: "andorra", label: "Andorra", flag: "AD" },
    { value: "angola", label: "Angola", flag: "AO" },
    { value: "antigua_and_barbuda", label: "Antigua and Barbuda", flag: "AG" },
    { value: "argentina", label: "Argentina", flag: "AR" },
    { value: "armenia", label: "Armenia", flag: "AM" },
    { value: "australia", label: "Australia", flag: "AU" },
    { value: "austria", label: "Austria", flag: "AT" },
    { value: "azerbaijan", label: "Azerbaijan", flag: "AZ" },
    { value: "bahamas", label: "Bahamas", flag: "BS" },
    { value: "bahrain", label: "Bahrain", flag: "BH" },
    { value: "bangladesh", label: "Bangladesh", flag: "BD" },
    { value: "barbados", label: "Barbados", flag: "BB" },
    { value: "belarus", label: "Belarus", flag: "BY" },
    { value: "belgium", label: "Belgium", flag: "BE" },
    { value: "belize", label: "Belize", flag: "BZ" },
    { value: "benin", label: "Benin", flag: "BJ" },
    { value: "bhutan", label: "Bhutan", flag: "BT" },
    { value: "bolivia", label: "Bolivia", flag: "BO" },
    { value: "bosnia_and_herzegovina", label: "Bosnia and Herzegovina", flag: "BA" },
    { value: "botswana", label: "Botswana", flag: "BW" },
    { value: "brazil", label: "Brazil", flag: "BR" },
    { value: "brunei", label: "Brunei", flag: "BN" },
    { value: "bulgaria", label: "Bulgaria", flag: "BG" },
    { value: "burkina_faso", label: "Burkina Faso", flag: "BF" },
    { value: "burundi", label: "Burundi", flag: "BI" },
    { value: "cabo_verde", label: "Cabo Verde", flag: "CV" },
    { value: "cambodia", label: "Cambodia", flag: "KH" },
    { value: "cameroon", label: "Cameroon", flag: "CM" },
    { value: "canada", label: "Canada", flag: "CA" },
    { value: "central_african_republic", label: "Central African Republic", flag: "CF" },
    { value: "chad", label: "Chad", flag: "TD" },
    { value: "chile", label: "Chile", flag: "CL" },
    { value: "china", label: "China", flag: "CN" },
    { value: "colombia", label: "Colombia", flag: "CO" },
    { value: "comoros", label: "Comoros", flag: "KM" },
    { value: "congo", label: "Congo", flag: "CG" },
    { value: "costa_rica", label: "Costa Rica", flag: "CR" },
    { value: "croatia", label: "Croatia", flag: "HR" },
    { value: "cuba", label: "Cuba", flag: "CU" },
    { value: "cyprus", label: "Cyprus", flag: "CY" },
    { value: "czech_republic", label: "Czech Republic", flag: "CZ" },
    { value: "denmark", label: "Denmark", flag: "DK" },
    { value: "djibouti", label: "Djibouti", flag: "DJ" },
    { value: "dominica", label: "Dominica", flag: "DM" },
    { value: "dominican_republic", label: "Dominican Republic", flag: "DO" },
    { value: "ecuador", label: "Ecuador", flag: "EC" },
    { value: "egypt", label: "Egypt", flag: "EG" },
    { value: "el_salvador", label: "El Salvador", flag: "SV" },
    { value: "equatorial_guinea", label: "Equatorial Guinea", flag: "GQ" },
    { value: "eritrea", label: "Eritrea", flag: "ER" },
    { value: "estonia", label: "Estonia", flag: "EE" },
    { value: "eswatini", label: "Eswatini", flag: "SZ" },
    { value: "ethiopia", label: "Ethiopia", flag: "ET" },
    { value: "fiji", label: "Fiji", flag: "FJ" },
    { value: "finland", label: "Finland", flag: "FI" },
    { value: "france", label: "France", flag: "FR" },
    { value: "gabon", label: "Gabon", flag: "GA" },
    { value: "gambia", label: "Gambia", flag: "GM" },
    { value: "georgia", label: "Georgia", flag: "GE" },
    { value: "germany", label: "Germany", flag: "DE" },
    { value: "ghana", label: "Ghana", flag: "GH" },
    { value: "greece", label: "Greece", flag: "GR" },
    { value: "grenada", label: "Grenada", flag: "GD" },
    { value: "guatemala", label: "Guatemala", flag: "GT" },
    { value: "guinea", label: "Guinea", flag: "GN" },
    { value: "guinea_bissau", label: "Guinea-Bissau", flag: "GW" },
    { value: "guyana", label: "Guyana", flag: "GY" },
    { value: "haiti", label: "Haiti", flag: "HT" },
    { value: "honduras", label: "Honduras", flag: "HN" },
    { value: "hungary", label: "Hungary", flag: "HU" },
    { value: "iceland", label: "Iceland", flag: "IS" },
    { value: "india", label: "India", flag: "IN" },
    { value: "indonesia", label: "Indonesia", flag: "ID" },
    { value: "iran", label: "Iran", flag: "IR" },
    { value: "iraq", label: "Iraq", flag: "IQ" },
    { value: "ireland", label: "Ireland", flag: "IE" },
    { value: "israel", label: "Israel", flag: "IL" },
    { value: "italy", label: "Italy", flag: "IT" },
    { value: "jamaica", label: "Jamaica", flag: "JM" },
    { value: "japan", label: "Japan", flag: "JP" },
    { value: "jordan", label: "Jordan", flag: "JO" },
    { value: "kazakhstan", label: "Kazakhstan", flag: "KZ" },
    { value: "kenya", label: "Kenya", flag: "KE" },
    { value: "kiribati", label: "Kiribati", flag: "KI" },
    { value: "kosovo", label: "Kosovo", flag: "XK" },
    { value: "kuwait", label: "Kuwait", flag: "KW" },
    { value: "kyrgyzstan", label: "Kyrgyzstan", flag: "KG" },
    { value: "laos", label: "Laos", flag: "LA" },
    { value: "latvia", label: "Latvia", flag: "LV" },
    { value: "lebanon", label: "Lebanon", flag: "LB" },
    { value: "lesotho", label: "Lesotho", flag: "LS" },
    { value: "liberia", label: "Liberia", flag: "LR" },
    { value: "libya", label: "Libya", flag: "LY" },
    { value: "liechtenstein", label: "Liechtenstein", flag: "LI" },
    { value: "lithuania", label: "Lithuania", flag: "LT" },
    { value: "luxembourg", label: "Luxembourg", flag: "LU" },
    { value: "madagascar", label: "Madagascar", flag: "MG" },
    { value: "malawi", label: "Malawi", flag: "MW" },
    { value: "malaysia", label: "Malaysia", flag: "MY" },
    { value: "maldives", label: "Maldives", flag: "MV" },
    { value: "mali", label: "Mali", flag: "ML" },
    { value: "malta", label: "Malta", flag: "MT" },
    { value: "marshall_islands", label: "Marshall Islands", flag: "MH" },
    { value: "mauritania", label: "Mauritania", flag: "MR" },
    { value: "mauritius", label: "Mauritius", flag: "MU" },
    { value: "mexico", label: "Mexico", flag: "MX" },
    { value: "micronesia", label: "Micronesia", flag: "FM" },
    { value: "moldova", label: "Moldova", flag: "MD" },
    { value: "monaco", label: "Monaco", flag: "MC" },
    { value: "mongolia", label: "Mongolia", flag: "MN" },
    { value: "montenegro", label: "Montenegro", flag: "ME" },
    { value: "morocco", label: "Morocco", flag: "MA" },
    { value: "mozambique", label: "Mozambique", flag: "MZ" },
    { value: "myanmar", label: "Myanmar", flag: "MM" },
    { value: "namibia", label: "Namibia", flag: "NA" },
    { value: "nauru", label: "Nauru", flag: "NR" },
    { value: "nepal", label: "Nepal", flag: "NP" },
    { value: "netherlands", label: "Netherlands", flag: "NL" },
    { value: "new_zealand", label: "New Zealand", flag: "NZ" },
    { value: "nicaragua", label: "Nicaragua", flag: "NI" },
    { value: "niger", label: "Niger", flag: "NE" },
    { value: "nigeria", label: "Nigeria", flag: "NG" },
    { value: "north_macedonia", label: "North Macedonia", flag: "MK" },
    { value: "norway", label: "Norway", flag: "NO" },
    { value: "oman", label: "Oman", flag: "OM" },
    { value: "pakistan", label: "Pakistan", flag: "PK" },
    { value: "palau", label: "Palau", flag: "PW" },
    { value: "panama", label: "Panama", flag: "PA" },
    { value: "papua_new_guinea", label: "Papua New Guinea", flag: "PG" },
    { value: "paraguay", label: "Paraguay", flag: "PY" },
    { value: "peru", label: "Peru", flag: "PE" },
    { value: "philippines", label: "Philippines", flag: "PH" },
    { value: "poland", label: "Poland", flag: "PL" },
    { value: "portugal", label: "Portugal", flag: "PT" },
    { value: "qatar", label: "Qatar", flag: "QA" },
    { value: "romania", label: "Romania", flag: "RO" },
    { value: "russia", label: "Russia", flag: "RU" },
    { value: "rwanda", label: "Rwanda", flag: "RW" },
    { value: "saint_kitts_and_nevis", label: "Saint Kitts and Nevis", flag: "KN" },
    { value: "saint_lucia", label: "Saint Lucia", flag: "LC" },
    { value: "saint_vincent_and_the_grenadines", label: "Saint Vincent and the Grenadines", flag: "VC" },
    { value: "samoa", label: "Samoa", flag: "WS" },
    { value: "san_marino", label: "San Marino", flag: "SM" },
    { value: "sao_tome_and_principe", label: "Sao Tome and Principe", flag: "ST" },
    { value: "saudi_arabia", label: "Saudi Arabia", flag: "SA" },
    { value: "senegal", label: "Senegal", flag: "SN" },
    { value: "serbia", label: "Serbia", flag: "RS" },
    { value: "seychelles", label: "Seychelles", flag: "SC" },
    { value: "sierra_leone", label: "Sierra Leone", flag: "SL" },
    { value: "singapore", label: "Singapore", flag: "SG" },
    { value: "slovakia", label: "Slovakia", flag: "SK" },
    { value: "slovenia", label: "Slovenia", flag: "SI" },
    { value: "solomon_islands", label: "Solomon Islands", flag: "SB" },
    { value: "somalia", label: "Somalia", flag: "SO" },
    { value: "south_africa", label: "South Africa", flag: "ZA" },
    { value: "south_sudan", label: "South Sudan", flag: "SS" },
    { value: "spain", label: "Spain", flag: "ES" },
    { value: "sri_lanka", label: "Sri Lanka", flag: "LK" },
    { value: "sudan", label: "Sudan", flag: "SD" },
    { value: "suriname", label: "Suriname", flag: "SR" },
    { value: "sweden", label: "Sweden", flag: "SE" },
    { value: "switzerland", label: "Switzerland", flag: "CH" },
    { value: "syria", label: "Syria", flag: "SY" },
    { value: "taiwan", label: "Taiwan", flag: "TW" },
    { value: "tajikistan", label: "Tajikistan", flag: "TJ" },
    { value: "tanzania", label: "Tanzania", flag: "TZ" },
    { value: "thailand", label: "Thailand", flag: "TH" },
    { value: "timor_leste", label: "Timor-Leste", flag: "TL" },
    { value: "togo", label: "Togo", flag: "TG" },
    { value: "tonga", label: "Tonga", flag: "TO" },
    { value: "trinidad_and_tobago", label: "Trinidad and Tobago", flag: "TT" },
    { value: "tunisia", label: "Tunisia", flag: "TN" },
    { value: "turkmenistan", label: "Turkmenistan", flag: "TM" },
    { value: "turkey", label: "Turkey", flag: "TR" },
    { value: "tuvalu", label: "Tuvalu", flag: "TV" },
    { value: "uganda", label: "Uganda", flag: "UG" },
    { value: "ukraine", label: "Ukraine", flag: "UA" },
    { value: "united_arab_emirates", label: "United Arab Emirates", flag: "AE" },
    { value: "united_kingdom", label: "United Kingdom", flag: "GB" },
    { value: "united_states", label: "United States", flag: "US" },
    { value: "uruguay", label: "Uruguay", flag: "UY" },
    { value: "uzbekistan", label: "Uzbekistan", flag: "UZ" },
    { value: "vanuatu", label: "Vanuatu", flag: "VU" },
    { value: "vatican_city", label: "Vatican City", flag: "VA" },
    { value: "venezuela", label: "Venezuela", flag: "VE" },
    { value: "vietnam", label: "Vietnam", flag: "VN" },
    { value: "yemen", label: "Yemen", flag: "YE" },
    { value: "zambia", label: "Zambia", flag: "ZM" },
    { value: "zimbabwe", label: "Zimbabwe", flag: "ZW" }
  ];


  const { user, setUser } = useLoginContext();

  const handleChange = (selectedOption) => {
    setUser({
      ...user,
      country: selectedOption
    });
  };

  return (
    <div>
      <Select
        value={user?.country}
        onChange={handleChange}
        options={options}
        getOptionLabel={(e) => (
          <div className="gap-5 flex items-center" >
            <Flag className="w-5" code={e.flag} />
            <span>{e.label}</span>
          </div>
        )}
      />
    </div>
  );
}

export default SearchableSelector;
