import './index.css';

function App() {
  return (
    <div className="bg-gray-100 font-sans">
      {/* Header */}
      <header className="bg-blue-900 text-white py-6">
        <div className="container max-w-7xl mx-auto px-4">
          <h1 className="text-4xl font-bold text-center">
            Plagiarism Detection for Khmer Language
          </h1>
        </div>
      </header>

      {/* Main Content */}
      <main className="container max-w-7xl mx-auto px-4 py-12">
        {/* Abstract */}
        <section className="mb-12">
          <h2 className="text-3xl font-semibold text-blue-900 mb-4">Abstract</h2>
          <p className="text-gray-700 leading-relaxed">
            Detecting plagiarism in the Khmer language remains a significant challenge in Cambodia due to the limited availability of digitized texts. This limitation has led to frequent plagiarism found in many academic papers across institutions, emphasizing the urgent need for a digital solution.
            This project aims to develop a plagiarism detection web application specifically for the Khmer language and to identify the most effective approach by comparing four methods: Term Frequency–Inverse Document Frequency with cosine similarity, N-gram matching using a PostgreSQL inverted index with Jaccard similarity, sentenceTransformers, and Elasticsearch combined with the Rapidfuzz Python library. The most efficient method is integrated into the web application. Since all collected PDFs are image-based and contain non-selectable text, they are processed using Optical Character Recognition (OCR). The extracted text then undergoes a Khmer-specific data preprocessing pipeline before analysis.
            The web application is currently deployed on self-managed servers at the Ministry of Education, Youth and Sport of Cambodia (MoEYS), the primary funder of this initiative. Thirteen universities in Cambodia are using it to assess educational materials in the Khmer language, helping evaluate the system and identify areas for further improvement.
            While the application successfully detects identical and similar plagiarized sentences, its accuracy is limited by the quality of the OCR. Common OCR errors often distort textual content, reducing the accuracy of plagiarism detection. Future work will focus on improving OCR performance and incorporating internet-based plagiarism detection to expand the system’s capabilities.
          </p>
        </section>

        {/* Introduction */}
        {/* <section className="mb-12">
          <h2 className="text-3xl font-semibold text-blue-900 mb-4">Introduction</h2>
          <h3 className="text-xl font-medium text-gray-800 mb-2">Problem Statement</h3>
          <p className="text-gray-700 leading-relaxed">
            Many authors, PhD students, researchers at more than thirteen universities in Cambodia, and book publishers have been found reusing redundant content to produce additional publications. This practice continues despite growing awareness of the consequences of plagiarism and is evident in numerous official books and research publications. A 2023 report by the Cambodian Education Forum further highlights that plagiarism is widespread among both students and academic staff. The problem is worsened by the limited availability of digital Khmer texts, making internet-based plagiarism detection tools ineffective for hard-copy documents.
          </p>
          <h3 className="text-xl font-medium text-gray-800 mt-4 mb-2">Motivation</h3>
          <p className="text-gray-700 leading-relaxed">
            To address this challenge, a Khmer-language plagiarism detection system was developed to support Cambodian universities, publishers, and institutions in verifying the originality of academic documents. The system compares submitted files against a centralized database and significantly reduces manual workload by enabling fast, automated plagiarism detection through a web-based interface. It also helps overcome the lack of digitized content by using Optical Character Recognition (OCR) to extract searchable text from printed materials.
          </p>
          <h3 className="text-xl font-medium text-gray-800 mt-4 mb-2">Project Funder</h3>
          <p className="text-gray-700 leading-relaxed">
            Funded and supported by the Cambodian Ministry of Education, Youth, and Sport (MoEYS), this project was initiated to improve research integrity across academic institutions. The Secretary of State of the Ministry of Education enabled 13 public universities to test the platform for detecting duplicated content in books, research papers, and academic publications.
          </p>
        </section> */}

        {/* Technology Stack */}
        <section className="mb-12">
          <h2 className="text-3xl font-semibold text-blue-900 mb-4">Technology Stack and Development Environment</h2>
          <ul className="list-disc pl-6 text-gray-700 leading-relaxed">
            <li><strong>Machine Learning and NLP Tools:</strong> Scikit-learn (TF-IDF), SentenceTransformers</li>
            <li><strong>Optical Character Recognition and PDF Text Extraction Tools:</strong> Tesseract, Google Cloud Vision AI, Python PDF parsing libraries</li>
            <li><strong>Search and Retrieval Tools:</strong> FAISS, Elasticsearch</li>
            <li><strong>Backend:</strong> Python, Flask</li>
            <li><strong>Frontend:</strong> React, Tailwind CSS</li>
            <li><strong>Storage and Background Task Management:</strong> MinIO, Redis</li>
            <li><strong>Deployment:</strong> Docker, MoEYS server</li>
            <li><strong>Development Tools:</strong> VS Code, Jupyter Notebook, Postman</li>
          </ul>
        </section>

        {/* Implementation */}
        <section className="mb-12">
          <h2 className="text-3xl font-semibold text-blue-900 mb-4">Implementation and Method Exploration</h2>
          <h3 className="text-xl font-medium text-gray-800 mb-4">Explored Plagiarism Detection Methods</h3>
          <ol className="list-decimal pl-6 text-gray-700 leading-relaxed">
            <li><strong>TF-IDF and Cosine Similarity:</strong> Converts Khmer sentences into TF-IDF vectors and uses cosine similarity to measure how close their wording is.</li>
            <li><strong>N-gram, Jaccard Similarity, and Inverted Index in PostgreSQL:</strong> Breaks sentences into n-grams and compares them using Jaccard similarity through inverted index structure built in PostgreSQL.</li>
            <li><strong>SentenceTransformer:</strong> Generates semantic sentence embeddings with SentenceTransformer and uses FAISS to find high-semantic-similarity matches.</li>
            <li><strong>Elasticsearch and RapidFuzz:</strong> Indexes all sentences and retrieves potential matches, enabling large-scale plagiarism detection.</li>
          </ol> 
          {/* <h2 className="text-xl font-medium text-gray-800 mt-8 mb-5">Final System Architecture and Technical Implementation</h2>
          <p className="text-gray-700 leading-relaxed mb-10">
            Elasticsearch is chosen as the final implementation method and the diagram below illustrates the overall workflow of the plagiarism detection system - from document upload to result delivery. It highlights how various technologies such as Flask, Redis, MinIO, Tesseract, and Elasticsearch work together to automate the plagiarism detection process and uploading documents to the system.
          </p>
          <img
            src="/static/images/architecture.jpg"
            alt="System Architecture Diagram"
            className="w-full max-w-4xl mx-auto rounded-lg shadow-md"
          /> */}
        </section>

        {/* Thesis Download */}
        <section className="mb-12">
          <h2 className="text-3xl font-semibold text-blue-900 mb-4">Full Final Year Project Document</h2>
          <p className="text-gray-700 leading-relaxed">
            To view the full version of the final year project report, click the link below:
          </p>
          <a
            href="/static/Khmer Plagiarism Detection Final Year Project Report.pdf"
            target="_blank"
            download
            className="inline-block mt-4 px-6 py-2 bg-blue-600 text-white font-semibold rounded hover:bg-blue-700"
          >
            View Full Final Year Project Report (PDF)
          </a>
        </section>

        {/* Project Video */}
        <section className="mb-12">
          <h2 className="text-3xl font-semibold text-blue-900 mb-4 text-center">
            Project Demo Video
          </h2>
          <div className="flex justify-center">
            <div className="w-full max-w-5xl">
              <div className="relative" style={{ paddingTop: '56.25%' }}>
                <iframe
                  className="absolute top-0 left-0 w-full h-full rounded-lg shadow-md"
                  src="https://www.youtube.com/embed/ycjSs2Iu5-g?autoplay=1&mute=1&rel=0&vq=hd1080"
                  title="Khmer Plagiarism Detection Project Demo"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div>
        </section>

        {/* Conclusion */}
        {/* <section className="mb-12">
          <h2 className="text-3xl font-semibold text-blue-900 mb-4">Conclusion</h2>
          <p className="text-gray-700 leading-relaxed">
            Successfully deployed on a self-hosted server within the Cambodian Ministry of Education, Youth and Sport, this system addresses the lack of digital tools for supporting plagiarism detection in Cambodia. Designed specifically for Khmer-language documents, it enables 13 public universities to access the platform and test the plagiarism detection tool through a web-based interface. Several detection methods—including TF-IDF with cosine similarity, N-gram with Jaccard similarity, SentenceTransformer, and Elasticsearch—were explored and evaluated for accuracy, scalability, and performance. Based on these evaluations, Elasticsearch was selected and integrated into the system to provide high-performance document retrieval. Future development will focus on improving OCR accuracy for scanned PDFs and expanding detection capabilities to include online sources, further strengthening research integrity nationwide.
          </p>
        </section> */}

        {/* About the Author */}
        <section className="mb-12">
          <h2 className="text-3xl font-semibold text-blue-900 mb-4">About the Author</h2>
          <p className="text-gray-700 leading-relaxed">
            My name is Sothyro Meas, and I completed this project as part of my undergraduate final year project in Information and Communication Technology. I am passionate about applying machine learning and artificial intelligence across various domains to address real-world challenges.
          </p>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-blue-900 text-white py-6 text-center">
        <p>&copy; 2025 Sothyro Meas</p>
      </footer>
    </div>
  );
}

export default App;
