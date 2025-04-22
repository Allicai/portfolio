import { Container, Text, Heading } from '@chakra-ui/react'
import Layout from '../../components/layouts/article'
import { Link, Box, Center, Image } from '@chakra-ui/react'

const BlogPost = () => {
  return (
    <Layout title="Blank Pages">
      <Container maxW="container.md">
        <Heading as="h1" size="xl" mb={1} color="#00C891">
          Resumes and Resilience
        </Heading>

        <Text fontSize="lg" as="b" mb={4}>
          Starting a Career in <span style={{ color: '#00C896' }}> Tech</span>
        </Text>

        <Text fontSize="md" color="gray.400" mb={4}>
          January 13, 2025
        </Text>

        <Text fontSize="md" mb={4}>
          This blog post is a sort of one-stop shop for all the advice I have
          for students looking for internships. From how to build out a resume
          early in college to landing that first role to targeting larger
          companies, I&apos;ll be sharing my own experiences, and I as I do
          I&apos;ll share the resources I used, and the more specific advice and
          tips I have for you. That said...
        </Text>

        <Text fontSize="md" mb={4}>
          <Text as="b" display="inline" color="red.300">
            Quick disclaimer
          </Text>
          : I am far from the first person to offer this sort of advice, and you
          should take what I have to say with a grain of salt. This is all from
          my own perspective as a student at NEU, and I can only share what
          worked for me. I know the market is competitive, and it&apos;s easy to
          feel discouraged, but I want to remind you that everyone&apos;s
          journey is different. You are <Text as="b">not</Text> alone in this
          process, you are <Text as="b">not</Text> doing anything wrong, and you{' '}
          <Text as="b">will</Text> get there. That said, if I give any advice
          you haven&apos;t heard before, I hope you give it a try. It might just
          work for you too :)
        </Text>

        <Text fontSize={'lg'} mb={4} as="b" color="#00C896">
          Starting from Scratch
        </Text>

        <Text fontSize="md" mb={4}>
          The truth is, you don&apos;t need a packed resume the moment you get
          into college, that&apos;s the point of all the events and resources
          universities provide outside of basic coursework. Grades are
          important, but a 4.0 alone won&apos;t get you a job, you have to show
          real interest in what you&apos;re learning and apply it. Projects,
          hackathons, clubs — when you don&apos;t have experience yet, these are
          the things that show you&apos;re serious.
        </Text>

        <Text fontSize="md" mb={4}>
          Looking back, one of my biggest regrets was focusing only on grades at
          first instead of getting involved earlier. If you&apos;re just
          starting out, go to that workshop. Enter that hackathon. You
          don&apos;t need to know everything — you just need to start.
          Experience comes faster than you think once you put yourself out
          there.
        </Text>

        <Box
          as="blockquote"
          fontStyle="italic"
          fontSize="md"
          color="blue.100"
          borderLeft="4px solid"
          borderColor="blue.400"
          pl={4}
          py={2}
          mb={6}
        >
          For me, my first resume had a part-time job at Chipotle, some
          volunteer experience at a local hospital, and a few seasonal roles. I
          emphasized some of the more unique experiences on my resume, and I
          think that helped me stand out. I coached at a local tennis club, I
          ballboyed at the U.S. Open, and I wrote about some unique experiences
          I had, like attending the presidential inauguration in D.C. and
          traveling a lot as a kid. The key is to show that you&apos;re a
          well-rounded person with interests outside of school. No company is
          expecting you to have a packed resume right out of high school, but
          they want to see that you&apos;re more than just a student.
        </Box>

        <Text fontSize="lg" mb={4} as="b" color="#00C896">
          Landing the First Internship
        </Text>

        <Text fontSize="md" mb={4}>
          Getting involved on campus builds your skills, but internships are
          where you really start to bridge the gap between school and industry.
          The hard part is getting that first one when your resume still feels
          "empty." Here's the good news: externships, research assistant roles,
          even freelance projects — they all count. What matters is showing that
          you can take what you’re learning and apply it to something real.
        </Text>

        <Text fontSize="md" mb={4}>
          My advice? Don’t wait for the "perfect" role. Apply early. Apply wide.
          Apply to places you’ve never even heard of. Smaller companies,
          startups, even unpaid roles (if you're able to take them) can be
          stepping stones. That said, if getting an internship was as easy as
          applying, I wouldn&apos;t be writing this blog. So let&apos;s go back
          to that resume. Now that you have some more experience, it&apos;s time
          to make it shine. And that&apos;s where the first roadblock comes in.
        </Text>
        <Text fontSize="lg" color="red.300" display="inline">
          The ATS System
        </Text>

        <Text fontSize="md" mb={4}>
          When applying as a student from a non-target school, an ATS is your
          personal op. It&apos;s the system that filters out resumes before they
          even reach a human. And it&apos;s brutal. If your resume doesn&apos;t
          have experience to match the job description or a school they like,
          it&apos;s going straight to the trash. On top of that, you need it to
          be ATS-friendly (meaning the system can easily read it to get that
          info in the first place). That means no fancy formatting, no images,
          and no unnecessary sections. Just a clean, simple layout with the
          right keywords. I spent hours on my resume and have nearly 20
          versions, so let me save you some time.
        </Text>

        <Text fontSize="md" mb={4}>
          First, if you have a resume that&apos;s already working for you, stick
          with it. If you&apos;re starting from scratch, I recommend using
          Overleaf. You&apos;ll hear a lot of people say Microsoft Word or
          Google Docs do the job, but LaTeX is the way 🙏. You can find plenty
          of templates online, but I recommend one called{' '}
          <Link
            href={
              'https://www.overleaf.com/latex/templates/jakes-resume/syzfjbzwjncs'
            }
            target="blank"
            color="blue.300"
          >
            Jake&apos;s Resume
          </Link>{' '}
          . Simply download the template, fill in your info, and you&apos;ll
          already have a solid base. It&apos;s simple, clean, and ATS-friendly —
          I use it to this day. From there, you can focus on wording, layout,
          and making it your own. I recommend using{' '}
          <Link
            href="https://www.techinterviewhandbook.org/resume/"
            target="blank"
            color="blue.300"
          >
            Tech Interview Handbook&apos;s Resume Guide
          </Link>{' '}
          for general do&apos;s and don&apos;ts as well as websites like{' '}
          <Link
            href="https://resumes.fyi/explore"
            target="blank"
            color="blue.300"
          >
            resumes.fyi
          </Link>{' '}
          for inspiration on wording (though you may also notice the template
          many of the resumes on there have in common).
        </Text>

        <Text fontSize="md" mb={4}>
          Now that you have some club experience and projects to show for
          yourself along with a resume to deliver them, it&apos;s time to start
          applying. The first role is always the hardest, but once you get it,
          the rest will come easier.
        </Text>

        <Text fontSize="md" mb={4}>
          Again, don&apos;t wait for the perfect role. When you&apos;re starting
          out, it&apos;s all about getting your foot in the door. And remember,
          it&apos;s not just about the big names. Smaller companies give you
          more responsibility and a chance to learn faster. They&apos;re often
          more flexible with requirements too. On top of that, with the current
          AI race, startups like Mercor or Glean and countless others present
          incredible opportunities. That said, it&apos;s still a numbers game,
          just like applying to college. Keep improving your resume, keep
          applying, and keep your head up. It&apos;s a process, and{' '}
          <Text color="green.300" display="inline">
            you&apos;ll get there
          </Text>
          .
        </Text>

        <Text fontSize="lg" mb={4} as="b" color="#00C896">
          Breaking into Big Tech
        </Text>

        <Center my={6}>
          <Image
            src="/images/works/vin_cook.png"
            alt="banner"
            boxSize="200px"
          />
        </Center>
      </Container>
    </Layout>
  )
}

export default BlogPost
