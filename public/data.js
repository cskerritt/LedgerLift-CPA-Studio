/* LedgerLift CPA Studio – Data Layer v3.0 */


const ACCOUNT_OPTIONS = [
  'Cash','Petty Cash','Short-term Investments','Accounts Receivable',
  'Allowance for Doubtful Accounts','Notes Receivable','Interest Receivable',
  'Inventory','Raw Materials Inventory','Work-in-Process Inventory',
  'Finished Goods Inventory','Supplies','Prepaid Insurance','Prepaid Rent',
  'Prepaid Advertising','Equipment','Accumulated Depreciation - Equipment',
  'Buildings','Accumulated Depreciation - Buildings','Land',
  'Right-of-use Asset','Goodwill','Patents','Copyrights','Trademarks',
  'Franchise Rights','Long-term Investments','Accounts Payable',
  'Notes Payable','Wages Payable','Salaries Payable','Interest Payable',
  'Income Tax Payable','Sales Tax Payable','Unearned Revenue',
  'Dividends Payable','Current Portion of Long-term Debt','Lease Liability',
  'Bonds Payable','Premium on Bonds Payable','Discount on Bonds Payable',
  'Mortgage Payable','Deferred Tax Liability','Pension Liability',
  'Common Stock','Preferred Stock','APIC','APIC - Treasury Stock',
  'Retained Earnings','Treasury Stock','Dividends',
  'Accumulated Other Comprehensive Income','Service Revenue','Sales Revenue',
  'Interest Revenue','Rent Revenue','Gain on Sale of Assets',
  'Dividend Revenue','Unrealized Gain on Investments',
  'Cost of Goods Sold','Wages Expense','Salaries Expense',
  'Rent Expense','Depreciation Expense','Amortization Expense',
  'Insurance Expense','Supplies Expense','Utilities Expense',
  'Bad Debt Expense','Interest Expense','Income Tax Expense',
  'Advertising Expense','Repairs and Maintenance Expense',
  'Loss on Sale of Assets','Unrealized Loss on Investments',
  'Pension Expense','Lease Expense'
];

