'use client'

import { motion } from 'framer-motion'
import Balancer from 'react-wrap-balancer'

import { SparkleIcon, UserSecurityIcon } from '~/assets'
import { SocialLink } from '~/components/links/SocialLink'

function Developer() {
  return (
    <span className="group">
      努力成为
      <span className="font-mono">&lt;</span>开发者
      <span className="font-mono">/&gt;</span>
      <span className="invisible inline-flex text-zinc-300 before:content-['|'] group-hover:visible group-hover:animate-typing dark:text-zinc-500" />
    </span>
  )
}

function Founder() {
  return (
    <span className="group inline-flex items-center">
      <UserSecurityIcon className="mr-1 inline-flex group-hover:fill-zinc-600/20 dark:group-hover:fill-zinc-200/20" />
      <span>学生</span>
    </span>
  )
}
function OCD() {
  return (
    <span className="group inline-flex items-center">
      <SparkleIcon className="mr-1 inline-flex transform-gpu transition-transform duration-500 group-hover:rotate-180" />
      <span>Linux爱好者</span>
    </span>
  )
}


export function Headline() {
  return (
    <div className="max-w-2xl">
      <motion.h1
        className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          type: 'spring',
          damping: 25,
          stiffness: 100,
          duration: 0.3,
        }}
      >
        <span className="block h-2" />
        <Developer />，<OCD />，<Founder />
      </motion.h1>
      <motion.p
        className="mt-6 text-base text-zinc-600 dark:text-zinc-400"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          type: 'spring',
          damping: 30,
          stiffness: 85,
          duration: 0.3,
          delay: 0.1,
        }}
      >
        <Balancer>
          我是 MaxLen/苏婉轩。
          学生、Linux爱好者、播客听众、Bloger. 对技术尤为感兴趣，最喜欢Rust语言。
          期望成为全流程工程师。❤热爱一切美好的事物🥰愿意善待每一个人😊目标是创造只有爱的世界！
        </Balancer>
      </motion.p>
      <motion.div
        className="mt-6 flex gap-6"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          type: 'spring',
          damping: 50,
          stiffness: 90,
          duration: 0.35,
          delay: 0.25,
        }}
      >
        <SocialLink
          href="https://x.com/maxlen727"
          aria-label="我的推特"
          platform="twitter"
        />
        <SocialLink
          href="https://youtube.com/@maxlen727"
          aria-label="我的 YouTube"
          platform="youtube"
        />
        <SocialLink
          href="https://space.bilibili.com/436833082"
          aria-label="我的 Bilibili"
          platform="bilibili"
        />
        <SocialLink
          href="https://github.com/maxlen727"
          aria-label="我的 GitHub"
          platform="github"
        />
        <SocialLink
          href="https://t.me/maxlen727"
          aria-label="我的 Telegram"
          platform="telegram"
        />
        <SocialLink href="/feed.xml" platform="rss" aria-label="RSS 订阅" />
        <SocialLink
          href="mailto:maxlen@duck.com"
          aria-label="我的邮箱"
          platform="mail"
        />
      </motion.div>
    </div>
  )
}
