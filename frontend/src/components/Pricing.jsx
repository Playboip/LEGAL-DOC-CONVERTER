import React from 'react';
import { Button } from './ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Check, Star } from 'lucide-react';
import { subscriptionPlans } from '../mock';

const Pricing = () => {
  return (
    <section id="pricing" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
            Simple, Transparent Pricing
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Choose the plan that fits your legal document processing needs. 
            Start free and upgrade as you grow.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {subscriptionPlans.map((plan, index) => (
            <Card 
              key={index} 
              className={`relative border-0 shadow-lg hover:shadow-xl transition-all duration-300 ${
                plan.popular ? 'ring-2 ring-slate-900 transform scale-105' : ''
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <Badge className="bg-slate-900 text-white px-4 py-1 text-sm font-medium">
                    <Star className="h-3 w-3 mr-1" />
                    Most Popular
                  </Badge>
                </div>
              )}
              
              <CardHeader className="text-center pb-8">
                <CardTitle className="text-2xl font-bold text-slate-900">
                  {plan.name}
                </CardTitle>
                <div className="mt-4">
                  <span className="text-4xl font-bold text-slate-900">{plan.price}</span>
                  <span className="text-slate-600">/{plan.period}</span>
                </div>
                <CardDescription className="mt-2">
                  {plan.name === 'Free' 
                    ? 'Perfect for trying out our services'
                    : 'For legal professionals and firms'
                  }
                </CardDescription>
              </CardHeader>

              <CardContent className="space-y-6">
                <ul className="space-y-3">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <Check className="h-5 w-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                      <span className="text-slate-700">{feature}</span>
                    </li>
                  ))}
                </ul>

                {plan.limitations && (
                  <div className="pt-4 border-t border-slate-200">
                    <p className="text-sm text-slate-500 mb-2">Limitations:</p>
                    <ul className="space-y-1">
                      {plan.limitations.map((limitation, limitIndex) => (
                        <li key={limitIndex} className="text-sm text-slate-500">
                          • {limitation}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                <Button 
                  className={`w-full py-3 font-semibold transition-all duration-300 ${
                    plan.popular 
                      ? 'bg-slate-900 hover:bg-slate-800 text-white shadow-lg hover:shadow-xl' 
                      : 'bg-slate-100 hover:bg-slate-200 text-slate-900 border border-slate-200'
                  }`}
                >
                  {plan.name === 'Free' ? 'Start Free' : 'Subscribe Now'}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Info */}
        <div className="text-center mt-12 p-6 bg-slate-50 rounded-xl">
          <h3 className="text-lg font-semibold text-slate-900 mb-2">
            Enterprise Solutions Available
          </h3>
          <p className="text-slate-600 mb-4">
            Need custom solutions for your law firm or organization? We offer tailored plans 
            with advanced features, dedicated support, and flexible pricing.
          </p>
          <Button variant="outline" className="border-slate-300 text-slate-700 hover:bg-slate-100">
            Contact Sales
          </Button>
        </div>

        {/* Money Back Guarantee */}
        <div className="text-center mt-8">
          <p className="text-sm text-slate-500">
            30-day money-back guarantee • Cancel anytime • No hidden fees
          </p>
        </div>
      </div>
    </section>
  );
};

export default Pricing;