const CURRICULUM = [
  {
    level: 1,
    title: "Accounting Foundations",
    topics: [
      {
        id: "accounting-equation",
        title: "The Accounting Equation",
        cpaSection: "Foundation",
        objectives: ["Identify the three components of the accounting equation","Analyze how transactions affect the accounting equation","Demonstrate that the equation always remains in balance"],
        keyFormula: "Assets = Liabilities + Stockholders' Equity",
        lesson: "<p>The accounting equation is the foundation of double-entry bookkeeping. Every business transaction affects at least two accounts and the equation must always balance. Assets represent resources owned by the entity, liabilities represent obligations owed to creditors, and stockholders' equity represents the residual interest of the owners.</p><p>When a company borrows money from a bank, both assets (Cash) and liabilities (Notes Payable) increase by the same amount, keeping the equation in balance. When the company earns revenue, assets increase and equity increases through retained earnings. When expenses are incurred, either assets decrease or liabilities increase, and equity decreases.</p><p>The expanded accounting equation further breaks down equity: Assets = Liabilities + Common Stock + Retained Earnings + Revenue - Expenses - Dividends. This expanded form shows how income statement items connect to the balance sheet through retained earnings. On the CPA exam, you must be able to trace every transaction through the equation.</p>",
        practiceTip: "When analyzing a transaction, always ask: Which accounts are affected? Did they increase or decrease? Does the equation still balance?"
      },
      {
        id: "debits-credits",
        title: "Debits and Credits",
        cpaSection: "Foundation",
        objectives: ["Apply debit and credit rules to all account types","Determine normal balances for asset, liability, equity, revenue, and expense accounts","Record transactions using proper debit and credit notation"],
        keyFormula: "Debits = Credits (for every journal entry)",
        lesson: "<p>Debits and credits are the mechanism by which the accounting equation stays in balance. A debit is an entry on the left side of a T-account, and a credit is an entry on the right side. Assets and expenses have normal debit balances. Liabilities, equity, and revenues have normal credit balances. Contra accounts have the opposite normal balance of their related account.</p><p>For example, Accumulated Depreciation is a contra-asset account with a normal credit balance. Treasury Stock is a contra-equity account with a normal debit balance. Every journal entry must have equal total debits and total credits.</p><p>The mnemonic DEALER can help: Dividends, Expenses, and Assets increase with Debits; Liabilities, Equity, and Revenue increase with Credits. On the CPA exam, you will encounter complex transactions with multiple debits and credits. Always verify that your entry balances.</p>",
        practiceTip: "Use the DEALER mnemonic: Dividends, Expenses, Assets = Debit increase; Liabilities, Equity, Revenue = Credit increase."
      },
      {
        id: "financial-statements",
        title: "Financial Statements Overview",
        cpaSection: "Foundation",
        objectives: ["Identify the four primary financial statements and their purposes","Describe the relationships among the financial statements","Classify items into the correct financial statement"],
        keyFormula: "Net Income = Revenue - Expenses; Ending RE = Beginning RE + Net Income - Dividends",
        lesson: "<p>U.S. GAAP requires four primary financial statements: the Income Statement, the Balance Sheet, the Statement of Stockholders' Equity, and the Statement of Cash Flows. The income statement reports revenues and expenses over a period of time. The balance sheet reports assets, liabilities, and equity at a specific point in time.</p><p>The statements are interrelated. Net income flows into retained earnings on the statement of stockholders' equity. The ending retained earnings balance then appears on the balance sheet. The statement of cash flows explains the change in the cash balance reported on the balance sheet.</p><p>The income statement, statement of stockholders' equity, and statement of cash flows cover a period, while the balance sheet is dated at a point in time. Public companies must also present earnings per share on the income statement.</p>",
        practiceTip: "Remember the preparation order: Income Statement first, then Statement of Retained Earnings, then Balance Sheet, then Cash Flows."
      },
      {
        id: "journal-entries",
        title: "Journal Entries and the Ledger",
        cpaSection: "Foundation",
        objectives: ["Record business transactions as journal entries","Post journal entries to the general ledger","Prepare a trial balance from ledger account balances"],
        keyFormula: "Trial Balance: Sum of Debit Balances = Sum of Credit Balances",
        lesson: "<p>The accounting cycle begins with analyzing transactions and recording them as journal entries. Each journal entry includes the date, account titles, debit and credit amounts, and a brief description. Debits are listed first and flush left; credits are indented.</p><p>After journalizing, entries are posted to the general ledger, which organizes information by account. The chart of accounts assigns a number to each account. Assets are typically numbered 100-199, liabilities 200-299, equity 300-399, revenues 400-499, and expenses 500-599.</p><p>A trial balance lists all ledger accounts and their balances. If total debits equal total credits, it is in balance. However, a balanced trial balance does not guarantee the absence of errors such as posting to the wrong account or omitting a transaction entirely.</p>",
        practiceTip: "A trial balance that balances does NOT mean all entries are correct. Errors of omission, commission, and original entry can still exist."
      },
      {
        id: "adjusting-entries",
        title: "Adjusting Entries",
        cpaSection: "Foundation",
        objectives: ["Identify the four types of adjusting entries","Prepare adjusting entries for accruals and deferrals","Explain why adjusting entries are necessary under accrual accounting"],
        keyFormula: "Accrual Basis: Revenue recognized when earned; Expenses recognized when incurred",
        lesson: "<p>Adjusting entries are required at the end of each accounting period to ensure revenues and expenses are reported in the correct period. There are four main types: accrued revenues, accrued expenses, deferred revenues, and deferred expenses (prepayments). Depreciation is a special type of deferral.</p><p>For accrued revenue, debit Accounts Receivable and credit Revenue. For accrued expenses, debit Expense and credit a Payable. Deferred revenue is recognized by debiting Unearned Revenue and crediting Revenue as services are performed. Prepaid expenses are expensed over time.</p><p>Adjusting entries never involve Cash. They always involve at least one income statement account and one balance sheet account. After adjusting entries, an adjusted trial balance is prepared for the financial statements.</p>",
        practiceTip: "Adjusting entries NEVER involve Cash. They always pair a balance sheet account with an income statement account."
      },
      {
        id: "closing-process",
        title: "The Closing Process",
        cpaSection: "Foundation",
        objectives: ["Explain the purpose of closing entries","Prepare closing entries for revenue, expense, and dividend accounts","Distinguish between temporary and permanent accounts"],
        keyFormula: "Income Summary = Total Revenue - Total Expenses; close net amount to Retained Earnings",
        lesson: "<p>Closing entries transfer balances of temporary accounts (revenues, expenses, dividends) to Retained Earnings, resetting them to zero for the next period. Permanent accounts (assets, liabilities, equity) carry their balances forward.</p><p>Four closing entries: (1) Close revenues to Income Summary. (2) Close expenses to Income Summary. (3) Close Income Summary to Retained Earnings. (4) Close Dividends to Retained Earnings.</p><p>After closing, a post-closing trial balance contains only permanent accounts with their correct balances, serving as the starting point for the next period.</p>",
        practiceTip: "Only temporary accounts (Revenue, Expenses, Dividends) are closed. Permanent accounts (Assets, Liabilities, Equity) carry forward."
      }
    ]
  },
  {
    level: 2,
    title: "Financial Accounting I",
    topics: [
      {
        id: "cash-receivables",
        title: "Cash and Receivables",
        cpaSection: "FAR",
        objectives: ["Account for uncollectible accounts using the allowance method","Calculate bad debt expense under percentage-of-sales and aging approaches","Record the factoring and pledging of receivables"],
        keyFormula: "Net Realizable Value = Accounts Receivable - Allowance for Doubtful Accounts",
        lesson: "<p>Cash includes currency, checking accounts, and items acceptable for deposit. Cash equivalents have original maturities of three months or less. Receivables represent amounts owed to the company from credit sales.</p><p>The allowance method estimates uncollectible accounts. The percentage-of-sales method calculates bad debt expense as a percentage of credit sales. The aging method categorizes receivables by age and applies increasing loss percentages to determine the required allowance balance.</p><p>When a specific account is written off, debit Allowance and credit A/R. This does not affect net realizable value or bad debt expense. Companies may factor receivables to accelerate cash flow.</p>",
        practiceTip: "Writing off a specific account under the allowance method does NOT affect total assets or bad debt expense."
      },
      {
        id: "inventory-methods",
        title: "Inventory Methods",
        cpaSection: "FAR",
        objectives: ["Calculate COGS and ending inventory under FIFO, LIFO, and weighted-average","Apply the lower of cost or net realizable value rule","Account for inventory errors"],
        keyFormula: "COGS = Beginning Inventory + Purchases - Ending Inventory",
        lesson: "<p>FIFO assigns oldest costs to COGS; LIFO assigns newest costs to COGS. Weighted-average assigns the same average cost to both. In rising prices, FIFO produces lowest COGS and highest net income; LIFO produces the opposite.</p><p>LIFO is permitted under U.S. GAAP but prohibited under IFRS. The LIFO conformity rule requires LIFO for financial reporting if used for tax. ASC 330 requires inventory at the lower of cost or NRV.</p><p>Inventory errors affect two consecutive periods and self-correct. An overstatement of ending inventory overstates current net income and understates next period's net income.</p>",
        practiceTip: "An ending inventory error affects TWO consecutive periods and self-corrects."
      },
      {
        id: "fixed-assets",
        title: "Property, Plant, and Equipment",
        cpaSection: "FAR",
        objectives: ["Determine the cost of PP&E at acquisition","Calculate depreciation under straight-line, declining-balance, and units-of-production","Account for disposal, exchange, and impairment of long-lived assets"],
        keyFormula: "Straight-line Depreciation = (Cost - Salvage Value) / Useful Life",
        lesson: "<p>PP&E is recorded at all costs necessary to acquire and prepare the asset for use: purchase price, sales tax, freight, installation. Land is not depreciated. Interest during construction of qualifying assets must be capitalized.</p><p>Straight-line produces equal expense each period. Double-declining balance applies twice the straight-line rate to declining book value. Under ASC 360, long-lived assets are tested for impairment when events indicate carrying amount may not be recoverable.</p><p>Impairment test: Step 1 compares carrying amount to undiscounted future cash flows. If impaired, Step 2 measures loss as carrying amount minus fair value. Impairment losses cannot be reversed under U.S. GAAP.</p>",
        practiceTip: "For impairment: Step 1 uses UNDISCOUNTED cash flows. Step 2 uses FAIR VALUE to measure the loss."
      },
      {
        id: "current-liabilities",
        title: "Current Liabilities and Contingencies",
        cpaSection: "FAR",
        objectives: ["Identify and record various types of current liabilities","Calculate accrued liabilities","Apply criteria for recognizing contingent liabilities"],
        keyFormula: "Interest on Notes = Principal x Rate x Time",
        lesson: "<p>Current liabilities are settled within one year or the operating cycle. Common types include accounts payable, notes payable, accrued liabilities, unearned revenue, and current portion of long-term debt.</p><p>Under ASC 450, contingent losses are accrued when probable and reasonably estimable. If a range is estimated with no best estimate, accrue the minimum. Reasonably possible losses are disclosed only. Remote losses generally need no disclosure.</p><p>Gain contingencies are never accrued but may be disclosed when realization is probable. This asymmetric treatment reflects conservatism in GAAP.</p>",
        practiceTip: "Contingent losses: Probable + Estimable = Accrue. Reasonably Possible = Disclose only. Remote = No disclosure. Gains are NEVER accrued."
      },
      {
        id: "payroll-accounting",
        title: "Payroll Accounting",
        cpaSection: "FAR",
        objectives: ["Calculate gross pay, net pay, and employer payroll obligations","Record payroll journal entries","Distinguish employee and employer payroll tax responsibilities"],
        keyFormula: "Net Pay = Gross Pay - Employee Withholdings (FICA, Federal Tax, State Tax)",
        lesson: "<p>Employee withholdings include federal and state income tax, employee FICA (6.2% Social Security up to wage base, 1.45% Medicare on all earnings), and voluntary deductions. Net pay is the amount actually paid.</p><p>Employer taxes include matching FICA, FUTA (6.0% on first $7,000, often reduced to 0.6%), and SUTA. These are separate expenses for the employer.</p><p>Compensated absences for vacation must be accrued when the obligation relates to services already performed and the amount can be reasonably estimated.</p>",
        practiceTip: "Both employee and employer pay 6.2% Social Security + 1.45% Medicare. The employer also pays FUTA and SUTA."
      },
      {
        id: "bank-reconciliation",
        title: "Bank Reconciliation",
        cpaSection: "FAR",
        objectives: ["Prepare a complete bank reconciliation","Identify items that adjust bank versus book balance","Record journal entries for book-side reconciling items"],
        keyFormula: "Adjusted Bank Balance = Bank Balance + Deposits in Transit - Outstanding Checks",
        lesson: "<p>A bank reconciliation explains the difference between the bank statement balance and the company's book balance. Adjustments are made to each side to arrive at the same adjusted cash balance.</p><p>Bank-side adjustments: deposits in transit (add), outstanding checks (subtract), bank errors. Book-side adjustments: bank collections (add), interest earned (add), NSF checks (subtract), bank service charges (subtract), book errors.</p><p>Only book-side adjustments require journal entries. Bank-side items will clear on their own. NSF checks require debiting Accounts Receivable and crediting Cash.</p>",
        practiceTip: "Only BOOK-side reconciling items need journal entries. Bank-side items will clear on their own."
      }
    ]
  },
  {
    level: 3,
    title: "Financial Accounting II",
    topics: [
      {
        id: "revenue-recognition",
        title: "Revenue Recognition (ASC 606)",
        cpaSection: "FAR",
        objectives: ["Apply the five-step revenue recognition model","Identify performance obligations in contracts","Allocate transaction price using standalone selling prices"],
        keyFormula: "5 Steps: Identify contract, Identify obligations, Determine price, Allocate price, Recognize when satisfied",
        lesson: "<p>ASC 606 uses a five-step model. Step 1: Identify the contract. Step 2: Identify performance obligations (distinct goods or services). Step 3: Determine transaction price, including variable consideration subject to constraint.</p><p>Step 4: Allocate transaction price based on relative standalone selling prices. Step 5: Recognize revenue when (or as) each performance obligation is satisfied by transferring control to the customer.</p><p>Obligations satisfied over time use input or output methods. Obligations at a point in time recognize revenue when control transfers, indicated by right to payment, legal title, physical possession, and customer acceptance.</p>",
        practiceTip: "Revenue is recognized when CONTROL transfers to the customer, not necessarily when cash is received."
      },
      {
        id: "bonds-debt",
        title: "Bonds and Long-term Debt",
        cpaSection: "FAR",
        objectives: ["Account for bonds at par, premium, and discount","Calculate interest expense using effective interest method","Record retirement and conversion of bonds"],
        keyFormula: "Bond Issue Price = PV of Interest Payments + PV of Principal (using market rate)",
        lesson: "<p>When stated rate equals market rate, bonds sell at par. Stated rate above market rate means a premium. Stated rate below market rate means a discount. Bond issue costs are netted against carrying amount under ASC 835.</p><p>Under the effective interest method, interest expense = carrying amount times market rate. Cash payment = face value times stated rate. The difference amortizes the premium or discount, moving carrying amount toward face value.</p><p>Early retirement: compare reacquisition price to carrying amount for gain or loss. Convertible bonds converted to stock under the book value method transfer the carrying amount to equity with no gain or loss recognized.</p>",
        practiceTip: "Effective interest: Interest Expense = Carrying Amount x Market Rate. Cash = Face Value x Stated Rate."
      },
      {
        id: "stockholders-equity",
        title: "Stockholders' Equity",
        cpaSection: "FAR",
        objectives: ["Account for issuance of common and preferred stock","Record treasury stock under the cost method","Distinguish cash dividends, stock dividends, and stock splits"],
        keyFormula: "Total SE = Common Stock + APIC + Retained Earnings - Treasury Stock + AOCI",
        lesson: "<p>Common stock is credited at par value; excess goes to APIC. Preferred stock may be cumulative, participating, convertible, or callable. Cumulative preferred requires dividends in arrears be paid before common dividends.</p><p>Treasury stock under the cost method is debited at reacquisition cost. Reissued above cost: excess to APIC-Treasury Stock. Below cost: difference to APIC-TS then Retained Earnings. Treasury stock is contra-equity, not an asset.</p><p>Small stock dividends (under 20-25%) use FMV. Large stock dividends (over 20-25%) use par value. Stock splits change shares and par proportionally with no journal entry. Neither changes total stockholders' equity.</p>",
        practiceTip: "Small stock dividend: use FMV. Large stock dividend: use par value. Stock split: no journal entry."
      },
      {
        id: "investments",
        title: "Investments in Debt and Equity Securities",
        cpaSection: "FAR",
        objectives: ["Classify investments as trading, AFS, HTM, or equity method","Account for unrealized gains and losses","Apply the equity method for significant influence investments"],
        keyFormula: "Equity Method: Investment = Cost + Share of Income - Dividends +/- Adjustments",
        lesson: "<p>Trading securities: fair value with unrealized gains/losses in net income. AFS debt securities: fair value with unrealized gains/losses in OCI. HTM: amortized cost. Equity investments without fair value may use measurement alternative.</p><p>Equity method (20-50% ownership): initially at cost, then adjusted for share of investee income (increase) and dividends received (decrease). Excess cost over book value attributed to specific assets is amortized.</p><p>When AFS securities are sold, accumulated unrealized gains/losses in AOCI are reclassified to net income. HTM sales are restricted to avoid tainting the portfolio.</p>",
        practiceTip: "Trading = Net Income. AFS = OCI. HTM = Amortized cost. Equity method = 20-50% with significant influence."
      },
      {
        id: "cash-flows",
        title: "Statement of Cash Flows",
        cpaSection: "FAR",
        objectives: ["Classify cash flows into operating, investing, and financing","Prepare operating section using indirect method","Identify significant noncash activities"],
        keyFormula: "Indirect: Net Income + Noncash Expenses + Decreases in CA + Increases in CL (and vice versa)",
        lesson: "<p>Operating activities relate to primary revenue-producing activities. Investing involves long-term assets. Financing involves debt and equity. Under U.S. GAAP, interest paid and received are operating; dividends paid are financing.</p><p>The indirect method starts with net income and adjusts for noncash items (add depreciation, subtract gains, add losses) and working capital changes. Increases in current assets are subtracted; increases in current liabilities are added.</p><p>Noncash investing and financing activities (converting bonds to stock, acquiring assets through leases) are disclosed separately. Free cash flow = operating cash flow minus capital expenditures.</p>",
        practiceTip: "Under U.S. GAAP: Interest paid/received = Operating. Dividends paid = Financing. Dividends received = Operating."
      },
      {
        id: "earnings-per-share",
        title: "Earnings Per Share",
        cpaSection: "FAR",
        objectives: ["Calculate basic EPS","Calculate diluted EPS including treasury stock and if-converted methods","Determine which securities are dilutive vs antidilutive"],
        keyFormula: "Basic EPS = (Net Income - Preferred Dividends) / Weighted-Average Common Shares",
        lesson: "<p>Basic EPS: numerator is net income minus preferred dividends (declared for noncumulative; annual amount for cumulative). Denominator is weighted-average common shares. Stock splits and dividends are retroactively adjusted.</p><p>Diluted EPS assumes dilutive securities are exercised/converted. Treasury stock method for options: assume exercised, proceeds buy back shares at average market price, net new shares added to denominator. Dilutive only when exercise price is below market price.</p><p>If-converted method for convertible bonds: add back after-tax interest to numerator, add conversion shares to denominator. For convertible preferred: add back preferred dividends to numerator, add conversion shares. Antidilutive securities (those that increase EPS) are excluded.</p>",
        practiceTip: "Stock splits and dividends are retroactively adjusted. Options are dilutive only when exercise price is below market price."
      }
    ]
  },
  {
    level: 4,
    title: "Intermediate Accounting",
    topics: [
      {
        id: "leases",
        title: "Leases (ASC 842)",
        cpaSection: "FAR",
        objectives: ["Classify leases as finance or operating for the lessee","Record the right-of-use asset and lease liability at commencement","Account for subsequent measurement under both lease types"],
        keyFormula: "Lease Liability = PV of Lease Payments; ROU Asset = Liability + IDC + Prepayments - Incentives",
        lesson: "<p>Under ASC 842, lessees recognize a right-of-use asset and lease liability for all leases over 12 months. A finance lease meets any of five criteria: ownership transfer, purchase option reasonably certain, major part of economic life (75%+), substantially all of fair value (90%+), or specialized asset with no alternative use.</p><p>The lease liability equals the PV of lease payments discounted at the implicit rate or incremental borrowing rate. Finance leases have front-loaded expense (amortization plus interest). Operating leases have straight-line total lease cost.</p><p>Lessors classify as sales-type, direct financing, or operating. The short-term lease exemption applies to leases of 12 months or less.</p>",
        practiceTip: "Under ASC 842, BOTH finance and operating leases go on the balance sheet. The difference is the expense pattern."
      },
      {
        id: "pensions",
        title: "Pensions and Postretirement Benefits",
        cpaSection: "FAR",
        objectives: ["Calculate net periodic pension cost components","Determine funded status of a defined benefit plan","Account for prior service cost and actuarial gains/losses"],
        keyFormula: "Funded Status = Fair Value of Plan Assets - PBO",
        lesson: "<p>Under ASC 715, the funded status (plan assets minus PBO) is reported on the balance sheet. Net periodic pension cost components: service cost (in operating income), interest cost, expected return on plan assets, amortization of prior service cost, and amortization of net actuarial gain/loss.</p><p>Prior service cost from plan amendments is recorded in OCI and amortized over the remaining service period. Actuarial gains and losses use the corridor approach: amortize only the excess over 10% of the greater of beginning PBO or plan assets.</p><p>Only service cost is reported in operating income. All other components are reported outside of operating income on the income statement.</p>",
        practiceTip: "Only SERVICE COST is in operating income. All other pension components are below the line."
      },
      {
        id: "income-taxes",
        title: "Income Taxes (ASC 740)",
        cpaSection: "FAR",
        objectives: ["Distinguish temporary and permanent differences","Calculate deferred tax assets and liabilities","Evaluate the need for a valuation allowance"],
        keyFormula: "Deferred Tax = Temporary Difference x Enacted Tax Rate",
        lesson: "<p>Current tax is based on taxable income. Deferred taxes arise from temporary differences between tax and book basis. A DTL arises when book income exceeds taxable income temporarily. A DTA arises when taxable income exceeds book income temporarily.</p><p>Permanent differences (municipal bond interest, life insurance on officers, fines) never reverse and create no deferred taxes. They affect the effective tax rate. Deferred taxes use the enacted rate expected to apply when differences reverse.</p><p>A valuation allowance reduces a DTA when it is more likely than not (over 50%) that some or all will not be realized. Rate changes require immediate adjustment with the effect in income from continuing operations.</p>",
        practiceTip: "Permanent differences = NO deferred taxes. Temporary differences = DTAs or DTLs. Use the ENACTED rate."
      },
      {
        id: "accounting-changes",
        title: "Accounting Changes and Error Corrections",
        cpaSection: "FAR",
        objectives: ["Distinguish changes in principle, estimate, and reporting entity","Apply retrospective and prospective treatment","Account for error corrections"],
        keyFormula: "Retrospective: Adjust beginning Retained Earnings of earliest period presented (net of tax)",
        lesson: "<p>Change in accounting principle (e.g., LIFO to FIFO): applied retrospectively by adjusting prior periods and beginning retained earnings. Change in estimate (e.g., useful life revision): applied prospectively to current and future periods only.</p><p>If a change in principle is inseparable from a change in estimate (e.g., changing depreciation method), treat as a change in estimate applied prospectively. Change in reporting entity requires retrospective application.</p><p>Error corrections require restatement of prior periods. The cumulative effect on periods before those presented adjusts opening retained earnings. Material errors require restatement.</p>",
        practiceTip: "Principle = Retrospective. Estimate = Prospective. Error = Restatement. Know these cold."
      },
      {
        id: "contingencies",
        title: "Contingencies and Commitments",
        cpaSection: "FAR",
        objectives: ["Apply ASC 450 to loss and gain contingencies","Account for warranties and litigation","Account for asset retirement obligations"],
        keyFormula: "Loss Contingency: Probable + Estimable = Accrue; Range with no best estimate = Accrue minimum",
        lesson: "<p>Under ASC 450, loss contingencies are probable (accrue if estimable), reasonably possible (disclose only), or remote (generally no disclosure). If a range with no best estimate exists, accrue the minimum and disclose the range.</p><p>Warranties are accrued at time of sale. Service-type warranties sold separately are recognized as revenue over the warranty period under ASC 606. Gain contingencies are disclosed when probable but never accrued.</p><p>Asset retirement obligations under ASC 410 are recorded at fair value when incurred, with a corresponding increase in the related asset. The liability accretes over time and the capitalized cost is depreciated over the asset's life.</p>",
        practiceTip: "Range with no best estimate: accrue the MINIMUM. Gain contingencies are NEVER accrued."
      },
      {
        id: "fair-value",
        title: "Fair Value Measurement (ASC 820)",
        cpaSection: "FAR",
        objectives: ["Define fair value under ASC 820","Apply the three-level fair value hierarchy","Determine when fair value measurement is required vs elected"],
        keyFormula: "Fair Value = Exit price in an orderly transaction between market participants",
        lesson: "<p>ASC 820 defines fair value as an exit price: the price to sell an asset or transfer a liability in an orderly transaction at the measurement date. For nonfinancial assets, fair value is based on highest and best use.</p><p>Level 1: quoted prices in active markets for identical items (most reliable). Level 2: observable inputs for similar items, or quoted prices in inactive markets. Level 3: unobservable inputs based on entity's own assumptions (least reliable).</p><p>Fair value is required for impairment testing, business combinations, trading and AFS securities, derivatives, and pension plan assets. The fair value option under ASC 825 allows irrevocable election for certain financial instruments, with changes in net income.</p>",
        practiceTip: "Level 1 = Identical items in ACTIVE markets. Level 2 = Similar items or observable inputs. Level 3 = Entity's own estimates."
      }
    ]
  },
  {
    level: 5,
    title: "Advanced Accounting",
    topics: [
      {
        id: "consolidations",
        title: "Business Combinations and Consolidations",
        cpaSection: "FAR",
        objectives: ["Apply the acquisition method under ASC 805","Prepare consolidated statements with elimination entries","Account for goodwill measurement and impairment"],
        keyFormula: "Goodwill = Purchase Price - Fair Value of Identifiable Net Assets Acquired",
        lesson: "<p>Under ASC 805, all business combinations use the acquisition method. The acquirer recognizes identifiable assets and liabilities at fair value and measures goodwill as the excess of consideration over fair value of net assets. Acquisition costs are expensed as incurred.</p><p>A bargain purchase (negative goodwill) is recognized as a gain in net income after reassessing measurements. Noncontrolling interest is measured at fair value or proportionate share of net assets.</p><p>Consolidation eliminates intercompany transactions. Goodwill is tested annually for impairment at the reporting unit level. If carrying amount exceeds fair value, impairment equals the difference, limited to goodwill balance. Goodwill impairment cannot be reversed under U.S. GAAP.</p>",
        practiceTip: "Acquisition costs are EXPENSED. Goodwill is tested annually and NEVER amortized for public companies."
      },
      {
        id: "foreign-currency",
        title: "Foreign Currency Transactions and Translation",
        cpaSection: "FAR",
        objectives: ["Account for foreign currency transaction gains and losses","Translate using the current rate method","Remeasure using the temporal method"],
        keyFormula: "Current Rate Method: Translation adjustment in OCI. Temporal Method: Remeasurement gain/loss in Net Income",
        lesson: "<p>Foreign currency transactions create exchange gains or losses reported in net income. At each balance sheet date, foreign currency receivables and payables are remeasured at the current rate.</p><p>Current rate method (functional currency = local currency): all assets/liabilities at current rate, revenues/expenses at average rate, equity at historical rates. Translation adjustment goes to OCI.</p><p>Temporal method (functional currency = USD, or highly inflationary economy): monetary items at current rate, nonmonetary at historical. Remeasurement gain/loss goes to net income. Highly inflationary = cumulative inflation exceeding 100% over three years.</p>",
        practiceTip: "Current rate = OCI. Temporal = Net Income. Highly inflationary economies must use temporal method."
      },
      {
        id: "partnerships",
        title: "Partnership Accounting",
        cpaSection: "FAR",
        objectives: ["Account for partnership formation and contributions","Allocate income using salary, interest, and ratio methods","Apply bonus and goodwill methods for admission/withdrawal"],
        keyFormula: "Partner Capital = Initial Contribution +/- Share of Income - Drawings",
        lesson: "<p>Partners contribute assets at fair value. Income is allocated per the agreement: salary allowances, interest on capital, then residual sharing ratio. These are allocations, not expenses. If the agreement is silent, income and losses are divided equally.</p><p>New partners admitted by the bonus method: total capital based on actual assets, differences treated as bonuses. Goodwill method: implied total value used to record goodwill.</p><p>Liquidation involves selling assets, paying liabilities, and distributing cash per capital balances. If a partner has a deficit and cannot contribute, the deficit is allocated to remaining partners.</p>",
        practiceTip: "Partnership salary and interest are NOT expenses. If the agreement is silent, income is divided equally."
      },
      {
        id: "governmental-accounting",
        title: "Governmental Accounting",
        cpaSection: "FAR",
        objectives: ["Explain fund accounting and the three fund categories","Apply modified accrual accounting for governmental funds","Prepare government-wide and fund-level statements"],
        keyFormula: "Governmental Fund: Current Financial Resources = Current Assets - Current Liabilities = Fund Balance",
        lesson: "<p>Three fund categories: governmental (general, special revenue, capital projects, debt service, permanent), proprietary (enterprise, internal service), and fiduciary (pension trust, custodial). The general fund is the chief operating fund.</p><p>Governmental funds use modified accrual: revenues when measurable and available (typically within 60 days), expenditures when liability is incurred. Long-term assets and liabilities are not reported in governmental funds.</p><p>Government-wide statements use full accrual. Fund statements use modified accrual for governmental funds and full accrual for proprietary. A reconciliation bridges the two. Budgetary accounting uses encumbrances to track commitments.</p>",
        practiceTip: "Governmental funds = Modified accrual. Proprietary and government-wide = Full accrual."
      },
      {
        id: "nonprofit-accounting",
        title: "Not-for-Profit Accounting",
        cpaSection: "FAR",
        objectives: ["Classify net assets as with or without donor restrictions","Account for contributions and conditional promises","Prepare NFP financial statements"],
        keyFormula: "Net Assets = Assets - Liabilities; With Donor Restrictions or Without Donor Restrictions",
        lesson: "<p>NFPs classify net assets as with donor restrictions (purpose or time) or without donor restrictions. When restrictions are satisfied, net assets are reclassified. Contributions are recognized when unconditional promises are made, at fair value.</p><p>Conditional promises (with barriers and right of return) are not recognized until conditions are substantially met. Contributed services are recognized only if they create/enhance a nonfinancial asset or require specialized skills.</p><p>NFP statements include: Statement of Financial Position, Statement of Activities, Statement of Cash Flows, and Statement of Functional Expenses. Expenses are reported by function: program, management/general, and fundraising.</p>",
        practiceTip: "Two net asset classes: With and Without Donor Restrictions. Conditional promises are NOT recognized until conditions are met."
      }
    ]
  },
  {
    level: 6,
    title: "Auditing & Attestation",
    topics: [
      {
        id: "audit-planning",
        title: "Audit Planning and Risk Assessment",
        cpaSection: "AUD",
        objectives: ["Describe the phases of a financial statement audit","Assess audit risk components: inherent, control, detection","Determine materiality for planning and evaluation"],
        keyFormula: "Audit Risk = Inherent Risk x Control Risk x Detection Risk",
        lesson: "<p>Audit planning involves understanding the entity, its environment, and internal controls through inquiry, observation, and analytical procedures. The auditor must consider fraud risk as required by AU-C 240.</p><p>Audit risk = IR x CR x DR. Inherent risk is susceptibility to misstatement before controls. Control risk is the risk controls fail. Detection risk is the risk audit procedures miss misstatements. The auditor controls only detection risk.</p><p>Materiality is based on benchmarks (5% of pre-tax income, 0.5-1% of revenue, 1-2% of total assets). Performance materiality is set lower to reduce aggregate misstatement risk. The auditor reassesses materiality throughout the audit.</p>",
        practiceTip: "Detection risk has an INVERSE relationship with inherent and control risk."
      },
      {
        id: "internal-controls",
        title: "Internal Controls and IT",
        cpaSection: "AUD",
        objectives: ["Identify the five COSO components of internal control","Evaluate design and operating effectiveness of controls","Understand auditor responsibilities for ICFR in integrated audits"],
        keyFormula: "COSO: Control Environment, Risk Assessment, Control Activities, Information and Communication, Monitoring",
        lesson: "<p>COSO framework: Control Environment (tone at the top), Risk Assessment, Control Activities (policies and procedures), Information and Communication, and Monitoring. Three objective categories: operations, reporting, compliance.</p><p>For public companies, PCAOB AS 2201 requires an opinion on ICFR. A material weakness requires an adverse opinion on ICFR. A significant deficiency must be communicated in writing to governance.</p><p>IT general controls (access, change management, development, operations) affect reliability of automated controls. Application controls include input, processing, and output controls.</p>",
        practiceTip: "Material weakness = Adverse opinion on ICFR. Significant deficiency = Written communication to governance."
      },
      {
        id: "evidence-gathering",
        title: "Audit Evidence and Procedures",
        cpaSection: "AUD",
        objectives: ["Evaluate sufficiency and appropriateness of audit evidence","Apply audit procedures: inspection, confirmation, recalculation, etc.","Link procedures to specific assertions"],
        keyFormula: "Assertions: Existence, Completeness, Valuation, Rights/Obligations, Presentation/Disclosure",
        lesson: "<p>Evidence must be sufficient (quantity) and appropriate (relevant and reliable). External evidence is more reliable than internal. Direct auditor evidence is more reliable than indirect.</p><p>Procedures: Inspection, Observation, Inquiry, External Confirmation, Recalculation, Reperformance, Analytical Procedures. Analytical procedures are required in planning and overall review, optional as substantive procedures.</p><p>Vouching (from records to documents) tests existence. Tracing (from documents to records) tests completeness. Every procedure should be linked to a specific assertion.</p>",
        practiceTip: "Vouching tests existence. Tracing tests completeness. Link EVERY procedure to a specific assertion."
      },
      {
        id: "audit-reporting",
        title: "Audit Reports and Opinions",
        cpaSection: "AUD",
        objectives: ["Identify elements of the standard unmodified report","Distinguish unmodified, qualified, adverse, and disclaimer","Determine appropriate report modification"],
        keyFormula: "Unmodified = Clean; Qualified = Except for; Adverse = Do not present fairly; Disclaimer = No opinion",
        lesson: "<p>Unmodified opinion: statements present fairly in all material respects. Qualified: material but not pervasive misstatement or scope limitation. Adverse: material and pervasive misstatement. Disclaimer: material and pervasive scope limitation.</p><p>Going concern uncertainty results in an emphasis-of-matter paragraph but does not change the opinion if disclosures are adequate. Critical audit matters (CAMs) are required for PCAOB audits of public companies.</p><p>Other modifications include emphasis-of-matter and other-matter paragraphs. When another auditor performed part of the audit, the principal auditor may reference or take full responsibility.</p>",
        practiceTip: "Material but NOT pervasive = Qualified. Material AND pervasive = Adverse (misstatement) or Disclaimer (scope limitation)."
      },
      {
        id: "professional-ethics",
        title: "Professional Ethics and Independence",
        cpaSection: "AUD",
        objectives: ["Apply the AICPA Code of Professional Conduct","Evaluate threats to independence","Distinguish independence in fact and appearance"],
        keyFormula: "Threats: Self-review, Advocacy, Familiarity, Undue Influence, Self-interest, Management Participation",
        lesson: "<p>AICPA principles: responsibilities, public interest, integrity, objectivity/independence, due care, scope of services. Independence is required for attestation engagements (audits, reviews, examinations).</p><p>Any direct financial interest in an attest client impairs independence regardless of materiality. Indirect interests impair only if material. SEC/PCAOB prohibit most non-audit services for public company audit clients.</p><p>PCAOB requires partner rotation every five years with a five-year cooling-off period. Audit committees must pre-approve all services.</p>",
        practiceTip: "ANY direct financial interest impairs independence regardless of materiality. Indirect interests are evaluated for materiality."
      },
      {
        id: "fraud-examination",
        title: "Fraud Detection and Evaluation",
        cpaSection: "AUD",
        objectives: ["Describe auditor responsibilities for detecting fraud","Identify the fraud triangle elements","Apply procedures to address fraud risks"],
        keyFormula: "Fraud Triangle: Incentive/Pressure + Opportunity + Rationalization",
        lesson: "<p>Under AU-C 240, the auditor must obtain reasonable assurance that statements are free of material misstatement due to fraud. Two types: fraudulent financial reporting and misappropriation of assets.</p><p>Fraud triangle: incentive (financial pressure), opportunity (weak controls), rationalization. Revenue recognition is a presumed fraud risk on every audit. The team must brainstorm fraud susceptibility.</p><p>Response: test journal entries for management override, review estimates for bias, evaluate unusual transactions. If fraud is detected, communicate to management and governance.</p>",
        practiceTip: "Revenue recognition is a PRESUMED fraud risk on every audit. Management override of controls must always be addressed."
      }
    ]
  },
  {
    level: 7,
    title: "Regulation",
    topics: [
      {
        id: "individual-taxation",
        title: "Individual Income Taxation",
        cpaSection: "REG",
        objectives: ["Calculate gross income, AGI, and taxable income","Identify above-the-line and below-the-line deductions","Apply filing status rules and determine tax liability"],
        keyFormula: "Taxable Income = Gross Income - Above-the-line Deductions (AGI) - Standard/Itemized Deductions - QBI",
        lesson: "<p>Gross income under IRC Section 61 includes wages, interest, dividends, business income, capital gains, rents, royalties, and more. Key exclusions: gifts, inheritances, life insurance proceeds, municipal bond interest, qualified scholarships.</p><p>Above-the-line deductions reduce AGI: educator expenses, self-employment tax deduction (50%), health insurance for self-employed, IRA contributions, student loan interest ($2,500 max). Below the line: standard deduction or itemized (medical over 7.5% AGI, SALT up to $10,000, mortgage interest, charitable).</p><p>QBI deduction under Section 199A: up to 20% of qualified business income from pass-through entities, subject to income-based limitations. Tax liability uses progressive brackets for the filing status.</p>",
        practiceTip: "Know the AGI formula. Above-the-line deductions are available regardless of itemizing. QBI deduction is neither above nor below the line."
      },
      {
        id: "corporate-taxation",
        title: "Corporate Income Taxation",
        cpaSection: "REG",
        objectives: ["Calculate corporate taxable income and tax liability","Apply the dividends received deduction","Account for net operating losses"],
        keyFormula: "Corporate Tax = Taxable Income x 21%; DRD = 50%, 65%, or 100%",
        lesson: "<p>C corporations pay a flat 21% rate. The dividends received deduction reduces double taxation: 50% for under 20% ownership, 65% for 20-79%, 100% for 80%+. Organizational costs: $5,000 immediate deduction (phase-out at $50,000), remainder over 180 months.</p><p>Charitable deduction limited to 10% of taxable income. Capital losses offset only capital gains (no ordinary income deduction); carry back 3 years, forward 5. Corporate estimated tax required if tax exceeds $500.</p><p>Post-2017 NOLs carry forward indefinitely, limited to 80% of taxable income. No carryback except for farming losses. Form 1120 due April 15 for calendar-year corporations.</p>",
        practiceTip: "Corporate charitable limit = 10%. Individual limit = 60% of AGI for cash to public charities. Capital losses: no $3,000 deduction for corporations."
      },
      {
        id: "partnership-taxation",
        title: "Partnership and S Corporation Taxation",
        cpaSection: "REG",
        objectives: ["Calculate ordinary income and separately stated items","Determine partner/shareholder basis","Apply loss limitation rules: basis, at-risk, passive activity"],
        keyFormula: "Partner Basis = Contribution + Income - Distributions - Losses + Liabilities",
        lesson: "<p>Pass-through entities do not pay entity-level tax. Ordinary income and separately stated items (capital gains, charitable contributions, tax-exempt income) pass through to owners' returns retaining their character.</p><p>Partner basis includes share of both recourse and nonrecourse liabilities. S corp shareholders do NOT include entity-level debt, only direct loans to the corporation. This is a critical difference.</p><p>Loss limitations apply sequentially: (1) basis, (2) at-risk, (3) passive activity. Passive losses offset only passive income. Material participation makes activity non-passive. Suspended losses carry forward.</p>",
        practiceTip: "Loss order: Basis, At-Risk, Passive. Partners include ALL debt in basis. S corp shareholders include only DIRECT loans."
      },
      {
        id: "business-law",
        title: "Business Law and Contracts",
        cpaSection: "REG",
        objectives: ["Identify elements of a valid contract","Apply the UCC to sales of goods","Understand agency law and principal/agent liability"],
        keyFormula: "Valid Contract = Offer + Acceptance + Consideration + Capacity + Legality",
        lesson: "<p>Contract elements: offer, acceptance, consideration, capacity, legality. Statute of Frauds requires writing for: goods over $500 (UCC), real property, contracts over one year, suretyship, marriage consideration (MY LEGS mnemonic).</p><p>UCC Article 2 governs goods. Merchant firm offers are binding without consideration for up to 3 months. Perfect tender rule allows rejection for any nonconformity. Risk of loss depends on shipping terms.</p><p>Agency: actual authority (express or implied), apparent authority (principal's representations to third parties). Respondeat superior: employer liable for employee torts within scope of employment. Independent contractor torts generally do not create principal liability.</p>",
        practiceTip: "Statute of Frauds (MY LEGS): Marriage, Year, Land, Executor, Goods over $500, Surety."
      },
      {
        id: "ethics-responsibility",
        title: "Professional and Legal Responsibilities",
        cpaSection: "REG",
        objectives: ["Describe CPA liability under common law and statutory law","Understand Securities Act 1933 and 1934 liability","Apply Circular 230 rules for IRS practice"],
        keyFormula: "1933 Act = Strict liability with due diligence defense; 1934 Act = Must prove scienter",
        lesson: "<p>Common law: CPA liable to clients for breach of contract, negligence, fraud. Third-party liability varies: Ultramares (privity required for negligence), Restatement (foreseen users), Foreseeable (anyone reasonably foreseeable).</p><p>Securities Act 1933 (registration): near-strict liability under Section 11. CPA must prove due diligence defense. Securities Exchange Act 1934 (reporting): plaintiff must prove scienter under Rule 10b-5.</p><p>Circular 230: due diligence required, reasonable basis for tax positions, cannot assist in tax evasion. Contingent fees generally prohibited for original returns. Violations: censure, suspension, disbarment, monetary penalties.</p>",
        practiceTip: "1933 Act = CPA must prove due diligence. 1934 Act = Plaintiff must prove scienter (intent). Know which act applies."
      },
      {
        id: "estate-gift-tax",
        title: "Estate and Gift Taxation",
        cpaSection: "REG",
        objectives: ["Calculate taxable estate and estate tax","Apply annual gift tax exclusion and lifetime exemption","Determine GST tax implications"],
        keyFormula: "Taxable Estate = Gross Estate - Deductions; Annual gift exclusion per donee per year",
        lesson: "<p>Gross estate includes all property with an interest at death, valued at FMV on date of death or alternate valuation date (6 months later). Deductions: unlimited marital (qualifying property to U.S. citizen spouse), unlimited charitable, debts, expenses.</p><p>Gift tax: annual exclusion per donee (currently $18,000, indexed). Married couples can gift-split. Direct tuition and medical payments are excluded regardless of amount if paid directly to the institution/provider.</p><p>Gifts exceeding annual exclusion reduce the lifetime exemption (unified with estate tax). GST tax applies to generation-skipping transfers with a separate exemption equal to the estate tax exemption. Top rate is 40%.</p>",
        practiceTip: "Marital deduction = UNLIMITED for U.S. citizen spouse. Direct tuition and medical payments are excluded entirely if paid to the provider."
      }
    ]
  },
  {
    level: 8,
    title: "Business Environment & Concepts",
    topics: [
      {
        id: "economics-strategy",
        title: "Economics, Strategy, and Globalization",
        cpaSection: "BEC",
        objectives: ["Apply microeconomic concepts: supply/demand, elasticity, market structures","Analyze macroeconomic indicators","Evaluate strategies using Porter's Five Forces"],
        keyFormula: "Price Elasticity of Demand = % Change in Quantity / % Change in Price",
        lesson: "<p>Microeconomics: supply and demand determine equilibrium. Elastic demand (>1) means quantity responds more than proportionally to price. Market structures: perfect competition (price takers), monopolistic competition, oligopoly, monopoly.</p><p>Macroeconomics: GDP, inflation (CPI), unemployment, interest rates. Federal Reserve uses monetary policy (open market operations, discount rate, reserve requirements). Fiscal policy is government spending and taxation.</p><p>Porter's Five Forces: new entrants, buyer power, supplier power, substitutes, rivalry. Generic strategies: cost leadership, differentiation, focus. SWOT: strengths, weaknesses, opportunities, threats. Balanced scorecard: financial, customer, internal processes, learning/growth.</p>",
        practiceTip: "Porter's Five Forces = INDUSTRY attractiveness. Generic Strategies = FIRM competitive position."
      },
      {
        id: "financial-management",
        title: "Financial Management",
        cpaSection: "BEC",
        objectives: ["Calculate WACC","Apply capital budgeting: NPV, IRR, payback","Analyze working capital management"],
        keyFormula: "WACC = (E/V x Re) + (D/V x Rd x (1-T)); NPV = Sum of CF/(1+r)^t - Initial Investment",
        lesson: "<p>WACC blends cost of equity (CAPM: Re = Rf + Beta x (Rm - Rf)) and after-tax cost of debt. NPV: positive means project adds value. IRR: discount rate making NPV zero. Accept when IRR exceeds WACC.</p><p>For mutually exclusive projects, NPV is preferred over IRR. Payback period ignores time value of money. Profitability index = PV of cash flows / initial investment; accept when PI > 1.</p><p>Working capital: cash conversion cycle = DIO + DSO - DPO. Key ratios: current ratio, quick ratio, inventory turnover. EOQ minimizes total inventory costs.</p>",
        practiceTip: "If NPV and IRR conflict for mutually exclusive projects, ALWAYS use NPV."
      },
      {
        id: "it-analytics",
        title: "Information Technology and Data Analytics",
        cpaSection: "BEC",
        objectives: ["Understand IT governance frameworks and controls","Describe data analytics techniques","Evaluate IT risks and business continuity"],
        keyFormula: "Analytics: Descriptive (what happened), Diagnostic (why), Predictive (what will), Prescriptive (what should)",
        lesson: "<p>IT governance: COBIT and ITIL frameworks. IT general controls: logical access, program change management, development (SDLC), computer operations. Application controls: input, processing, output validation.</p><p>Data analytics: descriptive (summarize past), diagnostic (identify causes), predictive (forecast), prescriptive (recommend actions). In auditing, analytics enables testing 100% of transactions and identifying anomalies.</p><p>IT risks: cybersecurity, data privacy (GDPR), system availability. BCP/DRP: RTO (max downtime), RPO (max data loss). Hot site (immediate), warm site (hours), cold site (days). Encryption and MFA are key controls.</p>",
        practiceTip: "RTO = Max downtime. RPO = Max data loss. Hot site = Fastest recovery. Cold site = Cheapest but slowest."
      },
      {
        id: "operations-management",
        title: "Operations and Process Management",
        cpaSection: "BEC",
        objectives: ["Apply cost management including ABC and variance analysis","Understand Lean and Six Sigma","Evaluate performance using financial and nonfinancial measures"],
        keyFormula: "Price Variance = (AP - SP) x AQ; Quantity Variance = (AQ - SQ) x SP",
        lesson: "<p>Traditional costing uses a single overhead rate; ABC uses multiple cost drivers for each activity, providing more accurate product costs. Theory of constraints focuses on managing bottlenecks.</p><p>Variance analysis: materials price variance = (AP - SP) x AQ. Materials quantity variance = (AQ - SQ) x SP. Labor rate and efficiency variances follow the same pattern. Overhead has spending, efficiency, budget, and volume variances.</p><p>Lean eliminates waste. Six Sigma targets 3.4 defects per million. Balanced scorecard integrates financial and nonfinancial measures. ERM under COSO takes a holistic approach to risk management integrated with strategy.</p>",
        practiceTip: "Price variances use ACTUAL quantity. Quantity variances use STANDARD price. Always isolate one variable at a time."
      }
    ]
  }
];

