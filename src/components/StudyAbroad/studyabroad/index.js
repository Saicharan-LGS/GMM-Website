import React from "react";
import './index.css'
import DoubtItem from "../../courses/DataScience/DoubtItem";
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from "../Carousel1/index.js";
import HeaderSection from "../firstsection/first.js"
import Header from "../../Homes/Headers"
const faqsList = [
    {
      id: 0,
      question: 'Foundations of Information',
      answer: `Sensing the data
      Learn about types, sources and management of internal and external data including static vs streaming data, reports, databases and online data'
       
      Data collection
      Learn the process of extracting, transforming and making data available for further use.
       
      Data usability
      Learn the fundamentals of scoping the data by eliminating redundant elements and following logical, graphical, statistical analysis flow.
       
      Data Storage
      Get introduced to RDBMS, SQL, NoSQL, Data Marts, Data Lakes, ETL, and Data Pipelines as well as large information repositories and tools like Hadoop, Hive, Spark etc.`
    },   
        
    {
      id: 1,
      question: 'Data Mining and Discovery',
      answer:
        `Introduction to data mining
        Learn about data distributions and hypothesis testing. Use basic maths and common programing functions to handle data.
         
        Business problem identification and scoping
        Map data to business problems being solved and select appropriate elements of the data.
         
        Graphical Data Analysis
        Learn how to create basic graphs and analyze data visually. Use descriptive statistics to interpret data characteristics.
         
        Unsupervised learning techniques
        Use unsupervised learning like dimensionality reduction and clustering to discover elements of data.`
    },
    
    {
      id: 2,
      question: 'Introduction to Machine Learning',
      answer:
        `Linear Modeling
        Learn how to do linear regression and linear classification with perceptrons. Extend linear model to various use cases.
         
        Learning Theory and Model Evaluation
        Understand bias-variance trade off and cross validation.
         
        Probabilistic methods
        Learn about maximum likelihood and bayesian approach including Priors, Marginal Likelihood & Hyperparameters
         
        Optimization and Approximation Methods
        Use Gradient methods (gradient descent, Newton’s method), sampling and Markov Chain Monte Carlo simulations (using Metropolis Hastings algorithm)
         
        Classification techniques
        Implement basic classification techniques like Logistic Regression, Bayesian Classification, Naive Bayes, Nearest Neighbors, Support Vector Machines.
         
        Domain specific techniques
        Understand Nonparametric Bayesian methods, Gaussian Processes, Topic Modeling, Ensembles, Boosting and Random Forests .`
    },
    {
      id: 3,
      question: 'Applied Natural Language Processing',
      answer:
        `Textual Data
        Data Acquisition
        Manual Annotation
        Pre-Processing
         
        Text Representation
        Discrete Text Representations
        Word Embeddings
        Semantic Text Similarity
         
        Text Classification
        Text Classification with Linear Regression
        The FeedForward Neural Network for NLP
        Evaluation Metrics
         
        Sequence Processing
        Sequence Labeling
        Reading Comprehension
        Sequence to Sequence
         
        Pre-trained Language Models
        Language Modeling
        Pre-trained Language Models
        PLM Variants
         
        A Paradigm Shift
        Task Unification
        Instructed PLMs`
    },
  
    {
      id: 4,
      question: 'Data Warehousing and Analytics in the Cloud',
      answer:
        `Introduction to Cloud
        Learn cloud computing basics for machine learning and data science. Explore Infrastructure as a Service (IaaS), Platform as a Service (PaaS), Function as a Service(FaaS) in context of MS Azure.
         
        Setting up Cloud and parallel processing
        Learn about Cloud Storage Systems and virtualization. Use parallel programming tools and infrastructure in cloud like HDFS, Hive, SparkML.
         
        Data warehousing
        Develop data warehouses in the cloud. Develop and deploy machine learning models in cloud
         
        Data warehouse design
        Using SQL and NoSQL Data Warehouse,. Understand Designing and Querying Data Warehouses`
    },
    {
      id: 5,
      question: 'Data Ethics',
      answer:
        `Ethical Foundations
        Learn about the birth of ethics, the role it plays in our daily lives and how to ensure ethical conduct in Data Science.
         
        Ethics in Data
        Learn how to ethically use and collect data, how to ensure privacy through masking and how to maintain anonymity and confidentiality of data and metadata. Learn about the various ethics & compliance initiatives undertaken to ensure privacy of information such as GDPR.
         
        Ethics in Modelling
        Learn the various problems faced due to algorithmic bias and how to take a data/model-driven approach to tackle this.`
    },
    {
      id: 6,
      question: 'Data Analysis and Visualization',
      answer:
        `Theory of Visualization
        Learn about design, shapes and color theory behind visualizations.
         
        Single and Multiple dimension visualizations
        Use appropriate graphical design to depict the information. Integrate multiple elements of data to present compact and effective information.
         
        Visualization for audience
        Learn about selection and presentation of visual information according to audience requirements.
         
        Interactive visualizations
        Understand linking to databases, filtering and information highlighting for visualizations. Explore python integrations with D3.js`
    },
    {
      id: 7,
      question: 'Neural Networks',
      answer:
        `Introduction to NN
        Learn about history, development and applications of Neural Networks
         
        Feed Forward NN
        Learn about NN architecture, Gradient based learning and Back propagation
         
        Regularization
        Understand Dropout, Parameter penalties and early stopping
         
        CNN and RNN
        Understand Convolution and Pooling. Apply Gated Recurrent Network along with Encoder-decoder Network. Understand transformer network
         
        Practical considerations and interpretability
        Understand Default baseline models and Debugging. Use Local surrogates and Saliency maps for Interpretability`
    },
    {
      id: 8,
      question: 'Advanced Machine Learning Applications',
      answer:
        `Applying deep learning methods for computer vision (CV) including methods to train large CV models
        Generative modeling with industry applications (e.g., diffusion models, text-to-image models)
        Case studies showcasing business applications of deep learning`
    },
    {
      id: 9,
      question: 'Capstone Project',
      answer:
        `1) Predicting climate change patterns using hydrological data from regions
        2) Predicting climatic vulnerability based on historic data.
        3) Using NLP in analysis of public health records and predicting population health parameters.
        4) Using non-invasive imaging techniques to rapidly assess population health.`
    },
  ]

