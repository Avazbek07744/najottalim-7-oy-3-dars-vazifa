import React from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component'

const About = () => {
    return (
        <div>
            <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora suscipit ipsa excepturi nesciunt dolorum ea itaque. Nostrum architecto debitis quisquam odit, cupiditate a aliquid laudantium consequatur adipisci delectus, dolorum, error illo? Minus, nihil et, sed pariatur inventore nisi suscipit blanditiis enim fuga quasi odio ratione voluptas illum ad doloremque libero ducimus animi. Sed soluta hic facere mollitia commodi dolore optio deleniti. Delectus ut perspiciatis ipsam optio ab rem nostrum expedita numquam ex enim recusandae atque et eos maiores deleniti, incidunt sit minima commodi libero animi eum est? Dolores, minus perferendis. Mollitia sunt debitis, ipsam error quas sit laborum atque illum quo blanditiis! Voluptatem praesentium, recusandae quaerat beatae rerum nam optio fugit enim iure perferendis sequi, temporibus hic ipsa soluta. Impedit consectetur voluptates facilis similique pariatur? Ipsum velit ipsam aliquid repellendus, non cum labore magni, at cupiditate ex voluptatum sapiente quaerat reprehenderit alias sint libero error. Recusandae quo ut esse unde assumenda, maxime quisquam dolore maiores praesentium eveniet ab itaque quod quos, vero eum nulla voluptates impedit perferendis distinctio illum doloribus minima molestias veritatis velit. Labore doloremque aperiam accusamus sunt ipsa animi exercitationem neque dolorem. Similique sapiente aliquam veritatis assumenda deserunt natus, non quasi hic dignissimos neque. Minima sit maxime error voluptatum corrupti eum nesciunt reprehenderit optio excepturi minus officia, quaerat doloremque magnam, sapiente temporibus cupiditate non consequuntur modi cumque at in soluta quas placeat quod. Dolore, laboriosam natus nobis cum eius similique. Impedit, repudiandae aliquid autem explicabo numquam eveniet pariatur deleniti accusamus quaerat quibusdam vitae rem doloribus ad quo, ducimus nisi, voluptatum nulla? Voluptatibus dolores molestiae cupiditate mollitia quisquam accusamus, reprehenderit tempora porro sint nisi adipisci veniam illum temporibus vel ipsam, eius amet sapiente minima libero vitae consequuntur ad ab modi provident? Quo sit, dignissimos magnam reiciendis impedit possimus aspernatur, voluptatem dolor placeat rerum architecto eveniet asperiores a atque libero mollitia quod nulla quas. Placeat libero, voluptatibus itaque nobis dignissimos impedit temporibus expedita explicabo illo cumque sed ducimus. Aliquam hic deleniti, explicabo placeat molestiae ratione odio vero fuga eius voluptatum error corrupti excepturi nobis numquam. Voluptatibus cupiditate non totam, eum impedit incidunt dicta, modi beatae aperiam itaque harum cum consectetur maxime fuga, placeat exercitationem optio! Nesciunt pariatur ducimus magnam, quam impedit in, vel obcaecati non inventore ab quia, illo cumque! Commodi, officiis? Necessitatibus ad eligendi voluptatem, mollitia sunt quasi in itaque voluptatum blanditiis animi. Ea dolorum atque amet sint corrupti minima rem iusto numquam dolore ipsa ut sequi, neque quidem?
            </p>
            <LazyLoadImage
                alt='Simple image'
                height={400}
                src='https://picsum.photos/seed/picsum/200/300'
                width={300}
                className='object-cover'
            />
        </div>
    )
}

export default React.memo(About)