const QUESTION_BANK = [
  {id:1,level:1,topic:"accounting-equation",cpaSection:"Foundation",difficulty:1,prompt:"Which of the following represents the basic accounting equation?",choices:["Assets = Liabilities + Equity","Assets = Liabilities - Equity","Assets + Liabilities = Equity","Equity = Assets + Liabilities"],correct:0,explanation:"The basic accounting equation is Assets = Liabilities + Stockholders' Equity. This equation must always balance."},
  {id:2,level:1,topic:"accounting-equation",cpaSection:"Foundation",difficulty:1,prompt:"A company purchases equipment for $10,000 cash. What is the effect on the accounting equation?",choices:["Assets increase by $10,000","Total assets are unchanged","Assets decrease by $10,000","Liabilities increase by $10,000"],correct:1,explanation:"Cash (asset) decreases by $10,000 and Equipment (asset) increases by $10,000. Total assets remain unchanged because one asset was exchanged for another."},
  {id:3,level:1,topic:"accounting-equation",cpaSection:"Foundation",difficulty:2,prompt:"A company borrows $50,000 from a bank by signing a note payable. Which elements of the accounting equation are affected?",choices:["Assets and equity both increase","Assets increase and liabilities increase","Liabilities increase and equity decreases","Assets decrease and liabilities decrease"],correct:1,explanation:"Cash (asset) increases by $50,000 and Notes Payable (liability) increases by $50,000. The equation stays in balance."},
  {id:4,level:1,topic:"debits-credits",cpaSection:"Foundation",difficulty:1,prompt:"Which account has a normal debit balance?",choices:["Accounts Payable","Service Revenue","Common Stock","Equipment"],correct:3,explanation:"Equipment is an asset, and assets have normal debit balances. Liabilities, equity, and revenue accounts have normal credit balances."},
  {id:5,level:1,topic:"debits-credits",cpaSection:"Foundation",difficulty:1,prompt:"A credit entry to Accounts Payable will:",choices:["Decrease the account","Increase the account","Have no effect","Close the account"],correct:1,explanation:"Accounts Payable is a liability with a normal credit balance. A credit increases a liability account."},
  {id:6,level:1,topic:"debits-credits",cpaSection:"Foundation",difficulty:2,prompt:"Which of the following entries correctly records the receipt of cash from a customer paying on account?",choices:["Debit Cash, Credit Service Revenue","Debit Cash, Credit Accounts Receivable","Debit Accounts Receivable, Credit Cash","Debit Service Revenue, Credit Cash"],correct:1,explanation:"When collecting on an existing receivable, Cash increases (debit) and Accounts Receivable decreases (credit). Revenue was already recognized when earned."},
  {id:7,level:1,topic:"debits-credits",cpaSection:"Foundation",difficulty:2,prompt:"Treasury Stock has a normal balance that is a:",choices:["Debit, because it is a contra-equity account","Credit, because it is an equity account","Debit, because it is an asset","Credit, because it reduces liabilities"],correct:0,explanation:"Treasury Stock is a contra-equity account with a normal debit balance. It reduces total stockholders' equity."},
  {id:8,level:1,topic:"financial-statements",cpaSection:"Foundation",difficulty:1,prompt:"Which financial statement reports revenues and expenses?",choices:["Balance Sheet","Statement of Cash Flows","Income Statement","Statement of Stockholders' Equity"],correct:2,explanation:"The income statement reports revenues and expenses for a period of time, resulting in net income or net loss."},
  {id:9,level:1,topic:"financial-statements",cpaSection:"Foundation",difficulty:1,prompt:"The balance sheet is dated:",choices:["For a period of time","At a specific point in time","For the fiscal quarter","At the beginning of the period"],correct:1,explanation:"The balance sheet (statement of financial position) reports assets, liabilities, and equity as of a specific date, such as December 31, 2025."},
  {id:10,level:1,topic:"financial-statements",cpaSection:"Foundation",difficulty:2,prompt:"Which statement links the income statement to the balance sheet?",choices:["Statement of Cash Flows","Statement of Stockholders' Equity","Notes to the Financial Statements","Management Discussion and Analysis"],correct:1,explanation:"The statement of stockholders' equity shows how net income from the income statement flows into retained earnings, which appears on the balance sheet."},
  {id:11,level:1,topic:"journal-entries",cpaSection:"Foundation",difficulty:1,prompt:"In a journal entry, which is listed first?",choices:["Credits","Debits","The date","The explanation"],correct:1,explanation:"In standard journal entry format, debits are listed first (flush left), followed by credits (indented). The date precedes the entry, and an explanation follows."},
  {id:12,level:1,topic:"journal-entries",cpaSection:"Foundation",difficulty:2,prompt:"A trial balance that is in balance guarantees that:",choices:["All transactions were recorded correctly","No errors exist in the ledger","Total debits equal total credits","All accounts have correct balances"],correct:2,explanation:"A balanced trial balance only proves that total debits equal total credits. It does not detect errors of omission, commission, or original entry."},
  {id:13,level:1,topic:"journal-entries",cpaSection:"Foundation",difficulty:2,prompt:"A compound journal entry involves:",choices:["Exactly two accounts","More than two accounts","Only debit entries","Entries in multiple journals"],correct:1,explanation:"A compound journal entry affects more than two accounts. Despite having multiple debits and/or credits, total debits must still equal total credits."},
  {id:14,level:1,topic:"adjusting-entries",cpaSection:"Foundation",difficulty:1,prompt:"Adjusting entries always involve:",choices:["At least one income statement account and one balance sheet account","Only income statement accounts","Only balance sheet accounts","A debit to Cash"],correct:0,explanation:"Adjusting entries pair a balance sheet account with an income statement account. They never involve Cash."},
  {id:15,level:1,topic:"adjusting-entries",cpaSection:"Foundation",difficulty:2,prompt:"On December 31, a company has earned $3,000 of service revenue that has not been billed. The adjusting entry is:",choices:["Debit Cash $3,000, Credit Service Revenue $3,000","Debit Service Revenue $3,000, Credit Accounts Receivable $3,000","Debit Accounts Receivable $3,000, Credit Service Revenue $3,000","Debit Unearned Revenue $3,000, Credit Service Revenue $3,000"],correct:2,explanation:"This is an accrued revenue. Revenue has been earned but not yet received, so debit Accounts Receivable and credit Service Revenue."},
  {id:16,level:1,topic:"adjusting-entries",cpaSection:"Foundation",difficulty:2,prompt:"A company paid $12,000 for a one-year insurance policy on July 1. On December 31, the adjusting entry includes:",choices:["Debit Insurance Expense $12,000","Debit Insurance Expense $6,000","Debit Prepaid Insurance $6,000","Debit Insurance Expense $1,000"],correct:1,explanation:"Six months have expired (July-December). The adjusting entry debits Insurance Expense and credits Prepaid Insurance for $6,000 ($12,000 x 6/12)."},
  {id:17,level:1,topic:"closing-process",cpaSection:"Foundation",difficulty:1,prompt:"Which of the following is a temporary account?",choices:["Accounts Receivable","Retained Earnings","Service Revenue","Equipment"],correct:2,explanation:"Service Revenue is a temporary account that is closed to Retained Earnings at the end of the period. Assets, liabilities, and equity (except Dividends) are permanent accounts."},
  {id:18,level:1,topic:"closing-process",cpaSection:"Foundation",difficulty:2,prompt:"After closing entries are posted, which accounts have zero balances?",choices:["All accounts","Only expense accounts","Revenue, expense, and dividend accounts","Only revenue accounts"],correct:2,explanation:"All temporary accounts (revenues, expenses, and dividends) are closed to Retained Earnings and have zero balances after closing."},
  {id:19,level:1,topic:"closing-process",cpaSection:"Foundation",difficulty:2,prompt:"The post-closing trial balance should contain only:",choices:["Temporary accounts","Permanent accounts","Revenue and expense accounts","All ledger accounts"],correct:1,explanation:"After closing, only permanent accounts (assets, liabilities, equity) remain with balances and appear on the post-closing trial balance."},
  {id:20,level:2,topic:"cash-receivables",cpaSection:"FAR",difficulty:2,prompt:"Under the allowance method, when a specific account is written off, the effect on total assets is:",choices:["A decrease","An increase","No effect","Depends on the amount"],correct:2,explanation:"Writing off an account debits Allowance for Doubtful Accounts (contra-asset increases, reducing A/R) and credits Accounts Receivable. Net realizable value and total assets are unchanged."},
  {id:21,level:2,topic:"cash-receivables",cpaSection:"FAR",difficulty:2,prompt:"A company uses the aging method and determines the required Allowance for Doubtful Accounts balance is $8,000. The existing credit balance in the allowance is $2,000. Bad debt expense for the period is:",choices:["$8,000","$6,000","$2,000","$10,000"],correct:1,explanation:"Under the aging (balance sheet) approach, the required ending balance is $8,000. Since there is already a $2,000 credit balance, the adjustment is $6,000 ($8,000 - $2,000)."},
  {id:22,level:2,topic:"cash-receivables",cpaSection:"FAR",difficulty:3,prompt:"A company factors $100,000 of receivables without recourse. The factor charges a 3% fee and retains 5% as a holdback. The entry includes a credit to Accounts Receivable of:",choices:["$100,000","$92,000","$95,000","$97,000"],correct:0,explanation:"The entire $100,000 of receivables is removed from the books (credit A/R $100,000). Cash received is $92,000 ($100,000 - $3,000 fee - $5,000 holdback), with a receivable from factor of $5,000 and a loss of $3,000."},
  {id:23,level:2,topic:"inventory-methods",cpaSection:"FAR",difficulty:2,prompt:"During a period of rising prices, which inventory method results in the lowest net income?",choices:["FIFO","LIFO","Weighted average","Specific identification"],correct:1,explanation:"Under LIFO with rising prices, the newest (highest) costs are assigned to COGS, resulting in the highest COGS and lowest net income."},
  {id:24,level:2,topic:"inventory-methods",cpaSection:"FAR",difficulty:2,prompt:"If ending inventory is overstated, then net income for the current period is:",choices:["Overstated","Understated","Unaffected","Cannot be determined"],correct:0,explanation:"Overstated ending inventory means COGS is understated (COGS = BI + Purchases - EI). Lower COGS means higher net income. The error self-corrects in the next period."},
  {id:25,level:2,topic:"inventory-methods",cpaSection:"FAR",difficulty:3,prompt:"Under lower of cost or net realizable value (LC-NRV), net realizable value is defined as:",choices:["Replacement cost","Selling price minus costs to complete and sell","Selling price minus normal profit margin","Fair value minus costs to sell"],correct:1,explanation:"NRV is the estimated selling price in the ordinary course of business minus reasonably predictable costs of completion, disposal, and transportation."},
  {id:26,level:2,topic:"fixed-assets",cpaSection:"FAR",difficulty:2,prompt:"Which of the following costs should be capitalized as part of equipment cost?",choices:["Repairs and maintenance","Sales tax on purchase","Insurance after installation","Operator training costs"],correct:1,explanation:"Costs necessary to acquire the asset and prepare it for use are capitalized, including purchase price, sales tax, shipping, and installation. Ongoing repairs and training are expensed."},
  {id:27,level:2,topic:"fixed-assets",cpaSection:"FAR",difficulty:2,prompt:"Equipment costing $50,000 with a $5,000 salvage value and 5-year useful life. Under straight-line depreciation, annual depreciation is:",choices:["$10,000","$9,000","$12,500","$8,000"],correct:1,explanation:"Straight-line depreciation = (Cost - Salvage) / Life = ($50,000 - $5,000) / 5 = $9,000 per year."},
  {id:28,level:2,topic:"fixed-assets",cpaSection:"FAR",difficulty:3,prompt:"Under ASC 360, the first step in testing a long-lived asset for impairment is:",choices:["Compare carrying amount to fair value","Compare carrying amount to undiscounted future cash flows","Compare fair value to present value of cash flows","Compare replacement cost to carrying amount"],correct:1,explanation:"Step 1 (recoverability test): Compare carrying amount to undiscounted future cash flows. If carrying amount exceeds undiscounted cash flows, proceed to Step 2: measure impairment as carrying amount minus fair value."},
  {id:29,level:2,topic:"current-liabilities",cpaSection:"FAR",difficulty:2,prompt:"A contingent loss that is reasonably possible should be:",choices:["Accrued as a liability","Disclosed in the notes only","Ignored entirely","Recorded as an expense"],correct:1,explanation:"Under ASC 450, losses that are reasonably possible (more than remote but less than probable) are disclosed in the notes but not accrued."},
  {id:30,level:2,topic:"current-liabilities",cpaSection:"FAR",difficulty:2,prompt:"A $10,000, 90-day, 6% note payable is issued on November 1. Accrued interest at December 31 is:",choices:["$600","$150","$100","$300"],correct:2,explanation:"Interest = $10,000 x 6% x 60/360 = $100. Two months (November 1 to December 31 = 60 days using 360-day year) of interest has accrued."},
  {id:31,level:2,topic:"payroll-accounting",cpaSection:"FAR",difficulty:2,prompt:"Which payroll tax is paid by the employer only?",choices:["Social Security (OASDI)","Medicare","Federal Unemployment Tax (FUTA)","Federal income tax withholding"],correct:2,explanation:"FUTA is paid only by the employer. Social Security and Medicare are paid by both employer and employee. Federal income tax is withheld from the employee only."},
  {id:32,level:2,topic:"payroll-accounting",cpaSection:"FAR",difficulty:2,prompt:"An employee earns $2,000 gross pay. FICA is 7.65% and federal income tax withheld is $300. Net pay is:",choices:["$1,547","$1,700","$2,000","$1,847"],correct:0,explanation:"Net pay = $2,000 - ($2,000 x 7.65%) - $300 = $2,000 - $153 - $300 = $1,547."},
  {id:33,level:2,topic:"bank-reconciliation",cpaSection:"FAR",difficulty:1,prompt:"Outstanding checks should be:",choices:["Added to the bank balance","Subtracted from the bank balance","Added to the book balance","Subtracted from the book balance"],correct:1,explanation:"Outstanding checks have been recorded by the company but not yet cleared the bank. They are subtracted from the bank balance to arrive at the adjusted balance."},
  {id:34,level:2,topic:"bank-reconciliation",cpaSection:"FAR",difficulty:2,prompt:"An NSF check returned by the bank requires the company to:",choices:["Debit Cash, Credit Accounts Receivable","Debit Accounts Receivable, Credit Cash","Debit Bank Charges Expense, Credit Cash","No entry needed"],correct:1,explanation:"An NSF check means the customer's check bounced. The company reverses the original deposit: debit Accounts Receivable (reinstating the amount owed), credit Cash."},
  {id:35,level:2,topic:"bank-reconciliation",cpaSection:"FAR",difficulty:2,prompt:"Which reconciling item does NOT require a journal entry by the company?",choices:["Bank service charges","NSF checks","Deposits in transit","Interest earned on bank account"],correct:2,explanation:"Deposits in transit adjust the bank balance, not the book balance. The company has already recorded the deposit. No additional journal entry is needed."},
  {id:36,level:3,topic:"revenue-recognition",cpaSection:"FAR",difficulty:2,prompt:"Under ASC 606, revenue is recognized when:",choices:["Cash is received","A contract is signed","Control of goods or services transfers to the customer","The earnings process is complete"],correct:2,explanation:"ASC 606 recognizes revenue when (or as) performance obligations are satisfied by transferring control of goods or services to the customer."},
  {id:37,level:3,topic:"revenue-recognition",cpaSection:"FAR",difficulty:3,prompt:"A company sells a product bundled with a 2-year service contract for $12,000. Standalone selling prices are $8,000 (product) and $6,000 (service). Revenue allocated to the product is:",choices:["$8,000","$6,857","$6,000","$12,000"],correct:1,explanation:"Allocate based on relative standalone selling prices: Product = $12,000 x ($8,000 / $14,000) = $6,857. Service = $12,000 x ($6,000 / $14,000) = $5,143."},
  {id:38,level:3,topic:"revenue-recognition",cpaSection:"FAR",difficulty:3,prompt:"Under the five-step model, variable consideration is included in the transaction price subject to:",choices:["The constraint (revenue reversal not probable)","Customer approval","Full receipt of payment","Completion of the contract"],correct:0,explanation:"Variable consideration is included to the extent that it is probable that a significant reversal of cumulative revenue recognized will not occur when the uncertainty is resolved."},
  {id:39,level:3,topic:"bonds-debt",cpaSection:"FAR",difficulty:2,prompt:"A bond with a stated rate of 5% is issued when the market rate is 6%. The bond is issued at:",choices:["A premium","Par","A discount","Cannot be determined"],correct:2,explanation:"When the stated rate is less than the market rate, investors pay less than face value (discount) to achieve the higher effective yield."},
  {id:40,level:3,topic:"bonds-debt",cpaSection:"FAR",difficulty:3,prompt:"A $100,000 bond issued at 97 with a 10-year term. Using straight-line amortization, annual discount amortization is:",choices:["$3,000","$300","$9,700","$970"],correct:1,explanation:"Discount = $100,000 - $97,000 = $3,000. Annual amortization = $3,000 / 10 years = $300 per year."},
  {id:41,level:3,topic:"bonds-debt",cpaSection:"FAR",difficulty:3,prompt:"Under the effective interest method, interest expense on a bond issued at a premium will:",choices:["Increase over the bond's life","Decrease over the bond's life","Remain constant","Equal the cash interest payment"],correct:1,explanation:"For a premium bond, the carrying amount decreases over time. Since interest expense = carrying amount x market rate, expense decreases each period."},
  {id:42,level:3,topic:"stockholders-equity",cpaSection:"FAR",difficulty:2,prompt:"A company issues 1,000 shares of $1 par value common stock for $15 per share. The credit to APIC is:",choices:["$1,000","$14,000","$15,000","$16,000"],correct:1,explanation:"Common Stock is credited for par value ($1 x 1,000 = $1,000). APIC is credited for the excess ($15 - $1) x 1,000 = $14,000."},
  {id:43,level:3,topic:"stockholders-equity",cpaSection:"FAR",difficulty:2,prompt:"A 10% stock dividend is considered a:",choices:["Large stock dividend, recorded at par value","Small stock dividend, recorded at fair market value","Stock split","Neither a dividend nor a split"],correct:1,explanation:"Stock dividends less than 20-25% are considered small and recorded at fair market value. Retained Earnings is debited for the total FMV of new shares issued."},
  {id:44,level:3,topic:"stockholders-equity",cpaSection:"FAR",difficulty:3,prompt:"Treasury stock reissued below its cost under the cost method requires a debit to:",choices:["Loss on Sale of Treasury Stock","APIC - Treasury Stock (then Retained Earnings if insufficient)","Treasury Stock","Common Stock"],correct:1,explanation:"When treasury stock is reissued below cost, the difference is debited to APIC - Treasury Stock. If APIC - Treasury Stock is insufficient, the remaining debit goes to Retained Earnings."},
  {id:45,level:3,topic:"investments",cpaSection:"FAR",difficulty:2,prompt:"Unrealized gains and losses on trading securities are reported in:",choices:["Other comprehensive income","Net income","Retained earnings directly","Not reported until realized"],correct:1,explanation:"Trading securities are held for short-term profit. Unrealized gains and losses are included in net income each period."},
  {id:46,level:3,topic:"investments",cpaSection:"FAR",difficulty:2,prompt:"Under the equity method, when the investee declares dividends, the investor:",choices:["Credits dividend revenue","Credits the investment account","Debits dividend revenue","No entry is needed"],correct:1,explanation:"Under the equity method, dividends are a return of investment, not revenue. The investor debits Cash and credits the Investment account."},
  {id:47,level:3,topic:"investments",cpaSection:"FAR",difficulty:3,prompt:"An investor using the equity method paid $500,000 for a 30% interest in a company with net assets of $1,200,000. The excess paid over book value attributed to equipment (10-year life) is:",choices:["$140,000","$500,000","$360,000","$100,000"],correct:0,explanation:"Book value of 30% = $1,200,000 x 30% = $360,000. Excess = $500,000 - $360,000 = $140,000 attributed to equipment (to be amortized over 10 years at $14,000/year)."},
  {id:48,level:3,topic:"cash-flows",cpaSection:"FAR",difficulty:2,prompt:"Under U.S. GAAP, interest paid is classified as:",choices:["Operating activity","Investing activity","Financing activity","Can be either operating or financing"],correct:0,explanation:"Under U.S. GAAP, interest paid and received are classified as operating activities. This differs from IFRS, which allows more flexibility."},
  {id:49,level:3,topic:"cash-flows",cpaSection:"FAR",difficulty:2,prompt:"Depreciation expense is added back to net income under the indirect method because:",choices:["It represents a cash inflow","It represents a cash outflow","It reduced net income but did not use cash","It increases cash from investing"],correct:2,explanation:"Depreciation is a noncash expense that reduced net income. Adding it back adjusts net income toward cash basis for the operating section."},
  {id:50,level:3,topic:"cash-flows",cpaSection:"FAR",difficulty:3,prompt:"A decrease in accounts receivable is shown on the indirect method cash flow statement as:",choices:["A subtraction from net income","An addition to net income","An investing activity","A financing activity"],correct:1,explanation:"A decrease in A/R means the company collected more cash than it recognized in revenue. This is added to net income under the indirect method."},
  {id:51,level:3,topic:"earnings-per-share",cpaSection:"FAR",difficulty:2,prompt:"A company has net income of $200,000 and 100,000 weighted-average common shares. Preferred dividends are $20,000. Basic EPS is:",choices:["$2.00","$1.80","$2.20","$1.60"],correct:1,explanation:"Basic EPS = (Net Income - Preferred Dividends) / Weighted-Average Shares = ($200,000 - $20,000) / 100,000 = $1.80."},
  {id:52,level:3,topic:"earnings-per-share",cpaSection:"FAR",difficulty:3,prompt:"Stock options are dilutive when the exercise price is:",choices:["Above the average market price","Equal to the average market price","Below the average market price","Below the par value"],correct:2,explanation:"Under the treasury stock method, options are dilutive when the exercise price is below the average market price because more shares are issued than could be repurchased."},
  {id:53,level:3,topic:"earnings-per-share",cpaSection:"FAR",difficulty:3,prompt:"A 2-for-1 stock split occurs on July 1. For EPS calculation, the weighted-average shares should:",choices:["Be adjusted only for shares after July 1","Be retroactively adjusted as if the split occurred at the beginning of the period","Not be adjusted for the split","Be adjusted only in the next fiscal year"],correct:1,explanation:"Stock splits and stock dividends are applied retroactively for all periods presented in the EPS calculation as if they occurred at the beginning of the earliest period."},
  {id:54,level:4,topic:"leases",cpaSection:"FAR",difficulty:2,prompt:"Under ASC 842, a lessee must recognize a right-of-use asset and lease liability for:",choices:["Finance leases only","Operating leases only","Both finance and operating leases with terms over 12 months","Only leases that transfer ownership"],correct:2,explanation:"ASC 842 requires lessees to recognize ROU assets and lease liabilities for virtually all leases with terms greater than 12 months, regardless of classification."},
  {id:55,level:4,topic:"leases",cpaSection:"FAR",difficulty:3,prompt:"For a finance lease, the total expense recognized in the first year is typically:",choices:["Less than for an operating lease","Equal to an operating lease","Greater than for an operating lease","Zero"],correct:2,explanation:"Finance leases have a front-loaded expense pattern (higher interest expense early on plus straight-line amortization), while operating leases have straight-line total expense."},
  {id:56,level:4,topic:"leases",cpaSection:"FAR",difficulty:3,prompt:"A lease meets none of the five finance lease criteria. The lessee classifies it as:",choices:["A finance lease","An operating lease","Not a lease","A sales-type lease"],correct:1,explanation:"If a lease does not meet any of the five criteria (ownership transfer, purchase option, major part of life, substantially all of FV, specialized asset), it is an operating lease."},
  {id:57,level:4,topic:"pensions",cpaSection:"FAR",difficulty:3,prompt:"Which component of net periodic pension cost is reported in operating income?",choices:["Interest cost","Expected return on plan assets","Service cost","Amortization of prior service cost"],correct:2,explanation:"Under ASC 715, only service cost is reported as an operating expense. All other components are reported in non-operating income."},
  {id:58,level:4,topic:"pensions",cpaSection:"FAR",difficulty:3,prompt:"The funded status of a pension plan is:",choices:["PBO minus accumulated benefit obligation","Fair value of plan assets minus PBO","PBO minus fair value of plan assets","Service cost minus interest cost"],correct:1,explanation:"Funded status = Fair value of plan assets - PBO. If positive, it is a net pension asset. If negative, it is a net pension liability reported on the balance sheet."},
  {id:59,level:4,topic:"pensions",cpaSection:"FAR",difficulty:4,prompt:"The corridor approach for amortizing actuarial gains and losses uses a threshold of:",choices:["5% of the greater of PBO or plan assets","10% of the greater of PBO or plan assets","10% of PBO only","15% of plan assets only"],correct:1,explanation:"Only the net actuarial gain or loss exceeding 10% of the greater of the beginning PBO or beginning fair value of plan assets is amortized."},
  {id:60,level:4,topic:"income-taxes",cpaSection:"FAR",difficulty:2,prompt:"A temporary difference creates a deferred tax liability when:",choices:["Book income exceeds taxable income currently","Taxable income exceeds book income currently","A permanent difference exists","Tax rates decrease"],correct:0,explanation:"When book income exceeds taxable income (e.g., accelerated tax depreciation), the company has paid less tax now and will pay more later, creating a deferred tax liability."},
  {id:61,level:4,topic:"income-taxes",cpaSection:"FAR",difficulty:2,prompt:"Which of the following is a permanent difference?",choices:["Depreciation difference between tax and book","Warranty expense accrual","Tax-exempt municipal bond interest","Installment sales"],correct:2,explanation:"Municipal bond interest is never taxable and creates a permanent difference. It does not create deferred taxes and causes the effective rate to differ from the statutory rate."},
  {id:62,level:4,topic:"income-taxes",cpaSection:"FAR",difficulty:3,prompt:"A deferred tax asset requires a valuation allowance when:",choices:["The tax rate changes","It is more likely than not that some or all of the DTA will not be realized","The DTA exceeds the DTL","The company has positive taxable income"],correct:1,explanation:"A valuation allowance is required when it is more likely than not (>50% probability) that some or all of the DTA will not be realized based on available evidence."},
  {id:63,level:4,topic:"accounting-changes",cpaSection:"FAR",difficulty:2,prompt:"A change in accounting principle is generally applied:",choices:["Prospectively","Retrospectively","Currently","Only to future transactions"],correct:1,explanation:"Under ASC 250, a change in accounting principle (e.g., LIFO to FIFO) is applied retrospectively by adjusting prior period financial statements and beginning retained earnings."},
  {id:64,level:4,topic:"accounting-changes",cpaSection:"FAR",difficulty:2,prompt:"A change in the estimated useful life of equipment is treated as a:",choices:["Change in accounting principle","Change in estimate","Error correction","Change in reporting entity"],correct:1,explanation:"Revising useful life or salvage value is a change in estimate, applied prospectively. Only current and future periods are affected."},
  {id:65,level:4,topic:"accounting-changes",cpaSection:"FAR",difficulty:3,prompt:"An error discovered in previously issued financial statements is corrected by:",choices:["Prospective adjustment","Retrospective restatement of prior periods","Current period adjustment only","No adjustment needed"],correct:1,explanation:"Material errors in previously issued financial statements require restatement (prior period adjustment). The cumulative effect is adjusted through beginning retained earnings."},
  {id:66,level:4,topic:"contingencies",cpaSection:"FAR",difficulty:2,prompt:"A gain contingency should be:",choices:["Accrued when probable","Disclosed when probable, but never accrued","Accrued when reasonably estimable","Neither accrued nor disclosed"],correct:1,explanation:"Gain contingencies are disclosed when realization is probable but are never accrued. This conservative treatment prevents premature recognition of income."},
  {id:67,level:4,topic:"contingencies",cpaSection:"FAR",difficulty:3,prompt:"A probable loss is estimated to be between $100,000 and $500,000 with no amount more likely. The amount to accrue is:",choices:["$500,000","$300,000","$100,000","$0"],correct:2,explanation:"When a range of loss exists and no amount is more likely than any other, the minimum of the range ($100,000) is accrued. The full range should be disclosed."},
  {id:68,level:4,topic:"fair-value",cpaSection:"FAR",difficulty:2,prompt:"Level 1 inputs in the fair value hierarchy are:",choices:["Unobservable inputs","Observable inputs for similar assets","Quoted prices in active markets for identical assets or liabilities","Management estimates"],correct:2,explanation:"Level 1 inputs are the most reliable: quoted prices in active markets for identical assets or liabilities, such as stock prices on a major exchange."},
  {id:69,level:4,topic:"fair-value",cpaSection:"FAR",difficulty:3,prompt:"Fair value under ASC 820 is defined as:",choices:["The replacement cost of an asset","The entry price in a current transaction","The exit price in an orderly transaction between market participants","The present value of future cash flows"],correct:2,explanation:"ASC 820 defines fair value as an exit price: the price that would be received to sell an asset or paid to transfer a liability in an orderly transaction at the measurement date."},
  {id:70,level:4,topic:"fair-value",cpaSection:"FAR",difficulty:3,prompt:"Level 3 inputs in the fair value hierarchy include:",choices:["Quoted market prices","Interest rates and yield curves","Unobservable inputs reflecting the entity's own assumptions","Prices of similar assets in active markets"],correct:2,explanation:"Level 3 inputs are unobservable and based on the entity's own assumptions about what market participants would use, such as projected cash flows in a DCF model."},
  {id:71,level:5,topic:"consolidations",cpaSection:"FAR",difficulty:3,prompt:"Under the acquisition method (ASC 805), acquisition-related costs are:",choices:["Capitalized as part of goodwill","Added to the investment balance","Expensed as incurred","Deferred and amortized"],correct:2,explanation:"Acquisition-related costs such as legal fees, due diligence costs, and advisory fees are expensed as incurred under ASC 805. They are not capitalized."},
  {id:72,level:5,topic:"consolidations",cpaSection:"FAR",difficulty:3,prompt:"Goodwill is calculated as:",choices:["Fair value of net assets minus purchase price","Purchase price minus book value of net assets","Purchase price minus fair value of identifiable net assets acquired","Fair value of total assets minus total liabilities"],correct:2,explanation:"Goodwill = Consideration transferred + FV of NCI - Fair value of identifiable net assets acquired. This represents the premium paid for unidentifiable intangible value."},
  {id:73,level:5,topic:"consolidations",cpaSection:"FAR",difficulty:4,prompt:"In a consolidated balance sheet, intercompany receivables and payables are:",choices:["Reported separately","Eliminated","Reported net","Disclosed in footnotes only"],correct:1,explanation:"All intercompany balances (receivables, payables, investments, equity) must be eliminated in consolidation because the consolidated entity cannot owe itself."},
  {id:74,level:5,topic:"foreign-currency",cpaSection:"FAR",difficulty:3,prompt:"Under the current rate method, the translation adjustment is reported in:",choices:["Net income","Other comprehensive income","Retained earnings directly","As a separate asset"],correct:1,explanation:"When using the current rate method (functional currency = local currency), the translation adjustment is reported in OCI as part of accumulated other comprehensive income (AOCI)."},
  {id:75,level:5,topic:"foreign-currency",cpaSection:"FAR",difficulty:3,prompt:"The temporal method is used when the subsidiary's functional currency is:",choices:["The local currency","The reporting (parent's) currency","Any foreign currency","Determined by management election"],correct:1,explanation:"When the functional currency is the parent's currency (e.g., USD), remeasurement using the temporal method is required. This commonly occurs in highly inflationary economies."},
  {id:76,level:5,topic:"foreign-currency",cpaSection:"FAR",difficulty:3,prompt:"Under the temporal method, which items are remeasured at historical rates?",choices:["Cash and receivables","Inventory at cost, PP&E, and equity accounts","All assets and liabilities","Revenue and expense accounts"],correct:1,explanation:"Under the temporal method, nonmonetary items (inventory at cost, PP&E, intangibles, equity) are remeasured at historical exchange rates. Monetary items use the current rate."},
  {id:77,level:5,topic:"partnerships",cpaSection:"FAR",difficulty:2,prompt:"A partner contributes equipment with a book value of $10,000 and fair value of $15,000 to a partnership. The partnership records the equipment at:",choices:["$10,000","$12,500","$15,000","The average of book and fair value"],correct:2,explanation:"Assets contributed to a partnership are recorded at their fair market value at the date of contribution, not the partner's book value."},
  {id:78,level:5,topic:"partnerships",cpaSection:"FAR",difficulty:3,prompt:"If the partnership agreement does not specify how to allocate losses, losses are divided:",choices:["Equally","In the same ratio as income","Based on capital balances","Based on time devoted"],correct:1,explanation:"Under the Uniform Partnership Act, if the agreement specifies the income ratio but is silent on losses, losses are divided in the same ratio as income."},
  {id:79,level:5,topic:"governmental-accounting",cpaSection:"FAR",difficulty:2,prompt:"Governmental funds use which basis of accounting?",choices:["Full accrual","Modified accrual","Cash basis","Tax basis"],correct:1,explanation:"Governmental funds use modified accrual accounting: revenues recognized when measurable and available; expenditures recognized when the liability is incurred (with certain exceptions)."},
  {id:80,level:5,topic:"governmental-accounting",cpaSection:"FAR",difficulty:3,prompt:"Under modified accrual accounting, property tax revenue is recognized when:",choices:["The tax is levied","The tax is collected","The tax is measurable and available","The fiscal year begins"],correct:2,explanation:"Under modified accrual, revenue is recognized when measurable and available (collectible within the current period or soon enough to pay current liabilities, typically 60 days)."},
  {id:81,level:5,topic:"governmental-accounting",cpaSection:"FAR",difficulty:3,prompt:"Government-wide financial statements use:",choices:["Modified accrual basis and current financial resources focus","Full accrual basis and economic resources focus","Cash basis","Fund accounting"],correct:1,explanation:"Government-wide statements use full accrual accounting and the economic resources measurement focus, similar to commercial accounting, for governmental and business-type activities."},
  {id:82,level:5,topic:"nonprofit-accounting",cpaSection:"FAR",difficulty:2,prompt:"Under ASC 958, net assets of a not-for-profit are classified as:",choices:["Unrestricted, temporarily restricted, and permanently restricted","With donor restrictions and without donor restrictions","Restricted and unrestricted","Net assets are not classified for NFPs"],correct:1,explanation:"Current ASC 958 classifies net assets into two categories: with donor restrictions and without donor restrictions (the three-category system was replaced)."},
  {id:83,level:5,topic:"nonprofit-accounting",cpaSection:"FAR",difficulty:3,prompt:"A conditional promise to give is recognized as revenue when:",choices:["The promise is made","The conditions are substantially met","Cash is received","The fiscal year ends"],correct:1,explanation:"Conditional promises are not recognized until the conditions (barriers) are substantially met and the right of return or release is removed. Then they become unconditional."},
  {id:84,level:6,topic:"audit-planning",cpaSection:"AUD",difficulty:2,prompt:"The audit risk model states that Audit Risk equals:",choices:["Inherent Risk + Control Risk + Detection Risk","Inherent Risk x Control Risk x Detection Risk","Control Risk / Detection Risk","Inherent Risk - Detection Risk"],correct:1,explanation:"AR = IR x CR x DR. This multiplicative model shows that audit risk is the combined probability of all three risk components."},
  {id:85,level:6,topic:"audit-planning",cpaSection:"AUD",difficulty:2,prompt:"Detection risk is the risk that:",choices:["A material misstatement exists in an assertion","Internal controls fail to prevent a misstatement","The auditor's procedures fail to detect a material misstatement","The engagement partner makes an error"],correct:2,explanation:"Detection risk is the risk that audit procedures will not detect a material misstatement. It is the only component of audit risk that the auditor can directly control."},
  {id:86,level:6,topic:"audit-planning",cpaSection:"AUD",difficulty:3,prompt:"When inherent risk and control risk are assessed as high, the auditor should:",choices:["Reduce detection risk by performing more substantive procedures","Increase detection risk to save time","Issue a qualified opinion","Withdraw from the engagement"],correct:0,explanation:"High IR and CR require low DR to maintain acceptable audit risk. The auditor achieves low DR by increasing the nature, timing, and extent of substantive procedures."},
  {id:87,level:6,topic:"internal-controls",cpaSection:"AUD",difficulty:2,prompt:"The COSO framework identifies how many components of internal control?",choices:["Three","Four","Five","Six"],correct:2,explanation:"COSO identifies five components: Control Environment, Risk Assessment, Control Activities, Information and Communication, and Monitoring Activities."},
  {id:88,level:6,topic:"internal-controls",cpaSection:"AUD",difficulty:3,prompt:"A material weakness in internal control requires the auditor to issue what type of opinion on ICFR?",choices:["Unmodified","Qualified","Adverse","Disclaimer"],correct:2,explanation:"The existence of a material weakness requires an adverse opinion on internal control over financial reporting (ICFR), even if the financial statement opinion is unmodified."},
  {id:89,level:6,topic:"internal-controls",cpaSection:"AUD",difficulty:3,prompt:"Which of the following is an example of a preventive control?",choices:["Bank reconciliation","Segregation of duties","Variance analysis","Physical inventory count"],correct:1,explanation:"Segregation of duties prevents one person from having incompatible functions (authorization, custody, recording). Bank reconciliations and variance analysis are detective controls."},
  {id:90,level:6,topic:"evidence-gathering",cpaSection:"AUD",difficulty:2,prompt:"Which type of audit evidence is most reliable?",choices:["Oral representations from management","Internally generated documents","External confirmations received directly by the auditor","Photocopies of invoices"],correct:2,explanation:"Evidence from external, independent sources obtained directly by the auditor (such as bank confirmations) is considered the most reliable type of audit evidence."},
  {id:91,level:6,topic:"evidence-gathering",cpaSection:"AUD",difficulty:2,prompt:"To test the existence assertion for accounts receivable, the auditor would:",choices:["Trace from shipping documents to sales journal","Vouch from the accounts receivable subsidiary ledger to supporting invoices","Inspect the physical inventory","Review the cash disbursements journal"],correct:1,explanation:"Vouching (going from recorded amounts back to supporting documents) tests existence/occurrence. Tracing (from documents to the books) tests completeness."},
  {id:92,level:6,topic:"evidence-gathering",cpaSection:"AUD",difficulty:3,prompt:"Analytical procedures are required during which phases of the audit?",choices:["Planning only","Substantive testing only","Planning and overall review","All three phases"],correct:2,explanation:"Analytical procedures are required during planning (to identify areas of risk) and the overall review stage (to assess conclusions). They are optional as substantive procedures."},
  {id:93,level:6,topic:"audit-reporting",cpaSection:"AUD",difficulty:2,prompt:"A qualified opinion contains the phrase:",choices:["'do not present fairly'","'except for'","'we do not express an opinion'","'present fairly in all material respects'"],correct:1,explanation:"A qualified opinion states that the financial statements present fairly 'except for' the effects of the matter giving rise to the qualification."},
  {id:94,level:6,topic:"audit-reporting",cpaSection:"AUD",difficulty:2,prompt:"A disclaimer of opinion is issued when:",choices:["The financial statements are materially misstated","The auditor lacks independence","The scope limitation is material and pervasive","The entity is a going concern"],correct:2,explanation:"A disclaimer is issued when the auditor cannot obtain sufficient appropriate evidence and the possible effects are material and pervasive. Lack of independence also results in a disclaimer."},
  {id:95,level:6,topic:"audit-reporting",cpaSection:"AUD",difficulty:3,prompt:"Going concern uncertainty results in what modification to the standard report?",choices:["Qualified opinion","Adverse opinion","Emphasis-of-matter paragraph (unmodified opinion maintained)","Disclaimer of opinion"],correct:2,explanation:"When substantial doubt exists about going concern, the auditor adds an emphasis-of-matter paragraph but maintains an unmodified opinion if disclosures are adequate."},
  {id:96,level:6,topic:"professional-ethics",cpaSection:"AUD",difficulty:2,prompt:"Independence is required for which type of engagement?",choices:["Tax preparation","Consulting","Attestation (audit, review, examination)","All CPA services"],correct:2,explanation:"Independence is required for attestation engagements including audits, reviews, and examinations. It is not required for tax, consulting, or compilation engagements."},
  {id:97,level:6,topic:"professional-ethics",cpaSection:"AUD",difficulty:2,prompt:"Any direct financial interest in an attest client:",choices:["Is acceptable if immaterial","Impairs independence regardless of materiality","Is acceptable if disclosed","Requires partner approval"],correct:1,explanation:"Any direct financial interest, regardless of how small, impairs independence. Only indirect financial interests are evaluated for materiality."},
  {id:98,level:6,topic:"fraud-examination",cpaSection:"AUD",difficulty:2,prompt:"The fraud triangle consists of:",choices:["Incentive, opportunity, and rationalization","Planning, execution, and concealment","Motive, means, and method","Desire, ability, and justification"],correct:0,explanation:"The fraud triangle identifies three conditions typically present when fraud occurs: incentive/pressure, opportunity, and rationalization/attitude."},
  {id:99,level:6,topic:"fraud-examination",cpaSection:"AUD",difficulty:3,prompt:"Which of the following is a presumed fraud risk on every audit?",choices:["Inventory valuation","Revenue recognition","Cash disbursements","Payroll expenses"],correct:1,explanation:"AU-C 240 requires auditors to presume that revenue recognition is a fraud risk in every audit. The auditor must also address management override of controls."},
  {id:100,level:6,topic:"fraud-examination",cpaSection:"AUD",difficulty:3,prompt:"The auditor's primary responsibility regarding fraud is to:",choices:["Detect all fraud","Prevent fraud from occurring","Obtain reasonable assurance that statements are free of material misstatement due to fraud","Report all fraud to law enforcement"],correct:2,explanation:"The auditor is responsible for obtaining reasonable assurance that the financial statements are free of material misstatement, whether caused by error or fraud."},
  {id:101,level:7,topic:"individual-taxation",cpaSection:"REG",difficulty:2,prompt:"Which of the following is excluded from gross income?",choices:["Wages","Alimony received (2020 agreement)","Life insurance proceeds paid by reason of death","Rental income"],correct:2,explanation:"Life insurance proceeds received by reason of the insured's death are generally excluded from gross income under IRC Section 101."},
  {id:102,level:7,topic:"individual-taxation",cpaSection:"REG",difficulty:2,prompt:"The standard deduction is:",choices:["An above-the-line deduction","A below-the-line deduction","An adjustment to gross income","A tax credit"],correct:1,explanation:"The standard deduction is a below-the-line deduction subtracted from AGI to arrive at taxable income. It is an alternative to itemizing deductions."},
  {id:103,level:7,topic:"individual-taxation",cpaSection:"REG",difficulty:3,prompt:"Medical expenses are deductible as an itemized deduction to the extent they exceed:",choices:["2% of AGI","5% of AGI","7.5% of AGI","10% of AGI"],correct:2,explanation:"Unreimbursed medical expenses are deductible as an itemized deduction only to the extent they exceed 7.5% of AGI."},
  {id:104,level:7,topic:"individual-taxation",cpaSection:"REG",difficulty:3,prompt:"The maximum deduction for state and local taxes (SALT) for individuals is:",choices:["$5,000","$10,000","$15,000","Unlimited"],correct:1,explanation:"The TCJA limits the itemized deduction for state and local taxes (income/sales tax plus property tax combined) to $10,000 ($5,000 for married filing separately)."},
  {id:105,level:7,topic:"corporate-taxation",cpaSection:"REG",difficulty:2,prompt:"The corporate income tax rate under current law is:",choices:["15%","21%","28%","35%"],correct:1,explanation:"The Tax Cuts and Jobs Act established a flat 21% corporate income tax rate, replacing the previous graduated rate structure."},
  {id:106,level:7,topic:"corporate-taxation",cpaSection:"REG",difficulty:3,prompt:"A corporation owns 25% of another corporation and receives $100,000 in dividends. The dividends received deduction (DRD) percentage is:",choices:["50%","65%","80%","100%"],correct:1,explanation:"For ownership of 20% to less than 80%, the DRD is 65%. At 25% ownership, the corporation deducts $65,000 of the $100,000 dividend received."},
  {id:107,level:7,topic:"corporate-taxation",cpaSection:"REG",difficulty:3,prompt:"Corporate charitable contributions are limited to what percentage of taxable income?",choices:["5%","10%","50%","60%"],correct:1,explanation:"Corporate charitable contributions are limited to 10% of taxable income (computed before the charitable deduction, DRD, NOL deduction, and capital loss carryback)."},
  {id:108,level:7,topic:"partnership-taxation",cpaSection:"REG",difficulty:2,prompt:"A partnership is:",choices:["A taxable entity that pays its own income tax","A pass-through entity where income flows to partners","A tax-exempt organization","Subject to corporate tax rates"],correct:1,explanation:"Partnerships are pass-through entities. The partnership files an informational return (Form 1065) but does not pay entity-level income tax. Income passes through to partners."},
  {id:109,level:7,topic:"partnership-taxation",cpaSection:"REG",difficulty:3,prompt:"A partner's tax basis in a partnership includes the partner's share of:",choices:["Only recourse liabilities","Only nonrecourse liabilities","Both recourse and nonrecourse liabilities","Neither type of liability"],correct:2,explanation:"A partner's basis includes their share of both recourse and nonrecourse partnership liabilities. This is a key difference from S corporations."},
  {id:110,level:7,topic:"partnership-taxation",cpaSection:"REG",difficulty:3,prompt:"The order of loss limitation rules for pass-through entities is:",choices:["At-risk, basis, passive activity","Basis, at-risk, passive activity","Passive activity, basis, at-risk","Basis, passive activity, at-risk"],correct:1,explanation:"Loss limitations are applied in this order: (1) Basis limitation, (2) At-risk limitation, (3) Passive activity limitation. Losses must pass each test sequentially."},
  {id:111,level:7,topic:"business-law",cpaSection:"REG",difficulty:2,prompt:"Which of the following is required for a valid contract?",choices:["A written document","Consideration","A witness","Notarization"],correct:1,explanation:"Consideration (a bargained-for exchange of value) is essential for a valid contract. Not all contracts need to be written, witnessed, or notarized."},
  {id:112,level:7,topic:"business-law",cpaSection:"REG",difficulty:2,prompt:"Under the Statute of Frauds, which contract must be in writing?",choices:["A contract to paint a house next week","A contract for the sale of goods for $300","A contract for the sale of real property","A verbal agreement to provide services"],correct:2,explanation:"The Statute of Frauds requires contracts for the sale of real property to be in writing. Other categories include goods over $500 (UCC), contracts not performable within one year, suretyship, and marriage consideration."},
  {id:113,level:7,topic:"business-law",cpaSection:"REG",difficulty:3,prompt:"Apparent authority exists when:",choices:["The agent actually has authority","The principal has communicated authority to the agent","The principal's conduct causes a third party to reasonably believe the agent has authority","The agent exceeds all authority"],correct:2,explanation:"Apparent authority arises from the principal's representations or conduct that cause a third party to reasonably believe the agent has authority to act on the principal's behalf."},
  {id:114,level:7,topic:"ethics-responsibility",cpaSection:"REG",difficulty:2,prompt:"Under the Securities Act of 1933, a CPA's liability is:",choices:["Based on negligence only","Based on scienter (intent)","Essentially strict liability with a due diligence defense","Limited to contractual claims"],correct:2,explanation:"Under Section 11 of the 1933 Act, the CPA faces near-strict liability. The burden is on the CPA to prove due diligence as a defense."},
  {id:115,level:7,topic:"ethics-responsibility",cpaSection:"REG",difficulty:3,prompt:"Under the Securities Exchange Act of 1934 (Rule 10b-5), the plaintiff must prove:",choices:["Only that a misstatement existed","Negligence by the CPA","Scienter (intent to deceive)","Privity of contract"],correct:2,explanation:"Under the 1934 Act, the plaintiff must prove scienter (intent to deceive, manipulate, or defraud). This is a higher burden of proof than under the 1933 Act."},
  {id:116,level:7,topic:"estate-gift-tax",cpaSection:"REG",difficulty:2,prompt:"The marital deduction for estate tax purposes is:",choices:["Limited to $1 million","50% of the gross estate","Unlimited for qualifying transfers to a U.S. citizen spouse","Not available"],correct:2,explanation:"The marital deduction is unlimited for qualifying property passing to a surviving spouse who is a U.S. citizen."},
  {id:117,level:7,topic:"estate-gift-tax",cpaSection:"REG",difficulty:2,prompt:"The annual gift tax exclusion applies:",choices:["Per donor, per year","Per donee, per year","To total gifts for the year","Only to gifts of cash"],correct:1,explanation:"The annual exclusion is applied per donee, per year. A donor can give the annual exclusion amount to any number of donees without gift tax consequences."},
  {id:118,level:7,topic:"estate-gift-tax",cpaSection:"REG",difficulty:3,prompt:"Direct payment of a grandchild's college tuition is:",choices:["Subject to gift tax","Subject to the generation-skipping transfer tax","Excluded from gift tax regardless of amount if paid directly to the institution","Limited to the annual exclusion amount"],correct:2,explanation:"Direct payments for tuition (to the educational institution) and medical expenses (to the provider) are excluded from gift tax with no dollar limit."},
  {id:119,level:8,topic:"economics-strategy",cpaSection:"BEC",difficulty:2,prompt:"In a perfectly competitive market, firms are:",choices:["Price makers","Price takers","Monopolists","Oligopolists"],correct:1,explanation:"In perfect competition, many firms sell identical products and no single firm can influence the market price. Each firm is a price taker."},
  {id:120,level:8,topic:"economics-strategy",cpaSection:"BEC",difficulty:2,prompt:"Porter's Five Forces model is used to analyze:",choices:["A company's internal strengths","Industry attractiveness and competitive dynamics","Macroeconomic conditions","A firm's balanced scorecard"],correct:1,explanation:"Porter's Five Forces analyzes industry-level competition: threat of new entrants, buyer power, supplier power, threat of substitutes, and rivalry among existing firms."},
  {id:121,level:8,topic:"economics-strategy",cpaSection:"BEC",difficulty:3,prompt:"Demand is considered elastic when the price elasticity of demand is:",choices:["Equal to zero","Between 0 and 1","Greater than 1","Equal to 1"],correct:2,explanation:"Elastic demand (elasticity > 1) means quantity demanded changes by a larger percentage than the price change. Total revenue decreases when price increases."},
  {id:122,level:8,topic:"financial-management",cpaSection:"BEC",difficulty:2,prompt:"A project should be accepted when its net present value (NPV) is:",choices:["Negative","Zero","Positive","Equal to the initial investment"],correct:2,explanation:"A positive NPV means the project is expected to generate returns above the required rate of return, adding value to the firm. Accept all positive NPV projects."},
  {id:123,level:8,topic:"financial-management",cpaSection:"BEC",difficulty:3,prompt:"The weighted-average cost of capital (WACC) represents:",choices:["The cost of equity only","The cost of debt only","The blended cost of all capital sources weighted by their proportions","The risk-free rate plus a market premium"],correct:2,explanation:"WACC = (E/V x Re) + (D/V x Rd x (1-T)). It blends the cost of equity and after-tax cost of debt, weighted by their proportions in the capital structure."},
  {id:124,level:8,topic:"financial-management",cpaSection:"BEC",difficulty:3,prompt:"If NPV and IRR give conflicting results for mutually exclusive projects, the correct decision rule is to use:",choices:["IRR because it is a percentage","NPV because it measures value added","Payback period as a tiebreaker","Profitability index"],correct:1,explanation:"NPV is the preferred criterion for mutually exclusive projects because it directly measures the increase in firm value. IRR can be misleading due to scale and reinvestment assumptions."},
  {id:125,level:8,topic:"it-analytics",cpaSection:"BEC",difficulty:2,prompt:"Which type of data analytics answers the question 'what will happen?'",choices:["Descriptive","Diagnostic","Predictive","Prescriptive"],correct:2,explanation:"Predictive analytics uses statistical models and forecasting to predict future outcomes. Descriptive summarizes past data. Diagnostic explains why. Prescriptive recommends actions."},
  {id:126,level:8,topic:"it-analytics",cpaSection:"BEC",difficulty:2,prompt:"Recovery Time Objective (RTO) measures:",choices:["Maximum acceptable data loss","Maximum acceptable downtime","Time to detect a security breach","Cost of disaster recovery"],correct:1,explanation:"RTO is the maximum acceptable amount of time to restore a system after a disruption. RPO measures maximum acceptable data loss."},
  {id:127,level:8,topic:"it-analytics",cpaSection:"BEC",difficulty:3,prompt:"IT general controls include all of the following EXCEPT:",choices:["Access controls","Program change management","Input validation controls","Computer operations"],correct:2,explanation:"Input validation controls are application controls, not general controls. ITGCs include access controls, program change management, program development, and computer operations."},
  {id:128,level:8,topic:"operations-management",cpaSection:"BEC",difficulty:2,prompt:"Activity-based costing differs from traditional costing primarily in that it:",choices:["Uses a single overhead rate","Assigns overhead based on specific cost drivers for each activity","Ignores overhead allocation","Uses only direct costs"],correct:1,explanation:"ABC identifies multiple activities and assigns overhead using specific cost drivers for each, providing more accurate product costs than single-rate traditional costing."},
  {id:129,level:8,topic:"operations-management",cpaSection:"BEC",difficulty:2,prompt:"The materials price variance is calculated as:",choices:["(Actual Quantity - Standard Quantity) x Standard Price","(Actual Price - Standard Price) x Actual Quantity","(Actual Price - Standard Price) x Standard Quantity","(Actual Quantity - Standard Quantity) x Actual Price"],correct:1,explanation:"Materials price variance = (AP - SP) x AQ. It isolates the impact of paying a different price per unit than the standard price."},
  {id:130,level:8,topic:"operations-management",cpaSection:"BEC",difficulty:3,prompt:"Six Sigma aims to reduce defects to:",choices:["1 per thousand","3.4 per million opportunities","Zero defects","10 per million"],correct:1,explanation:"Six Sigma targets a quality level of 3.4 defects per million opportunities (DPMO), representing near-perfection in process output."},
  {id:131,level:1,topic:"accounting-equation",cpaSection:"Foundation",difficulty:2,prompt:"If total assets are $500,000 and total liabilities are $300,000, stockholders' equity is:",choices:["$800,000","$200,000","$300,000","$500,000"],correct:1,explanation:"Stockholders' Equity = Assets - Liabilities = $500,000 - $300,000 = $200,000."},
  {id:132,level:1,topic:"debits-credits",cpaSection:"Foundation",difficulty:3,prompt:"Accumulated Depreciation is increased by a:",choices:["Debit","Credit","Neither debit nor credit","Closing entry only"],correct:1,explanation:"Accumulated Depreciation is a contra-asset with a normal credit balance. It increases with credits and decreases with debits."},
  {id:133,level:1,topic:"financial-statements",cpaSection:"Foundation",difficulty:2,prompt:"Earnings per share must be reported on the face of which statement?",choices:["Balance Sheet","Statement of Cash Flows","Income Statement","Statement of Stockholders' Equity"],correct:2,explanation:"Public companies are required to report basic and diluted EPS on the face of the income statement."},
  {id:134,level:1,topic:"adjusting-entries",cpaSection:"Foundation",difficulty:3,prompt:"A company receives $6,000 on September 1 for 6 months of rent in advance. On December 31, the adjusting entry includes a credit to:",choices:["Cash for $6,000","Rent Revenue for $4,000","Unearned Rent Revenue for $4,000","Rent Revenue for $2,000"],correct:1,explanation:"Four months of rent has been earned (Sep-Dec). Debit Unearned Rent Revenue $4,000, Credit Rent Revenue $4,000. The remaining $2,000 stays as unearned."},
  {id:135,level:2,topic:"inventory-methods",cpaSection:"FAR",difficulty:3,prompt:"The LIFO conformity rule states that:",choices:["LIFO must be used for both tax and financial reporting if used for tax","LIFO must be used for all inventory items","LIFO is required for all public companies","LIFO and FIFO must produce the same results"],correct:0,explanation:"If a company uses LIFO for income tax purposes, it must also use LIFO for financial reporting purposes. This is unique to LIFO."},
  {id:136,level:2,topic:"fixed-assets",cpaSection:"FAR",difficulty:3,prompt:"Under double-declining balance depreciation, the rate applied to a 5-year asset is:",choices:["20%","25%","40%","50%"],correct:2,explanation:"Double-declining balance rate = 2 x (1 / useful life) = 2 x (1/5) = 40%. This rate is applied to the declining book value each year."},
  {id:137,level:2,topic:"current-liabilities",cpaSection:"FAR",difficulty:3,prompt:"Compensated absences for vacation must be accrued when:",choices:["The employee takes the vacation","Payment is made","The obligation relates to services already performed and the amount can be reasonably estimated","The employee is hired"],correct:2,explanation:"Under ASC 710, vacation pay must be accrued if: (1) services have been rendered, (2) rights vest or accumulate, (3) payment is probable, and (4) the amount is reasonably estimable."},
  {id:138,level:3,topic:"revenue-recognition",cpaSection:"FAR",difficulty:3,prompt:"A performance obligation satisfied over time typically uses which methods to measure progress?",choices:["Straight-line method only","Input or output methods","Percentage of cash received","Fair value at each reporting date"],correct:1,explanation:"Performance obligations satisfied over time use input methods (costs incurred) or output methods (units delivered, milestones reached) to measure progress."},
  {id:139,level:3,topic:"bonds-debt",cpaSection:"FAR",difficulty:3,prompt:"When convertible bonds are converted to common stock using the book value method:",choices:["A gain or loss is recognized","Only the par value of stock is recorded","The carrying amount of the bonds is transferred to equity accounts with no gain or loss","The market value of stock determines the entry"],correct:2,explanation:"Under the book value method (GAAP), the carrying amount of the bond is removed and credited to Common Stock (par) and APIC. No gain or loss is recognized."},
  {id:140,level:3,topic:"investments",cpaSection:"FAR",difficulty:3,prompt:"Held-to-maturity debt securities are reported at:",choices:["Fair value through net income","Fair value through OCI","Amortized cost","Lower of cost or market"],correct:2,explanation:"HTM securities are debt securities the entity has the positive intent and ability to hold until maturity. They are carried at amortized cost, not fair value."},
  {id:141,level:3,topic:"cash-flows",cpaSection:"FAR",difficulty:3,prompt:"Dividends paid are classified as what activity under U.S. GAAP?",choices:["Operating","Investing","Financing","Can be either operating or financing"],correct:2,explanation:"Under U.S. GAAP, dividends paid are classified as financing activities. Dividends received are classified as operating activities."},
  {id:142,level:4,topic:"leases",cpaSection:"FAR",difficulty:3,prompt:"The lease liability at commencement is measured as:",choices:["The sum of all lease payments","The present value of lease payments","The fair value of the leased asset","The replacement cost of the asset"],correct:1,explanation:"The lease liability equals the present value of lease payments, discounted at the rate implicit in the lease or the lessee's incremental borrowing rate."},
  {id:143,level:4,topic:"income-taxes",cpaSection:"FAR",difficulty:3,prompt:"When a tax rate change is enacted, existing deferred tax balances are:",choices:["Not adjusted","Adjusted immediately with the effect in net income","Adjusted only when the temporary difference reverses","Adjusted with the effect in OCI"],correct:1,explanation:"Deferred tax balances are remeasured using the newly enacted rate. The effect of the rate change is recognized in income from continuing operations in the period of enactment."},
  {id:144,level:4,topic:"accounting-changes",cpaSection:"FAR",difficulty:3,prompt:"Changing from double-declining balance to straight-line depreciation is treated as:",choices:["A change in accounting principle applied retrospectively","A change in estimate applied prospectively","An error correction","A change in reporting entity"],correct:1,explanation:"A change in depreciation method is inseparable from a change in estimate and is therefore treated as a change in estimate, applied prospectively."},
  {id:145,level:4,topic:"contingencies",cpaSection:"FAR",difficulty:3,prompt:"An asset retirement obligation is initially measured at:",choices:["The expected cash outflow","The fair value of the obligation","The undiscounted future cost","The carrying amount of the related asset"],correct:1,explanation:"Under ASC 410, an ARO is initially recognized at fair value when incurred, typically using expected present value techniques with a credit-adjusted risk-free rate."},
  {id:146,level:5,topic:"consolidations",cpaSection:"FAR",difficulty:4,prompt:"In consolidation, unrealized profit in ending inventory from intercompany sales is:",choices:["Reported as a gain","Eliminated to avoid overstating assets and income","Deferred to the next period only","Not considered material"],correct:1,explanation:"Unrealized intercompany profit in ending inventory must be eliminated. It overstates inventory (assets) and understates COGS (overstates income) if not eliminated."},
  {id:147,level:5,topic:"foreign-currency",cpaSection:"FAR",difficulty:3,prompt:"A highly inflationary economy is defined as cumulative inflation exceeding:",choices:["50% over three years","75% over three years","100% over three years","200% over three years"],correct:2,explanation:"ASC 830 defines a highly inflationary economy as one with cumulative inflation of approximately 100% or more over a three-year period. The temporal method must be used."},
  {id:148,level:5,topic:"governmental-accounting",cpaSection:"FAR",difficulty:3,prompt:"Encumbrance accounting is used in governmental accounting to:",choices:["Record actual expenditures","Track commitments for purchase orders and contracts","Recognize revenue","Depreciate fixed assets"],correct:1,explanation:"Encumbrances represent commitments related to unperformed contracts and purchase orders. They help prevent overspending of appropriations."},
  {id:149,level:5,topic:"nonprofit-accounting",cpaSection:"FAR",difficulty:3,prompt:"Contributed services are recognized by an NFP only when:",choices:["Any volunteer services are provided","Services create or enhance a nonfinancial asset or require specialized skills","The value exceeds $5,000","The services last more than one year"],correct:1,explanation:"Contributed services are recognized as revenue only if they create/enhance a nonfinancial asset OR require specialized skills, are provided by those with the skills, and would typically be purchased."},
  {id:150,level:6,topic:"audit-planning",cpaSection:"AUD",difficulty:3,prompt:"Materiality for planning purposes is typically based on:",choices:["The largest account balance","A benchmark such as 5% of pre-tax income","The auditor's fee","The prior year's materiality only"],correct:1,explanation:"Planning materiality is typically based on benchmarks such as 5% of pre-tax income, 0.5-1% of revenue, or 1-2% of total assets, using professional judgment."},
  {id:151,level:6,topic:"evidence-gathering",cpaSection:"AUD",difficulty:3,prompt:"Tracing a sample of shipping documents to the sales journal tests which assertion?",choices:["Existence","Completeness","Valuation","Classification"],correct:1,explanation:"Tracing from source documents (shipping documents) to the accounting records tests completeness, ensuring all transactions that occurred were recorded."},
  {id:152,level:6,topic:"audit-reporting",cpaSection:"AUD",difficulty:3,prompt:"When misstatements are material and pervasive, and the financial statements are materially misstated, the auditor issues:",choices:["A qualified opinion","An adverse opinion","A disclaimer of opinion","An unmodified opinion with emphasis paragraph"],correct:1,explanation:"An adverse opinion is issued when misstatements are both material and pervasive, meaning the financial statements do not present fairly as a whole."},
  {id:153,level:6,topic:"professional-ethics",cpaSection:"AUD",difficulty:3,prompt:"PCAOB standards require mandatory rotation of the lead engagement partner every:",choices:["Three years","Five years","Seven years","Ten years"],correct:1,explanation:"The lead engagement partner must rotate off the engagement after five years and observe a five-year cooling-off period before returning."},
  {id:154,level:7,topic:"individual-taxation",cpaSection:"REG",difficulty:3,prompt:"The qualified business income (QBI) deduction under Section 199A allows a deduction of up to:",choices:["10% of QBI","15% of QBI","20% of QBI","25% of QBI"],correct:2,explanation:"Section 199A allows eligible taxpayers to deduct up to 20% of qualified business income from pass-through entities (partnerships, S corporations, sole proprietorships)."},
  {id:155,level:7,topic:"corporate-taxation",cpaSection:"REG",difficulty:3,prompt:"Post-2017 net operating losses can be carried:",choices:["Back 2 years, forward 20 years","Forward only, limited to 80% of taxable income","Back 5 years, forward indefinitely","Forward 20 years with no limitation"],correct:1,explanation:"Post-2017 NOLs generally can be carried forward indefinitely (no carryback) and are limited to 80% of taxable income in the carryforward year."},
  {id:156,level:7,topic:"partnership-taxation",cpaSection:"REG",difficulty:3,prompt:"S corporation shareholders include entity-level debt in their basis:",choices:["Always","Never, only direct shareholder loans to the corporation increase basis","Only for nonrecourse debt","Only for recourse debt"],correct:1,explanation:"Unlike partners, S corporation shareholders do NOT include entity-level debt in their basis. Only direct loans from the shareholder to the S corporation increase shareholder basis."},
  {id:157,level:7,topic:"business-law",cpaSection:"REG",difficulty:3,prompt:"Under the UCC, a merchant's firm offer is binding without consideration for up to:",choices:["30 days","60 days","Three months","Six months"],correct:2,explanation:"A merchant's written, signed offer to keep an offer open (firm offer) is binding without consideration for the time stated, or if no time is stated, for a reasonable time not exceeding three months."},
  {id:158,level:8,topic:"economics-strategy",cpaSection:"BEC",difficulty:3,prompt:"The balanced scorecard measures performance across which four perspectives?",choices:["Financial, Customer, Internal Processes, Learning and Growth","Revenue, Cost, Profit, Cash Flow","Planning, Organizing, Leading, Controlling","Assets, Liabilities, Equity, Income"],correct:0,explanation:"The balanced scorecard integrates financial measures with three nonfinancial perspectives: Customer, Internal Business Processes, and Learning and Growth."},
  {id:159,level:8,topic:"financial-management",cpaSection:"BEC",difficulty:3,prompt:"The cash conversion cycle equals:",choices:["Days inventory outstanding + Days sales outstanding + Days payable outstanding","Days inventory outstanding + Days sales outstanding - Days payable outstanding","Days sales outstanding - Days inventory outstanding","Days payable outstanding - Days inventory outstanding"],correct:1,explanation:"Cash Conversion Cycle = DIO + DSO - DPO. A shorter cycle means the company converts its resource investments to cash more quickly."},
  {id:160,level:8,topic:"operations-management",cpaSection:"BEC",difficulty:3,prompt:"A favorable materials quantity variance means the company:",choices:["Paid less per unit than standard","Used less material than standard for actual output","Had lower overhead costs","Sold more units than budgeted"],correct:1,explanation:"Materials quantity (usage) variance = (AQ - SQ) x SP. A favorable variance means actual quantity used was less than the standard quantity allowed for actual output."},
  {id:161,level:1,topic:"accounting-equation",cpaSection:"Foundation",difficulty:2,prompt:"A company performs services for $5,000 on account. The effect on the equation is:",choices:["Assets increase, liabilities increase","Assets increase, equity increases","Assets decrease, equity increases","Liabilities decrease, equity increases"],correct:1,explanation:"Accounts Receivable (asset) increases by $5,000 and Service Revenue increases equity by $5,000 through retained earnings."},
  {id:162,level:1,topic:"debits-credits",cpaSection:"Foundation",difficulty:2,prompt:"Which of the following is a contra-asset account?",choices:["Accumulated Depreciation","Depreciation Expense","Equipment","Common Stock"],correct:0,explanation:"Accumulated Depreciation is a contra-asset account that offsets the related asset. It has a normal credit balance, opposite to regular assets."},
  {id:163,level:1,topic:"journal-entries",cpaSection:"Foundation",difficulty:3,prompt:"An error in which a transaction is recorded at the wrong amount in both the debit and credit is called an error of:",choices:["Omission","Commission","Original entry","Transposition"],correct:2,explanation:"An error of original entry occurs when the wrong amount is recorded in the journal. Since both debit and credit are wrong by the same amount, the trial balance still balances."},
  {id:164,level:1,topic:"closing-process",cpaSection:"Foundation",difficulty:2,prompt:"The Income Summary account is used to:",choices:["Record daily transactions","Facilitate the closing process by summarizing revenues and expenses","Prepare the trial balance","Record adjusting entries"],correct:1,explanation:"Income Summary is a temporary holding account used during closing. Revenue and expense accounts are closed to it, then its balance is closed to Retained Earnings."},
  {id:165,level:2,topic:"cash-receivables",cpaSection:"FAR",difficulty:3,prompt:"Which of the following is classified as a cash equivalent?",choices:["A 6-month certificate of deposit","Common stock of a public company","A 60-day Treasury bill","A 2-year Treasury note"],correct:2,explanation:"Cash equivalents are short-term, highly liquid investments with original maturities of three months or less. A 60-day T-bill qualifies; 6-month CDs and 2-year notes do not."},
  {id:166,level:2,topic:"inventory-methods",cpaSection:"FAR",difficulty:2,prompt:"Specific identification is most appropriate for:",choices:["Commodity products","High-volume, low-cost items","Unique, high-value items like automobiles or jewelry","Raw materials"],correct:2,explanation:"Specific identification tracks the actual cost of each individual item and is most practical for unique, high-value items where each unit can be distinctly identified."},
  {id:167,level:2,topic:"payroll-accounting",cpaSection:"FAR",difficulty:3,prompt:"The FUTA tax is currently:",choices:["6.0% on all wages","6.0% on the first $7,000 per employee, often reduced to 0.6%","1.45% on all wages","6.2% on the first $160,200"],correct:1,explanation:"FUTA is 6.0% on the first $7,000 of wages per employee per year. A credit of up to 5.4% is allowed for state unemployment taxes paid, often reducing the effective rate to 0.6%."},
  {id:168,level:2,topic:"bank-reconciliation",cpaSection:"FAR",difficulty:3,prompt:"A bank collects a note receivable of $5,000 plus $100 interest on behalf of the company. The company's reconciling entry includes:",choices:["Debit Cash $5,100","Debit Notes Receivable $5,100","Debit Cash $5,000, Credit Notes Receivable $5,000 only","Debit Cash $5,000, Debit Interest Revenue $100"],correct:0,explanation:"Debit Cash $5,100, Credit Notes Receivable $5,000, Credit Interest Revenue $100. This is a book-side adjustment because the company had not yet recorded the collection."},
  {id:169,level:3,topic:"revenue-recognition",cpaSection:"FAR",difficulty:4,prompt:"Under ASC 606, Step 2 requires identifying performance obligations. A good or service is distinct if:",choices:["It has been paid for separately","The customer can benefit from it on its own and it is separately identifiable in the contract","It is a material component of the contract","It has a standalone selling price above $1,000"],correct:1,explanation:"A good or service is distinct if: (1) the customer can benefit from it on its own or with readily available resources, AND (2) it is separately identifiable from other promises in the contract."},
  {id:170,level:3,topic:"stockholders-equity",cpaSection:"FAR",difficulty:3,prompt:"Cumulative preferred stock means:",choices:["Dividends increase each year","Dividends in arrears must be paid before common dividends","Dividends are guaranteed","Preferred stock converts to common stock"],correct:1,explanation:"Cumulative preferred stock requires that any unpaid dividends (dividends in arrears) accumulate and must be paid in full before any dividends are paid to common stockholders."},
  {id:171,level:3,topic:"earnings-per-share",cpaSection:"FAR",difficulty:4,prompt:"For convertible bonds, diluted EPS uses the if-converted method, which adjusts the numerator by:",choices:["Adding back the full interest expense","Adding back the after-tax interest expense on convertible bonds","Subtracting the preferred dividends","Making no adjustment"],correct:1,explanation:"The if-converted method adds back interest expense (net of tax) that would not have been paid if the bonds were converted, and adds conversion shares to the denominator."},
  {id:172,level:4,topic:"leases",cpaSection:"FAR",difficulty:4,prompt:"Which is NOT one of the five criteria for classifying a lease as a finance lease for the lessee?",choices:["Transfer of ownership","Lease term is a major part of the asset's economic life","The lessee has the option to extend the lease","The asset is so specialized it has no alternative use to the lessor"],correct:2,explanation:"An option to extend alone is not a criterion. The five criteria are: ownership transfer, purchase option reasonably certain, major part of economic life, substantially all of FV, and specialized asset with no alternative use."},
  {id:173,level:4,topic:"pensions",cpaSection:"FAR",difficulty:4,prompt:"Prior service cost from a plan amendment is initially recorded in:",choices:["Net income","Other comprehensive income","Retained earnings","Pension expense immediately"],correct:1,explanation:"Prior service cost is initially recorded in OCI and then amortized to pension expense over the remaining service period of active employees."},
  {id:174,level:4,topic:"fair-value",cpaSection:"FAR",difficulty:3,prompt:"Under the fair value option (ASC 825), changes in fair value are reported in:",choices:["Other comprehensive income","Net income","Retained earnings directly","A special valuation reserve"],correct:1,explanation:"When the fair value option is elected for financial instruments, subsequent changes in fair value are reported in net income."},
  {id:175,level:5,topic:"consolidations",cpaSection:"FAR",difficulty:4,prompt:"A bargain purchase (negative goodwill) is recognized as:",choices:["A deferred credit on the balance sheet","A gain in net income after reassessing measurements","An extraordinary item","A reduction of long-lived assets acquired"],correct:1,explanation:"Under ASC 805, if FV of net assets acquired exceeds consideration, a bargain purchase gain is recognized in net income after the acquirer reassesses the identification and measurement of assets and liabilities."},
  {id:176,level:5,topic:"partnerships",cpaSection:"FAR",difficulty:3,prompt:"Under the bonus method of admitting a new partner, total partnership capital equals:",choices:["The implied value of the partnership","Total assets contributed by all partners","The sum of all partner capital balances plus goodwill","Fair value of all identifiable assets"],correct:1,explanation:"Under the bonus method, total capital is based on actual net assets (tangible contributions). No goodwill or revaluation is recorded. Any difference is treated as a bonus among partners."},
  {id:177,level:5,topic:"governmental-accounting",cpaSection:"FAR",difficulty:4,prompt:"In the government-wide Statement of Activities, expenses are reported by:",choices:["Object classification","Fund","Function or program","Natural classification"],correct:2,explanation:"The government-wide Statement of Activities reports expenses by function or program (e.g., public safety, education, health) and shows net expense or revenue for each."},
  {id:178,level:6,topic:"internal-controls",cpaSection:"AUD",difficulty:3,prompt:"Segregation of duties requires separation of which functions?",choices:["Sales and marketing","Authorization, custody, and recording","Planning and budgeting","Hiring and training"],correct:1,explanation:"Effective segregation of duties separates authorization of transactions, custody of related assets, and recording of transactions. No single person should perform all three."},
  {id:179,level:6,topic:"audit-reporting",cpaSection:"AUD",difficulty:3,prompt:"Critical audit matters (CAMs) must be communicated in the audit report for:",choices:["All entities audited under GAAS","Only public companies (PCAOB audits)","Only government audits","Only when the opinion is modified"],correct:1,explanation:"CAMs are required in PCAOB audit reports for public company audits (except emerging growth companies). They describe matters arising from the audit that were especially challenging or complex."},
  {id:180,level:6,topic:"fraud-examination",cpaSection:"AUD",difficulty:3,prompt:"Management override of controls is addressed by testing:",choices:["Only revenue transactions","Journal entries and other adjustments, accounting estimates, and unusual transactions","Bank reconciliations only","IT general controls only"],correct:1,explanation:"To address management override risk, auditors must test journal entries and adjustments, review accounting estimates for bias, and evaluate the business rationale for significant unusual transactions."},
  {id:181,level:7,topic:"individual-taxation",cpaSection:"REG",difficulty:2,prompt:"Which of the following is an above-the-line deduction?",choices:["Mortgage interest","State income taxes","Student loan interest","Charitable contributions"],correct:2,explanation:"Student loan interest (up to $2,500) is an above-the-line deduction (adjustment to income). Mortgage interest, state taxes, and charitable contributions are itemized deductions (below the line)."},
  {id:182,level:7,topic:"corporate-taxation",cpaSection:"REG",difficulty:3,prompt:"Corporate capital losses can:",choices:["Offset ordinary income up to $3,000","Only offset capital gains","Be carried forward indefinitely","Be carried back 5 years and forward 20 years"],correct:1,explanation:"Corporate capital losses can only offset corporate capital gains (no $3,000 ordinary income deduction like individuals). They carry back 3 years and forward 5 years."},
  {id:183,level:7,topic:"estate-gift-tax",cpaSection:"REG",difficulty:3,prompt:"Gift splitting allows married couples to:",choices:["Split their income","Double the annual gift tax exclusion per donee","Avoid all gift taxes","Deduct gifts from taxable income"],correct:1,explanation:"Gift splitting allows a married couple to elect to treat a gift from one spouse as made equally by both, effectively doubling the annual exclusion per donee."},
  {id:184,level:8,topic:"economics-strategy",cpaSection:"BEC",difficulty:2,prompt:"SWOT analysis evaluates:",choices:["Strengths, Weaknesses, Opportunities, Threats","Supply, Waste, Operations, Technology","Sales, Wages, Overhead, Taxes","Strategy, Work, Objectives, Timelines"],correct:0,explanation:"SWOT analysis evaluates internal Strengths and Weaknesses and external Opportunities and Threats to help organizations make strategic decisions."},
  {id:185,level:8,topic:"financial-management",cpaSection:"BEC",difficulty:2,prompt:"The Capital Asset Pricing Model (CAPM) formula is:",choices:["Re = Rf + Beta x (Rm - Rf)","Re = Rf x Beta + Rm","Re = Rm + Rf / Beta","Re = (Rm - Rf) / Beta"],correct:0,explanation:"CAPM: Required Return on Equity = Risk-free Rate + Beta x (Market Return - Risk-free Rate). Beta measures the stock's systematic risk relative to the market."},
  {id:186,level:8,topic:"it-analytics",cpaSection:"BEC",difficulty:3,prompt:"A hot backup site provides:",choices:["No computing capability","Basic infrastructure but no data","Fully operational duplicate systems ready for immediate failover","Only physical security"],correct:2,explanation:"A hot site maintains fully operational, real-time replicated systems ready for immediate failover. It is the most expensive option but provides the fastest recovery."},
  {id:187,level:8,topic:"operations-management",cpaSection:"BEC",difficulty:3,prompt:"The theory of constraints focuses on:",choices:["Eliminating all waste","Reducing variation","Identifying and managing bottlenecks that limit throughput","Increasing batch sizes"],correct:2,explanation:"The theory of constraints identifies the system's bottleneck (constraint) and focuses management efforts on maximizing throughput at that constraint."},
  {id:188,level:1,topic:"accounting-equation",cpaSection:"Foundation",difficulty:3,prompt:"A company declares a $10,000 cash dividend. At the declaration date, the effect is:",choices:["Assets decrease, equity decreases","Liabilities increase, equity decreases","No effect until payment date","Assets decrease, liabilities increase"],correct:1,explanation:"At declaration, Retained Earnings (equity) decreases and Dividends Payable (liability) increases. Cash does not change until the payment date."},
  {id:189,level:2,topic:"fixed-assets",cpaSection:"FAR",difficulty:3,prompt:"Interest costs on a self-constructed asset are:",choices:["Always expensed","Capitalized during the construction period under ASC 835-20","Optional to capitalize","Capitalized only if the asset is real estate"],correct:1,explanation:"ASC 835-20 requires capitalization of interest costs incurred during the construction period of qualifying assets. Capitalization begins when expenditures, activities, and borrowings all exist."},
  {id:190,level:3,topic:"bonds-debt",cpaSection:"FAR",difficulty:4,prompt:"Bond issue costs under ASC 835 are:",choices:["Expensed immediately","Capitalized as an asset and amortized","Netted against the carrying amount of the bond (as a direct deduction)","Added to the face value of the bond"],correct:2,explanation:"Under ASC 835, bond issue costs are reported as a direct deduction from the carrying amount of the bond liability, not as a separate asset. They are amortized using the effective interest method."},
  {id:191,level:3,topic:"stockholders-equity",cpaSection:"FAR",difficulty:3,prompt:"A 2-for-1 stock split results in:",choices:["A journal entry debiting Retained Earnings","Doubling of par value per share","Halving of par value per share with double the shares outstanding","No change in shares outstanding"],correct:2,explanation:"A 2-for-1 stock split doubles the number of shares outstanding and halves the par value per share. Total stockholders' equity is unchanged. Only a memo entry is made."},
  {id:192,level:4,topic:"income-taxes",cpaSection:"FAR",difficulty:4,prompt:"The tax effect of items reported in other comprehensive income is allocated to:",choices:["Income from continuing operations","Other comprehensive income (intraperiod allocation)","Retained earnings","The tax provision only"],correct:1,explanation:"Intraperiod tax allocation requires the tax effect of items in OCI to be allocated to OCI, not to the income tax provision. Each component of comprehensive income is reported net of its tax effect."},
  {id:193,level:5,topic:"foreign-currency",cpaSection:"FAR",difficulty:4,prompt:"Under the current rate method, revenue and expenses are translated at:",choices:["The current rate at year end","The historical rate when the transaction occurred","The weighted-average rate for the period","The spot rate on the date of each transaction"],correct:2,explanation:"Under the current rate method, revenue and expenses are translated at the average exchange rate for the period (a practical approximation of translating each transaction at its date)."},
  {id:194,level:6,topic:"professional-ethics",cpaSection:"AUD",difficulty:3,prompt:"Which threat to independence arises from a long-standing relationship between the auditor and client?",choices:["Self-interest threat","Self-review threat","Familiarity threat","Advocacy threat"],correct:2,explanation:"The familiarity threat arises when a close or long relationship with a client may cause the auditor to be too sympathetic or not sufficiently skeptical."},
  {id:195,level:7,topic:"business-law",cpaSection:"REG",difficulty:3,prompt:"Under respondeat superior, an employer is liable for an employee's torts committed:",choices:["Only outside the scope of employment","Within the scope of employment","Only if the employer authorized the specific act","Only for intentional torts"],correct:1,explanation:"Under respondeat superior (let the master answer), an employer is vicariously liable for torts committed by an employee acting within the scope of employment."},
  {id:196,level:7,topic:"individual-taxation",cpaSection:"REG",difficulty:3,prompt:"Social Security benefits may be taxable up to what maximum percentage?",choices:["50%","75%","85%","100%"],correct:2,explanation:"Up to 85% of Social Security benefits may be included in gross income, depending on the taxpayer's provisional income level. The remaining 15% is always excluded."},
  {id:197,level:8,topic:"financial-management",cpaSection:"BEC",difficulty:3,prompt:"The profitability index is calculated as:",choices:["Initial Investment / PV of Future Cash Flows","PV of Future Cash Flows / Initial Investment","Net Income / Total Assets","NPV / Initial Investment"],correct:1,explanation:"Profitability Index = PV of Future Cash Flows / Initial Investment. Projects with a PI greater than 1.0 have a positive NPV and should be accepted."},
  {id:198,level:2,topic:"cash-receivables",cpaSection:"FAR",difficulty:3,prompt:"When a previously written-off account is collected, the first entry under the allowance method is:",choices:["Debit Cash, Credit Bad Debt Expense","Debit Cash, Credit Accounts Receivable","Debit Accounts Receivable, Credit Allowance for Doubtful Accounts","Debit Bad Debt Expense, Credit Cash"],correct:2,explanation:"First, reverse the write-off: Debit Accounts Receivable, Credit Allowance for Doubtful Accounts. Then record the collection: Debit Cash, Credit Accounts Receivable."},
  {id:199,level:3,topic:"cash-flows",cpaSection:"FAR",difficulty:3,prompt:"An increase in inventory is reported under the indirect method as:",choices:["An addition to net income","A subtraction from net income","An investing activity","A financing activity"],correct:1,explanation:"An increase in inventory means cash was used to purchase inventory. Under the indirect method, increases in current assets (other than cash) are subtracted from net income."},
  {id:200,level:4,topic:"fair-value",cpaSection:"FAR",difficulty:4,prompt:"The fair value hierarchy classifies the pricing of a corporate bond using broker quotes in an inactive market as:",choices:["Level 1","Level 2","Level 3","Not subject to fair value hierarchy"],correct:1,explanation:"Broker quotes in an inactive market are Level 2 inputs (observable inputs other than quoted prices in active markets for identical assets). Level 1 requires active markets for identical items."},
  {id:201,level:5,topic:"nonprofit-accounting",cpaSection:"FAR",difficulty:3,prompt:"An NFP receives a $100,000 donation restricted by the donor for building construction. This is classified as:",choices:["Revenue without donor restrictions","Revenue with donor restrictions","A liability","Deferred revenue"],correct:1,explanation:"The donation has a purpose restriction (building construction) imposed by the donor, so it is classified as net assets with donor restrictions."},
  {id:202,level:6,topic:"evidence-gathering",cpaSection:"AUD",difficulty:3,prompt:"The audit procedure of recalculation involves:",choices:["Independently executing a procedure the client performed","Checking mathematical accuracy of documents or records","Examining physical assets","Obtaining written responses from third parties"],correct:1,explanation:"Recalculation involves checking the mathematical accuracy of documents, records, or calculations. Reperformance involves independently executing procedures."},
  {id:203,level:7,topic:"ethics-responsibility",cpaSection:"REG",difficulty:3,prompt:"Under Circular 230, a CPA may NOT:",choices:["Charge contingent fees for original tax returns","Represent a client before the IRS","Sign a tax return they prepared","Provide tax advice in writing"],correct:0,explanation:"Circular 230 generally prohibits contingent fees for preparing original tax returns. Contingent fees are allowed for amended returns and refund claims where the IRS has challenged the original position."},
  {id:204,level:8,topic:"economics-strategy",cpaSection:"BEC",difficulty:3,prompt:"Monetary policy tools used by the Federal Reserve include all of the following EXCEPT:",choices:["Open market operations","Changing the discount rate","Changing tax rates","Adjusting reserve requirements"],correct:2,explanation:"Changing tax rates is fiscal policy (government/Congress), not monetary policy. The Fed uses open market operations, the discount rate, and reserve requirements."},
  {id:205,level:1,topic:"financial-statements",cpaSection:"Foundation",difficulty:3,prompt:"Comprehensive income includes:",choices:["Net income only","Net income plus other comprehensive income","Operating income only","Cash flows from operations"],correct:1,explanation:"Comprehensive income = Net income + Other comprehensive income (OCI). OCI includes unrealized gains/losses on AFS securities, foreign currency translation adjustments, and pension adjustments."}
];


