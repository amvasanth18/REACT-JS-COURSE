import React from "react";
import ReactDOM from "react-dom/client";
const Header=()=>{
  return(
    <div className="header">
       <div className="res-logo">
          <img src="https://www.logodesign.net/logo/smoking-burger-with-lettuce-3624ld.png"></img>
       </div>
       <div className="nav-items">
          <ul>
            <li>Home</li>
            <li>About us</li>
            <li>Conact us</li>
            <li>Cart</li>
          </ul>
       </div>
    </div>
  )
}
const RestaurantCard=(props)=>{
  const {resData}=props;
  const {cloudinaryImageId,name,cuisines,avgRating,costForTwo}=resData?.info;
  const {deliveryTime}=resData?.info.sla;
  return(
    <div className="res-card" style={{backgroundColor:'#f0f0f0'}}>
      <img 
      className="res-logo"
      src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"+ cloudinaryImageId}/>
      <h3>{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRating} stars</h4>
      <h4>{costForTwo}</h4>
      <h4>{deliveryTime} minutes</h4>
    
    </div>
  )
}
const apiList=[  {
  "info": {
      "id": "518645",
      "name": "Burger King",
      "cloudinaryImageId": "e33e1d3ba7d6b2bb0d45e1001b731fcf",
      "locality": "Gurumoorthy Garden Street",
      "areaName": "Perambur",
      "costForTwo": "₹350 for two",
      "cuisines": [
          "Burgers",
          "American"
      ],
      "avgRating": 4.2,
      "feeDetails": {
          "restaurantId": "518645",
          "fees": [
              {
                  "name": "BASE_DISTANCE",
                  "fee": 6100
              },
              {
                  "name": "BASE_TIME"
              },
              {
                  "name": "ANCILLARY_SURGE_FEE"
              }
          ],
          "totalFee": 6100
      },
      "parentId": "166",
      "avgRatingString": "4.2",
      "totalRatingsString": "10K+",
      "sla": {
          "deliveryTime": 38,
          "lastMileTravel": 6.1,
          "serviceability": "SERVICEABLE",
          "slaString": "38 mins",
          "lastMileTravelString": "6.1 km",
          "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
          "nextCloseTime": "2023-10-05 03:00:00",
          "opened": true
      },
      "badges": {},
      "isOpen": true,
      "type": "F",
      "badgesV2": {
          "entityBadges": {
              "imageBased": {},
              "textBased": {},
              "textExtendedBadges": {}
          }
      },
      "aggregatedDiscountInfoV3": {
          "header": "EVERY ITEM",
          "subHeader": "@ ₹129"
      },
      "orderabilityCommunication": {
          "title": {},
          "subTitle": {},
          "message": {},
          "customIcon": {}
      },
      "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
              "mediaType": "ADS_MEDIA_ENUM_IMAGE",
              "lottie": {},
              "video": {}
          }
      },
      "reviewsSummary": {},
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {}
  },
  "analytics": {
      "context": "seo-data-319be84f-e743-46f6-86e3-394c5bc1c2e9"
  },
  "cta": {
      "link": "https://www.swiggy.com/restaurants/burger-king-gurumoorthy-garden-street-perambur-chennai-518645",
      "text": "RESTAURANT_MENU",
      "type": "WEBLINK"
  },
  "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
},
{
  "info": {
      "id": "357912",
      "name": "KFC",
      "cloudinaryImageId": "56c9ab92bd79745fd152a30fa2525426",
      "locality": "Royapuram Kalmandapam",
      "areaName": "Old Washermanpet",
      "costForTwo": "₹400 for two",
      "cuisines": [
          "Burgers",
          "Biryani",
          "American",
          "Snacks",
          "Fast Food"
      ],
      "avgRating": 4,
      "feeDetails": {
          "restaurantId": "357912",
          "fees": [
              {
                  "name": "BASE_DISTANCE",
                  "fee": 3700
              },
              {
                  "name": "BASE_TIME"
              },
              {
                  "name": "ANCILLARY_SURGE_FEE"
              }
          ],
          "totalFee": 3700
      },
      "parentId": "547",
      "avgRatingString": "4.0",
      "totalRatingsString": "5K+",
      "sla": {
          "deliveryTime": 31,
          "lastMileTravel": 1.9,
          "serviceability": "SERVICEABLE",
          "slaString": "31 mins",
          "lastMileTravelString": "1.9 km",
          "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
          "nextCloseTime": "2023-10-05 00:00:00",
          "opened": true
      },
      "badges": {},
      "isOpen": true,
      "type": "F",
      "badgesV2": {
          "entityBadges": {
              "imageBased": {},
              "textBased": {},
              "textExtendedBadges": {}
          }
      },
      "aggregatedDiscountInfoV3": {
          "header": "20% OFF",
          "subHeader": "UPTO ₹50"
      },
      "orderabilityCommunication": {
          "title": {},
          "subTitle": {},
          "message": {},
          "customIcon": {}
      },
      "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
              "mediaType": "ADS_MEDIA_ENUM_IMAGE",
              "lottie": {},
              "video": {}
          }
      },
      "reviewsSummary": {},
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {}
  },
  "analytics": {
      "context": "seo-data-319be84f-e743-46f6-86e3-394c5bc1c2e9"
  },
  "cta": {
      "link": "https://www.swiggy.com/restaurants/kfc-royapuram-kalmandapam-old-washermanpet-chennai-357912",
      "text": "RESTAURANT_MENU",
      "type": "WEBLINK"
  },
  "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
},
{
  "info": {
      "id": "405476",
      "name": "Pizza Hut",
      "cloudinaryImageId": "2b4f62d606d1b2bfba9ba9e5386fabb7",
      "locality": "Perambur",
      "areaName": "Perambur",
      "costForTwo": "₹300 for two",
      "cuisines": [
          "Pizzas"
      ],
      "avgRating": 3.8,
      "feeDetails": {
          "restaurantId": "405476",
          "fees": [
              {
                  "name": "BASE_DISTANCE",
                  "fee": 7700
              },
              {
                  "name": "BASE_TIME"
              },
              {
                  "name": "ANCILLARY_SURGE_FEE"
              }
          ],
          "totalFee": 7700
      },
      "parentId": "721",
      "avgRatingString": "3.8",
      "totalRatingsString": "5K+",
      "sla": {
          "deliveryTime": 58,
          "lastMileTravel": 8.2,
          "serviceability": "SERVICEABLE",
          "slaString": "58 mins",
          "lastMileTravelString": "8.2 km",
          "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
          "nextCloseTime": "2023-10-05 03:00:00",
          "opened": true
      },
      "badges": {},
      "isOpen": true,
      "aggregatedDiscountInfoV2": {},
      "type": "F",
      "badgesV2": {
          "entityBadges": {
              "imageBased": {},
              "textBased": {},
              "textExtendedBadges": {}
          }
      },
      "orderabilityCommunication": {
          "title": {},
          "subTitle": {},
          "message": {},
          "customIcon": {}
      },
      "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
              "mediaType": "ADS_MEDIA_ENUM_IMAGE",
              "lottie": {},
              "video": {}
          }
      },
      "reviewsSummary": {},
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {}
  },
  "analytics": {
      "context": "seo-data-319be84f-e743-46f6-86e3-394c5bc1c2e9"
  },
  "cta": {
      "link": "https://www.swiggy.com/restaurants/pizza-hut-perambur-chennai-405476",
      "text": "RESTAURANT_MENU",
      "type": "WEBLINK"
  },
  "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
},
{
  "info": {
      "id": "199097",
      "name": "SS Hyderabad Briyani",
      "cloudinaryImageId": "xy5pdrfdlirnz6ypnaj2",
      "locality": "George Town",
      "areaName": "Tondiarpet",
      "costForTwo": "₹300 for two",
      "cuisines": [
          "Biryani"
      ],
      "avgRating": 4.4,
      "feeDetails": {
          "restaurantId": "199097",
          "fees": [
              {
                  "name": "BASE_DISTANCE",
                  "fee": 3000
              },
              {
                  "name": "BASE_TIME"
              },
              {
                  "name": "ANCILLARY_SURGE_FEE"
              }
          ],
          "totalFee": 3000
      },
      "parentId": "4824",
      "avgRatingString": "4.4",
      "totalRatingsString": "5K+",
      "sla": {
          "deliveryTime": 20,
          "lastMileTravel": 2.4,
          "serviceability": "SERVICEABLE",
          "slaString": "20 mins",
          "lastMileTravelString": "2.4 km",
          "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
          "nextCloseTime": "2023-10-04 23:00:00",
          "opened": true
      },
      "badges": {},
      "isOpen": true,
      "type": "F",
      "badgesV2": {
          "entityBadges": {
              "imageBased": {},
              "textBased": {},
              "textExtendedBadges": {}
          }
      },
      "aggregatedDiscountInfoV3": {
          "header": "50% OFF",
          "subHeader": "UPTO ₹100"
      },
      "orderabilityCommunication": {
          "title": {},
          "subTitle": {},
          "message": {},
          "customIcon": {}
      },
      "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
              "mediaType": "ADS_MEDIA_ENUM_IMAGE",
              "lottie": {},
              "video": {}
          }
      },
      "reviewsSummary": {},
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {}
  },
  "analytics": {
      "context": "seo-data-319be84f-e743-46f6-86e3-394c5bc1c2e9"
  },
  "cta": {
      "link": "https://www.swiggy.com/restaurants/ss-hyderabad-briyani-george-town-tondiarpet-chennai-199097",
      "text": "RESTAURANT_MENU",
      "type": "WEBLINK"
  },
  "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
},
{
  "info": {
      "id": "100194",
      "name": "Cake Works",
      "cloudinaryImageId": "cmwqxtqo6zjkdfjxcjr0",
      "locality": "vanniar street choolaimedu",
      "areaName": "Choolaimedu",
      "costForTwo": "₹250 for two",
      "cuisines": [
          "Bakery",
          "Sweets",
          "Desserts"
      ],
      "avgRating": 4.1,
      "feeDetails": {
          "restaurantId": "100194",
          "fees": [
              {
                  "name": "BASE_DISTANCE",
                  "fee": 12400
              },
              {
                  "name": "BASE_TIME"
              },
              {
                  "name": "ANCILLARY_SURGE_FEE"
              }
          ],
          "totalFee": 12400
      },
      "parentId": "17533",
      "avgRatingString": "4.1",
      "totalRatingsString": "1K+",
      "sla": {
          "deliveryTime": 54,
          "lastMileTravel": 11.2,
          "serviceability": "SERVICEABLE",
          "slaString": "54 mins",
          "lastMileTravelString": "11.2 km",
          "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
          "nextCloseTime": "2023-10-04 23:45:00",
          "opened": true
      },
      "badges": {},
      "isOpen": true,
      "aggregatedDiscountInfoV2": {},
      "type": "F",
      "badgesV2": {
          "entityBadges": {
              "imageBased": {},
              "textBased": {},
              "textExtendedBadges": {}
          }
      },
      "orderabilityCommunication": {
          "title": {},
          "subTitle": {},
          "message": {},
          "customIcon": {}
      },
      "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
              "mediaType": "ADS_MEDIA_ENUM_IMAGE",
              "lottie": {},
              "video": {}
          }
      },
      "reviewsSummary": {},
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {}
  },
  "analytics": {
      "context": "seo-data-319be84f-e743-46f6-86e3-394c5bc1c2e9"
  },
  "cta": {
      "link": "https://www.swiggy.com/restaurants/cake-works-vanniar-street-choolaimedu-chennai-100194",
      "text": "RESTAURANT_MENU",
      "type": "WEBLINK"
  },
  "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
},
{
  "info": {
      "id": "141698",
      "name": "Arabian Grills",
      "cloudinaryImageId": "affnh0fjqay8bvxyovi8",
      "locality": "Aynavaram",
      "areaName": "Ayanavaram",
      "costForTwo": "₹150 for two",
      "cuisines": [
          "Arabian",
          "Grill",
          "North Indian",
          "Biryani"
      ],
      "avgRating": 3.8,
      "feeDetails": {
          "restaurantId": "141698",
          "fees": [
              {
                  "name": "BASE_DISTANCE",
                  "fee": 7700
              },
              {
                  "name": "BASE_TIME"
              },
              {
                  "name": "ANCILLARY_SURGE_FEE"
              }
          ],
          "totalFee": 7700
      },
      "parentId": "16951",
      "avgRatingString": "3.8",
      "totalRatingsString": "1K+",
      "sla": {
          "deliveryTime": 46,
          "lastMileTravel": 8.5,
          "serviceability": "SERVICEABLE",
          "slaString": "46 mins",
          "lastMileTravelString": "8.5 km",
          "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
          "nextCloseTime": "2023-10-04 23:00:00",
          "opened": true
      },
      "badges": {},
      "isOpen": true,
      "type": "F",
      "badgesV2": {
          "entityBadges": {
              "imageBased": {},
              "textBased": {},
              "textExtendedBadges": {}
          }
      },
      "aggregatedDiscountInfoV3": {
          "header": "₹125 OFF",
          "subHeader": "ABOVE ₹599",
          "discountTag": "FLAT DEAL"
      },
      "orderabilityCommunication": {
          "title": {},
          "subTitle": {},
          "message": {},
          "customIcon": {}
      },
      "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
              "mediaType": "ADS_MEDIA_ENUM_IMAGE",
              "lottie": {},
              "video": {}
          }
      },
      "reviewsSummary": {},
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {}
  },
  "analytics": {
      "context": "seo-data-319be84f-e743-46f6-86e3-394c5bc1c2e9"
  },
  "cta": {
      "link": "https://www.swiggy.com/restaurants/arabian-grills-aynavaram-ayanavaram-chennai-141698",
      "text": "RESTAURANT_MENU",
      "type": "WEBLINK"
  },
  "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
},
{
  "info": {
      "id": "176725",
      "name": "Salem RR Biriyani Unavagam",
      "cloudinaryImageId": "ny8kj6b4mltw140wil1l",
      "locality": "Egmore",
      "areaName": "Triplicane",
      "costForTwo": "₹400 for two",
      "cuisines": [
          "Biryani",
          "Chettinad",
          "Tandoor",
          "Chinese"
      ],
      "avgRating": 3.7,
      "feeDetails": {
          "restaurantId": "176725",
          "fees": [
              {
                  "name": "BASE_DISTANCE",
                  "fee": 6700
              },
              {
                  "name": "BASE_TIME"
              },
              {
                  "name": "ANCILLARY_SURGE_FEE"
              }
          ],
          "totalFee": 6700
      },
      "parentId": "176137",
      "avgRatingString": "3.7",
      "totalRatingsString": "5K+",
      "sla": {
          "deliveryTime": 42,
          "lastMileTravel": 7.9,
          "serviceability": "SERVICEABLE",
          "slaString": "42 mins",
          "lastMileTravelString": "7.9 km",
          "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
          "nextCloseTime": "2023-10-04 23:00:00",
          "opened": true
      },
      "badges": {},
      "isOpen": true,
      "aggregatedDiscountInfoV2": {},
      "type": "F",
      "badgesV2": {
          "entityBadges": {
              "imageBased": {},
              "textBased": {},
              "textExtendedBadges": {}
          }
      },
      "orderabilityCommunication": {
          "title": {},
          "subTitle": {},
          "message": {},
          "customIcon": {}
      },
      "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
              "mediaType": "ADS_MEDIA_ENUM_IMAGE",
              "lottie": {},
              "video": {}
          }
      },
      "reviewsSummary": {},
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {}
  },
  "analytics": {
      "context": "seo-data-319be84f-e743-46f6-86e3-394c5bc1c2e9"
  },
  "cta": {
      "link": "https://www.swiggy.com/restaurants/salem-rr-biriyani-unavagam-egmore-triplicane-chennai-176725",
      "text": "RESTAURANT_MENU",
      "type": "WEBLINK"
  },
  "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
},
{
  "info": {
      "id": "52490",
      "name": "A2B - Adyar Ananda Bhavan",
      "cloudinaryImageId": "p7ba2qf1r0krodfqxwzi",
      "locality": "MS Koil Street",
      "areaName": "Old Washermanpet",
      "costForTwo": "₹300 for two",
      "cuisines": [
          "South Indian",
          "North Indian",
          "Sweets",
          "Chinese"
      ],
      "avgRating": 4.4,
      "veg": true,
      "feeDetails": {
          "restaurantId": "52490",
          "fees": [
              {
                  "name": "BASE_DISTANCE",
                  "fee": 3000
              },
              {
                  "name": "BASE_TIME"
              },
              {
                  "name": "ANCILLARY_SURGE_FEE"
              }
          ],
          "totalFee": 3000
      },
      "parentId": "22",
      "avgRatingString": "4.4",
      "totalRatingsString": "10K+",
      "sla": {
          "deliveryTime": 28,
          "lastMileTravel": 2.7,
          "serviceability": "SERVICEABLE",
          "slaString": "28 mins",
          "lastMileTravelString": "2.7 km",
          "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
          "nextCloseTime": "2023-10-04 22:45:00",
          "opened": true
      },
      "badges": {
          "imageBadges": [
              {
                  "imageId": "v1695133679/badges/Pure_Veg111.png",
                  "description": "pureveg"
              }
          ]
      },
      "isOpen": true,
      "type": "F",
      "badgesV2": {
          "entityBadges": {
              "imageBased": {
                  "badgeObject": [
                      {
                          "attributes": {
                              "description": "pureveg",
                              "imageId": "v1695133679/badges/Pure_Veg111.png"
                          }
                      }
                  ]
              },
              "textBased": {},
              "textExtendedBadges": {}
          }
      },
      "aggregatedDiscountInfoV3": {
          "header": "20% OFF",
          "subHeader": "UPTO ₹50"
      },
      "orderabilityCommunication": {
          "title": {},
          "subTitle": {},
          "message": {},
          "customIcon": {}
      },
      "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
              "mediaType": "ADS_MEDIA_ENUM_IMAGE",
              "lottie": {},
              "video": {}
          }
      },
      "reviewsSummary": {},
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {}
  },
  "analytics": {
      "context": "seo-data-319be84f-e743-46f6-86e3-394c5bc1c2e9"
  },
  "cta": {
      "link": "https://www.swiggy.com/restaurants/a2b-adyar-ananda-bhavan-ms-koil-street-old-washermanpet-chennai-52490",
      "text": "RESTAURANT_MENU",
      "type": "WEBLINK"
  },
  "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
},
{
  "info": {
      "id": "407244",
      "name": "La Pino'z Pizza",
      "cloudinaryImageId": "zuobkwprhpluer4xqo1k",
      "locality": "Kilpauk",
      "areaName": "Kilpauk",
      "costForTwo": "₹300 for two",
      "cuisines": [
          "Pizzas",
          "Pastas",
          "Italian",
          "Desserts",
          "Beverages"
      ],
      "avgRating": 4,
      "veg": true,
      "feeDetails": {
          "restaurantId": "407244",
          "fees": [
              {
                  "name": "BASE_DISTANCE",
                  "fee": 8700
              },
              {
                  "name": "BASE_TIME"
              },
              {
                  "name": "ANCILLARY_SURGE_FEE"
              }
          ],
          "totalFee": 8700
      },
      "parentId": "4961",
      "avgRatingString": "4.0",
      "totalRatingsString": "1K+",
      "sla": {
          "deliveryTime": 50,
          "lastMileTravel": 9.1,
          "serviceability": "SERVICEABLE",
          "slaString": "50 mins",
          "lastMileTravelString": "9.1 km",
          "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
          "nextCloseTime": "2023-10-04 23:00:00",
          "opened": true
      },
      "badges": {},
      "isOpen": true,
      "type": "F",
      "badgesV2": {
          "entityBadges": {
              "imageBased": {},
              "textBased": {},
              "textExtendedBadges": {}
          }
      },
      "aggregatedDiscountInfoV3": {
          "header": "₹125 OFF",
          "subHeader": "ABOVE ₹699",
          "discountTag": "FLAT DEAL"
      },
      "orderabilityCommunication": {
          "title": {},
          "subTitle": {},
          "message": {},
          "customIcon": {}
      },
      "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
              "mediaType": "ADS_MEDIA_ENUM_IMAGE",
              "lottie": {},
              "video": {}
          }
      },
      "reviewsSummary": {},
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {}
  },
  "analytics": {
      "context": "seo-data-319be84f-e743-46f6-86e3-394c5bc1c2e9"
  },
  "cta": {
      "link": "https://www.swiggy.com/restaurants/la-pinoz-pizza-kilpauk-chennai-407244",
      "text": "RESTAURANT_MENU",
      "type": "WEBLINK"
  },
  "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
}]
const Body=()=>{
  return(
    <div className="body">
        <div className="search">Search</div>
        <div className="res-container">
          {apiList.map((restaurant)=>(
            <RestaurantCard key ={restaurant.info.id} resData={restaurant}/>
          ))}
        </div>      
    </div>
  )
}
const AppLayout=()=>{
  return(
    <div className="app">
      <Header/>
      <Body/>
    </div>
  )
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
