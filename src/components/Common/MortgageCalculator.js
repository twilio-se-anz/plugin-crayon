export default function MortgageCalculator(props) {

  const { data } = props;
  const accentColor = data['cdp-accent']
  return (
    <>
      <form
        style={{
          color: accentColor,
          boxSizing: "border-box",
          fontFamily: "MCQGlobal-Regular-Normal, Helvetica, Arial, sans-serif",
          lineHeight: "24px",
          marginBlockEnd: "0px",
          marginBottom: "0px",
          textSizeAdjust: "100%",
          width: "307.828px",
        }}
      >
        <h2
          style={{
            boxSizing: "border-box",
            fontSize: "32px",
            fontWeight: 400,
            letterSpacing: "-1px",
            lineHeight: "40px",
            marginBlockEnd: "32px",
            marginBlockStart: "0px",
            marginBottom: "32px",
            marginTop: "0px",
            WebkitFontSmoothing: "antialiased",
          }}
          className={"calc-form__input-column__title h3"}
        >
          Calculate Repayments
          {/* <a style={{ boxSizing: "border-box", cursor: "pointer", color: 'black' }} href={"#^"}>
            <sup
              style={{
                bottom: "12px",
                boxSizing: "border-box",
                fontSize: "24px",
                insetBlockEnd: "12px",
                insetBlockStart: "-12px",
                left: "0px",
                lineHeight: "0px",
                position: "relative",
                right: "0px",
                top: "-12px",
                verticalAlign: "baseline",
              }}
            >
              ^
            </sup>
          </a> */}
        </h2>
        <div
          style={{
            bottom: "0px",
            boxSizing: "border-box",
            left: "0px",
            position: "relative",
            right: "0px",
            top: "0px",
          }}
          className={"calc-form__inputs"}
        >
          <div
            style={{
              bottom: "0px",
              boxSizing: "border-box",
              insetBlockEnd: "0px",
              left: "0px",
              marginBlockEnd: "16px",
              marginBottom: "16px",
              position: "relative",
              right: "0px",
              top: "0px",
              verticalAlign: "top",
            }}
            className={"input-field "}
            role={"group"}
            aria-labelledby={"radio-group-label-My-loan-is-for"}
          >
            <legend
              style={{
                borderBlockEndColor: "rgb(102, 102, 102)",
                borderBlockStartColor: "rgb(102, 102, 102)",
                borderBottomColor: "rgb(102, 102, 102)",
                borderInlineEndColor: "rgb(102, 102, 102)",
                borderInlineStartColor: "rgb(102, 102, 102)",
                borderLeftColor: "rgb(102, 102, 102)",
                borderRightColor: "rgb(102, 102, 102)",
                borderTopColor: "rgb(102, 102, 102)",
                boxSizing: "border-box",
                caretColor: "rgb(102, 102, 102)",
                color: "rgb(102, 102, 102)",
                columnRuleColor: "rgb(102, 102, 102)",
                fontSize: "12px",
                height: "16px",
                lineHeight: "20px",
                maxWidth: "100%",
                outlineColor: "rgb(102, 102, 102)",
                paddingLeft: "0px",
                paddingRight: "0px",
                pointerEvents: "none",
                textDecoration: "none solid rgb(102, 102, 102)",
                textDecorationColor: "rgb(102, 102, 102)",
                textEmphasisColor: "rgb(102, 102, 102)",
                userSelect: "none",
                WebkitTextFillColor: "rgb(102, 102, 102)",
                WebkitTextStrokeColor: "rgb(102, 102, 102)",
              }}
              id={"radio-group-label-My-loan-is-for"}
              className={"input-field__label"}
            >
              My loan is for
            </legend>
            <div
              style={{
                boxSizing: "border-box",
                display: "flex",
                marginBlockStart: "8px",
                marginTop: "8px",
              }}
              className={"radio-select-group "}
            >
              <div
                style={{
                  alignItems: "center",
                  backgroundColor: accentColor,
                  borderBottomLeftRadius: "200px",
                  borderBottomRightRadius: "200px",
                  borderTopLeftRadius: "200px",
                  borderTopRightRadius: "200px",
                  bottom: "0px",
                  boxSizing: "border-box",
                  caretColor: "rgb(255, 255, 255)",
                  color: "rgb(255, 255, 255)",
                  columnRuleColor: "rgb(255, 255, 255)",
                  cursor: "pointer",
                  display: "flex",
                  flexBasis: "0px",
                  flexGrow: 1,
                  fontSize: "14px",
                  insetInlineEnd: "0px",
                  insetInlineStart: "0px",
                  justifyContent: "center",
                  left: "0px",
                  lineHeight: "14px",
                  marginInlineEnd: "4px",
                  marginInlineStart: "4px",
                  marginLeft: "4px",
                  marginRight: "4px",
                  outlineColor: "rgb(255, 255, 255)",
                  position: "relative",
                  right: "0px",
                  textAlign: "center",
                  textDecoration: "none solid rgb(255, 255, 255)",
                  textDecorationColor: "rgb(255, 255, 255)",
                  textEmphasisColor: "rgb(255, 255, 255)",
                  top: "0px",
                  WebkitTextFillColor: "rgb(255, 255, 255)",
                  WebkitTextStrokeColor: "rgb(255, 255, 255)",
                }}
                className={
                  "radio-select-group__option  radio-select-group__option--selected"
                }
              >
                <input
                  style={{
                    backgroundColor: "rgba(0, 0, 0, 0)",
                    borderBlockEndColor: accentColor,
                    borderBlockEndStyle: "none",
                    borderBlockEndWidth: "0px",
                    borderBlockStartColor: accentColor,
                    borderBlockStartStyle: "none",
                    borderBlockStartWidth: "0px",
                    borderBottomColor: accentColor,
                    borderBottomStyle: "none",
                    borderBottomWidth: "0px",
                    borderInlineEndColor: accentColor,
                    borderInlineEndStyle: "none",
                    borderInlineEndWidth: "0px",
                    borderInlineStartColor: accentColor,
                    borderInlineStartStyle: "none",
                    borderInlineStartWidth: "0px",
                    borderLeftColor: accentColor,
                    borderLeftStyle: "none",
                    borderLeftWidth: "0px",
                    borderRightColor: accentColor,
                    borderRightStyle: "none",
                    borderRightWidth: "0px",
                    borderTopColor: accentColor,
                    borderTopStyle: "none",
                    borderTopWidth: "0px",
                    bottom: "17.5px",
                    caretColor: accentColor,
                    cursor: "default",
                    fontFamily:
                      "MCQGlobal-Regular-Normal, Helvetica, Arial, sans-serif",
                    fontSize: "14px",
                    insetBlockEnd: "17.5px",
                    insetBlockStart: "17.5px",
                    insetInlineEnd: "65.9688px",
                    insetInlineStart: "65.9531px",
                    left: "65.9531px",
                    lineHeight: "14px",
                    minBlockSize: "0px",
                    minHeight: "0px",
                    minInlineSize: "0px",
                    minWidth: "0px",
                    opacity: 0,
                    paddingBottom: "0px",
                    paddingLeft: "0px",
                    paddingRight: "0px",
                    paddingTop: "0px",
                    pointerEvents: "none",
                    position: "absolute",
                    right: "65.9688px",
                    textEmphasisColor: accentColor,
                    top: "17.5px",
                    zIndex: "-1",
                    WebkitTextFillColor: accentColor,
                    WebkitTextStrokeColor: accentColor,
                  }}
                  id={"live"}
                  type={"radio"}
                  value={"live"}
                ></input>
                <label
                  style={{
                    alignItems: "center",
                    borderBottomLeftRadius: "200px",
                    borderBottomRightRadius: "200px",
                    borderTopLeftRadius: "200px",
                    borderTopRightRadius: "200px",
                    boxSizing: "border-box",
                    cursor: "pointer",
                    display: "flex",
                    height: "48px",
                    justifyContent: "center",
                    paddingLeft: "16px",
                    paddingRight: "16px",
                    width: "144.922px",
                  }}
                  className={"radio-select-group__option--label"}
                  htmlFor={"live"}
                >
                  To live in{" "}
                </label>
              </div>
              <div
                style={{
                  alignItems: "center",
                  backgroundColor: "rgb(255, 255, 255)",
                  borderBlockEndColor: "rgb(230, 230, 230)",
                  borderBlockEndStyle: "solid",
                  borderBlockEndWidth: "1px",
                  borderBlockStartColor: "rgb(230, 230, 230)",
                  borderBlockStartStyle: "solid",
                  borderBlockStartWidth: "1px",
                  borderBottomColor: "rgb(230, 230, 230)",
                  borderBottomLeftRadius: "200px",
                  borderBottomRightRadius: "200px",
                  borderBottomStyle: "solid",
                  borderBottomWidth: "1px",
                  borderInlineEndColor: "rgb(230, 230, 230)",
                  borderInlineEndStyle: "solid",
                  borderInlineEndWidth: "1px",
                  borderInlineStartColor: "rgb(230, 230, 230)",
                  borderInlineStartStyle: "solid",
                  borderInlineStartWidth: "1px",
                  borderLeftColor: "rgb(230, 230, 230)",
                  borderLeftStyle: "solid",
                  borderLeftWidth: "1px",
                  borderRightColor: "rgb(230, 230, 230)",
                  borderRightStyle: "solid",
                  borderRightWidth: "1px",
                  borderTopColor: "rgb(230, 230, 230)",
                  borderTopLeftRadius: "200px",
                  borderTopRightRadius: "200px",
                  borderTopStyle: "solid",
                  borderTopWidth: "1px",
                  bottom: "0px",
                  boxSizing: "border-box",
                  cursor: "pointer",
                  display: "flex",
                  flexBasis: "0px",
                  flexGrow: 1,
                  fontSize: "14px",
                  insetInlineEnd: "0px",
                  insetInlineStart: "0px",
                  justifyContent: "center",
                  left: "0px",
                  lineHeight: "14px",
                  marginInlineEnd: "4px",
                  marginInlineStart: "4px",
                  marginLeft: "4px",
                  marginRight: "4px",
                  position: "relative",
                  right: "0px",
                  textAlign: "center",
                  top: "0px",
                }}
                className={"radio-select-group__option  "}
              >
                <input
                  style={{
                    backgroundColor: "rgba(0, 0, 0, 0)",
                    borderBlockEndColor: accentColor,
                    borderBlockEndStyle: "none",
                    borderBlockEndWidth: "0px",
                    borderBlockStartColor: accentColor,
                    borderBlockStartStyle: "none",
                    borderBlockStartWidth: "0px",
                    borderBottomColor: accentColor,
                    borderBottomStyle: "none",
                    borderBottomWidth: "0px",
                    borderInlineEndColor: accentColor,
                    borderInlineEndStyle: "none",
                    borderInlineEndWidth: "0px",
                    borderInlineStartColor: accentColor,
                    borderInlineStartStyle: "none",
                    borderInlineStartWidth: "0px",
                    borderLeftColor: accentColor,
                    borderLeftStyle: "none",
                    borderLeftWidth: "0px",
                    borderRightColor: accentColor,
                    borderRightStyle: "none",
                    borderRightWidth: "0px",
                    borderTopColor: accentColor,
                    borderTopStyle: "none",
                    borderTopWidth: "0px",
                    bottom: "16.5px",
                    cursor: "default",
                    fontFamily:
                      "MCQGlobal-Regular-Normal, Helvetica, Arial, sans-serif",
                    fontSize: "14px",
                    insetBlockEnd: "16.5px",
                    insetBlockStart: "16.5px",
                    insetInlineEnd: "65.9688px",
                    insetInlineStart: "65.9531px",
                    left: "65.9531px",
                    lineHeight: "14px",
                    minBlockSize: "0px",
                    minHeight: "0px",
                    minInlineSize: "0px",
                    minWidth: "0px",
                    opacity: 0,
                    paddingBottom: "0px",
                    paddingLeft: "0px",
                    paddingRight: "0px",
                    paddingTop: "0px",
                    pointerEvents: "none",
                    position: "absolute",
                    right: "65.9688px",
                    top: "16.5px",
                    zIndex: "-1",
                  }}
                  id={"investment"}
                  type={"radio"}
                  value={"investment"}
                ></input>
                <label
                  style={{
                    alignItems: "center",
                    borderBottomLeftRadius: "200px",
                    borderBottomRightRadius: "200px",
                    borderTopLeftRadius: "200px",
                    borderTopRightRadius: "200px",
                    boxSizing: "border-box",
                    cursor: "pointer",
                    display: "flex",
                    height: "46px",
                    justifyContent: "center",
                    paddingLeft: "16px",
                    paddingRight: "16px",
                    width: "144.922px",
                  }}
                  className={"radio-select-group__option--label"}
                  htmlFor={"investment"}
                >
                  Investment{" "}
                </label>
              </div>
            </div>
          </div>
          <div
            style={{
              bottom: "0px",
              boxSizing: "border-box",
              insetBlockEnd: "0px",
              left: "0px",
              marginBlockEnd: "16px",
              marginBottom: "16px",
              position: "relative",
              right: "0px",
              top: "0px",
              verticalAlign: "top",
            }}
            className={"input-field "}
            role={"group"}
            aria-labelledby={"radio-group-label-I'll-be-paying"}
          >
            <legend
              style={{
                borderBlockEndColor: "rgb(102, 102, 102)",
                borderBlockStartColor: "rgb(102, 102, 102)",
                borderBottomColor: "rgb(102, 102, 102)",
                borderInlineEndColor: "rgb(102, 102, 102)",
                borderInlineStartColor: "rgb(102, 102, 102)",
                borderLeftColor: "rgb(102, 102, 102)",
                borderRightColor: "rgb(102, 102, 102)",
                borderTopColor: "rgb(102, 102, 102)",
                boxSizing: "border-box",
                caretColor: "rgb(102, 102, 102)",
                color: "rgb(102, 102, 102)",
                columnRuleColor: "rgb(102, 102, 102)",
                fontSize: "12px",
                height: "16px",
                lineHeight: "20px",
                maxWidth: "100%",
                outlineColor: "rgb(102, 102, 102)",
                paddingLeft: "0px",
                paddingRight: "0px",
                pointerEvents: "none",
                textDecoration: "none solid rgb(102, 102, 102)",
                textDecorationColor: "rgb(102, 102, 102)",
                textEmphasisColor: "rgb(102, 102, 102)",
                userSelect: "none",
                WebkitTextFillColor: "rgb(102, 102, 102)",
                WebkitTextStrokeColor: "rgb(102, 102, 102)",
              }}
              id={"radio-group-label-I'll-be-paying"}
              className={"input-field__label"}
            >
              I'll be paying
            </legend>
            <div
              style={{
                boxSizing: "border-box",
                display: "flex",
                marginBlockStart: "8px",
                marginTop: "8px",
              }}
              className={"radio-select-group "}
            >
              <div
                style={{
                  alignItems: "center",
                  backgroundColor: accentColor,
                  borderBottomLeftRadius: "200px",
                  borderBottomRightRadius: "200px",
                  borderTopLeftRadius: "200px",
                  borderTopRightRadius: "200px",
                  bottom: "0px",
                  boxSizing: "border-box",
                  caretColor: "rgb(255, 255, 255)",
                  color: "rgb(255, 255, 255)",
                  columnRuleColor: "rgb(255, 255, 255)",
                  cursor: "pointer",
                  display: "flex",
                  flexBasis: "0px",
                  flexGrow: 1,
                  fontSize: "14px",
                  insetInlineEnd: "0px",
                  insetInlineStart: "0px",
                  justifyContent: "center",
                  left: "0px",
                  lineHeight: "14px",
                  marginInlineEnd: "4px",
                  marginInlineStart: "4px",
                  marginLeft: "4px",
                  marginRight: "4px",
                  outlineColor: "rgb(255, 255, 255)",
                  position: "relative",
                  right: "0px",
                  textAlign: "center",
                  textDecoration: "none solid rgb(255, 255, 255)",
                  textDecorationColor: "rgb(255, 255, 255)",
                  textEmphasisColor: "rgb(255, 255, 255)",
                  top: "0px",
                  WebkitTextFillColor: "rgb(255, 255, 255)",
                  WebkitTextStrokeColor: "rgb(255, 255, 255)",
                }}
                className={
                  "radio-select-group__option  radio-select-group__option--selected"
                }
              >
                <input
                  style={{
                    backgroundColor: "rgba(0, 0, 0, 0)",
                    borderBlockEndColor: accentColor,
                    borderBlockEndStyle: "none",
                    borderBlockEndWidth: "0px",
                    borderBlockStartColor: accentColor,
                    borderBlockStartStyle: "none",
                    borderBlockStartWidth: "0px",
                    borderBottomColor: accentColor,
                    borderBottomStyle: "none",
                    borderBottomWidth: "0px",
                    borderInlineEndColor: accentColor,
                    borderInlineEndStyle: "none",
                    borderInlineEndWidth: "0px",
                    borderInlineStartColor: accentColor,
                    borderInlineStartStyle: "none",
                    borderInlineStartWidth: "0px",
                    borderLeftColor: accentColor,
                    borderLeftStyle: "none",
                    borderLeftWidth: "0px",
                    borderRightColor: accentColor,
                    borderRightStyle: "none",
                    borderRightWidth: "0px",
                    borderTopColor: accentColor,
                    borderTopStyle: "none",
                    borderTopWidth: "0px",
                    bottom: "17.5px",
                    caretColor: accentColor,
                    cursor: "default",
                    fontFamily:
                      "MCQGlobal-Regular-Normal, Helvetica, Arial, sans-serif",
                    fontSize: "14px",
                    insetBlockEnd: "17.5px",
                    insetBlockStart: "17.5px",
                    insetInlineEnd: "65.9688px",
                    insetInlineStart: "65.9531px",
                    left: "65.9531px",
                    lineHeight: "14px",
                    minBlockSize: "0px",
                    minHeight: "0px",
                    minInlineSize: "0px",
                    minWidth: "0px",
                    opacity: 0,
                    paddingBottom: "0px",
                    paddingLeft: "0px",
                    paddingRight: "0px",
                    paddingTop: "0px",
                    pointerEvents: "none",
                    position: "absolute",
                    right: "65.9688px",
                    textEmphasisColor: accentColor,
                    top: "17.5px",
                    zIndex: "-1",
                    WebkitTextFillColor: accentColor,
                    WebkitTextStrokeColor: accentColor,
                  }}
                  id={"principal-and-interest"}
                  type={"radio"}
                  value={"principal-and-interest"}
                ></input>
                <label
                  style={{
                    alignItems: "center",
                    borderBottomLeftRadius: "200px",
                    borderBottomRightRadius: "200px",
                    borderTopLeftRadius: "200px",
                    borderTopRightRadius: "200px",
                    boxSizing: "border-box",
                    cursor: "pointer",
                    display: "flex",
                    height: "48px",
                    justifyContent: "center",
                    paddingLeft: "16px",
                    paddingRight: "16px",
                  }}
                  className={"radio-select-group__option--label"}
                  htmlFor={"principal-and-interest"}
                >
                  Principal & Interest{" "}
                </label>
              </div>
              <div
                style={{
                  alignItems: "center",
                  backgroundColor: "rgb(255, 255, 255)",
                  borderBlockEndColor: "rgb(230, 230, 230)",
                  borderBlockEndStyle: "solid",
                  borderBlockEndWidth: "1px",
                  borderBlockStartColor: "rgb(230, 230, 230)",
                  borderBlockStartStyle: "solid",
                  borderBlockStartWidth: "1px",
                  borderBottomColor: "rgb(230, 230, 230)",
                  borderBottomLeftRadius: "200px",
                  borderBottomRightRadius: "200px",
                  borderBottomStyle: "solid",
                  borderBottomWidth: "1px",
                  borderInlineEndColor: "rgb(230, 230, 230)",
                  borderInlineEndStyle: "solid",
                  borderInlineEndWidth: "1px",
                  borderInlineStartColor: "rgb(230, 230, 230)",
                  borderInlineStartStyle: "solid",
                  borderInlineStartWidth: "1px",
                  borderLeftColor: "rgb(230, 230, 230)",
                  borderLeftStyle: "solid",
                  borderLeftWidth: "1px",
                  borderRightColor: "rgb(230, 230, 230)",
                  borderRightStyle: "solid",
                  borderRightWidth: "1px",
                  borderTopColor: "rgb(230, 230, 230)",
                  borderTopLeftRadius: "200px",
                  borderTopRightRadius: "200px",
                  borderTopStyle: "solid",
                  borderTopWidth: "1px",
                  bottom: "0px",
                  boxSizing: "border-box",
                  cursor: "pointer",
                  display: "flex",
                  flexBasis: "0px",
                  flexGrow: 1,
                  fontSize: "14px",
                  insetInlineEnd: "0px",
                  insetInlineStart: "0px",
                  justifyContent: "center",
                  left: "0px",
                  lineHeight: "14px",
                  marginInlineEnd: "4px",
                  marginInlineStart: "4px",
                  marginLeft: "4px",
                  marginRight: "4px",
                  position: "relative",
                  right: "0px",
                  textAlign: "center",
                  top: "0px",
                }}
                className={"radio-select-group__option  "}
              >
                <input
                  style={{
                    backgroundColor: "rgba(0, 0, 0, 0)",
                    borderBlockEndColor: accentColor,
                    borderBlockEndStyle: "none",
                    borderBlockEndWidth: "0px",
                    borderBlockStartColor: accentColor,
                    borderBlockStartStyle: "none",
                    borderBlockStartWidth: "0px",
                    borderBottomColor: accentColor,
                    borderBottomStyle: "none",
                    borderBottomWidth: "0px",
                    borderInlineEndColor: accentColor,
                    borderInlineEndStyle: "none",
                    borderInlineEndWidth: "0px",
                    borderInlineStartColor: accentColor,
                    borderInlineStartStyle: "none",
                    borderInlineStartWidth: "0px",
                    borderLeftColor: accentColor,
                    borderLeftStyle: "none",
                    borderLeftWidth: "0px",
                    borderRightColor: accentColor,
                    borderRightStyle: "none",
                    borderRightWidth: "0px",
                    borderTopColor: accentColor,
                    borderTopStyle: "none",
                    borderTopWidth: "0px",
                    bottom: "16.5px",
                    cursor: "default",
                    fontFamily:
                      "MCQGlobal-Regular-Normal, Helvetica, Arial, sans-serif",
                    fontSize: "14px",
                    insetBlockEnd: "16.5px",
                    insetBlockStart: "16.5px",
                    insetInlineEnd: "65.9688px",
                    insetInlineStart: "65.9531px",
                    left: "65.9531px",
                    lineHeight: "14px",
                    minBlockSize: "0px",
                    minHeight: "0px",
                    minInlineSize: "0px",
                    minWidth: "0px",
                    opacity: 0,
                    paddingBottom: "0px",
                    paddingLeft: "0px",
                    paddingRight: "0px",
                    paddingTop: "0px",
                    pointerEvents: "none",
                    position: "absolute",
                    right: "65.9688px",
                    top: "16.5px",
                    zIndex: "-1",
                  }}
                  id={"interest-only"}
                  type={"radio"}
                  value={"interest-only"}
                ></input>
                <label
                  style={{
                    alignItems: "center",
                    borderBottomLeftRadius: "200px",
                    borderBottomRightRadius: "200px",
                    borderTopLeftRadius: "200px",
                    borderTopRightRadius: "200px",
                    boxSizing: "border-box",
                    cursor: "pointer",
                    display: "flex",
                    height: "46px",
                    justifyContent: "center",
                    paddingLeft: "16px",
                    paddingRight: "16px",
                    width: "144.922px",
                  }}
                  className={"radio-select-group__option--label"}
                  htmlFor={"interest-only"}
                >
                  Interest only{" "}
                </label>
              </div>
            </div>
          </div>
          <div
            style={{
              bottom: "0px",
              boxSizing: "border-box",
              insetBlockEnd: "0px",
              left: "0px",
              marginBlockEnd: "16px",
              marginBottom: "16px",
              position: "relative",
              right: "0px",
              top: "0px",
              verticalAlign: "top",
            }}
            className={"input-field "}
            role={"group"}
            aria-labelledby={"radio-group-label-Loan-type"}
          >
            <legend
              style={{
                borderBlockEndColor: "rgb(102, 102, 102)",
                borderBlockStartColor: "rgb(102, 102, 102)",
                borderBottomColor: "rgb(102, 102, 102)",
                borderInlineEndColor: "rgb(102, 102, 102)",
                borderInlineStartColor: "rgb(102, 102, 102)",
                borderLeftColor: "rgb(102, 102, 102)",
                borderRightColor: "rgb(102, 102, 102)",
                borderTopColor: "rgb(102, 102, 102)",
                boxSizing: "border-box",
                caretColor: "rgb(102, 102, 102)",
                color: "rgb(102, 102, 102)",
                columnRuleColor: "rgb(102, 102, 102)",
                fontSize: "12px",
                height: "16px",
                lineHeight: "20px",
                maxWidth: "100%",
                outlineColor: "rgb(102, 102, 102)",
                paddingLeft: "0px",
                paddingRight: "0px",
                pointerEvents: "none",
                textDecoration: "none solid rgb(102, 102, 102)",
                textDecorationColor: "rgb(102, 102, 102)",
                textEmphasisColor: "rgb(102, 102, 102)",
                userSelect: "none",
                WebkitTextFillColor: "rgb(102, 102, 102)",
                WebkitTextStrokeColor: "rgb(102, 102, 102)",
              }}
              id={"radio-group-label-Loan-type"}
              className={"input-field__label"}
            >
              Loan type
            </legend>
            <div
              style={{
                boxSizing: "border-box",
                display: "flex",
                marginBlockStart: "8px",
                marginTop: "8px",
              }}
              className={"radio-select-group "}
            >
              <div
                style={{
                  alignItems: "center",
                  backgroundColor: accentColor,
                  borderBottomLeftRadius: "200px",
                  borderBottomRightRadius: "200px",
                  borderTopLeftRadius: "200px",
                  borderTopRightRadius: "200px",
                  bottom: "0px",
                  boxSizing: "border-box",
                  caretColor: "rgb(255, 255, 255)",
                  color: "rgb(255, 255, 255)",
                  columnRuleColor: "rgb(255, 255, 255)",
                  cursor: "pointer",
                  display: "flex",
                  flexBasis: "0px",
                  flexGrow: 1,
                  fontSize: "14px",
                  insetInlineEnd: "0px",
                  insetInlineStart: "0px",
                  justifyContent: "center",
                  left: "0px",
                  lineHeight: "14px",
                  marginInlineEnd: "4px",
                  marginInlineStart: "4px",
                  marginLeft: "4px",
                  marginRight: "4px",
                  outlineColor: "rgb(255, 255, 255)",
                  position: "relative",
                  right: "0px",
                  textAlign: "center",
                  textDecoration: "none solid rgb(255, 255, 255)",
                  textDecorationColor: "rgb(255, 255, 255)",
                  textEmphasisColor: "rgb(255, 255, 255)",
                  top: "0px",
                  WebkitTextFillColor: "rgb(255, 255, 255)",
                  WebkitTextStrokeColor: "rgb(255, 255, 255)",
                }}
                className={
                  "radio-select-group__option  radio-select-group__option--selected"
                }
              >
                <input
                  style={{
                    backgroundColor: "rgba(0, 0, 0, 0)",
                    borderBlockEndColor: accentColor,
                    borderBlockEndStyle: "none",
                    borderBlockEndWidth: "0px",
                    borderBlockStartColor: accentColor,
                    borderBlockStartStyle: "none",
                    borderBlockStartWidth: "0px",
                    borderBottomColor: accentColor,
                    borderBottomStyle: "none",
                    borderBottomWidth: "0px",
                    borderInlineEndColor: accentColor,
                    borderInlineEndStyle: "none",
                    borderInlineEndWidth: "0px",
                    borderInlineStartColor: accentColor,
                    borderInlineStartStyle: "none",
                    borderInlineStartWidth: "0px",
                    borderLeftColor: accentColor,
                    borderLeftStyle: "none",
                    borderLeftWidth: "0px",
                    borderRightColor: accentColor,
                    borderRightStyle: "none",
                    borderRightWidth: "0px",
                    borderTopColor: accentColor,
                    borderTopStyle: "none",
                    borderTopWidth: "0px",
                    bottom: "17.5px",
                    caretColor: accentColor,
                    cursor: "default",
                    fontFamily:
                      "MCQGlobal-Regular-Normal, Helvetica, Arial, sans-serif",
                    fontSize: "14px",
                    insetBlockEnd: "17.5px",
                    insetBlockStart: "17.5px",
                    insetInlineEnd: "65.9688px",
                    insetInlineStart: "65.9531px",
                    left: "65.9531px",
                    lineHeight: "14px",
                    minBlockSize: "0px",
                    minHeight: "0px",
                    minInlineSize: "0px",
                    minWidth: "0px",
                    opacity: 0,
                    paddingBottom: "0px",
                    paddingLeft: "0px",
                    paddingRight: "0px",
                    paddingTop: "0px",
                    pointerEvents: "none",
                    position: "absolute",
                    right: "65.9688px",
                    textEmphasisColor: accentColor,
                    top: "17.5px",
                    zIndex: "-1",
                    WebkitTextFillColor: accentColor,
                    WebkitTextStrokeColor: accentColor,
                  }}
                  id={"variable"}
                  type={"radio"}
                  value={"variable"}
                ></input>
                <label
                  style={{
                    alignItems: "center",
                    borderBottomLeftRadius: "200px",
                    borderBottomRightRadius: "200px",
                    borderTopLeftRadius: "200px",
                    borderTopRightRadius: "200px",
                    boxSizing: "border-box",
                    cursor: "pointer",
                    display: "flex",
                    height: "48px",
                    justifyContent: "center",
                    paddingLeft: "16px",
                    paddingRight: "16px",
                    width: "144.922px",
                  }}
                  className={"radio-select-group__option--label"}
                  htmlFor={"variable"}
                >
                  Variable{" "}
                </label>
              </div>
              <div
                style={{
                  alignItems: "center",
                  backgroundColor: "rgb(255, 255, 255)",
                  borderBlockEndColor: "rgb(230, 230, 230)",
                  borderBlockEndStyle: "solid",
                  borderBlockEndWidth: "1px",
                  borderBlockStartColor: "rgb(230, 230, 230)",
                  borderBlockStartStyle: "solid",
                  borderBlockStartWidth: "1px",
                  borderBottomColor: "rgb(230, 230, 230)",
                  borderBottomLeftRadius: "200px",
                  borderBottomRightRadius: "200px",
                  borderBottomStyle: "solid",
                  borderBottomWidth: "1px",
                  borderInlineEndColor: "rgb(230, 230, 230)",
                  borderInlineEndStyle: "solid",
                  borderInlineEndWidth: "1px",
                  borderInlineStartColor: "rgb(230, 230, 230)",
                  borderInlineStartStyle: "solid",
                  borderInlineStartWidth: "1px",
                  borderLeftColor: "rgb(230, 230, 230)",
                  borderLeftStyle: "solid",
                  borderLeftWidth: "1px",
                  borderRightColor: "rgb(230, 230, 230)",
                  borderRightStyle: "solid",
                  borderRightWidth: "1px",
                  borderTopColor: "rgb(230, 230, 230)",
                  borderTopLeftRadius: "200px",
                  borderTopRightRadius: "200px",
                  borderTopStyle: "solid",
                  borderTopWidth: "1px",
                  bottom: "0px",
                  boxSizing: "border-box",
                  cursor: "pointer",
                  display: "flex",
                  flexBasis: "0px",
                  flexGrow: 1,
                  fontSize: "14px",
                  insetInlineEnd: "0px",
                  insetInlineStart: "0px",
                  justifyContent: "center",
                  left: "0px",
                  lineHeight: "14px",
                  marginInlineEnd: "4px",
                  marginInlineStart: "4px",
                  marginLeft: "4px",
                  marginRight: "4px",
                  position: "relative",
                  right: "0px",
                  textAlign: "center",
                  top: "0px",
                }}
                className={"radio-select-group__option  "}
              >
                <input
                  style={{
                    backgroundColor: "rgba(0, 0, 0, 0)",
                    borderBlockEndColor: accentColor,
                    borderBlockEndStyle: "none",
                    borderBlockEndWidth: "0px",
                    borderBlockStartColor: accentColor,
                    borderBlockStartStyle: "none",
                    borderBlockStartWidth: "0px",
                    borderBottomColor: accentColor,
                    borderBottomStyle: "none",
                    borderBottomWidth: "0px",
                    borderInlineEndColor: accentColor,
                    borderInlineEndStyle: "none",
                    borderInlineEndWidth: "0px",
                    borderInlineStartColor: accentColor,
                    borderInlineStartStyle: "none",
                    borderInlineStartWidth: "0px",
                    borderLeftColor: accentColor,
                    borderLeftStyle: "none",
                    borderLeftWidth: "0px",
                    borderRightColor: accentColor,
                    borderRightStyle: "none",
                    borderRightWidth: "0px",
                    borderTopColor: accentColor,
                    borderTopStyle: "none",
                    borderTopWidth: "0px",
                    bottom: "16.5px",
                    cursor: "default",
                    fontFamily:
                      "MCQGlobal-Regular-Normal, Helvetica, Arial, sans-serif",
                    fontSize: "14px",
                    insetBlockEnd: "16.5px",
                    insetBlockStart: "16.5px",
                    insetInlineEnd: "65.9688px",
                    insetInlineStart: "65.9531px",
                    left: "65.9531px",
                    lineHeight: "14px",
                    minBlockSize: "0px",
                    minHeight: "0px",
                    minInlineSize: "0px",
                    minWidth: "0px",
                    opacity: 0,
                    paddingBottom: "0px",
                    paddingLeft: "0px",
                    paddingRight: "0px",
                    paddingTop: "0px",
                    pointerEvents: "none",
                    position: "absolute",
                    right: "65.9688px",
                    top: "16.5px",
                    zIndex: "-1",
                  }}
                  id={"fixed"}
                  type={"radio"}
                  value={"fixed"}
                ></input>
                <label
                  style={{
                    alignItems: "center",
                    borderBottomLeftRadius: "200px",
                    borderBottomRightRadius: "200px",
                    borderTopLeftRadius: "200px",
                    borderTopRightRadius: "200px",
                    boxSizing: "border-box",
                    cursor: "pointer",
                    display: "flex",
                    height: "46px",
                    justifyContent: "center",
                    paddingLeft: "16px",
                    paddingRight: "16px",
                    width: "144.922px",
                  }}
                  className={"radio-select-group__option--label"}
                  htmlFor={"fixed"}
                >
                  Fixed{" "}
                </label>
              </div>
            </div>
          </div>
          <div
            style={{
              boxSizing: "border-box",
              maxHeight: "0px",
              transitionDelay: "0s, 0s",
              transitionDuration: "0.3s, 0.3s",
              transitionProperty: "max-height, visibility",
              transitionTimingFunction: "ease, ease",
              visibility: "hidden",
            }}
            className={"show-hide-input show-hide-input--hide"}
          >
            <div
              style={{
                bottom: "0px",
                boxSizing: "border-box",
                insetBlockEnd: "0px",
                left: "0px",
                marginBlockEnd: "16px",
                marginBottom: "16px",
                position: "relative",
                right: "0px",
                top: "0px",
                verticalAlign: "top",
                visibility: "hidden",
              }}
              className={"input-field undefined"}
            >
              <label
                style={{
                  borderBlockEndColor: "rgb(102, 102, 102)",
                  borderBlockStartColor: "rgb(102, 102, 102)",
                  borderBottomColor: "rgb(102, 102, 102)",
                  borderInlineEndColor: "rgb(102, 102, 102)",
                  borderInlineStartColor: "rgb(102, 102, 102)",
                  borderLeftColor: "rgb(102, 102, 102)",
                  borderRightColor: "rgb(102, 102, 102)",
                  borderTopColor: "rgb(102, 102, 102)",
                  boxSizing: "border-box",
                  caretColor: "rgb(102, 102, 102)",
                  color: "rgb(102, 102, 102)",
                  columnRuleColor: "rgb(102, 102, 102)",
                  display: "inline-block",
                  fontSize: "12px",
                  height: "16px",
                  lineHeight: "20px",
                  outlineColor: "rgb(102, 102, 102)",
                  pointerEvents: "none",
                  textDecoration: "none solid rgb(102, 102, 102)",
                  textDecorationColor: "rgb(102, 102, 102)",
                  textEmphasisColor: "rgb(102, 102, 102)",
                  userSelect: "none",
                  WebkitTextFillColor: "rgb(102, 102, 102)",
                  WebkitTextStrokeColor: "rgb(102, 102, 102)",
                }}
                className={"input-field__label"}
                htmlFor={"dropdown-select-fixed-term"}
              >
                Fixed term
              </label>
              <div
                style={{
                  bottom: "0px",
                  boxSizing: "border-box",
                  flexDirection: "column",
                  insetBlockStart: "0px",
                  left: "0px",
                  marginBlockStart: "8px",
                  marginTop: "8px",
                  position: "relative",
                  right: "0px",
                  top: "0px",
                }}
                className={
                  "input-field--full-width input-field__select-container input-field__select-container--mt-8 input-field__select-container--non-fancy"
                }
              >
                <select
                  style={{
                    appearance: "none",
                    borderBlockEndColor: "rgb(230, 230, 230)",
                    borderBlockStartColor: "rgb(230, 230, 230)",
                    borderBottomColor: "rgb(230, 230, 230)",
                    borderBottomLeftRadius: "4px",
                    borderBottomRightRadius: "4px",
                    borderInlineEndColor: "rgb(230, 230, 230)",
                    borderInlineStartColor: "rgb(230, 230, 230)",
                    borderLeftColor: "rgb(230, 230, 230)",
                    borderRightColor: "rgb(230, 230, 230)",
                    borderTopColor: "rgb(230, 230, 230)",
                    borderTopLeftRadius: "4px",
                    borderTopRightRadius: "4px",
                    cursor: "pointer",
                    display: "block",
                    fontFamily:
                      "MCQGlobal-Regular-Normal, Helvetica, Arial, sans-serif",
                    fontSize: "14px",
                    height: "48px",
                    lineHeight: "17.5px",
                    paddingBottom: "8px",
                    paddingLeft: "16px",
                    paddingRight: "40px",
                    paddingTop: "8px",
                    width: "307.828px",
                  }}
                  id={"dropdown-select-fixed-term"}
                  className={"input-field__select "}
                >
                  <option style={{ boxSizing: "border-box" }} value={1}>
                    1 year
                  </option>
                  <option style={{ boxSizing: "border-box" }} value={2}>
                    2 years
                  </option>
                  <option style={{ boxSizing: "border-box" }} value={3}>
                    3 years
                  </option>
                  <option style={{ boxSizing: "border-box" }} value={4}>
                    4 years
                  </option>
                  <option style={{ boxSizing: "border-box" }} value={5}>
                    5 years
                  </option>
                </select>
              </div>
            </div>
          </div>
          <div
            style={{
              bottom: "0px",
              boxSizing: "border-box",
              insetBlockEnd: "0px",
              left: "0px",
              marginBlockEnd: "16px",
              marginBottom: "16px",
              position: "relative",
              right: "0px",
              top: "0px",
              verticalAlign: "top",
            }}
            className={"input-field  "}
          >
            <label
              style={{
                borderBlockEndColor: "rgb(102, 102, 102)",
                borderBlockStartColor: "rgb(102, 102, 102)",
                borderBottomColor: "rgb(102, 102, 102)",
                borderInlineEndColor: "rgb(102, 102, 102)",
                borderInlineStartColor: "rgb(102, 102, 102)",
                borderLeftColor: "rgb(102, 102, 102)",
                borderRightColor: "rgb(102, 102, 102)",
                borderTopColor: "rgb(102, 102, 102)",
                boxSizing: "border-box",
                caretColor: "rgb(102, 102, 102)",
                color: "rgb(102, 102, 102)",
                columnRuleColor: "rgb(102, 102, 102)",
                display: "inline-block",
                fontSize: "12px",
                height: "16px",
                lineHeight: "20px",
                outlineColor: "rgb(102, 102, 102)",
                pointerEvents: "none",
                textDecoration: "none solid rgb(102, 102, 102)",
                textDecorationColor: "rgb(102, 102, 102)",
                textEmphasisColor: "rgb(102, 102, 102)",
                userSelect: "none",
                WebkitTextFillColor: "rgb(102, 102, 102)",
                WebkitTextStrokeColor: "rgb(102, 102, 102)",
              }}
              className={"input-field__label"}
              htmlFor={"money-input-I'd-like-to-borrow"}
            >
              I'd like to borrow
            </label>
            <div
              style={{
                bottom: "0px",
                boxSizing: "border-box",
                insetBlockStart: "0px",
                left: "0px",
                marginBlockStart: "8px",
                marginTop: "8px",
                position: "relative",
                right: "0px",
                top: "0px",
              }}
              className={
                "input-field__input-container input-field__input-container--mt-8"
              }
            >
              <i
                style={{
                  alignSelf: "center",
                  backgroundImage:
                    "url(https://www.macquarie.com.au/static/bfs/clientlibs/clientlib-site/resources/images/icon_money_16_dark.svg)",
                  backgroundPosition: "50% 50%",
                  backgroundRepeat: "no-repeat",
                  bottom: "0px",
                  boxSizing: "border-box",
                  display: "block",
                  fontSize: "32px",
                  height: "48px",
                  insetInlineEnd: "275.828px",
                  insetInlineStart: "8px",
                  left: "8px",
                  position: "absolute",
                  right: "275.828px",
                  textAlign: "center",
                  top: "0px",
                  width: "24px",
                }}
                className={
                  "input-field__prefix-icon input-field__prefix-icon--dollar"
                }
              ></i>
              <input
                style={{
                  backgroundColor: "rgba(0, 0, 0, 0)",
                  borderBlockEndColor: "rgb(230, 230, 230)",
                  borderBlockEndStyle: "solid",
                  borderBlockEndWidth: "1px",
                  borderBlockStartColor: "rgb(230, 230, 230)",
                  borderBlockStartStyle: "solid",
                  borderBlockStartWidth: "1px",
                  borderBottomColor: "rgb(230, 230, 230)",
                  borderBottomLeftRadius: "4px",
                  borderBottomRightRadius: "4px",
                  borderBottomStyle: "solid",
                  borderBottomWidth: "1px",
                  borderInlineEndColor: "rgb(230, 230, 230)",
                  borderInlineEndStyle: "solid",
                  borderInlineEndWidth: "1px",
                  borderInlineStartColor: "rgb(230, 230, 230)",
                  borderInlineStartStyle: "solid",
                  borderInlineStartWidth: "1px",
                  borderLeftColor: "rgb(230, 230, 230)",
                  borderLeftStyle: "solid",
                  borderLeftWidth: "1px",
                  borderRightColor: "rgb(230, 230, 230)",
                  borderRightStyle: "solid",
                  borderRightWidth: "1px",
                  borderTopColor: "rgb(230, 230, 230)",
                  borderTopLeftRadius: "4px",
                  borderTopRightRadius: "4px",
                  borderTopStyle: "solid",
                  borderTopWidth: "1px",
                  fontFamily:
                    "MCQGlobal-Regular-Normal, Helvetica, Arial, sans-serif",
                  fontSize: "14px",
                  height: "48px",
                  lineHeight: "14px",
                  paddingBottom: "12px",
                  paddingLeft: "32px",
                  paddingRight: "16px",
                  paddingTop: "12px",
                  width: "307.828px",
                }}
                className={
                  "input-field__input input-field__input--transparent input-field__input--small-text input-field__input--with-icon "
                }
                id={"money-input-I'd-like-to-borrow"}
                value={"500,000"}
              ></input>
            </div>
          </div>
          <div
            style={{
              bottom: "0px",
              boxSizing: "border-box",
              insetBlockEnd: "0px",
              left: "0px",
              marginBlockEnd: "32px",
              marginBottom: "32px",
              position: "relative",
              right: "0px",
              top: "0px",
              verticalAlign: "top",
            }}
            className={"input-field  "}
          >
            <label
              style={{
                borderBlockEndColor: "rgb(102, 102, 102)",
                borderBlockStartColor: "rgb(102, 102, 102)",
                borderBottomColor: "rgb(102, 102, 102)",
                borderInlineEndColor: "rgb(102, 102, 102)",
                borderInlineStartColor: "rgb(102, 102, 102)",
                borderLeftColor: "rgb(102, 102, 102)",
                borderRightColor: "rgb(102, 102, 102)",
                borderTopColor: "rgb(102, 102, 102)",
                boxSizing: "border-box",
                caretColor: "rgb(102, 102, 102)",
                color: "rgb(102, 102, 102)",
                columnRuleColor: "rgb(102, 102, 102)",
                display: "inline-block",
                fontSize: "12px",
                height: "16px",
                lineHeight: "20px",
                outlineColor: "rgb(102, 102, 102)",
                pointerEvents: "none",
                textDecoration: "none solid rgb(102, 102, 102)",
                textDecorationColor: "rgb(102, 102, 102)",
                textEmphasisColor: "rgb(102, 102, 102)",
                userSelect: "none",
                WebkitTextFillColor: "rgb(102, 102, 102)",
                WebkitTextStrokeColor: "rgb(102, 102, 102)",
              }}
              className={"input-field__label"}
              htmlFor={"money-input-My-deposit-is"}
            >
              My deposit is
            </label>
            <div
              style={{
                bottom: "0px",
                boxSizing: "border-box",
                insetBlockStart: "0px",
                left: "0px",
                marginBlockStart: "8px",
                marginTop: "8px",
                position: "relative",
                right: "0px",
                top: "0px",
              }}
              className={
                "input-field__input-container input-field__input-container--mt-8"
              }
            >
              <i
                style={{
                  alignSelf: "center",
                  backgroundImage:
                    "url(https://www.macquarie.com.au/static/bfs/clientlibs/clientlib-site/resources/images/icon_money_16_dark.svg)",
                  backgroundPosition: "50% 50%",
                  backgroundRepeat: "no-repeat",
                  bottom: "0px",
                  boxSizing: "border-box",
                  display: "block",
                  fontSize: "32px",
                  height: "48px",
                  insetInlineEnd: "275.828px",
                  insetInlineStart: "8px",
                  left: "8px",
                  position: "absolute",
                  right: "275.828px",
                  textAlign: "center",
                  top: "0px",
                  width: "24px",
                }}
                className={
                  "input-field__prefix-icon input-field__prefix-icon--dollar"
                }
              ></i>
              <input
                style={{
                  backgroundColor: "rgba(0, 0, 0, 0)",
                  borderBlockEndColor: "rgb(230, 230, 230)",
                  borderBlockEndStyle: "solid",
                  borderBlockEndWidth: "1px",
                  borderBlockStartColor: "rgb(230, 230, 230)",
                  borderBlockStartStyle: "solid",
                  borderBlockStartWidth: "1px",
                  borderBottomColor: "rgb(230, 230, 230)",
                  borderBottomLeftRadius: "4px",
                  borderBottomRightRadius: "4px",
                  borderBottomStyle: "solid",
                  borderBottomWidth: "1px",
                  borderInlineEndColor: "rgb(230, 230, 230)",
                  borderInlineEndStyle: "solid",
                  borderInlineEndWidth: "1px",
                  borderInlineStartColor: "rgb(230, 230, 230)",
                  borderInlineStartStyle: "solid",
                  borderInlineStartWidth: "1px",
                  borderLeftColor: "rgb(230, 230, 230)",
                  borderLeftStyle: "solid",
                  borderLeftWidth: "1px",
                  borderRightColor: "rgb(230, 230, 230)",
                  borderRightStyle: "solid",
                  borderRightWidth: "1px",
                  borderTopColor: "rgb(230, 230, 230)",
                  borderTopLeftRadius: "4px",
                  borderTopRightRadius: "4px",
                  borderTopStyle: "solid",
                  borderTopWidth: "1px",
                  fontFamily:
                    "MCQGlobal-Regular-Normal, Helvetica, Arial, sans-serif",
                  fontSize: "14px",
                  height: "48px",
                  lineHeight: "14px",
                  paddingBottom: "12px",
                  paddingLeft: "32px",
                  paddingRight: "16px",
                  paddingTop: "12px",
                  width: "307.828px",
                }}
                className={
                  "input-field__input input-field__input--transparent input-field__input--small-text input-field__input--with-icon "
                }
                id={"money-input-My-deposit-is"}
                value={"350,000"}
              ></input>
            </div>
          </div>
        </div>
        <button
          style={{
            alignItems: "center",
            appearance: "button",
            backgroundColor: "rgb(15, 118, 222)",
            borderBlockEndColor: "rgb(15, 118, 222)",
            borderBlockEndStyle: "solid",
            borderBlockEndWidth: "1px",
            borderBlockStartColor: "rgb(15, 118, 222)",
            borderBlockStartStyle: "solid",
            borderBlockStartWidth: "1px",
            borderBottomColor: "rgb(15, 118, 222)",
            borderBottomLeftRadius: "4px",
            borderBottomRightRadius: "4px",
            borderBottomStyle: "solid",
            borderBottomWidth: "1px",
            borderInlineEndColor: "rgb(15, 118, 222)",
            borderInlineEndStyle: "solid",
            borderInlineEndWidth: "1px",
            borderInlineStartColor: "rgb(15, 118, 222)",
            borderInlineStartStyle: "solid",
            borderInlineStartWidth: "1px",
            borderLeftColor: "rgb(15, 118, 222)",
            borderLeftStyle: "solid",
            borderLeftWidth: "1px",
            borderRightColor: "rgb(15, 118, 222)",
            borderRightStyle: "solid",
            borderRightWidth: "1px",
            borderTopColor: "rgb(15, 118, 222)",
            borderTopLeftRadius: "4px",
            borderTopRightRadius: "4px",
            borderTopStyle: "solid",
            borderTopWidth: "1px",
            caretColor: "rgb(255, 255, 255)",
            color: "rgb(255, 255, 255)",
            columnRuleColor: "rgb(255, 255, 255)",
            cursor: "pointer",
            display: "none",
            fontFamily: "MCQGlobal-Medium-Heavy, Helvetica, Arial, sans-serif",
            fontSize: "16px",
            justifyContent: "center",
            lineHeight: "24px",
            marginBlockEnd: "32px",
            marginBottom: "32px",
            minBlockSize: "48px",
            minHeight: "48px",
            minInlineSize: "192px",
            minWidth: "192px",
            outlineColor: "rgb(255, 255, 255)",
            paddingBottom: "0px",
            paddingLeft: "16px",
            paddingRight: "16px",
            paddingTop: "0px",
            position: "relative",
            textDecoration: "none solid rgb(255, 255, 255)",
            textDecorationColor: "rgb(255, 255, 255)",
            textEmphasisColor: "rgb(255, 255, 255)",
            transitionDuration: "0.2s",
            transitionTimingFunction: "ease-in",
            verticalAlign: "middle",
            whiteSpace: "nowrap",
            WebkitTextFillColor: "rgb(255, 255, 255)",
            WebkitTextStrokeColor: "rgb(255, 255, 255)",
          }}
          className={
            "calc-form__calculate-button btn btn--primary btn--fluid hide--md hide--lg hide--xl"
          }
          type={"button"}
        >
          <span style={{ boxSizing: "border-box" }}>See results</span>
        </button>
        <div
          style={{ boxSizing: "border-box" }}
          className={"calc-form__extra-information"}
        >
          {/* <div style={{ boxSizing: "border-box" }}>
            <p
              style={{
                boxSizing: "border-box",
                marginBlockStart: "0px",
                marginTop: "0px",
                WebkitFontSmoothing: "antialiased",
              }}
            >
              <a
                style={{
                  boxSizing: "border-box",
                  cursor: "pointer",
                  textDecoration: "underline solid rgb(0, 0, 0)",
                  textDecorationLine: "underline",
                  color: accentColor,
                }}
                href={"#modal-calculations"}
              >
                How did we calculate this?
              </a>
            </p>
            <p
              style={{
                boxSizing: "border-box",
                marginBlockStart: "0px",
                marginTop: "0px",
                WebkitFontSmoothing: "antialiased",
              }}
            >
              <u style={{ boxSizing: "border-box" }}>
                <a
                  style={{
                    boxSizing: "border-box",
                    cursor: "pointer",
                    textDecoration: "underline solid rgb(0, 0, 0)",
                    textDecorationLine: "underline",
                    color: accentColor,
                  }}
                  href={"#modal-eligibility-criteria"}
                >
                  What’s the eligibility criteria?
                </a>
              </u>
            </p>
            <p
              style={{
                boxSizing: "border-box",
                marginBlockStart: "0px",
                marginTop: "0px",
                WebkitFontSmoothing: "antialiased",
              }}
            >
              <u style={{ boxSizing: "border-box" }}>
                <a
                  style={{
                    boxSizing: "border-box",
                    cursor: "pointer",
                    textDecoration: "underline solid rgb(0, 0, 0)",
                    textDecorationLine: "underline",
                    color: accentColor,
                  }}
                  href={"#modal-comparison-rate"}
                >
                  What’s a comparison rate?
                </a>
              </u>
            </p>
            <p
              style={{
                boxSizing: "border-box",
                marginBlockStart: "0px",
                marginTop: "0px",
                WebkitFontSmoothing: "antialiased",
              }}
            >
              <a
                style={{
                  boxSizing: "border-box",
                  cursor: "pointer",
                  textDecoration: "underline solid rgb(0, 0, 0)",
                  textDecorationLine: "underline",
                  color: accentColor,
                }}
                href={"#modal-fixed"}
              >
                Can I have a fixed rate and an offset?
              </a>
            </p>
          </div> */}
        </div>
      </form>
    </>
  );
}
