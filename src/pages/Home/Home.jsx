import BlogCard from "../../components/BlogCard/BlogCard";

const Home = () => {

    const companies = [
    {
      Title : "Bhasaka Technologies",
      image : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQi0mStaDV--kbcnKNQlvzB1kW8Y_KYy476pQ&s",
      Description : "Bhasaka Technologies is a leading information technology service company serving its customers with the latest technologies, products, and applications. Realizing its superior service, customers are building a keen interest in Bhasaka Technologies' services.",
         author : {
        name : "Hemanth"
      } 
    },
    {
      Title : "TCS",
      image : "data:image/png;base64,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",
      Description : "Tata Consultancy Services (TCS) is an Indian multinational technology company specializing in information technology services and consulting. Headquartered in Mumbai, it is a part of the Tata Group and operates in 150 locations across 46 countries.[3] As of 2024, Tata Sons owned 71.74% of TCS,[4] and close to 80% of Tata Sons' dividend income came from TCS.",
         author : {
        name : "Hemanth"
      } 
    },
    {
      Title : "Capegemini",
      image : "data:image/png;base64,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",
      Description : "Capgemini was founded by Serge Kampf in 1967 as an enterprise management and data processing company. The company was founded as the Société pour la Gestion de l'Entreprise et le Traitement de l'Information (Sogeti).In 1974, Sogeti acquired Gemini Computer Systems, an American company based in New York.",
         author : {
        name : "Hemanth"
      } 
    },
    {
    Title: "Google",
    image: "https://logo.clearbit.com/google.com",
    Description: "Google specializes in Internet-related services and products, including search, advertising, and cloud computing.",
       author : {
        name : "Hemanth"
      } 
    },
    {
      Title: "Apple",
      image: "https://logo.clearbit.com/apple.com",
      Description: "Apple is known for its innovative hardware and software products like the iPhone, Mac, and iOS.",
         author : {
        name : "Hemanth"
      } 
    },
    {
      Title: "Microsoft",
      image: "https://logo.clearbit.com/microsoft.com",
      Description: "Microsoft develops software, hardware, and services including Windows, Office, and Azure cloud.",
         author : {
        name : "Hemanth"
      } 
    },
    {
      Title: "Amazon",
      image: "https://logo.clearbit.com/amazon.com",
      Description: "Amazon is a global e-commerce and cloud computing company known for its customer-centric approach.",
         author : {
        name : "Hemanth"
      } 
    },
    {
      Title: "Facebook",
      image: "https://logo.clearbit.com/facebook.com",
      Description: "Facebook, now Meta, focuses on social networking and building the metaverse.",
        author : {
        name : "Hemanth"
      } 
    },
    {
      Title: "Netflix",
      image: "https://logo.clearbit.com/netflix.com",
      Description: "Netflix is a streaming service offering a wide variety of award-winning TV shows and movies.",
         author : {
        name : "Hemanth"
      } 
    },
    {
      Title: "Tesla",
      image: "https://logo.clearbit.com/tesla.com",
      Description: "Tesla designs and manufactures electric vehicles, solar energy products, and battery storage systems.",
         author : {
        name : "Hemanth"
      } 
    },
    {
      Title: "IBM",
      image: "https://logo.clearbit.com/ibm.com",
      Description: "IBM is a global leader in technology and consulting services, specializing in AI and enterprise solutions.",
      author : {
        name : "Hemanth"
      } 
    },
    {
      Title: "Samsung",
      image: "https://logo.clearbit.com/samsung.com",
      Description: "Samsung is a multinational conglomerate known for electronics, especially smartphones and TVs.",
      author : {
        name : "Hemanth"
      } 
    },
    {
      Title: "Intel",
      image: "https://logo.clearbit.com/intel.com",
      Description: "Intel is a leader in semiconductor manufacturing and computing innovation."
    }
  ];

    return (
      <div>
        {
            // companies.map((company) => {
            // return <BlogCard image = {company.image} Title={company.companyName} Description={company.companyDescription}/>
            // })

            companies.map((company,index) => {return <BlogCard  key={`${company.title}_${index}`}{...company}/>})
        }
      </div>
      
    )
};


export default Home;