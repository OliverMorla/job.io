import {
  Button,
  Text,
  Image,
  View,
  ScrollView,
  SafeAreaView,
  ActivityIndicator,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { Stack, Link, useRouter } from "expo-router";
import { useState } from "react";
import SearchBar from "../components/Home/search-bar";
import useFetch from "../hooks/useFetch";
import { PopularJobCard } from "../components/Jobs";

export default function Home() {
  const router = useRouter();
  // const { data, error, isLoading } = useFetch({
  //   num_pages: 1,
  //   page: 1,
  //   query: "React Developer Jobs In New York, USA",
  // });

  const data = [
    {
      employer_name: "Ampstek",
      employer_logo:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPzj3pIQym93QfceALVLstkvrkGJ1tHQGTjS9j&s=0",
      employer_website: null,
      employer_company_type: null,
      job_publisher: "LinkedIn",
      job_id: "l76IcRktHL-RaprXAAAAAA==",
      job_employment_type: "FULLTIME",
      job_title: "Python Developer",
      job_apply_link:
        "https://www.linkedin.com/jobs/view/python-developer-at-ampstek-3752867709",
      job_apply_is_direct: false,
      job_apply_quality_score: 0.6508,
      apply_options: {},
      job_description:
        "Job Title: Python Developer Locations: Fort Worth, TX-Hybrid Job Type: Full Time Job Description: Minimum 5 Years of relevant experience into Python Strong Python developer Strong communication and articulation skills Understanding requirements from business perspective instead of looking at it as a technical problem Good knowledge or experience in working with custom Python package management solutions like Nexus Strong knowledge in Python Flask and PostgreSQL database Working knowledge of AWS – especially IAM, S3, Lambda and Python Boto3 Good SDLC process – Git, testing, CI/CD etc. Knowledge on UI frameworks is a plus Knowledge of Databricks and data platforms is a plus Thanks, and Regards Snehil Mishra snehil@ ampstek.com linkedin.com/in/snehil-mishra-1104b2154 Desk-6093602673Extension-125 www.ampstek.com https://www.linkedin.com/company/ampstek/jobs/ Ampstek – Global IT Partner Registered Offices: North America and LATM: USA|Canada|Costa Rica|Mexico Europe:UK|Germany|France|Sweden|Denmark|Austria|Belgium|Netherlands|Romania|Poland|Czeh Republic|Bulgaria|Hungary|Ireland|Norway|Croatia|Slovakia|Portugal|Spain|Italy|Switzerland|Malta| Portugal APAC:Australia|NZ|Singapore|Malaysia|South Korea|Hong Kong|Taiwan|Phillipines|Vietnam|Srilanka|India MEA :South Africa|UAE|Turkey|Egypt",
      job_is_remote: false,
      job_posted_at_timestamp: 1699461786,
      job_posted_at_datetime_utc: "2023-11-08T16:43:06.000Z",
      job_city: "Fort Worth",
      job_state: "TX",
      job_country: "US",
      job_latitude: 32.75549,
      job_longitude: -97.330765,
      job_benefits: null,
      job_google_link:
        "https://www.google.com/search?gl=us&hl=en&rciv=jb&q=python+developer+in+texas,+usa&start=0&ibp=htl;jobs#fpstate=tldetail&htivrt=jobs&htiq=python+developer+in+texas,+usa&htidocid=l76IcRktHL-RaprXAAAAAA%3D%3D",
      job_offer_expiration_datetime_utc: "2023-12-08T16:43:06.000Z",
      job_offer_expiration_timestamp: 1702053786,
      job_required_experience: null,
      job_required_skills: null,
      job_required_education: null,
      job_experience_in_place_of_education: false,
      job_min_salary: null,
      job_max_salary: null,
      job_salary_currency: null,
      job_salary_period: null,
      job_highlights: null,
      job_job_title: null,
      job_posting_language: "en",
      job_onet_soc: "15113200",
      job_onet_job_zone: "4",
    },
    {
      employer_name: "Radiant Digital",
      employer_logo:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRiJvIhuXjC3SqcbEwN42BhCEDS9QO49d68Hni&s=0",
      employer_website: null,
      employer_company_type: null,
      job_publisher: "LinkedIn",
      job_id: "l76IcRktHL-RaprXAAAAAA==2",
      job_employment_type: "FULLTIME",
      job_title: "JavaSCript Developer",
      job_apply_link:
        "https://www.linkedin.com/jobs/view/python-developer-at-ampstek-3752867709",
      job_apply_is_direct: false,
      job_apply_quality_score: 0.6508,
      apply_options: {},
      job_description:
        "Job Title: Python Developer Locations: Fort Worth, TX-Hybrid Job Type: Full Time Job Description: Minimum 5 Years of relevant experience into Python Strong Python developer Strong communication and articulation skills Understanding requirements from business perspective instead of looking at it as a technical problem Good knowledge or experience in working with custom Python package management solutions like Nexus Strong knowledge in Python Flask and PostgreSQL database Working knowledge of AWS – especially IAM, S3, Lambda and Python Boto3 Good SDLC process – Git, testing, CI/CD etc. Knowledge on UI frameworks is a plus Knowledge of Databricks and data platforms is a plus Thanks, and Regards Snehil Mishra snehil@ ampstek.com linkedin.com/in/snehil-mishra-1104b2154 Desk-6093602673Extension-125 www.ampstek.com https://www.linkedin.com/company/ampstek/jobs/ Ampstek – Global IT Partner Registered Offices: North America and LATM: USA|Canada|Costa Rica|Mexico Europe:UK|Germany|France|Sweden|Denmark|Austria|Belgium|Netherlands|Romania|Poland|Czeh Republic|Bulgaria|Hungary|Ireland|Norway|Croatia|Slovakia|Portugal|Spain|Italy|Switzerland|Malta| Portugal APAC:Australia|NZ|Singapore|Malaysia|South Korea|Hong Kong|Taiwan|Phillipines|Vietnam|Srilanka|India MEA :South Africa|UAE|Turkey|Egypt",
      job_is_remote: false,
      job_posted_at_timestamp: 1699461786,
      job_posted_at_datetime_utc: "2023-11-08T16:43:06.000Z",
      job_city: "Fort Worth",
      job_state: "TX",
      job_country: "US",
      job_latitude: 32.75549,
      job_longitude: -97.330765,
      job_benefits: null,
      job_google_link:
        "https://www.google.com/search?gl=us&hl=en&rciv=jb&q=python+developer+in+texas,+usa&start=0&ibp=htl;jobs#fpstate=tldetail&htivrt=jobs&htiq=python+developer+in+texas,+usa&htidocid=l76IcRktHL-RaprXAAAAAA%3D%3D",
      job_offer_expiration_datetime_utc: "2023-12-08T16:43:06.000Z",
      job_offer_expiration_timestamp: 1702053786,
      job_required_experience: null,
      job_required_skills: null,
      job_required_education: null,
      job_experience_in_place_of_education: false,
      job_min_salary: null,
      job_max_salary: null,
      job_salary_currency: null,
      job_salary_period: null,
      job_highlights: null,
      job_job_title: null,
      job_posting_language: "en",
      job_onet_soc: "15113200",
      job_onet_job_zone: "4",
    },
    {
      employer_name: "SynergisticIT",
      employer_logo:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-UrAK1LCetSvno8PT3nMB4vJV4VdEEPN7PrgC&s=0",
      employer_website: null,
      employer_company_type: null,
      job_publisher: "LinkedIn",
      job_id: "l76IcRktHL-RaprXAAAAAA==3",
      job_employment_type: "FULLTIME",
      job_title: "React Developer",
      job_apply_link:
        "https://www.linkedin.com/jobs/view/python-developer-at-ampstek-3752867709",
      job_apply_is_direct: false,
      job_apply_quality_score: 0.6508,
      apply_options: {},
      job_description:
        "Job Title: Python Developer Locations: Fort Worth, TX-Hybrid Job Type: Full Time Job Description: Minimum 5 Years of relevant experience into Python Strong Python developer Strong communication and articulation skills Understanding requirements from business perspective instead of looking at it as a technical problem Good knowledge or experience in working with custom Python package management solutions like Nexus Strong knowledge in Python Flask and PostgreSQL database Working knowledge of AWS – especially IAM, S3, Lambda and Python Boto3 Good SDLC process – Git, testing, CI/CD etc. Knowledge on UI frameworks is a plus Knowledge of Databricks and data platforms is a plus Thanks, and Regards Snehil Mishra snehil@ ampstek.com linkedin.com/in/snehil-mishra-1104b2154 Desk-6093602673Extension-125 www.ampstek.com https://www.linkedin.com/company/ampstek/jobs/ Ampstek – Global IT Partner Registered Offices: North America and LATM: USA|Canada|Costa Rica|Mexico Europe:UK|Germany|France|Sweden|Denmark|Austria|Belgium|Netherlands|Romania|Poland|Czeh Republic|Bulgaria|Hungary|Ireland|Norway|Croatia|Slovakia|Portugal|Spain|Italy|Switzerland|Malta| Portugal APAC:Australia|NZ|Singapore|Malaysia|South Korea|Hong Kong|Taiwan|Phillipines|Vietnam|Srilanka|India MEA :South Africa|UAE|Turkey|Egypt",
      job_is_remote: false,
      job_posted_at_timestamp: 1699461786,
      job_posted_at_datetime_utc: "2023-11-08T16:43:06.000Z",
      job_city: "Fort Worth",
      job_state: "TX",
      job_country: "US",
      job_latitude: 32.75549,
      job_longitude: -97.330765,
      job_benefits: null,
      job_google_link:
        "https://www.google.com/search?gl=us&hl=en&rciv=jb&q=python+developer+in+texas,+usa&start=0&ibp=htl;jobs#fpstate=tldetail&htivrt=jobs&htiq=python+developer+in+texas,+usa&htidocid=l76IcRktHL-RaprXAAAAAA%3D%3D",
      job_offer_expiration_datetime_utc: "2023-12-08T16:43:06.000Z",
      job_offer_expiration_timestamp: 1702053786,
      job_required_experience: null,
      job_required_skills: null,
      job_required_education: null,
      job_experience_in_place_of_education: false,
      job_min_salary: null,
      job_max_salary: null,
      job_salary_currency: null,
      job_salary_period: null,
      job_highlights: null,
      job_job_title: null,
      job_posting_language: "en",
      job_onet_soc: "15113200",
      job_onet_job_zone: "4",
    },
    {
      employer_name: "Radiant Digital",
      employer_logo:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRiJvIhuXjC3SqcbEwN42BhCEDS9QO49d68Hni&s=0",
      employer_website: null,
      employer_company_type: null,
      job_publisher: "LinkedIn",
      job_id: "l76IcRktHL-RaprXAAAAAA==4",
      job_employment_type: "FULLTIME",
      job_title: "JavaSCript Developer",
      job_apply_link:
        "https://www.linkedin.com/jobs/view/python-developer-at-ampstek-3752867709",
      job_apply_is_direct: false,
      job_apply_quality_score: 0.6508,
      apply_options: {},
      job_description:
        "Job Title: Python Developer Locations: Fort Worth, TX-Hybrid Job Type: Full Time Job Description: Minimum 5 Years of relevant experience into Python Strong Python developer Strong communication and articulation skills Understanding requirements from business perspective instead of looking at it as a technical problem Good knowledge or experience in working with custom Python package management solutions like Nexus Strong knowledge in Python Flask and PostgreSQL database Working knowledge of AWS – especially IAM, S3, Lambda and Python Boto3 Good SDLC process – Git, testing, CI/CD etc. Knowledge on UI frameworks is a plus Knowledge of Databricks and data platforms is a plus Thanks, and Regards Snehil Mishra snehil@ ampstek.com linkedin.com/in/snehil-mishra-1104b2154 Desk-6093602673Extension-125 www.ampstek.com https://www.linkedin.com/company/ampstek/jobs/ Ampstek – Global IT Partner Registered Offices: North America and LATM: USA|Canada|Costa Rica|Mexico Europe:UK|Germany|France|Sweden|Denmark|Austria|Belgium|Netherlands|Romania|Poland|Czeh Republic|Bulgaria|Hungary|Ireland|Norway|Croatia|Slovakia|Portugal|Spain|Italy|Switzerland|Malta| Portugal APAC:Australia|NZ|Singapore|Malaysia|South Korea|Hong Kong|Taiwan|Phillipines|Vietnam|Srilanka|India MEA :South Africa|UAE|Turkey|Egypt",
      job_is_remote: false,
      job_posted_at_timestamp: 1699461786,
      job_posted_at_datetime_utc: "2023-11-08T16:43:06.000Z",
      job_city: "Fort Worth",
      job_state: "TX",
      job_country: "US",
      job_latitude: 32.75549,
      job_longitude: -97.330765,
      job_benefits: null,
      job_google_link:
        "https://www.google.com/search?gl=us&hl=en&rciv=jb&q=python+developer+in+texas,+usa&start=0&ibp=htl;jobs#fpstate=tldetail&htivrt=jobs&htiq=python+developer+in+texas,+usa&htidocid=l76IcRktHL-RaprXAAAAAA%3D%3D",
      job_offer_expiration_datetime_utc: "2023-12-08T16:43:06.000Z",
      job_offer_expiration_timestamp: 1702053786,
      job_required_experience: null,
      job_required_skills: null,
      job_required_education: null,
      job_experience_in_place_of_education: false,
      job_min_salary: null,
      job_max_salary: null,
      job_salary_currency: null,
      job_salary_period: null,
      job_highlights: null,
      job_job_title: null,
      job_posting_language: "en",
      job_onet_soc: "15113200",
      job_onet_job_zone: "4",
    },
    {
      employer_name: "SynergisticIT",
      employer_logo:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-UrAK1LCetSvno8PT3nMB4vJV4VdEEPN7PrgC&s=0",
      employer_website: null,
      employer_company_type: null,
      job_publisher: "LinkedIn",
      job_id: "l76IcRktHL-RaprXAAAAAA==5",
      job_employment_type: "FULLTIME",
      job_title: "React Developer",
      job_apply_link:
        "https://www.linkedin.com/jobs/view/python-developer-at-ampstek-3752867709",
      job_apply_is_direct: false,
      job_apply_quality_score: 0.6508,
      apply_options: {},
      job_description:
        "Job Title: Python Developer Locations: Fort Worth, TX-Hybrid Job Type: Full Time Job Description: Minimum 5 Years of relevant experience into Python Strong Python developer Strong communication and articulation skills Understanding requirements from business perspective instead of looking at it as a technical problem Good knowledge or experience in working with custom Python package management solutions like Nexus Strong knowledge in Python Flask and PostgreSQL database Working knowledge of AWS – especially IAM, S3, Lambda and Python Boto3 Good SDLC process – Git, testing, CI/CD etc. Knowledge on UI frameworks is a plus Knowledge of Databricks and data platforms is a plus Thanks, and Regards Snehil Mishra snehil@ ampstek.com linkedin.com/in/snehil-mishra-1104b2154 Desk-6093602673Extension-125 www.ampstek.com https://www.linkedin.com/company/ampstek/jobs/ Ampstek – Global IT Partner Registered Offices: North America and LATM: USA|Canada|Costa Rica|Mexico Europe:UK|Germany|France|Sweden|Denmark|Austria|Belgium|Netherlands|Romania|Poland|Czeh Republic|Bulgaria|Hungary|Ireland|Norway|Croatia|Slovakia|Portugal|Spain|Italy|Switzerland|Malta| Portugal APAC:Australia|NZ|Singapore|Malaysia|South Korea|Hong Kong|Taiwan|Phillipines|Vietnam|Srilanka|India MEA :South Africa|UAE|Turkey|Egypt",
      job_is_remote: false,
      job_posted_at_timestamp: 1699461786,
      job_posted_at_datetime_utc: "2023-11-08T16:43:06.000Z",
      job_city: "Fort Worth",
      job_state: "TX",
      job_country: "US",
      job_latitude: 32.75549,
      job_longitude: -97.330765,
      job_benefits: null,
      job_google_link:
        "https://www.google.com/search?gl=us&hl=en&rciv=jb&q=python+developer+in+texas,+usa&start=0&ibp=htl;jobs#fpstate=tldetail&htivrt=jobs&htiq=python+developer+in+texas,+usa&htidocid=l76IcRktHL-RaprXAAAAAA%3D%3D",
      job_offer_expiration_datetime_utc: "2023-12-08T16:43:06.000Z",
      job_offer_expiration_timestamp: 1702053786,
      job_required_experience: null,
      job_required_skills: null,
      job_required_education: null,
      job_experience_in_place_of_education: false,
      job_min_salary: null,
      job_max_salary: null,
      job_salary_currency: null,
      job_salary_period: null,
      job_highlights: null,
      job_job_title: null,
      job_posting_language: "en",
      job_onet_soc: "15113200",
      job_onet_job_zone: "4",
    },
  ];
  const error = false;
  const isLoading = false;

  return (
    <ScrollView>
      <View>
        <SearchBar />
      </View>
      <View>
        <Text className="font-bold text-2xl pt-6">Popular jobs</Text>
        <View>
          {isLoading ? (
            <ActivityIndicator size={"large"} color={"black"} />
          ) : error ? (
            <Text>{error}</Text>
          ) : (
            <FlatList
              data={data}
              renderItem={({ item }) => <PopularJobCard job={item as any} />}
              contentContainerStyle={{ columnGap: 1 }}
              keyExtractor={(item) => item.job_id.toString()}
              horizontal
            />
          )}
        </View>
        <Text className="pt-2">Jobs based on your activity on job.io</Text>
      </View>
      <View>
        <Text className="font-bold text-2xl pt-6">Recommended jobs</Text>
        <Text className="pt-2">
          Based on your activity on job.io, we've curated a list of job
          recommendations just for you.
        </Text>
        <View className="mt-4">
          {isLoading ? (
            <ActivityIndicator size={"large"} color={"black"} />
          ) : error ? (
            <Text> An Error has Occured </Text>
          ) : (
            <FlatList
              data={data}
              renderItem={({ item }) => <PopularJobCard job={item as any} />}
              contentContainerStyle={{ columnGap: 1 }}
              keyExtractor={(item) => item.job_id.toString()}
              horizontal
            />
          )}
        </View>
      </View>
      <View>
        <Text className="font-bold text-2xl pt-6">All Jobs</Text>
        {isLoading ? (
          <ActivityIndicator size={"large"} color={"black"} />
        ) : error ? (
          <Text>{error}</Text>
        ) : (
          data.map((job) => (
            <TouchableOpacity
              key={job.job_id}
              onPress={() => router.push(`/job-details/${job.job_id}`)}
            >
              <PopularJobCard job={job as any} />
            </TouchableOpacity>
          ))
        )}
      </View>
    </ScrollView>
  );
}
