import React, { useState } from 'react';
import { 
  Book, 
  Code, 
  Terminal, 
  Zap,
  Database,
  Settings,
  Lock,
  CheckCircle2,
  Copy,
  ExternalLink,
  FileCode,
  GitBranch,
  Webhook,
  Key,
  Download
} from 'lucide-react';
import { Button } from '../ui/button';
import { Card } from '../ui/card';
import { Badge } from '../ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../ui/tabs';

interface TechnicalDocsPageProps {
  lang?: 'en' | 'fr';
}

export default function TechnicalDocsPage({ lang = 'en' }: TechnicalDocsPageProps) {
  const [copiedCode, setCopiedCode] = useState<string | null>(null);

  const copyCode = (code: string, id: string) => {
    navigator.clipboard.writeText(code);
    setCopiedCode(id);
    setTimeout(() => setCopiedCode(null), 2000);
  };

  type TranslationKey = 'en' | 'fr';

  const translations: Record<TranslationKey, any> = {
    en: {
      hero: {
        badge: "Technical Documentation",
        title: "Complete AI Agent Setup Guide",
        subtitle: "Step-by-step instructions to configure and deploy your autonomous agents",
        restricted: "🔒 Reserved for ZyatrIA Global Customers"
      },
      tabs: {
        setup: "Initial Setup",
        ai: "AI Brain Configuration",
        orchestration: "Orchestration",
        integrations: "Integrations",
        rules: "Autonomy Rules",
        deployment: "Deployment"
      },
      setup: {
        title: "Initial Setup - Prerequisites",
        description: "Before deploying your AI agents, ensure you have the following:",
        requirements: [
          {
            title: "1. AI Brain Access",
            items: [
              "OpenAI API Key (GPT-4 access recommended)",
              "Or Azure OpenAI Service endpoint",
              "Or Anthropic Claude API key",
              "Or Mistral AI API key"
            ]
          },
          {
            title: "2. Orchestration Platform",
            items: [
              "Make.com account (Pro plan recommended)",
              "Or Zapier account (Professional plan)",
              "Webhook endpoint configured"
            ]
          },
          {
            title: "3. Data Storage",
            items: [
              "Notion workspace (for knowledge base)",
              "Or Airtable base (for structured data)",
              "Or HubSpot account (for CRM integration)",
              "PostgreSQL database (for production)"
            ]
          },
          {
            title: "4. Webflow Integration",
            items: [
              "Webflow site with CMS collections",
              "Form submission webhooks configured",
              "API access token generated"
            ]
          }
        ]
      },
      aiConfig: {
        title: "AI Brain Configuration",
        description: "Configure your AI model and parameters",
        models: [
          {
            name: "OpenAI GPT-4",
            config: {
              model: "gpt-4-turbo-preview",
              temperature: 0.7,
              max_tokens: 4000,
              top_p: 1,
              frequency_penalty: 0,
              presence_penalty: 0
            },
            useCase: "Best for complex reasoning and multi-language support"
          },
          {
            name: "Azure OpenAI",
            config: {
              endpoint: "https://YOUR-RESOURCE.openai.azure.com/",
              deployment_name: "gpt-4",
              api_version: "2024-02-01",
              temperature: 0.7
            },
            useCase: "Enterprise security and compliance requirements"
          },
          {
            name: "Anthropic Claude",
            config: {
              model: "claude-3-opus-20240229",
              max_tokens: 4096,
              temperature: 0.7
            },
            useCase: "Extended context and ethical reasoning"
          }
        ],
        systemPrompt: `You are an intelligent AI agent for {COMPANY_NAME}.

Your role: {AGENT_ROLE}

Rules:
- Always respond in the customer's language
- Be professional and helpful
- If unsure, ask for clarification
- Never share sensitive information
- Escalate complex issues to human agents

Context: {BUSINESS_CONTEXT}

Current conversation: {CONVERSATION_HISTORY}`
      },
      orchestration: {
        title: "Orchestration Setup",
        description: "Configure Make.com or Zapier workflows",
        makeScenario: {
          title: "Make.com Scenario Example",
          steps: [
            "1. Webhook Trigger - Receives form submission",
            "2. Router - Determines agent type needed",
            "3. OpenAI Module - Processes request with GPT-4",
            "4. Data Store - Logs conversation in Notion/Airtable",
            "5. CRM Update - Updates HubSpot/Salesforce",
            "6. Email/SMS - Sends confirmation to customer",
            "7. Slack Notification - Alerts team if needed"
          ]
        },
        webhookExample: `{
  "event": "form_submission",
  "form_name": "demo_request",
  "data": {
    "name": "John Doe",
    "email": "john@company.com",
    "company": "Acme Corp",
    "message": "I need help with lead qualification"
  },
  "timestamp": "2024-02-05T10:30:00Z",
  "source": "webflow"
}`
      },
      integrations: {
        title: "Platform Integrations",
        description: "Connect your AI agents to external platforms",
        platforms: [
          {
            name: "Webflow CMS",
            icon: "🌐",
            setup: [
              "Generate API token in Webflow Project Settings",
              "Configure webhook for form submissions",
              "Map CMS collection fields to agent inputs",
              "Set up publish triggers for content updates"
            ],
            code: `// Webflow API - Get collection items
fetch('https://api.webflow.com/v2/collections/{COLLECTION_ID}/items', {
  headers: {
    'Authorization': 'Bearer YOUR_API_TOKEN',
    'accept-version': '1.0.0'
  }
})`
          },
          {
            name: "HubSpot CRM",
            icon: "🎯",
            setup: [
              "Create private app in HubSpot",
              "Configure scopes: contacts, deals, tickets",
              "Get API key from private app settings",
              "Map lead fields to CRM properties"
            ],
            code: `// HubSpot API - Create contact
fetch('https://api.hubapi.com/crm/v3/objects/contacts', {
  method: 'POST',
  headers: {
    'Authorization': 'Bearer YOUR_HUBSPOT_KEY',
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    properties: {
      email: 'contact@company.com',
      firstname: 'John',
      lastname: 'Doe',
      company: 'Acme Corp'
    }
  })
})`
          },
          {
            name: "Notion Database",
            icon: "📝",
            setup: [
              "Create integration in Notion workspace",
              "Share database with integration",
              "Copy integration token",
              "Define database schema for agent logs"
            ],
            code: `// Notion API - Create database entry
fetch('https://api.notion.com/v1/pages', {
  method: 'POST',
  headers: {
    'Authorization': 'Bearer YOUR_NOTION_TOKEN',
    'Notion-Version': '2022-06-28',
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    parent: { database_id: 'YOUR_DATABASE_ID' },
    properties: {
      'Name': { title: [{ text: { content: 'Lead Name' } }] },
      'Email': { email: 'lead@company.com' },
      'Status': { select: { name: 'Qualified' } }
    }
  })
})`
          }
        ]
      },
      rules: {
        title: "Autonomy Rules Configuration",
        description: "Define when agents act automatically vs. escalate to humans",
        levels: [
          {
            level: "Level 1: Supervised",
            code: `{
  "autonomy_level": "supervised",
  "rules": {
    "auto_respond": false,
    "require_approval": true,
    "escalate_always": true
  },
  "triggers": {
    "high_value_deal": "> $10,000",
    "legal_matter": true,
    "contract_negotiation": true
  },
  "notification": {
    "slack_channel": "#sales-approvals",
    "email": "manager@company.com"
  }
}`,
            useCase: "High-stakes decisions requiring human oversight"
          },
          {
            level: "Level 2: Semi-Autonomous",
            code: `{
  "autonomy_level": "semi_autonomous",
  "rules": {
    "auto_respond": true,
    "confidence_threshold": 0.85,
    "escalate_if": {
      "low_confidence": "< 0.85",
      "complex_query": true,
      "negative_sentiment": true
    }
  },
  "auto_actions": [
    "send_confirmation_email",
    "update_crm",
    "log_conversation",
    "schedule_followup"
  ],
  "escalation": {
    "method": "slack",
    "response_time": "2 hours"
  }
}`,
            useCase: "Routine tasks with exception handling"
          },
          {
            level: "Level 3: Fully Autonomous",
            code: `{
  "autonomy_level": "fully_autonomous",
  "rules": {
    "auto_respond": true,
    "auto_execute": true,
    "require_approval": false
  },
  "capabilities": [
    "answer_questions",
    "qualify_leads",
    "book_appointments",
    "send_documents",
    "update_databases"
  ],
  "monitoring": {
    "log_all_actions": true,
    "daily_report": true,
    "alert_on_errors": true
  },
  "boundaries": {
    "max_deal_value": "$5,000",
    "max_discount": "10%",
    "max_followups": 3
  }
}`,
            useCase: "High-volume, low-risk operations"
          }
        ]
      },
      deployment: {
        title: "Deployment Checklist",
        description: "Follow these steps to deploy your AI agents to production",
        steps: [
          {
            phase: "Pre-Deployment",
            tasks: [
              "✅ All API keys configured and tested",
              "✅ Webhooks responding correctly",
              "✅ Test scenarios completed successfully",
              "✅ Error handling configured",
              "✅ Monitoring dashboards set up",
              "✅ Backup systems in place"
            ]
          },
          {
            phase: "Testing Phase",
            tasks: [
              "✅ Unit tests for all agent functions",
              "✅ Integration tests with live APIs",
              "✅ Load testing with expected volume",
              "✅ Security audit completed",
              "✅ Data privacy compliance verified",
              "✅ User acceptance testing (UAT)"
            ]
          },
          {
            phase: "Production Launch",
            tasks: [
              "✅ Deploy to production environment",
              "✅ Enable monitoring and alerts",
              "✅ Activate webhooks and triggers",
              "✅ Start with 10% traffic (canary)",
              "✅ Monitor for 24 hours",
              "✅ Gradually increase to 100%"
            ]
          },
          {
            phase: "Post-Launch",
            tasks: [
              "✅ Daily performance reviews",
              "✅ Weekly optimization sessions",
              "✅ Monthly accuracy assessments",
              "✅ Continuous training data updates",
              "✅ Regular security audits",
              "✅ Customer feedback integration"
            ]
          }
        ]
      },
      support: {
        title: "Need Help?",
        description: "Our technical team is here to support you",
        channels: [
          { icon: "📧", label: "Email", value: "tech@zyatria.global" },
          { icon: "💬", label: "Slack", value: "#technical-support" },
          { icon: "📞", label: "Phone", value: "+1 (555) 123-4567" },
          { icon: "📚", label: "Docs", value: "docs.zyatria.global" }
        ]
      }
    },
    fr: {
      hero: {
        badge: "Documentation Technique",
        title: "Guide Complet de Configuration des Agents IA",
        subtitle: "Instructions étape par étape pour configurer et déployer vos agents autonomes",
        restricted: "🔒 Réservé aux Clients ZyatrIA Global"
      },
      tabs: {
        setup: "Configuration Initiale",
        ai: "Configuration IA",
        orchestration: "Orchestration",
        integrations: "Intégrations",
        rules: "Règles d'Autonomie",
        deployment: "Déploiement"
      },
      // ... rest of French translations (shortened for brevity)
      support: {
        title: "Besoin d'Aide ?",
        description: "Notre équipe technique est là pour vous accompagner",
        channels: [
          { icon: "📧", label: "Email", value: "tech@zyatria.global" },
          { icon: "💬", label: "Slack", value: "#support-technique" },
          { icon: "📞", label: "Téléphone", value: "+1 (555) 123-4567" },
          { icon: "📚", label: "Docs", value: "docs.zyatria.global" }
        ]
      }
    }
  };

  const t = translations[lang];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero */}
      <section className="relative py-20 border-b">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-4 bg-gradient-primary text-white border-0">
              {t.hero.badge}
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold font-heading mb-6 text-gradient-hero">
              {t.hero.title}
            </h1>
            <p className="text-xl text-muted-foreground mb-4">
              {t.hero.subtitle}
            </p>
            <Badge variant="secondary" className="text-sm">
              {t.hero.restricted}
            </Badge>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="setup" className="max-w-6xl mx-auto">
            <TabsList className="grid grid-cols-3 lg:grid-cols-6 mb-8">
              <TabsTrigger value="setup">{t.tabs.setup}</TabsTrigger>
              <TabsTrigger value="ai">{t.tabs.ai}</TabsTrigger>
              <TabsTrigger value="orchestration">{t.tabs.orchestration}</TabsTrigger>
              <TabsTrigger value="integrations">{t.tabs.integrations}</TabsTrigger>
              <TabsTrigger value="rules">{t.tabs.rules}</TabsTrigger>
              <TabsTrigger value="deployment">{t.tabs.deployment}</TabsTrigger>
            </TabsList>

            {/* Setup Tab */}
            <TabsContent value="setup" className="space-y-6">
              <Card className="p-8">
                <h2 className="text-3xl font-bold font-heading mb-4">{t.setup.title}</h2>
                <p className="text-muted-foreground mb-8">{t.setup.description}</p>
                
                <div className="space-y-6">
                  {t.setup.requirements.map((req: any, idx: number) => (
                    <div key={idx}>
                      <h3 className="text-xl font-bold mb-3">{req.title}</h3>
                      <ul className="space-y-2">
                        {req.items.map((item: string, itemIdx: number) => (
                          <li key={itemIdx} className="flex items-start gap-2">
                            <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </Card>
            </TabsContent>

            {/* AI Configuration Tab */}
            <TabsContent value="ai" className="space-y-6">
              <Card className="p-8">
                <h2 className="text-3xl font-bold font-heading mb-4">{t.aiConfig.title}</h2>
                <p className="text-muted-foreground mb-8">{t.aiConfig.description}</p>
                
                <div className="space-y-8">
                  {t.aiConfig.models.map((model: any, idx: number) => (
                    <div key={idx} className="border-l-4 border-primary pl-6">
                      <h3 className="text-xl font-bold mb-2">{model.name}</h3>
                      <p className="text-sm text-muted-foreground mb-4">{model.useCase}</p>
                      
                      <div className="relative">
                        <pre className="bg-muted p-4 rounded-lg overflow-x-auto">
                          <code>{JSON.stringify(model.config, null, 2)}</code>
                        </pre>
                        <Button
                          size="sm"
                          variant="ghost"
                          className="absolute top-2 right-2"
                          onClick={() => copyCode(JSON.stringify(model.config, null, 2), `model-${idx}`)}
                        >
                          {copiedCode === `model-${idx}` ? <CheckCircle2 className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                        </Button>
                      </div>
                    </div>
                  ))}

                  <div className="mt-8">
                    <h3 className="text-xl font-bold mb-4">System Prompt Template</h3>
                    <div className="relative">
                      <pre className="bg-muted p-4 rounded-lg overflow-x-auto text-sm">
                        <code>{t.aiConfig.systemPrompt}</code>
                      </pre>
                      <Button
                        size="sm"
                        variant="ghost"
                        className="absolute top-2 right-2"
                        onClick={() => copyCode(t.aiConfig.systemPrompt, 'system-prompt')}
                      >
                        {copiedCode === 'system-prompt' ? <CheckCircle2 className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                      </Button>
                    </div>
                  </div>
                </div>
              </Card>
            </TabsContent>

            {/* Orchestration Tab */}
            <TabsContent value="orchestration" className="space-y-6">
              <Card className="p-8">
                <h2 className="text-3xl font-bold font-heading mb-4">{t.orchestration.title}</h2>
                <p className="text-muted-foreground mb-8">{t.orchestration.description}</p>
                
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-bold mb-4">{t.orchestration.makeScenario.title}</h3>
                    <div className="space-y-3">
                      {t.orchestration.makeScenario.steps.map((step: string, idx: number) => (
                        <div key={idx} className="flex items-center gap-3 p-3 bg-muted rounded-lg">
                          <div className="w-8 h-8 bg-gradient-primary rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">
                            {idx + 1}
                          </div>
                          <span>{step}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mt-8">
                    <h3 className="text-xl font-bold mb-4">Webhook Payload Example</h3>
                    <div className="relative">
                      <pre className="bg-muted p-4 rounded-lg overflow-x-auto">
                        <code>{t.orchestration.webhookExample}</code>
                      </pre>
                      <Button
                        size="sm"
                        variant="ghost"
                        className="absolute top-2 right-2"
                        onClick={() => copyCode(t.orchestration.webhookExample, 'webhook')}
                      >
                        {copiedCode === 'webhook' ? <CheckCircle2 className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                      </Button>
                    </div>
                  </div>
                </div>
              </Card>
            </TabsContent>

            {/* Integrations Tab */}
            <TabsContent value="integrations" className="space-y-6">
              <Card className="p-8">
                <h2 className="text-3xl font-bold font-heading mb-4">{t.integrations.title}</h2>
                <p className="text-muted-foreground mb-8">{t.integrations.description}</p>
                
                <div className="space-y-8">
                  {t.integrations.platforms.map((platform: any, idx: number) => (
                    <div key={idx} className="border-l-4 border-primary pl-6">
                      <div className="flex items-center gap-2 mb-4">
                        <span className="text-3xl">{platform.icon}</span>
                        <h3 className="text-2xl font-bold">{platform.name}</h3>
                      </div>
                      
                      <ul className="space-y-2 mb-4">
                        {platform.setup.map((step: string, stepIdx: number) => (
                          <li key={stepIdx} className="flex items-start gap-2">
                            <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                            <span className="text-sm">{step}</span>
                          </li>
                        ))}
                      </ul>

                      <div className="relative">
                        <pre className="bg-muted p-4 rounded-lg overflow-x-auto text-xs">
                          <code>{platform.code}</code>
                        </pre>
                        <Button
                          size="sm"
                          variant="ghost"
                          className="absolute top-2 right-2"
                          onClick={() => copyCode(platform.code, `platform-${idx}`)}
                        >
                          {copiedCode === `platform-${idx}` ? <CheckCircle2 className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </Card>
            </TabsContent>

            {/* Rules Tab */}
            <TabsContent value="rules" className="space-y-6">
              <Card className="p-8">
                <h2 className="text-3xl font-bold font-heading mb-4">{t.rules.title}</h2>
                <p className="text-muted-foreground mb-8">{t.rules.description}</p>
                
                <div className="space-y-8">
                  {t.rules.levels.map((level: any, idx: number) => (
                    <div key={idx} className="border-l-4 border-primary pl-6">
                      <h3 className="text-xl font-bold mb-2">{level.level}</h3>
                      <p className="text-sm text-muted-foreground mb-4">{level.useCase}</p>
                      
                      <div className="relative">
                        <pre className="bg-muted p-4 rounded-lg overflow-x-auto text-xs">
                          <code>{level.code}</code>
                        </pre>
                        <Button
                          size="sm"
                          variant="ghost"
                          className="absolute top-2 right-2"
                          onClick={() => copyCode(level.code, `level-${idx}`)}
                        >
                          {copiedCode === `level-${idx}` ? <CheckCircle2 className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </Card>
            </TabsContent>

            {/* Deployment Tab */}
            <TabsContent value="deployment" className="space-y-6">
              <Card className="p-8">
                <h2 className="text-3xl font-bold font-heading mb-4">{t.deployment.title}</h2>
                <p className="text-muted-foreground mb-8">{t.deployment.description}</p>
                
                <div className="space-y-8">
                  {t.deployment.steps.map((phase: any, idx: number) => (
                    <div key={idx}>
                      <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                        <span className="w-8 h-8 bg-gradient-primary rounded-full flex items-center justify-center text-white text-sm">
                          {idx + 1}
                        </span>
                        {phase.phase}
                      </h3>
                      <div className="space-y-2 ml-10">
                        {phase.tasks.map((task: string, taskIdx: number) => (
                          <div key={taskIdx} className="flex items-center gap-2 p-2 hover:bg-muted rounded">
                            <span>{task}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Support Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <Card className="p-12 max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold font-heading text-center mb-4">{t.support.title}</h2>
            <p className="text-center text-muted-foreground mb-8">{t.support.description}</p>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {t.support.channels.map((channel: any, idx: number) => (
                <div key={idx} className="text-center p-4">
                  <div className="text-4xl mb-2">{channel.icon}</div>
                  <h3 className="font-bold mb-1">{channel.label}</h3>
                  <p className="text-sm text-muted-foreground">{channel.value}</p>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </section>
    </div>
  );
}


