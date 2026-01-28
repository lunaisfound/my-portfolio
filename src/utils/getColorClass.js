const getColorClass = (tech) => {
  switch (tech) {
    case "#JavaScript":
      return "javascript";
    case "#TypeScript":
      return "typescript";
    case "#HTML":
      return "html";
    case "#CSS":
      return "css";
    case "#Git":
      return "git";
    case "#Node.js":
      return "nodejs";
    case "#Express.js":
      return "expressjs";
    case "#MongoDB":
      return "mongodb";
    case "#PostgreSQL":
      return "postgresql";
    case "#AWS":
      return "aws";
    case "#Firebase":
      return "firebase";
    case "#C++":
      return "cpp";
    case "#Python":
      return "python";
    case "#Figma":
      return "figma";
    case "#React.js":
      return "reactjs";
    case "#Jira":
      return "jira";
    case "#Django":
      return "django";
    case "#OpenAI":
      return "openai";
    case "#ReplicateAPI":
      return "replicateapi";
    case "#AntDesign":
      return "antdesign";
    default:
      return "";
  }
};

export default getColorClass;