/* ---------- SIMULATION BANK (32 journal entry scenarios) ---------- */
const SIMULATION_BANK = [
  {id:'sim01',level:1,title:'Record service revenue on account',description:'Performed $8,000 of consulting services on account.',entries:[{account:'Accounts Receivable',debit:8000,credit:0},{account:'Service Revenue',debit:0,credit:8000}]},
  {id:'sim02',level:1,title:'Purchase supplies for cash',description:'Purchased $500 of office supplies with cash.',entries:[{account:'Supplies',debit:500,credit:0},{account:'Cash',debit:0,credit:500}]},
  {id:'sim03',level:1,title:'Record owner investment',description:'Owner invested $25,000 cash into the business.',entries:[{account:'Cash',debit:25000,credit:0},{account:'Common Stock',debit:0,credit:25000}]},
  {id:'sim04',level:1,title:'Pay monthly rent',description:'Paid $2,000 for the current month\'s rent.',entries:[{account:'Rent Expense',debit:2000,credit:0},{account:'Cash',debit:0,credit:2000}]},
  {id:'sim05',level:1,title:'Record depreciation',description:'Record monthly straight-line depreciation of $1,200 on equipment.',entries:[{account:'Depreciation Expense',debit:1200,credit:0},{account:'Accumulated Depreciation - Equipment',debit:0,credit:1200}]},
  {id:'sim06',level:1,title:'Collect accounts receivable',description:'Collected $3,500 cash from a customer on account.',entries:[{account:'Cash',debit:3500,credit:0},{account:'Accounts Receivable',debit:0,credit:3500}]},
  {id:'sim07',level:2,title:'Record bad debt expense',description:'Estimated bad debts at $4,000 for the year using the allowance method.',entries:[{account:'Bad Debt Expense',debit:4000,credit:0},{account:'Allowance for Doubtful Accounts',debit:0,credit:4000}]},
  {id:'sim08',level:2,title:'Write off an uncollectible account',description:'Wrote off the $750 balance of a customer determined to be uncollectible.',entries:[{account:'Allowance for Doubtful Accounts',debit:750,credit:0},{account:'Accounts Receivable',debit:0,credit:750}]},
  {id:'sim09',level:2,title:'Purchase inventory on credit',description:'Purchased $15,000 of merchandise inventory on account.',entries:[{account:'Inventory',debit:15000,credit:0},{account:'Accounts Payable',debit:0,credit:15000}]},
  {id:'sim10',level:2,title:'Record cost of goods sold',description:'Sold merchandise that cost $9,000. Record the COGS entry.',entries:[{account:'Cost of Goods Sold',debit:9000,credit:0},{account:'Inventory',debit:0,credit:9000}]},
  {id:'sim11',level:2,title:'Record payroll',description:'Record gross wages of $10,000 with $2,500 in employee withholdings.',entries:[{account:'Wages Expense',debit:10000,credit:0},{account:'Wages Payable',debit:0,credit:7500},{account:'Income Tax Payable',debit:0,credit:2500}]},
  {id:'sim12',level:2,title:'Pay accounts payable',description:'Paid $6,000 to suppliers on account.',entries:[{account:'Accounts Payable',debit:6000,credit:0},{account:'Cash',debit:0,credit:6000}]},
  {id:'sim13',level:3,title:'Issue bonds at a discount',description:'Issued $100,000 face value bonds for $97,000 cash.',entries:[{account:'Cash',debit:97000,credit:0},{account:'Discount on Bonds Payable',debit:3000,credit:0},{account:'Bonds Payable',debit:0,credit:100000}]},
  {id:'sim14',level:3,title:'Record bond interest (discount)',description:'Record semiannual interest on $100,000, 6% bonds (carrying value $97,500). Market rate 7%. Cash payment $3,000. Interest expense $3,413.',entries:[{account:'Interest Expense',debit:3413,credit:0},{account:'Discount on Bonds Payable',debit:0,credit:413},{account:'Cash',debit:0,credit:3000}]},
  {id:'sim15',level:3,title:'Declare a cash dividend',description:'Declared a $2 per share cash dividend on 5,000 shares.',entries:[{account:'Dividends',debit:10000,credit:0},{account:'Dividends Payable',debit:0,credit:10000}]},
  {id:'sim16',level:3,title:'Pay the declared dividend',description:'Paid the previously declared cash dividend of $10,000.',entries:[{account:'Dividends Payable',debit:10000,credit:0},{account:'Cash',debit:0,credit:10000}]},
  {id:'sim17',level:3,title:'Purchase treasury stock',description:'Repurchased 200 shares at $50 per share.',entries:[{account:'Treasury Stock',debit:10000,credit:0},{account:'Cash',debit:0,credit:10000}]},
  {id:'sim18',level:3,title:'Record equity method income',description:'Investee reported $100,000 net income. Investor owns 30%.',entries:[{account:'Long-term Investments',debit:30000,credit:0},{account:'Equity in Earnings of Investee',debit:0,credit:30000}]},
  {id:'sim19',level:4,title:'Record a finance lease (lessee)',description:'Signed a 5-year finance lease. PV of payments is $50,000.',entries:[{account:'Right-of-use Asset',debit:50000,credit:0},{account:'Lease Liability',debit:0,credit:50000}]},
  {id:'sim20',level:4,title:'Record pension expense',description:'Service cost $12,000, interest cost $8,000, expected return $5,000.',entries:[{account:'Pension Expense',debit:15000,credit:0},{account:'Pension Liability',debit:0,credit:15000}]},
  {id:'sim21',level:4,title:'Record deferred tax liability',description:'Temporary difference of $20,000. Tax rate 21%.',entries:[{account:'Income Tax Expense',debit:4200,credit:0},{account:'Deferred Tax Liability',debit:0,credit:4200}]},
  {id:'sim22',level:4,title:'Accrue warranty expense',description:'Estimated warranty costs of $8,000 on current-year sales.',entries:[{account:'Warranty Expense',debit:8000,credit:0},{account:'Warranty Liability',debit:0,credit:8000}]},
  {id:'sim23',level:5,title:'Record goodwill in acquisition',description:'Acquired company for $500,000. FV of net identifiable assets $420,000.',entries:[{account:'Net Identifiable Assets',debit:420000,credit:0},{account:'Goodwill',debit:80000,credit:0},{account:'Cash',debit:0,credit:500000}]},
  {id:'sim24',level:5,title:'Eliminate intercompany sale',description:'Parent sold $30,000 of goods to subsidiary at cost.',entries:[{account:'Sales Revenue',debit:30000,credit:0},{account:'Cost of Goods Sold',debit:0,credit:30000}]},
  {id:'sim25',level:5,title:'Record foreign currency gain',description:'EUR receivable recorded at $11,000 now translates to $11,500.',entries:[{account:'Accounts Receivable',debit:500,credit:0},{account:'Foreign Currency Exchange Gain',debit:0,credit:500}]},
  {id:'sim26',level:5,title:'Record NFP restricted contribution',description:'Received $50,000 donation restricted for program services.',entries:[{account:'Cash',debit:50000,credit:0},{account:'Revenue With Donor Restrictions',debit:0,credit:50000}]},
  {id:'sim27',level:2,title:'Record prepaid insurance',description:'Paid $6,000 for a 12-month insurance policy.',entries:[{account:'Prepaid Insurance',debit:6000,credit:0},{account:'Cash',debit:0,credit:6000}]},
  {id:'sim28',level:2,title:'Adjust prepaid insurance',description:'One month ($500) of a 12-month policy has expired.',entries:[{account:'Insurance Expense',debit:500,credit:0},{account:'Prepaid Insurance',debit:0,credit:500}]},
  {id:'sim29',level:3,title:'Issue bonds at a premium',description:'Issued $200,000 face value bonds for $210,000.',entries:[{account:'Cash',debit:210000,credit:0},{account:'Bonds Payable',debit:0,credit:200000},{account:'Premium on Bonds Payable',debit:0,credit:10000}]},
  {id:'sim30',level:1,title:'Record unearned revenue',description:'Received $3,000 cash in advance for future services.',entries:[{account:'Cash',debit:3000,credit:0},{account:'Unearned Revenue',debit:0,credit:3000}]},
  {id:'sim31',level:1,title:'Recognize deferred revenue',description:'Performed $3,000 of previously prepaid services.',entries:[{account:'Unearned Revenue',debit:3000,credit:0},{account:'Service Revenue',debit:0,credit:3000}]},
  {id:'sim32',level:4,title:'Record goodwill impairment',description:'Reporting unit carrying amount exceeds fair value by $15,000.',entries:[{account:'Goodwill Impairment Loss',debit:15000,credit:0},{account:'Goodwill',debit:0,credit:15000}]}
];

