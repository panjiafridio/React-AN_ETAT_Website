import Navbar from "../components/Navbar";
import mainFotoArabic from "../assets/main-foto-arabic.png";
import mainFotoArabicTwo from "../assets/main-foto-arabic2.png";
import Boide from "../assets/boide.png";


const Menu = () => {
  return (
    <Navbar>
    <div className="bg-white w-[95%] mx-auto">

      {/* Hero Section */}
      <section className=" bg-white">
        <div className="flex flex-col md:flex-row gap-6">
          <img src={mainFotoArabic} alt="Hero" className="w-full md:w-2/3 rounded-lg" />
          <div className="w-full md:w-1/3">
            <img src={mainFotoArabicTwo} alt="Hero" className="w-full md:w-3.5/3 rounded-lg" />
          </div>
        </div>
      </section>

      {/* Dernières Actualités */}
      <section className="p-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <h2 className="text-2xl font-bold mb-4">آخر الأخبار</h2>
          <h2 className="text-xl p-4 font-bold mb-4 text-black bg-[#EBEBEB]">جميع الأخبار &gt;</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-4">
          <div className="bg-white p-4 shadow rounded-lg">
            <h3 className="font-semibold">هنالك العديد من الأنواع المتوفرة لنصوص لوريم إيبسوم، ولكن الغالبية تم تعديلها بشكل ما عبر إدخال بعض النوادر أو الكلمات </h3>
            <p className="text-gray-500 text-sm">19 نوفمبر 2024</p>
            <p className="text-gray-700 mt-2">إن كنت تريد أن تستخدم نص لوريم إيبسوم ما، عليك أن تتحقق أولاً أن ليس هناك أي كلمات أو عبارات محرجة أو غير لائقة مخبأة في هذا النص. بينما تعمل جميع مولّدات نصوص لوريم إيبسوم على الإنترنت على إعادة تكرار مقاطع من نص لوريم إيبسوم نفسه عدة مرات بما تتطلبه الحاجة</p>
          </div>
          <div className="bg-white p-4 shadow rounded-lg">
            <h3 className="font-semibold">هنالك العديد من الأنواع المتوفرة لنصوص لوريم إيبسوم، ولكن الغالبية تم تعديلها بشكل ما عبر إدخال بعض النوادر أو الكلمات </h3>
            <p className="text-gray-500 text-sm">19 نوفمبر 2024</p>
            <p className="text-gray-700 mt-2">إن كنت تريد أن تستخدم نص لوريم إيبسوم ما، عليك أن تتحقق أولاً أن ليس هناك أي كلمات أو عبارات محرجة أو غير لائقة مخبأة في هذا النص. بينما تعمل جميع مولّدات نصوص لوريم إيبسوم على الإنترنت على إعادة تكرار مقاطع من نص لوريم إيبسوم نفسه عدة مرات بما تتطلبه الحاجة</p>
          </div>
          <div className="bg-white p-4 shadow rounded-lg">
            <h3 className="font-semibold">هنالك العديد من الأنواع المتوفرة لنصوص لوريم إيبسوم، ولكن الغالبية تم تعديلها بشكل ما عبر إدخال بعض النوادر أو الكلمات </h3>
            <p className="text-gray-500 text-sm">19 نوفمبر 2024</p>
            <p className="text-gray-700 mt-2">إن كنت تريد أن تستخدم نص لوريم إيبسوم ما، عليك أن تتحقق أولاً أن ليس هناك أي كلمات أو عبارات محرجة أو غير لائقة مخبأة في هذا النص. بينما تعمل جميع مولّدات نصوص لوريم إيبسوم على الإنترنت على إعادة تكرار مقاطع من نص لوريم إيبسوم نفسه عدة مرات بما تتطلبه الحاجة</p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="bg-[#DDF5FF] p-6">
        <h2 className="text-2xl font-bold mb-5 md:text-[38px] md:leading-[44px] text-center md:text-left md:w-xl">لوريم إيبسوم هو ببساطة نص شكلي (بمعنى أن الغاية هي الشكل وليس المحتوى) ويُستخدم في صناعات المطابع ودور النشر. </h2>
        <div className="grid md:grid-cols-3 gap-4">
          <div className="bg-white p-2 md:p-[32px] md:w-[336px] md:h-[328px] gap-1.5">
            <h3 className="font-bold">الرؤية</h3>
            <p className="text-gray-700">&bull; إن كنت تريد أن تستخدم نص لوريم إيبسوم ما، عليك أن تتحقق أولاً أن ليس هناك أي كلمات أو عبارات محرجة أو غير لائقة مخبأة في هذا النص. <br /> <br />
            &bull; ينما تعمل جميع مولّدات نصوص لوريم إيبسوم على الإنترنت على إعادة تكرار مقاطع من نص لوريم إيبسوم نفسه عدة مرات بما تتطلبه الحاجة</p>
          </div>
          <div className="bg-white p-2 md:p-[32px] md:w-[336px] md:h-[328px] gap-1.5">
            <h3 className="font-bold">المهمة</h3>
            <p className="text-gray-700">&bull; إن كنت تريد أن تستخدم نص لوريم إيبسوم ما، عليك أن تتحقق أولاً أن ليس هناك أي كلمات أو عبارات محرجة أو غير لائقة مخبأة في هذا النص. <br /> <br />
            &bull; ينما تعمل جميع مولّدات نصوص لوريم إيبسوم على الإنترنت على إعادة تكرار مقاطع من نص لوريم إيبسوم نفسه عدة مرات بما تتطلبه الحاجة</p>
          </div>
          <div className="bg-white p-2 md:p-[32px] md:w-[336px] md:h-[328px] gap-1.5">
            <h3 className="font-bold">القيم</h3>
            <p className="text-gray-700">&bull; إن كنت تريد أن تستخدم نص لوريم إيبسوم ما، عليك أن تتحقق أولاً أن ليس هناك أي كلمات أو عبارات محرجة أو غير لائقة مخبأة في هذا النص. <br /> <br />
            &bull; ينما تعمل جميع مولّدات نصوص لوريم إيبسوم على الإنترنت على إعادة تكرار مقاطع من نص لوريم إيبسوم نفسه عدة مرات بما تتطلبه الحاجة</p>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="p-6 flex flex-col md:flex-row items-center justify-evenly gap-6">
        <img src={Boide} alt="Director" className="rounded-lg" />
        <blockquote className="md:w-[40%] mt-5 text-lg italic text-gray-700">
            لوريم إيبسوم هو ببساطة نص شكلي (بمعنى أن الغاية هي الشكل وليس المحتوى) ويُستخدم في صناعات المطابع ودور النشر. <br /> 
             ان لوريم إيبسوم ولايزال المعيار للنص الشكلي منذ القرن الخامس عشر عندما قامت مطبعة مجهولة برص مجموعة من الأحرف بشكل عشوائي أخذتها من نص، لتكوّن كتيّب بمثابة دليل أو مرجع شكلي لهذه الأحرف. هنالك العديد من الأنواع المتوفرة لنصوص لوريم إيبسوم، ولكن الغالبية تم تعديلها بشكل ما عبر إدخال بعض النوادر أو الكلمات العشوائية إلى النص. إن كنت تريد أن تستخدم نص لوريم إيبسوم ما، عليك أن تتحقق أولاً أن ليس هناك أي كلمات أو عبارات محرجة أو غير لائقة مخبأة في هذا النص. <br />
             ينما تعمل جميع مولّدات نصوص لوريم إيبسوم على الإنترنت على إعادة تكرار مقاطع من نص لوريم إيبسوم نفسه عدة مرات بما تتطلبه الحاجة
          <br />
          <br />
          <br />
          <span className="font-bold text-[#0F3B56] ">بودي ولد السقير <br />المدير العام للوكالة الرقمية للدولة </span>
        </blockquote>
      </section>

      {/* Projets Section */}
      <section className="bg-[#042D47] text-white p-2 md:p-[64px]">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-5">
          <h2 className="text-xl md:text-[32px] font-bold mb-4">مشاريع الوكالة الرقمية للدولة</h2>
          <h2 className="md:text-[15px] font-semibold bg-white md:w-[15%] p-1.5  text-black">جميع المشاريع &gt;</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-semibold">&gt; لوريم إيبسوم هو ببساطة</h3>
            <p className="text-gray-300">مثابة دليل أو مرجع شكلي لهذه الأحرف. هنالك العديد من الأنواع المتوفرة لنصوص لوريم</p>
          </div>
          <div>
            <h3 className="font-semibold">&gt; لوريم إيبسوم هو ببساطة</h3>
            <p className="text-gray-300">مثابة دليل أو مرجع شكلي لهذه الأحرف. هنالك العديد من الأنواع المتوفرة لنصوص لوريم</p>
          </div>
          <div>
            <h3 className="font-semibold">&gt; لوريم إيبسوم هو ببساطة</h3>
            <p className="text-gray-300">مثابة دليل أو مرجع شكلي لهذه الأحرف. هنالك العديد من الأنواع المتوفرة لنصوص لوريم</p>
          </div>
          <div>
            <h3 className="font-semibold">&gt; لوريم إيبسوم هو ببساطة</h3>
            <p className="text-gray-300">مثابة دليل أو مرجع شكلي لهذه الأحرف. هنالك العديد من الأنواع المتوفرة لنصوص لوريم</p>
          </div>
          <div>
            <h3 className="font-semibold">&gt; لوريم إيبسوم هو ببساطة</h3>
            <p className="text-gray-300">مثابة دليل أو مرجع شكلي لهذه الأحرف. هنالك العديد من الأنواع المتوفرة لنصوص لوريم</p>
          </div>
          <div>
            <h3 className="font-semibold">&gt; لوريم إيبسوم هو ببساطة</h3>
            <p className="text-gray-300">مثابة دليل أو مرجع شكلي لهذه الأحرف. هنالك العديد من الأنواع المتوفرة لنصوص لوريم</p>
          </div>
          <div>
            <h3 className="font-semibold">&gt; لوريم إيبسوم هو ببساطة</h3>
            <p className="text-gray-300">مثابة دليل أو مرجع شكلي لهذه الأحرف. هنالك العديد من الأنواع المتوفرة لنصوص لوريم</p>
          </div>
          <div>
            <h3 className="font-semibold">&gt; لوريم إيبسوم هو ببساطة</h3>
            <p className="text-gray-300">مثابة دليل أو مرجع شكلي لهذه الأحرف. هنالك العديد من الأنواع المتوفرة لنصوص لوريم</p>
          </div>
        </div>
      </section>
    </div>

    </Navbar>
  );
};

export default Menu;
