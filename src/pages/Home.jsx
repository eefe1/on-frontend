import HomeBanner from "../components/homeBanner";
import SectionSpeciality from "../components/sectionSpeciality";
import SectionReason from "../components/sectionReason";
import SectionBook from "../components/sectionBook";
import SectionFaq from "../components/sectionFaq";
import SectionArticles from "../components/sectionArticles";

const Home = () => {
    return (
        <div className='main-wrapper'>
          <HomeBanner/>
          <SectionSpeciality/>
          <SectionReason/>
          <SectionBook/>
          <SectionFaq/>
          <SectionArticles/>   
        </div>
    )
}

export default Home 