/* ---------- ADJUSTING SCENARIOS (14) ---------- */
const ADJUSTING_SCENARIOS = [
  {id:'adj01',type:'deferred-expense',title:'Prepaid Insurance Adjustment',description:'On September 1, the company paid $12,000 for a 12-month insurance policy. At December 31, 4 months have expired.',correctEntry:{debit:{account:'Insurance Expense',amount:4000},credit:{account:'Prepaid Insurance',amount:4000}},explanation:'4/12 × $12,000 = $4,000. Dr. Insurance Expense; Cr. Prepaid Insurance.'},
  {id:'adj02',type:'accrued-expense',title:'Accrued Wages',description:'Employees earn $5,000/week (Mon-Fri). Dec 31 falls on Wednesday (3 days).',correctEntry:{debit:{account:'Wages Expense',amount:3000},credit:{account:'Wages Payable',amount:3000}},explanation:'3/5 × $5,000 = $3,000. Dr. Wages Expense; Cr. Wages Payable.'},
  {id:'adj03',type:'deferred-revenue',title:'Unearned Service Revenue',description:'On Nov 1, received $9,000 for 3 months of service. At Dec 31, 2 months earned.',correctEntry:{debit:{account:'Unearned Revenue',amount:6000},credit:{account:'Service Revenue',amount:6000}},explanation:'2/3 × $9,000 = $6,000. Dr. Unearned Revenue; Cr. Service Revenue.'},
  {id:'adj04',type:'accrued-revenue',title:'Accrued Interest Revenue',description:'Hold a $50,000, 6% note receivable. 2 months of interest unrecorded.',correctEntry:{debit:{account:'Interest Receivable',amount:500},credit:{account:'Interest Revenue',amount:500}},explanation:'$50,000 × 6% × 2/12 = $500. Dr. Interest Receivable; Cr. Interest Revenue.'},
  {id:'adj05',type:'depreciation',title:'Equipment Depreciation',description:'Equipment cost $60,000, salvage $6,000, 9-year life. Annual straight-line.',correctEntry:{debit:{account:'Depreciation Expense',amount:6000},credit:{account:'Accumulated Depreciation - Equipment',amount:6000}},explanation:'($60,000 − $6,000)/9 = $6,000/yr.'},
  {id:'adj06',type:'deferred-expense',title:'Supplies Used',description:'Supplies account shows $2,800. Physical count: $900 remaining.',correctEntry:{debit:{account:'Supplies Expense',amount:1900},credit:{account:'Supplies',amount:1900}},explanation:'$2,800 − $900 = $1,900 used.'},
  {id:'adj07',type:'accrued-expense',title:'Accrued Interest on Note Payable',description:'$40,000, 9% note payable. 3 months of interest accrued.',correctEntry:{debit:{account:'Interest Expense',amount:900},credit:{account:'Interest Payable',amount:900}},explanation:'$40,000 × 9% × 3/12 = $900.'},
  {id:'adj08',type:'deferred-expense',title:'Prepaid Rent Adjustment',description:'Oct 1 paid $18,000 for 6 months rent. At Dec 31, 3 months used.',correctEntry:{debit:{account:'Rent Expense',amount:9000},credit:{account:'Prepaid Rent',amount:9000}},explanation:'3/6 × $18,000 = $9,000.'},
  {id:'adj09',type:'depreciation',title:'Building Depreciation',description:'Building cost $500,000, salvage $50,000, 25-year life.',correctEntry:{debit:{account:'Depreciation Expense',amount:18000},credit:{account:'Accumulated Depreciation - Buildings',amount:18000}},explanation:'($500,000 − $50,000)/25 = $18,000/yr.'},
  {id:'adj10',type:'accrued-revenue',title:'Accrued Service Revenue',description:'Performed $4,500 of consulting in December, not yet billed.',correctEntry:{debit:{account:'Accounts Receivable',amount:4500},credit:{account:'Service Revenue',amount:4500}},explanation:'Revenue earned but unbilled.'},
  {id:'adj11',type:'deferred-revenue',title:'Magazine Subscriptions',description:'Jul 1 received $24,000 for 12-month subs. At Dec 31, 6 months provided.',correctEntry:{debit:{account:'Unearned Revenue',amount:12000},credit:{account:'Service Revenue',amount:12000}},explanation:'6/12 × $24,000 = $12,000.'},
  {id:'adj12',type:'accrued-expense',title:'Accrued Income Tax',description:'Estimated income tax of $35,000 for the year. No payments made.',correctEntry:{debit:{account:'Income Tax Expense',amount:35000},credit:{account:'Income Tax Payable',amount:35000}},explanation:'Accrue the full estimated amount.'},
  {id:'adj13',type:'bad-debts',title:'Bad Debt Estimate',description:'Required allowance balance $7,200. Current allowance balance $1,800 credit.',correctEntry:{debit:{account:'Bad Debt Expense',amount:5400},credit:{account:'Allowance for Doubtful Accounts',amount:5400}},explanation:'$7,200 − $1,800 = $5,400 adjustment.'},
  {id:'adj14',type:'deferred-expense',title:'Prepaid Advertising',description:'Aug 1 paid $3,600 for 6 months advertising. At Dec 31, 5 months used.',correctEntry:{debit:{account:'Advertising Expense',amount:3000},credit:{account:'Prepaid Advertising',amount:3000}},explanation:'5/6 × $3,600 = $3,000.'}
];

