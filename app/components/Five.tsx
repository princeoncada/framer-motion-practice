"use client";

import { useScroll, motion, useSpring, useTransform } from "framer-motion";

// Scroll Animations
export default function Five() {
    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress);
    const background = useTransform(
        scrollYProgress,
        [0, 1],
        ["#db3c30", "#3224ff"]
    );

    return (
        <div>
            <motion.div
                style={{
                    scaleX: scaleX,
                    backgroundColor: background
                }}
                className=" origin-left sticky top-0 w-full h-5"
            ></motion.div>
            <div
                className="flex flex-col gap-10 text-xl max-w-[700px] p-5"
                style={{
                    width: "100%",
                }}
            >
                <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Aperiam, qui incidunt nostrum doloremque dignissimos ratione
                    quasi. Ipsum temporibus, iste vel fuga molestiae ducimus?
                    Dicta velit porro esse omnis adipisci quibusdam consequatur
                    atque ipsa, totam sint minus laudantium earum maiores
                    accusantium eaque quos harum corrupti fuga. Quas id adipisci
                    corporis ex exercitationem optio. Magnam, est ex. Quam
                    aliquam magnam facilis corporis possimus hic vel fugiat in
                    vitae repudiandae, at mollitia iure nemo ab officiis
                    corrupti! Nostrum quas saepe ad harum eos laborum vero
                    perferendis alias reprehenderit! Fugit nam numquam est porro
                    aliquam, a voluptas sed magni enim, iste praesentium esse
                    natus.
                </p>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Nihil nostrum officia sequi necessitatibus dolores repellat
                    cupiditate quas itaque, adipisci accusantium qui voluptatem
                    esse, illum impedit. Aut aliquam libero, optio fugiat
                    consequatur error doloremque ad voluptatum sequi labore.
                    Culpa minima rerum unde dolor fugit labore quae iste eos
                    earum inventore dolore, omnis, obcaecati facere blanditiis
                    temporibus suscipit corrupti laboriosam necessitatibus vero
                    et maxime itaque. Sapiente qui sunt provident libero
                    impedit, molestiae iste porro quo sequi itaque voluptatum
                    ullam totam id molestias quia quae magnam debitis facilis
                    aliquid. Vero, consequatur. Sapiente doloribus ratione
                    alias? Quasi quos ut deleniti repellendus officiis
                    recusandae nulla?
                </p>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Ratione mollitia ipsam quos quibusdam incidunt officia.
                    Maiores libero sequi totam ex officiis animi, commodi vero
                    possimus recusandae quibusdam quasi, eos quia ducimus
                    obcaecati praesentium minus qui omnis beatae. Laborum
                    accusantium sunt provident quaerat aut molestiae aperiam
                    quibusdam perspiciatis illum maiores distinctio, eum animi
                    deserunt iusto nemo vitae maxime rem aliquid. Atque iste
                    nostrum earum dolores labore. Facilis fuga quos corrupti,
                    iste consequatur numquam incidunt ipsam, facere aperiam
                    saepe quaerat quia labore impedit natus totam voluptatum rem
                    eaque repellendus porro recusandae eum amet vitae. Id ullam
                    tempore fugit pariatur similique nostrum culpa?
                </p>
                <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Aliquam libero voluptatum animi possimus fuga? Sit nulla
                    commodi perspiciatis sed dolores voluptatem, in laborum
                    aspernatur iste esse sapiente temporibus molestias totam
                    culpa veniam minus quia at eveniet consequuntur optio iure
                    mollitia harum? Dolor officiis enim quia labore odio
                    explicabo hic repellat placeat excepturi blanditiis! Iusto
                    consequuntur at numquam! Inventore sunt non enim tenetur
                    consectetur aliquid veritatis ad explicabo assumenda rem cum
                    saepe magni optio sapiente, quaerat consequatur natus sed
                    minima magnam qui libero necessitatibus aliquam omnis
                    deserunt? Minima distinctio reprehenderit pariatur maxime
                    explicabo. Officia quidem sequi accusamus soluta. Cumque,
                    itaque tenetur?
                </p>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Unde ea ipsa inventore temporibus in nobis magnam cupiditate
                    repellat assumenda nulla, officia, quod tempore porro, ullam
                    impedit voluptatibus magni dicta hic deserunt vel distinctio
                    ipsam necessitatibus earum. Ipsam impedit dolorem
                    accusantium dolorum, rem a error reprehenderit praesentium
                    sed, nesciunt magnam nostrum obcaecati mollitia natus,
                    facere sunt. Atque beatae temporibus blanditiis quo ducimus
                    quas architecto nesciunt, dolore ullam incidunt sapiente nam
                    accusamus, facilis deserunt, explicabo consequatur magnam
                    itaque alias! Nam optio aliquam sint officiis, accusamus
                    sequi deleniti porro est ab inventore autem ad? Magnam
                    adipisci laborum fugit exercitationem itaque natus hic
                    atque.
                </p>
                <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Illo quasi omnis molestiae aliquid rerum neque amet,
                    veritatis reiciendis, officiis dolores corporis dolorum
                    facere ipsum nam enim nulla consequuntur laudantium totam
                    deserunt, odio pariatur? Possimus, nostrum? Voluptas,
                    sapiente atque vitae neque consequatur odio dolor nam amet
                    doloremque eos voluptatem laborum cumque eligendi quod sit
                    reprehenderit possimus ipsum consequuntur distinctio.
                    Mollitia eveniet sit libero. Fugit tempora sapiente illo
                    quas explicabo neque eum sequi! Molestiae, officia magnam
                    veritatis quos tempora nostrum quibusdam iusto eaque. Soluta
                    minus, in corrupti aliquid aliquam velit iure delectus vel
                    maxime recusandae impedit ipsum ex ad dicta tempore
                    praesentium.
                </p>
            </div>
        </div>
    );
}
