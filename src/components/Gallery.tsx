import { motion, AnimatePresence } from "motion/react";
import { useState, useEffect, useMemo } from "react";
import { X } from "lucide-react";

const ALL_IMAGES = [
  "https://i.ibb.co/Txk3spcb/fatimah-adetona-1768852633-3813734766662940867-4356536344.jpg",
  "https://i.ibb.co/8LGSKBT1/fatimah-adetona-1768852633-3813734766662956799-4356536344-1.jpg",
  "https://i.ibb.co/Q3TjbJkf/larami-lifestyle-1769276012-3817286328522569710-61307227951.jpg",
  "https://i.ibb.co/Z1kPGN3w/larami-lifestyle-1769520788-3819338484725376183-61307227951.jpg",
  "https://i.ibb.co/21W4Y0Hy/larami-lifestyle-1769520788-3819338481437016524-61307227951.jpg",
  "https://i.ibb.co/nsyP54zW/larami-lifestyle-1769688861-3820749513829265596-61307227951.jpg",
  "https://i.ibb.co/SwL8dz73/larami-lifestyle-1769688861-3820749460972695208-61307227951.jpg",
  "https://i.ibb.co/4ZXYWWjm/larami-lifestyle-1769688861-3820749221771538221-61307227951.jpg",
  "https://i.ibb.co/QFS8VF1w/fatimah-adetona-1769965200-3822857663646875721-4356536344.jpg",
  "https://i.ibb.co/99c0Zk1D/fatimah-adetona-1769965200-3822857663638478342-4356536344.jpg",
  "https://i.ibb.co/DP3HJjQT/larami-lifestyle-1770207966-3825104085976770765-61307227951.jpg",
  "https://i.ibb.co/zHQjcx5P/larami-lifestyle-1770207966-3825104083116243721-61307227951.jpg",
  "https://i.ibb.co/hR61ZTFX/larami-lifestyle-1773313318-3851151781753700845-61307227951.jpg",
  "https://i.ibb.co/1fykCb3C/larami-lifestyle-1773325227-3851253257008201516-61307227951.jpg",
  "https://i.ibb.co/RkTQyPjJ/larami-lifestyle-1773325227-3851253252906170547-61307227951.jpg",
  "https://i.ibb.co/nqcnp9S8/larami-lifestyle-1773325227-3851253252277065941-61307227951.jpg",
  "https://i.ibb.co/BHX1x41p/larami-lifestyle-1773325227-3851253244047796289-61307227951.jpg",
  "https://i.ibb.co/gFtSGk6k/larami-lifestyle-1773325337-3851252802622463791-61307227951.jpg",
  "https://i.ibb.co/3m4Gzhkv/larami-lifestyle-1773325337-3851252683537825653-61307227951.jpg",
  "https://i.ibb.co/Gfstn7Hs/larami-lifestyle-1773325337-3851252638943976511-61307227951.jpg",
  "https://i.ibb.co/Z61z1LW4/larami-lifestyle-1773325337-3851251212217920935-61307227951.jpg",
  "https://i.ibb.co/j9612GLj/larami-lifestyle-1773325337-3851251136804323097-61307227951.jpg",
  "https://i.ibb.co/pjVwc10C/mola-glamz-1773333662-3851323880203878589-6279634862.jpg",
  "https://i.ibb.co/kgMJbz9Q/mola-glamz-1773333662-3851323863770656878-6279634862.jpg",
  "https://i.ibb.co/gbKMTcBG/mola-glamz-1773333662-3851323859291142254-6279634862.jpg",
  "https://i.ibb.co/hb6ZhsH/larami-lifestyle-1773491612-3852648345802285050-61307227951.jpg",
  "https://i.ibb.co/Fk7c3n3Q/larami-lifestyle-1773491612-3852648342857907151-61307227951.jpg",
  "https://i.ibb.co/hFtgTpPY/larami-lifestyle-1773491612-3852648541256812893-61307227951.jpg",
  "https://i.ibb.co/d4mVThGW/larami-lifestyle-1773403648-3851909693795109275-61307227951.jpg",
  "https://i.ibb.co/Gvpp6yKD/larami-lifestyle-1773400941-3851886141981228350-61307227951.jpg",
  "https://i.ibb.co/FkJXbTLC/larami-lifestyle-1773400941-3851886100013018328-61307227951.jpg",
  "https://i.ibb.co/N2TkRqyF/larami-lifestyle-1773400941-3851886078521394410-61307227951.jpg",
  "https://i.ibb.co/99KYdK69/larami-lifestyle-1771262957-3833953486195324492-61307227951.jpg",
  "https://i.ibb.co/xdfdpYx/larami-lifestyle-1771262957-3833953483309637426-61307227951.jpg",
  "https://i.ibb.co/tMTw1NH7/larami-lifestyle-1771262957-3833953480415530917-61307227951.jpg",
  "https://i.ibb.co/BVx3xcD9/larami-lifestyle-1774714930-3862909740443659899-61307227951.jpg",
  "https://i.ibb.co/8nNThy5b/larami-lifestyle-1774714930-3862909724152975694-61307227951.jpg",
  "https://i.ibb.co/kfm1qvN/larami-lifestyle-1774714930-3862909733565029802-61307227951.jpg",
  "https://i.ibb.co/Xk2v23Cb/Project-Larami-Bhsa-V3s3.jpg",
  "https://i.ibb.co/RTKY4Bfw/larami-lifestyle-1769276012-3817286328321241402-61307227951.jpg",
  "https://i.ibb.co/JW6BcXfk/larami-lifestyle-1769276012-3817286328522514549-61307227951.jpg",
  "https://i.ibb.co/QjHGNVtJ/larami-lifestyle-1769276013-3817286329076172390-61307227951.jpg",
  "https://i.ibb.co/R4QPGpVd/larami-lifestyle-1769276013-3817286328522562549-61307227951.jpg",
  "https://i.ibb.co/vxf47PNH/fatimah-adetona-1768852633-3813734766570670715-4356536344.jpg",
  "https://i.ibb.co/bg7CBbXF/fatimah-adetona-1768852633-3813734766579077761-4356536344.jpg",
  "https://i.ibb.co/d40XP5jS/fatimah-adetona-1768852633-3813734766662931882-4356536344.jpg",
  "https://i.ibb.co/m5wDPXHZ/fatimah-adetona-1768852633-3813734766662939505-4356536344.jpg",
  "https://i.ibb.co/C5mtT5ZW/larami-lifestyle-1771513283-3836052916381867416-61307227951.jpg",
  "https://i.ibb.co/7wYBmVS/larami-lifestyle-1771513283-3836052878742160201-61307227951.jpg",
  "https://i.ibb.co/BKytxg9g/larami-lifestyle-1772803497-3846876886333057883-61307227951.jpg",
  "https://i.ibb.co/4RVWh152/larami-lifestyle-1772803497-3846876883631899051-61307227951.jpg",
  "https://i.ibb.co/0pr6Zsys/larami-lifestyle-1773059103-3849019343166377628-61307227951.webp",
  "https://i.ibb.co/3mghMGPr/larami-lifestyle-1773059103-3849017842821931219-61307227951.webp",
  "https://i.ibb.co/V5vWpFx/larami-lifestyle-1773059103-3849017748492057999-61307227951.webp",
  "https://i.ibb.co/GvsXkKpN/larami-lifestyle-1773313318-3851151782357653507-61307227951.jpg",
  "https://i.ibb.co/mCsP7Z8x/larami-lifestyle-1773313318-3851151780109538616-61307227951.jpg",
  "https://i.ibb.co/N29VdJsN/larami-lifestyle-1774871507-3864223779320904736-61307227951.jpg",
  "https://i.ibb.co/rGdGH13r/larami-lifestyle-1774872671-3864233683515534847-61307227951.jpg",
  "https://i.ibb.co/DDw3rQT2/larami-lifestyle-1774873063-3864235400445453999-61307227951.jpg",
  "https://i.ibb.co/nqs0WvTD/larami-lifestyle-1774873063-3864235397954017525-61307227951.jpg",
  "https://i.ibb.co/GvTxF1zv/larami-lifestyle-1774873063-3864235396989366016-61307227951.jpg",
  "https://i.ibb.co/nMhdfMKb/larami-lifestyle-1774873063-3864235393600341054-61307227951.jpg",
  "https://i.ibb.co/Y7Whd4NC/larami-lifestyle-1774879484-3864290188809910733-61307227951.jpg",
  "https://i.ibb.co/v4sXmTwD/larami-lifestyle-1774879484-3864290183105671098-61307227951.jpg",
  "https://i.ibb.co/nqwhnTsX/larami-lifestyle-1774879484-3864290179917943043-61307227951.jpg",
  "https://i.ibb.co/XZdLyZgk/larami-lifestyle-1774880875-3864301368140030239-61307227951.jpg",
  "https://i.ibb.co/TMbMFKDx/larami-lifestyle-1774880875-3864301368878218318-61307227951.jpg",
  "https://i.ibb.co/TMSR3p3L/larami-lifestyle-1774880875-3864301363811508531-61307227951.jpg",
  "https://i.ibb.co/wZsSb2xD/larami-lifestyle-1774962904-3864990366122538103-61307227951.jpg",
  "https://i.ibb.co/jv6kp14k/larami-lifestyle-1774962904-3864990365594028706-61307227951.jpg",
  "https://i.ibb.co/JWm5vGBK/larami-lifestyle-1774969746-3865047591578925267-61307227951.jpg",
  "https://i.ibb.co/N2cpqgFf/larami-lifestyle-1774969746-3865047591285347050-61307227951.jpg",
  "https://i.ibb.co/NgwmZQx1/larami-lifestyle-1775238810-3867303632689583093-61307227951.jpg",
  "https://i.ibb.co/ynxT5JNB/larami-lifestyle-1775238810-3867303620995881173-61307227951.jpg",
  "https://i.ibb.co/ksszgKjt/larami-lifestyle-1775488864-3869402819497484280-61307227951.jpg",
  "https://i.ibb.co/4Z9KpDwY/larami-lifestyle-1775488865-3869402819312941153-61307227951.jpg",
];

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  
  // Shuffle images on mount
  const shuffledImages = useMemo(() => {
    return [...ALL_IMAGES].sort(() => Math.random() - 0.5);
  }, []);

  const row1 = shuffledImages.slice(0, Math.ceil(shuffledImages.length / 2));
  const row2 = shuffledImages.slice(Math.ceil(shuffledImages.length / 2));

  return (
    <section id="gallery" className="py-24 bg-brand-dark overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-brand-primary text-xs font-semibold tracking-[0.4em] uppercase mb-4 block">
            Community & Creations
          </span>
          <h2 className="text-3xl md:text-5xl font-serif font-semibold text-brand-light mb-6">
            Showcasing Our Creatives
          </h2>
          <p className="text-brand-light/60 text-sm md:text-lg max-w-2xl mx-auto leading-relaxed">
            A glimpse into the stories told and content created within our elevated spaces.
          </p>
        </motion.div>
      </div>

      {/* Animated Marquee */}
      <div className="flex flex-col space-y-8">
        <div className="flex overflow-hidden group">
          <motion.div
            animate={{ x: [0, -3840] }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 80,
                ease: "linear",
              },
            }}
            className="flex space-x-8 whitespace-nowrap min-w-full"
          >
            {[...row1, ...row1].map((img, idx) => (
              <motion.div
                key={idx}
                whileHover={{ scale: 1.02 }}
                onClick={() => setSelectedImage(img)}
                className="relative w-64 md:w-80 aspect-[3/4] overflow-hidden rounded-sm flex-shrink-0 cursor-pointer"
              >
                <img
                  src={img}
                  alt={`Gallery ${idx}`}
                  className="w-full h-full object-cover transition-all duration-700"
                  referrerPolicy="no-referrer"
                />
              </motion.div>
            ))}
          </motion.div>
        </div>

        <div className="flex overflow-hidden group">
          <motion.div
            animate={{ x: [-3840, 0] }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 90,
                ease: "linear",
              },
            }}
            className="flex space-x-8 whitespace-nowrap min-w-full"
          >
            {[...row2, ...row2].map((img, idx) => (
              <motion.div
                key={idx}
                whileHover={{ scale: 1.02 }}
                onClick={() => setSelectedImage(img)}
                className="relative w-64 md:w-80 aspect-[3/4] overflow-hidden rounded-sm flex-shrink-0 cursor-pointer"
              >
                <img
                  src={img}
                  alt={`Gallery Reverse ${idx}`}
                  className="w-full h-full object-cover transition-all duration-700"
                  referrerPolicy="no-referrer"
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-brand-dark/95 p-4 md:p-10"
            onClick={() => setSelectedImage(null)}
          >
            <motion.button
              className="absolute top-6 right-6 text-brand-light/60 hover:text-brand-light transition-colors"
              onClick={() => setSelectedImage(null)}
            >
              <X size={32} />
            </motion.button>
            
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative max-w-5xl w-full max-h-full flex items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={selectedImage}
                alt="Selected Gallery Image"
                className="max-w-full max-h-[85vh] object-contain rounded-sm shadow-2xl"
                referrerPolicy="no-referrer"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