/* ---------- FLASHCARD BANK (84 flashcards) ---------- */
const FLASHCARD_BANK = [
  {id:'f01',front:'What is the accounting equation?',back:'Assets = Liabilities + Stockholders\' Equity',cpaSection:'Foundation'},
  {id:'f02',front:'What does DEALER stand for?',back:'Dividends, Expenses, Assets increase with Debits. Liabilities, Equity, Revenue increase with Credits.',cpaSection:'Foundation'},
  {id:'f03',front:'What are the four financial statements?',back:'Income Statement, Statement of Retained Earnings, Balance Sheet, Statement of Cash Flows.',cpaSection:'Foundation'},
  {id:'f04',front:'Four types of adjusting entries?',back:'Accrued revenues, accrued expenses, deferred revenues, deferred expenses (prepayments).',cpaSection:'Foundation'},
  {id:'f05',front:'Do adjusting entries ever involve Cash?',back:'No. Adjusting entries never debit or credit Cash.',cpaSection:'Foundation'},
  {id:'f06',front:'Permanent vs. temporary accounts?',back:'Permanent (assets, liabilities, equity) carry forward. Temporary (revenues, expenses, dividends) are closed to zero.',cpaSection:'Foundation'},
  {id:'f07',front:'What is a contra account?',back:'An account that offsets its parent. Example: Accumulated Depreciation offsets Equipment.',cpaSection:'Foundation'},
  {id:'f08',front:'Normal balance of a contra-asset?',back:'Credit. Accumulated Depreciation and Allowance for Doubtful Accounts have credit balances.',cpaSection:'Foundation'},
  {id:'f09',front:'What is net realizable value?',back:'Estimated selling price minus costs to complete and sell. Used for lower of cost or NRV.',cpaSection:'FAR'},
  {id:'f10',front:'FIFO vs. LIFO in rising prices?',back:'FIFO: lower COGS, higher income. LIFO: higher COGS, lower income (tax advantage).',cpaSection:'FAR'},
  {id:'f11',front:'Straight-line depreciation formula?',back:'(Cost − Salvage Value) / Useful Life.',cpaSection:'FAR'},
  {id:'f12',front:'DDB depreciation rate?',back:'2 / Useful Life, applied to beginning book value. Ignore salvage but don\'t go below it.',cpaSection:'FAR'},
  {id:'f13',front:'Five steps of ASC 606?',back:'1) Identify contract. 2) Identify performance obligations. 3) Determine transaction price. 4) Allocate price. 5) Recognize revenue.',cpaSection:'FAR'},
  {id:'f14',front:'When is revenue recognized over time?',back:'Customer simultaneously receives/consumes benefits; entity creates customer-controlled asset; or no alternative use + right to payment.',cpaSection:'FAR'},
  {id:'f15',front:'Bonds at a discount: stated vs. market rate?',back:'Stated rate < market rate. Issue price below face value.',cpaSection:'FAR'},
  {id:'f16',front:'Effective interest method: interest expense?',back:'Interest Expense = Carrying Value × Market Rate at issuance.',cpaSection:'FAR'},
  {id:'f17',front:'Small vs. large stock dividend?',back:'Small (<20-25%): fair market value. Large (25%+): par value.',cpaSection:'FAR'},
  {id:'f18',front:'How is treasury stock reported?',back:'Contra-equity at cost. NOT an asset.',cpaSection:'FAR'},
  {id:'f19',front:'Equity method: investee dividends?',back:'Decrease the Investment account. Not revenue.',cpaSection:'FAR'},
  {id:'f20',front:'Trading vs. AFS debt vs. HTM?',back:'Trading: FV through income. AFS debt: FV through OCI. HTM: amortized cost.',cpaSection:'FAR'},
  {id:'f21',front:'Basic EPS formula?',back:'(Net Income − Preferred Dividends) / Weighted-Average Common Shares.',cpaSection:'FAR'},
  {id:'f22',front:'Treasury stock method for diluted EPS?',back:'Assume options exercised, proceeds buy back shares at avg market price, add net new shares.',cpaSection:'FAR'},
  {id:'f23',front:'ASC 842: lessee balance sheet?',back:'ROU asset and lease liability for virtually all leases.',cpaSection:'FAR'},
  {id:'f24',front:'Finance vs. operating lease expense?',back:'Finance: front-loaded (interest + amortization). Operating: straight-line.',cpaSection:'FAR'},
  {id:'f25',front:'Pension expense components?',back:'Service cost + Interest cost − Expected return + PSC amortization + Net G/L amortization.',cpaSection:'FAR'},
  {id:'f26',front:'What creates a DTL?',back:'Book income > taxable income temporarily. Future tax payments expected.',cpaSection:'FAR'},
  {id:'f27',front:'What creates a DTA?',back:'Taxable income > book income temporarily. Future tax benefit.',cpaSection:'FAR'},
  {id:'f28',front:'When is a valuation allowance needed?',back:'More likely than not (>50%) that DTA will not be realized.',cpaSection:'FAR'},
  {id:'f29',front:'Change in principle: treatment?',back:'Retrospective — restate prior periods.',cpaSection:'FAR'},
  {id:'f30',front:'Change in estimate: treatment?',back:'Prospective — current and future periods only.',cpaSection:'FAR'},
  {id:'f31',front:'ASC 450: when to accrue a loss?',back:'Probable AND estimable = accrue. Probable not estimable or reasonably possible = disclose. Remote = nothing.',cpaSection:'FAR'},
  {id:'f32',front:'Fair value hierarchy levels?',back:'L1: quoted prices, identical, active market. L2: observable inputs, similar. L3: unobservable, internal models.',cpaSection:'FAR'},
  {id:'f33',front:'Goodwill formula?',back:'Purchase Price − Fair Value of Net Identifiable Assets.',cpaSection:'FAR'},
  {id:'f34',front:'Translation vs. remeasurement?',back:'Translation (current rate): adjustment in OCI. Remeasurement (temporal): gain/loss in income.',cpaSection:'FAR'},
  {id:'f35',front:'Governmental funds: basis of accounting?',back:'Modified accrual, current financial resources focus.',cpaSection:'FAR'},
  {id:'f36',front:'Modified accrual: revenue recognition?',back:'Measurable and available (within 60 days).',cpaSection:'FAR'},
  {id:'f37',front:'NFP net asset categories?',back:'With donor restrictions and without donor restrictions.',cpaSection:'FAR'},
  {id:'f38',front:'What is an encumbrance?',back:'Commitment for goods ordered but not received. Dr. Encumbrances, Cr. Reserve for Encumbrances.',cpaSection:'FAR'},
  {id:'f39',front:'Indirect method: gain on sale of equipment?',back:'Subtract from net income in operating section. Full proceeds in investing.',cpaSection:'FAR'},
  {id:'f40',front:'Interest paid and dividends paid classification?',back:'Interest paid = operating. Dividends paid = financing (US GAAP).',cpaSection:'FAR'},
  {id:'f41',front:'Audit risk model?',back:'AR = IR × CR × DR.',cpaSection:'AUD'},
  {id:'f42',front:'Five COSO components?',back:'Control Environment, Risk Assessment, Control Activities, Info & Communication, Monitoring.',cpaSection:'AUD'},
  {id:'f43',front:'Material weakness vs. significant deficiency?',back:'MW: reasonable possibility of material misstatement. SD: less severe but merits governance attention.',cpaSection:'AUD'},
  {id:'f44',front:'Four audit opinions?',back:'Unmodified, Qualified, Adverse, Disclaimer.',cpaSection:'AUD'},
  {id:'f45',front:'When qualified opinion?',back:'Material but NOT pervasive misstatement or scope limitation.',cpaSection:'AUD'},
  {id:'f46',front:'When adverse opinion?',back:'Material AND pervasive misstatement.',cpaSection:'AUD'},
  {id:'f47',front:'When disclaimer?',back:'Material AND pervasive scope limitation.',cpaSection:'AUD'},
  {id:'f48',front:'Existence vs. completeness testing direction?',back:'Existence: records → reality. Completeness: reality → records.',cpaSection:'AUD'},
  {id:'f49',front:'Five threats to independence?',back:'Self-interest, self-review, advocacy, familiarity, undue influence.',cpaSection:'AUD'},
  {id:'f50',front:'Fraud triangle?',back:'Pressure/incentive + Opportunity + Rationalization/attitude.',cpaSection:'AUD'},
  {id:'f51',front:'Three responses to management override risk?',back:'Test journal entries, review estimates for bias, evaluate unusual transactions.',cpaSection:'AUD'},
  {id:'f52',front:'Positive vs. negative confirmations?',back:'Positive: reply whether agree or disagree. Negative: reply only if disagree.',cpaSection:'AUD'},
  {id:'f53',front:'When are analytical procedures required?',back:'Planning and overall review. Optional during substantive testing.',cpaSection:'AUD'},
  {id:'f54',front:'SOX Section 404?',back:'Management assesses ICFR. Auditor opines on ICFR for large accelerated filers.',cpaSection:'AUD'},
  {id:'f55',front:'Gross income for individuals?',back:'All income from whatever source unless specifically excluded.',cpaSection:'REG'},
  {id:'f56',front:'AGI formula?',back:'Gross Income − Above-the-line Deductions.',cpaSection:'REG'},
  {id:'f57',front:'Standard vs. itemized deductions?',back:'Take the greater. Itemized: medical >7.5% AGI, SALT $10K cap, mortgage interest, charity.',cpaSection:'REG'},
  {id:'f58',front:'Corporate tax rate (post-TCJA)?',back:'Flat 21%.',cpaSection:'REG'},
  {id:'f59',front:'DRD percentages?',back:'<20%: 50%. 20-79%: 65%. 80%+: 100%.',cpaSection:'REG'},
  {id:'f60',front:'Partnership taxation?',back:'Pass-through. Form 1065 informational. K-1 to partners. No entity tax.',cpaSection:'REG'},
  {id:'f61',front:'Partner basis calculation?',back:'Contribution + income + liabilities − distributions − losses.',cpaSection:'REG'},
  {id:'f62',front:'Five contract elements?',back:'Offer, acceptance, consideration, capacity, legality.',cpaSection:'REG'},
  {id:'f63',front:'UCC Article 2 Statute of Frauds?',back:'Goods $500+ must be in writing.',cpaSection:'REG'},
  {id:'f64',front:'Annual gift tax exclusion?',back:'Per-donee amount indexed for inflation. Present interest gifts only.',cpaSection:'REG'},
  {id:'f65',front:'Unlimited marital deduction?',back:'Unlimited transfer to US citizen surviving spouse, free of estate/gift tax.',cpaSection:'REG'},
  {id:'f66',front:'Circular 230 standards?',back:'Realistic possibility. Disclosed: reasonable basis >20%. Tax shelters: >50%.',cpaSection:'REG'},
  {id:'f67',front:'Section 7525 privilege?',back:'Limited: non-criminal federal tax matters only. Not for return prep or state.',cpaSection:'REG'},
  {id:'f68',front:'NOL rules post-TCJA?',back:'80% of taxable income limit, indefinite carryforward, generally no carryback.',cpaSection:'REG'},
  {id:'f69',front:'GDP formula?',back:'C + I + G + (X − M).',cpaSection:'BEC'},
  {id:'f70',front:'Porter\'s Five Forces?',back:'New entrants, supplier power, buyer power, substitutes, rivalry.',cpaSection:'BEC'},
  {id:'f71',front:'NPV decision rule?',back:'Accept if NPV > 0.',cpaSection:'BEC'},
  {id:'f72',front:'WACC formula?',back:'(E/V × Re) + (D/V × Rd × (1−T)). After-tax cost of debt.',cpaSection:'BEC'},
  {id:'f73',front:'CAPM formula?',back:'Re = Rf + β(Rm − Rf).',cpaSection:'BEC'},
  {id:'f74',front:'Breakeven in units?',back:'Fixed Costs / CM per Unit.',cpaSection:'BEC'},
  {id:'f75',front:'Material price variance?',back:'(AP − SP) × AQ. Favorable if AP < SP.',cpaSection:'BEC'},
  {id:'f76',front:'Material quantity variance?',back:'(AQ − SQ) × SP. Favorable if AQ < SQ.',cpaSection:'BEC'},
  {id:'f77',front:'What is Six Sigma?',back:'Quality methodology: 3.4 defects per million. Uses DMAIC framework.',cpaSection:'BEC'},
  {id:'f78',front:'IT general vs. application controls?',back:'General: access, change mgmt, operations. Application: input, processing, output.',cpaSection:'BEC'},
  {id:'f79',front:'SOC 1 vs. SOC 2?',back:'SOC 1: financial reporting controls. SOC 2: security, availability, confidentiality, privacy.',cpaSection:'BEC'},
  {id:'f80',front:'Cash conversion cycle?',back:'Days Inventory + Days Receivables − Days Payables.',cpaSection:'BEC'},
  {id:'f81',front:'Balanced scorecard perspectives?',back:'Financial, Customer, Internal Processes, Learning & Growth.',cpaSection:'BEC'},
  {id:'f82',front:'Four types of analytics?',back:'Descriptive, Diagnostic, Predictive, Prescriptive.',cpaSection:'BEC'},
  {id:'f83',front:'Profit maximization condition?',back:'MR = MC.',cpaSection:'BEC'},
  {id:'f84',front:'What is ABC costing?',back:'Allocates overhead using multiple activity-based cost drivers for more accurate product costs.',cpaSection:'BEC'}
];

