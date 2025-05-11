import React from "react";
import ReactDOM from "react-dom/client";
import "/app.css";
import { useState } from "react";
import FilterRescomponent from "./Components/FilterRescomponent";


export const restaurants = [
  {
    info: {
      id: "454403",
      name: "Chaayos Chai+Snacks=Relax",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2024/4/17/f92c604d-68cb-49db-8dec-9473650c363d_454403.JPG",
      locality: "Rangarajapuram Main Road",
      areaName: "Kodambakkam",
      costForTwo: "₹250 for two",
      cuisines: [
        "Bakery",
        "Beverages",
        "Chaat",
        "Desserts",
        "Home Food",
        "Italian",
        "Maharashtrian",
        "Snacks",
        "Street Food",
        "Sweets",
      ],
      avgRating: 4.6,
      parentId: "281782",
      avgRatingString: "4.6",
      totalRatingsString: "3.7K+",
      sla: {
        deliveryTime: 24,
        lastMileTravel: 4.7,
        serviceability: "SERVICEABLE",
        slaString: "20-25 mins",
        lastMileTravelString: "4.7 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2025-05-11 01:00:00",
        opened: true,
      },
      badges: {
        textExtendedBadges: [
          {
            iconId: "guiltfree/GF_Logo_android_3x",
            shortDescription: "options available",
            fontColor: "#7E808C",
          },
        ],
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {
            badgeObject: [
              {
                attributes: {
                  description: "",
                  fontColor: "#7E808C",
                  iconId: "guiltfree/GF_Logo_android_3x",
                  shortDescription: "options available",
                },
              },
            ],
          },
        },
      },
      aggregatedDiscountInfoV3: {
        header: "ITEMS",
        subHeader: "AT ₹94",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-96d9839c-0cfd-4fd2-b2c1-838157dfa6c4",
    },
    cta: {
      link: "https://www.swiggy.com/city/chennai/chaayos-chai-snacks-relax-rangarajapuram-main-road-kodambakkam-rest454403",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "37630",
      name: "Shree Mithai",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2024/4/24/a345b837-4834-44ce-a4d5-3f60ee29d7c0_37630.jpg",
      locality: "Anna Nagar",
      areaName: "Anna Nagar",
      costForTwo: "₹250 for two",
      cuisines: ["Desserts", "Chaat", "Street Food", "Sweets"],
      avgRating: 4.7,
      veg: true,
      parentId: "6988",
      avgRatingString: "4.7",
      totalRatingsString: "89K+",
      sla: {
        deliveryTime: 24,
        lastMileTravel: 2.9,
        serviceability: "SERVICEABLE",
        slaString: "20-25 mins",
        lastMileTravelString: "2.9 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2025-05-10 22:30:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "20% OFF",
        subHeader: "ABOVE ₹3000",
        discountTag: "FLAT DEAL",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "4.4",
          ratingCount: "16K+",
        },
        source: "GOOGLE",
        sourceIconImageId: "v1704440323/google_ratings/rating_google_tag",
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-96d9839c-0cfd-4fd2-b2c1-838157dfa6c4",
    },
    cta: {
      link: "https://www.swiggy.com/city/chennai/shree-mithai-anna-nagar-rest37630",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "14673",
      name: "A2B - Adyar Ananda Bhavan",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2025/1/15/2617a8cf-28da-436c-948d-0173c1558adf_14673.jpg",
      locality: "Anna Salai",
      areaName: "Anna Nagar",
      costForTwo: "₹300 for two",
      cuisines: ["South Indian", "Sweets", "Chinese"],
      avgRating: 4.6,
      veg: true,
      parentId: "22",
      avgRatingString: "4.6",
      totalRatingsString: "60K+",
      sla: {
        deliveryTime: 22,
        lastMileTravel: 3.9,
        serviceability: "SERVICEABLE",
        slaString: "20-25 mins",
        lastMileTravelString: "3.9 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2025-05-10 23:59:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: "Rxawards/_CATEGORY-Mithai.png",
            description: "Delivery!",
          },
          {
            imageId: "Rxawards/_CATEGORY-South%20Indian.png",
            description: "Delivery!",
          },
        ],
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "Delivery!",
                  imageId: "Rxawards/_CATEGORY-Mithai.png",
                },
              },
              {
                attributes: {
                  description: "Delivery!",
                  imageId: "Rxawards/_CATEGORY-South%20Indian.png",
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "₹150 OFF",
        subHeader: "ABOVE ₹349",
        discountTag: "FLAT DEAL",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "3.9",
          ratingCount: "3.4K+",
        },
        source: "GOOGLE",
        sourceIconImageId: "v1704440323/google_ratings/rating_google_tag",
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-96d9839c-0cfd-4fd2-b2c1-838157dfa6c4",
    },
    cta: {
      link: "https://www.swiggy.com/city/chennai/a2b-adyar-ananda-bhavan-anna-salai-anna-nagar-rest14673",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "34539",
      name: "Sangeetha Veg Restaurant",
      cloudinaryImageId: "ibmfd8tpaxgw370bgkwr",
      locality: "Koyembedu",
      areaName: "Koyambedu",
      costForTwo: "₹600 for two",
      cuisines: ["South Indian", "Chinese"],
      avgRating: 4.7,
      veg: true,
      parentId: "1260",
      avgRatingString: "4.7",
      totalRatingsString: "58K+",
      sla: {
        deliveryTime: 28,
        lastMileTravel: 3.6,
        serviceability: "SERVICEABLE",
        slaString: "25-30 mins",
        lastMileTravelString: "3.6 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2025-05-10 22:45:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      aggregatedDiscountInfoV2: {},
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-96d9839c-0cfd-4fd2-b2c1-838157dfa6c4",
    },
    cta: {
      link: "https://www.swiggy.com/city/chennai/sangeetha-veg-restaurant-koyembedu-koyambedu-rest34539",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "49850",
      name: "Hot Breads",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2025/4/25/4cefc98a-c51a-4094-8f82-d1152bdada5d_49850.jpg",
      locality: "Anna Nagar",
      areaName: "Anna Nagar",
      costForTwo: "₹150 for two",
      cuisines: ["Bakery", "Desserts"],
      avgRating: 4.7,
      parentId: "470",
      avgRatingString: "4.7",
      totalRatingsString: "8.9K+",
      sla: {
        deliveryTime: 12,
        lastMileTravel: 1.6,
        serviceability: "SERVICEABLE",
        slaString: "10-15 mins",
        lastMileTravelString: "1.6 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2025-05-10 23:00:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: "bolt/big%20rx%20listing%2015%20mins%20.png",
            description: "bolt!",
          },
        ],
        textExtendedBadges: [
          {
            iconId: "guiltfree/GF_Logo_android_3x",
            shortDescription: "options available",
            fontColor: "#7E808C",
          },
        ],
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "bolt!",
                  imageId: "bolt/big%20rx%20listing%2015%20mins%20.png",
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {
            badgeObject: [
              {
                attributes: {
                  description: "",
                  fontColor: "#7E808C",
                  iconId: "guiltfree/GF_Logo_android_3x",
                  shortDescription: "options available",
                },
              },
            ],
          },
        },
      },
      aggregatedDiscountInfoV3: {
        header: "20% OFF",
        subHeader: "UPTO ₹50",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "4.2",
          ratingCount: "576",
        },
        source: "GOOGLE",
        sourceIconImageId: "v1704440323/google_ratings/rating_google_tag",
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-96d9839c-0cfd-4fd2-b2c1-838157dfa6c4",
    },
    cta: {
      link: "https://www.swiggy.com/city/chennai/hot-breads-anna-nagar-rest49850",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "477784",
      name: "Ciclo Life",
      cloudinaryImageId: "wiheczirxtmcl4bsldrv",
      locality: "1st Avenue",
      areaName: "Annanagar",
      costForTwo: "₹300 for two",
      cuisines: ["Healthy Food", "Salads", "Keto"],
      avgRating: 4.4,
      parentId: "7986",
      avgRatingString: "4.4",
      totalRatingsString: "1.7K+",
      sla: {
        deliveryTime: 34,
        lastMileTravel: 1.5,
        serviceability: "SERVICEABLE",
        slaString: "30-35 mins",
        lastMileTravelString: "1.5 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2025-05-11 00:00:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: "newg.png",
            description: "Gourmet",
          },
        ],
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "Gourmet",
                  imageId: "newg.png",
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "50% OFF",
        subHeader: "UPTO ₹100",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-96d9839c-0cfd-4fd2-b2c1-838157dfa6c4",
    },
    cta: {
      link: "https://www.swiggy.com/city/chennai/ciclo-life-1st-avenue-annanagar-rest477784",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "38464",
      name: "Ratna Cafe (Estd.1948)",
      cloudinaryImageId: "se4isfktvssn0xs4i3k0",
      locality: "Kilpauk",
      areaName: "Kilpauk",
      costForTwo: "₹200 for two",
      cuisines: ["South Indian", "Indian", "Chinese"],
      avgRating: 4.5,
      veg: true,
      parentId: "167537",
      avgRatingString: "4.5",
      totalRatingsString: "48K+",
      sla: {
        deliveryTime: 21,
        lastMileTravel: 2.5,
        serviceability: "SERVICEABLE",
        slaString: "20-25 mins",
        lastMileTravelString: "2.5 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2025-05-10 23:00:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      aggregatedDiscountInfoV2: {},
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "3.9",
          ratingCount: "3.9K+",
        },
        source: "GOOGLE",
        sourceIconImageId: "v1704440323/google_ratings/rating_google_tag",
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-96d9839c-0cfd-4fd2-b2c1-838157dfa6c4",
    },
    cta: {
      link: "https://www.swiggy.com/city/chennai/ratna-cafe-estd-1948-kilpauk-rest38464",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "15924",
      name: "House of Idlies",
      cloudinaryImageId: "xjsfreyjmosumy1tircn",
      locality: "T Nagar",
      areaName: "Thyagaraya Nagar",
      costForTwo: "₹200 for two",
      cuisines: ["South Indian"],
      avgRating: 4.5,
      veg: true,
      parentId: "8455",
      avgRatingString: "4.5",
      totalRatingsString: "50K+",
      sla: {
        deliveryTime: 36,
        lastMileTravel: 5,
        serviceability: "SERVICEABLE",
        slaString: "35-40 mins",
        lastMileTravelString: "5.0 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2025-05-10 23:00:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: "v1695133679/badges/Pure_Veg111.png",
            description: "pureveg",
          },
        ],
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "pureveg",
                  imageId: "v1695133679/badges/Pure_Veg111.png",
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "20% OFF",
        subHeader: "UPTO ₹50",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "4.2",
          ratingCount: "1.6K+",
        },
        source: "GOOGLE",
        sourceIconImageId: "v1704440323/google_ratings/rating_google_tag",
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-96d9839c-0cfd-4fd2-b2c1-838157dfa6c4",
    },
    cta: {
      link: "https://www.swiggy.com/city/chennai/house-of-idlies-t-nagar-thyagaraya-nagar-rest15924",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "15319",
      name: "Millet Maagic Meal",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2024/4/4/364898a7-45eb-40b1-9156-1a372f903ad4_15319.jpg",
      locality: "Alwarpet",
      areaName: "Mylapore",
      costForTwo: "₹250 for two",
      cuisines: ["Healthy Food", "South Indian"],
      avgRating: 4.8,
      veg: true,
      parentId: "16915",
      avgRatingString: "4.8",
      totalRatingsString: "53K+",
      sla: {
        deliveryTime: 36,
        lastMileTravel: 7.8,
        serviceability: "SERVICEABLE",
        slaString: "35-40 mins",
        lastMileTravelString: "7.8 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2025-05-10 22:00:00",
        opened: true,
      },
      badges: {
        textExtendedBadges: [
          {
            iconId: "guiltfree/GF_Logo_android_3x",
            shortDescription: "brand",
            fontColor: "#7E808C",
          },
        ],
      },
      isOpen: true,
      aggregatedDiscountInfoV2: {},
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {
            badgeObject: [
              {
                attributes: {
                  description: "",
                  fontColor: "#7E808C",
                  iconId: "guiltfree/GF_Logo_android_3x",
                  shortDescription: "brand",
                },
              },
            ],
          },
        },
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "4.5",
          ratingCount: "1.0K+",
        },
        source: "GOOGLE",
        sourceIconImageId: "v1704440323/google_ratings/rating_google_tag",
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-96d9839c-0cfd-4fd2-b2c1-838157dfa6c4",
    },
    cta: {
      link: "https://www.swiggy.com/city/chennai/millet-maagic-meal-alwarpet-mylapore-rest15319",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "37067",
      name: "Subway",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2025/1/21/b637865d-d025-4850-bbf9-761969eb52bf_37067.JPG",
      locality: "Kilpauk",
      areaName: "Kilpauk",
      costForTwo: "₹350 for two",
      cuisines: ["sandwich", "Salads", "wrap", "Healthy Food"],
      avgRating: 4.3,
      parentId: "2",
      avgRatingString: "4.3",
      totalRatingsString: "35K+",
      sla: {
        deliveryTime: 16,
        lastMileTravel: 1.9,
        serviceability: "SERVICEABLE",
        slaString: "15-20 mins",
        lastMileTravelString: "1.9 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2025-05-11 05:59:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "40% OFF",
        discountTag: "FLAT DEAL",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "4.1",
          ratingCount: "809",
        },
        source: "GOOGLE",
        sourceIconImageId: "v1704440323/google_ratings/rating_google_tag",
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-96d9839c-0cfd-4fd2-b2c1-838157dfa6c4",
    },
    cta: {
      link: "https://www.swiggy.com/city/chennai/subway-kilpauk-rest37067",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "10080",
      name: "French Loaf",
      cloudinaryImageId: "c7976a7dd110e058c064822834383ad0",
      locality: "Annanagar",
      areaName: "Anna Nagar",
      costForTwo: "₹400 for two",
      cuisines: ["Desserts", "Bakery", "Snacks", "Pizzas", "Beverages"],
      avgRating: 4.4,
      parentId: "393",
      avgRatingString: "4.4",
      totalRatingsString: "7.3K+",
      sla: {
        deliveryTime: 20,
        lastMileTravel: 2.6,
        serviceability: "SERVICEABLE",
        slaString: "15-20 mins",
        lastMileTravelString: "2.6 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2025-05-10 23:59:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "ITEMS",
        subHeader: "AT ₹69",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "3.9",
          ratingCount: "569",
        },
        source: "GOOGLE",
        sourceIconImageId: "v1704440323/google_ratings/rating_google_tag",
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-96d9839c-0cfd-4fd2-b2c1-838157dfa6c4",
    },
    cta: {
      link: "https://www.swiggy.com/city/chennai/french-loaf-annanagar-anna-nagar-rest10080",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "124087",
      name: "Chai Waale",
      cloudinaryImageId: "wwcxxim2utjsc8anra2q",
      locality: "?Kilpauk Garden Road",
      areaName: "Purasawalkam",
      costForTwo: "₹200 for two",
      cuisines: ["Beverages", "Snacks"],
      avgRating: 4.6,
      veg: true,
      parentId: "7228",
      avgRatingString: "4.6",
      totalRatingsString: "7.5K+",
      sla: {
        deliveryTime: 21,
        lastMileTravel: 2.7,
        serviceability: "SERVICEABLE",
        slaString: "20-25 mins",
        lastMileTravelString: "2.7 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2025-05-11 00:00:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: "Rxawards/_CATEGORY-Cafe%20&%20Chai.png",
            description: "Delivery!",
          },
        ],
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "Delivery!",
                  imageId: "Rxawards/_CATEGORY-Cafe%20&%20Chai.png",
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "15% OFF",
        subHeader: "ABOVE ₹500",
        discountTag: "FLAT DEAL",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-96d9839c-0cfd-4fd2-b2c1-838157dfa6c4",
    },
    cta: {
      link: "https://www.swiggy.com/city/chennai/chai-waale-kilpauk-garden-road-purasawalkam-rest124087",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "121807",
      name: "The Brownie Studio",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2025/4/4/15e5b56a-5b42-4465-947d-9cb771f63e47_121807.jpg",
      locality: "Shenoy Nagar",
      areaName: "Nungambakkam",
      costForTwo: "₹700 for two",
      cuisines: ["Bakery", "Cakes", "Desserts", "Ice Cream", "Sweets"],
      avgRating: 4.7,
      parentId: "5976",
      avgRatingString: "4.7",
      totalRatingsString: "6.0K+",
      sla: {
        deliveryTime: 17,
        lastMileTravel: 1.3,
        serviceability: "SERVICEABLE",
        slaString: "15-20 mins",
        lastMileTravelString: "1.3 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2025-05-11 00:30:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: "Rxawards/_CATEGORY-Desserts.png",
            description: "Delivery!",
          },
          {
            imageId: "newg.png",
            description: "Gourmet",
          },
        ],
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "Delivery!",
                  imageId: "Rxawards/_CATEGORY-Desserts.png",
                },
              },
              {
                attributes: {
                  description: "Gourmet",
                  imageId: "newg.png",
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "ITEMS",
        subHeader: "AT ₹99",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "4.5",
          ratingCount: "421",
        },
        source: "GOOGLE",
        sourceIconImageId: "v1704440323/google_ratings/rating_google_tag",
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-96d9839c-0cfd-4fd2-b2c1-838157dfa6c4",
    },
    cta: {
      link: "https://www.swiggy.com/city/chennai/the-brownie-studio-shenoy-nagar-nungambakkam-rest121807",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "376260",
      name: "Junior Kuppanna",
      cloudinaryImageId: "90e2b3d73591638a2984645422a85379",
      locality: "Kodambakkam High Rd",
      areaName: "Nungambakkam",
      costForTwo: "₹400 for two",
      cuisines: ["Biryani", "South Indian"],
      avgRating: 4.3,
      parentId: "112209",
      avgRatingString: "4.3",
      totalRatingsString: "10K+",
      sla: {
        deliveryTime: 34,
        lastMileTravel: 4.7,
        serviceability: "SERVICEABLE",
        slaString: "30-35 mins",
        lastMileTravelString: "4.7 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2025-05-11 05:00:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "ITEMS",
        subHeader: "AT ₹199",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-96d9839c-0cfd-4fd2-b2c1-838157dfa6c4",
    },
    cta: {
      link: "https://www.swiggy.com/city/chennai/junior-kuppanna-kodambakkam-high-rd-nungambakkam-rest376260",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "14674",
      name: "Hotel Saravana Bhavan",
      cloudinaryImageId: "plmthsv6gho0fqppu2zc",
      locality: "Anna Nagar",
      areaName: "Anna Nagar",
      costForTwo: "₹300 for two",
      cuisines: ["South Indian", "North Indian", "Sweets"],
      avgRating: 4.4,
      veg: true,
      parentId: "101987",
      avgRatingString: "4.4",
      totalRatingsString: "71K+",
      sla: {
        deliveryTime: 29,
        lastMileTravel: 3,
        serviceability: "SERVICEABLE",
        slaString: "25-30 mins",
        lastMileTravelString: "3.0 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2025-05-10 23:00:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: "v1695133679/badges/Pure_Veg111.png",
            description: "pureveg",
          },
        ],
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "pureveg",
                  imageId: "v1695133679/badges/Pure_Veg111.png",
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "30% OFF",
        subHeader: "UPTO ₹75",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "3.5",
          ratingCount: "11K+",
        },
        source: "GOOGLE",
        sourceIconImageId: "v1704440323/google_ratings/rating_google_tag",
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-96d9839c-0cfd-4fd2-b2c1-838157dfa6c4",
    },
    cta: {
      link: "https://www.swiggy.com/city/chennai/hotel-saravana-bhavan-anna-nagar-rest14674",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "60888",
      name: "Eating Circles",
      cloudinaryImageId: "ji1dtwtd368vir8t0pik",
      locality: "Alwarpet",
      areaName: "Mylapore",
      costForTwo: "₹200 for two",
      cuisines: ["South Indian"],
      avgRating: 4.7,
      veg: true,
      parentId: "6910",
      avgRatingString: "4.7",
      totalRatingsString: "79K+",
      sla: {
        deliveryTime: 38,
        lastMileTravel: 8.5,
        serviceability: "SERVICEABLE",
        slaString: "35-40 mins",
        lastMileTravelString: "8.5 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2025-05-10 23:00:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "ITEMS",
        subHeader: "AT ₹44",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "4.4",
          ratingCount: "5.8K+",
        },
        source: "GOOGLE",
        sourceIconImageId: "v1704440323/google_ratings/rating_google_tag",
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-96d9839c-0cfd-4fd2-b2c1-838157dfa6c4",
    },
    cta: {
      link: "https://www.swiggy.com/city/chennai/eating-circles-alwarpet-mylapore-rest60888",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "12226",
      name: "Murugan Idli Shop",
      cloudinaryImageId: "thdqtm4ekketxbdgspkx",
      locality: "Shanthi Colony",
      areaName: "Annanagar",
      costForTwo: "₹300 for two",
      cuisines: ["South Indian"],
      avgRating: 4.6,
      veg: true,
      parentId: "1248",
      avgRatingString: "4.6",
      totalRatingsString: "51K+",
      sla: {
        deliveryTime: 17,
        lastMileTravel: 2.7,
        serviceability: "SERVICEABLE",
        slaString: "15-20 mins",
        lastMileTravelString: "2.7 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2025-05-10 23:30:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "10% OFF",
        subHeader: "UPTO ₹40",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-96d9839c-0cfd-4fd2-b2c1-838157dfa6c4",
    },
    cta: {
      link: "https://www.swiggy.com/city/chennai/murugan-idli-shop-shanthi-colony-annanagar-rest12226",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "20264",
      name: "Chai Kings",
      cloudinaryImageId: "fu4nj6pgc0ppcfv1nsfv",
      locality: "Santosh Super Stores",
      areaName: "Anna Nagar East",
      costForTwo: "₹150 for two",
      cuisines: ["Beverages", "Snacks", "Bakery"],
      avgRating: 4.7,
      parentId: "2627",
      avgRatingString: "4.7",
      totalRatingsString: "27K+",
      sla: {
        deliveryTime: 21,
        lastMileTravel: 3,
        serviceability: "SERVICEABLE",
        slaString: "20-25 mins",
        lastMileTravelString: "3.0 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2025-05-10 23:59:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: "Rxawards/_CATEGORY-Cafe%20&%20Chai.png",
            description: "Delivery!",
          },
        ],
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "Delivery!",
                  imageId: "Rxawards/_CATEGORY-Cafe%20&%20Chai.png",
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "30% OFF",
        subHeader: "UPTO ₹75",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-96d9839c-0cfd-4fd2-b2c1-838157dfa6c4",
    },
    cta: {
      link: "https://www.swiggy.com/city/chennai/chai-kings-santosh-super-stores-anna-nagar-east-rest20264",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "16624",
      name: "Ganga Sweets",
      cloudinaryImageId: "f2ys1sjmxyhvhslwiyys",
      locality: "Anna Nagar",
      areaName: "Anna Nagar",
      costForTwo: "₹250 for two",
      cuisines: ["South Indian", "Sweets"],
      avgRating: 4.7,
      veg: true,
      parentId: "405",
      avgRatingString: "4.7",
      totalRatingsString: "9.6K+",
      sla: {
        deliveryTime: 15,
        lastMileTravel: 1.8,
        serviceability: "SERVICEABLE",
        slaString: "15-20 mins",
        lastMileTravelString: "1.8 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2025-05-10 23:00:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: "bolt/big%20rx%20listing%2015%20mins%20.png",
            description: "bolt!",
          },
          {
            imageId: "v1695133679/badges/Pure_Veg111.png",
            description: "pureveg",
          },
        ],
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "bolt!",
                  imageId: "bolt/big%20rx%20listing%2015%20mins%20.png",
                },
              },
              {
                attributes: {
                  description: "pureveg",
                  imageId: "v1695133679/badges/Pure_Veg111.png",
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "20% OFF",
        subHeader: "UPTO ₹50",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "4.1",
          ratingCount: "2.2K+",
        },
        source: "GOOGLE",
        sourceIconImageId: "v1704440323/google_ratings/rating_google_tag",
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-96d9839c-0cfd-4fd2-b2c1-838157dfa6c4",
    },
    cta: {
      link: "https://www.swiggy.com/city/chennai/ganga-sweets-anna-nagar-rest16624",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "10108",
      name: "Meat and Eat",
      cloudinaryImageId: "o7jmumglefb1mc1dm93c",
      locality: "Ameerjan Street",
      areaName: "Kodambakkam",
      costForTwo: "₹250 for two",
      cuisines: ["Indian"],
      avgRating: 4.4,
      parentId: "632",
      avgRatingString: "4.4",
      totalRatingsString: "13K+",
      sla: {
        deliveryTime: 29,
        lastMileTravel: 2,
        serviceability: "SERVICEABLE",
        slaString: "25-30 mins",
        lastMileTravelString: "2.0 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2025-05-10 09:59:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: "bolt/big%20rx%20listing%2015%20mins%20.png",
            description: "bolt!",
          },
        ],
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "bolt!",
                  imageId: "bolt/big%20rx%20listing%2015%20mins%20.png",
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "40% OFF",
        subHeader: "UPTO ₹80",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-96d9839c-0cfd-4fd2-b2c1-838157dfa6c4",
    },
    cta: {
      link: "https://www.swiggy.com/city/chennai/meat-and-eat-ameerjan-street-kodambakkam-rest10108",
      type: "WEBLINK",
    },
  },
];