const Studyabroad = () => {  
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 4,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };    
        
  return (
    <>
    <Header />
<div className="abroadmaincontainer">
    <HeaderSection />
    <div className="study_container_main">
        <div>
            <h1 className="study_abroad_curriculum_heading_high">Curriculum</h1>
            <div className="study_abroad_curriculum">
                <p className="study_abroad_paragraph">The curriculum is designed by leading experts at the University of Arizona and practicing industry professionals. It is specifically curated to cover a range of information science skills - starting from the fundamentals and progressing to more complex, hands-on applications. The program ensures that learners without prior expertise in data science and machine learning too can gain the latest knowledge thereby making it one of the best Information Science programs.</p>
                <button className="curriculum_button">Download Curriculum</button>
            </div>
        </div>
        <div className="multiple_container">
        <div className="app-container">
      <div className="faqs-container">
        <h1 className="study_abroad_curriculum_heading_high">Curriculum Snapshot</h1>
        <ul className="faqs-list">
          {faqsList.map(eachFaq => (
            <DoubtItem key={eachFaq.id} faqDetails={eachFaq}  />
          ))}
        </ul>
      </div>
      <h1 className="curriculum_heading_second_study_abroad">Master's Degree from The University of Arizona</h1>
      <p className="study_abroad_paragraph">Upon the successful completion of Information Science with Specialization in Machine Learning program, you would receive a Master’s Degree from The University of Arizona.</p>
    </div>
        </div>
        <div className="multiple_container">
            <h1 className="study_abroad_curriculum_heading_high">Languages and Tools covered</h1>
            <div className="many_more">
                <img  className="Tools_image" src="https://d1vwxdpzbgdqj.cloudfront.net/assets/arizona-ms/tools-desk-526d711b0a67a0a3ed8f4d17ea6c56f63359b7ff92ec0083d8d2fbb3d28075e5.jpg" alt="" 
                />
                <span >Many more...</span>
            </div>
        </div>

        <div className="multiple_container">
            <h1 className="study_abroad_curriculum_heading_high">Meet the Faculty</h1>
            <p className="study_abroad_paragraph">Learn from the esteemed faculty at University of Arizona and practicing Industry Professionals with immense experience in the field of Information Science.</p>
            <div>
        <Slider {...settings} className="study_abroad_carousal_list">
          <div className="slider_container ">
            <img  className = "faculty_image" src="https://d1vwxdpzbgdqj.cloudfront.net/assets/arizona-ms/steven-1c869956029ad1fcc5fc9c0f17c3e8d0472f13caf0751fd280d4b62c81894dc9.jpg" alt=""/>
            <h3>Dr. Steven Bethard</h3>
            <p>Associate Professor, School of information</p>
          </div>
          <div className="slider_container">
            <img  className = "faculty_image" src="https://d1vwxdpzbgdqj.cloudfront.net/assets/arizona-ms/steven-1c869956029ad1fcc5fc9c0f17c3e8d0472f13caf0751fd280d4b62c81894dc9.jpg" alt=""/>
            <h3>Dr. Steven Bethard</h3>
            <p>Associate Professor, School of information</p>
          </div>
          <div className="slider_container">
            <img  className = "faculty_image" src="https://d1vwxdpzbgdqj.cloudfront.net/assets/arizona-ms/steven-1c869956029ad1fcc5fc9c0f17c3e8d0472f13caf0751fd280d4b62c81894dc9.jpg" alt=""/>
            <h3>Dr. Steven Bethard</h3>
            <p>Associate Professor, School of information</p>
          </div>
          <div className="slider_container">
            <img  className = "faculty_image" src="https://d1vwxdpzbgdqj.cloudfront.net/assets/arizona-ms/steven-1c869956029ad1fcc5fc9c0f17c3e8d0472f13caf0751fd280d4b62c81894dc9.jpg" alt=""/>
            <h3>Dr. Steven Bethard</h3>
            <p>Associate Professor, School of information</p>
          </div>
          <div className="slider_container">
            <img  className = "faculty_image" src="https://d1vwxdpzbgdqj.cloudfront.net/assets/arizona-ms/steven-1c869956029ad1fcc5fc9c0f17c3e8d0472f13caf0751fd280d4b62c81894dc9.jpg" alt=""/>
            <h3>Dr. Steven Bethard</h3>
            <p>Associate Professor, School of information</p>
          </div>
          <div className="slider_container">
            <img  className = "faculty_image" src="https://d1vwxdpzbgdqj.cloudfront.net/assets/arizona-ms/steven-1c869956029ad1fcc5fc9c0f17c3e8d0472f13caf0751fd280d4b62c81894dc9.jpg" alt=""/>
            <h3>Dr. Steven Bethard</h3>
            <p>Associate Professor, School of information</p>
          </div>
          
        </Slider>
      </div>
        </div>
        <div>
        <Carousel/>
        </div>
        <div style={{marginTop:"350px"}}>
          <h1 className="study_abroad_curriculum_heading_high">Great Learning Advantage</h1>
          <p className="study_abroad_paragraph_advantage">Learn from a comprehensive curriculum taught by world-class faculty. Get guidance on your learning journey, and access dedicated career support.</p>
          <div className="study_abroad_advantage_division">
            <img src="https://d1vwxdpzbgdqj.cloudfront.net/assets/online-mentorship-6fdc7c0e368a0091054e8ea95541afdbaea225843baeba0d72bde2e924bfff00.jpg" alt=""/>
            <div>
              <h1 className="curriculum_heading_second_advantage">Learn while pursuing your career</h1>
              <ul>
                <li className="study_abroad_paragraph_advantage1">Hybrid format with personalised mentorship</li>
                <li className="study_abroad_paragraph_advantage1">Practical Insights from Industry Experts</li>
              </ul>
            </div>     
          </div>
          <div className="study_abroad_advantage_division">
            <img src="https://d1vwxdpzbgdqj.cloudfront.net/assets/aiml-pp-new/program-support-9208edb06c95cd575993007089c469c7e86cd8dfcd844f7aafeacd3875a56f4b.jpg" alt=""/>
            <div>
              <h1 className="curriculum_heading_second_advantage">Learn while pursuing your career</h1>
              <ul>
                <li className="study_abroad_paragraph_advantage1">Hybrid format with personalised mentorship</li>
                <li className="study_abroad_paragraph_advantage1">Practical Insights from Industry Experts</li>
              </ul>
            </div> 
          </div>
        </div>
        <div >
          <h1 className="study_abroad_curriculum_heading_application">Application Process</h1>
          <div className="study_abroad_application_background">
            <div className="study_abroad_application_process">
              <h1 className="curriculum_heading_second_study_abroad">Apply Online</h1>
              <p className="study_abroad_paragraph_advantage1">Complete filling a fast and easy online application form. No additional tests or prerequisites are needed to apply.</p>
            </div>
            <div className="study_abroad_application_process">
              <h1 className="curriculum_heading_second_study_abroad">Pre-screening</h1>
              <p className="study_abroad_paragraph_advantage1">Our team will make contact with you by phone to confirm your eligibility for the program.</p>
            </div>
            <div className="study_abroad_application_process">
              <h1 className="curriculum_heading_second_study_abroad">Application Assessment</h1>
              <p className="study_abroad_paragraph_advantage1">The Admissions team will assess your application and provide a timely response.</p>
            </div>
            <div className="study_abroad_application_process">
              <h1 className="curriculum_heading_second_study_abroad">Join The Program</h1>
              <p className="study_abroad_paragraph_advantage1">If selected, you will receive an acceptance letter with instructions on how to pay and join the program.</p>
            </div>
          </div>
        </div>
        <div>
          <h1 className="study_abroad_curriculum_heading_high">Who is this program for?</h1>
          <div className="study_abroad_program_boxes">
          <div className="study_abroad_program_card">
            <img className="study_abroad_program_image" src="https://d1vwxdpzbgdqj.cloudfront.net/assets/arizona-ms/fresher-9ae8f9153c779d3078e0b76ce7926235f62dcb72aaf9eb344a5ee5764e7b6c8e.jpg" alt=""/>
            <div className="study_abroad_program_para">
              <h1 className="curriculum_heading_second_advantage">Early Career Professionals</h1>
              <p className="study_abroad_paragraph_advantage">Young, early-career professionals looking to go abroad and master information-driven innovation with knowledge of the latest information methods.</p>
            </div>
          </div>
          <div className="study_abroad_program_card">
            <img  className="study_abroad_program_image" src="https://d1vwxdpzbgdqj.cloudfront.net/assets/arizona-ms/mid-lvl-b785a475fdbd7fac3adf2bf5fc7d1818bae1ad8addc751931ab05dd52220dcb0.jpg" alt=""/>
            <div className="study_abroad_program_para">
              <h1 className="curriculum_heading_second_advantage">Mid & Senior Level Professionals</h1>
              <p className="study_abroad_paragraph_advantage">Mid and senior-level professionals who are looking to go abroad or learn online and stay up-to-date with the latest information management skills needed for success in the digital world.</p>
            </div>
          </div>
          <div className="study_abroad_program_card">
            <img className="study_abroad_program_image" src="https://d1vwxdpzbgdqj.cloudfront.net/assets/aifl-intl/strategy_program_image-a27b5fd3afe191469ac3e1c74c7b31580b27ab29c3b93d391de55ae79b6d6a6e.png" alt=""/>
            <div className="study_abroad_program_para">
              <h1 className="curriculum_heading_second_advantage">Working Professionals</h1>
              <p className="study_abroad_paragraph_advantage">Professionals who wish to learn online without quitting their job and transition to an information management career with industry-ready skills and knowledge.</p>
            </div>
          </div>
          </div>

        </div>
        <div className="study_abroad_color">
        <div className="study_abroad_program_boxes_query">
          <div className="study_abroad_query_box">
            <h1 className="study_abroad_curriculum_heading_high_query">Still have queries?Contact Us</h1>
            <p className="study_abroad_paragraph_query">Please fill in the form and an expert from the admissions office will call you in the next 4 working hours. You can also reach out to us at msml.hybrid@greatlearning.in or 080-6945-1380.</p>
        </div>
        <div className="study_abroad_query_sub">
            <div className="study_abroad_program_boxes_query">
          <div className="study_abroad_query_box">
            <label className="study_abroad_paragraph_query study_abroad_input_elements_padding">Name</label><br/>
            <input type="text" placeholder="Name" className=" study_abroad_paragraph_query study_abroad_input_label study_abroad_input_elements_padding"></input><br/>
            <label className="study_abroad_paragraph_query study_abroad_input_elements_padding">Mobile Number</label><br/>
            <input type="text" placeholder="Mobile Number" className=" study_abroad_paragraph_query study_abroad_input_label study_abroad_input_elements_padding"></input>
          </div>
          <div className="study_abroad_query_box">
            <label className="study_abroad_paragraph_query study_abroad_input_elements_padding">Email</label><br/>
            <input type="text" placeholder="Email" className=" study_abroad_paragraph_query study_abroad_input_label study_abroad_input_elements_padding"></input><br/>
            <label className="study_abroad_paragraph_query study_abroad_input_elements_padding">Work Experience in years</label><br/>
            <input type="text" placeholder="Work Experience in years" className=" study_abroad_paragraph_query study_abroad_input_label study_abroad_input_elements_padding"></input>
            <button className="query_button_study_abroad box" >Submit</button>
          </div>          
          </div>
          
            <p className="study_abroad_conditions">By submitting the form, you agree to our Terms and Conditions and our Privacy Policy.</p>
            <button className="query_button_study_abroad">Submit</button>
          </div>
        </div>
    </div>
    </div>      
</div>
</>
  )
}


export default Studyabroad