/* ---------- MATCHING BANK (5 sets, 8 pairs each) ---------- */
const MATCHING_BANK = [
  {
    title:'Accounting Fundamentals',
    pairs:[
      {term:'Assets',definition:'Resources owned providing future economic benefit'},
      {term:'Liabilities',definition:'Present obligations to transfer assets or provide services'},
      {term:'Equity',definition:'Owners\' residual interest after liabilities'},
      {term:'Debit',definition:'Left side entry in a T-account'},
      {term:'Credit',definition:'Right side entry in a T-account'},
      {term:'Journal Entry',definition:'Chronological record with equal debits and credits'},
      {term:'Trial Balance',definition:'List of all accounts verifying debits equal credits'},
      {term:'Closing Entries',definition:'Reset temporary accounts to zero at period-end'}
    ]
  },
  {
    title:'Financial Statements and Ratios',
    pairs:[
      {term:'Balance Sheet',definition:'Reports assets, liabilities, and equity at a point in time'},
      {term:'Income Statement',definition:'Reports revenues and expenses for a period'},
      {term:'Cash Flow Statement',definition:'Reports cash inflows and outflows by activity'},
      {term:'Current Ratio',definition:'Current Assets / Current Liabilities'},
      {term:'Return on Equity',definition:'Net Income / Average Stockholders\' Equity'},
      {term:'Gross Margin',definition:'(Sales − COGS) / Sales'},
      {term:'Working Capital',definition:'Current Assets − Current Liabilities'},
      {term:'EPS',definition:'(Net Income − Preferred Dividends) / Weighted-Avg Shares'}
    ]
  },
  {
    title:'Audit and Assurance Terms',
    pairs:[
      {term:'Material Weakness',definition:'Control deficiency with reasonable possibility of material misstatement'},
      {term:'Audit Risk',definition:'Risk of issuing an inappropriate opinion'},
      {term:'Detection Risk',definition:'Risk that audit procedures fail to detect a misstatement'},
      {term:'Positive Confirmation',definition:'Respondent replies whether they agree or disagree'},
      {term:'COSO Framework',definition:'Five-component framework for internal control'},
      {term:'Unmodified Opinion',definition:'Clean opinion — fairly presented in all material respects'},
      {term:'Emphasis-of-Matter',definition:'Paragraph highlighting a matter properly presented in financials'},
      {term:'Professional Skepticism',definition:'Questioning mind and critical assessment of evidence'}
    ]
  },
  {
    title:'Tax and Regulation Terms',
    pairs:[
      {term:'AGI',definition:'Gross income minus above-the-line deductions'},
      {term:'Section 199A',definition:'20% QBI deduction for pass-through income'},
      {term:'S Corporation',definition:'Pass-through entity, max 100 shareholders, one class of stock'},
      {term:'FUTA',definition:'Federal unemployment tax paid by employer only'},
      {term:'Section 1031',definition:'Tax-deferred like-kind exchange of real property'},
      {term:'DRD',definition:'Deduction reducing triple taxation of corporate dividends'},
      {term:'Schedule K-1',definition:'Reports partner/shareholder share of pass-through income'},
      {term:'Circular 230',definition:'Treasury rules for practice before the IRS'}
    ]
  },
  {
    title:'Business Environment Concepts',
    pairs:[
      {term:'NPV',definition:'PV of inflows minus initial investment'},
      {term:'IRR',definition:'Discount rate making NPV equal zero'},
      {term:'WACC',definition:'Weighted average cost of debt and equity'},
      {term:'CAPM',definition:'Re = Rf + Beta × Market Risk Premium'},
      {term:'Breakeven Point',definition:'Volume where revenue equals total costs'},
      {term:'Contribution Margin',definition:'Selling price minus variable cost per unit'},
      {term:'Six Sigma',definition:'3.4 defects per million using DMAIC'},
      {term:'Theory of Constraints',definition:'Focus on identifying and improving the bottleneck'}
    ]
  }
];

/* ---------- DEBIT/CREDIT SCENARIOS (32) ---------- */
const DEBIT_CREDIT_SCENARIOS = [
  {scenario:'Company receives cash for services performed.',entries:[{account:'Cash',normalBalance:'debit',action:'increase',correctSide:'debit'},{account:'Service Revenue',normalBalance:'credit',action:'increase',correctSide:'credit'}]},
  {scenario:'Company purchases supplies on account.',entries:[{account:'Supplies',normalBalance:'debit',action:'increase',correctSide:'debit'},{account:'Accounts Payable',normalBalance:'credit',action:'increase',correctSide:'credit'}]},
  {scenario:'Company pays weekly wages.',entries:[{account:'Wages Expense',normalBalance:'debit',action:'increase',correctSide:'debit'},{account:'Cash',normalBalance:'debit',action:'decrease',correctSide:'credit'}]},
  {scenario:'Company collects on accounts receivable.',entries:[{account:'Cash',normalBalance:'debit',action:'increase',correctSide:'debit'},{account:'Accounts Receivable',normalBalance:'debit',action:'decrease',correctSide:'credit'}]},
  {scenario:'Company pays off notes payable.',entries:[{account:'Notes Payable',normalBalance:'credit',action:'decrease',correctSide:'debit'},{account:'Cash',normalBalance:'debit',action:'decrease',correctSide:'credit'}]},
  {scenario:'Owner invests cash into the business.',entries:[{account:'Cash',normalBalance:'debit',action:'increase',correctSide:'debit'},{account:'Common Stock',normalBalance:'credit',action:'increase',correctSide:'credit'}]},
  {scenario:'Company records monthly depreciation.',entries:[{account:'Depreciation Expense',normalBalance:'debit',action:'increase',correctSide:'debit'},{account:'Accumulated Depreciation',normalBalance:'credit',action:'increase',correctSide:'credit'}]},
  {scenario:'Company declares a cash dividend.',entries:[{account:'Dividends',normalBalance:'debit',action:'increase',correctSide:'debit'},{account:'Dividends Payable',normalBalance:'credit',action:'increase',correctSide:'credit'}]},
  {scenario:'Company pays rent in advance.',entries:[{account:'Prepaid Rent',normalBalance:'debit',action:'increase',correctSide:'debit'},{account:'Cash',normalBalance:'debit',action:'decrease',correctSide:'credit'}]},
  {scenario:'Customer returns merchandise for a refund.',entries:[{account:'Sales Revenue',normalBalance:'credit',action:'decrease',correctSide:'debit'},{account:'Cash',normalBalance:'debit',action:'decrease',correctSide:'credit'}]},
  {scenario:'Company borrows $50,000 by signing a note.',entries:[{account:'Cash',normalBalance:'debit',action:'increase',correctSide:'debit'},{account:'Notes Payable',normalBalance:'credit',action:'increase',correctSide:'credit'}]},
  {scenario:'Company purchases inventory with cash.',entries:[{account:'Inventory',normalBalance:'debit',action:'increase',correctSide:'debit'},{account:'Cash',normalBalance:'debit',action:'decrease',correctSide:'credit'}]},
  {scenario:'Company sells merchandise on credit.',entries:[{account:'Accounts Receivable',normalBalance:'debit',action:'increase',correctSide:'debit'},{account:'Sales Revenue',normalBalance:'credit',action:'increase',correctSide:'credit'}]},
  {scenario:'Company records COGS for merchandise shipped.',entries:[{account:'Cost of Goods Sold',normalBalance:'debit',action:'increase',correctSide:'debit'},{account:'Inventory',normalBalance:'debit',action:'decrease',correctSide:'credit'}]},
  {scenario:'Company pays the monthly utility bill.',entries:[{account:'Utilities Expense',normalBalance:'debit',action:'increase',correctSide:'debit'},{account:'Cash',normalBalance:'debit',action:'decrease',correctSide:'credit'}]},
  {scenario:'Company receives cash before performing services.',entries:[{account:'Cash',normalBalance:'debit',action:'increase',correctSide:'debit'},{account:'Unearned Revenue',normalBalance:'credit',action:'increase',correctSide:'credit'}]},
  {scenario:'Company writes off an uncollectible AR.',entries:[{account:'Allowance for Doubtful Accounts',normalBalance:'credit',action:'decrease',correctSide:'debit'},{account:'Accounts Receivable',normalBalance:'debit',action:'decrease',correctSide:'credit'}]},
  {scenario:'Company pays accounts payable.',entries:[{account:'Accounts Payable',normalBalance:'credit',action:'decrease',correctSide:'debit'},{account:'Cash',normalBalance:'debit',action:'decrease',correctSide:'credit'}]},
  {scenario:'Company issues bonds at face value.',entries:[{account:'Cash',normalBalance:'debit',action:'increase',correctSide:'debit'},{account:'Bonds Payable',normalBalance:'credit',action:'increase',correctSide:'credit'}]},
  {scenario:'Company accrues interest on a loan.',entries:[{account:'Interest Expense',normalBalance:'debit',action:'increase',correctSide:'debit'},{account:'Interest Payable',normalBalance:'credit',action:'increase',correctSide:'credit'}]},
  {scenario:'Company sells equipment at a gain.',entries:[{account:'Cash',normalBalance:'debit',action:'increase',correctSide:'debit'},{account:'Gain on Sale of Assets',normalBalance:'credit',action:'increase',correctSide:'credit'}]},
  {scenario:'Company records income tax expense.',entries:[{account:'Income Tax Expense',normalBalance:'debit',action:'increase',correctSide:'debit'},{account:'Income Tax Payable',normalBalance:'credit',action:'increase',correctSide:'credit'}]},
  {scenario:'Company issues stock above par for cash.',entries:[{account:'Cash',normalBalance:'debit',action:'increase',correctSide:'debit'},{account:'Common Stock',normalBalance:'credit',action:'increase',correctSide:'credit'}]},
  {scenario:'Company purchases treasury stock.',entries:[{account:'Treasury Stock',normalBalance:'debit',action:'increase',correctSide:'debit'},{account:'Cash',normalBalance:'debit',action:'decrease',correctSide:'credit'}]},
  {scenario:'Company estimates bad debt expense.',entries:[{account:'Bad Debt Expense',normalBalance:'debit',action:'increase',correctSide:'debit'},{account:'Allowance for Doubtful Accounts',normalBalance:'credit',action:'increase',correctSide:'credit'}]},
  {scenario:'Company accepts a note from a customer.',entries:[{account:'Notes Receivable',normalBalance:'debit',action:'increase',correctSide:'debit'},{account:'Accounts Receivable',normalBalance:'debit',action:'decrease',correctSide:'credit'}]},
  {scenario:'Company pays the declared dividend.',entries:[{account:'Dividends Payable',normalBalance:'credit',action:'decrease',correctSide:'debit'},{account:'Cash',normalBalance:'debit',action:'decrease',correctSide:'credit'}]},
  {scenario:'Company earns interest on bank account.',entries:[{account:'Cash',normalBalance:'debit',action:'increase',correctSide:'debit'},{account:'Interest Revenue',normalBalance:'credit',action:'increase',correctSide:'credit'}]},
  {scenario:'Company purchases a patent for cash.',entries:[{account:'Patents',normalBalance:'debit',action:'increase',correctSide:'debit'},{account:'Cash',normalBalance:'debit',action:'decrease',correctSide:'credit'}]},
  {scenario:'Company records patent amortization.',entries:[{account:'Amortization Expense',normalBalance:'debit',action:'increase',correctSide:'debit'},{account:'Patents',normalBalance:'debit',action:'decrease',correctSide:'credit'}]},
  {scenario:'Company receives insurance refund.',entries:[{account:'Cash',normalBalance:'debit',action:'increase',correctSide:'debit'},{account:'Prepaid Insurance',normalBalance:'debit',action:'decrease',correctSide:'credit'}]},
  {scenario:'Company remits sales tax to state.',entries:[{account:'Sales Tax Payable',normalBalance:'credit',action:'decrease',correctSide:'debit'},{account:'Cash',normalBalance:'debit',action:'decrease',correctSide:'credit'}]}
];

const DC_BANK = [
  {scenario:"A company purchases office supplies for cash",account:"Supplies",correct:"debit"},
  {scenario:"A company purchases office supplies for cash",account:"Cash",correct:"credit"},
  {scenario:"A company provides services and bills the customer",account:"Accounts Receivable",correct:"debit"},
  {scenario:"A company provides services and bills the customer",account:"Service Revenue",correct:"credit"},
  {scenario:"A company pays rent for the current month",account:"Rent Expense",correct:"debit"},
  {scenario:"A company pays rent for the current month",account:"Cash",correct:"credit"},
  {scenario:"A company borrows money from a bank",account:"Cash",correct:"debit"},
  {scenario:"A company borrows money from a bank",account:"Notes Payable",correct:"credit"},
  {scenario:"A company pays salaries to employees",account:"Salaries Expense",correct:"debit"},
  {scenario:"A company pays salaries to employees",account:"Cash",correct:"credit"},
  {scenario:"A customer pays their outstanding balance",account:"Cash",correct:"debit"},
  {scenario:"A customer pays their outstanding balance",account:"Accounts Receivable",correct:"credit"},
  {scenario:"A company issues common stock for cash",account:"Cash",correct:"debit"},
  {scenario:"A company issues common stock for cash",account:"Common Stock",correct:"credit"},
  {scenario:"A company declares a cash dividend",account:"Retained Earnings",correct:"debit"},
  {scenario:"A company declares a cash dividend",account:"Dividends Payable",correct:"credit"},
  {scenario:"A company records depreciation expense",account:"Depreciation Expense",correct:"debit"},
  {scenario:"A company records depreciation expense",account:"Accumulated Depreciation - Equipment",correct:"credit"},
  {scenario:"A company receives cash in advance for services",account:"Cash",correct:"debit"},
  {scenario:"A company receives cash in advance for services",account:"Unearned Revenue",correct:"credit"},
  {scenario:"A company recognizes previously unearned revenue",account:"Unearned Revenue",correct:"debit"},
  {scenario:"A company recognizes previously unearned revenue",account:"Service Revenue",correct:"credit"},
  {scenario:"A company writes off an uncollectible account (allowance method)",account:"Allowance for Doubtful Accounts",correct:"debit"},
  {scenario:"A company writes off an uncollectible account (allowance method)",account:"Accounts Receivable",correct:"credit"},
  {scenario:"A company purchases equipment by signing a note payable",account:"Equipment",correct:"debit"},
  {scenario:"A company purchases equipment by signing a note payable",account:"Notes Payable",correct:"credit"},
  {scenario:"A company pays its accounts payable balance",account:"Accounts Payable",correct:"debit"},
  {scenario:"A company pays its accounts payable balance",account:"Cash",correct:"credit"},
  {scenario:"A company records bad debt expense using the allowance method",account:"Bad Debt Expense",correct:"debit"},
  {scenario:"A company records bad debt expense using the allowance method",account:"Allowance for Doubtful Accounts",correct:"credit"},
  {scenario:"A company repurchases its own stock (treasury stock, cost method)",account:"Treasury Stock",correct:"debit"},
  {scenario:"A company repurchases its own stock (treasury stock, cost method)",account:"Cash",correct:"credit"},
  {scenario:"A company accrues interest expense on a note payable",account:"Interest Expense",correct:"debit"},
  {scenario:"A company accrues interest expense on a note payable",account:"Interest Payable",correct:"credit"}
];

/* ---------- ACCOUNT SORT DATA ---------- */
const ACCOUNT_SORT_DATA = [
  {name:'Cash', category:'Asset'},
  {name:'Accounts Receivable', category:'Asset'},
  {name:'Inventory', category:'Asset'},
  {name:'Prepaid Insurance', category:'Asset'},
  {name:'Supplies', category:'Asset'},
  {name:'Equipment', category:'Asset'},
  {name:'Land', category:'Asset'},
  {name:'Buildings', category:'Asset'},
  {name:'Right-of-use Asset', category:'Asset'},
  {name:'Goodwill', category:'Asset'},
  {name:'Patents', category:'Asset'},
  {name:'Notes Receivable', category:'Asset'},
  {name:'Accounts Payable', category:'Liability'},
  {name:'Notes Payable', category:'Liability'},
  {name:'Wages Payable', category:'Liability'},
  {name:'Unearned Revenue', category:'Liability'},
  {name:'Bonds Payable', category:'Liability'},
  {name:'Income Tax Payable', category:'Liability'},
  {name:'Lease Liability', category:'Liability'},
  {name:'Interest Payable', category:'Liability'},
  {name:'Mortgage Payable', category:'Liability'},
  {name:'Deferred Tax Liability', category:'Liability'},
  {name:'Common Stock', category:'Equity'},
  {name:'Preferred Stock', category:'Equity'},
  {name:'Retained Earnings', category:'Equity'},
  {name:'APIC', category:'Equity'},
  {name:'Treasury Stock', category:'Equity'},
  {name:'Dividends', category:'Equity'},
  {name:'Service Revenue', category:'Revenue'},
  {name:'Sales Revenue', category:'Revenue'},
  {name:'Interest Revenue', category:'Revenue'},
  {name:'Rent Revenue', category:'Revenue'},
  {name:'Gain on Sale of Assets', category:'Revenue'},
  {name:'Wages Expense', category:'Expense'},
  {name:'Rent Expense', category:'Expense'},
  {name:'Depreciation Expense', category:'Expense'},
  {name:'Cost of Goods Sold', category:'Expense'},
  {name:'Utilities Expense', category:'Expense'},
  {name:'Insurance Expense', category:'Expense'},
  {name:'Bad Debt Expense', category:'Expense'},
  {name:'Interest Expense', category:'Expense'},
  {name:'Income Tax Expense', category:'Expense'},
  {name:'Supplies Expense', category:'Expense'},
  {name:'Advertising Expense', category:'Expense'},
  {name:'Amortization Expense', category:'Expense'}
];

/* ---------- EQUATION SCENARIOS (10) ---------- */
const EQUATION_SCENARIOS = [
  {description:'Company receives $30,000 cash from issuing common stock.',startAssets:50000,startLiabilities:20000,startEquity:30000,changes:[{field:'assets',amount:30000},{field:'equity',amount:30000}],explanation:'Issuing stock increases both Cash (asset) and Common Stock (equity) by $30,000.'},
  {description:'Company borrows $15,000 from the bank, signing a note payable.',startAssets:50000,startLiabilities:20000,startEquity:30000,changes:[{field:'assets',amount:15000},{field:'liabilities',amount:15000}],explanation:'Borrowing increases Cash (asset) and Notes Payable (liability) equally. Equity is unchanged.'},
  {description:'Company purchases equipment for $10,000 cash.',startAssets:50000,startLiabilities:20000,startEquity:30000,changes:[{field:'assets',amount:0}],explanation:'One asset (Cash) decreases by $10,000 and another (Equipment) increases by $10,000. Total assets unchanged.'},
  {description:'Company pays $5,000 on accounts payable.',startAssets:50000,startLiabilities:20000,startEquity:30000,changes:[{field:'assets',amount:-5000},{field:'liabilities',amount:-5000}],explanation:'Cash (asset) decreases $5,000 and Accounts Payable (liability) decreases $5,000.'},
  {description:'Company provides $8,000 of services for cash.',startAssets:50000,startLiabilities:20000,startEquity:30000,changes:[{field:'assets',amount:8000},{field:'equity',amount:8000}],explanation:'Cash increases $8,000 and Revenue increases equity by $8,000 through retained earnings.'},
  {description:'Company pays $3,000 in employee wages.',startAssets:50000,startLiabilities:20000,startEquity:30000,changes:[{field:'assets',amount:-3000},{field:'equity',amount:-3000}],explanation:'Cash decreases $3,000 and Wages Expense decreases equity by $3,000.'},
  {description:'Company receives $12,000 cash in advance for future services.',startAssets:60000,startLiabilities:25000,startEquity:35000,changes:[{field:'assets',amount:12000},{field:'liabilities',amount:12000}],explanation:'Cash increases and Unearned Revenue (liability) increases. Revenue is NOT earned yet.'},
  {description:'Company declares and pays $4,000 in dividends.',startAssets:60000,startLiabilities:25000,startEquity:35000,changes:[{field:'assets',amount:-4000},{field:'equity',amount:-4000}],explanation:'Cash decreases $4,000 and Dividends reduce Retained Earnings (equity) by $4,000.'},
  {description:'Company purchases $7,000 of inventory on credit.',startAssets:40000,startLiabilities:15000,startEquity:25000,changes:[{field:'assets',amount:7000},{field:'liabilities',amount:7000}],explanation:'Inventory (asset) increases $7,000 and Accounts Payable (liability) increases $7,000.'},
  {description:'Company receives $2,500 cash from a customer paying their account balance.',startAssets:40000,startLiabilities:15000,startEquity:25000,changes:[{field:'assets',amount:0}],explanation:'Cash increases $2,500 and Accounts Receivable decreases $2,500. Total assets unchanged.'}
];

