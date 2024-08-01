var theme = {
    plain: {
      color: "#393A34",
      backgroundColor: "#f6f8fa"
    },
    styles: [{
      types: ["comment", "prolog", "doctype", "cdata"],
      style: {
        color: "#999988",
        fontStyle: "italic"
      }
    }, {
      types: ["namespace"],
      style: {
        opacity: 0.7
      }
    }, {
      types: ["string", "attr-value"],
      style: {
        color: "#ED7D31"
      }
    }, {
      types: ["punctuation", "operator"],
      style: {
        color: "#06417C"
      }
    }, {
      types: ["entity", "url", "symbol", "number", "boolean", "variable", "constant", "property", "regex", "inserted"],
      style: {
        color: "#3C87CD"
      }
    }, {
      types: ["atrule", "keyword", "attr-name", "selector"],
      style: {
        color: "#00a4db"
      }
    }, {
      types: ["function", "deleted", "tag"],
      style: {
        color: "#d73a49"
      }
    }, {
      types: ["function-variable"],
      style: {
        color: "#6f42c1"
      }
    }, {
      types: ["tag", "selector", "keyword"],
      style: {
        color: "#00009f"
      }
    }]
  };
  
  export default theme;
  