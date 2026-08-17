
    (function() {
      var preconnectOrigins = ["https://cdn.shopify.com"];
      var scripts = ["/cdn/shopifycloud/checkout-web/assets/c1/polyfills-legacy.Lg8ZtQUP.js","/cdn/shopifycloud/checkout-web/assets/c1/app-legacy.B-0PaAbx.js","/cdn/shopifycloud/checkout-web/assets/c1/esnext-vendor-legacy.XRcTd289.js","/cdn/shopifycloud/checkout-web/assets/c1/context-browser-legacy.BwIhOLml.js","/cdn/shopifycloud/checkout-web/assets/c1/shipping-methods-grouping-legacy.ryYCnv6z.js","/cdn/shopifycloud/checkout-web/assets/c1/receipt-mapper-load-recovery-legacy.CDYCKUwX.js","/cdn/shopifycloud/checkout-web/assets/c1/receipt-eager-mappers-legacy.NGEBWZCu.js","/cdn/shopifycloud/checkout-web/assets/c1/utilities-errors-legacy.VDaCfqRA.js","/cdn/shopifycloud/checkout-web/assets/c1/checkout-proposal-legacy.ChH7_MiV.js","/cdn/shopifycloud/checkout-web/assets/c1/helpers-installmentsNotSupportedForAddress-legacy.DpcRtwA0.js","/cdn/shopifycloud/checkout-web/assets/c1/consent-manager-shared-legacy.CrdeHfxr.js","/cdn/shopifycloud/checkout-web/assets/c1/utilities-extension-execution-errors-legacy.CKo8W_Fp.js","/cdn/shopifycloud/checkout-web/assets/c1/extensions-rpc-legacy.Dty9ZMAC.js","/cdn/shopifycloud/checkout-web/assets/c1/error-logger-report-graphql-error-legacy.CA7rgIy-.js","/cdn/shopifycloud/checkout-web/assets/c1/shop-pay-normalizeBuyerDetails-legacy.BOEuPAg0.js","/cdn/shopifycloud/checkout-web/assets/c1/NotFound-legacy.BNXy0Z-K.js","/cdn/shopifycloud/checkout-web/assets/c1/hydrate-legacy.BnlEmIhY.js","/cdn/shopifycloud/checkout-web/assets/c1/utilities-browser-legacy.BVWOAJld.js","/cdn/shopifycloud/checkout-web/assets/c1/helpers-derivations-legacy.Bd9_OqgW.js","/cdn/shopifycloud/checkout-web/assets/c1/color-contrast-colorContrast-legacy.BRk9WPy8.js","/cdn/shopifycloud/checkout-web/assets/c1/locale-en-legacy.DUEZkwzh.js","/cdn/shopifycloud/checkout-web/assets/c1/OnePage-legacy.Cxqpcerj.js","/cdn/shopifycloud/checkout-web/assets/c1/hooks-useUnauthenticatedErrorModal-legacy.DOCodx1w.js","/cdn/shopifycloud/checkout-web/assets/c1/hooks-usePostPurchase-legacy.C9dlbbA5.js","/cdn/shopifycloud/checkout-web/assets/c1/components-DeliveryTransition-legacy.CupzmY7n.js","/cdn/shopifycloud/checkout-web/assets/c1/hooks-useShowShopPayOptin-legacy.CGXA8qZX.js","/cdn/shopifycloud/checkout-web/assets/c1/remember-me-hooks-legacy.FqYmEdOj.js","/cdn/shopifycloud/checkout-web/assets/c1/ChangeCompanyLocationLink-legacy.jPMBA9MR.js","/cdn/shopifycloud/checkout-web/assets/c1/BillingAddressForm-legacy.ZMw6RN-r.js","/cdn/shopifycloud/checkout-web/assets/c1/PhoneField-legacy.CvGxnI86.js","/cdn/shopifycloud/checkout-web/assets/c1/ImpressionEventCapture-legacy.DxvRDDUV.js","/cdn/shopifycloud/checkout-web/assets/c1/components-RedirectionNotice.module-legacy.D0l-x3uz.js","/cdn/shopifycloud/checkout-web/assets/c1/Popover-legacy.DhpjU1Lu.js","/cdn/shopifycloud/checkout-web/assets/c1/Choice-legacy.CqQqj3Xc.js","/cdn/shopifycloud/checkout-web/assets/c1/Interaction-tracker-legacy.DnpYb1m8.js","/cdn/shopifycloud/checkout-web/assets/c1/Checkbox-legacy.FyfUZG7N.js","/cdn/shopifycloud/checkout-web/assets/c1/hooks-useForceShopPayUrl-legacy.BMq3sXDt.js","/cdn/shopifycloud/checkout-web/assets/c1/hooks-useEcpSpiDebugLog-legacy.DGB5EOAS.js","/cdn/shopifycloud/checkout-web/assets/c1/ShopPayLogo-legacy.CZ8J2Uou.js","/cdn/shopifycloud/checkout-web/assets/c1/Monorail-monorailMetric-wallets-legacy.BYh7fmEt.js","/cdn/shopifycloud/checkout-web/assets/c1/cross-border-hooks-legacy.Dt4XYz2q.js","/cdn/shopifycloud/checkout-web/assets/c1/EmptyState-legacy.BduRrN5A.js","/cdn/shopifycloud/checkout-web/assets/c1/AutocompleteField-hooks-legacy.CdSXNw6X.js","/cdn/shopifycloud/checkout-web/assets/c1/PendingShipping-legacy.Du5HniSw.js","/cdn/shopifycloud/checkout-web/assets/c1/components-useVaultedMsiInstallments-legacy.BGDGyM8G.js","/cdn/shopifycloud/checkout-web/assets/c1/PaymentIcon-legacy.B88TpWxC.js","/cdn/shopifycloud/checkout-web/assets/c1/shop-cash-context-legacy.oe107Kcz.js","/cdn/shopifycloud/checkout-web/assets/c1/hooks-useGeneralPaymentErrorMessage-legacy.BkE2uXgI.js","/cdn/shopifycloud/checkout-web/assets/c1/PaymentLine-legacy.C3RR-D-D.js","/cdn/shopifycloud/checkout-web/assets/c1/useShopPayButtonClassName-legacy.BKQTK_qB.js","/cdn/shopifycloud/checkout-web/assets/c1/cvv-cvvBridge-legacy.Da24bV5Q.js","/cdn/shopifycloud/checkout-web/assets/c1/hooks-useFilteredShopPayAvailablePaymentMethods-legacy.8jSejvvt.js","/cdn/shopifycloud/checkout-web/assets/c1/Section-legacy.DWhphoLg.js","/cdn/shopifycloud/checkout-web/assets/c1/MobileOrderSummary-legacy.CvQV0A5k.js","/cdn/shopifycloud/checkout-web/assets/c1/useShopPaySessionTokenStorage-legacy.BoNf3ybc.js","/cdn/shopifycloud/checkout-web/assets/c1/hooks-useOnePageFormSubmit-legacy.BQ3CPva_.js","/cdn/shopifycloud/checkout-web/assets/c1/PaymentButtons-legacy.BWQ55ey7.js","/cdn/shopifycloud/checkout-web/assets/c1/shop-pay-installments-types-legacy.CoA9W-KH.js","/cdn/shopifycloud/checkout-web/assets/c1/IncentiveBadge-legacy.CG4WgcE4.js","/cdn/shopifycloud/checkout-web/assets/c1/utils-useViolationsHandler-legacy.C9BOpkKc.js","/cdn/shopifycloud/checkout-web/assets/c1/negotiated-findSelectedDeliveryMethod-legacy.FzJgxTeL.js","/cdn/shopifycloud/checkout-web/assets/c1/hooks-payment-button-legacy.BQ_zG32Q.js","/cdn/shopifycloud/checkout-web/assets/c1/hooks-useStableHostMethodsReferences-legacy.DLB-Gq7k.js","/cdn/shopifycloud/checkout-web/assets/c1/shop-cash-monorail-legacy.dUEdr0Q3.js","/cdn/shopifycloud/checkout-web/assets/c1/hooks-useAvailableShopPromotionDiscount-legacy.Bwh1O0GY.js","/cdn/shopifycloud/checkout-web/assets/c1/BillingAddressSelector-legacy.8wL7cPH5.js","/cdn/shopifycloud/checkout-web/assets/c1/PaymentErrorBanner-legacy.Dk-mRQXP.js","/cdn/shopifycloud/checkout-web/assets/c1/Switch-legacy.Cbp_ubjt.js","/cdn/shopifycloud/checkout-web/assets/c1/checkout-as-guest-amazon-pay-legacy.DlP336i7.js","/cdn/shopifycloud/checkout-web/assets/c1/Middot-legacy.E_Dj953q.js","/cdn/shopifycloud/checkout-web/assets/c1/EstimatedDeliveryContent-legacy.CNFILHTK.js","/cdn/shopifycloud/checkout-web/assets/c1/ShippingMethodRateLabel-legacy.CpPhxglY.js","/cdn/shopifycloud/checkout-web/assets/c1/shipping-methods-consolidated-included-legacy.rKFXfqpV.js","/cdn/shopifycloud/checkout-web/assets/c1/ShippingLines-legacy.D9ZouwlI.js","/cdn/shopifycloud/checkout-web/assets/c1/ShipmentBreakdown-legacy.BMfJ7nIM.js","/cdn/shopifycloud/checkout-web/assets/c1/MerchandiseModal-legacy.I6frP6GW.js","/cdn/shopifycloud/checkout-web/assets/c1/ShippingMethodSelector-legacy.C4exdQUW.js","/cdn/shopifycloud/checkout-web/assets/c1/TextArea-legacy.BAauYQSD.js","/cdn/shopifycloud/checkout-web/assets/c1/SubscriptionPriceBreakdown-legacy.4893odFL.js","/cdn/shopifycloud/checkout-web/assets/c1/StockProblems-StockProblemsLineItemList-legacy.J_SFMzcb.js"];
      var styles = [];
      var fontPreconnectUrls = [];
      var fontPrefetchUrls = [];
      var imgPrefetchUrls = ["https://cdn.shopify.com/s/files/1/0481/2236/4053/files/Tula_Tye__no_background-_thin_23d76170-b5ea-4981-99a8-4f335b123540_x320.png?v=1627465622"];

      function preconnect(url, callback) {
        var link = document.createElement('link');
        link.rel = 'dns-prefetch preconnect';
        link.href = url;
        link.crossOrigin = '';
        link.onload = link.onerror = callback;
        document.head.appendChild(link);
      }

      function preconnectAssets() {
        var resources = preconnectOrigins.concat(fontPreconnectUrls);
        var index = 0;
        (function next() {
          var res = resources[index++];
          if (res) preconnect(res, next);
        })();
      }

      function prefetch(url, as, callback) {
        var link = document.createElement('link');
        if (link.relList.supports('prefetch')) {
          link.rel = 'prefetch';
          link.fetchPriority = 'low';
          link.as = as;
          if (as === 'font') link.type = 'font/woff2';
          link.href = url;
          link.crossOrigin = '';
          link.onload = link.onerror = callback;
          document.head.appendChild(link);
        } else {
          var xhr = new XMLHttpRequest();
          xhr.open('GET', url, true);
          xhr.onloadend = callback;
          xhr.send();
        }
      }

      function prefetchAssets() {
        var resources = [].concat(
          scripts.map(function(url) { return [url, 'script']; }),
          styles.map(function(url) { return [url, 'style']; }),
          fontPrefetchUrls.map(function(url) { return [url, 'font']; }),
          imgPrefetchUrls.map(function(url) { return [url, 'image']; })
        );
        var index = 0;
        function run() {
          var res = resources[index++];
          if (res) prefetch(res[0], res[1], next);
        }
        var next = (self.requestIdleCallback || setTimeout).bind(self, run);
        next();
      }

      function onLoaded() {
        try {
          if (parseFloat(navigator.connection.effectiveType) > 2 && !navigator.connection.saveData) {
            preconnectAssets();
            prefetchAssets();
          }
        } catch (e) {}
      }

      if (document.readyState === 'complete') {
        onLoaded();
      } else {
        addEventListener('load', onLoaded);
      }
    })();
  