/* ---------- BANK RECONCILIATION SCENARIOS (8) ---------- */
const BANK_REC_SCENARIOS = [
  {
    title:'Basic Bank Reconciliation',
    bankBalance:24500,bookBalance:23800,depositsInTransit:3200,outstandingChecks:4100,
    interestEarned:50,bankFees:25,nsfChecks:325,collections:0,
    description:'The December 31 bank statement shows a balance of $24,500. The company\'s book balance is $23,800. There are deposits in transit of $3,200 and outstanding checks totaling $4,100. The bank earned $50 interest, charged $25 in service fees, and returned a $325 NSF check.'
  },
  {
    title:'Reconciliation with Collections',
    bankBalance:45200,bookBalance:42100,depositsInTransit:5800,outstandingChecks:7400,
    interestEarned:120,bankFees:45,nsfChecks:675,collections:2000,
    description:'Bank statement: $45,200. Book balance: $42,100. Deposits in transit: $5,800. Outstanding checks: $7,400. Bank collected a $2,000 note receivable. Interest earned: $120. Bank fees: $45. NSF check: $675.'
  },
  {
    title:'Month-End Reconciliation',
    bankBalance:18750,bookBalance:19200,depositsInTransit:2100,outstandingChecks:1500,
    interestEarned:30,bankFees:15,nsfChecks:165,collections:0,
    description:'Bank balance: $18,750. Book balance: $19,200. Deposit in transit: $2,100. Outstanding checks: $1,500. Interest: $30. Service charge: $15. NSF check: $165.'
  },
  {
    title:'Complex Reconciliation',
    bankBalance:67800,bookBalance:63450,depositsInTransit:8500,outstandingChecks:11200,
    interestEarned:250,bankFees:75,nsfChecks:525,collections:3000,
    description:'Bank: $67,800. Books: $63,450. Deposits in transit: $8,500. Outstanding checks: $11,200. Bank collected a $3,000 note plus $250 interest. Service charges: $75. NSF check: $525.'
  },
  {
    title:'Small Business Reconciliation',
    bankBalance:8900,bookBalance:8650,depositsInTransit:1200,outstandingChecks:1550,
    interestEarned:15,bankFees:30,nsfChecks:85,collections:0,
    description:'Bank: $8,900. Check register: $8,650. Deposit in transit: $1,200. Outstanding checks: $1,550. Interest: $15. Monthly fee: $30. Bounced check: $85.'
  },
  {
    title:'Quarter-End Reconciliation',
    bankBalance:35600,bookBalance:33200,depositsInTransit:4200,outstandingChecks:5800,
    interestEarned:180,bankFees:50,nsfChecks:430,collections:1500,
    description:'Bank: $35,600. Books: $33,200. Deposits in transit: $4,200. Outstanding checks: $5,800. Bank collected $1,500 note. Interest: $180. Service charges: $50. NSF check: $430.'
  },
  {
    title:'Year-End Reconciliation with Error',
    bankBalance:52400,bookBalance:50950,depositsInTransit:6300,outstandingChecks:8200,
    interestEarned:200,bankFees:60,nsfChecks:340,collections:2500,
    description:'Bank: $52,400. Books: $50,950. Deposits in transit: $6,300. Outstanding checks: $8,200. Bank collected $2,500 note. Interest: $200. Fees: $60. NSF check: $340. Note: the company recorded check #4521 for $890 but it was actually for $980 (understated by $90).'
  },
  {
    title:'New Business Reconciliation',
    bankBalance:15200,bookBalance:14800,depositsInTransit:1800,outstandingChecks:2400,
    interestEarned:25,bankFees:20,nsfChecks:205,collections:0,
    description:'Bank: $15,200. Books: $14,800. Deposit in transit: $1,800. Outstanding checks: $2,400. Interest: $25. Bank fee: $20. NSF check from customer: $205.'
  }
];

/* ---------- CASE STUDY BANK (10+ multi-step TBS practice) ---------- */
const CASE_STUDY_BANK = [
  {
    id:'case01',title:'Revenue Recognition Analysis',section:'FAR',
    description:'TechCorp enters into a contract with a customer for $120,000 to deliver software ($80,000 standalone price), installation services ($20,000 standalone price), and 2 years of support ($40,000 standalone price). Analyze the transaction under ASC 606.',
    steps:[
      {question:'How many distinct performance obligations are in this contract?',type:'mcq',choices:['1','2','3','4'],correct:2,explanation:'Three obligations: software delivery, installation services, and 2-year support. Each provides distinct benefit to the customer.'},
      {question:'What is the total standalone selling price of all performance obligations?',type:'mcq',choices:['$120,000','$140,000','$100,000','$160,000'],correct:1,explanation:'Total standalone selling prices: $80,000 + $20,000 + $40,000 = $140,000.'},
      {question:'How much revenue is allocated to the software delivery?',type:'mcq',choices:['$80,000','$68,571','$40,000','$60,000'],correct:1,explanation:'Allocation based on relative standalone prices: ($80,000 / $140,000) × $120,000 = $68,571 (rounded).'},
      {question:'The 2-year support revenue should be recognized:',type:'mcq',choices:['Entirely at contract signing','Entirely when support begins','Ratably over the 2-year support period','When the customer requests support'],correct:2,explanation:'Support services are satisfied over time as the customer simultaneously receives and consumes the benefits. Revenue is recognized ratably over 24 months.'}
    ]
  },
  {
    id:'case02',title:'Bond Issuance and Interest',section:'FAR',
    description:'On January 1, Year 1, ABC Corp issues $500,000 of 10-year, 6% bonds when the market rate is 8%. The bonds pay interest semiannually on June 30 and December 31. The bonds are issued at $432,050 (PV of cash flows at 4% per period for 20 periods).',
    steps:[
      {question:'Were these bonds issued at a premium or discount?',type:'mcq',choices:['Premium','Par','Discount','Cannot determine'],correct:2,explanation:'The issue price ($432,050) is less than face value ($500,000), so the bonds were issued at a discount. This occurs because the stated rate (6%) is less than the market rate (8%).'},
      {question:'What is the cash interest payment each period?',type:'mcq',choices:['$15,000','$30,000','$17,282','$20,000'],correct:0,explanation:'Cash interest = Face value × stated rate × 1/2 = $500,000 × 6% × 1/2 = $15,000 per semiannual period.'},
      {question:'What is the interest expense for the first semiannual period using the effective interest method?',type:'mcq',choices:['$15,000','$17,282','$20,000','$12,962'],correct:1,explanation:'Interest expense = Carrying value × market rate per period = $432,050 × 4% = $17,282.'},
      {question:'What is the discount amortization for the first period?',type:'mcq',choices:['$2,282','$15,000','$3,000','$5,000'],correct:0,explanation:'Discount amortization = Interest expense − Cash paid = $17,282 − $15,000 = $2,282. The carrying value increases by this amount.'}
    ]
  },
  {
    id:'case03',title:'Lease Classification and Accounting',section:'FAR',
    description:'On January 1, Delta Corp leases equipment with a fair value of $100,000. Lease term: 4 years. Useful life of equipment: 5 years. Annual lease payments: $28,000 due at year-end. Implicit rate: 6%. PV of lease payments at 6%: $97,052. No transfer of ownership or purchase option.',
    steps:[
      {question:'Is this a finance lease or operating lease?',type:'mcq',choices:['Finance lease','Operating lease','Neither — it is a short-term lease','Cannot determine without more information'],correct:0,explanation:'The lease term (4 years) is 80% of the useful life (5 years), which is a "major part" (>75% rule of thumb). Also, PV of payments ($97,052) is 97% of fair value ($100,000), which is "substantially all" (>90%). Either criterion alone triggers finance lease classification.'},
      {question:'What is the initial lease liability recorded?',type:'mcq',choices:['$100,000','$112,000','$97,052','$28,000'],correct:2,explanation:'The lease liability is measured at the present value of lease payments = $97,052.'},
      {question:'What is the initial right-of-use asset recorded?',type:'mcq',choices:['$100,000','$97,052','$28,000','$112,000'],correct:1,explanation:'The ROU asset equals the lease liability ($97,052) plus any initial direct costs or prepayments, minus lease incentives. With no adjustments, ROU = $97,052.'},
      {question:'For a finance lease, Year 1 interest expense on the liability is:',type:'mcq',choices:['$28,000','$5,823','$6,000','$97,052'],correct:1,explanation:'Interest expense = Lease liability × implicit rate = $97,052 × 6% = $5,823. The remaining $22,177 of the $28,000 payment reduces the lease liability.'}
    ]
  },
  {
    id:'case04',title:'Audit Risk Assessment',section:'AUD',
    description:'You are the senior auditor for the audit of Zenith Manufacturing, a publicly traded company. During planning, you learn that (1) the company recently changed its revenue recognition policy, (2) the CFO receives a large bonus tied to earnings targets, and (3) the company has significant transactions with related parties.',
    steps:[
      {question:'The CFO\'s earnings-based bonus creates which element of the fraud triangle?',type:'mcq',choices:['Opportunity','Rationalization','Pressure/Incentive','None — bonuses are normal'],correct:2,explanation:'An earnings-based bonus creates pressure/incentive (motive) for management to manipulate earnings to meet targets and receive the bonus.'},
      {question:'The change in revenue recognition policy should increase the auditor\'s concern about:',type:'mcq',choices:['The existence assertion for cash','The completeness assertion for payables','The risk of earnings manipulation through revenue timing','The valuation of inventory'],correct:2,explanation:'A change in revenue recognition policy during the audit period raises concern about earnings manipulation. The auditor should evaluate whether the change is justified and properly applied.'},
      {question:'For the related party transactions, the auditor should:',type:'mcq',choices:['Ignore them if they are disclosed','Evaluate whether they are properly disclosed and at arm\'s length terms','Only consider them if they exceed materiality','Report them to the SEC immediately'],correct:1,explanation:'The auditor must evaluate related party transactions for proper identification, disclosure, and whether the terms are at arm\'s length. Related party transactions increase the risk of material misstatement.'},
      {question:'Given these risk factors, the auditor should:',type:'mcq',choices:['Issue a qualified opinion immediately','Reduce the extent of substantive testing','Increase professional skepticism and design procedures responsive to the identified risks','Withdraw from the engagement'],correct:2,explanation:'The auditor should heighten professional skepticism and design audit procedures that specifically address the identified fraud risk factors and risks of material misstatement.'}
    ]
  },
  {
    id:'case05',title:'Individual Tax Computation',section:'REG',
    description:'Sarah is single with the following Year 1 items: Salary $95,000; Interest income $3,000; Municipal bond interest $2,000; Student loan interest paid $2,500; IRA contribution $6,000; Itemized deductions total $11,500. Standard deduction for single filers: $14,600.',
    steps:[
      {question:'What is Sarah\'s gross income?',type:'mcq',choices:['$100,000','$98,000','$95,000','$102,500'],correct:1,explanation:'Gross income = Salary ($95,000) + Interest income ($3,000) = $98,000. Municipal bond interest ($2,000) is excluded from gross income.'},
      {question:'What is Sarah\'s AGI?',type:'mcq',choices:['$98,000','$89,500','$92,000','$95,500'],correct:1,explanation:'AGI = $98,000 − $2,500 (student loan interest) − $6,000 (IRA contribution) = $89,500. Both are above-the-line deductions.'},
      {question:'Should Sarah itemize or take the standard deduction?',type:'mcq',choices:['Itemize — her itemized deductions ($11,500) exceed the standard deduction','Take the standard deduction ($14,600) because it is larger','She must itemize if she has an IRA','She cannot deduct anything because her income is too high'],correct:1,explanation:'Sarah should take the standard deduction ($14,600) because it exceeds her itemized deductions ($11,500). Taxpayers choose whichever is greater.'},
      {question:'What is Sarah\'s taxable income?',type:'mcq',choices:['$74,900','$78,000','$83,500','$89,500'],correct:0,explanation:'Taxable income = AGI ($89,500) − Standard deduction ($14,600) = $74,900.'}
    ]
  },
  {
    id:'case06',title:'Consolidation Elimination Entries',section:'FAR',
    description:'Parent Co. acquired 100% of Sub Co. for $800,000 on January 1. On that date, Sub\'s book value of net assets was $600,000. The fair value of Sub\'s identifiable net assets was $720,000 (the $120,000 excess was attributed to undervalued equipment with a 10-year remaining life). During Year 1, Sub reported net income of $50,000 and declared dividends of $10,000.',
    steps:[
      {question:'How much goodwill was recorded at acquisition?',type:'mcq',choices:['$200,000','$80,000','$120,000','$0'],correct:1,explanation:'Goodwill = Purchase price ($800,000) − Fair value of net identifiable assets ($720,000) = $80,000.'},
      {question:'What is the annual amortization of the equipment fair value adjustment?',type:'mcq',choices:['$12,000','$8,000','$120,000','$60,000'],correct:0,explanation:'The $120,000 equipment adjustment is amortized over the 10-year remaining life: $120,000 / 10 = $12,000 per year.'},
      {question:'In the consolidation elimination entries, the Investment account is eliminated against:',type:'mcq',choices:['Sub\'s total assets','Sub\'s stockholders\' equity accounts at acquisition','Sub\'s revenue','Sub\'s cash'],correct:1,explanation:'The basic elimination entry removes the parent\'s Investment account and the subsidiary\'s equity accounts (Common Stock, APIC, Retained Earnings) at their acquisition-date amounts, along with recording goodwill and fair value adjustments.'},
      {question:'What is the additional depreciation expense recognized in the consolidated income statement?',type:'mcq',choices:['$0','$12,000','$120,000','$80,000'],correct:1,explanation:'The $12,000 annual amortization of the equipment fair value adjustment is recognized as additional depreciation expense in the consolidated statements. This reduces consolidated net income below Sub\'s reported net income.'}
    ]
  },
  {
    id:'case07',title:'Deferred Tax Analysis',section:'FAR',
    description:'XYZ Corp has pretax book income of $200,000. Differences: (1) Tax depreciation exceeds book depreciation by $30,000; (2) Municipal bond interest of $5,000 is included in book income; (3) Warranty expense of $15,000 is accrued for books but not yet deductible for tax. Tax rate: 21%.',
    steps:[
      {question:'What is XYZ\'s taxable income?',type:'mcq',choices:['$200,000','$180,000','$170,000','$215,000'],correct:1,explanation:'Taxable income = Book income ($200,000) − excess tax depreciation ($30,000) − municipal interest ($5,000) + warranty expense add-back ($15,000) = $180,000.'},
      {question:'The excess tax depreciation creates a:',type:'mcq',choices:['Deferred tax asset','Deferred tax liability','Permanent difference','No deferred item'],correct:1,explanation:'Excess tax depreciation is a temporary difference where book income > taxable income currently. This creates a DTL because more tax will be owed in the future when depreciation reverses.'},
      {question:'The municipal bond interest is a:',type:'mcq',choices:['Temporary difference creating a DTA','Temporary difference creating a DTL','Permanent difference','Uncertain tax position'],correct:2,explanation:'Municipal bond interest is permanently excluded from taxable income. It never reverses, so it creates no deferred tax item — only affects the effective tax rate.'},
      {question:'What is the total deferred tax effect for Year 1?',type:'mcq',choices:['Net DTL of $3,150','Net DTA of $3,150','Net DTL of $6,300','Net DTA of $6,300'],correct:0,explanation:'DTL from depreciation: $30,000 × 21% = $6,300. DTA from warranty: $15,000 × 21% = $3,150. Net DTL = $6,300 − $3,150 = $3,150. Municipal interest has no deferred effect.'}
    ]
  },
  {
    id:'case08',title:'Partnership Income Allocation',section:'FAR',
    description:'Partners A, B, and C have capital balances of $100,000, $80,000, and $60,000 respectively. The partnership agreement provides: salary allowances of $30,000 to A and $20,000 to B; 10% interest on capital balances; remainder split equally. Partnership net income is $110,000.',
    steps:[
      {question:'What are the total salary allowances?',type:'mcq',choices:['$30,000','$50,000','$20,000','$110,000'],correct:1,explanation:'Salary allowances: A = $30,000, B = $20,000. Total = $50,000. C receives no salary allowance per the agreement.'},
      {question:'What is the total interest on capital balances?',type:'mcq',choices:['$24,000','$10,000','$18,000','$6,000'],correct:0,explanation:'Interest: A = $100,000 × 10% = $10,000; B = $80,000 × 10% = $8,000; C = $60,000 × 10% = $6,000. Total = $24,000.'},
      {question:'What is the remainder to be split equally?',type:'mcq',choices:['$110,000','$60,000','$36,000','$86,000'],correct:2,explanation:'Remainder = $110,000 − $50,000 (salaries) − $24,000 (interest) = $36,000. Split equally: $12,000 each.'},
      {question:'What is Partner A\'s total allocation?',type:'mcq',choices:['$30,000','$52,000','$40,000','$36,667'],correct:1,explanation:'A receives: Salary $30,000 + Interest $10,000 + Equal share $12,000 = $52,000.'}
    ]
  },
  {
    id:'case09',title:'Pension Expense Calculation',section:'FAR',
    description:'Beta Corp\'s defined benefit pension plan has: PBO at Jan 1: $400,000; Plan assets at Jan 1: $350,000; Service cost: $25,000; Discount rate: 6%; Expected return on plan assets: 7%; Prior service cost amortization: $3,000; No corridor amortization needed this year.',
    steps:[
      {question:'What is the interest cost component?',type:'mcq',choices:['$21,000','$24,000','$28,000','$25,000'],correct:1,explanation:'Interest cost = Beginning PBO × discount rate = $400,000 × 6% = $24,000.'},
      {question:'What is the expected return on plan assets?',type:'mcq',choices:['$21,000','$24,000','$24,500','$25,000'],correct:2,explanation:'Expected return = Beginning plan assets × expected rate = $350,000 × 7% = $24,500.'},
      {question:'What is total pension expense?',type:'mcq',choices:['$27,500','$52,000','$49,000','$25,000'],correct:0,explanation:'Pension expense = Service cost ($25,000) + Interest cost ($24,000) − Expected return ($24,500) + PSC amortization ($3,000) = $27,500.'},
      {question:'What is the funded status (net pension liability) at January 1?',type:'mcq',choices:['$50,000 underfunded','$50,000 overfunded','$400,000 liability','$350,000 asset'],correct:0,explanation:'Funded status = Plan assets ($350,000) − PBO ($400,000) = −$50,000. The plan is underfunded by $50,000, reported as a net pension liability.'}
    ]
  },
  {
    id:'case10',title:'Audit Report Determination',section:'AUD',
    description:'You are completing the audit of Omega Corp. During your work, you discovered the following: (1) Inventory is overstated by $2 million due to an error, which is material to the financial statements but limited to inventory and COGS. (2) Management refuses to correct the error. (3) The company has adequate disclosures for all other matters.',
    steps:[
      {question:'The $2 million inventory overstatement is:',type:'mcq',choices:['Immaterial','Material but not pervasive','Material and pervasive','A scope limitation'],correct:1,explanation:'The misstatement is material (significant amount) but is confined to inventory and COGS — it does not affect the financial statements as a whole (not pervasive).'},
      {question:'Since management refuses to correct the error, the appropriate opinion is:',type:'mcq',choices:['Unmodified','Qualified','Adverse','Disclaimer'],correct:1,explanation:'A material but not pervasive misstatement where management refuses to correct results in a qualified opinion ("except for" the inventory misstatement).'},
      {question:'If the misstatement were material AND pervasive (affecting multiple accounts throughout the statements), the opinion would be:',type:'mcq',choices:['Unmodified with emphasis paragraph','Qualified','Adverse','Disclaimer'],correct:2,explanation:'A material and pervasive misstatement requires an adverse opinion — the financial statements as a whole are not fairly presented.'},
      {question:'The qualified opinion would use which key phrase?',type:'mcq',choices:['"Subject to"','"Except for"','"We are unable to express"','"Fairly presented in all material respects"'],correct:1,explanation:'A qualified opinion states that the financial statements are fairly presented "except for" the effects of the specific matter described. This language signals a qualified (not clean) opinion.'}
    ]
  },
  {
    id:'case11',title:'Corporate Tax Computation',section:'REG',
    description:'MegaCorp (C corporation) has the following: Revenue $2,000,000; COGS $1,200,000; Operating expenses $400,000; Dividend income from 25%-owned corporation $100,000; Municipal bond interest $20,000; Charitable contributions $50,000; Federal income tax rate: 21%.',
    steps:[
      {question:'What is MegaCorp\'s gross income for tax purposes?',type:'mcq',choices:['$2,100,000','$500,000','$2,000,000','$2,120,000'],correct:0,explanation:'Tax gross income = Revenue ($2,000,000) − COGS ($1,200,000) + Dividend income ($100,000) + Municipal bond interest ($0, excluded) = $900,000. Wait — gross income includes all items: $2,000,000 − $1,200,000 + $100,000 = $900,000. Note: municipal interest is excluded. Actually, gross income means before deductions: $2,000,000 revenue + $100,000 dividends = $2,100,000 gross receipts (COGS is a deduction for arriving at gross income in the context of gross profit, but dividends are also gross income). For this question, total gross income = ($2,000,000 − $1,200,000) + $100,000 = $900,000.'},
      {question:'What is the charitable contribution limitation?',type:'mcq',choices:['$50,000','$90,000','There is no limitation','$45,000'],correct:0,explanation:'The 10% limitation is applied to taxable income before the charitable deduction and DRD: ($900,000 − $400,000) × 10% = $50,000. Since the contribution ($50,000) equals the limit, the full amount is deductible.'},
      {question:'What is the dividends-received deduction?',type:'mcq',choices:['$50,000','$65,000','$100,000','$80,000'],correct:1,explanation:'MegaCorp owns 25% of the paying corporation, so the DRD is 65%. DRD = $100,000 × 65% = $65,000.'},
      {question:'The municipal bond interest:',type:'mcq',choices:['Is included in taxable income','Is excluded from taxable income (permanent difference)','Creates a deferred tax liability','Is deductible as an expense'],correct:1,explanation:'Municipal bond interest is permanently excluded from federal taxable income. It is a permanent difference that reduces the effective tax rate but creates no deferred tax item.'}
    ]
  }
];

/* ---------- ACHIEVEMENTS ---------- */
const ACHIEVEMENTS = [
  {id:'ach01',title:'First Steps',description:'Complete your first quiz question correctly.',icon:'⭐',condition:'Answer 1 question correctly'},
  {id:'ach02',title:'Perfect Score',description:'Score 100% on any quiz of 10+ questions.',icon:'💯',condition:'Score 100% on a quiz with at least 10 questions'},
  {id:'ach03',title:'Bookkeeper',description:'Answer 25 questions correctly.',icon:'📖',condition:'Reach 25 total correct answers'},
  {id:'ach04',title:'Accountant',description:'Answer 100 questions correctly.',icon:'📊',condition:'Reach 100 total correct answers'},
  {id:'ach05',title:'CPA Candidate',description:'Answer 200 questions correctly.',icon:'🎓',condition:'Reach 200 total correct answers'},
  {id:'ach06',title:'Foundation Master',description:'Complete all Level 1 topics with a passing score.',icon:'🏗️',condition:'Pass all Level 1 topic quizzes'},
  {id:'ach07',title:'FAR Ready',description:'Complete all FAR section topics.',icon:'📋',condition:'Pass all FAR topic quizzes'},
  {id:'ach08',title:'AUD Ready',description:'Complete all Auditing topics.',icon:'🔍',condition:'Pass all AUD topic quizzes'},
  {id:'ach09',title:'REG Ready',description:'Complete all Regulation topics.',icon:'⚖️',condition:'Pass all REG topic quizzes'},
  {id:'ach10',title:'BEC Ready',description:'Complete all Business Environment topics.',icon:'💼',condition:'Pass all BEC topic quizzes'},
  {id:'ach11',title:'Journal Entry Pro',description:'Complete 10 journal entry simulations correctly.',icon:'✏️',condition:'Complete 10 simulations with all entries correct'},
  {id:'ach12',title:'Flashcard Scholar',description:'Review all 80+ flashcards.',icon:'🃏',condition:'View every flashcard at least once'},
  {id:'ach13',title:'Speed Demon',description:'Answer 10 questions correctly in under 2 minutes.',icon:'⚡',condition:'10 correct answers within 120 seconds'},
  {id:'ach14',title:'Streak Master',description:'Maintain a 10-question correct answer streak.',icon:'🔥',condition:'Answer 10 consecutive questions correctly'},
  {id:'ach15',title:'Case Solver',description:'Complete 5 case studies with all steps correct.',icon:'🧩',condition:'Complete 5 case studies perfectly'},
  {id:'ach16',title:'Debit Credit Guru',description:'Classify 20 debit/credit scenarios correctly.',icon:'⚙️',condition:'Get 20 DC classifications correct'},
  {id:'ach17',title:'Bank Rec Master',description:'Complete 5 bank reconciliations correctly.',icon:'🏦',condition:'Complete 5 bank reconciliation exercises'},
  {id:'ach18',title:'Adjustment Ace',description:'Complete all adjusting entry scenarios.',icon:'🔧',condition:'Complete all adjusting entry scenarios correctly'},
  {id:'ach19',title:'Matching Maven',description:'Complete all matching exercises with no errors.',icon:'🧠',condition:'Finish all matching sets perfectly'},
  {id:'ach20',title:'CPA Master',description:'Complete all levels and all study modes.',icon:'🏆',condition:'Achieve mastery across all 8 levels and all activity types'}
];
