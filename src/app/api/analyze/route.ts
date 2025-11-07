import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { resumeText, jobDescription, candidateName, jobTitle } = body;

    if (!resumeText || !jobDescription) {
      return NextResponse.json({ 
        error: 'Resume text and job description are required' 
      }, { status: 400 });
    }

    await new Promise(resolve => setTimeout(resolve, 1500));

    const resumeSkills = extractSkills(resumeText);
    const jobSkills = extractSkills(jobDescription);
    
    const matchingSkills = resumeSkills.filter(skill => 
      jobSkills.some(jobSkill => 
        jobSkill.toLowerCase().includes(skill.toLowerCase())
      )
    );
    
    const skillsMatch = jobSkills.length > 0 
      ? Math.round((matchingSkills.length / jobSkills.length) * 100)
      : 75;

    const experienceMatch = 85;
    const educationMatch = 80;
    
    const overallScore = Math.round(
      (skillsMatch * 0.4) + 
      (experienceMatch * 0.35) + 
      (educationMatch * 0.25)
    );

    const analysis = {
      overallScore,
      skillsMatch,
      experienceMatch, 
      educationMatch,
      skillsFound: matchingSkills,
      skillsGaps: jobSkills.filter(skill => !matchingSkills.includes(skill)),
      strengths: ['Strong technical skills', 'Good experience level'],
      improvements: ['Could benefit from cloud experience'],
      aiSummary: `Good candidate with ${matchingSkills.length} matching skills. Overall score: ${overallScore}%`,
      recommendation: overallScore >= 85 ? 'excellent' : 
                    overallScore >= 70 ? 'good' : 
                    overallScore >= 50 ? 'moderate' : 'poor'
    };

    return NextResponse.json({
      success: true,
      candidateName: candidateName || 'Unknown Candidate',
      jobTitle: jobTitle || 'Unknown Position', 
      analysis,
      processedAt: new Date().toISOString(),
      processingTime: 1.5
    });

  } catch (error) {
    console.error('Analysis error:', error);
    return NextResponse.json({ 
      error: 'Failed to analyze resume' 
    }, { status: 500 });
  }
}

function extractSkills(text: string): string[] {
  const skills = ['JavaScript', 'TypeScript', 'React', 'Node.js', 'Python', 'Java', 'AWS', 'Docker'];
  return skills.filter(skill => text.toLowerCase().includes(skill.toLowerCase()));
}