const RestaurantCard = (props) => {
  const { name, cloudinaryImageId, cuisines, avgRating, sla, areaName } =
    props.resobj.info;

  return (
    <div className="restaurant-card">
      <img
        className="restaurant-card-img"
        src={
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
          cloudinaryImageId
        }
        alt={name}
      />
      <div className="restaurant-card-details">
        <h2>{name}</h2>
        <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            aria-hidden="true"
          >
            <circle cx="10" cy="10" r="9" fill="url(#ratingGradient)"></circle>
            <path
              d="M10.0816 12.865C10.0312 12.8353 9.96876 12.8353 9.91839 12.865L7.31647 14.3968C6.93482 14.6214 6.47106 14.2757 6.57745 13.8458L7.27568 11.0245C7.29055 10.9644 7.26965 10.9012 7.22195 10.8618L4.95521 8.99028C4.60833 8.70388 4.78653 8.14085 5.23502 8.10619L8.23448 7.87442C8.29403 7.86982 8.34612 7.83261 8.36979 7.77777L9.54092 5.06385C9.71462 4.66132 10.2854 4.66132 10.4591 5.06385L11.6302 7.77777C11.6539 7.83261 11.706 7.86982 11.7655 7.87442L14.765 8.10619C15.2135 8.14085 15.3917 8.70388 15.0448 8.99028L12.7781 10.8618C12.7303 10.9012 12.7095 10.9644 12.7243 11.0245L13.4225 13.8458C13.5289 14.2757 13.0652 14.6214 12.6835 14.3968L10.0816 12.865Z"
              fill="white"
            ></path>
            <defs>
              <linearGradient
                id="ratingGradient"
                x1="10"
                y1="1"
                x2="10"
                y2="19"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#21973B" />
                <stop offset="1" stopColor="#128540" />
              </linearGradient>
            </defs>
          </svg>
          <span>{avgRating}</span>
          <span> &#x2022;</span>
          <span>{sla.slaString} </span>
        </div>
        <p>{cuisines.slice(0, 4).join(", ")}</p>
        <p>{areaName}</p>
      </div>
    </div>
  );
};

const Header = () => (
  <div className="head">
    <div className="header">
      <div className="logo">
        <img
          src="https://i.postimg.cc/05JHrTyR/85ba31ca-36e6-4f99-90dd-54fd32d4814a-removalai-preview.png"
          alt="logo"
        />
      </div>
      <div className="navbar">
        <ul className="nav-list">
          <li>Swiggy Corporate</li>
          <li>Search</li>
          <li>Offers</li>
          <li>Help</li>
          <li>Sign In</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  </div>
);

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState(restaurants);

  return (
    <div className="body">
      <div className="search-bar">
        <p className="text-box">
          Restaurants with online food delivery in Chennai
        </p>
        <FilterRescomponent setListOfRestaurants={setListOfRestaurants} />
      </div>
      <div className="restaurant-container">
        {listOfRestaurants.map((res, index) => (
          <RestaurantCard key={index} resobj={res} />
        ))}
      </div>
    </div>
  );
};


const Applayout = () => (
  <div className="app">
    <Header />
    <Body />
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Applayout />);
